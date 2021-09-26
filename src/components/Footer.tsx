import {
  Box,
  Stack,
  Text,
  TextProps,
  ButtonGroup,
  ButtonGroupProps,
  IconButton,
  HStack,
  StackDivider,
} from "@chakra-ui/react";
import * as React from "react";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { Logo } from "./Logo";

export const Footer = () => {
  const router = useRouter();
  return (
    <Box
      as='footer'
      role='contentinfo'
      mx='auto'
      maxW='7xl'
      py='12'
      px={{ base: "4", md: "8" }}
    >
      <Stack>
        <Stack
          direction='row'
          spacing='4'
          align='center'
          justify='space-between'
        >
          <Logo type='dark' />
          <SocialMediaLinks />
        </Stack>
        <Stack
          direction='row'
          spacing='4'
          align='center'
          justify='space-between'
        >
          <Copyright alignSelf={{ base: "center", sm: "start" }} />
          <HStack divider={<StackDivider h='3' alignSelf='center' />}>
            <Box onClick={() => router.push("/privacy")} cursor='pointer'>
              <Text fontSize='sm'>Privacy Policy</Text>
            </Box>
          </HStack>
        </Stack>
      </Stack>
    </Box>
  );
};

const Copyright = (props: TextProps) => (
  <Text fontSize='sm' {...props}>
    &copy; {new Date().getFullYear()} van der Vlugt Technology & Consultancy,
    All rights reserved.
  </Text>
);

const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant='ghost' color='gray.600' {...props}>
    <IconButton
      as='a'
      href='#'
      aria-label='LinkedIn'
      icon={<FaLinkedin fontSize='20px' />}
    />
    <IconButton
      as='a'
      href='#'
      aria-label='GitHub'
      icon={<FaGithub fontSize='20px' />}
    />
    <IconButton
      as='a'
      href='#'
      aria-label='Twitter'
      icon={<FaTwitter fontSize='20px' />}
    />
  </ButtonGroup>
);
