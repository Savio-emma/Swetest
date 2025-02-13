// const = document.querySelector('.');
// const = document.querySelector('.');
// const = document.querySelector('.');

let questions = [
    {
        numb: 1,
        question: "Thomas Hobbes' philosophy is situated between which two philosophical traditions?",
        answer: "C. Continental rationalists and British empiricists",
        options: [
        "A. Ancient Greek philosophy and modern philosophy",
        "B. Medieval philosophy and Renaissance humanism",
        "C. Continental rationalists and British empiricists",
        "D. Idealism and realism"
        ]
    },
    {
        numb: 2,
        question: "When was Thomas Hobbes born and when did he die?",
        answer: "B. 1588 and 1679",
        options: [
        "A. 1550 and 1650",
        "B. 1588 and 1679",
        "C. 1600 and 1700",
        "D. 1650 and 1750"
        ]
    },
    {
        numb: 3,
        question: "What is the title of Thomas Hobbes' main work?",
        answer: "A. Leviathan",
        options: [
        "A. Leviathan",
        "B. The Social Contract",
        "C. The Republic",
        "D. The Prince"
        ]
    },
    {
        numb: 4,
        question: "What are the titles of Thomas Hobbes' other notable works?",
        answer: "C. Human Nature and Concerning Body Politic",
        options: [
        "A. The Elements of Law and De Cive",
        "B. The Leviathan and The Elements of Law",
        "C. Human Nature and Concerning Body Politic",
        "D. De Homine and De Corpore"
        ]
    },
    {
        numb: 5,
        question: "How would you describe Thomas Hobbes' concept of philosophy?",
        answer: "A. Materialistic",
        options: [
        "A. Materialistic",
        "B. Idealistic",
        "C. Dualistic",
        "D. Spiritualistic"
        ]
    },    
    {
        numb: 6,
        question: "Why does Thomas Hobbes exclude spiritual things, including God, from the subject matter of philosophy?",
        answer: "C. Because we cannot know them",
        options: [
        "A. Because they are not relevant to human experience",
        "B. Because they are not empirically verifiable",
        "C. Because we cannot know them",
        "D. Because they are not important for understanding the world"
        ]
    },    
    {
        numb: 7,
        question: "What criticism has been made against Thomas Hobbes' approach to philosophy?",
        answer: "A. He confused philosophy with physical sciences",
        options: [
        "A. He confused philosophy with physical sciences",
        "B. He separated philosophy from science",
        "C. He emphasized the role of reason in philosophy",
        "D. He neglected the importance of empirical evidence"
        ]
    },    
    {
        numb: 8,
        question: "How does Thomas Hobbes restrict the use of the word 'substance'?",
        answer: "A. To material things only",
        options: [
        "A. To material things only",
        "B. To immaterial things only",
        "C. To both material and immaterial things",
        "D. To neither material nor immaterial things"
        ]
    },    
    {
        numb: 9,
        question: "What does Thomas Hobbes think about talking of immaterial things?",
        answer: "B. It is a contradiction",
        options: [
        "A. It is meaningless",
        "B. It is a contradiction",
        "C. It is unnecessary",
        "D. It is unimportant"
        ]
    },    
    {
        numb: 10,
        question: "Who disagreed with Thomas Hobbes on the issue of spiritual substances?",
        answer: "A. René Descartes",
        options: [
        "A. René Descartes",
        "B. John Locke",
        "C. David Hume",
        "D. Immanuel Kant"
        ]
    },    
    {
        numb: 11,
        question: "How does Thomas Hobbes define universals?",
        answer: "C. 'Names of names or names of words'",
        options: [
        "A. Abstract concepts",
        "B. General terms",
        "C. 'Names of names or names of words'",
        "D. Concrete objects"
        ]
    },    
    {
        numb: 12,
        question: "How does Thomas Hobbes think scientific knowledge is acquired?",
        answer: "B. Through ratiocination",
        options: [
        "A. Through sense experience",
        "B. Through ratiocination",
        "C. Through intuition",
        "D. Through revelation"
        ]
    },    
    {
        numb: 13,
        question: "What characterizes the 'state of nature' according to Thomas Hobbes?",
        answer: "D. No laws, no authority, no morality, war, and insecurity",
        options: [
        "A. Peace, harmony, and cooperation",
        "B. Social contract, laws, and government",
        "C. Economic prosperity, cultural advancement",
        "D. No laws, no authority, no morality, war, and insecurity"
        ]
    },    
    {
        numb: 14,
        question: "What is lacking in the 'state of nature' according to Thomas Hobbes?",
        answer: "C. Development, agriculture, navigation, industry",
        options: [
        "A. Peace, security, and stability",
        "B. Social hierarchy, authority, and power",
        "C. Development, agriculture, navigation, industry",
        "D. Culture, art, and entertainment"
        ]
    },    
    {
        numb: 15,
        question: "How does morality arise according to Thomas Hobbes?",
        answer: "B. From the formation of a society",
        options: [
        "A. From human nature",
        "B. From the formation of a society",
        "C. From divine command",
        "D. From reason and rationality"
        ]
    },    
    {
        numb: 16,
        question: "What is the first law of nature according to Thomas Hobbes?",
        answer: "A. To ensure peace",
        options: [
        "A. To ensure peace",
        "B. To respect lives and property of others",
        "C. To uphold the covenant made to others",
        "D. To seek power and dominion"
        ]
    },    
    {
        numb: 17,
        question: "What is the second law of nature according to Thomas Hobbes?",
        answer: "B. To respect lives and property of others",
        options: [
        "A. To ensure peace",
        "B. To respect lives and property of others",
        "C. To uphold the covenant made to others",
        "D. To seek power and dominion"
        ]
    },    
    {
        numb: 18,
        question: "What is the third law of nature according to Thomas Hobbes?",
        answer: "C. To uphold the covenant made to others",
        options: [
        "A. To ensure peace",
        "B. To respect lives and property of others",
        "C. To uphold the covenant made to others",
        "D. To seek power and dominion"
        ]
    },    
    {
        numb: 19,
        question: "How does Thomas Hobbes summarize his laws of nature?",
        answer: "C. 'Do not do that to others, what thou thinkest unreasonable to be done by others to thyself'",
        options: [
        "A. 'Love thy neighbor as thyself'",
        "B. 'Do unto others as you would have them do unto you'",
        "C. 'Do not do that to others, what thou thinkest unreasonable to be done by others to thyself'",
        "D. 'Survival of the fittest'"
        ]
    },    
    {
        numb: 20,
        question: "What is Thomas Hobbes' view of human nature?",
        answer: "A. Selfish",
        options: [
        "A. Selfish",
        "B. Altruistic",
        "C. Rational",
        "D. Emotional"
        ]
    },    
    {
        numb: 21,
        question: "What type of state does Thomas Hobbes advocate for?",
        answer: "A. Authoritarian",
        options: [
        "A. Authoritarian",
        "B. Democratic",
        "C. Libertarian",
        "D. Socialist"
        ]
    },    
    {
        numb: 22,
        question: "What is the role of the people in Thomas Hobbes' philosophy?",
        answer: "C. To hand over power to a sovereign",
        options: [
        "A. To govern themselves",
        "B. To elect representatives",
        "C. To hand over power to a sovereign",
        "D. To rebel against authority"
        ]
    },    
    {
        numb: 23,
        question: "What is Thomas Hobbes' view of the church?",
        answer: "C. A relic of the Roman Empire",
        options: [
        "A. A divine institution",
        "B. A human organization",
        "C. A relic of the Roman Empire",
        "D. A necessary evil"
        ]
    },    
    {
        numb: 24,
        question: "Under what condition can citizens disobey their leader according to Thomas Hobbes?",
        answer: "B. If the leader can no longer ensure peace",
        options: [
        "A. If the leader is unjust",
        "B. If the leader can no longer ensure peace",
        "C. If the leader is inefficient",
        "D. If the leader is unpopular"
        ]
    },    
    {
        numb: 25,
        question: "What is John Locke's contribution to philosophy?",
        answer: "A. Father of British empiricism",
        options: [
        "A. Father of British empiricism",
        "B. Father of modern philosophy",
        "C. Father of rationalism",
        "D. Father of idealism"
        ]
    },    
    {
        numb: 26,
        question: "What is the title of John Locke's main work?",
        answer: "C. Essay Concerning Human Understanding",
        options: [
        "A. Treatise on Government",
        "B. Letter Concerning Toleration",
        "C. Essay Concerning Human Understanding",
        "D. Some Thoughts Concerning Education"
        ]
    },    
    {
        numb: 27,
        question: "What are some of John Locke's notable works?",
        answer: "D. Two Treatises on Government, Three Letters on Toleration, Some Thoughts Concerning Education",
        options: [
        "A. Essay Concerning Human Understanding, Treatise on Government",
        "B. Letter Concerning Toleration, Some Thoughts Concerning Education",
        "C. Two Treatises on Government, Essay Concerning Human Understanding",
        "D. Two Treatises on Government, Three Letters on Toleration, Some Thoughts Concerning Education"
        ]
    },    
    {
        numb: 28,
        question: "What is the source of all knowledge according to John Locke?",
        answer: "A. Sense perception",
        options: [
        "A. Sense perception",
        "B. Reason",
        "C. Intuition",
        "D. Revelation"
        ]
    },    
    {
        numb: 29,
        question: "Why does John Locke reject innate ideas?",
        answer: "C. Because children, idiots, and lunatics do not have them",
        options: [
        "A. Because they are not empirically verifiable",
        "B. Because they are not universally accepted",
        "C. Because children, idiots, and lunatics do not have them",
        "D. Because they are not necessary for understanding the world"
        ]
    },    
    {
        numb: 30,
        question: "What are primary principles of reasoning according to John Locke?",
        answer: "A. Ideas that come to us spontaneously",
        options: [
        "A. Ideas that come to us spontaneously",
        "B. Ideas that are derived from sense experience",
        "C. Ideas that are acquired through education",
        "D. Ideas that are innate"
        ]
    },    
    {
        numb: 31,
        question: "What is an example of a primary principle of reasoning according to John Locke?",
        answer: "A. The whole is greater than the part",
        options: [
        "A. The whole is greater than the part",
        "B. All humans are mortal",
        "C. The sum of the angles in a triangle is 180 degrees",
        "D. The law of gravity"
        ]
    },    
    {
        numb: 32,
        question: "How do human ideas and knowledge derive according to John Locke?",
        answer: "C. From sense perception and reflection",
        options: [
        "A. From innate ideas",
        "B. From sense perception alone",
        "C. From sense perception and reflection",
        "D. From reason alone"
        ]
    },    
    {
        numb: 33,
        question: "What are the immediate objects of knowledge according to John Locke?",
        answer: "A. Ideas",
        options: [
        "A. Ideas",
        "B. Things themselves",
        "C. Universals",
        "D. Particulars"
        ]
    },    
    {
        numb: 34,
        question: "How do we know about ideas according to John Locke?",
        answer: "C. Because they impress themselves on us",
        options: [
        "A. Because they are innate",
        "B. Because they are acquired through education",
        "C. Because they impress themselves on us",
        "D. Because they are derived from sense experience"
        ]
        
    },    
    {
        numb: 35,
        question: "What types of ideas does John Locke distinguish between?",
        answer: "C. Simple and complex ideas",
        options: [
        "A. Innate and acquired ideas",
        "B. Rational and empirical ideas",
        "C. Simple and complex ideas",
        "D. Abstract and concrete ideas"
        ]
    },    
    {
        numb: 36,
        question: "How are simple ideas formed according to John Locke?",
        answer: "A. Directly caused by things",
        options: [
        "A. Directly caused by things",
        "B. Derived from complex ideas",
        "C. Acquired through education",
        "D. Innate"
        ]

    },    
    {
        numb: 37,
        question: "How are complex ideas formed according to John Locke?",
        answer: "C. Combination of simple ideas",
        options: [
        "A. Directly caused by things",
        "B. Derived from innate ideas",
        "C. Combination of simple ideas",
        "D. Acquired through education"
        ]
    },    
    {
        numb: 38,
        question: "How are general or abstract ideas formed according to John Locke?",
        answer: "C. By removing particularizing factors",
        options: [
        "A. By combining simple ideas",
        "B. By deriving them from innate ideas",
        "C. By removing particularizing factors",
        "D. By acquiring them through education"
        ]
    },    

    {
        numb: 39,
        question: "How is the idea of substance formed according to John Locke?",
        answer: "C. By supposing a substratum",
        options: [
        "A. By direct perception",
        "B. By deriving it from innate ideas",
        "C. By supposing a substratum",
        "D. By acquiring it through education"
        ]
    },    

    {
        numb: 40,
        question: "What are primary qualities according to John Locke?",
        answer: "C. Qualities that are really in things and inseparable from them",
        options: [
        "A. Qualities that are perceived by us",
        "B. Qualities that are derived from innate ideas",
        "C. Qualities that are really in things and inseparable from them",
        "D. Qualities that are acquired through education"
        ]
    },    

    {
        numb: 41,
        question: "What are secondary qualities according to John Locke?",
        answer: "D. Powers in things to produce certain sensations in us",
        options: [
        "A. Qualities that are really in things and inseparable from them",
        "B. Qualities that are perceived by us",
        "C. Qualities that are derived from innate ideas",
        "D. Powers in things to produce certain sensations in us"
        ]
    },    

    {
        numb: 42,
        question: "What is the relationship between words and ideas according to John Locke?",
        answer: "C. Words are signs of ideas",
        options: [
        "A. Words are identical with ideas",
        "B. Words are derived from ideas",
        "C. Words are signs of ideas",
        "D. Words are unrelated to ideas"
        ]
    },    

    {
        numb: 43,
        question: "What is knowledge according to John Locke?",
        answer: "C. Perception of the agreement or disagreement of two ideas",
        options: [
        "A. Perception of things themselves",
        "B. Derivation of ideas from innate ideas",
        "C. Perception of the agreement or disagreement of two ideas",
        "D. Acquisition of ideas through education"
        ]
    },    

    {
        numb: 44,
        question: "What are the three degrees of knowledge according to John Locke?",
        answer: "D. Intuitive, demonstrative, and sensitive",
        options: [
        "A. Rational, empirical, and intuitive",
        "B. Innate, acquired, and intuitive",
        "C. Abstract, concrete, and sensitive",
        "D. Intuitive, demonstrative, and sensitive"
        ]

    },    

    {
        numb: 45,
        question: "What is the first and highest degree of knowledge according to John Locke?",
        answer: "A. Intuitive",
        options: [
        "A. Intuitive",
        "B. Demonstrative",
        "C. Sensitive",
        "D. Rational"
        ]
    },    

    {
        numb: 46,
        question: "How is intuitive knowledge acquired according to John Locke?",
        answer: "C. Perception of the agreement or disagreement of two ideas immediately",
        options: [
        "A. Through sense experience",
        "B. Through reason and deduction",
        "C. Perception of the agreement or disagreement of two ideas immediately",
        "D. Through education and learning"
        ]
    },    

    {
        numb: 47,
        question: "What is the second degree of knowledge according to John Locke?",
        answer: "B. Demonstrative",
        options: [
        "A. Intuitive",
        "B. Demonstrative",
        "C. Sensitive",
        "D. Rational"
        ]
    },    

    {
        numb: 48,
        question: "How is demonstrative knowledge acquired according to John Locke?",
        answer: "C. Through natural science based on experiment and demonstration",
        options: [
        "A. Through sense experience",
        "B. Through reason and deduction",
        "C. Through natural science based on experiment and demonstration",
        "D. Through education and learning"
        ]
    },    

    {
        numb: 49,
        question: "What is the third degree of knowledge according to John Locke?",
        answer: "C. Sensitive",
        options: [
        "A. Intuitive",
        "B. Demonstrative",
        "C. Sensitive",
        "D. Rational"
        ]
    },    

    {
        numb: 50,
        question: "What type of knowledge is knowing things as they exist according to John Locke?",
        answer: "C. Sensitive",
        options: [
        "A. Intuitive",
        "B. Demonstrative",
        "C. Sensitive",
        "D. Rational"
        ]
    },    

    {
        numb: 51,
        question: "What is John Locke's view on religious knowledge?",
        answer: "A. It is true and beyond any doubt",
        options: [
        "A. It is true and beyond any doubt",
        "B. It is uncertain and doubtful",
        "C. It is acquired through reason and evidence",
        "D. It is based on faith and revelation"
        ]

    },    

    {
        numb: 52,
        question: "What is John Locke's view on morality?",
        answer: "C. Based on the commandments of God and self-evident",
        options: [
        "A. Based on human reason and evidence",
        "B. Based on cultural and social norms",
        "C. Based on the commandments of God and self-evident",
        "D. Based on personal preferences and interests"
        ]
    },    

    {
        numb: 53,
        question: "Can morality be demonstrated according to John Locke?",
        answer: "A. Yes, as in mathematics",
        options: [
        "A. Yes, as in mathematics",
        "B. No, it is based on faith and revelation",
        "C. No, it is based on personal preferences and interests",
        "D. No, it is based on cultural and social norms"
        ]
    },    

    {
        numb: 54,
        question: "What is the relationship between good actions and pleasure according to John Locke?",
        answer: "A. Good actions cause pleasure",
        options: [
        "A. Good actions cause pleasure",
        "B. Good actions cause pain",
        "C. Pleasure causes good actions",
        "D. Pain causes good actions"
        ]
    },    

    {
        numb: 55,
        question: "How is John Locke related to utilitarianism?",
        answer: "A. He can be seen as a forerunner",
        options: [
        "A. He can be seen as a forerunner",
        "B. He is a critic of utilitarianism",
        "C. He has no relation to utilitarianism",
        "D. He is a utilitarian philosopher"
        ]
    },    

    {
        numb: 56,
        question: "How does John Locke's view on God's command differ from Williams' view?",
        answer: "C. Locke does not make God's command arbitrary",
        options: [
        "A. Locke makes God's command arbitrary",
        "B. Locke and Williams have the same view",
        "C. Locke does not make God's command arbitrary",
        "D. Locke's view is unknown"
        ]
    },    

    {
        numb: 57,
        question: "How does John Locke's view on the state of nature differ from Hobbes' view?",
        answer: "C. Locke believes there is still natural law to guide them",
        options: [
        "A. Locke believes there is no natural law",
        "B. Locke and Hobbes have the same view",
        "C. Locke believes there is still natural law to guide them",
        "D. Locke's view is unknown"
        ]
    },    

    {
        numb: 58,
        question: "What is the reason for establishing a society according to John Locke?",
        answer: "C. To safeguard private properties",
        options: [
        "A. To promote the common good",
        "B. To protect individual rights",
        "C. To safeguard private properties",
        "D. To maintain social order"
        ]
    },    

    {
        numb: 59,
        question: "What type of society does John Locke advocate for?",
        answer: "A. Democratic",
        options: [
        "A. Democratic",
        "B. Authoritarian",
        "C. Libertarian",
        "D. Socialist"
        ]
    },    

    {
        numb: 60,
        question: "What is the role of government according to John Locke?",
        answer: "C. Servant of the people and responsible to them",
        options: [
        "A. Absolute authority over the people",
        "B. Representative of the people but not responsible to them",
        "C. Servant of the people and responsible to them",
        "D. Limited to protecting private property"
        ]
    },    

    {
        numb: 61,
        question: "What type of government does John Locke advocate for?",
        answer: "A. Democratic",
        options: [
        "A. Democratic",
        "B. Authoritarian",
        "C. Libertarian",
        "D. Socialist"
        ]
    },    

    {
        numb: 62,
        question: "What is the relationship between the government and the people according to John Locke?",
        answer: "C. The government is responsible to the people",
        options: [
        "A. The government has absolute authority over the people",
        "B. The government is representative of the people but not responsible to them",
        "C. The government is responsible to the people",
        "D. The government is limited to protecting private property"
        ]
    },    

    {
        numb: 63,
        question: "What is the purpose of the social contract according to John Locke?",
        answer: "C. To establish a government that protects the natural rights of the people",
        options: [
        "A. To establish an absolute authority over the people",
        "B. To promote the common good",
        "C. To establish a government that protects the natural rights of the people",
        "D. To limit the power of the government"
        ]
    },    

    {
        numb: 64,
        question: "What are the natural rights that John Locke believes the government should protect?",
        answer: "C. Life, liberty, and property",
        options: [
        "A. Life, liberty, and the pursuit of happiness",
        "B. Freedom of speech, freedom of assembly, and freedom of the press",
        "C. Life, liberty, and property",
        "D. The right to bear arms, the right to a fair trial, and the right to vote"
        ]
    },    

    {
        numb: 65,
        question: "How does John Locke's view on the state of nature differ from Thomas Hobbes' view?",
        answer: "C. Locke believes the state of nature is a state of freedom and equality, while Hobbes believes it is a state of war",
        options: [
        "A. Locke believes the state of nature is a state of war, while Hobbes believes it is a state of freedom and equality",
        "B. Locke and Hobbes have the same view on the state of nature",
        "C. Locke believes the state of nature is a state of freedom and equality, while Hobbes believes it is a state of war",
        "D. Locke's view is unknown"
        ] 
    },    

    {
        numb: 66,
        question: "According to George Berkeley, what is the relationship between perception and existence?",
        answer: "C. To be is to be perceived",
        options: [
        "A. Perception is a product of existence",
        "B. Existence is a product of perception",
        "C. To be is to be perceived",
        "D. Perception and existence are unrelated"
        ]

    },    

    {
        numb: 67,
        question: "What is George Berkeley's philosophical position known as?",
        answer: "A. Idealism",
        options: [
        "A. Idealism",
        "B. Materialism",
        "C. Dualism",
        "D. Realism"
        ]
    },    

    {
        numb: 68,
        question: "What does George Berkeley reject about John Locke's theory of material substance?",
        answer: "C. We cannot perceive the substratum",
        options: [
        "A. It is not empirically verifiable",
        "B. It is not universally accepted",
        "C. We cannot perceive the substratum",
        "D. It is not necessary for understanding the world"
        ]
    },    

    {
        numb: 69,
        question: "What do John Locke and George Berkeley agree on regarding perception?",
        answer: "A. We perceive colors, sound, taste, solidity, etc.",
        options: [
        "A. We perceive colors, sound, taste, solidity, etc.",
        "B. We perceive only our own ideas",
        "C. We perceive only the external world",
        "D. We perceive nothing at all"
        ]
    },    

    {
        numb: 70,
        question: "What is the relationship between ideas and things according to John Locke?",
        answer: "C. Ideas are copies or representations of things",
        options: [
        "A. Ideas are identical with things",
        "B. Ideas are derived from things",
        "C. Ideas are copies or representations of things",
        "D. Ideas are unrelated to things"
        ]
    },    

    {
        numb: 71,
        question: "What is the relationship between ideas and things according to George Berkeley?",
        answer: "A. Ideas are the things themselves",
        options: [
        "A. Ideas are the things themselves",
        "B. Ideas are copies or representations of things",
        "C. Ideas are derived from things",
        "D. Ideas are unrelated to things"
        ]
    },    

    {
        numb: 72,
        question: "Why does George Berkeley think that distinguishing between ideas and things leads to universal skepticism?",
        answer: "C. Because it implies that we can never know the external world",
        options: [
        "A. Because it implies that our senses are deceiving us",
        "B. Because it implies that our reason is unreliable",
        "C. Because it implies that we can never know the external world",
        "D. Because it implies that we can never know our own minds"
        ]

    },    

    {
        numb: 73,
        question: "What type of substance does George Berkeley believe in?",
        answer: "C. Spiritual substance",
        options: [
        "A. Material substance",
        "B. Physical substance",
        "C. Spiritual substance",
        "D. No substance at all"
        ]
    },    

    {
        numb: 74,
        question: "How do we know of the existence of our own mind according to George Berkeley?",
        answer: "A. Through intuition or reflection",
        options: [
        "A. Through intuition or reflection",
        "B. Through sense experience",
        "C. Through reason and deduction",
        "D. Through revelation or faith"
        ]

    },    

    {
        numb: 75,
        question: "How do we know of the existence of other minds according to George Berkeley?",
        answer: "B. Through inference",
        options: [
        "A. Through intuition or reflection",
        "B. Through inference",
        "C. Through sense experience",
        "D. Through revelation or faith"
        ]

    },    

    {
        numb: 76,
        question: "What is George Berkeley's view on the laws of nature?",
        answer: "C. They are not laws of necessity",
        options: [
        "A. They are laws of necessity",
        "B. They are laws of probability",
        "C. They are not laws of necessity",
        "D. They are unrelated to necessity or probability"
        ]
    },    

    {
        numb: 77,
        question: "What is George Berkeley's view on miracles?",
        answer: "A. They are possible",
        options: [
        "A. They are possible",
        "B. They are impossible",
        "C. They are probable",
        "D. They are improbable"
        ]
    },    

    {
        numb: 78,
        question: "What is the efficient cause of all things according to George Berkeley?",
        answer: "A. God",
        options: [
        "A. God",
        "B. Human beings",
        "C. Natural laws",
        "D. Chance or randomness"
        ]
    },    

    {
        numb: 79,
        question: "Do humans have efficient causality according to George Berkeley?",
        answer: "A. Yes",
        options: [
        "A. Yes",
        "B. No",
        "C. Maybe",
        "D. It is unknown"
        ]
    },  
    
    {
        numb: 80,
        question: "How does George Berkeley argue for his view on secondary qualities?",
        answer: "C. Through a dialogue between Hylas and Philonous",
        options: [
        "A. Through a philosophical treatise",
        "B. Through a scientific experiment",
        "C. Through a dialogue between Hylas and Philonous",
        "D. Through a logical argument"
        ]
    },    

    ]
