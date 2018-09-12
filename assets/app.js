var search = instantsearch({
  // Replace with your own values
  appId: '55952TRASK',
  apiKey: '64f940e390f637b748f6806b6f33e619', // search only API key, no ADMIN key
  indexName: 'broker_resources',
  urlSync: true,
  searchParameters: {
    hitsPerPage: 10
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);
search.start();
console.log("here"); 
