interface CalendarIconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  color?: string;
  variant?: "blue" | "white";
}

const CalendarIcon = ({
  width = 24,
  height = 24,
  className,
  color,
  variant = "blue",
}: CalendarIconProps) => {
  const fillColor = color || (variant === "white" ? "white" : "#3D63A9");

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Calendar Icon</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2H10V4H16V2H18V4H22V10V12V22H2V12V10V4H8V2ZM16 6V8H18V6H20V10H4V6H8V8H10V6H16ZM4 12V20H20V12H4Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default CalendarIcon;
