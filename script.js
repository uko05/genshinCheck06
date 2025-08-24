const imageFolder = 'chara/';
const imageData = [
    { src: 'shojo.png', category: 'chara' },
    { src: 'kairai.png', category: 'chara' },
    { src: 'yafoda.png', category: 'chara' },
    { src: 'niko.png', category: 'chara' },
    { src: 'arisu.png', category: 'chara' },
    { src: 'faruka.png', category: 'chara' },
    { src: 'dorin.png', category: 'chara' },
    { src: 'neferu.png', category: 'chara' },
    { src: 'rauma.png', category: 'chara' },
    { src: 'hurinzu.png', category: 'chara' },
    { src: 'aino.png', category: 'chara' },
    { src: 'inefa.png', category: 'chara' },
    { src: 'skaku.png', category: 'chara' },
    { src: 'daria.png', category: 'chara' },
    { src: 'esuko.png', category: 'chara' },
    { src: 'ifa.png', category: 'chara' },
    { src: 'baresa.png', category: 'chara' },
    { src: 'Iansan.png', category: 'chara' },
    { src: 'mizuki.png', category: 'chara' },
    { src: 'ranyan.png', category: 'chara' },
    { src: 'oruron.png', category: 'chara' },
    { src: 'sitorari.png', category: 'chara' },
    { src: 'Mavuika.png', category: 'chara' },
    { src: 'sironen.png', category: 'chara' },
    { src: 'Chasca.png', category: 'chara' },
    { src: 'Kinich.png', category: 'chara' },
    { src: 'Kachina.png', category: 'chara' },
    { src: 'Mualani.png', category: 'chara' },
    { src: 'Emilie.png', category: 'chara' },
    { src: 'Sigewinne.png', category: 'chara' },
    { src: 'Clorinde.png', category: 'chara' },
    { src: 'Sethos.png', category: 'chara' },
    { src: 'Arlecchino.png', category: 'chara' },
    { src: 'Chiori.png', category: 'chara' },
    { src: 'Gaming.png', category: 'chara' },
    { src: 'Xianyun.png', category: 'chara' },
    { src: 'Chevreuse.png', category: 'chara' },
    { src: 'Navia.png', category: 'chara' },
    { src: 'Charlotte.png', category: 'chara' },
    { src: 'Furina.png', category: 'chara' },
    { src: 'Neuvillette.png', category: 'chara' },    
    { src: 'Wriothesley.png', category: 'chara' },
    { src: 'Freminet.png', category: 'chara' },
    { src: 'Lyney.png', category: 'chara' },
    { src: 'Lynette.png', category: 'chara' },
    { src: 'Kirara.png', category: 'chara' },
    { src: 'Kaveh.png', category: 'chara' },
    { src: 'Baizhu.png', category: 'chara' },
    { src: 'Mika.png', category: 'chara' },
    { src: 'Dehya.png', category: 'chara' },
    { src: 'Alhaitham.png', category: 'chara' },
    { src: 'Yaoyao.png', category: 'chara' },
    { src: 'Scaramouche.png', category: 'chara' },
    { src: 'Faruzan.png', category: 'chara' },
    { src: 'Layla.png', category: 'chara' },
    { src: 'Nahida.png', category: 'chara' },
    { src: 'Nilou.png', category: 'chara' },
    { src: 'Candace.png', category: 'chara' },    
    { src: 'Cyno.png', category: 'chara' },   
    { src: 'Dori.png', category: 'chara' },
    { src: 'Collei.png', category: 'chara' },
    { src: 'Tighnari.png', category: 'chara' },
    { src: 'Heizou.png', category: 'chara' },
    { src: 'KukiShinobu.png', category: 'chara' }, 
    { src: 'Yelan.png', category: 'chara' },   
    { src: 'KamisatoAyato.png', category: 'chara' },
    { src: 'YaeMiko.png', category: 'chara' },
    { src: 'YunJin.png', category: 'chara' },
    { src: 'Shenhe.png', category: 'chara' },
    { src: 'AratakiItto.png', category: 'chara' },
    { src: 'Gorou.png', category: 'chara' },
    { src: 'Thoma.png', category: 'chara' },
    { src: 'Kokomi.png', category: 'chara' },
    { src: 'KujouSara.png', category: 'chara' },
    { src: 'Raiden.png', category: 'chara' },
    { src: 'Sayu.png', category: 'chara' },
    { src: 'Yoimiya.png', category: 'chara' },
    { src: 'AyakaKamisato.png', category: 'chara' },
    { src: 'KazuhaKaedehara.png', category: 'chara' },
    { src: 'Eula.png', category: 'chara' },
    { src: 'YanFei.png', category: 'chara' },
    { src: 'rosaria.png', category: 'chara' },
    { src: 'Hutao.png', category: 'chara' },
    { src: 'Xiao.png', category: 'chara' },
    { src: 'Ganyu.png', category: 'chara' },
    { src: 'Albedo.png', category: 'chara' },
    { src: 'Zhongli.png', category: 'chara' },
    { src: 'Xinyan.png', category: 'chara' },
    { src: 'Tartaglia.png', category: 'chara' },
    { src: 'Diona.png', category: 'chara' },
    { src: 'Klee.png', category: 'chara' }, 
    { src: 'Qiqi.png', category: 'chara' },
    { src: 'Keqing.png', category: 'chara' },    
    { src: 'Ningguang.png', category: 'chara' },
    { src: 'Xiangling.png', category: 'chara' },
    { src: 'Xingqiu.png', category: 'chara' },
    { src: 'Chongyun.png', category: 'chara' },
    { src: 'Beidou.png', category: 'chara' },
    { src: 'Venti.png', category: 'chara' },
    { src: 'Diluc.png', category: 'chara' },
    { src: 'Mona.png', category: 'chara' },
    { src: 'Jean.png', category: 'chara' },
    { src: 'Razor.png', category: 'chara' },
    { src: 'Noelle.png', category: 'chara' },
    { src: 'barbara.png', category: 'chara' },
    { src: 'Fischl.png', category: 'chara' },
    { src: 'Bennett.png', category: 'chara' },
    { src: 'Sucrose.png', category: 'chara' },
    { src: 'Lisa.png', category: 'chara' },
    { src: 'Kaeya.png', category: 'chara' },
    { src: 'amber.png', category: 'chara' },
    { src: 'sora.png', category: 'chara' },
    { src: 'hotaru.png', category: 'chara' },
    
    { src: 'version/5_8.png', category: 'version' },
    { src: 'version/5_7.png', category: 'version' },
    { src: 'version/5_6.png', category: 'version' },
    { src: 'version/5_5.png', category: 'version' },
    { src: 'version/5_4.png', category: 'version' },
    { src: 'version/5_3.png', category: 'version' },
    { src: 'version/5_2.png', category: 'version' },
    { src: 'version/5_1.png', category: 'version' },
    { src: 'version/5_0.png', category: 'version' },
    { src: 'version/4_8.png', category: 'version' },
    { src: 'version/4_7.png', category: 'version' },
    { src: 'version/4_6.png', category: 'version' },
    { src: 'version/4_5.png', category: 'version' },
    { src: 'version/4_4.png', category: 'version' },
    { src: 'version/4_3.png', category: 'version' },
    { src: 'version/4_2.png', category: 'version' },
    { src: 'version/4_1.png', category: 'version' },
    { src: 'version/4_0.png', category: 'version' },
    { src: 'version/3_8.png', category: 'version' },
    { src: 'version/3_7.png', category: 'version' },
    { src: 'version/3_6.png', category: 'version' },
    { src: 'version/3_5.png', category: 'version' },
    { src: 'version/3_4.png', category: 'version' },
    { src: 'version/3_3.png', category: 'version' },
    { src: 'version/3_2.png', category: 'version' },
    { src: 'version/3_1.png', category: 'version' },
    { src: 'version/3_0.png', category: 'version' },
    { src: 'version/2_8.png', category: 'version' },
    { src: 'version/2_7.png', category: 'version' },
    { src: 'version/2_6.png', category: 'version' },
    { src: 'version/2_5.png', category: 'version' },
    { src: 'version/2_4.png', category: 'version' },
    { src: 'version/2_3.png', category: 'version' },
    { src: 'version/2_2.png', category: 'version' },
    { src: 'version/2_1.png', category: 'version' },
    { src: 'version/2_0.png', category: 'version' },
    { src: 'version/1_6.png', category: 'version' },
    { src: 'version/1_5.png', category: 'version' },
    { src: 'version/1_4.png', category: 'version' },
    { src: 'version/1_3.png', category: 'version' },
    { src: 'version/1_2.png', category: 'version' },
    { src: 'version/1_1.png', category: 'version' },
    { src: 'version/1_0.png', category: 'version' }
];

const MAX_SELECTION = 1;
const SELECTED_LABEL = '☑';

// タブごとの選択状態を管理するためのオブジェクト
const tabSelections = {};

//------------------------------------------------------------------------------------------------
const toggleButton = document.getElementById('toggle-button');
const sidebar = document.getElementById('sidebar');
const parentNode = document.querySelector('.parent-node');
const childNodes = document.querySelector('.child-nodes');

// 初期状態でサイドバーを隠す
sidebar.classList.add('hidden');
toggleButton.setAttribute('aria-expanded', false);
toggleButton.setAttribute('aria-label', 'メニューを開く');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidden'); // hiddenクラスを切り替え
    const isExpanded = !sidebar.classList.contains('hidden');
    toggleButton.setAttribute('aria-expanded', isExpanded);
    toggleButton.setAttribute('aria-label', isExpanded ? 'メニューを閉じる' : 'メニューを開く');
});

parentNode.addEventListener('click', (event) => {
    event.preventDefault(); // デフォルトのリンク動作を防止
    childNodes.classList.toggle('active'); // 子ノードの表示・非表示を切り替え
    const isActive = childNodes.classList.contains('active');
    parentNode.textContent = `${isActive ? '▼' : '▶'} 推しキャラランキング`; // テキストを更新
});
//------------------------------------------------------------------------------------------------

// タブの選択状態を表示
function updateTabSelectionsDisplay() {
    const tabSelectionsElement = document.getElementById('tab-selections');
    tabSelectionsElement.innerHTML = ''; // クリアしてから再描画

    // tabSelectionsが空でも問題ないように対策
    if (tabSelections && Object.keys(tabSelections).length > 0) {
        for (const [category, selections] of Object.entries(tabSelections)) {
            const categoryInfo = document.createElement('div');
            categoryInfo.textContent = `${category}: ${selections.join(', ')}`;
            tabSelectionsElement.appendChild(categoryInfo);
        }
    } else {
        tabSelectionsElement.textContent = 'No selections made yet.';
    }
}

function loadImages() {
    const tabs = document.querySelectorAll('.tab-label');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabKey   = tab.getAttribute('for');   // ← 追加: タブ固有キー
        const category = tab.dataset.category;      // ← 表示カテゴリ（共通でOK）

        if (tab.classList.contains('active')) return;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        tabContents.forEach(content => {
          if (content.previousElementSibling === tab) {
            const listEl = content.querySelector('.image-list');
            updateImageList(category, listEl, tabKey);
            restoreSelectionState(tabKey, category, listEl);
          }
        });
      });
    });

    tabs[0].click(); // 初期表示
  
    function updateImageList(category, container, tabKey) {
      container.innerHTML = '';
      const filtered = imageData.filter(img => img.category === category);

      filtered.forEach(imgData => {
        const wrap = document.createElement('div');
        wrap.classList.add('image-container');

        const img = document.createElement('img');
        img.src = `${imageFolder}${imgData.src}`;
        img.dataset.src = imgData.src;
        img.dataset.category = imgData.category;
        img.classList.add('image-item');
        img.addEventListener('click', () => handleImageClick(img, tabKey, container));

        wrap.appendChild(img);
        container.appendChild(wrap);
      });
    }
    
    function setSaveImage(tabKey, src) {
      // 該当する保存枠を探す
      const entry = document.querySelector(`#savearea .entry[data-key="${tabKey}"]`);
      if (!entry) return;

      const img = entry.querySelector('.imgheight img');
      if (!img) return;

      if (src) {
        img.src = `${imageFolder}${src}`;  // フォルダ＋ファイル名
        img.alt = src;
        img.dataset.src = src;
      } else {
        // 解除時は空にする
        img.removeAttribute('src');
        img.removeAttribute('alt');
        img.removeAttribute('data-src');
      }
    }
    
function moveToNextTab(currentTabKey) {
  const currentInput = document.getElementById(currentTabKey);
  if (!currentInput) return;

  // 次のinput(tab)を探す
  let nextInput = currentInput;
  while ((nextInput = nextInput.nextElementSibling)) {
    if (nextInput.tagName === "INPUT" && nextInput.type === "radio") {
      nextInput.checked = true;                 // ラジオON
      nextInput.nextElementSibling.click();     // ペアのlabelをクリック
      break;
    }
  }
}
    function handleImageClick(img, tabKey, scopeEl) {
      const src = img.dataset.src;
      let selected = tabSelections[tabKey] || [];
      const isSelected = selected.includes(src);

      if (isSelected) {
        img.classList.remove('selected');
        removeNumberingAndBorder(img.parentElement);
        selected = selected.filter(s => s !== src);
      } else {
        if (selected.length >= MAX_SELECTION) {
          alert('選択できる画像は1枚までです');
          return;
        }
        img.classList.add('selected');
        selected.push(src);
        addNumberingAndBorder(img.parentElement, selected.length);
        
  moveToNextTab(tabKey);
      }

      tabSelections[tabKey] = selected;
      
      setSaveImage(tabKey, selected[0] || null);
  
      updateImageNumbers(tabKey, scopeEl);
    }

    function updateImageNumbers(tabKey, scopeEl) {
      const selected = tabSelections[tabKey] || [];

      // このタブ内だけクリアして付け直す
      scopeEl.querySelectorAll('.image-container').forEach(c => {
        c.style.outline = 'none';
        const lbl = c.querySelector('.selected-label');
        if (lbl) lbl.remove();
      });

      selected.forEach((src, idx) => {
        const img = scopeEl.querySelector(`.image-item[data-src="${src}"]`);
        if (img) addNumberingAndBorder(img.parentElement, idx + 1);
      });
    }

    function addNumberingAndBorder(container, number) {
      container.style.outline = '2px solid blue';
      let label = container.querySelector('.selected-label');
      if (!label) {
        label = document.createElement('div');
        label.className = 'selected-label';
        container.appendChild(label);
      }
      label.textContent = SELECTED_LABEL;
    }

    function removeNumberingAndBorder(container) {
      container.style.outline = 'none';
      const label = container.querySelector('.selected-label');
      if (label) label.remove();
    }

    function updateImageNumbers(tabCategory) {

        const selectedCategory = tabSelections[tabCategory] || [];

        selectedCategory.forEach((src, index) => {
            const imgContainer = document.querySelector(`.image-item[data-src="${src}"]`).parentElement;
            addNumberingAndBorder(imgContainer, index + 1);
        });
        tabSelections[tabCategory] = selectedCategory; // 選択状態を更新
        //updateTabSelectionsDisplay();
    }

    function restoreSelectionState(tabKey, category, scopeEl) {
      const selected = tabSelections[tabKey] || [];
      scopeEl.querySelectorAll(`.image-item[data-category="${category}"]`).forEach(img => {
        if (selected.includes(img.dataset.src)) {
          addNumberingAndBorder(img.parentElement, selected.indexOf(img.dataset.src) + 1);
        }
      });
      updateImageNumbers(tabKey, scopeEl);
      setSaveImage(tabKey, selected[0] || null);
    }

    // 保存ボタンのクリックイベントを追加
    const saveButton = document.getElementById('save-button');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            const tabCategory = document.querySelector('.tab-label.active').dataset.category;
            saveImage(tabCategory);
        });
    }
}

// ==== ここから追加ユーティリティ ====
// --- プロキシを用意（初回だけでもOK） ---
function ensurePrintProxies(){
  const root = document.getElementById('savearea');
  if (!root) return;

  // 各エントリの textarea の直下に作る
  root.querySelectorAll('.entry textarea').forEach(ta=>{
    if (!ta.nextElementSibling || !ta.nextElementSibling.classList.contains('print-proxy')){
      const proxy = document.createElement('div');
      proxy.className = 'print-proxy';          // 基本
      ta.insertAdjacentElement('afterend', proxy);
    }
  });

  // プレイヤー名 input の直後にも
  const nameInput = document.getElementById('playerName');
  if (nameInput && (!nameInput.nextElementSibling || !nameInput.nextElementSibling.classList.contains('print-proxy'))){
    const proxy = document.createElement('div');
    proxy.className = 'print-proxy value-yoko'; // ← input と同じ見た目にする
    nameInput.insertAdjacentElement('afterend', proxy);
  }
}

// --- 値と見た目をプロキシに同期（クラスもコピーして高さを揃える） ---
function syncToProxies(){
  const root = document.getElementById('savearea');

  // textarea → proxy
  root.querySelectorAll('.entry').forEach(entry=>{
    const ta = entry.querySelector('textarea');
    const proxy = ta?.nextElementSibling?.classList.contains('print-proxy') ? ta.nextElementSibling : null;
    if (!ta || !proxy) return;
    proxy.textContent = ta.value || '';

    // クラス合わせ（small/medium/large 等）
    proxy.className = `print-proxy ${ta.className || ''}`;

    // スタイル寄せ
    const cs = getComputedStyle(ta);
    proxy.style.font        = cs.font;
    proxy.style.lineHeight  = cs.lineHeight;
    proxy.style.padding     = cs.padding;
    proxy.style.border      = cs.border;
    proxy.style.textAlign   = cs.textAlign;
    proxy.style.minHeight   = `${Math.max(ta.clientHeight, 42)}px`;
    proxy.style.width       = '100%';
    proxy.style.boxSizing   = 'border-box';
    proxy.style.background  = '#fff';
  });

  // 名前 input → proxy（任意）
  const inp = document.getElementById('playerName');
  const pxy = inp?.nextElementSibling?.classList.contains('print-proxy') ? inp.nextElementSibling : null;
  if (inp && pxy){
    pxy.textContent = inp.value || '';
    // クラスを value-yoko に寄せる（見た目を完全一致させる）
    pxy.className = `print-proxy ${inp.className || ''}`;
    const cs = getComputedStyle(inp);
    pxy.style.font        = cs.font;
    pxy.style.lineHeight  = cs.lineHeight;
    pxy.style.padding     = cs.padding;
    pxy.style.border      = cs.border;
    pxy.style.minHeight   = `${inp.clientHeight}px`;
    pxy.style.boxSizing   = 'border-box';
    pxy.style.background  = '#fff';
  }
}

// --- 画像ロード待ち ---
async function waitImagesIn(el){
  const imgs = Array.from(el.querySelectorAll('img'));
  imgs.forEach(img => img.setAttribute('crossorigin','anonymous'));
  await Promise.all(imgs.map(img=>{
    if (img.complete && img.naturalWidth) return Promise.resolve();
    return new Promise(res=>{ img.onload=res; img.onerror=res; });
  }));
}

// --- ★ 保存本体：例外でも必ず .is-printing を外す ---
async function saveImage(){
  const node = document.getElementById('savearea');
  try{
    ensurePrintProxies();
    syncToProxies();

    node.classList.add('is-printing');  // ← ここでスワップ
    node.classList.add('for-capture');

    await waitImagesIn(node);

    const scale = 2; // ラジオ連動ならここで切替
    const canvas = await html2canvas(node,{
      useCORS:true,
      backgroundColor:'#fff',
      scale
    });

    await new Promise(resolve=>{
      canvas.toBlob(async blob=>{
        const p=n=>String(n).padStart(2,'0');
        const d=new Date();
        const fn=`原神チェックシート_${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}.png`;
        const file=new File([blob],fn,{type:'image/png'});

        if (navigator.canShare && navigator.canShare({files:[file]})){
          try{ await navigator.share({files:[file],title:'保存/共有'}); return resolve(); }catch{}
        }
        const url=URL.createObjectURL(blob);
        const a=document.createElement('a');
        a.href=url; a.download=fn;
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(()=>URL.revokeObjectURL(url),10000);
        resolve();
      },'image/png');
    });
  }catch(err){
    console.error(err);           // ← ①「反応しない」時の原因がここに出る
    alert('保存時にエラーが発生しました（詳細はコンソール参照）');
  }finally{
    // 例外が出ても必ず元に戻す（②の“変な箱”も消える）
    node.classList.remove('for-capture');
    node.classList.remove('is-printing');
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  ensurePrintProxies();               // 保存用のプロキシ準備
  loadImages();                       // ★ 画像リスト生成＆タブ動作セットアップ

  const btn = document.getElementById('save-button');
  if (btn){
    btn.onclick = null;               // 重複バインド防止
    btn.addEventListener('click', saveImage);
  }
});


// ==== ここまでユーティリティ ====


// ==== ★ saveImage をこの版に差し替え ★ ====


//function saveImage() {
//
//    // imageareaを一時的に表示
//    const imageArea = document.getElementById('savearea');
//
//    html2canvas(document.getElementById('savearea'), { 
//        useCORS: true, 
//        scale: 2 // スケールを調整して解像度を上げる
//    }).then(canvas => {
//        canvas.toBlob(function(blob) {
//            const link = document.createElement('a');
//            link.href = URL.createObjectURL(blob);
//            
//            // 現在の日時を「yyyyMMdd_HHmmss」形式にフォーマット
//            const now = new Date();
//            const year = now.getFullYear();
//            const month = String(now.getMonth() + 1).padStart(2, '0'); // 月は0から始まるので+1
//            const day = String(now.getDate()).padStart(2, '0');
//            const hours = String(now.getHours()).padStart(2, '0');
//            const minutes = String(now.getMinutes()).padStart(2, '0');
//            const seconds = String(now.getSeconds()).padStart(2, '0');
//
//            const formattedDate = `${year}${month}${day}_${hours}${minutes}${seconds}`;
//            link.download = `原神チェックシート_${formattedDate}.png`; // ファイル名の変更
//            
//            link.click();
//        }, 'image/png');
//    }).catch(error => {
//        console.error('Error capturing image:', error);
//    });
//}
//
//document.addEventListener('DOMContentLoaded', () => {
//    loadImages();
//});
