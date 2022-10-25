const credentials = require("./credentials.json");

class CredentialsProvider { 

  /**
   * Get the user credentials by type
   * @param {String} credentialsType 
   */
  byType(credentialsType) { 
    let creds = credentials.filter(credentials => credentials.type == credentialsType)[0];
    return { user: creds.user, pass: creds.password };    
  }
}

module.exports = new CredentialsProvider();