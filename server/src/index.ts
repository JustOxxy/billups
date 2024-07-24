import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';
import { getRandomComputerChoice } from './helpers/getRandomComputerChoice';
import { choices } from './constants/choices';
import { outcomes } from './constants/outcomes';

const app = new Hono();

app.use(logger());
app.use('/*', cors());

app.get('/choices', (c) => {
  return c.json(choices);
});

app.post(
  '/play',
  zValidator(
    'json',
    z.object({
      player: z.number().min(1).max(5),
    }),
  ),
  async (c) => {
    const { player } = c.req.valid('json');

    const computerChoice = getRandomComputerChoice();

    const playerChoiceName = choices.find((choice) => choice.id === player)?.name;
    const computerChoiceName = choices.find((choice) => choice.id === computerChoice)?.name;

    if (!playerChoiceName || !computerChoiceName) {
      throw new HTTPException(400, {
        message: 'incorrect player choice id',
      });
    }

    return c.json({
      player: player,
      computer: computerChoice,
      results: outcomes[playerChoiceName][computerChoiceName],
    });
  },
);

const port = process.env.PORT || 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port: Number(port),
});
