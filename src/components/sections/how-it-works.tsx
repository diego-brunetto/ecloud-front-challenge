import { Flex, Highlight, Text } from "@chakra-ui/react";

const HowItWorks = ({ text }: { text: string }) => {
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
        <Highlight
          query="aventuras locales"
          styles={{
            bg: "brand.blue",
            color: "white",
            fontWeight: "600",
            paddingX: "3",
          }}
        >
          {text}
        </Highlight>
      </Text>
    </Flex>
  );
};

export default HowItWorks;
