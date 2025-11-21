import time
from playwright.sync_api import sync_playwright, expect

def verify_layout():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Force dark color scheme preference in context
        context = browser.new_context(color_scheme="dark")
        page = context.new_page()

        # Navigate to the app
        page.goto("http://localhost:5173")

        # Inject a script to force localStorage to "true" for darkMode and reload
        page.evaluate("""
            localStorage.setItem('darkMode', 'true');
        """)
        page.reload()

        # Wait for the "Selected Projects" element to be visible
        expect(page.locator("text=Selected Projects")).to_be_visible(timeout=10000)

        # Wait a bit for animations to settle
        time.sleep(2)

        # Locate the popup container
        # The "Selected Projects" text is inside a div which is inside the motion.div
        # The structure is:
        # motion.div (popup-default)
        #   div (backdrop)
        #   motion.div (content layer)
        #     div (lighting effect - the one we changed)
        #     div (content)
        #       h3 (Selected Projects)

        # Let's grab the container that holds "Selected Projects"
        # Using xpath or css selectors.
        # We want the outer container to see the full effect (backdrop + overlay)

        # Try to find the container by text and going up
        popup_text = page.locator("text=Selected Projects")

        # Go up to the motion.div (content layer)
        content_layer = popup_text.locator("..").locator("..")

        # Go up to the main container
        main_popup = content_layer.locator("..")

        # Take a screenshot of the popup
        main_popup.screenshot(path="/tmp/verification/popup_dark_mode.png")

        print("Screenshot taken at /tmp/verification/popup_dark_mode.png")

        browser.close()

if __name__ == "__main__":
    verify_layout()
