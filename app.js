

const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish this course',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber <0.5){
                return "Learn Vue!";
        }
        else{
            return "Get a job as a developer"; 
        }
    }
}
});

app.mount('#user-goal');
