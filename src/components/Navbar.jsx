import './navbar.css';




function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img className='img' src='./src/assets/game.png'></img>
                <h1 className="title">Gamespedia</h1>
            </div>
            <input className="search"
              type="text"
              placeholder="Search Games..."
            />
        </nav>
    )
}

export default Navbar
