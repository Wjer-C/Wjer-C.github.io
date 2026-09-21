const songList = [
"001 - weathergirl ft. Eleanor Forte.mp3",
"002 - 混沌ブギ ⧸ jon-YAKITORY, 初音ミク -Konton Boogie ⧸ jon-YAKITORY, Hatsune Miku-.mp3",
"003 - メズマライザー ⧸ 初音ミク・重音テトSV - Mesmerizer.mp3",
"004 - Liar Macaron ft. Kasane Teto SV2 [NO AI REMAKE] (Chiptune Ver.) +UST.mp3",
"005 - ループザルーム feat. 初音ミク ⧸ ＂Looping the Rooms＂ ft. Hatsune Miku.mp3",
"006 - R.I.P - Language of the Lost ft. Kasane Teto SV (SynthV Original Song).mp3",
"007 - いますぐ輪廻 ⧸ 初音ミク.mp3",
"008 - 처형박수 (Execution Clap) ⧸ 카사네 테토.mp3",
"009 - [MV] ABM - 'ヤラララ' (YARARARA) feat. 重音テト.mp3",
"010 - [MV] ABM - '次元通信' (Signaling) 初音ミク & 重音テト.mp3",
"011 - BIRDBRAIN (w⧸ OK Glass) feat. Kasane Teto.mp3",
"012 - ダイダイダイダイダイキライ ⧸ 雨良 feat.初音ミク VS 重音テト  (Daidaidaidaidaikirai ⧸ Amala ft.HatsuneMiku VS KasaneTeto).mp3",
"013 - INTRUSIVE THOUGHTS ⧸⧸ feat. Kasane Teto (Original Song).mp3",
"014 - スプリットダンス - Split Dance -｜｜- Eipu FT. Hatsune Miku & Kasane Teto -｜｜- ENG SUB.mp3",
"015 - 『アンコールダンス』⧸ feat. 重音テトSV.mp3",
"016 - ライラック 한국어 커버.mp3",
"017 - オーバーライド - 重音テトSV[吉田夜世].mp3",
"018 - 退廃的人生讃歌 ⧸ 重音テト.mp3",
"019 - DECO＊27 - モニタリング feat. 初音ミク.mp3",
"020 - Kikuo - 愛して愛して愛して.mp3",
"021 - 熱異常 ⧸ いよわ feat.足立レイ（Heat abnormal ⧸ Iyowa feat.Adachi Rei）.mp3",
"022 - 分かっちゃいないね (feat.花隈千冬).mp3",
"023 - 【GUMI】KING【Kanaria】.mp3",
"024 - 『マジック・メイド』 ⧸ feat.重音テトSV.mp3",
"025 - MIMI - サイエンス (feat.重音テトSV).mp3",
"026 - POTETO CHIP ft. Kasane Teto.mp3",
"027 - NEURODIVERGENCE ft. GUMI.mp3",
"028 - わがままで何が悪い！ ⧸ 重音テト・初音ミク - My Way, So What!.mp3",
"029 - 一千光年 ⧸ いよわ feat. 初音ミク、v_flower、歌愛ユキ、GUMI、可不、星界、足立レイ、裏命、花隈千冬、VY1、SOLARIA（KLY ⧸ Iyowa with AllSingers）.mp3",
"030 - きゅうくらりん ⧸ いよわ feat.可不（Kyu-kurarin ⧸ Iyowa feat.Kafu）.mp3",
"031 - ダダダダダル ⧸ 雨良 feat.初音ミクVS重音テト(Dadadadadaru ⧸ Amala ft.Miku VS Teto).mp3",
"032 - 【GUMI】エンヴィーベイビー【Kanaria】.mp3",
"033 - I Wish That I Could Fall (feat. GUMI SV).mp3",
"034 - 超ぴえんシンデレラ ⧸ 初音ミク・重音テト・亞北ネル.mp3",
"035 - ぴーなた-アンタに言ってんの！！！ feat.重音テト.mp3",
"036 - DryftiN - Overclocked (feat. Kasane Teto) [Original Song].mp3",
"037 - 【VOCALOID Original】ECHO【Gumi English】.mp3",
"038 - Chenomio -フィクションです。feat.重音テト.mp3",
"039 - ぴーなた-求＆影(Q&A) 重音テト.mp3",
"040 - ぴーなた-カルト feat.重音テト.mp3",
"041 - キャラクターT ⧸ 重音テト, 重音テトSV.mp3",
"042 - Chenomio - フレフラ feat.重音テト.mp3",
"043 - Chenomio - お願いドクター！ feat.重音テト.mp3",
"044 - 重音テト　オリジナル曲「月花のファントムシーフ」【手書きMV】Moonlight Phantom Thief⧸Kasane Teto.mp3",
"045 - 【初音ミク・重音テトSV】あっはっは笑【巡巡】.mp3",
"046 - ぴーなた-急性恋愛中毒　feat.重音テト.mp3",
"047 - 第n次元 ⧸ 重音テトSV - Dimension No.n.mp3",
"048 - Chenomio - プラズマ・サンダー・スーパーノヴァ feat.重音テト.mp3",
"049 - アクマバライ (feat. 雨衣 & 初音ミク).mp3",
"050 - マインドブランド.mp3",
"051 - [VOCALOID]大大大キライ ⧸ DAI DAI DAI KIRAI (known as ＂i hate you＂).mp3",
"052 - 君のココロをハッキング (feat. りむる).mp3",
"053 - 60fps Full風 World is Mine ワールドイズマイン Hatsune Miku 初音ミク Project DIVA Dreamy theater English Romaji.mp3",
"054 - M@GICAL☆CURE! LOVE SHOT! (feat. Hatsune Miku).mp3",
"055 - ニューダーリン.mp3",
"056 - Miku.mp3",
"057 - うあっはっは！ ⧸ 重音テト.mp3",
"058 - Hatsune Miku Triple Baka.mp3",
"059 - Giga × Mitchie M - ワーワーワールド feat. 初音ミク&鏡音リン（プロジェクトセカイ テーマ曲）.mp3",
"060 - Yukopi - 将棋一番！ (feat.歌愛ユキ).mp3",
"061 - ずっとアタシ ⧸ jon-YAKITORY feat. 初音ミク.mp3",
"062 - ピノキオピー - 歌姫失格 feat. 初音ミク ⧸ Rejected Diva.mp3",
"063 - ピノキオピー - T氏の話を信じるな feat. 初音ミク・重音テト ⧸ Don’t Believe in T.mp3",
"064 - ミクだし⧸ 初音ミク→ 初音ミク→ 初音ミク.mp3",
"065 - ライアーダンサー／重音テトSV.mp3",
"066 - 聖人君子でありたい ⧸ 重音テトSV.mp3",
"067 - Honestly (feat. Kasane Teto) - THØRNS【SynthV Original】 (重音テトSV).mp3",
"068 - Machine Love (feat. Kasane Teto).mp3",
"069 - ROT FOR CLOUT (feat. Kasane Teto).mp3",
"070 - Kasane Teto - Teto territory.mp3",
"071 - 踊っチャイナ ⧸ 初音ミク, 重音テトSV.mp3",
"072 - Cadmium Colors (feat. Kasane Teto).mp3",
"073 - BUBBLE GUMI (ft. Cawer).mp3",
"074 - Fool's Masquerade ft. Kasane Teto - CHiMERA (SynthV Original Song).mp3",
"075 - 東京真中 - ドゥーマー feat. 重音テト.mp3",
"076 - 東京真中 -  ブレインロット feat. 重音テト.mp3",
"077 - Kasane Teto - Fukkireta Original ver..mp3",
"078 - 【初音ミク】　あいしていたのに　【オリジナル】.mp3",
"079 - Static ft. Hatsune Miku.mp3",
"080 - Spoken For ft. Kasane Teto.mp3",
"081 - 稲葉曇『ラグトレイン』Vo. 歌愛ユキ.mp3",
"082 - KAT x Aku P - Affection Addiction ft. POPY (SynthV Original Song).mp3",
"083 - 32. Cutie Mew Mew Magic (DELTARUNE Chapter 5 Soundtrack) - Toby Fox & @Cametek.CamelliaOfficial.mp3",
"084 - 4nim0sity.mp3",
"085 - DANCIN VIBES ft. Kasane Teto.mp3",
"086 - DECO＊27 - サッドガール・セックス feat. 初音ミク.mp3",
"087 - Giga - ガッチュー！ ft.Miku・Rin・Len【MV】.mp3",
"088 - BUTCHER VANITY ft. Yi Xi.mp3",
"089 - DECO＊27 - ヒバナ feat. 初音ミク.mp3",
"090 - DECO＊27 - 妄想感傷代償連盟 feat. 初音ミク.mp3",
"091 - 惑星ウェブスター ⧸ 蒼姫ラピス, メルリ.mp3",
"092 - I Can't Wait feat. GUMI.mp3",
"093 - テトリス ⧸ 重音テトSV.mp3",
"094 - Anxiety feat. GUMI・Kasane Teto.mp3",
"095 - Restart Refine feat. GUMI.mp3",
"096 - 1000年生きてる ⧸ いよわ feat.初音ミク（living millennium ⧸ Iyowa feat.Hatsune Miku）.mp3",
"097 - wowaka 『ローリンガール』feat. 初音ミク ⧸ wowaka - Rollin Girl (Official Video) ft. Hatsune Miku.mp3",
"098 - Kikuo - しかばねの踊り.mp3",
"099 - Yukopi - 強風オールバック (feat.歌愛ユキ).mp3",
"100 - Don't Let Me Down feat. GUMI.mp3",
"101 - 脳漿炸裂ガール - れるりりfeat.初音ミク&GUMI ⧸ Brain Fluid Explosion Girl - rerulili feat.miku&gumi.mp3",
"102 - 雑魚 ⧸ 亞北ネル.mp3",
"103 - SOSORRY! ⧸ Hatsune Miku.mp3",
"104 - 神のまにまに - れるりりfeat.ミク&リン&GUMI ⧸ At God's Mercy - rerulili feat.Vocaloids.mp3",
"105 - Chinozo 'グッバイ宣言' feat.FloweR.mp3",
"106 - PHD ⧸ 重音テトSV.mp3",
"107 - DECO＊27 - テレパシ feat. 初音ミク.mp3",
"108 - ANOTHER CUP ⧸⧸ Kasane Teto (Original Song).mp3",
"109 - ワンダー ⧸ r-906 feat. 初音ミク.mp3",
"110 - GAMBLER'S FALLACY (ft. Kasane Teto).mp3",
"111 - バゥムクゥヘン・エンドロゥル ⧸ 雨良 feat.初音ミクVS重音テトVS亞北ネル(Baumkuchen End Credits ⧸ Amala ft.Miku vs Teto vs Neru).mp3",
"112 -【MV】エイプリルスター⧸重音テト.mp3",
"113 -【Vocaloid Original】Copycat【GUMI English】.mp3",
"114 - Blue Shift feat. Kasane Teto.mp3",
"115 - Borderline Girl feat. Kasane Teto.mp3",
"116 - CONTRADICTIONS (feat. Kasane Teto) (Original Song).mp3",
"117 - Dance Delightful (feat. Adachi Rei).mp3",
"118 - Ego Renegade Boy ft. Kagamine Len.mp3",
"119 - Fever Dream ⧸ Kasane Teto SV2.mp3",
"120 - Ironies feat. Kasane Teto.mp3",
"121 - Miku-sama： LOVE IS WARRR ft. Teto-sama.mp3",
"122 - Neon feat. Kasane Teto.mp3",
"123 - NOT A CAT feat. Catsane Teto.mp3",
"124 - Translator feat. Kasane Teto.mp3",
"125 - Villainess in Lipstick ⧸ Hatsune Miku.mp3",
"126 - パリィ ⧸ 宮守文学 feat.鏡音レン, 鏡音リン.mp3",
"127 - Hatsune Miku - Vegetable Juice (Po Pi Po) with English lyrics.mp3",
"128 - 【MV】Seven Dollars (Feat. Kasane Teto).mp3",
"129 - ヘレディティ ⧸ 初音ミク・GUMI・IA・Flower・可不・重音テトSV - Heredity.mp3",
];
songsList = songList
const SL = document.getElementById('songPrint');
const shuffleButton = document.getElementById('shuffle');
const songPlayer = document.getElementById('song');
const audio = document.getElementById('audio');
const collapsibleList = document.getElementById('all');


currentSong = songList[1]
audio.loop = false;



function shuffle(currentSong) {
    songPlayer.src = 'songs/' + currentSong;
    audio.load();
    audio.play();

    songsList = songsList.filter(item => item !== currentSong);

}

function getRandomItem(arr) {
    if (arr.length <= 0) {
        songsList = songList
    }

    return arr[Math.floor(Math.random() * arr.length)];
};

function setSong(song) {
    currentSong = song
    shuffle(currentSong)
}

audio.addEventListener('ended', () => {
    currentSong = getRandomItem(songsList);
    SL.textContent = currentSong;
    shuffle(currentSong);
});

shuffleButton.addEventListener("click", function() {
    currentSong = getRandomItem(songsList);
    SL.textContent = currentSong;
    SL.onclick = () => setSong(currentSong);

    shuffle(currentSong);
});



currentSong = getRandomItem(songsList);
SL.textContent = currentSong;

collapsibleList.innerHTML = songList
    .map(songList => `<li onclick='setSong("${songList}")'>${songList}</li><div class="divide"></div>`)
    .join('');


shuffle(currentSong);


