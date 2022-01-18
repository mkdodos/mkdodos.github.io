import BlogPost from './BlogPost.js';
import Hello from './Hello.js';

export default {
    name: 'App',
    data() {
        return {
            mydata: "my data hello"
        }
    },
    components: {
        BlogPost,
        Hello
    },
    template: '<div>my template world!123</div><Hello></Hello>'
}