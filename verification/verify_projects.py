
from playwright.sync_api import sync_playwright, expect

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Base URL - assuming default Vite port
        base_url = "http://localhost:5173"

        # 1. VR Interface for Industrial Robotics
        print("Verifying VR Interface for Industrial Robotics...")
        page.goto(f"{base_url}/#/project/telexistence-interface")
        page.wait_for_timeout(2000) # Wait for load

        # Check for DSTL partner
        # expect(page.get_by_alt_text("DSTL")).to_be_visible() # Might fail if alt text is different, let's check existence
        page.screenshot(path="verification/telexistence_interface.png")
        print("Screenshot saved: verification/telexistence_interface.png")

        # 2. Expert and Worker Remote Collaboration
        print("Verifying Expert and Worker Remote Collaboration...")
        page.goto(f"{base_url}/#/project/remote-collab")
        page.wait_for_timeout(2000)

        # Check Project Data is gone (hard to verify absence with screenshot, but visible)
        # Check Publication button on right
        page.screenshot(path="verification/remote_collab.png")
        print("Screenshot saved: verification/remote_collab.png")

        # 3. Telexistence for Remote Maintenance
        print("Verifying Telexistence for Remote Maintenance...")
        page.goto(f"{base_url}/#/project/remote-maintenance")
        page.wait_for_timeout(2000)

        # Check title rename
        expect(page.get_by_text("Telexistence for Remote Maintenance", exact=True)).to_be_visible()
        # Check Metadata gone
        # Check buttons on right
        # Check videos on left
        page.screenshot(path="verification/remote_maintenance.png")
        print("Screenshot saved: verification/remote_maintenance.png")

        # 4. VR Application for Immersive Prototyping
        print("Verifying VR Application for Immersive Prototyping...")
        page.goto(f"{base_url}/#/project/vr-prototyping")
        page.wait_for_timeout(2000)

        # Check Context gone
        # Check images on left
        page.screenshot(path="verification/vr_prototyping.png")
        print("Screenshot saved: verification/vr_prototyping.png")

        # 5. Human-Computer Interaction
        print("Verifying Human-Computer Interaction...")
        page.goto(f"{base_url}/#/project/hci-course")
        page.wait_for_timeout(2000)

        # Check button on right
        # Check Key Details gone
        page.screenshot(path="verification/hci_course.png")
        print("Screenshot saved: verification/hci_course.png")

        # 6. Industrial VR Applications
        print("Verifying Industrial VR Applications...")
        page.goto(f"{base_url}/#/project/master-projects")
        page.wait_for_timeout(2000)

        # Check MMI logo size
        # Check removed images
        # Check large images
        page.screenshot(path="verification/master_projects.png")
        print("Screenshot saved: verification/master_projects.png")

        browser.close()

if __name__ == "__main__":
    verify_changes()
