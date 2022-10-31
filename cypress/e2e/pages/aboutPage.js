class AboutPage{

    // elements = {
    //     heading: () => cy.get('.bold-text-48'),
    //     subheading: () => cy.get('.yellow-text-span'),
    //     contactUsBtn: () => cy.get('[data-w-id="758b64f6-20a6-26ae-37c7-1ac812bd2e61"]'),
    // }

     static verifyAboutPage(){
        cy.fixture('constants').then( (data)=>{
            cy.screenshot("about-page");
            cy.url().should('include','about');
            cy.title().should("eq", data.aboutPageTitle);
            cy.get('.bold-text-48').should("have.text", data.aboutPageHeading);
            cy.get('.yellow-text-span').should("have.text", data.aboutPageSubHeading);
        })
    }

    static clickContactUsCTA(){
        cy.get('[data-w-id="758b64f6-20a6-26ae-37c7-1ac812bd2e61"]').click();
    }

}

 export default AboutPage;
