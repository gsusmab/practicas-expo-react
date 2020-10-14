import React, { ReactNode } from "react";
import { View } from "react-native";

type RowProps = {
  children: ReactNode;
};

export const Row = ({ children }: RowProps) => (
  <View style={{ flexDirection: "row", flex: 1 }}>{children}</View>
);
