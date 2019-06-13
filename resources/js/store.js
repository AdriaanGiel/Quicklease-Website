import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: localStorage.getItem('token') || null,
        verified:false
    },
    getters:{
      loggedIn(state){
        return (state.token !== null && state.token !== "undefined");
      },
      getToken(state){
          return state.token;
      },
      getVerification(state){
          return state.verified;
      }
    },
    mutations:{
        SET_TOKEN(state, tok){
            console.log("token",tok);
            localStorage.setItem('token', tok);
            state.token = tok;
        },
        SET_VERIFICATION(state,ver){
            state.verified = ver;
        },
        DESTROY_TOKEN(state, call){
            if(state.token !== null){
                localStorage.removeItem('token');
                state.token = null;
                call();
            }
        }
    },
    actions:{
    }
});