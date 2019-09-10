document.addEventListener('DOMContentLoaded', function() {
    // Not a live collection: querySelectorAll
    let links = document.querySelectorAll('.nav-item > a')
    // What this does better:
    // accounts for the range of the section, and not just the first part
    // doesn't perform a qSA for every scroll
    // iterates over links instead of sections... does that make a difference?
    // will have to try an alternative to see

    // Keep an eye on selecter specificity! Which is why this didn't work initially
    window.addEventListener('scroll', event => {
        for (link of links) {
            let section = document.querySelector(link.hash);
            if (section.offsetTop <= Math.abs(window.pageYOffset) &&
                section.offsetTop + section.offsetHeight > pageYOffset) {
                    link.classList.add('nav-item-selected');
                
            } else {
                link.classList.remove('nav-item-selected')
            }
        }
    });

    links.forEach(link => {
        link.addEventListener('click', event => {
            let hash = link.getAttribute('href');
            let section = document.querySelector(hash);
            event.preventDefault();
            window.scroll({
                top: section.offsetTop,
                left: 0,
                behavior: "smooth"
            }); 
                if (Math.abs(Math.ceil(section.getBoundingClientRect().top)) === 0) {
                    console.log(section)
                    section.focus()
                    section.setAttribute('tabIndex', '-1');
                    section.focus();
                    window.history.pushState("", "", `#${section.id}`);
                }
        });
    });
});

