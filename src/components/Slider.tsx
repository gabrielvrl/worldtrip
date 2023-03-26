import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Flex, Heading, Link, Text } from "@chakra-ui/react";

export const Slider = () => {
  return(
    <Flex
      maxW="1240px"
      maxH="450px"
      mx="auto"
    >

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide key="europa">
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="/continent.svg"
            bgPosition="100%"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href={`/continent/europa`}>
              <a>
                <Heading fontSize="5xl" color="gray.50" fontWeight="bold">Europa</Heading>
                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>O continente mais antigo</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      {/* <Swiper>
        <SwiperSlide key="europa">
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="/continent.svg"
            bgPosition="100%"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href={`/continent/europa`}>
              <a>
                <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>O continente mais antigo</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide> */}

        {/* <SwiperSlide key="americadosul">
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="/continent.svg"
            bgPosition="100%"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            <Link href={`/continent/america-do-sul`}>
              <a>
                <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">América do Sul</Heading>
                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>América do Sul</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide> */}
      {/* </Swiper> */}
    </Flex>
  );
}