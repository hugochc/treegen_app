import React, { Component } from "react";
import {Row, Col, Navbar} from "react-bootstrap";

class HeaderPage extends Component {
    render() {
        return(
            <Row>
                <Col sm={12}>
                    <Navbar bg="light" fixed="top" expand="sm">
                        <Navbar.Brand>#</Navbar.Brand>
                    </Navbar>
                </Col>
            </Row>
        );
    }
};

export default HeaderPage