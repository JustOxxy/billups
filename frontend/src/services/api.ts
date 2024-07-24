import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Choice, ComputerRoundResult } from '../types';

const API_DOMAIN = import.meta.env.VITE_SERVER_DOMAIN || 'localhost';
const API_PORT = import.meta.env.VITE_SERVER_PORT || '80';

export const gameApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `http://${API_DOMAIN}:${API_PORT}/` }),
  endpoints: (builder) => ({
    fetchChoices: builder.query<Choice[], void>({
      query: () => 'choices',
    }),
    fetchComputerChoice: builder.query<Choice, void>({
      query: () => 'choice',
    }),
    playRound: builder.mutation<ComputerRoundResult, number>({
      query: (choiceId: number) => ({
        url: 'play',
        method: 'POST',
        body: { player: choiceId },
      }),
    }),
  }),
});

export const { useFetchChoicesQuery, useFetchComputerChoiceQuery, usePlayRoundMutation } = gameApi;
