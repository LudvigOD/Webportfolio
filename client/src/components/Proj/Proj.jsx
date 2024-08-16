import './Proj.css'

function Proj() {
  return (
    <div className="proj-container" id="proj">
      <h1 className="proj-header">Projects</h1>
      <div className="proj">
        <h3>Trading Bot</h3>
        <h4>Satus: Finished</h4>
        {/* <img src="" alt="Trading Bot Image" /> */}
      </div>
      <div className="proj">
        <h3>Redis Database</h3>
        <h4>Satus: On going</h4>
        {/* <img src="" alt="Redis DB Image" /> */}
      </div>
      <div className="proj">
        <h3>Web portfolio</h3>
        <h4>Satus: Finished</h4>
        {/* <img src="" alt="Webportfolio Image" /> */}
      </div>
      <div className="proj">
        <h3>My own React framework</h3>
        <h4>Satus: Finished</h4>
        {/* <img src="" alt="React Image" /> */}
      </div>
    </div>
    
  );
}

export default Proj;