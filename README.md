## Br0ker
**by Perry Eising**

Proof of concept using Algolia search, Netlify and GatsbyJS

### Introduction

Br0ker is an open source project aimed at providing a set of resources for underrepresented people in tech. Consider Br0ker a clearing house of information relevant for URMs, such as conferences with travel grants, scholarships, webinars, slack channels and other resources to help diverse candidates succeed.

### What this project is currently

At time of writing, this is just a simple website that serves as a proof of concept. Resources are collected and vetted by me, while Algolia provides the search mechanism.

### Future features
More on this soon.

### Data Model

The standard data model for an entry into the database looks like this and should be fairly self explanatory. As the project grows, there will be a more useful object hierarchy that more appropriately covers a variety of different resoures.

```
{
  "resource_type": "Slack Channel",
  "url": "http://someurl.com",
  "organization": "Company  or Organization Name",
  "date_added": 2018-09-11T13:54:15-07:00,
  "tags": ["diversity","hiring", "other", "tags", "here"],
  "note": "a brief comment on this resource"
}
```

### License
MIT.

### Contact

Open an issue or ping @perrysetgo on twitter.
