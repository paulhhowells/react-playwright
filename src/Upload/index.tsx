import { useMachine } from '@xstate/react';
import { stateMachine } from './stateMachine';

export default function Upload () {
  const [ state, send ] = useMachine(stateMachine, { devTools: true });

  const selectFileHandler = () => {
    send({ type: 'SELECT_FILE', filename: 'NAME' });
  };

  return (
    <div>
      <h1>Upload</h1>
      <button type="button" onClick={selectFileHandler}></button>
      <pre>
        {
          JSON.stringify(state)
        }
      </pre>
    </div>
  );
}
