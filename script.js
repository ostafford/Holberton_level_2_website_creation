// Select all elements with the class "heading_panel"
/* Step 1. Select what (<element>,.class,#ID) the user will click first to interact or start the interaction */
const headingPanels = document.querySelectorAll(".heading_panel");

// Select the element and add an event listener to it
/* Step 2. What should happen when the element is clicked */
/* eg. `foreach` is used to iterate over each element in the `headingPanels` array */
headingPanels.forEach((panel) => {
  panel.addEventListener("click", function () {
    // Close all content panels except the clicked one
    headingPanels.forEach((item) => {
      if (item !== this) {
        item.classList.remove("active");
        item.nextElementSibling.style.maxHeight = null;
      }
    });

    // Toggle active class for the clicked panel
    this.classList.toggle("active");

    // Select the next sibling element (content_panel) and toggle its max-height
    const contentPanel = this.nextElementSibling;
    if (contentPanel.style.maxHeight) {
      contentPanel.style.maxHeight = null;
    } else {
      contentPanel.style.maxHeight = contentPanel.scrollHeight + "px";
    }
  });
});
