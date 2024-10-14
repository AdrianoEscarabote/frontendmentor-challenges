import AppMain from '@/components/AppMain.vue'

export default {
  title: 'AppMain',
  component: AppMain,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = () => ({
  components: {
    AppMain,
  },
  template: '<div><AppMain /></div>',
})

/** Main component */
export const Primary = Template.bind({})
