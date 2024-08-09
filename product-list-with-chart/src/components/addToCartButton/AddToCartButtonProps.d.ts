import { ComponentPropsWithoutRef } from "react";

export interface AddToCartButtonProps
  extends ComponentPropsWithoutRef<"button"> {
  name: string;
  handleIncreaseQuantityFn: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  handleDecreaseQuantityFn: (
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
}
