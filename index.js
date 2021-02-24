var lockers = new Set();

addEventListener('onbeforeunload',e=>{
  if (lockers.size) {
    e.preventDefault();
    return '';
  }
})

export const unload = {
  lock(promise){
    var release = () => lockers.delete(release);
    lockers.add(release);
    if (promise) promise.then(release)
    return release;
  }
};
