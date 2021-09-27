import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [{ number: 5, text: "Open Source Projects" }];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
      <Box>
        <BoxNum>3*</BoxNum>
        <BoxText>At CodeChef</BoxText>
      </Box>
      <Box>
        <BoxNum>5*</BoxNum>
        <BoxText>At HackerRank in Problem Solving</BoxText>
      </Box>
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
