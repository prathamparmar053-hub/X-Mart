/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Grocery } from './pages/Grocery';
import { Clothes } from './pages/Clothes';
import { Sports } from './pages/Sports';
import { Electronics } from './pages/Electronics';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { SignIn } from './pages/SignIn';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="grocery" element={<Grocery />} />
          <Route path="clothes" element={<Clothes />} />
          <Route path="sports" element={<Sports />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  );
}
