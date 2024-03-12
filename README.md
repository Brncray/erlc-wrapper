# erlc-wrapper
# Detailed documentation can be found [here](https://docs.brncray.me/product-guides/er-lc-api-wrapper)

# Getting Started

```js
import { erlc } from 'erlc-wrapper'

erlc.setKey("API-KEY")

console.log(await erlc.joinLogs()); 
console.log(await erlc.serverStatus());
console.log(await erlc.getQueue()); 
console.log(await erlc.getModCalls()); 
console.log(await erlc.getKillLogs());
```
**NOTE THAT THERE MUST BE A 5 SECOND DELAY IN-BETWEEN CALLS PER PRC'S API LIMITS**
