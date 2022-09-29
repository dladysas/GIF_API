import fs from 'fs';
import NaturalLanguageUnderstandingV1 from 'ibm-watson/natural-language-understanding/v1.js';
import { IamAuthenticator } from 'ibm-watson/auth/index.js';
import * as dotenv from 'dotenv';
dotenv.config()

const nlu = new NaturalLanguageUnderstandingV1({
  authenticator: new IamAuthenticator({ apikey: process.env.WATSON_API_KEY }),
  version: '2018-04-05',
  serviceUrl: process.env.WATSON_URL,
});

nlu.analyze (
    {
      url: 'www.giphy.com',
      features: {
        consepts: {},
        keywords: {}
      }
    }
) 
  .then(response => {
    console.log(JSON.stringify(response.result, null, 2));
  })
  .catch(err => {
    console.log('error: ', err);
  });

export default nlu