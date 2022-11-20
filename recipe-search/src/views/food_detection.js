import axios from 'axios';
import { useWindowSize } from 'vue-window-size';

export default {
    setup() {
        const { width, height } = useWindowSize();
        return {
          windowWidth: width,
          windowDivHeight: height,
        };
      },
    data(){
        return{
            showModal: false,
            loadList: false,
            loading: false,
            modalValue: {},
            modalTitle: '',
            file1:null,
            url:null,
            foodList: [],
            cardList: [],
            modalState: false,
            windowWidth: 0,
            windowDivHeight:0,
        }
    },
    watch:{
        file1: function(value){
            this.url=URL.createObjectURL(value)
        }
    },
    methods: {
        capitalize: function(a) {
            var str = ""
            a.forEach((x,i) => {
                str = str + (x.charAt(0).toUpperCase() + x.slice(1))
                if(i<a.length-1) {
                    str = str + ", "
                }
            })
            console.log(a, "became", str)
            return str
            
        },
        notDuplicate: function(a, index) {
            if(this.cardList.map(x=>{return x.hits[0].recipe.label}).includes(a.hits[0].recipe.label)){
            } else{
                this.cardList.splice(index, 0, a)
            }

        },
        getRecipe: async function (foods) {
            this.cardList = []
            for(let i=0;i<foods.length;i++){
                const options = {
                    method: 'GET',
                    url: 'https://edamam-recipe-search.p.rapidapi.com/search',
                    params: {q: foods[i]},
                    headers: {
                    'X-RapidAPI-Key': 'fb3a814d64mshef4fc2c04aeb9c9p142573jsne0eddf7d0f35',
                    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
                    }
                };
                axios.request(options).then((response) => {
                    this.notDuplicate(response.data, foods.indexOf(foods[i]));
                }).catch((error) => {
                    console.error(error);
                });
            }
           
            this.loadList = true
            this.loading=false
        },
        getFoodCV: async function(foodList) {
            this.loading=true
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
        },
        modalUpdate: function(food, title){
            this.modalValue = food
            this.modalTitle = title
            this.modalState = true
            console.log(this.modalValue);
        }
    },
    mounted(){
   }
}