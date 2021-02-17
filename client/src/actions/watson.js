//import types
import {INPUT_SUCCESS, INPUT_FAIL, SESSION_SUCCESS, SESSION_FAIL, MESSAGE_SUCCESS, MESSAGE_FAIL} from './types'
import axios from 'axios'
// function that handles the message
export const userMessage = (message) => async (dispatch) => {
    try{
        dispatch({type:INPUT_SUCCESS, payload:message})
    }catch(err){
        dispatch({type: INPUT_FAIL}); 
    }
}

// creates a session - API call to backend 




// Sends message to the bot -API call 