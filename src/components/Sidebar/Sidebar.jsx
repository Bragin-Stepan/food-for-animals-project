import CartItem from './../CartItem/CartItem';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

export default function Sidebar({ onClose, onRemove, totalPrice, items = [] }) {
  return (
    <div className="overlay">
      <div className="sidebar">
        <div className="d-flex justify-content-between mx-5 my-4">
          <h2 className="">Корзина</h2>
          <button className="d-flex button-close">
            <IoClose className="mt-1" onClick={onClose} />
          </button>
        </div>
        {items.length > 0 ? (
          <div className="sidebar__content col items">
            {items.map(obj => (
              <CartItem obj={obj} onRemove={onRemove} />
            ))}
          </div>
        ) : (
          <div className="sidebar__empty mb-5 col d-flex align-items-center">
            <div className="container">
              <div className="sidebar__empty-img container d-flex align-items-center">
                <img src="/img/empty.png" alt="empty" />
              </div>
              <h2 className="">Корзина пуста</h2>
              <button className="my-4 big-button" onClick={onClose}>
                <b>Вернуться назад</b>
                <IoIosArrowBack />
              </button>
            </div>
          </div>
        )}

        {items.length > 0 ? (
          <div className="sidebar__bottom">
            <div className="sidebar__total d-flex mx-5 mx-3">
              <span>Итог:</span>
              <div className="dashed"></div>
              <b>{totalPrice.toLocaleString()} руб.</b>
            </div>
            <button className="my-4 big-button">
              <IoIosArrowForward />
              <b>Заказать</b>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
