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
      _hover: {
        backgroundColor: "brand.blue",
      },
    },
    white: {
      backgroundColor: "white",
      color: "brand.blue",
      iconVariant: "blue" as const,
      _hover: {
        backgroundColor: "#F9FAFB",
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
      maxW={fullWidth ? "100%" : "fit-content"}
      size={size}
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
