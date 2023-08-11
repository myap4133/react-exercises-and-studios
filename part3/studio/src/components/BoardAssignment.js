import { useState, useEffect } from 'react';

export default function BoardAssignment () {
   const boards = [{label:"A Small Stove", value:"SS"}, {label:"Food Network", value:"FN"}, {label:"House and Home", value:"HH"}];
   const boardOptions = boards.map((board) => {
      return <option value={board.value}>{board.label}</option>;
   });

   const [boardName, setName] = useState('no boards yet!');

   const handleChange = (event) => {
      console.log(event.target.value);
      if(event.target.value === ""){
         setName('no boards yet!');
      }
      else if(event.target.value === "SS"){
         setName(boards[0].label);
      }
      else if(event.target.value === "FN"){
         setName(boards[1].label);
      }
      else{
         setName(boards[2].label);
      }
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select placeholder="no boards yet!" onChange={handleChange}>
         <option value="" >no boards yet!</option>
         {boardOptions}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}