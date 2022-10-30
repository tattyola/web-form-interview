import OverviewPage from "../pages/overview.page";
import ConformationPage from "../pages/conformation.page";
import { faker } from '@faker-js/faker';
import moment from "moment/moment";

const myText = faker.random.word();
const myPassword = faker.internet.password();

describe('smoke', function () {

    beforeEach(() => {
        OverviewPage.open('https://www.selenium.dev/selenium/web/web-form.html')
        cy.title().should('eq', 'Web form');
        OverviewPage.title.should('have.text', 'Web form');
    })

    it('validate text input', function () {
        OverviewPage.textInput.type(myText);
        OverviewPage.textInput.should('have.value', myText);
    });

    it('validate password', function () {
        OverviewPage.passwordInput.type(myPassword);
        OverviewPage.passwordInput.should('have.value', myPassword);
    });

    it('validate textarea', function () {
        OverviewPage.textarea.type('Some text');
        OverviewPage.textarea.should('have.value', 'Some text');
    });

    it('validate disabled input', function () {
        OverviewPage.disabledInput.should('be.disabled');
    });

    it('validate readonly input', function () {
        OverviewPage.readonlyInput.should('be.enabled');
        OverviewPage.readonlyInput.click();
    });

    it('validate dropdown (select)', function () {
        OverviewPage.dropdownSelect.select('Two');
        OverviewPage.dropdownSelect.should('have.value', '2');
    });

    it('validate dropdown (datalist)', function () {
        OverviewPage.dropdownInput.type('San Francisco');
        OverviewPage.dropdownInput.should('have.value', 'San Francisco');
    });

    it('validate upload file', function () {
        OverviewPage.fileInput.selectFile('sample.pdf', {
            action: 'drag-drop'
        });
    });

    it('validate checkboxes', function () {
        OverviewPage.checkedCheckbox.should('have.attr', 'checked');
        OverviewPage.checkedCheckbox.check();
        OverviewPage.defaultCheckbox.check();
    });

    it('validate radio buttons', function () {
            OverviewPage.checkedRadio.should('have.attr', 'checked');
            OverviewPage.defaultRadio.check();
    });

    it('validate submit button', function () {
        OverviewPage.submitBtn.click();
        cy.title().should('eq', 'Web form - target page');
        ConformationPage.title.should('have.text', 'Form submitted');
        ConformationPage.messageTxt.should('have.text', 'Received!');
    });

    it('validate color picker', function () {
        OverviewPage.colorInput.invoke('val', '#FF0000').trigger("change");
    });

    it('validate date picker', function () {
        const todayDate = moment().format('D');
        OverviewPage.dateInput.click();
        OverviewPage.daysTd(todayDate).click();
        OverviewPage.dateInput.type('{esc}');
        OverviewPage.dateInput.should('have.value', moment().format('L'));
    });

    it('validate example range', function () {
        OverviewPage.range.invoke('val', '70').trigger('change');
        OverviewPage.range.invoke('val', '0').trigger('change');

    });
});
