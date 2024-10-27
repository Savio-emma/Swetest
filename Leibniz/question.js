// const = document.querySelector('.');
// const = document.querySelector('.');
// const = document.querySelector('.');

let questions = [
    {
        numb: 1,
        question: "Who is Leibniz?",
        answer: "A. Rationalist, mathematician, logician",
        options: [
        "A. Rationalist, mathematician, logician",
        "B. Empiricist, physicist, biologist",
        "C. Idealist, metaphysician, ethicist",
        "D. Skeptic, epistemologist, politician"
        ]
    },
    {
        numb: 2,
        question: "How for Leibniz do you define a term?",
        answer: "C. Reduce it into parts",
        options: [
        "A. Expand its meaning",
        "B. Analyze its context",
        "C. Reduce it into parts",
        "D. Synthesize its components"
        ]
    },
    {
        numb: 3,
        question: "What forms the basis of our thought?",
        answer: "B. Indefinable terms",
        options: [
        "A. Definable terms",
        "B. Indefinable terms",
        "C. Analytic propositions",
        "D. Synthetic propositions"
        ]
    },
    {
        numb: 4,
        question: "What is the universe like according to Leibniz?",
        answer: "D. Perfect, harmonious, orderly",
        options: [
        "A. Imperfect, chaotic, disorderly",
        "B. Finite, temporal, changing",
        "C. Infinite, eternal, unchanging",
        "D. Perfect, harmonious, orderly"
        ]
    },
    {
        numb: 5,
        question: "What kinds of truth does Leibniz identify?",
        answer: "C. Truth of fact and truth of reason",
        options: [
        "A. Analytic and synthetic truth",
        "B. Necessary and contingent truth",
        "C. Truth of fact and truth of reason",
        "D. Empirical and rational truth"
        ]
    },    
    {
        numb: 6,
        question: "What is the truth of reason?",
        answer: "A. Necessary condition",
        options: [
        "A. Necessary condition",
        "B. Contingent proposition",
        "C. Analytic proposition",
        "D. Synthetic proposition"
        ]
    },    
    {
        numb: 7,
        question: "What is the truth of fact?",
        answer: "B. Contingent proposition",
        options: [
        "A. Necessary condition",
        "B. Contingent proposition",
        "C. Analytic proposition",
        "D. Synthetic proposition"
        ]
    },    
    {
        numb: 8,
        question: "What kind of propositions are existence statements?",
        answer: "B. Truth of fact",
        options: [
        "A. Truth of reason",
        "B. Truth of fact",
        "C. Analytic propositions",
        "D. Synthetic propositions"
        ]
    },    
    {
        numb: 9,
        question: "What is the exception to existence statements?",
        answer: "A. Existence of God",
        options: [
        "A. Existence of God",
        "B. Existence of humans",
        "C. Existence of animals",
        "D. Existence of plants"
        ]
    },    
    {
        numb: 10,
        question: "What happens when one denies God's existence?",
        answer: "D. Self-contradiction",
        options: [
        "A. Logical fallacy",
        "B. Emotional turmoil",
        "C. Moral dilemma",
        "D. Self-contradiction"
        ]
    },    
    {
        numb: 11,
        question: "What are Leibniz's two basic principles?",
        answer: "C. Principle of contradiction, principle of sufficient reason",
        options: [
        "A. Principle of identity, principle of non-contradiction",
        "B. Principle of reason, principle of morality",
        "C. Principle of contradiction, principle of sufficient reason",
        "D. Principle of logic, principle of metaphysics"
        ]
    },    
    {
        numb: 12,
        question: "What does the principle of contradiction state?",
        answer: "A. Analytic propositions are true",
        options: [
        "A. Analytic propositions are true",
        "B. Synthetic propositions are true",
        "C. Necessary conditions are true",
        "D. Contingent propositions are true"
        ]
    },    
    {
        numb: 13,
        question: "What does the principle of sufficient reason state?",
        answer: "C. Everything that exists must have a sufficient reason to exist",
        options: [
        "A. Everything must have a necessary cause",
        "B. Everything must have a contingent effect",
        "C. Everything that exists must have a sufficient reason to exist",
        "D. Everything must have a logical explanation"
        ]
    },    
    {
        numb: 14,
        question: "What distinguishes metaphysical from moral necessity?",
        answer: "C. Moral necessity allows freedom",
        options: [
        "A. Metaphysical necessity is logical",
        "B. Moral necessity is emotional",
        "C. Moral necessity allows freedom",
        "D. Metaphysical necessity is deterministic"
        ]
    },    
    {
        numb: 15,
        question: "What is Leibniz's third principle?",
        answer: "C. Principle of perfection",
        options: [
        "A. Principle of identity",
        "B. Principle of non-contradiction",
        "C. Principle of perfection",
        "D. Principle of morality"
        ]
    },    
    {
        numb: 16,
        question: "What kind of necessity does God's action involve?",
        answer: "B. Moral necessity",
        options: [
        "A. Metaphysical necessity",
        "B. Moral necessity",
        "C. Logical necessity",
        "D. Physical necessity"
        ]
    },    
    {
        numb: 17,
        question: "What is this world according to Leibniz?",
        answer: "C. The best of all possible worlds",
        options: [
        "A. The worst of all possible worlds",
        "B. An average world",
        "C. The best of all possible worlds",
        "D. A random world"
        ]
    },    
    {
        numb: 18,
        question: "What are monads in Leibniz's philosophy?",
        answer: "A. Basic substances",
        options: [
        "A. Basic substances",
        "B. Complex entities",
        "C. Material particles",
        "D. Spiritual entities"
        ]
    },    
    {
        numb: 19,
        question: "What are the characteristics of monads?",
        answer: "C. Unextended, immaterial, simple",
        options: [
        "A. Extended, material, complex",
        "B. Unextended, material, simple",
        "C. Unextended, immaterial, simple",
        "D. Extended, immaterial, complex"
        ]
    },    
    {
        numb: 20,
        question: "Where does the term 'monad' originate?",
        answer: "A. Greek word 'monas'",
        options: [
        "A. Greek word 'monas'",
        "B. Latin word 'monas'",
        "C. German word 'monade'",
        "D. French word 'monade'"
        ]
    },    
    {
        numb: 21,
        question: "What are monads like according to Leibniz?",
        answer: "C. Self-contained, windowless",
        options: [
        "A. Interconnected, open",
        "B. Independent, permeable",
        "C. Self-contained, windowless",
        "D. Dependent, transparent"
        ]
    },    
    {
        numb: 22,
        question: "What constitutes the universe?",
        answer: "C. Infinite monads",
        options: [
        "A. Finite monads",
        "B. Limited monads",
        "C. Infinite monads",
        "D. Countless monads"
        ]
    },    
    {
        numb: 23,
        question: "What is the predominant monad in humans?",
        answer: "A. Mind",
        options: [
        "A. Mind",
        "B. Body",
        "C. Soul",
        "D. Spirit"
        ]
    },    
    {
        numb: 24,
        question: "Why did Leibniz deny causes and casual relations?",
        answer: "A. Monads are windowless",
        options: [
        "A. Monads are windowless",
        "B. Monads interact",
        "C. Causality is logical",
        "D. Causality is metaphysical"
        ]
    },    
    {
        numb: 25,
        question: "What appears as to us as causality?",
        answer: "C. Harmonious system",
        options: [
        "A. Random events",
        "B. Logical necessity",
        "C. Harmonious system",
        "D. Metaphysical necessity"
        ]
    },    
    {
        numb: 26,
        question: "What is perception according to Liebniz?",
        answer: "B. Reflection of the universe",
        options: [
        "A. Sensory experience",
        "B. Reflection of the universe",
        "C. Logical inference",
        "D. Metaphysical insight"
        ]
    },    
    {
        numb: 27,
        question: "What distinguishes perception from apperception?",
        answer: "A. Consciousness",
        options: [
        "A. Consciousness",
        "B. Unconsciousness",
        "C. Sensory input",
        "D. Logical processing"
        ]
    },    
    {
        numb: 28,
        question: "What is Leibniz's first argument for God's existence?",
        answer: "A. Ontological argument",
        options: [
        "A. Ontological argument",
        "B. Cosmological argument",
        "C. Teleological argument",
        "D. Moral argument"
        ]
    },    
    {
        numb: 29,
        question: "What is Leibniz's second argument for God's existence?",
        answer: "B. Eternal truths",
        options: [
        "A. Necessary being",
        "B. Eternal truths",
        "C. Sufficient reason",
        "D. Moral law"
        ]
    },    
    {
        numb: 30,
        question: "What is Leibniz's third argument for God's existence?",
        answer: "C. Principle of sufficient reason",
        options: [
        "A. Ontological argument",
        "B. Cosmological argument",
        "C. Principle of sufficient reason",
        "D. Teleological argument"
        ]
    },    
    {
        numb: 31,
        question: "What is Leibniz's fourth argument for God's existence?",
        answer: "D. Order and harmony",
        options: [
        "A. Necessary being",
        "B. Eternal truths",
        "C. Sufficient reason",
        "D. Order and harmony"
        ]
    },    
    {
        numb: 32,
        question: "What kinds of evil does Leibniz identify?",
        answer: "C. Metaphysical, physical, moral",
        options: [
        "A. Natural, human, divine",
        "B. Good, bad, indifferent",
        "C. Metaphysical, physical, moral",
        "D. Logical, emotional, psychological"
        ]
    },    
    {
        numb: 33,
        question: "What causes metaphysical evil?",
        answer: "B. Imperfection of finite beings",
        options: [
        "A. Action of God",
        "B. Imperfection of finite beings",
        "C. Human sin",
        "D. Natural disasters"
        ]
    },    
    {
        numb: 34,
        question: "What is the alternative to metaphysical evil?",
        answer: "A. Non-existence of finite beings",
        options: [
        "A. Non-existence of finite beings",
        "B. Existence of infinite beings",
        "C. Perfection of finite beings",
        "D. Elimination of human sin"
        ]
    },    
    {
        numb: 35,
        question: "Is existence better than non-existence?",
        answer: "A. True",
        options: [
        "A. True",
        "B. False",
        "C. Uncertain",
        "D. Dependent"
        ]
    },    
    {
        numb: 36,
        question: "What is physical evil?",
        answer: "C. Part of the universe's harmony",
        options: [
        "A. Result of human sin",
        "B. Natural disaster",
        "C. Part of the universe's harmony",
        "D. Punishment from God"
        ]
    },    
    {
        numb: 37,
        question: "What contains its predicate?",
        answer: "A. Every substance",
        options: [
        "A. Every substance",
        "B. Every attribute",
        "C. Every relation",
        "D. Every concept"
        ]
    },    
    {
        numb: 38,
        question: "What are moral evils?",
        answer: "C. Reprehensible actions",
        options: [
        "A. Natural disasters",
        "B. Human mistakes",
        "C. Reprehensible actions",
        "D. Logical contradictions"
        ]
    },    
    {
        numb: 39,
        question: "How does Leibniz address moral evil?",
        answer: "B. Distinguishing metaphysical and moral necessity",
        options: [
        "A. Denying human freedom",
        "B. Distinguishing metaphysical and moral necessity",
        "C. Attributing evil to God",
        "D. Ignoring moral evil"
        ]
    },    
   

    ]