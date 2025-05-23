'use client';
import { footerData } from '@/data';
import { Footer as FooterComponent } from 'ecommerce-mxtech';

const Footer = () => {
  return (
    <FooterComponent
      backgroundColor='transparent'
      legal={footerData}
      onRedirect={(path) => {
        window.open(path, '_blank');
      }}
      visaImage='/images/visaMaster.png'
    />
  );
};

export default Footer;
