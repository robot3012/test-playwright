import {test, expect} from '@playwright/test';
test.skip ('Test de Acciones', async ({page}) => {
    await page.goto('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/');
    await page.fill('//input[@id="name"]', 'Juan Perez');
    await page.keyboard.press('Enter'); 
    await page.keyboard.insertText('Juan Perez');
    await page.mouse.wheel(0, 1000);
    await page.fill('//input[@id="email"]', 'test@prueba.com');
    await page.fill('//input[@id="ageSlider"]', '19');
    await page.click('//*[@type="submit"]');
    await expect(page.getByText('Form submitted!')).toBeVisible();
    await page.pause();
});

test.skip ('Test de Copy', async ({page}) => {
    await page.goto('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/');
    await expect(page.locator('//h1[contains(text(), "Sandbox para Pruebas Automatizadas")]')).toBeVisible();
    await expect(page.locator('//*[contains(text(), "Importancia del Testing")]')).toBeVisible();
    await expect(page.locator('//p[contains(text(), "El testing es una parte crucial del desarrollo de software,")]')).toBeVisible();
    await expect(page.locator('//*[text()= "Form submitted!"]')).toBeHidden();

    await page.pause();
});

test ('Test de Select', async ({page}) => {
    await page.goto('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/');
    await page.locator('//*[@id="developerRoles"]').selectOption('Backend Developer');
    await expect(page.locator('//*[text()="Form submitted!"]')).toBeHidden();
    //await page.locator('//*[@id="developerRoles"]').click();
    await page.pause();
});