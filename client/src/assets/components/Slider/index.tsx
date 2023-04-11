import React from "react";
import "./css/style.css";
import { useActiveIndexState } from "./hook/useActiveIndexState";
import { items } from "./data/arrayItems";
import { CarouselItem as SliderlItem } from "./SliderlItem";

export const Slider = () => {
  const { activeIndex, setActiveIndex } = useActiveIndexState();

  // Обновить индекс
  const updateIndex = (newIndex: React.SetStateAction<number>) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      {/* Содержимое слайдера */}
      <div
        className="inner"
        style={{
          transform: `translate(-${activeIndex * 100}%)`
        }}
      >
        {items.map((item, i) => {
          return <SliderlItem key={i++} item={item} width={"100%"} />;
        })}
      </div>
      <div className="carousel-buttons">
        {/* Кнопка назад */}
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">{"<--"}</span>
        </button>
        {/* Буллиты */}
        <div className="indicators">
          {items.map((_item, index) => {
            return (
              <button
                key={index}
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  key={index}
                  className={`material-symbols-outlined 
                  ${index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                    }`}
                >
                  .
                </span>
              </button>
            );
          })}
        </div>
        {/* Конпка назад */}
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">{"-->"}</span>
        </button>
      </div>
    </div>
  );
};