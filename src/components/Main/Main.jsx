import Filters from "./Filters";
import Form from "./Form";
import Items from "./Items";
import "./main.css";
import Stats from "./Stats";
import "../../styles/responsive.css";

function Main() {
  return (
    <>
      <Stats />
      <Form />
      <Filters />
      <Items />
    </>
  );
}

export default Main;
