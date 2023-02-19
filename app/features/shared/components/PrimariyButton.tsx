import type { FC } from "react";

import { Button } from "@chakra-ui/react";

type Props = {
  text: string;
  type?: "button" | "submit" | "reset";
  width?: string;
  onClickHandle?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const PrimariyButton: FC<Props> = ({
  width = "md",
  type = "button",
  text,
  onClickHandle,
}) => {
  return (
    <Button
      bg={"pink.300"}
      w={width}
      onClick={onClickHandle}
      type={type}
    >
      {text}
    </Button>
  );
};
