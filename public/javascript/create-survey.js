async function newSurveyHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#survey-title').value;

    const response = await fetch(`/api/survey`, {
        method: 'post',
        body: JSON.stringify({
            title
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
};

async function addQuestion(event){
    event.preventDefault();

    const question = document.querySelector('#question-title').value
    const response = await fetch(`/api/question`, {
        method: 'post',
        body: JSON.stringify({
            title
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

document.querySelector('.create').addEventListener('submit', newSurveyHandler);