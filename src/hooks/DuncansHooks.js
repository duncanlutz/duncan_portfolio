import React, { useState, useRef, useEffect } from "react";

export const useElementOnScreen = (cb, options, r) => {
  const contRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(cb, options);
    if (contRef.current) observer.observe(contRef.current);

    return () => {
      if (contRef.current) observer.unobserve(contRef.current);
    };
  }, [contRef, options]);

  return [contRef, isVisible];
};
