import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Choice, ComputerRoundResult } from '../types';

export const gameApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://codechallenge.boohma.com/' }),
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
