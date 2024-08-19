interface Inputs {
  email: string
}

interface SignupFormProps {
  submitFn: () => void
  setUserEmail: (email: string) => void
}

export { Inputs, SignupFormProps }
