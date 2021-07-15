import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
export default function AddStudent() {
    const [submit, setsubmit] = useState(false);
    const [name, setname] = useState(null);
    const [year, setyear] = useState(null);
    const [id, setid] = useState(null);
    const [skills, setskills] = useState(null);
    const [collegeId, setcollegeid] = useState(null);
    useEffect(() => {
        if (name && year && id && skills && collegeId) {
            let allcourse = skills.split(',');
            axios.post('http://localhost:8000/api/student/register',
                { name: name, year_of_batch: year, collegeId: collegeId, skills: allcourse, studentId: id }).then(() => {
                    alert('successfully added');
                })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submit])
    console.log(name)
    const myfun = () => {
        setsubmit(true);
    }
    return (
        <div style={{ marginTop: '15vh', width: '100%', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Form style={{ flex: 1, margin: 500 }}>
                <Form.Group className="mb-3 ">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your name" required onChange={e => { setname(e.target.value); }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Student Id</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Student Id" required onChange={e => { setid(e.target.value); }} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Year of batch</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Year of batch" required onChange={e => { setyear(e.target.value); }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>College Id</Form.Label>
                    <Form.Control type="text" placeholder="Enter your College Id" required onChange={e => { setcollegeid(e.target.value); }} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Skills</Form.Label>
                    <Form.Control type="text" placeholder="Enter your skills with , seperated" required onChange={e => { setskills(e.target.value); }} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={myfun}>
                    Add Student
                </Button>
            </Form>
        </div>
    )
}
