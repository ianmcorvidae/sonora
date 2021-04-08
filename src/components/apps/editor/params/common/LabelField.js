/**
 * A form component for editing the App parameter `label` property.
 *
 * @author psarando
 */
import React from "react";

import { FastField } from "formik";

import { useTranslation } from "i18n";

import ids from "../../ids";

import { build as buildID, FormTextField } from "@cyverse-de/ui-lib";

export default function LabelField(props) {
    const { baseId, fieldName } = props;

    const { t } = useTranslation("app_editor");

    return (
        <FastField
            id={buildID(baseId, ids.PARAM_FIELDS.LABEL)}
            name={`${fieldName}.label`}
            label={t("parameterLabel")}
            component={FormTextField}
        />
    );
}
