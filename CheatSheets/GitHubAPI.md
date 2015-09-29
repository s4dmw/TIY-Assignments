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
