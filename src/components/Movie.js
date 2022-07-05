import PropTypes from "prop-types";

function Movie({ coverImg, title, genres, summary }) {
  return (
    <div>
      <img src={coverImg} />
      <h2>{title}</h2>
      <h3>genres</h3>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;
