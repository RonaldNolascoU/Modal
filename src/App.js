import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ModalExample from './Modal'
import { Button, Modal } from 'reactstrap';

const App = () => {

  const changeModalState = (state) => {
    setOpen(state)
  }

  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App-header">
      <div className="container">
      <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>
        <Button
        onClick={()=>setOpen(true)}
        >
          Mark
        </Button>
      </td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>
      <Button
      onClick={()=>setOpen(true)}
      >
          Otto
      </Button>
      </td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>
      <Button
      onClick={()=>setOpen(true)}
      >
          Larry
      </Button>
      </td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      </div>
      {(isOpen) && 
    <ModalExample open={isOpen} state={changeModalState}/>
    }
    </div>
  );
}

export default App;
