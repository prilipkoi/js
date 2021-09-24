const form = document.querySelector('.form-test-drive');
const modalForm = document.querySelector('.modal__form');
const modalWindow = document.querySelector('.modal');

modalForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let data = {};


    for (let {name, value} of modalForm.elements) {
        if (name) {
            if (value.trim()) {
                data[name] = value;
            } else {
                alert('Не заполнено поле ' + name);
            }
        }
    }

    if (typeof (data.name) != "undefined" && typeof (data.mail) != "undefined") {

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    return response.json();
                } else {
                    throw new Error(response.status)
                }
            })
            .then(data => {
                alert('Данные успешно сохранены');
                modalWindow.classList.add('hidden');
                modalForm.reset();


            })
            .catch(error => {
                alert('Произошла ошибка, статус: ' + error.message);
            })
    }
})


form.addEventListener('submit', (event) => {
    event.preventDefault();

    let data = {};

    for (let {name, value} of form.elements) {
        if (name) {
            if (value.trim()) {
                data[name] = value;
            } else {
                alert('Не заполнено поле ' + name);
            }
        }
    }

    if (typeof (data.name) != "undefined" && typeof (data.mail) != "undefined" && typeof (data.phone) != "undefined") {

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    return response.json();
                } else {
                    throw new Error(response.status)
                }
            })
            .then(data => {
                alert('Данные успешно сохранены');
                form.reset();
            })
            .catch(error => {
                alert('Произошла ошибка, статус: ' + error.message);
            })
    }
})
