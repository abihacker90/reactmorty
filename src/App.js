import React, {useState, useEffect} from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import PictureRic from "./images/rick_and_morty.png";
import { Button } from "./components/Button";
import List from "./components/List";


function App() {

//  const [count, setCount] = useState(1);
  let characters = useCharacters(1);
  let locations = useLocations(1);

  const [listType, setListType] = useState("description");

  const handleClick = (buttonType) => {

    setListType(buttonType)
  }


  useEffect(() => {
  }, [listType,])





  return (
  <div className="App">
    <header>
      <img id="logo" src={PictureRic} alt="Rick and Morty" width="200px"/>
      <Button id="charButton" value={characters} name="characters" clickFunc={handleClick}  />
      <Button id="locButton" value={locations} name="locations" clickFunc={handleClick} />
    </header>
      <List className="list" type={listType}/>
  </div>
  )
    
  
}

export default App;
