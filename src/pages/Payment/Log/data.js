export const invoiceFormat = {
    paymentDetails: [
        { id: "raBillNumber", label: "RA Bill No." },
        { id: "invoiceNumber", label: "Invoice No." },
        { id: "paymentRecieved", label: "Payment Recieved" },
        { id: "paymentStatus", label: "Payment Status" },
    ],

    projectDetails: [
        { id: "projectName", label: "Project Name" },
        { id: "projectCode", label: "Project Code" },
        { id: "clientName", label: "Client Name" },
        { id: "contractValue", label: "Contract Value" },
        { id: "contractType", label: "Contract Type" },
    ],
    billDetails: [
        { id: "billNumber", label: "Bill No." },
        { id: "billPeriod", label: "Bill Period" },
        { id: "billDate", label: "Bill Date" },
        { id: "billType", label: "Bill Type" },
    ],
    previousInvoices: [
        { id: "billsRaised", label: "Bills Raised" },
        { id: "billsApproved", label: "Bills Approved" },
        { id: "draftInvoices", label: "Draft Invoices" },
    ],
    bankDetails: [
        { id: "bankName", label: "Bank Name" },
        { id: "bankAddress", label: "Bank Address" },
        { id: "accountNumber", label: "Account No." },
        { id: "routingNumber", label: "Routing No." },
    ],
    generalDetails: [
        {
            id: "invoiceSubmissionDate",
            label: "Invoice Submission Date",
        },
        { id: "invoiceDate", label: "Invoice Date" },
    ],
    invoiceDetails: [
        { id: "originalContractSum", label: "Original Contract Sum", sub: [] },
        {
            id: "netChangeByChangeOrders",
            label: "Net Change by Change Orders",
            sub: [],
        },
        {
            id: "contractSumToDate",
            label: "Contract Sum to Date (1 +/- 2)",
            sub: [],
        },
        {
            id: "totalCompletedStoredToDate",
            label: "Total Completed & Stored to Date (Column G on G703)",
            sub: [],
        },
        {
            id: "totalDeduction",
            label: "Total Deduction",
            sub: [
                {
                    id: "deduction",
                    serial: "a",
                    label: "Total Deduction",
                    subType: "point",
                },
                {
                    id: "taxAmount",
                    serial: "b",
                    label: "Tax Amount (Column F on G703)",
                    subType: "point",
                },
                {
                    id: "totalDeduction",
                    label: "Total Deduction (5a + 5b or Total in Column I of G703)",
                    subType: "total",
                },
            ],
        },
        {
            id: "totalEarnedLessRetainage",
            label: "Total Earned Less Retainage (4 - 5)",
            sub: [],
        },
        {
            id: "lessPreviousCertificatesForPayment",
            label: "Less Previous Certificates for Payment (Line 6 from prior certificate)",
            sub: [],
        },
        { id: "currentPaymentDue", label: "Current Payment Due", sub: [] },
        {
            id: "balanceToFinishIncludingRetainage",
            label: "Balance to Finish, Including Retainage (3 - 6) ",
            sub: [],
        },
        { id: "taxAmount", label: "Tax Amount", sub: [] },
        { id: "netBillAmount", label: "Net Bill Amount (8 + 10)", sub: [] },
    ],
    remarks: { id: "remarks", label: "" },
    changeOrderDeatils: [
        {
            id: "totalChangesApprovedLastMonths",
            label: "Total Changes approved in last months by owner",
        },
        { id: "totalApprovedCurrentMonth", label: "Total Approved this month" },
        { id: "total", label: "Total" },
        { id: "netChangesByChangeOrder", label: "Net Changes by Change Order" },
    ],
};
