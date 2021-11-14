import testProperties from '../fixtures/testProperties.json';

class investingPage {

    checkInvestingPageLoaded() {
        return cy.get('div[class="banner-content no-offer"] > h1').contains(testProperties.investing);
    }

}
export default investingPage;
