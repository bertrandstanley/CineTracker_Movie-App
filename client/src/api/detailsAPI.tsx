import { CardData } from "../interfaces/CardData";
import { CardDetails } from "../interfaces/CardDetails";

const getDetails = async (cardData: CardData) => {
    const requestBody = {
        MovieID: cardData.MovieID,
    };
    const responseTMDB = await fetch(`/api/details/fetch`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    });
    const data = await responseTMDB.json();
    const detailsData : CardDetails = {};
    detailsData.Title = data.original_title;
    detailsData.BackdropLink = data.backdrop_path;
    detailsData.Overview = data.overview;
    const date = new Date(data.release_date);
    detailsData.Year = date.getFullYear().toString();
    const ytReqBody = {
        title: detailsData.Title,
    };
    const responseYT = await fetch(`/api/details/yt`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ytReqBody),
    });
    const ytData = await responseYT.json();
    detailsData.TrailerLink = ytData.videoLink;
    console.log(detailsData);
    return detailsData;
}

export { getDetails };

