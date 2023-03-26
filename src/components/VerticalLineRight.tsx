import { Box } from '@chakra-ui/react';

const VerticalLineRight = () => {
  return (
    <Box
      h="100vh"
      borderRight="1px solid"
      borderColor="yellow.500"
      position="fixed"
      right="100px"
      // m="100px"
      transform="translateX(-50%)"
    />
  );
};

export default VerticalLineRight;