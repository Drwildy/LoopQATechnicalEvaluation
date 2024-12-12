import {expect} from '@playwright/test'

export class ProjectPage {
    
    constructor(page){
        this.page = page;
    }

    elements = {
        getProjectBtn: (projectName) => this.page.locator(`h2:text("${projectName}")`),
        getTask: (taskName, columnName) => this.page.locator(`div.flex.flex-col:has-text("${columnName}")`).locator(`div.bg-white:has-text("${taskName}")`),
        getFeatureTags: (taskName, columnName) => this.page.locator(`div.flex.flex-col:has-text("${columnName}")`).locator(`div.bg-white:has-text("${taskName}")`).locator(`span.px-2.py-1`),
    }

    async navigateProject(projectName){
        await this.elements.getProjectBtn(projectName).click()
    }

    async verifyTaskInColumn(taskName, columnName){
        await expect(this.elements.getTask(taskName, columnName)).toBeVisible()
    }

    async verifyTaskTags( taskName, columnName, tags){
        await expect(this.elements.getFeatureTags(taskName, columnName)).toHaveText(tags)
    }

}

module.exports = {ProjectPage};