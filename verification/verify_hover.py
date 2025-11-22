from playwright.sync_api import sync_playwright, expect
import time

def verify_hover_layout(page):
    # Go to the app
    page.goto("http://localhost:3000/")

    # Wait for page to load
    page.wait_for_selector("h1")

    # Click on "Publication" filter (or just find where it is)
    # Based on Home.tsx, it seems the filter is a prop passed to Home.
    # Wait, Home.tsx receives `filter` as a prop.
    # I need to see how to switch filters.
    # Usually there's a navigation bar or buttons.
    # Let's assume there are buttons to switch filters.

    # Inspect the page to find filter buttons.
    # I'll take a screenshot of the home page first to see what controls are available.
    page.screenshot(path="/home/jules/verification/home_initial.png")

    # Try to find a button with text "Publications" or "Publication"
    # If not found, I might need to check App.tsx to see how filters are controlled.

    try:
        pub_btn = page.get_by_text("Publications", exact=False).first
        if pub_btn.is_visible():
            pub_btn.click()
            time.sleep(1) # Wait for transition

            # Now we are in publications view.
            # Find a card.
            cards = page.locator("a[href*='http'], div.group").all()
            # Filter for SpotlightCard structure if needed

            if len(cards) > 1:
                first_card = cards[0]
                second_card = cards[1]

                # Get initial position of second card
                box1 = second_card.bounding_box()

                # Hover over first card
                first_card.hover()

                # Wait a bit
                time.sleep(0.5)

                # Get new position of second card
                box2 = second_card.bounding_box()

                print(f"Initial pos: {box1}")
                print(f"Hover pos: {box2}")

                if box1 and box2:
                    if abs(box1['y'] - box2['y']) < 1:
                        print("SUCCESS: No layout shift detected.")
                    else:
                        print("FAILURE: Layout shift detected!")

                page.screenshot(path="/home/jules/verification/hover_state.png")
            else:
                print("Not enough cards found to test layout shift.")
        else:
            print("Publications button not found.")
    except Exception as e:
        print(f"Error finding/clicking publications: {e}")
        # Dump html to see what's there
        with open("/home/jules/verification/dump.html", "w") as f:
            f.write(page.content())

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_hover_layout(page)
        finally:
            browser.close()
