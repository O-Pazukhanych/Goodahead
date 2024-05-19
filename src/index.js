import 'src/index.html';
import 'src/style/index.scss'
import 'src/output.scss';
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
            headerSearch.classList.toggle('_active');
            if (headerSearch.classList.contains('_active')) {
                headerSearch.getElementsByTagName("svg").item(0).getElementsByTagName("path").item(0).setAttribute('d', 'M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z');
                headerSearch.getElementsByTagName("svg").item(0).setAttribute('viewBox', '0 0 320 320')
            }
            else {
                headerSearch.getElementsByTagName("svg").item(0).getElementsByTagName("path").item(0).setAttribute('d', 'M10,2c-4.40347,0 -8,3.59653 -8,8c0,4.40347 3.59653,8 8,8c1.75213,0 3.37052,-0.57793 4.69141,-1.54102l5.1543,5.1543c0.31352,0.32654 0.77908,0.45808 1.21713,0.34388c0.43805,-0.1142 0.78014,-0.45628 0.89433,-0.89433c0.1142,-0.43805 -0.01734,-0.90361 -0.34388,-1.21713l-5.1543,-5.1543c0.96309,-1.32088 1.54102,-2.93928 1.54102,-4.69141c0,-4.40347 -3.59653,-8 -8,-8zM10,4.5c3.05237,0 5.5,2.44763 5.5,5.5c0,3.05237 -2.44763,5.5 -5.5,5.5c-3.05237,0 -5.5,-2.44763 -5.5,-5.5c0,-3.05237 2.44763,-5.5 5.5,-5.5z');
                headerSearch.getElementsByTagName("svg").item(0).setAttribute('viewBox', '0 0 256 256')
            }
            searchClone.classList.toggle('_active');
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
