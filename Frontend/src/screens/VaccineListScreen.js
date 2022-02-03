import Pets from "../components/Pets";
import Header from "../components/Header";
import { useState } from "react";
import "../components/Modal.css";
import AddVaccine from "../components/AddVaccine";

const VaccineListScreen = (props) => {
  const [modal, setModal] = useState(false);
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [vaccines, setVaccines] = useState([
    {
      id: "1",
      name: "Parvo Virus Vaccine",
      shot: "1st Shot",
      date: "10 November 2019",
      reminder: false,
    },
    {
      id: "2",
      name: "Rabies Vaccine",
      shot: "2nd Shot",
      date: "10 November 2019",
      reminder: false,
    },
    {
      id: "3",
      name: "Calicivirus Vaccine (Cat Flu)",
      shot: "1st Shot",
      date: "19 July 2021",
      reminder: false,
    },
    {
      id: "4",
      name: "Parvo Virus Vaccine",
      shot: "2nd Shot",
      date: "10 February 2022",
      reminder: true,
    },
  ]);

  const toggleModal = () => {
    setModal(!modal);

    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  };

  const onAdd = () => {
    setIsAddClicked(!isAddClicked);
  };

  const addVaccine = (vaccine) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newVaccine = { id, ...vaccine };
    setVaccines([...vaccines, newVaccine]);
  };

  const deleteEvent = (id) => {
    setVaccines(vaccines.filter((vaccine) => vaccine.id !== id));
    console.log(id);
  };

  // Toggle Reminder: everytime I press on a vaccine box, I set/unset the reminder
  const toggleReminder = (id) => {
    setVaccines(
      vaccines.map((vaccine) =>
        vaccine.id === id
          ? { ...vaccine, reminder: !vaccine.reminder }
          : vaccine
      )
    );
  };

  console.log(vaccines);

  return (
    <div
      className="container"
     
    >
      {" "}
      <Header
        title="Mélodie"
        onAdd={onAdd}
        text={isAddClicked ? "Close" : "Add Vaccine"}
        buttonColor={isAddClicked ? "#ba1506" : "green"}
      />
      {isAddClicked && <AddVaccine onAddVaccine={addVaccine} />}
      {vaccines.length > 0 ? (
        <Pets
          pets={vaccines}
          onClick={toggleModal}
          deleteEvent={deleteEvent}
          onToggle={toggleReminder}
        />
      ) : (
        <div>
          <p>
            No Vaccines Yet! Click on the "Add Vaccine" button to fill your
            pet's health card.
          </p>
        </div>
      )}
    </div>
  );
};

export default VaccineListScreen;
