import { Flex, Image } from '@chakra-ui/react';

export const Header = () => {
  return(
    <Flex as="header" w="100%" alignItems="center" justifyContent="center" paddingY="10">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={180}
        height={37}
      />
    </Flex>
  );
}