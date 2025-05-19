import { useEffect, useRef } from 'react';
import View01 from './view01';
import View02 from './view02';
import View04 from './view04';
import View05 from './view05';
import View06 from './view06';
import View01M from './view01M';

export default function HomePage({ onDarkSectionChange }) {
  const section06Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onDarkSectionChange(entry.isIntersecting);
      },
      { threshold: 0.6 } 
    );

    if (section06Ref.current) {
      observer.observe(section06Ref.current);
    }

    return () => {
      if (section06Ref.current) {
        observer.unobserve(section06Ref.current);
      }
    };
  }, [onDarkSectionChange]);

  return (
    <div>
      <View01 />
      <View01M />
      <View02 />
      <View04 />
      <View05 />
      <div ref={section06Ref}>
        <View06 />
      </div>
    </div>
  );
}
