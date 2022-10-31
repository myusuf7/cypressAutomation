import 'cypress-xpath';
class HomePage{

    static verifyHomepage(){
       cy.fixture('constants').then( (data)=>{
       cy.screenshot("homepage");
       cy.url().should('include', 'i6');
       cy.title().should("eq", data.homepageTitle);
       cy.contains(data.homepageHeading);
       cy.contains(data.homepageSubHeading);
       cy.contains(data.requestADemoCTA);
       //below is optional
       cy.xpath('(//strong[@class="bold-text-47"])[1]').should("have.text", data.homepageHeading);
       cy.xpath('(//div[@class="paragraph-text-18pt"])[1]').should("have.text", data.homepageSubHeading);
       cy.xpath('(//a[@href="/contact-us"])[2]').should("have.text", data.requestADemoCTA);
     
      })
    }

    static clickFromMainCategory(category){
     cy.xpath(`(//nav[@role="navigation"]//a[@href="/${category.toLowerCase()}"])[1]`).click({force:true});
    }

    static acceptCookies(){
        cy.get('.fs-cc-banner_buttons-wrapper [fs-cc="allow"]').click();
    }

}

export default HomePage;