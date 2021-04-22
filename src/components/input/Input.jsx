import React from "react";
import clsx from "clsx";
import {
  NumberInput,
  NumberInputField,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

function InputEuro(props) {
  const { className, type = "number", ...rest } = props;
  const classes = clsx("ui_numberfield", className);

  return (
    <InputGroup>
      <NumberInput min={0} ml="auto" mb={2}>
        <NumberInputField
          className={classes}
          type={type}
          {...rest}
          bg="white"
        />
        <InputRightElement
          pointerEvents="none"
          color="gray.400"
          fontSize="1.2em"
          children="€"
        />
      </NumberInput>
    </InputGroup>
  );
}

export default InputEuro;
