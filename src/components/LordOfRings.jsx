import { Component } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class LordOfRings extends Component {
  state = {
    movies: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=6b86c10b&s=lord of rings")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella Fetch");
        }
      })
      .then((obj) => {
        this.setState({ movies: obj.Search });
      })
      .catch((err) => console.log(err))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <>
        <div className="d-flex gap-3">
          <h4>New Releases</h4>
          {this.state.isLoading && <Spinner animation="grow" variant="danger" />}
        </div>
        <Row xs={{ cols: 1 }} sm={{ cols: 2 }} md={{ cols: 6 }} className="mb-4">
          {this.state.movies.map((e, i) => {
            return (
              i < 6 && (
                <Col mb="2" key={`lor-${e.imdbID}`} className="mb-2 text-center px-1">
                   <NavLink to={`/movie-detail/${e.imdbID}`}>
                    <img src={e.Poster} className="img-fluid" alt="movie" />
                  </NavLink>
                </Col>
              )
            );
          })}
        </Row>
      </>
    );
  }
}

export default LordOfRings;
