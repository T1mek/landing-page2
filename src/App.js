function App() {
  return (
    <div className="app">
      <div className="main">
        <div className="header">
          <div className="logo">
            <img src="/img/logo.png" alt="Logo" />
            <p>EMBRACING EVERY STEP</p>
          </div>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
          <div className="search">
            <img src="/img/search.png" alt="Search" />
          </div>
        </div>
        <div className="title">
          <h1>
            FOR EVERY STEP, <br></br>{" "}
            <b>
              WE HAVE <br></br>SOMETHING
            </b>
          </h1>
        </div>
        <div className="picture">
          <div className="click">
            <button>
              <b>SHOP</b>
            </button>
            <img src="/img/bold.png" alt="bold" />
          </div>
          <img className="p1" src="/img/main.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
