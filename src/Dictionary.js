import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <form>
        <input type="search" autoFocus={true} />
      </form>
    </div>
  );
}
