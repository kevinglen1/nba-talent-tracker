const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gamedatabaseSchema = new Schema({

  id: {
    type: Number
  },
  ast: {
    type: Number
  },
  blk: {
    type: Number
  },
  dreb: {
    type: Number
  },
  fg3_pct: {
    type: Number
  },
  fg3a: {
    type: Number
  },
  fg3m: {
    type: Number
  },
  fg_pct: {
    type: Number
  },
  fga: {
    type: Number
  },
  fgm: {
    type: Number
  },
  ft_pct: {
    type: Number
  },
  fta: {
    type: Number
  },
  ftm: {
    type: Number
  },
  game: {
    id: {
      type: Number
    },
    date: {
      type: Date
    },
    home_team_id: {
      type: Number
    },
    home_team_score: {
      type: Number
    },
    season: {
      type: Number
    },
    visitor_team_id: {
      type: Number
    },
    visitor_team_score: {
      type: Number
    }
  },
  min: {
    type: String
  },
  oreb: {
    type: Number
  },
  pf: {
    type: Number
  },
  player: {
    id: {
      type: Number
    },
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    position: {
      type: String
    },
    team_id: {
      type: Number
    }
  },
  pts: {
    type: Number
  },
  reb: {
    type: Number
  },
  stl: {
    type: Number
  },
  turnover: {
    type: Number
  },
  team: {
    id: {
      type: Number
    },
    abbreviation: {
      type: String
    },
    city: {
      type: String
    },
    conference: {
      type: String
    },
    division: {
      type: String
    },
    full_name: {
      type: String
    },
    name: {
      type: String
    }
  }
});

module.exports = mongoose.model('GameDatabase', gamedatabaseSchema);

