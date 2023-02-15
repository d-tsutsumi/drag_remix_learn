import { Container } from "@chakra-ui/react";
import type { FC, ReactNode } from "react";
import { DefaultHeader } from "./DefaultHeader";

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <DefaultHeader />
      <main>
        <Container maxW="container.xl" centerContent>
          {children}
        </Container>
      </main>
    </>
  );
};
