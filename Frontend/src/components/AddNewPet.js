import React, { useState } from "react";
// import 'index.css'

function AddNewPet({onAddPets}) {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("Male");
    const [species, setSpecies] = useState("");
  

  function onChangeGender(event) {
    setGender(event.target.value);
  }

  function onChangeSpecies(event) {
    setSpecies(event.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // setSubmitPressed(true);

    if (!name) {
      return;
    }

    if (!dob) {
      return;
    }

    if (!gender) {
      return;
    }

    if (!species) {
      return;
    }

    onAddPets({ name, dob, gender, species });
    // setSubmitPressed(false);
    setName("");
    setDob("");
    setGender("");
    setSpecies("");
  };
  console.log(species);
  return (
    <form onSubmit={onSubmit}>
      <div className="add-pet-box">
        <div style={{ fontWeight: "bold" }}>Pet Name</div>
        <input
          style={{ width: "100%" }}
          type="text"
          placeholder="Pet Name"
          value={name}
          onChange={(e) => setName(e.target.name)}
        />
        <div style={{ fontWeight: "bold" }}>Date of Birth</div>
        <input
          style={{ width: "100%" }}
          type="date"
          placeholder="Pet Date"
          value={dob}
          onChange={(e) => setDob(e.target.dob)}
        />
        <div style={{ fontWeight: "bold" }}>Pet Gender</div>
        <div onChange={onChangeGender}>
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={gender === "Male"}
          />{" "}
          Male <br />
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={gender === "Female"}
          />{" "}
          Female
        </div>
        <div style={{ fontWeight: "bold" }}>Pet Species</div>
        <select
          value={species}
          onChange={onChangeSpecies}
          style={{ width: "100%", fontSize: 17, padding: 7 }}
        >
          <option value="cat">😸 Cat</option>
          <option value="dog">🐶 Dog</option>
          <option value="fish">🐟 Fish</option>
          <option value="bird">🐤 Bird</option>
          <option value="hamster">🐹 Hamster</option>
          <option value="rabbit">🐰 Rabbit</option>
          <option value="other">🐾 Other</option>
        </select>
      </div>
      <input type="submit" value="Save New Pet" className="btn btn-block" />

    </form>
  );
}

export default AddNewPet;
