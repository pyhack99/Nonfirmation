function goToMenu() {
    window.location.href = "menu.html";
}

function goBack() {
    window.location.href = "index.html";
}

function sendRSVP() {
    const name = document.getElementById("name").value;
    const attendance = document.getElementById("attendance").value;
    const responseMessage = document.getElementById("responseMessage");

    if (!name || !attendance) {
        responseMessage.innerText = "Udfyld venligst alle felter.";
        return;
    }

    const webhookURL = "https://discord.com/api/webhooks/1476975156135067679/jYp4Vqfb4AgU6BeQ2fGnPGvlMANvHjZiPQlFkySxeCAj2oVZGvcUqg6PCApacvdYiudj"; // Skift til din webhook

    const data = {
        content: `Ny tilmelding!\nNavn: ${name}\nKommer: ${attendance}`
    };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        if (res.ok) {
            responseMessage.innerText = "Tak for din tilmelding!";
        } else {
            responseMessage.innerText = "Der skete en fejl.";
        }
    })
    .catch(() => {
        responseMessage.innerText = "Kunne ikke sende til Discord.";
    });
}