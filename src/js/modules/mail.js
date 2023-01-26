const mail = document.querySelectorAll('.form');
mail.forEach((mail, index) => {
    mail.addEventListener('submit', (e) => {
        e.preventDefault();
        const place = mail.querySelectorAll('input');
        if (place.length) {
            place.forEach(input => {
                input.classList.remove('error');
            })
            place.forEach(input => {
                if (input.value == '') {
                    input.classList.add('error');
                }
                if (input.name.toLowerCase() == 'email' && !validateEmail(input.value)) {
                    input.classList.add('error');
                }
                if (input.name.toLowerCase() == 'phone' && !validatePhone(input.value)) {
                    input.classList.add('error');
                }
            })
            let error = 0
            let name = ''
            let email = ''
            let phone = ''
            place.forEach(input => {
                if (input.classList.contains('error')) error++
            })
            if (!error) {
                place.forEach(input => {
                    if (input.name.toLowerCase() == 'name') {
                        name = input.value
                    }
                    if (input.name.toLowerCase() == 'email') {
                        email = input.value
                    }
                    if (input.name.toLowerCase() == 'phone') {
                        phone = input.value
                    }
                })
                send(name, email, phone);
                place.forEach(input => input.value = '')
            }
        }
    });
});

function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return regex.test(phone);
}

function send(name, email, phone) {
    $.ajax({
        url: '../../files/send.php',
        method: 'get',
        dataType: 'html',
        data: {
            name: name,
            email: email,
            phone: phone,
        },
        success: function (data) {
            alert('Форма отправлена');
        }
    });
}