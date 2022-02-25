import React from "react";
import { mockAxios } from "../axiosMock";
import ResourceUsageItem from "components/dashboard/dashboardItem/ResourceUsageItem";

export default {
    title: "Dashboard/ResourceUsage",
};

export const ResourceUsageTest = () => {
    mockAxios.onGet("/api/resource-usage/summary").reply(200, {
        cpu_usage: {
            id: "3ca5f6a3-722f-4135-8ee0-ee20b75bbb40",
            user_id: "626717be-575e-11ea-8038-008cfa5ae621",
            username: "sonora_test@iplantcollaborative.org",
            total: "168.4269529152434",
            effective_start: "2022-02-03T00:34:41.88739Z",
            effective_end: "2023-02-03T00:34:41.88739Z",
            last_modified: "2022-02-03T02:38:17.906799Z",
        },
        data_usage: {
            id: "123456789",
            user_id: "sriram",
            username: "sriram@iplantcollaborative.org",
            total: 161061273600,
            time: "2021-11-19T16:39:57-07:00",
            last_modified: "2021-11-19T16:39:57-07:00",
        },
        user_plan: {
            added_by: "",
            effective_end_date: "",
            effective_start_date: "2022-02-25T10:45:34.630382-07:00",
            id: "bbfbd108-9662-11ec-9bd7-62d47aced14b",
            last_modified_by: "",
            plan: {
                description: "Basic plan",
                id: "99e47c22-950a-11ec-84a4-406c8f3e9cbb",
                name: "Basic",
            },
            quotas: [],
            users: {
                id: "bbf25bb4-9662-11ec-9bd7-62d47aced14b",
                username: "wregglej",
            },
        },
    });
    return <ResourceUsageItem />;
};
