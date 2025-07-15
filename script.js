document.addEventListener('DOMContentLoaded', () => {
    // Initialize Chart.js
    const ctx = document.getElementById('scoreChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['0-50', '51-60', '61-70', '71-80', '81-90', '91-100'],
            datasets: [{
                label: 'Répartition des Notes',
                data: [10, 20, 30, 40, 35, 15],
                backgroundColor: 'rgba(44, 62, 80, 0.7)',
                borderColor: 'rgba(44, 62, 80, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Nombre d\'Étudiants'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Tranches de Notes'
                    }
                }
            }
        }
    });

    // Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    toggleSidebarButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Theme Toggle
    const themeToggleButton = document.getElementById('themeToggle');
    themeToggleButton.addEventListener('click', () => {
        const icon = themeToggleButton.querySelector('i');
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            themeToggleButton.setAttribute('aria-label', 'Passer au thème clair');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            themeToggleButton.setAttribute('aria-label', 'Passer au thème sombre');
        }
    });

    // Simulate dynamic data update
    setInterval(() => {
        document.getElementById('average-score').textContent = Math.floor(Math.random() * (95 - 80 + 1)) + 80;
        document.getElementById('pass-rate').textContent = Math.floor(Math.random() * (85 - 70 + 1)) + 70 + '%';
        document.getElementById('student-count').textContent = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    }, 5000);
});