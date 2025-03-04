import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>SkyChime - Your Weather Assistant</h1>
        <h4>Good Morning!</h4>
        <h4>Sunday, Mar 2, 9:05 AM</h4>
      </header>
      <Main />
      <Footer />
    </div>
  );
}
