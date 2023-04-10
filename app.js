//問題文は１つのため、定数（const）を使用
const question = 'ゲーム史上、最も売れたゲーム機は次のうちどれ？';
//選択肢は複数あるため、配列を使用
const answers = [
    'スーパーファミコン',
    'プレイステーション2',
    'ニンテンドースイッチ',
    'ニンテンドーDS'
  ];
const correct = 'ニンテンドーDS';

console.log(document.getElementById('js-question'));

document.getElementById('js-question').textContent = question;

document.getElementsByTagName('button')[0].textContent = answers[0];
document.getElementsByTagName('button')[1].textContent = answers[1];
document.getElementsByTagName('button')[2].textContent = answers[2];
document.getElementsByTagName('button')[3].textContent = answers[3];
