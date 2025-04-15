import type { Meta, StoryObj } from '@storybook/vue3'
import Footer from './FooterComponent.vue'

const meta = {
  title: 'components/Footer',
  component: Footer,
  render: (args) => ({
    components: { Footer },
    setup() {
      return { args }
    },
    template: '<Footer />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
