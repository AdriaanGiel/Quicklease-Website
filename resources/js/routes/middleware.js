module.exports = (router,store) => {



    // Check if user is logged in;
    router.beforeEach((to,from,next) => {
        if(to.matched.some(record => record.meta.requiresAuth)){
            console.log(typeof store.getters.getToken);
            if(!store.getters.loggedIn){
                next({
                    name: 'login'
                });
            }else{
                next();
            }

        }else{
            next();
        }
    })



};