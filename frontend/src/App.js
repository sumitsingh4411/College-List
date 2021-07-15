import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ChartDesign from './component/ChartDesign';
import NavbarStyle from './component/NavbarStyle';
import TableStyle from './component/TableStyle';

function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/college/').then((result) => {
      const arr = result.data.data;
      setdata(arr);
    })
  }, [])
  console.log(data);
  return (
    <div>
      <NavbarStyle />
      <div style={{ height: '2vh' }}>
      </div>
      <TableStyle data={data} />
      <div style={{ height: '4vh' }}>
      </div>
      {
        data.length>0 && <ChartDesign data={data} />
      }
    </div>
  );
}

export default App;
