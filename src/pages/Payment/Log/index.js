import React, { Fragment } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardBody,
    CardHeader,
} from "reactstrap";
import CollapsibleCard from "components/Common/CollapsibleCard";
import CustomButton from "components/Common/Button";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { LeftArrowIcon, VerticalDotsIcon } from "utils/Icons";
import paymentData from "./payment.json";
import { invoiceFormat } from "./data";
import styles from "./styles.module.scss";

const PaymentLog = () => {
    const {
        paymentDetails,
        projectDetails,
        billDetails,
        previousInvoices,
        bankDetails,
        generalDetails,
        invoiceDetails,
        remarks,
        changeOrderDeatils,
    } = paymentData;
    return (
        <div className={styles["payment-log"]}>
            <div className="d-flex">
                <span className="mb-3 mx-2 mx-sm-3 d-inline-block">
                    <LeftArrowIcon />
                </span>
                <Breadcrumb>
                    <BreadcrumbItem>Projects</BreadcrumbItem>
                    <BreadcrumbItem>Liberty Park Estates</BreadcrumbItem>
                    <BreadcrumbItem>
                        Progress, Billing & Invoicing
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        Payment Received log - {paymentDetails.invoiceNumber}
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className={styles.main}>
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <div className="row">
                            <div className="col-xxl-7">
                                <div className="row">
                                    {invoiceFormat.paymentDetails.map(
                                        (details) => (
                                            <div
                                                className="col-sm-6 col-lg-3 mb-3"
                                                key={details.id}
                                            >
                                                <div className="mb-2">
                                                    {details.label}
                                                </div>
                                                <div className="font-600">
                                                    {paymentDetails[details.id]}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="col-xxl-5 text-center text-xxl-end">
                                <CustomButton
                                    type="button"
                                    title="Add Payment Details"
                                    theme="theme-beta"
                                    customClass="mx-2 mt-2 mt-xxl-0"
                                />
                                <CustomButton
                                    type="button"
                                    title="Save & Back"
                                    theme="theme-alpha"
                                    customClass="mx-2 mt-2 mt-xxl-0"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-xxl-2 cursor-pointer">
                        <VerticalDotsIcon />
                    </div>
                </div>
                <div className="mt-4 mt-xxl-2">
                    <div className="row">
                        <div className="col-xl-4">
                            <CollapsibleCard title="Project Details">
                                <table className="payment-table">
                                    <tbody>
                                        {invoiceFormat.projectDetails.map(
                                            (details) => (
                                                <tr key={details.id}>
                                                    <td className="opacity-60">
                                                        {details.label}
                                                    </td>
                                                    <td className="text-end font-600">
                                                        {details.type ===
                                                            "amount" && "$ "}
                                                        {
                                                            projectDetails[
                                                                details.id
                                                            ]
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </CollapsibleCard>
                            <CollapsibleCard title="Bill Details">
                                <table className="payment-table">
                                    <tbody>
                                        {invoiceFormat.billDetails.map(
                                            (details) => (
                                                <tr key={details.id}>
                                                    <td className="opacity-60">
                                                        {details.label}
                                                    </td>
                                                    <td className="text-end font-600">
                                                        {
                                                            billDetails[
                                                                details.id
                                                            ]
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </CollapsibleCard>
                            <CollapsibleCard title="Previously Created Invoices">
                                <table className="payment-table">
                                    <tbody>
                                        {invoiceFormat.previousInvoices.map(
                                            (details) => (
                                                <tr key={details.id}>
                                                    <td>{details.label}</td>
                                                    <td className="text-center">
                                                        {
                                                            previousInvoices[
                                                                details.id
                                                            ].count
                                                        }
                                                    </td>
                                                    <td className="text-end font-600">
                                                        {
                                                            previousInvoices[
                                                                details.id
                                                            ].value
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </CollapsibleCard>
                            <Card className="card-theme-alpha">
                                <CardHeader className="d-flex">
                                    <span className="flex-grow-1">
                                        Bank Details
                                    </span>
                                    <span className="text-color-gamma">
                                        Change Bank
                                    </span>
                                </CardHeader>
                                <CardBody>
                                    <table className="payment-table">
                                        <tbody>
                                            {invoiceFormat.bankDetails.map(
                                                (details) => (
                                                    <tr key={details.id}>
                                                        <td className="opacity-60">
                                                            {details.label}
                                                        </td>
                                                        <td className="text-end font-600">
                                                            {
                                                                bankDetails[
                                                                    details.id
                                                                ]
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-xl-8">
                            <Card className="card-with-padding card-theme-beta">
                                <CollapsibleCard title="General Details">
                                    <table className="payment-table">
                                        <tbody>
                                            {invoiceFormat.generalDetails.map(
                                                (details) => (
                                                    <tr key={details.id}>
                                                        <td>{details.label}</td>
                                                        <td className="text-end">
                                                            {
                                                                generalDetails[
                                                                    details.id
                                                                ]
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </CollapsibleCard>
                                <Card className="card-theme-alpha">
                                    <CardHeader>Invoice Details</CardHeader>
                                    <CardBody className="overflow-auto">
                                        <table className="payment-table">
                                            <tbody>
                                                {invoiceFormat.invoiceDetails.map(
                                                    (details, index) => (
                                                        <Fragment
                                                            key={details.id}
                                                        >
                                                            <tr
                                                                className={
                                                                    index +
                                                                        1 ===
                                                                    invoiceFormat
                                                                        .invoiceDetails
                                                                        .length
                                                                        ? "font-600"
                                                                        : "font-400"
                                                                }
                                                            >
                                                                <td
                                                                    style={{
                                                                        minWidth:
                                                                            "30px",
                                                                    }}
                                                                >
                                                                    {index + 1}
                                                                </td>
                                                                <td
                                                                    style={{
                                                                        minWidth:
                                                                            "30px",
                                                                    }}
                                                                ></td>
                                                                <td>
                                                                    {
                                                                        details.label
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        invoiceDetails[
                                                                            details
                                                                                .id
                                                                        ]
                                                                    }
                                                                </td>
                                                            </tr>
                                                            {details.sub &&
                                                            details.sub.length >
                                                                0
                                                                ? details.sub.map(
                                                                      (sub) => (
                                                                          <tr
                                                                              key={
                                                                                  sub.id
                                                                              }
                                                                          >
                                                                              <td
                                                                                  style={{
                                                                                      minWidth:
                                                                                          "30px",
                                                                                  }}
                                                                              ></td>
                                                                              <td
                                                                                  style={{
                                                                                      minWidth:
                                                                                          "30px",
                                                                                  }}
                                                                              >
                                                                                  {sub.subType ===
                                                                                  "point"
                                                                                      ? sub.serial
                                                                                      : ""}
                                                                              </td>
                                                                              <td>
                                                                                  {
                                                                                      sub.label
                                                                                  }
                                                                              </td>
                                                                              <td>
                                                                                  {
                                                                                      invoiceDetails[
                                                                                          details
                                                                                              .id
                                                                                      ]
                                                                                  }
                                                                              </td>
                                                                          </tr>
                                                                      )
                                                                  )
                                                                : null}
                                                        </Fragment>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </CardBody>
                                </Card>
                                <Card className="card-theme-alpha">
                                    <CardHeader>Remarks</CardHeader>
                                    <CardBody className="text-color-beta">
                                        {remarks}
                                    </CardBody>
                                </Card>
                                <CollapsibleCard title="Change Order Details">
                                    <table className="payment-table">
                                        <thead>
                                            <tr className="font-600">
                                                <td>Change Order Summary</td>
                                                <td>Additions</td>
                                                <td>Deductions</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {invoiceFormat.changeOrderDeatils.map(
                                                (details) => (
                                                    <tr key={details.id}>
                                                        <td>{details.label}</td>
                                                        <td>
                                                            {
                                                                changeOrderDeatils[
                                                                    details.id
                                                                ].additions
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                changeOrderDeatils[
                                                                    details.id
                                                                ].deductions
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
                                </CollapsibleCard>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.actions}>
                <Link to="/dashboard" className="font-600">
                    Flow Summary
                </Link>
                <CustomButton
                    type="button"
                    title="Print Preview"
                    theme="theme-beta"
                    customClass="mx-4 my-2 my-sm-0"
                />
                <CustomButton
                    type="button"
                    title="Submit"
                    theme="theme-alpha"
                />
            </div>
        </div>
    );
};
export default PaymentLog;
