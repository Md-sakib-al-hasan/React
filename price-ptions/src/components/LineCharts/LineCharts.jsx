import { LineChart, Line,XAxis,YAxis } from 'recharts';
const LineCharts = () => {
  const mathMark= [
    {"name": "Alice", "physics": 75, "chemistry": 80, "math": 85},
    {"name": "Bob", "physics": 65, "chemistry": 70, "math": 70},
    {"name": "Charlie", "physics": 80, "chemistry": 90, "math": 92},
    {"name": "David", "physics": 72, "chemistry": 75, "math": 78},
    {"name": "Emily", "physics": 82, "chemistry": 85, "math": 88},
    {"name": "Fiona", "physics": 60, "chemistry": 55, "math": 63},
    {"name": "George", "physics": 88, "chemistry": 90, "math": 95},
    {"name": "Hannah", "physics": 79, "chemistry": 83, "math": 81},
    {"name": "Isaac", "physics": 70, "chemistry": 75, "math": 72},
    {"name": "Jessica", "physics": 85, "chemistry": 88, "math": 90},
    {"name": "Kevin", "physics": 80, "chemistry": 85, "math": 87}
      ]
    return ( 
        <div>
            <LineChart width={500} height={400} data={mathMark}>
                <XAxis dataKey={name}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
            </LineChart>
        </div>
    );
};

export default LineCharts;