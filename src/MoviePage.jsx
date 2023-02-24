import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function getCharacter() {
      const response = await fetch(
        "https://api.disneyapi.dev/characters/" + id
      );
      const data = await response.json();
      console.log(data);
      setCharacter(data);
    }
    getCharacter();
  }, []);

  return (
    <div>
      {!character ? (
        <p>loading...</p>
      ) : (
        <div>
          <h1>{character.name}</h1>
          <img src={character.imageUrl} alt="" />
        </div>
      )}
    </div>
  );
}
