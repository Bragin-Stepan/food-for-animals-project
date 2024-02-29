import React from 'react';
import axios from 'axios';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Search from './components/Search/Search';
import Sidebar from './components/Sidebar/Sidebar';
import PromotionCarousel from './components/PromotionCarousel/PromotionCarousel';

export default function App() {
  // Получаем карточки с сервера
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://65c76c06e7c384aada6e81f4.mockapi.io/items').then(res => {
      setItems(res.data);
    });
    axios.get('https://65c76c06e7c384aada6e81f4.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    });
  }, []);

  // Открывает/закрывает боковой слайд
  const [cartOpened, isCartOpened] = React.useState(false);

  // Добавляет в корзину
  const [cartItems, setCartItems] = React.useState([]);
  const onAddToCart = obj => {
    axios.post('https://65c76c06e7c384aada6e81f4.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  // Убираемт из корзины
  const onRemoveItem = id => {
    axios.delete(`https://65c76c06e7c384aada6e81f4.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Поиск
  const [searchValue, setSearchValue] = React.useState('');
  const onSearchInput = event => {
    setSearchValue(event.target.value);
  };

  // Расчет итоговой цены
  const calcPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <>
      <Header onClickCart={() => isCartOpened(true)} totalPrice={calcPrice} />
      <main>
        <PromotionCarousel />
        {cartOpened && (
          <Sidebar
            items={cartItems}
            onRemove={onRemoveItem}
            onClose={() => isCartOpened(false)}
            totalPrice={calcPrice}
          />
        )}

        <section>
          <Container>
            <Row className="mb-4">
              <h2 className="category d-flex col">
                {searchValue
                  ? `Поиск по запросу: "${searchValue}"`
                  : 'Все товары'}
              </h2>
              <Search
                searchInput={onSearchInput}
                valueInput={searchValue}
                onClear={() => setSearchValue('')}
              />
            </Row>
            <Row>
              {items
                .filter(item => item.title.toLowerCase().includes(searchValue))
                .map(item => (
                  <Card
                    key={item.title}
                    title={item.title}
                    imgUrl={item.imgUrl}
                    price={item.price}
                    onFavorite={item.onClickFavorite}
                    onPlus={obj => onAddToCart(obj)}
                  />
                ))}
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
