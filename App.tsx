import { FighterListScreen } from '~/screens/fighter_list/FighterListScreen';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <>
      <FighterListScreen title="Fighters" path="App.tsx"></FighterListScreen>
      <StatusBar style="auto" />
    </>
  );
}
