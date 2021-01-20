pokeheight.addEventListener('submit', e => {
    e.preventDefault();
    switch(e.target.elements["unit"].value) {
        case 'meters':
            height.innerText = `${pokeHeight / 10} meters`
            break;
        case 'imperial':
            height.innerText = `${pokeHeight * 3.937} inches`
            break;
        case 'decimeters':
            height.innerText = `${pokeHeight} decimeters`
            break;
        default:
            console.log('that is an incorrect measurment')
    }
})