
var PageName = 'single-brand-page';
var PageId = 'p7c0f8118bd4747dbbed53f0b3dd4f9b5'
var PageUrl = 'single-brand-page.html'
document.title = 'single-brand-page';

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

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u36 = document.getElementById('u36');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u36ann'), "<div id='u36Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u36', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u36').replace(/\[\[label\]\]/g, "Single Brand Page:Exterior car model pics of this brand"));

InsertAfterBegin(document.body, "<div id='u36based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u36base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u36based = document.getElementById('u36based');
            
InsertBeforeEnd(u36based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset Exterior car model pics in this car category. 逻辑:自动调用该品牌下的车系的最新上传的相册. 显示顺序:按照相册的发布时间排序.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:3:2-150*100<BR><BR></div>");

var u31 = document.getElementById('u31');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u31ann'), "<div id='u31Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u31', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u31').replace(/\[\[label\]\]/g, "Single Brand Page:Brand name"));

InsertAfterBegin(document.body, "<div id='u31based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u31base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u31based = document.getElementById('u31based');
            
InsertBeforeEnd(u31based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Brand name<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> Belong to Brand field 品牌的一个属性<BR><BR></div>");

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

var u27 = document.getElementById('u27');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u27ann'), "<div id='u27Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u27', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u27').replace(/\[\[label\]\]/g, "Single Brand Page:Navigation bar"));

InsertAfterBegin(document.body, "<div id='u27based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u27base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u27based = document.getElementById('u27based');
            
InsertBeforeEnd(u27based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Navigation bar<BR><BR></div>");

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

var u2 = document.getElementById('u2');

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

var u0 = document.getElementById('u0');

var u26 = document.getElementById('u26');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u26ann'), "<div id='u26Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u26', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u26').replace(/\[\[label\]\]/g, "Single Brand Page:Promoted Videos"));

InsertAfterBegin(document.body, "<div id='u26based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u26base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u26based = document.getElementById('u26based');
            
InsertBeforeEnd(u26based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Promoted Videos 逻辑:推荐的视频,与新闻频道的右侧栏推荐视频一样.(由于目前每个品牌的视频比较少,如果以后视频多了可以自动调用该品牌下的model的视频,目前为推荐的视频.也可以先用该品牌的视频,不足的视频再用最新视频补上.). 显示顺序:根据3D上传时间排序.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:4:3-200*150<BR><BR></div>");

var u35 = document.getElementById('u35');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u35ann'), "<div id='u35Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u35', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u35').replace(/\[\[label\]\]/g, "Single Brand Page:BBS post of this brand"));

InsertAfterBegin(document.body, "<div id='u35based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u35base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u35based = document.getElementById('u35based');
            
InsertBeforeEnd(u35based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset BBS post in this car category.目前没有对应到品牌论坛,所有品牌都是一样的统一调用论坛内容.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> Belong to Brand field 品牌的一个属性<BR><BR></div>");

var u29 = document.getElementById('u29');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u29ann'), "<div id='u29Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u29', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u29').replace(/\[\[label\]\]/g, "Single Brand Page:Introduction of this brand"));

InsertAfterBegin(document.body, "<div id='u29based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u29base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u29based = document.getElementById('u29based');
            
InsertBeforeEnd(u29based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Introduction of this brand 品牌简介<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> Belong to Brand field 品牌的一个属性<BR><BR></div>");

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

var u34 = document.getElementById('u34');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u34ann'), "<div id='u34Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u34', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u34').replace(/\[\[label\]\]/g, "Single Brand Page:purchasing articles of this brand"));

InsertAfterBegin(document.body, "<div id='u34based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u34base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u34based = document.getElementById('u34based');
            
InsertBeforeEnd(u34based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset purchasing articles in this car category<BR><BR></div>");

var u14 = document.getElementById('u14');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u14ann'), "<div id='u14Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u14', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u14').replace(/\[\[label\]\]/g, "header:Login in button"));

InsertAfterBegin(document.body, "<div id='u14based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u14base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u14based = document.getElementById('u14based');
            
InsertBeforeEnd(u14based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Login in button<BR><BR></div>");

var u28 = document.getElementById('u28');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u28ann'), "<div id='u28Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u28', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u28').replace(/\[\[label\]\]/g, "Single Brand Page:Models of this brand"));

InsertAfterBegin(document.body, "<div id='u28based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u28base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u28based = document.getElementById('u28based');
            
InsertBeforeEnd(u28based, "<div class='anncontent'><span class='annfieldname'>Description:</span> list all car models of this brand<BR><BR></div>");

var u33 = document.getElementById('u33');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u33ann'), "<div id='u33Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u33', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u33').replace(/\[\[label\]\]/g, "Single Brand Page:testing articles of this brand"));

InsertAfterBegin(document.body, "<div id='u33based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u33base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u33based = document.getElementById('u33based');
            
InsertBeforeEnd(u33based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset testing articles in this car category<BR><BR></div>");

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u13 = document.getElementById('u13');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u13ann'), "<div id='u13Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u13', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u13').replace(/\[\[label\]\]/g, "header:Registration Now"));

InsertAfterBegin(document.body, "<div id='u13based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u13base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u13based = document.getElementById('u13based');
            
InsertBeforeEnd(u13based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Registration link<BR><BR></div>");

var u12 = document.getElementById('u12');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u12ann'), "<div id='u12Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u12', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u12').replace(/\[\[label\]\]/g, "header:Add to favour"));

InsertAfterBegin(document.body, "<div id='u12based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u12base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u12based = document.getElementById('u12based');
            
InsertBeforeEnd(u12based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Add to favour<BR><BR></div>");

var u21 = document.getElementById('u21');

var u37 = document.getElementById('u37');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u37ann'), "<div id='u37Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u37', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u37').replace(/\[\[label\]\]/g, "Single Brand Page:Lastest Exterior Album of this brand"));

InsertAfterBegin(document.body, "<div id='u37based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u37base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u37based = document.getElementById('u37based');
            
InsertBeforeEnd(u37based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show Lastest Exterior Album of this brand 逻辑:自动调用最新上传的该品牌下车系的外观相册.(由于目前相册较少,如果以后相册多了以后,应该调用不同Model的外观相册.) 显示顺序:按照相册的发布时间排序.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:3:2-315*210<BR><BR></div>");

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

var u17 = document.getElementById('u17');

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

var u15 = document.getElementById('u15');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u15ann'), "<div id='u15Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u15', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u15').replace(/\[\[label\]\]/g, "header:Forget password button"));

InsertAfterBegin(document.body, "<div id='u15based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u15base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u15based = document.getElementById('u15based');
            
InsertBeforeEnd(u15based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Forget password button<BR><BR></div>");

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u25 = document.getElementById('u25');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u25ann'), "<div id='u25Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u25', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u25').replace(/\[\[label\]\]/g, "Single Brand Page:3D Models"));

InsertAfterBegin(document.body, "<div id='u25based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u25base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u25based = document.getElementById('u25based');
            
InsertBeforeEnd(u25based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show lastest 3D models.逻辑:自动调用最新上传的有3D模型的车系Models. 显示顺序:根据3D上传时间排序.<BR><BR></div>");

var u16 = document.getElementById('u16');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u16ann'), "<div id='u16Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u16', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u16').replace(/\[\[label\]\]/g, "header:Registration button"));

InsertAfterBegin(document.body, "<div id='u16based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u16base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u16based = document.getElementById('u16based');
            
InsertBeforeEnd(u16based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Registration button<BR><BR></div>");

var u19 = document.getElementById('u19');

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

var u30 = document.getElementById('u30');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u30ann'), "<div id='u30Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u30', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u30').replace(/\[\[label\]\]/g, "Single Brand Page:Brand logo"));

InsertAfterBegin(document.body, "<div id='u30based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u30base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u30based = document.getElementById('u30based');
            
InsertBeforeEnd(u30based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Brand logo<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> Belong to Brand field 品牌的一个属性<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:40*40<BR><BR></div>");

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u32 = document.getElementById('u32');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u32ann'), "<div id='u32Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u32', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u32').replace(/\[\[label\]\]/g, "Single Brand Page:News of this brand"));

InsertAfterBegin(document.body, "<div id='u32based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u32base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u32based = document.getElementById('u32based');
            
InsertBeforeEnd(u32based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show the lateset news in this car category<BR><BR></div>");

var u23 = document.getElementById('u23');

if (window.OnLoad) OnLoad();
