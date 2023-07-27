import data from './../data.json';
import {useState} from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    const bowlingList = data;

    function handleClick() {
        if(index < data.length-1){
            setIndex(index + 1);
        }
        else{
            setIndex(0);
        }
    }

    return(
        <div>
            <button onClick={handleClick}>Next</button>
            <br></br>
            <img src={bowlingList[index].imageURL} width="600" height="600" />
            <h1>{bowlingList[index].ball}</h1>
            <h3>Year Made: {bowlingList[index].yearMade}</h3>
            <h3>Alternate Name: {bowlingList[index].alt}</h3>
        </div>
    );
}