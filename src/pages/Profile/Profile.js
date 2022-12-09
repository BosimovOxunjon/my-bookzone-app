import React from "react";
import ProfilePhoto from "../../assets/images/profile/man.jpeg";
import { StyledProfile } from "../../style/pages/profile";
import Header from "../Header/Header";

const Profile = () => {
  return (
    <>
      <Header />
      <StyledProfile>
        <div className="container">
          <div className="profile">
            <div className="profile_img-wrapper">
              <div className="profile_img">
                <img src={ProfilePhoto} alt="profile_photo" />
              </div>
              <p>Oltin kitobxon</p>
              <p>186 ta kitob o'qigan</p>
            </div>
            <div className="profile_info">
              <h2 className="profile_title">farrux abdullayev</h2>
              <p className="profile_text">
                <span>Tavallud :</span> February
              </p>
              <p className="profile_text">
                {" "}
                <span>Manzili : </span> Jizzax
              </p>
              <p className="profile_text">
                <span>Bio :</span> Graphic designer and Developer
              </p>
            </div>
          </div>
        </div>
      </StyledProfile>
    </>
  );
};

export default Profile;
