import React,{useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2';


let state = {};
let alldata = [];
let mydata = [];

const dogunutdata = {
    labels: alldata,
    datasets: [
        {
            label: '# of Votes',
            data: mydata,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
        },
    ],
};
export default function ChartDesign({ data }) {
    const myalldata=data;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{
        myalldata.map((a) => {
            state[a.state] = state[a.state] ? state[a.state] + 1 : 1;
        })
        for (const [key, value] of Object.entries(state)) {
            alldata.push(key);
            mydata.push(value);
        }
    },[])
    return (
        <div style={{ display: 'flex', flexDirection:'column' , alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ height: '25vh', width: '35vw', flex:1 }}>
                <Doughnut data={dogunutdata} />
            </div>
            <div style={{ height: '25vh', width: '35vw',flex:1 }}>
                <Doughnut data={dogunutdata} />
            </div>
        </div>
    )
};
