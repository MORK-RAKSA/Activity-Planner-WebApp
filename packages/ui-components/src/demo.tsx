import { createRoot } from 'react-dom/client';
import './styles.css'
import TextField from './atom/input/text-field';
import Button from './atom/buttons/button';

const Demo = () => (
  <div>
    <h1>Testing UI Components</h1>
    <Button variant='outline' color='success'>Hello</Button>
    <TextField label='password' error='Incorrect'/>
  </div>
);

const container = document.getElementById('app');

const root = createRoot(container!);
root.render(<Demo />)
