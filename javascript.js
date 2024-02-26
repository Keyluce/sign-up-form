
const passwordInputs = document.querySelectorAll('input[type="password"]');

passwordInputs.forEach(input => input.addEventListener('input', matchPasswords));




function matchPasswords()
{

 
    if (passwordInputs[0].value == passwordInputs[1].value && passwordInputs[0].value != '')
    {
        passwordInputs[0].classList.remove('error');
        passwordInputs[1].classList.remove('error');
    }

    else{
        passwordInputs[0].classList.add('error');
        passwordInputs[1].classList.add('error');
    }
}









