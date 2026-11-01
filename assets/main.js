// Shared menu, search and logo behaviour
(function(){
  var $ = id => document.getElementById(id);
  $('hamburger').onclick = () => $('menu').classList.toggle('open');
  $('searchBtn').onclick = () => { $('searchBar').classList.toggle('open'); $('searchBar').querySelector('input').focus(); };
  $('moreBtn').onclick = e => { e.stopPropagation(); $('dropdown').classList.toggle('open'); };
  document.addEventListener('click', () => $('dropdown').classList.remove('open'));

  // Show the text logo if images/logo.png hasn't been added yet
  document.querySelectorAll('.logo img').forEach(function(img){
    function fail(){ img.parentNode.classList.add('no-img'); img.style.display='none'; }
    img.addEventListener('error', fail);
    if (img.complete && img.naturalWidth === 0) fail();
  });
})();
