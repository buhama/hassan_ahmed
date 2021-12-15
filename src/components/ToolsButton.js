import { Button, useColorModeValue } from '@chakra-ui/react';

const ToolsButton = ({ name }) => {
  const buttonColor = useColorModeValue('purple', 'green');

  return (
    <Button
      size='sm'
      aria-label='Github Link'
      mr={2}
      variant='outline'
      colorScheme={buttonColor}
    >
      {name}
    </Button>
  );
};

export default ToolsButton;
