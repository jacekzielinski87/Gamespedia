import { useEffect, useState } from "react";



function App() {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const[isOpen1, setIsOpen1] = useState(true);
  const[isOpen2, setIsOpen2] = useState(true);




  const KEY = '4735e4d2393e43e1b8cfe7487ab8fc4f';

  useEffect(function() {
    fetch(`https://api.rawg.io/api/platforms?key=${KEY}`)
  .then((res) => res.json())
  .then((data) => console.log(data.results));
  }, []);
  
return (
    <>
    <nav className="nav-bar">
      <div className="logo">
        <img src="src/assets/game.png"></img>
        <h1>Gamespedia</h1>
      </div>
      <input
      className="search"
      type="text"
      placeholder="Search Games..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      />
      <p className="num=results">
        Found <strong>{games.length}results</strong>
      </p>
    </nav>

    <main className="main">
      <div className="box">
        <button
        className="btn-toogle"
        onClick={() => setIsOpen1((open) => !open)}
      >
      {isOpen1 ? "-" : "+"}
        </button>
        {isOpen1 && (
          <ul className="list">
            {games?.map((game) => (
              <li key={game.id}>
                <img src={game.image_background} alt={`${game.name} poster`}/>
                <h3>{game.name}</h3>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="box">
        <button
        className="btn-toogle"
        onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? "-" : "+"}
        </button>
        {isOpen2 && (
          <>
          <div className="summary">
            <h2>Your games</h2>
          </div>
          <p>
            <span>{displayed.lenght} games</span>
          </p>
          </>
        )}
      </div>
    </main>
    </>
  )
}









export default App;
