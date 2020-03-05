base_url = "http://localhost:3000/a_cappella_groups"

fetch(base_url)
.then(resp =>resp.json())
.then(data => newData(data))

function newData(data){

    let college = document.getElementById('college')
    let group = document.getElementById('group-name')
    let membership = document.getElementById('membership')
    let division = document.getElementById('division')
    let winnerLi = document.getElementById('winnerLi')

 data.forEach(item => {

 let tdCollege = document.createElement('li')
 tdCollege.innerHTML=`
 <tr>${item.college.name}</tr>
 `
 college.appendChild(tdCollege)
 })

 data.forEach(item => {

    let tdMemb = document.createElement('li')
    tdMemb.innerHTML=`
    <tr>${item.membership}</tr>
    `
    membership.appendChild(tdMemb)
 })
 data.forEach(item => {

    let tdDivision = document.createElement('li')
    tdDivision.innerHTML=`
    <tr>${item.college.division}</tr>
    `
    division.appendChild(tdDivision)
 })

 data.forEach(item => {

    let tdGroup = document.createElement('li')
    tdGroup.innerHTML=`
    <tr>${item.name}</tr>
    `
    group.appendChild(tdGroup)
 })

 data.forEach(item => {

    let tdWinner = document.createElement('li')
    tdWinner.innerHTML=`
    <td><button id="winnerB" data-id='${item.id}'/> winner</button></td> </tr>
    <tr>
    `
    winnerLi.appendChild(tdWinner)

    
 })

//  let button = document.getElementById('winnerB')
 winnerLi.addEventListener("click", function(event){

   let collegeId =parseInt(event.target.dataset.id)

     fetch(`${base_url}/${collegeId}` )
     .then(resp => resp.json())
     .then(data => { 
        // let collegeName = data.college.name

        let WinnerBanner = document.getElementById('winner')
        WinnerBanner.innerText = `Winner: ${data.college.name}`
     })  
})

}//newData

