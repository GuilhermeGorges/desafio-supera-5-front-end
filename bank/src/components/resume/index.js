import React from "react";
import ResumeItem from "../resume-item";
import * as C from "./styles";
import {
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ total, expense }) => {
  return (
    <C.Container>
      <ResumeItem title="Saldo Total" Icon={FaDollarSign} value={total} />
      <ResumeItem title="Saldo no Periodo" Icon={FaDollarSign} value={expense} />
    </C.Container>
  );
};

export default Resume;