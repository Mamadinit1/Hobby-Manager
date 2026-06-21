import { useState } from "react";

const FILTER_BUTTONS = [
  { id: "all", label: "همه" },
  { id: "uncompleted", label: "کامل نشده" },
  { id: "completed", label: "انجام شده" },
  { id: "highPriority", label: "اولویت بالا" },
  { id: "movie", label: "فیلم" },
  { id: "book", label: "کتاب" },
  { id: "game", label: "بازی" },
];

function Filters({ filterValue, setFilterValue }) {
  return (
    <div className="filters-container">
      {FILTER_BUTTONS.map((btn) => (
        <button
          key={btn.id}
          className={`filter-btn ${filterValue === btn.id ? "active" : ""}`}
          onClick={() => setFilterValue(btn.id)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

export default Filters;
