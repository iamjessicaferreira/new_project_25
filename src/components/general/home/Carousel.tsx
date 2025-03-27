"use client";

import React from "react";
import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay";
import { EmblaOptionsType } from "embla-carousel";
import { home } from "@/app/resources";

type PropType = {
  options?: EmblaOptionsType;
};

const userOptions: AutoplayOptionsType = { stopOnInteraction: false, delay: 4000 };
const EmblaCarousel: React.FC<PropType> = ({ options }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay(userOptions)]);

  return (
    <EmblaContainer dir="rtl">
      <EmblaViewport ref={emblaRef}>
        <EmblaSlideContainer>
          {home.skills.map((skill, index) => (
            <EmblaSlide key={index}>
              <div>
                <div>
                  <EmblaSlideImage src={skill.icon} />
                </div>
              </div>
            </EmblaSlide>
          ))}
        </EmblaSlideContainer>
      </EmblaViewport>
    </EmblaContainer>
  );
};

export default EmblaCarousel;

const EmblaContainer = styled.section`
  max-width: 80rem;
  padding: 42px;
  margin: auto;
  --slide-height: 5rem;
  --slide-spacing: 0.5rem;
  --slide-size: 9.5%; 

  @media (max-width: 1200px) {
    --slide-size: 20%; 
  }

  @media (max-width: 768px) {
    --slide-size: 50%;
    --slide-spacing: 1rem; 
    padding: 20px;
  }

  @media (max-width: 480px) {
    --slide-size: 80%;
    --slide-spacing: 1.5rem;
    padding: 10px;
  }
`;

const EmblaViewport = styled.div`
  overflow: hidden;
`;

const EmblaSlideContainer = styled.div`
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(var(--slide-spacing) * -1);
`;

const EmblaSlide = styled.div`
  transform: translate3d(0, 0, 0);
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
`;

const EmblaSlideImage = styled.img`
  box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
  border-radius: 1.8rem;
  font-size: 4rem;
  font-weight: 600;
  height: var(--slide-height);
  user-select: none;
  padding: 3px;
  width: 100%; 
  object-fit: contain; 
`;
