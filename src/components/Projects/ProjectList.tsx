import * as React from "react";

import {
  VStack,
  Flex,
  Box,
  Heading,
  Text,
  Badge,
  HStack,
  Stack,
  StackDivider,
  BoxProps,
  Img,
  StackProps,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import ProjectItem from "./ProjectItem";

export const ProjectList = () => {
  return (
    <VStack>
      <Box alignSelf='start' mx='auto' px={{ base: "6", md: "8" }} py={8}>
        <Heading as='h1' size='2xl' fontWeight='extrabold'>
          {`Most recent work`}
        </Heading>
      </Box>

      <ProjectItem
        title='Accountability Buddy'
        description='Developing a full stack MVP for TGL B.V. This app allows users to track their daily Focus and Wins so they can achieve a better work/life balance.'
        category={{ title: "Development", color: "blue" }}
        media={{
          filename: "tgl-weekview.jpg",
          alt: "Accountability Buddy App screenshot",
        }}
        tags={[
          "Fullstack",
          "UX Design",
          "Node.JS",
          "Firebase",
          "React",
          "Next.JS",
        ]}
        client={{
          name: "TGL House B.V.",
          logo: "thegoodlife.svg",
          type: "Client",
        }}
      />
      <ProjectItem
        title='Ace Golf'
        description='A golf lesson booking platform developed for Ace Technologies B.V. This project includes UX design, product strategy and development'
        category={{ title: "Partnership", color: "red" }}
        media={{
          filename: "acegolf-image.jpg",
          alt: "Ace Golf Logo",
        }}
        tags={[
          "UX Design",
          "Product Strategy",
          "React",
          "Next.JS",
          "Mobile",
          "React",
          "Next.JS",
        ]}
        client={{
          name: "Ace Technologies B.V.",
          logo: "ace-technologies.svg",
          type: "Partnership",
        }}
      />
    </VStack>
  );
};
