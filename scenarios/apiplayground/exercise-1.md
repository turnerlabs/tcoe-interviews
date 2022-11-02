# API Challenge 1

In this challenge, your task is to test a simple REST API that contains information about stocks

## What you will be building

* Provide at least two test cases that prove the request behavior works as intended
* Provide at least two test cases that prove the response behavior works as intended
* Provide at least one test case that proves the request behavior does not work as intended (there's a bug)
* Provide at least one test case that demonstrates boundary based testing
* Provide at least one negative test case

## Validating Your Results

As you build our your testing suite, you will want to verify that the suite is behaving as expected. The solution is built with `npm` as it's package manager so you can run `npm run test:stocksapi` any time during your development and it will execute your tests for you.

## The System Under Test

The app engineering team has already built the first version of this api which you will test to make sure it works properly. The requirements for the API were built according to the description below.

### Request

A single route has been developed and returns back [OHLC data](en.wikipedia.org/wiki/Open-high-low-close_chart).

Given a date in the format d-mmmm-yyyy, you have to make a GET call to the given API to get the stock information for this date. 

To get the data, make an API GET call to URL 'https://localhost:3000/api/stocks?date={date}'. For example, for the date 5-January-2000, the API hit has to be https://localhost:3000/api/stocks?date=5-January-2000. Please note that the date passed to the URL must not have any leading zeroes in the day.

### Response

The response to such a request is a JSON with the following fields:

* date - date for which we have queried
* open - open value, which is a number
* high - high value, which is a number
* low - low value, which is a number
* close - close value, which is a number

An example of a stock record is as follows:

```
{
  "date": "5-January-2000",
  "open": 5265.09,
  "high": 5464.35,
  "low": 5184.48,
  "close": 5357
}
```

### Examples

#### Input

```5-January-2001```

#### Output

```
Open: 4116.34
High: 4195.01
Low: 4115.35
Close: 4183.73
```

#### Input

```5-January-2000```

#### Output

```
Open: 5265.09
High: 5464.35
Low: 5184.48
Close: 5357
```
