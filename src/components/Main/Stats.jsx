function Stats({ hobbies }) {
  let completedHobbies = hobbies?.filter((hobby) => {
    return hobby.isCompleted;
  });

  return (
    <div className="stats-strip">
      <div className="stat-stamp">
        <span className="num">{hobbies.length}</span>
        <span className="lbl">همه تفریحات</span>
      </div>
      <div className="stat-stamp">
        <span className="num">{hobbies.length - completedHobbies.length}</span>
        <span className="lbl">کامل نشده</span>
      </div>
      <div className="stat-stamp">
        <span className="num">{completedHobbies.length}</span>
        <span className="lbl">انجام شده</span>
      </div>
    </div>
  );
}

export default Stats;
