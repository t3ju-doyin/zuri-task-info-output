const display = document.getElementById('info-display')
function personalInfo(name, height,country){
    display.innerText= `\nMy name is ${name}
    I'm ${height} tall and I'm from ${country} `
}
personalInfo('Jane Doe', '170cm', 'Australia')

