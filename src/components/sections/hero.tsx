import { Flex, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      backgroundImage="url('/images/hero-bg.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bg="red"
      minH="800px"
      h="800px"
      minW="100%"
      alignItems="center"
      paddingX={{ base: "24px", md: "84px" }}
    >
      <Text
        fontWeight="bold"
        fontSize={{ base: "60px", md: "100px" }}
        color="white"
        maxW="480px"
        lineHeight={{ base: "68px", md: "110px" }}
      >
        Tu tribu te espera
      </Text>
    </Flex>
  );
};

export default Hero;
