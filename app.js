

const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "my name is nafis",
            courseGoalB: "my name is Zamil",
            vueLink: 'https://vuejs.org/'
        };
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber <0.5){
                return this.courseGoalA ;
        }
        else{
            return this.courseGoalB; 
        }
    }
}
});

app.mount('#user-goal');
