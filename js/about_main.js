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

const rankingList = {
    bro: {
        name: "bro",
        fullName: "OK Saving Bank BRION",
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
