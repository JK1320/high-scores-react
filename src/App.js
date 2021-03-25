import {useState} from 'react';
import './App.css';
import allCountryScores from './allCountryScores';
import NameCountry from './NameCountry';
import ButtonSortOrderScores from './ButtonSortOrderScores';
import SortScores from './SortScores';
import WorldWideTable from './WorldWideTable';


function App() {
  const [isAscending, setIsAscending] =  useState(true); 

  function clickHandler(){
    setIsAscending(!isAscending)
  }

  allCountryScores.sort((a, b) => {
    if(a.name < b.name){
      return -1;
    } else {
      return 1;
    }
  })
  
  return (
    <div className="App card-body">
      <h1>Descending Scores' Order: all Players</h1>
      <WorldWideTable allCountryScores={allCountryScores}/>
      <h1>High Scores per Country</h1>
      <ButtonSortOrderScores clickHandler={clickHandler} />
        {allCountryScores.map((item, index) => (
          <div id="card-container" key={index}>
            <NameCountry name={item.name}/>
            <SortScores isAscending={isAscending} scores={item.scores}/>   
          </div>
        ))
      
       }    
    </div>
  );
}

export default App;
