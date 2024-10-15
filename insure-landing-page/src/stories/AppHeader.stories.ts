import AppHeader from '@/components/AppHeader.vue'

export default {
  title: 'AppHeader',
  component: AppHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = () => ({
  components: {
    AppHeader,
  },
  template: '<div><AppHeader /></div>',
})

/** Header component */
export const Primary = Template.bind({})
