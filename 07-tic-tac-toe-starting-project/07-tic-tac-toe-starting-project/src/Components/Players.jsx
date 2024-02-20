import { useState } from "react";

export default function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        // setIsEditing(isEditing ? false : true)
        //simpler way of doing the above function
        // setIsEditing(!isEditing)
        //best practice to handle scheduling
      setIsEditing(editing => !editing)
    }
    function handleChange(event){
      // console.log(event)
      setPlayerName(event.target.value)
    }


    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = "Edit"
    if(isEditing){
      editablePlayerName =  <input type="text" required  value = {playerName} onChange={handleChange}/>
      // btnCaption = "Save"
    }
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
