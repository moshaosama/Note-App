import  { Container,Nav,Navbar } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom';
import Add from './Add';
import Notes from './Notes';

import { useSelector } from 'react-redux';
function Home () {
    const state =useSelector(state => state.Nate);
    console.log(state);
    return(
        <>
        <div className='bg-dark'>
        <Navbar>
            <Container className=''>
                <Navbar.Brand className='text-light' id='Text'>My Notes</Navbar.Brand>
                <Nav>
                    <Nav.Link href="">
                        <button type="button" class="btn btn-dark">
                            Search
                        </button>
                    </Nav.Link>               
                </Nav>
            </Container>
        </Navbar>
        </div>
        <Link className='btn btn-dark' to={"Add"} id='Btn-Add'>
            Add
        </Link>
        <div>
            <Routes>
                <Route path='/' element={<Notes/>}></Route>
                <Route path='Add' element={<Add/>}></Route>
            </Routes>
        </div>
        </>
    )
}

export default Home;