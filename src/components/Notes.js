import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../store/reducers/noteSlice";
import Swal from "sweetalert2";

function Notes() {
  //Date.now()
  const state = useSelector((state) => state.Note);
  const dispatch = useDispatch();
  console.log(state);
  return (
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
  );
}

export default Notes;
