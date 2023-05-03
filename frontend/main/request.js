const url = '';

request(url);

async function request(url) {
    const response = fetch(url);
    const data = JSON.stringify(response);
    return console.log(JSON.parse(data)); 
};