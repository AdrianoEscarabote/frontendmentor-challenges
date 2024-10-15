import HeroSection from '@/components/HeroSection.vue'

export default {
  title: 'HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = () => ({
  components: {
    HeroSection,
  },
  template: '<div><HeroSection /></div>',
})

/** Hero Section Component */
export const Primary = Template.bind({})
