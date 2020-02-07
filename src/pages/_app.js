import React from "react";
import CyverseAppBar from "../components/appBar/CyVerseAppBar";
import theme from "../components/theme/default";
import { ThemeProvider } from "@material-ui/core/styles";

import withApolloClient from "../withApolloClient";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <CyverseAppBar>
                <Component {...pageProps} />
            </CyverseAppBar>
        </ThemeProvider>
    );
}

export default withApolloClient(MyApp);