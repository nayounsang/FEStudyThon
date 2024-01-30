import CardPreviewSkeleton from "@/component/card-preview/skeleton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Card/CardPreview/skeleton",
  component: CardPreviewSkeleton,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardPreviewSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
