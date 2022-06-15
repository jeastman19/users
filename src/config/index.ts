import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'

const env = dotenv.config()
dotenvExpand.expand(env)

const isProduction  = process.env === 'production'

const app = {
    port: process.env.PORT || 3000,
    isProduction
}


export {
    app
}
