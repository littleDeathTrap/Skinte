import { Ingredient, ProductItem } from "@prisma/client";
import { CreamVolume, CreamType } from "../constants/cream";

/**
 * Function for calculating the total cost of a cream
 *
 * @param type - type of dough of the selected cream
 * @param size - volume of cream
 * @param items - variation list
 * @param ingredients - list of ingredients
 * @param selectedIngredients - selected ingredients
 *
 * @returns number total cost
 */
export const calcTotalCreamPrice = (
  type: CreamType,
  size: CreamVolume,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const creamPrice =
    items.find((item) => item.creamType === type && item.volume === size)
      ?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return creamPrice + totalIngredientsPrice;
};
