const Contractor = db.define(
  "contractor",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    pincode: {
      type: DataTypes.TEXT("tiny"),
      allowNull: false,
    },
    mobile_code: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "+44",
    },
    mobile: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    addon: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    addby: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    company_name: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
