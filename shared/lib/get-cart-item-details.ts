import { CreamVolume, CreamType, mapCreamType } from "../constants/cream";
import { CartStateItem } from "./get-cart-details";

export const getCartItemDetails = (
  ingredients: CartStateItem["ingredients"],
  creamType?: CreamType,
  creamVolume?: CreamVolume
): string => {
  const details = [];

  if (creamVolume && creamType) {
    const typeName = mapCreamType[creamType];
    details.push(`${typeName} ${creamVolume} ml`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(", ");
};
