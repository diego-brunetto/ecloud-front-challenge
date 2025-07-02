import { BurgerMenuIcon, LogoIcon } from "@/components/icons";
import {
  Box,
  Button,
  CloseButton,
  Collapsible,
  Drawer,
  Link,
  Portal,
  VStack,
} from "@chakra-ui/react";
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
];

const NavigationLink = ({ item }: { item: NavItem }) => {
  if (item.isDropdown && item.submenu) {
    return (
      <Collapsible.Root
        borderBottom="1px solid"
        borderColor="#F4F4F4"
        lazyMount
        defaultOpen
      >
        <Collapsible.Trigger asChild>
          <Box
            fontSize="32px"
            fontWeight={600}
            py={4}
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
          >
            {item.label}
          </Box>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <VStack align="stretch">
            {item.submenu.map((submenuItem) => (
              <Link
                fontSize="32px"
                fontWeight={600}
                py={4}
                key={submenuItem.label}
                href={submenuItem.href}
                p={4}
                _hover={{ textDecoration: "underline" }}
              >
                {submenuItem.label}
              </Link>
            ))}
          </VStack>
        </Collapsible.Content>
      </Collapsible.Root>
    );
  }

  return (
    <Link
      href={item.href}
      fontSize="32px"
      fontWeight={600}
      py={4}
      _hover={{ textDecoration: "underline" }}
      borderBottom="1px solid"
      borderColor="#F4F4F4"
    >
      {item.label}
    </Link>
  );
};

const NavigationDrawer = () => {
  return (
    <Drawer.Root placement="end" size="sm">
      <Drawer.Trigger asChild>
        <Button
          h="44px"
          w="44px"
          variant="plain"
          p={4}
          backgroundColor="white"
          borderRadius={{ base: "8px", md: "16px" }}
          boxShadow="base"
        >
          <BurgerMenuIcon />
        </Button>
      </Drawer.Trigger>

      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <LogoIcon />
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
              <VStack align="stretch">
                {NAV_ITEMS.map((item) => (
                  <NavigationLink key={item.label} item={item} />
                ))}
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default NavigationDrawer;
