# API Challenge 2

In this challenge, your task is to test the Petfinder API

## Sign up for a free API Key

https://www.petfinder.com/developers/

## Follow docs for getting authenticated

https://www.petfinder.com/developers/v2/docs/

## What you will be building

* Create `npm` script for running petfinder api tests with mocha
* Provide at least two test cases that prove the request behavior works as intended
* Provide at least two test cases that prove the response behavior works as intended
* Provide at least one test case that demonstrates boundary based testing
* Provide at least one negative test case

## Validating Your Results

As you build our your testing suite, you will want to verify that the suite is behaving as expected. 
Make sure to execute your npm scripts to run your tests.

## The System Under Test

https://api.petfinder.com/v2


### Example request

Here are the endpoints that can be used - https://www.petfinder.com/developers/v2/docs/#endpoints

Given a type of animal, you can make a GET call to the API to get the types of that animal.

```
curl -L -X GET 'https://api.petfinder.com/v2/types/Dog' -H 'Authorization: Bearer ...'
```

### Response

The response to the above request is a JSON that should adhere to the following schema:

```
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "type": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "coats": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "colors": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "genders": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ]
        },
        "_links": {
          "type": "object",
          "properties": {
            "self": {
              "type": "object",
              "properties": {
                "href": {
                  "type": "string"
                }
              },
              "required": [
                "href"
              ]
            },
            "breeds": {
              "type": "object",
              "properties": {
                "href": {
                  "type": "string"
                }
              },
              "required": [
                "href"
              ]
            }
          },
          "required": [
            "self",
            "breeds"
          ]
        }
      },
      "required": [
        "name",
        "coats",
        "colors",
        "genders",
        "_links"
      ]
    }
  },
  "required": [
    "type"
  ]
}
```

If needed, you can find their OpenAPI spec [here](https://www.petfinder.com/developers/v2/docs/#developer-resources)
