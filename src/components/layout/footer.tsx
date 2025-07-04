import {
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";
import { Flex, HStack, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface FooterContent {
  description: string;
  contact: {
    title: string;
    phone: string;
    email: string;
  };
  links: { name: string; url: string }[];
}

const Footer = ({ content }: { content: FooterContent }) => {
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
          {content.description}
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
          {content.contact.title}
        </Text>
        <Text>{content.contact.phone}</Text>
        <Text>{content.contact.email}</Text>
      </VStack>
      <Flex hideBelow="lg" direction="column" gap="2">
        {content.links.map((link) => (
          <Link key={link.name} href={link.url}>
            {link.name}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Footer;
