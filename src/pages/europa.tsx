import { CitiesInfo } from '@/components/CitiesInfo';
import { ContinentBanner } from '@/components/ContinentBanner';
import { ContinentInfo } from '@/components/ContinentInfo';
import { Header } from '@/components/Header';
import VerticalLineLeft from '@/components/VerticalLineLeft';
import VerticalLineRight from '@/components/VerticalLineRight';
import { Flex, Text } from '@chakra-ui/react';

const Europa = () => {
  return(
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
      alignItems="center"
    >
      <VerticalLineLeft />
      <VerticalLineRight />
      <Header />
      <ContinentBanner />
      <ContinentInfo />
      <CitiesInfo />
    </Flex>
  );
};

export default Europa;