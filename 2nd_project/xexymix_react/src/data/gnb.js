export const gnbMenu = {
  gnbCategory: [
    { txt: "신상할인", link: "/new" },
    { txt: "베스트", link: "/best" },
    {
      txt: "우먼즈",
      link: "/woman",
      sub: [
        { txt: "레깅스", link: "" },
        { txt: "조거팬츠", link: "" },
        { txt: "상의", link: "" },
        { txt: "하의", link: "" },
        { txt: "아우터", link: "" },
      ],
    },
    {
      txt: "맨즈",
      link: "/man",
      sub: [
        { txt: "상의", link: "" },
        { txt: "하의", link: "" },
        { txt: "아우터", link: "" },
      ],
    },
    {
      txt: "골프",
      link: "/golf",
      sub: [
        { txt: "우먼즈", link: "" },
        { txt: "맨즈", link: "" },
        { txt: "용품", link: "" },
      ],
    },
    {
      txt: "커뮤니티",
      link: "/community",
      sub: [
        { txt: "이벤트", link: "" },
        { txt: "공지사항", link: "" },
        { txt: "고객만족센터", link: "" },
        { txt: "웹진", link: "" },
      ],
    },
  ],
  rightBtnMenu: [
    { txt: "search", link: null },
    { txt: "cart", link: "/cart" },
    { txt: "mypage", link: "/mypage" },
  ],
};
