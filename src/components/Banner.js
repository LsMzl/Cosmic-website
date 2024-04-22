import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Développeur Web", "Développeur Back-end", "Développeur Front-end"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const delay = 2000;


  
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)
    
    return () => { clearInterval(ticker)};
  }, [text])
  
  
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fulltext = toRotate[i];
    let updatedText = isDeleting ? fulltext.substring(0, text.length - 1) : fulltext.substring(0, text.length + 1 );
  
    setText(updatedText);
  
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }
  
    if(!isDeleting && updatedText === fulltext) {
      setIsDeleting(true);
      setDelta(delay);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenue sur mon portfolio</span>
            <h1>{`Salut, jeune `}<span className="wrap">{ text }</span></h1>
            <p>noiezj ziufhzeif foifuzei fegfzeu fsdgfuy gpeà hspvza </p>
            <button onClick={() => console.log("contact")}>Me contacter <ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}