import './global.css'
import { Preview, setup } from '@storybook/vue3'
import { createPinia } from 'pinia'

const pinia = createPinia()
setup(app => {
  app.use(pinia)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
