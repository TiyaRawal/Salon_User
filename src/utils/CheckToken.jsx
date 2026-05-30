import React, { useState } from 'react'
import cookie from 'js-cookie'

function CheckToken() {
   let token=null

    try {
        let token = cookie.get("token")
        // console.log(token);
        
        return token
    }
    catch (e) {
        return token
    }
}

export default CheckToken
