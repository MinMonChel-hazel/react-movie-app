import "./App.css";
import MoviesList from "./components/Movies/MoviesList";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className="fixed w-full z-10">
          <Navbar />
          <Search />
        </div>
        <div className="bg-[#032541] min-h-screen pt-28">
          <MoviesList />
        </div>
      </div>
    </>
  );
}

export default App;
