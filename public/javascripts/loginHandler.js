async function loggIn(event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const response = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password})
    });

    const result = await response.json();
    if (result.status === 200) {
        alert(result.message);
        window.location.href = "/beskyttet";
    } else {
        alert(result.message);
    }
}