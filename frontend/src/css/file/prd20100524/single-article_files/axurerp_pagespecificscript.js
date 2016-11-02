
var PageName = 'single-article';
var PageId = 'pc2d6bd25fa264ff48b8ede40870f4122'
var PageUrl = 'single-article.html'
document.title = 'single-article';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

var u86 = document.getElementById('u86');

var u54 = document.getElementById('u54');

var u60 = document.getElementById('u60');

var u29 = document.getElementById('u29');

var u102 = document.getElementById('u102');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u102ann'), "<div id='u102Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u102', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u102').replace(/\[\[label\]\]/g, "SingleArticlePage:show subtitle of each page"));

InsertAfterBegin(document.body, "<div id='u102based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u102base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u102based = document.getElementById('u102based');
            
InsertBeforeEnd(u102based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show subtitle of each page. 显示文章每个分页的标题。如果文章只有一个分页 则不显示该整块分页导航<BR><BR></div>");

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{

if (true) {

	self.location.href="articlelist-aurthor.html" + GetQuerystring();

}

}

var u45 = document.getElementById('u45');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u45ann'), "<div id='u45Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u45', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u45').replace(/\[\[label\]\]/g, "SingleArticlePage:hottest aritcles"));

InsertAfterBegin(document.body, "<div id='u45based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u45base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u45based = document.getElementById('u45based');
            
InsertBeforeEnd(u45based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show hottest aritcles. 逻辑:目前是和新闻,评测,导购中部的推荐的焦点新闻一样的推荐位.(以后7天内浏览量排序. 浏览量最高的排在最上面, 例如新闻tab 则列出7天内 新闻频道 浏览量最高的10篇文章).通过鼠标MouseOver效果,切换新闻/评测/导购.显示顺序:nodequeue.该tab默认显示需要和该文章频道有关,如果该文章是导购文章,默认tab就为导购的tab<BR><BR></div>");

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u51 = document.getElementById('u51');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u51ann'), "<div id='u51Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u51', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u51').replace(/\[\[label\]\]/g, "SingleArticlePage:New released CarModel "));

InsertAfterBegin(document.body, "<div id='u51based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u51base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u51based = document.getElementById('u51based');
            
InsertBeforeEnd(u51based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show New released CarModel . 逻辑:根据车系Model的“上市时间”排序(其实应该按照version的上市时间,但目前没有该字段),并排除车系Model所属的version价格为0的车系.显示顺序:车系Model上市时间排序.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:4:3-250*188<BR><BR></div>");

var u96 = document.getElementById('u96');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u96ann'), "<div id='u96Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u96', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u96').replace(/\[\[label\]\]/g, "SingleArticlePage:Related car models"));

InsertAfterBegin(document.body, "<div id='u96based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u96base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u96based = document.getElementById('u96based');
            
InsertBeforeEnd(u96based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Related car models. 显示文章的相关车型。按照车型的字母顺序排序。如果该文章只选择了一个车型，那么需要在标题上写出车型名称 例如文字“相关车型”改为”xxx车型“<BR><BR></div>");

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{

if (true) {

	self.location.href="articlelist-aurthor.html" + GetQuerystring();

}

}

var u79 = document.getElementById('u79');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u79ann'), "<div id='u79Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u79', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u79').replace(/\[\[label\]\]/g, "SingleArticlePage:show all aritcles of this editor"));

InsertAfterBegin(document.body, "<div id='u79based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u79base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u79based = document.getElementById('u79based');
            
InsertBeforeEnd(u79based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show all aritcles of this editor. 点击进入该编辑的文章列表.<BR><BR></div>");

u79.style.cursor = 'pointer';
if (bIE) u79.attachEvent("onclick", Clicku79);
else u79.addEventListener("click", Clicku79, true);
function Clicku79(e)
{

if (true) {

	self.location.href="articlelist-aurthor.html" + GetQuerystring();

}

}

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u80 = document.getElementById('u80');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u99 = document.getElementById('u99');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u99ann'), "<div id='u99Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u99', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u99').replace(/\[\[label\]\]/g, "SingleArticlePage:agree or disagree"));

InsertAfterBegin(document.body, "<div id='u99based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u99base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u99based = document.getElementById('u99based');
            
InsertBeforeEnd(u99based, "<div class='anncontent'><span class='annfieldname'>Description:</span> agree or disagree button 针对每一个回复的评论 都可以投出&quot;赞成&quot; 与&quot;反对&quot; 的评分. 点击 赞成 和 反对 立即 点数加1， 在没有刷新该页面前,无法再 评分. (点击 赞成 或 反对 链接评分后 赞成 和 反对 变无链接)<br>参见网易http://comment.news.163.com/news2_bbs/68GSBL3T000146BC.html<BR><BR></div>");

var u5 = document.getElementById('u5');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u5ann'), "<div id='u5Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u5', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u5').replace(/\[\[label\]\]/g, "eader:Small car"));

InsertAfterBegin(document.body, "<div id='u5based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u5base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u5based = document.getElementById('u5based');
            
InsertBeforeEnd(u5based, "<div class='anncontent'><span class='annfieldname'>Description:</span> car category:Small car<BR><BR></div>");

u5.style.cursor = 'pointer';
if (bIE) u5.attachEvent("onclick", Clicku5);
else u5.addEventListener("click", Clicku5, true);
function Clicku5(e)
{

if (true) {

	self.location.href="CarCategory.html" + GetQuerystring();

}

}

var u23 = document.getElementById('u23');

var u76 = document.getElementById('u76');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u76ann'), "<div id='u76Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u76', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u76').replace(/\[\[label\]\]/g, "SingleArticlePage:keyword"));

InsertAfterBegin(document.body, "<div id='u76based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u76base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u76based = document.getElementById('u76based');
            
InsertBeforeEnd(u76based, "<div class='anncontent'><span class='annfieldname'>Description:</span> keyword,type by editor. 文章的关键词 使用H5标签.点击进入关键词的文章列表页面. 如果是转载文章显示&quot;本文来源：转载自####网站，作者：####&quot;. 需要在文章中增加一个作者字段,给编辑填写文章作者.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> this field Belong to article 文章的一个字段属性<BR><BR></div>");

u76.style.cursor = 'pointer';
if (bIE) u76.attachEvent("onclick", Clicku76);
else u76.addEventListener("click", Clicku76, true);
function Clicku76(e)
{

if (true) {

	self.location.href="articlelist-tag.html" + GetQuerystring();

}

}

var u14 = document.getElementById('u14');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u14ann'), "<div id='u14Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u14', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u14').replace(/\[\[label\]\]/g, "header:Login in button"));

InsertAfterBegin(document.body, "<div id='u14based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u14base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u14based = document.getElementById('u14based');
            
InsertBeforeEnd(u14based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Login in button<BR><BR></div>");

var u67 = document.getElementById('u67');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u67ann'), "<div id='u67Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u67', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u67').replace(/\[\[label\]\]/g, "SingleArticlePage:editor"));

InsertAfterBegin(document.body, "<div id='u67based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u67base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u67based = document.getElementById('u67based');
            
InsertBeforeEnd(u67based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show editor of this article.用来显示文章的发布编辑,点击进入该编辑<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> this field Belong to article 文章的一个字段属性<BR><BR></div>");

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u73 = document.getElementById('u73');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u73ann'), "<div id='u73Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u73', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u73').replace(/\[\[label\]\]/g, "SingleArticlePage:pre-text link "));

InsertAfterBegin(document.body, "<div id='u73based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u73base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u73based = document.getElementById('u73based');
            
InsertBeforeEnd(u73based, "<div class='anncontent'><span class='annfieldname'>Description:</span> pre-text link to the homepage&nbsp; 自动文字前缀:&quot;Autobild 汽车画报网6月11日报道 &quot; 链接到首页.其中日期为该文章发布时间,需要在文章第一页显示在正文前面. 如果是转载的文章（非原创的文章） 不显示 “Autobild 汽车画报网7月14日报道” 这句话<BR><BR></div>");

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u48 = document.getElementById('u48');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u48ann'), "<div id='u48Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u48', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u48').replace(/\[\[label\]\]/g, "SingleArticlePage:hottest videos"));

InsertAfterBegin(document.body, "<div id='u48based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u48base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u48based = document.getElementById('u48based');
            
InsertBeforeEnd(u48based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show hottest videos. 逻辑:目前是与视频频道推荐的焦点视频推荐位相同.(以后应该根据7天的视频的浏览量排名来自动调用).显示顺序:nodequeue<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:4:3-250*188<BR><BR></div>");

var u4 = document.getElementById('u4');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u4ann'), "<div id='u4Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u4', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u4').replace(/\[\[label\]\]/g, "header:Mini car "));

InsertAfterBegin(document.body, "<div id='u4based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u4base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u4based = document.getElementById('u4based');
            
InsertBeforeEnd(u4based, "<div class='anncontent'><span class='annfieldname'>Description:</span> car category:Mini car<BR><BR></div>");

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{

if (true) {

	self.location.href="CarCategory.html" + GetQuerystring();

}

}

var u11 = document.getElementById('u11');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u11ann'), "<div id='u11Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u11', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u11').replace(/\[\[label\]\]/g, "header:RSS feed"));

InsertAfterBegin(document.body, "<div id='u11based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u11base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u11based = document.getElementById('u11based');
            
InsertBeforeEnd(u11based, "<div class='anncontent'><span class='annfieldname'>Description:</span> RSS feed is a page show simple articles using XML format<BR><BR></div>");

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	self.location.href="rss.html" + GetQuerystring();

}

}

var u64 = document.getElementById('u64');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u64ann'), "<div id='u64Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u64', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u64').replace(/\[\[label\]\]/g, "SingleArticlePage:18 character Full Title"));

InsertAfterBegin(document.body, "<div id='u64based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u64base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u64based = document.getElementById('u64based');
            
InsertBeforeEnd(u64based, "<div class='anncontent'><span class='annfieldname'>Description:</span> 18 character Full Title. 文章18字标题 使用H1标签<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> this field Belong to article 文章的一个字段属性<BR><BR></div>");

var u70 = document.getElementById('u70');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u70ann'), "<div id='u70Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u70', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u70').replace(/\[\[label\]\]/g, "SingleArticlePage:title of each pagebreak"));

InsertAfterBegin(document.body, "<div id='u70based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u70base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u70based = document.getElementById('u70based');
            
InsertBeforeEnd(u70based, "<div class='anncontent'><span class='annfieldname'>Description:</span> dropdown list to show title of each pagebreak.显示每个分页的标题,在文章每个分页都需要显示. 如果文章只有一个分页 则不显示该下拉框<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> this field Belong to article 文章的一个字段属性<BR><BR></div>");

var u39 = document.getElementById('u39');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u103 = document.getElementById('u103');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u103ann'), "<div id='u103Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u103', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u103').replace(/\[\[label\]\]/g, "SingleArticlePage:article post time"));

InsertAfterBegin(document.body, "<div id='u103based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u103base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u103based = document.getElementById('u103based');
            
InsertBeforeEnd(u103based, "<div class='anncontent'><span class='annfieldname'>Description:</span> article post time 目前的文章的发布时间为文为 文章首次由“未审核”更改到“已审核”时间，&nbsp; 如果再次由“已审核”更改成“未审核”或“未审核”更改到“已审核”，发布时间不变，仍为第一次审核的时间。<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> this field Belong to article 文章的一个字段属性<BR><BR></div>");

var u84 = document.getElementById('u84');

var u52 = document.getElementById('u52');

var u90 = document.getElementById('u90');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u27 = document.getElementById('u27');

var u33 = document.getElementById('u33');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u77 = document.getElementById('u77');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u77ann'), "<div id='u77Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u77', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u77').replace(/\[\[label\]\]/g, "SingleArticlePage:copyright declare"));

InsertAfterBegin(document.body, "<div id='u77based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u77base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u77based = document.getElementById('u77based');
            
InsertBeforeEnd(u77based, "<div class='anncontent'><span class='annfieldname'>Description:</span> copyright declare,link to homepage. 文章的版权声明 如果是原创文章 显示&quot;版权声明：本文版权为Autobild 汽车画报网所有，转载请注明出处&quot; 链接到首页.如果是转载 则显示“本文来源：转载 凤凰网汽车“<BR><BR></div>");

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u100 = document.getElementById('u100');

var u58 = document.getElementById('u58');

var u15 = document.getElementById('u15');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u15ann'), "<div id='u15Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u15', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u15').replace(/\[\[label\]\]/g, "header:Forget password button"));

InsertAfterBegin(document.body, "<div id='u15based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u15base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u15based = document.getElementById('u15based');
            
InsertBeforeEnd(u15based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Forget password button<BR><BR></div>");

var u21 = document.getElementById('u21');

var u74 = document.getElementById('u74');

var u49 = document.getElementById('u49');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u49ann'), "<div id='u49Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u49', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u49').replace(/\[\[label\]\]/g, "SingleArticlePage:related articles"));

InsertAfterBegin(document.body, "<div id='u49based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u49base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u49based = document.getElementById('u49based');
            
InsertBeforeEnd(u49based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show related articles of this article. 逻辑:第一逻辑:按照该文章的关联的车系Model找出相关的文章.第二逻辑:在第一逻辑文章数量不够时,根据该文章的关键字tags 找出相关的文章.显示顺序:文章发布时间.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:4:3-250*188<BR><BR></div>");

var u12 = document.getElementById('u12');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u12ann'), "<div id='u12Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u12', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u12').replace(/\[\[label\]\]/g, "header:Add to favour"));

InsertAfterBegin(document.body, "<div id='u12based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u12base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u12based = document.getElementById('u12based');
            
InsertBeforeEnd(u12based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Add to favour<BR><BR></div>");

var u65 = document.getElementById('u65');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u65ann'), "<div id='u65Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u65', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u65').replace(/\[\[label\]\]/g, "SingleArticlePage:Autobild original mark"));

InsertAfterBegin(document.body, "<div id='u65based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u65base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u65based = document.getElementById('u65based');
            
InsertBeforeEnd(u65based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Autobild original mark.用来显示autobild原创还是转载. 通过发表文章时的一个字段选择控制. 默认不选时 为:&quot;Autobild 汽车画报网 [原创]&quot;. 文章如果是原创,那么显示&quot;Autobild 汽车画报网 [原创]&quot;,如果是转载 显示&quot;Autobild 汽车画报网 转载 CHE168&quot;<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> this field Belong to article 文章的一个字段属性<BR><BR></div>");

var u71 = document.getElementById('u71');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u71ann'), "<div id='u71Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u71', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u71').replace(/\[\[label\]\]/g, "SingleArticlePage:teaser/news leads"));

InsertAfterBegin(document.body, "<div id='u71based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u71base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u71based = document.getElementById('u71based');
            
InsertBeforeEnd(u71based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show teaser/news leads 文章导语,自动调用文章的导语字段,需要在每一个分页都要显示.自动加上&quot;核心提示：&quot;前缀.并链接到该篇文章<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> this field Belong to article 文章的一个字段属性<BR><BR></div>");

var u94 = document.getElementById('u94');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u94ann'), "<div id='u94Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u94', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u94').replace(/\[\[label\]\]/g, "SingleArticlePage:Related car models SMP Nav"));

InsertAfterBegin(document.body, "<div id='u94based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u94base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u94based = document.getElementById('u94based');
            
InsertBeforeEnd(u94based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show Related car models' SMP Nav.显示该文章的”相关车型“，如果该文章关联多个“相关车型”，则需要通过上下的滚动效果来切换不同的车型. 多个车型显示顺序按照车型的字母排序。<BR><BR></div>");

var u62 = document.getElementById('u62');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u62ann'), "<div id='u62Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u62', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u62').replace(/\[\[label\]\]/g, "SingleArticlePage:Add our website link to IE or firefox favorite "));

InsertAfterBegin(document.body, "<div id='u62based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u62base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u62based = document.getElementById('u62based');
            
InsertBeforeEnd(u62based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Add our website link to IE or firefox favorite . 加入浏览器收藏夹功能.<BR><BR></div>");

var u46 = document.getElementById('u46');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u46ann'), "<div id='u46Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u46', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u46').replace(/\[\[label\]\]/g, "SingleArticlePage:hottest albums"));

InsertAfterBegin(document.body, "<div id='u46based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u46base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u46based = document.getElementById('u46based');
            
InsertBeforeEnd(u46based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show hottest albums. 逻辑:目前是和美图频道轮显的焦点图相同的推荐位.(以后应该根据相册的7天的浏览量排名来自动调用,并排除子频道“香车美女”的相册).显示顺序:nodequeue.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:3:2-135*90<BR><BR></div>");

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u37 = document.getElementById('u37');

var u43 = document.getElementById('u43');

var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u82 = document.getElementById('u82');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u68 = document.getElementById('u68');

var u25 = document.getElementById('u25');

var u31 = document.getElementById('u31');

var u97 = document.getElementById('u97');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u97ann'), "<div id='u97Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u97', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u97').replace(/\[\[label\]\]/g, "SingleArticlePage:show all comments"));

InsertAfterBegin(document.body, "<div id='u97based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u97base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u97based = document.getElementById('u97based');
            
InsertBeforeEnd(u97based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show all comments. 点击进入所有评论页面。<BR><BR></div>");

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{

if (true) {

	self.location.href="articlelist-aurthor.html" + GetQuerystring();

}

}

var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u88 = document.getElementById('u88');

var u8 = document.getElementById('u8');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u8ann'), "<div id='u8Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u8', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u8').replace(/\[\[label\]\]/g, "header:MPV"));

InsertAfterBegin(document.body, "<div id='u8based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u8base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u8based = document.getElementById('u8based');
            
InsertBeforeEnd(u8based, "<div class='anncontent'><span class='annfieldname'>Description:</span> car category:MPV<BR><BR></div>");

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{

if (true) {

	self.location.href="CarCategory.html" + GetQuerystring();

}

}

var u72 = document.getElementById('u72');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u72ann'), "<div id='u72Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u72', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u72').replace(/\[\[label\]\]/g, "SingleArticlePage:promoted bbs post"));

InsertAfterBegin(document.body, "<div id='u72based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u72base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u72based = document.getElementById('u72based');
            
InsertBeforeEnd(u72based, "<div class='anncontent'><span class='annfieldname'>Description:</span> promoted bbs post, 论坛推荐的一个帖子,与论坛首页焦点轮显的第一个位置相同的推荐位.<BR><BR></div>");

var u56 = document.getElementById('u56');

var u95 = document.getElementById('u95');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u95ann'), "<div id='u95Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u95', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u95').replace(/\[\[label\]\]/g, "SingleArticlePage:Related articles by Tags"));

InsertAfterBegin(document.body, "<div id='u95based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u95base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u95based = document.getElementById('u95based');
            
InsertBeforeEnd(u95based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Related articles by Tags. 第一逻辑：通过文章关键词调用的文章。如果该文章只选择了一个车型，那么需要在标题上写出车型名称.&nbsp; 例如：xxx车型相关文章。当第一逻辑文章数量不够时。第二逻辑：通过文章相关车型调用的文章。文章排序：按照文章的发布时间排序。<BR><BR></div>");

u95.style.cursor = 'pointer';
if (bIE) u95.attachEvent("onclick", Clicku95);
else u95.addEventListener("click", Clicku95, true);
function Clicku95(e)
{

if (true) {

	self.location.href="articlelist-aurthor.html" + GetQuerystring();

}

}

var u47 = document.getElementById('u47');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u47ann'), "<div id='u47Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u47', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u47').replace(/\[\[label\]\]/g, "SingleArticlePage:hottest car baby albums"));

InsertAfterBegin(document.body, "<div id='u47based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u47base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u47based = document.getElementById('u47based');
            
InsertBeforeEnd(u47based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show hottest car baby albums. 逻辑:目前是自动调用频道为&quot;香车美女&quot;最新的相册.(以后应该根据&quot;香车美女&quot;子频道的相册的7天的浏览量排名来自动调用).显示顺序:相册发布时间<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:2:3-135*203<BR><BR></div>");

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u92 = document.getElementById('u92');

var u2 = document.getElementById('u2');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u50 = document.getElementById('u50');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u50ann'), "<div id='u50Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u50', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u50').replace(/\[\[label\]\]/g, "SingleArticlePage:related bbs post"));

InsertAfterBegin(document.body, "<div id='u50based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u50base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u50based = document.getElementById('u50based');
            
InsertBeforeEnd(u50based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show related bbs post of this article. 逻辑:第一逻辑:按照该文章的关联的车系Model的论坛版块链接找出相关的帖子.第二逻辑:在第一逻辑数量不够时,显示7天内帖子点击量排序.显示:帖子标题和帖子的最后回复时间.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:4:3-250*188<BR><BR></div>");

var u19 = document.getElementById('u19');

var u78 = document.getElementById('u78');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u78ann'), "<div id='u78Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u78', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u78').replace(/\[\[label\]\]/g, "SingleArticlePage:bbs link"));

InsertAfterBegin(document.body, "<div id='u78based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u78base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u78based = document.getElementById('u78based');
            
InsertBeforeEnd(u78based, "<div class='anncontent'><span class='annfieldname'>Description:</span> bbs link. 固定文字,链接到论坛首页.<BR><BR></div>");

u78.style.cursor = 'pointer';
if (bIE) u78.attachEvent("onclick", Clicku78);
else u78.addEventListener("click", Clicku78, true);
function Clicku78(e)
{

if (true) {

	self.location.href="bbs.autobild.com.cn" + "";

}

}

var u7 = document.getElementById('u7');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u7ann'), "<div id='u7Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u7', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u7').replace(/\[\[label\]\]/g, "header:Mid-size sedan"));

InsertAfterBegin(document.body, "<div id='u7based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u7base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u7based = document.getElementById('u7based');
            
InsertBeforeEnd(u7based, "<div class='anncontent'><span class='annfieldname'>Description:</span> car category:Mid-size sedan<BR><BR></div>");

u7.style.cursor = 'pointer';
if (bIE) u7.attachEvent("onclick", Clicku7);
else u7.addEventListener("click", Clicku7, true);
function Clicku7(e)
{

if (true) {

	self.location.href="CarCategory.html" + GetQuerystring();

}

}

var u41 = document.getElementById('u41');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u16 = document.getElementById('u16');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u16ann'), "<div id='u16Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u16', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u16').replace(/\[\[label\]\]/g, "header:Registration button"));

InsertAfterBegin(document.body, "<div id='u16based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u16base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u16based = document.getElementById('u16based');
            
InsertBeforeEnd(u16based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Registration button<BR><BR></div>");

var u98 = document.getElementById('u98');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u98ann'), "<div id='u98Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u98', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u98').replace(/\[\[label\]\]/g, "SingleArticlePage:Comments"));

InsertAfterBegin(document.body, "<div id='u98based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u98base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u98based = document.getElementById('u98based');
            
InsertBeforeEnd(u98based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Comments. 显示文章的最新的10条评论。按照评论发布时间顺序最早发布的显示在自上面。<BR><BR></div>");

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{

if (true) {

	self.location.href="articlelist-aurthor.html" + GetQuerystring();

}

}

var u9 = document.getElementById('u9');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u9ann'), "<div id='u9Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u9', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u9').replace(/\[\[label\]\]/g, "header:SUV"));

InsertAfterBegin(document.body, "<div id='u9based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u9base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u9based = document.getElementById('u9based');
            
InsertBeforeEnd(u9based, "<div class='anncontent'><span class='annfieldname'>Description:</span> car category:SUV<BR><BR></div>");

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{

if (true) {

	self.location.href="CarCategory.html" + GetQuerystring();

}

}

var u13 = document.getElementById('u13');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u13ann'), "<div id='u13Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u13', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u13').replace(/\[\[label\]\]/g, "header:Registration Now"));

InsertAfterBegin(document.body, "<div id='u13based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u13base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u13based = document.getElementById('u13based');
            
InsertBeforeEnd(u13based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Registration link<BR><BR></div>");

var u66 = document.getElementById('u66');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u66ann'), "<div id='u66Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u66', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u66').replace(/\[\[label\]\]/g, "SingleArticlePage:comments"));

InsertAfterBegin(document.body, "<div id='u66based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u66base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u66based = document.getElementById('u66based');
            
InsertBeforeEnd(u66based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show how many comments.显示目前该文章的回复数量.点击进入评论列表页面.<BR><BR></div>");

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{

if (true) {

	self.location.href="commentslist.html" + "";

}

}

var u6 = document.getElementById('u6');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u6ann'), "<div id='u6Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u6', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u6').replace(/\[\[label\]\]/g, "header:Compact sedan"));

InsertAfterBegin(document.body, "<div id='u6based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u6base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u6based = document.getElementById('u6based');
            
InsertBeforeEnd(u6based, "<div class='anncontent'><span class='annfieldname'>Description:</span> car category:Compact sedan<BR><BR></div>");

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{

if (true) {

	self.location.href="CarCategory.html" + GetQuerystring();

}

}

var u35 = document.getElementById('u35');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u10 = document.getElementById('u10');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u10ann'), "<div id='u10Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u10', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u10').replace(/\[\[label\]\]/g, "header:Mid&amp;High-end sedan"));

InsertAfterBegin(document.body, "<div id='u10based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u10base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u10based = document.getElementById('u10based');
            
InsertBeforeEnd(u10based, "<div class='anncontent'><span class='annfieldname'>Description:</span> car category:Mid&amp;High-end sedan<BR><BR></div>");

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{

if (true) {

	self.location.href="CarCategory.html" + GetQuerystring();

}

}

var u63 = document.getElementById('u63');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u63ann'), "<div id='u63Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u63', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u63').replace(/\[\[label\]\]/g, "SingleArticlePage:share this article to the sina/QQ/kaixin/renren"));

InsertAfterBegin(document.body, "<div id='u63based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u63base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u63based = document.getElementById('u63based');
            
InsertBeforeEnd(u63based, "<div class='anncontent'><span class='annfieldname'>Description:</span> share this article link to the sina.com /QQ.com /kaixin001.com/renren.com. 分享链接功能,目前直接使用的是jiathis.com提供的功能.<BR><BR></div>");

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
if (window.OnLoad) OnLoad();
