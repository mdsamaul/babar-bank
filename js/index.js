document.getElementById('submit-btn').addEventListener('click', function (event) {
    // console.log(('submit clink'));
    // get the email address 
    // always remeber to use .value to get text from an inpt field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // step 3: get password
    // 3.a: set the id on the html Element
    //3.b:get the element
    //3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);

    // DO NOT VERIFY EMAIL PASSWEOD ON THE CLIENT SEIDE
    //setp 4: verify email and password
    if (email === 'samaul@gmail.com' && password === 'samaul') {
        location.href = 'bank.html'
    } else {
        alert('invalid user');
    }


})