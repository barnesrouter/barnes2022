import React, { useContext } from 'react';
import * as emailjs from "emailjs-com";
import { Button, FormGroup, Label } from "reactstrap";
import { Formik, Field, Form } from 'formik';
import { ReactstrapInput } from "reactstrap-formik";

import 'bootstrap/dist/css/bootstrap.min.css';


import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from "react-bootstrap/AccordionContext";
import Swal from "sweetalert2";

//import { isEmail } from "validator";


//import Recaptcha from 'react-recaptcha';


import * as Yup from 'yup';


function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <button
        type="button"
        className={isCurrentEventKey ? 'accordion-inner active' : 'accordion-inner notactive' }
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
}

const SignupSchema = Yup.object().shape({

    lastName: Yup.string().required('Last Name Required - in Applicant Information'),
    firstName: Yup.string().required('Last Name Required - in Applicant Information'),
    todaysDate: Yup.string().required('Todays Date Required - in Applicant Information'),
    streetAddress: Yup.string().required('Street Address Required - in Applicant Information'),
    city: Yup.string().required('City Required - in Applicant Information'),
    state: Yup.string().required('State Required - in Applicant Information'),
    zip: Yup.string().required('Zip Required - in Applicant Information'),
    phone: Yup.string().required('Phone Required - in Applicant Information'),
    email: Yup.string().email('Invalid email - in Applicant Information').required('Email Required - in Applicant Information'),
    signature: Yup.string().required('Signature Required - in Review and Submit'),
    todaysDate1: Yup.string().required('Date Required - in Review and Submit'),
  });

const EmploymentForm = () => (

    <div>
    <Formik
      initialValues={{
        lastName: '',
        firstName: '',
        middleInitial: '',
        todaysDate: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
        position: [],
        other1: '',
        usCitizen: '',
        authorizedCitizen: '',
        everWorked: '',
        other2: '',
        felony: '',
        other3: '',
        highSchool: '',
        addressHS: '',
        hsFrom: '',
        hsTo: '',
        graduate: '',
        hsDegree: '',
        college: '',
        addressCollege: '',
        collegeFrom: '',
        collegeTo: '',
        graduateCollege: '',
        collegeDegree: '',
        otherSchool: '',
        addressOther: '',
        otherFrom: '',
        otherTo: '',
        graduateOther: '',
        otherDegree: '',
        referenceName1: '',
        referenceRelationship1: '',
        referenceCompany1: '',
        referencePhone1: '',
        referenceAddress1: '',
        referenceName2: '',
        referenceRelationship2: '',
        referenceCompany2: '',
        referencePhone2: '',
        referenceAddress2: '',
        referenceName3: '',
        referenceRelationship3: '',
        referenceCompany3: '',
        referencePhone3: '',
        referenceAddress3: '',
        violation1: '',
        violation2: '',
        violation3: '',
        driversLicenseNo: '',
        driversLicenseState: '',
        driversLicenseEx: '',
        driversPhone: '',
        employCompany1: '',
        employPhone1: '',
        employAddress1: '',
        employSupervisor1: '',
        employTitle1: '',
        employStartSalary1: '',
        employEndSalary1: '',
        employResponsibilities1: '',
        employFrom1: '',
        employTo1: '',
        employLeave1: '',
        contactSupervisor1: '',
        employCompany2: '',
        employPhone2: '',
        employAddress2: '',
        employSupervisor2: '',
        employTitle2: '',
        employStartSalary2: '',
        employEndSalary2: '',
        employResponsibilities2: '',
        employFrom2: '',
        employTo2: '',
        employLeave2: '',
        contactSupervisor2: '',
        employCompany3: '',
        employPhone3: '',
        employAddress3: '',
        employSupervisor3: '',
        employTitle3: '',
        employStartSalary3: '',
        employEndSalary3: '',
        employResponsibilities3: '',
        employFrom3: '',
        employTo3: '',
        employLeave3: '',
        contactSupervisor3: '',
        willing1: '',
        willing2: '',
        willing3: '',
        willing4: '',
        willing5: '',
        willing6: '',
        willing7: '',
        willing8: '',
        willing9: '',
        willing10: '',
        willing11: '',
        willing12: '',
        willing13: '',
        hoursMon: '',
        hoursTues: '',
        hoursWed: '',
        hoursThurs: '',
        hoursFri: '',
        hoursSat: '',
        hoursSun: '',
        garden1: '',
        garden2: '',
        garden3: '',
        garden4: '',
        garden5: '',
        garden6: '',
        garden7: '',
        garden8: '',
        garden9: '',
        garden10: '',
        garden11: '',
        garden12: '',
        garden13: '',
        garden14: '',
        garden15: '',
        garden16: '',
        garden17: '',
        garden18: '',
        garden19: '',
        garden20: '',
        garden21: '',
        garden22: '',
        garden23: '',
        signature: '',
        todaysDate1: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, {resetForm}) => {
        
        //await new Promise((r) => setTimeout(r, 500));
        //alert(JSON.stringify(values, null, 2));
        console.log(values);
        emailjs.sendForm('barnes', 'formik_template', '#formikform', 'user_vOc0ylPHeC2nCdyLQJAiW');
        resetForm({ values: '' });
        Swal.fire({
            title: "Your employment application has been received. You will receive a confirmation email shortly.",
            icon: "success",
        });
      }}
      
    >
        
{({ errors, touched }) => (
<Form id="formikform">


<Accordion>

    <ContextAwareToggle eventKey="0">
        <FormGroup className="padding">
            <legend className="flex-sm justify"><div>Applicant Information</div><div className="btn">Start</div></legend>
        </FormGroup>
    </ContextAwareToggle>
    
    <Accordion.Collapse className="accordion__content" eventKey="0">
    <>    
        <div className="flex-md">
            <FormGroup className="padding flex1">
                <Field 
                    type="text"
                    id="lastName" 
                    name="lastName" 
                    label="Last Name" 
                    component={ReactstrapInput}
                />
                
            </FormGroup>
            <FormGroup className="padding flex1">
                <Field 
                    type="text"
                    id="firstName" 
                    name="firstName" 
                    label="First Name" 
                    component={ReactstrapInput}
                />
                
            </FormGroup>
            <FormGroup className="twenty padding">
                <Field 
                    type="text"
                    id="middleInitial" 
                    name="middleInitial" 
                    label="Middle Initial" 
                    component={ReactstrapInput}
                    />
            </FormGroup>
            <FormGroup className="twenty padding">
                <Field 
                    type="date"
                    placeholder="date placeholder"
                    label="Today's Date (Click)"
                    id="todaysDate" 
                    name="todaysDate" 
                    component={ReactstrapInput}
                    />
            </FormGroup>
        </div>

        <div className="flex-md">   
            <FormGroup className="flex1 padding">
                <Field 
                    type="text"
                    id="streetAddress"
                    label="Street Address"
                    name="streetAddress"
                    component={ReactstrapInput}
                    />
            </FormGroup>
            <FormGroup className="flex1 padding">
                <Field 
                    type="text"
                    id="apartment"
                    label="Apartment Number"
                    name="apartment"
                    component={ReactstrapInput}
                    />
            </FormGroup>
        </div>
        <div className="flex-md"> 
            <FormGroup className="thirty3 padding">
                <Field 
                    type="text"
                    id="city"
                    label="City"
                    name="city"
                    component={ReactstrapInput}
                    />
            </FormGroup>
            <FormGroup className="thirty3 padding">
                <Field 
                    type="text"
                    id="state"
                    label="State"
                    name="state"
                    component={ReactstrapInput}
                    />
            </FormGroup>
            <FormGroup className="thirty3 padding">
                <Field 
                    type="text"
                    id="zip"
                    label="Zip Code"
                    name="zip"
                    component={ReactstrapInput}
                    />
            </FormGroup>
        </div>
        <div className="flex-md"> 
            <FormGroup className="fifty padding">
                <Field 
                    type="tel"
                    id="phone"
                    label="Phone"
                    name="phone"
                    component={ReactstrapInput}
                    />
            </FormGroup>
            <FormGroup className="fifty padding">
                <Field 
                    id="email"
                    label="Email"
                    name="email"
                    component={ReactstrapInput}
                    />
            </FormGroup>
        </div>

        <FormGroup className="padding">
            <div id="checkbox-group" className="label-like">Position Desired</div>
            <div role="group" aria-labelledby="position-group" className="flex-sm checkbox-group">
                <Label className="flex1">
                    <Field type="checkbox" name="position" value="Landscape" />
                    &nbsp;Landscape
                </Label>
                <Label className="flex1">
                    <Field type="checkbox" name="position" value="Compost Site" />
                    &nbsp;Compost Site
                </Label>
                <Label className="flex1">
                    <Field type="checkbox" name="position" value="Garden Centers" />
                    &nbsp;Garden Centers
                </Label>
                <Label className="flex1">
                    <Field type="checkbox" name="position" value="Other" />
                    &nbsp;Other
                </Label>
            </div>
          </FormGroup>
          <div className="flex-md border-bottom"> 
            <FormGroup className="fifty padding">
                <Field 
                    type="text"
                    id="other1"
                    label="if Other"
                    name="other1"
                    component={ReactstrapInput}
                    />
            </FormGroup>
        </div>
        <div className="flex-md border-bottom"> 
            <FormGroup className="padding fifty">
            <div id="checkbox-group" className="label-like">Are you a citizen of the United States?</div>
            <div role="group" aria-labelledby="USA-group" className="flex-sm checkbox-group">
                <Label className="flex1">
                    <Field type="radio" name="usCitizen" value="Yes" />
                    &nbsp; Yes
                </Label>
                <Label className="flex1">
                    <Field type="radio" name="usCitizen" value="No" />
                    &nbsp; No
                </Label>
            </div>
          </FormGroup>
          <FormGroup className="padding fifty">
            <div id="checkbox-group" className="label-like">Are you authorized to work in the US?</div>
            <div role="group" aria-labelledby="Authorized?" className="flex-sm checkbox-group">
                <Label className="flex1">
                    <Field type="radio" name="authorizedCitizen" value="Yes" />
                    &nbsp; Yes
                </Label>
                <Label className="flex1">
                    <Field type="radio" name="authorizedCitizen" value="No" />
                    &nbsp; No
                </Label>
            </div>
          </FormGroup>
        </div>
        <div className="flex-md border-bottom"> 
            <FormGroup className="padding fifty">
            <div id="checkbox-group" className="label-like">Have you ever worked for this company?</div>
            <div role="group" aria-labelledby="everWorked" className="flex-sm checkbox-group">
                <Label className="flex1">
                    <Field type="radio" name="everWorked" value="Yes" />
                    &nbsp; Yes
                </Label>
                <Label className="flex1">
                    <Field type="radio" name="everWorked" value="No" />
                    &nbsp; No
                </Label>
            </div>
          </FormGroup>
          <FormGroup className="padding fifty">
            <Field 
            type="text"
            id="other2"
            label="if so, when?"
            name="other2"
            component={ReactstrapInput}
            />
          </FormGroup>
        </div>
        <div className="flex-md border-bottom"> 
            <FormGroup className="padding fifty">
            <div id="checkbox-group" className="label-like">Have you ever been convicted of a felony?</div>
            <div role="group" aria-labelledby="felony" className="flex-sm checkbox-group">
                <Label className="flex1">
                    <Field type="radio" name="felony" value="Yes" />
                    &nbsp; Yes
                </Label>
                <Label className="flex1">
                    <Field type="radio" name="felony" value="No" />
                    &nbsp; No
                </Label>
            </div>
          </FormGroup>
          <FormGroup className="padding fifty">
            <Field 
            type="text"
            id="other3"
            label="if yes, explain"
            name="other3"
            component={ReactstrapInput}
            />
          </FormGroup>
        </div>
    </>
    </Accordion.Collapse>




    <ContextAwareToggle eventKey="1">
        <FormGroup className="padding">
            <legend className="flex-sm justify"><div>Education</div><div className="btn">Start</div></legend>
        </FormGroup>
    </ContextAwareToggle>
    
    <Accordion.Collapse className="accordion__content" eventKey="1">
    <>
        {/* HS */}
        <div className="flex-md">
            <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="highSchool"
                    label="High School"
                    name="highSchool"
                    component={ReactstrapInput}
                />
          </FormGroup>
          <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="addressHS"
                    label="Address"
                    name="addressHS"
                    component={ReactstrapInput}
                />
          </FormGroup>
        </div>

        <div className="flex-md">
            <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="hsFrom"
                    label="From"
                    name="hsFrom"
                    component={ReactstrapInput}
                />
          </FormGroup>
          <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="hsTo"
                    label="To"
                    name="hsTo"
                    component={ReactstrapInput}
                />
          </FormGroup>
        </div>

        <div className="flex-md border-bottom">
            <FormGroup className="padding fifty">
                <div id="checkbox-group" className="label-like">Did you graduate?</div>
                <div role="group" aria-labelledby="graduate" className="flex-sm checkbox-group">
                    <Label className="flex1">
                        <Field type="radio" name="graduate" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="graduate" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="hsDegree"
                    label="Degree"
                    name="hsDegree"
                    component={ReactstrapInput}
                />
          </FormGroup>
        </div>
        {/* End HS */}

        {/* College */}
        <div className="flex-md form-padding-top">
            <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="college"
                    label="College"
                    name="college"
                    component={ReactstrapInput}
                />
          </FormGroup>
          <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="addressCollege"
                    label="Address"
                    name="addressCollege"
                    component={ReactstrapInput}
                />
          </FormGroup>
        </div>

        <div className="flex-md">
            <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="collegeFrom"
                    label="From"
                    name="collegeFrom"
                    component={ReactstrapInput}
                />
          </FormGroup>
          <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="collegeTo"
                    label="To"
                    name="collegeTo"
                    component={ReactstrapInput}
                />
          </FormGroup>
        </div>

        <div className="flex-md border-bottom">
            <FormGroup className="padding fifty">
                <div id="checkbox-group" className="label-like">Did you graduate?</div>
                <div role="group" aria-labelledby="graduateCollege" className="flex-sm checkbox-group">
                    <Label className="flex1">
                        <Field type="radio" name="graduateCollege" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="graduateCollege" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="collegeDegree"
                    label="Degree"
                    name="collegeDegree"
                    component={ReactstrapInput}
                />
          </FormGroup>
        </div>
        {/* End College */}

        {/* Other */}
        <div className="flex-md form-padding-top">
            <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="otherSchool"
                    label="Other Schooling"
                    name="otherSchool"
                    component={ReactstrapInput}
                />
          </FormGroup>
          <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="addressOther"
                    label="Address"
                    name="addressOther"
                    component={ReactstrapInput}
                />
          </FormGroup>
        </div>

        <div className="flex-md">
            <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="otherFrom"
                    label="From"
                    name="otherFrom"
                    component={ReactstrapInput}
                />
          </FormGroup>
          <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="otherTo"
                    label="To"
                    name="otherTo"
                    component={ReactstrapInput}
                />
          </FormGroup>
        </div>

        <div className="flex-md border-bottom">
            <FormGroup className="padding fifty">
                <div id="checkbox-group" className="label-like">Did you graduate?</div>
                <div role="group" aria-labelledby="graduateOther" className="flex-sm checkbox-group">
                    <Label className="flex1">
                        <Field type="radio" name="graduateOther" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="graduateOther" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="otherDegree"
                    label="Degree"
                    name="otherDegree"
                    component={ReactstrapInput}
                />
          </FormGroup>
        </div>
        {/* Other */}
    </>
        
    </Accordion.Collapse>

    <ContextAwareToggle eventKey="2">
        <FormGroup className="padding">
            <legend className="flex-sm justify"><div>References</div><div className="btn">Start</div></legend>
        </FormGroup>
    </ContextAwareToggle>
    
    <Accordion.Collapse className="accordion__content" eventKey="2">
    <>
        <div className="padding"><p className="padding">Please list up to three references.</p></div>
        <div className="flex-md padding">
            <FormGroup className="padding sixty">
                <Field 
                    type="text"
                    id="referenceName1"
                    label="Full Name"
                    name="referenceName1"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding forty">
                <Field 
                    type="text"
                    id="referenceRelationship1"
                    label="Relationship"
                    name="referenceRelationship1"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        <div className="flex-md padding">
            <FormGroup className="padding sixty">
                <Field 
                    type="text"
                    id="referenceCompany1"
                    label="Company"
                    name="referenceCompany1"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding forty">
                <Field 
                    type="text"
                    id="referencePhone1"
                    label="Phone"
                    name="referencePhone1"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        <div className="border-bottom padding">
            <FormGroup className="padding">
                <Field 
                    type="text"
                    id="referenceAddress1"
                    label="Address"
                    name="referenceAddress1"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        
        <div className="flex-md padding">
            <FormGroup className="padding sixty">
                <Field 
                    type="text"
                    id="referenceName2"
                    label="Full Name"
                    name="referenceName2"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding forty">
                <Field 
                    type="text"
                    id="referenceRelationship2"
                    label="Relationship"
                    name="referenceRelationship2"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        <div className="flex-md padding">
            <FormGroup className="padding sixty">
                <Field 
                    type="text"
                    id="referenceCompany2"
                    label="Company"
                    name="referenceCompany2"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding forty">
                <Field 
                    type="text"
                    id="referencePhone2"
                    label="Phone"
                    name="referencePhone2"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        <div className="border-bottom padding">
            <FormGroup className="padding">
                <Field 
                    type="text"
                    id="referenceAddress2"
                    label="Address"
                    name="referenceAddress2"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>

        <div className="flex-md padding">
            <FormGroup className="padding sixty">
                <Field 
                    type="text"
                    id="referenceName3"
                    label="Full Name"
                    name="referenceName3"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding forty">
                <Field 
                    type="text"
                    id="referenceRelationship3"
                    label="Relationship"
                    name="referenceRelationship3"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        <div className="flex-md padding">
            <FormGroup className="padding sixty">
                <Field 
                    type="text"
                    id="referenceCompany3"
                    label="Company"
                    name="referenceCompany3"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding forty">
                <Field 
                    type="text"
                    id="referencePhone3"
                    label="Phone"
                    name="referencePhone3"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        <div className="border-bottom padding">
            <FormGroup className="padding">
                <Field 
                    type="text"
                    id="referenceAddress3"
                    label="Address"
                    name="referenceAddress3"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>

    </>
    </Accordion.Collapse>

    <ContextAwareToggle eventKey="3">
        <FormGroup className="padding">
            <legend className="flex-sm justify"><div>Driving Record</div><div className="btn">Start</div></legend>
        </FormGroup>
    </ContextAwareToggle>
    
    <Accordion.Collapse className="accordion__content" eventKey="3">
    <>
    <FormGroup className="padding">
        <p className="padding">List all violations on your driving record within last 3 years and approx. dates</p>  
    </FormGroup>
        <div className="padding">
            <FormGroup className="padding">
                <Field 
                    type="text"
                    id="violation1"
                    label="Violation 1"
                    name="violation1"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding">
                <Field 
                    type="text"
                    id="violation2"
                    label="Violation 2"
                    name="violation2"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding">
                <Field 
                    type="text"
                    id="violation3"
                    label="Violation 3"
                    name="violation3"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        <div className="padding flex-md">
            <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="driversLicenseNo"
                    label="Driver's License No."
                    name="driversLicenseNo"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="driversLicenseState"
                    label="State"
                    name="driversLicenseState"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        <div className="padding flex-md">
            <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="driversLicenseEx"
                    label="Expiration"
                    name="driversLicenseEx"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding fifty">
                <Field 
                    type="text"
                    id="driversPhone"
                    label="Phone"
                    name="driversPhone"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
    </>
    </Accordion.Collapse>

    <ContextAwareToggle eventKey="4">
        <FormGroup className="padding">
            <legend className="flex-sm justify"><div>Previous Employment</div><div className="btn">Start</div></legend>
        </FormGroup>
    </ContextAwareToggle>
    
    <Accordion.Collapse className="accordion__content" eventKey="4">
    <>
        <div>
            <div className="padding flex-md">
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employCompany1"
                        label="Company"
                        name="employCompany1"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employPhone1"
                        label="Phone"
                        name="employPhone1"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding flex-md">
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employAddress1"
                        label="Address"
                        name="employAddress1"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employSupervisor1"
                        label="Supervisor"
                        name="employSupervisor1"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding flex-md">
                <FormGroup className="padding flex1">
                    <Field 
                        type="text"
                        id="employTitle1"
                        label="Job Title"
                        name="employTitle1"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding thirty3">
                    <Field 
                        type="text"
                        id="employStartSalary1"
                        label="Starting Salary"
                        name="employStartSalary1"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding thirty3">
                    <Field 
                        type="text"
                        id="employEndSalary1"
                        label="Ending Salary"
                        name="employEndSalary1"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding">
                <FormGroup className="padding">
                    <Field 
                        type="text"
                        id="employResponsibilities1"
                        label="Responsibilities"
                        name="employResponsibilities1"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding flex-md">
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employFrom1"
                        label="From"
                        name="employFrom1"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employTo1"
                        label="To"
                        name="employTo1"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding border-bottom">
                <FormGroup className="padding">
                    <Field 
                        type="text"
                        id="employLeave1"
                        label="Reason for Leaving"
                        name="employLeave1"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding fifty">
                    <div id="checkbox-group" className="label-like">May we contact your previous supervisor for a reference?</div>
                    <div role="group" aria-labelledby="contactSupervisor1" className="flex-sm checkbox-group">
                        <Label className="flex1">
                            <Field type="radio" name="contactSupervisor1" value="Yes" />
                            &nbsp; Yes
                        </Label>
                        <Label className="flex1">
                            <Field type="radio" name="contactSupervisor1" value="No" />
                            &nbsp; No
                        </Label>
                    </div>
                </FormGroup>
            </div>
        </div>

        <div>
            <div className="padding flex-md">
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employCompany2"
                        label="Company"
                        name="employCompany2"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employPhone2"
                        label="Phone"
                        name="employPhone2"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding flex-md">
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employAddress2"
                        label="Address"
                        name="employAddress2"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employSupervisor2"
                        label="Supervisor"
                        name="employSupervisor2"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding flex-md">
                <FormGroup className="padding flex1">
                    <Field 
                        type="text"
                        id="employTitle2"
                        label="Job Title"
                        name="employTitle2"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding thirty3">
                    <Field 
                        type="text"
                        id="employStartSalary2"
                        label="Starting Salary"
                        name="employStartSalary2"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding thirty3">
                    <Field 
                        type="text"
                        id="employEndSalary2"
                        label="Ending Salary"
                        name="employEndSalary2"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding">
                <FormGroup className="padding">
                    <Field 
                        type="text"
                        id="employResponsibilities2"
                        label="Responsibilities"
                        name="employResponsibilities2"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding flex-md">
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employFrom2"
                        label="From"
                        name="employFrom2"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employTo2"
                        label="To"
                        name="employTo2"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding border-bottom">
                <FormGroup className="padding">
                    <Field 
                        type="text"
                        id="employLeave2"
                        label="Reason for Leaving"
                        name="employLeave2"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding fifty">
                    <div id="checkbox-group" className="label-like">May we contact your previous supervisor for a reference?</div>
                    <div role="group" aria-labelledby="contactSupervisor2" className="flex-sm checkbox-group">
                        <Label className="flex1">
                            <Field type="radio" name="contactSupervisor2" value="Yes" />
                            &nbsp; Yes
                        </Label>
                        <Label className="flex1">
                            <Field type="radio" name="contactSupervisor2" value="No" />
                            &nbsp; No
                        </Label>
                    </div>
                </FormGroup>
            </div>
        </div>

        <div>
            <div className="padding flex-md">
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employCompany3"
                        label="Company"
                        name="employCompany3"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employPhone3"
                        label="Phone"
                        name="employPhone3"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding flex-md">
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employAddress3"
                        label="Address"
                        name="employAddress3"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employSupervisor3"
                        label="Supervisor"
                        name="employSupervisor3"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding flex-md">
                <FormGroup className="padding flex1">
                    <Field 
                        type="text"
                        id="employTitle3"
                        label="Job Title"
                        name="employTitle3"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding thirty3">
                    <Field 
                        type="text"
                        id="employStartSalary3"
                        label="Starting Salary"
                        name="employStartSalary3"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding thirty3">
                    <Field 
                        type="text"
                        id="employEndSalary3"
                        label="Ending Salary"
                        name="employEndSalary3"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding">
                <FormGroup className="padding">
                    <Field 
                        type="text"
                        id="employResponsibilities3"
                        label="Responsibilities"
                        name="employResponsibilities3"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding flex-md">
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employFrom3"
                        label="From"
                        name="employFrom3"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding fifty">
                    <Field 
                        type="text"
                        id="employTo3"
                        label="To"
                        name="employTo3"
                        component={ReactstrapInput}
                    />
                </FormGroup>
            </div>
            <div className="padding border-bottom">
                <FormGroup className="padding">
                    <Field 
                        type="text"
                        id="employLeave3"
                        label="Reason for Leaving"
                        name="employLeave3"
                        component={ReactstrapInput}
                    />
                </FormGroup>
                <FormGroup className="padding fifty">
                    <div id="checkbox-group" className="label-like">May we contact your previous supervisor for a reference?</div>
                    <div role="group" aria-labelledby="contactSupervisor3" className="flex-sm checkbox-group">
                        <Label className="flex1">
                            <Field type="radio" name="contactSupervisor3" value="Yes" />
                            &nbsp; Yes
                        </Label>
                        <Label className="flex1">
                            <Field type="radio" name="contactSupervisor3" value="No" />
                            &nbsp; No
                        </Label>
                    </div>
                </FormGroup>
            </div>
        </div>

        
    </>
    </Accordion.Collapse>

    <ContextAwareToggle eventKey="5">
        <FormGroup className="padding">
            <legend className="flex-sm justify"><div>Landscape Services &amp; Compost Site <span className="orange">(optional)</span></div><div className="btn">Start</div></legend>
        </FormGroup>
    </ContextAwareToggle>
    
    <Accordion.Collapse className="accordion__content" eventKey="5">
        <>
        <div className="padding">
            <p className="padding orange"><strong>Only fill out this section if you are applying for Lanscape Services or for a Compost Facility position.</strong></p> 
            <p className="padding">Part of the activities required to maintain and operate a recycling facility involve duties or tasks that are often overlooked when describing a specific job. If you answer no to a question below, please list question # and explain below.</p>
        </div>

        <div className="padding flex-md">
            <FormGroup className="padding flex1">
                <Field 
                    type="text"
                    id="willing1"
                    label="1. How many years experience do you have operating a skid steer?"
                    name="willing1"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding flex1">
                <Field 
                    type="text"
                    id="willing2"
                    label="2. How many years experience do you have operating a wheel loader?"
                    name="willing2"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding flex1">
                <Field 
                    type="text"
                    id="willing3"
                    label="3. How many years experience do you have in customer service?"
                    name="willing3"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        <div className="padding flex-md">
            <FormGroup className="padding flex1">
                <div id="checkbox-group" className="label-like">4. Are you willing and able to work weekend and evening hours?</div>
                <div role="group" aria-labelledby="willing4" className="flex-sm checkbox-group">
                    <Label className="flex1">
                        <Field type="radio" name="willing4" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="willing4" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1">
                <div id="checkbox-group" className="label-like">5. Can you operate heavy equipment in a safe manner?</div>
                <div role="group" aria-labelledby="willing5" className="flex-sm checkbox-group">
                    <Label className="flex1">
                        <Field type="radio" name="willing5" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="willing5" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            
        </div>
        <div className="padding flex-md">
            <FormGroup className="padding flex1 fifty">
                <Field 
                    type="text"
                    id="willing6"
                    label="6. How many years experience do you have driving a dump truck?"
                    name="willing6"
                    component={ReactstrapInput}
                />
            </FormGroup>
            
        </div>
        <div className="padding flex-md">
            <FormGroup className="padding flex1">
                <div id="checkbox-group" className="label-like">7. Do you have horticultural experience?</div>
                <div role="group" aria-labelledby="willing7" className="flex-sm checkbox-group">
                    <Label className="flex1">
                        <Field type="radio" name="willing7" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="willing7" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1">
                <Field 
                    type="text"
                    id="willing8"
                    label="a. If yes, how many years?"
                    name="willing8"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        <div className="padding flex-md">
            <FormGroup className="padding flex1">
                <Field 
                    type="textarea"
                    id="willing9"
                    label="b. Explain your horticultural experiences and knowledge."
                    name="willing9"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        <div className="padding flex-md">
            <FormGroup className="padding flex1">
                <div id="checkbox-group" className="label-like">8. Can you lift 60lbs.?</div>
                <div role="group" aria-labelledby="willing10" className="flex-sm checkbox-group">
                    <Label className="flex1">
                        <Field type="radio" name="willing10" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="willing10" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1">
                <div id="checkbox-group" className="label-like">9. Can you work well with other employees.?</div>
                <div role="group" aria-labelledby="willing11" className="flex-sm checkbox-group">
                    <Label className="flex1">
                        <Field type="radio" name="willing11" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="willing11" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1">
                <div id="checkbox-group" className="label-like">10. Are you will to try new things and new jobs.?</div>
                <div role="group" aria-labelledby="willing12" className="flex-sm checkbox-group">
                    <Label className="flex1">
                        <Field type="radio" name="willing12" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="willing12" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1">
                <div id="checkbox-group" className="label-like">11. Do you have a Class A or Class B CDL.?</div>
                <div role="group" aria-labelledby="willing13" className="flex-sm checkbox-group">
                    <Label className="flex1">
                        <Field type="radio" name="willing13" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="willing13" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
        </div>
        <div className="padding">
            <p className="padding">Please indicate the hours and days you are willing and able to work on a regular basis.</p>
        </div>
        <div className="padding flex-md">
            <FormGroup className="padding flex1">
                <Field 
                    type="text"
                    id="hoursMon"
                    label="Monday"
                    name="hoursMon"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding flex1">
                <Field 
                    type="text"
                    id="hoursTues"
                    label="Tuesday"
                    name="hoursTues"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding flex1">
                <Field 
                    type="text"
                    id="hoursWed"
                    label="Wednesday"
                    name="hoursWed"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        <div className="padding flex-md">
            <FormGroup className="padding flex1">
                <Field 
                    type="text"
                    id="hoursThurs"
                    label="Thursday"
                    name="hoursThurs"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding flex1">
                <Field 
                    type="text"
                    id="hoursFri"
                    label="Friday"
                    name="hoursFri"
                    component={ReactstrapInput}
                />
            </FormGroup>
            <FormGroup className="padding flex1">
                <Field 
                    type="text"
                    id="hoursSat"
                    label="Saturday"
                    name="hoursSat"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        <div className="padding flex-md border-bottom">
            <FormGroup className="padding thirty3">
                <Field 
                    type="text"
                    id="hoursSun"
                    label="Sunday"
                    name="hoursSun"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
        </>
    </Accordion.Collapse>

    <ContextAwareToggle eventKey="6">
        <FormGroup className="padding">
            <legend className="flex-sm justify"><div>Barnes Garden Centers <span className="orange">(optional)</span></div><div className="btn">Start</div></legend>
        </FormGroup>
    </ContextAwareToggle>
    
    <Accordion.Collapse className="accordion__content" eventKey="6">
    <>
        <div className="padding">
            <p className="padding orange"><strong>Only fill out this section if you are applying for a Barnes Garden Center position.</strong></p> 
            <p className="padding">Part of the activities required to maintain and operate a retail store involve duties or tasks that are often overlooked when describing a specific job.</p>
            <p className="padding">If you answer no to a question below, please list question # and explain in the special instructions text area below. </p>
        </div>
        <div className="padding">
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">1. Stock and dust shelves?</div>
                <div role="group" aria-labelledby="garden1" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden1" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden1" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">2. Dress to our standards. (No Shorts)</div>
                <div role="group" aria-labelledby="garden2" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden2" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden2" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">3. Approach all customers with a smile?</div>
                <div role="group" aria-labelledby="garden3" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden3" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden3" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">4. Clean the bathrooms?</div>
                <div role="group" aria-labelledby="garden4" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden4" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden4" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">5. Sweep and Mop the floors?</div>
                <div role="group" aria-labelledby="garden5" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden5" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden5" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">6. If applicable, smoke in designated areas?</div>
                <div role="group" aria-labelledby="garden6" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden6" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden6" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">7. Maintain a positive attitude?</div>
                <div role="group" aria-labelledby="garden7" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden7" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden7" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">8. Stand on your feet for long periods of time?</div>
                <div role="group" aria-labelledby="garden8" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden8" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden8" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">9. Operate a computerized register?</div>
                <div role="group" aria-labelledby="garden9" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden9" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden9" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">10. Clean windows and glass?</div>
                <div role="group" aria-labelledby="garden10" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden10" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden10" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">11. Work weekend and evening hours?</div>
                <div role="group" aria-labelledby="garden11" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden11" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden11" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">12. Move moxes and stock safely?</div>
                <div role="group" aria-labelledby="garden12" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden12" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden12" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">13. Make phone calls to people you don't know?</div>
                <div role="group" aria-labelledby="garden13" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden13" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden13" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">14. Work at a quick pace?</div>
                <div role="group" aria-labelledby="garden14" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden14" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden14" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">15. Work as a team?</div>
                <div role="group" aria-labelledby="garden15" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden15" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden15" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">16. Report to work on time when scheduled?</div>
                <div role="group" aria-labelledby="garden16" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden16" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden16" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">17. Follow Standard Operating Procedures?</div>
                <div role="group" aria-labelledby="garden17" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden17" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden17" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">18. Work outside in inclimate weather?</div>
                <div role="group" aria-labelledby="garden18" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden18" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden18" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">19. Get dirty?</div>
                <div role="group" aria-labelledby="garden19" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden19" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden19" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">20. Lift up to 40 lbs?</div>
                <div role="group" aria-labelledby="garden20" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden20" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden20" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">21. Suggestive sell?</div>
                <div role="group" aria-labelledby="garden21" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden21" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden21" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1 flex-md justify border-bottom">
                <div id="checkbox-group" className="label-like flex1">22. Try new things and new jobs?</div>
                <div role="group" aria-labelledby="garden22" className="flex-sm checkbox-group twenty">
                    <Label className="flex1">
                        <Field type="radio" name="garden22" value="Yes" />
                        &nbsp; Yes
                    </Label>
                    <Label className="flex1">
                        <Field type="radio" name="garden22" value="No" />
                        &nbsp; No
                    </Label>
                </div>
            </FormGroup>
            <FormGroup className="padding flex1">
                <Field 
                    type="textarea"
                    id="garden23"
                    label="Explain why you answered no to any of the above questions."
                    name="garden23"
                    component={ReactstrapInput}
                />
            </FormGroup>
        </div>
    
    </>
    </Accordion.Collapse>








    <ContextAwareToggle eventKey="8">
        <FormGroup className="padding">
            <legend className="flex-sm justify"><div>Review and Submit</div><div className="btn">Start</div></legend>
        </FormGroup>
    </ContextAwareToggle>
    
    <Accordion.Collapse className="accordion__content" eventKey="8">
    <>
    <div className="padding">
        <p className="padding">APPLICANT'S CERTIFICATION AND AGREEMENT: I hereby certify that the facts set forth in the above employment application are true and complete to the best of my knowledge and authorize Barnes Nursery, Inc. to verify their accuracy and to obtain reference information on my work performance. I hereby release Barnes Nursery, Inc. from any/all liability of whatever kind and nature which, at any time, could result from obtaining and having an employment decision based on such information.
        <br/>I understand that, if employed, falsified statements of any kind or omissions of facts called ro on this application shall be considered sufficient basis for dismissal. I understand that should an employment offer be extended to me and accepted that I will fully adhere to the policies, rules and regulations of employment of the Employer. However, I further understand that neither the policies, rules, regulations of employment nor anything said during the interview process shall be deemed to constitute the terms of an implied employment contract. 
        <br/>I understand that any employment offered is for an indefinite duration and at will and that either I or the Employer may terminate my employment at any time with or without notice or cause.</p>
    </div>
    <div className="padding flex-md">
        <FormGroup className="padding flex1">
            <Field 
                type="text"
                id="signature"
                label="Please type your full name here to act as your signature."
                name="signature"
                component={ReactstrapInput}
            />
        </FormGroup>
        <FormGroup className="twenty padding">
            <Field 
                type="date"
                placeholder="date placeholder"
                label="Today's Date (Click)"
                id="todaysDate1" 
                name="todaysDate1" 
                component={ReactstrapInput}
                />
        </FormGroup>
    </div>
    <div className="padding">
        <FormGroup className="padding">
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </FormGroup>
    </div>
    <div className="padding">
        <div className="padding erroring">
        {errors.lastName && touched.lastName ? (<div>{errors.lastName}</div>) : null}
        {errors.firstName && touched.firstName ? (<div>{errors.firstName}</div>) : null}
        {errors.todaysDate && touched.todaysDate ? (<div>{errors.todaysDate}</div>) : null}
        {errors.streetAddress && touched.streetAddress ? (<div>{errors.streetAddress}</div>) : null}
        {errors.city && touched.city ? (<div>{errors.city}</div>) : null}
        {errors.zip && touched.zip ? (<div>{errors.zip}</div>) : null}
        {errors.phone && touched.phone ? (<div>{errors.phone}</div>) : null}
        {errors.email && touched.zip ? (<div>{errors.email}</div>) : null}
        {errors.signature && touched.signature ? (<div>{errors.signature}</div>) : null}
        {errors.todaysDate1 && touched.todaysDate1 ? (<div>{errors.todaysDate1}</div>) : null}
        </div>
    </div>
    </>
    </Accordion.Collapse>

</Accordion>


</Form>
)}

</Formik>
</div>
 
  );
 
  
 
  export default EmploymentForm;