const lodedatatoApi = ()=>{
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
    .then(response => response.json())
    .then(data => prosesdata(data))
}
const prosesdata = (countrys)=>{
console.log(countrys);
const allcountrisHtml = countrys.map(country=>sodataUI(country))
console.log(allcountrisHtml);
const countris = document.getElementById('countris');
countris.innerHTML = allcountrisHtml.join(' ');
}

const sodataUI = (country)=>{ 
return`
<div class="countri">
<h2>
${country.name.common}
</h2>

<h3>${country.capital}</h3>
<img src="${country.flags.png}" >

</div>
`
}
lodedatatoApi()
