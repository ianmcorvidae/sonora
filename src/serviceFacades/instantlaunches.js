import callApi from "../common/callApi";

export const DEFAULTS_MAPPING_QUERY_KEY = "fetchDefaultsMappings";

export const getDefaultsMapping = () =>
    callApi({
        endpoint: `/api/instantlaunches/mappings/defaults/latest`,
        method: "GET",
    });

export const addInstantLaunch = (id) => {
    const bodyObj = {
        quick_launch_id: id,
    };

    callApi({
        endpoint: `/api/instantlaunches`,
        method: "PUT",
        body: bodyObj,
    });
};

export const listInstantLaunches = (id) =>
    callApi({
        endpoint: `/api/instantlaunches`,
        method: "GET",
    });

export const deleteInstantLaunch = (id) =>
    callApi({
        endpoint: `/api/instantlaunches/${id}`,
        method: "DELETE",
    });

export const listFullInstantLaunches = (id) =>
    callApi({
        endpoint: `/api/instantlaunches/full`,
        method: "GET",
    });

export const getInstantLaunchMetadata = (id) =>
    callApi({
        endpoint: `/api/instantlaunches/${id}/metadata`,
        method: "GET",
    });

export const upsertInstantLaunchMetadata = (id, metadata) =>
    callApi({
        endpoint: `/api/instantlaunches/${id}/metadata`,
        method: "POST",
        body: metadata,
    });

export const resetInstantLaunchMetadata = (id, metadata) =>
    callApi({
        endpoint: `/api/instantlaunches/${id}/metadata`,
        method: "PUT",
        body: metadata,
    });

export const listInstantLaunchesByMetadata = (key, queryKey, queryValue) =>
    callApi({
        endpoint: `/api/instantlaunches/metadata/full`,
        method: "GET",
        params: { attribute: queryKey, value: queryValue, unit: "" },
    });
