import express from 'express'
import avatarsMiddleware from 'adorable-avatars'

const app = express()
const port = process.env.AVATARS_PORT || 8080

app.use('/', avatarsMiddleware)

app.listen(port, () => {
  console.log(`Adorable Avatars server started on port ${port}`)
})
