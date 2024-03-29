// GET web api, returns a list of addresses
async function getUPRN(postCode) {
  const response = await fetch(`https://api.readingdev.com/rbc/getaddresses/${postCode}`);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const json = await response.json();
  return json
}

// GET web api, returns a list of collections
async function getCollections(UPRN) {
  const response = await fetch(`https://api.readingdev.com/api/collections/${UPRN}`)

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const json = await response.json();
  return json
}