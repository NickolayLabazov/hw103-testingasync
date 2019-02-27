import readGameSaving from './readGameSaving';

class GameSavingData {
  constructor(data) {
    this.data = data;
  }

  json() {
    return new Promise((resolve, reject) => {
      // эмуляция обработки ArrayBuffer
      setTimeout(() => {
        resolve(String.fromCharCode.apply(null, new Uint16Array(this.data)));
      }, 1000);
    });
  }
}

export default class GameSavingLoader {
  load() {
    return async function gameSaving() {
      const data = await readGameSaving();
      const gameSavingData = new GameSavingData(data);
      const str = await gameSavingData.json();
      try {
        const result = JSON.parse(str);
        console.log(result);
        return result;
      } catch (error) {
        console.log('Ошибка');
        return 'Ошибка';
      }
    };
  }
}
