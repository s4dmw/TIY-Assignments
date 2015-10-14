### Reading APIs: Etsy
[the Etsy API documentation](https://www.etsy.com/developers/documentation)

* **How do I make API requests?**
  - https://www.etsy.com/developers/documentation/getting_started/requests#section_how_to_make_a_request_and_process_the_response
  * What is the base URL for all requests?
      - https://openapi.etsy.com/v2/
  * Are there any headers or query parameters required?
      - Many API methods take one or more parameters, either as query parameters of the URL itself, or as POST parameters. https://www.etsy.com/developers/documentation/getting_started/api_basics#section_parameter_types
  * What kind of response should I expect?
      - JSON data
      https://www.etsy.com/developers/documentation/getting_started/api_basics#section_standard_response_format


* **How does the API handle authentication?**
  * Do I _need_ to authenticate? with user credentials?
    - For write access and for accessing private user data, an OAuth access token is required. https://www.etsy.com/developers/documentation/getting_started/api_basics#section_authentication
  * What can I do with an unauthenticated request?
    - reach public endpoints
  * How can I authenticate my request? (what methods)
    - OAuth1.0 https://www.etsy.com/developers/documentation/getting_started/oauth

* **What Resource in the API represents...**
  * an individual product?
  - a listing - https://www.etsy.com/developers/documentation/reference/listing

  * a group or collection of products?
  - a shop -  https://www.etsy.com/developers/documentation/reference/shop

  * images associated with a product?
  - listing image - https://www.etsy.com/developers/documentation/reference/listingimage

  * sizes and colors for a product?
  - variations - https://www.etsy.com/developers/documentation/reference/variations_property

* **What actions and endpoints exist for each of these Resources?**

* **What parameters do each endpoint require or accept?**

* **What fields are returned for each Resource, specifically:**
  * an individual product?
  * a group or collection of products?
* **What _additional_ fields can be requested for each?**
