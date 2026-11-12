import pg from 'pg'
import './dotenv.js'

const config = {
    connectionString: process.env.DATABASE_URL
}

export const pool = new pg.Pool(config)