const express = require('express'); 
const router = express.Router(); 
const AssistantV2 = require('ibm-watson/assistant/v2'); 
const {IamAuthenticator} = require('ibm-watson/auth')

//1. Authenticate

const authenticator = new IamAuthenticator({
    apikey: process.env.WATSON_ASSISTANT_APIKEY,
}); 

//2. Connect Assistant
const assistant = new AssistantV2({
    version: '2019-02-28', 
    authenticator: authenticator,
    url: process.env.WATSON_ASSISTANT_URL
})

//3. Route to handle tokens 
router.get("/session", async (req, res) => {
    try{
        const session = await assistant.createSession({
            assistantId: process.env.WATSON_ASSISTANT_ID
        });
        res.json(session['result'])
    }catch(err){
        res.send("There was an error processing your request")
        console.log(err); 
    }
}); 

//4. Handle Messages
router.post("/message", async (req, res)=> {

    //construct payload

    payload = {
        assistantId: process.env.WATSON_ASSISTANT_ID,
        sessionId: req.headers.session_id, 
        input: {
            message_type:"text", 
            text: req.body.input,
        }
    }
    try {
        const message = await assistant.message(payload); 
        res.json(message["result"])
    }catch(err){
        res.send("There was an error processing your request")
        console.log(err);
    }
});


module.exports = router; 