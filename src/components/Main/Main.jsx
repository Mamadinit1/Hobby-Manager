import Filters from "./Filters";
import Form from "./Form";
import Items from "./Items";
import Stats from "./Stats";
import { useState, useMemo, useEffect } from "react";

function Main() {
  const [hobbies, setHobbies] = useState([]);
  const [filterValue, setFilterValue] = useState("all");
  useEffect(() => {
    const localHobbies = JSON.parse(localStorage.getItem("hobbies"));
    localHobbies ? setHobbies(localHobbies) : setHobbies([]);
  }, []);

  useEffect(() => {
    localStorage.setItem("hobbies", JSON.stringify(hobbies));
  }, [hobbies]);

  const filteredHobbies = (() => {
    switch (filterValue) {
      case "all":
        return hobbies;
      case "uncompleted":
        return hobbies.filter((h) => !h.isCompleted);
      case "completed":
        return hobbies.filter((h) => h.isCompleted);
      case "highPriority":
        return hobbies.filter((h) => h.isHighPriority);
      default:
        return hobbies.filter((h) => h.category === filterValue);
    }
  })();

  return (
    <>
      <Stats hobbies={hobbies} />
      <Form
        hobbies={hobbies}
        setHobbies={setHobbies}
        setFilterValue={setFilterValue}
      />
      <Filters filterValue={filterValue} setFilterValue={setFilterValue} />
      <Items hobbies={filteredHobbies} setHobbies={setHobbies} />
    </>
  );
}

export default Main;
