#!/usr/bin/env bun

import * as p from '@clack/prompts';

p.intro('Hi to my intecactive CLI!');

const answers = await p.group({
  path: () =>
    p.text({
      message: 'How are you feeling today?',
    }),
});

console.log(`You are feeling ${answers.path} so..., I'm happy for you! :)`);
p.outro(
  'Goodbye! thx, have you ever listen this song?: https://youtu.be/CeA92xqw-QI?si=ywHZJUyPWxYqNaCn'
);
