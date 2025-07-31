
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
  topSpacing = "pt-8 sm:pt-0",
  bottomSpacing = "",
  mobileHeight = "max-h-24",
  tabletHeight = "sm:max-h-20",
  desktopHeight = "md:max-h-32",
  largeDesktopHeight = "lg:max-h-40",
  extraLargeHeight = "xl:max-h-48",
  ultraWideHeight = "2xl:max-h-56"
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
