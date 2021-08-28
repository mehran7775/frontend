export default function(contex){
  if(!contex.store.state.auth.loggedIn){
    contex.redirect('/sign')
  }
}
