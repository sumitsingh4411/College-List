import React from 'react'
import TableStyle from './TableStyle';
import ChartDesign from './ChartDesign';

function Home({data}) {
    return (
        <div>
           <div style={{ height: '2vh' }}>
        </div>
        {
            (data && data.length > 0) &&  <TableStyle data={data} />
        }
        <div style={{ height: '4vh' }}>
        </div>
        {
          (data && data.length > 0) && <ChartDesign data={data} />
        } 
        </div>
    )
}

export default Home
