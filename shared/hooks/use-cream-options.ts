import { CreamVolume, CreamType } from "@/shared/constants/cream";
import React from "react";
import { Variant } from "../components/shared/group-variants";
import { useSet } from "react-use";
import { getAvailableCreamSizes } from "../lib";
import { ProductItem } from "@prisma/client";

interface ReturnProps {
  size: CreamVolume;
  type: CreamType;
  selectedIngredients: Set<number>;
  availableSizes: Variant[];
  currentItemId?: number;
  setSize: (size: CreamVolume) => void;
  setType: (size: CreamType) => void;
  addIngredient: (id: number) => void;
}

export const useCreamOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<CreamVolume>(30);
  const [type, setType] = React.useState<CreamType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const availableSizes = getAvailableCreamSizes(type, items);

  const currentItemId = items.find(
    (item) => item.creamType === type && item.volume === size
  )?.id;

  React.useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as CreamVolume);
    }
  }, [type]);

  return {
    size,
    type,
    selectedIngredients,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  };
};
