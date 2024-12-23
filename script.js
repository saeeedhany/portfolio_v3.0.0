let list = document.getElementById('list');
let toggle = document.getElementById('toggle');

function toggleMenu() {
    if (list.style.display === 'block') {
        list.style.display = 'none';
    } else {
        list.style.display = 'block';
    }
}
