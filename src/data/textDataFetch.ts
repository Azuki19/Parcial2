
export const getText = async () => {
    try {
        const textData = await fetch('https://catfact.ninja/fact').then((res)=>res.json());
        console.log (textData);
        return textData.fact
    }
    catch(error){
        console.log('error',error)
        return (error)
    }
    
}