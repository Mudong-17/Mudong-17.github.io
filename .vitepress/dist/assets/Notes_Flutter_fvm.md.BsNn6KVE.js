import{_ as s,c as t,o as i,k as a}from"./chunks/framework.B1TVv_7S.js";const u=JSON.parse('{"title":"使用FVM管理Flutter版本","description":"使用FVM管理Flutter版本，可以方便的切换不同的Flutter版本","frontmatter":{"title":"使用FVM管理Flutter版本","description":"使用FVM管理Flutter版本，可以方便的切换不同的Flutter版本","categories":"Note","date":"2024-06-26T00:00:00.000Z","tags":["Flutter","FVM"],"cover":"https://r2-blog.mudong17.com/2024/09/6fb066fc3081f917b58719ba8a081f90.jfif","author":{"name":"暮冬拾柒","avatar":"https://s2.loli.net/2024/06/26/hpinJ6Fb9UIZTCA.jpg"},"next":{"text":"编辑器开发 Flutter 实用技巧","link":"/Notes/Flutter/ide"}},"headers":[],"relativePath":"Notes/Flutter/fvm.md","filePath":"Notes/Flutter/fvm.md"}'),e={name:"Notes/Flutter/fvm.md"},l=a(`<h2 id="什么是-fvm" tabindex="-1">什么是 FVM <a class="header-anchor" href="#什么是-fvm" aria-label="Permalink to &quot;什么是 FVM&quot;">​</a></h2><p><code>FVM</code> 是一个为 <code>Flutter</code> 开发的版本管理工具，它允许你在同一台机器上安装和使用多个 <code>Flutter</code> 版本。<code>FVM</code> 提供了一种简单的方式来切换项目之间的 <code>Flutter</code> 版本，无需重新下载或配置。</p><h2 id="为什么要使用-fvm" tabindex="-1">为什么要使用 FVM <a class="header-anchor" href="#为什么要使用-fvm" aria-label="Permalink to &quot;为什么要使用 FVM&quot;">​</a></h2><ol><li>版本隔离</li></ol><p>允许每个项目维护独立的 <code>Flutter</code> 版本，避免不同项目间可能的版本冲突问题。不同项目可能依赖不同 <code>Flutter</code> 版本，版本隔离确保项目独立性，开发者可根据需要选择合适的 <code>Flutter</code> 版本开发和测试，无需担心版本不匹配问题。</p><ol start="2"><li>快速切换</li></ol><p>简单命令即可在不同项目间快速切换 <code>Flutter</code> 版本，提供灵活性，使开发者轻松应对项目需求，无需手动管理不同版本的 <code>Flutter SDK</code> ，极大提高开发效率和便捷性。</p><ol start="3"><li>节省空间</li></ol><p>允许共享相同版本的 Flutter SDK，并且只需下载一次即可在多个项目中使用，避免重复下载相同版本的 Flutter SDK，节省存储空间。特别适用于需要频繁切换 Flutter 版本或同时在多个项目中使用 Flutter 的开发者，可显著减少磁盘占用和下载时间。</p><h2 id="安装-fvm" tabindex="-1">安装 FVM <a class="header-anchor" href="#安装-fvm" aria-label="Permalink to &quot;安装 FVM&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-nIEyw" id="tab-NzhrKZI" checked><label for="tab-NzhrKZI">Homebrew</label><input type="radio" name="group-nIEyw" id="tab-3EHM1R9"><label for="tab-3EHM1R9">Chocolatey</label><input type="radio" name="group-nIEyw" id="tab-i5Hk5uV"><label for="tab-i5Hk5uV">Pub</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fvm</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">choco</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fvm</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fvm</span></span></code></pre></div></div></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><ul><li>环境变量配置 安装 fvm 后，设置环境变量 FVM_HOME 或 FVM_GIT_CACHE</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;export FVM_HOME=~/.fvm&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;export PATH=$FVM_HOME/default/bin:$PATH&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;export PUB_HOSTED_URL=https://pub.flutter-io.cn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.zshrc</span></span></code></pre></div><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><ul><li><code>fvm releases</code> 查看所有可用的 Flutter 版本</li><li><code>fvm install &lt;version&gt;</code> 安装指定版本的 Flutter</li><li><code>fvm remove &lt;version&gt;</code> 删除指定版本的 Flutter</li><li><code>fvm use &lt;version&gt;</code> 在项目根目录使用指定版本的 Flutter</li><li><code>fvm list</code> 查看已安装的 Flutter 版本</li><li><code>fvm global &lt;version&gt;</code> 设置全局的 Flutter 版本</li></ul>`,16),n=[l];function h(o,p,r,d,c,F){return i(),t("div",null,n)}const g=s(e,[["render",h]]);export{u as __pageData,g as default};
