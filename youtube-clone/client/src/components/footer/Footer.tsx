import React from "react";
import "./Footer.scss";
import { Row, Col, Icon } from "antd";

class Footer extends React.Component
{
    public render(): JSX.Element
    {
        return (
            <footer className="footer-container">
                <Row>
                    <Col className="left" lg={8} md={8} xs={24} span={6}>
                    </Col>
                    <Col className="center" lg={8} md={8} xs={24} span={6}>
                        Happy Coding <Icon type="smile" />   
                    </Col>
                    <Col className="right" lg={8} md={8} xs={24} span={6}>
                        <Icon type="copyright" />
                        <span> dylee</span>
                    </Col>
                </Row>
            </footer>
        )
    }
}

export default Footer;