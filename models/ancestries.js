import { DataTypes } from "sequelize";
import Model from "sequelize";
import Feat from "./feats";

class Ancestry extends Model {}

Ancestry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_hp: {
      type: DataTypes.INTEGER,
    },
    create_date: {
      type: DataTypes.DATE,
    },
    updated_date: {
      type: DataTypes.DATE,
    },
    size: {
      type: DataTypes.ENUM,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    ability_boosts: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    ability_flaw: {
      type: DataTypes.STRING,
    },
    languages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    optional_langes: {
      type: DAtaTypes.ARRAY(DataTypes.STRING)
    },
    traits: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "ancestry", // We need to choose the model name
  }
);

export class Heritage extends Model {}

Heritage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Datatypes.STRING,
    },
    ancestry_id: {
      type: DataTypes.INTEGER,
    },
    desc: {
      type: DataTypes.STRING
    },
    actions: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: true
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "heritage", // We need to choose the model name
  }
)

Heritage.belongsTo(Ancestry)

export class HeritageAction extends Model {}

HeritageAction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    heritage_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    action_type: {
      type: DataTypes.ENUM,
    },
    desc: {
      type: DataTypes.STRING,
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "heritage_action", // We need to choose the model name
  }
)

export default Ancestry;
