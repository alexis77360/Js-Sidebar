const sidebar = document.querySelector('#side-bar');
const content = document.querySelector('#content');

btn.addEventListener('click', () => {
    //? si la classe active existe, on la supprime, sinon on l'ajoute
    sidebar.classList.toggle('active');
});

content.addEventListener('click', () => {
    sidebar.classList.remove('active');
});
