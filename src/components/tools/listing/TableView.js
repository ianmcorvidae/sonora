import ids from "../ids";
import React from "react";

import { useTranslation } from "i18n";

import TableLoading from "../../utils/TableLoading";
import { DERow } from "components/utils/DERow";
import WrappedErrorHandler from "components/utils/error/WrappedErrorHandler";

import {
    build,
    DECheckbox,
    EmptyTable,
    EnhancedTableHead,
} from "@cyverse-de/ui-lib";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    Typography,
} from "@material-ui/core";

const buildId = build;

/**
 * Returns localized column header information for the tool listing table.
 * @param {Object} t - the internationalization function
 */
const columnData = (t, isAdmin) => {
    const cols = [
        {
            id: ids.NAME,
            name: t("name"),
            enableSorting: true,
            key: "name",
        },
        {
            id: ids.IMAGE_NAME,
            name: t("imageName"),
            enableSorting: false,
            key: "image-name",
        },
        {
            id: ids.TAG,
            name: t("tag"),
            enableSorting: false,
            key: "tag",
        },
    ];
    if (isAdmin) {
        cols.push(
            {
                id: ids.EDIT_TOOL_DLG.DESCRIPTION,
                name: t("descriptionLabel"),
                enableSorting: false,
                key: "description",
            },
            {
                id: ids.EDIT_TOOL_DLG.LOCATION,
                name: t("location"),
                enableSorting: true,
                key: "location",
            },
            {
                id: ids.EDIT_TOOL_DLG.TYPE,
                name: t("type"),
                enableSorting: false,
                key: "type",
            },
            {
                id: ids.EDIT_TOOL_DLG.ATTRIBUTION,
                name: t("attribution"),
                enableSorting: true,
                key: "attribution",
            },
            {
                id: ids.EDIT_TOOL_DLG.VERSION,
                name: t("versionLbl"),
                enableSorting: true,
                key: "version",
            }
        );
    } else {
        cols.push({
            id: ids.STATUS,
            name: t("status"),
            enableSorting: false,
            key: "status",
        });
    }
    return cols;
};

/**
 * Returns the loading mask to display when we're waiting for a response from the API.
 * @param {Object} props - the component properties
 */
function LoadingMask(props) {
    const { columns, tableId } = props;
    return (
        <TableLoading
            numColumns={columns.length + 1}
            numRows={25}
            baseId={tableId}
        />
    );
}

/**
 * Returns the table contents to return when the API returns an empty result set.
 * @param {Object} props - the component properties
 */
function NoTools(props) {
    const { columns, t } = props;
    return (
        <EmptyTable message={t("noTools")} numColumns={columns.length + 1} />
    );
}

/**
 * Returns the table contents to display when the API call returns successfully.
 * @param {Object} props - the component properties
 */
function ToolListing(props) {
    const { handleClick, t, selected, tableId, tools, isAdmin } = props;
    return tools.map((tool, index) => {
        const id = tool.id;
        const rowId = buildId(tableId, id);
        const handleRowClick = (event) => handleClick(event, id, index);
        const isSelected = selected.includes(id);
        return (
            <DERow
                aria-checked={isSelected}
                hover
                id={rowId}
                key={id}
                onClick={handleRowClick}
                role="checkbox"
                selected={isSelected}
                tabIndex={-1}
            >
                <TableCell padding="checkbox">
                    <DECheckbox
                        checked={isSelected}
                        id={buildId(rowId, ids.CHECKBOX)}
                        tabIndex={0}
                        inputProps={{
                            "aria-label": t("ariaCheckbox", {
                                label: tool.name,
                            }),
                        }}
                    />
                </TableCell>
                <TableCell>
                    <Typography>{tool.name}</Typography>
                </TableCell>
                <TableCell>
                    <Typography>{tool.container.image.name}</Typography>
                </TableCell>
                <TableCell>
                    <Typography>{tool.container.image.tag}</Typography>
                </TableCell>
                {!isAdmin && (
                    <TableCell>
                        <Typography>
                            {tool.is_public ? t("public") : tool.permission}
                        </Typography>
                    </TableCell>
                )}
                {isAdmin && [
                    <TableCell>
                        <Typography>{tool.description}</Typography>
                    </TableCell>,
                    <TableCell>
                        <Typography>{tool.location}</Typography>
                    </TableCell>,
                    <TableCell>
                        <Typography>{tool.type}</Typography>
                    </TableCell>,
                    <TableCell>
                        <Typography>{tool.attribution}</Typography>
                    </TableCell>,
                    <TableCell>
                        <Typography>{tool.version}</Typography>
                    </TableCell>,
                ]}
            </DERow>
        );
    });
}

/**
 * Returns the tool listing table body.
 * @param {Object} props - the component properties
 */
function ToolListingTableBody(props) {
    const {
        columns,
        handleClick,
        t,
        selected,
        tableId,
        tools,
        isAdmin,
    } = props;
    return (
        <TableBody>
            {!tools?.length ? (
                <NoTools columns={columns} t={t} />
            ) : (
                <ToolListing
                    handleClick={handleClick}
                    t={t}
                    selected={selected}
                    tableId={tableId}
                    tools={tools}
                    isAdmin={isAdmin}
                />
            )}
        </TableBody>
    );
}

/**
 * Returns the tool listing table view.
 * @param {Object} props - the component properties
 */
function TableView(props) {
    const {
        baseId,
        error,
        handleClick,
        handleRequestSort,
        handleSelectAllClick,
        listing,
        loading,
        order,
        orderBy,
        selected,
        isAdmin,
    } = props;
    const tableId = buildId(baseId, ids.LISTING_TABLE);
    const { t } = useTranslation("tools");

    const columns = columnData(t, isAdmin);

    const tools = listing?.tools;

    if (error) {
        return <WrappedErrorHandler errorObject={error} baseId={tableId} />;
    }

    // Build and return the table.
    return (
        <TableContainer component={Paper} style={{ overflow: "auto" }}>
            <Table
                id={tableId}
                stickyHeader={true}
                size="small"
                aria-label={t("ariaTableListing")}
            >
                <EnhancedTableHead
                    baseId={baseId}
                    columnData={columns}
                    numSelected={selected.length}
                    onRequestSort={handleRequestSort}
                    onSelectAllClick={handleSelectAllClick}
                    order={order}
                    orderBy={orderBy}
                    rowsInPage={listing?.tools?.length || 0}
                    selectable={true}
                />
                {loading ? (
                    <LoadingMask columns={columns} tableId={tableId} />
                ) : (
                    <ToolListingTableBody
                        columns={columns}
                        handleClick={handleClick}
                        t={t}
                        selected={selected}
                        tableId={tableId}
                        tools={tools}
                        isAdmin={isAdmin}
                    />
                )}
            </Table>
        </TableContainer>
    );
}

export default TableView;
