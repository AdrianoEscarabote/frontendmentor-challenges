import HowWeWork from '@/components/HowWeWork.vue'

export default {
  title: 'HowWeWork',
  component: HowWeWork,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = () => ({
  components: {
    HowWeWork,
  },
  template: '<div><HowWeWork /></div>',
})

/** How We Work component */
export const Primary = Template.bind({})
