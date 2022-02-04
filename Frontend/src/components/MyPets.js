import React from "react";

function MyPets() {
  const myPetsList = [
    { id: 1, name: "Melodie", dob: "2015", gender: "female", species: "hamster" },
    { id: 2, name: "Roxy", dob: "2013", gender: "female", species: "cat" },
    { id: 3, name: "Kiwi", dob: "2019", gender: "male", species: "dog" },
    { id: 4, name: "Coopy", dob: "2015", gender: "female", species: "fish" },
    { id: 5, name: "Mango", dob: "2020", gender: "male", species: "raccoon" },
    { id: 6, name: "Floki", dob: "2017", gender: "male", species: "rabbit" },
  ];

  return (
    <div>
        {myPetsList.map((pet) => (
            <div className="pet-box">
            <li>
              {pet.species == "cat"
                ? "😸 "
                : pet.species == "dog"
                ? "🐶 "
                : pet.species == "rabbit"
                ? "🐰 "
                : pet.species == "hamster"
                ? "🐹 "
                : pet.species == 'bird' 
                ? "🐤 "
                : pet.species == 'fish' 
                ? "🐟 "
                : "🐾 "}
              <span style={{ fontWeight: "bold" }}> Name:</span> {pet.name}
              <span style={{ fontWeight: "bold" }}> Species:</span>{" "}
              {pet.species}
              <span style={{ fontWeight: "bold" }}> Date of Birth:</span>{" "}
              {pet.dob}
              <span style={{ fontWeight: "bold" }}> Gender:</span> {pet.gender}
            </li>
            </div>
        ))}
    </div>
  );
}

export default MyPets;
