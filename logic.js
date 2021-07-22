// const weatherLviv = "http://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=3f152ae62a9f057cdb1a9851e3b676cd"
function showWeather(element) {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=3f152ae62a9f057cdb1a9851e3b676cd&units=metric")
        .then(
            function(response) {
                // Examine the text in the response
                response.json().then(function(data) {
                    document.getElementById(element).innerHTML = `${data.weather[0].description} in ${data.name}. t: ${data.main.temp}°C`;
                });
            }
        )
}

let co = 1;

function move() {
    let elem = document.getElementById('train')
    if (co == 1) {
        elem.style.left = '30%'
        elem.classList.add('back');
        co++
    } else {
        elem.style.left = '-30%'
        elem.classList.remove('back');
        co--
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

let colors = ['red', 'purple', 'green', 'pink', 'yellow', 'grey', 'orange', 'lightgrey', 'brown', 'lightblue', 'blue', 'white', 'black']
let count = 0

function colorChange() {
    let color = document.getElementById('color_select').value;
    console.log(color)
    document.body.style.background = color
}

function color() {
    document.body.style.background = colors[count];
    if (count == colors.length - 1) {
        count = 0
    } else {
        count++
    }
}