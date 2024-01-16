const User = db.define(
  "user",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,

      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
    },
    isActive: {
      type: DataTypes.ENUM(["y", "n"]),
      defaultValue: "y",
    },
    permission: {
      type: DataTypes.ENUM(["admin", "sub_admin"]),
      defaultValue: "sub_admin",
    },
    last_login: {
      type: DataTypes.DATE,
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: null,
    },
  },
  {
    timestamps: true,
  }
);
