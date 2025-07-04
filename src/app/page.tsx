import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Services from "@/components/sections/services";
import { getContentBySlug } from "@/lib/content";
import { VStack } from "@chakra-ui/react";

export default async function Home() {
  const { home } = await getContentBySlug(
    "home",
    "index"
  );

  return (
    <VStack>
      <Hero title={home.title} />
      <HowItWorks text={home.howItWorks} />
      <Services services={home.services} />
    </VStack>
  );
}
