import type { Meta, StoryObj } from '@storybook/vue3'
import Header from './HeaderComponent.vue'

const meta = {
  title: 'components/Header',
  component: Header,
  render: (args) => ({
    components: { Header },
    setup() {
      return { args }
    },
    template: '<Header />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
