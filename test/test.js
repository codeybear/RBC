// mocha unit testing

describe('Postcode search REST API test', async () => {
    it('Should return a list of addresses', async function() {
        const response = await getUPRN('RG2 0AB');
        assert(response.Addresses.length == 5);
    });
});

describe('Postcode search REST API test', async () => {
    it('Should return no addresses', async function() {
        const response = await getUPRN('OX1 1ND');
        assert(!response.Addresses);
    });
});

describe('Collections search REST API test', async () => {
    it('Should return a list of collections', async function() {
        const response = await getCollections('310045409');
        assert(response.collections.length == 12);
    });
});

