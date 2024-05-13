async function predictLanguage() {
    const textInput = document.getElementById('textInput').value;
    const response = await fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: textInput })
    });
    const data = await response.json();
    document.getElementById('predictionResult').innerText = 'Predicted Language: ' + data.language;
    document.getElementById('textInput').value = ''; // Clear input
}