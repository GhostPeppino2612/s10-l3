import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams(); // Ottieni il movieId dall'URL
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=6b86c10b&i=${movieId}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Errore nel recuperare i dettagli del film:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${movieId}`,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE5MjUzMDdmMzA0NjAwMWFlNWExMzIiLCJpYXQiOjE3Mjc2MTQwNTUsImV4cCI6MTcyODgyMzY1NX0.QFZ4-ADILDGVwDG-VQMFJcPUbLZn8bBufhd4sCE92pY",
            },
          }
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Errore nel recuperare i commenti:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
    fetchComments();
  }, [movieId]); // Esegui il fetch ogni volta che movieId cambia

  if (loading) return <p>Loading...</p>;

  return (
    <div className="text-white text-center">
      {movie ? (
        <div>
          <div className="mb-4">
            <img src={movie.Poster} alt="" />
          </div>
          <h2 className="display-1">{movie.Title}</h2>
          <div className="lead">
            <p>{movie.Plot}</p>
            <p>Year: {movie.Year}</p>
            <p>Rating: {movie.imdbRating}</p>
            {/* Aggiungi altre informazioni del film qui */}
            <h3>Comments:</h3>
            <div>
              {comments.length > 0 ? (
                comments.map((comment) => <div key={comment._id}>{comment.comment}</div>)
              ) : (
                <p className="fst-italic text-info">Nessun Commento</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-danger fs-1">Nessun Film trovato</p>
      )}
    </div>
  );
};

export default MovieDetails;
