class ContactUsPage{

static verifyContactUsPage(){
      cy.fixture('constants').then( (data)=>{
            cy.screenshot("contact-us-page");
            cy.url().should('include','contact-us');
            cy.title().should("eq", data.contactUsPageTitle);
            cy.get(('.contact-heading-wrapper .h2-48pt-mont.i6-dark-grey')).should("have.text", data.contactUsPageHeading);
        })
}

static fillUpAndVerifyContactUsForm(){
      cy.fixture('constants').then( (data)=>{
            cy.get('#First-Name').type(data.firstName);
            cy.get('#Last-Name').type(data.lastName);
            cy.get('#Email').type(data.email);
            cy.get('#Company-2').type(data.company);
            
            //dropdown ---> careers
            cy.get('#Enquiry-2 option').should('have.length',8);
            cy.get('#Enquiry-2').select(data.enquireType);
            cy.get('#Enquiry-2').should('have.value',data.enquireType);
       
            //click check box
            cy.get('#Subscribe-to-Email').click();
            cy.get('#Message-2').type(data.textBoxInput)
            // click submit btn
            cy.get('#email-form [type="submit"]').click();
    
            // final verification
            cy.screenshot("confirmation-text");
            cy.contains('.text-block._16-px.full-white', data.verificationText)
      })
}


}



export default ContactUsPage;