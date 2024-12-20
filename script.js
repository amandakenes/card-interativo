document.getElementById('card-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let valid = true;

    const name = document.getElementById('cardholder-name').value;
    const nameError = document.getElementById('name-error');
    if (!name) {
        valid = false;
        nameError.textContent = 'O nome do titular não pode estar vazio';
    } else {
        nameError.textContent = '';
    }

    const cardNumber = document.getElementById('card-number').value.replace(/\s+/g, '');
    const numberError = document.getElementById('number-error');
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumber || !cardNumberRegex.test(cardNumber)) {
        valid = false;
        numberError.textContent = 'O número do cartão deve ter 16 dígitos';
    } else {
        numberError.textContent = '';
    }

    const expiryDate = document.getElementById('expiry-date').value;
    const expiryError = document.getElementById('expiry-error');
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDate || !expiryRegex.test(expiryDate)) {
        valid = false;
        expiryError.textContent = 'A data de validade deve estar no formato MM/AA';
    } else {
        expiryError.textContent = '';
    }

    const cvc = document.getElementById('cvc').value;
    const cvcError = document.getElementById('cvc-error');
    if (!cvc || cvc.length !== 3) {
        valid = false;
        cvcError.textContent = 'O CVC deve ter 3 dígitos';
    } else {
        cvcError.textContent = '';
    }

    if (valid) {
        document.getElementById('card-number-display').textContent = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 ');
        document.getElementById('card-name-display').textContent = name;
        document.getElementById('card-expiry-display').textContent = expiryDate;
        document.getElementById('card-form').style.display = 'none';
        document.getElementById('completed-state').style.display = 'block';
    }
});

document.getElementById('continue-btn').addEventListener('click', function () {
    document.getElementById('card-form').reset();
    document.getElementById('card-form').style.display = 'block';
    document.getElementById('completed-state').style.display = 'none';
});

document.querySelector('.card-front').addEventListener('mouseover', function () {
    document.querySelector('.card-container').classList.add('flipped');
});

document.querySelector('.card-front').addEventListener('mouseout', function () {
    document.querySelector('.card-container').classList.remove('flipped');
});
