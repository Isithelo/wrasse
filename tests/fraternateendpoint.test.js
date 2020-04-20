const request = require('supertest');
const express = require('express');

 
var app = 'localhost:5000'
 
var siteIndex = [{
  url: '/introduction',
  lastMod: new Date('2000-02-02'),
  changeFreq: 'weekly',
  requireslogin : false
},{
  url: '/specifications',
  lastMod: new Date('2000-02-02'),
  changeFreq: 'weekly',
  requireslogin : false
},{
  url: '/installation',
  lastMod: new Date('2000-02-02'),
  changeFreq: 'weekly',
  requireslogin : false
},{
  url: '/domain',
  lastMod: new Date('2000-02-02'),
  changeFreq: 'weekly',
  requireslogin : false
},{
  url: '/integration',
  lastMod: new Date('2000-02-02'),
  changeFreq: 'weekly',
  requireslogin : false
},{
  url: '/payments',
  lastMod: new Date('2000-02-02'),
  changeFreq: 'weekly',
  requireslogin : false
},{
  url: '/payments-paypal',
  lastMod: new Date('2000-02-02'),
  changeFreq: 'weekly',
  requireslogin : false
},{
  url: '/payments-payfast',
  lastMod: new Date('2000-02-02'),
  changeFreq: 'weekly',
  requireslogin : false
},{
  url: '/troubleshooting',
  lastMod: new Date('2000-02-02'),
  changeFreq: 'weekly',
  requireslogin : false
},{
  url: '/licence',
  lastMod: new Date('2000-02-02'),
  changeFreq: 'weekly',
  requireslogin : false
}]
 

var testlist=[]
for (var i = 0; i < siteIndex.length; i++) {
	if (siteIndex[i].requireslogin==false) {
   testlist.push(siteIndex[i].url)	
 }
}
 
 
const cases = testlist
describe("End point testing of Fraternate sitemap", () => {
  test.each(cases)(
    "given %p endpoint should return a 200.",
    async (firstArg,done) => {
    request(app)
      .get(firstArg).then(response => {
        expect(response.statusCode).toBe(200)    
        done();
      });
    }
  );
});
 

 