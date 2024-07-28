// import Vuex, { mapActions } from "vuex";
import { toRaw } from "vue";
import { createStore } from "vuex";
const store = createStore({
  state: {
    userData: JSON.parse(sessionStorage.getItem("User")),
    NUR: null,
    displaySpinnerPage: true,
    siteAlarms: null,
    displayDialog: false,
    dialogMessage: "",
    showUnauthenticatedToast:false,
  },
  getters: {
    isLogin(state) {
      return state.userData;
    },
    token(state) {
     
      if (state.userData) {
        let userToken = state.userData.token.plainTextToken;
        
        return userToken;
      } else {
        let userToken = null;

        return userToken;
      }
    },
    // isSuperAdmin(state) {
      
    //   if(state.userData)
    //   {
    //     let userRoles= state.userData.roles;
    //     userRoles=toRaw(userRoles);
    //     if (userRoles) {
       
    //       let userRole = null;
    //       userRole=userRoles.filter((role) => {
    //         return role.name == "super-admin";
    //       });
         
    //       if (userRole.length>0) {
          
    //         return true;
    //       } else {
    //         return false;
    //       }
  
    //     }
    //     else {
    //       return false;
  
    //     }

    //   }
    //   else
    //   {
    //     return false;
    //   }
     

     
    // },
    // isAdmin(state) {
     
    //   if(state.userData)
    //   {
    //     let userRoles= state.userData.roles;
    //     userRoles=toRaw(userRoles);
    //     if (userRoles) {
       
    //       let userRole = null;
    //       userRole=userRoles.filter((role) => {
    //         return role.name == "admin";
    //       });
         
    //       if (userRole.length>0) {
    //         return true;
    //       } else {
    //         return false;
    //       }
  
    //     }
    //     else {
    //       return false;
  
    //     }

    //   }
    //   else{
    //     return false
    //   }
    

     
    // },
    userName(state) { 
    if (state.userData) {
        let userName = state.userData.user.name;
    
    
        return userName;
      } else {
        let userName = null;
        return userName;
      }
    },
    showUnauthenticatedToast(state)
    {
      return state.showUnauthenticatedToast;
    }
  },
  mutations: {
  
    USER_DATA(state, user) {
      state.userData = user;
    },
    // USER_PERMISSIONS(state, permissions) {
    //   state.userPermissions = permissions;
    // },
    // USER_Roles(state, Roles) {
    //   state.userRoles = Roles;
    // },
    CHANGE_TIME_OUT(state, status) {
      state.sessionTimeOut = status;
    },
    SET_NUR(state, nur) {
      state.NUR = nur;
    },
    DISPLAY_SPINNER(state, status) {
      state.displaySpinnerPage = status;
    },
    SITE_ALARMS(state, alarms) {
      state.siteAlarms = alarms;
    },
    DISPLAY_DIALOG(state, status) {
      state.displayDialog = status;
    },
    DIALOG_MESSAGE(state, message) {
      state.dialogMessage = message;
    },
    SHOW_UNAUTH_TOAST(state,status)
    {
      state.showUnauthenticatedToast=status;
    }
  },
  actions: {
  
    userData({ commit }, user) {
      commit("USER_DATA", user);
    },
    // userPermissions({ commit }, permissions) {
    //   commit("USER_PERMISSIONS", permissions);
    // },
    // userRoles({ commit }, roles) {
    //   commit("USER_Roles", roles);
    // },
    setNUR({ commit }, NUR) {
      commit("SET_NUR", NUR);
    },
    displaySpinnerPage({ commit }, status) {
      commit("DISPLAY_SPINNER", status);
    },
    siteAlarms({ commit }, alarms) {
      commit("SITE_ALARMS", alarms);
    },
    displayDialog({ commit }, status) {
      commit("DISPLAY_DIALOG", status);
    },
    dialogMessage({ commit }, message) {
      commit("DIALOG_MESSAGE", message);
    },
    showUnauthToast({commit},status)
    {
      commit("SHOW_UNAUTH_TOAST",status)
    }
  },
});
export default store;
