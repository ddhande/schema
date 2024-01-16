const Owner = db.define(
  "owner",
  {
    owner_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
    },
    address: {
      type: DataTypes.TEXT,
    },
    pincode: {
      type: DataTypes.TEXT("tiny"),
    },
    country_code: {
      type: DataTypes.TEXT,
      defaultValue: "+44",
    },
    mobile: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.TEXT,
    },
    addon: {
      type: DataTypes.DATE,

      defaultValue: DataTypes.NOW,
    },
    addby: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps,
  }
);
