const getSearchedText = () => {
    const searchField = document.getElementById('search');
    const searchFieldInput = searchField.value;
    searchField.value = '';
    console.log(searchFieldInput);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchFieldInput}&appid=09438cccc1dfc14c8ea6c1fc904b982f`
    fetch(url)
    .then(res => res.json())
    .then(data => displayApi(data))
    .catch(error => displayError(error));
}

const displayError = error =>{
    console.log('jhamela hoise kichu')
}

const displayApi = (info) => {
    console.log(info)
    console.log(info.cod)

    const updateDiv = document.getElementById('update');
    updateDiv.textContent = '';
    

    if(parseInt(info.cod) === 404){
        const div = document.createElement('div');
        div.innerHTML = `
        <p>This city is not found</>
        `
        updateDiv.appendChild(div)
    }
    else if(parseInt(info.cod) == 400){
        const div = document.createElement('div');
        div.innerHTML = `
        <p>Insert something</>
        `
        updateDiv.appendChild(div)
    }
    else{
        const kelvin = 273.15;
        const div = document.createElement('div');
        div.innerHTML = `
            <h1>Weather of ${info.name} city </h1>
            <h3> Temperature ${info.main.temp - kelvin} </h3>
            <h3>${info.weather[0].main}</h3>
        `
        updateDiv.appendChild(div)
    }
    
}