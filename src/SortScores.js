import React from 'react';
import NameScores from './NameScores'; 

const SortScores = ({scores, isAscending}) => {

    function descendingSrores(a, b){
       
               if(a.s > b.s){
                  return -1;
                } else {
                  return 1;
                }}
    
    function  ascendingScores(a, b){
    
               if(a.s > b.s){
                  return 1;
                } else {
                  return -1;
                }}      

    return (
        <div>
           {scores.sort(isAscending ? ascendingScores : descendingSrores)
            .map((score, index) => (
              <NameScores key={index} n={score.n} s={score.s} />
            ))} 
        </div>
    )
}

export default SortScores;
