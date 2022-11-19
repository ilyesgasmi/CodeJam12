import axios from 'axios';
import { FormFilePlugin } from 'bootstrap-vue';

export default {
    components: {
        FormFilePlugin
    },
    data(){
        return{
            recipeData: [],
            recipeInputText: '',
        }
    },
    methods: {
        getRecipe: function () {
            const options = {
                method: 'GET',
                url: 'https://edamam-recipe-search.p.rapidapi.com/search',
                params: {q: 'chicken'},
                headers: {
                  'X-RapidAPI-Key': '302a938f71msh3c77bb164219defp1d9019jsn5124e0265a6f',
                  'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
                }
              };
              axios.request(options).then((response) => {
                  this.recipeData = response.data;
                  console.log(this.recipeData);
              }).catch((error) => {
                  console.error(error);
              });
        }
    },
    mounted(){
        this.getRecipe();
    }
}