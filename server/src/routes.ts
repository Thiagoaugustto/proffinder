import express from 'express';
import db from './database/connection';

const routes = express.Router();

interface Schedule {
  week_day: number;
  from: string;
  to: string;
}

routes.post('/classes', async (req, res) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedules
  } = req.body;

  const insertedUsersIds = await db('users').insert({
    name,
    avatar,
    whatsapp,
    bio
  });

  const user_id = insertedUsersIds[0];

  const insertedClassesIds = await db('classes').insert({
    subject,
    cost,
    user_id
  });

  const class_id = insertedClassesIds[0];

  const classSchedule = schedules.map((schedule: Schedule) => {
    return {
      class_id,
      week_day: schedule.week_day,
      from: schedule.from,
      to: schedule.to
    };
  });

  await db('class_schedule').insert(classSchedule);

  res.send();
});

export default routes;