import React from 'react';

import { useHistory } from 'react-router-dom'

const Dashboard: React.FC = () => {
  const history = useHistory()

  return (
    <div>
      <h1>Estamos na Dashboard</h1>

      <button type="button" onClick={() => history.push('/')}> voltar </button>
    </div>
  );
}

export default Dashboard;