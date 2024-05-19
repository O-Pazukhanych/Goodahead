const checkingInputs = document.getElementsByClassName('_input-check');
const indexList = [];
const fillingLabel = (indexList) => {
    indexList.map(index => {
        const labelList = checkingInputs.item(index).getElementsByClassName('content-label');
        for (let i = 0; i < labelList.length; i++) {
            if (checkingInputs.item(index).getElementsByTagName('input')[0].checked)
                labelList.item(i).innerHTML = `${checkingInputs.item(index).title} Active`
            else
                labelList.item(i).innerHTML = checkingInputs.item(index).title;
        }
    })
}
for (let i = 0; i < checkingInputs.length; i++) {
    fillingLabel([i]);
    checkingInputs.item(i).classList.contains('radio') ? indexList.push(i) : null;
    checkingInputs.item(i).onclick = function (e) {
        fillingLabel(checkingInputs.item(i).classList.contains('radio') ? indexList : [i]);
    };
}