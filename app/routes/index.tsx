import type { LoaderFunction } from "@remix-run/node";

export default function Index() {
  return <div>Test</div>;
}

export const loader: LoaderFunction = async ({ request }) => {
  return request.headers.get("cookie") ?? "";
};
