import type { Meta, StoryObj } from '@storybook/vue3'
import FeatureWithIllustration from './FeatureWithIllustration.vue'

const meta = {
  title: 'components/FeatureWithIllustration',
  component: FeatureWithIllustration,
  render: (args) => ({
    components: { FeatureWithIllustration },
    setup() {
      return { args }
    },
    template: '<FeatureWithIllustration />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FeatureWithIllustration>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
