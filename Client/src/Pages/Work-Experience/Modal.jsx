import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const WorkModal = ({ showModal, setShowModal }) => {
  console.log("Modal Render:", showModal);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 9999
        },
        content: {
          width: "700px",
        //   height: "400px",
          margin: "auto",
          borderRadius: "10px",
          padding: "20px"
        }
      }}
    ><h2>Riggle Work</h2>

      <Slider {...settings}>
        <div>
          <img src="/Food_Hub.png" className="carousel-img" width={300} height={100} />
        </div>

        <div>
          <img src="/Food_Hub.png" className="carousel-img" width={300} height={100} />
        </div>

        <div>
          <img src="/Food_Hub.png" className="carousel-img" />
        </div>
      </Slider>


      <button onClick={() => setShowModal(false)}>Close</button>
    </Modal>
  );
};

export default WorkModal;