for(var i = 0; i < 14; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
u3.tabIndex = 0;

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('page.html');

}
});
u4.tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('post.html');

}
});
gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u9'] = 'center';u2.tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('createsite.html');

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u7'] = 'center';