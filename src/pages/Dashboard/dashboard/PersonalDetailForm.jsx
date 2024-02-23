import React, { useEffect, useState } from 'react';
import { Col, Row, Label, Input, } from "reactstrap";
import 'react-datepicker/dist/react-datepicker.css';
import Svg from '../../components/Common/DropDownSvg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputArrow from "assets/images/InputArrow"

const PersonalDetails = (props) => {
    const { onparentFun, handleInputChange, formValue } = props;
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Company Name is required'),
        taxId: Yup.string().required('Tax ID Number is required'),
        companyType: Yup.string().required('Company Type is required'),
        taxType: Yup.string().required('Tax ID Type is required'),
        country: Yup.string().required('Country is required'),
        state: Yup.string().required('State is required'),
        city: Yup.string().required('City is required'),
        zipCode: Yup.string().required('Zip Code is required')
    });
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (values) => {
        console.log(values);
        // Perform any additional logic or pass the values to the parent component
    };

    return (
        <div className='scrollable-container'>
            <Row>
                {/* <Col xs={9}> */}
                <Formik
                    initialValues={{
                        name: '',
                        taxId: '',
                        companyType: '',
                        taxType: '',
                        address1: '',
                        address2: '',
                        address3: '',
                        country: '',
                        state: '',
                        city: '',
                        zipCode: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className=''>
                        <Row >
                            <div>
                                <p className="card-title-desc mt-3">Code <b style={{ color: '#000' }}>CLI/109</b></p>
                            </div>
                            <Col md={4}>
                                <div>
                                    <p className='text-styles-para'> <strong>1 / 3</strong></p>
                                    <h4 class='text-styles-heading'>Company Details</h4>
                                    <p className='text-styles-para'>Enter Your Company Details Here</p>
                                </div>
                            </Col>
                            <Col md={8}>
                                <Row className="mb-4">

                                    <Col md={6}>
                                        <Label htmlFor='name' className='csb-form-label'>
                                            Company Name *
                                        </Label>
                                        <Field
                                            type='text'
                                            placeholder='Enter Company Name'
                                            id='name'
                                            name='name'
                                            as={Input}
                                            className='csb-input-field'
                                            onChange={handleInputChange}
                                        />
                                        <ErrorMessage
                                            name='name'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor='taxId' className='csb-form-label'>
                                            Tax ID Number *
                                        </Label>
                                        <Field
                                            type='text'
                                            id='taxId'
                                            name='taxId'
                                            as={Input}
                                            className='csb-input-field'
                                            onChange={handleInputChange}
                                        />
                                        <ErrorMessage
                                            name='taxId'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Col md={6}>
                                        <Label htmlFor='companyType' className='csb-form-label'>
                                            Company Type *
                                        </Label>
                                        {/* <div style={{ position: 'relative' }}> */}
                                        <div style={{ position: 'relative' }}>
                                            <Field
                                                as='select'
                                                id='companyType'
                                                name='companyType'
                                                className='csb-input-field'
                                                onChange={handleInputChange}
                                                onClick={toggleDropdown}
                                            >
                                                <Svg isOpen={isOpen} />
                                                <option value='' disabled>
                                                    Select...
                                                </option>
                                                <option value='option1'>Option 1</option>
                                                <option value='option2'>Option 2</option>
                                            </Field>


                                            < InputArrow isOpen={false} />
                                        </div>
                                        {/* </div> */}
                                        <ErrorMessage
                                            name='companyType'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>

                                    <Col md={6}>
                                        <Label htmlFor='taxType' className='csb-form-label'>
                                            Tax ID Type *
                                        </Label>
                                        <div style={{ position: 'relative' }}>
                                            <Field
                                                as='select'
                                                id='taxType'
                                                name='taxType'
                                                className='csb-input-field'
                                                onChange={handleInputChange}
                                            >
                                                <option value='' disabled>
                                                    Select...
                                                </option>
                                                <option value='option1'>Option 1</option>
                                                <option value='option2'>Option 2</option>
                                            </Field>
                                            < InputArrow isOpen={false} />
                                        </div>
                                        <ErrorMessage
                                            name='taxType'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '20px' }}>
                            <Col md={4}>
                                <div>
                                    <p className='text-styles-para'>
                                        <strong>2 / 3</strong>
                                    </p>
                                    <h4 class='text-styles-heading'>Address Information</h4>
                                    <p className='text-styles-para'>
                                        Enter your address information here
                                    </p>
                                </div>
                            </Col>
                            <Col md={8}>
                                <Row className='mb-3'>
                                    <Col md={12}>
                                        <Label
                                            htmlFor='address1'
                                            className='csb-form-label'
                                        >
                                            Address 1 *
                                        </Label>
                                        <Field
                                            type='text'
                                            placeholder='Enter Address'
                                            id='address1'
                                            name='address1'
                                            className='csb-input-field'
                                            as={Input}
                                            onChange={handleInputChange}
                                        />
                                        <ErrorMessage
                                            name='address1'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col md={12}>
                                        <Label
                                            htmlFor='address2'
                                            className='csb-form-label'
                                        >
                                            Address 2 *
                                        </Label>
                                        <Field
                                            type='text'
                                            placeholder='Enter Address'
                                            id='address2'
                                            name='address2'
                                            as={Input}
                                            className='csb-input-field'
                                            onChange={handleInputChange}
                                        />
                                        <ErrorMessage
                                            name='address2'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col md={12}>
                                        <Label
                                            htmlFor='address3'
                                            className='csb-form-label'
                                        >
                                            Address 3 *
                                        </Label>
                                        <Field
                                            type='text'
                                            placeholder='Enter Address'
                                            id='address3'
                                            name='address3'
                                            as={Input}
                                            className='csb-input-field'
                                            onChange={handleInputChange}
                                        />
                                        <ErrorMessage
                                            name='address3'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col md={6}>
                                        <Label htmlFor='country' className='csb-form-label'>
                                            Country <span style={{ color: 'red' }}>*</span>
                                        </Label>
                                        <div style={{ position: 'relative' }}>
                                            <Field
                                                as='select'
                                                id='country'
                                                name='country'
                                                className='csb-input-field'
                                                onChange={handleInputChange}
                                            >
                                                <option value='' disabled>
                                                    Select...
                                                </option>
                                                <option value='option1'>Option 1</option>
                                                <option value='option2'>Option 2</option>
                                            </Field>


                                            < InputArrow isOpen={false} />
                                        </div>
                                        <ErrorMessage
                                            name='country'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor='state' className='csb-form-label'>
                                            State <span style={{ color: 'red' }}>*</span>
                                        </Label>
                                        <div style={{ position: 'relative' }}>
                                            <Field
                                                as='select'
                                                id='state'
                                                name='state'
                                                className='csb-input-field'
                                                onChange={handleInputChange}
                                            >
                                                <option value='' disabled>
                                                    Select...
                                                </option>
                                                <option value='option1'>Option 1</option>
                                                <option value='option2'>Option 2</option>
                                            </Field>


                                            < InputArrow isOpen={false} />
                                        </div>
                                        <ErrorMessage
                                            name='state'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>
                                </Row>
                                <Row className='mb-3'>
                                    <Col md={6}>
                                        <Label htmlFor='city' className='csb-form-label'>
                                            City *
                                        </Label>
                                        <div style={{ position: 'relative' }}>
                                            <Field
                                                as='select'
                                                id='city'
                                                name='city'
                                                className='csb-input-field'
                                                onChange={handleInputChange}
                                            >
                                                <option value='' disabled>
                                                    Select...
                                                </option>
                                                <option value='Lucknow'>Lucknow</option>
                                                <option value='Kanpur'>Kanpur</option>
                                                <option value='Nagpur'>Nagpur</option>
                                            </Field>


                                            < InputArrow isOpen={false} />
                                        </div>
                                        <ErrorMessage
                                            name='city'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor='zipCode' className='csb-form-label'>
                                            Zip Code *
                                        </Label>
                                        <Field
                                            type='text'
                                            id='zipCode'
                                            name='zipCode'
                                            as={Input}
                                            className='csb-input-field'
                                            onChange={handleInputChange}
                                        />
                                        <ErrorMessage
                                            name='zipCode'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '20px' }}>
                            <Col md={4}>
                                <div>
                                    <p className='text-styles-para'> <strong>3 / 3</strong></p>
                                    <h4 class='text-styles-heading'>Contact Information</h4>
                                    <p className='text-styles-para'>Enter Your Contact Information Here</p>
                                </div>
                            </Col>
                            <Col md={8}>
                                <Row className='mb-4'>
                                    <Col md={6}>
                                        <Label htmlFor='contactPerson' className='csb-form-label'>
                                            Contact Person *
                                        </Label>
                                        <Field
                                            type='text'
                                            id='contactPerson'
                                            name='contactPerson'
                                            as={Input}
                                            placeholder='Enter Contact Person'
                                            className='csb-input-field'
                                        />
                                        <ErrorMessage
                                            name='contactPerson'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor='designation' className='csb-form-label'>
                                            Designation
                                        </Label>
                                        <Field
                                            type='text'
                                            id='designation'
                                            name='designation'
                                            as={Input}
                                            placeholder='Enter Designation'
                                            className='csb-input-field'
                                        />
                                    </Col>
                                </Row>

                                <Row className='mb-4'>
                                    <Col md={6}>
                                        <Label htmlFor='email' className=' csb-form-label'>
                                            Email ID *
                                        </Label>
                                        <Field
                                            type='text'
                                            id='email'
                                            name='email'
                                            as={Input}
                                            placeholder='Enter Email ID'
                                            className='csb-input-field'
                                        />
                                        <ErrorMessage
                                            name='email'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor='mobileNumber' className='csb-form-label'>
                                            Mobile Number
                                        </Label>
                                        <Field
                                            type='text'
                                            id='mobileNumber'
                                            name='mobileNumber'
                                            as={Input}
                                            placeholder='Enter Mobile Number'
                                            className='csb-input-field'
                                        />
                                    </Col>
                                </Row>

                                <Row className='mb-4'>
                                    <Col md={6}>
                                        <Label htmlFor='phoneNumber1' className='csb-form-label'>
                                            Phone Number 1 *
                                        </Label>
                                        <Field
                                            type='text'
                                            id='phoneNumber1'
                                            name='phoneNumber1'
                                            as={Input}
                                            placeholder='Enter Phone Number'
                                            className='csb-input-field'
                                        />
                                        <ErrorMessage
                                            name='phoneNumber1'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor='phoneNumber2' className='csb-form-label'>
                                            Phone Number 2
                                        </Label>
                                        <Field
                                            type='text'
                                            id='phoneNumber2'
                                            name='phoneNumber2'
                                            as={Input}
                                            placeholder='Enter Phone Number'
                                            className='csb-input-field'
                                        />
                                    </Col>
                                </Row>

                                <Row className='mb-4'>
                                    <Col md={6}>
                                        <Label htmlFor='fax' className='csb-form-label'>
                                            Fax *
                                        </Label>
                                        <Field
                                            type='text'
                                            id='fax'
                                            name='fax'
                                            as={Input}
                                            placeholder='Enter Fax'
                                            className='csb-input-field'
                                        />
                                        <ErrorMessage
                                            name='fax'
                                            component='div'
                                            className='text-danger-validation'
                                        />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12}>
                                        <button type='submit'>Submit</button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Formik>

                {/* </Col> */}
            </Row>
        </div>
    )
}

export default PersonalDetails