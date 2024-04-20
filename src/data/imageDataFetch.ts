export const getImage = async () => {
    try {
        const imageData = await fetch('https://cataas.com/cat/says/:').then((res)=>res.json());
        console.log (imageData);
        return imageData

    }

    catch(error){
        console.log('error',error)
        return (error)
    }
    
}