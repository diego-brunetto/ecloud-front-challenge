import { Box } from "@chakra-ui/react";

interface LogoProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

const DesktopLogo = ({ width = 95, height = 16, className }: LogoProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 95 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_366_190)">
      <path
        d="M0.0561218 0.38269H2.97184V11.59L16.0379 0.38269H18.4434V15.5991H15.4183V4.3918L2.46159 15.5991H0.0561218V0.38269Z"
        fill="#3D63A9"
      />
      <path
        d="M28.6848 0C23.4365 0 19.1723 3.58998 19.1723 8C19.1723 12.4282 23.4365 16 28.6848 16C33.9331 16 38.1973 12.41 38.1973 8C38.1973 3.58998 33.9331 0 28.6848 0ZM28.6848 13.3759C25.0948 13.3759 22.1791 10.9704 22.1791 8C22.1791 5.02961 25.0948 2.62415 28.6848 2.62415C32.2748 2.62415 35.1905 5.02961 35.1905 8C35.1905 10.9704 32.293 13.3759 28.6848 13.3759Z"
        fill="#ADC22F"
      />
      <path
        d="M38.8169 15.836H41.7327V3.58995L48.2201 6.39633L54.7076 3.58995V15.836H57.6233V0.109314H55.4365L48.2201 2.97036L41.0402 0.109314H38.8169V15.836Z"
        fill="#AA2275"
      />
      <path
        d="M58.006 15.836H61.2862L67.6643 3.73574L74.006 15.836H77.3226L68.9217 0.109314H66.4251L58.006 15.836Z"
        fill="#17A3AB"
      />
      <path
        d="M86.1244 0.109314H77.4866V15.836H86.1244C86.1244 15.836 94.7258 15.2528 94.7258 7.99997C94.7258 0.747128 86.1244 0.109314 86.1244 0.109314ZM86.1062 13.3029H80.5117V2.62412H86.1062C86.1062 2.62412 91.6825 3.06148 91.6825 7.98175C91.7008 12.902 86.1062 13.3029 86.1062 13.3029Z"
        fill="#3D63A9"
      />
    </g>
    <defs>
      <clipPath id="clip0_366_190">
        <rect
          width="94.6697"
          height="16"
          fill="white"
          transform="translate(0.0561218)"
        />
      </clipPath>
    </defs>
  </svg>
);

const MobileLogo = ({ width = 71, height = 12, className }: LogoProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 71 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_366_103)">
      <path
        d="M0 0.286987H2.18679V8.69245L11.9863 0.286987H13.7904V11.6993H11.5216V3.29382L1.8041 11.6993H0V0.286987Z"
        fill="#3D63A9"
      />
      <path
        d="M21.4716 0C17.5353 0 14.3372 2.69248 14.3372 6C14.3372 9.32118 17.5353 12 21.4716 12C25.4078 12 28.606 9.30752 28.606 6C28.606 2.69248 25.4078 0 21.4716 0ZM21.4716 10.0319C18.7791 10.0319 16.5923 8.22779 16.5923 6C16.5923 3.77221 18.7791 1.96811 21.4716 1.96811C24.164 1.96811 26.3508 3.77221 26.3508 6C26.3508 8.22779 24.1777 10.0319 21.4716 10.0319Z"
        fill="#ADC22F"
      />
      <path
        d="M29.0706 11.877H31.2573V2.69251L36.1229 4.79729L40.9886 2.69251V11.877H43.1753V0.0820312H41.5352L36.1229 2.22782L30.738 0.0820312H29.0706V11.877Z"
        fill="#AA2275"
      />
      <path
        d="M43.4624 11.877H45.9225L50.7061 2.80185L55.4624 11.877H57.9499L51.6492 0.0820312H49.7768L43.4624 11.877Z"
        fill="#17A3AB"
      />
      <path
        d="M64.5514 0.0820312H58.073V11.877H64.5514C64.5514 11.877 71.0024 11.4397 71.0024 6.00003C71.0024 0.560392 64.5514 0.0820312 64.5514 0.0820312ZM64.5377 9.97725H60.3418V1.96814H64.5377C64.5377 1.96814 68.7199 2.29615 68.7199 5.98636C68.7336 9.67656 64.5377 9.97725 64.5377 9.97725Z"
        fill="#3D63A9"
      />
    </g>
    <defs>
      <clipPath id="clip0_366_103">
        <rect width="71.0023" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// Main Logo component with responsive behavior
const Logo = (props: LogoProps) => {
  return (
    <>
      {/* Desktop Logo - Hidden below md breakpoint */}
      <Box hideBelow="md">
        <DesktopLogo {...props} />
      </Box>
      
      {/* Mobile Logo - Hidden from md breakpoint */}
      <Box hideFrom="md">
        <MobileLogo {...props} />
      </Box>
    </>
  );
};

export default Logo; 