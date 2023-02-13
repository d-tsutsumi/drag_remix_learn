import type { FC } from "react";
import { useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import type { MetaFunction, LinksFunction } from "@remix-run/node"; // Depends on the runtime you choose

import { ServerStyleContext, ClientStyleContext } from "./context/chakra";
import { UIProvider } from "./context/ui/uiProvider";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export let links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    },
  ];
};

interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const Document = withEmotionCache(
  ({ children, title = "drag remix" }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);
    useEffect(() => {
      emotionCache.sheet.container = document.head;
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      clientStyleData?.reset();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <html lang="ja">
        <head>
          <Meta />
          <title>{title}</title>
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
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
      <ChakraProvider>
        <UIProvider>
          <Outlet />
        </UIProvider>
      </ChakraProvider>
    </Document>
  );
}

/**
 *
 *  catch boundary (fetch)
 */
export const CathchBoundary = () => {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider>
        <Box>
          <Heading as="h1" bg="purple.400">
            Error catch : {caught.status} : {caught.statusText}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  );
};

/**
 * error boundary
 */

type Props = {
  error: Error;
};
export const ErrorBoundary: FC<Props> = ({ error }) => {
  return (
    <Document title="Error!">
      <ChakraProvider>
        <Box>
          <Heading as="h1" bg="blue.500">
            [ErrorBoundary]: There was an error: {error.message}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  );
};
