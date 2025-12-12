async function fetchData(params) {
    console.log("Fetching data...");

    const response = await fetch('data.json');
    const data = await response.json();
    console.log(data);
    
}
fetchData();
