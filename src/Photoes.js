import React from "react";
export default function Photoes(props) {
  console.log(props.photoes);
  if (props.photoes) {
    return (
      <section className="Photoes">
        {props.photoes.map(function (photo, index) {
          return <img src={photo.src.landscape} alt="search result" />;
        })}
      </section>
    );
  } else {
    return null;
  }
}
