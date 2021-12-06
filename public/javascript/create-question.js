async function addQuestion(event){
    event.preventDefault();
    event.stopImmediatePropagation();

    const surveyID = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const title = document.querySelector('input[name="question-title"]').value;
    const choices = [];
    const choiceOne = document.querySelector('input[name="choice1"]').value;
    const choiceTwo = document.querySelector('input[name="choice2"]').value;
    const choiceThree = document.querySelector('input[name="choice3"]').value;
    const choiceFour = document.querySelector('input[name="choice4"]').value;

    choices.push(choiceOne, choiceTwo, choiceThree, choiceFour);

    if (title && choices) {
        const response = await fetch(`/api/question`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                choices,
                surveyID
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};

async function doneSurvey(event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    const surveyID = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    
    document.location.replace(`/start/${surveyID}`);
}

document.querySelector('#add').addEventListener('click', addQuestion);
document.querySelector('#done').addEventListener('click', doneSurvey);