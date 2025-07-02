"use client";
import ReserveButton from "@/components/ui/reserve-button";
import {
  Box,
  CloseButton,
  Drawer,
  Flex,
  Portal,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

interface ReserveDrawerProps {
  showIcon?: boolean;
  buttonVariant?: "blue" | "white";
  buttonSize?: "sm" | "md" | "lg";
}

const services = [
  {
    name: "Urban",
    description:
      "Social hub de alta experiencia, para millennials y zetas ejecutivos.",
    details:
      "Habitaciones VIP · Piscina Climatizada · Salón de eventos · Espacio Coworking · Wifi gratís",
    price: "Desde $4560/Noche",
  },
  {
    name: "Tribe",
    description:
      "Exploradores, artistas y emprendedores juntos en un lugar único.",
    details: "Habitaciones VIP · Piscina · Gastronomía Vegana · Wifi gratís",
    price: "Desde $3190/Noche",
  },
  {
    name: "Family",
    description:
      "Vive junto a toda tu familia la mejor experiencia de sus vidas.",
    details:
      "Habitaciones VIP · Piscina Climatizada · Actividades · Spa · Cancha de golf · Wifi gratís",
    price: "Desde $4560/Noche",
  },
];

const ServiceCard = ({ service }: { service: (typeof services)[0] }) => {
  const isFullWidth = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      py={8}
      borderTop="1px solid"
      borderColor="#F4F4F4"
      gap={{ base: 8, md: 6 }}
    >
      <Box
        bg="red"
        minW={{ base: "100%", md: "250px" }}
        h={{ base: "200px", md: "262px" }}
        borderRadius={8}
      >
        image
      </Box>
      <VStack alignItems="flex-start" gap={4}>
        <VStack alignItems="flex-start" gap={3}>
          <Text fontSize="2xl" fontWeight={600}>
            {service.name}
          </Text>
          <Text
            fontSize="15px"
            fontWeight={400}
            lineHeight="24px"
            letterSpacing="0.04em"
          >
            {service.description}
          </Text>
        </VStack>
        <Text fontSize="13px" fontWeight={400} color="#676767">
          {service.details}
        </Text>
        <Text fontSize="15px" fontWeight={900}>
          {service.price}
        </Text>
        <ReserveButton fullWidth={isFullWidth} text="Reservar Ahora" />
      </VStack>
    </Flex>
  );
};

const ReserveDrawer = ({
  showIcon = false,
  buttonVariant = "blue",
  buttonSize = "md",
}: ReserveDrawerProps) => {
  return (
    <Drawer.Root placement="end" size="lg">
      <Drawer.Trigger asChild>
        <ReserveButton
          showIcon={showIcon}
          variant={buttonVariant}
          size={buttonSize}
        />
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title
                fontWeight={600}
                fontSize="5xl"
                width="fit-content"
                py={1.5}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                Reservar
                <Drawer.CloseTrigger
                  asChild
                  position="relative"
                  top={0}
                  right={0}
                >
                  <CloseButton />
                </Drawer.CloseTrigger>
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              {services.map((service) => (
                <ServiceCard key={service.name} service={service} />
              ))}
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default ReserveDrawer;
