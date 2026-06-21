function Item() {
  return (
    <div class="item-card completed">
      <div class="cassette-spine"></div>
      <div class="btn-complete-zone">
        <button class="btn-complete">✓</button>
      </div>
      <div class="item-body">
        <div class="item-details">
          <span class="item-title">سریال Succession</span>
          <div class="tags-wrapper">
            <span class="tag tag-series">سریال</span>
            <span class="tag tag-must">اولویت بالا</span>
          </div>
        </div>
        <button class="btn-delete" title="حذف">
          ✕
        </button>
      </div>
    </div>
  );
}

export default Item;
