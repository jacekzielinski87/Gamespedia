import Navbar from "./components/Navbar";


function App() {
  
return (
    <div className="app">
      <Navbar/>
    </div>
  )
}

const KEY = '4735e4d2393e43e1b8cfe7487ab8fc4f';

fetch(`https://api.rawg.io/api/platforms?key=${KEY}`)
.then((res) => res.json())
.then((data) => console.log(data));



export default App;
