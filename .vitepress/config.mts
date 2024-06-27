import { defineConfigWithTheme } from "vitepress";

interface Music {
  title: string;
  artist: string;
  url: string;
  cover: string;
}

interface FindMe {
  icon: string;
  name: string;
  url: string;
  disabled?: boolean;
}

interface ThemeConfig {
  profile: {
    avatar: string;
    name: string;
    [key: string]: any;
  };
  musics: Music[];
  findme: FindMe[];
}

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  title: "暮冬Theme",
  description: "主题开发",
  themeConfig: {
    profile: {
      avatar: "https://s2.loli.net/2024/06/26/hpinJ6Fb9UIZTCA.jpg",
      name: "暮冬拾柒",
      description: "Full Stack Cloud Developer",
      motto: "慎终如始，则无败事",
      summary: [
        "我是来自中国的全栈开发工程师，向往着数字游民的生活。在数字世界里，我专注于设计精美的界面和深入挖掘编程的种种奥秘。",
        "在屏幕之外，我更喜欢亲近自然，享受回归本真的平静时光。我的生活是科技与自然的和谐共存，既有深夜码字的静谧，也有与自然对话的悠闲。",
      ],
    },
    musics: [
      {
        title: "Just Relax",
        artist: "Lesfm",
        url: "https://cdn.pixabay.com/audio/2021/11/23/audio_64b2dd1bce.mp3",
        cover: "",
      },
    ],
    findme: [
      {
        icon: "brand-github",
        name: "GitHub",
        url: "https://github.com/Mudong-17",
      },
      {
        icon: "mail",
        name: "E-Mail",
        url: "mailto:mudong17@protonmail.com",
      },
      {
        icon: "brand-zhihu",
        name: "知乎",
        url: "https://www.zhihu.com/people/mudong17",
        disabled: true,
      },
      {
        icon: "brand-juejin",
        name: "掘金",
        url: "https://juejin.cn/user/3251111749718541",
        disabled: true,
      },
      {
        icon: "brand-bilibili",
        name: "哔哩哔哩",
        url: "https://space.bilibili.com/168883",
        disabled: true,
      },
      {
        icon: "brand-x",
        name: "X",
        url: "https://twitter.com/Mudong17",
        disabled: true,
      },
      {
        icon: "brand-discord",
        name: "Discord",
        url: "https://discord.com/users/7987",
        disabled: true,
      },
      {
        icon: "brand-telegram",
        name: "Telegram",
        url: "https://t.me/mudong17",
        disabled: true,
      },
    ],
  },
});
