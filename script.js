/*jomana mahmoud elsaghier
20230247*/
document.addEventListener('DOMContentLoaded', function() {
    var themeToggle = document.getElementById('themeToggle');
    var themeLink = document.getElementById('theme');
    var selectedTheme = localStorage.getItem('selectedTheme') || 'theme1.css';
    themeLink.setAttribute('href', selectedTheme);
    function switchTheme() {
        var newTheme = (themeLink.getAttribute('href') === 'theme1.css') ? 'theme2-1.css' : 'theme1.css';
        themeLink.setAttribute('href', newTheme);
        localStorage.setItem('selectedTheme', newTheme);
    }
    themeToggle.addEventListener('change', function() {
        switchTheme();
    });
  });
