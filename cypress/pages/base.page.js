class BasePage {

    get title() { return cy.get('h1') }

    open(path) {
        return cy.visit(path)
    }
}

export default BasePage
