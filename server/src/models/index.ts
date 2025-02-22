import sequelize from '../config/connection.js';
import { UserFactory } from './User.js';
import { MovieFactory } from './Movie.js';
import { ReviewFactory } from './Review.js';

const User = UserFactory(sequelize);
const Movie = MovieFactory(sequelize);
const Review = ReviewFactory(sequelize);

// Set up associations
User.hasMany(Review, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Review.belongsTo(User, { foreignKey: 'user_id' });

Movie.hasMany(Review, { foreignKey: 'movie_id', onDelete: 'CASCADE' });
Review.belongsTo(Movie, { foreignKey: 'movie_id' });

export { User, Movie, Review };
