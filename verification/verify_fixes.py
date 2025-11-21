import time
from playwright.sync_api import sync_playwright, Page, expect

def verify_fixes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Verify Arduino Troubleshooting Checklist
        print("Navigating to Arduino Page...")
        page.goto("http://localhost:5173/#/project/arduino-unity")
        time.sleep(2)

        # Scroll to checklist
        checklist = page.locator("text=Troubleshooting Checklist")
        checklist.scroll_into_view_if_needed()
        time.sleep(0.5)
        page.screenshot(path="verification/checklist_new.png")
        print("Screenshot taken: verification/checklist_new.png")

        # 2. Verify Image Constraints (Arduino Page)
        # Take a screenshot of the top part where images are
        page.evaluate("window.scrollTo(0, 0)")
        time.sleep(0.5)
        page.screenshot(path="verification/arduino_images_constrained.png")
        print("Screenshot taken: verification/arduino_images_constrained.png")

        # 3. Verify Body Scroll Lock on Zoom
        print("Testing Scroll Lock...")
        zoomable = page.locator(".cursor-zoom-in").first
        zoomable.click()
        time.sleep(1)

        # Check overflow style
        overflow = page.evaluate("document.body.style.overflow")
        print(f"Body overflow style is: '{overflow}'")

        if overflow == "hidden":
            print("SUCCESS: Body scroll is locked.")
        else:
            print("FAILURE: Body scroll is NOT locked.")

        page.screenshot(path="verification/zoom_locked.png")
        print("Screenshot taken: verification/zoom_locked.png")

        browser.close()

if __name__ == "__main__":
    verify_fixes()
