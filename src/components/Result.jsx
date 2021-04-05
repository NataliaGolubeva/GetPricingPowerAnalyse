import React from 'react';
import { List, Flex, ListItem, Text, IconButton } from '@chakra-ui/react';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';
function Result({ todos }) {
  return (
    <List>
      {todos.map(todo => (
        <ListItem key={todo.id}>
          <Flex align="center">
            <Text mr="auto">
              {todo.todo} (id: {todo.id}) {todo.isChecked}{' '}
            </Text>
            <IconButton icon={<GrEdit />} />
            <IconButton icon={<RiDeleteBinLine />} />
          </Flex>
        </ListItem>
      ))}
    </List>
  );
}

export default Result;
