const TicketStatus = db.define(
  "ticket_status",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

      autoIncrement: true,
    },

    add_on: {
      type: DataTypes.DATE,

      defaultValue: DataTypes.NOW,
    },
    is_active: {
      type: DataTypes.ENUM(["y", "n"]),

      defaultValue: "y",
    },
    status: {
      type: DataTypes.ENUM([
        "new",
        "allocated",
        "in_progess",
        "on_hold",
        "completed",
        "closed",
      ]),

      defaultValue: "new",
    },
    add_by: {
      type: DataTypes.INTEGER,
    },
    updatedAt: {
      type: DataTypes.DATE,

      defaultValue: DataTypes.NOW,
    },
    is_read: {
      type: DataTypes.ENUM(["Y", "N"]),

      defaultValue: "N",
    },
  },
  {
    timestamps: true,
  }
);
