import BasePage from "./base.page";

class ConformationPage extends BasePage {

    get messageTxt() { return cy.get('#message') }

}

export default new ConformationPage()
