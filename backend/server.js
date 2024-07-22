const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost/movie-schedule', { useNewUrlParser: true, useUnifiedTopology: true });

const ScheduleSchema = new mongoose.Schema({
  date: String,
  title: String,
  month: String,
  description: String,
});

const Schedule = mongoose.model('Schedule', ScheduleSchema);

app.get('/api/schedules', async (req, res) => {
  const schedules = await Schedule.find();
  res.send(schedules);
});

app.post('/api/schedules', async (req, res) => {
  const { date, title, month, description } = req.body;
  const schedule = new Schedule({ date, title, month, description });
  await schedule.save();
  res.send(schedule);
});

app.put('/api/schedules/:id', async (req, res) => {
  const { date, title, month, description } = req.body;
  const schedule = await Schedule.findByIdAndUpdate(req.params.id, { date, title, month, description }, { new: true });
  res.send(schedule);
});

app.delete('/api/schedules/:id', async (req, res) => {
  await Schedule.findByIdAndDelete(req.params.id);
  res.send({ message: 'Schedule deleted' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
