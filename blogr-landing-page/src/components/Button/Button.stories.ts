import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './ButtonComponent.vue'

const meta = {
  title: 'components/Button',
  component: Button,
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<div class="p-4 bg-gray-900"><Button v-bind="args" /></div>',
  }),
  args: {
    text: 'Primary',
    variant: 'primary',
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    text: 'Secondary',
    variant: 'secondary',
  },
}
