import { expect } from "@playwright/test";
const {CommonPage } = require('./CommonPage');
import dotenv from 'dotenv';
dotenv.config();

export class LoginPage extends CommonPage {

    async launchUrl(){
        await this.page.goto('https://the-internet.herokuapp.com/');
        await expect(this.page.getByRole('heading', {name: 'Welcome to the-internet'})).toBeVisible();
    }

    async login() {
        await this.page.getByRole('link', {name: 'Basic Auth'}).click();
    // Create new context with credentials using existing browser
    const context = await this.page.context().browser().newContext({
        httpCredentials: {
            username: 'admin',
            password: 'admin'
        }
    });

    const page = await context.newPage();
    await  page.goto('https://the-internet.herokuapp.com/basic_auth');
    await expect(page.locator('p')).toContainText('Congratulations');
}
     async downloadFile() {
        await this.page.getByRole('link', {name: 'File Download'}).first().click();
        const element = await this.page.getByRole('link', {name: 'webdriverIO.png'});
        await this.download(element, 'image');
     }
}