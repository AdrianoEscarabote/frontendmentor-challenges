import AppFooter from '@/components/AppFooter.vue'

export default {
  title: 'AppFooter',
  component: AppFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = () => ({
  components: {
    AppFooter,
  },
  template: '<div><AppFooter /></div>',
})

/** Footer component */
export const Primary = Template.bind({})
