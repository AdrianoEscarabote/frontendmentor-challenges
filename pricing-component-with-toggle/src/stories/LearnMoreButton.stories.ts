import LearnMoreButton from '@/components/LearnMoreButton.vue'

export default {
  title: 'LearnMoreButton',
  component: LearnMoreButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    primary: true,
  },
}

const Template = (args: any) => ({
  components: { LearnMoreButton },
  setup() {
    return { args }
  },
  template: '<LearnMoreButton v-bind="args" />',
})

/** LearnMoreButton Component */
export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Object.assign(Secondary, {
  args: {
    primary: false,
  },
})
