import testProperties from '../fixtures/testProperties.json';

class businessPage {

    checkBusinessPageLoaded() {
        return cy.get('div[class="banner-content no-offer"] > h1').contains(testProperties.business);
    }

}
export default businessPage;
