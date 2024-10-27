// const = document.querySelector('.');
// const = document.querySelector('.');
// const = document.querySelector('.');

let questions = [
    {
        numb: 1,
        question: "For bacon, man can conquer nature and dominate it only through",
        answer: "C. Knowledge",
        options: [
            "A. Faith",
            "B. Technology",
            "C. Knowledge",
            "D. Intuition"
        ]
    },
    {
        numb: 2,
        question: "What is the whole purpose of science according to bacon",
        answer: "A. To increase man’s power over nature",
        options: [
            "A. To increase man’s power over nature",
            "B. To understand human nature",
            "C. To prove philosophical theories",
            "D. To study the universe",
        ]
    },
    {
        numb: 3,
        question: "Bacon's view of knowledge is",
        answer: "D. Empirical",
        options: [
            "A. Rationalistic",
            "B. Intuitive",
            "C. Dogmatic",
            "D. Empirical",
        ]
    },
    {
        numb: 4,
        question: "For Bacon, To be useful one must base on",
        answer: "B. Experience",
        options: [
            "A. Authority",
            "B. Experience",
            "C. Tradition",
            "D. Speculation"
        ]
    },
    {
        numb: 5,
        question: "Bacon considers Aristotelian logic as",
        answer: "A. Useless",
        options: [
            "A. Useless",
            "B. Useful for scientific inquiry",
            "C. Essential for critical thinking",
            "D. Necessary for philosophical understanding",
        ]
    },    
    {
        numb: 6,
        question: "For bacon Aristotelian logic can be used to",
        answer: "C. Confirm errors rather than establish truth",
        options: [
            "A. Establish universal truths",
            "B. Develop philosophical theories",
            "C. Confirm errors rather than establish truth",
            "D. Analyze empirical data",
        ]
    },    
    {
        numb: 7,
        question: "The Aristotelian syllogism does not start with",
        answer: "D. Observation of particular things",
        options: [
            "A. General principles",
            "B. Logical reasoning",
            "C. Empirical evidence",
            "D. Observation of particular things",
        ]
    },    
    {
        numb: 8,
        question: "To be able to understand and control nature, we must",
        answer: "A. Use the inductive method",
        options: [
            "A. Use the inductive method",
            "B. Use deductive reasoning",
            "C. Apply Aristotelian logic",
            "D. Rely on intuition",
        ]
    },    
    {
        numb: 9,
        question: "We must also in our use of induction guard against",
        answer: "B. Prejudices of preconceptions",
        options: [
            "A. Empirical evidence",
            "B. Prejudices of preconceptions",
            "C. Logical fallacies",
            "D. Scientific theories",
        ]
    },    
    {
        numb: 10,
        question: "Name the 4 kinds of idols according to Francis bacon",
        answer: "D. Tribe, Cave, Market, Theatre",
        options: [
            "A. Tribe, Cave, Market, State",
            "B. Nature, Reason, Experience, Authority",
            "C. Logic, Rhetoric, Empiricism, Dogmatism",
            "D. Tribe, Cave, Market, Theatre",
        ]
    },    
    {
        numb: 11,
        question: "The idols of tribe are",
        answer: "C. Certain tendencies in man which are obstacles to search for true knowledge",
        options: [
            "A. Errors due to language",
            "B. Errors of sensory perception",
            "C. Certain tendencies in man which are obstacles to search for true knowledge",
            "D. Philosophical dogmas",
        ]
    },    
    {
        numb: 12,
        question: "Examples of idols of tribe are;",
        answer: "A. Both C and B",
        options: [
            "A. Both C and B",
            "B. Taking things as they appear to the senses without further investigation",
            "C. Clinging to what we already believe without questioning",
            "D. Neither C nor B",
        ]
    },    
    {
        numb: 13,
        question: "The idols of cave are",
        answer: "B. Errors peculiar to each individual",
        options: [
            "A. Errors due to language",
            "B. Errors peculiar to each individual",
            "C. Philosophical dogmas",
            "D. Errors of sensory perception",
        ]
    },    
    {
        numb: 14,
        question: "The idols of market place are",
        answer: "D. Errors due to language",
        options: [
            "A. Errors due to social influences",
            "B. Errors of sensory perception",
            "C. Errors peculiar to each individual",
            "D. Errors due to language",
        ]
    },    
    {
        numb: 15,
        question: "Investigation shows that common notion expressed in language are",
        answer: "C. Inadequate/deficient",
        options: [
            "A. Accurate",
            "B. Ambiguous",
            "C. Inadequate/deficient",
            "D. Clear",
        ]
    },    
    {
        numb: 16,
        question: "The idols theatre are the",
        answer: "A. Speculative philosophical systems of the past",
        options: [
            "A. Speculative philosophical systems of the past",
            "B. Errors due to social influences",
            "C. Errors of sensory perception",
            "D. Philosophical dogmas",
        ]
    },    
    {
        numb: 17,
        question: "According to Bacon, 3 kinds of false philosophies are;",
        answer: "B. Sophistry, Empirical philosophy, Superstitious philosophy",
        options: [
            "A. Sophistry, Empirical philosophy, Dogmatic philosophy",
            "B. Sophistry, Empirical philosophy, Superstitious philosophy",
            "C. Dogmatic philosophy, Intuitive philosophy, Critical philosophy",
            "D. Critical philosophy, Analytical philosophy, Existential philosophy",
        ]
    },    
    {
        numb: 18,
        question: "The best kind of demonstration according to bacon is",
        answer: "D. Demonstration of experience",
        options: [
            "A. Logical proof",
            "B. Mathematical derivation",
            "C. Philosophical argument",
            "D. Demonstration of experience",
        ]
    },    
    {
        numb: 19,
        question: "The purpose of induction is to",
        answer: "C. Discover the form of things",
        options: [
            "A. Prove universal truths",
            "B. Develop philosophical theories",
            "C. Discover the form of things",
            "D. Analyze empirical data",
        ]
    },    
    {
        numb: 20,
        question: "To discover the form of things we have to proceed in 2 stages which are",
        answer: "A. Observation of facts, forming a working hypothesis",
        options: [
            "A. Observation of facts, forming a working hypothesis",
            "B. Experimentation, logical reasoning",
            "C. Induction, deduction",
            "D. Analysis, synthesis",
        ]
    },    
    {
        numb: 21,
        question: "The hypothesis must be tested by",
        answer: "B. Further experimentation and observation",
        options: [
            "A. Logical reasoning",
            "B. Further experimentation and observation",
            "C. Mathematical derivation",
            "D. Philosophical argument",
        ]
    },    
    {
        numb: 22,
        question: "We must make sure during the observation to note",
        answer: "D. What is present and when it is present, and what is absent and when it is absent",
        options: [
            "A. What is true and what is false",
            "B. What is relevant and what is irrelevant",
            "C. What is certain and what is uncertain",
            "D. What is present and when it is present, and what is absent and when it is absent",
        ]
    },    
    {
        numb: 23,
        question: "Bacon’s philosophy marked the beginning of",
        answer: "C. New scientific era",
        options: [
            "A. Ancient philosophy",
            "B. Medieval philosophy",
            "C. New scientific era",
            "D. Postmodern philosophy",
        ]
    },    
    {
        numb: 24,
        question: "Who is the father of modern philosophy",
        answer: "B. Francis Bacon",
        options: [
            "A. René Descartes",
            "B. Francis Bacon",
            "C. Plato",
            "D. Heidegger",
        ]
    },    

    ]
     
