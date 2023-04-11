const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];
const apiUrl= 'https://randomuser.me/api?results=60' 
getData()

filter.addEventListener('input',(e)=>{
    filterData(e.target.value)
})
async function getData(){
    const res = await fetch(apiUrl)
    const data = await res.json()
    //clear result
    result.innerHTML = ''
    const results = data.results

    results.forEach(user => {
        const li = document.createElement('li')
        listItems.push(li)
        li.innerHTML = `
        <img src="${user.picture.medium}" alt="${user.name.first}">
        <div class="user-info">
            <h4> ${user.name.first} ${user.name.last}</h4>
            <p> ${user.location.city} ${user.location.country}</p>
        </div>
        `
        result.appendChild(li)
    });
}

const filterData = (searchTerms)=>{
    listItems.forEach(item =>{
        if(item.innerText.toLowerCase().includes(searchTerms.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide')
        }
    })
}
