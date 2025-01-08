// TODO: Define a City class with name and id properties
class City {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
class HistoryService {
  read = async () => {
    const fs = require('fs');
    const data = fs.readFileSync('searchHistory.json');
    return JSON.parse(data);
  }
  async write(cities: City[]) {
    const fs = require('fs');
    fs.writeFileSync('searchHistory.json', JSON.stringify(cities));
  }
  async getCities() {
    const cities = await this.read();
    return cities;
  }
  async addCity(city: string) {
    const cities = await this.getCities();
    const cityObject = {
      name: city,
      id: Math.random().toString(36).substr(2, 9)
    };
    cities.push(cityObject);
    await this.write(cities);
  }
  async removeCity(id: string) {
    const cities = await this.getCities();
    const updatedCities = cities.filter(city => city.id !== id);
    await this.write(updatedCities);
  }
}

export default new HistoryService();
