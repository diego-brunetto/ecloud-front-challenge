import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: "var(--font-gibson), sans-serif",
        },
        body: {
          value: "var(--font-gibson), sans-serif",
        },
      },
      colors: {
        brand: {
          blue: {
            value: "#3D63A9",
          },
          green: {
            value: "#ADC22F",
          },
          magenta: {
            value: "#AA2275",
          },
          black: {
            value: "#2B2B2B",
          },
        },
      },
      shadows: {
        base: {
          value: "0px 12px 32px 0px #00000040",
        },
      },
    },
  },
});

const theme = createSystem(defaultConfig, config);

export default theme;
