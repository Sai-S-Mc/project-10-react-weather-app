import "./App.css";
import Footer from "./components/scripts/Footer";
import Main from "./components/scripts/Main";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1 className="gradient">SkyChime - Your Weather Assistant</h1>
        <h4 className="gradient">Good Morning!</h4>
        <h4 className="gradient">Sunday, Mar 2, 9:05 AM</h4>
      </header>
      <Main />
      <Footer />
    </div>
  );
}
