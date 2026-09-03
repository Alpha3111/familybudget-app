/* FamilyBudget Mobile UI — interaction helper only. Accounting logic unchanged. */
(()=>{
  function ensureFab(){
    if(window.matchMedia && !window.matchMedia('(max-width: 760px)').matches){
      document.querySelector('.mobile-fab')?.remove();
      return;
    }
    if(document.querySelector('.mobile-fab'))return;
    const b=document.createElement('button');
    b.type='button';
    b.className='mobile-fab';
    b.setAttribute('aria-label','Ajouter une dépense');
    b.innerHTML='<span class="plus">＋</span><span>Dépense</span>';
    b.addEventListener('click',()=>{
      try{ui.editId=null;ui.modal='expense';render()}catch(e){console.error(e)}
    });
    document.body.appendChild(b);
  }
  ensureFab();
  window.addEventListener('resize',ensureFab,{passive:true});
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)ensureFab()});
})();
