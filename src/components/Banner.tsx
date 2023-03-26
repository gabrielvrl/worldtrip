import { Flex, Image, Text } from "@chakra-ui/react";

export const Banner = () => {
  return(
    <Flex 
      bg="url('/background.svg')"
      h={335}
      w="100%"
      backgroundSize="cover"
      backgroundPosition="center"
      flexDirection="row"
      py="20"
      px="36"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex flexDirection="column">
      <Text color="gray.50" fontWeight={500} fontSize={36}>
        5 Continentes, <br />
        infinitas possibilidades.
      </Text>
      <Text mt="5" >
        Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
      </Text>
      </Flex>

      <Image 
        src="/airplane.svg"
        position="relative"
        transform="rotate(3deg)"
        top="7vh"
      />

    </Flex>
  );
}