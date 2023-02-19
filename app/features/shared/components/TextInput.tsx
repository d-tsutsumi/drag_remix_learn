import { FormLabel, Input } from "@chakra-ui/react";
import type { FC } from "react";

type Props = {
  label: string;
  value: string;
  onChangeHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const TextInput: FC<Props> = ({ label, value, onChangeHandle }) => (
  <>
    <FormLabel color={"blackAlpha.700"}>{label}</FormLabel>
    <Input type={"text"} value={value} onChange={(e) => onChangeHandle(e)} color={"blackAlpha.700"}/>
  </>
);
