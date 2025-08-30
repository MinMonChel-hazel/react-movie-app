import "./App.css";
import MoviesList from "./components/Movies/MoviesList";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Fire from "./assets/fire.png";
import topRated from "./assets/glowing-star.png";
import upcoming from "./assets/partying-face.png";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className=" w-full z-10">
          <Navbar />
          <Search />
        </div>
        <div className="movies_list min-h-screen">
          <MoviesList type="now_playing" title="Now Playing" emoji={Fire} />
          <MoviesList type="popular" title="Popular" emoji={Fire} />
          <MoviesList type="top_rated" title="Top Rated" emoji={topRated} />
          <MoviesList type="upcoming" title="Upcoming" emoji={upcoming} />
        </div>
      </div>
    </>
  );
}

export default App;
