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
      shadows: {
        logo: {
          value: "0px 12px 32px 0px #00000040",
        },
      },
    },
  },
});

const theme = createSystem(defaultConfig, config);

export default theme;
