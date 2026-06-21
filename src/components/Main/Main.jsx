import { nanoid } from "nanoid";
import Filters from "./Filters";
import Form from "./Form";
import Items from "./Items";
import Stats from "./Stats";
import "./main.css";
import "../../styles/responsive.css";
import { useState, useMemo } from "react";

function Main() {
  const [hobbies, setHobbies] = useState([
    {
      id: nanoid(),
      title: "Max Payne 2",
      category: "game",
      isHighPriority: true,
      isCompleted: false,
    },
    {
      id: nanoid(),
      title: "Vikings",
      category: "movie",
      isHighPriority: false,
      isCompleted: false,
    },
    {
      id: nanoid(),
      title: "Witcher 3",
      category: "book",
      isHighPriority: false,
      isCompleted: true,
    },
  ]);

  const [filterValue, setFilterValue] = useState("all");

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
