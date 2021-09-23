const modalLink = document.querySelectorAll('.more');
const modal = document.querySelector('.modal');

console.log(modal);

modalLink.forEach(link => {
    link.addEventListener('click', () => {
        modal.classList.remove('hidden');
    })
})


modal.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden');
    }
})