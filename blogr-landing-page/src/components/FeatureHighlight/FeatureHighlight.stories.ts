import type { Meta, StoryObj } from '@storybook/vue3'
import FeatureHighlight from './FeatureHighlight.vue'

const meta = {
  title: 'components/FeatureHighlight',
  component: FeatureHighlight,
  render: (args) => ({
    components: { FeatureHighlight },
    setup() {
      return { args }
    },
    template: '<FeatureHighlight />',
  }),

  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeatureHighlight>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
