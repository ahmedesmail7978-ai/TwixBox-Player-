/*!
 * byTwixoff loader
 * Использование:
 *   <div id="player"></div>
 *   <script src="https://bytwixoff.tatnet.app/bytwixoff.js"></script>
 *   <script>
 *     byTwixoff('#player', { search: { kinopoisk: 301 } });
 *   </script>
 */
(function(global){
  var BASE = (function(){
    var s = document.currentScript;
    if(s && s.src) return s.src.replace(/\/[^\/]*$/, '');
    return 'https://bytwixoff.tatnet.app';
  })();

  function loadCSS(href){
    if(document.querySelector('link[href="'+href+'"]')) return;
    var l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = href;
    document.head.appendChild(l);
  }

  function loadScript(src){
    return new Promise(function(resolve, reject){
      if(typeof global.kinobox === 'function'){ resolve(); return; }
      var s = document.createElement('script');
      s.src = src; s.async = true;
      s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function forceOpen(){
    document.querySelectorAll('.kinobox_menu,.kbt_list,[class*="kinobox_menu"]').forEach(function(el){
      el.classList.add('kinobox_menu_open');
    });
    document.querySelectorAll('.kbt_list ul,.kinobox_menu ul,ul.svelte-l0obux').forEach(function(ul){
      ul.style.setProperty('right','0','important');
      ul.style.setProperty('display','block','important');
      ul.style.setProperty('visibility','visible','important');
      ul.style.setProperty('opacity','1','important');
    });
  }

  function byTwixoff(selector, options){
    loadCSS(BASE + '/twixbox.css');
    loadCSS(BASE + '/kinobox.css');

    var run = function(){
      if(typeof global.kinobox !== 'function'){
        console.error('[byTwixoff] kinobox.js не загружен');
        return;
      }
      global.kinobox(selector, options || {});
      var n=0, t=setInterval(function(){ forceOpen(); if(++n>30) clearInterval(t); }, 200);
    };

    if(typeof global.kinobox === 'function'){
      run();
    } else {
      loadScript(BASE + '/kinobox.js').then(run).catch(function(){
        console.error('[byTwixoff] не удалось загрузить kinobox.js с', BASE);
      });
    }
  }

  // alias
  global.byTwixoff = byTwixoff;
  // also expose as kinobox if not present yet (after load)
  if(typeof global.kinobox !== 'function'){
    Object.defineProperty(global, 'kinobox', {
      configurable: true,
      get: function(){ return byTwixoff; },
      set: function(v){ Object.defineProperty(global, 'kinobox', {value:v, writable:true, configurable:true}); }
    });
  }
})(typeof window !== 'undefined' ? window : this);
