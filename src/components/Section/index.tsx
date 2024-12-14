import { ReactNode } from "react";
import { SectionContainer, SectionContent } from "./styles";

const Section = ({ children }: { children: ReactNode }) => {
  return (
    <SectionContainer>
      <SectionContent>{children}</SectionContent>
    </SectionContainer>
  );
};

export default Section;
