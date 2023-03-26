import { Flex, Image, Text } from "@chakra-ui/react";

export const TravelTypes = () => {
  return(
      <Flex alignItems="center" justifyContent="space-around" mt="114px" mx="140px" mb="20">

        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Image src="/cocktail.svg" alt="Cocktail" w={85} h={85} />
          <Text color="gray.700" mt="6" fontWeight="600" fontSize="24">vida noturna</Text>
        </Flex>

        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Image src="/surf.svg" alt="Surf" w={85} h={85} />
          <Text color="gray.700" mt="6" fontWeight="600" fontSize="24">praia</Text>
        </Flex>


        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Image src="/building.svg" alt="Building" w={85} h={85} />
          <Text color="gray.700" mt="6" fontWeight="600" fontSize="24">moderno</Text>
        </Flex>


        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Image src="/museum.svg" alt="Musuem" w={85} h={85} />
          <Text color="gray.700" mt="6" fontWeight="600" fontSize="24">clássico</Text>
        </Flex>

        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <Image src="/earth.svg" alt="Earth" w={85} h={85} />
          <Text color="gray.700" mt="6" fontWeight="600" fontSize="24">e mais...</Text>
        </Flex>
        
      </Flex>
  );
};