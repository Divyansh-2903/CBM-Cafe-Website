import asyncio
from playwright.async_api import async_playwright
import json

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        try:
            await page.goto("https://www.justdial.com/Jaipur/Chicks-Burger-More-Jhotwara/0141P1414ST8929494_BZDET/photos", timeout=60000)
            await page.wait_for_selector('img', timeout=10000)
            
            # extract image src
            imgs = await page.evaluate('''() => {
                return Array.from(document.querySelectorAll('img'))
                    .map(img => img.src)
                    .filter(src => src.includes('jdmagicbox') && src.endsWith('.jpg'))
            }''')
            
            print(json.dumps(list(set(imgs))[:10]))
        except Exception as e:
            print(f"Error: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
