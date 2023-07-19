import React, { useState, useEffect } from 'react';
import ToggleTheme from './components/buttons/ToggleTheme';
import Form from './components/forms/Form.js';
import './index.css';

export default function App() {
  return (
    <>
      <ToggleTheme />
      <Form />
    </>
  );
}
