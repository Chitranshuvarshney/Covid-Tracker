import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {

    let modifiedUrl = 'https://disease.sh/v3/covid-19';
    if (country) {
        modifiedUrl = `${modifiedUrl}/countries/${country}`;
    }
    else {
        modifiedUrl = `${modifiedUrl}/all`;
    }
    try {
        const { data } = await axios.get(`${modifiedUrl}`);
        console.log(data);
        const confirmed = data.cases, recovered = data.recovered, deaths = data.deaths, lastUpdate = data.updated;
        return { confirmed, recovered, deaths, lastUpdate };
    }
    catch (error) {
        console.log(error);
    }

};

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');

        return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    }
    catch (error) {
        console.log(error);
    }
};

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        const Moddata = countries.map((country) => country.name);
        console.log(Moddata);
        return Moddata;
    }
    catch (error) {
        console.log(error);
    }
};