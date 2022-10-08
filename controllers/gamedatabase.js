const axios = require('axios');
const GameDatabaseModel = require('../models/gamedatabase');

module.exports = {
  updateGameDatabase,
};

async function updateGameDatabase(req, res) {
  await GameDatabaseModel.remove()
  .catch(function (err) {
    console.log(err);
 });

  for (let i = 0; i < 1462; i++) {

    const url = `https://www.balldontlie.io/api/v1/stats?per_page=100&page=${i}`;
        let result = null;
        try {
          result = await axios(url, {
            headers: {
              Accept: "application/json",
            },
          });
            // input each Game individually
            for (let j = 0; j < 100; j++) {
            await GameDatabaseModel.create({
              id: result.data.data[j].id, 
              first_name: result.data.data[j].first_name,
              last_name: result.data.data[j].last_name,
              position: result.data.data[j].position,
              height_feet: result.data.data[j].height_feet,
              height_inches: result.data.data[j].height_inches,
              weight_pounds: result.data.data[j].weight_pounds,
              team_name: result.data.data[j].team.full_name,
              team_id: result.data.data[j].team.id
            })
            console.log(result.data.data[j].id)
          }

          console.log("API request #:", i)
        } catch (e) {
          console.log(e);
        }
  }
}