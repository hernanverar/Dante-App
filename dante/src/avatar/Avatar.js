import React from "react";
import PropTypes from "prop-types";
import avatarImage from "../assets/dante-amigos.png";
import "../styles/avatar.css";

const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;

  return (
    <>

      <img src={avatarImage} className={avatarClass} alt="avatar" />
    </>
  );
};

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Avatar;