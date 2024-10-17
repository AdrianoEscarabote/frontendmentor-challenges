import PriceCard from '@/components/PriceCard.vue'

export default {
  title: 'PriceCard',
  component: PriceCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    planName: 'Basic Plan',
    monthlyPrice: '10',
    yearlyPrice: '100',
    storage: '1TB Storage',
    usersAllowed: 5,
    sendLimit: '5GB',
    primary: true,
  },
}

const Template = (args: any) => ({
  components: { PriceCard },
  setup() {
    return { args }
  },
  template: '<PriceCard v-bind="args" />',
})

/** Price Card Component */
export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Object.assign(Secondary, {
  args: {
    planName: 'Pro Plan',
    monthlyPrice: '20',
    yearlyPrice: '200',
    storage: '2TB Storage',
    usersAllowed: 10,
    sendLimit: '10GB',
    primary: false,
  },
})
