import React from 'react';

import { Col } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa6';
// import { FaCheck } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';

export default function Card({ title, price, imgUrl, onPlus }) {
  // Add
  const [isAdded, setIsAdded] = React.useState();
  const onClickPlus = () => {
    onPlus({ title, price, imgUrl });
    setIsAdded(!isAdded);
  };

  // Favorite
  const [isFavorite, setIsFavorite] = React.useState();
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <Col className="justify-content-center col-md-4 col-lg-3 col-xl-2">
      <div className="card">
        <div className="img-container">
          <button
            className={`button-symbol d-flex button-unfavorite ${
              isFavorite ? 'button-favorite' : ''
            }`}
            onClick={onClickFavorite}
          >
            {isFavorite ? (
              <FaHeart className="mt-1" />
            ) : (
              <FaRegHeart className="mt-1" />
            )}
          </button>
          <img src={imgUrl} alt="" />
        </div>
        <p className="px-4">{title}</p>
        <div className="d-flex justify-content-center">
          <div className="row">
            <span className="d-flex">Цена:</span>
            <b className="d-flex">{price.toLocaleString()} ₽</b>
          </div>
          <button
            className="button-symbol d-flex button-add "
            onClick={onClickPlus}
          >
            <FaPlus className="mt-1" />
          </button>
        </div>
      </div>
    </Col>
  );
}

{
  /* <button
className={`button-symbol d-flex button-add ${
  isAdded ? 'button-added' : ''
}`}
onClick={onClickPlus}
>
{isAdded ? (
  <FaCheck className="mt-1 button-added" />
) : (
  <FaPlus className="mt-1" />
)}
</button> */
}
