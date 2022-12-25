import React from "react";
import * as C from "./styles";

const GridItem = ({ transference }) => {
  return (
    <C.Tr>
      <C.Td>{transference.data}</C.Td>
      <C.Td>{transference.value}</C.Td>
      <C.Td>{transference.type}</C.Td>
      <C.Td>{transference.transferOperationName}</C.Td>
    </C.Tr>
  );
};

export default GridItem;