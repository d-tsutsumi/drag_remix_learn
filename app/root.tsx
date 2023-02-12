import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import type { FC, ReactNode } from "react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

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

type AppDocumentType = {
  children: ReactNode;
  title?: string;
};

const Document: FC<AppDocumentType> = ({ children, title = "remix drag" }) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        {title}
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default function App() {
  return (
    <Document>
      <ChakraProvider>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}
