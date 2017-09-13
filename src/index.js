// import lu_button from './button';
// import lu_radio from './radio';
// import lu_badge from './badge';
// import lu_toast from './toast';
// import lu_switch from './switch';
// import lu_message from './message';
// import lu_messagebox from './message-box';

// import anchu_messageBox from './anchu-message-box';
// import anchu_message from './anchu-message';

// const components = [
// 	lu_button,
//   lu_radio,
//   lu_badge,
//   lu_toast,
//   lu_switch,
//   lu_message,
//   anchu_messageBox,
//   anchu_message
// ]

// const install = function(Vue) {
//   /* istanbul ignore if */
//   if (install.installed) return;
//   components.map(component => {
//     Vue.component(component.name, component);
//   });


//   Vue.prototype.$lu_toast = lu_toast;
//   Vue.prototype.$lu_message = lu_message;
//   Vue.prototype.$lu_messagebox = lu_messagebox;
//   Vue.prototype.$anchu_messageBox = anchu_messageBox;
//   Vue.prototype.$anchu_message = anchu_message;

// };

// /* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// };

// export default {
// 	install,
// 	lu_button,
//   lu_radio,
//   lu_badge,
//   lu_toast,
//   lu_switch,
//   lu_message,
//   lu_messagebox,
  
//   anchu_messageBox,
//   anchu_message
// }



import anchu_messageBox from './anchu-message-box';
import anchu_message from './anchu-message';

const components = [
  anchu_messageBox,
  anchu_message
]

const install = function(Vue) {
  /* istanbul ignore if */
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$anchu_messageBox = anchu_messageBox;
  Vue.prototype.$anchu_message = anchu_message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
    install,
  anchu_messageBox,
  anchu_message
}