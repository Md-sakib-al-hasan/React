import { useState } from "react";


const sort = () => {
    const items = [
        { name: "Edward", value: 21 },
        { name: "Sharpe", value: 37 },
        { name: "And", value: 45 },
        { name: "The", value: -12 },
        { name: "Magnetic", value: 13 },
        { name: "Zeros", value: 37 },
      ];
    const [a,seta] = useState([])
    if (a.length == 0){
        seta(items)
    }else{
        console.log('unsuccessful')
    }



      function handel () {
        const nexta = [...a]
        
        nexta.sort((s,k) => k.name.localeCompare(s.name))
        console.log(nexta)
        seta(nexta)
      }
    return (
        <div>
            
            <h1>kamal</h1>
            {
                a.map((itme,id) => <h1 key={id}>{itme.name? seta(Array(9)) : "kamal"}</h1>)
            }
            <button onClick={handel}>clicked</button>
        </div>
    );
};

export default sort;