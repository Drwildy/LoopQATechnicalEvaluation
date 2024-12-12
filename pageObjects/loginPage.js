import {expect} from '@playwright/test'

export class LoginPage {
    
    constructor(page){
        this.page = page;
    }

    elements = {
        getUsername: () => this.page.locator('#username'),
        getPassword: () => this.page.locator('#password'),
        getSubmitBtn: () => this.page.locator('[type="submit"]')
    }

    async login(username, password){
        await this.elements.getUsername().fill('admin');
        await this.elements.getPassword().fill( 'password123');
        await this.elements.getSubmitBtn().click()
    }

}

module.exports = {LoginPage};