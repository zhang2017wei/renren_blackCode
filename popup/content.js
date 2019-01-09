let _popBox = `<div class="popContent">
    <p class="movePlace">
    <span class="toLeft"></span><span class="toRight"></span> 
    <span class="close"></span></p>
    <div class="AMCustomContent" id="AMCustomContent">
        <div class="popBox">
            <p class="customType">Special Style：</p>
            <ul class="customUl">
                <li class="changeLogo radioInput typeImg">
                    <span>scale:</span>
                    <input type="radio" name="size" value="1" id="female0"/><label for="female0">100%</label>
                    <input type="radio" name="size" value="1.2" id="female1"/><label for="female1">120%</label>
                    <input type="radio" name="size" value="1.5" id="female2"/><label for="female2">150%</label>
                    <input type="radio" name="size" value="1.8" id="female3"/><label for="female3">180%</label>
                    <input type="radio" name="size" value="2.2" id="female4"/><label for="female4">220%</label>
                    <input type="radio" name="size" value="2.6" id="female5"/><label for="female5">260%</label>
                </li>
                <li class="changeDisplay radioInput show">
                    <span>display:</span>
                    <input type="checkbox" name="size" value="none" id="hidden"/><label for="hidden">hidden</label>
                </li>
                <li class="changeColor typeNormal typeA">
                    <span>color:</span>
                    <input type="text" placeholder="#ffffff" maxlength="7"/>
                    <ul class="color-list">
                        <li style='background-color:red' data-value='red'></li>
                        <li style='background-color:green' data-value='green'></li>
                        <li style='background-color:yellow' data-value='yellow'></li>
                    </ul>
                </li>
                <li class="changeBackgroundColor typeNormal">
                    <span>backgroundColor:</span>
                    <input type="text" placeholder="#ffffff" maxlength="7"/>
                    <ul class="color-list">
                        <li style='background-color:red' data-value='red'></li>
                        <li style='background-color:green' data-value='green'></li>
                        <li style='background-color:yellow' data-value='yellow'></li>
                    </ul>
                </li>
                <li class="changeFontSize typeNormal typeA">
                    <span>font-size:</span>
                    <input type="number" placeholder="14" maxlength="2"/> px
                </li>
                <li class="changeFontWeight radioInput typeNormal typeA">
                    <span>font-weight:</span>
                    <input type="radio" name="weight" value="normal" id="normal"/><label for="normal">normal</label>
                    <input type="radio" name="weight" value="lighter" id="lighter"/><label for="lighter">lighter</label>
                    <input type="radio" name="weight" value="bold" id="bold"/><label for="bold">bold</label>
                </li>
                <li class="changeTextAlign radioInput typeNormal typeA">
                    <span>text-align:</span>
                    <input type="radio" name="text" value="left" id="left"/><label for="left">left</label>
                    <input type="radio" name="text" value="center" id="center"/><label for="center">center</label>
                    <input type="radio" name="text" value="right" id="right"/><label for="right">right</label>
                </li>
                <li class="changeMargin show">
                    <span>margin:</span>
                    <p><code>top:</code><input class="marginTop" type="number" placeholder="" maxlength="3"/> px</p>
                    <p><code>bottom:</code><input class="marginBottom" type="number" placeholder="" maxlength="3"/> px</p>
                    <p><code>left:</code><input class="marginLeft" type="number" placeholder="" maxlength="3"/> px</p>
                    <p><code>right:</code><input class="marginRight" type="number" placeholder="" maxlength="3"/> px</p>
                </li>
                <li class="changePadding show">
                    <span>padding:</span>
                    <p><code>top:</code><input class="paddingTop" type="number" placeholder="" maxlength="3"/> px</p>
                    <p><code>bottom:</code><input class="paddingBottom" type="number" placeholder="" maxlength="3"/> px</p>
                    <p><code>left:</code><input class="paddingLeft" type="number" placeholder="" maxlength="3"/> px</p>
                    <p><code>right:</code><input class="paddingRight" type="number" placeholder="" maxlength="3"/> px</p>
                </li>
                <li class="text-area show">
                    <p><span>special style:</span> <button class="copyBtn">copy</button></p>
                    <textarea rows="6" cols="90" class="specialStyleTextArea" readonly></textarea>
                </li>
            </ul>
            <p class="customType" style="margin-top: 40px">Special Script：</p>
            <ul class="customUl">
                <li class="changeText typeNormal typeA">
                    <span>replace text:</span>
                    <input type="text" placeholder="hello" maxlength="70"/>
                </li>
                <li class="changeReplaceUrl typeImg typeA">
                    <span>replace link:</span>
                    <input type="text" placeholder="" maxlength="710"/>
                </li>
                <li class="changeAddUrl show">
                    <span>add a link:</span>
                    <input type="text" placeholder="" maxlength="710"/>
                </li>
                <li class="updateText show">
                    <span>add text:</span>
                    <input type="text" placeholder="" maxlength="710"/>
                </li>
                <li class="updateImg show">
                    <span>add img:</span>
                    <input type="text" placeholder="" maxlength="710"/>
                </li>
                <li class="text-area show">
                    <p><span>special script:</span> <button class="copyBtn">copy</button></p>
                    <textarea rows="6" cols="90" class="specialScriptTextArea" disabled></textarea>
                </li>
            </ul>
        </div>

    </div>
</div>`;
let
    _class= '',
    _specialStyle = {},
_specialScript = [];

let _logoWidth,_logoHeight;
var selector = new Selector((e) => {
    _class = e.selector;
    //追加页面内容
    _logoWidth = $(_class).width();_logoHeight = $(_class).height();
    if ($('.popContent').length === 0) {
        $('body').append(_popBox);
    }
    let _height = document.documentElement.clientHeight;
    $('.popContent').css('height',_height-10);
    let _domType = e.type.toLowerCase();
    console.log(_domType);
    let _addClass = $(".AMCustomContent .popBox .customUl");
    switch(_domType){
        case 'img':
            _addClass.addClass("img");
            break;
        case 'a':
            _addClass.addClass("aTage");
            break;
        case 'text':
            break;
        default:
            _addClass.addClass("text");
            // _addClass.addClass("showAll");
    }
}, () => {
    $('.popContent').remove();
    _specialStyle = {};
    _specialScript = {};
});


function __$(cls) {
    return {
        change: function(cb) {
            $('body').on('change', cls, cb);
        }
    }
}

__$('.changeLogo').change(function() {
    let _multiple = $(".changeLogo input:radio:checked").val();
    _specialStyle.width =(_logoWidth * _multiple).toFixed(2) + 'px';
    _specialStyle.height = (_logoHeight * _multiple).toFixed(2) + 'px';
    previewStyle();
});

//changeDisplay
__$('.changeDisplay').change(function() {
    let _display = $(".changeDisplay input:checked").val();
    if(_display === 'none'){
        _specialStyle.display = _display;
    }else{
        _specialStyle.display = 'block';
    }
    previewStyle();
});

//color
__$('.changeColor').change(function() {
    let _color = $('.popBox .changeColor input').val();
    if(!_color || _color === '')return;
    _specialStyle.color = _color;
    previewStyle();
});

//changeBackgroundColor
__$('.changeBackgroundColor').change(function() {
    let _BGColor = $('.popBox .changeBackgroundColor input').val();
    _specialStyle.backgroundColor = _BGColor;
    previewStyle();
});

//font-size
__$('.changeFontSize').change(function() {
    let _fontSize = $('.popBox .changeFontSize input').val();
    console.log(_fontSize);
    _specialStyle.fontSize = _fontSize + 'px';
    previewStyle();
});

//font weight
__$('.changeFontWeight').change(function() {
    let _multiple = $(".changeFontWeight input:radio:checked").val();
    _specialStyle.fontWeight = _multiple;
    previewStyle();
});

//text-align
__$('.changeTextAlign').change(function() {
    let _textAlign = $(".changeTextAlign input:radio:checked").val();
    _specialStyle.textAlign  = _textAlign;
    previewStyle();
});

//margin
__$('.changeMargin input').change(function() {
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
__$('.changePadding input').change(function() {
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
    $(_class).css(_specialStyle);
    let cssString = JSON.stringify(_specialStyle);
    cssString = cssString.replace(/"/g, '').replace(/,/g, ';').replace(/([A-Z])/g, '-$1');
    $('.specialStyleTextArea').text(`<style>${_class}${cssString}</style>`);
}

$('body').on('click', '.copyBtn', function() {
    let inputEl = $('.specialStyleTextArea')[0]
    inputEl.focus();
    inputEl.setSelectionRange(0, inputEl.value.length);
    let result = document.execCommand('Copy', true);
})



//changeText
__$('.changeText').change(function() {
    let _text = $('.popBox .changeText input').val();
    $(_class).text(_text);
    _specialScript.changeText = `.text('${_text.replace(/'/,"\\'")}')`;
    previewScript();
});
//replace url
__$('.changeReplaceUrl').change(function() {
    let _replaceUrl = $('.changeReplaceUrl input').val();
    _specialScript.changeReplaceUrl = `.attr("href","${_replaceUrl}")`;
    previewScript();
});

//changeAddUrl
__$('.changeAddUrl').change(function() {
    let _addUrl = $('.changeAddUrl input').val();
    $(_class).wrap(`<a href='${_addUrl}'></a>`);
    _specialScript.changeAddUrl = `.wrap('<a href="${_addUrl}"></a>')`;
    previewScript();
});
//updateText
__$('.updateText').change(function() {
    let _addText = $('.updateText input').val();
    $(_class).before(`<p>${_addText}</p>`);
    _specialScript.updateText = `.before('<p>${_addText.replace(/'/,"\\'")}</p>')`;
    previewScript();
});

__$('.updateImg').change(function() {
    let _imgUrl = $('.updateImg input').val();
    $(_class).before(`<img src="${_imgUrl}" alt="">`);
    _specialScript.updateImg = `.before('<img src="${_imgUrl}" alt="">')`;
    previewScript();
});

function previewScript() {
    $('.specialScriptTextArea').text(`<script>$('${_class}')${Object.values(_specialScript).join('')}</script>`);
}



//movePlace
$('body').on('click','.movePlace .toLeft',function () {
    $('.popContent').css('left','0%');
    $('.movePlace .close').css({'left':'20px','right':'auto'});
    $('.movePlace .toRight').css('display','block');
    $(this).css('display','none');
});
$('body').on('click','.movePlace .toRight',function () {
    $('.popContent').css('left','50%');
    $('.movePlace .close').css({'left':'auto','right':'20px'});
    $('.movePlace .toLeft').css('display','block');
    $(this).css('display','none');
});


$('body').on('click', '.close', function () {
    // $('.popContent').css('display','none');
    //追加页面内容
    $('.popContent').remove();
    _specialStyle = {};
    _specialScript = [];
    selector.start();
});

$('body').on('click', '.color-list li', (e) => {
    $(e.target).parent().siblings('input').val($(e.target).data('value')).trigger('change');
});

var show = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    if(request.cmd == 'test'){
        show = request.value
        if(show){
            selector.start();
        }else{
            selector.stop();
        }
    }
    if(request.cmd == 'ask'){
        sendResponse(show)
    }
});

