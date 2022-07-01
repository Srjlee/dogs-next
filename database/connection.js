import Sequelize from 'sequelize';
import config from './config/config.mjs';

const { DB_ENV, NODE_ENV } = process.env;
let sequelize;
if (NODE_ENV === 'development') {
	// if (DB_ENV === 'sqlite') {
	// 	sequelize = new Sequelize(config.test);
	// } else if (DB_ENV === 'postgres') {
		sequelize = new Sequelize(config.development);
	// }
} else {
	const cnt = process.env.DATABASE_URL;
	const options = {
		dialectOptions: {
			ssl: {
				require: true,
				rejectUnauthorized: false,
			},
		},
	};
	sequelize = new Sequelize(cnt, options);
}

const connection = sequelize;

export default connection;
