// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');
    const popup = document.getElementById('popup');

    keys.forEach(key => {
        key.addEventListener('mouseenter', (e) => {
            const shortcut = e.target.dataset.shortcut;
            popup.textContent = shortcut;
            popup.style.display = 'block';
            popup.style.left = `${e.pageX}px`;
            popup.style.top = `${e.pageY}px`;
        });

        key.addEventListener('mouseleave', () => {
            popup.style.display = 'none';
        });
    });
});

