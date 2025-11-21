
from playwright.sync_api import Page, expect, sync_playwright
import time

def verify_mobile_layout(page: Page):
    # Set viewport to mobile size (iPhone SE)
    page.set_viewport_size({"width": 375, "height": 667})

    # Go to home page
    page.goto("http://localhost:3000")

    # Wait for loading to finish
    page.wait_for_selector("text=Damien Mazeas, PhD", timeout=10000)

    # 1. Check Header Navigation
    # Screenshot the header to see if nav is scrollable/aligned
    nav = page.locator("nav")
    expect(nav).to_be_visible()

    # Take screenshot of the top part
    page.screenshot(path="verification/mobile_home.png")

    # 2. Go to Portfolio page
    # Click on "Portfolio" button in the nav
    portfolio_btn = page.get_by_role("button", name="Portfolio")
    portfolio_btn.click()

    # Wait for portfolio view to load
    # Check for "Selected Projects" banner
    expect(page.locator("text=Selected Projects")).to_be_visible()

    # Wait a bit for animations
    time.sleep(1)

    # Take screenshot of Portfolio page on mobile
    page.screenshot(path="verification/mobile_portfolio.png")

    # Scroll down a bit to check scrolling
    page.mouse.wheel(0, 200)
    time.sleep(0.5)
    page.screenshot(path="verification/mobile_portfolio_scrolled.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_mobile_layout(page)
            print("Verification script finished successfully.")
        except Exception as e:
            print(f"Verification script failed: {e}")
        finally:
            browser.close()
