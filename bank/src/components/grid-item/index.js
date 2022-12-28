import React from "react";
import * as C from "./styles";

const GridItem = ({ item }) => {
  return (
    <C.Tr>
      <C.Td>{item.transferenceDate}</C.Td>
      <C.Td>{item.value}</C.Td>
      <C.Td>{item.type}</C.Td>
      <C.Td>{item.transferOperationName}</C.Td>
    </C.Tr>
  );
};

export default GridItem;