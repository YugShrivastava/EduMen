const phq9Data = [
    {
        question: "Over the last two weeks, how often have you been bothered by little interest or pleasure in doing things?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by trouble falling or staying asleep, or sleeping too much?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by feeling tired or having little energy?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by poor appetite or overeating?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by feeling bad about yourself - or that you are a failure or have let yourself or your family down?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by trouble concentrating on things, such as reading the newspaper or watching television?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by thoughts that you would be better off dead, or of hurting yourself in some way?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    }
];

const gad7Data = [
    {
        question: "Over the last two weeks, how often have you been bothered by feeling nervous, anxious, or on edge?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by not being able to stop or control worrying?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by worrying too much about different things?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by trouble relaxing?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by being so restless that it is hard to sit still?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by becoming easily annoyed or irritable?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by feeling afraid as if something awful might happen?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    }
];

const auditData = [
    {
        question: "How often do you have a drink containing alcohol?",
        choices: ["Never", "Monthly or less", "2-4 times a month", "2-3 times a week", "4 or more times a week"],
        scores: [0, 1, 2, 3, 4]
    },
    {
        question: "How many standard drinks containing alcohol do you have on a typical day when you are drinking?",
        choices: ["1 or 2", "3 or 4", "5 or 6", "7 to 9", "10 or more"],
        scores: [0, 1, 2, 3, 4]
    },
    {
        question: "How often do you have six or more drinks on one occasion?",
        choices: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        scores: [0, 1, 2, 3, 4]
    },
    {
        question: "How often during the last year have you found that you were not able to stop drinking once you had started?",
        choices: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        scores: [0, 1, 2, 3, 4]
    },
    {
        question: "How often during the last year have you failed to do what was normally expected from you because of drinking?",
        choices: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        scores: [0, 1, 2, 3, 4]
    },
    {
        question: "How often during the last year have you needed a first drink in the morning to get yourself going after a heavy drinking session?",
        choices: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        scores: [0, 1, 2, 3, 4]
    },
    {
        question: "How often during the last year have you had a feeling of guilt or remorse after drinking?",
        choices: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        scores: [0, 1, 2, 3, 4]
    },
    {
        question: "How often during the last year have you been unable to remember what happened the night before because you had been drinking?",
        choices: ["Never", "Less than monthly", "Monthly", "Weekly", "Daily or almost daily"],
        scores: [0, 1, 2, 3, 4]
    },
    {
        question: "Have you or someone else been injured as a result of your drinking?",
        choices: ["No", "Yes, but not in the last year", "Yes, during the last year"],
        scores: [0, 2, 4]
    },
    {
        question: "Has a relative, friend, doctor, or other healthcare worker been concerned about your drinking or suggested you cut down?",
        choices: ["No", "Yes, but not in the last year", "Yes, during the last year"],
        scores: [0, 2, 4]
    }
];

const cageAidData = [
    {
        question: "Have you ever felt you needed to cut down on your drinking or drug use?",
        choices: ["No", "Yes"],
        scores: [0, 2]
    },
    {
        question: "Have people ever annoyed you by criticizing your drinking or drug use?",
        choices: ["No", "Yes"],
        scores: [0, 2]
    },
    {
        question: "Have you ever felt bad or guilty about your drinking or drug use?",
        choices: ["No", "Yes"],
        scores: [0, 2]
    },
    {
        question: "Have you ever had a drink or used drugs first thing in the morning to steady your nerves or get rid of a hangover (eye-opener)?",
        choices: ["No", "Yes"],
        scores: [0, 2]
    },
    {
        question: "Have you ever used drugs other than those required for medical reasons?",
        choices: ["No", "Yes"],
        scores: [0, 2]
    },
    {
        question: "Has your drinking or drug use caused any problems at home, work, or school?",
        choices: ["No", "Yes"],
        scores: [0, 2]
    },
    {
        question: "Have you ever neglected your family because of your drinking or drug use?",
        choices: ["No", "Yes"],
        scores: [0, 2]
    },
    {
        question: "Have you ever engaged in illegal activities in order to obtain drugs or get money for drugs?",
        choices: ["No", "Yes"],
        scores: [0, 2]
    },
    {
        question: "Have you ever experienced withdrawal symptoms (felt sick) when you stopped taking drugs or drinking?",
        choices: ["No", "Yes"],
        scores: [0, 2]
    },
    {
        question: "Have you ever had medical problems as a result of your drug use (e.g., memory loss, hepatitis, convulsions, bleeding, etc.)?",
        choices: ["No", "Yes"],
        scores: [0, 2]
    }
];

const miniData = [
    {
        question: "Are you currently experiencing any of the following symptoms?",
        choices: ["Yes", "No"],
        scores: [2, 0]
    },
    {
        question: "Have you ever experienced any of the following symptoms for at least 2 weeks?",
        choices: ["Yes", "No"],
        scores: [2, 0]
    },
    {
        question: "Have you ever experienced any of the following symptoms for at least 2 weeks during the same period of time?",
        choices: ["Yes", "No"],
        scores: [2, 0]
    },
    
];

const gad2Data = [
    {
        question: "Feeling nervous, anxious, or on edge?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Not being able to stop or control worrying?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    }
];

const phq2Data = [
    {
        question: "Over the last two weeks, how often have you been bothered by little interest or pleasure in doing things?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    },
    {
        question: "Over the last two weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
        choices: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
        scores: [0, 1, 2, 3]
    }
];

let quizData;
let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const phq9Btn = document.getElementById("phq9Btn");
const gad7Btn = document.getElementById("gad7Btn");
const auditBtn = document.getElementById("auditBtn");
const cageAidBtn = document.getElementById("cageAidBtn");
const miniBtn = document.getElementById("miniBtn");
const gad2Btn = document.getElementById("gad2Btn");
const phq2Btn = document.getElementById("phq2Btn");

phq9Btn.addEventListener("click", startTest(phq9Data));
gad7Btn.addEventListener("click", startTest(gad7Data));
auditBtn.addEventListener("click", startTest(auditData));
cageAidBtn.addEventListener("click", startTest(cageAidData));
miniBtn.addEventListener("click", startTest(miniData));
gad2Btn.addEventListener("click", startTest(gad2Data));
phq2Btn.addEventListener("click", startTest(phq2Data));

nextBtn.addEventListener("click", nextQuestion);
submitBtn.addEventListener("click", showResult);

function startTest(data) {
    return function () {
        quizData = data;
        startQuiz();
    }
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    startContainer.style.display = "none";
    quizContainer.style.display = "block";
    nextBtn.style.display = "block";
}

function loadQuestion() {
    questionElement.textContent = quizData[currentQuestion].question;
    choicesElement.innerHTML = "";

    quizData[currentQuestion].choices.forEach((choice, index) => {
        const radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "choice";
        radioBtn.value = quizData[currentQuestion].scores[index];
        choicesElement.appendChild(radioBtn);

        const label = document.createElement("label");
        label.textContent = choice;
        choicesElement.appendChild(label);
        choicesElement.appendChild(document.createElement("br"));
    });

    if (currentQuestion === quizData.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "block";
    }
}

function nextQuestion() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');

    if (!selectedChoice) {
        alert("Please select an answer.");
        return;
    }

    score += parseInt(selectedChoice.value);
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    }
}

function showResult() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');

    if (!selectedChoice) {
        alert("Please select an answer.");
        return;
    }

    score += parseInt(selectedChoice.value);
    

    let interpretation = "";
    if (quizData === phq9Data) {
        interpretation = interpretPhq9Score(score);
    } else if (quizData === gad7Data) {
        interpretation = interpretGad7Score(score);
    } else if (quizData === auditData) {
        interpretation = interpretAuditScore(score);
    } else if (quizData === cageAidData) {
        interpretation = interpretCageAidScore(score);
    } else if (quizData === miniData) {
        interpretation = interpretMiniScore(score);
    } else if (quizData === gad2Data) {
        interpretation = interpretGad2Score(score);
    } else if (quizData === phq2Data) {
        interpretation = interpretPhq2Score(score);
    }

    resultElement.textContent = interpretation;

    submitBtn.style.display = "none";
    nextBtn.style.display = "none";
    resultElement.style.display = "block";
}

/*function interpretPhq9Score(score) {
    if (score <= 4) {
        return "Your PHQ-9 score suggests minimal depression symptoms.";
    } else if (score <= 9) {
        return "Your PHQ-9 score suggests mild depression symptoms.";
    } else if (score <= 14) {
        return "Your PHQ-9 score suggests moderate depression symptoms.";
    } else if (score <= 19) {
        return "Your PHQ-9 score suggests moderately severe depression symptoms.";
    } else {
        return "Your PHQ-9 score suggests severe depression symptoms.";
    }
}*/

function interpretGad7Score(score) {
    if (score <= 4) {
        return "Your GAD-7 score suggests minimal anxiety symptoms.";
    } else if (score <= 9) {
        return "Your GAD-7 score suggests mild anxiety symptoms.";
    } else if (score <= 14) {
        return "Your GAD-7 score suggests moderate anxiety symptoms.";
    } else {
        return "Your GAD-7 score suggests severe anxiety symptoms.";
    }
}

function interpretAuditScore(score) {
    if (score <= 7) {
        return "Your AUDIT score suggests low-risk alcohol use.";
    } else if (score <= 15) {
        return "Your AUDIT score suggests hazardous alcohol use, with potential for dependence.";
    } else if (score <= 19) {
        return "Your AUDIT score suggests harmful alcohol use, with high likelihood of dependence.";
    } else {
        return "Your AUDIT score suggests likely alcohol dependence.";
    }
}

function interpretCageAidScore(score) {
    if (score === 0) {
        return "Your CAGE-AID score suggests no indication of substance abuse.";
    } else if (score === 1) {
        return "Your CAGE-AID score suggests low likelihood of substance abuse.";
    } else if (score <= 2) {
        return "Your CAGE-AID score suggests moderate likelihood of substance abuse.";
    } else {
        return "Your CAGE-AID score suggests high likelihood of substance abuse.";
    }
}

function interpretMiniScore(score) {
    if (score === 0) {
        return "Your MINI score suggests no indication of psychiatric disorders.";
    } else if (score === 1) {
        return "Your MINI score suggests low likelihood of psychiatric disorders.";
    } else if (score <= 3) {
        return "Your MINI score suggests moderate likelihood of psychiatric disorders.";
    } else {
        return "Your MINI score suggests high likelihood of psychiatric disorders.";
    }
}

function interpretGad2Score(score) {
    if (score === 0) {
        return "Your GAD-2 score suggests no indication of generalized anxiety disorder.";
    } else if (score === 1) {
        return "Your GAD-2 score suggests low likelihood of generalized anxiety disorder.";
    } else if (score <= 2) {
        return "Your GAD-2 score suggests moderate to high likelihood of generalized anxiety disorder.";
    }
}

function interpretPhq2Score(score) {
    if (score === 0) {
        return "Your PHQ-2 score suggests no indication of depression.";
    } else if (score === 1) {
        return "Your PHQ-2 score suggests low likelihood of depression.";
    } else if (score === 2) {
        return "Your PHQ-2 score suggests high likelihood of depression.";
    }
}

function interpretPhq9Score(score) {
    let solution = "";
    if (score <= 4) {
        solution = "Minimal or No Depression (0-4):";
        solution += "\nSuggested Solution: Aim for at least 10-15 minutes of meditation daily. ";
        solution += "Consider practicing yoga, incorporating asanas (poses) that focus on relaxation and stress reduction, ";
        solution += "such as Child's Pose (Balasana) or Corpse Pose (Shavasana).";
    } else if (score <= 9) {
        solution = "Mild Depression (5-9):";
        solution += "\nSuggested Solution: Engage in 20-30 minutes of meditation and yoga sessions at least three times a week. ";
        solution += "Include asanas that improve mood, like Bridge Pose (Setu Bandha Sarvangasana) or Tree Pose (Vrikshasana). ";
        solution += "Consider therapy or counseling.";
    } else if (score <= 14) {
        solution = "Moderate Depression (10-14):";
        solution += "\nSuggested Solution: Prioritize daily meditation and yoga practice, aiming for 30-45 minutes. ";
        solution += "Include a variety of asanas that promote mental well-being, such as Sun Salutations (Surya Namaskar) or ";
        solution += "Warrior II (Virabhadrasana II). Consider therapy, counseling, or medication.";
    } else if (score <= 19) {
        solution = "Moderately Severe Depression (15-19):";
        solution += "\nSuggested Solution: Commit to daily meditation and yoga sessions lasting 45 minutes to an hour. ";
        solution += "Focus on asanas that boost energy and positivity, such as Camel Pose (Ustrasana) or Fish Pose (Matsyasana). ";
        solution += "Seek immediate professional help, including therapy, medication, and consultation with a mental health professional.";
    } else {
        solution = "Severe Depression (20-27):";
        solution += "\nSuggested Solution: Prioritize daily meditation and yoga practices for at least an hour. ";
        solution += "Include meditation techniques like mindfulness and loving-kindness meditation. ";
        solution += "Incorporate a wide range of asanas for emotional balance and strength. ";
        solution += "Urgently seek professional intervention.";
    }
    return solution;
}
