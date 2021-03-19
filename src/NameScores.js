import React from 'react';


const NameScores = (props) => {
    return (
        
            <table className="table text-center bg-success">
            <tbody>
              <tr>
                   <td>{props.n}</td>
                   <td>{props.s}</td>
              </tr>
            </tbody>
       
          </table>
        
    )
}

export default NameScores;
