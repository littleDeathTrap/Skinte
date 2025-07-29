"use client";

import React from "react";
import { Input } from "../ui";

interface Props {
  onChange?: (value?: string) => void;
  value?: string;
  className?: string;
}

export const AdressInput: React.FC<Props> = ({
  onChange,
  value,
  className,
}) => {
  return (
    <Input
      type="text"
      placeholder="Enter your address"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={className}
    />
  );
};
