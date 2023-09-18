const q = (q) => document.querySelector(q);
const qAll = (q) => document.querySelectorAll(q);

/*************** 햄버거 메뉴 제어 ***************/
const hamburger = q(".hamburger");
const navSliderWrap = q(".nav-slider-wrap");
hamburger.addEventListener("click", toggleHamburgerNav);

function toggleHamburgerNav() {
    hamburger.classList.toggle("on");
    navSliderWrap.classList.toggle("on");
}

/*************** 풀 페이지 & 스크롤 이벤트 제어 ***************/
const pageNumberNow = q(".page-number__now");
const categoryLabel = q(".category__label");

/* 새로고침시 페이지 스크롤 맨위로 조정 */
window.onload = () => {
    setTimeout(() => {
        scrollTo(0, 0);
    }, 100);
};

/* 마우스 휠 기본이벤트 제거 */
window.addEventListener(
    "wheel",
    function (e) {
        e.preventDefault();
    },
    { passive: false }
);

const html = q("html");
let page = 1;
const lastPage = qAll(".page").length;
const componentLineHeightRem = 2.5;

/* component - page number 부여 */
for (let i = 1; i <= lastPage; i++) {
    pageNumberNow.innerHTML += `<div>${i}</div>`;
}

let wheelMove = 0; // 휠 동작 감시 변수

/**
 * 풀페이지 스크롤 제어
 * 1. 휠 동작중 중복동작 제어 및 delay 조절
 * 2. Y축 스크롤 제어
 * 3. componentHanddler 함수 제어
 */
function scrollHandler(e) {
    if (wheelMove) return; // 나감
    wheelMove = 1; // 잠금
    setTimeout(() => {
        wheelMove = 0;
    }, 500); //스크롤 잠금 시간

    if (e.deltaY > 0) {
        if (page == lastPage) {
            return;
        }
        page++;
    }
    if (e.deltaY < 0) {
        if (page == 1) {
            return;
        }
        page--;
    }
    let posTop = (page - 1) * document.body.clientHeight;
    html.scrollTo({ top: posTop, behavior: "smooth" });
    componentHanddler();
    onTeamLogoIfPage03();
}

/** 카테고리, 페이지넘버 핸들러  */
function componentHanddler() {
    categoryLabel.style.transform = `translateY(${-componentLineHeightRem * (page - 1)}rem)`;
    pageNumberNow.style.transform = `translateY(${-componentLineHeightRem * (page - 1)}rem)`;
}

/* 최종 풀페이지 & 스크롤 이벤트 제어 */
window.addEventListener("wheel", scrollHandler);

/*************** page 컨텐츠 ***************/

// page02
const page02Container = q(".page-02-container");

/* 2페이지 배경이미지 모음 */
const page02Imgs = [
    "./img/geng/win_summer_2023_2.jpg",
    "./img/geng/win_summer_2023_3.jpg",
    "./img/geng/win_summer_2023_4.jpg",
    "./img/geng/win_summer_2023_5.jpg",
];

/* 2페이지 배경이미지 삽입 */
page02Imgs.forEach((val, idx) => {
    page02Container.innerHTML += `
        <img src="${val}" class="imgs" style="opacity:${idx == 0 ? 1 : 0};">
    `;
});

let imgs = qAll(".imgs");
let seq = 0;

/* 배경이미지 변경 시간 조절 */
setInterval(() => {
    imgs[seq].style.opacity = 0;
    seq++;
    if (seq == page02Imgs.length) seq = 0;
    imgs[seq].style.opacity = 1;
}, 5000);

// page03
const teamSliderItems = qAll(".team-slider__items");

/** 선수명단 - 팀: {포지션: 이름}  */
const playerList = {
    bro: {
        top: "morgan",
        jg: "umti",
        mid: "karis",
        ad: "hena",
        sup: "effort",
    },
    dk: {
        top: "canna",
        jg: "canyon",
        mid: "showmaker",
        ad: "deft",
        sup: "kellin",
    },
    drx: {
        top: "rascal",
        jg: "croco",
        mid: "fate",
        ad: "deokdam",
        sup: "beryl",
    },
    geng: {
        top: "doran",
        jg: "peanut",
        mid: "chovy",
        ad: "peyz",
        sup: "delight",
    },
    hle: {
        top: "kingen",
        jg: "clid",
        mid: "zeka",
        ad: "viper",
        sup: "life",
    },
    kdf: {
        top: "dudu",
        jg: "youngjae",
        mid: "bulldog",
        ad: "taeyoon",
        sup: "jun",
    },
    kt: {
        top: "kiin",
        jg: "cuzz",
        mid: "bdd",
        ad: "aiming",
        sup: "lehends",
    },
    lsb: {
        top: "burdol",
        jg: "willer",
        mid: "clozer",
        ad: "teddy",
        sup: "kael",
    },
    ns: {
        top: "dndn",
        jg: "sylvie",
        mid: "fiesta",
        ad: "vital",
        sup: "peter",
    },
    t1: {
        top: "zeus",
        jg: "oner",
        mid: "faker",
        ad: "gumayusi",
        sup: "keria",
    },
};

teamSliderItems.forEach((ele, idx) => {
    /* 팀 슬라이더 flex 조절 - on class 부여 */
    ele.addEventListener("click", (e) => {
        teamSliderItems.forEach((ele) => {
            ele.classList.remove("on");
        });
        ele.classList.add("on");
    });

    const teamName = ele.getAttribute("name");

    /* team-player-box innerHTML START */
    let playerBoxInnerHTML = '<div class="team-player-box">';

    for (let i in playerList[teamName]) {
        playerBoxInnerHTML += `
            <div class="${i}-player-box player-box">
                <img class="player-img" 
                        src="./img/${teamName}/${teamName}_${playerList[teamName][i]}.png"
                        alt="${playerList[teamName][i]}"
                />
                <div class="position-icon-box">
                    <img src="./img/position_icon/${i}.svg" alt="${i}">
                </div>
                <div class="bg-team-logo">
                    <img src="./img/${teamName}/${teamName}_logo.png"/>   
                </div>
                <span class="player-name">${playerList[teamName][i]}</span>
            </div>
        `;
    }
    playerBoxInnerHTML += "</div>";
    /* team-player-box innerHTML END */

    ele.innerHTML = `
        <div class="team-logo-box">
            <img src="./img/${teamName}/${teamName}_logo.png"/>
        </div>
        <div class="team-name-box">
            ${teamName}
        </div>
        <div class="team-logo-box-small">
            <img src="./img/${teamName}/${teamName}_logo.png"/>
        </div>
        ${playerBoxInnerHTML}
    `;
});

const teamLogoBoxes = qAll(".team-logo-box");

function onTeamLogoIfPage03() {
    if (page >= 3) {
        teamLogoBoxes.forEach((ele,idx) => {
            ele.style.transitionDelay = (idx + 1) * 0.1 + 0.5 + 's';
            ele.classList.add("on");
        })
    }
}

// page04
const rankingBoxWrap = q(".ranking-box-wrap");
const rankingList = {
    bro: {
        name: "bro",
        fullName: "OKSavingBank BRION",
        win: 5,
        lose: 13,
        winPoint: -10,
    },
    dk: {
        name: "dk",
        fullName: "Dplus Kia",
        win: 11,
        lose: 7,
        winPoint: 8,
    },
    drx: {
        name: "drx",
        fullName: "DRX",
        win: 6,
        lose: 12,
        winPoint: -6,
    },
    geng: {
        name: "geng",
        fullName: "Gen.G",
        win: 16,
        lose: 2,
        winPoint: 23,
    },
    hle: {
        name: "hle",
        fullName: "Hanwha Life Esports",
        win: 12,
        lose: 6,
        winPoint: 10,
    },
    kdf: {
        name: "kdf",
        fullName: "Kwangdong Freecs",
        win: 4,
        lose: 14,
        winPoint: -15,
    },
    kt: {
        name: "kt",
        fullName: "kt Rolster",
        win: 17,
        lose: 1,
        winPoint: 30,
    },
    lsb: {
        name: "lsb",
        fullName: "Liiv SANDBOX",
        win: 5,
        lose: 13,
        winPoint: -8,
    },
    ns: {
        name: "ns",
        fullName: "NongShim REDFORCE",
        win: 5,
        lose: 13,
        winPoint: -11,
    },
    t1: {
        name: "t1",
        fullName: "T1",
        win: 9,
        lose: 9,
        winPoint: 2,
    },
};

let sortedRankingList = [];
for (let ele in rankingList) {
    // 객체를 배열객체로 변환
    sortedRankingList.push(rankingList[ele]);
}

sortedRankingList.sort((a, b) => {
    if (a.win < b.win) {
        return 2;
    } else if (a.win > b.win) {
        return -2;
    } else {
        if (a.winPoint < b.winPoint) {
            return 1;
        }
        if (a.winPoint > b.winPoint) {
            return -1;
        }
    }
});
// console.log(sortedRankingList);

sortedRankingList.forEach((ele, idx) => {
    rankingBoxWrap.innerHTML += `
        <div class="ranking-box">    
            <span class="rank">${idx + 1}</span>
            <div class="ranking-team-logo-box">
                <img src="./img/${ele.name}/${ele.name}_logo.png"/>   
            </div>
            <div class="team-name-box">
                <span class="full-team-name">${ele.fullName}</span>
                <span class="team-name">${ele.name}</span>
            </div>
            <div class="win-lose-box">
                <span class="win-box">${ele.win} Win</span>
                <span class="lose-box">${ele.lose} Lose</span>
            </div>
        </div>
    `;
});
