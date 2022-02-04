import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import background from "../images/background.jpg";
import { FaEdit, FaPlusSquare } from "react-icons/fa";
import MyPets from "../components/MyPets";
import Button from "../components/Button";
import AddNewPet from "../components/AddNewPet";

function Profile() {
  let navigate = useNavigate();
  // let { username } = useParams();
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickAdd = () => {
    setIsAddClicked(!isAddClicked)
    console.log(isAddClicked)
  }

  return (
    <div
      className="profile-background"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="title">My Profile</div>
      <div
        style={{
          display: "flexbox",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        {/* Block 1 */}
        <div className="prof-block1">
          <span style={{ fontWeight: "bold" }}>Full Name:</span> Joumana Moussa
          <span style={{ marginLeft: 58, fontFamily: "Architects Daughter" }}>
            <Button
              color="blue"
              text="Edit ✏️"
              padding="3px 10px"
              margin="0px"
            />
          </span>
          <br />
          <span style={{ fontWeight: "bold" }}>
            Date Of Birth:
          </span> 27/07/1994 <br />
          <span style={{ fontWeight: "bold" }}>Email Address:</span>{" "}
          joumanamoussa14@gmail.com <br />
          <span style={{ fontWeight: "bold" }}>Password:</span>
          <span style={{ color: "#373638" }}> ••••••• </span>
          <br />
          <span style={{ fontWeight: "bold" }}>Number of Pets:</span> 13{" "}
        </div>{" "}
        <br />
        {/* Block 2 */}
        <div className="prof-block2">
          <div
            style={{
              fontFamily: "Architects Daughter",
              fontSize: 20,
              textAlign: "center",
              marginBottom: 10,
              fontWeight: "bold",
            }}
          >
            My Pets
            <span style={{ marginLeft: 58 }}>
              <Button
                color="blue"
                text="Edit ✏️"
                padding="3px 10px"
                margin="0px"
              />{" "}
              <Button
                color={isAddClicked ? 'green' : 'red'}
                text={isAddClicked ? "Add ➕" : "Cancel ✖️"}
                padding="3px 10px"
                margin="0px"
                onClick={onClickAdd}
              />
            </span>
          </div>
            <AddNewPet />

          <div>
            <MyPets />
          </div>
          <div></div>
        </div>{" "}
        <br />
      </div>
    </div>
  );
}

export default Profile;
