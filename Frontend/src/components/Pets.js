import Cat from "./Cat";

const Pets = ({pets, onClick, deleteEvent, onToggle}) => { 
  return (
    <div>
      {pets.map((pet) => (
        <Cat key={pet.id} vaccine={pet} onClick={onClick} deleteEvent={deleteEvent} onToggle={onToggle}/>
      ))}
    </div>
  );
};

export default Pets;
