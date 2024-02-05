import { useEffect, useState } from 'react'

import './App.css'
import Watch from './components/Watch/Watch'
  
function App() {
  const [watches,setWatches] = useState([])
  
      useEffect(()=>{
       fetch('watch.json')
      .then(res => res.json())
      .then(data => setWatches(data.smartwatchFeatures));
      },[])
      console.log(watches)
     
  return (
    <>
      <div>
         {
          watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
         }
       </div>
    </>
  )
}

export default App
