import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'
import { Flex } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
    >
      <Header />
      <Banner />
    </Flex>
  )
}
