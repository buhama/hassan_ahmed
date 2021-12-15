import { Button } from '@chakra-ui/react';

const ToolsButton = ({ name }) => {
  return (
    <Button size='sm' aria-label='Github Link' mr={2}>
      {name}
    </Button>
  );
};

export default ToolsButton;
