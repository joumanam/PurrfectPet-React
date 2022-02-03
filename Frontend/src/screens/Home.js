import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      THIS IS THE HOME PAGE{" "}
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go to About
      </button>
    </div>
  );
}

export default Home;
