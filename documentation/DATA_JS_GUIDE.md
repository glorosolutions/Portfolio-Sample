# Understanding `data.js`

The `data.js` file is the "brain" of your portfolio. It separates your personal content (the data) from the website's layout (the HTML). This allows you to update your website without touching complex HTML code.

## 🏗️ The Architecture

The file is divided into two main parts:

### 1. The Data Object (`PORTFOLIO`)

This is a standard JavaScript object containing all your information.

- **Strings**: Simple text like `name`, `role`, or `email`.
- **Arrays**: Lists of items like `projects`, `stats`, or `experience`. Each item in an array is an object `{}` with its own properties (e.g., `title`, `desc`).
- **Paths**: References to files, like `assets/img/main.png`.

### 2. The Renderer (Self-Executing Function)

This is the logic that runs as soon as the file is loaded in a browser. It:

1.  Grabs the data from the `PORTFOLIO` object.
2.  Finds specific "anchors" (HTML classes or IDs) in your HTML pages.
3.  Injects the data into those anchors.

---

## 🛠️ Helper Functions

To make the code clean, we use "Helper Functions" at the top of the Renderer:

- **`set(selector, html)`**: Finds **one** element (like `.hero-name`) and changes its content.
- **`setAll(selector, html)`**: Finds **every** element with that name (useful for logos or footers) and changes them all at once.
- **`setAttr(selector, attribute, value)`**: Changes an HTML attribute, like the `src` of an image or the `href` of a link.

---

## 🎨 How to Customize

### To change existing text:

Simply find the key in the `PORTFOLIO` object and change the value between the quotes.

```javascript
name: "Your New Name",
```

### To add a new project:

Find the `projects` array and add a new block inside the square brackets `[]`:

```javascript
{
  title: "My Amazing Project",
  desc:  "A short description of what I built.",
  tags:  ["React", "Node.js"],
  image: "assets/img/project-screenshot.jpg",
  liveUrl: "#",
  githubUrl: "#",
},
```

### To change the Footer:

I've added specific fields for the footer:

- `copyrightYear`: Updates the year automatically.
- `copyrightName`: Updates the name next to the year.
- `footerTagline`: Changes the "About" text in the footer.

---

## 🚀 Advanced: Adding Your Own Dynamic Fields

If you want to add a new dynamic field (e.g., a "Favorite Quote" in the hero section):

1.  **Add to `data.js`**:
    ```javascript
    const PORTFOLIO = {
      // ... existing data
      heroQuote: "Code is poetry.",
    };
    ```
2.  **Add to HTML**:
    ```html
    <p class="hero-quote"></p>
    ```
3.  **Update the Renderer** in `data.js`:
    ```javascript
    // Inside the (function() { ... })()
    set(".hero-quote", P.heroQuote);
    ```

---

_Note: Always ensure that the `data.js` script is linked at the bottom of your HTML files for the renderer to work correctly._
