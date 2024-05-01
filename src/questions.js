const yesNoOptions = ['Yes', 'No']

export default [
    { //1
        question: 'No. of birds you have:',
        options: ['1-10', '10-50', '50-100', '> 100']
    },

    { //2
        question: 'What is average age of birdS?',
        options: ['1-3 months', '4-6 months', '7-12 months', '> 1year']
    },

    { //3
        question: 'Is bird off-feed?',
        options: ['Yes', 'No', 'Partial']
    },

    { //4
        question: 'Is bird dull/depreesed?',
        options: ['Yes', 'No', 'Partial']
    },

    { //5
        question: 'Is bird reluctant to fly?',
        options: yesNoOptions
    },

    { //6
        question: 'Does bird have a history of ecto-parasites?',
        options: yesNoOptions
    },

    { //7
        question: 'Has bird been vaccinated?',
        options: yesNoOptions   
    },

    { //8
        question: 'For how many days the bird has been sick?',
        options: ['1', '2-3', '4-7', '> week']
    },

    { //9
        question: 'What is intensity of fever?',
        options: ['Mild/Moderate', 'Severe', 'Very Severe', 'None']
    },

    { //10
        question: 'What is texture of diarrhea?',
        options: ['Loose', 'Semi-Solid', 'Bloody', 'None']
    },

    { //11
        question: 'What is color of feces?',
        options: ['Normal', 'Red', 'White', 'Green']
    },

    { //12
        question: 'What is texture of vomit?',
        options: ['Feed Vomit', 'Bloody Vomit', 'Watery Vomit', 'None']
    },

    { //13
        question: 'What is type of lameness?',
        options: ['One leg involved', 'Both legs involved', 'None']
    },

    { //14
        question: 'What are respiratory signs?',
        options: ['Wheezing', 'Pus', 'Blood', 'Water', 'None']
    },

    { //15
        question: 'What are the nervous signs?',
        options: ['Neck twisting', 'Head shaking', 'Imbalanced', 'Circling']
    },

    { //16
        question: 'What is type of pots?',
        options: ['Earthen/Conventional', 'Plastic', 'Steel', 'Other']
    },

    { //17
        question: 'What is type of litter?',
        options: ['Rice husk', 'Sawdust', 'Other', 'None']
    },

    { //18
        question: 'What is type of floor?',
        options: ['Earth', 'Cemented', 'Cage', 'Open'],
    },

    { //19
        question: 'How do you wash pots?',
        options: ['Daily with water', 'Daily with detergent', 
                  'Weekly with water', 'None']
    },

    { //20
        question: 'What is type of racking?',
        options: ['With wooden stick', 'With racker', 'None']
    },
    
    { //21
        question: 'What is the frequency of racking?',
        options: ['Daily', 'After 2 days', 'Weekly', 'None']
    }
];