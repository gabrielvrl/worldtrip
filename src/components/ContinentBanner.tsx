import { Flex, Image, Text } from "@chakra-ui/react";

export const ContinentBanner = () => {
  return(
    <Flex 
      bg="url('/europa-background.svg')"
      h={500}
      w="100%"
      backgroundSize="cover"
      backgroundPosition="center"
      flexDirection="row"
      py="20"
      px="36"
      justifyContent="flex-start"
      alignItems="flex-end"
    >
      <Text color="gray.50" fontWeight={600} fontSize="48px">Europa</Text>
    </Flex>
  );
}