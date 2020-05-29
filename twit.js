var Twit = require('twit');

var TwitInstance = new Twit({
  consumer_key: 'GvvycMWwfFtESgj9xz6W3rvCE',
  consumer_secret: 'wK3vogvwl8z1iGANuEYydY9dFJ7ttxfylh4qGB8SUyttmYXj7b',
  access_token: '2424652652-9zwWx1iynMsMHHP3WKFjzkLkoeUSaxwqw56MsDL',
  access_token_secret: 'beqB36XtgG4hD95ASsxidwytrIWvE90MdyZGRihq6SPmz',
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

module.exports = TwitInstance;
