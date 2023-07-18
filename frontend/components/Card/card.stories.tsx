import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./index";
import { ICardProps } from "./index";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    background: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: ICardProps) => (
  <Card {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: "Card Title",
  sub: "Card Subtitle",
  showSub: false,
  background: "yellow",
  imgUrl:
    "https://images.unsplash.com/photo-1612835362596-4b0b2a2b0b0f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZCUyMHN0YXRpb258ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
  children: "Card Content",
};
