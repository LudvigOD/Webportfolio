import './Proj.css'

function Proj() {
  return (
    <div className="proj-container" id="proj">
      <h1 className="proj-header">Projects</h1>
      <div className="proj">
        <h3>Trading Bot</h3>
        <h4>Satus: Finished</h4>
        <img src="client/public/pexels-pixabay-210607.jpg" alt="Trading Bot Image" />
      </div>
      <div className="proj">
        <h3>Redis Database</h3>
        <h4>Satus: On going</h4>
        <img src="client/public/pexels-kevin-ku-92347-577585.jpg" alt="Redis DB Image" />
      </div>
      <div className="proj">
        <h3>Web portfolio</h3>
        <h4>Satus: Finished</h4>
        <img src="client/public/pexels-picjumbo-com-55570-196655.jpg" alt="Webportfolio Image" />
      </div>
      <div className="proj">
        <h3><a>My own React framework</a></h3>
        <h4>Satus: Finished</h4>
        <img src="client/public/pexels-antonio-batinic-2573434-4164418.jpg" alt="React Image" />
      </div>
    </div>

  );
}

export default Proj;