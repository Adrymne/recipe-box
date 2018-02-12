import React from 'react';
import TextArea from 'components/TextArea';

// prettier-ignore
const steps = `1. Discard the extra fat from the chicken and cut it into bite size pieces. Season with a bit of salt and pepper.
2. Peel and cut the carrot in rolling wedges (rangiri) and cut the onions into wedges.
3. Cut the potatoes into 1.5" pieces and soak in water for 15 minutes to remove excess starch.
`

const Steps = () => <TextArea title="Instructions" text={steps} />;

export default Steps;
