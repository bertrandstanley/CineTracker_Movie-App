import { CardData } from "../interfaces/CardData";

const getDetailPosters = async (reqData: number) => {
    const requestBody = {
        MovieID : reqData,
    };

    // Send the POST request with the JSON stringified requestBody.
    const response = await fetch(`/api/details/fetch`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    });

    const data = await response.json();
    const newCardData: CardData = {
        MovieID: data.reqData,
        Title: data.original_title,
        Poster: data.poster_path,
    };
    console.log(newCardData);
    
    return newCardData;
}

export { getDetailPosters };