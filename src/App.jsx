import { useEffect, useState } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => {
          setMonsters(users);
          setFilteredMonsters(users);
        });
    } catch (error) {
      alert("Error in Fetching the Monsters !!!");
    }
  }, []);

  function onChangeHandler(e) {
    const inputValue = e.target.value.toUpperCase();
    const filterArray = monsters.filter((item) =>
      item.name.trim().toUpperCase().includes(inputValue)
    );
    setFilteredMonsters(filterArray);
  }

  return (
    <div>
      <h1 className="app-title">Monsters Roll</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="Search for Monsters"
        onChange={(e) => onChangeHandler(e)}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
