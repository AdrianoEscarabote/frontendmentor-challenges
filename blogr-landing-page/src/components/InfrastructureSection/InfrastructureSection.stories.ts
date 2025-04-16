import type { Meta, StoryObj } from '@storybook/vue3'
import InfrastructureSection from './InfrastructureSection.vue'

const meta = {
  title: 'components/InfrastructureSection',
  component: InfrastructureSection,
  render: (args) => ({
    components: { InfrastructureSection },
    setup() {
      return { args }
    },
    template: '<InfrastructureSection  />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof InfrastructureSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
