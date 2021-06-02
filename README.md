# Reading Dev Task

Create a single page web-app will return bin collection dates for given Reading address

### Task

* Use Vue.js
* Use css framework of your choosing (Buefy preferred)
* Create a public github repository so we can see the code (Send us a link when you are done)
* Setup a SPA that will return bin collection dates for an address
    * You will need to return a `AccountSiteUprn` (Unique Property Reference Number). To do so call https://api.readingdev.com/rbc/getaddresses/{uk-postcode}. See documentation [here](https://api.reading.gov.uk/#/rbc/get_rbc_getaddresses__postcode_).
    * After a User selected an adress and you have a UPRN use RBC API https://api.readingdev.com/api/collections/{uprn} to get their bin collections for the next 7 days. See documentation [here](https://api.reading.gov.uk/v1/apidocs/#/Collections/get_api_collections__uprn_)
* Use github pages to host the app.
* Test using Chrome

### Nice to Have:

* Use Buefy elements
* Filtering of results
* Unit Test
