/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../lib/db';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { method } = req;
  const { title, description, assunto } = req.body;

  if (method === 'GET') {
    try {
      const response = await query(`select * from anotacoes`);
      return res.json(response);
    } catch (e) {
      res.status(500).json({ err: e.message });
    }
  }
  if (method === 'POST') {
    const titulo = String(title);
    const descricao = String(description);
    try {
      const response = await query(
        `INSERT INTO anotacoes(title,description) values('${titulo}','${descricao}')`,
      );
      return res.json({ true: true });
    } catch (e) {
      res.status(500).json({ err: e.message });
    }
  }
};

export default handler;
