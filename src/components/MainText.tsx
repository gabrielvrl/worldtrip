import { Flex, Text } from "@chakra-ui/react";

export const MainText = () => {
  return(
    <Flex align="center" justify="center" flexDir="column" justifySelf="center" mb="52px">
      <Text color="gray.700" textAlign="center">
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>
    </Flex>
  );
}