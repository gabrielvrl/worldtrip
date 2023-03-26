import { Banner } from '@/components/Banner';
import { Divider } from '@/components/Divider';
import { Header } from '@/components/Header';
import { MainText } from '@/components/MainText';
import { TravelTypes } from '@/components/TravelTypes';
import { Slider } from '@/components/Slider';
import { Flex } from '@chakra-ui/react';

const continents = [
    {
      "id": 1,
      "name": "Europa",
      "description": "O continente mais antigo",
      "text": "Europa é um dos seis continentes do mundo, sendo em extensão territorial o segundo menor. O continente é banhado, ao norte, pelo Mar Ártico; ao sul, pelo Mar Mediterrâneo e o Mar Negro; a oeste, pelo Oceano Atlântico; e, a leste, pelo Mar Cáspio. A Europa é também conhecida como o “Velho Mundo” e considerada o berço da cultura ocidental.",
      "numberOfCountries": 50,
      "numberOfLanguages": 24,
      "carrouselImage": "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
      "jumbotronImage": "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=779&q=80",
      "countries": [
        {
          "id": 1,
          "name": "Reino Unido",
          "flag": "https://www.flaticon.com/svg/vstatic/svg/197/197374.svg?token=exp=1617570536~hmac=b58a488269cd97dafcfb394893bb5feb",
          "capital": "Londres",
          "image": "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80"
        },
        {
          "id": 2,
          "name": "França",
          "flag": "https://www.flaticon.com/svg/vstatic/svg/197/197560.svg?token=exp=1617570868~hmac=cda5987318239ed584162b9ba936bdb6",
          "capital": "Paris",
          "image": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=707&q=80"
        },
        {
          "id": 3,
          "name": "Itália",
          "flag": "https://www.flaticon.com/svg/vstatic/svg/197/197626.svg?token=exp=1617570899~hmac=4fe7d5d4a4a40e6bee3c379987b1ebba",
          "capital": "Roma",
          "image": "https://images.unsplash.com/photo-1597177724434-245eb4d730e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        },
        {
          "id": 4,
          "name": "República Tcheca",
          "flag": "https://www.flaticon.com/svg/vstatic/svg/197/197576.svg?token=exp=1617570956~hmac=aa8c2903c5d99b5b5dfbe7273015922e",
          "capital": "Praga",
          "image": "https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        },
        {
          "id": 5,
          "name": "Holanda",
          "flag": "https://www.flaticon.com/svg/vstatic/svg/323/323275.svg?token=exp=1617571078~hmac=0183208ca3bd8f4615bb9878e439c2a7",
          "capital": "Amsterdã",
          "image": "https://images.unsplash.com/photo-1594759876531-d12b5e9e2453?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
        },
        {
          "id": 5,
          "name": "Portugal",
          "flag": "https://www.flaticon.com/svg/vstatic/svg/3909/3909361.svg?token=exp=1617571144~hmac=8b5404e42043948bfd043e8f18c19bb9",
          "capital": "Lisboa",
          "image": "https://images.unsplash.com/photo-1580323956656-26bbb1206e34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=865&q=80"
        }
      ]
    },
    {
      "id": 2,
      "name": "África",
      "description": "Conheça um continente cheio de cultura",
      "text": "África é um dos seis continentes do mundo, sendo o terceiro maior em extensão territorial. O território estende-se por mais de 30 milhões de km2, ocupando, aproximadamente, 20% da área continental da Terra. No continente vivem mais de um bilhão de habitantes, fazendo dele o segundo mais populoso entre os demais.",
      "numberOfCountries": 54,
      "numberOfLanguages": 2000,
      "carrouselImage": "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=752&q=80",
      "jumbotronImage": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80",
      "countries": [
        {
          "id": 1,
          "name": "África do Sul",
          "flag": "https://www.flaticon.com/svg/vstatic/svg/197/197562.svg?token=exp=1617570566~hmac=4f2ef416f1bdcb7a518a066e3f1e1823",
          "capital": "Joanesburgo",
          "image": "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
        },
        {
          "id": 1,
          "name": "Angola",
          "flag": "https://www.flaticon.com/svg/vstatic/svg/197/197513.svg?token=exp=1617570687~hmac=b0d8ef0d1147471c9e4e57577cafb7d0",
          "capital": "Luanda",
          "image": "https://images.unsplash.com/photo-1489493887464-892be6d1daae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80"
        }
      ]
    },
    {
      "id": 3,
      "name": "Ásia",
      "description": "Para conhecer o milenar",
      "text": "A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial. A Ásia é multicultural, abrigando diversas culturas, etnias, religiões e tradições.",
      "numberOfCountries": 50,
      "numberOfLanguages": 2301,
      "carrouselImage": "https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=926&q=80",
      "jumbotronImage": "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80",
      "countries": [
        {
          "id": 1,
          "name": "China",
          "flag": "https://www.flaticon.com/svg/vstatic/svg/197/197375.svg?token=exp=1617571828~hmac=511d7f2a91c8b3d1b031e0db7cde9aeb",
          "capital": "Xangai",
          "image": "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        },
        {
          "id": 2,
          "name": "Japão",
          "flag": "https://www.flaticon.com/svg/vstatic/svg/197/197604.svg?token=exp=1617571797~hmac=694ab94d92680500b2dfe443be5034c7",
          "capital": "Tóquio",
          "image": "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=762&q=80"
        }
      ]
    },
    {
      "id": 4,
      "name": "América",
      "description": "O novo continente dos sonhos",
      "text": "América é o maior continente em extensão norte–sul localizado no Hemisfério Ocidental e compreende uma área total de 42.189.120 km2. O continente é habitado por cerca de 902.892.047 pessoas, e nele são faladas diversas línguas, como espanhol, inglês, português, francês, neerlandês e línguas nativas.",
      "numberOfCountries": 35,
      "numberOfLanguages": 1061,
      "carrouselImage": "https://images.unsplash.com/photo-1544989163-df6cdad98651?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80",
      "jumbotronImage": "https://images.unsplash.com/photo-1534126874-5f6762c6181b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=915&q=80",
      "countries": [
        {
          "id": 1,
          "name": "EUA",
          "flag": "https://www.flaticon.com/svg/vstatic/svg/197/197484.svg?token=exp=1617572885~hmac=d4baa61df786d96af6e098f087ffb554",
          "capital": "Washington, D.C",
          "image": "https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=678&q=80"
        },
        {
          "id": 2,
          "name": "Canadá",
          "flag": "https://www.flaticon.com/svg/vstatic/svg/197/197430.svg?token=exp=1617572971~hmac=80be3adb4949fd6e4acdfaa8db4fd558",
          "capital": "Ottawa",
          "image": "https://images.unsplash.com/photo-1569681157442-5eabf7fe850e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=752&q=80"
        }
      ]
    },
    {
      "id": 5,
      "name": "Oceania",
      "description": "O último continente",
      "text": "A Oceania é o continente mais isolado do mundo, sua barreira geográfica fez com que fosse o último a ser descoberto pelos europeus. Em razão desse atraso em seu descobrimento ficou conhecido como mundo novo.",
      "numberOfCountries": 14,
      "numberOfLanguages": 19,
      "carrouselImage": "https://images.unsplash.com/photo-1528272047019-beac059cd9e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      "jumbotronImage": "https://images.unsplash.com/photo-1484007880226-8849602bb447?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80",
      "countries": [
        {
          "id": 1,
          "name": "Austrália",
          "flag": "https://www.flaticon.com/svg/vstatic/svg/323/323367.svg?token=exp=1617573283~hmac=fd99fe78b7c66eb8a4041731170e79ba",
          "capital": "Sidney",
          "image": "https://images.unsplash.com/photo-1524820197278-540916411e20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80"
        },
        {
          "id": 2,
          "name": "Nova Zelândia",
          "flag": "https://www.flaticon.com/svg/vstatic/svg/197/197589.svg?token=exp=1617573368~hmac=a714036d441e41b35667c4e768d7e650",
          "capital": "Wellington",
          "image": "https://images.unsplash.com/photo-1574751743509-d3b94e447a1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=669&q=80"
        }
      ]
    }
  ]

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
    >
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <MainText />
      <Flex
        w="100%"
        h="100%"
        flexDir="row"
        align="center"
        justify="center"
      >
        <Slider />
      </Flex>
    </Flex>
  )
}
