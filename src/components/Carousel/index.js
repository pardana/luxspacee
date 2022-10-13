import React, { useRef, useState, useCallback, useLayoutEffect } from "react";

export default function Carousel({ children, refContainer }) {
  const refDragHandler = useRef(null);
  const [index, setIndex] = useState(0);

  const threshold = 100;
  const itemToShow = window.innerWidth < 767 ? 1 : 4;
  const DIRECTION_LEFT = "DIRECTION_LEFT";
  const DIRECTION_RIGHT = "DIRECTION_RIGHT";

  const posInitial = useRef();
  const posX1 = useRef();
  const posX2 = useRef();
  const posFinal = useRef();
  const isAllowShift = useRef(true);
  const cards = useRef();

  const onDragMove = useCallback((e) => {
    e = e || window.event;
    console.log(e);
  }, []);

  const onDragEnd = useCallback((e) => {
    e = e || window.event;
    console.log(e);
  }, []);

  const onDragStart = useCallback((e) => {
    e = e || window.event;
    console.log(e);
  }, []);

  return (
    <div ref={refDragHandler} className="flex -mx-4 flex-row relative">
      {children}
    </div>
  );
}
