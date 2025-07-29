import { calcTotalCreamPrice } from "./calc-total-cream-price";
import { Ingredient, ProductItem } from "@prisma/client";
import { CreamVolume, CreamType, mapCreamType } from "../constants/cream";

export const getCreamDetails = (
  type: CreamType,
  size: CreamVolume,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcTotalCreamPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );
  const textDetaills = `${size} ml, ${mapCreamType[type]}`;

  return { totalPrice, textDetaills };
};
