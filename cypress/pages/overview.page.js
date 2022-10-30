import BasePage from './base.page'

class OverviewPage extends BasePage {

    get textInput() { return cy.get('#my-text-id') }
    get passwordInput() { return cy.get('[name="my-password"]') }
    get textarea() { return cy.get('[name="my-textarea"]') }
    get disabledInput() { return cy.get('input[name="my-disabled"]') }
    get readonlyInput() { return cy.get('input[name="my-readonly"]') }
    get dropdownSelect() { return cy.get('[name="my-select"]') }
    get dropdownInput() { return cy.get('input[name="my-datalist"]') }
    get fileInput() { return cy.get('input[name="my-datalist"]') }
    get checkedCheckbox() { return cy.get('#my-check-1') }
    get defaultCheckbox() { return cy.get('#my-check-2') }
    get checkedRadio() { return cy.get('#my-radio-1') }
    get defaultRadio() { return cy.get('#my-radio-2') }
    get submitBtn() { return cy.get('[type="submit"]') }
    get dateInput() { return cy.get('[name="my-date"]') }
    get colorInput() { return cy.xpath('//input[@type="color"]') }
    get range() { return cy.get('[type="range"]') }

    daysTd(day) { return cy.xpath(`//td[@class="day"][text()="${day}"]`) }

}

export default new OverviewPage()
