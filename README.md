# unloadLock
Small Script to prevent unload, managing multiple "lockers"

# ussage

import unload from unloadLock/index.js

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

