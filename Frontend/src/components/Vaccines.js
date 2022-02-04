import Cat from "./Cat";

const Vaccines = ({vaccines, onClick, deleteEvent, onToggle}) => { 
  return (
    <div>
      {vaccines.map((vaccine) => (
        <Cat key={vaccine.id} vaccine={vaccine} onClick={onClick} deleteEvent={deleteEvent} onToggle={onToggle}/>
      ))}
    </div>
  );
};

export default Vaccines;
