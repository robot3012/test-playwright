import { test, expect } from '@playwright/test';

test.describe('Pruebas de Playwright', () => {
  
  test('Buscar Iphone', async ({ page }) => {
    await page.goto('https://opencart.abstracta.us/');
    await page.getByPlaceholder('search').fill('Iphone');
    await page.pause()

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Your Store/);
  });

  test('Test Click en Mackbook', async ({ page }) => {
    await page.goto('https://opencart.abstracta.us/');
    await page.getByText('MacBook').click();
    await page.pause()

  });

  test('Ver el titulo de la pagina', async ({ page }) => {
    await test.step('Ver el titulo de la pagina', async () => {
      await page.goto('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/');
    });

    await test.step('Validar el titulo de la pagina', async () => {
      await page.getByText('//*[constains(text(), "Sandbox para Pruebas Automatizadas")]');
      await page.screenshot({ path: "./captures/" + Date.now() + 'screenshot.png' });
    });
  });

  test('Obtener el link de inicio', async ({ page }) => {
    await test.step('Ver el titulo de la pagina', async () => {
      await page.goto('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/');
    });

    await test.step('Validar el titulo de la pagina', async () => {
      await page.getByText('//*[constains(text(), "Sandbox para Pruebas Automatizadas")]');
    });
  });

})
