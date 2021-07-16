import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
function FindCollege() {
    const [submit, setsubmit] = useState(false);
    const [id, setid] = useState(null);
    const [alldata, setalldata]=useState([]);
    useEffect(() => {
        
        if (id && id.length>4) {
           const url='http://localhost:8000/api/college/'+id;
           console.log(url);
           axios.get(url).then((result)=>{
               const arr=result.data.data;
               console.log(arr);
               setalldata(arr);
           })
     }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);
    const myfun1 = () => {
        setsubmit(true);
    }
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex',flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
            <Form style={{ flex: 1, margin: 50 }}>
                <Form.Group className="mb-3 ">
                    <Form.Label>Search College by Id or Name or Location or courses</Form.Label>
                    <Form.Control type="text" placeholder="Enter College name or Id or location or courses" required onChange={e => { setid(e.target.value); console.log(e.target.value); }} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={myfun1}>
                    Search College
                </Button>
            </Form>
            <div style={{ flex: 1}}>
                <h2>Your Resuts are:</h2>
                <hr/>
                {
                   alldata && alldata.map((a)=>(
                       <>
                       <h4>College Name {': '+a.name}</h4>
                       <h5>College Founded Year {': '+a.founded_year}</h5>
                       <h5>College Id {': '+a.collegeId}</h5>
                       <h5>College Courses Provide {': '+a.courses}</h5>
                       <h5>College State Name {': '+a.state}</h5>
                       <br/><br/>
                       </>
                   ))
                }
            </div>
        </div>
    )
}

export default FindCollege
