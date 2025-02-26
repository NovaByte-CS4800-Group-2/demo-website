import express from 'express'
import cors from "cors"

import users from "./table_fetching/users.js";
import notifications from "./table_fetching/notifications.js";
import posts from "./table_fetching/posts.js";
import Subforums from './table_fetching/subforums.js';
import Comments from './table_fetching/comments.js';
import Resources from './table_fetching/resources.js';
import matching_request_forms from './table_fetching/matching_request_forms.js';

const app = express()

app.use(express.json()) // any json.body will be accepted and passed through req.body
app.use(cors());

app.get('/profiles', async (req, res) => {
  const notes = await users.getProfiles()
  res.send(notes)
})

app.get('/profiles/:id', async (req, res) => {
  const id = req.params.id
  const note = await users.getProfile(id)
  res.send(note)
})

app.post('/profiles', async (req, res) => {
  const {title, content} = req.body
  const note = await users.createProfile(title, content)
  res.status(201).send(note)
})

app.get('/notifications', async (req, res) => {
  const notes = await notifications.getNotifications()
  res.send(notes)
})

app.get('/notifications/:id', async (req, res) => {
  const id = req.params.id
  const note = await notifications.getNotification(id)
  res.send(note)
})

app.post('/notifications', async (req, res) => {
  const {title, content} = req.body
  const note = await notifications.createNotification(title, content)
  res.status(201).send(note)
})

app.get('/posts', async (req, res) => {
  const notes = await posts.getPosts()
  res.send(notes)
})  

app.get('/posts/:id', async (req, res) => {
  const id = req.params.id
  const note = await posts.getPost(id)
  res.send(note)
})

app.post('/posts', async (req, res) => {
  const {title, content} = req.body
  const note = await posts.createPost(title, content)
  res.status(201).send(note)
})

app.get('/subforums', async (req, res) => {
  const notes = await Subforums.getSubforums()
  res.send(notes)
})

app.get('/subforums/:id', async (req, res) => {
  const id = req.params.id
  const note = await Subforums.getSubforum(id)
  res.send(note)
})

app.post('/subforums', async (req, res) => {
  const {title, content} = req.body
  const note = await Subforums.createSubforum(title, content)
  res.status(201).send(note)
})

app.get('/comments', async (req, res) => {
  const notes = await Comments.getComments()
  res.send(notes)
})

app.get('/comments/:id', async (req, res) => {
  const id = req.params.id
  const note = await Comments.getComment(id)
  res.send(note)
})

app.post('/comments', async (req, res) => {
  const {title, content} = req.body
  const note = await Comments.createComment(title, content)
  res.status(201).send(note)
})

app.get('/resorces', async (req, res) => {
  const notes = await Resources.getResources()
  res.send(notes)
})

app.get('/resorces/:id', async (req, res) => {
  const id = req.params.id
  const note = await Resources.getResource(id)
  res.send(note)
})

app.post('/resorces', async (req, res) => {
  const {title, content} = req.body
  const note = await Resources.createResource(title, content)
  res.status(201).send(note)
})

app.get('/matching_request_forms', async (req, res) => {
  const notes = await matching_request_forms.getMatching()
  res.send(notes)
})

app.get('/matching_request_forms/:id', async (req, res) => {
  const id = req.params.id
  const note = await matching_request_forms.getMatch(id)
  res.send(note)
})

app.post('/matching_request_forms', async (req, res) => {
  const {title, content} = req.body
  const note = await matching_request_forms.createMatch(title, content)
  res.status(201).send(note)
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const port = 8080;
app.listen(port, () => {
  console.log('Server is running on port ' + port)
})