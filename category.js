const Category = db.define(
  "category",
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
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
