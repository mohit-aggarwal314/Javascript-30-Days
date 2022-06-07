const spacing = document.getElementById('spacing');
const bluring = document.getElementById('blurrange');
const color = document.getElementById('color');
const spanId = document.getElementById('hl');
const img = document.querySelector('img');

spacing.addEventListener('mousemove' , function(){
    let spacingValues = [];
    spacingValues = spacing.value
    img.style.padding = `${spacingValues}px ${spacingValues}px`
})

bluring.addEventListener('mousemove' , function(){
    let bluringValues = [];
    bluringValues = bluring.value
    img.style.filter = `blur(${bluringValues}px)`
})

color.addEventListener('input' , function(){
    let colorValues = [];
    colorValues = color.value
    img.style.borderColor = `${colorValues}`
    spanId.style.color = `${colorValues}`
})