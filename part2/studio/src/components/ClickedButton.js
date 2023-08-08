import styling from "../App.css";

function ClickedButton() {
  function handleClick() {
    alert("When clicked, the pin will be removed.");
  }
  return (
    <button id="clickedButton" onClick={handleClick}>
      Saved
    </button>
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
