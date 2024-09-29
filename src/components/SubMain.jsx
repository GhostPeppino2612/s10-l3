import { Dropdown } from "react-bootstrap";
import { ButtonGroup, Container } from "react-bootstrap";

const SubMain = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <ButtonGroup aria-label="Basic example">
            <Dropdown className="ms-4 mt-1">
              <Dropdown.Toggle
                style={{ backgroundColor: "#221f1f" }}
                className="btn btn-sm rounded-0"
                variant="secondary"
                id="dropdown-basic"
              >
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ButtonGroup>
        </div>
        <div>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </div>
    </>
  );
};

export default SubMain;
