
function App() {

  const getIPaddress = ()=>{

  }

  return (
    <div className="container">
      <form className="form_container">
        <h3>Domain to Resolve in IP Address </h3>
        <input
          className="ipInput"
          type="text"
          placeholder="Enter Your Website Name"
        />
        <br />
        <div className="check_box">
          <div>
            <input type="radio" name="ip" /> <label>IPv4 Address</label>
          </div>
          <div>
            <input type="radio" name="ip"/> <label>IPv6 Address</label>
          </div>
        </div>
        <button onClick={getIPaddress()}>Get IP Address</button>
        <p className="output" ></p>
      </form>
    </div>
  );
}

export default App;
