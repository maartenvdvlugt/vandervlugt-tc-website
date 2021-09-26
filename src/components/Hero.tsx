import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { NavBar } from "./Navbar/NavBar";

export const Hero = () => {
  return (
    <Box bg='gray.800' as='section' minH='140px' position='relative'>
      <NavBar />
      <Box py='32' position='relative' zIndex={1}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx='auto'
          px={{ base: "6", md: "8" }}
          color='white'
        >
          <Box maxW='xl'>
            <Heading as='h1' size='3xl' fontWeight='extrabold'>
              {`Let's bring your product idea to life`}
            </Heading>
            <Text fontSize={{ md: "2xl" }} mt='4' maxW='lg'>
              {`Need help developing, fine-tuning or expanding your killer product
              idea?`}
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              mt='10'
              spacing='4'
            >
              <Button
                as='a'
                href='mailto:info@vandervlugt.me'
                colorScheme='blue'
                px='8'
                rounded='full'
                size='lg'
                fontSize='md'
                fontWeight='bold'
              >
                {`Get in touch`}
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        id='image-wrapper'
        position='absolute'
        insetX='0'
        insetY='0'
        w='full'
        h='full'
        overflow='hidden'
        align='center'
      >
        <Box position='relative' w='full' h='full'>
          <Img
            src='/assets/hero-bg.jpg'
            alt='Main Image'
            w='full'
            h='full'
            objectFit='cover'
            objectPosition='top bottom'
            position='absolute'
          />
          <Box position='absolute' w='full' h='full' bg='blackAlpha.600' />
        </Box>
      </Flex>
    </Box>
  );
};
