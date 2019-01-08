
let _popBox = '';

let
    _class= 'test_p1',
    // _class = 'logo';
    _specialStyle = {};
//追加页面内容
// $('#AMCustomContent').append(_popBox);

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
    preview();
});

//changeDisplay
$('.changeDisplay').change(function() {
    let _display = $(".changeDisplay input:radio:checked").val();
    _specialStyle.display = _display;
    preview();
});

//color
$('.changeColor').change(function() {
    let _color = $('.popBox .changeColor input').val();
    if(!_color || _color === '')return;
    _specialStyle.color = _color;
    preview();
});

//changeBackgroundColor
$('.changeBackgroundColor').change(function() {
    let _BGColor = $('.popBox .changeBackgroundColor input').val();
    _specialStyle.backgroundColor = _BGColor;
    preview();
});

//font-size
$('.changeFontSize').change(function() {
    let _fontSize = $('.popBox .changeFontSize input').val();
    if(!_fontSize || _fontSize === '')return;
    _specialStyle.fontSize = _fontSize + 'px';
    preview();
});

//text-align
$('.changeTextAlign').change(function() {
    let _textAlign = $(".changeTextAlign input:radio:checked").val();
    _specialStyle.textAlign  = _textAlign;
    preview();
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
    preview();
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
    preview();
});





function preview() {
    $("."+_class).css(_specialStyle);
    $('.specialStyleTextArea').text('<style>.'+_class+JSON.stringify(_specialStyle)+'</style>');
}


