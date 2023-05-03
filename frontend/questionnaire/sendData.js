const form = document.querySelector('.form');
const input = document.querySelectorAll('.input');
const btn = document.querySelector('.form__btn')

const inputName = document.querySelector('.input__name');
const inputLang = document.querySelector('.input__lang');
const inputAbout = document.querySelector('.input__about');

const url = '';
btn.addEventListener('click', (e) => {
    e.preventDefault();

    const data = {
        personName: inputName.value,
        programmLanguage: inputLang.value,
        about: inputAbout.value,
    };
    sendData(url, data);
});

async function sendData(url, data) {
    const res = fetch(url, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data),
    });
    return res
};