const maintanencePayment = db.define(
  "maintanencePayment",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

      autoIncrement: true,
    },
    contractor_id: {
      type: DataTypes.TEXT,
    },
    note: {
      type: DataTypes.TEXT,
    },
    maintanenceAmount: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    added_on: {
      type: DataTypes.DATE,

      defaultValue: DataTypes.NOW,
    },
    added_by: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
  },
  {
    timestamps,
  }
);
