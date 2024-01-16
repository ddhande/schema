const Chat = db.define(
  "chat",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

      autoIncrement: true,
    },
    add_on: {
      type: DataTypes.DATE,

      defaultValue: DataTypes.NOW,
    },
    add_by: {
      type: DataTypes.INTEGER,
    },
    textBy: {
      //0: owner 1: tenant
      type: DataTypes.ENUM(["0", "1"]),
      defaultValue: null,
    },
    message: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    files: {
      type: DataTypes.TEXT("long"),
      defaultValue: null,
    },
    chat_id: {
      type: DataTypes.INTEGER,
    },
    JobDoneImages: {
      type: DataTypes.JSON,
      defaultValue: null,
    },
    is_read: {
      type: DataTypes.ENUM(["Y", "N"]),

      defaultValue: "N",
    },
  },
  {
    timestamps,
  }
);
