import React from "react";

function Form() {
  return (
    <form class="add-card">
      <span class="section-label">ثبت ورودی جدید</span>
      <div class="form-row">
        <input
          type="text"
          class="input-name"
          placeholder="نام فیلم، سریال یا بازی..."
        />
        <select class="select-type">
          <option value="movie">فیلم</option>
          <option value="series">سریال</option>
          <option value="game">بازی</option>
        </select>
      </div>
      <div class="form-row bottom">
        <label class="checkbox-label">
          <input type="checkbox" />
          حتماً باید ببینم! (اولویت بالا)
        </label>
        <button type="submit" class="btn-submit">
          ثبت در آرشیو
        </button>
      </div>
    </form>
  );
}

export default Form;
