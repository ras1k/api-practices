const leagues = () =>{
    const url = `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}



leagues()