import React, { useState, useEffect } from "react";
import "./MoviesPage.css";
import { Link } from "react-router-dom";

export default function MoviesPage() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch("https://api.disneyapi.dev/characters");
      const data = await response.json();
      console.log(data.data);
      setCharacters(data.data);
    }
    getCharacters();
  }, []);

  return (
    <div>
      {!characters ? (
        <p>loading...</p>
      ) : (
        <div className="movies-container">
          {characters.map((character) => (
            <Link to={"/movies/" + character._id} key={character._id}>
              <img
                src={character.imageUrl}
                alt=""
                height="150"
                width="150"
                style={{ objectFit: "contain" }}
              />
              <h4>{character.name}</h4>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
