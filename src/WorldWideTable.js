import React from 'react';


const WorldWideTable = ({allCountryScores}) => {
    let allScores = []

    for(let i = 0; i < allCountryScores.length; i++){
        allScores = allScores.concat(allCountryScores[i].scores).sort((a, b) => {
       
               if(a.s > b.s){
                  return -1;
                } else {
                  return 1;
                }})
    }
console.log(allScores)
    return (
         <div id="card-container">
            <table className="table">
            <tbody>
                {allScores.map((item, index) => (
                <tr key={index}>
                   <td>{item.n}</td>
                   <td>{item.s}</td>
                </tr>
                ))

                }
              
            </tbody>
       
          </table>
         </div>
        
         
    )
}

export default WorldWideTable;
