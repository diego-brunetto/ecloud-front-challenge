import { Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box p={8}>
      <Heading size="4xl" mb={6}>
        GIBSON FONT TEST
      </Heading>

      <Text fontSize="2xl" fontWeight="300" mb={4}>
        Light (300) - Gibson Light
      </Text>

      <Text fontSize="2xl" fontWeight="400" mb={4}>
        Regular (400) - Gibson Regular
      </Text>

      <Text fontSize="2xl" fontWeight="600" mb={4}>
        SemiBold (600) - Gibson SemiBold
      </Text>

      <Text fontSize="2xl" fontWeight="700" mb={4}>
        Bold (700) - Gibson Bold
      </Text>

      <Box mt={8}>
        <Text fontSize="lg" mb={2}>
          Comparación con diferentes tamaños:
        </Text>
        <Text fontSize="sm" fontWeight="300">
          Small Light
        </Text>
        <Text fontSize="md" fontWeight="400">
          Medium Regular
        </Text>
        <Text fontSize="lg" fontWeight="600">
          Large SemiBold
        </Text>
        <Text fontSize="xl" fontWeight="700">
          XLarge Bold
        </Text>
      </Box>
    </Box>
  );
}
