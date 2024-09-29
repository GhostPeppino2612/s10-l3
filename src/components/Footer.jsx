import { Button, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer>
        <Row className="justify-content-center mt-5">
          <Col xs="6">
            <Row>
              <Col className="mb-2">
                <i className="bi bi-facebook footer-icon me-2"></i>
                <i className="bi bi-instagram footer-icon me-2"></i>
                <i className="bi bi-twitter-x footer-icon me-2"></i>
                <i className="bi bi-youtube footer-icon"></i>
              </Col>
            </Row>
            <Row xs={{ cols: 1 }} sm={{ cols: 2 }} md={{ cols: 4 }}>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href>
                        Audio and Subtitles
                      </a>
                    </p>
                    <p>
                      <a href>
                        Media Center
                      </a>
                    </p>
                    <p>
                      <a href>
                        Privacy
                      </a>
                    </p>
                    <p>
                      <a href>
                        Contact us
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href>
                        Audio Description
                      </a>
                    </p>
                    <p>
                      <a href>
                        Investor Relations
                      </a>
                    </p>
                    <p>
                      <a href>
                        Legal Notices
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href>
                        Help Center
                      </a>
                    </p>
                    <p>
                      <a href>
                        Jobs
                      </a>
                    </p>
                    <p>
                      <a href>
                        Cookie Preferences
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col className="footer-links">
                    <p>
                      <a href>
                        Gift Cards
                      </a>
                    </p>
                    <p>
                      <a href>
                        Terms of Use
                      </a>
                    </p>
                    <p>
                      <a href>
                        Corporate Information
                      </a>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="md-2">
                <Button className="btn btn-sm footer-button rounded-0 mt-3">Service Code</Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </>
  );
};

export default Footer