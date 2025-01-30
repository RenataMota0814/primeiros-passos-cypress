import userData from '../fixtures/user-data.json'
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {     
  
} 

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
  
    dashboardPage.checkdashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDatails('First Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('EmployId', 'otherId', '2025-07-29', '123456', '0987654')
    myInfoPage.fillStatus()
    myInfoPage.saveform()
    

  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
  
})