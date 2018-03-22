/* eslint-disable import/no-extraneous-dependencies, react/jsx-closing-tag-location */
import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const dock = (
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-w" defaultPosition="bottom">
    <LogMonitor />
  </DockMonitor>
);

export default createDevTools(dock);