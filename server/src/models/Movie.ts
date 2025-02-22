import { DataTypes, Sequelize } from 'sequelize';


export const MovieFactory = (sequelize: Sequelize) => {
  const Movie = sequelize.define('Movie', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    movie_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Stores tmdb movie/TV show ID
    },
  }, {
    timestamps: false,
    tableName: 'movie',
  });

  return Movie;
};
