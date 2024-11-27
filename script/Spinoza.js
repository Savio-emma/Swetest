// const = document.querySelector('.');
// const = document.querySelector('.');
// const = document.querySelector('.');

let questions = [
    {
        numb: 1,
        question: "Where was Spinoza born?",
        answer: "A. Amsterdam",
        options: [
        "A. Amsterdam",
        "B. Paris",
        "C. Rome",
        "D. London"
        ]
    },
    {
        numb: 2,
        question: "What are the three degrees of knowledge according to Spinoza?",
        answer: "C. Level of senses, reason, and intuition",
        options: [
        "A. Level of senses, imagination, and reason",
        "B. Level of reason, intuition, and faith",
        "C. Level of senses, reason, and intuition",
        "D. Level of imagination, faith, and intuition"
        ]
    },
    {
        numb: 3,
        question: "What is inadequate knowledge according to Spinoza?",
        answer: "A. Knowledge from individual things in isolation",
        options: [
        "A. Knowledge from individual things in isolation",
        "B. Knowledge from sense perception and reason",
        "C. Knowledge from logical deductions",
        "D. Knowledge from intuition"
        ]
    },
    {
        numb: 4,
        question: "What is another characteristic of inadequate knowledge according to Spinoza?",
        answer: "B. Knowledge from only sense perception",
        options: [
        "A. Knowledge from reason and intuition",
        "B. Knowledge from only sense perception",
        "C. Knowledge from logical deductions",
        "D. Knowledge from imagination"
        ]
    },
    {
        numb: 5,
        question: "How is knowledge obtained in the second degree according to Spinoza?",
        answer: "C. Logical deductions",
        options: [
        "A. Sense perception",
        "B. Imagination",
        "C. Logical deductions",
        "D. Intuition"
        ]
    },    
    {
        numb: 6,
        question: "How are things seen in the third degree according to Spinoza?",
        answer: "A. Existing in God",
        options: [
        "A. Existing in God",
        "B. Existing in nature",
        "C. Existing in reason",
        "D. Existing in imagination"
        ]
    },    
    {
        numb: 7,
        question: "What is the main work of Spinoza?",
    answer: "B. Ethics",
    options: [
    "A. Politics",
    "B. Ethics",
    "C. Logic",
    "D. Metaphysics"
    ]
    },    
    {
        numb: 8,
        question: "What philosophy is similar to Spinoza's?",
        answer: "C. Stoicism",
        options: [
        "A. Epicureanism",
        "B. Aristotelianism",
        "C. Stoicism",
        "D. Platonism"
        ]
    },    
    {
        numb: 9,
        question: "What are the characteristics of Spinoza's philosophy?",
        answer: "A. Pantheistic and deterministic",
        options: [
        "A. Pantheistic and deterministic",
        "B. Theistic and indeterministic",
        "C. Atheistic and deterministic",
        "D. Deistic and indeterministic"
        ]
    },    
    {
        numb: 10,
        question: "How many substances does Spinoza believe exist?",
        answer: "A. One",
        options: [
        "A. One",
        "B. Two",
        "C. Three",
        "D. Multiple"
        ]
    },    
    {
        numb: 11,
        question: "What are the characteristics of Spinoza's one substance?",
        answer: "C. Infinite, eternal, and divine",
        options: [
        "A. Finite, temporal, and material",
        "B. Infinite, temporal, and material",
        "C. Infinite, eternal, and divine",
        "D. Finite, eternal, and divine"
        ]
    },    
    {
        numb: 12,
        question: "How do things proceed from Spinoza's one substance?",
        answer: "A. Necessity",
        options: [
        "A. Necessity",
        "B. Chance",
        "C. Free will",
        "D. Randomness"
        ]
    },    
    {
        numb: 13,
        question: "What is Spinoza's concept of God?",
        answer: "A. Natura Naturans",
        options: [
        "A. Natura Naturans",
        "B. Natura Naturata",
        "C. Deus sive Natura",
        "D. Ens Perfectissimum"
        ]
    },    
    {
        numb: 14,
        question: "What are finite beings according to Spinoza?",
        answer: "C. Modifications of God",
        options: [
        "A. Separate entities",
        "B. Independent substances",
        "C. Modifications of God",
        "D. Created beings"
        ]
    },    
    {
        numb: 15,
        question: "How many attributes does Spinoza's infinite substance have?",
        answer: "A. Infinite",
        options: [
        "A. Infinite",
        "B. Finite",
        "C. Limited",
        "D. Countless but not infinite"
        ]
    },    
    {
        numb: 16,
        question: "Which two attributes of Spinoza's infinite substance are known to us?",
        answer: "C. Thought and extension",
        options: [
        "A. Reason and imagination",
        "B. Sense and intuition",
        "C. Thought and extension",
        "D. Logic and emotion"
        ]
    },    
    {
        numb: 17,
        question: "How does Spinoza's God or nature present itself?",
        answer: "C. Spirit and matter",
        options: [
        "A. Reason and faith",
        "B. Logic and intuition",
        "C. Spirit and matter",
        "D. Emotion and imagination"
        ]
    },    
    {
        numb: 18,
        question: "What is the purpose of nature according to Spinoza?",
        answer: "D. Human invention",
        options: [
        "A. Divine providence",
        "B. Natural necessity",
        "C. Human reason",
        "D. Human invention"
        ]
    },    
    {
        numb: 19,
        question: "What is the belief in freedom according to Spinoza?",
        answer: "D. Profession of ignorance",
        options: [
        "A. Expression of will",
        "B. Assertion of power",
        "C. Declaration of independence",
        "D. Profession of ignorance"
        ]
    },    
    {
        numb: 20,
        question: "Why do men claim to be free according to Spinoza?",
        answer: "A. Ignorance of causes",
        options: [
        "A. Ignorance of causes",
        "B. Knowledge of effects",
        "C. Desire for power",
        "D. Assertion of will"
        ]
    },    
    {
        numb: 21,
        question: "What determines good or bad according to Spinoza?",
        answer: "C. Satisfaction or frustration of desires",
        options: [
        "A. Reason and logic",
        "B. Faith and intuition",
        "C. Satisfaction or frustration of desires",
        "D. Social and cultural norms"
        ]
    },    
    {
        numb: 22,
        question: "What influences our judgment of good and bad according to Spinoza?",
        answer: "B. Emotion",
        options: [
        "A. Reason",
        "B. Emotion",
        "C. Logic",
        "D. Social norms"
        ]
    },    
    {
        numb: 23,
        question: "What determines our emotions according to Spinoza?",
        answer: "A. Natural laws",
        options: [
        "A. Natural laws",
        "B. Human choices",
        "C. Divine providence",
        "D. Random chance"
        ]
    },    
    {
        numb: 24,
        question: "What determines moral judgments according to Spinoza?",
        answer: "C. Natural causes",
        options: [
        "A. Reason and logic",
        "B. Faith and intuition",
        "C. Natural causes",
        "D. Social and cultural norms"
        ]
    },    
    {
        numb: 25,
        question: "What are the two types of emotions according to Spinoza?",
        answer: "C. Active and passive",
        options: [
        "A. Reasonable and unreasonable",
        "B. Logical and illogical",
        "C. Active and passive",
        "D. Positive and negative"
        ]
    },    
    {
        numb: 26,
        question: "From what do active emotions derive according to Spinoza?",
        answer: "A. Mind or adequate ideas",
        options: [
        "A. Mind or adequate ideas",
        "B. Body or sense perception",
        "C. Reason or logic",
        "D. Imagination or intuition"
        ]
    },    
    {
        numb: 27,
        question: "What are passive emotions according to Spinoza?",
        answer: "B. Confused or inadequate ideas",
        options: [
        "A. Clear and distinct ideas",
        "B. Confused or inadequate ideas",
        "C. Reasonable and logical thoughts",
        "D. Positive and constructive emotions"
        ]
    },    
    {
        numb: 28,
        question: "What is the life of virtue according to Spinoza?",
        answer: "C. Life lived according to reason",
        options: [
        "A. Life lived according to faith",
        "B. Life lived according to passion",
        "C. Life lived according to reason",
        "D. Life lived according to social norms"
        ]
    },    
    {
        numb: 29,
        question: "How does Spinoza view virtue?",
        answer: "A. In terms of knowledge",
        options: [
        "A. In terms of knowledge",
        "B. In terms of power",
        "C. In terms of morality",
        "D. In terms of social status"
        ]
    },    
    {
        numb: 30,
        question: "What is the highest knowledge and virtue according to Spinoza?",
        answer: "C. Knowledge of God",
        options: [
        "A. Knowledge of self",
        "B. Knowledge of nature",
        "C. Knowledge of God",
        "D. Knowledge of humanity"
        ]
    },    
    {
        numb: 31,
        question: "How do we see things under the species of eternity according to Spinoza?",
        answer: "B. As modifications of God",
        options: [
        "A. As separate entities",
        "B. As modifications of God",
        "C. As independent substances",
        "D. As temporal beings"
        ]
    },    
    {
        numb: 32,
        question: "Why do we see things as evil according to Spinoza?",
        answer: "A. Inadequate knowledge",
        options: [
        "A. Inadequate knowledge",
        "B. Reason and logic",
        "C. Faith and intuition",
        "D. Social and cultural norms"
        ]
    },    
    {
        numb: 33,
        question: "What is the purpose of civil society according to Spinoza?",
        answer: "C. Secure condition for pursuit of interests",
        options: [
        "A. Protection of individual rights",
        "B. Promotion of common good",
        "C. Secure condition for pursuit of interests",
        "D. Enforcement of moral laws"
        ]
    },    
    {
        numb: 34,
        question: "What is natural law according to Spinoza?",
        answer: "B. Law of necessity",
        options: [
        "A. Law of reason",
        "B. Law of necessity",
        "C. Law of nature",
        "D. Law of divine command"
        ]
    },    
    {
        numb: 35,
        question: "What is natural right according to Spinoza?",
        answer: "C. Natural power",
        options: [
        "A. Moral obligation",
        "B. Legal entitlement",
        "C. Natural power",
        "D. Divine authority"
        ]
    },    
    {
        numb: 36,
        question: "What is the best form of government according to Spinoza?",
        answer: "C. Founded on reason",
        options: [
        "A. Absolute monarchy",
        "B. Theocratic regime",
        "C. Founded on reason",
        "D. Democratic anarchy"
        ]
    },    
    {
        numb: 37,
        question: "What is the most rational form of government according to Spinoza?",
        answer: "A. Democracy",
        options: [
        "A. Democracy",
        "B. Aristocracy",
        "C. Oligarchy",
        "D. Monarchy"
        ]
    },    
    {
        numb: 38,
        question: "What does Spinoza defend?",
        answer: "C. Libertas philosophandi",
        options: [
        "A. Libertas religiosa",
        "B. Libertas politica",
        "C. Libertas philosophandi",
        "D. Libertas economica"
        ]
    },    

    ]
     
