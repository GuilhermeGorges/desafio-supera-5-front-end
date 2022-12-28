import React from "react";
import GridItem from "../grid-item";
import * as C from "./styles";

const Grid = ({ transference }) => {

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Data</C.Th>
          <C.Th width={40}>Valor</C.Th>
          <C.Th width={40}>Tipo</C.Th>
          <C.Th width={40}>Nome operador transacionado</C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {
          transference?.map((transference, id ) => (
            <GridItem item={transference} key={id} />
          ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;