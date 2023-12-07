import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const SmallInput = () => (
  <Input label="small" size="small" placeholder="small size" />
);

export const MediumInput = () => (
  <Input label="medium" size="medium" placeholder="medium size" />
);

export const LargeInput = () => (
  <Input label="large" size="large" placeholder="large size" />
);
