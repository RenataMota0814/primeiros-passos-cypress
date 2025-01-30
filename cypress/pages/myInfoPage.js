class MyInfoPage {

    selectorList () {
        const selectors ={
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            genericCombobox: ".oxd-select-text--arrow",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
            dateClosedButton: ".--close",
            submitButton: ".orangehrm-left-space" 
        }  

        return selectors
    }

    fillPersonalDatails(firstName, lastName){
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
        
    }
    fillEmployeeDetails(employeeId, otherId, driversLicenseDate, sinNumber) {
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)    
        cy.get(this.selectorList().genericField).eq(5).clear().type(driversLicenseDate) 
        // cy.get(this.selectorList().genericField).eq(7).clear().type()
        // cy.get(this.selectorList().dateField).eq(0).clear().type()
        // cy.get(this.selectorList().dateClosedButton).click()
        // cy.get(this.selectorList().dateField).eq(1).clear().type()
        cy.get(this.selectorList().genericField).eq(8).clear().type(sinNumber)
    }

    saveform() {
        cy.get(this.selectorList().submitButton).eq(1).click({ force: true })
        cy.get('body').should('contain', 'Successfully Saved')
        //cy.get('oxd-toast-close')
    }

    fillStatus(){
        cy.get(this.selectorList().genericCombobox).eq(0).click({ force: true })
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        cy.get(this.selectorList().genericCombobox).eq(1).click({ force: true })
        cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    }

}
export default MyInfoPage