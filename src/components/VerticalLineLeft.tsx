import { Box } from '@chakra-ui/react';

const VerticalLineLeft = () => {
  return (
    <Box
      h="100vh"
      borderLeft="1px solid"
      borderColor="yellow.500"
      position="fixed"
      left="100px"
      // m="100px"
      transform="translateX(-50%)"
    />
  );
};

export default VerticalLineLeft;