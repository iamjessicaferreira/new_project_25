"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay, { AutoplayOptionsType } from "embla-carousel-autoplay";
import { EmblaOptionsType } from "embla-carousel";
import { home } from "@/app/resources";
import styles from "./Carousel.module.scss";

type PropType = {
  options?: EmblaOptionsType;
};

const userOptions: AutoplayOptionsType = { stopOnInteraction: false, delay: 4000 };

const EmblaCarousel: React.FC<PropType> = ({ options }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay(userOptions)]);

  return (
    <section className={styles.container} dir="rtl">
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.slideContainer}>
          {home.skills.map((skill) => (
            <div className={styles.slide} key={skill.name}>
              <div title={skill.name}>
                <img className={styles.slideImage} src={skill.icon} alt={skill.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
