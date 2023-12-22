import { useEffect, useState } from "react";
import axios from "axios";


const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {

 
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function generator() {
        setLoading(true);

        const output = await axios.get( tag ? `${url}&tag=${tag}` : url );
        setGif(output.data.data.images.downsized_large.url);
        setLoading(false);
    }

    useEffect(() => {
        generator();
    }, []);


    return [gif, generator, loading]; 
    
};

export default useGif;
