import testProperties from '../fixtures/testProperties.json';


class homePage {
   
    getUrl() {
        return cy.visit(testProperties.url);
    }

    getListItems() {
        return cy.get('ul[class="commbank-list"] > li[role="listitem"]');
    }

    clickBankingMenu() {
        return cy.get('ul[class="commbank-list"] > li[role="listitem"] > a').contains(testProperties.banking).click();
    }

    clickHomeLoansMenu() {
        return cy.get('ul[class="commbank-list"] > li[role="listitem"] > a').contains(testProperties.homeloans).click();
    }

    clickInsuranceMenu() {
        return cy.get('ul[class="commbank-list"] > li[role="listitem"] > a').contains(testProperties.insurance).click();
    }

    clickInvestingMenu() {
        return cy.get('ul[class="commbank-list"] > li[role="listitem"] > a').contains(testProperties.investingmenu).click();
    }

    clickBusinessMenu() {
        return cy.get('ul[class="commbank-list"] > li[role="listitem"] > a').contains(testProperties.business).click();
    }

    clickInstitutionalMenu() {
        return cy.get('ul[class="commbank-list"] > li[role="listitem"] > a').contains(testProperties.institutional).click();
    }
    
       
}
export default homePage;
