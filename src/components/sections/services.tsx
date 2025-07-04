import {
  FamilyIcon,
  LocationIcon,
  TribeIcon,
  UrbanIcon,
} from "@/components/icons";
import Slider from "@/components/ui/slider";
import { Box, Flex, HStack, Heading, Text, VStack } from "@chakra-ui/react";

interface ServiceCardProps {
  service: {
    location: string;
    name: string;
    description: string;
    image: string;
    color: string;
    icon: React.ReactNode;
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
      <HStack>{service.icon}</HStack>
    </Box>
  </Flex>
);

interface ServicesProps {
  services: {
    title: string;
    description: string;
    services: {
      location: string;
      name: string;
      description: string;
    }[];
  };
}

const SERVICE_CONFIG = {
  Urban: {
    icon: UrbanIcon,
    color: "brand.blue",
    image: "/images/services/urban.webp",
  },
  Tribe: {
    icon: TribeIcon,
    color: "brand.green",
    image: "/images/services/tribe.webp",
  },
  Family: {
    icon: FamilyIcon,
    color: "brand.magenta",
    image: "/images/services/family.webp",
  },
} as const;

const Services = ({ services }: ServicesProps) => {
  const servicesData = services.services.map((service) => {
    const config = SERVICE_CONFIG[service.name as keyof typeof SERVICE_CONFIG];
    return {
      location: service.location,
      name: service.name,
      description: service.description,
      image: config.image,
      icon: <config.icon />,
      color: config.color,
    };
  });

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
            {services.title}
          </Heading>
          <Text fontSize="20px" fontWeight="300" lineHeight="32px">
            {services.description}
          </Text>
        </VStack>

        {/* Mobile Version */}
        <VStack gap={6} hideFrom="md">
          {servicesData.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </VStack>

        {/* Desktop Version with Slider */}
        <Box position="absolute" bottom="72px" hideBelow="md">
          <Slider
            itemWidth="624px"
            gap={132}
            slides={servicesData.map((service) => ({
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
