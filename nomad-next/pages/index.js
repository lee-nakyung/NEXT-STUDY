import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

export default function Home() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    (async () => {
      const tmdbResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
      const { results: tmdbResults } = await tmdbResponse.json();
      
      const localResponse = await fetch(`/api/movies`);
      const { results: localResults } = await localResponse.json();
      
      // 이 부분에서 원하는대로 두 결과를 병합하거나 선택하실 수 있습니다.
      // 여기서는 tmdbResults를 사용하겠습니다.
      setMovies(tmdbResults);
    })();
  }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {!movies.length && <h4>Loading...</h4>}
      {movies.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
