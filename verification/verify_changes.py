import time
from playwright.sync_api import sync_playwright, Page, expect

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Verify Light Mode Background
        print("Navigating to Home (Light Mode)...")
        page.goto("http://localhost:5173")
        time.sleep(2) # Wait for load
        page.screenshot(path="verification/1_home_light.png")
        print("Screenshot taken: verification/1_home_light.png")

        # 2. Verify Dark Mode Background
        print("Toggling Dark Mode...")
        # Try to toggle by executing JS if button is hard to click due to overlay
        # Or click the container of the button
        try:
            # Using force click might help if something is intercepting
            toggle_btn = page.locator("button").filter(has=page.locator("svg.lucide-moon")).or_(page.locator("button").filter(has=page.locator("svg.lucide-sun"))).first
            if toggle_btn.count() > 0:
                toggle_btn.click(force=True)
                time.sleep(1)
                page.screenshot(path="verification/2_home_dark.png")
                print("Screenshot taken: verification/2_home_dark.png")
            else:
                # Fallback: Toggle class on html element
                print("Button not found, toggling class via JS...")
                page.evaluate("document.documentElement.classList.toggle('dark')")
                time.sleep(1)
                page.screenshot(path="verification/2_home_dark_js.png")
                print("Screenshot taken: verification/2_home_dark_js.png")

        except Exception as e:
            print(f"Error toggling dark mode: {e}")

        # 3. Verify Arduino Page (Dark Mode)
        print("Navigating to Arduino Page...")
        page.goto("http://localhost:5173/#/project/arduino-unity")
        time.sleep(2)
        page.screenshot(path="verification/3_arduino_dark.png")
        print("Screenshot taken: verification/3_arduino_dark.png")

        # Toggle back to light mode for Arduino
        try:
            toggle_btn = page.locator("button").filter(has=page.locator("svg.lucide-moon")).or_(page.locator("button").filter(has=page.locator("svg.lucide-sun"))).first
            if toggle_btn.count() > 0:
                toggle_btn.click(force=True)
            else:
                 page.evaluate("document.documentElement.classList.toggle('dark')")

            time.sleep(1)
            page.screenshot(path="verification/4_arduino_light.png")
            print("Screenshot taken: verification/4_arduino_light.png")
        except:
            pass

        # 4. Verify Zoomable Image
        print("Verifying Zoomable Image...")
        # Find the ZoomableImage wrapper div instead of img tag, because the overlay div might be intercepting the click
        # Structure is <div class="relative group cursor-zoom-in ..."><img ...><div class="absolute inset-0 ..."></div></div>
        # We should click the parent div.

        # Let's find an image that is likely zoomable.
        zoomable_container = page.locator(".cursor-zoom-in").nth(0)
        if zoomable_container.count() > 0:
            print("Found zoomable container, clicking...")
            zoomable_container.click(force=True)
            time.sleep(1)
            page.screenshot(path="verification/5_arduino_zoomed.png")
            print("Screenshot taken: verification/5_arduino_zoomed.png")

            # Click to close - finding the overlay
            close_overlay = page.locator(".cursor-zoom-out")
            if close_overlay.count() > 0:
                close_overlay.click(force=True)
                time.sleep(0.5)
            else:
                print("Close overlay not found")
        else:
            print("No zoomable image found")

        browser.close()

if __name__ == "__main__":
    verify_frontend()
