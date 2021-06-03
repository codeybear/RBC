
async function getUPRN(postCode) {
  const response = await fetch(`https://api.readingdev.com/rbc/getaddresses/${postCode}`);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const json = await response.json();
  return json
}

function getCollections(UPRN) {
  fetch(`https://api.readingdev.com/api/collections/${UPRN}`)
  .then(response => response.json());
}