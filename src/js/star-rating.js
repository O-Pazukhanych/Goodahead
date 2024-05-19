const ratingChecking = (root, element, className) => {
    for (let i = 0; i < root.childElementCount; i++) {
        if (root.children.item(i).getElementsByTagName('input')[0].value <= element.value)
            root.children.item(i).getElementsByTagName('svg')[0].classList.add(className);
        else
            root.children.item(i).getElementsByTagName('svg')[0].classList.remove(className);
    }
}

const ratingRoots = document.getElementsByClassName('rating');
for (let i = 0; i < ratingRoots.length; i++) {
    for (let j = 0; j < ratingRoots.item(i).dataset.stars; j++) {
        const root = document.createElement('div');
        root.classList.add('rating-root');
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
        const iconPath = document.createElementNS('http://www.w3.org/2000/svg','path');
        iconSvg.setAttribute('fill', 'none');
        iconSvg.setAttribute('viewBox', '0 0 940.688 940.688');
        iconSvg.classList.add('rating-mark');
        iconPath.setAttribute('fill', 'none');
        iconPath.setAttribute('stroke', 'currentColor');
        iconPath.setAttribute('stroke-width', '100');
        iconPath.setAttribute('d', 'M885.344,319.071l-258-3.8l-102.7-264.399c-19.8-48.801-88.899-48.801-108.6,0l-102.7,264.399l-258,3.8\n' +
            '\t\tc-53.4,3.101-75.1,70.2-33.7,103.9l209.2,181.4l-71.3,247.7c-14,50.899,41.1,92.899,86.5,65.899l224.3-122.7l224.3,122.601\n' +
            '\t\tc45.4,27,100.5-15,86.5-65.9l-71.3-247.7l209.2-181.399C960.443,389.172,938.744,322.071,885.344,319.071z')
        iconSvg.appendChild(iconPath);

        const ratingElement = document.createElement('input');
        ratingElement.name = `rating-${i}`;
        ratingElement.type = 'radio';
        ratingElement.value = j.toString();
        ratingElement.checked = (+ratingRoots.item(i).dataset['start_position'] - 1).toString() === j.toString() ? 'checked' : null;
        ratingElement.onclick = () => ratingChecking(ratingRoots.item(i), ratingElement, '_active');
        ratingElement.onmouseenter = () => ratingChecking(ratingRoots.item(i), ratingElement, '_hover');
        ratingElement.onmouseleave = () => {
            for (let l = 0; l < ratingRoots.item(i).childElementCount; l++) {
                ratingRoots.item(i).children.item(l).getElementsByTagName('svg')[0].classList.remove('_hover');
            }
        }
        root.appendChild(iconSvg);
        root.appendChild(ratingElement);
        ratingRoots.item(i).appendChild(root);
        if (ratingElement.checked) {
            for (let l = 0; l < ratingRoots.item(i).childElementCount; l++) {
                if (ratingRoots.item(i).children.item(l).getElementsByTagName('input')[0].value <= ratingElement.value)
                    ratingRoots.item(i).children.item(l).getElementsByTagName('svg')[0].classList.add('_active');
                else
                    ratingRoots.item(i).children.item(l).getElementsByTagName('svg')[0].classList.remove('_active');
            }
        }
    }
}