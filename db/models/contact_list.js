"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contact_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Chat_session }) {
      // define association here
      this.belongsTo(User, { foreignKey: "owner" });
      this.belongsTo(User, { foreignKey: "contact_id" });
      this.belongsTo(Chat_session, { foreignKey: "chat_session_id" });
    }
    static getMyContacts = async (userID) => {
      var contacts = await Contact_list.findAll({
        where: {
          owner: userID
        }
      });
      return contacts
    }
  }
  Contact_list.init(
    {
      chat_session_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contact_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Contact_list",
    }
  );
  return Contact_list;
};