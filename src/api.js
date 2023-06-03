import axios from "axios"; 

const searchimages  = async (args) =>{

try{
        const response = await  axios.get('https://api.unsplash.com/search/photos',{
        headers: {
                Authorization:'Client-ID h-IJv7xt96-mhZeCdhKdpmxL_zUISmn14At7nlb4990'
        },
        params:{
            query:args
        }
    });
    return response.data.results;
}
catch(error){
console.error("Error getting photos",error);
}
};
export default searchimages;