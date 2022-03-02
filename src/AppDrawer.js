import './AppDrawer.css';

function AppDrawer() {
  return (
    <div className="App">
      <div>
        <h2>SubTest :</h2>
        Sub module
      </div>
      {/* <div style={{width:"50px", backgroundColor:"red", height:"50px", position:"absolute", top:"50px", left:"150px"}}></div> */}
      <br/>
      <div className="divtext">
        text from sub SubTest
      </div>
    </div>
  );
}

export default AppDrawer;
