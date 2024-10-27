// const = document.querySelector('.');
// const = document.querySelector('.');
// const = document.querySelector('.');

let questions = [
    {
        numb: 1,
        question: "The development of science and the scientific method during the Renaissance was accompanied and aided by:",
        answer: "C. The development of mathematics",
        options: [
        "A. The rise of ancient Greek philosophy",
        "B. The emergence of new scientific instruments",
        "C. The development of mathematics",
        "D. The decline of religious influence"
        ]
    },
    {
        numb: 2,
        question: "Which of the following figures contributed significantly to the development of modern science during the Renaissance?",
        answer: "D. Nicholas Copernicus, John Kepler, Leonardo da Vinci, and Galileo Galilei",
        options: [
        "A. Francis Bacon, Thomas Hobbes, and Jean-Jacques Rousseau",
        "B. Plato, Aristotle, and Epicurus",
        "C. René Descartes, John Locke, and David Hume",
        "D. Nicholas Copernicus, John Kepler, Leonardo da Vinci, and Galileo Galilei"
]
    },
    {
        numb: 3,
        question: "The two philosophical traditions that emerged in post-Renaissance modern philosophy are:",
        answer: "C. Continental Rationalism and British Empiricism",
        options: [
        "A. Existentialism and Phenomenology",
        "B. Idealism and Realism",
        "C. Continental Rationalism and British Empiricism",
        "D. Pragmatism and Logical Positivism"
        ]
    },
    {
        numb: 4,
        question: "The Continental rationalists adopted which method in their philosophical inquiry?",
        answer: "D. Mathematical method",
        options: [
        "A. Historical analysis",
        "B. Empirico-scientific method",
        "C. Linguistic analysis",
        "D. Mathematical method"
        ]
    },
    {
        numb: 5,
        question: "What was the primary belief of the Continental rationalists regarding the attainment of truth?",
        answer: "B. Reason alone can attain truth without the aid of the senses",
        options: [
        "A. Truth is relative and subjective",
        "B. Reason alone can attain truth without the aid of the senses",
        "C. Truth can only be attained through sense perception",
        "D. Truth requires both reason and sense perception"
        ]
    },    
    {
        numb: 6,
        question: "Galileo Galilei's expertise aside from science was in:",
        answer: "D. Mathematics",
        options: [
        "A. Literature",
        "B. Theology",
        "C. Philosophy",
        "D. Mathematics"
        ]
    },    
    {
        numb: 7,
        question: "Which philosophers comprised the Continental rationalists?",
        answer: "D. Descartes, Spinoza, and Leibniz",
        options: [
        "A. Locke, Berkeley, and Hume",
        "B. Kant, Hegel, and Fichte",
        "C. Plato, Aristotle, and Euclid",
        "D. Descartes, Spinoza, and Leibniz"
        ]
    },    
    {
        numb: 8,
        question: "Which philosophers comprised the British empiricist?",
        answer: "A. Locke, Berkeley, and Hume",
        options: [
        "A. Locke, Berkeley, and Hume",
        "B. Kant, Hegel, and Fichte",
        "C. Plato, Aristotle, and Euclid",
        "D. Descartes, Spinoza, and Leibniz"
        ]
    },    
    {
        numb: 9,
        question: "How did the Continental rationalists view the senses?",
        answer: "D. Unreliable and deceptive",
        options: [
        "A. Necessary for knowledge acquisition",
        "B. Reliable and objective",
        "C. Secondary to reason",
        "D. Unreliable and deceptive"
        ]
    },    
    {
        numb: 10,
        question: "What fundamental difference exists between Continental rationalists and British empiricists?",
        answer: "D. Role of reason versus sense perception",
        Options: [
        "A. Understanding of morality",
        "B. View of human nature",
        "C. Importance of mathematics",
        "D. Role of reason versus sense perception"
        ]
    },    
    {
        numb: 11,
        question: "Who influenced the British empiricists' emphasis on sense perception?",
        answer: "D. Francis Bacon",
        options: [
        "A. René Descartes",
        "B. David Hume",
        "C. John Locke",
        "D. Francis Bacon"
        ]
    },    
    {
        numb: 12,
        question: "What is the fundamental difference between Continental rationalists and British empiricists?",
        answer: "C. Rationalists emphasize reason, empiricists emphasize sense perception",
        options: [
        "A. Rationalists focus on mathematics, empiricists on science",
        "B. Rationalists prioritize morality, empiricists prioritize epistemology",
        "C. Rationalists emphasize reason, empiricists emphasize sense perception",
        "D. Rationalists value individualism, empiricists value collectivism"
        ]
    },    
    {
        numb: 13,
        question: "In post-renaissance modern philosophy, we find?",
        answer: "A. Continental rationalists and British empiricists",
        options: [
        "A. Continental rationalists and British empiricists",
        "B. Rationalists and empiricists",
        "C. Mathematicians and existencialists",
        "D. Scholastics and rationalists"
        ]

    },    
    {
        numb: 14,
        question: "Where was René Descartes born?",
        answer: "A. France",
        options: [
        "A. France",
        "B. Germany",
        "C. Italy",
        "D. Spain"
        ]
    },    
    {
        numb: 15,
        question: "What was Descartes' primary goal in philosophy?",
        answer: "C. To lay a new foundation with the mathematical method",
        options: [
        "A. To promote empiricism",
        "B. To revive Aristotelian logic",
        "C. To lay a new foundation with the mathematical method",
        "D. To emphasize sense perception"
        ]
    },    
    {
        numb: 16,
        question: "What did Descartes reject in Aristotle's philosophy?",
        answer: "C. Logic, for not leading to new knowledge",
        options: [
        "A. Metaphysics, for being unclear",
        "B. Ethics, for being relative",
        "C. Logic, for not leading to new knowledge",
        "D. Politics, for being impractical"
        ]
    },    
    {
        numb: 17,
        question: "What two operations did Descartes identify for acquiring truth?",
        answer: "D. Intuition and deduction",
        options: [
        "A. Induction and abduction",
        "B. Empathy and imagination",
        "C. Reasoning and experimentation",
        "D. Intuition and deduction"
        ]
    },    
    {
        numb: 18,
        question: "How did Descartes view the senses?",
        answer: "B. Deceptive and unreliable",
        options: [
        "A. Necessary for knowledge",
        "B. Deceptive and unreliable",
        "C. Secondary to reason",
        "D. Equivalent to reason"
        ]
    },    
    {
        numb: 19,
        question: "What was Descartes' primary means of acquiring knowledge?",
        answer: "A. Reason",
        options: [
        "A. Reason",
        "B. Sense perception",
        "C. Intuition",
        "D. Experience"
        ]
    },    
    {
        numb: 20,
        question: "Who influenced Descartes' philosophical approach?",
        answer: "C. Parmenides and Plato",
        options: [
        "A. Aristotle and Epicurus",
        "B. Kant and Hume",
        "C. Parmenides and Plato",
        "D. Bacon and Locke"
        ]
    },    
    {
        numb: 21,
        question: "What was Descartes' goal in writing 'Meditations'?",
        answer: "B. To establish a firm foundation for philosophy",
        options: [
        "A. To critique Aristotelian logic",
        "B. To establish a firm foundation for philosophy",
        "C. To promote empiricism",
        "D. To defend skepticism"
        ]
    },    
    {
        numb: 22,
        question: "How did Descartes' mathematical background influence his philosophy?",
        answer: "D. By emphasizing clarity and certainty",
        options: [
        "A. By promoting empirical methods",
        "B. By focusing on practical applications",
        "C. By developing logical systems",
        "D. By emphasizing clarity and certainty"
        ]
    },    
    {
        numb: 23,
        question: "What was Descartes' view on the role of intuition?",
        answer: "C. Basic operation for grasping truth",
        options: [
        "A. Secondary to deduction",
        "B. Equivalent to sense perception",
        "C. Basic operation for grasping truth",
        "D. Unreliable and deceptive"
        ]
    },    
    {
        numb: 24,
        question: "What philosophical tradition did Descartes follow?",
        answer: "C. Rationalism",
        options: [
        "A. Empiricism",
        "B. Skepticism",
        "C. Rationalism",
        "D. Existentialism"
        ]
    },    
    {
        numb: 25,
        question: "What did Descartes aim to achieve in reconstructing philosophy?",
        answer: "C. A new, firm foundation using mathematical method",
        options: [
        "A. Revival of Aristotelian thought",
        "B. Emphasis on empirical observation",
        "C. A new, firm foundation using mathematical method",
        "D. Promotion of philosophical skepticism"
        ]
    },    
    {
        numb: 26,
        question: "What did Descartes set aside in his philosophical reconstruction?",
        Answer: "D. Past philosophical confusions and uncertainties",
        aptions: [
        "A. Mathematical methods",
        "B. Empirical evidence",
        "C. Logical reasoning",
        "D. Past philosophical confusions and uncertainties"
        ]
    },    
    {
        numb: 27,
        question: "How does reason facilitate intuition, according to Descartes?",
        answer: "B. Through its illuminating light",
        options: [
        "A. By confirming sense perceptions",
        "B. Through its illuminating light",
        "C. By logical deduction",
        "D. Through empirical observation"
        ]
    },    
    {
        numb: 28,
        question: "What characterizes knowledge acquired through intuition, as per Descartes?",
        answer: "D. Error-free, clear and distinct apprehension",
        options: [
        "A. Probabilistic and uncertain",
        "B. Empirically verifiable",
        "C. Logically deduced",
        "D. Error-free, clear and distinct apprehension"
        ]
    },    

    {
        numb: 29,
        question: "What is the role of intuition in Descartes' philosophical inquiry?",
        answer: "C. Basic operation for grasping truth",
        options: [
        "A. Secondary to logical reasoning",
        "B. Equivalent to sense perception",
        "C. Basic operation for grasping truth",
        "D. Unreliable and deceptive"
        ]
    },    
    {
        numb: 30,
        question: "What method did Descartes employ to find certain truth?",
        answer: "B. Methodic doubt",
        options: [
        "A. Empirical observation",
        "B. Methodic doubt",
        "C. Logical deduction",
        "D. Historical analysis"
        ]
    },    
    {
        numb: 31,
        question: "What truth did Descartes discover through methodic doubt?",
        answer: "C. His own existence (I think, therefore I am)",
        options: [
        "A. The existence of God",
        "B. The reliability of senses",
        "C. His own existence (I think, therefore I am)",
        "D. Mathematical propositions"
        ]
    },    
    {
        numb: 32,
        question: "Why is 'I think, therefore I am' indubitable?",
        answer: "B. Doubting it confirms one's own thinking existence",
        options: [
        "A. Empirical evidence supports it",
        "B. Doubting it confirms one's own thinking existence",
        "C. Logical reasoning proves it",
        "D. Historical precedent establishes it"
        ]
    },    
    {
        numb: 33,
        question: "What does 'Cogito Ergo Sum' prove, according to Descartes?",
        answer: "C. Existence as a thinking being",
        options: [
        "A. Existence of a physical body",
        "B. Reliability of sensory perception",
        "C. Existence as a thinking being",
        "D. Truth of mathematical propositions"
        ]
    },    
    {
        numb: 34,
        question: "What remains uncertain after 'Cogito Ergo Sum'?",
        answer: "D. Existence of body and external world",
        options: [
        "A. Own thinking existence",
        "B. Mathematical propositions",
        "C. Sense perception reliability",
        "D. Existence of body and external world"
        ]
    },    
    {
        numb: 35,
        question: "Why can't Descartes conclude he has a body from 'Cogito Ergo Sum'?",
        answer: "D. Thinking doesn't require a physical body",
        options: [
        "A. Lack of empirical evidence",
        "B. Contradiction with Aristotelian thought",
        "C. Insufficient logical reasoning",
        "D. Thinking doesn't require a physical body"
        ]
    },    
    {
        numb: 36,
        question: "What must be proven beyond doubt for Descartes?",
        answer: "D. Existence of body and external world",
        options: [
        "A. Own thinking existence",
        "B. Mathematical propositions",
        "C. Sense perception reliability",
        "D. Existence of body and external world"
        ]
    },    
    {
        numb: 37,
        question: "What is the first principle of Descartes' philosophy?",
        answer: "C. 'I think, therefore I am' (Cogito Ergo Sum)",
        options: [
        "A. Aristotelian logic",
        "B. Empiricism",
        "C. 'I think, therefore I am' (Cogito Ergo Sum)",
        "D. Skepticism"
        ]
    },    
    {
        numb: 38,
        question: "How does Descartes address potential deception?",
        answer: "C. Existence remains certain despite deception",
        options: [
        "A. Denies possibility of deception",
        "B. Empirically verifies reality",
        "C. Existence remains certain despite deception",
        "D. Logically disproves evil spirit"
        ]
    },    
    {
        numb: 39,
        question: "What remains uncertain after establishing 'I think, therefore I am'?",
        answer: "D. Existence of external world",
        options: [
        "A. Own thinking existence",
        "B. Mathematical propositions",
        "C. Sense perception reliability",
        "D. Existence of external world"
        ]
    },    
    {
        numb: 40,
        question: "What is the criterion of certainty?",
        answer: "C. Clear and distinct perception",
        options: [
        "A. Empirical observation",
        "B. Logical deduction",
        "C. Clear and distinct perception",
        "D. Skeptical inquiry"
        ]
    },    
    {
        numb: 41,
        question: "What makes a proposition certain, according to Descartes?",
        answer: "C. Clear and distinct perception of its truth",
        options: [
        "A. Empirical evidence",
        "B. Logical reasoning",
        "C. Clear and distinct perception of its truth",
        "D. Historical analysis"
]
    },    
    {
        numb: 42,
        question: "How does Descartes address potential deception by God?",
        answer: "D. God cannot be a deceiver due to infinite perfection",
        options: [
        "A. Denies possibility of deception",
        "B. Empirically verifies reality",
        "C. Logically disproves evil spirit",
        "D. God cannot be a deceiver due to infinite perfection"
]
    },    
    {
        numb: 43,
        question: "What is the basis of Descartes' argument for God's existence?",
        answer: "C. The idea of an infinite being",
        options: [
        "A. Empirical observation",
        "B. Logical deduction",
        "C. The idea of an infinite being",
        "D. Skeptical inquiry"
        ]
    },    
    {
        numb: 44,
        question: "How did the idea of an infinite being come into Descartes' mind?",
        answer: "C. It must have come from an infinite being (God)",
        options: [
        "A. Originated from himself",
        "B. Came from empirical observation",
        "C. It must have come from an infinite being (God)",
        "D. Logical reasoning"
        ]
    },    
    {
        numb: 45,
        question: "What is the implication of having the idea of an infinite being?",
        answer: "C. An infinite being (God) must exist",
        options: [
        "A. No implication for God's existence",
        "B. Only finite beings exist",
        "C. An infinite being (God) must exist",
        "D. Uncertainty regarding God's existence"
        ]
    },    
    {
        numb: 46,
        question: "What is God's nature, according to Descartes?",
        answer: "B. Infinite, independent, all-knowing, all-powerful",
        options: [
        "A. Finite, dependent, limited knowledge",
        "B. Infinite, independent, all-knowing, all-powerful",
        "C. Material, imperfect",
        "D. Uncertain"
        ]
    },    
    {
        numb: 47,
        question: "How does Descartes prove God's existence using clear and distinct perception?",
        answer: "C. Existence is a perfection belonging to God's nature",
        options: [
        "A. Empirical observation",
        "B. Logical deduction",
        "C. Existence is a perfection belonging to God's nature",
        "D. Skeptical inquiry"
        ]
    },    
    {
        numb: 48,
        question: "How does Descartes explain interaction between mind and body?",
        answer: "C. Through the pineal gland and animal spirits",
        options: [
        "A. No interaction possible",
        "B. Direct interaction between spiritual and material substances",
        "C. Through the pineal gland and animal spirits",
        "D. Occasionalism (God's intervention)"
        ]
    },    
    {
        numb: 49,
        question: "What is Geulinex's occasionalism theory?",
        answer: "C. God moves the body on occasion of mental acts",
        options: [
        "A. Mind directly controls body",
        "B. No interaction between mind and body",
        "C. God moves the body on occasion of mental acts",
        "D. Uncertain interaction"
        ]
    },    
    {
        numb: 50,
        question: "What flaw is present in Descartes' procedure?",
        answer: "C. Vicious circle: using reason to prove God, and God to prove reason",
        options: [
        "A. Assumes empirical evidence",
        "B. Logical deductions are incorrect",
        "C. Vicious circle: using reason to prove God, and God to prove reason",
        "D. No flaw present"
        ]
    },    
    {
        numb: 51,
        question: "Why is Descartes' procedure considered flawed?",
        answer: "C. He uses unreliable reason to prove God's existence",
        options: [
        "A. He uses empirical evidence incorrectly",
        "B. Logical deductions are flawed",
        "C. He uses unreliable reason to prove God's existence",
        "D. No flaw in procedure"
        ]
    },    
    {
        numb: 52,
        question: "Why are time and space inseparable?",
        answer: "C. Because space is occupied by material substance and time measures motion of this substance",
        options: [
        "A. Because they are identical concepts",
        "B. Because space is a dimension of time",
        "C. Because space is occupied by material substance and time measures motion of this substance",
        "D. Because they are separate entities"
        ]
    },    
    {
        numb: 53,
        question: "What is space, according to Descartes?",
        answer: "C. Extension of material substance",
        options: [
        "A. A vacuum or empty area",
        "B. An absolute location",
        "C. Extension of material substance",
        "D. A separate entity from material substance"
        ]
    },    
    {
        numb: 54,
        question: "What is a place, according to Descartes?",
        answer: "C. Position of one thing in relation to another",
        options: [
        "A. Absolute location",
        "B. Physical boundaries",
        "C. Position of one thing in relation to another",
        "D. Geographical coordinates"
        ]
    },    
    {
        numb: 55,
        question: "Descartes considers time as ____",
        answer: "C. The measure of motion",
        options: [
        "A. The measure of change",
        "B. The measure of rest",
        "C. The measure of motion",
        "D. An absolute duration"
        ]
    },    
    {
        numb: 56,
        question: "The physical universe is governed by ____",
        answer: "C C. Rigid and unchanging laws of nature",
        options: [
        "A. Chance and randomness",
        "B. Human will and intention",
        "C. Rigid and unchanging laws of nature",
        "D. Divine intervention and providence"
        ]
    },    
    {
        numb: 57,
        question: "Animals and human bodies, according to Descartes, are ____",
        answer: "C. Automata",
        options: [
        "A. Living beings with free will",
        "B. Material substances with consciousness",
        "C. Automata",
        "D. Entities with spiritual essence"
        ]
    },    
    {
        numb: 58,
        question: "They (animals and human bodies) are like machines and their activities are ____",
        answer: "C. Automatic products of physical laws",
        options: [
        "A. Guided by spiritual forces",
        "B. Influenced by human will",
        "C. Automatic products of physical laws",
        "D. Determined by chance and randomness"
        ]
    },    

    ]
     
