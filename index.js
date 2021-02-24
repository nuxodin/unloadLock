var lockers = new Set();

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
  var release = () => remove(release);
  add(release);
  if (promise) promise.finally(release);
  return release;
};
unload.setLock = function(context, state){
  state ? add(context) : remove(context);
};

export default unload;
