import axios from 'axios';

export default {
    data(){
        return{
            loadList: false,
            file1:null,
            url:null,
            foodList: [],
            cardList: [],
        }
    },
    watch:{
        file1: function(value){
            this.url=URL.createObjectURL(value)
        }
    },
    methods: {
        getRecipe: async function (foods) {
            this.cardList = []
            for(let i=0;i<foods.length;i++){
                const options = {
                    method: 'GET',
                    url: 'https://edamam-recipe-search.p.rapidapi.com/search',
                    params: {q: foods[i]},
                    headers: {
                    'X-RapidAPI-Key': '302a938f71msh3c77bb164219defp1d9019jsn5124e0265a6f',
                    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
                    }
                };
                axios.request(options).then((response) => {
                    this.cardList.push(response.data)
                }).catch((error) => {
                    console.error(error);
                });
            }
            this.loadList = true
            console.log(this.cardList)
        },
        getFoodCV: async function(foodList) {
            var image = ""
            await this.getBase64Image(this.file1).then((r) => {image=r;})
            function escapeRegExp(str) { return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"); }
            image = image.replace(new RegExp(escapeRegExp("data:image/")+'(.*?)'+escapeRegExp(";base64,")), '');
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
                this.foodList = results.responses[0].webDetection.webEntities.map((x) => x.description)
            })
            this.getRecipe(this.foodList)
            
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
    }
}