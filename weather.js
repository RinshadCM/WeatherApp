function bclick() {

    place = placeid.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=5b4bee0ba241d092159faf007e166080`).then(d => d.json().then(res => displaydata(res)))

}

function home(){
    window.location.href='index.html'
}

function displaydata(details) {



    cityname = details.name
    type = details.sys.type
    main = details.weather[0].main
    humidity = details.main.humidity
    windspeed = details.wind.speed
    sunrise = details.sys.sunrise
    sunset = details.sys.sunset

    dater = new Date(sunrise * 1000)
    sr = dater.toLocaleTimeString()

    dates = new Date(sunset * 1000)
    ss = dates.toLocaleTimeString()


    temperature = Math.floor(details.main.temp - 273)

    htmldata = ` 
    <div id="bodyw" class="test1 movetop">
    <div class="container-fluid px-1 px-sm-3 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="row card0">
            <div class="card1 col-lg-8 col-md-7">
                <h2>Weather App</h2>
                <div class="text-center">
                    <img class="image mt-5" src="./img/image-balloon.jpg">
                </div>
                <div class="row px-3 mt-3 mb-3">
                    <h1 id="temp1" class="large-font mr-3">${temperature}&#176;</h1>
                    <div class="d-flex flex-column mr-3">
                        <h2 id="city" class="mt-3 mb-0">${cityname}</h2>
                    </div>
                    <div class="d-flex flex-column text-center">
                        <h3 class="fa fa-sun-o mt-4"></h3>
                        <h4 id="main1">${main}</h4>
                    </div>
                </div>
            </div>
            <div class="card2 col-lg-4 col-md-5">
                <div class="mr-5">
                    <div class="line my-5"></div>

                    <p>Weather Details</p>
                    <div class="row px-3">
                        <p class="light-text">Humidity</p>
                        <p id="humid" class="ml-auto">${humidity}%</p>
                    </div>
                    <div class="row px-3">
                        <p class="light-text">Wind Speed</p>
                        <p id="wind" class="ml-auto">${windspeed} m/s</p>
                    </div>
                    <div class="row px-3">
                        <p class="light-text">Sunrise</p>
                        <p id="srise" class="ml-auto">${sr}</p>
                    </div>
                    <div class="row px-3">
                        <p class="light-text">Sunset</p>
                        <p id="sset" class="ml-auto">${ss}</p>
                    </div>
                    <div class="row px-3">
                        <p class="light-text">Type</p>
                        <p id="wtype" class="ml-auto">${main}</p>
                    </div>

                    <div class="line mt-3"></div>
                    <div>
                            <button onclick="home()" type="button" class="btn btn-warning text-center mt-5 ms-4">Search Another Location</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`


    showf.innerHTML = htmldata
    hidef.style.display= "none"



}
