import React, { useState, useEffect } from 'react';
import ToggleTheme from './components/buttons/ToggleTheme.jsx';
import Form from './components/forms/Form.jsx';
import './index.css';

export default function App() {
  return (
    <>
      <ToggleTheme />
      <Form />
    </>
  );
}
