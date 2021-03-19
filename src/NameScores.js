import React from 'react';


const NameScores = (props) => {
    return (
        
            <table className="table">
            <tbody>
              <tr>
                   <td>{props.n}</td>
                   <td id="player-score">{props.s}</td>
              </tr>
            </tbody>
       
          </table>
        
    )
}

export default NameScores;
