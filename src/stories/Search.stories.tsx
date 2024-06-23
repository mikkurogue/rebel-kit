import React from "react";
import { Story, Meta } from "@storybook/react";
import Search, { SearchProps } from "../components/Search/Search";

export default {
  title: "Example/Search",
  component: Search,
} as Meta;

const Template: Story<SearchProps> = (args: SearchProps) => (
  <Search {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
