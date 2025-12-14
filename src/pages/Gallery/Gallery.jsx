import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhotoGallery from "../../components/PhotoGallery";

const Gallery = () => {
  useEffect(() => {
    document.title = " Gallery   ";
    window.scroll(0, 0);
  }, []);

  return (
    <>
     
      <section className="py-5" style={{ overflow: "hidden" }}>
        <Container>
          <Row>
            <Col>
              <PhotoGallery/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Gallery;
