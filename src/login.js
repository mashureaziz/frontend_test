const submitButton = document.getElementById('submit');
const uploadForm = document.querySelector('.login');
const signInLink = "http://localhost:3000/login";
const responseBox  = document.querySelector('.response');

submitButton.addEventListener('click', async(e) => {
    e.preventDefault();
    const formData = new FormData(uploadForm);
    try {
    const response = await fetch(signInLink, {
        method: 'POST',
        credentials: 'include',
        body : formData
    });
    if(!response.ok) {
        throw new Error('Access Denied');
    }
    const data = await response.text();
    let timeRemaining = 4;
    const redirectTimer = setInterval(handleRedirect,1000);

    function handleRedirect() {
        if(timeRemaining === 0) {
            clearInterval(redirectTimer);
            window.location.href ="dashboard.html";
        }
        else {
            responseBox.textContent = `You are being redirected in ${timeRemaining}s`;
            timeRemaining--;
        }
    }
} catch(err) {
    responseBox.textContent = err.message;
}
})

