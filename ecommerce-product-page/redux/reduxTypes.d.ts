export interface initialStateType {
  name: string;
  price: number;
  quantity: number;
}

export interface rootState {
  productSlice: initialStateType[];
}
