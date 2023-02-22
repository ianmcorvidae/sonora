import React from "react";
import TestRenderer from "react-test-renderer";

import { mockAxios } from "../../../stories/axiosMock";

import { DEWordCount } from "../../../stories/apps/launch/DEWordCount.stories";
import { AgaveWordCount } from "../../../stories/apps/launch/AgaveWordCount.stories";
import { DeprecatedParams } from "../../../stories/apps/launch/DeprecatedParamsApp.stories";
import { FlagParams } from "../../../stories/apps/launch/FlagParams.stories";
import { InputParams } from "../../../stories/apps/launch/InputParams.stories";
import { JupyterLabNoParams } from "../../../stories/apps/launch/JupyterLabNoParams.stories";
import { NumberParams } from "../../../stories/apps/launch/NumberParams.stories";
import { OutputParams } from "../../../stories/apps/launch/OutputParams.stories";
import { Pipeline } from "../../../stories/apps/launch/Pipeline.stories";
import { ReferenceGenomeParams } from "../../../stories/apps/launch/ReferenceGenomeParams.stories";
import { SelectParams } from "../../../stories/apps/launch/SelectParams.stories";
import { TextParams } from "../../../stories/apps/launch/TextParams.stories";
import { I18nProviderWrapper } from "__mocks__/i18nProviderWrapper";
import { BootstrapInfoProvider } from "contexts/bootstrap";
import { ConfigProvider } from "contexts/config";
import { UserProfileProvider } from "contexts/userProfile";
import { RQWrapper } from "../../__mocks__/RQWrapper";

beforeEach(() => {
    mockAxios.reset();
});

afterEach(() => {
    mockAxios.reset();
});

const TestProviderWrapper = ({ children }) => (
    <RQWrapper>
        <I18nProviderWrapper>
            <ConfigProvider>
                <UserProfileProvider>
                    <BootstrapInfoProvider>{children}</BootstrapInfoProvider>
                </UserProfileProvider>
            </ConfigProvider>
        </I18nProviderWrapper>
    </RQWrapper>
);

test("App Launch DEWordCount renders", () => {
    const component = TestRenderer.create(
        <TestProviderWrapper>
            <DEWordCount />
        </TestProviderWrapper>
    );
    component.unmount();
});

test("App Launch AgaveWordCount renders", () => {
    const component = TestRenderer.create(
        <TestProviderWrapper>
            <AgaveWordCount />
        </TestProviderWrapper>
    );
    component.unmount();
});

test("App Launch DeprecatedParams renders", () => {
    const component = TestRenderer.create(
        <TestProviderWrapper>
            <DeprecatedParams />
        </TestProviderWrapper>
    );
    component.unmount();
});

test("App Launch FlagParams renders", () => {
    const component = TestRenderer.create(
        <TestProviderWrapper>
            <FlagParams />
        </TestProviderWrapper>
    );
    component.unmount();
});

test("App Launch InputParams renders", () => {
    const component = TestRenderer.create(
        <TestProviderWrapper>
            <InputParams />
        </TestProviderWrapper>
    );
    component.unmount();
});

test("App Launch JupyterLabNoParams renders", () => {
    const component = TestRenderer.create(
        <TestProviderWrapper>
            <JupyterLabNoParams />
        </TestProviderWrapper>
    );
    component.unmount();
});

test("App Launch NumberParams renders", () => {
    const component = TestRenderer.create(
        <TestProviderWrapper>
            <NumberParams />
        </TestProviderWrapper>
    );
    component.unmount();
});

test("App Launch OutputParams renders", () => {
    const component = TestRenderer.create(
        <TestProviderWrapper>
            <OutputParams />
        </TestProviderWrapper>
    );
    component.unmount();
});

test("App Launch Pipeline renders", () => {
    const component = TestRenderer.create(
        <TestProviderWrapper>
            <Pipeline />
        </TestProviderWrapper>
    );
    component.unmount();
});

test("App Launch ReferenceGenomeParams renders", () => {
    const component = TestRenderer.create(
        <TestProviderWrapper>
            <ReferenceGenomeParams />
        </TestProviderWrapper>
    );
    component.unmount();
});

test("App Launch SelectParams renders", () => {
    const component = TestRenderer.create(
        <TestProviderWrapper>
            <SelectParams />
        </TestProviderWrapper>
    );
    component.unmount();
});

test("App Launch TextParams renders", () => {
    const component = TestRenderer.create(
        <TestProviderWrapper>
            <TextParams />
        </TestProviderWrapper>
    );
    component.unmount();
});
