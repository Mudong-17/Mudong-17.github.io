// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue";
import type { Theme } from "vitepress";
import "@tabler/icons-webfont/dist/tabler-icons.min.css";
import "./styles/vars.css";
import "./styles/base.css";
import "./styles/icons.css";
import "./styles/utils.css";
import "./styles/tailwind.css";
import "./styles/custom-block.css";
import "./styles/vp-code-group.css";
import "./styles/vp-code.css";
import "./styles/vp-doc.css";
import "./styles/vp-sponsor.css";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
