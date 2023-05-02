import IORedis from 'ioredis'

const redis = new IORedis({
 host: process.env.REDIS_HOST,
 port: Number(process.env.REDIS_PORT),
 username: process.env.REDIS_SERVICE_NAME, // Render Redis name, red-xxxxxxxxxxxxxxxxxxxx
 password: process.env.REDIS_PASSWORD,     // Provided password
 // tls: true // TLS required when externally connecting to Render Redis
})

export default redis;