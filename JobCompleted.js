const JobCompleted = db.define(
  "job_completed",
  {
    job_completed_id: {
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
    note: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    voicenote_file: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
    attachments: {
      type: DataTypes.JSON,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);
