async function logOut() {
    const response = await fetch("/logout", {
        method: "POST",
    });
    if (response.ok) {
        alert(`Logout successful!`);
        window.location.reload();
    }
    else {
        alert(`Error logging out`);
    }
}