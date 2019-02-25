import GameSavingLoader from './function';

const gameSavingLoader = new GameSavingLoader();
const load = gameSavingLoader.load();
try {
  load();
} catch (error) { console.log('Ошибка'); }
