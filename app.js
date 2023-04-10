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

//定数の文字列をHTMLに反映させる
document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button');

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];

// ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', () => {
    if(correct === $button[0].textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
});
