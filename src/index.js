import 'src/index.html';
import 'src/index.scss';
import 'src/js/menu';
import 'src/js/inputs-controll';
import 'src/js/star-rating';
import 'src/js/swiper';
import 'src/js/spoilers';

const header = document.getElementsByTagName('header').item(0);
const headerSearch = document.getElementById('header-search');
const searchClone = headerSearch.cloneNode(true);
const searchCloneBody = document.createElement('div');
searchCloneBody.classList.add('_container');

const children = [...searchClone.childNodes];
children.forEach(function(item){
    const cln = item.cloneNode(true);
    searchCloneBody.appendChild(cln);
    item.remove();
});
searchClone.setAttribute('id', 'header-search-clone');
searchClone.appendChild(searchCloneBody);

function myFunction(query) {
    if (query.matches) {
        headerSearch.classList.add('_to-icon');
        header.appendChild(searchClone);
        headerSearch.addEventListener('click', () => {
            searchClone.classList.toggle('_active')
        });
    } else {
        headerSearch.classList.remove('_to-icon');
        searchClone.remove();
    }
}

const query = window.matchMedia("(max-width: 767px)")

myFunction(query);

query.addEventListener("change", function() {
    myFunction(query);
});
