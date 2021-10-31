import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Websites done right. 
      </SectionTitle>
      <SectionText>
      Hey, I'm Nikhil, a web developer & designer from Hyderabad, India.
      <br/>I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:nikhilisaacdev1519@gmail.com'}>Send an Email</Button>
    </LeftSection>
  </Section>
);

export default Hero;