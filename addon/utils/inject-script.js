import Ember from 'ember';

export default function injectScript(src) {
  return new Ember.RSVP.Promise(function(resolve,reject) {
    var script    = document.createElement('script');
    script.type   = 'text/javascript';
    script.async  = true;
    script.src    = src;
    script.onload = function() { resolve(); };

    try{
      document.getElementsByTagName('head')[0].appendChild(script);
    }catch(error){
      reject();
    }

  });
}
