import { LuSearch } from 'react-icons/lu';
import { Col, Container } from 'react-bootstrap';
import { IoClose } from 'react-icons/io5';

export default function Search(props) {
  return (
    <Col xl={3} lg={4}>
      <Container className="search-block d-flex">
        <LuSearch />
        <input
          className="col"
          onChange={props.searchInput}
          value={props.valueInput}
          type="text"
          placeholder="Поиск..."
        />
        <IoClose className="button-close" onClick={props.onClear} />
      </Container>
    </Col>
  );
}
