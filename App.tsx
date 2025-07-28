import { FighterListScreen } from './app/fighter-list/FighterListScreen';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <>
      <FighterListScreen/>
      <StatusBar style="auto" />
    </>
  );
}
