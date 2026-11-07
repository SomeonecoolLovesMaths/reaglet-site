(() => {
  "use strict";

  // -----------------------------------------------------
  // REAGLET — MAIN APPLICATION
  // Supports:
  // 1. Random fact cards
  // 2. Single-correct MCQs
  // 3. Multiple-correct MCQs
  // 4. Numerical-answer questions
  // 5. Step-by-step solutions
  // -----------------------------------------------------

  const chapters = [
    { id: "solutions", name: "Solutions", short: "Solutions" },
    { id: "electrochemistry", name: "Electrochemistry", short: "Electrochemistry" },
    { id: "chemical-kinetics", name: "Chemical Kinetics", short: "Kinetics" },
    { id: "d-f-block", name: "d- and f-Block Elements", short: "d- and f-Block" },
    { id: "coordination-compounds", name: "Coordination Compounds", short: "Coordination" },
    { id: "haloalkanes-haloarenes", name: "Haloalkanes and Haloarenes", short: "Haloalkanes" },
    { id: "alcohols-phenols-ethers", name: "Alcohols, Phenols and Ethers", short: "Alcohols & Phenols" },
    { id: "aldehydes-ketones-acids", name: "Aldehydes, Ketones and Carboxylic Acids", short: "Carbonyl Compounds" },
    { id: "organic-compounds-nitrogen", name: "Organic Compounds containing Nitrogen", short: "Nitrogen Compounds" },
    { id: "biomolecules", name: "Biomolecules", short: "Biomolecules" }
  ];

  // These files must load before app.js.
  const facts = Array.isArray(window.REAGLET_FACTS)
    ? window.REAGLET_FACTS
    : [];

  const questions = Array.isArray(window.REAGLET_QUESTIONS)
    ? window.REAGLET_QUESTIONS
    : [];

  // -----------------------------------------------------
  // APPLICATION STATE
  // -----------------------------------------------------

  const state = {
    mode: "facts",
    chapter: "all",

    factQueue: [],
    factPosition: 0,
    lastFactId: null,
    currentFact: null,
    revealed: false,

    questionQueue: [],
    questionPosition: 0,
    lastQuestionId: null,
    currentQuestion: null,

    answered: false,
    selectedIndex: null,
    selectedAnswers: new Set(),
    numericInput: null,

    totalSeen: 0
  };

  // -----------------------------------------------------
  // HTML ELEMENT REFERENCES
  // -----------------------------------------------------

  const elements = {
    root: document.documentElement,

    chapterNav: document.getElementById("chapter-nav"),
    mobileChapterSelect: document.getElementById("mobile-chapter-select"),
    desktopChapterName: document.getElementById("desktop-chapter-name"),

    themeToggle: document.getElementById("theme-toggle"),

    factsTab: document.getElementById("facts-tab"),
    questionsTab: document.getElementById("questions-tab"),

    deckKicker: document.getElementById("deck-kicker"),
    deckTitle: document.getElementById("deck-title"),

    cardCount: document.getElementById("card-count"),
    deckTotal: document.getElementById("deck-total"),

    factCard: document.getElementById("fact-card"),
    factTag: document.getElementById("fact-tag"),
    factText: document.getElementById("fact-text"),
    factExplanation: document.getElementById("fact-explanation"),
    factConnection: document.getElementById("fact-connection"),

    questionCard: document.getElementById("question-card"),
    questionTag: document.getElementById("question-tag"),
    questionMarks: document.getElementById("question-marks"),
    questionTopic: document.getElementById("question-topic"),
    questionText: document.getElementById("question-text"),

    answerOptions: document.getElementById("answer-options"),
    answerFeedback: document.getElementById("answer-feedback"),
    feedbackTitle: document.getElementById("feedback-title"),
    feedbackExplanation: document.getElementById("feedback-explanation"),

    solutionSteps: document.getElementById("solution-steps"),

    interactionHint: document.getElementById("interaction-hint"),

    nextButton: document.getElementById("next-button"),
    nextButtonLabel: document.getElementById("next-button-label"),
    shuffleButton: document.getElementById("shuffle-button")
  };

  // Create solution container automatically if it is absent in HTML.
  if (!elements.solutionSteps && elements.answerFeedback) {
    elements.solutionSteps = document.createElement("div");
    elements.solutionSteps.id = "solution-steps";
    elements.solutionSteps.className = "solution-steps";

    elements.answerFeedback.append(elements.solutionSteps);
  }

  // -----------------------------------------------------
  // CHAPTER UTILITIES
  // -----------------------------------------------------

  function getChapterName(chapterId) {
    if (chapterId === "all") {
      return "All chapters";
    }

    return chapters.find(
      chapter => chapter.id === chapterId
    )?.name ?? "All chapters";
  }

  function getActiveDeck(collection) {
    if (state.chapter === "all") {
      return collection;
    }

    return collection.filter(
      item => item.chapter === state.chapter
    );
  }

  // -----------------------------------------------------
  // RANDOMISATION
  // -----------------------------------------------------

  function shuffled(items, previousId) {
    const result = [...items];

    // Fisher-Yates shuffle.
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [result[i], result[j]] = [
        result[j],
        result[i]
      ];
    }

    // Avoid immediately repeating the previous card.
    if (
      result.length > 1 &&
      result[0].id === previousId
    ) {
      [result[0], result[1]] = [
        result[1],
        result[0]
      ];
    }

    return result;
  }

  function setCounter(position, total) {
    elements.cardCount.textContent =
      String(Math.min(position, total)).padStart(2, "0");

    elements.deckTotal.textContent =
      String(total).padStart(2, "0");
  }

  // -----------------------------------------------------
  // CHAPTER NAVIGATION
  // -----------------------------------------------------

  function renderChapterNavigation() {
    elements.chapterNav.replaceChildren();
    elements.mobileChapterSelect.replaceChildren();

    // All chapters button.
    const allButton = document.createElement("button");

    allButton.type = "button";
    allButton.className = "chapter-button all-chapters";
    allButton.dataset.chapter = "all";

    const allNumber = document.createElement("span");
    allNumber.className = "chapter-number";
    allNumber.setAttribute("aria-hidden", "true");
    allNumber.textContent = "✳";

    const allText = document.createElement("span");
    allText.textContent = "All chapters";

    allButton.append(allNumber, allText);
    elements.chapterNav.append(allButton);

    // Individual chapter buttons.
    chapters.forEach((chapter, index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "chapter-button";
      button.dataset.chapter = chapter.id;

      const number = document.createElement("span");
      number.className = "chapter-number";
      number.setAttribute("aria-hidden", "true");

      number.textContent =
        String(index + 1).padStart(2, "0");

      const name = document.createElement("span");
      name.textContent = chapter.name;

      button.append(number, name);
      elements.chapterNav.append(button);
    });

    // Mobile chapter selector.
    const allOption = document.createElement("option");

    allOption.value = "all";
    allOption.textContent = "All chapters";

    elements.mobileChapterSelect.append(allOption);

    chapters.forEach(chapter => {
      const option = document.createElement("option");

      option.value = chapter.id;
      option.textContent = chapter.short;

      elements.mobileChapterSelect.append(option);
    });

    updateChapterSelection();
  }

  function updateChapterSelection() {
    elements.chapterNav
      .querySelectorAll("[data-chapter]")
      .forEach(button => {

        const isActive =
          button.dataset.chapter === state.chapter;

        button.classList.toggle("is-active", isActive);

        if (isActive) {
          button.setAttribute("aria-current", "true");
        } else {
          button.removeAttribute("aria-current");
        }
      });

    elements.mobileChapterSelect.value = state.chapter;

    elements.desktopChapterName.textContent =
      getChapterName(state.chapter);
  }

  // -----------------------------------------------------
  // STUDY MODE
  // -----------------------------------------------------

  function renderModeSelection() {
    const factsActive = state.mode === "facts";

    elements.factsTab.classList.toggle(
      "is-active",
      factsActive
    );

    elements.questionsTab.classList.toggle(
      "is-active",
      !factsActive
    );

    elements.factsTab.setAttribute(
      "aria-selected",
      String(factsActive)
    );

    elements.questionsTab.setAttribute(
      "aria-selected",
      String(!factsActive)
    );

    elements.factCard.hidden = !factsActive;
    elements.questionCard.hidden = factsActive;

    elements.deckKicker.textContent =
      factsActive ? "FACT DECK" : "QUESTION PRACTICE";

    elements.deckTitle.textContent =
      factsActive ? "A fact to keep" : "Try this one";

    elements.nextButtonLabel.textContent =
      factsActive ? "Next fact" : "Next question";

    elements.interactionHint.textContent =
      factsActive
        ? "Tap the card to see why."
        : "Choose an answer to check your understanding.";
  }

  function getScopeLabel(scope) {
    if (scope === "JEE Bridge") {
      return "JEE BRIDGE";
    }

    if (scope === "ISC + JEE") {
      return "ISC + JEE";
    }

    return "ISC";
  }

  // -----------------------------------------------------
  // FACT CARDS
  // -----------------------------------------------------

  function updateFactCard() {
    const fact = state.currentFact;

    if (!fact) {
      elements.factTag.textContent = "NO FACTS YET";

      elements.factText.textContent =
        "There are no facts in this chapter yet.";

      elements.factExplanation.textContent =
        "Add facts to facts.js and they will appear here.";

      elements.factConnection.textContent = "";

      elements.factCard.classList.remove("is-flipped");
      elements.factCard.disabled = true;

      elements.deckKicker.textContent = "FACT DECK";

      return;
    }

    elements.factCard.disabled = false;

    const scopePrefix = fact.scope
      ? `${getScopeLabel(fact.scope)} · `
      : "";

    elements.factTag.textContent =
      `${scopePrefix}${fact.tag || "CHEMISTRY FACT"}`;

    elements.factText.textContent = fact.fact;

    elements.factExplanation.textContent =
      fact.explanation;

    elements.factConnection.textContent =
      fact.connection ||
      "Connect this idea to another topic in your notes.";

    elements.factCard
      .querySelectorAll(".card-index")
      .forEach(node => {
        node.textContent = `REAGLET / ${fact.id}`;
      });

    elements.factCard.classList.toggle(
      "is-flipped",
      state.revealed
    );

    elements.factCard.setAttribute(
      "aria-label",
      state.revealed
        ? "Hide explanation"
        : "Reveal explanation"
    );

    elements.deckKicker.textContent = fact.chapter
      ? getChapterName(fact.chapter).toUpperCase()
      : "FACT DECK";
  }

  function loadNextFact(reset = false) {
    const deck = getActiveDeck(facts);

    if (deck.length === 0) {
      state.currentFact = null;
      state.revealed = false;

      updateFactCard();
      setCounter(0, 0);

      return;
    }

    if (
      reset ||
      state.factPosition >= state.factQueue.length
    ) {
      state.factQueue = shuffled(
        deck,
        state.lastFactId
      );

      state.factPosition = 0;
    }

    state.currentFact =
      state.factQueue[state.factPosition];

    state.factPosition += 1;

    state.lastFactId = state.currentFact.id;
    state.revealed = false;
    state.totalSeen += 1;

    updateFactCard();

    setCounter(
      state.factPosition,
      deck.length
    );
  }

  // -----------------------------------------------------
  // QUESTION TYPE DETECTION
  // -----------------------------------------------------

  function getQuestionType(question) {
    const type = question.type || "single";

    if (
      type === "multi" ||
      type === "multiple" ||
      type === "multiple-correct"
    ) {
      return "multi";
    }

    if (
      type === "numeric" ||
      type === "numerical"
    ) {
      return "numeric";
    }

    return "single";
  }

  // -----------------------------------------------------
  // QUESTION FEEDBACK RESET
  // -----------------------------------------------------

  function clearQuestionFeedback() {
    elements.answerFeedback.hidden = true;

    elements.feedbackTitle.textContent = "";

    elements.feedbackTitle.classList.remove(
      "is-wrong"
    );

    elements.feedbackExplanation.textContent = "";

    if (elements.solutionSteps) {
      elements.solutionSteps.replaceChildren();
    }
  }

  // -----------------------------------------------------
  // QUESTION OPTION CREATION
  // -----------------------------------------------------

  function createOptionButton(optionText, index, type) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "answer-option";
    button.dataset.answer = String(index);

    const letter = document.createElement("span");

    letter.className = "option-letter";

    letter.textContent =
      String.fromCharCode(65 + index);

    const text = document.createElement("span");
    text.textContent = optionText;

    button.append(letter, text);

    if (type === "multi") {
      button.setAttribute("aria-pressed", "false");

      button.addEventListener("click", () => {
        toggleMultiAnswer(index, button);
      });
    } else {
      button.addEventListener("click", () => {
        chooseAnswer(index);
      });
    }

    return button;
  }

  // -----------------------------------------------------
  // NUMERICAL QUESTION INTERFACE
  // -----------------------------------------------------

  function renderNumericAnswer(question) {
    const wrapper = document.createElement("div");

    wrapper.className = "numeric-answer-wrap";

    const label = document.createElement("label");

    label.className = "numeric-answer-label";

    label.textContent = question.unit
      ? `YOUR ANSWER (${question.unit})`
      : "YOUR NUMERICAL ANSWER";

    const inputRow = document.createElement("div");

    inputRow.className = "numeric-input-row";

    const input = document.createElement("input");

    input.type = "text";
    input.inputMode = "decimal";
    input.autocomplete = "off";
    input.spellcheck = false;

    input.placeholder = "Enter your answer";

    input.className = "numeric-answer-input";

    input.setAttribute(
      "aria-label",
      question.unit
        ? `Answer in ${question.unit}`
        : "Numerical answer"
    );

    label.htmlFor = "numeric-question-answer";
    input.id = "numeric-question-answer";

    input.addEventListener("input", () => {
      input.removeAttribute("aria-invalid");
    });

    input.addEventListener("keydown", event => {
      if (event.key === "Enter") {
        submitNumericAnswer();
      }
    });

    inputRow.append(input);

    if (question.unit) {
      const unit = document.createElement("span");

      unit.className = "numeric-unit";
      unit.textContent = question.unit;

      inputRow.append(unit);
    }

    wrapper.append(label, inputRow);

    elements.answerOptions.append(wrapper);

    state.numericInput = input;

    const submit = document.createElement("button");

    submit.type = "button";
    submit.className = "answer-submit";
    submit.textContent = "Check answer";

    submit.addEventListener(
      "click",
      submitNumericAnswer
    );

    elements.answerOptions.append(submit);
  }

  // -----------------------------------------------------
  // RENDER QUESTION OPTIONS
  // -----------------------------------------------------

  function renderQuestionOptions(question) {
    elements.answerOptions.replaceChildren();

    state.selectedAnswers = new Set();
    state.selectedIndex = null;
    state.numericInput = null;

    const type = getQuestionType(question);

    if (type === "numeric") {
      renderNumericAnswer(question);
      return;
    }

    const options = Array.isArray(question.options)
      ? question.options
      : [];

    options.forEach((optionText, index) => {
      const button = createOptionButton(
        optionText,
        index,
        type
      );

      elements.answerOptions.append(button);
    });

    if (type === "multi") {
      const submit = document.createElement("button");

      submit.type = "button";
      submit.className = "answer-submit";

      submit.textContent = "Check answers";
      submit.disabled = true;

      submit.addEventListener(
        "click",
        submitMultiAnswer
      );

      elements.answerOptions.append(submit);
    }
  }

  // -----------------------------------------------------
  // UPDATE QUESTION CARD
  // -----------------------------------------------------

  function updateQuestionCard() {
    const question = state.currentQuestion;

    if (!question) {
      elements.questionTag.textContent =
        "NO QUESTIONS YET";

      elements.questionTopic.textContent = "";

      elements.questionText.textContent =
        "There are no questions in this chapter yet.";

      elements.questionMarks.textContent = "";

      elements.answerOptions.replaceChildren();

      clearQuestionFeedback();

      elements.deckKicker.textContent =
        "QUESTION PRACTICE";

      elements.interactionHint.textContent =
        "Choose another chapter to find questions.";

      return;
    }

    const type = getQuestionType(question);

    const typeLabel =
      type === "multi"
        ? "MULTIPLE CORRECT"
        : type === "numeric"
          ? "NUMERICAL"
          : "SINGLE CORRECT";

    const scopeLabel = question.scope
      ? ` · ${getScopeLabel(question.scope)}`
      : "";

    elements.questionTag.textContent =
      `${typeLabel}${scopeLabel}`;

    const marks = Number(question.marks ?? 1);

    elements.questionMarks.textContent =
      `${marks} ${marks === 1 ? "MARK" : "MARKS"}`;

    elements.questionTopic.textContent =
      question.topic || "CHEMISTRY";

    elements.questionText.textContent =
      question.prompt || "Question text unavailable.";

    clearQuestionFeedback();

    renderQuestionOptions(question);

    elements.deckKicker.textContent =
      question.chapter
        ? getChapterName(question.chapter).toUpperCase()
        : "QUESTION PRACTICE";

    elements.interactionHint.textContent =
      type === "multi"
        ? "Select every correct option, then check your answers."
        : type === "numeric"
          ? "Enter your numerical answer and check it."
          : "Choose an answer to check your understanding.";
  }

  // -----------------------------------------------------
  // LOAD NEXT QUESTION
  // -----------------------------------------------------

  function loadNextQuestion(reset = false) {
    const deck = getActiveDeck(questions);

    if (deck.length === 0) {
      state.currentQuestion = null;
      state.answered = false;

      state.selectedIndex = null;
      state.selectedAnswers = new Set();
      state.numericInput = null;

      updateQuestionCard();
      setCounter(0, 0);

      return;
    }

    if (
      reset ||
      state.questionPosition >= state.questionQueue.length
    ) {
      state.questionQueue = shuffled(
        deck,
        state.lastQuestionId
      );

      state.questionPosition = 0;
    }

    state.currentQuestion =
      state.questionQueue[state.questionPosition];

    state.questionPosition += 1;

    state.lastQuestionId =
      state.currentQuestion.id;

    state.answered = false;
    state.selectedIndex = null;

    state.selectedAnswers = new Set();
    state.numericInput = null;

    state.totalSeen += 1;

    updateQuestionCard();

    setCounter(
      state.questionPosition,
      deck.length
    );
  }

  // -----------------------------------------------------
  // STEP-BY-STEP SOLUTION RENDERING
  // -----------------------------------------------------

  function renderSolutionSteps(question) {
    if (!elements.solutionSteps) return;

    elements.solutionSteps.replaceChildren();

    if (
      !Array.isArray(question.solutionSteps) ||
      question.solutionSteps.length === 0
    ) {
      return;
    }

    const heading = document.createElement("p");

    heading.className = "solution-heading";
    heading.textContent = "STEP-BY-STEP SOLUTION";

    const list = document.createElement("ol");

    list.className = "solution-list";

    question.solutionSteps.forEach(step => {
      const item = document.createElement("li");

      item.textContent = step;

      list.append(item);
    });

    elements.solutionSteps.append(
      heading,
      list
    );
  }

  // -----------------------------------------------------
  // MARK CORRECT AND INCORRECT OPTIONS
  // -----------------------------------------------------

  function markChoiceOptions(
    question,
    selectedIndex = null
  ) {
    const type = getQuestionType(question);

    const buttons =
      elements.answerOptions.querySelectorAll(
        ".answer-option"
      );

    const correctIndices =
      type === "multi"
        ? (
            Array.isArray(question.answerIndices)
              ? question.answerIndices
              : []
          )
        : [question.answerIndex];

    buttons.forEach(button => {
      const index = Number(button.dataset.answer);

      const isCorrect =
        correctIndices.includes(index);

      const isSelected =
        type === "multi"
          ? state.selectedAnswers.has(index)
          : index === selectedIndex;

      button.disabled = true;

      if (isCorrect) {
        button.classList.add("is-correct");
      } else if (isSelected) {
        button.classList.add("is-wrong");
      }
    });
  }

  // -----------------------------------------------------
  // COMMON ANSWER EVALUATION
  // -----------------------------------------------------

  function evaluateQuestion(isCorrect) {
    if (state.answered || !state.currentQuestion) {
      return;
    }

    const question = state.currentQuestion;
    const type = getQuestionType(question);

    state.answered = true;

    const submitButton =
      elements.answerOptions.querySelector(
        ".answer-submit"
      );

    if (submitButton) {
      submitButton.disabled = true;
    }

    if (type === "single" || type === "multi") {
      markChoiceOptions(
        question,
        state.selectedIndex
      );
    }

    if (
      type === "numeric" &&
      state.numericInput
    ) {
      state.numericInput.disabled = true;

      state.numericInput.classList.add(
        isCorrect ? "is-correct" : "is-wrong"
      );
    }

    // Feedback heading.

    if (type === "multi") {
      const letters = (
        question.answerIndices || []
      )
        .map(index =>
          String.fromCharCode(65 + index)
        )
        .join(", ");

      elements.feedbackTitle.textContent =
        isCorrect
          ? "All correct options — nicely done!"
          : `Not quite. Correct options: ${letters}.`;
    }

    else if (type === "numeric") {
      const correctAnswer =
        question.answerDisplay ??
        question.numericAnswer;

      elements.feedbackTitle.textContent =
        isCorrect
          ? "Correct — nicely done!"
          : `Not quite. Correct answer: ${correctAnswer}${question.unit ? ` ${question.unit}` : ""}.`;
    }

    else {
      const correctLetter =
        String.fromCharCode(
          65 + question.answerIndex
        );

      elements.feedbackTitle.textContent =
        isCorrect
          ? "Correct — nicely done."
          : `Not quite. Correct answer: ${correctLetter}.`;
    }

    elements.feedbackTitle.classList.toggle(
      "is-wrong",
      !isCorrect
    );

    elements.feedbackExplanation.textContent =
      question.explanation ||
      "Review the relevant concept in your notes.";

    renderSolutionSteps(question);

    elements.answerFeedback.hidden = false;

    elements.interactionHint.textContent =
      "Read the explanation, then continue.";
  }

  // -----------------------------------------------------
  // SINGLE-CORRECT QUESTION
  // -----------------------------------------------------

  function chooseAnswer(index) {
    if (state.answered || !state.currentQuestion) {
      return;
    }

    if (
      getQuestionType(state.currentQuestion) !== "single"
    ) {
      return;
    }

    state.selectedIndex = index;

    const isCorrect =
      index === state.currentQuestion.answerIndex;

    evaluateQuestion(isCorrect);
  }

  // -----------------------------------------------------
  // MULTIPLE-CORRECT QUESTION
  // -----------------------------------------------------

  function toggleMultiAnswer(index, button) {
    if (state.answered) return;

    if (state.selectedAnswers.has(index)) {
      state.selectedAnswers.delete(index);
    } else {
      state.selectedAnswers.add(index);
    }

    const selected =
      state.selectedAnswers.has(index);

    button.classList.toggle(
      "is-selected",
      selected
    );

    button.setAttribute(
      "aria-pressed",
      String(selected)
    );

    const submit =
      elements.answerOptions.querySelector(
        ".answer-submit"
      );

    if (submit) {
      submit.disabled =
        state.selectedAnswers.size === 0;
    }
  }

  function submitMultiAnswer() {
    if (state.answered || !state.currentQuestion) {
      return;
    }

    if (
      getQuestionType(state.currentQuestion) !== "multi"
    ) {
      return;
    }

    const expected = Array.isArray(
      state.currentQuestion.answerIndices
    )
      ? [
          ...new Set(
            state.currentQuestion.answerIndices
          )
        ].sort((a, b) => a - b)
      : [];

    const selected = [
      ...state.selectedAnswers
    ].sort((a, b) => a - b);

    const isCorrect =
      expected.length > 0 &&
      expected.length === selected.length &&
      expected.every(
        (value, index) => value === selected[index]
      );

    evaluateQuestion(isCorrect);
  }

  // -----------------------------------------------------
  // NUMERICAL QUESTION
  // -----------------------------------------------------

  function submitNumericAnswer() {
    if (
      state.answered ||
      !state.currentQuestion ||
      !state.numericInput
    ) {
      return;
    }

    if (
      getQuestionType(state.currentQuestion) !== "numeric"
    ) {
      return;
    }

    const raw = state.numericInput.value.trim();

    if (!raw) {
      state.numericInput.setAttribute(
        "aria-invalid",
        "true"
      );

      state.numericInput.focus();

      return;
    }

    // Accept decimal comma as well as decimal point.
    const normalised = raw
      .replace(/\s/g, "")
      .replace(",", ".");

    const value = Number(normalised);

    const expected = Number(
      state.currentQuestion.numericAnswer
    );

    const tolerance = Number(
      state.currentQuestion.tolerance ?? 0.000001
    );

    if (
      !Number.isFinite(value) ||
      !Number.isFinite(expected) ||
      !Number.isFinite(tolerance) ||
      tolerance < 0
    ) {
      state.numericInput.setAttribute(
        "aria-invalid",
        "true"
      );

      state.numericInput.focus();

      return;
    }

    state.numericInput.removeAttribute(
      "aria-invalid"
    );

    const isCorrect =
      Math.abs(value - expected) <= tolerance;

    evaluateQuestion(isCorrect);
  }

  // -----------------------------------------------------
  // SWITCH STUDY MODE
  // -----------------------------------------------------

  function setMode(mode) {
    if (
      mode !== "facts" &&
      mode !== "questions"
    ) {
      return;
    }

    state.mode = mode;

    renderModeSelection();

    if (mode === "facts") {
      loadNextFact(true);
    } else {
      loadNextQuestion(true);
    }
  }

  // -----------------------------------------------------
  // CHANGE CHAPTER
  // -----------------------------------------------------

  function setChapter(chapterId) {
    if (
      chapterId !== "all" &&
      !chapters.some(
        chapter => chapter.id === chapterId
      )
    ) {
      return;
    }

    state.chapter = chapterId;

    state.factQueue = [];
    state.factPosition = 0;

    state.questionQueue = [];
    state.questionPosition = 0;

    state.lastFactId = null;
    state.lastQuestionId = null;

    state.totalSeen = 0;

    updateChapterSelection();

    if (state.mode === "facts") {
      loadNextFact(true);
    } else {
      loadNextQuestion(true);
    }
  }

  // -----------------------------------------------------
  // SHUFFLE CURRENT DECK
  // -----------------------------------------------------

  function shuffleCurrentDeck() {
    if (state.mode === "facts") {
      loadNextFact(true);
    } else {
      loadNextQuestion(true);
    }
  }

  // -----------------------------------------------------
  // LIGHT / DARK THEME
  // -----------------------------------------------------

  function getSavedTheme() {
    try {
      const saved = localStorage.getItem(
        "reaglet-theme"
      );

      if (
        saved === "light" ||
        saved === "dark"
      ) {
        return saved;
      }
    } catch (error) {
      // Storage may be unavailable.
    }

    return (
      window.matchMedia &&
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
    )
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    elements.root.dataset.theme = theme;

    elements.themeToggle.setAttribute(
      "aria-label",
      theme === "dark"
        ? "Switch to light mode"
        : "Switch to dark mode"
    );

    const themeColor =
      theme === "dark"
        ? "#121a18"
        : "#f5f7f4";

    const themeMeta = document.querySelector(
      'meta[name="theme-color"]'
    );

    if (themeMeta) {
      themeMeta.setAttribute(
        "content",
        themeColor
      );
    }

    try {
      localStorage.setItem(
        "reaglet-theme",
        theme
      );
    } catch (error) {
      // Theme remains active for this visit.
    }
  }

  // -----------------------------------------------------
  // EVENT LISTENERS
  // -----------------------------------------------------

  elements.chapterNav.addEventListener(
    "click",
    event => {
      const button = event.target.closest(
        "[data-chapter]"
      );

      if (button) {
        setChapter(button.dataset.chapter);
      }
    }
  );

  elements.mobileChapterSelect.addEventListener(
    "change",
    event => {
      setChapter(event.target.value);
    }
  );

  elements.factsTab.addEventListener(
    "click",
    () => setMode("facts")
  );

  elements.questionsTab.addEventListener(
    "click",
    () => setMode("questions")
  );

  elements.factCard.addEventListener(
    "click",
    () => {
      if (!state.currentFact) return;

      state.revealed = !state.revealed;

      updateFactCard();
    }
  );

  elements.nextButton.addEventListener(
    "click",
    () => {
      if (state.mode === "facts") {
        loadNextFact();
      } else {
        loadNextQuestion();
      }
    }
  );

  elements.shuffleButton.addEventListener(
    "click",
    shuffleCurrentDeck
  );

  elements.themeToggle.addEventListener(
    "click",
    () => {
      applyTheme(
        elements.root.dataset.theme === "dark"
          ? "light"
          : "dark"
      );
    }
  );

  // -----------------------------------------------------
  // INITIALISE WEBSITE
  // -----------------------------------------------------

  function start() {
    renderChapterNavigation();

    applyTheme(getSavedTheme());

    renderModeSelection();

    loadNextFact(true);

    console.info(
      `Reaglet ready: ${facts.length} facts and ${questions.length} questions.`
    );
  }

  start();

})();