describe('Postcode search REST API test', async () => {
    it('Should return a valid response', async function() {
        console.log('over here');
        const response = await getUPRN('RG2 0AB');
        assert(response.Addresses.length == 5);
    });
});
