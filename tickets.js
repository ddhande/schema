const Ticket = db.define(
  "tickets",
  {
    ticket_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

      autoIncrement: true,
    },
    add_on: {
      type: DataTypes.DATE,

      defaultValue: DataTypes.NOW,
    },
    priority: {
      type: DataTypes.ENUM(["H", "M", "E"]),
    },
    is_active: {
      type: DataTypes.ENUM(["y", "n"]),

      defaultValue: "y",
    },
    message: {
      type: DataTypes.TEXT,
    },
    attachments: {
      type: DataTypes.JSON,
      defaultValue: null,
    },
    closed_on: {
      type: DataTypes.DATE,
    },
    preferred_date: {
      type: DataTypes.ENUM([
        "weekend",
        "weekday",
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat",
        "sun",
      ]),
    },
    add_by: {
      type: DataTypes.INTEGER,
    },
    scheduled_date: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
  },
  {
    timestamps,
  }
);
