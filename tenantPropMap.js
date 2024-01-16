const TenantPropMap = db.define(
  "tenant_prop_map",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    uptill_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    doa: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    is_active: {
      type: DataTypes.ENUM(["Y", "N"]),
      allowNull: false,
      defaultValue: "Y",
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
