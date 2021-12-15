
/* tab navigation */
var tabBar = new mdc.tabBar.MDCTabBar(document.querySelector('#bottom_app_bar'));

/* drawer */
var drawer = new mdc.drawer.MDCDrawer(document.querySelector('.mdc-drawer'));
//const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

/* drawer open function */
function drawer_open(){
    drawer.open = !drawer.open;
}

/* list on drawer */
var list = new mdc.list.MDCList(document.querySelector('.mdc-list'));

/* ripple for good button */
/*const buttonRipple = new mdc.ripple.MDCRipple(document.querySelector('.good_diary'));*/
//↑つかないのでやめた