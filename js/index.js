const getcity = () => {

    const key = '35f5323bb60ecabb19892853492274a4'
    const city = document.getElementById('input-search').value
    document.getElementById('input-search').value=''
   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(res => res.json())
        .then(data => displayInfo(data))
}


const displayInfo=(city)=>{
    console.log(city);
    document.getElementById('city-name').innerText=city.name
    document.getElementById('weather-temp').innerText=(city.main.temp-273).toFixed(2)
    
    city.weather.forEach(cloud => {
        document.getElementById('weather-cloud').innerText= cloud.main;
    });
    city.weather.forEach(icons => {
        const imgSrc=`https://openweathermap.org/img/wn/${icons.icon}@2x.png`
        document.getElementById('weather-img').src=imgSrc
    });
}