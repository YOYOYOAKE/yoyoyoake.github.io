import{_ as a,c as t,b as n,o as p}from"./app-BAnlJ3lg.js";const e={};function l(i,s){return p(),t("div",null,s[0]||(s[0]=[n('<h2 id="_1-着色频率" tabindex="-1"><a class="header-anchor" href="#_1-着色频率"><span>1 着色频率</span></a></h2><p>下图中展示了同一模型采用不同的着色频率的结果. 从左至右分别是<strong>Flat着色</strong>、<strong>Gouraud着色</strong>、<strong>Phong着色</strong>。</p><p><img src="https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734943879201.png" alt="1734943879201"></p><ul><li><p>Flat着色</p><p>Flat着色是对每一个三角形面进行着色，每一个三角形面中着色的结果相同. 自然，这种方式不适合对光滑曲面着色.</p></li><li><p>Gouraud着色</p><p>这种方式是在模型的每一个顶点处着色，三角形内部的值使用插值法求得.</p></li><li><p>Phong着色</p><p>Phong着色是在模型上插值出每一个点的法线方向，然后对其进行着色.</p></li></ul><p>在实际应用中，三种着色频率各有优劣，应该根据实际情况选择最佳着色频率.</p><p><img src="https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734945190392.png" alt="1734945190392"></p><h3 id="_1-1-逐顶点插值法" tabindex="-1"><a class="header-anchor" href="#_1-1-逐顶点插值法"><span>1.1 逐顶点插值法</span></a></h3><p>Gouraud着色中使用了逐顶点插值求顶点处的法线.</p><p><img src="https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734945489789.png" alt="1734945489789"></p><p>不难得到顶点处的法线为</p><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mi mathvariant="bold-italic">N</mi><mi>V</mi></msub><mo>=</mo><mfrac><mrow><mo>∑</mo><msub><mi mathvariant="bold-italic">N</mi><mi>i</mi></msub></mrow><mrow><mi mathvariant="normal">∣</mi><mi mathvariant="normal">∣</mi><mo>∑</mo><msub><mi mathvariant="bold-italic">N</mi><mi>i</mi></msub><mi mathvariant="normal">∣</mi><mi mathvariant="normal">∣</mi></mrow></mfrac></mrow><annotation encoding="application/x-tex"> \\boldsymbol{N}_V = \\frac{\\sum \\boldsymbol{N}_i}{||\\sum \\boldsymbol{N}_i||} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8361em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord"><span class="mord"><span class="mord boldsymbol" style="margin-right:0.11424em;">N</span></span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.22222em;">V</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.363em;vertical-align:-0.936em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord">∣∣</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord"><span class="mord"><span class="mord boldsymbol" style="margin-right:0.11424em;">N</span></span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mord">∣∣</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord"><span class="mord"><span class="mord boldsymbol" style="margin-right:0.11424em;">N</span></span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.936em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span></p><h3 id="_1-2-逐像素插值法" tabindex="-1"><a class="header-anchor" href="#_1-2-逐像素插值法"><span>1.2 逐像素插值法</span></a></h3><p>Phong着色中使用了逐像素插值法求各个像素处的法线.</p><h2 id="_2-渲染管线" tabindex="-1"><a class="header-anchor" href="#_2-渲染管线"><span>2 渲染管线</span></a></h2><p>渲染管线指的是从模型到图像的过程.</p><p><img src="https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734945894562.png" alt="1734945894562"></p><p>现代GPU就是渲染管线全流程的硬件实现.</p><h2 id="_3-纹理映射" tabindex="-1"><a class="header-anchor" href="#_3-纹理映射"><span>3 纹理映射</span></a></h2><p>和一个单纯的石膏球不同，现实中的物体往往具有多样的漫反射性质. 例如一本书，书的封面往往更加光滑，而内部的纸就会粗糙一些.</p><p>三维模型的表面是二维的，我们把这个二维表面展开，就得到了一张平面图片. 三维模型表面上的每个点都能在这个二维平面上找到对应的点.</p><p>我们将这个二维平面称为<strong>纹理</strong>. 三维模型表面上的点对应到二维称为<strong>纹理映射</strong>.</p><p>通常我们不去关心纹理映射（因为太难了！）.</p><p>纹理可以在模型上使用不止一次，因此我们设计纹理时通常会考虑其重复性. 下图的这些纹理可以重复多次而不留下拼接痕迹.</p><p><img src="https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734947999747.png" alt="1734947999747"></p>',24)]))}const m=a(e,[["render",l],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/graphics/08/","title":"Lecture 08 着色-2 着色频率、图形管线、纹理映射","lang":"zh-CN","frontmatter":{"title":"Lecture 08 着色-2 着色频率、图形管线、纹理映射","createTime":"2024/12/23 15:52:58","permalink":"/graphics/08/","description":"1 着色频率 下图中展示了同一模型采用不同的着色频率的结果. 从左至右分别是Flat着色、Gouraud着色、Phong着色。 1734943879201 Flat着色 Flat着色是对每一个三角形面进行着色，每一个三角形面中着色的结果相同. 自然，这种方式不适合对光滑曲面着色. Gouraud着色 这种方式是在模型的每一个顶点处着色，三角形内部的值使...","head":[["meta",{"property":"og:url","content":"https://yoyoyoake.github.io/graphics/08/"}],["meta",{"property":"og:site_name","content":"YOYOArticle"}],["meta",{"property":"og:title","content":"Lecture 08 着色-2 着色频率、图形管线、纹理映射"}],["meta",{"property":"og:description","content":"1 着色频率 下图中展示了同一模型采用不同的着色频率的结果. 从左至右分别是Flat着色、Gouraud着色、Phong着色。 1734943879201 Flat着色 Flat着色是对每一个三角形面进行着色，每一个三角形面中着色的结果相同. 自然，这种方式不适合对光滑曲面着色. Gouraud着色 这种方式是在模型的每一个顶点处着色，三角形内部的值使..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734943879201.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-23T10:04:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-23T10:04:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Lecture 08 着色-2 着色频率、图形管线、纹理映射\\",\\"image\\":[\\"https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734943879201.png\\",\\"https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734945190392.png\\",\\"https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734945489789.png\\",\\"https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734945894562.png\\",\\"https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734947999747.png\\"],\\"dateModified\\":\\"2024-12-23T10:04:03.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.96,"words":587},"git":{"updatedTime":1734948243000,"contributors":[{"name":"YOAKE","email":"yo2yoake@outlook.com","commits":1,"avatar":"https://avatars.githubusercontent.com/YOAKE?v=4","url":"https://github.com/YOAKE"}]},"autoDesc":true,"filePathRelative":"notes/graphics/Lecture-08.md","bulletin":false}');export{m as comp,c as data};