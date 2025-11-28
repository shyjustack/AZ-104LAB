const quizData = [
    {
        question: "You configure peering between MyVNetPrd and MyVNetDev. Once the peering is established, you try to route traffic from MyVNetPrd to an on-premises network that is connected to MyVNetDev through a VPN Gateway. However, the traffic is not being routed.\n\nWill enabling 'Use Remote Gateway' on the MyVNetPrd peering configuration resolve this issue?",
        options: ["Yes", "No"],
        answer: "Yes"
    },
    {
        question: "You are securing your virtual network in Azure. Which of the following practices would be effective for establishing secure communication paths within your virtual network and controlling inbound and outbound traffic?",
        options: [
            "Associate an NSG with the subnet.",
            "Implement Azure Bastion for every virtual machine in the network.",
            "Set up security rules in NSGs to define source, destination, and allowed traffic."
        ],
        answer: [
            "Associate an NSG with the subnet.",
            "Set up security rules in NSGs to define source, destination, and allowed traffic."
        ]
    }
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result');

let currentQuestion = 0;

function loadQuestion() {
    quiz.innerHTML = "";
    quizData.forEach((q, index) => {
        const optionsHtml = q.options.map(opt => {
            const inputType = Array.isArray(q.answer) ? "checkbox" : "radio";
            return `<label>
                        <input type="${inputType}" name="option${index}" value="${opt}"> ${opt}
                    </label><br>`;
        }).join('');

        quiz.innerHTML += `<div class="question-block">
                               <p><strong>Q${index + 1}:</strong> ${q.question}</p>
                               ${optionsHtml}
                            </div><hr>`;
    });
    result.innerHTML = "";
}

submitBtn.addEventListener('click', () => {
    let allCorrect = true;

    quizData.forEach((q, index) => {
        const selected = Array.from(document.querySelectorAll(`input[name="option${index}"]:checked`)).map(i => i.value);

        let isCorrect;
        if (Array.isArray(q.answer)) {
            isCorrect = q.answer.length === selected.length && q.answer.every(ans => selected.includes(ans));
        } else {
            isCorrect = selected[0] === q.answer;
        }

        if (!isCorrect) allCorrect = false;
    });

    if (allCorrect) {
        result.style.color = "green";
        result.innerText = "✅ All answers are correct!";
    } else {
        result.style.color = "red";
        result.innerText = "❌ Some answers are wrong. Please check again!";
    }
});

// Load all questions on page load
loadQuestion();
