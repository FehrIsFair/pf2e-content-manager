import { DataTypes } from "sequelize";
import Model from "sequelize";
import Ancestry from "./ancestries"

export default class Feat extends Model {}

Feat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    type_: {
      type: DataTypes.ENUM,
    },
    level_required: {
      type: DataTypes.INTEGER,
    },
    desc: {
      type: DataTypes.STRING,
    },
    action_type: {
      type: DataTypes.ENUM,
      allowNull: true,
    }
  }
)

Feat.belongsTo(Ancestry)
