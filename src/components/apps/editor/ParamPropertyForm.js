/**
 * A form component for editing App parameter properties.
 *
 * @author psarando
 */
import React from "react";

import { useTranslation } from "i18n";

import ids from "./ids";

import CheckboxPropertyFields from "./params/CheckboxPropertyFields";
import DoublePropertyFields from "./params/DoublePropertyFields";
import EnvironmentVariablePropertyFields from "./params/EnvironmentVariablePropertyFields";
import FileInputPropertyFields from "./params/FileInputPropertyFields";
import FileOutputPropertyFields from "./params/FileOutputPropertyFields";
import FolderInputPropertyFields from "./params/FolderInputPropertyFields";
import FolderOutputPropertyFields from "./params/FolderOutputPropertyFields";
import InfoTextField from "./params/InfoTextField";
import IntegerPropertyFields from "./params/IntegerPropertyFields";
import MultiFileOutputPropertyFields from "./params/MultiFileOutputPropertyFields";
import MultiFileSelectorPropertyFields from "./params/MultiFileSelectorPropertyFields";
import MultiLineTextPropertyFields from "./params/MultiLineTextPropertyFields";
import ReferenceGenomePropertyFields from "./params/ReferenceGenomePropertyFields";
import SelectionPropertyFields from "./params/SelectionPropertyFields";
import TextPropertyFields from "./params/TextPropertyFields";

import AppParamTypes from "components/models/AppParamTypes";
import DEDialog from "components/utils/DEDialog";

import { build as buildID } from "@cyverse-de/ui-lib";

import { Button } from "@material-ui/core";

function PropertyFormFields(props) {
    const { baseId, fieldName, param } = props;

    const baseParamId = buildID(baseId, fieldName);

    switch (param?.type) {
        case AppParamTypes.INFO:
            return <InfoTextField baseId={baseParamId} fieldName={fieldName} />;

        case AppParamTypes.MULTILINE_TEXT:
            return (
                <MultiLineTextPropertyFields
                    baseId={baseParamId}
                    fieldName={fieldName}
                />
            );

        case AppParamTypes.INTEGER:
            return (
                <IntegerPropertyFields
                    baseId={baseParamId}
                    fieldName={fieldName}
                    param={param}
                />
            );

        case AppParamTypes.DOUBLE:
            return (
                <DoublePropertyFields
                    baseId={baseParamId}
                    fieldName={fieldName}
                    param={param}
                />
            );

        case AppParamTypes.FLAG:
            return (
                <CheckboxPropertyFields
                    baseId={baseParamId}
                    fieldName={fieldName}
                />
            );

        case AppParamTypes.ENV_VAR:
            return (
                <EnvironmentVariablePropertyFields
                    baseId={baseParamId}
                    fieldName={fieldName}
                />
            );

        case AppParamTypes.TEXT_SELECTION:
        case AppParamTypes.INTEGER_SELECTION:
        case AppParamTypes.DOUBLE_SELECTION:
            return (
                <SelectionPropertyFields
                    baseId={baseId}
                    fieldName={fieldName}
                    paramArguments={param.arguments}
                />
            );

        case AppParamTypes.FILE_INPUT:
            return (
                <FileInputPropertyFields
                    baseId={baseParamId}
                    fieldName={fieldName}
                />
            );

        case AppParamTypes.FOLDER_INPUT:
            return (
                <FolderInputPropertyFields
                    baseId={baseParamId}
                    fieldName={fieldName}
                />
            );

        case AppParamTypes.MULTIFILE_SELECTOR:
            return (
                <MultiFileSelectorPropertyFields
                    baseId={baseParamId}
                    fieldName={fieldName}
                />
            );

        case AppParamTypes.FILE_OUTPUT:
            return (
                <FileOutputPropertyFields
                    baseId={baseParamId}
                    fieldName={fieldName}
                />
            );

        case AppParamTypes.FOLDER_OUTPUT:
            return (
                <FolderOutputPropertyFields
                    baseId={baseParamId}
                    fieldName={fieldName}
                />
            );

        case AppParamTypes.MULTIFILE_OUTPUT:
            return (
                <MultiFileOutputPropertyFields
                    baseId={baseParamId}
                    fieldName={fieldName}
                />
            );

        case AppParamTypes.REFERENCE_ANNOTATION:
        case AppParamTypes.REFERENCE_GENOME:
        case AppParamTypes.REFERENCE_SEQUENCE:
            return (
                <ReferenceGenomePropertyFields
                    baseId={baseParamId}
                    fieldName={fieldName}
                    param={param}
                />
            );

        default:
            return (
                <TextPropertyFields
                    baseId={baseParamId}
                    fieldName={fieldName}
                    param={param}
                />
            );
    }
}

function ParamPropertyForm(props) {
    const { baseId, fieldName, open, onClose, param } = props;

    const { t } = useTranslation(["app_editor", "app_param_types", "common"]);

    return (
        <DEDialog
            baseId={baseId}
            open={open}
            title={t("editParameter", {
                type: t(`app_param_types:${param?.type}`),
            })}
            onClose={onClose}
            disableBackdropClick
            disableEscapeKeyDown
            actions={
                <Button
                    id={buildID(baseId, ids.BUTTONS.CLOSE_BTN)}
                    color="primary"
                    variant="contained"
                    onClick={onClose}
                >
                    {t("common:done")}
                </Button>
            }
        >
            {open && (
                <PropertyFormFields
                    baseId={baseId}
                    fieldName={fieldName}
                    param={param}
                />
            )}
        </DEDialog>
    );
}

export default ParamPropertyForm;
