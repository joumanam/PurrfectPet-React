import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import background from "../images/background.jpg";
import { FaEdit } from "react-icons/fa";

function Profile() {
  let navigate = useNavigate();
  // let { username } = useParams();
  return (
    <div
      className="profile-background"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="title">My Profile</div>
      <div style={{ display: 'flexbox', flexDirection: 'column', justifyContent: 'space-evenly'}}>
      <div className="prof-block1">
        <span style={{ fontWeight: "bold" }}>Full Name:</span> Joumana Moussa
          <FaEdit
            style={{
              justifyContent: "flex-end",
              marginLeft: '30%',
              cursor: "pointer",
            }}
          />
        <br />
        <span style={{ fontWeight: "bold" }}>
          Date Of Birth:
        </span> 27/07/1994 <br />
        <span style={{ fontWeight: "bold" }}>Email Address:</span>{" "}
        joumanamoussa14@gmail.com <br />
        <span style={{ fontWeight: "bold" }}>Password:</span>
        <span style={{ color: '#373638' }}> ••••••• </span>
        <br />
        <span style={{ fontWeight: "bold" }}>Number of Pets:</span> 13{" "}
      </div> <br/>
      <div className="prof-block2">
      <span style={{ fontWeight: "bold" }}>Full Name:</span> Joumana Moussa{" "}
          <FaEdit
            style={{
              justifyContent: "flex-end",
              marginLeft: '30%',
              cursor: "pointer",
            }}
          />
        <br />
        <span style={{ fontWeight: "bold" }}>
          Date Of Birth:
        </span> 27/07/1994 <br />
        <span style={{ fontWeight: "bold" }}>Email Address:</span>{" "}
        joumanamoussa14@gmail.com <br />
        <span style={{ fontWeight: "bold" }}>Password:</span>
        <span style={{ color: '#373638' }}> ••••••• </span>
        <br />
        <span style={{ fontWeight: "bold" }}>Number of Pets:</span> 13{" "}
      </div> <br/>
      </div>
      </div>
  );
}

export default Profile;
