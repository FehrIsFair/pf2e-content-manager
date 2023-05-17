import {Router} from 'express'

const apiRouter = Router();

apiRouter.get('/characters', (req, res) => {})
apiRouter.put('/characters/:id')
apiRouter.post('/characters')
apiRouter.delete('/characters')

apiRouter.get('/users', (req, res) => {})
apiRouter.put('/users/:id')
apiRouter.post('/users')
apiRouter.delete('/users')

apiRouter.get('/items', (req, res) => {})
apiRouter.put('/items/:id')
apiRouter.post('/items')
apiRouter.delete('/items')

apiRouter.get('/monsters', (req, res) => {})
apiRouter.put('/monsters/:id')
apiRouter.post('/monsters')
apiRouter.delete('/monsters')

apiRouter.get('/classes', (req, res) => {})
apiRouter.put('/classes/:id')
apiRouter.post('/classes')
apiRouter.delete('/classes')

apiRouter.get('/ancestries', (req, res) => {})
apiRouter.put('/ancestries/:id')
apiRouter.post('/ancestries')
apiRouter.delete('/ancestries')

apiRouter.get('/backgrounds', (req, res) => {})
apiRouter.put('/backgrounds/:id')
apiRouter.post('/backgrounds')
apiRouter.delete('/backgrounds')

apiRouter.get('/feats', (req, res) => {})
apiRouter.put('/feats/:id')
apiRouter.post('/feats')
apiRouter.delete('/feats')

apiRouter.get('/characters', (req, res) => {})
apiRouter.put('/characters/:id')
apiRouter.post('/characters')
apiRouter.delete('/characters')

apiRouter.get('/spells', (req, res) => {})
apiRouter.put('/spells/:id')
apiRouter.post('/spells')
apiRouter.delete('/spells')

export default apiRouter