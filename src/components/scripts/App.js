import "../styles/App.css";
import Footer from "./Footer";
import Main from "./Main";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1 className="mt-4 mb-4 gradient">
          SkyChime - Your Weather Assistant
        </h1>
        <h6 className="gradient">Good Morning!</h6>
        <h6 className="mb-4 gradient">Sunday, Mar 2, 9:05 AM</h6>
      </header>
      <Main />
      <Footer />
    </div>
  );
}
