import axios from 'axios';

export default {
    data(){
        return{
            recipeData: [],
            recipeInputText: '',
            file1:null,
            url:null
        }
    },
    watch:{
        file1: function(value){
            console.log("hello", value)
            this.url=URL.createObjectURL(value)
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
        },
    },
    mounted(){
        this.getRecipe();
    }
}