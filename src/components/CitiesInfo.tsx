import { Flex, Text, Image } from "@chakra-ui/react";

export const CitiesInfo = () => {
  return(
    <Flex
      w="100%"
      h="100%"
      flexDir="column"
      alignItems="flex-start"
      px="36"
      py="20"
    >
      <Text
        fontSize="36px"
        fontWeight="600"
        color="black"
        mt="20"
        mb="10"
      >
        Cidades +100
      </Text>

      <Flex>

        <Flex
          w={260}
          h={280}
          flexDir="column"
          border="1px solid"
          borderColor="yellow.500"
          borderRadius="4px"
          borderTop="none"
          mr="45px"
        >
          <Image 
            src="/london.svg"
          />

          <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex flexDir="column" mt="19px" mx="25px">
              <Text
                fontSize="20px"
                fontWeight="600"
                color="gray.700"
              >
                Londres
              </Text>

              <Text
                fontSize="16px"
                fontWeight="400"
                color="gray.600"
                mt="11px"
              >
                Reino Unido
              </Text>
            </Flex>

            <Flex
              justifyContent="center"
              alignItems="center"
              mr="25px"
            >
              <Image
                src="ru-flag.svg"
                w={30}
                h={30}
              />
            </Flex>
          </Flex>
        </Flex>

        <Flex
          w={260}
          h={280}
          flexDir="column"
          border="1px solid"
          borderColor="yellow.500"
          borderRadius="4px"
          borderTop="none"
          mr="45px"
        >
          <Image 
            src="/paris.svg"
          />

          <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex flexDir="column" mt="19px" mx="25px">
              <Text
                fontSize="20px"
                fontWeight="600"
                color="gray.700"
              >
                Paris
              </Text>

              <Text
                fontSize="16px"
                fontWeight="400"
                color="gray.600"
                mt="11px"
              >
                França
              </Text>
            </Flex>

            <Flex
              justifyContent="center"
              alignItems="center"
              mr="25px"
            >
              <Image
                src="fr-flag.svg"
                w={30}
                h={30}
              />
            </Flex>
          </Flex>
        </Flex>

        <Flex
          w={260}
          h={280}
          flexDir="column"
          border="1px solid"
          borderColor="yellow.500"
          borderRadius="4px"
          borderTop="none"
          mr="45px"
        >
          <Image 
            src="/rome.svg"
          />

          <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex flexDir="column" mt="19px" mx="25px">
              <Text
                fontSize="20px"
                fontWeight="600"
                color="gray.700"
              >
                Roma
              </Text>

              <Text
                fontSize="16px"
                fontWeight="400"
                color="gray.600"
                mt="11px"
              >
                Itália
              </Text>
            </Flex>

            <Flex
              justifyContent="center"
              alignItems="center"
              mr="25px"
            >
              <Image
                src="it-flag.svg"
                w={30}
                h={30}
              />
            </Flex>
          </Flex>
        </Flex>

        <Flex
          w={260}
          h={280}
          flexDir="column"
          border="1px solid"
          borderColor="yellow.500"
          borderRadius="4px"
          borderTop="none"
          mr="45px"
        >
          <Image 
            src="/prague.svg"
          />

          <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex flexDir="column" mt="19px" mx="25px">
              <Text
                fontSize="20px"
                fontWeight="600"
                color="gray.700"
              >
                Praga
              </Text>

              <Text
                fontSize="16px"
                fontWeight="400"
                color="gray.600"
                mt="11px"
              >
                República Tcheca
              </Text>
            </Flex>

            <Flex
              justifyContent="center"
              alignItems="center"
              mr="25px"
            >
              <Image
                src="rt-flag.svg"
                w={30}
                h={30}
              />
            </Flex>
          </Flex>
        </Flex>

        <Flex
          w={260}
          h={280}
          flexDir="column"
          border="1px solid"
          borderColor="yellow.500"
          borderRadius="4px"
          borderTop="none"
        >
          <Image 
            src="/amsterdam.svg"
          />

          <Flex
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex flexDir="column" mt="19px" mx="25px">
              <Text
                fontSize="20px"
                fontWeight="600"
                color="gray.700"
              >
                Amsterdã
              </Text>

              <Text
                fontSize="16px"
                fontWeight="400"
                color="gray.600"
                mt="11px"
              >
                Holanda
              </Text>
            </Flex>

            <Flex
              justifyContent="center"
              alignItems="center"
              mr="25px"
            >
              <Image
                src="hl-flag.svg"
                w={30}
                h={30}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      
    </Flex>
  );
}