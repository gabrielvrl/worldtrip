import { Flex, Image, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const Header = () => {
  const { asPath } = useRouter()
  const notHomePage = asPath !== '/'

  return(
    <Flex as="header" w="100%" alignItems="center" justifyContent="center" paddingY="10">
      {
        notHomePage && (
          <Link href="/">
            <Image
              src="/chevron-back.svg"
              alt="Voltar"
              width="32px"
              height="32px"
            />
          </Link>
        )
      }
      <Image
        src="/logo.svg"
        alt="Logo"
        width={180}
        height={37}
      />
    </Flex>
  );
}