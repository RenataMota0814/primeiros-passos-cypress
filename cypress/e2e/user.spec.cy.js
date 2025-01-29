import userData from '../fixtures/user-data.json'
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {     
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

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
  
    dashboardPage.checkdashboardPage()

    menuPage.accessMyInfo()
    
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('Other ID Test')    
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest') 
    cy.get(selectorsList.genericField).eq(7).clear().type('ssnNumberTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-03-10')
    cy.get(selectorsList.dateClosedButton).click()
    cy.get(selectorsList.dateField).eq(1).clear().type('1985-04-06')
    cy.get(selectorsList.genericField).eq(8).clear().type('sinNumberTest')
    cy.get(selectorsList.submitButton).eq(1).click({ force: true })
    cy.get('body').should('contain', 'Successfully Saved')
    cy.get(selectorsList.genericCombobox).eq(0).click({ force: true })
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorsList.genericCombobox).eq(1).click({ force: true })
    cy.get('.oxd-select-dropdown > :nth-child(4)').click()
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type (userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
  
})