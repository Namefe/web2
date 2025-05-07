import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HatchEffectBox() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"], // 화면에 진입 ~ 중앙 도달 시
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-30, 0]);

  return (
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="clip-star">
      <path d="M100,10 L120,180 L10,60 H190 L80,180 Z" />
    </clipPath>
  </defs>

  <image 
    href="mask.png" 
    width="200" 
    height="200" 
    clip-path="url(#clip-star)" />
</svg>

  );
}