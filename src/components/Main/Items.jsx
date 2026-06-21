import Item from "./Item";

function Items({ hobbies, setHobbies }) {
  return (
    <div className="items-list">
      {hobbies.length === 0 ? (
        <div className="empty-state" id="emptyState">
          چیزی توی این قفسه نیست. یه چیزی اضافه کن!
        </div>
      ) : (
        hobbies.map((hobby) => {
          return <Item hobby={hobby} key={hobby.id} setHobbies={setHobbies} />;
        })
      )}
    </div>
  );
}

export default Items;
