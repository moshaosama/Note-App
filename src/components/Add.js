import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addNote } from "../store/reducers/noteSlice";
import swal  from 'sweetalert2';


function Add () {
    let [Title ,setTitle] =useState('')
    let [Details ,setDetails] =useState('')
    const dispatch =useDispatch()
    const [Num ,setNum] =useState(0);
    const state =useSelector(state => state.Note)
    const Navigate =useNavigate()
    const showDate =new Date();
    const displayDate = showDate.getDate()+"/"+(showDate.getMonth()+1)+"/"+showDate.getFullYear()
    const displayTime =showDate.getHours()+":"+showDate.getMinutes()+":"+showDate.getSeconds()
    return (
        <>
        
        <Container>
            <Form>
                <Form.Control type="text" placeholder="Title" className="Title" id="Title" onChange={(e) => setTitle(e.target.value)}></Form.Control>
            </Form>
            <Form className="Details">
                <Form.Control type="text" placeholder="Write details..." className="Description" onChange={(e) => setDetails(e.target.value)}></Form.Control>
            </Form>
        </Container>
        <div className="btn btn-dark d-flex justify-content-center" id="Btn_save" onClick={() => {
            setNum( Num + 1 );
            dispatch(addNote({id: state.length +1, title: Title , detail :Details ,Time: displayTime ,date: displayDate}))
            Navigate("/")
        }}>
            Save
        </div>
        </>
    )
}

export default Add;



