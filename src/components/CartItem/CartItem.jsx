import { IoClose } from 'react-icons/io5';

export default function CartItem({ obj, onRemove }) {
  return (
    <div>
      <div className="col mb-3 d-flex justify-content-center">
        <div className="cart-item d-flex px-5 justify-content-center">
          <div className="img-container col-2 mt-2">
            <img src={obj.imgUrl} alt="" />
          </div>
          <div className="col-9">
            <p className="px-4 cart-item__description">{obj.title}</p>
            <b>{obj.price.toLocaleString()} ₽</b>
          </div>
          <div>
            <button
              className="button-symbol d-flex button-remove"
              onClick={() => onRemove(obj.id)}
            >
              <IoClose className="mt-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
