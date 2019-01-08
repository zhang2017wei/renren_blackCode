var el = document.querySelector('body button')
var show;

function set(show){
  el.innerHTML = show ? 'hide' : 'show';
  el.className = show ? 'hide' : 'show';
}
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  chrome.tabs.sendMessage(tabs[0].id, {cmd: 'ask'}, function(response){
    show = response;
    set(show)
  });
});


function sendMessageToContentScript(message, callback){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
}


el.addEventListener('click', e => {
  sendMessageToContentScript({cmd:'test', value: !show});
  show = !show;
  set(show)
})