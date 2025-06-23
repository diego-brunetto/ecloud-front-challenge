interface CalendarIconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  color?: string;
  variant?: "blue" | "white";
}

const     CalendarIcon = ({ 
  width = 24, 
  height = 24, 
  className,
  color,
  variant = "blue"
}: CalendarIconProps) => {
  const fillColor = color || (variant === "white" ? "white" : "var(--colors-brand-blue)");
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M7 3H8.5V5H15.5V3H17V5H21V9.5V11V21H3V11V9.5V5H7V3ZM15.5 6.5V8H17V6.5H19.5V9.5H4.5V6.5H7V8H8.5V6.5H15.5ZM4.5 11V19.5H19.5V11H4.5Z" 
        fill={fillColor}
      />
    </svg>
  );
};

export default CalendarIcon; 