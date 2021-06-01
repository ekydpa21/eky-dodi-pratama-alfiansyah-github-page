import React from "react";
import loading from "../assets/loading1.gif";
export default function LoadingScreen() {
  return (
    <div className="loading">
      <img src={loading} alt="loading..." />
    </div>
  );
}
