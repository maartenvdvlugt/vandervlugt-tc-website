import { Box, Button, Heading, Text } from "@chakra-ui/react";
import * as React from "react";

interface CallToActionProps {
  heading: string;
  body: string;
  button: { label: string; color: string; href: string };
}

export const CallToAction = (props: CallToActionProps) => {
  const { heading, body, button } = props;
  return (
    <Box as='section'>
      <Box
        maxW='2xl'
        mx='auto'
        px={{ base: "6", lg: "8" }}
        py={{ base: "16", sm: "20" }}
        textAlign='center'
      >
        <Heading
          as='h2'
          size='3xl'
          fontWeight='extrabold'
          letterSpacing='tight'
        >
          {heading}
        </Heading>
        <Text mt='4' fontSize='lg'>
          {body}
        </Text>
        <Button
          mt='8'
          as='a'
          href={button.href}
          size='lg'
          colorScheme={button.color}
          fontWeight='bold'
        >
          {button.label}
        </Button>
      </Box>
    </Box>
  );
};
