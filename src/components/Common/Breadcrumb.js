import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

//i18n
import { withNamespaces } from "react-i18next";

const Breadcrumbs = ({ breadcrumbItems, title }) => {


    const itemsLength = breadcrumbItems.length;

    return (
        <React.Fragment>
            <Row>
                <Col xs={12}>
                    <div className="page-title-box d-flex align-items-center justify-content-between">

                        <div className="page-title-right">
                            <Breadcrumb listClassName="m-0">
                                {
                                    breadcrumbItems.breadcrumbItems.map((item, key) =>
                                        key + 1 === itemsLength ?
                                            <BreadcrumbItem key={key} active> <span style={{ color: '#002850s', fontWeight: 'bolder' }}>{item.title}</span></BreadcrumbItem>
                                            : <BreadcrumbItem key={key} ><Link to={item.link}> <span style={{ color: '#002850s', fontWeight: 'bolder' }}> {item.title}</span></Link></BreadcrumbItem>
                                    )
                                }
                            </Breadcrumb>
                        </div>

                    </div>
                    {/* <h4 className="mb-0">{title}</h4> */}
                </Col>
            </Row>
        </React.Fragment>
    );
}

// export default withNamespaces()(Breadcrumbs);
export default Breadcrumbs