function getUPRN(postCode) {
    fetch(`https://api.readingdev.com/rbc/getaddresses/${postCode}`)
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      return data;
    })
}

function getCollections(UPRN) {
    fetch(`https://api.readingdev.com/api/collections/${UPRN}`)
    .then(response => response.json())
    .then(data => {  
      console.log('Success:', data);
      return data;
    })
}