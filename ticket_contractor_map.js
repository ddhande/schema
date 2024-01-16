const TicketContractorMap = db.define(
  "ticket_contractor_map",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    is_active: {
      type: DataTypes.ENUM(["y", "n", "p"]),
      allowNull: false,
      defaultValue: "p",
    },
    add_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: false,
  }
);
