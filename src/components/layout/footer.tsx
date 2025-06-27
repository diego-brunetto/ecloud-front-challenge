import {
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";
import { Flex, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      bg="white"
      w="100%"
      py={20}
      px={{ base: 6, md: "84px" }}
      alignItems="center"
      justifyContent="space-between"
      direction={{ base: "column", md: "row" }}
      gap={{ base: 20, md: 0 }}
    >
      <VStack
        gap="26px"
        alignItems={{ base: "center", md: "flex-start" }}
        maxW={{ base: "100%", md: "300px" }}
      >
        <LogoIcon />
        <Text
          fontSize="sm"
          lineHeight="24px"
          letterSpacing="0.04em"
          textAlign={{ base: "center", md: "left" }}
        >
          Here we should have a few words about what and who the company is.
          This should serve well for SEO purposes.
        </Text>
        <HStack gap="8">
          <YoutubeIcon />
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </HStack>
      </VStack>
      <VStack>
        <Text fontWeight={600} fontSize="2xl" lineHeight="32px">
          Contacta con nosotros
        </Text>
        <Text>T: (054) 1234567</Text>
        <Text>E: info@nomadperu.com.pe</Text>
      </VStack>
      <Flex hideBelow="lg" direction="column" gap="2">
        <Link href="/">Alojate</Link>
        <Link href="/">Co-work</Link>
        <Link href="/">Experimenta</Link>
        <Link href="/">Unete</Link>
        <Link href="/">Inversores</Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
