import { mount } from "marketing/Marketing";
import React, { useRef, useEffect } from "react";

export const MarketinApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
