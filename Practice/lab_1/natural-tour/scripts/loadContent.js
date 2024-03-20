const loadContent = (file, containerId) => {
  fetch(file)
    .then((response) => response.text())
    .then((content) => {
      document.getElementById(containerId).innerHTML = content;
    })
    .catch((error) => console.error(error));
};

loadContent('content/header.html', 'header-container');
loadContent('content/sidebar.html', 'sidebar-container');
loadContent('content/footer.html', 'footer-container');
