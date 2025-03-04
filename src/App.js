import "./App.css";
import SearchForm from "./components/SearchForm";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>SkyChime - Your Weather Assistant</h1>
        <h4>Good Morning!</h4>
        <h4>Sunday, Mar 2, 9:05 AM</h4>
      </header>
      <main>
        <SearchForm />
      </main>
      <footer></footer>
    </div>
  )
}
