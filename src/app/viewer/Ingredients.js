import React from 'react';
import TextArea from 'components/TextArea';

// prettier-ignore
const ingredients = `* 1tbsp honey
* 500g chicken thigh
* 1l water
`

const Ingredients = () => <TextArea title="Ingredients" text={ingredients} />;

export default Ingredients;
