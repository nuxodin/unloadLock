# unloadLock
Unload Manager, a small script to prevent unload
- managing multiple "lockers"
- ~200 Bytes (compressed, brotli)
- Easy API

# Test

<a href="https://raw.githack.com/nuxodin/unloadLock/main/test.html">test-page</a>


# Ussage

```js
import unload from 'https://cdn.jsdelivr.net/gh/nuxodin/unloadLock@1.0.0/index.min.js';

// lock until a promise is pending

input.addEventListener('input', event=>{
  const savePromise = safeTheValue(input.value);
  unload.lock(savePromise);
});

// or use the returned release-funtion

input.addEventListener('input', event=>{
  const release = unload.lock();
  safeTheValue(input.value).finally(release);
});

// lock / release by context

checkbox.addEventListener('change', function(e){
  unload.setLock(this, this.checked);
});

```

# Help
I am glad for any help and be it only text corrections.  
Share and Star, tnx!
