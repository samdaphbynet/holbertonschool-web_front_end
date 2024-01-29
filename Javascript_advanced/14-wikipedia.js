// function to create a paragraph element and append it to the body element
function createElement(data) {
    const ParaElement = document.createElement("p");
    ParaElement.innerHTML = data;
    document.body.appendChild(ParaElement);
}

// function to fetch the data from Wikipedia and call the calback with exstract
function queryWikipedia(callback) {
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"

    const xhttpRrequest = new XMLHttpRequest();

    xhttpRrequest.open("GET", url, true);

    xhttpRrequest.onload = function() {
        if (xhttpRrequest.status >= 200 && xhttpRrequest.status < 400) {
            const response = JSON.parse(xhttpRrequest.responseText);
            const pages = response.query.pages;
            const extract = pages[Object.keys(pages)[0]].extract;
            
            // call the calback with exstract
            callback(extract);
        } else {
            console.log('Error fetching data from Wikipedia')
        }
    };

    xhttpRrequest.onerror = function() {
        console.log("Network error while fetching data from wikipedia")
    }

    xhttpRrequest.send();
}

// Call function queryWikipedia with createElement as callback
queryWikipedia(createElement);