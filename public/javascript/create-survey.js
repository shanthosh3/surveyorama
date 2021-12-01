async function newSurveyHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#survey-title').value;

    const response = await fetch(`/api/survey`, {
        method: 'POST',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const id = response.body.id;
        document.location.replace(`/create/${id}`);
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.create').addEventListener('submit', newSurveyHandler);