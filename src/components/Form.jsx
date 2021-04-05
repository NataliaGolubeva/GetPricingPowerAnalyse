import React, { useState } from 'react';
import { Flex, Button, Input } from '@chakra-ui/react';

function Form({ addTodo }) {
  const [field, setField] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addTodo(field);
      }}
    >
      <Flex>
        <Input
          placeholder="Add number"
          value={field}
          onChange={e => setField(e.target.value)}
        />
        <Button type="submit">Submit</Button>
        <Button>Reset</Button>
      </Flex>
    </form>
  );
}

export default Form;
