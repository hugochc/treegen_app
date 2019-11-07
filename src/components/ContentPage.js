import React, { Component } from "react";
import {Card, Container, Navbar} from "react-bootstrap";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import BodyPage from "./BodyPage";

class ContentPage extends Component {
    render() {
        return (
            <Container>
                <HeaderPage/>
                <BodyPage/>
                <FooterPage/>
            </Container>
        );
    }
};

export default ContentPage