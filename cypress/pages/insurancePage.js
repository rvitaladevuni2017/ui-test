import testProperties from '../fixtures/testProperties.json';

class insurancePage {

    checkInsurancePageLoaded() {
        return cy.get('div[class="banner-content with-offer"] > h1').contains(testProperties.insurance);
    }

}
export default insurancePage;
