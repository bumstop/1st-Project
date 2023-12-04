export const gnbMenu = {
  gnbCategory: [
    { txt: "신상할인", link: "/new" },
    { txt: "베스트", link: "/best" },
    {
      txt: "우먼즈",
      link: "/woman",
      sub: [
        { txt: "레깅스", type: "leggings", link: "/woman/leggings" },
        { txt: "테이퍼드팬츠", type: "tapered", link: "/woman/tapered" },
        { txt: "상의", type: "top", link: "/woman/top" },
        { txt: "하의", type: "bottom", link: "/woman/bottom" },
        { txt: "아우터", type: "outer", link: "/woman/outer" },
      ],
    },
    {
      txt: "맨즈",
      link: "/man",
      sub: [
        { txt: "상의", type: "top", link: "/man/top" },
        { txt: "하의", type: "bottom", link: "/man/bottom" },
        { txt: "아우터", type: "outer", link: "/man/outer" },
      ],
    },
    {
      txt: "커뮤니티",
      link: "/community",
      sub: [
        { txt: "이벤트", link: "/community/event" },
        { txt: "공지사항", link: "/community/notice" },
        { txt: "고객만족센터", link: "/community/cscenter" },
        { txt: "웹진", link: "/community/webzine" },
      ],
    },
  ],
  rightBtnMenu: [
    { txt: "search", link: null },
    { txt: "cart", link: "/cart" },
    { txt: "mypage", link: "/mypage" },
  ],
};
