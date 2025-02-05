(function () {
    const accordionTriggers = document.querySelectorAll(
      "button.accordion-trigger"
    );
  
    accordionTriggers.forEach(function (trigger) {
      // Add click event and keyDown listener
      trigger.addEventListener("click", handleClick);
      trigger.addEventListener("keydown", onKeyDown);
    });
  
    // Click listener
    function handleClick(event) {
      event.preventDefault();
      const expanded = this.getAttribute("aria-expanded") === "true";
  
      this.setAttribute("aria-expanded", String(!expanded));
  
      // get the content element it controls
      const content = document.getElementById(this.getAttribute("aria-controls"));
      content.hidden = expanded;
    }
  
    // onKeyDown listener
    function onKeyDown(event) {
      const { key } = event;
      if (key === "Home") {
        accordionTriggers[0]?.focus();
      } else if (key === "End") {
        accordionTriggers[1]?.focus();
      }
    }
  })();
  