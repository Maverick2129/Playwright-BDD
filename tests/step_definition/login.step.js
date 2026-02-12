import { createBdd } from "playwright-bdd";
const { Given, Then, When } = createBdd();
import{ LoginPage } from '../pages/loginPage';


Given('I launch and login to the website', async function({ page }){
    const loginPage = new LoginPage(page);
    await loginPage.launchUrl();
});