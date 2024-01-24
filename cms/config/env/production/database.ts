export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'db'),
			user: env('DATABASE_USERNAME', 'admin'),
			password: env('DATABASE_PASSWORD', 'E-.2Ebux3h87dNdJBC-n'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
