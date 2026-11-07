# Reaglet

A small, static ISC Class XII Chemistry revision website. It has two modes:

- **Fact cards** — a short fact, followed by an explanation and a connection.
- **Questions** — multiple-choice sample practice questions with instant feedback.

The project uses plain HTML, CSS and JavaScript. It has no framework, package manager, build step, server, API or external library.

## Run locally

1. Download or clone this repository.
2. Open the folder in VS Code.
3. Open `index.html` in a browser. You can also use VS Code's Live Preview / Live Server if you already have one installed, but it is not required.

## Publish with GitHub Pages

1. Create a GitHub repository and upload the **contents** of this folder (not the ZIP file).
2. Ensure `index.html` is in the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.

## Add a fact

Open `facts.js` and add another object to `window.REAGLET_FACTS`:

```js
{
  id: "SOL-003",                 // Must be unique
  chapter: "solutions",          // Must match a chapter ID below
  tag: "OSMOTIC PRESSURE",
  fact: "Write the short fact here.",
  explanation: "Explain why the statement is true.",
  connection: "Add an application, exception or related idea."
}
```

## Add a multiple-choice question

Open `questions.js` and add an object to `window.REAGLET_QUESTIONS`:

```js
{
  id: "SAMPLE-SOL-02",            // Must be unique
  chapter: "solutions",
  topic: "Colligative properties",
  marks: 1,
  prompt: "Write the question here.",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answerIndex: 1,                 // Zero-based: 0=A, 1=B, 2=C, 3=D
  explanation: "Explain the correct answer."
}
```

All question examples currently in `questions.js` are original sample practice questions. They are **not** actual ISC previous-year questions.

## Chapter IDs

Use one of these exact values for the `chapter` field:

| Chapter | ID |
|---|---|
| Solutions | `solutions` |
| Electrochemistry | `electrochemistry` |
| Chemical Kinetics | `chemical-kinetics` |
| d- and f-Block Elements | `d-f-block` |
| Coordination Compounds | `coordination-compounds` |
| Haloalkanes and Haloarenes | `haloalkanes-haloarenes` |
| Alcohols, Phenols and Ethers | `alcohols-phenols-ethers` |
| Aldehydes, Ketones and Carboxylic Acids | `aldehydes-ketones-acids` |
| Organic Compounds containing Nitrogen | `organic-compounds-nitrogen` |
| Biomolecules | `biomolecules` |

## Notes

- The chapter list is a starting structure for ISC Class XII Chemistry; check the current official syllabus before final publication.
- The theme preference is stored locally in the browser. No account or server is involved.
- The random deck shuffles and avoids repeats until all cards in the selected chapter/deck have been shown.
- Change the branding by searching for `Reaglet` in the HTML and README files.
