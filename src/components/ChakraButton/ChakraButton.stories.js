import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    children: {
      control: "text",
    },
    colorScheme: {
      control: "text",
    },
  },
};

export const Success = {
  render: (args) => {
    return <Button {...args} onClick={() => console.log("clicked")} />;
  },
  args: {
    children: "success",
    colorScheme: "green",
  },
};

export const Danger = () => <Button colorScheme="red">Danger</Button>;
