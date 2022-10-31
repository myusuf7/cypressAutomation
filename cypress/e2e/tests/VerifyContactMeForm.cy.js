import 'cypress-xpath';
import homepage from '../pages/homePage'
import aboutPage from '../pages/aboutPage'
import contactUsPage from '../pages/contactUsPage'

describe('desktop regression', () => {
    
    beforeEach(()=>{
        cy.fixture('constants').then( (data)=>{  
        cy.log(" Navigate to homepage ");
        // cy.visit(data.baseURL);
        cy.visit("www.i6.io");
        homepage.acceptCookies();
        })
    });

    afterEach(()=>{
        cy.log(" Close the application ");
        cy.clearCookies();
    })
    
    
    it('contact us form verification', () => {

        homepage.verifyHomepage();
        homepage.clickFromMainCategory('About');
        aboutPage.verifyAboutPage();
        aboutPage.clickContactUsCTA();

        // fill up the form -----------------------
        contactUsPage.verifyContactUsPage();
        contactUsPage.fillUpAndVerifyContactUsForm();

    })
})