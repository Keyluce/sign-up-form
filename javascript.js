const passwordInputOne = document.querySelector('input[id="password"]');
const passwordInputTwo = document.querySelector('input[id="confirm-password"]');

passwordInputOne.addEventListener('input', function(event) {
    if (this.value == passwordInputTwo.value && this.value != '')
    {
        passwordInputOne.classList.remove('error');
        passwordInputTwo.classList.remove('error');

    }
    else{
        passwordInputOne.classList.add('error');
        passwordInputTwo.classList.add('error');
    }

    
});


passwordInputTwo.addEventListener('input', function(event) {
    if (this.value == passwordInputOne.value && this.value != '')
    {
        passwordInputOne.classList.remove('error');
        passwordInputTwo.classList.remove('error');

    }
    else{
        passwordInputOne.classList.add('error');
        passwordInputTwo.classList.add('error');
    }

    
});







