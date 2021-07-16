import React, { useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';


let state = {};
let alldata = [];
let mydata = [];
let compu = 0;
let elect = 0;
let it = 0;
let diffdata = [];
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

const chartsdata = {
    labels: ["It", "Computer Science", "Electronics"],
    datasets: [
        {
            label: '# of Votes',
            data: diffdata,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
        },
    ],
};
export default function ChartDesign({ data }) {
    const myalldata = data;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        // eslint-disable-next-line array-callback-return
        myalldata.map((a) => {
            state[a.state] = state[a.state] ? state[a.state] + 1 : 1;
            if (a.courses) {
                const arr = a.courses;
                // eslint-disable-next-line array-callback-return
                arr.map(r => {
                    if (r === "It")
                        it++;
                    else if (r === "Electronics")
                        elect++;
                    else
                        compu++;
                })
            }
        })
        diffdata.push(it);
        diffdata.push(elect);
        diffdata.push(compu);
        for (const [key, value] of Object.entries(state)) {
            alldata.push(key);
            mydata.push(value);
        }
    }, [])
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ height: '25vh', width: '35vw', flex: 1 }}>
                <p style={{ marginLeft: 150 }}>Graph According to College in Different state</p>
                <Doughnut data={dogunutdata} />
            </div>
            <div style={{ height: '25vh', width: '35vw', flex: 1 }}>
                <p style={{ marginLeft: 150, marginTop: 100 }}>Graph According to charts by courses</p>
                <Doughnut data={chartsdata} />
            </div>
        </div>
    )
};
