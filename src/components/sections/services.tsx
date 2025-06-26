import { LocationIcon } from "@/components/icons";
import Slider from "@/components/ui/slider";
import { Box, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";

const services = [
  {
    location: "Arequipa",
    name: "Urban",
    description:
      "Social hub de alta experiencia, para millennials y zetas ejecutivos.",
    image: "/images/services/urban.webp",
    color: "brand.blue",
  },
  {
    location: "Arequipa",
    name: "Tribe",
    description:
      "Social hub de alta experiencia, para millennials y zetas ejecutivos.",
    image: "/images/services/tribe.webp",
    color: "brand.green",
  },
  {
    location: "Arequipa",
    name: "Family",
    description:
      "Social hub de alta experiencia, para millennials y zetas ejecutivos.",
    image: "/images/services/family.webp",
    color: "brand.magenta",
  },
];

interface ServiceCardProps {
  service: {
    location: string;
    name: string;
    description: string;
    image: string;
    color: string;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => (
  <Flex
    bg="gray"
    padding={4}
    h={{ base: "400px", md: "432px" }}
    minW={{ base: "100%", md: "624px" }}
    alignItems="end"
    borderRadius="2xl"
    shadow="base"
    backgroundImage={`url('${service.image}')`}
    backgroundSize="cover"
    backgroundPosition="center"
    position="relative"
  >
    <Box
      bg={service.color}
      w={{ base: "100%", md: "356px" }}
      h="108px"
      p={{ base: 4, md: 6 }}
      borderRadius="xl"
      position={{ base: "relative", md: "absolute" }}
      right={{ base: "0", md: "-24px" }}
      shadow="base"
    >
      <HStack>
        <LocationIcon />
        <Text
          color="white"
          fontWeight="400"
          fontSize="17px"
          lineHeight="28px"
          letterSpacing="0.04em"
        >
          {service.location}
        </Text>
      </HStack>
    </Box>
  </Flex>
);

const Services = () => {
  return (
    <Flex
      minW="100%"
      alignItems={{ base: "center", md: "start" }}
      bg="white"
      py={{ base: 0, md: 20 }}
      overflow="hidden"
    >
      <Flex
        direction="column"
        gap={{ base: 12, md: 14 }}
        bg="#F4F4F4"
        h={{ base: "auto", md: "776px" }}
        w={{ base: "100%", md: "86%" }}
        borderRadius={{ base: "2xl", md: "md" }}
        px={{ base: 6, md: "84px" }}
        py={{ base: "100px", md: "72px" }}
        position="relative"
      >
        <VStack
          gap={6}
          alignItems={{ base: "center", md: "start" }}
          maxW="520px"
        >
          <Heading
            as="h2"
            fontSize="48px"
            fontWeight="semibold"
            lineHeight="56px"
            letterSpacing="-0.02em"
          >
            Hoteles que son hogares
          </Heading>
          <Text fontSize="20px" fontWeight="300" lineHeight="32px">
            Siéntete parte de la tribu en un ambiente diseñado para que
            experimentes el viaje que va a cambiar algo en ti.
          </Text>
        </VStack>

        {/* Mobile Version */}
        <VStack gap={6} hideFrom="md">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </VStack>

        {/* Desktop Version with Slider */}
        <Box position="absolute" bottom="72px" hideBelow="md">
          <Slider
            itemWidth="624px"
            gap={132}
            slides={services.map((service) => ({
              id: service.name,
              content: <ServiceCard service={service} />,
            }))}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Services;
