let key = "";
import fetch from 'node-fetch';
const url = "https://api.policeroleplay.community/v1"


export const erlc = {

//a
  /**
   * Set the key for the erlc module.
   * @param {string} newKey - The new key to set.
   */
  setKey(newKey) {
    key = newKey;
  },

  /**
   * Get the currently set key for the erlc module.
   * @returns {string} The currently set key.
   */
  getKey() {
    return key;
  },

  /**
   * Fetch the server status from the ERLC API.
   * @returns {Promise<object>} The server status.
   */
  async serverStatus() {
    const response = await fetch(url + "/server") 
    if (response.status !== 200) {
      throw new Error("Failed to fetch server status. Maybe check your API key?");
    }
    return response.json();
  }
};
