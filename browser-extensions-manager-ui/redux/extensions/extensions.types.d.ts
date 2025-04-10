export interface initialStateType {
  extensions: extension[]
  filter: "all" | "active" | "inactive"
}

export interface extension {
  logo: string
  name: string
  description: string
  isActive: boolean
}
