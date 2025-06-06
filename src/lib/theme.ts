import { createSystem, defaultConfig } from "@chakra-ui/react";

const theme = createSystem(defaultConfig, {
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
    },
  },
});

export default theme;
