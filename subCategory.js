const SubCategory = db.define(
  "sub_category",
  {
    sub_category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    sub_category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expected_resolved_days: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
      },
      defaultValue: null,
    },
    addon: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    image: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);
