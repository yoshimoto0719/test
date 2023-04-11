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

const $button = document.getElementsByTagName('button');

console.log(document.getElementById('js-question'));

//クイズの問題文選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        //ここに命令
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    }
    // 4になったら命令がストップする
}

setupQuiz();




// ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', (e) => {
    if(correct === e.target.textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
});

$button[1].addEventListener('click', () => {
    if(correct === e.target.textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
});

$button[2].addEventListener('click', () => {
    if(correct === e.target.textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
});

$button[3].addEventListener('click', () => {
    if(correct === e.target.textContent){
        window.alert('正解！');
    } else {
        window.alert('不正解！');
    }
});