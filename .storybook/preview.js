import { Box, CSSReset, ChakraProvider } from "@chakra-ui/react";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" }, // story writing 정렬 방식
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ChakraProvider>
        <CSSReset />
        <Box m="4">
          <Story />
        </Box>
      </ChakraProvider>
    ),
  ],
};

export default preview;
