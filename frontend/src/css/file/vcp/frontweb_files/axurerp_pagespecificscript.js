for(var i = 0; i < 10; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u4'] = 'center';document.getElementById('u5_img').tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('facebooklogin.html');

}
});

$axure.eventManager.mouseout('u5', function(e) {
if (!IsTrueMouseOut('u5',e)) return;
if (true) {

	SetPanelState('u2', 'pd0u2','fade','',500,'none','',500);

}
});
gv_vAlignTable['u6'] = 'center';document.getElementById('u7_img').tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('registration.html');

}
});

$axure.eventManager.mouseover('u7', function(e) {
if (!IsTrueMouseOver('u7',e)) return;
if (true) {

	SetPanelState('u2', 'pd1u2','none','',500,'fade','',500);

}
});
gv_vAlignTable['u8'] = 'center';u9.tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('registration.html');

}
});
gv_vAlignTable['u1'] = 'center';