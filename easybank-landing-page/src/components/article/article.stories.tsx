import Article from "."
import { Meta, StoryObj } from "@storybook/react"
import { ArticleProps } from "./article"

export default {
  title: "components/Article",
  component: Article,
  tags: ["autdocs"],
  args: {
    author: "By Adriano",
    imagePath: "/images/image-restaurant.jpg",
    title: "Receive money in any currency with no fees",
    text: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
} as Meta<ArticleProps>

/** Article Component */
export const Primary: StoryObj = {}
