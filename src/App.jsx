import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Countries from "./components/Countries";

function App() {
  // State pour la liste des pays
  const [list, setList] = useState([]);

  // Fetch API pour obtenir la liste des pays
  const getCountries = async () => {
    const url = `http://localhost:3000/countries`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data) {
        // Vérifier si la réponse est 'True'
        setList(data); // Mettre à jour l'état 'movies' avec les données
      } else {
        setList([]); // Réinitialiser la liste des films
      }
    } catch (error) {
      console.error(error); // Afficher l'erreur dans la console
      setList([]); // Réinitialiser la liste des films
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

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
          <Countries list={list} id="countries" className="countries" />
        </section>
      </main>
    </>
  );
}

export default App;
