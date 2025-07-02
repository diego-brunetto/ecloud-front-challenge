import { CalendarIcon } from "@/components/icons";
import { Button } from "@chakra-ui/react";

interface ReserveButtonProps {
  variant?: "blue" | "white";
  size?: "sm" | "md" | "lg";
  text?: string;
  showIcon?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
}

const ReserveButton = ({
  variant = "blue",
  size = "md",
  text = "Reservar",
  showIcon = false,
  onClick,
  fullWidth = false,
}: ReserveButtonProps) => {
  // Variant styles
  const variantStyles = {
    blue: {
      backgroundColor: "brand.blue",
      color: "white",
      iconVariant: "white" as const,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      _hover: {
        backgroundColor: "brand.blue",
        transform: "translateY(-2px) scale(1.02)",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
      },
      _active: {
        transform: "translateY(0px) scale(1)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
    },
    white: {
      backgroundColor: "white",
      color: "brand.blue",
      iconVariant: "blue" as const,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
      _hover: {
        backgroundColor: "#F9FAFB",
        transform: "translateY(-2px) scale(1.02)",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.12)",
      },
      _active: {
        transform: "translateY(0px) scale(1)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
      },
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <Button
      onClick={onClick}
      fontWeight="semibold"
      fontSize="15px"
      rounded="lg"
      {...currentVariant}
      minW={fullWidth ? "100%" : "fit-content"}
      size={size}
      transition="all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
      cursor="pointer"
    >
      {showIcon && (
        <CalendarIcon
          width={24}
          height={24}
          variant={currentVariant.iconVariant}
        />
      )}
      {text}
    </Button>
  );
};

export default ReserveButton;
