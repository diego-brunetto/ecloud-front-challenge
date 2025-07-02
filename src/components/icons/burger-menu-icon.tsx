interface BurgerMenuIconProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  color?: string;
}

const BurgerMenuIcon = ({ 
  width = 24, 
  height = 24, 
  className,
  color
}: BurgerMenuIconProps) => {
  const fillColor = color || "#3D63A9";
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Burger Menu</title>
      <path d="M4 6H20V8H4V6Z" fill={fillColor} />
      <path d="M4 11H20V13H4V11Z" fill={fillColor} />
      <path d="M20 16H10V18H20V16Z" fill={fillColor} />
    </svg>
  );
};

export default BurgerMenuIcon; 