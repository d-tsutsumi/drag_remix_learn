import type { FC } from "react";

import { Button } from "@chakra-ui/react";

type Props = {
  text: string;
  type?: "button" | "submit" | "reset";
  width?: string;
  onClickHandle?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color?: string
};

export const SecondaryButton: FC<Props> = ({
  width = "md",
  type = "button",
  text,
  onClickHandle,
  color = "white"
}) => {
  return (
    <Button
      bg={"green.300"}
      w={width}
      onClick={onClickHandle}
      type={type}
      color={color}
    >
      {text}
    </Button>
  );
};
