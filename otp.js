const Otp = db.define(
  "otp",
  {
    otp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    otp: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
