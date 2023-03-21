const lodedatatoApi = ()=>{
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
    .then(response => response.json())
    .then(data => prosesdata(data))
}
const prosesdata = (countrys)=>{
// console.log(countrys);
const allcountrisHtml = countrys.map(country=>sodataUI(country))
// console.log(allcountrisHtml);
const countris = document.getElementById('countris');
countris.innerHTML = allcountrisHtml.join(' ');
}

const sodataUI = (data)=>{ 
    // weay 1
    
// return`
// <div class="countri">
// <h2>
// ${data.name.common}
// </h2>

// <h3>${data.capital}</h3>
// <img src="${data.flags.png}" >

// </div>
// `
// way 2 use distracring
console.log(data);
const {name,flags,capital,area,region}= data;
   
return`
<div class="countri">
<h2>
${name.common}
</h2>

<h3>Capital:${capital}</h3>
<img src="${flags.png}" >
<p>Area:${area}</p>
<p>Region:${region}</p>

</div>
`
}


lodedatatoApi()
