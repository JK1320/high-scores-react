import './App.css';
import allCountryScores from './allCountryScores';
import NameScores from './NameScores';
import NameCountry from './NameCountry';



function App() {
  allCountryScores.sort((a, b) => {
    if(a.name < b.name){
      return -1;
    } else {
      return 1;
    }
  })
  
  return (
    <div className="App card-body">
      <h1>High Scores per Country</h1>
      
        {allCountryScores.map((item, index) => (
          <div key={index}>
            <NameCountry name={item.name}/>
            {item.scores.sort((a, b) => {
               if(a.s > b.s){
                  return -1;
                } else {
                  return 1;
                }
            })
            .map((score, index) => (
              <NameScores key={index} n={score.n} s={score.s} />
            ))}
          </div>
        ))
      
       }
       
        
    </div>
  );
}

export default App;
