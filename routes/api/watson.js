const express = require('express'); 
const router = express.Router(); 
const AssistantV2 = require('ibm-watson/assistant/v2'); 
const {IamAuthenticator} = require('ibm-watson/auth')



//1. Authenticate

const authenticator = new IamAuthenticator({
    apikey:process.env.WATSON_ASSISTANT_APIKEY,
}); 

//2. Connect Assistant
const assistant = new AssistantV2({
    version: '2021-02-11', 
    authenticator: authenticator,
    url: process.env.WATSON_ASSISTANT_URL

})
