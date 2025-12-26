// 全てのメニューラベルを取得
const menuLabels = document.querySelectorAll('.menu-label');

menuLabels.forEach(label => {
    // クリックイベントを登録
    label.addEventListener('click', () => {
        // クリックされたラベルの親（li.menu-item）を取得
        const parent = label.parentElement;
        
        // 親要素に「open」クラスを付け外しする
        // これによりCSSの「.menu-item.open .submenu」が反応するようになる
        parent.classList.toggle('open');
    });
});