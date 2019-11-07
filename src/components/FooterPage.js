import React, { Component } from "react";
import {Row, Col, Navbar} from "react-bootstrap";

class FooterPage extends Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    <Navbar bg="light" fixed="bottom">
                        <div className="text-muted">
                            <small>Footer. 2019... bla bla bla...</small>
                        </div>
                    </Navbar>
                </Col>
            </Row>
        );
    }
};

export default FooterPage