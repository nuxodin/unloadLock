# unloadLock
Unload Manager, a small script to prevent unload
- managing multiple "lockers"
- ~200 Bytes (compressed, brotli)

# test

<a href="./test.html">test-page</a>


# ussage

import unload from unloadLock/index.js

```js
input.addEventListener('input', event=>{
  const savePromise = safeTheValue(input.value);
  unload.lock(savePromise);
});

// or

input.addEventListener('input', event=>{
  const release = unload.lock();
  safeTheValue(input.value).then(function(){
    release();
  });
});
```
