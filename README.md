# unloadLock
Unload Manager, a small script to prevent unload
- managing multiple "lockers"
- ~200 Bytes (compressed, brotli)
- Easy API

# test

<a href="https://raw.githack.com/nuxodin/unloadLock/main/test.html">test-page</a>


# ussage

```js
import unload from 'https://cdn.jsdelivr.net/gh/nuxodin/unloadLock@1.0.0/index.min.js';

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
