import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(
            ` http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=e94e2fc4409f7cb06fff7b4474723159&targetDt=20230508`
        );
        const json = await response.json();
        setMovies(json.boxOfficeResult.dailyBoxOfficeList);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.rnum}
                            id={movie.movieCd}
                            rank={movie.rank}
                            movieNm={movie.movieNm}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
