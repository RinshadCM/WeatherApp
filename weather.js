fetch('https://api.openweathermap.org/data/2.5/weather?q=kakkanad&appid=5b4bee0ba241d092159faf007e166080').then(d=>d.json().then(res=>displaydata(res)))


function displaydata(details){
    cityname=details.name
    type=details.sys.type
    main=details.weather[0].main
    humidity=details.main.humidity
    windspeed=details.wind.speed
    sunrise=details.sys.sunrise
    sunset=details.sys.sunset

    dater=new Date(sunrise*1000)
    sr=dater.toLocaleTimeString()

    dates=new Date(sunset*1000)
    ss=dates.toLocaleTimeString()




    temperature=Math.floor(details.main.temp-273)
    htmltemp=`<h1 class="large-font mr-3">${temperature}&#176;</h1>`
    htmlcity=`<h2 class="mt-3 mb-0">${cityname}</h2>`
    htmlmain=`<h4>${main}</h4>`
    htmlhumid=`<p class="ml-auto">${humidity}%</p>`
    htmlwind=`<p class="ml-auto">${windspeed} m/s</p>`
    htmlsrise=`<p class="ml-auto">${sr}</p>`
    htmlsset=`<p class="ml-auto">${ss}</p>`
    htmltype=`<p class="ml-auto">${main}</p>`

    temp1.innerHTML=htmltemp
    city.innerHTML=htmlcity
    main1.innerHTML=htmlmain
    humid.innerHTML=htmlhumid
    wind.innerHTML=htmlwind
    srise.innerHTML=htmlsrise
    sset.innerHTML=htmlsset
    wtype.innerHTML=htmltype





    
}