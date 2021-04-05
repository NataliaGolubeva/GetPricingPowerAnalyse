import React from 'react';
import clsx from 'clsx';
import { NumberInput, NumberInputField } from '@chakra-ui/react';

function InitialInput(props) {
  const { className, type = 'number', ...rest } = props;
  const classes = clsx('ui_numberfield', className);

  return (
    <NumberInput min={0} ml="auto" mb={2}>
      <NumberInputField className={classes} type={type} {...rest} bg="white" />
    </NumberInput>
  );
}

export default InitialInput;
