import { Card, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import Add from "./Add";
import Notes from "./Notes";

import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../store/reducers/noteSlice";
import Swal from "sweetalert2";
function Home() {
  const state = useSelector((state) => state.Note);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <>
      <div className="bg-dark">
        <Navbar>
          <Container className="">
            <Navbar.Brand className="text-light" id="Text">
              My Notes
            </Navbar.Brand>
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
      <div>
        {state?.length == 0 ? (
          <>
            <div>
              <h1
                className="text-light"
                style={{
                  height: "33pc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textShadow: "10px 10px 10px #eee",
                }}
              >
                Your Notes is Empty
              </h1>
            </div>
          </>
        ) : (
          <>
            <Container>
              <Row>
                {state.map((el) => {
                  return (
                    <Col sm={12} lg={6} id="Col">
                      <Card className="Card">
                        <Card.Body>
                          <div
                            className="btn btn-danger"
                            id="Oper"
                            onClick={() => {
                              Swal.fire({
                                title: "Are You Sure to Delete it",
                                icon: "question",
                                showCancelButton: true,
                              }).then((data) => {
                                if (data.isConfirmed) {
                                  dispatch(deleteNote(el.id));
                                }
                              });
                            }}
                          >
                            Delete
                          </div>
                          <Card.Title>
                            <h3>"{el.title}"</h3>
                          </Card.Title>
                          <Card.Text>
                            <p>{el.detail}</p>
                          </Card.Text>
                          <div className="Time">
                            <p>{el.Time}</p>
                            <p>{el.date}</p>
                            <p className="text-dark" id="Cor1">
                              ✓
                            </p>
                            <p className="text-dark" id="Cor2">
                              ✓
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </>
        )}
      </div>
      <Link className="btn btn-dark" to={"Add"} id="Btn-Add">
        Add
      </Link>
    </>
  );
}

export default Home;
