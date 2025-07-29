import { ProductItem } from "@prisma/client";
import { CreamType, creamSizes } from "../constants/cream";
import { Variant } from "../components/shared/group-variants";

export const getAvailableCreamSizes = (
  type: CreamType,
  items: ProductItem[]
): Variant[] => {
  const filteredCreamsByType = items.filter((item) => item.creamType === type);

  return creamSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredCreamsByType.some(
      (cream) => Number(cream.volume) === Number(item.value)
    ),
  }));
};
