import time
from playwright.sync_api import sync_playwright, expect

def verify_portfolio_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 720})
        page = context.new_page()

        # Wait for server to start (adjust if necessary)
        time.sleep(5)

        try:
            # 1. Check Industrial Robotics Page (Fanuc image removal, video layout)
            print("Verifying Industrial Robotics Page...")
            page.goto("http://localhost:3000/#/project/industrial-robotics")
            page.wait_for_load_state("networkidle")

            # Check that fanuc image is NOT present (using alt text)
            # Previous alt was "Fanuc Robot"
            fanuc_img = page.get_by_alt_text("Fanuc Robot")
            expect(fanuc_img).not_to_be_visible()

            # Check videos are stacked (full width).
            # We can check if they have aspect-video class and are visible.
            # The layout change was putting them in a flex-col
            page.screenshot(path="verification/industrial_robotics.png")

            # 2. Check Remote Maintenance Page (Partners, Contributions & Limitations)
            print("Verifying Remote Maintenance Page...")
            page.goto("http://localhost:3000/#/project/remote-maintenance")
            page.wait_for_load_state("networkidle")

            expect(page.get_by_text("Contributions & Limitations")).to_be_visible()
            expect(page.get_by_text("Partners")).to_be_visible()
            # Check logos
            expect(page.get_by_alt_text("Cranfield University")).to_be_visible()
            expect(page.get_by_alt_text("DSTL")).to_be_visible()
            page.screenshot(path="verification/remote_maintenance.png")

            # 3. Check Telexistence Interface Page (Partners, Contributions & Limitations)
            print("Verifying Telexistence Interface Page...")
            page.goto("http://localhost:3000/#/project/telexistence-interface")
            page.wait_for_load_state("networkidle")

            expect(page.get_by_text("Contributions & Limitations")).to_be_visible()
            expect(page.get_by_text("Partners")).to_be_visible()
            expect(page.get_by_alt_text("Cranfield University")).to_be_visible()
            page.screenshot(path="verification/telexistence_interface.png")

            # 4. Check Remote Collab Page (Partners, Contributions & Limitations)
            print("Verifying Remote Collab Page...")
            page.goto("http://localhost:3000/#/project/remote-collab")
            page.wait_for_load_state("networkidle")

            expect(page.get_by_text("Contributions & Limitations")).to_be_visible()
            # Use heading role to be specific
            expect(page.get_by_role("heading", name="Partners")).to_be_visible()
            expect(page.get_by_alt_text("G-SCOP")).to_be_visible()
            page.screenshot(path="verification/remote_collab.png")

            # 5. Check VR Prototyping Page (Partners, Contributions & Limitations)
            print("Verifying VR Prototyping Page...")
            page.goto("http://localhost:3000/#/project/vr-prototyping")
            page.wait_for_load_state("networkidle")

            expect(page.get_by_text("Contributions & Limitations")).to_be_visible()
            expect(page.get_by_text("Partners")).to_be_visible()
            expect(page.get_by_alt_text("TUMCREATE")).to_be_visible()
            expect(page.get_by_alt_text("Arts et Métiers")).to_be_visible()
            page.screenshot(path="verification/vr_prototyping.png")

            # 6. Check Master Projects Page (Partners, Contributions & Limitations)
            print("Verifying Master Projects Page...")
            page.goto("http://localhost:3000/#/project/master-projects")
            page.wait_for_load_state("networkidle")
            expect(page.get_by_text("Contributions & Limitations")).to_be_visible()
            expect(page.get_by_role("heading", name="Partners")).to_be_visible()
            expect(page.get_by_alt_text("Gerresheimer")).to_be_visible()
            expect(page.get_by_alt_text("MMI")).to_be_visible()
            page.screenshot(path="verification/master_projects.png")

            # 7. Check Industrial Robotics Page (Partners, Contributions & Limitations)
            print("Verifying Industrial Robotics Page Details...")
            page.goto("http://localhost:3000/#/project/industrial-robotics")
            page.wait_for_load_state("networkidle")
            expect(page.get_by_text("Contributions & Limitations")).to_be_visible()
            expect(page.get_by_role("heading", name="Partners")).to_be_visible()
            expect(page.get_by_alt_text("Fanuc")).to_be_visible()
            page.screenshot(path="verification/industrial_robotics_details.png")

            # 8. Check Zoom behavior
            print("Verifying Zoom behavior...")
            # Navigate to a page with the image we want to test (VR Prototyping has 'Method')
            page.goto("http://localhost:3000/#/project/vr-prototyping")
            page.wait_for_load_state("networkidle")

            # Click an image - force click because of overlay
            page.get_by_role("img", name="Method").click(force=True)
            time.sleep(1)

            # Check if zoom modal is open (we can check for the fixed overlay with high z-index)
            zoom_modal = page.locator(".fixed.inset-0.z-\\[100\\]")
            expect(zoom_modal).to_be_visible()
            page.screenshot(path="verification/zoom_open.png")

            # Click the image itself to close
            zoom_img = zoom_modal.locator("img")
            zoom_img.click()
            time.sleep(1)

            expect(zoom_modal).not_to_be_visible()
            print("Zoom closed by clicking image.")

        except Exception as e:
            print(f"Verification failed: {e}")
            page.screenshot(path="verification/error.png")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_portfolio_changes()
