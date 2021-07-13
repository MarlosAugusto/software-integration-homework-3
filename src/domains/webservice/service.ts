import axios from "axios";

async function listContinents() {
  const {data} = await axios.get('http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfContinentsByName/JSON')
  return data;
}

async function listContrys() {
  const {data} = await axios.get('http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso/ListOfCountryNamesByName/JSON')
  return data;
}


export default {
  listContinents,
  listContrys,
};
