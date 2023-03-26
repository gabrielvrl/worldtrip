import { Box, Flex } from "@chakra-ui/react";

export const Divider = () => {
  return (
    <Flex justifyContent="center" mb="52px">
      <Box w="90px" h="2px" bg="gray.700" />
    </Flex>
  );
}