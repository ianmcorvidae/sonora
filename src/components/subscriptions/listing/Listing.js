/**
 * @author sboleyn
 *
 * A component intended to be the parent to the subscriptions table view
 *
 */

import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import TableView from "./TableView";
import SubscriptionToolbar from "../toolbar/Toolbar";
import Drawer from "../details/Drawer";
import DEPagination from "components/utils/DEPagination";

import withErrorAnnouncer from "../../error/withErrorAnnouncer";
import {
    getSubscriptions,
    SUBSCRIPTIONS_QUERY_KEY,
} from "serviceFacades/subscriptions";
import constants from "../../../constants";

function Listing(props) {
    const {
        baseId,
        isAdminView,
        onRouteToListing,
        order,
        orderBy,
        page,
        rowsPerPage,
        searchTerm,
    } = props;
    const [data, setData] = useState(null);
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [selected, setSelected] = useState([]);
    const [selectedSubscription, setSelectedSubscription] = useState(null);

    useEffect(() => {
        // Reset selected whenever the data set changes,
        // which can be due to the browser's back or forward navigation,
        // in addition to the user changing categories or pages.
        setSelected([]);
    }, [data]);

    useEffect(() => {
        if (data?.subscriptions) {
            const selectedId = selected[0];
            setSelectedSubscription(
                data.subscriptions.find(
                    (subscription) => subscription.id === selectedId
                )
            );
        } else {
            setSelectedSubscription(null);
        }
    }, [data, selected]);

    const { isFetching, error } = useQuery({
        queryKey: [
            SUBSCRIPTIONS_QUERY_KEY,
            {
                order,
                orderBy,
                page,
                rowsPerPage,
                searchTerm,
                isAdminView,
            },
        ],
        queryFn: () =>
            getSubscriptions({ searchTerm, order, orderBy, page, rowsPerPage }),
        enabled: true,
        onSuccess: (resp) => {
            setData(resp.result);
        },
    });

    const handleChangePage = (_, newPage) => {
        onRouteToListing &&
            onRouteToListing(
                order,
                orderBy,
                newPage - 1,
                rowsPerPage,
                searchTerm
            );
    };

    const handleChangeRowsPerPage = (newPageSize) => {
        onRouteToListing &&
            onRouteToListing(
                order,
                orderBy,
                0,
                parseInt(newPageSize, 10),
                searchTerm
            );
    };

    const handleClick = (_, id) => {
        setSelected([id]); // This is the id of the subscription
    };

    const handleRequestSort = (_, field) => {
        const isAsc = orderBy === field && order === constants.SORT_ASCENDING;
        onRouteToListing &&
            onRouteToListing(
                isAsc ? constants.SORT_DESCENDING : constants.SORT_ASCENDING,
                field,
                page,
                rowsPerPage,
                searchTerm
            );
    };

    const handleSearch = (term) => {
        setSelected([]);
        onRouteToListing &&
            onRouteToListing(order, orderBy, 0, rowsPerPage, term);
    };

    const onCloseEdit = () => {
        setEditDialogOpen(false);
    };
    const onDetailsSelected = () => {
        setDetailsOpen(true);
    };
    const onEditSelected = () => {
        setEditDialogOpen(true);
    };

    return (
        <>
            <SubscriptionToolbar
                baseId={baseId}
                handleSearch={handleSearch}
                isAdminView={isAdminView}
                searchTerm={searchTerm}
            />
            <TableView
                baseId={baseId}
                editDialogOpen={editDialogOpen}
                error={error}
                handleClick={handleClick}
                handleRequestSort={handleRequestSort}
                isAdminView={isAdminView}
                listing={data}
                loading={isFetching}
                onCloseEdit={onCloseEdit}
                onDetailsSelected={onDetailsSelected}
                onEditSelected={onEditSelected}
                order={order}
                orderBy={orderBy}
                selected={selected}
                selectedSubscription={selectedSubscription}
            />
            {detailsOpen && (
                <Drawer
                    anchor="right"
                    baseId={baseId}
                    onClose={() => setDetailsOpen(false)}
                    open={detailsOpen}
                    selectedSubscription={selectedSubscription}
                />
            )}
            {data && data.total > 0 && (
                <DEPagination
                    baseId={baseId}
                    onChange={handleChangePage}
                    onPageSizeChange={handleChangeRowsPerPage}
                    page={page + 1}
                    pageSize={rowsPerPage}
                    totalPages={Math.ceil(data.total / rowsPerPage)}
                />
            )}
        </>
    );
}

export default withErrorAnnouncer(Listing);