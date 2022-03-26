import React from "react";
import DefaultCard from "./styles/CardStyles";

const Card = ({ title, url, description, urlToImage }) => {
  const cleanDescription =
    description && description.replaceAll(/<\/?[^>]+(>|$)/g, ""); //removes html tags. perhaps consider using dangerouslySetInnerHTML ? (!)

  return (
    <DefaultCard>
      <div className="content">
        <h2 className="heading">
          <a href={url}>{title}</a>
        </h2>
        <p className="text">
          <a href={url}>{cleanDescription}</a>
        </p>
      </div>

      <div className="image-container">
        <a href={url}>
          <img className="image" src={urlToImage} alt={title} />
        </a>
      </div>
    </DefaultCard>
  );
};

export default Card;
