import testProperties from '../fixtures/testProperties.json';

class homeLoansPage {

    checkHomeLoansPageLoaded() {
        return cy.get('div[class="banner-content no-offer"] > h1').contains(testProperties.homeloans);
    }

}
export default homeLoansPage;
