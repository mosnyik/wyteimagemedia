import React from "react";

type HeroSectionProps = {
  title: string;
  highlight?: string; 
  text?: string;
  images: {
    mobile: string; 
    tablet: string; 
    desktop: string; 
    wide?: string; 
  };
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  highlight,
  text,
  images,
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 relative rounded-2xl overflow-hidden p-8 lg:p-12 h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[500px]">
      {/* Responsive Background */}
      <picture>
        {images.wide && (
          <source media="(min-width: 1920px)" srcSet={images.wide} />
        )}
        <source media="(min-width: 1024px)" srcSet={images.desktop} />
        <source media="(min-width: 640px)" srcSet={images.tablet} />
        <img
          src={images.mobile}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover object-right"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text Content */}
      <div className="flex-1 relative z-10 flex flex-col justify-center lg:justify-end">
        <h1
          className="font-FoundersGroteskXCond-Bold text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase leading-none text-white drop-shadow-2xl"
          style={{
            textShadow:
              "2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)",
          }}
        >
          {title}
        </h1>
        {highlight && (
          <h1
            className="font-FoundersGroteskXCond-Bold text-4xl sm:text-6xl md:text-7xl lg:text-9xl uppercase mb-6 sm:mb-8 leading-none text-gold drop-shadow-2xl"
            style={{
              textShadow:
                "2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)",
            }}
          >
            {highlight}
          </h1>
        )}
      </div>

      {text && (
        <div className="lg:max-w-md relative z-10">
          <p className="font-NeueMontreal-Regular text-lg lg:text-xl text-white drop-shadow-md">
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
