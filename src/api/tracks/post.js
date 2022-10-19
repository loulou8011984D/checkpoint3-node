const database = require('../database');

module.exports = (req, res) => {
  const { title, youtube_url, album_id } = req.body;
  database
    .query('INSERT INTO album(title, youtube_url, album_id) VALUES (?, ?, ?)', [
      title,
      youtube_url,
      album_id,
    ])
    .then(([result]) => {
      res.location(`/api/track/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving the track');
    });
};
