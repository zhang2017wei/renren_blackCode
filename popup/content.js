console.log("2019年01月08日19:15:01");
let _popBox = '';

let
    _class= 'test_p1',
    _specialStyle = {},
_specialScript = [];



let _domType = '';
let _addClass = $(".AMCustomContent .popBox .customUl");
switch(_domType){
    case 'img':
        _addClass.addClass("img");
        break;
    case 'a':
        _addClass.addClass("aTage");
        break;
    case 'text':
        _addClass.addClass("text");
        break;
    default:
        _addClass.addClass("showAll");
}
//追加页面内容
$('#AMCustomContent').append(_popBox);

//点击提交
$('#submitBtn').click(function () {
    getColorValue();

});


//logo
let _logoWidth,_logoHeight;
setTimeout(function () {//本地项目 同时渲染  所以加setTimeout
     _logoWidth = $("."+_class).width(),_logoHeight = $("."+_class).height();
},500);
$('.changeLogo').change(function() {
    let _multiple = $(".changeLogo input:radio:checked").val();
    _specialStyle.width =(_logoWidth * _multiple).toFixed(2) + 'px';
    _specialStyle.height = (_logoHeight * _multiple).toFixed(2) + 'px';
    previewStyle();
});

//changeDisplay
$('.changeDisplay').change(function() {
    let _display = $(".changeDisplay input:checked").val();
    if(_display === 'none'){
        _specialStyle.display = _display;
    }else{
        _specialStyle.display = 'block';
    }
    previewStyle();
});

//color
$('.changeColor').change(function() {
    let _color = $('.popBox .changeColor input').val();
    if(!_color || _color === '')return;
    _specialStyle.color = _color;
    previewStyle();
});

//changeBackgroundColor
$('.changeBackgroundColor').change(function() {
    let _BGColor = $('.popBox .changeBackgroundColor input').val();
    _specialStyle.backgroundColor = _BGColor;
    previewStyle();
});

//font-size
$('.changeFontSize').change(function() {
    let _fontSize = $('.popBox .changeFontSize input').val();
    _specialStyle.fontSize = _fontSize + 'px';
    previewStyle();
});

//font weight
$('.changeFontWeight').change(function() {
    let _multiple = $(".changeFontWeight input:radio:checked").val();
    _specialStyle.fontWeight = _multiple;
    previewStyle();
});

//text-align
$('.changeTextAlign').change(function() {
    let _textAlign = $(".changeTextAlign input:radio:checked").val();
    _specialStyle.textAlign  = _textAlign;
    previewStyle();
});

//margin
$('.changeMargin input').change(function() {
    let _marginTop = $('.changeMargin .marginTop').val(),
        _marginRight = $('.changeMargin .marginRight').val(),
        _marginBottom = $('.changeMargin .marginBottom').val(),
        _marginLeft = $('.changeMargin .marginLeft').val();
    if(_marginTop)_specialStyle.marginTop = _marginTop + 'px';
    if(_marginRight)_specialStyle.marginRight = _marginRight + 'px';
    if(_marginBottom)_specialStyle.marginBottom = _marginBottom + 'px';
    if(_marginLeft)_specialStyle.marginLeft = _marginLeft + 'px';
    previewStyle();
});

//padding
$('.changePadding input').change(function() {
    let _paddingTop = $('.changePadding .paddingTop').val(),
        _paddingRight = $('.changePadding .paddingRight').val(),
        _paddingBottom = $('.changePadding .paddingBottom').val(),
        _paddingLeft = $('.changePadding .paddingLeft').val();
    if(_paddingTop)_specialStyle.paddingTop = _paddingTop + 'px';
    if(_paddingRight)_specialStyle.paddingRight = _paddingRight + 'px';
    if(_paddingBottom)_specialStyle.paddingBottom = _paddingBottom + 'px';
    if(_paddingLeft)_specialStyle.paddingLeft = _paddingLeft + 'px';
    previewStyle();
});


function previewStyle() {
    $("."+_class).css(_specialStyle);
    let cssString = JSON.stringify(_specialStyle);
    cssString = cssString.replace(/"/g, '').replace(/,/g, ';');
    $('.specialStyleTextArea').text(`<style>.${_class}${cssString};</style>`);
}

$('.copyBtn').click(function() {
    let inputEl = $('.specialStyleTextArea')[0]
    inputEl.focus();
    inputEl.setSelectionRange(0, inputEl.value.length);
    let result = document.execCommand('Copy', true);
})



//changeText
$('.changeText').change(function() {
    let _text = $('.popBox .changeText input').val();
    $("."+_class).text(_text);
    _specialScript.push(`.text("${_text}")`);
    previewScript();
});
//replace url
$('.changeReplaceUrl').change(function() {
    let _replaceUrl = $('.changeReplaceUrl input').val();
    _specialScript.push(`.attr("href","${_replaceUrl}")`);
    previewScript();
});

//changeAddUrl
$('.changeAddUrl').change(function() {
    let _addUrl = $('.changeAddUrl input').val();
    $("."+_class).wrap(`<a href='${_addUrl}'></a>`);
    _specialScript.push(`.wrap(<a href='${_addUrl}'></a>)`);
    previewScript();
});
//updateText
$('.updateText').change(function() {
    let _addText = $('.updateText input').val();
    $("."+_class).before(`<p>${_addText}</p>`);
    _specialScript.push(`.before(<p>${_addText}</p>)`);
    previewScript();
});
//updateImg https://cdn.chime.me/image/fs01/agnentinfo/20180819/23/original_19725872235693598.png
$('.updateImg').change(function() {
    let _imgUrl = $('.updateImg input').val();
    $("."+_class).before(`<img src="${_imgUrl}" alt="">`);
    _specialScript.push(`.before(<img src="${_imgUrl}" alt="">)`);
    previewScript();
});

function previewScript() {
    $('.specialScriptTextArea').text(`<script>$('.${_class}')${_specialScript.join('')}</script>`);
}

