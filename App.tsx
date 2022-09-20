import * as React from 'react';
import './style.css';
import { Button, Popup, Slider } from '@fluentui/react-northstar';
import { MoreIcon } from '@fluentui/react-icons-northstar';

export default function App() {
  return (
    <div>
      <Button content="Repository" tinted />
      <Popup
        content="Transmit interface"
        trigger={<Button content="A trigger" />}
      />
      <Popup
        trigger={<Button icon={<MoreIcon />} title="Show popup" />}
        content="Hello from popup!"
      />

      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
// {/* <Popup>
//         position="below" align="center" content="abc" on="click" trigger=
//         {<Button content="Repository" />}
//       </Popup> */}
