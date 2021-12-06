async function startSurvey(event){
    event.preventDefault();
    event.stopImmediatePropagation();
    document.location.replace();
}

document.querySelector('#startSurvey').addEventListener('click', startSurvey);