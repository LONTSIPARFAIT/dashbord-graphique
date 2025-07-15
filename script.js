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

    // Section Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Initialize active section
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById('statistics').classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');

            // Hide all sections and remove active class from links
            sections.forEach(section => section.classList.remove('active'));
            navLinks.forEach(link => link.classList.remove('active'));

            // Show selected section and highlight link
            document.getElementById(sectionId).classList.add('active');
            link.classList.add('active');

            // Handle logout
            if (sectionId === 'logout') {
                alert('Vous avez été déconnecté.');
            }
        });
    });

    // Sidebar Toggle
    const sidebar = document.getElementById('sidebar');
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    toggleSidebarButton.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    // Theme Toggle
    const themeToggleButton = document.getElementById('themeToggle');
    themeToggleButton.addEventListener('click', () => {
        const icon = themeToggleButton.querySelector('svg');
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
            icon.innerHTML = '<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z"></path>';
            themeToggleButton.setAttribute('aria-label', 'Passer au thème clair');
        } else {
            icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
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