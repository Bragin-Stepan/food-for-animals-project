import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import Carousel from 'react-bootstrap/Carousel';

export default function PromotionCarousel() {
  return (
    <section className="promotion__carousel container">
      <Carousel>
        <Carousel.Item>
          <a href="#">
            <img src="img/promotionOne.jpg" alt="First promotion" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="#">
            <img src="img/promotionTwo.jpg" alt="Second promotion" />
          </a>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
