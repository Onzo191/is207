// import components
import createHeader from '../includes/header.js';
import createSidebar from '../includes/sidebar.js';
import createFooter from '../includes/footer.js';

// render
const renderLayoutComponents = () => {
    const headerContainer = document.querySelector('.header-container');
    const sidebarContainer = document.querySelector('.sidebar-container');
    const footerContainer = document.querySelector('.footer-container');
    
    if (headerContainer) {
        headerContainer.appendChild(createHeader());
    }

    if (sidebarContainer) {
        sidebarContainer.appendChild(createSidebar());
    }

    if (footerContainer) {
        footerContainer.appendChild(createFooter());
    }
}
 
// window.onload = renderLayoutComponents;