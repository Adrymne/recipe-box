import React from 'react';
import EditTextArea from 'components/EditTextArea';

// prettier-ignore
const ingredients = `* 1tbsp honey
* 500g chicken thigh
* 1l water
`

const Ingredients = () => (
  <EditTextArea title="Ingredients" text={ingredients} />
);

export default Ingredients;
