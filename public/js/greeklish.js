/* Greek/Latin-insensitive "skeleton" for pharmacy search: Στρόβολος, Strovolos and STROVOLOS all become "strovolos";
   Λεμεσός and Lemesos match, Λάρνακα matches LARNACA, Πάφος matches PAFOS / Paphos. */
(function(){
  var M={'α':'a','β':'v','γ':'g','δ':'d','ε':'e','ζ':'z','η':'i','θ':'th','ι':'i','κ':'k','λ':'l','μ':'m','ν':'n','ξ':'x','ο':'o','π':'p','ρ':'r','σ':'s','ς':'s','τ':'t','υ':'y','φ':'f','χ':'ch','ψ':'ps','ω':'o'};
  var ALIAS=[['limassol','lemesos'],['nicosia','lefkosia'],['paphos','pafos'],['larnaca','larnaka'],['famagusta','ammochostos']];
  window.ahavaSkeleton=function(s){
    s=(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    s=s.replace(/μπ/g,'b').replace(/ντ/g,'d').replace(/γκ/g,'g').replace(/γγ/g,'ng').replace(/ου/g,'ou').replace(/αυ/g,'av').replace(/ευ/g,'ev');
    s=s.replace(/[α-ω]/g,function(c){return M[c]||c});
    ALIAS.forEach(function(a){s=s.split(a[0]).join(a[1])});
    s=s.replace(/n?dz/g,'tz').replace(/ntz/g,'tz').replace(/gk/g,'g').replace(/ks/g,'x').replace(/ph/g,'f').replace(/th/g,'t').replace(/ch/g,'h').replace(/c/g,'k').replace(/ou/g,'u').replace(/[yei]+/g,'i').replace(/oi/g,'i').replace(/w/g,'o').replace(/mb/g,'b').replace(/nd/g,'d');
    s=s.replace(/([a-z])\1+/g,'$1').replace(/[^a-z0-9]/g,'');
    return s;
  };
})();
