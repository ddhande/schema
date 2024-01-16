const Property = db.define(
  "property",
  {
    prop_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

      autoIncrement: true,
    },
    address: {
      type: DataTypes.TEXT("long"),
    },
    doa: {
      type: DataTypes.DATE,

      defaultValue: DataTypes.NOW,
    },
    is_active: {
      type: DataTypes.ENUM(["Y", "N"]),

      defaultValue: "Y",
    },
    // gps: {
    //   type: DataTypes.TEXT("long"),
    //   : true,
    // },
    added_by: {
      type: DataTypes.INTEGER,
    },
    rent_amt: { type: DataTypes.INTEGER(11) },
    notes: { type: DataTypes.STRING(150) },
  },
  {
    timestamps: false,
  }
);
