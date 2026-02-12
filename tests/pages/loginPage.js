import { expect } from "@playwright/test";

export class LoginPage {
    constructor(page) {
        this.page=page;
    }

    async launchUrl(){
        await this.page.goto('https://the-internet.herokuapp.com/');
        await expect(this.page.getByRole('heading', {name: 'Welcome to the-internet'})).toBeVisible();
    }
}