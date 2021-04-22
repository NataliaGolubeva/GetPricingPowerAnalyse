import React from "react";
import {
  Flex,
  NumberInput,
  NumberInputField,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
function AddSalesSlider(props) {
  const { salesValue, handleSalesOnChange } = props;
  return (
    <Flex>
      <NumberInput
        maxW="100px"
        mr="2rem"
        value={salesValue}
        onChange={handleSalesOnChange}
      >
        <NumberInputField />
      </NumberInput>
      <Slider
        flex="1"
        focusThumbOnChange={false}
        value={salesValue}
        onChange={handleSalesOnChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize="sm" boxSize="32px" children={salesValue} />
      </Slider>
    </Flex>
  );
}

export default AddSalesSlider;
