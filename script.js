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
const nextBtn = document.getElementById('next');
const result = document.getElementById('result');

let currentQuestion = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    const optionsHtml = q.options.map(opt => {
        const inputType = Array.isArray(q.answer) ? "checkbox" : "radio";
        return `<label>
                    <input type="${inputType}" name="option" value="${opt}"> ${opt}
                </label><br>`;
    }).join('');

    quiz.innerHTML = `
        <div class="question-block">
            <p><strong>Q${currentQuestion + 1}:</strong> ${q.question}</p>
            ${optionsHtml}
        </div>
    `;
    result.innerHTML = "";
    nextBtn.innerText = currentQuestion === quizData.length - 1 ? "Submit" : "Next";
}

// Handle Next / Submit button
nextBtn.addEventListener('click', () => {
    const q = quizData[currentQuestion];
    const selected = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(i => i.value);

    // Validate selection
    if (selected.length === 0) {
        alert("Please select at least one answer!");
        return;
    }

    // Check if answer is correct
    let isCorrect;
    if (Array.isArray(q.answer)) {
        isCorrect = q.answer.length === selected.length && q.answer.every(ans => selected.includes(ans));
    } else {
        isCorrect = selected[0] === q.answer;
    }

    // Show feedback
    result.style.color = isCorrect ? "green" : "red";
    result.innerText = isCorrect ? "✅ Correct!" : "❌ Wrong!";

    // Move to next question immediately when user clicks Next again
    nextBtn.onclick = () => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            quiz.innerHTML = "<h2>🎉 Quiz Completed!</h2>";
            nextBtn.style.display = "none";
            result.innerText = "";
        }
    };
});

// Load first question
loadQuestion();
