const axios = require('axios');
const PlayerDatabaseModel = require('../models/playerdatabase');

module.exports = {
  updatePlayerDatabase,
};

async function updatePlayerDatabase(req, res) {

  for (let i = 0; i < 50; i++) {

    const url = `https://www.balldontlie.io/api/v1/players?per_page=100&page=${i}`;
        let result = null;
        try {
          result = await axios(url, {
            headers: {
              Accept: "application/json",
            },
          });
            // input each player individually
            for (let j = 0; j < 100; j++) {
            await PlayerDatabaseModel.create({
              id: result.data.data[j].id, 
              first_name: result.data.data[j].first_name,
              last_name: result.data.data[j].last_name,
              position: result.data.data[j].position,
              height_feet: result.data.data[j].height_feet,
              height_inches: result.data.data[j].height_inches,
              weight_pounds: result.data.data[j].weight_pounds
            })
            console.log(result.data.data[j].first_name)
            console.log(result.data.data[j].height_feet)
          }

          
          console.log("playerdatabase hit")
          console.log("iteration:", i)
        } catch (e) {
          console.log(e);
        }
  }
}