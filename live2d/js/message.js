function initCubism(){	
    var resourcesPaths = `${resourcesPath}`;
    var backImageNames = `${backImageName}`;
    var modelDirString = `${modelDir}`;
    var modelDirs = modelDirString.split(',');
	var modelSwitchbtns = `${modelSwitchBtn}`;

    initDefine(resourcesPaths, backImageNames, modelDirs, modelSwitchbtns);
}

function initlive2d() {
	$('#landlord').append("<ul class=\"l2d-menu\"><li class=\"l2d-action\" id=\"change-button\">编成</li><li class=\"l2d-action\" id=\"hide-button\">隐藏</li></ul>");
	$('body').append("<div class=\"show-button\">显示</div>");
    if ($('.l2d-menu').fadeOut(0)){
		$('#hide-button').on('click', () => {
			$('#landlord').css('display', 'none');
			l2d_unload();
			$('.show-button').fadeIn(300);
		});
	}
    $('#landlord').hover(() => {
        $('.l2d-menu').fadeIn(600)
    }, () => {
        $('.l2d-menu').fadeOut(600)
    });
	$('.show-button').on('click', () => {
		$('#landlord').css('display', 'block');
		l2d_load();
		$('.show-button').fadeOut(300);
	})
}
