import dotenv from 'dotenv'
import fs from 'fs'

if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' })
} else {
  // You can delete this after you create your own .env file
  dotenv.config({ path: '.env.example' })
}

export const ENVIRONMENT = process.env.NODE_ENV

export const SESSION_SECRET = process.env.SESSION_SECRET
