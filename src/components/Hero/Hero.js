import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I look forward to learn new skills and improve my knowledge to
          advance my career. In three years from now, I see myself as a
          knowledgeable professional having an in-depth knowledge of the company
          and the industry.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
