const Accounts = db.define(
  "accounts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

      autoIncrement: true,
    },
    payment_method: {
      type: DataTypes.TEXT,
    },
    transaction_id: {
      type: DataTypes.TEXT,
    },
    amount: {
      type: DataTypes.INTEGER,
    },
    dueAmount: {
      type: DataTypes.INTEGER,
    },
    owner_id: {
      type: DataTypes.TEXT,
    },
    property_id: {
      type: DataTypes.TEXT,
    },
    addon: {
      type: DataTypes.DATE,

      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps,
  }
);
