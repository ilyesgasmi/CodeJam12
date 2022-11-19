import axios from 'axios';

export default {
    data(){
        return{
            recipeData: [],
            recipeInputText: '',
            file1:null,
            url:null,
            food: null,
        }
    },
    watch:{
        file1: function(value){
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
        getFoodCV: async function(food) {
            var image = ""
            await this.getBase64Image(this.file1).then((r) => {image=r;})
            function escapeRegExp(str) { return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); }
            image = image.replace(new RegExp(escapeRegExp("data:image/")+'(.*?)'+escapeRegExp(";base64,")), '');
            console.log("image:", image)
            const myBody= 
            {
                "requests":[
                  {
                    "image":{
                      "content": image
                    },
                    "features":[
                      {
                        "type":"WEB_DETECTION",
                        "maxResults":5
                      }
                    ]
                  }
                ]
            }
            
            await fetch('https://vision.googleapis.com/v1/images:annotate/?key=AIzaSyCivHbxHRi6zlAgu-ebIT7feom-dl-ThcU', {
                method: 'POST',
                body: JSON.stringify(myBody),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json()).then((results) => {
                this.food = results.responses[0].webDetection.webEntities.map((x) => [x.description, x.score])
            })
            console.log(this.food)
            
        },
        getBase64Image: function(file) {
            return new Promise(function (resolve, reject) {
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result)
                reader.onerror = (error) => reject('Error: ', error);
          })
        }
    },
    mounted(){
        this.getRecipe();
    }
}