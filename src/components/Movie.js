import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ rank, movieNm, id }) {
    return (
        <div>
            <p>{rank}</p>

            <h2>
                <Link to={`/movie/${id}`}>{movieNm}</Link>
            </h2>
            <hr></hr>
        </div>
    );
}

Movie.prototype = {
    id: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    movieNm: PropTypes.string.isRequired,
};

export default Movie;
