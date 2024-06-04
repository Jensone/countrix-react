import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <main>
        <header>
          <h1>Liste des Pays</h1>
          <p className="text-medium">
            Voici la liste des pays de notre registre.
          </p>
        </header>
        <section className="flex">
          {/* <Countries={list} id="countries" className="countries"/> */}
        </section>
      </main>
    </>
  );
}

export default App;
