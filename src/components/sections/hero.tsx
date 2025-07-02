import { Flex, Heading } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      backgroundImage={{
        base: "url('/images/hero/hero-mobile.webp')",
        md: "url('/images/hero/hero-desk.webp')",
      }}
      backgroundSize="cover"
      backgroundPosition={{ base: "center", md: "center top" }}
      backgroundRepeat="no-repeat"
      minH="800px"
      h="800px"
      minW="100%"
      alignItems="center"
      paddingX={{ base: "24px", md: "84px" }}
    >
      <Heading
        as="h1"
        fontWeight="bold"
        fontSize={{ base: "60px", md: "100px" }}
        color="white"
        maxW={{ base: "280px", md: "480px" }}
        lineHeight={{ base: "68px", md: "110px" }}
        marginTop={{ base: "150px", md: "0px" }}
      >
        Tu tribu te espera
      </Heading>
    </Flex>
  );
};

export default Hero;
