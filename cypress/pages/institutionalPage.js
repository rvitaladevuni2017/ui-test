import testProperties from '../fixtures/testProperties.json';

class institutionalPage {

    checkInstitutionalPageLoaded() {
        return cy.get('div[class="banner-content no-offer"] > h1').contains(testProperties.institutional);
    }

}
export default institutionalPage;
