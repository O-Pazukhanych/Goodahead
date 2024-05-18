

const spoilers = document.querySelectorAll("[data-name='spoiler-title']");
spoilers.forEach(function (item) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    iconSvg.setAttribute('fill', 'none');
    iconSvg.setAttribute('viewBox', '0 0 9 15');
    iconSvg.setAttribute('width', '9');
    iconSvg.setAttribute('height', '15');
    iconSvg.classList.add('spoiler-icon');
    iconPath.setAttribute('fill', 'currentColor');
    iconPath.setAttribute('d', 'm8.3 13.3l-1.6 1.7-6.7-7.1 1.6-1.6 6.7 7m-8.3-6.2l1.6 1.7 6.7-7.1-1.6-1.7-6.7 7.1')
    iconSvg.appendChild(iconPath);
    item.getElementsByTagName("span").item(0).appendChild(iconSvg);

    item.addEventListener("click", headerClick);

});

function headerClick() {
    this.classList.toggle('_active');
    this.nextElementSibling.classList.toggle("_active");
}