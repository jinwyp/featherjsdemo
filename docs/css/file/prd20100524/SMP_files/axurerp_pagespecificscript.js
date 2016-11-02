
var PageName = 'SMP';
var PageId = 'p48e155d6eb3d43269a29a38a946ca1b4'
var PageUrl = 'SMP.html'
document.title = 'SMP';

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

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u86ann'), "<div id='u86Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u86', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u86').replace(/\[\[label\]\]/g, "SMP:show one version testing data of this model"));

InsertAfterBegin(document.body, "<div id='u86based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u86base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u86based = document.getElementById('u86based');
            
InsertBeforeEnd(u86based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show one version testing data of this model.逻辑:自动调用该model下的所有version 中字段&quot;0-100km/h加速时间(秒)&quot;不为空,而且更新时间是最新更新的version的拼评测数据.<BR><BR></div>");

var u54 = document.getElementById('u54');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u54ann'), "<div id='u54Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u54', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u54').replace(/\[\[label\]\]/g, "SMP:comparison suggestion of this model"));

InsertAfterBegin(document.body, "<div id='u54based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u54base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u54based = document.getElementById('u54based');
            
InsertBeforeEnd(u54based, "<div class='anncontent'><span class='annfieldname'>Description:</span> 4 comparison suggestion of this model.逻辑:对比上面的显示的车型version 为该model价格最低的version. 对比下面的显示的车型version 为不同的4个和该Model同级别并且价格高于该model价格最低的version的4个车型version.&nbsp; 显示顺序:根据最低价格的version 从上到下依次价格增大排列.<BR><BR></div>");

var u60 = document.getElementById('u60');

var u29 = document.getElementById('u29');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u29ann'), "<div id='u29Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u29', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u29').replace(/\[\[label\]\]/g, "SMP:SMP articles"));

InsertAfterBegin(document.body, "<div id='u29based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u29base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u29based = document.getElementById('u29based');
            
InsertBeforeEnd(u29based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show all articles of this car model<BR><BR></div>");

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u83 = document.getElementById('u83');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u83ann'), "<div id='u83Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u83', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u83').replace(/\[\[label\]\]/g, "SMP:videos of this model"));

InsertAfterBegin(document.body, "<div id='u83based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u83base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u83based = document.getElementById('u83based');
            
InsertBeforeEnd(u83based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show lastest videos of this model.逻辑:显示该车系的最新的视频.显示顺序:根据视频发布时间排序<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> Belong to Model field 车系的一个属性<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:4:3-150*133<BR><BR></div>");

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u79 = document.getElementById('u79');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u79ann'), "<div id='u79Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u79', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u79').replace(/\[\[label\]\]/g, "SMP:Articles of this model"));

InsertAfterBegin(document.body, "<div id='u79based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u79base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u79based = document.getElementById('u79based');
            
InsertBeforeEnd(u79based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show Articles of this model.逻辑:显示该车系的所有文章.<BR><BR></div>");

var u42 = document.getElementById('u42');

var u80 = document.getElementById('u80');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u80ann'), "<div id='u80Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u80', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u80').replace(/\[\[label\]\]/g, "SMP:photos of this model"));

InsertAfterBegin(document.body, "<div id='u80based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u80base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u80based = document.getElementById('u80based');
            
InsertBeforeEnd(u80based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show lastest photos of this model.逻辑:显示该车系的最新的图片.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:3:2-150*100<BR><BR></div>");

var u26 = document.getElementById('u26');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u26ann'), "<div id='u26Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u26', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u26').replace(/\[\[label\]\]/g, "SMP:SMP Specs"));

InsertAfterBegin(document.body, "<div id='u26based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u26base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u26based = document.getElementById('u26based');
            
InsertBeforeEnd(u26based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show all the versions of this car model<BR><BR></div>");

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u23 = document.getElementById('u23');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u23ann'), "<div id='u23Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u23', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u23').replace(/\[\[label\]\]/g, "SMP:SMP Index"));

InsertAfterBegin(document.body, "<div id='u23based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u23base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u23based = document.getElementById('u23based');
            
InsertBeforeEnd(u23based, "<div class='anncontent'><span class='annfieldname'>Description:</span> SMP homepage<BR><BR></div>");

var u76 = document.getElementById('u76');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u76ann'), "<div id='u76Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u76', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u76').replace(/\[\[label\]\]/g, "SMP:disadvantages of this model"));

InsertAfterBegin(document.body, "<div id='u76based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u76base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u76based = document.getElementById('u76based');
            
InsertBeforeEnd(u76based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show disadvantages of this model.逻辑:显示该车系的缺点.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> Belong to Model field 车系的一个属性<BR><BR></div>");

var u14 = document.getElementById('u14');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u14ann'), "<div id='u14Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u14', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u14').replace(/\[\[label\]\]/g, "header:Add to favour"));

InsertAfterBegin(document.body, "<div id='u14based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u14base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u14based = document.getElementById('u14based');
            
InsertBeforeEnd(u14based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Add to favour<BR><BR></div>");

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u48 = document.getElementById('u48');

var u4 = document.getElementById('u4');

var u11 = document.getElementById('u11');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u11ann'), "<div id='u11Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u11', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u11').replace(/\[\[label\]\]/g, "header:SUV"));

InsertAfterBegin(document.body, "<div id='u11based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u11base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u11based = document.getElementById('u11based');
            
InsertBeforeEnd(u11based, "<div class='anncontent'><span class='annfieldname'>Description:</span> car category:SUV<BR><BR></div>");

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{

if (true) {

	self.location.href="CarCategory.html" + GetQuerystring();

}

}

var u64 = document.getElementById('u64');

var u70 = document.getElementById('u70');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u87 = document.getElementById('u87');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u87ann'), "<div id='u87Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u87', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u87').replace(/\[\[label\]\]/g, "SMP:Manufacturer and Model name"));

InsertAfterBegin(document.body, "<div id='u87based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u87base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u87based = document.getElementById('u87based');
            
InsertBeforeEnd(u87based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Manufacturer and Model name.显示&quot;厂商 车系名称&quot;<BR><BR></div>");

var u55 = document.getElementById('u55');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u55ann'), "<div id='u55Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u55', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u55').replace(/\[\[label\]\]/g, "SMP:hottest&nbsp; model of this Brand"));

InsertAfterBegin(document.body, "<div id='u55based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u55base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u55based = document.getElementById('u55based');
            
InsertBeforeEnd(u55based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show hottest model of this brand. 逻辑:显示该model所属品牌下的其他车系,显示顺序:根据version的最低价排序,价格低的排在上面.<BR><BR></div>");

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u84 = document.getElementById('u84');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u84ann'), "<div id='u84Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u84', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u84').replace(/\[\[label\]\]/g, "SMP:demision pic of this model"));

InsertAfterBegin(document.body, "<div id='u84based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u84base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u84based = document.getElementById('u84based');
            
InsertBeforeEnd(u84based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show demision pic of this model.逻辑:显示该车系的尺寸模型图. 文字改为”某车系名称 尺寸模型图”<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:560*225<BR><BR></div>");

var u52 = document.getElementById('u52');

var u36 = document.getElementById('u36');

var u81 = document.getElementById('u81');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u81ann'), "<div id='u81Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u81', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u81').replace(/\[\[label\]\]/g, "SMP:official website link of this model"));

InsertAfterBegin(document.body, "<div id='u81based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u81base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u81based = document.getElementById('u81based');
            
InsertBeforeEnd(u81based, "<div class='anncontent'><span class='annfieldname'>Description:</span> official website link.该Model官方网站链接<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> Belong to Model field 车系的一个属性<BR><BR></div>");

var u27 = document.getElementById('u27');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u27ann'), "<div id='u27Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u27', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u27').replace(/\[\[label\]\]/g, "SMP:SMP Photo"));

InsertAfterBegin(document.body, "<div id='u27based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u27base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u27based = document.getElementById('u27based');
            
InsertBeforeEnd(u27based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show pics of this car model<BR><BR></div>");

var u33 = document.getElementById('u33');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u33ann'), "<div id='u33Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u33', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u33').replace(/\[\[label\]\]/g, "SMP:Navigation bar"));

InsertAfterBegin(document.body, "<div id='u33based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u33base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u33based = document.getElementById('u33based');
            
InsertBeforeEnd(u33based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Homepage -&gt; Brand -&gt; Model.&nbsp; 导航栏显示:首页 -&gt; 品牌 -&gt; 车系<BR><BR></div>");

var u0 = document.getElementById('u0');

var u24 = document.getElementById('u24');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u24ann'), "<div id='u24Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u24', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u24').replace(/\[\[label\]\]/g, "SMP:SMP Testing"));

InsertAfterBegin(document.body, "<div id='u24based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u24base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u24based = document.getElementById('u24based');
            
InsertBeforeEnd(u24based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show one lastest testing article of this car model<BR><BR></div>");

var u77 = document.getElementById('u77');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u77ann'), "<div id='u77Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u77', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u77').replace(/\[\[label\]\]/g, "SMP:Summary of this model"));

InsertAfterBegin(document.body, "<div id='u77based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u77base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u77based = document.getElementById('u77based');
            
InsertBeforeEnd(u77based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show Summary of this model.逻辑:显示该车系的总结.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> Belong to Model field 车系的一个属性<BR><BR></div>");

var u30 = document.getElementById('u30');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u30ann'), "<div id='u30Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u30', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u30').replace(/\[\[label\]\]/g, "SMP:SMP BBS"));

InsertAfterBegin(document.body, "<div id='u30based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u30base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u30based = document.getElementById('u30based');
            
InsertBeforeEnd(u30based, "<div class='anncontent'><span class='annfieldname'>Description:</span> into the bbs club of this car model<BR><BR></div>");

var u58 = document.getElementById('u58');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u58ann'), "<div id='u58Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u58', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u58').replace(/\[\[label\]\]/g, "SMP:hottest models"));

InsertAfterBegin(document.body, "<div id='u58based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u58base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u58based = document.getElementById('u58based');
            
InsertBeforeEnd(u58based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show hottest model. 逻辑:目前是推荐的Model.(以后应该根据车型页面的浏览量来自动调用).显示顺序:nodequeue.<BR><BR></div>");

var u15 = document.getElementById('u15');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u15ann'), "<div id='u15Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u15', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u15').replace(/\[\[label\]\]/g, "header:Registration Now"));

InsertAfterBegin(document.body, "<div id='u15based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u15base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u15based = document.getElementById('u15based');
            
InsertBeforeEnd(u15based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Registration link<BR><BR></div>");

var u21 = document.getElementById('u21');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u21ann'), "<div id='u21Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u21', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u21').replace(/\[\[label\]\]/g, "SMP:Brand logo of this car Model"));

InsertAfterBegin(document.body, "<div id='u21based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u21base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u21based = document.getElementById('u21based');
            
InsertBeforeEnd(u21based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Brand logo of this car Model.该车系所属品牌的logo<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:40*40<BR><BR></div>");

var u74 = document.getElementById('u74');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u74ann'), "<div id='u74Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u74', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u74').replace(/\[\[label\]\]/g, "SMP:exterior pics of this model"));

InsertAfterBegin(document.body, "<div id='u74based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u74base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u74based = document.getElementById('u74based');
            
InsertBeforeEnd(u74based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show lastest exterior pics of this model.逻辑:自动调用该Model的最新上传外观图片.显示顺序:按照图片创建时间显示5个最新的图片.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Target Release:</span> pic size:3:2-315*210<BR><BR></div>");

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u12 = document.getElementById('u12');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u12ann'), "<div id='u12Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u12', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u12').replace(/\[\[label\]\]/g, "header:Mid&amp;High-end sedan"));

InsertAfterBegin(document.body, "<div id='u12based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u12base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u12based = document.getElementById('u12based');
            
InsertBeforeEnd(u12based, "<div class='anncontent'><span class='annfieldname'>Description:</span> car category:Mid&amp;High-end sedan<BR><BR></div>");

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	self.location.href="CarCategory.html" + GetQuerystring();

}

}

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u62 = document.getElementById('u62');

var u46 = document.getElementById('u46');

var u85 = document.getElementById('u85');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u85ann'), "<div id='u85Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u85', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u85').replace(/\[\[label\]\]/g, "SMP:show one version spec of this model"));

InsertAfterBegin(document.body, "<div id='u85based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u85base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u85based = document.getElementById('u85based');
            
InsertBeforeEnd(u85based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show one version spec of this model.逻辑:自动调用该model下的所有version 中字段&quot;0-100km/h加速时间(秒)&quot;不为空,而且更新时间是最新更新的version的spec.<BR><BR></div>");

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u17 = document.getElementById('u17');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u17ann'), "<div id='u17Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u17', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u17').replace(/\[\[label\]\]/g, "header:Forget password button"));

InsertAfterBegin(document.body, "<div id='u17based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u17base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u17based = document.getElementById('u17based');
            
InsertBeforeEnd(u17based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Forget password button<BR><BR></div>");

var u18 = document.getElementById('u18');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u18ann'), "<div id='u18Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u18', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u18').replace(/\[\[label\]\]/g, "header:Registration button"));

InsertAfterBegin(document.body, "<div id='u18based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u18base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u18based = document.getElementById('u18based');
            
InsertBeforeEnd(u18based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Registration button<BR><BR></div>");

var u82 = document.getElementById('u82');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u82ann'), "<div id='u82Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u82', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u82').replace(/\[\[label\]\]/g, "SMP:versions of this model"));

InsertAfterBegin(document.body, "<div id='u82based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u82base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u82based = document.getElementById('u82based');
            
InsertBeforeEnd(u82based, "<div class='anncontent'><span class='annfieldname'>Description:</span> showall versions of this model.逻辑:显示该车系的所有的车型Versions.<BR><BR></div>");

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u34 = document.getElementById('u34');

var u40 = document.getElementById('u40');

var u68 = document.getElementById('u68');

var u25 = document.getElementById('u25');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u25ann'), "<div id='u25Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u25', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u25').replace(/\[\[label\]\]/g, "SMP:SMP 3D"));

InsertAfterBegin(document.body, "<div id='u25based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u25base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u25based = document.getElementById('u25based');
            
InsertBeforeEnd(u25based, "<div class='anncontent'><span class='annfieldname'>Description:</span> SMP 3D of this car model<BR><BR></div>");

var u31 = document.getElementById('u31');

var u59 = document.getElementById('u59');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u59ann'), "<div id='u59Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u59', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u59').replace(/\[\[label\]\]/g, "SMP:hottest aritcles"));

InsertAfterBegin(document.body, "<div id='u59based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u59base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u59based = document.getElementById('u59based');
            
InsertBeforeEnd(u59based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show hottest aritcles. 逻辑:目前是和新闻,评测,导购中部的推荐的焦点新闻一样的推荐位.(以后应该根据文章的1个月内的浏览量来自动调用).显示顺序:nodequeue.<BR><BR></div>");

var u22 = document.getElementById('u22');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u22ann'), "<div id='u22Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u22', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u22').replace(/\[\[label\]\]/g, "SMP:Model Name"));

InsertAfterBegin(document.body, "<div id='u22based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u22base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u22based = document.getElementById('u22based');
            
InsertBeforeEnd(u22based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Model Name<BR><BR></div>");

var u75 = document.getElementById('u75');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u75ann'), "<div id='u75Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u75', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u75').replace(/\[\[label\]\]/g, "SMP:advantage of this model"));

InsertAfterBegin(document.body, "<div id='u75based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u75base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u75based = document.getElementById('u75based');
            
InsertBeforeEnd(u75based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show advantage of this model.逻辑:显示该车系的优点.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> Belong to Model field 车系的一个属性<BR><BR></div>");

var u88 = document.getElementById('u88');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u88ann'), "<div id='u88Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u88', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u88').replace(/\[\[label\]\]/g, "SMP:link to 3D Model list page "));

InsertAfterBegin(document.body, "<div id='u88based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u88base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u88based = document.getElementById('u88based');
            
InsertBeforeEnd(u88based, "<div class='anncontent'><span class='annfieldname'>Description:</span> 点击进入所有带3D 的车系列表页面.<BR><BR></div>");

var u8 = document.getElementById('u8');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u8ann'), "<div id='u8Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u8', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u8').replace(/\[\[label\]\]/g, "header:Compact sedan"));

InsertAfterBegin(document.body, "<div id='u8based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u8base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u8based = document.getElementById('u8based');
            
InsertBeforeEnd(u8based, "<div class='anncontent'><span class='annfieldname'>Description:</span> car category:Compact sedan<BR><BR></div>");

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

var u56 = document.getElementById('u56');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u56ann'), "<div id='u56Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u56', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u56').replace(/\[\[label\]\]/g, "SMP:hottest&nbsp; model of this car category"));

InsertAfterBegin(document.body, "<div id='u56based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u56base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u56based = document.getElementById('u56based');
            
InsertBeforeEnd(u56based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show hottest model of this&nbsp; car category. 逻辑:显示该model所属级别下的 并且比该model最低价格version高的其他车系Model,显示顺序:根据version的最低价排序,价格低的排在上面.<BR><BR></div>");

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u28 = document.getElementById('u28');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u28ann'), "<div id='u28Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u28', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u28').replace(/\[\[label\]\]/g, "SMP:SMP Videos"));

InsertAfterBegin(document.body, "<div id='u28based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u28base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u28based = document.getElementById('u28based');
            
InsertBeforeEnd(u28based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show Videos of this car model<BR><BR></div>");

var u2 = document.getElementById('u2');

var u44 = document.getElementById('u44');

var u50 = document.getElementById('u50');

var u19 = document.getElementById('u19');

var u78 = document.getElementById('u78');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u78ann'), "<div id='u78Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u78', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u78').replace(/\[\[label\]\]/g, "SMP:BBS of this model"));

InsertAfterBegin(document.body, "<div id='u78based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u78base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u78based = document.getElementById('u78based');
            
InsertBeforeEnd(u78based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show BBS post of this model.逻辑:显示该车系的论坛的最新帖子.显示顺序:根据帖子的发布时间排序.<BR><BR></div><div class='anncontent'><span class='annfieldname'>Stability:</span> Belong to Model field 车系的一个属性<BR><BR></div>");

var u7 = document.getElementById('u7');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u7ann'), "<div id='u7Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u7', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u7').replace(/\[\[label\]\]/g, "eader:Small car"));

InsertAfterBegin(document.body, "<div id='u7based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u7base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u7based = document.getElementById('u7based');
            
InsertBeforeEnd(u7based, "<div class='anncontent'><span class='annfieldname'>Description:</span> car category:Small car<BR><BR></div>");

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
gv_vAlignTable['u41'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u16 = document.getElementById('u16');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u16ann'), "<div id='u16Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u16', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u16').replace(/\[\[label\]\]/g, "header:Login in button"));

InsertAfterBegin(document.body, "<div id='u16based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u16base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u16based = document.getElementById('u16based');
            
InsertBeforeEnd(u16based, "<div class='anncontent'><span class='annfieldname'>Description:</span> Login in button<BR><BR></div>");

var u9 = document.getElementById('u9');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u9ann'), "<div id='u9Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u9', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u9').replace(/\[\[label\]\]/g, "header:Mid-size sedan"));

InsertAfterBegin(document.body, "<div id='u9based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u9base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u9based = document.getElementById('u9based');
            
InsertBeforeEnd(u9based, "<div class='anncontent'><span class='annfieldname'>Description:</span> car category:Mid-size sedan<BR><BR></div>");

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

eval(annwindow.replace(/\[\[id\]\]/g, 'u13').replace(/\[\[label\]\]/g, "header:RSS feed"));

InsertAfterBegin(document.body, "<div id='u13based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u13base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u13based = document.getElementById('u13based');
            
InsertBeforeEnd(u13based, "<div class='anncontent'><span class='annfieldname'>Description:</span> RSS feed is a page show simple articles using XML format<BR><BR></div>");

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="rss.html" + GetQuerystring();

}

}

var u66 = document.getElementById('u66');

var u6 = document.getElementById('u6');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u6ann'), "<div id='u6Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u6', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u6').replace(/\[\[label\]\]/g, "header:Mini car "));

InsertAfterBegin(document.body, "<div id='u6based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u6base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u6based = document.getElementById('u6based');
            
InsertBeforeEnd(u6based, "<div class='anncontent'><span class='annfieldname'>Description:</span> car category:Mini car<BR><BR></div>");

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
gv_vAlignTable['u35'] = 'center';
var u57 = document.getElementById('u57');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u57ann'), "<div id='u57Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u57', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u57').replace(/\[\[label\]\]/g, "SMP:hottest bbs"));

InsertAfterBegin(document.body, "<div id='u57based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u57base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u57based = document.getElementById('u57based');
            
InsertBeforeEnd(u57based, "<div class='anncontent'><span class='annfieldname'>Description:</span> show hottest bbs. 逻辑:目前是调用所有版块精华1,2,3的帖子.(应该根据所有版面的1个月内的浏览量来自动调用,或28天的点击量)显示顺序:根据帖子发表时间排序.<BR><BR></div>");

var u10 = document.getElementById('u10');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u10ann'), "<div id='u10Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u10', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u10').replace(/\[\[label\]\]/g, "header:MPV"));

InsertAfterBegin(document.body, "<div id='u10based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u10base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u10based = document.getElementById('u10based');
            
InsertBeforeEnd(u10based, "<div class='anncontent'><span class='annfieldname'>Description:</span> car category:MPV<BR><BR></div>");

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
gv_vAlignTable['u63'] = 'center';
var u38 = document.getElementById('u38');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
if (window.OnLoad) OnLoad();
