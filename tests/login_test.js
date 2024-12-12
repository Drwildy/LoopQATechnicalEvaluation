const {test, expect} = require('@playwright/test');
import {ProjectPage} from '../pageObjects/projectsPage';
import {LoginPage} from '../pageObjects/loginPage';
const testCasesData = require('../tests/testData.json');




test.describe('Asana Demo App Tests', () => {
    test.beforeEach(async ({ page }) => {

        const loginPage = new LoginPage(page);

        await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/')

        await loginPage.login('admin', 'password123')
    })

    testCasesData.testCases.forEach((testCase) => {
        test(`Verify ${testCase.task} in ${testCase.project}`, async ({ page }) => {
            const projectPage = new ProjectPage(page);

            await projectPage.navigateProject(testCase.project)
            await projectPage.verifyTaskInColumn(testCase.task, testCase.column)
            await projectPage.verifyTaskTags(testCase.task, testCase.column, testCase.tags)
        })
    })
})