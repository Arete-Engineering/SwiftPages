import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Header from "../components/Header";
import Explore from "../components/Explore";

const Directory = () => {
  return (
    <div>
      <Header />
      <Explore />
    </div>
  );
};

export default Directory;
