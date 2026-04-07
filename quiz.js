function calculerScore() {
    let score = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');

    if (q1) score += parseInt(q1.value);
    if (q2) score += parseInt(q2.value);

    let message = "";

    if (score === 2) {
        message = "Bonne compréhension du sujet 👍";
    } else if (score === 1) {
        message = "Connaissances à approfondir.";
    } else {
        message = "N'hésitez pas à consulter les autres sections.";
    }

    document.getElementById("resultat").innerText = message;
}