// const app = vue.createApp({
//     data(){
//         return {
//             courseGoal: 'FInish this course'
//     }
// }
// })

// app.mount('#user-goal');

const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish this course'
        };
    }
});

app.mount('#user-goal');
