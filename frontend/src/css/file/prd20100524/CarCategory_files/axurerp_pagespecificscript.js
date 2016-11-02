
var PageName = 'CarCategory';
var PageId = 'pb0e00c5de0374400af98acbae8610a81'
var PageUrl = 'CarCategory.html'
document.title = 'CarCategory';

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

eval(GetDynamicPanelScript('u19', 3));

eval(GetDynamicPanelScript('u62', 3));

var u54 = document.getElementById('u54');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u54ann'), "<div id='u54Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u54', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u54').replace(/\[\[label\]\]/g, "CarCategoryPage:Photo album of this car category"));

InsertAfterBegin(document.body, "<div id='u54based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u54base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u54based = document.getElementById('u54based');
            
InsertBeforeEnd(u54based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset Photo album of the car models in this car category.逻辑:调用该级别下的Model最新上传的外观的相册. 排序:按照相册的发布时间排序.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:3:2-150*100<BR><BR></div>");

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u29 = document.getElementById('u29');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u29ann'), "<div id='u29Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u29', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u29').replace(/\[\[label\]\]/g, "CarCategoryPage:purchasing articles of this car category"));

InsertAfterBegin(document.body, "<div id='u29based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u29base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u29based = document.getElementById('u29based');
            
InsertBeforeEnd(u29based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset purchasing articles in this car category<BR><BR></div>");

var u45 = document.getElementById('u45');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u42 = document.getElementById('u42');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u42ann'), "<div id='u42Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u42', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u42').replace(/\[\[label\]\]/g, "CarCategoryPage:testing articles of this car category"));

InsertAfterBegin(document.body, "<div id='u42based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u42base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u42based = document.getElementById('u42based');
            
InsertBeforeEnd(u42based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset testing articles in this car category<BR><BR></div>");

var u26 = document.getElementById('u26');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u26ann'), "<div id='u26Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u26', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u26').replace(/\[\[label\]\]/g, "CarCategoryPage:Photo album of this car category"));

InsertAfterBegin(document.body, "<div id='u26based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u26base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u26based = document.getElementById('u26based');
            
InsertBeforeEnd(u26based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset Photo album of the car models in this car category.逻辑:调用该级别下的Model最新上传的外观的相册. 排序:按照相册的发布时间排序.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:3:2-150*100<BR><BR></div>");

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

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u76 = document.getElementById('u76');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u76ann'), "<div id='u76Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u76', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u76').replace(/\[\[label\]\]/g, "CarCategoryPage:sort by brand"));

InsertAfterBegin(document.body, "<div id='u76based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u76base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u76based = document.getElementById('u76based');
            
InsertBeforeEnd(u76based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Mouse over to switch the tab sort by brand<BR><BR></div>");

if (bIE) u76.attachEvent("onmouseover", MouseOveru76);
else u76.addEventListener("mouseover", MouseOveru76, true);
function MouseOveru76(e)
{
if (!IsTrueMouseOver('u76',e)) return;
if (true) {

	SetPanelStateu19("pd1u19");

	SetPanelStateu62("pd1u62");

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

eval(annwindow.replace(/\[\[id\]\]/g, 'u67').replace(/\[\[label\]\]/g, "CarCategoryPage:sort by price"));

InsertAfterBegin(document.body, "<div id='u67based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u67base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u67based = document.getElementById('u67based');
            
InsertBeforeEnd(u67based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Mouse over to switch the tab sort by price<BR><BR></div>");

if (bIE) u67.attachEvent("onmouseover", MouseOveru67);
else u67.addEventListener("mouseover", MouseOveru67, true);
function MouseOveru67(e)
{
if (!IsTrueMouseOver('u67',e)) return;
if (true) {

	SetPanelStateu19("pd2u19");

	SetPanelStateu62("pd2u62");

}

}

var u20 = document.getElementById('u20');

var u73 = document.getElementById('u73');

var u48 = document.getElementById('u48');

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

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

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
gv_vAlignTable['u64'] = 'center';
var u70 = document.getElementById('u70');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u70ann'), "<div id='u70Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u70', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u70').replace(/\[\[label\]\]/g, "CarCategoryPage:sort by pinyin"));

InsertAfterBegin(document.body, "<div id='u70based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u70base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u70based = document.getElementById('u70based');
            
InsertBeforeEnd(u70based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Mouse over to switch the tab sort by pinyin<BR><BR></div>");

if (bIE) u70.attachEvent("onmouseover", MouseOveru70);
else u70.addEventListener("mouseover", MouseOveru70, true);
function MouseOveru70(e)
{
if (!IsTrueMouseOver('u70',e)) return;
if (true) {

	SetPanelStateu19("pd0u19");

	SetPanelStateu62("pd0u62");

}

}

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u55 = document.getElementById('u55');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u55ann'), "<div id='u55Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u55', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u55').replace(/\[\[label\]\]/g, "CarCategoryPage:News of this car category"));

InsertAfterBegin(document.body, "<div id='u55based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u55base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u55based = document.getElementById('u55based');
            
InsertBeforeEnd(u55based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset news in this car category<BR><BR></div>");

var u61 = document.getElementById('u61');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u61ann'), "<div id='u61Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u61', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u61').replace(/\[\[label\]\]/g, "CarCategoryPage:Videos of this car category"));

InsertAfterBegin(document.body, "<div id='u61based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u61base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u61based = document.getElementById('u61based');
            
InsertBeforeEnd(u61based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset Videos in this car category.&nbsp; 逻辑:自动调用该级别下的Model的最新发布的视频.&nbsp; 排序:按照视频的发布时间排序.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:4:3-200*150<BR><BR></div>");

var u52 = document.getElementById('u52');

var u36 = document.getElementById('u36');

var u27 = document.getElementById('u27');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u27ann'), "<div id='u27Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u27', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u27').replace(/\[\[label\]\]/g, "CarCategoryPage:News of this car category"));

InsertAfterBegin(document.body, "<div id='u27based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u27base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u27based = document.getElementById('u27based');
            
InsertBeforeEnd(u27based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset news in this car category<BR><BR></div>");

var u33 = document.getElementById('u33');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u33ann'), "<div id='u33Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u33', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u33').replace(/\[\[label\]\]/g, "CarCategoryPage:Videos of this car category"));

InsertAfterBegin(document.body, "<div id='u33based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u33base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u33based = document.getElementById('u33based');
            
InsertBeforeEnd(u33based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset Videos in this car category.&nbsp; 逻辑:自动调用该级别下的Model的最新发布的视频.&nbsp; 排序:按照视频的发布时间排序.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:4:3-200*150<BR><BR></div>");

var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');

var u77 = document.getElementById('u77');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u77ann'), "<div id='u77Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u77', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u77').replace(/\[\[label\]\]/g, "CarCategoryPage:sort by price"));

InsertAfterBegin(document.body, "<div id='u77based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u77base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u77based = document.getElementById('u77based');
            
InsertBeforeEnd(u77based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Mouse over to switch the tab sort by price<BR><BR></div>");

if (bIE) u77.attachEvent("onmouseover", MouseOveru77);
else u77.addEventListener("mouseover", MouseOveru77, true);
function MouseOveru77(e)
{
if (!IsTrueMouseOver('u77',e)) return;
if (true) {

	SetPanelStateu19("pd2u19");

	SetPanelStateu62("pd2u62");

}

}

var u30 = document.getElementById('u30');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u30ann'), "<div id='u30Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u30', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u30').replace(/\[\[label\]\]/g, "CarCategoryPage:BBS post of this car category"));

InsertAfterBegin(document.body, "<div id='u30based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u30base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u30based = document.getElementById('u30based');
            
InsertBeforeEnd(u30based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset BBS post in this car category 目前没有对应到级别,所有级别都是统一调用同样的论坛帖子.<BR><BR></div>");

var u58 = document.getElementById('u58');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u58ann'), "<div id='u58Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u58', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u58').replace(/\[\[label\]\]/g, "CarCategoryPage:BBS post of this car category"));

InsertAfterBegin(document.body, "<div id='u58based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u58base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u58based = document.getElementById('u58based');
            
InsertBeforeEnd(u58based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset BBS post in this car category 目前没有对应到级别,所有级别都是统一调用同样的论坛帖子.<BR><BR></div>");

var u15 = document.getElementById('u15');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u15ann'), "<div id='u15Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u15', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u15').replace(/\[\[label\]\]/g, "header:Forget password button"));

InsertAfterBegin(document.body, "<div id='u15based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u15base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u15based = document.getElementById('u15based');
            
InsertBeforeEnd(u15based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Forget password button<BR><BR></div>");

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
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

eval(annwindow.replace(/\[\[id\]\]/g, 'u65').replace(/\[\[label\]\]/g, "CarCategoryPage:sort by pinyin"));

InsertAfterBegin(document.body, "<div id='u65based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u65base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u65based = document.getElementById('u65based');
            
InsertBeforeEnd(u65based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Mouse over to switch the tab sort by pinyin<BR><BR></div>");

if (bIE) u65.attachEvent("onmouseover", MouseOveru65);
else u65.addEventListener("mouseover", MouseOveru65, true);
function MouseOveru65(e)
{
if (!IsTrueMouseOver('u65',e)) return;
if (true) {

	SetPanelStateu19("pd0u19");

	SetPanelStateu62("pd0u62");

}

}

var u71 = document.getElementById('u71');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u71ann'), "<div id='u71Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u71', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u71').replace(/\[\[label\]\]/g, "CarCategoryPage:sort by brand"));

InsertAfterBegin(document.body, "<div id='u71based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u71base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u71based = document.getElementById('u71based');
            
InsertBeforeEnd(u71based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Mouse over to switch the tab sort by brand<BR><BR></div>");

if (bIE) u71.attachEvent("onmouseover", MouseOveru71);
else u71.addEventListener("mouseover", MouseOveru71, true);
function MouseOveru71(e)
{
if (!IsTrueMouseOver('u71',e)) return;
if (true) {

	SetPanelStateu19("pd1u19");

	SetPanelStateu62("pd1u62");

}

}

var u62 = document.getElementById('u62');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u43 = document.getElementById('u43');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u43ann'), "<div id='u43Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u43', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u43').replace(/\[\[label\]\]/g, "CarCategoryPage:purchasing articles of this car category"));

InsertAfterBegin(document.body, "<div id='u43based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u43base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u43based = document.getElementById('u43based');
            
InsertBeforeEnd(u43based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset purchasing articles in this car category<BR><BR></div>");

var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');

var u40 = document.getElementById('u40');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u40ann'), "<div id='u40Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u40', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u40').replace(/\[\[label\]\]/g, "CarCategoryPage:Photo album of this car category"));

InsertAfterBegin(document.body, "<div id='u40based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u40base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u40based = document.getElementById('u40based');
            
InsertBeforeEnd(u40based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset Photo album of the car models in this car category.逻辑:调用该级别下的Model最新上传的外观的相册. 排序:按照相册的发布时间排序.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:3:2-150*100<BR><BR></div>");

var u68 = document.getElementById('u68');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u31 = document.getElementById('u31');

var u59 = document.getElementById('u59');

var u22 = document.getElementById('u22');

var u75 = document.getElementById('u75');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u75ann'), "<div id='u75Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u75', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u75').replace(/\[\[label\]\]/g, "CarCategoryPage:sort by pinyin"));

InsertAfterBegin(document.body, "<div id='u75based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u75base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u75based = document.getElementById('u75based');
            
InsertBeforeEnd(u75based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Mouse over to switch the tab sort by pinyin<BR><BR></div>");

if (bIE) u75.attachEvent("onmouseover", MouseOveru75);
else u75.addEventListener("mouseover", MouseOveru75, true);
function MouseOveru75(e)
{
if (!IsTrueMouseOver('u75',e)) return;
if (true) {

	SetPanelStateu19("pd0u19");

	SetPanelStateu62("pd0u62");

}

}

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

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u72 = document.getElementById('u72');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u72ann'), "<div id='u72Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u72', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u72').replace(/\[\[label\]\]/g, "CarCategoryPage:sort by price"));

InsertAfterBegin(document.body, "<div id='u72based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u72base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u72based = document.getElementById('u72based');
            
InsertBeforeEnd(u72based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Mouse over to switch the tab sort by price<BR><BR></div>");

if (bIE) u72.attachEvent("onmouseover", MouseOveru72);
else u72.addEventListener("mouseover", MouseOveru72, true);
function MouseOveru72(e)
{
if (!IsTrueMouseOver('u72',e)) return;
if (true) {

	SetPanelStateu19("pd2u19");

	SetPanelStateu62("pd2u62");

}

}

var u56 = document.getElementById('u56');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u56ann'), "<div id='u56Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u56', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u56').replace(/\[\[label\]\]/g, "CarCategoryPage:testing articles of this car category"));

InsertAfterBegin(document.body, "<div id='u56based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u56base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u56based = document.getElementById('u56based');
            
InsertBeforeEnd(u56based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset testing articles in this car category<BR><BR></div>");

var u47 = document.getElementById('u47');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u47ann'), "<div id='u47Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u47', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u47').replace(/\[\[label\]\]/g, "CarCategoryPage:Videos of this car category"));

InsertAfterBegin(document.body, "<div id='u47based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u47base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u47based = document.getElementById('u47based');
            
InsertBeforeEnd(u47based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset Videos in this car category.&nbsp; 逻辑:自动调用该级别下的Model的最新发布的视频.&nbsp; 排序:按照视频的发布时间排序.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:4:3-200*150<BR><BR></div>");

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u28 = document.getElementById('u28');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u28ann'), "<div id='u28Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u28', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u28').replace(/\[\[label\]\]/g, "CarCategoryPage:testing articles of this car category"));

InsertAfterBegin(document.body, "<div id='u28based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u28base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u28based = document.getElementById('u28based');
            
InsertBeforeEnd(u28based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset testing articles in this car category<BR><BR></div>");

var u2 = document.getElementById('u2');

var u44 = document.getElementById('u44');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u44ann'), "<div id='u44Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u44', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u44').replace(/\[\[label\]\]/g, "CarCategoryPage:BBS post of this car category"));

InsertAfterBegin(document.body, "<div id='u44based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u44base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u44based = document.getElementById('u44based');
            
InsertBeforeEnd(u44based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset BBS post in this car category 目前没有对应到级别,所有级别都是统一调用同样的论坛帖子.<BR><BR></div>");

var u50 = document.getElementById('u50');

var u19 = document.getElementById('u19');

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

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u41 = document.getElementById('u41');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u41ann'), "<div id='u41Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u41', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u41').replace(/\[\[label\]\]/g, "CarCategoryPage:News of this car category"));

InsertAfterBegin(document.body, "<div id='u41based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u41base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u41based = document.getElementById('u41based');
            
InsertBeforeEnd(u41based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset news in this car category<BR><BR></div>");

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

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

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

eval(annwindow.replace(/\[\[id\]\]/g, 'u66').replace(/\[\[label\]\]/g, "CarCategoryPage:sort by brand"));

InsertAfterBegin(document.body, "<div id='u66based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u66base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u66based = document.getElementById('u66based');
            
InsertBeforeEnd(u66based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Mouse over to switch the tab sort by brand<BR><BR></div>");

if (bIE) u66.attachEvent("onmouseover", MouseOveru66);
else u66.addEventListener("mouseover", MouseOveru66, true);
function MouseOveru66(e)
{
if (!IsTrueMouseOver('u66',e)) return;
if (true) {

	SetPanelStateu19("pd1u19");

	SetPanelStateu62("pd1u62");

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

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u57 = document.getElementById('u57');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u57ann'), "<div id='u57Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u57', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u57').replace(/\[\[label\]\]/g, "CarCategoryPage:purchasing articles of this car category"));

InsertAfterBegin(document.body, "<div id='u57based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u57base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u57based = document.getElementById('u57based');
            
InsertBeforeEnd(u57based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset purchasing articles in this car category<BR><BR></div>");

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

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u63 = document.getElementById('u63');

var u38 = document.getElementById('u38');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
if (window.OnLoad) OnLoad();
