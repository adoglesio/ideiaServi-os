async function tempo(request, response) {
    const dynamicDate = new Date();

    const subscribersResponse = await fetch("https://api.convertkit.com/v3/subscribers?api_secret=%3Cyour_secret_api_key%3E&from=2016-02-01&to=2015-02-28")
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.total_subscribers;
    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos
    });
}
export default tempo;
