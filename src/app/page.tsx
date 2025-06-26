import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Services from "@/components/sections/services";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex flexDirection="column">
      <Hero />
      <HowItWorks />
      <Services />
    </Flex>
  );
}
