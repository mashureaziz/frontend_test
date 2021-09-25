const welcome = document.querySelector('.welcome');
const error = document.querySelector('.error');
const dashUrl = '/api/dashboard';

(async function fetchContent() {
    const response = await fetch(dashUrl,{
        credentials: 'include'
    });
    try {
        if(!response.ok) throw new Error('Not authorized');
        const data = await response.text();
        welcome.textContent = data;
    } catch(err) {
        error.textContent = err.message;
    }
})();
