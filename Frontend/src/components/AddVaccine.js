import { useState } from "react";

const AddVaccine = ({ onAddVaccine }) => {
  const [name, setName] = useState("");
  const [shot, setShot] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);
  const [submitPressed, setSubmitPressed] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitPressed(true);

    if (!name) {
      return;
    }

    if (!date) {
      return;
    }

    onAddVaccine({ name, shot, date, reminder });
    setSubmitPressed(false);
    setName("");
    setShot("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label style={{fontWeight: 'bold'}}>Vaccine Name</label>
        {!name && submitPressed && (
          <h5 style={{ color: "red" }}>Please enter a vaccine name</h5>
        )}
        <input
          type="text"
          placeholder="Add Vaccine Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label style={{fontWeight: 'bold'}}>Vaccine Shot</label>
        <input
          type="text"
          placeholder="Add Shot (i.e: 1st shot, 2nd shot..)"
          value={shot}
          onChange={(e) => setShot(e.target.value)}
        />
      </div>{" "}
      <div className="form-control">
        <label style={{fontWeight: 'bold'}}>Date of the Vaccine</label>
        {!date && submitPressed && (
          <h5 style={{ color: "red" }}>Please enter a vaccine date</h5>
        )}
        <input type="text" placeholder="Add Date" value={date} onChange={(e)=>setDate(e.target.value)}/>
      
      </div>
      <div className="form-control form-control-check">
        <label style={{fontWeight: 'bold'}}>Is the vaccine still pending?</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>
      <input type="submit" value="Save Vaccine" className="btn btn-block" />
    </form>
  );
};

export default AddVaccine;
