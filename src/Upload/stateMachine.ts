import {
  createMachine,
  assign,
} from 'xstate';

export const stateMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5SwC4EMVgLJoMYAsBLAOzAGIAlAUQEEARATQG0AGAXUVAAcB7WQlIR7FOIAB6IALACYANCACeiAIwtJAOkkB2AGwBWHdL0BfY-NQZseIqXUAnMGggKyAZSoAZKgGEAKgH0AMQBJL1YOJBBefkFhUQkEIxZ1LS0AZkk0rT15JQQADmV1EzMQC0wcAhIwdQAzQgAbcioANSoAOQDpcNFogSERSIS9NXU0tL0ATiycxRVR7X1DEtLiHgg4UXKrKtJevn64ocQAWh1c051Tc3QK62r1Qggm-ZiB+MQ9DT1pdMzsi4IZQ6DSTXQGIzXMq3HY2GoOJx5bgHWKDUAJZR6PTFL46fIAuZA0ZgpaQ0rbSpwuqNMCvQ5o8RSaTJfITaYEvKqUHg5ZQin3WzbAAE0jpqI+CB0aWk6km0kmeI5825pJWxiAA */
  id: 'stateMachine',
  initial: 'idle',
  context: {
    filename: '',
  },
  entry: [
    // TODO: what is this?
    'sayHello',
  ],
  states: {
    idle: {},
    ready: {
      on: {
        SELECT_FILE: {
          target: 'file',
          // actions: [
          //   assign({ filename: (_context, event) => event.value })
          // ],
          actions: 'recordFilename',
        }
      }
    },
    file: {
      on: {
        'EVENT_2': 'state 2'
      }
    },
    'state 2': {}
  },
  on: {
    READY: 'ready'
  },
  schema: {
    context: {} as { filename: string },
    events: {} as
    | { type: 'READY' }
    | { type: 'SELECT_FILE'; filename: string }
    | { type: 'EVENT_2' },
    // actions: {} as {
    //   recordFilename: () => string;
    // }
  },
  tsTypes: {} as import('./stateMachine.typegen').Typegen0,
},
{
  actions: {
    recordFilename: assign({
      filename: (_context, event) => event.filename
    }),
    sayHello: () => {
      console.log('Hello!');
    },
  }
});
