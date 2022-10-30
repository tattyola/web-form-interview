import OverviewPage from "../pages/overview.page";
import ConformationPage from "../pages/conformation.page";
import {faker} from '@faker-js/faker';
import moment from "moment/moment";

const myText = faker.random.word();
const myPassword = faker.internet.password();

describe('e2e', function () {

    before(() => {
        OverviewPage.open('https://www.selenium.dev/selenium/web/web-form.html')
        cy.title().should('eq', 'Web form');
        OverviewPage.title.should('have.text', 'Web form');
    })

    it('should fill out the form and click on submit button', function () {

        //text input
        OverviewPage.textInput.type(myText);
        OverviewPage.textInput.should('have.value', myText);

        //password
        OverviewPage.passwordInput.type(myPassword);
        OverviewPage.passwordInput.should('have.value', myPassword);

        // textarea
        OverviewPage.textarea.type('Some text');
        OverviewPage.textarea.should('have.value', 'Some text');

        // disabled input
        OverviewPage.disabledInput.should('be.disabled');

        // readonly input
        OverviewPage.readonlyInput.should('be.enabled');
        OverviewPage.readonlyInput.click();

        // dropdown (select)
        OverviewPage.dropdownSelect.select('Two');
        OverviewPage.dropdownSelect.should('have.value', '2');

        // dropdown (datalist)
        OverviewPage.dropdownInput.type('San Francisco');
        OverviewPage.dropdownInput.should('have.value', 'San Francisco');

        // upload file
        OverviewPage.fileInput.selectFile('sample.pdf', {
            action: 'drag-drop'
        });

        // checkboxes
        OverviewPage.checkedCheckbox.should('have.attr', 'checked');
        OverviewPage.checkedCheckbox.check();
        OverviewPage.defaultCheckbox.check();

        // radio buttons
        OverviewPage.checkedRadio.should('have.attr', 'checked');
        OverviewPage.defaultRadio.check();

        // color picker
        OverviewPage.colorInput.invoke('val', '#FF0000').trigger("change");

        // date picker
        const todayDate = moment().format('D');
        OverviewPage.dateInput.click();
        OverviewPage.daysTd(todayDate).click();
        OverviewPage.dateInput.type('{esc}');
        OverviewPage.dateInput.should('have.value', moment().format('L'));

        // example range
        OverviewPage.range.invoke('val', '70').trigger('change');
        OverviewPage.range.invoke('val', '0').trigger('change');

        // submit button
        OverviewPage.submitBtn.click();
        cy.title().should('eq', 'Web form - target page');
        ConformationPage.title.should('have.text', 'Form submitted');
        ConformationPage.messageTxt.should('have.text', 'Received!');

    });
});
