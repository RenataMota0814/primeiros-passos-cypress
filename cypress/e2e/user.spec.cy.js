import userData from '../fixtures/user-data.json'
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
  
    dashboardPage.checkdashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDatails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails(chance.word(), chance.word(), '2025-07-29', '123456', '0987654')
    myInfoPage.fillStatus()
    myInfoPage.saveform()
  })

})