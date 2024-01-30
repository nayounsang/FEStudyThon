import CardPreview from "@/component/card-preview";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Card/CardPreview",
  component: CardPreview,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    data: {
      id: 1,
      author: "foobar",
      description: "hello world",
      url: "https://github.com/nayounsang/FEStudyThon",
    },
  },
};
