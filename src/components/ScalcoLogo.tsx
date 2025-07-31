
import React from 'react';

interface ScalcoLogoProps {
  className?: string;
  // Customizable positioning
  topSpacing?: string;
  bottomSpacing?: string;
  // Customizable sizing for different breakpoints
  mobileHeight?: string;
  tabletHeight?: string;
  desktopHeight?: string;
  largeDesktopHeight?: string;
  extraLargeHeight?: string;
  ultraWideHeight?: string;
}

const ScalcoLogo: React.FC<ScalcoLogoProps> = ({
  className = "",
  topSpacing = "pt-8",
  bottomSpacing = "",
  mobileHeight = "max-h-48",
  tabletHeight = "sm:max-h-32",
  desktopHeight = "md:max-h-48",
  largeDesktopHeight = "lg:max-h-80",
  extraLargeHeight = "xl:max-h-96",
  ultraWideHeight = "2xl:max-h-[28rem]"
}) => {
  const logoClasses = `
    ${topSpacing} 
    ${bottomSpacing} 
    ${mobileHeight} 
    ${tabletHeight} 
    ${desktopHeight} 
    ${largeDesktopHeight} 
    ${extraLargeHeight} 
    ${ultraWideHeight} 
    w-auto 
    object-contain 
    ml-0 md:mx-auto
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <img 
      src="/lovable-uploads/1fb3e78a-ba18-46de-9a0b-ae1ca0b9a55b.png" 
      alt="Grupo Scalco Logo" 
      className={logoClasses}
    />
  );
};

export default ScalcoLogo;
