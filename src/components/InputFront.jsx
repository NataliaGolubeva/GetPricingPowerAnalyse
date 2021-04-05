import InitialInput from './Input';
import React, { useState } from 'react';
import { VStack, Button, Heading } from '@chakra-ui/react';

function InputFront() {
  const [volume, setVolume] = useState(0);
  const [price, setPrice] = useState(0);
  const [costs, setCosts] = useState(0);
  const [cogs, setCogs] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [multiply, setMultiply] = useState(0);

  const [total, setTotal] = useState(volume * price);

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!volume) {
      setVolume('Please enter a volume of products sold');
      return;
    }
    if (!price) {
      setPrice('Please enter an average price');
      return;
    }
    if (!costs) {
      setCosts('Please enter fixed costs');
      return;
    }
    if (!cogs) {
      setCogs('Please enter COGS');
      return;
    }
    if (!taxes) {
      setTaxes('Please enter taxes');
      return;
    }

    setVolume('');
    setPrice('');
    setCosts('');
    setCogs('');
    setTaxes('');
    setMultiply('');
  }
  function multi() {
    setTotal(volume * price);
  }

  return (
    <VStack className="inputForm">
      <form onSubmit={handleFormSubmit}>
        <Heading size="sm" my={3} textAlign="center">
          Your data
        </Heading>
        <label htmlFor="volume_sold">Volume:</label>
        <InitialInput
          className="volume_sold"
          value={volume}
          onChange={e => setVolume(parseInt(e.target.value, 10))}
        />
        <label htmlFor="average_price">Average price:</label>
        <InitialInput
          className="average_price"
          value={price}
          onChange={e => setPrice(parseInt(e.target.value, 10))}
        />
        <label htmlFor="fixed_costs">Fixed costs:</label>
        <InitialInput
          className="fixed_costs"
          value={costs}
          onChange={e => setCosts(parseInt(e.target.value, 10))}
        />

        <label htmlFor="cogs">Variable costs as %:</label>
        <InitialInput
          className="cogs"
          value={cogs}
          onChange={e => setCogs(parseInt(e.target.value, 10))}
        />

        <label htmlFor="taxes">Taxes in %:</label>
        <InitialInput
          className="taxes"
          value={taxes}
          onChange={e => setTaxes(parseInt(e.target.value, 10))}
        />

        <label htmlFor="multiply">Multiply (MA only):</label>
        <InitialInput
          className="multiply"
          value={multiply}
          onChange={e => setMultiply(parseInt(e.target.value, 10))}
        />

        <Button m={3} onClick={multi}>
          Apply
        </Button>
      </form>
    </VStack>
  );
}

export default InputFront;
