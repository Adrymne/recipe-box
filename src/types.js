import Type from 'union-type';
import { T } from 'ramda';

export const EditField = Type({ Name: [], Ingredients: [], Steps: [] });

export const Maybe = Type({ Just: [T], Nothing: [] });
