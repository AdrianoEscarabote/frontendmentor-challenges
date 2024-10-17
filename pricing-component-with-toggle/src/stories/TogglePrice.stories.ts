import TogglePrice from '@/components/TogglePrice.vue'

export default {
  title: 'TogglePrice',
  component: TogglePrice,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = () => ({
  components: {
    TogglePrice,
  },
  template: '<div><TogglePrice /></div>',
})

/** TogglePrice Component */
export const Default = Template.bind({})
