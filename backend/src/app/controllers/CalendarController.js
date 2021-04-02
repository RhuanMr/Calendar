import * as Yup from 'yup';
import Calendar from '../models/Calendar';

class CalendarController {
  async index(req, res) {
    const calendars = await Calendar.findAll();

    return res.json(calendars);
  }

  async update(req, res) {
    const { calendar_id } = req.params;

    const calendar = await Calendar.findByPk(calendar_id);

    if (!calendar) {
      return res.status(400).json({ error: 'Calendario não existe.' });
    }

    await calendar.update(req.body);

    return res.json(calendar);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      text: Yup.string().required(),
      city: Yup.string().required(),
      color: Yup.string().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'falha ao cadastrar' });
    }

    const { text, city, color, date } = req.body;

    const calendars = await Calendar.create({
      text,
      city,
      color,
      date,
    });

    return res.json(calendars);
  }
}

export default new CalendarController();
