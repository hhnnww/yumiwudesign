/* eslint-disable @typescript-eslint/no-explicit-any */
import { withEmotionCache } from "@emotion/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useContext, useEffect, useRef } from "react";

import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";

import { CssBaseline, Experimental_CssVarsProvider } from "@mui/material";
import ClientStyleContext from "~/styles/client.context";
import ServerStyleContext from "~/styles/server.context";
import { theme } from "./theme/theme";

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);
    const reinjectStylesRef = useRef(true);

    // Only executed on client
    // When a top level ErrorBoundary or CatchBoundary are rendered,
    // the document head gets removed, so we have to create the style tags
    useEffect(() => {
      if (!reinjectStylesRef.current) {
        return;
      }
      // re-link sheet container
      emotionCache.sheet.container = document.head;

      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });

      // reset cache to re-apply global styles
      clientStyleData.reset();
      // ensure we only do this once per mount
      reinjectStylesRef.current = false;
    }, [clientStyleData, emotionCache.sheet]);

    return (
      <html lang="zh-hans">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,user-scalable=no"
          />

          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          <Experimental_CssVarsProvider
            theme={theme}
            defaultColorScheme={"dark"}
            defaultMode="dark"
          >
            <CssBaseline enableColorScheme />
            {children}
          </Experimental_CssVarsProvider>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <p>[ErrorBoundary]: There was an error: {error.message}</p>
    </Document>
  );
}
