function Item({ hobby, setHobbies }) {
  const completeHobby = () => {
    setHobbies((prev) =>
      prev.map((item) =>
        item.id === hobby.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item,
      ),
    );
  };

  const deleteHobby = (id) => {
    setHobbies((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={`item-card ${hobby.isCompleted ? "completed" : " "}`}>
      <div className="cassette-spine"></div>
      <div className="btn-complete-zone">
        <button className="btn-complete" onClick={() => completeHobby()}>
          ✓
        </button>
      </div>
      <div className="item-body">
        <div className="item-details">
          <span className="item-title">{hobby.title}</span>
          <div className="tags-wrapper">
            <span
              className={`tag ${hobby.category === "game" ? "tag-game" : hobby.category === "movie" ? "tag-book" : "tag-movie"}`}
            >
              {`${hobby.category === "game" ? "بازی" : hobby.category === "movie" ? "فیلم" : "کتاب"}`}
            </span>
            {hobby.isHighPriority ? (
              <span className="tag tag-must">اولویت بالا</span>
            ) : (
              ""
            )}
          </div>
        </div>
        <button
          className="btn-delete"
          title="حذف"
          onClick={() => deleteHobby(hobby.id)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Item;
