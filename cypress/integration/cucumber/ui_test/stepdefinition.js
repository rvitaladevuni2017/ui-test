import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import bankingPage from '../../../pages/bankingPage';
import businessPage from '../../../pages/businessPage';
import homeLoansPage from '../../../pages/homeLoansPage';
import homePage from '../../../pages/homePage';
import institutionalPage from '../../../pages/institutionalPage';
import insurancePage from '../../../pages/insurancePage';
import investingPage from '../../../pages/investingPage';

    const home = new homePage();
    const banking = new bankingPage();
    const business = new businessPage();
    const homeloans = new homeLoansPage();
    const institutional = new institutionalPage();
    const insurance = new insurancePage();
    const investing = new investingPage();    

    
    
Given('I am on the comm bank home {string}', (view_port) => {
    cy.viewport(view_port);
    home.getUrl();
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

Given('I am on the comm bank home {string} and {string}', (view_port,orientation) => {
    cy.viewport(view_port, orientation);
    home.getUrl();
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})


And('I verify all tabs on home page', function () {
    home.getListItems().should('be.visible');
})

And('I verify all tabs are loaded successfully', function () {
    
    home.clickBankingMenu();
    banking.checkBankingPageLoaded();

    home.clickHomeLoansMenu();
    homeloans.checkHomeLoansPageLoaded();

    home.clickInsuranceMenu();
    insurance.checkInsurancePageLoaded();

    home.clickInvestingMenu();
    investing.checkInvestingPageLoaded();

    home.clickBusinessMenu();
    business.checkBusinessPageLoaded();

    home.clickInstitutionalMenu();
    institutional.checkInstitutionalPageLoaded();
})


