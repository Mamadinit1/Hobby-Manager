import React, { useState } from "react";
import { nanoid } from "nanoid";

function Form({ hobbies, setHobbies, setFilterValue }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState(false);

  const addHobby = (e) => {
    e.preventDefault();
    if (!title || !category) return;
    let newHobby = {
      id: nanoid(),
      title: title,
      category: category,
      isHighPriority: priority,
      isCompleted: false,
    };
    setHobbies((prev) => [...prev, newHobby]);

    setTitle("");
    setCategory("");
    setPriority(false);
    setFilterValue("all");
  };

  return (
    <form className="add-card" onSubmit={(e) => addHobby(e)}>
      <span className="section-label">ثبت ورودی جدید</span>
      <div className="form-row">
        <input
          type="text"
          className="input-name"
          placeholder="نام فیلم، سریال یا بازی..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="select-type"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="" disabled>
            -- انتخاب کن --
          </option>
          <option value="movie">فیلم</option>
          <option value="book">کتاب</option>
          <option value="game">بازی</option>
        </select>
      </div>
      <div className="form-row bottom">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={priority}
            onChange={(e) => setPriority(e.target.checked)}
          />
          حتماً باید ببینم! (اولویت بالا)
        </label>
        <button type="submit" className="btn-submit">
          ثبت در آرشیو
        </button>
      </div>
    </form>
  );
}

export default Form;
