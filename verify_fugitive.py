import asyncio
from playwright.async_api import async_playwright
import time

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        try:
            await page.goto("http://localhost:8080")

            print("Página cargada. Esperando a la pantalla de bienvenida...")
            await page.wait_for_selector("#welcome-container", state="visible", timeout=10000)

            # Click para empezar
            await page.click("#start-quiz-btn")
            print("Botón de inicio presionado.")

            # Seleccionar dificultad Fácil
            await page.wait_for_selector("#difficulty-screen", state="visible", timeout=5000)
            await page.click("#btn-easy")
            print("Dificultad FÁCIL seleccionada.")

            # Pasar las instrucciones
            await page.wait_for_selector("#instructions-screen", state="visible", timeout=5000)
            await page.click("#start-transmission-btn")
            print("Pasando las instrucciones...")

            # Esperar a que la pantalla del quiz esté visible
            await page.wait_for_selector("#quiz-game-screen", state="visible", timeout=5000)
            print("Pantalla del quiz cargada.")

            # Responder a la primera pregunta (la primera opción es la correcta)
            await page.wait_for_selector(".answer-btn[data-index='0']", state="visible", timeout=5000)
            await page.click(".answer-btn[data-index='0']")
            print("Respuesta correcta seleccionada. ¡Empieza la persecución!")

            # Simular persecución con el ratón
            print("Moviendo el ratón para probar la animación del botón fugitivo...")

            # Mover el ratón a una esquina para observar desde lejos
            await page.mouse.move(10, 10)
            await asyncio.sleep(2)

            # Acercarse lentamente al centro donde podría estar el botón
            await page.mouse.move(600, 400, steps=20)
            await asyncio.sleep(2)

            # Movimiento rápido para asustarlo
            await page.mouse.move(620, 420, steps=5)
            await asyncio.sleep(2)
            await page.mouse.move(200, 500, steps=20)
            await asyncio.sleep(2)

            # Tomar captura de pantalla
            screenshot_path = "fugitive_button_test.png"
            await page.screenshot(path=screenshot_path)
            print(f"Captura de pantalla guardada en: {screenshot_path}")

        except Exception as e:
            print(f"Ha ocurrido un error durante la verificación: {e}")
        finally:
            print("Cerrando el navegador.")
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
