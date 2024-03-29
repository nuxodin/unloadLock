// does not work in ios safari: https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event#browser_compatibility

const lockers = new Set();

addEventListener('beforeunload',e=>{
  if (lockers.size) {
    e.preventDefault();
    e.returnValue = '';
  }
});

function add(object){
  lockers.add(object);
  if (lockers.size === 1) unload.dispatchEvent(new CustomEvent('lock'));
}
function remove(object){
  lockers.delete(object);
  if (lockers.size === 0) unload.dispatchEvent(new CustomEvent('release'));
}

const unload = new EventTarget(); // do we need events? now using for the test-page

unload.lock = function(promise){
  const release = () => remove(release);
  add(release);
  if (promise) promise.finally(release);
  return release;
};
unload.setLock = function(context, state){ // does someone use setLock?
  state ? add(context) : remove(context);
};

export default unload;
