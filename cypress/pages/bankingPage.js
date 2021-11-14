import testProperties from '../fixtures/testProperties.json';

class bankingPage {

    checkBankingPageLoaded() {
        return cy.get('div[class="banner-content no-offer"] > h1').contains(testProperties.banking);
    }

}
export default bankingPage;
