import { Banner } from '@/components/Banner';
import { Divider } from '@/components/Divider';
import { Header } from '@/components/Header';
import { MainText } from '@/components/MainText';
import { TravelTypes } from '@/components/TravelTypes';
import { Slider } from '@/components/Slider';
import { Flex } from '@chakra-ui/react';
import VerticalLineLeft from '@/components/VerticalLineLeft';
import VerticalLineRight from '@/components/VerticalLineRight';

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
    >
      <VerticalLineLeft />
      <VerticalLineRight />
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <MainText />
      {/* <Slider /> */}
    </Flex>
  )
}
