import { DataTypes, Sequelize } from 'sequelize';

export const ReviewFactory = (sequelize: Sequelize) => {
  const Review = sequelize.define('Review', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users', // refers to the users table
        key: 'id',
      },
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'movie', // refers to the movie table
        key: 'id',
      },
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    timestamps: false,
    tableName: 'review',
  });

  return Review;
};
