// script.js
document.getElementById('toggleMenu').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '0px' ? '250px' : '0px';
    document.getElementById('main-content').style.marginLeft = sidebar.style.width === '0px' ? '0' : '250px';
});
