import React, { useState } from "react";
import { Card, CardBody, CardHeader, Collapse } from "reactstrap";
import { UpArrowIcon } from "utils/Icons";
import styles from "./styles.module.scss";

const CollapsibleCard = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <Card className={`${styles.card} card-theme-alpha`}>
            <CardHeader className="d-flex">
                <div className="flex-grow-1">{title}</div>
                <div
                    className={isOpen ? styles.up : styles.down}
                    onClick={toggle}
                >
                    <UpArrowIcon />
                </div>
            </CardHeader>
            <Collapse isOpen={isOpen}>
                <CardBody className="overflow-auto">{children}</CardBody>
            </Collapse>
        </Card>
    );
};

export default CollapsibleCard;
