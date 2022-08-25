const btn = document.getElementById("btn");

const bookmarkList = document.getElementById('bookmarkList');

//  to create a data

btn.addEventListener("click", function () {

    var bmInput = document.getElementById('addBM').value;

    fetch('https://notes-2.p.rapidapi.com/notes-list/',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '9c8e0f0355msh16bd2ca6edd78aap16122fjsn504743e2b633',
                'X-RapidAPI-Host': 'notes-2.p.rapidapi.com'
            },
            body: JSON.stringify({ note: bmInput })
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err))
})


//to get the data with help of searchBar
const searchBar = document.getElementById('searchBM');

searchBar.addEventListener('input', function () {


    fetch('https://notes-2.p.rapidapi.com/notes-list/%7Bid%7D',
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9c8e0f0355msh16bd2ca6edd78aap16122fjsn504743e2b633',
                'X-RapidAPI-Host': 'notes-2.p.rapidapi.com'
            }
        })

        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
})