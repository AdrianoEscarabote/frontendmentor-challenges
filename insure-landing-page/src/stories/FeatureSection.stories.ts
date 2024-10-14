import FeatureSection from '@/components/FeatureSection.vue'

export default {
  title: 'FeatureSection',
  component: FeatureSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = () => ({
  components: {
    FeatureSection,
  },
  template: '<div><FeatureSection /></div>',
})

/** Feature Section Component */
export const Primary = Template.bind({})
