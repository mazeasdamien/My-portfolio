from playwright.sync_api import sync_playwright

def verify_home_performance():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to home
        page.goto("http://localhost:3000")

        # Wait for content to load
        page.wait_for_selector('text=Bridging')

        # Screenshot home
        page.screenshot(path="verification/optimized_home.png")

        # Verify lazy loading (indirectly by checking if layout is stable)
        # Scroll down to trigger lazy loading of below-the-fold content if any
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        page.wait_for_timeout(1000)

        page.screenshot(path="verification/optimized_home_scrolled.png")

        browser.close()

if __name__ == "__main__":
    verify_home_performance()
