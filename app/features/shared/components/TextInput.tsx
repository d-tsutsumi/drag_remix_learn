import { FormLabel, Input } from "@chakra-ui/react";
import type { FC } from "react";

type Props = {
  label: string;
};
export const TextInput: FC<Props> = ({ label }) => (
  <>
    <FormLabel color={"blackAlpha.700"}>{label}</FormLabel>
    <Input name={label} type={"text"} color={"blackAlpha.700"} />
  </>
);
