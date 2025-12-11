const config = [
  {
    name: "shorts",
    inputId: "shorts-input",
    selectors: [
      'a[title="Shorts"]',
      "ytd-reel-shelf-renderer",
      "ytd-rich-section-renderer",
    ],
  },
  {
    name: "browser",
    inputId: "browser-input",
    selectors: ["ytd-browse[page-subtype='home']"],
  },
  {
    name: "related",
    inputId: "related-input",
    selectors: ["#related"],
  },
  {
    name: "comments",
    inputId: "comments-input",
    selectors: ["#comments"],
  },
  {
    name: "thumbs",
    inputId: "thumbs-input",
    selectors: [
      "yt-image>img",
      ".yt-thumbnail-view-model__image>img",
      "ytp-ce-covering-image",
      "ytThumbnailViewModelImage"
    ],
  },
];
