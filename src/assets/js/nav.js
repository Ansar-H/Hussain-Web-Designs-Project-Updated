// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// mobile nav toggle code - ALTERNATIVE SOLUTION
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
    const dropdownIcon = item.querySelector('.cs-drop-icon');
    
    // Add click event only to the dropdown icon, not the entire link
    if (dropdownIcon) {
        dropdownIcon.addEventListener('click', (e) => {
            // Only handle dropdown behavior on mobile/tablet
            if (window.innerWidth <= 1023.5) {
                e.preventDefault();
                e.stopPropagation(); // Prevent event bubbling to the link
                
                // Toggle this dropdown
                item.classList.toggle('cs-active');
                
                // Close other dropdowns
                dropDowns.forEach(otherDropdown => {
                    if (otherDropdown !== item) {
                        otherDropdown.classList.remove('cs-active');
                    }
                });
            }
        });
    }
}

// after scrolling down 100px, add .scroll class to the #cs-navigation
document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
        document.querySelector('#cs-navigation').classList.add('scroll')
    } else {
        document.querySelector('#cs-navigation').classList.remove('scroll')
    }
});