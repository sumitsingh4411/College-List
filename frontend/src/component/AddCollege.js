import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function AddCollege() {
    const [submit, setsubmit] = useState(false);
    const [name, setname] = useState(null);
    const [found, setfound] = useState(null);
    const [state, setstate] = useState(null);
    const [id, setid] = useState(null);
    const [course, setcourse] = useState(null);
    useEffect(() => {
        if(name && found && state && id && course){
        let allcourse=course.split(',');
        axios.post('http://localhost:8000/api/college/register', 
        { name: name, founded_year: found, collegeId: id, state: state, courses: allcourse }).then(() => {
            alert('successfully added');
        })
    }
    },[submit])
    console.log(name)
    const myfun=()=>{
        setsubmit(true);
    }
    return (
        <div style={{ marginTop: '15vh', width: '100%', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Form style={{ flex: 1, margin: 500 }}>
                <Form.Group className="mb-3 ">
                    <Form.Label>College Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter College name" required onChange={e => { setname(e.target.value); }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>College Founded Year</Form.Label>
                    <Form.Control type="text" placeholder="Enter College Founded year" required onChange={e => { setfound(e.target.value); }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>College State</Form.Label>
                    <Form.Control type="text" placeholder="Enter college state name" required onChange={e => { setstate(e.target.value); }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>College College Id</Form.Label>
                    <Form.Control type="text" placeholder="Enter your College Id" required onChange={e => { setid(e.target.value); }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Courses</Form.Label>
                    <Form.Control type="text" placeholder="Enter courses with , seperated" required onChange={e => { setcourse(e.target.value); }} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={myfun}>
                    Add College
                </Button>
            </Form>
        </div>
    )
}
