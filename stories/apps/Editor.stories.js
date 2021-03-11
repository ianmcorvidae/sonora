import React from "react";

import { AppDescriptionMock } from "./AppDescriptionMocks";

import { initMockAxiosFileFolderSelector } from "../data/DataMocks";
import { initMockAxiosReferenceGenomeListing } from "../apps/launch/data/ReferenceGenomeListing";

import AppEditor from "components/apps/editor";
import ids from "components/apps/editor/ids";

initMockAxiosFileFolderSelector();
initMockAxiosReferenceGenomeListing();

export const KitchenSinkEditor = (props) => {
    return (
        <AppEditor
            baseId={ids.APP_EDITOR_VIEW}
            appDescription={AppDescriptionMock}
        />
    );
};

export default { title: "Apps / Editor" };
