let email = document.getElementById('email');
let submitButton = document.getElementById('s-btn');
let container = document.getElementById('container');
let success = document.getElementById('success');
let dismiss = document.getElementById('dismiss-msg');


submitButton.addEventListener('click', (e) => {
    if (email.value == '') {
        e.preventDefault();
        alert('Enter Email...')

    } else {
        e.preventDefault();
        setTimeout(() =>{
            success.style.display = 'block';
            container.style.display = 'none';
        }, 1000)
    }
})

dismiss.addEventListener('click', () => {
    container.style.display = 'flex';
    success.style.display = 'none';
})