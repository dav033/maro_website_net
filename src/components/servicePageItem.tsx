import React, { useRef, useEffect, useState, useCallback } from "react";
import "../styles/servicePageItem.scss";
import throttle from "lodash/throttle";

import { Link } from "gatsby";

interface Images {
  default: string;
  medium: string;
}
interface Props {
  title: string;
  images: Array<Images>;
  leftOrientation?: boolean;
  children: React.ReactNode;
  idSection: string;
}

function ServicePageItem(props: Props) {
  const { title, images, leftOrientation, children, idSection } = props;

  const elementRef = useRef<HTMLImageElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [topPercentage, setTopPercentage] = useState(85);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (elementRef.current && isVisible) {
      const rect = elementRef.current.getBoundingClientRect();
      const distancia = rect.top;
      const top = Math.round(distancia / 10) * 10;

      if (Math.abs(top) % 40 === 0) {
        if (currentScrollY > scrollY && topPercentage < 95) {
          setTopPercentage((prev) => prev - 0.2);
        } else if (currentScrollY < scrollY && topPercentage < 90) {
          setTopPercentage((prev) => prev + 0.2);
        }
      }

      setScrollY(currentScrollY);
    }
  }, [isVisible, scrollY, topPercentage]);

  useEffect(() => {
    const handleScrollThrottled = throttle(handleScroll, 10000);
    window.addEventListener("scroll", handleScrollThrottled);

    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
    };
  }, [handleScroll]);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setTopPercentage(85);
        }
      });
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [handleIntersection]);

  return (
    <div
      className={leftOrientation ? "servicePageItem left" : "servicePageItem"}
      id={idSection}
    >
      <div
        className={
          images.length > 1 ? "imagesContainer multiple" : "imagesContainer"
        }
      >
        {images.map((image, index) => (
          <picture key={index}>
            <source media="(max-width: 1080px)" srcSet={image.medium} />
            <img
              src={image.default}
              alt={title}
              className={`image${index}`}
              style={index === 1 ? { top: `${topPercentage}%` } : {}}
              ref={index === 1 ? elementRef : null}
            />
          </picture>
        ))}
      </div>
      <div className="body">
        <h1>{title}</h1>
        <p>{children}</p>

        <Link to={`/contact-us/?service=${idSection}`}>Order Now</Link>
      </div>
    </div>
  );
}

export default React.memo(ServicePageItem);
