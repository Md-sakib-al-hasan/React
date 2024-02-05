import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Audio,Grid } from 'react-loader-spinner'
const Phones = () => {
    const [phones,setPhones] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
       axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
       .then(data => {
          const phoneData = data.data.data;
          const phonesWithFakeData = phoneData.map(phone => {
            const obj = {
                name: phone.phone_name,
                price: parseInt(phone.slug.split('-')[1])
            }
            return obj;
          })
          setPhones(phonesWithFakeData)
          setLoading(false)
       })
    },[])
    return (
        <div>
           { loading && <div>
            <Audio
             height="80"
             width="80"
             radius="9"
             color="green"
             ariaLabel="three-dots-loading"
             wrapperStyle
             wrapperClass
             />
             <Grid
                visible={true}
                height="80"
                width="80"
                color="#4fa94d" 
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
                />
           </div>
       
           }
            <h2 className="text-5xl">Phones {phones.length}</h2>
            <BarChart width={600} height={400} data={phones}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="price" fill="#8884d8" />
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;