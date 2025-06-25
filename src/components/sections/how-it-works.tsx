import { Flex, Text } from "@chakra-ui/react";

const HowItWorks = () => {
  return (
    <Flex
      minH="800px"
      h="800px"
      minW="100%"
      alignItems="center"
      justifyContent="center"
      bg="white"
      px="8px"
    >
      <Text
        fontWeight="300"
        fontSize={{ base: "40px", md: "72px" }}
        lineHeight={{ base: "56px", md: "98px" }}
        letterSpacing={{ base: "-0.02em", md: "-0.04em" }}
        textAlign="center"
        maxW="1055px"
      >
        Un hogar con espacio para coworkear, conectarte con{" "}
        <Text
          as="span"
          bg="brand.blue"
          color="white"
          fontWeight="600"
          paddingX="3"
        >
          aventuras locales
        </Text>{" "}
        y personas increíbles.
      </Text>
    </Flex>
  );
};

export default HowItWorks;
