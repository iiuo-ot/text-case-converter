# Text Case Converter

**Simple, web-based tool to change text case**

A lightweight HTML/CSS/JavaScript tool that lets you quickly convert any text to **UPPERCASE**, **lowercase**, **Title Case**, or **Sentence case** directly in your browser. No backend required — just open the `index.html` file.

---

## Features

* Convert input text to:

  * Uppercase
  * Lowercase
  * Title Case (Capitalize Each Word)
  * Sentence case (First letter of each sentence capitalized)
* Copy converted text to clipboard with one click
* Clear input/output quickly
* Works fully offline — pure HTML, CSS and vanilla JavaScript
* Clean, responsive UI suitable for desktops and mobile devices

---

## Demo / Preview

Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari). No build tools or server required.

---

## Usage

1. Paste or type text into the input area.
2. Click one of the case buttons: **Uppercase**, **Lowercase**, **Title Case**, **Sentence Case**.
3. Use **Copy** to copy the converted text to your clipboard.
4. Use **Clear** to reset both input and output.

### Example

**Input:**

```
hello world. this is a sample sentence.
```

**After `Title Case`:**

```
Hello World. This Is A Sample Sentence.
```

**After `Sentence case`:**

```
Hello world. This is a sample sentence.
```

---

## Files in this repository (suggested)

```
text-case-converter/
├── index.html       # Main web page (HTML)
├── styles.css       # Styling (CSS)
├── script.js        # Conversion logic + clipboard handling (JS)
├── README.md        # This file
└── LICENSE          # Recommended: MIT license
```

---

## Implementation notes

* The project uses only vanilla JavaScript — no frameworks required.
* Title Case implementation capitalizes the first letter of each word (split on whitespace and punctuation) but does not attempt language-specific exceptions (like "and", "the") unless you add a custom exceptions list.
* Sentence case attempts to detect sentence boundaries by common punctuation (`.`, `?`, `!`) followed by whitespace and lowercases other characters before capitalizing the start of each sentence.

---

## Accessibility & Progressive Enhancement

* Use semantic HTML elements and labelled controls to improve accessibility.
* Buttons are keyboard-focusable and include `aria-label` attributes where appropriate.
* Works without JavaScript for reading content, but conversion controls require JS.

---

## How to run locally

1. Clone or download the repository.
2. Open `index.html` in a browser. (Or host on any static-file server.)

Example (using Python's simple server):

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

---

## Extending the tool

Ideas to add later:

* Add a `Sentence-per-line` or `Toggle Case` option
* Add keyboard shortcuts for quick conversions
* Add options to preserve or trim whitespace
* Support for locale-aware title-casing rules
* Add a downloadable button (e.g., download output as `.txt`)

---

## Contributing

Contributions are welcome. Please fork the repository, create a feature branch, and submit a pull request. Keep changes small and focused.

---

## License

This project is provided under the **MIT License** — see the `LICENSE` file for details.

---

## Contact

If you have questions or suggestions, open an issue in the repository or reach out via the contact details on the project page.
