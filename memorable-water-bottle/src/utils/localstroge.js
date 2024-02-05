const setData = (data) => {
    let val =[]
    if (localStorage.getItem('bottle')){
        const updatedUsername = localStorage.getItem('bottle');
        const localdata =  JSON.parse(updatedUsername)
        localdata.push(data)
         val = JSON.stringify(localdata)
    }else{
         val = JSON.stringify([data])
    }
    
    localStorage.setItem('bottle',val)
}
const reciveddata = () => {
   const data = localStorage.getItem('bottle')
    if (!data){
        return []
    }else{
        return JSON.parse(data)
    }

}

export{setData, reciveddata}