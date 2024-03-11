let key = "";
import fetch from "node-fetch";
const url = "https://api.policeroleplay.community/v1";

export const erlc = {
  /**
   * @module erlc
   * @description A module for interacting with the ERLC API.
   * @param {string} newKey - The key to use for the ERLC API. Obtain from your private server
   * @see {@link https://apidocs.policeroleplay.community/for-developers/api-reference}
   * @see {@link https://github.com/Brncray/erlc-wrapper}
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
    const response = await fetch(`${url}/server`, {
      headers: {
        "Server-Key": key,
      },
    });
    if (response.status === "403")
      throw new Error("Invalid KEY. 403 RATE LIMIT EXCEEDED");
    return response.json();
  },

  /**
   *
   * @param {*} command
   * @returns {json} {status: "success" | "error", message: string, data: any}
   */
  async sendCommand(command) {
    const body = {
      command: command,
    };

    try {
      const response = await fetch(`${url}/server/command`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Server-Key": key,
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error("Invalid KEY. 403 RATE LIMIT EXCEEDED");
        }
      }

      return response.json();
    } catch (error) {
      console.error("Error sending command:", error.message);
      // Handle error as needed
      return null; // Return null or some other value to indicate failure
    }
  },

  /**
   * Fetch the server logs from the ERLC API.
   * @returns {Promise<object>} The server logs.
   */
  async joinLogs() {
    const response = await fetch(`${url}/server/joinlogs`, {
      headers: {
        "Server-Key": key,
      },
    });
    if (response.status === "403")
      throw new Error("Invalid KEY. 403 RATE LIMIT EXCEEDED");
    return response.json();
  },

  /**
   * Fetch the server logs from the ERLC API.
   * @returns {Promise<object>} The server logs.
   */
  async getQueue() {
    const response = await fetch(`${url}/server/queue`, {
      headers: {
        "Server-Key": key,
      },
    });
    if (response.status === "403")
      throw new Error("Invalid KEY. 403 RATE LIMIT EXCEEDED");
    return response.json();
  },

  /**
   * Fetch the kill logs from the ERLC API.
   * @returns {Promise<object>} The server logs.
   */
  async getKillLogs() {
    const response = await fetch(`${url}/server/killlogs`, {
      headers: {
        "Server-Key": key,
      },
    });
    if (response.status === "403")
      throw new Error("Invalid KEY. 403 RATE LIMIT EXCEEDED");
    return response.json();
  },

  /**
   * Fetch the command logs from the ERLC API.
   * @returns {Promise<object>} The server logs.
   */
  async getCommandLogs() {
    const response = await fetch(`${url}/server/commandlogs`, {
      headers: {
        "Server-Key": key,
      },
    });
    if (response.status === "403")
      throw new Error("Invalid KEY. 403 RATE LIMIT EXCEEDED");
    return response.json();
  },

  /**
   * Fetch the mod calls from the ERLC API.
   * @returns {Promise<object>} The server logs.
   */
  async getModCalls() {
    const response = await fetch(`${url}/server/modcalls`, {
      headers: {
        "Server-Key": key,
      },
    });
    if (response.status === "403")
      throw new Error("Invalid KEY. 403 RATE LIMIT EXCEEDED");
    return response.json();
  },

  /**
   * Fetch the server bans from the ERLC API.
   */
  async getBans() {
    const response = await fetch(`${url}/server/bans`, {
      headers: {
        "Server-Key": key,
      },
    });
    if (response.status === "403")
      throw new Error("Invalid KEY. 403 RATE LIMIT EXCEEDED");
    return response.json();
  },
};
