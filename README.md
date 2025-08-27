# Background Color Changer

A small, client-side web project that lets users change the page background color using preset buttons or a color picker.

---

## Demo

- Open [index.html](index.html) in a browser (double-click the file or use a live server extension).
- Click any preset color button (Red, Green, Blue, Purple) or choose a custom color using the color picker.

---

## Features

- Preset color buttons for quick changes.
- Color input (`<input type="color">`) for selecting any color.
- Smooth transition when the background color changes.

---

## Files

- [index.html](index.html) — main HTML file containing the UI and the color picker.
- [script.js](script.js) — JavaScript behavior; contains the [`changeColor`](script.js) function that applies the selected color to the page background.
- [README.md](README.md) — project documentation.

---

## Implementation details

- The function [`changeColor`](script.js) (in [script.js](script.js)) sets the background color:

  - It is invoked by inline `onclick` handlers for the preset buttons and by the `input` event listener attached to the color picker.
  - The DOMContentLoaded listener in [script.js](script.js) attaches the `input` event to the element with id `colorPicker` in [index.html](index.html).

---

## How to use

1. Open [index.html](index.html) in a browser.
2. Click one of the preset buttons to immediately set that color.
3. Or click the color picker to choose a custom color — the background updates as you pick.

Optional: serve the folder from a simple local server (e.g., VS Code Live Server) for a more realistic development experience.

---

## Development notes

- Styling and transitions are defined inline in [index.html](index.html) under the <style> block.
- Script is small and intentionally simple; if you expand the project, consider:
  - Moving styles to a separate CSS file.
  - Using `addEventListener` for button clicks instead of inline `onclick` attributes.
  - Debouncing input events if heavy processing is added.

---

## Possible improvements / TODO

- Persist selected color to localStorage so it remains after page reload.
- Add contrast-aware text color (auto-switch text color to white/black based on background brightness).
- Add an accessible label and keyboard support for the buttons and color picker.
- Extract CSS and JS to separate files for scalability.

---