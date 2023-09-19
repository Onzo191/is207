const createHeader = () => {
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    
    // Create list items and links
    const menuItems = ['Home', 'Products', 'About', 'Contact'];
    menuItems.forEach(itemText => {
        ul.innerHTML += `
            <li>
                <a href="${itemText.toLowerCase()}.html">${itemText}</a>
            </li>
        `;
    });
    
    nav.appendChild(ul);
    header.appendChild(nav);
    
    return header;
}

export default createHeader;