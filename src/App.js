import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-Login-Wrapper">
        <h3>Login</h3>
        <div className="App-Login-Form">
          <form action="/login" method="post">
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" id="App-Login-Form-Password" />
            <input type="submit" value="Login" id="App-Login-Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
