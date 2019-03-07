## Routes

### Snippets

```
GET + POST /snippets/add?{tag=[must-add-tag]}
GET + POST /snippets/mod/:id
GET /snippets/del/:id
GET /snippets{?tag=[filter-tag]} <-- optional
```

### Tags
```
GET + POST /tags/add
GET + POST /tags/mod/:id
GET /tags/del/:id
GET /tags
```

### General

```
GET + POST /login
GET /logout
GET /
```

## Middlewares

```
authMW <-- redirects when not logged in
logoutMW
loginMW

getSnippetListMW <-- gets snippet list out of database (with filters)
getSnippetMW <-- gets a single snippet out of the database (by id)
validateSnippetMW <-- validates post data
updateSnippetMW <-- gets post data and writes it to db
deleteSnippetMW <-- deletes a specific snippet

getTagListMW <-- gets tag list out of database
getTagMW <-- gets a single tag out of the database (by name)
validateTagMW <-- validates post data
updateTagMW <-- gets post data and writes it to db
deleteTagMW <-- deletes a specific snippet

resolveTagsMW <-- gets the snippet post data and calls updateTagMW for each new tag

renderMW <-- templating middleware
```

<span style="color:#bb2244">**We don't delete tags in resolveTagsMW not asked for, only add them!**</span>