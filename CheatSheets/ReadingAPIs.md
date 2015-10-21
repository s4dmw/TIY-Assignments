### Reading APIs: Firebase & Restangular

#### Firebase REST

We'll need somewhere to save our data for this week's application, and we don't have a ready API that can provide the data for us. Looks like we'll have to make our own with Firebase! Start with [the Firebase REST API docs](https://www.firebase.com/docs/rest/) and delve into the supporting documentation as necessary.

 * What operations does the Firebase REST API support?
 * Do I need to authenticate with Firebase to read or create data?
 * What format does Firebase expect data to be in?

#### Restangular

While we could totally use `$http` to interact with our Firebase apps, [the Restangular library](https://github.com/mgonto/restangular) makes interacting with [REST-ful APIs](https://en.wikipedia.org/wiki/Representational_state_transfer) _much_ easier. The whole API for Restangular fits in a single `README`, so start looking over that.

 * How do I configure a REST-ful API like Github?
 * How would I request a list of...
   * ...Repos for the class Org?
   * ...Issues for the class Repo?
   * ...Issues for a specific Milestone?

#### `ngRouter` aka `angular-route`

The simplest library for routing URLs to Controller code and loading templates is `ngRouter`, which comes as the `angular-route` package from Bower. Take some time to review the API for `$routeProvider` and the examples in the official documentation.

 * How do I define...
   * ...a route for my application with `ngRouter`?
   * ...dynamic pieces (params) to routes?
   * ...the template to load for a route?
   * ...the controller to trigger for a route?
 * How do I retrieve...
   * ...the params from a route in a controller?
   * ...the controller for a route in the view?
