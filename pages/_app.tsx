import React, { ComponentType } from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createEmotionCache, theme } from "../public/material";
import { Provider } from "react-redux";
import MainLayout from "../layout";
import store from "../redux";
import "../styles/globals.scss";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: Element) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout {...pageProps}>
            {getLayout(<Component {...pageProps} />)}
          </MainLayout>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
};

type MyAppProps = AppProps & {
  Component: Element & { getLayout: CallableFunction; layout?: ComponentType };
  emotionCache: EmotionCache;
  pageProps: Record<string, unknown>;
};

export default MyApp;
