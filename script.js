let email = document.getElementById('email');
let submitBtn = document.getElementById('submit-btn');
let successBox = document.getElementById('success');
let container = document.getElementById('main-container');
let dismiss = document.getElementById('dismiss');
let inputtedEmail = document.getElementById('inputed-email');


submitBtn.addEventListener('click', (e) => {
    if (email.value) {
        e.preventDefault();
        setTimeout(() => {
            successBox.style.display = 'block';
            container.style.display = 'none';
        }, 1000);
        inputtedEmail.innerHTML = email.value;


    } else {
        e.preventDefault();
        email.style.border = '2px dotted red';
    }
})

dismiss.addEventListener('click', ()=> {
    inputtedEmail.innerHTML = email.value;
    container.style.display = 'flex';
    successBox.style.display = 'none';
    location.reload();
});