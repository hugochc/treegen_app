import React, { Component } from "react";
import {Card, Col, Row} from "react-bootstrap";

class BodyPage extends Component {
    render() {
        return (
            <Row>
                <Col sm={12}>
                    <div className="text-sm-center">
                        <h4>Title Text</h4>
                    </div>
                </Col>
            </Row>
        );
    }
};

export default BodyPage