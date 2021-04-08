/**
 * @author psarando
 *
 * An App Launch Wizard for collecting and validating user input of app
 * parameters and resource requirements as an analysis submission.
 */
import React from "react";

import AppInfo from "./AppInfo";
import AppLaunchForm from "./AppLaunchForm";
import AppStepperFormSkeleton from "../AppStepperFormSkeleton";

import { DeprecatedParamTypes } from "components/models/AppParamTypes";

import { Divider, Paper } from "@material-ui/core";

const deprecatedParamTypes = Object.values(DeprecatedParamTypes);

function AppLaunchWizard(props) {
    const { baseId, app, appError, loading } = props;

    const hasDeprecatedParams = app?.groups?.find((group) =>
        group.parameters?.find((param) =>
            deprecatedParamTypes.includes(param.type)
        )
    );

    return (
        <Paper>
            <AppInfo
                baseId={baseId}
                loading={loading}
                loadingError={appError}
                app={app}
                hasDeprecatedParams={hasDeprecatedParams}
            />
            <Divider />
            {loading ? (
                <AppStepperFormSkeleton baseId={baseId} />
            ) : (
                app &&
                !(app.deleted || app.disabled || hasDeprecatedParams) && (
                    <AppLaunchForm {...props} />
                )
            )}
        </Paper>
    );
}

export default AppLaunchWizard;
