import { LogoIcon } from "@/components/icons";
import ReserveButton from "@/components/ui/reserve-button";
import {
  Box,
  Button,
  Flex,
  HoverCard,
  Link,
  Portal,
  VStack,
} from "@chakra-ui/react";

// Types
interface SubmenuItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  isDropdown?: boolean;
  submenu?: SubmenuItem[];
}

// Navigation data
const NAV_ITEMS: NavItem[] = [
  { label: "Alojate", href: "/alojate" },
  { label: "Co-Work", href: "/co-work" },
  {
    label: "Experimenta",
    isDropdown: true,
    submenu: [
      { label: "City Host", href: "/city-host" },
      { label: "Actividades", href: "/actividades" },
      { label: "Gastronomía", href: "/gastronomia" },
      { label: "Eventos", href: "/eventos" },
    ],
  },
  { label: "Únete", href: "/unete" },
  { label: "English", href: "/en" },
];

// Shared styles
const CONTAINER_STYLES = {
  backgroundColor: "white",
  borderRadius: { base: "8px", md: "16px" },
  boxShadow: "base",
};

// Components
const SubmenuLink = ({
  href,
  children,
}: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    padding={3}
    fontSize="sm"
    _hover={{ textDecoration: "underline" }}
  >
    {children}
  </Link>
);

const NavigationLink = ({
  item,
  ...props
}: { item: NavItem; [key: string]: any }) => {
  if (item.isDropdown && item.submenu) {
    return (
      <HoverCard.Root openDelay={100}>
        <HoverCard.Trigger asChild>
          <Button
            variant="plain"
            fontSize="15px"
            p={0}
            _hover={{ textDecoration: "underline" }}
            {...props}
          >
            {item.label}
          </Button>
        </HoverCard.Trigger>
        <Portal>
          <HoverCard.Positioner>
            <HoverCard.Content
              backgroundColor="white"
              borderRadius="lg"
              padding={4}
              boxShadow="base"
              marginTop={8}
            >
              <VStack align="center" gap={2}>
                {item.submenu.map((submenuItem) => (
                  <SubmenuLink key={submenuItem.label} href={submenuItem.href}>
                    {submenuItem.label}
                  </SubmenuLink>
                ))}
              </VStack>
            </HoverCard.Content>
          </HoverCard.Positioner>
        </Portal>
      </HoverCard.Root>
    );
  }

  return (
    <Link
      href={item.href}
      fontSize="15px"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {item.label}
    </Link>
  );
};

const Logo = () => (
  <Box {...CONTAINER_STYLES} padding={{ base: "4", md: "6" }}>
    <LogoIcon />
  </Box>
);

const DesktopNavigation = () => (
  <Box
    hideBelow="lg"
    {...CONTAINER_STYLES}
    borderRadius="16px"
    padding={2}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    gap="8"
    h="full"
  >
    {NAV_ITEMS.map((item, index) => (
      <NavigationLink
        key={item.label}
        item={item}
        marginLeft={index === 0 ? 3 : undefined}
      />
    ))}
    <ReserveButton showIcon />
  </Box>
);

const Navigation = () => {
  return (
    <Flex
      as="nav"
      width="full"
      height={{ base: "11", md: "16" }}
      paddingX="8"
      alignItems="center"
      justifyContent="space-between"
      position="absolute"
      top={{ base: "14", md: "8" }}
      left="0"
      zIndex="10"
      background="transparent"
    >
      <Logo />
      <DesktopNavigation />
    </Flex>
  );
};

export default Navigation;
