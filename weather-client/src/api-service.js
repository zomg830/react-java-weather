export class API {
    static async getWeather(lat, lon, units) {
        const resp = await fetch(`http://localhost:8080/weather?lat=${lat}&lon=${lon}&units=${units}`, {
            method: 'GET',
        });
        return await resp.json();
    }

    static handleErrors(response) {
        if (response.status !== 200) {
            throw Error(response.statusText);
        }
        return response;
    }
}