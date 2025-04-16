import type { Meta, StoryObj } from '@storybook/vue3'
import TextBlock from './TextBlock.vue'

const meta = {
  title: 'components/TextBlock',
  component: TextBlock,
  render: (args) => ({
    components: { TextBlock },
    setup() {
      return { args }
    },
    template: '<div class="p-4 bg-gray-900"><TextBlock v-bind="args" /></div>',
  }),
  args: {
    title: 'Robust content management',
    description:
      'Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.',
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TextBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
