import { DefaultLayout } from "~/features/Layouts";
import { Outlet } from "@remix-run/react";

export default function Task() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}
