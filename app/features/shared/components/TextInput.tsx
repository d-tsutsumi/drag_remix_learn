import { FormLabel, Input } from "@chakra-ui/react";
import type { FC } from "react";

type Props = {
  label: string;
  initialValue?: string;
  setState?: React.Dispatch<React.SetStateAction<string>>;
};

const createOnChangeHandle = (
  setState?: React.Dispatch<React.SetStateAction<string>>
) =>
  typeof setState === "function"
    ? (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
      }
    : undefined;

export const TextInput: FC<Props> = ({ label, initialValue, setState }) => {
  const onChangeHandle = createOnChangeHandle(setState);
  return (
    <>
      <FormLabel color={"blackAlpha.700"}>{label}</FormLabel>
      <Input
        name={label}
        type={"text"}
        color={"blackAlpha.700"}
        value={initialValue}
        onChange={onChangeHandle}
      />
    </>
  );
};
