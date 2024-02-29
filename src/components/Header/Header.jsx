import { RiAccountCircleFill } from 'react-icons/ri';
import { FaShoppingBasket } from 'react-icons/fa';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';

export default function Header({ onClickCart, totalPrice }) {
  return (
    <header className="header container py-3">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary justify-content-between"
      >
        <Container className="px-4">
          <Navbar.Brand href="#home">
            <Container>
              <Row>
                <Col>
                  <img src="img/logo.png" className="logo mt-2" alt="logo" />
                </Col>
                <Col>
                  <h3 className="text-uppercase d-flex">Лай'Ко</h3>
                  <p className=" d-flex">Товары для животных</p>
                </Col>
              </Row>
            </Container>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="navbar-info">
            <Nav className="me-auto"></Nav>
            <Navbar.Text className="header__price" onClick={onClickCart}>
              <span>{totalPrice.toLocaleString()} руб.</span>
              <FaShoppingBasket className="basket-icon" />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
