import{_ as i,e as a,i as h,o as t}from"./app-BlkZIGOO.js";const n={};function l(k,s){return t(),a("div",null,s[0]||(s[0]=[h(`<h2 id="_1-dql回顾" tabindex="-1"><a class="header-anchor" href="#_1-dql回顾"><span>1 DQL回顾</span></a></h2><p>在之前的DQL单表查询中，已经提到过单张真实表使用查询语法得到所需的虚拟表。而在多表查询中，需要利用合并语法将若干张真实表合并为一个中间虚拟表，在此基础上使用查询语句得到最终的所需要的虚拟表。</p><p>因此，多表查询的重点在于利用多表合并语法得到单张虚拟表。按照合并的方向，可以分为水平合并和垂直合并。</p><h2 id="_2-垂直合并" tabindex="-1"><a class="header-anchor" href="#_2-垂直合并"><span>2 垂直合并</span></a></h2><p>垂直合并用于将两张<strong>具有相同数量的字段且对应字段的数据类型相同</strong>的结果集合并成一张表。</p><p>垂直合并只是将结果集简单汇总，不涉及记录之间的连接，因此不要求有主外键。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">-- 去除重复结果合并。只有当两条记录的所有字段值均相同时，才认为是重复结果。</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">字段A1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">, </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">字段A2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> FROM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">UNION</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">字段B1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">, </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">字段B2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> FROM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">UNION</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">字段C1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">, </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">字段C2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> FROM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表C</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">-- 不去除重复结果</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">字段A1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">, </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">字段A2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> FROM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">UNION ALL</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">字段B1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">, </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">字段B2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> FROM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">UNION ALL</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">字段C1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">, </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">字段C2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> FROM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表C</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-水平合并" tabindex="-1"><a class="header-anchor" href="#_3-水平合并"><span>3 水平合并</span></a></h2><p>水平合并又称为连接，用于<strong>将两张表之间的记录与记录相连接</strong>，因此要求两个表必须有主外键。</p><h3 id="_3-1-内连接" tabindex="-1"><a class="header-anchor" href="#_3-1-内连接"><span>3.1 内连接</span></a></h3><p>内连接会根据指定的连接条件（主外键相等），将两个表中满足条件的记录进行匹配，并返回匹配成功的记录。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">-- 标准语法</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> FROM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> JOIN</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> ON</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A主键</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B外键</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">-- 非标准语法</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> FROM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">, </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> WHERE</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A主键</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B外键</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>连接查询就是将所有数据行拼接一次，然后根据<strong>主外键相等</strong>的条件筛选出正确连接的数据。</p><h3 id="_3-2-外连接" tabindex="-1"><a class="header-anchor" href="#_3-2-外连接"><span>3.2 外连接</span></a></h3><p>与内连接不同的是，外连接会返回所有符合匹配条件的记录，同时还会返回不符合匹配条件的记录。</p><p>外连接需要通过<strong>左和右</strong>指定一个逻辑主表，逻辑主表中的数据一定会被查询到。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">-- 左连接</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> FROM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> LEFT JOIN</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> ON</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A主键</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B外键</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">-- 右连接</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> FROM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> RIGHT JOIN</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> ON</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A主键</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B外键</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>推荐将分析的逻辑主表放在左侧以保证外连接的连续性。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> FROM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">LEFT JOIN</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> ON</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A主键</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B外键</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">LEFT JOIN</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表C</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> ON</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A主键</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表C</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">.</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表C外键</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">LEFT JOIN</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ...;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时结果中必包含表A的全部数据。</p><h3 id="_3-3-自然连接" tabindex="-1"><a class="header-anchor" href="#_3-3-自然连接"><span>3.3 自然连接</span></a></h3><p>自然连接会自动找到两个表中相同的字段名并判断相等，可以省略<code>ON &lt;表A&gt;.&lt;表A主键&gt; = &lt;表B&gt;.&lt;表B外键&gt;</code>。</p><p>但是需要注意的是，除了主外键之外，如果有其他列名也相同，也会自动判定相等。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">-- 自然内连接</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> FROM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> NATURAL JOIN</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">-- 自然左连接</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> FROM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> NATURAL LEFT JOIN</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">-- 自然右连接</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> FROM</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表A</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> NATURAL RIGHT JOIN</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> &lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">表B</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-自连接" tabindex="-1"><a class="header-anchor" href="#_3-4-自连接"><span>3.4 自连接</span></a></h3><p>自连接是指一个表与自身进行连接的操作。它在查询中使用相同表的别名来表示两个不同的实例，然后通过连接条件将这两个实例进行连接。</p><p>自连接是一种特殊的内外连接。当一个表中存在数据的引用关系，要查询的数据关联在同一个表的其他行中，就可以用自连接。</p><p>例如，员工表中存在员工编号和领导编号，当查询员工的领导信息时就属于自连接。</p><h2 id="_4-子查询" tabindex="-1"><a class="header-anchor" href="#_4-子查询"><span>4 子查询</span></a></h2><p>子查询是指在一个SQL语句中嵌套一个完整的SELECT语句。</p><ul><li><p>标量子查询</p><p>子查询返回单行单列</p></li><li><p>行子子查询</p><p>子查询返回一行多列</p></li><li><p>列子子查询</p><p>子查询返回一列多行</p></li><li><p>表子子查询</p><p>子查询返回多行多列</p></li></ul>`,31)]))}const e=i(n,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/mysql/07/","title":"Part 07 MySQL多表查询","lang":"zh-CN","frontmatter":{"title":"Part 07 MySQL多表查询","createTime":"2024/12/11 19:06:53","permalink":"/mysql/07/","description":"1 DQL回顾 在之前的DQL单表查询中，已经提到过单张真实表使用查询语法得到所需的虚拟表。而在多表查询中，需要利用合并语法将若干张真实表合并为一个中间虚拟表，在此基础上使用查询语句得到最终的所需要的虚拟表。 因此，多表查询的重点在于利用多表合并语法得到单张虚拟表。按照合并的方向，可以分为水平合并和垂直合并。 2 垂直合并 垂直合并用于将两张具有相同数...","head":[["meta",{"property":"og:url","content":"https://www.yoake.cc/mysql/07/"}],["meta",{"property":"og:site_name","content":"YOYOArticle"}],["meta",{"property":"og:title","content":"Part 07 MySQL多表查询"}],["meta",{"property":"og:description","content":"1 DQL回顾 在之前的DQL单表查询中，已经提到过单张真实表使用查询语法得到所需的虚拟表。而在多表查询中，需要利用合并语法将若干张真实表合并为一个中间虚拟表，在此基础上使用查询语句得到最终的所需要的虚拟表。 因此，多表查询的重点在于利用多表合并语法得到单张虚拟表。按照合并的方向，可以分为水平合并和垂直合并。 2 垂直合并 垂直合并用于将两张具有相同数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-12T01:26:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-12T01:26:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Part 07 MySQL多表查询\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-12T01:26:57.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":3.64,"words":1092},"git":{"updatedTime":1733966817000,"contributors":[{"name":"YOAKE","username":"YOAKE","email":"yo2yoake@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/YOAKE?v=4","url":"https://github.com/YOAKE"}]},"autoDesc":true,"filePathRelative":"notes/mysql/Part-07.md"}');export{e as comp,d as data};
