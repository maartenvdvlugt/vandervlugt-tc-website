import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Badge,
  HStack,
  Stack,
  StackDivider,
  BoxProps,
  Img,
  StackProps,
  Wrap,
  WrapItem,
  Divider,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import * as React from "react";

interface ProjectItemProps {
  title: string;
  description: string;
  category: { title: string; color: string };
  media: { filename: string; alt: string };
  tags: Array<string>;
  client: { name: string; logo: string; type: string };
}

const ProjectItem = (props: ProjectItemProps) => {
  const { title, description, category, media, tags, client } = props;
  return (
    <Box as='section' bg={mode("gray.50", "inherit")} py='24'>
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx='auto'
        px={{ base: "6", md: "8" }}
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 24rem" }}
          columnGap={{ base: "12", lg: "20" }}
          rowGap='10'
        >
          <Media alt={media.alt} src={`/assets/${media.filename}`} />
          <Flex direction='column' h='full'>
            <Box flex='1'>
              <ProjectMeta type={category} tags={tags} />
              <Heading size='xl' mt='6' mb='4'>
                {title}
              </Heading>
              <Text
                fontSize='lg'
                color={mode("gray.600", "gray.400")}
                lineHeight='tall'
              >
                {description}
              </Text>
            </Box>

            <Client
              mt='8'
              name={client.name}
              logo={client.logo}
              type={client.type}
            />
          </Flex>
        </Grid>
      </Box>
    </Box>
  );
};

interface MetaProps {
  type: { title: string; color: string };
  tags: string[];
}

const ProjectMeta = (props: MetaProps) => {
  const { type, tags } = props;
  return (
    <Stack
      spacing={{ base: "4", md: "6" }}
      direction={{ base: "column", md: "row" }}
      textTransform='uppercase'
      fontSize='xs'
      letterSpacing='wider'
      fontWeight='semibold'
    >
      <Badge colorScheme={type.color} variant='solid' alignSelf='flex-start'>
        {type.title}
      </Badge>

      <Wrap
        divider={<StackDivider h='3' alignSelf='center' />}
        color={mode("gray.600", "gray.400")}
      >
        {tags.map((tag, index) => (
          <WrapItem key={index}>
            <Box>{tag}</Box>
            {index + 1 < tags.length ? (
              <Divider orientation='vertical' ml={2} />
            ) : null}
          </WrapItem>
        ))}
      </Wrap>
    </Stack>
  );
};

interface MediaProps extends BoxProps {
  src: string;
  alt: string;
}

const Media = (props: MediaProps) => {
  const { src, alt, ...rest } = props;
  return (
    <Box
      pos='relative'
      cursor='pointer'
      className='group'
      h='400px'
      overflow='hidden'
      {...rest}
    >
      <Img
        rounded='xl'
        w='full'
        h='full'
        objectFit='cover'
        htmlWidth='672'
        htmlHeight='448'
        src={src}
        alt={alt}
        transition='all 0.2s'
        _groupHover={{ transform: "scale(1.05)" }}
      />
    </Box>
  );
};

interface ClientProps extends StackProps {
  logo: string;
  name: string;
  type: string;
}

const Client = (props: ClientProps) => {
  const { logo, name, type, ...rest } = props;
  return (
    <HStack spacing='4' {...rest}>
      <Box h='12' rounded='full' bgColor='white'>
        <Img
          p='3'
          h='12'
          w='24'
          objectFit='contain'
          alt={`${name} Logo`}
          src={`/assets/clients/${logo}`}
        />
      </Box>

      <Flex direction='column'>
        <Text fontWeight='medium'>{name}</Text>
        <Text fontSize='sm' color='gray.500'>
          {type}
        </Text>
      </Flex>
    </HStack>
  );
};

export default ProjectItem;
