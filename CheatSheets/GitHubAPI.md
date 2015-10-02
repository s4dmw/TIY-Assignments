# [GitHub API](https://developer.github.com/v3/)

## [Authentication](https://developer.github.com/v3/#authentication)

> Do I need to authenticate?

  Yes - if the request requires authentication.
  Requests that require authentication will return 404 Not Found, instead of 403 Forbidden, in some places. This is to prevent the accidental leakage of private repositories to unauthorized users.
  Authentication will also allow you to make more requests per hour.

> What can I do with an unauthenticated request?

  get the basic public information from the API

> What _can't_ I do with an unauthenticated request?

  get the full profile information available to registered users

> How can I authenticate my request?

1. Basic Authentication - using your GitHub username and password
```
curl -u "<username>" https://api.github.com/  //then enter your password
```
2. OAuth2 Token - sent in a header
If you have two-factor authentication enabled, the API will return a 401 Unauthorized error code.
```
curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
```
3. OAuth2 Token - sent as a parameter
```
$ curl https://api.github.com/?access_token=OAUTH-TOKEN
```

## [Users](https://developer.github.com/v3/users/)

> How do I ask the API for the profile information for a specific user?

```
# GET /users/:username
```
```
$ curl https://api.github.com/users/<username>
```
> How do I ask the API for the repository listing for a specific user?

```
# GET /repos/:owner/:repo
```
```
$ curl -i https://api.github.com/users/<username>/repos
```
> How do I ask the API for the recent, public activity for a specific user?

```
GET /users/:username/events/public
```

## [Rate-limiting](https://developer.github.com/v3/#rate-limiting)

> Is there a limit to the number of requests I can make?

using basic authentication or OAuth - 5,000 requests per hour
Unauthenticated - 60 requests per hour

> Is there a way of extending that limit?

If your OAuth application needs to make unauthenticated calls with a higher rate limit, you can pass your app’s client ID and secret as part of the query string.

> What happens when I hit the limit?

you get an error message:
```
HTTP/1.1 403 Forbidden
Date: Tue, 20 Aug 2013 14:50:41 GMT
Status: 403 Forbidden
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1377013266

{
    "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
    "documentation_url": "https://developer.github.com/v3/#rate-limiting"
}
```

## [Pagination](https://developer.github.com/guides/traversing-with-pagination/)

> What if there is a _lot_ of data returned

it will bee paginated to 30 items by default

> How can I ask for more (or less) data from a request?

you can specify a custom page size up 100
```
$ curl 'https://api.github.com/user/repos?page=2&per_page=100'
```

> How do I know that there is more data available?

you will see `rel="next"` indicating that there are more pages


# Endpoints

## What are the endpoints for:
-  fetching the profile data for a user?

    `https://api.github.com/users/USERNAME
`
- the organizations a user belongs to?

    `https://api.github.com/users/USERNAME/orgs
`
- the repositories a user has created?

  `https://api.github.com/users/USERNAME/repos
`
- a filtered list of repositories?

  `https://api.github.com/users/USERNAME/repos?filter="FILTER-OPTION"
`

  #### filter-options -
    - assigned: Issues assigned to you
    - created: Issues created by you
    - mentioned: Issues mentioning you
    - subscribed: Issues you’re subscribed to updates for
    - all: All issues the authenticated user can see, regardless of participation or creation
    - Default: assigned


- a sorted list of repositories?

  `https://api.github.com/users/USERNAME/repos?sort="SORT-OPTION"
`

  #### sort options -
  - created
  - updated
  - comments
  - Default: created


- public events for a user?

  `https://api.github.com/users/USERNAME/events
`

#fetching

## When fetching public events for a user
- How many results are returned by default?

    30 items

- What limitations exist on fetching more results?

    Fetching up to ten pages is supported, for a total of 300 events.

- What is the basic structure of the results?

    dictionary

- What fields are included in each result?
```
Status: 200 OK
Link: <https://api.github.com/resource?page=2>; rel="next",
      <https://api.github.com/resource?page=5>; rel="last"
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4999
[
  {
    "type": "Event",
    "public": true,
    "payload": {
    },
    "repo": {
      "id": 3,
      "name": "octocat/Hello-World",
      "url": "https://api.github.com/repos/octocat/Hello-World"
    },
    "actor": {
      "id": 1,
      "login": "octocat",
      "gravatar_id": "",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "url": "https://api.github.com/users/octocat"
    },
    "org": {
      "id": 1,
      "login": "github",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/github",
      "avatar_url": "https://github.com/images/error/octocat_happy.gif"
    },
    "created_at": "2011-09-06T17:26:27Z",
    "id": "12345"
  }
]
```
- What are the data types for each field?

    strings

- What are some of the different values for the type field?
  - IssueCommentEvent
  - PushEvent
  - PullRequestEvent
  - DeleteEvent


## How can I use the Github API to:

#### get all the comments for a particular issue?

`GET /repos/:OWNER/:REPO/issues/:number/comments`

`$ curl https://api.github.com/repos/:OWNER/:REPO/issues/:number/comments`
  - Issue Comments are ordered by ascending ID.
  - Parameters: `since` - only comments updated at/after this time are returned. format: YYYY-MM-DDTHH:MM:SSZ

#### add a comment to an issue?
`POST /repos/:OWNER/:REPO/issues/:NUMBER/comments`
where the input is in the form: `{ "body": "COMMENTS" }`


# [jQuery API](http://api.jquery.com)

#### get the HTML contents of an element?
[.html()](http://api.jquery.com/html/)

Gets the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.

  ex: `$.("span.span-class").html()` returns the html contents of the first span element with a class of "span-class"
- `.html(htmlstring)` - sets the contents of each matched element to the inputed HTML string

  ex: `$.("span.span-class").html("<p>all new content</p>")` will set the content of all span elements with a class of "span-class" to `<p>all new content</p>`

- `.html(function)` - A function returning the HTML content to set. Receives the index position of the element in the set and the old HTML value as arguments.

#### create a _new_ HTML element?

- i could not find a "good" jQ command to do this...yet

[.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
creates the specified HTML element

#### add an HTML element to the page?
[.add(elements)](https://api.jquery.com/add/#add-elements)
One or more elements to add to the set of matched elements.


# [Lodash API](http://lodash.com/docs/)

#### replace placeholders with values from an object?
[_.fill](https://lodash.com/docs/#fill)
`_.fill(array, value, [start=0], [end=array.length])`

- Fills elements of array with value from start up to, but not including, end.


#### repeat code for every item of an array?
[_.forEach](https://lodash.com/docs/#forEach)
`_.forEach(collection, [iteratee=_.identity], [thisArg])`

- Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg and invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.



-----------------

[the `Promise` interface](http://www.html5rocks.com/en/tutorials/es6/promises/)  

[how `XmlHttpRequest` and "Ajax" techniques work](http://teamtreehouse.com/library/ajax-basics)

[`jQuery.ajax`](http://api.jquery.com/jQuery.ajax/)

[official documentation for `Promise` in the MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[the documentation for Kris Kowal's `Q` library](http://documentup.com/kriskowal/q/)
