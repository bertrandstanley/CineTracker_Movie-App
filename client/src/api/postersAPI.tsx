import { PosterReqData } from "../interfaces/PosterReqData";
import { CardData } from "../interfaces/CardData";

const getPosters = async (reqData: PosterReqData) => {
    const requestBody = {
        Year: reqData.Year || null,
        Genre: reqData.Genre || null,
    };

    // Send the POST request with the JSON stringified requestBody.
    const response = await fetch(`/api/posters/${reqData.Type}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    const newCardDataArray: CardData[] = [];
    data.results.forEach((element: any) => {
        const newCardData: CardData = {
            MovieID: element.id,
            Title: element.title,
            Poster: element.poster_path,
        };
        newCardDataArray.push(newCardData);
    });

    for (const element of newCardDataArray) {
        const ytReqBody = {
            title: element.Title,
        };
    
        const responseYT = await fetch(`/api/details/yt`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ytReqBody),
        });
    
        const ytData = await responseYT.json();
        element.Trailer = ytData.videoLink;
    }
    console.log(newCardDataArray)
    return newCardDataArray;
}

export { getPosters };