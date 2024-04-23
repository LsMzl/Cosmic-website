import { Nav, Container, Row, Col, Tab } from "react-bootstrap";
import projet1 from "../assets/img/project-img3.png";
import projet2 from "../assets/img/project-img3.png";
import projet3 from "../assets/img/project-img3.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp from "../assets/img/color-sharp.png";


export const Projects = () => {

    const projects = [
        {
            title: "Titre 1",
            description: "Description 1",
            img: { projet1 }
        },
        {
            title: "Titre 2",
            description: "Description 2",
            img: { projet2 }
        },
        {
            title: "Titre 3",
            description: "Description 3",
            img: { projet3 }
        },
        {
            title: "Titre 4",
            description: "Description 4",
            img: { projet2 }
        },
        {
            title: "Titre 5",
            description: "Description 5",
            img: { projet3 }
        },
        {
            title: "Titre 6",
            description: "Description 6",
            img: { projet1 }
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projets</h2>
                        <p>IUH oj UIh oh ojop ft yf ouY ftèu</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/accueil">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Onglet 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Onglet 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Onglet 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem ipsum 2</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem ipsum 3</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-img-right" src={ colorSharp } alt="Fond d'écran"/>
        </section>
    )

}