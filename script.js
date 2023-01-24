const slider = document.getElementById('viewslider')
let cost = document.getElementById('dollar')
let views = document.getElementById('views')
const date = document.getElementById('date')
let selector = 1
let billSwitch = document.getElementById('switch')

validate()

billSwitch.addEventListener('change', validate)

function validate() {
    if (billSwitch.checked == false) {
        runSliderMonth ()
        slider.addEventListener('mouseup', runSliderMonth)
        slider.addEventListener('mousedown', runSliderMonth)
        slider.addEventListener('mousemove', runSliderMonth)
        slider.removeEventListener('mouseup', runSliderYear)
        slider.removeEventListener('mousedown', runSliderYear)
        slider.removeEventListener('mousemove', runSliderYear)
    } else {
        runSliderYear ()
        slider.addEventListener('mouseup', runSliderYear)
        slider.addEventListener('mousedown', runSliderYear)
        slider.addEventListener('mousemove', runSliderYear)
        slider.removeEventListener('mouseup', runSliderMonth)
        slider.removeEventListener('mousedown', runSliderMonth)
        slider.removeEventListener('mousemove', runSliderMonth)
    }
}

function runSliderMonth() {
    views.innerHTML = (slider.value * 6250)
    cost.innerHTML = '$' + (slider.value) + '.00'
    date.innerHTML = '/ month'
}

function runSliderYear() {
        views.innerHTML = (slider.value * 6250)
        cost.innerHTML = '$' + (slider.value*10) + '.00'
        date.innerHTML = '/ year'
}

