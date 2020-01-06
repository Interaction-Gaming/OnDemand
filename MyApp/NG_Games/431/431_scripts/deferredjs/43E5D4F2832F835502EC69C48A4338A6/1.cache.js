function $setTitle(this$static, title){
  title == null || title.length == 0?(this$static.element.removeAttribute('title') , undefined):$setAttribute(this$static.element, 'title', title);
}

function $setCoordinateSpaceHeight(this$static, height){
  $setHeight_0(this$static.element, height);
}

function $setCoordinateSpaceWidth(this$static, width){
  $setWidth_0(this$static.element, width);
}

function $clearRect(this$static, x, y, w, h_0){
  this$static.clearRect(x, y, w, h_0);
}

function $drawImage_0(this$static, image, sx, sy, sw, sh, dx, dy, dw, dh){
  this$static.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
}

function $fillText(this$static, text, x, y){
  this$static.fillText && this$static.fillText(text, x, y);
}

function $measureText(this$static, text){
  return this$static.measureText(text);
}

function $setFillStyleWeb(this$static, fillStyle){
  this$static.fillStyle = fillStyle;
}

function $setFont(this$static, f){
  this$static.font = f;
}

function $setGlobalAlpha(this$static, alpha){
  this$static.globalAlpha = alpha;
}

function $setShadowBlur(this$static, shadowBlur){
  this$static.shadowBlur = shadowBlur;
}

function $setShadowColor(this$static, shadowColor){
  this$static.shadowColor = shadowColor;
}

function $setShadowOffsetX(this$static, shadowOffsetX){
  this$static.shadowOffsetX = shadowOffsetX;
}

function $setShadowOffsetY(this$static, shadowOffsetY){
  this$static.shadowOffsetY = shadowOffsetY;
}

function $setTextAlign(this$static, align){
  this$static.textAlign = align;
}

function $setTextBaseline(this$static, baseline){
  this$static.textBaseline = baseline;
}

function $transform(this$static, m11, m12, m21, m22, dx, dy){
  this$static.transform(m11, m12, m21, m22, dx, dy);
}

function $clinit_Context2d$TextAlign(){
  $clinit_Context2d$TextAlign = nullMethod;
  CENTER = new Context2d$TextAlign_0('CENTER', 0, 'center');
  END = new Context2d$TextAlign_0('END', 1, 'end');
  LEFT = new Context2d$TextAlign_0('LEFT', 2, 'left');
  RIGHT = new Context2d$TextAlign_0('RIGHT', 3, 'right');
  START = new Context2d$TextAlign_0('START', 4, 'start');
  $VALUES = initValues(_3Lcom_google_gwt_canvas_dom_client_Context2d$TextAlign_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$Comparable_$1, Q$Object_$1]), Q$Context2d$TextAlign, [CENTER, END, LEFT, RIGHT, START]);
}

function Context2d$TextAlign_0(enum$name, enum$ordinal, value){
  Enum_0.call(this, enum$name, enum$ordinal);
  this.value_0 = value;
}

function values_0(){
  $clinit_Context2d$TextAlign();
  return $VALUES;
}

function Context2d$TextAlign(){
}

_ = Context2d$TextAlign_0.prototype = Context2d$TextAlign.prototype = new Enum;
_.getClass$ = function getClass_19(){
  return Lcom_google_gwt_canvas_dom_client_Context2d$TextAlign_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Context2d$TextAlign, Q$Serializable, Q$Comparable, Q$Enum]);
_.value_0 = null;
var $VALUES, CENTER, END, LEFT, RIGHT, START;
function $clinit_Context2d$TextBaseline(){
  $clinit_Context2d$TextBaseline = nullMethod;
  ALPHABETIC = new Context2d$TextBaseline_0('ALPHABETIC', 0, 'alphabetic');
  BOTTOM = new Context2d$TextBaseline_0('BOTTOM', 1, 'bottom');
  HANGING = new Context2d$TextBaseline_0('HANGING', 2, 'hanging');
  IDEOGRAPHIC = new Context2d$TextBaseline_0('IDEOGRAPHIC', 3, 'ideographic');
  MIDDLE = new Context2d$TextBaseline_0('MIDDLE', 4, 'middle');
  TOP = new Context2d$TextBaseline_0('TOP', 5, 'top');
  $VALUES_0 = initValues(_3Lcom_google_gwt_canvas_dom_client_Context2d$TextBaseline_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$Comparable_$1, Q$Object_$1]), Q$Context2d$TextBaseline, [ALPHABETIC, BOTTOM, HANGING, IDEOGRAPHIC, MIDDLE, TOP]);
}

function Context2d$TextBaseline_0(enum$name, enum$ordinal, value){
  Enum_0.call(this, enum$name, enum$ordinal);
  this.value_0 = value;
}

function values_1(){
  $clinit_Context2d$TextBaseline();
  return $VALUES_0;
}

function Context2d$TextBaseline(){
}

_ = Context2d$TextBaseline_0.prototype = Context2d$TextBaseline.prototype = new Enum;
_.getClass$ = function getClass_20(){
  return Lcom_google_gwt_canvas_dom_client_Context2d$TextBaseline_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Context2d$TextBaseline, Q$Serializable, Q$Comparable, Q$Enum]);
_.value_0 = null;
var $VALUES_0, ALPHABETIC, BOTTOM, HANGING, IDEOGRAPHIC, MIDDLE, TOP;
_ = Style$FontWeight$1.prototype;
_.getCssName = function getCssName(){
  return 'normal';
}
;
_ = Style$FontWeight$2.prototype;
_.getCssName = function getCssName_0(){
  return 'bold';
}
;
_ = Style$FontWeight$3.prototype;
_.getCssName = function getCssName_1(){
  return 'bolder';
}
;
_ = Style$FontWeight$4.prototype;
_.getCssName = function getCssName_2(){
  return 'lighter';
}
;
function $getDefaultNative(){
  return ['USD', 'US$', 2, 'US$'];
}

function $getNumberConstants(this$static){
  !this$static.numberConstants && (this$static.numberConstants = new NumberConstantsImpl__0);
  return this$static.numberConstants;
}

function $clinit_NumberFormat(){
  $clinit_NumberFormat = nullMethod;
  $getNumberConstants(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_0));
}

function $addExponent(this$static, digits){
  var exponentDigits, i;
  digits.impl.string += 'E';
  if (this$static.exponent < 0) {
    this$static.exponent = -this$static.exponent;
    digits.impl.string += '-';
  }
  exponentDigits = '' + this$static.exponent;
  for (i = exponentDigits.length; i < this$static.minExponentDigits; ++i) {
    digits.impl.string += '0';
  }
  $append_1(digits.impl, exponentDigits);
}

function $addZeroAndDecimal(this$static, digits){
  if (this$static.digitsLength == 0) {
    $replace(digits.impl, 0, 0, '0');
    ++this$static.decimalPosition;
    ++this$static.digitsLength;
  }
  if (this$static.decimalPosition < this$static.digitsLength || this$static.decimalSeparatorAlwaysShown) {
    $insert_3(digits, this$static.decimalPosition, '.');
    ++this$static.digitsLength;
  }
}

function $adjustFractionDigits(this$static, digits){
  var requiredDigits, toRemove;
  requiredDigits = this$static.decimalPosition + this$static.minimumFractionDigits;
  if (this$static.digitsLength < requiredDigits) {
    while (this$static.digitsLength < requiredDigits) {
      digits.impl.string += '0';
      ++this$static.digitsLength;
    }
  }
   else {
    toRemove = this$static.decimalPosition + this$static.maximumFractionDigits;
    toRemove > this$static.digitsLength && (toRemove = this$static.digitsLength);
    while (toRemove > requiredDigits && $charAt(digits.impl.string, toRemove - 1) == 48) {
      --toRemove;
    }
    if (toRemove < this$static.digitsLength) {
      $replace_2(digits, toRemove, this$static.digitsLength, '');
      this$static.digitsLength = toRemove;
    }
  }
}

function $computeExponent(this$static, digits){
  var remainder, strip;
  strip = 0;
  while (strip < this$static.digitsLength - 1 && $charAt(digits.impl.string, strip) == 48) {
    ++strip;
  }
  if (strip > 0) {
    $replace(digits.impl, 0, strip, '');
    this$static.digitsLength -= strip;
    this$static.exponent -= strip;
  }
  if (this$static.maximumIntegerDigits > this$static.minimumIntegerDigits && this$static.maximumIntegerDigits > 0) {
    this$static.exponent += this$static.decimalPosition - 1;
    remainder = this$static.exponent % this$static.maximumIntegerDigits;
    remainder < 0 && (remainder += this$static.maximumIntegerDigits);
    this$static.decimalPosition = remainder + 1;
    this$static.exponent -= remainder;
  }
   else {
    this$static.exponent += this$static.decimalPosition - this$static.minimumIntegerDigits;
    this$static.decimalPosition = this$static.minimumIntegerDigits;
  }
  if (this$static.digitsLength == 1 && digits.impl.string.charCodeAt(0) == 48) {
    this$static.exponent = 0;
    this$static.decimalPosition = this$static.minimumIntegerDigits;
  }
}

function $format(this$static, number){
  var buf, isNegative, preRound, scale, currentGroupingSize, useExponent;
  if (isNaN(number)) {
    return 'NaN';
  }
  isNegative = number < 0 || number == 0 && 1 / number < 0;
  isNegative && (number = -number);
  buf = new StringBuilder_0;
  if (!isFinite(number)) {
    $append_7(buf, isNegative?this$static.negativePrefix:this$static.positivePrefix);
    buf.impl.string += '\u221E';
    $append_7(buf, isNegative?this$static.negativeSuffix:this$static.positiveSuffix);
    return buf.impl.string;
  }
  number *= this$static.multiplier;
  scale = toScaledString(buf, number);
  preRound = buf.impl.string.length + scale + this$static.maximumFractionDigits + 3;
  if (preRound > 0 && preRound < buf.impl.string.length && $charAt(buf.impl.string, preRound) == 57) {
    $propagateCarry(this$static, buf, preRound - 1);
    scale += buf.impl.string.length - preRound;
    $replace_2(buf, preRound, buf.impl.string.length, '');
  }
  this$static.exponent = 0;
  this$static.digitsLength = buf.impl.string.length;
  this$static.decimalPosition = this$static.digitsLength + scale;
  useExponent = this$static.useExponentialNotation;
  currentGroupingSize = this$static.groupingSize;
  this$static.decimalPosition > 1024 && (useExponent = true);
  useExponent && $computeExponent(this$static, buf);
  $processLeadingZeros(this$static, buf);
  $roundValue(this$static, buf);
  $insertGroupingSeparators(this$static, buf, currentGroupingSize);
  $adjustFractionDigits(this$static, buf);
  $addZeroAndDecimal(this$static, buf);
  useExponent && $addExponent(this$static, buf);
  $insert_3(buf, 0, isNegative?this$static.negativePrefix:this$static.positivePrefix);
  $append_7(buf, isNegative?this$static.negativeSuffix:this$static.positiveSuffix);
  return buf.impl.string;
}

function $insertGroupingSeparators(this$static, digits, g){
  var i;
  if (g > 0) {
    for (i = g; i < this$static.decimalPosition; i += g + 1) {
      $insert_3(digits, this$static.decimalPosition - i, ',');
      ++this$static.decimalPosition;
      ++this$static.digitsLength;
    }
  }
}

function $parseAffix(this$static, pattern, start, affix, inNegativePattern){
  var ch, inQuote, len, pos;
  $replace_1(affix, affix.impl.string.length);
  inQuote = false;
  len = pattern.length;
  for (pos = start; pos < len; ++pos) {
    ch = pattern.charCodeAt(pos);
    if (ch == 39) {
      if (pos + 1 < len && pattern.charCodeAt(pos + 1) == 39) {
        ++pos;
        affix.impl.string += "'";
      }
       else {
        inQuote = !inQuote;
      }
      continue;
    }
    if (inQuote) {
      $appendNonNull(affix.impl, String.fromCharCode(ch));
    }
     else {
      switch (ch) {
        case 35:
        case 48:
        case 44:
        case 46:
        case 59:
          return pos - start;
        case 164:
          this$static.isCurrencyFormat = true;
          if (pos + 1 < len && pattern.charCodeAt(pos + 1) == 164) {
            ++pos;
            $append_5(affix, this$static.currencyCode);
          }
           else {
            $append_5(affix, this$static.currencySymbol);
          }

          break;
        case 37:
          if (!inNegativePattern) {
            if (this$static.multiplier != 1) {
              throw new IllegalArgumentException_1('Too many percent/per mille characters in pattern "' + pattern + '"');
            }
            this$static.multiplier = 100;
          }

          affix.impl.string += '%';
          break;
        case 8240:
          if (!inNegativePattern) {
            if (this$static.multiplier != 1) {
              throw new IllegalArgumentException_1('Too many percent/per mille characters in pattern "' + pattern + '"');
            }
            this$static.multiplier = 1000;
          }

          affix.impl.string += '\u2030';
          break;
        case 45:
          affix.impl.string += '-';
          break;
        default:$appendNonNull(affix.impl, String.fromCharCode(ch));
      }
    }
  }
  return len - start;
}

function $parsePattern(this$static, pattern){
  var affix, pos;
  pos = 0;
  affix = new StringBuffer_0;
  pos += $parseAffix(this$static, pattern, 0, affix, false);
  this$static.positivePrefix = affix.impl.string;
  pos += $parseTrunk(this$static, pattern, pos, false);
  pos += $parseAffix(this$static, pattern, pos, affix, false);
  this$static.positiveSuffix = affix.impl.string;
  if (pos < pattern.length && pattern.charCodeAt(pos) == 59) {
    ++pos;
    pos += $parseAffix(this$static, pattern, pos, affix, true);
    this$static.negativePrefix = affix.impl.string;
    pos += $parseTrunk(this$static, pattern, pos, true);
    pos += $parseAffix(this$static, pattern, pos, affix, true);
    this$static.negativeSuffix = affix.impl.string;
  }
   else {
    this$static.negativePrefix = '-' + this$static.positivePrefix;
    this$static.negativeSuffix = this$static.positiveSuffix;
  }
}

function $parseTrunk(this$static, pattern, start, ignorePattern){
  var ch, decimalPos, digitLeftCount, digitRightCount, effectiveDecimalPos, groupingCount, len, loop, n, pos, totalDigits, zeroDigitCount;
  decimalPos = -1;
  digitLeftCount = 0;
  zeroDigitCount = 0;
  digitRightCount = 0;
  groupingCount = -1;
  len = pattern.length;
  pos = start;
  loop = true;
  for (; pos < len && loop; ++pos) {
    ch = pattern.charCodeAt(pos);
    switch (ch) {
      case 35:
        zeroDigitCount > 0?++digitRightCount:++digitLeftCount;
        groupingCount >= 0 && decimalPos < 0 && ++groupingCount;
        break;
      case 48:
        if (digitRightCount > 0) {
          throw new IllegalArgumentException_1("Unexpected '0' in pattern \"" + pattern + '"');
        }

        ++zeroDigitCount;
        groupingCount >= 0 && decimalPos < 0 && ++groupingCount;
        break;
      case 44:
        groupingCount = 0;
        break;
      case 46:
        if (decimalPos >= 0) {
          throw new IllegalArgumentException_1('Multiple decimal separators in pattern "' + pattern + '"');
        }

        decimalPos = digitLeftCount + zeroDigitCount + digitRightCount;
        break;
      case 69:
        if (!ignorePattern) {
          if (this$static.useExponentialNotation) {
            throw new IllegalArgumentException_1('Multiple exponential symbols in pattern "' + pattern + '"');
          }
          this$static.useExponentialNotation = true;
          this$static.minExponentDigits = 0;
        }

        while (pos + 1 < len && pattern.charCodeAt(pos + 1) == 48) {
          ++pos;
          ignorePattern || ++this$static.minExponentDigits;
        }

        if (!ignorePattern && digitLeftCount + zeroDigitCount < 1 || this$static.minExponentDigits < 1) {
          throw new IllegalArgumentException_1('Malformed exponential pattern "' + pattern + '"');
        }

        loop = false;
        break;
      default:--pos;
        loop = false;
    }
  }
  if (zeroDigitCount == 0 && digitLeftCount > 0 && decimalPos >= 0) {
    n = decimalPos;
    decimalPos == 0 && ++n;
    digitRightCount = digitLeftCount - n;
    digitLeftCount = n - 1;
    zeroDigitCount = 1;
  }
  if (decimalPos < 0 && digitRightCount > 0 || decimalPos >= 0 && (decimalPos < digitLeftCount || decimalPos > digitLeftCount + zeroDigitCount) || groupingCount == 0) {
    throw new IllegalArgumentException_1('Malformed pattern "' + pattern + '"');
  }
  if (ignorePattern) {
    return pos - start;
  }
  totalDigits = digitLeftCount + zeroDigitCount + digitRightCount;
  this$static.maximumFractionDigits = decimalPos >= 0?totalDigits - decimalPos:0;
  if (decimalPos >= 0) {
    this$static.minimumFractionDigits = digitLeftCount + zeroDigitCount - decimalPos;
    this$static.minimumFractionDigits < 0 && (this$static.minimumFractionDigits = 0);
  }
  effectiveDecimalPos = decimalPos >= 0?decimalPos:totalDigits;
  this$static.minimumIntegerDigits = effectiveDecimalPos - digitLeftCount;
  if (this$static.useExponentialNotation) {
    this$static.maximumIntegerDigits = digitLeftCount + this$static.minimumIntegerDigits;
    this$static.maximumFractionDigits == 0 && this$static.minimumIntegerDigits == 0 && (this$static.minimumIntegerDigits = 1);
  }
  this$static.groupingSize = groupingCount > 0?groupingCount:0;
  this$static.decimalSeparatorAlwaysShown = decimalPos == 0 || decimalPos == totalDigits;
  return pos - start;
}

function $processLeadingZeros(this$static, digits){
  var i, prefix, strip;
  if (this$static.decimalPosition > this$static.digitsLength) {
    while (this$static.digitsLength < this$static.decimalPosition) {
      digits.impl.string += '0';
      ++this$static.digitsLength;
    }
  }
  if (!this$static.useExponentialNotation) {
    if (this$static.decimalPosition < this$static.minimumIntegerDigits) {
      prefix = new StringBuilder_0;
      while (this$static.decimalPosition < this$static.minimumIntegerDigits) {
        prefix.impl.string += '0';
        ++this$static.decimalPosition;
        ++this$static.digitsLength;
      }
      $insert_3(digits, 0, prefix.impl.string);
    }
     else if (this$static.decimalPosition > this$static.minimumIntegerDigits) {
      strip = this$static.decimalPosition - this$static.minimumIntegerDigits;
      for (i = 0; i < strip; ++i) {
        if ($charAt(digits.impl.string, i) != 48) {
          strip = i;
          break;
        }
      }
      if (strip > 0) {
        $replace(digits.impl, 0, strip, '');
        this$static.digitsLength -= strip;
        this$static.decimalPosition -= strip;
      }
    }
  }
}

function $propagateCarry(this$static, digits, i){
  var carry, digit;
  carry = true;
  while (carry && i >= 0) {
    digit = $charAt(digits.impl.string, i);
    if (digit == 57) {
      $setCharAt(digits, i--, 48);
    }
     else {
      $setCharAt(digits, i, digit + 1 & 65535);
      carry = false;
    }
  }
  if (carry) {
    $replace(digits.impl, 0, 0, '1');
    ++this$static.decimalPosition;
    ++this$static.digitsLength;
  }
}

function $roundValue(this$static, digits){
  var i;
  if (this$static.digitsLength > this$static.decimalPosition + this$static.maximumFractionDigits && $charAt_0(digits, this$static.decimalPosition + this$static.maximumFractionDigits) >= 53) {
    i = this$static.decimalPosition + this$static.maximumFractionDigits - 1;
    $propagateCarry(this$static, digits, i);
  }
}

function NumberFormat_0(cdata, userSuppliedPattern){
  if (!cdata) {
    throw new IllegalArgumentException_1('Unknown currency code');
  }
  this.pattern = '0.00';
  this.currencyCode = cdata[0];
  this.currencySymbol = cdata[1];
  $parsePattern(this, this.pattern);
  if (!userSuppliedPattern && this.isCurrencyFormat) {
    this.minimumFractionDigits = cdata[2] & 7;
    this.maximumFractionDigits = this.minimumFractionDigits;
  }
}

function NumberFormat_1(cdata){
  $clinit_NumberFormat();
  NumberFormat_0.call(this, cdata, true);
}

function toScaledString(buf, val){
  var dot, expDigits, expIdx, scale, startLen;
  startLen = buf.impl.string.length;
  $append_7(buf, val.toPrecision(20));
  scale = 0;
  expIdx = $indexOf_1(buf.impl.string, 'e', startLen);
  expIdx < 0 && (expIdx = $indexOf_1(buf.impl.string, 'E', startLen));
  if (expIdx >= 0) {
    expDigits = expIdx + 1;
    expDigits < buf.impl.string.length && $charAt(buf.impl.string, expDigits) == 43 && ++expDigits;
    expDigits < buf.impl.string.length && (scale = __parseAndValidateInt($substring(buf.impl.string, expDigits)));
    $replace_2(buf, expIdx, buf.impl.string.length, '');
  }
  dot = $indexOf_1(buf.impl.string, '.', startLen);
  if (dot >= 0) {
    $replace(buf.impl, dot, dot + 1, '');
    scale -= buf.impl.string.length - dot;
  }
  return scale;
}

function NumberFormat(){
}

_ = NumberFormat_1.prototype = NumberFormat.prototype = new Object_0;
_.getClass$ = function getClass_134(){
  return Lcom_google_gwt_i18n_client_NumberFormat_2_classLit;
}
;
_.currencyCode = null;
_.currencySymbol = null;
_.decimalPosition = 0;
_.decimalSeparatorAlwaysShown = false;
_.digitsLength = 0;
_.exponent = 0;
_.groupingSize = 3;
_.isCurrencyFormat = false;
_.maximumFractionDigits = 3;
_.maximumIntegerDigits = 40;
_.minExponentDigits = 0;
_.minimumFractionDigits = 0;
_.minimumIntegerDigits = 1;
_.multiplier = 1;
_.negativePrefix = '-';
_.negativeSuffix = '';
_.pattern = null;
_.positivePrefix = '';
_.positiveSuffix = '';
_.useExponentialNotation = false;
function NumberConstantsImpl__0(){
}

function NumberConstantsImpl_(){
}

_ = NumberConstantsImpl__0.prototype = NumberConstantsImpl_.prototype = new Object_0;
_.getClass$ = function getClass_136(){
  return Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1_2_classLit;
}
;
function $set(this$static, index, value){
  var previous;
  previous = $get_0(this$static, index);
  $set0(this$static, index, value);
  return previous;
}

function $set0(this$static, index, value){
  if (value) {
    var func = value.getUnwrapper();
    value = func(value);
  }
   else {
    value = undefined;
  }
  this$static.jsArray[index] = value;
}

function JSONArray_0(){
  this.jsArray = [];
}

_ = JSONArray_0.prototype = JSONArray.prototype;
_ = AbsolutePanel.prototype;
_.add_2 = function add_4(w, left, top_0){
  $add_2(this, w, left, top_0);
}
;
function Float_0(value){
  this.value_0 = value;
}

function Float(){
}

_ = Float_0.prototype = Float.prototype = new Number_0;
_.equals$ = function equals_12(o){
  return instanceOf(o, Q$Float) && dynamicCast(o, Q$Float).value_0 == this.value_0;
}
;
_.getClass$ = function getClass_290(){
  return Ljava_lang_Float_2_classLit;
}
;
_.hashCode$ = function hashCode_14(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_26(){
  return '' + this.value_0;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Comparable, Q$Float, Q$Number]);
_.value_0 = 0;
function $append_3(this$static, x){
  $append(this$static.impl, x);
  return this$static;
}

function $replace_1(this$static, end){
  $replace(this$static.impl, 0, end, '');
  return this$static;
}

function $append_6(this$static, x){
  $append(this$static.impl, x);
  return this$static;
}

function $append_7(this$static, x){
  $append_1(this$static.impl, x);
  return this$static;
}

function $charAt_0(this$static, index){
  return $charAt(this$static.impl.string, index);
}

function $insert_3(this$static, index, x){
  return $replace(this$static.impl, index, index, x) , this$static;
}

function $replace_2(this$static, start, end, toInsert){
  $replace(this$static.impl, start, end, toInsert);
  return this$static;
}

function $setCharAt(this$static, index, x){
  $replace_2(this$static, index, index + 1, String.fromCharCode(x));
}

function StringBuilder_0(){
  this.impl = new StringBufferImplAppend_0;
}

function StringBuilder(){
}

_ = StringBuilder_0.prototype = StringBuilder.prototype = new Object_0;
_.getClass$ = function getClass_300(){
  return Ljava_lang_StringBuilder_2_classLit;
}
;
_.toString$ = function toString_31(){
  return this.impl.string;
}
;
_.castableTypeMap$ = makeCastMap([Q$CharSequence]);
function $poll(this$static){
  var node;
  return this$static.size_0 == 0?null:($throwEmptyException(this$static) , --this$static.size_0 , node = this$static.header.next , $remove_15(node) , node.value_0);
}

function $throwEmptyException(this$static){
  if (this$static.size_0 == 0) {
    throw new NoSuchElementException_0;
  }
}

function getWinUpToValues(coinIndex){
  return winUpToValues[coinIndex];
}

function $setGameResumeData_0(this$static, gameResumeData){
  this$static.gameResumeDO = gameResumeData;
}

function $clinit_Color(){
  $clinit_Color = nullMethod;
  new Color_0('rgba(0,0,0,0.3)');
  new Color_0('rgba(255,0,0,0.3)');
  BLACK = new Color_0('#000000');
  new Color_0('#318ce0');
  new Color_0('#8a2be2');
  new Color_0('#5fa2e0');
  new Color_0('#23ef24');
  new Color_0('#a9a9a9');
  new Color_0('#eeeeee');
  new Color_0('#f88247');
  new Color_0('#ffd393');
  new Color_0('#ff00ff');
  new Color_0('#ff0000');
  new Color_0('#c6defa');
  new Color_0('#ffffff');
  new Color_0('yellow');
  new Color_0('#c44607');
  new Color_0('#fb5c0c');
  new Color_0('#0c6ac1');
}

function Color_0(colorStr){
  $clinit_Color();
  this.colorStr = colorStr;
}

function Color(){
}

_ = Color_0.prototype = Color.prototype = new Object_0;
_.getClass$ = function getClass_351(){
  return Lwebgl_client_com_google_gwt_widgetideas_graphics_client_Color_2_classLit;
}
;
_.toString$ = function toString_36(){
  return this.colorStr;
}
;
_.colorStr = '';
var BLACK;
function $schedule_0(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw new IllegalArgumentException_1('must be positive');
  }
  this$static.isRepeating?clearInterval_1(this$static.timerId):clearTimeout_1(this$static.timerId);
  this$static.isRepeating = false;
  this$static.timerId = createTimeout_0(this$static, delayMillis);
}

function clearInterval_1(id){
  window.clearInterval(id);
}

function clearTimeout_1(id){
  window.clearTimeout(id);
}

function createTimeout_0(timer, delay){
  return window.setTimeout(function(){
    timer.fire();
  }
  , delay);
}

function OPTimer(){
}

_ = OPTimer.prototype = new Object_0;
_.fire = function fire_5(){
  this.isRepeating || (this.isRepeating?clearInterval_1(this.timerId):clearTimeout_1(this.timerId));
  $updateFrame(this.this$0);
}
;
_.getClass$ = function getClass_356(){
  return Lwebgl_client_gamesFramework_OPTimer_2_classLit;
}
;
_.isRepeating = false;
_.timerId = 0;
function createSingleButton(button, buttonText, handler, buttonAnimationBank, location_0, container){
  var buttonAnimation, canvasButton;
  canvasButton = new CanvasButton_0;
  buttonAnimation = new AnimationController_0(buttonAnimationBank, 'enabled');
  $init_34(canvasButton, buttonText, handler, button.activeStyle, button.disabledStyle, container, location_0, buttonAnimation);
  return canvasButton;
}

function $setCurrentButtonParams(this$static){
  var buttonHeight, buttonWidth;
  if (this$static.isVerticalButton) {
    this$static.currentLocationX = this$static.up.currentLocationX;
    this$static.currentLocationY = this$static.up.currentLocationY;
    buttonWidth = this$static.up.buttonWidth;
    buttonHeight = this$static.up.buttonHeight + this$static.down.buttonHeight;
  }
   else {
    this$static.currentLocationX = this$static.down.currentLocationX;
    this$static.currentLocationY = this$static.down.currentLocationY;
    buttonWidth = this$static.up.buttonWidth + this$static.down.buttonWidth;
    buttonHeight = this$static.up.buttonHeight;
  }
  if (this$static.textLable) {
    $setSize(this$static.textPanel, buttonWidth + 'px', buttonHeight + 'px');
    $setCellHorizontalAlignment(this$static.textPanel, this$static.textLable, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
    $setCellVerticalAlignment(this$static.textPanel, this$static.textLable, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
    $remove_4(this$static.panel, this$static.textPanel);
    $add_2(this$static.panel, this$static.textPanel, this$static.currentLocationX, this$static.currentLocationY);
    $setSize(this$static.upMouseEventsListener, this$static.up.buttonWidth + 'px', this$static.up.buttonHeight + 'px');
    $getWidgetIndex(this$static.panel, this$static.upMouseEventsListener) != -1 && $remove_4(this$static.panel, this$static.upMouseEventsListener);
    $add_2(this$static.panel, this$static.upMouseEventsListener, this$static.up.currentLocationX, this$static.up.currentLocationY);
    $setSize(this$static.downMouseEventsListener, this$static.down.buttonWidth + 'px', this$static.down.buttonHeight + 'px');
    $getWidgetIndex(this$static.panel, this$static.downMouseEventsListener) != -1 && $remove_4(this$static.panel, this$static.downMouseEventsListener);
    $add_2(this$static.panel, this$static.downMouseEventsListener, this$static.down.currentLocationX, this$static.down.currentLocationY);
  }
}

function $setText_1(this$static, text){
  text != null && this$static.textLable.setHTML(this$static.currentButtonValue + '');
}

function $setZIndex(this$static){
  this$static.up.canvas.element.style['zIndex'] = '3000';
  this$static.down.canvas.element.style['zIndex'] = '3000';
}

function CanvasButtonUpDown(){
}

_ = CanvasButtonUpDown.prototype = new Object_0;
_.getClass$ = function getClass_359(){
  return Lwebgl_client_nf_menus_gamebuttons_CanvasButtonUpDown_2_classLit;
}
;
_.currentLocationX = 0;
_.currentLocationY = 0;
_.currentValuesIndex = 0;
_.down = null;
_.downMouseEventsListener = null;
_.isEnabled = false;
_.isVerticalButton = false;
_.listener = null;
_.panel = null;
_.styleDisabled = null;
_.styleStandard = null;
_.textLable = null;
_.textPanel = null;
_.up = null;
_.upMouseEventsListener = null;
_.values_0 = null;
function $updateButtonStyle(this$static, isEnabled, panel){
  if (isEnabled) {
    this$static.up.isEnabled && $getWidgetIndex(panel, this$static.upMouseEventsListener) == -1 && $add_2(panel, this$static.upMouseEventsListener, this$static.up.currentLocationX, this$static.up.currentLocationY);
    this$static.down.isEnabled && $getWidgetIndex(panel, this$static.downMouseEventsListener) == -1 && $add_2(panel, this$static.downMouseEventsListener, this$static.down.currentLocationX, this$static.down.currentLocationY);
  }
   else {
    $getWidgetIndex(panel, this$static.upMouseEventsListener) != -1 && $remove_4(panel, this$static.upMouseEventsListener);
    $getWidgetIndex(panel, this$static.downMouseEventsListener) != -1 && $remove_4(panel, this$static.downMouseEventsListener);
  }
}

function CanvasButtonUpDownStandard(){
}

_ = CanvasButtonUpDownStandard.prototype = new CanvasButtonUpDown;
_.getClass$ = function getClass_360(){
  return Lwebgl_client_nf_menus_gamebuttons_CanvasButtonUpDownStandard_2_classLit;
}
;
_.setEnabled = function setEnabled(isEnabled){
  this.isEnabled = isEnabled;
  this.textLable.setStylePrimaryName(isEnabled?this.styleStandard:this.styleDisabled);
  this.updateClickAreaStates(isEnabled, this.panel);
}
;
_.updateClickAreaStates = function updateClickAreaStates(isEnabled, panel){
  $setEnabled_2(this.up, isEnabled && this.currentValuesIndex < this.values_0.length - 1);
  $setEnabled_2(this.down, isEnabled && this.currentValuesIndex > 0);
  $updateButtonStyle(this, isEnabled, panel);
}
;
function $handleDownPressed(this$static){
  if (this$static.isEnabled) {
    this$static.currentButtonValue - 1 > 0 && (this$static.currentButtonValue > 5?this$static.currentButtonValue % 5 == 0?(this$static.currentButtonValue -= 5):(this$static.currentButtonValue -= this$static.currentButtonValue % 5):--this$static.currentButtonValue);
    $updateClickAreaStates(this$static, this$static.isEnabled, this$static.panel);
    $setText_1(this$static, this$static.currentButtonValue + '');
    $handleButtonValueChanged(this$static.listener, this$static.currentButtonValue);
  }
}

function $handleUpPressed(this$static){
  if (this$static.isEnabled) {
    this$static.currentButtonValue + 5 <= 300 && (this$static.currentButtonValue >= 5?this$static.currentButtonValue % 5 == 0?(this$static.currentButtonValue += 5):(this$static.currentButtonValue += 5 - this$static.currentButtonValue % 5):++this$static.currentButtonValue);
    $updateClickAreaStates(this$static, this$static.isEnabled, this$static.panel);
    $setText_1(this$static, this$static.currentButtonValue + '');
    $handleButtonValueChanged(this$static.listener, this$static.currentButtonValue);
  }
}

function $init_2(this$static, upLocation, upAnimController, downLocation, downAnimController, listener, panel){
  this$static.isVerticalButton = false;
  this$static.panel = panel;
  this$static.styleStandard = 'auto-play-style';
  this$static.styleDisabled = 'auto-play-style-disabled';
  this$static.listener = listener;
  this$static.isEnabled = true;
  this$static.values_0 = null;
  $init_34(this$static.up, null, null, 'auto-play-style', 'auto-play-style-disabled', panel, upLocation, upAnimController);
  $init_34(this$static.down, null, null, 'auto-play-style', 'auto-play-style-disabled', panel, downLocation, downAnimController);
  this$static.textLable = new HTML_1(this$static.currentButtonValue + '');
  this$static.textLable.setStylePrimaryName('auto-play-style');
  this$static.textLable.element.style['zIndex'] = '3003';
  this$static.textPanel = new TextPanel_0;
  $add_17(this$static.textPanel, this$static.textLable);
  this$static.textPanel.element.style['zIndex'] = '3003';
  this$static.upMouseEventsListener = new EventsHandlerDiv_0;
  $addDomHandler(this$static.upMouseEventsListener, this$static.up, ($clinit_TouchStartEvent() , $clinit_TouchStartEvent() , TYPE_13));
  $addDomHandler(this$static.upMouseEventsListener, this$static.up, ($clinit_TouchEndEvent() , $clinit_TouchEndEvent() , TYPE_11));
  this$static.upMouseEventsListener.element.style['zIndex'] = '3005';
  $addDomHandler(this$static.upMouseEventsListener, new CanvasButtonUpDown$1_0(this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  this$static.downMouseEventsListener = new EventsHandlerDiv_0;
  $addDomHandler(this$static.downMouseEventsListener, this$static.down, TYPE_13);
  $addDomHandler(this$static.downMouseEventsListener, this$static.down, TYPE_11);
  this$static.downMouseEventsListener.element.style['zIndex'] = '3005';
  $addDomHandler(this$static.downMouseEventsListener, new CanvasButtonUpDown$2_0(this$static), TYPE_1);
  $add_2(panel, this$static.textPanel, 0, 0);
  $add_2(panel, this$static.upMouseEventsListener, 0, 0);
  $add_2(panel, this$static.downMouseEventsListener, 0, 0);
  $setCurrentButtonParams(this$static);
  $setEnabled_2(this$static.up, true);
  $setEnabled_2(this$static.down, true);
  this$static.currentButtonValue = 10;
  $updateClickAreaStates(this$static, this$static.isEnabled, panel);
  $setText_1(this$static, this$static.currentButtonValue + '');
}

function $updateClickAreaStates(this$static, isEnabled, panel){
  $setEnabled_2(this$static.up, isEnabled && this$static.currentButtonValue < 299);
  $setEnabled_2(this$static.down, isEnabled && this$static.currentButtonValue > 1);
  $updateButtonStyle(this$static, isEnabled, panel);
}

function AutoPlayButton_0(){
  this.up = new CanvasButton_0;
  this.down = new CanvasButton_0;
}

function AutoPlayButton(){
}

_ = AutoPlayButton_0.prototype = AutoPlayButton.prototype = new CanvasButtonUpDownStandard;
_.getClass$ = function getClass_361(){
  return Lwebgl_client_gamesFramework_autoplay_AutoPlayButton_2_classLit;
}
;
_.setCurrentValueInt = function setCurrentValueInt(newValue){
  this.currentButtonValue = newValue;
  $setText_1(this, this.currentButtonValue + '');
  $updateClickAreaStates(this, this.isEnabled, this.panel);
}
;
_.updateClickAreaStates = function updateClickAreaStates_0(isEnabled, panel){
  $updateClickAreaStates(this, isEnabled, panel);
}
;
_.currentButtonValue = 0;
function $decGamesActionHandler(this$static, newValue){
  this$static.currentAutoPlayGameCounter = newValue;
  $updateGamesCounter(this$static.view, this$static.currentAutoPlayGameCounter);
}

function $incGamesActionHandler(this$static, newValue){
  this$static.currentAutoPlayGameCounter = newValue;
  $updateGamesCounter(this$static.view, this$static.currentAutoPlayGameCounter);
}

function $initAutoPlayElements(this$static, animBanks, autoPlayLocations){
  $init_3(this$static.view, this$static, animBanks, autoPlayLocations);
}

function $pauseActionHandler(this$static){
  this$static.state = ($clinit_AutoPlayState() , PAUSED);
  $setAutoPlayStateChanged(this$static.view, this$static.state);
}

function $playActionHandler(this$static){
  if (this$static.state != ($clinit_AutoPlayState() , PLAYING)) {
    this$static.state = PLAYING;
    $setAutoPlayStateChanged(this$static.view, this$static.state);
    this$static.gameManager.autoPlayStartedHandler_0();
  }
}

_ = AutoPlayController.prototype;
_.initView = function initView(){
  $initAutoPlayElements(this, this.animBanks, this.autoPlayLocations);
}
;
_.setGamePanel = function setGamePanel(gamePanel){
  this.view.element.style['zIndex'] = '3700';
  $add_1(gamePanel, this.view);
}
;
function $getLocation(this$static, locationName){
  return dynamicCast(this$static.locations.get(locationName), Q$Point_0);
}

function $handleButtonValueChanged(this$static, newValue){
  this$static.curGamesAmount < newValue?$incGamesActionHandler(this$static.controller, newValue):$decGamesActionHandler(this$static.controller, newValue);
}

function $init_3(this$static, controller, animBanks, autoPlayLocations){
  var autoPlayCenterLocationX, autoPlayCenterLocationY, bgAnim, bgHeight, bgWidth, hidePos, autoPlayCenterLocationX_0, autoPlayCenterLocationY_0, bgAnim_0, bgHeight_0, bgWidth_0, shownPos, bgHeight_1, bgLocation, bgWidth_1, xLocation, yLocation, downButton, downLocation, upButton, upLocation;
  this$static.controller = controller;
  this$static.animBanks = animBanks;
  this$static.autoPlayLocations = autoPlayLocations;
  this$static.showHideAnimation = new ViewMoveAnimation_0(this$static);
  this$static.hidedPos = (hidePos = new Point_3 , bgAnim = new AnimationController_1(this$static.animBanks.autoplayBG) , bgWidth = $getSourceFrameWidth(bgAnim) , bgHeight = $getSourceFrameHeight(bgAnim) , autoPlayCenterLocationX = this$static.autoPlayBarLocation.x_0 - (bgWidth >> 1) , autoPlayCenterLocationY = this$static.autoPlayBarLocation.y_0 - (bgHeight >> 1) , hidePos.x_0 = autoPlayCenterLocationX + bgWidth , hidePos.y_0 = autoPlayCenterLocationY , hidePos);
  this$static.shownPos = (shownPos = new Point_3 , bgAnim_0 = new AnimationController_1(this$static.animBanks.autoplayBG) , bgWidth_0 = $getSourceFrameWidth(bgAnim_0) , bgHeight_0 = $getSourceFrameHeight(bgAnim_0) , autoPlayCenterLocationX_0 = this$static.autoPlayBarLocation.x_0 - (bgWidth_0 >> 1) , autoPlayCenterLocationY_0 = this$static.autoPlayBarLocation.y_0 - (bgHeight_0 >> 1) , shownPos.x_0 = autoPlayCenterLocationX_0 , shownPos.y_0 = autoPlayCenterLocationY_0 , shownPos);
  this$static.bgCanvas = createIfSupported();
  this$static.bgAnim = new AnimationController_1(this$static.animBanks.autoplayBG);
  $doAnim(this$static.bgAnim, 'stage1');
  bgWidth_1 = $getSourceFrameWidth(this$static.bgAnim);
  bgHeight_1 = $getSourceFrameHeight(this$static.bgAnim);
  $setCoordinateSpaceWidth(this$static.bgCanvas, bgWidth_1);
  $setCoordinateSpaceHeight(this$static.bgCanvas, bgHeight_1);
  $setWidth(this$static.bgCanvas, bgWidth_1 + 'px');
  $setHeight(this$static.bgCanvas, bgHeight_1 + 'px');
  setStyleAttribute(this$static.element, 'width', bgWidth_1 + 'px');
  setStyleAttribute(this$static.element, 'height', bgHeight_1 + 'px');
  bgLocation = $getLocation(this$static.autoPlayLocations, ($clinit_AutoPlayLocations$AutoPlayLocPos() , BACKGROUND));
  xLocation = bgLocation.x_0 - (bgWidth_1 >> 1);
  yLocation = bgLocation.y_0 - (bgHeight_1 >> 1);
  $add_2(this$static, this$static.bgCanvas, xLocation, yLocation);
  $paint_0(this$static.bgAnim, this$static.bgCanvas.element.getContext('2d'));
  this$static.btnPlay = createSingleButton(($clinit_AutoPlayView$AutoPlayButtonEnum() , PLAY_BUTTON), get_9('INGAME.PLAY'), new AutoPlayView$1_0(this$static), this$static.animBanks.autoplayButton, $getLocation(this$static.autoPlayLocations, SPIN_BUTTON), this$static);
  this$static.btnPause = createSingleButton(PAUSE_BUTTON, get_9('INGAME.PAUSE'), new AutoPlayView$2_0(this$static), this$static.animBanks.autoplayPauseButton, $getLocation(this$static.autoPlayLocations, SPIN_BUTTON), this$static);
  this$static.btnClose = createSingleButton(CLOSE_BUTTON_0, null, new AutoPlayView$3_0(this$static), this$static.animBanks.autoplayClose, $getLocation(this$static.autoPlayLocations, CLOSE_BUTTON), this$static);
  upLocation = $getLocation(this$static.autoPlayLocations, UP_BUTTON);
  downLocation = $getLocation(this$static.autoPlayLocations, DOWN_BUTTON);
  this$static.gamesNum = new AutoPlayButton_0;
  $setZIndex(this$static.gamesNum);
  upButton = new AnimationController_0(this$static.animBanks.autoplayUp, 'enabled');
  downButton = new AnimationController_0(this$static.animBanks.autoplayDown, 'enabled');
  $init_2(this$static.gamesNum, upLocation, upButton, downLocation, downButton, this$static, this$static);
  $show_0(this$static, false);
}

_ = AutoPlayView.prototype;
_.setAutoPlayBarLocation = function setAutoPlayBarLocation(location_0){
  this.autoPlayBarLocation = location_0;
}
;
function AutoPlayView$1_0(this$0){
  this.this$0 = this$0;
}

function AutoPlayView$1(){
}

_ = AutoPlayView$1_0.prototype = AutoPlayView$1.prototype = new Object_0;
_.getClass$ = function getClass_367(){
  return Lwebgl_client_gamesFramework_autoplay_AutoPlayView$1_2_classLit;
}
;
_.onClick = function onClick_0(event_0){
  $playActionHandler(this.this$0.controller);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function AutoPlayView$2_0(this$0){
  this.this$0 = this$0;
}

function AutoPlayView$2(){
}

_ = AutoPlayView$2_0.prototype = AutoPlayView$2.prototype = new Object_0;
_.getClass$ = function getClass_368(){
  return Lwebgl_client_gamesFramework_autoplay_AutoPlayView$2_2_classLit;
}
;
_.onClick = function onClick_1(event_0){
  $pauseActionHandler(this.this$0.controller);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function AutoPlayView$3_0(this$0){
  this.this$0 = this$0;
}

function AutoPlayView$3(){
}

_ = AutoPlayView$3_0.prototype = AutoPlayView$3.prototype = new Object_0;
_.getClass$ = function getClass_369(){
  return Lwebgl_client_gamesFramework_autoplay_AutoPlayView$3_2_classLit;
}
;
_.onClick = function onClick_2(event_0){
  $triggerOpenCloseAutoplay(this.this$0.controller);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function $clinit_AutoPlayView$AutoPlayButtonEnum(){
  $clinit_AutoPlayView$AutoPlayButtonEnum = nullMethod;
  PLAY_BUTTON = new AutoPlayView$AutoPlayButtonEnum_0('PLAY_BUTTON', 0, 'spin-button-text', 'spin-button-text-disabled');
  PAUSE_BUTTON = new AutoPlayView$AutoPlayButtonEnum_0('PAUSE_BUTTON', 1, 'spin-button-text', 'spin-button-text-disabled');
  CLOSE_BUTTON_0 = new AutoPlayView$AutoPlayButtonEnum_0('CLOSE_BUTTON', 2, null, null);
  AUTO_PLAY_BUTTON = new AutoPlayView$AutoPlayButtonEnum_0('AUTO_PLAY_BUTTON', 3, 'auto-play-style', 'auto-play-style-disabled');
  $VALUES_16 = initValues(_3Lwebgl_client_gamesFramework_autoplay_AutoPlayView$AutoPlayButtonEnum_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$Comparable_$1, Q$Object_$1]), Q$AutoPlayView$AutoPlayButtonEnum, [PLAY_BUTTON, PAUSE_BUTTON, CLOSE_BUTTON_0, AUTO_PLAY_BUTTON]);
}

function AutoPlayView$AutoPlayButtonEnum_0(enum$name, enum$ordinal, activeStyle, disabledStyle){
  Enum_0.call(this, enum$name, enum$ordinal);
  this.activeStyle = activeStyle;
  this.disabledStyle = disabledStyle;
}

function values_17(){
  $clinit_AutoPlayView$AutoPlayButtonEnum();
  return $VALUES_16;
}

function AutoPlayView$AutoPlayButtonEnum(){
}

_ = AutoPlayView$AutoPlayButtonEnum_0.prototype = AutoPlayView$AutoPlayButtonEnum.prototype = new Enum;
_.getClass$ = function getClass_370(){
  return Lwebgl_client_gamesFramework_autoplay_AutoPlayView$AutoPlayButtonEnum_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Comparable, Q$Enum, Q$AutoPlayView$AutoPlayButtonEnum]);
_.activeStyle = null;
_.disabledStyle = null;
var $VALUES_16, AUTO_PLAY_BUTTON, CLOSE_BUTTON_0, PAUSE_BUTTON, PLAY_BUTTON;
function $activate(this$static){
  this$static.eventName = 'QoDEvent';
  this$static.isActiveInGame = true;
}

function $trackBonusEnd(this$static, bonusType){
  var seconds;
  if (!this$static.isActiveInGame) {
    return;
  }
  seconds = ~~(toInt(sub(fromDouble(currentTimeMillis0()), this$static.bonusStrartTimeStamp)) / 1000);
  $trackEvent_0(this$static, 'InGameInteraction', bonusType, seconds);
}

function $trackBonusInfoClose(this$static, action){
  var seconds;
  if (!this$static.isActiveInGame) {
    return;
  }
  seconds = ~~(toInt(sub(fromDouble(currentTimeMillis0()), this$static.bonusInfoStrartTimeStamp)) / 1000);
  $trackEvent_0(this$static, 'InfoScreen', action, seconds);
}

function $trackBonusInfoOpen(this$static){
  if (!this$static.isActiveInGame) {
    return;
  }
  this$static.bonusInfoStrartTimeStamp = fromDouble(currentTimeMillis0());
}

function $trackBonusStart(this$static){
  if (!this$static.isActiveInGame) {
    return;
  }
  this$static.bonusStrartTimeStamp = fromDouble(currentTimeMillis0());
}

function $trackRoundEnd(this$static){
  var seconds;
  if (!this$static.isActiveInGame) {
    return;
  }
  seconds = ~~(toInt(sub(fromDouble(currentTimeMillis0()), this$static.roundStrartTimeStamp)) / 1000);
  $trackEvent_0(this$static, 'InGameInteraction', 'GamePlay', seconds);
}

function $trackRoundPlayed(this$static){
  if (!this$static.isActiveInGame) {
    return;
  }
  ++this$static.numGamesPlayed;
}

function $trackRoundStart(this$static){
  if (!this$static.isActiveInGame) {
    return;
  }
  this$static.roundStrartTimeStamp = fromDouble(currentTimeMillis0());
}

function $trackSelectEvent(this$static, isSelect){
  var label;
  if (!this$static.isActiveInGame) {
    return;
  }
  label = isSelect?0:1;
  $trackEvent_1(this$static, this$static.eventName, 'InGameInteraction', 'DoNotShowToggle', label, this$static.platform, this$static.playerHasDeposit, this$static.playerId);
}

function $trackSplashScreenOpen(this$static){
  if (!this$static.isActiveInGame) {
    return;
  }
  this$static.splashStrartTimeStamp = fromDouble(currentTimeMillis0());
}

function $trackSplashScrenClose(this$static){
  var seconds;
  if (!this$static.isActiveInGame) {
    return;
  }
  seconds = ~~(toInt(sub(fromDouble(currentTimeMillis0()), this$static.splashStrartTimeStamp)) / 1000);
  $trackEvent_0(this$static, 'SplashScreen', 'Continue', seconds);
}

function $getDestX(this$static, x, frame){
  var j, newOffset, smallest;
  if (frame >= 0 && frame < this$static.numberOfFrames) {
    return x + this$static.leftOffset[frame];
  }
   else if (frame < this$static.numberOfFrames + this$static.numberCompositeFrames) {
    frame -= this$static.numberOfFrames;
    smallest = $getNonCompositeDestX(this$static, x, this$static.compositeFrames[frame][0]);
    for (j = 1; j < this$static.compositeFrames[frame].length; ++j) {
      newOffset = $getNonCompositeDestX(this$static, x, this$static.compositeFrames[frame][j]);
      smallest > newOffset && (smallest = newOffset);
    }
    return smallest;
  }
  return 0;
}

function $getDestY(this$static, y, frame){
  var j, newOffset, smallest;
  if (frame >= 0 && frame < this$static.numberOfFrames) {
    return y + this$static.topOffset[frame];
  }
   else if (frame < this$static.numberOfFrames + this$static.numberCompositeFrames) {
    frame -= this$static.numberOfFrames;
    smallest = $getNonCompositeDestY(this$static, y, this$static.compositeFrames[frame][0]);
    for (j = 1; j < this$static.compositeFrames[frame].length; ++j) {
      newOffset = $getNonCompositeDestY(this$static, y, this$static.compositeFrames[frame][j]);
      smallest > newOffset && (smallest = newOffset);
    }
    return smallest;
  }
  return 0;
}

function $getNonCompositeDestX(this$static, x, frame){
  return x + this$static.leftOffset[frame];
}

function $getNonCompositeDestY(this$static, y, frame){
  return y + this$static.topOffset[frame];
}

function $paint(this$static, graphics, frame, x, y){
  var j;
  if (frame >= 0 && frame < this$static.numberOfFrames) {
    $renderFrame(this$static, graphics, frame, x, y);
  }
   else if (frame < this$static.numberOfFrames + this$static.numberCompositeFrames) {
    frame -= this$static.numberOfFrames;
    for (j = 0; j < this$static.compositeFrames[frame].length; ++j) {
      $renderFrame(this$static, graphics, this$static.compositeFrames[frame][j], x, y);
    }
  }
}

function $paintImageBankFrame(g, image, srcX, srcY, width, height, destX, destY){
  !!image.image && $drawImage_0(g, image.image, srcX, srcY, width, height, destX, destY, width, height);
}

function $renderFrame(this$static, graphics, frame, x, y){
  var destHeight, destWidth, destX, destY, srcX, srcY;
  if (frame < 0) {
    return;
  }
  srcX = this$static.packedPosX[frame];
  srcY = this$static.packedPosY[frame];
  destWidth = this$static.subImageWidth[frame];
  destHeight = this$static.subImageHeight[frame];
  destX = $getDestX(this$static, x, frame);
  destY = $getDestY(this$static, y, frame);
  $paintImageBankFrame(graphics, this$static.image, srcX, srcY, destWidth, destHeight, destX, destY);
}

function $findAnim(this$static, name_0){
  var anim, iAnim, numAnims;
  if (this$static.animArray != null) {
    numAnims = this$static.animArray.length;
    for (iAnim = 0; iAnim < numAnims; ++iAnim) {
      anim = this$static.animArray[iAnim];
      if ($equals(anim.m_name, name_0)) {
        return iAnim;
      }
    }
  }
  return -1;
}

function $getAnim(this$static, animationIndex){
  if (this$static.animArray == null || animationIndex < 0) {
    return null;
  }
  return this$static.animArray[animationIndex];
}

function $doAnim(this$static, name_0){
  var newIndex;
  this$static.animName = name_0;
  if (!this$static.animBank) {
    this$static.dummyAnimTriggered = true;
    return false;
  }
  if (name_0 == null) {
    this$static.currentAnim = -3;
    return true;
  }
   else {
    newIndex = $findAnim(this$static.animBank, name_0);
    return $doAnim_0(this$static, newIndex);
  }
}

function $doAnim_0(this$static, handle){
  var anim;
  if (handle < 0) {
    return false;
  }
  if (handle != this$static.currentAnim) {
    this$static.currentAnim = handle;
    this$static.currentAnimFrame = -1;
    this$static.queuedAnim = -1;
    this$static.nextUpdateTime = N1_longLit;
    anim = $getCurrentAnim(this$static);
    !!anim && (this$static.inverseFrameRate = anim.m_inverseFrameRate);
  }
  return true;
}

function $getCurrentAnim(this$static){
  var current;
  if (!this$static.animBank) {
    return null;
  }
  if (this$static.currentAnim < 0) {
    return null;
  }
  current = $getAnim(this$static.animBank, this$static.currentAnim);
  return current;
}

function $getSourceFrameHeight(this$static){
  if (!this$static.animBank) {
    return 0;
  }
  return this$static.animBank.sourceFrameHeight;
}

function $getSourceFrameWidth(this$static){
  if (!this$static.animBank) {
    return 0;
  }
  return this$static.animBank.sourceFrameWidth;
}

function $paint_0(this$static, g){
  $paint_1(this$static, g, this$static.positionX, this$static.positionY);
}

function $paint_1(this$static, g, xpos, ypos){
  var indexIntoImageBank, animFrame, current;
  if (!this$static.animBank) {
    return;
  }
  if (this$static.currentAnim < 0) {
    return;
  }
  this$static.currentAnimFrame < 0 && (this$static.currentAnimFrame = 0);
  indexIntoImageBank = (animFrame = this$static.currentAnimFrame < 0?0:this$static.currentAnimFrame , current = $getCurrentAnim(this$static) , !current?-1:current.framesIndexArray[animFrame]);
  if (indexIntoImageBank < 0) {
    return;
  }
  $paint(this$static.animBank, g, indexIntoImageBank, xpos, ypos);
}

function $resetAnim(this$static){
  var anim;
  anim = $getCurrentAnim(this$static);
  !!anim && (this$static.inverseFrameRate = anim.m_inverseFrameRate);
  this$static.currentAnimFrame = -1;
  this$static.queuedAnim = -1;
  this$static.nextUpdateTime = N1_longLit;
}

function $setAnimationBank(this$static, bank){
  this$static.animBank = bank;
}

function $update_0(this$static, forceUpdate){
  var endOfAnimation, ended, gameTime, img, numFrames, playbackType;
  if (!this$static.animBank) {
    return false;
  }
  ended = false;
  if (this$static.currentAnim < 0) {
    return false;
  }
  img = $getAnim(this$static.animBank, this$static.currentAnim);
  playbackType = img.m_playbackType;
  numFrames = img.framesIndexArray.length;
  if (!forceUpdate) {
    if (playbackType == 4) {
      return false;
    }
    gameTime = fromDouble(currentTimeMillis0());
    if (lt(gameTime, this$static.nextUpdateTime) || this$static.inverseFrameRate < 1) {
      return false;
    }
    this$static.nextUpdateTime = add_1(gameTime, fromInt(this$static.inverseFrameRate));
  }
  this$static.reverse?--this$static.currentAnimFrame:++this$static.currentAnimFrame;
  endOfAnimation = this$static.currentAnimFrame >= numFrames;
  if (!this$static.reverse && endOfAnimation) {
    if (this$static.queuedAnim != -1) {
      this$static.currentAnim = this$static.queuedAnim;
      this$static.currentAnimFrame = 0;
      this$static.queuedAnim = -1;
    }
     else if (playbackType == 0) {
      this$static.currentAnim = this$static.idlingAnim;
      this$static.currentAnimFrame = 0;
      ended = true;
    }
     else if (playbackType == 1) {
      this$static.currentAnimFrame = 0;
    }
     else if (playbackType == 2) {
      --this$static.currentAnimFrame;
      ended = true;
    }
  }
   else 
    this$static.reverse && this$static.currentAnimFrame <= 0 && (this$static.currentAnimFrame = numFrames - 1);
  return ended;
}

function AnimationController_0(bank, startAnimName){
  this.reverse = false;
  this.animBank = bank;
  this.currentAnim = -9;
  this.currentAnimFrame = -1;
  this.idlingAnim = -4;
  this.queuedAnim = -1;
  this.positionX = 0;
  this.positionY = 0;
  this.nextUpdateTime = N1_longLit;
  $doAnim(this, startAnimName);
}

function AnimationController_1(bank){
  this.reverse = false;
  this.animBank = bank;
  this.currentAnim = -2;
  this.currentAnimFrame = -1;
  this.idlingAnim = -5;
  this.queuedAnim = -1;
  this.positionX = 0;
  this.positionY = 0;
  this.nextUpdateTime = N1_longLit;
}

function AnimationController(){
}

_ = AnimationController_1.prototype = AnimationController_0.prototype = AnimationController.prototype = new Object_0;
_.getClass$ = function getClass_429(){
  return Lwebgl_client_nf_animator_AnimationController_2_classLit;
}
;
_.animBank = null;
_.animName = null;
_.currentAnim = 0;
_.currentAnimFrame = 0;
_.dummyAnimTriggered = false;
_.idlingAnim = 0;
_.inverseFrameRate = 0;
_.nextUpdateTime = P0_longLit;
_.positionX = 0;
_.positionY = 0;
_.queuedAnim = 0;
_.reverse = false;
function $drawImage_1(this$static, g, dstX, dstY){
  !!this$static.image && $drawImage(g, this$static.image, dstX, dstY);
}

function $drawImage_2(this$static, g){
  this$static.imageLocation?$drawImage_1(this$static, g, this$static.imageLocation.x_0, this$static.imageLocation.y_0):!!this$static.image && $drawImage(g, this$static.image, 0, 0);
}

function $setLocation(this$static, location_0){
  this$static.imageLocation = location_0;
  $setX(location_0, location_0.x_0 - (this$static.image.width >> 1));
  $setY(location_0, location_0.y_0 - (this$static.image.height >> 1));
}

function $sendResumeGameCommamd(this$static, listener){
  var rgrCommand, pData;
  rgrCommand = new RGRCommand_0(new NewApplication$10_0(this$static, listener));
  pData = new StringBuffer_0;
  $appendAttribute(pData, 'CM', 'RGR', true);
  $appendAttribute(pData, 'GID', '' + currentGameId_0, true);
  pData.impl.string += 'UN';
  pData.impl.string += '=';
  $append_5(pData, dynamicCast($get_3(($clinit_PlayerDO() , playerInfo), paramsTag[1]), Q$String));
  pData.impl.string += '-';
  $append_4(pData, $get_3(playerInfo, 'USERNAME'));
  pData.impl.string += '&';
  $appendAttribute(pData, 'CSI', casinoId + '', true);
  $appendAttribute(pData, 'LNG', dynamicCast($getPlayerInfo(paramsTag[6]), Q$String), true);
  $appendAttribute(pData, 'IUA', iua, false);
  $addAPPVAndAPIVersion(pData);
  rgrCommand.url = SapiServerSapiPage + '?' + pData.impl.string;
  $sendRequest_0(rgrCommand, rgrCommand.url);
}

function $handleSapiFinished_4(this$static, responseDO){
  var $e0, e;
  try {
    $resumeCommandFinished(this$static.val$listener, responseDO);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Throwable)) {
      e = $e0;
      $clinit_NewApplication();
      error_0('There was an uncaught exception', 120006, e);
    }
     else 
      throw $e0;
  }
}

function NewApplication$10_0(this$0, val$listener){
  this.this$0 = this$0;
  this.val$listener = val$listener;
}

function NewApplication$10(){
}

_ = NewApplication$10_0.prototype = NewApplication$10.prototype = new Object_0;
_.getClass$ = function getClass_434(){
  return Lwebgl_client_nf_application_NewApplication$10_2_classLit;
}
;
_.handleSapiError = function handleSapiError_4(sapiErrorDO){
  $raiseSapiError(this.this$0, sapiErrorDO, null);
}
;
_.handleSapiFinished = function handleSapiFinished_4(responseDO){
  $handleSapiFinished_4(this, dynamicCast(responseDO, Q$GameResumeDO));
}
;
_.this$0 = null;
_.val$listener = null;
function $getResultData_5(response){
  var balanceResultElement, child, customElement, customList, doc, e, elementName, i, list, playerElement, playerElementName, playerList, resumeResult, rootElement;
  resumeResult = new GameResumeDO_0;
  doc = ($clinit_XMLParser() , $parse_1(impl_3, response));
  rootElement = dynamicCast(build(getDocumentElement(doc.jsObject)), Q$Element);
  balanceResultElement = $equals(getNodeName(rootElement.jsObject), 'S2C')?rootElement:getElementChildByName(rootElement, 'S2C');
  list = new NodeListImpl_0(getChildNodes(balanceResultElement.jsObject));
  for (child = 0; child < getLength(list.jsObject); ++child) {
    if (instanceOf(build(item_0(list.jsObject, child)), Q$Element)) {
      e = dynamicCast(build(item_0(list.jsObject, child)), Q$Element);
      elementName = getNodeName(e.jsObject);
      if ($equals(elementName, 'CARD')) {
        playerList = new NodeListImpl_0(getChildNodes(e.jsObject));
        for (i = 0; i < getLength(playerList.jsObject); ++i) {
          if (!!build(item_0(playerList.jsObject, i)) && instanceOf(build(item_0(playerList.jsObject, i)), Q$Element)) {
            playerElement = dynamicCast(build(item_0(playerList.jsObject, i)), Q$Element);
            playerElementName = getNodeName(playerElement.jsObject);
            $equals(playerElementName, 'SNO')?getElementText(playerElement).impl.string:$equals(playerElementName, 'ISNO')?getElementText(playerElement).impl.string:$equals(playerElementName, 'BTP')?getElementText(playerElement).impl.string:$equals(playerElementName, 'BTR')?getElementText(playerElement).impl.string:$equals(playerElementName, 'GAV') && getElementText(playerElement).impl.string;
          }
        }
      }
       else if ($equals(elementName, 'CustomInfo')) {
        customList = new NodeListImpl_0(getChildNodes(e.jsObject));
        for (i = 0; i < getLength(customList.jsObject); ++i) {
          if (!!build(item_0(customList.jsObject, i)) && instanceOf(build(item_0(customList.jsObject, i)), Q$Element)) {
            customElement = dynamicCast(build(item_0(customList.jsObject, i)), Q$Element);
            getElementText(customElement);
            break;
          }
        }
      }
    }
  }
  return resumeResult;
}

function RGRCommand_0(listener){
  this.listener = listener;
}

function RGRCommand(){
}

_ = RGRCommand_0.prototype = RGRCommand.prototype = new BilateralNetworkCommand;
_.getClass$ = function getClass_475(){
  return Lwebgl_client_nf_application_network_commands_RGRCommand_2_classLit;
}
;
_.getResultData = function getResultData_7(response){
  return $getResultData_5(response);
}
;
_.castableTypeMap$ = makeCastMap([Q$Command]);
function $setFontColor(this$static, fontColor){
  this$static.fontColor = fontColor;
}

function $setFontSize(this$static, fontSize){
  this$static.fontSize_0 = fontSize;
}

function $setFontWeight(this$static, fontWeight){
  this$static.fontWeight = fontWeight;
}

function $setHorizontalAlignment_2(this$static, horizontalAlignment){
  this$static.horizontalAlignment = horizontalAlignment;
}

function $toString_4(this$static){
  var builder;
  builder = new StringBuilder_0;
  $append_7(builder, this$static.fontWeight.getCssName());
  builder.impl.string += ' ';
  $append_6(builder, this$static.fontSize_0);
  builder.impl.string += 'px ';
  $append_7(builder, this$static.fontName);
  return builder.impl.string;
}

function FontDefinition_0(){
  this.fontSize_0 = 12;
  $setFontColor(this, ($clinit_Color() , BLACK));
  $setFontWeight(this, ($clinit_Style$FontWeight() , NORMAL));
  $setHorizontalAlignment_2(this, ($clinit_Context2d$TextAlign() , CENTER));
  this.fontName = 'arial, sans-serif';
}

function FontDefinition(){
}

_ = FontDefinition_0.prototype = FontDefinition.prototype = new Object_0;
_.getClass$ = function getClass_492(){
  return Lwebgl_client_nf_core_FontDefinition_2_classLit;
}
;
_.toString$ = function toString_37(){
  return $toString_4(this);
}
;
_.fontColor = null;
_.fontName = null;
_.fontSize_0 = 0;
_.fontWeight = null;
_.horizontalAlignment = null;
function $relativeTo(this$static, loc){
  var h_0, locH, locW, locX, locY, w, x, y;
  x = this$static.x_0;
  y = this$static.y_0;
  w = this$static.width_0;
  h_0 = this$static.height_0;
  locX = loc.x_0;
  locY = loc.y_0;
  locW = loc.width_0;
  locH = loc.height_0;
  return new Location_1(x + locX - (locW >> 1), y + locY - (locH >> 1), w, h_0);
}

function Location_2(p){
  Location_1.call(this, !p?0:p.x_0, !p?0:p.y_0, 0, 0);
}

_ = Location_2.prototype = Location_0.prototype;
function $removeLastPanel(this$static){
  var panel;
  if (this$static.panels.size_0 > 1) {
    panel = $getTopPanel(this$static);
    $getWidgetIndex(this$static.basePanel, panel) != -1 && $remove_4(this$static.basePanel, panel);
    $remove_10(this$static.panels, this$static.panels.size_0 - 1);
  }
}

function AbstractQueenOfDiamondsCardConfiguration(){
}

_ = AbstractQueenOfDiamondsCardConfiguration.prototype = new Object_0;
_.getClass$ = function getClass_496(){
  return Lwebgl_client_nf_games_g431_Card_AbstractQueenOfDiamondsCardConfiguration_2_classLit;
}
;
function $clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState(){
  $clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState = nullMethod;
  COVER = new AbstractQueenOfDiamondsCardConfiguration$CardsState_0('COVER', 0);
  HALF_COVERED = new AbstractQueenOfDiamondsCardConfiguration$CardsState_0('HALF_COVERED', 1);
  COVERED = new AbstractQueenOfDiamondsCardConfiguration$CardsState_0('COVERED', 2);
  OPENNING = new AbstractQueenOfDiamondsCardConfiguration$CardsState_0('OPENNING', 3);
  HALF_OPENED = new AbstractQueenOfDiamondsCardConfiguration$CardsState_0('HALF_OPENED', 4);
  OPENED = new AbstractQueenOfDiamondsCardConfiguration$CardsState_0('OPENED', 5);
  $VALUES_18 = initValues(_3Lwebgl_client_nf_games_g431_Card_AbstractQueenOfDiamondsCardConfiguration$CardsState_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$Comparable_$1, Q$Object_$1]), Q$AbstractQueenOfDiamondsCardConfiguration$CardsState, [COVER, HALF_COVERED, COVERED, OPENNING, HALF_OPENED, OPENED]);
}

function AbstractQueenOfDiamondsCardConfiguration$CardsState_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_19(){
  $clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState();
  return $VALUES_18;
}

function AbstractQueenOfDiamondsCardConfiguration$CardsState(){
}

_ = AbstractQueenOfDiamondsCardConfiguration$CardsState_0.prototype = AbstractQueenOfDiamondsCardConfiguration$CardsState.prototype = new Enum;
_.getClass$ = function getClass_497(){
  return Lwebgl_client_nf_games_g431_Card_AbstractQueenOfDiamondsCardConfiguration$CardsState_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Comparable, Q$Enum, Q$AbstractQueenOfDiamondsCardConfiguration$CardsState]);
var $VALUES_18, COVER, COVERED, HALF_COVERED, HALF_OPENED, OPENED, OPENNING;
function $setLocation_0(this$static, location_0){
  if (!location_0) {
    throw new IllegalArgumentException_0;
  }
  this$static.location_0 = location_0;
}

function AbstractGameItem(){
}

_ = AbstractGameItem.prototype = new Object_0;
_.getClass$ = function getClass_498(){
  return Lwebgl_client_nf_gamesFramework_gameItem_item_AbstractGameItem_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Renderable, Q$AbstractGameItem, Q$HasReset]);
_.isVisible = false;
_.itemID = 0;
_.location_0 = null;
function $handleClickEvent(this$static){
  this$static.animClickListener.handleGameItemClicked(this$static);
}

function $setAnimClickListener(this$static, listener){
  this$static.animClickListener = listener;
}

function $setAnimFinishedListener(this$static, listener){
  this$static.animFinishedListener = listener;
}

function $setIsClickable(this$static, isClickAble){
  this$static.isClickable = isClickAble;
  if (isClickAble) {
    !this$static.clickHandler && (this$static.clickHandler = new AbstractInteractiveGameItem$1_0(this$static));
    if (!this$static.touchableDiv) {
      this$static.touchableDiv = createNewEventsHandlerDiv();
      setMouseHoverListener_0(this$static.touchableDiv, this$static);
      $addDomHandler(this$static.touchableDiv, this$static.clickHandler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
      this$static.tooltipText != null && $setTooltip(this$static, this$static.tooltipText);
      $updateTouchableDivLocation(this$static);
    }
  }
  if (this$static.touchableDiv) {
    $setEnabled(this$static.touchableDiv, isClickAble);
    $setVisible(this$static.touchableDiv, isClickAble);
  }
}

function $setTooltip(this$static, tooltipText){
  this$static.tooltipText = tooltipText;
  !!this$static.touchableDiv && setTooltip(this$static.touchableDiv, tooltipText);
}

function $setTouchableDivPanel(this$static, gamePanel){
  this$static.touchableDivPanel = gamePanel;
  $updateTouchableDivLocation(this$static);
}

function $updateTouchableDivLocation(this$static){
  var centerX, centerY, divHeight, divWidth;
  if (this$static.touchableDivPanel) {
    if (this$static.isClickable) {
      if (!this$static.touchableDiv.attached) {
        divHeight = this$static.location_0.height_0;
        divWidth = this$static.location_0.width_0;
        centerX = this$static.location_0.x_0;
        centerY = this$static.location_0.y_0;
        if (this$static.touchableDivLocation) {
          divHeight = this$static.touchableDivLocation.height_0;
          divWidth = this$static.touchableDivLocation.width_0;
          centerX = this$static.touchableDivLocation.x_0;
          centerY = this$static.touchableDivLocation.y_0;
        }
        $setPixelSize(this$static.touchableDiv, divWidth, divHeight);
        this$static.touchableDiv.element.style['zIndex'] = '65';
        $add_2(this$static.touchableDivPanel, this$static.touchableDiv, centerX - (divWidth >> 1), centerY - (divHeight >> 1));
      }
    }
     else {
      !!this$static.touchableDiv && this$static.touchableDiv.attached && $remove_4(this$static.touchableDivPanel, this$static.touchableDiv);
    }
  }
}

function AbstractInteractiveGameItem(){
}

_ = AbstractInteractiveGameItem.prototype = new AbstractGameItem;
_.getClass$ = function getClass_499(){
  return Lwebgl_client_nf_gamesFramework_gameItem_item_AbstractInteractiveGameItem_2_classLit;
}
;
_.handleMouseHoverIn = function handleMouseHoverIn(){
}
;
_.handleMouseHoverOut = function handleMouseHoverOut(){
}
;
_.onMouseHoverIn = function onMouseHoverIn(widget){
  this.handleMouseHoverIn();
}
;
_.onMouseHoverOut = function onMouseHoverOut(widget){
  this.handleMouseHoverOut();
}
;
_.castableTypeMap$ = makeCastMap([Q$Renderable, Q$AbstractGameItem, Q$AbstractInteractiveGameItem, Q$HasReset, Q$IHoverDiv, Q$IMouseHoverListener]);
_.animClickListener = null;
_.animFinishedListener = null;
_.clickHandler = null;
_.isClickable = false;
_.tooltipText = null;
_.touchableDiv = null;
_.touchableDivLocation = null;
_.touchableDivPanel = null;
function $cover(this$static){
  if (this$static.cardState == ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , OPENED)) {
    $setCardState(this$static, COVER);
    if (this$static.isQueen) {
      $triggerItemAction(this$static.queenFlipAnimation, this$static.configuration.getFullFlipBackAnimStage());
      this$static.queenFlipAnimation.isVisible = true;
      $triggerItemAction(this$static.queenWinAnimation, 'idle');
      this$static.queenWinAnimation.isVisible = false;
      this$static.prize_0.isVisible = false;
    }
     else if (this$static.isJoker) {
      $triggerItemAction(this$static.jokerFlipAnimation, this$static.configuration.getFullFlipBackAnimStage());
    }
     else {
      this$static.hideValue();
      this$static.prize_0.isVisible = false;
    }
  }
}

function $handleGameItemFinished(this$static, finishedAnimItem){
  var animItem;
  switch (this$static.cardState.ordinal) {
    case 3:
      if (this$static.isJoker) {
        $setCardState(this$static, ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , OPENED));
        this$static.animFinishedListener.handleGameItemFinished(this$static);
      }
       else {
        $setCardState(this$static, ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , HALF_OPENED));
        this$static.isQueen || (this$static.cardsAnimation.isVisible = true , $triggerItemAction(this$static.cardsAnimation, this$static.configuration.getCardStage(this$static.cardId)));
        this$static.isQueen?$triggerItemAction(this$static.queenFlipAnimation, this$static.configuration.getFlipAnimStagePart2()):this$static.isGoldCard?$triggerItemAction(this$static.goldCardFlipAnimation, this$static.configuration.getFlipAnimStagePart2()):$triggerItemAction(this$static.flipAnimation, this$static.configuration.getFlipAnimStagePart2());
        this$static.configuration.shouldShowPrizeOnSecondStage() && $showPrize(this$static, this$static.configuration.getcCardFlipDelay());
      }

      break;
    case 4:
      $setCardState(this$static, ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , OPENED));
      if (this$static.configuration.shouldShowPrizeOnSecondStage()) {
        this$static.animFinishedListener.handleGameItemFinished(this$static);
      }
       else {
        $showPrize(this$static);
        this$static.isQueen?$triggerItemAction(this$static.queenFlipAnimation, this$static.configuration.getFlipAnimStagePart3()):this$static.isGoldCard?$triggerItemAction(this$static.goldCardFlipAnimation, this$static.configuration.getFlipAnimStagePart3()):$triggerItemAction(this$static.flipAnimation, this$static.configuration.getFlipAnimStagePart3());
      }

      break;
    case 0:
      if (this$static.isQueen || this$static.isJoker) {
        this$static.reset_0();
        this$static.animFinishedListener.handleGameItemFinished(this$static);
      }
       else {
        this$static.completeCover();
      }

      break;
    case 1:
      this$static.reset_0();
      this$static.animFinishedListener.handleGameItemFinished(this$static);
      break;
    case 2:
      if (this$static.isSelected) {
        this$static.flipAnimation.isVisible = true;
        this$static.unselectedCardMask.isVisible = false;
      }
       else {
        this$static.flipAnimation.isVisible = false;
      }

      break;
    case 5:
      if (this$static.isQueen) {
        animItem = dynamicCast(finishedAnimItem, Q$AnimGameItem);
        if ($equals(animItem.animation.animName, this$static.configuration.getQueenWinStage())) {
          $triggerItemAction(this$static.queenWinAnimation, this$static.configuration.getQueenWinFrameStage());
          this$static.animFinishedListener.handleGameItemFinished(this$static);
        }
      }

      !this$static.configuration.shouldShowPrizeOnSecondStage() && finishedAnimItem != this$static.winFrameAnimation && !this$static.isJoker && this$static.animFinishedListener.handleGameItemFinished(this$static);
      if (this$static.listener) {
        animItem = dynamicCast(finishedAnimItem, Q$AnimGameItem);
        $equals(animItem.animation.animName, this$static.configuration.getWinStage()) && (this$static.isJoker?this$static.listener.onPreBonusJokerAnimationFinished():this$static.isGoldCard?this$static.listener.onPreBonusGoldCardsAnimationFinished():this$static.animFinishedListener.handleGameItemFinished(finishedAnimItem));
      }

  }
  this$static.winFrameAnimation == finishedAnimItem && (this$static.winFrameAnimation.isVisible = false , undefined);
}

function $reset_0(this$static){
  this$static.isQueen = false;
  this$static.isQueenWinAnimPlayed = false;
  this$static.isJoker = false;
  this$static.isGoldCard = false;
  this$static.cardType = ($clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes() , R);
  this$static.cardSubType = ($clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes() , NONE_1);
  $triggerItemAction(this$static.flipAnimation, 'idle');
  $triggerItemAction(this$static.goldCardFlipAnimation, 'idle');
  $triggerItemAction(this$static.queenFlipAnimation, 'idle');
  $triggerItemAction(this$static.queenWinAnimation, 'idle');
  $triggerItemAction(this$static.jokerFlipAnimation, 'idle');
  $triggerItemAction(this$static.winFrameAnimation, 'idle');
  this$static.cardsAnimation.isVisible = false;
  $triggerItemAction(this$static.cardsAnimation, 'idle');
  this$static.flipAnimation.isVisible = true;
  this$static.goldCardFlipAnimation.isVisible = false;
  this$static.queenFlipAnimation.isVisible = false;
  this$static.queenWinAnimation.isVisible = false;
  this$static.jokerFlipAnimation.isVisible = false;
  this$static.winFrameAnimation.isVisible = false;
  this$static.prize_0.text_0 = '';
  $setFontDefinition(this$static.prize_0, this$static.prizeFontDefinition);
  $setCardState(this$static, ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , COVERED));
  if (!this$static.isSelected && this$static.flipAnimation.isVisible) {
    this$static.flipAnimation.isVisible = false;
    this$static.unselectedCardMask.isVisible = true;
    $triggerItemAction(this$static.unselectedCardMask, this$static.configuration.getUnselectedAnimStageName());
  }
}

function $setCardId(this$static, cardId){
  this$static.cardId = cardId;
}

function $setCardState(this$static, cardState){
  this$static.cardState = cardState;
}

function $setData(this$static, symbolDO){
  var pennisValue;
  this$static.reset_0();
  $setCardId(this$static, '' + symbolDO.symbolID);
  this$static.cardType = valueOf_5(symbolDO.symbolType);
  isEmpty_4(symbolDO.symbolSubType) || (this$static.cardSubType = valueOf_4(symbolDO.symbolSubType));
  pennisValue = dollarstopennies('' + symbolDO.finalPrize);
  this$static.prizeAmount = appendCurrencySymbol(penniesToDollars(pennisValue));
  if (this$static.cardType == ($clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes() , S)) {
    this$static.isQueen = true;
    this$static.isJoker = false;
    this$static.isGoldCard = false;
  }
   else if (this$static.cardType == B1) {
    this$static.isJoker = true;
    this$static.isQueen = false;
    this$static.isGoldCard = false;
  }
   else {
    if (this$static.cardSubType == ($clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes() , B2)) {
      this$static.isGoldCard = true;
      this$static.isJoker = false;
      this$static.isQueen = false;
    }
     else {
      this$static.isGoldCard = false;
      this$static.isJoker = false;
      this$static.isQueen = false;
    }
  }
}

function $setIsSelected(this$static, isSelected, isInit){
  if (this$static.isSelected == isSelected)
    return;
  this$static.isSelected = isSelected;
  if (this$static.cardState == ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , COVERED)) {
    this$static.unselectedCardMask.isVisible = true;
    if (this$static.isSelected) {
      $triggerItemAction(this$static.unselectedCardMask, this$static.configuration.getSelectAnimStageName());
      this$static.configuration.playSelectSound();
    }
     else {
      this$static.flipAnimation.isVisible = false;
      this$static.configuration.playUnselectSound();
      isInit?$triggerItemAction(this$static.unselectedCardMask, this$static.configuration.getUnselectedAnimStageName()):$triggerItemAction(this$static.unselectedCardMask, this$static.configuration.getDeselectAnimStageName());
    }
  }
}

function $setLocation_1(this$static, gameLocations, cardPrefix){
  var cardHitAreaLocation, itemLocation, prizeLocation;
  itemLocation = this$static.configuration.getCardItemLocation(gameLocations, cardPrefix, this$static.itemID + 1);
  $setLocation_0(this$static, itemLocation);
  $setLocation_3(this$static.cardsAnimation, $relativeTo(this$static.configuration.getCardInnerLocation(gameLocations), itemLocation));
  $setLocation_3(this$static.flipAnimation, $relativeTo(this$static.configuration.getCardFlipLocation(gameLocations), itemLocation));
  $setLocation_3(this$static.goldCardFlipAnimation, $relativeTo(this$static.configuration.getGoldCardFlipLocation(gameLocations), itemLocation));
  $setLocation_3(this$static.queenFlipAnimation, $relativeTo(this$static.configuration.getQueenCardFlipLocation(gameLocations), itemLocation));
  $setLocation_3(this$static.queenWinAnimation, $relativeTo(this$static.configuration.getCardInnerLocation(gameLocations), itemLocation));
  $setLocation_3(this$static.jokerFlipAnimation, $relativeTo(this$static.configuration.getJokerCardFlipLocation(gameLocations), itemLocation));
  $setLocation_3(this$static.winFrameAnimation, $relativeTo(this$static.configuration.getWinFrameLocation(gameLocations), itemLocation));
  $setLocation_3(this$static.unselectedCardMask, $relativeTo(this$static.configuration.getUnselectedCardLocation(gameLocations), itemLocation));
  cardHitAreaLocation = this$static.configuration.getHitAreaCardLocation(gameLocations, cardPrefix, this$static.itemID + 1, itemLocation);
  prizeLocation = this$static.configuration.getPrizeLocation(gameLocations);
  this$static.touchableDivLocation = cardHitAreaLocation;
  this$static.prizeFontDefinition = new FontDefinition_0;
  $setFontColor(this$static.prizeFontDefinition, new Color_0(this$static.configuration.getTextColor()));
  $setFontSize(this$static.prizeFontDefinition, this$static.configuration.getTextSize());
  $setFontWeight(this$static.prizeFontDefinition, ($clinit_Style$FontWeight() , BOLD));
  this$static.prizeQueenFontDefinition = new FontDefinition_0;
  $setFontColor(this$static.prizeQueenFontDefinition, new Color_0(this$static.configuration.getQueenTextColor()));
  $setFontSize(this$static.prizeQueenFontDefinition, this$static.configuration.getTextSize());
  $setFontWeight(this$static.prizeQueenFontDefinition, BOLD);
  this$static.prizeLocation = $relativeTo(prizeLocation, itemLocation);
  this$static.prize_0 = new TextGameItem_0(this$static.prizeFontDefinition, this$static.prizeLocation.width_0);
  $setLocation_0(this$static.prize_0, $relativeTo(prizeLocation, itemLocation));
}

function $showGoldCardWinAnim(this$static){
  if (this$static.isGoldCard) {
    this$static.winFrameAnimation.isVisible = true;
    $triggerItemAction(this$static.winFrameAnimation, this$static.configuration.getWinStage());
  }
}

function $showJokerWinAnim(this$static){
  this$static.isJoker && $triggerItemAction(this$static.jokerFlipAnimation, this$static.configuration.getWinStage());
}

function $showPrize(this$static){
  this$static.isQueen?$setFontDefinition(this$static.prize_0, this$static.prizeQueenFontDefinition):$setFontDefinition(this$static.prize_0, this$static.prizeFontDefinition);
  this$static.prize_0.isVisible = true;
  $setText_3(this$static.prize_0, this$static.prizeAmount);
}

function $showQueenWinAnim(this$static){
  if (this$static.isQueen) {
    this$static.queenFlipAnimation.isVisible = false;
    this$static.queenWinAnimation.isVisible = true;
    $triggerItemAction(this$static.queenWinAnimation, this$static.configuration.getQueenWinStage());
    this$static.isQueenWinAnimPlayed = true;
  }
}

function QueenOfDiamondsCard_0(itemId, resources, configuration, listener){
  this.configuration = configuration;
  this.listener = listener;
  this.itemID = itemId;
  this.isVisible = true;
  this.isClickable = false;
  this.unselectedCardMask = new AnimGameItem_0(itemId, new AnimationController_0(dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , CARD_SELECT).path), Q$AnimationBank), this.configuration.getSelectAnimStageName()), false);
  this.unselectedCardMask.animFinishedListener = this;
  this.cardsAnimation = new AnimGameItem_0(itemId, new AnimationController_0(configuration.getCardContentAnimationBank(resources), 'idle'), false);
  this.flipAnimation = new AnimGameItem_0(itemId, new AnimationController_0(configuration.getCardFlipAnimationBank(resources), 'idle'), true);
  this.flipAnimation.animFinishedListener = this;
  this.goldCardFlipAnimation = new AnimGameItem_0(itemId, new AnimationController_0(configuration.getGoldCardFlipAnimationBank(resources), 'idle'), false);
  this.goldCardFlipAnimation.animFinishedListener = this;
  this.queenFlipAnimation = new AnimGameItem_0(itemId, new AnimationController_0(configuration.getQueenCardFlipAnimationBank(resources), 'idle'), false);
  this.queenFlipAnimation.animFinishedListener = this;
  this.queenWinAnimation = new AnimGameItem_0(itemId, new AnimationController_0(configuration.getQueenCardWinAnimationBank(resources), 'idle'), false);
  this.queenWinAnimation.animFinishedListener = this;
  this.jokerFlipAnimation = new AnimGameItem_0(itemId, new AnimationController_0(configuration.getJokerCardFlipAnimationBank(resources), 'idle'), false);
  this.jokerFlipAnimation.animFinishedListener = this;
  this.winFrameAnimation = new AnimGameItem_0(itemId, new AnimationController_0(configuration.getWinFrameAnimationBank(resources), 'idle'), false);
  this.winFrameAnimation.animFinishedListener = this;
  $setCardState(this, ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , COVERED));
  $setIsClickable(this, false);
  this.isSelected = true;
}

function QueenOfDiamondsCard(){
}

_ = QueenOfDiamondsCard_0.prototype = QueenOfDiamondsCard.prototype = new AbstractInteractiveGameItem;
_.completeCover = function completeCover(){
  $setCardState(this, ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , HALF_COVERED));
  this.cardsAnimation.isVisible = false;
  this.prize_0.text_0 = '';
  this.isGoldCard?$triggerItemAction(this.goldCardFlipAnimation, this.configuration.getFlipBackAnimStagePart2()):$triggerItemAction(this.flipAnimation, this.configuration.getFlipBackAnimStagePart2());
}
;
_.getClass$ = function getClass_500(){
  return Lwebgl_client_nf_games_g431_Card_QueenOfDiamondsCard_2_classLit;
}
;
_.handleGameItemFinished = function handleGameItemFinished(finishedAnimItem){
  $handleGameItemFinished(this, finishedAnimItem);
}
;
_.handleMouseHoverIn = function handleMouseHoverIn_0(){
  this.flipAnimation.animation.animName.indexOf('idle') == 0 && $triggerItemAction(this.flipAnimation, 'idle_hover');
}
;
_.handleMouseHoverOut = function handleMouseHoverOut_0(){
  this.flipAnimation.animation.animName.indexOf('idle') == 0 && $triggerItemAction(this.flipAnimation, 'idle');
}
;
_.hideValue = function hideValue(){
  $triggerItemAction(this.cardsAnimation, this.configuration.getCardFlipBackStage(this.cardId));
  this.isGoldCard?$triggerItemAction(this.goldCardFlipAnimation, this.configuration.getFlipBackAnimStagePart1()):$triggerItemAction(this.flipAnimation, this.configuration.getFlipBackAnimStagePart1());
}
;
_.preRender = function preRender(){
  $preRender_7(this.flipAnimation);
  $preRender_7(this.goldCardFlipAnimation);
  $preRender_7(this.cardsAnimation);
  $preRender_7(this.queenFlipAnimation);
  $preRender_7(this.queenWinAnimation);
  $preRender_7(this.jokerFlipAnimation);
  $preRender_7(this.winFrameAnimation);
  $preRender_7(this.unselectedCardMask);
}
;
_.render = function render(g){
  $render_9(this.flipAnimation, g);
  $render_9(this.goldCardFlipAnimation, g);
  $render_9(this.cardsAnimation, g);
  $render_9(this.queenFlipAnimation, g);
  $render_9(this.queenWinAnimation, g);
  $render_9(this.jokerFlipAnimation, g);
  $render_10(this.prize_0, g);
  $render_9(this.winFrameAnimation, g);
  $render_9(this.unselectedCardMask, g);
}
;
_.reset_0 = function reset_0(){
  $reset_0(this);
}
;
_.reveal = function reveal(){
  if (this.cardState == ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , COVERED)) {
    $setCardState(this, OPENNING);
    if (this.isQueen) {
      this.flipAnimation.isVisible = false;
      $triggerItemAction(this.queenFlipAnimation, this.configuration.getFlipAnimStagePart1());
      this.queenFlipAnimation.isVisible = true;
    }
     else if (this.isJoker) {
      this.flipAnimation.isVisible = false;
      $triggerItemAction(this.jokerFlipAnimation, this.configuration.getFullFlipAnimStage());
      this.jokerFlipAnimation.isVisible = true;
      !!this.listener && this.listener.jokerCardStartReveal();
    }
     else if (this.isGoldCard) {
      this.flipAnimation.isVisible = false;
      $triggerItemAction(this.goldCardFlipAnimation, this.configuration.getFlipAnimStagePart1());
      this.goldCardFlipAnimation.isVisible = true;
      this.listener.goldCardStartReveal();
    }
     else {
      $triggerItemAction(this.flipAnimation, this.configuration.getFlipAnimStagePart1());
    }
  }
}
;
_.setData = function setData(symbolDO){
  $setData(this, symbolDO);
}
;
_.setLocation = function setLocation(gameLocations, cardPrefix){
  $setLocation_1(this, gameLocations, cardPrefix);
}
;
_.castableTypeMap$ = makeCastMap([Q$QueenOfDiamondsCard, Q$Renderable, Q$AbstractGameItem, Q$AbstractInteractiveGameItem, Q$IGameItemFinishedListener, Q$HasReset, Q$IHoverDiv, Q$IMouseHoverListener]);
_.cardId = null;
_.cardState = null;
_.cardSubType = null;
_.cardType = null;
_.cardsAnimation = null;
_.configuration = null;
_.flipAnimation = null;
_.goldCardFlipAnimation = null;
_.isGoldCard = false;
_.isJoker = false;
_.isQueen = false;
_.isQueenWinAnimPlayed = false;
_.isSelected = false;
_.jokerFlipAnimation = null;
_.listener = null;
_.prize_0 = null;
_.prizeAmount = null;
_.prizeFontDefinition = null;
_.prizeLocation = null;
_.prizeQueenFontDefinition = null;
_.queenFlipAnimation = null;
_.queenWinAnimation = null;
_.unselectedCardMask = null;
_.winFrameAnimation = null;
function $bonusGameNonMandatoryResourcesLoadCompleteHandler(this$static, loadedResources){
  $setAnimationBank(this$static.startFallAnim.animation, $getStartFallAnimationBank((dynamicCast(this$static.configuration, Q$AbstractQueenOfDiamondsWarCardConfiguration) , loadedResources), this$static.cardSuffix));
  $setAnimationBank(this$static.finalFallAnim.animation, dynamicCast((dynamicCast(this$static.configuration, Q$AbstractQueenOfDiamondsWarCardConfiguration) , loadedResources).get(($clinit_QueenOfDiamondsResources() , WAR_BONUS_POOF).path), Q$AnimationBank));
}

function $preRender(this$static){
  $preRender_7(this$static.flipAnimation);
  $preRender_7(this$static.winFrameAnimation);
  $preRender_7(this$static.startFallAnim);
  $preRender_7(this$static.finalFallAnim);
  $preRender_7(this$static.cardsAnimation);
  $preRender_7(this$static.winGlowFrameAnim);
}

function $render(this$static, g){
  $render_9(this$static.flipAnimation, g);
  $render_9(this$static.winFrameAnimation, g);
  $render_9(this$static.startFallAnim, g);
  $render_9(this$static.finalFallAnim, g);
  $render_9(this$static.cardsAnimation, g);
  $render_9(this$static.winGlowFrameAnim, g);
}

function $reset_1(this$static){
  $reset_0(this$static);
  this$static.flipAnimation.isVisible = false;
  $triggerItemAction(this$static.startFallAnim, 'idle');
  $triggerItemAction(this$static.finalFallAnim, 'idle');
  this$static.startFallAnim.isVisible = false;
  this$static.finalFallAnim.isVisible = false;
  this$static.winFrameAnimation.isVisible = false;
  this$static.winGlowFrameAnim.isVisible = false;
  this$static.isWin = false;
}

function $reveal(this$static){
  $setCardState(this$static, ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , OPENNING));
  this$static.flipAnimation.isVisible = true;
  $triggerItemAction(this$static.flipAnimation, this$static.configuration.getFlipAnimStagePart1());
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'War_cards_reveal', 28);
}

function $setLocation_2(this$static, gameLocations, cardPrefix){
  var cardPoofLocation, cardPoofLocationRelative, innerCardLocation, innerCardLocationRelative, itemLocation, winFrameLocation, winFrameLocationRelative;
  $setLocation_1(this$static, gameLocations, cardPrefix);
  itemLocation = this$static.configuration.getCardItemLocation(gameLocations, cardPrefix, this$static.itemID + 1);
  innerCardLocation = $getCardInnerLocation((dynamicCast(this$static.configuration, Q$AbstractQueenOfDiamondsWarCardConfiguration) , gameLocations), this$static.cardSuffix);
  innerCardLocationRelative = $relativeTo(innerCardLocation, itemLocation);
  winFrameLocation = $getCardWinFrameLocation((dynamicCast(this$static.configuration, Q$AbstractQueenOfDiamondsWarCardConfiguration) , gameLocations), this$static.cardSuffix);
  winFrameLocationRelative = $relativeTo(winFrameLocation, itemLocation);
  cardPoofLocation = $getPoofLocation((dynamicCast(this$static.configuration, Q$AbstractQueenOfDiamondsWarCardConfiguration) , gameLocations), this$static.cardSuffix);
  cardPoofLocationRelative = $relativeTo(cardPoofLocation, itemLocation);
  $setLocation_3(this$static.flipAnimation, itemLocation);
  $setLocation_3(this$static.winFrameAnimation, itemLocation);
  $setLocation_3(this$static.winGlowFrameAnim, winFrameLocationRelative);
  $setLocation_3(this$static.cardsAnimation, innerCardLocationRelative);
  $setLocation_3(this$static.startFallAnim, itemLocation);
  $setLocation_3(this$static.finalFallAnim, cardPoofLocationRelative);
}

function $setWin(this$static, isWin){
  this$static.isWin = isWin;
}

function $showWinLoseAnimation(this$static){
  var stage;
  this$static.flipAnimation.isVisible = false;
  stage = this$static.isWin?this$static.configuration.getWinStage():(dynamicCast(this$static.configuration, Q$AbstractQueenOfDiamondsWarCardConfiguration) , 'loss');
  $triggerItemAction(this$static.winFrameAnimation, stage);
  this$static.winFrameAnimation.isVisible = true;
  if (this$static.isWin) {
    this$static.winGlowFrameAnim.isVisible = true;
    $triggerItemAction(this$static.winGlowFrameAnim, this$static.configuration.getWinGlowFrameStage());
  }
  this$static.isPlayerCard && (this$static.isWin?getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Win', 24):getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Losing', 25));
}

function QueenOfDiamondsWarCard_0(resources, configuration, isQueen, listener){
  var winSuffix;
  QueenOfDiamondsCard_0.call(this, 0, resources, configuration, listener);
  this.cardSuffix = isQueen?'_QUEEN':'_PLAYER';
  this.flipAnimation = new AnimGameItem_0(0, new AnimationController_0($getCardFlipAnimationBank(resources, this.cardSuffix), 'idle'), true);
  this.flipAnimation.animFinishedListener = this;
  this.startFallAnim = new AnimGameItem_0(0, new AnimationController_0($getStartFallAnimationBank(resources, this.cardSuffix), 'idle'), false);
  this.startFallAnim.animFinishedListener = this;
  this.finalFallAnim = new AnimGameItem_0(0, new AnimationController_0(dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , WAR_BONUS_POOF).path), Q$AnimationBank), 'idle'), false);
  this.finalFallAnim.animFinishedListener = this;
  this.winFrameAnimation = new AnimGameItem_0(0, new AnimationController_0($getWinLoseAnimationBank(resources, this.cardSuffix), 'idle'), false);
  this.winFrameAnimation.animFinishedListener = this;
  winSuffix = isQueen?'_QUEEN':'';
  this.winGlowFrameAnim = new AnimGameItem_0(0, new AnimationController_0(dynamicCast(resources.get(dynamicCast(valueOf(($clinit_QueenOfDiamondsResources$Map() , $MAP_0), 'WAR_BONUS_WIN_FRAME' + winSuffix), Q$QueenOfDiamondsResources).path), Q$AnimationBank), 'idle'), false);
}

function QueenOfDiamondsWarCard(){
}

_ = QueenOfDiamondsWarCard_0.prototype = QueenOfDiamondsWarCard.prototype = new QueenOfDiamondsCard;
_.completeCover = function completeCover_0(){
  $setCardState(this, ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , HALF_COVERED));
  this.cardsAnimation.isVisible = false;
  this.startFallAnim.isVisible = false;
  this.finalFallAnim.isVisible = true;
  $triggerItemAction(this.finalFallAnim, this.configuration.getFlipBackAnimStagePart2());
}
;
_.getClass$ = function getClass_501(){
  return Lwebgl_client_nf_games_g431_Card_QueenOfDiamondsWarCard_2_classLit;
}
;
_.handleGameItemFinished = function handleGameItemFinished_0(finishedAnimItem){
  $handleGameItemFinished(this, finishedAnimItem);
  this.winFrameAnimation == finishedAnimItem && (this.winFrameAnimation.isVisible = true , undefined);
  this.finalFallAnim == finishedAnimItem && (this.finalFallAnim.isVisible = false , undefined);
}
;
_.hideValue = function hideValue_0(){
  this.winFrameAnimation.isVisible = false;
  this.winGlowFrameAnim.isVisible = false;
  this.startFallAnim.isVisible = true;
  this.cardsAnimation.isVisible = false;
  this.flipAnimation.isVisible = false;
  this.isWin?$triggerItemAction(this.startFallAnim, (dynamicCast(this.configuration, Q$AbstractQueenOfDiamondsWarCardConfiguration) , 'winFall')):$triggerItemAction(this.startFallAnim, (dynamicCast(this.configuration, Q$AbstractQueenOfDiamondsWarCardConfiguration) , 'lossFall'));
}
;
_.preRender = function preRender_0(){
  $preRender(this);
}
;
_.render = function render_0(g){
  $render(this, g);
}
;
_.reset_0 = function reset_1(){
  $reset_1(this);
}
;
_.reveal = function reveal_0(){
  $reveal(this);
}
;
_.setData = function setData_0(symbolDO){
  $setData(this, symbolDO);
  $setWin(this, symbolDO.isWin);
}
;
_.setLocation = function setLocation_0(gameLocations, cardPrefix){
  $setLocation_2(this, gameLocations, cardPrefix);
}
;
_.castableTypeMap$ = makeCastMap([Q$QueenOfDiamondsCard, Q$QueenOfDiamondsWarCard, Q$Renderable, Q$AbstractGameItem, Q$AbstractInteractiveGameItem, Q$IGameItemFinishedListener, Q$HasReset, Q$IHoverDiv, Q$IMouseHoverListener]);
_.cardSuffix = null;
_.finalFallAnim = null;
_.isPlayerCard = false;
_.isWin = false;
_.startFallAnim = null;
_.winGlowFrameAnim = null;
function $createCardsMap(this$static){
  var i, indexsString;
  this$static.cardsStagesMap = new HashMap_0;
  for (i = 1; i <= 11; ++i) {
    indexsString = '' + i;
    this$static.cardsStagesMap.put('W' + indexsString, 'gem' + indexsString);
  }
  for (i = 1; i <= 20; ++i) {
    indexsString = '' + i;
    i <= 10?this$static.cardsStagesMap.put('L' + indexsString, 'clover' + indexsString):this$static.cardsStagesMap.put('L' + indexsString, 'club' + (i - 10));
  }
}

function QueenOfDiamondsJokerBonusCardConfigurationMobile_0(){
  $createCardsMap(this);
}

function QueenOfDiamondsJokerBonusCardConfigurationMobile(){
}

_ = QueenOfDiamondsJokerBonusCardConfigurationMobile_0.prototype = QueenOfDiamondsJokerBonusCardConfigurationMobile.prototype = new AbstractQueenOfDiamondsCardConfiguration;
_.getCardContentAnimationBank = function getCardContentAnimationBank(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , BONUSES_CARDS).path), Q$AnimationBank);
}
;
_.getCardFlipAnimationBank = function getCardFlipAnimationBank(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , JOKER_BONUS_CARD_FLIP).path), Q$AnimationBank);
}
;
_.getCardFlipBackStage = function getCardFlipBackStage(cardId){
  return dynamicCast(this.cardsStagesMap.get(cardId), Q$String) + 'Flipback';
}
;
_.getCardFlipLocation = function getCardFlipLocation(locations){
  return dynamicCast(locations.locationsMap.get('JOKER_BONUS_CARD_ANIMATION'), Q$Location);
}
;
_.getCardInnerLocation = function getCardInnerLocation(locations){
  return dynamicCast(locations.locationsMap.get('JOKER_BONUS_CARD'), Q$Location);
}
;
_.getCardItemLocation = function getCardItemLocation(locations, cardPrefix, numOfCard){
  return dynamicCast(locations.locationsMap.get(cardPrefix + numOfCard), Q$Location);
}
;
_.getCardStage = function getCardStage(cardId){
  return dynamicCast(this.cardsStagesMap.get(cardId), Q$String);
}
;
_.getClass$ = function getClass_502(){
  return Lwebgl_client_nf_games_g431_Card_jokerBonusCardConfig_QueenOfDiamondsJokerBonusCardConfigurationMobile_2_classLit;
}
;
_.getDeselectAnimStageName = function getDeselectAnimStageName(){
  return 'deselect';
}
;
_.getFlipAnimStagePart1 = function getFlipAnimStagePart1(){
  return 'flip1';
}
;
_.getFlipAnimStagePart2 = function getFlipAnimStagePart2(){
  return 'flip2';
}
;
_.getFlipAnimStagePart3 = function getFlipAnimStagePart3(){
  return 'flip3';
}
;
_.getFlipBackAnimStagePart1 = function getFlipBackAnimStagePart1(){
  return 'flipback1';
}
;
_.getFlipBackAnimStagePart2 = function getFlipBackAnimStagePart2(){
  return 'flipback2';
}
;
_.getFullFlipAnimStage = function getFullFlipAnimStage(){
  return 'flip';
}
;
_.getFullFlipBackAnimStage = function getFullFlipBackAnimStage(){
  return 'flipback';
}
;
_.getGoldCardFlipAnimationBank = function getGoldCardFlipAnimationBank(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , GOLD_CARD_FLIP).path), Q$AnimationBank);
}
;
_.getGoldCardFlipLocation = function getGoldCardFlipLocation(locations){
  return dynamicCast(locations.locationsMap.get('CARD_GOLD_CARD'), Q$Location);
}
;
_.getHitAreaCardLocation = function getHitAreaCardLocation(locations, cardPrefix, numOfCard, itemLocation){
  return $relativeTo(dynamicCast(locations.locationsMap.get('JOKER_BONUS_CARD_HIT_AREA'), Q$Location), itemLocation);
}
;
_.getJokerCardFlipAnimationBank = function getJokerCardFlipAnimationBank(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , JOKER_BONUS_CARD).path), Q$AnimationBank);
}
;
_.getJokerCardFlipLocation = function getJokerCardFlipLocation(locations){
  return dynamicCast(locations.locationsMap.get('JOKER_BONUS_CARD_JOKER_CARD'), Q$Location);
}
;
_.getPrizeLocation = function getPrizeLocation(locations){
  return dynamicCast(locations.locationsMap.get('CARD_PRIZE'), Q$Location);
}
;
_.getQueenCardFlipAnimationBank = function getQueenCardFlipAnimationBank(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , JOKER_BONUS_CARD_X).path), Q$AnimationBank);
}
;
_.getQueenCardFlipLocation = function getQueenCardFlipLocation(locations){
  return dynamicCast(locations.locationsMap.get('JOKER_BONUS_CARD'), Q$Location);
}
;
_.getQueenCardWinAnimationBank = function getQueenCardWinAnimationBank(resources){
  return null;
}
;
_.getQueenTextColor = function getQueenTextColor(){
  return '#c8ad81';
}
;
_.getQueenWinFrameStage = function getQueenWinFrameStage(){
  return 'Win01';
}
;
_.getQueenWinStage = function getQueenWinStage(){
  return 'Win';
}
;
_.getSelectAnimStageName = function getSelectAnimStageName(){
  return 'select';
}
;
_.getTextColor = function getTextColor(){
  return '#c8ad81';
}
;
_.getTextSize = function getTextSize(){
  return 20;
}
;
_.getUnselectedAnimStageName = function getUnselectedAnimStageName(){
  return 'unselected';
}
;
_.getUnselectedCardLocation = function getUnselectedCardLocation(locations){
  return dynamicCast(locations.locationsMap.get('CARD_DARK'), Q$Location);
}
;
_.getWinFrameAnimationBank = function getWinFrameAnimationBank(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , JOKER_BONUS_WIN_FRAME).path), Q$AnimationBank);
}
;
_.getWinFrameLocation = function getWinFrameLocation(locations){
  return dynamicCast(locations.locationsMap.get('JOKER_BONUS_CARD_WIN_FRAME'), Q$Location);
}
;
_.getWinGlowFrameStage = function getWinGlowFrameStage(){
  return 'win';
}
;
_.getWinStage = function getWinStage(){
  return 'win';
}
;
_.getcCardFlipDelay = function getcCardFlipDelay(){
  return 0;
}
;
_.playJokerFlipSound = function playJokerFlipSound(){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Joker_flip_win', 17);
}
;
_.playQueenFlipSound = function playQueenFlipSound(){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Flip_losing_card', 12);
}
;
_.playSelectSound = function playSelectSound(){
}
;
_.playUnselectSound = function playUnselectSound(){
}
;
_.shouldShowPrizeOnSecondStage = function shouldShowPrizeOnSecondStage(){
  return true;
}
;
_.cardsStagesMap = null;
function $createCardsMap_0(this$static){
  var i, indexsString;
  this$static.cardsStagesMap = new HashMap_0;
  for (i = 1; i <= 11; ++i) {
    indexsString = '' + i;
    this$static.cardsStagesMap.put('W' + indexsString, 'gem' + indexsString);
  }
  for (i = 1; i <= 20; ++i) {
    indexsString = '' + i;
    i <= 10?this$static.cardsStagesMap.put('L' + indexsString, 'clover' + indexsString):this$static.cardsStagesMap.put('L' + indexsString, 'club' + (i - 10));
  }
}

function QueenOfDiamondsJokerBonusCardConfigurationWeb_0(){
  $createCardsMap_0(this);
}

function QueenOfDiamondsJokerBonusCardConfigurationWeb(){
}

_ = QueenOfDiamondsJokerBonusCardConfigurationWeb_0.prototype = QueenOfDiamondsJokerBonusCardConfigurationWeb.prototype = new AbstractQueenOfDiamondsCardConfiguration;
_.getCardContentAnimationBank = function getCardContentAnimationBank_0(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , BONUSES_CARDS).path), Q$AnimationBank);
}
;
_.getCardFlipAnimationBank = function getCardFlipAnimationBank_0(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , JOKER_BONUS_CARD_FLIP).path), Q$AnimationBank);
}
;
_.getCardFlipBackStage = function getCardFlipBackStage_0(cardId){
  return dynamicCast(this.cardsStagesMap.get(cardId), Q$String) + 'Flipback';
}
;
_.getCardFlipLocation = function getCardFlipLocation_0(locations){
  return dynamicCast(locations.locationsMap.get('JOKER_BONUS_CARD_ANIMATION'), Q$Location);
}
;
_.getCardInnerLocation = function getCardInnerLocation_0(locations){
  return dynamicCast(locations.locationsMap.get('JOKER_BONUS_CARD'), Q$Location);
}
;
_.getCardItemLocation = function getCardItemLocation_0(locations, cardPrefix, numOfCard){
  return dynamicCast(locations.locationsMap.get(cardPrefix + numOfCard), Q$Location);
}
;
_.getCardStage = function getCardStage_0(cardId){
  return dynamicCast(this.cardsStagesMap.get(cardId), Q$String);
}
;
_.getClass$ = function getClass_503(){
  return Lwebgl_client_nf_games_g431_Card_jokerBonusCardConfig_QueenOfDiamondsJokerBonusCardConfigurationWeb_2_classLit;
}
;
_.getDeselectAnimStageName = function getDeselectAnimStageName_0(){
  return 'deselect';
}
;
_.getFlipAnimStagePart1 = function getFlipAnimStagePart1_0(){
  return 'flip1';
}
;
_.getFlipAnimStagePart2 = function getFlipAnimStagePart2_0(){
  return 'flip2';
}
;
_.getFlipAnimStagePart3 = function getFlipAnimStagePart3_0(){
  return 'flip3';
}
;
_.getFlipBackAnimStagePart1 = function getFlipBackAnimStagePart1_0(){
  return 'flipback1';
}
;
_.getFlipBackAnimStagePart2 = function getFlipBackAnimStagePart2_0(){
  return 'flipback2';
}
;
_.getFullFlipAnimStage = function getFullFlipAnimStage_0(){
  return 'flip';
}
;
_.getFullFlipBackAnimStage = function getFullFlipBackAnimStage_0(){
  return 'flipback';
}
;
_.getGoldCardFlipAnimationBank = function getGoldCardFlipAnimationBank_0(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , GOLD_CARD_FLIP).path), Q$AnimationBank);
}
;
_.getGoldCardFlipLocation = function getGoldCardFlipLocation_0(locations){
  return dynamicCast(locations.locationsMap.get('CARD_GOLD_CARD'), Q$Location);
}
;
_.getHitAreaCardLocation = function getHitAreaCardLocation_0(locations, cardPrefix, numOfCard, itemLocation){
  return $relativeTo(dynamicCast(locations.locationsMap.get('JOKER_BONUS_CARD_HIT_AREA'), Q$Location), itemLocation);
}
;
_.getJokerCardFlipAnimationBank = function getJokerCardFlipAnimationBank_0(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , JOKER_BONUS_CARD).path), Q$AnimationBank);
}
;
_.getJokerCardFlipLocation = function getJokerCardFlipLocation_0(locations){
  return dynamicCast(locations.locationsMap.get('JOKER_BONUS_CARD_JOKER_CARD'), Q$Location);
}
;
_.getPrizeLocation = function getPrizeLocation_0(locations){
  return dynamicCast(locations.locationsMap.get('CARD_PRIZE'), Q$Location);
}
;
_.getQueenCardFlipAnimationBank = function getQueenCardFlipAnimationBank_0(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , JOKER_BONUS_CARD_X).path), Q$AnimationBank);
}
;
_.getQueenCardFlipLocation = function getQueenCardFlipLocation_0(locations){
  return dynamicCast(locations.locationsMap.get('JOKER_BONUS_CARD'), Q$Location);
}
;
_.getQueenCardWinAnimationBank = function getQueenCardWinAnimationBank_0(resources){
  return null;
}
;
_.getQueenTextColor = function getQueenTextColor_0(){
  return '#c8ad81';
}
;
_.getQueenWinFrameStage = function getQueenWinFrameStage_0(){
  return 'Win01';
}
;
_.getQueenWinStage = function getQueenWinStage_0(){
  return 'Win';
}
;
_.getSelectAnimStageName = function getSelectAnimStageName_0(){
  return 'select';
}
;
_.getTextColor = function getTextColor_0(){
  return '#c8ad81';
}
;
_.getTextSize = function getTextSize_0(){
  return 20;
}
;
_.getUnselectedAnimStageName = function getUnselectedAnimStageName_0(){
  return 'unselected';
}
;
_.getUnselectedCardLocation = function getUnselectedCardLocation_0(locations){
  return dynamicCast(locations.locationsMap.get('CARD_DARK'), Q$Location);
}
;
_.getWinFrameAnimationBank = function getWinFrameAnimationBank_0(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , JOKER_BONUS_WIN_FRAME).path), Q$AnimationBank);
}
;
_.getWinFrameLocation = function getWinFrameLocation_0(locations){
  return dynamicCast(locations.locationsMap.get('JOKER_BONUS_CARD_WIN_FRAME'), Q$Location);
}
;
_.getWinGlowFrameStage = function getWinGlowFrameStage_0(){
  return 'win';
}
;
_.getWinStage = function getWinStage_0(){
  return 'win';
}
;
_.getcCardFlipDelay = function getcCardFlipDelay_0(){
  return 0.041666666666666664;
}
;
_.playJokerFlipSound = function playJokerFlipSound_0(){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Joker_flip_win', 17);
}
;
_.playQueenFlipSound = function playQueenFlipSound_0(){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Flip_losing_card', 12);
}
;
_.playSelectSound = function playSelectSound_0(){
}
;
_.playUnselectSound = function playUnselectSound_0(){
}
;
_.shouldShowPrizeOnSecondStage = function shouldShowPrizeOnSecondStage_0(){
  return false;
}
;
_.cardsStagesMap = null;
function $clinit_QueenOfDiamondsMainGameCardConfigurationMobile(){
  $clinit_QueenOfDiamondsMainGameCardConfigurationMobile = nullMethod;
  CARD_IDS = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$CharSequence_$1, Q$Comparable_$1, Q$Object_$1, Q$String_$1]), Q$String, ['clover1', 'clover2', 'clover3', 'clover4', 'clover5', 'clover6', 'clover7', 'clover8', 'clover9', 'clover10', 'diamond1', 'diamond2', 'diamond3', 'diamond4', 'diamond5', 'diamond6', 'diamond7', 'diamond8', 'diamond9', 'diamond10', 'heart1', 'heart2', 'heart3', 'heart4', 'heart5', 'heart6', 'heart7', 'heart8', 'heart9', 'heart10', 'club1', 'club2', 'club3', 'club4', 'club5', 'club6', 'club7', 'club8', 'club9', 'club10']);
}

function QueenOfDiamondsMainGameCardConfigurationMobile_0(){
  $clinit_QueenOfDiamondsMainGameCardConfigurationMobile();
}

function QueenOfDiamondsMainGameCardConfigurationMobile(){
}

_ = QueenOfDiamondsMainGameCardConfigurationMobile_0.prototype = QueenOfDiamondsMainGameCardConfigurationMobile.prototype = new AbstractQueenOfDiamondsCardConfiguration;
_.getCardContentAnimationBank = function getCardContentAnimationBank_1(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , CARDS).path), Q$AnimationBank);
}
;
_.getCardFlipAnimationBank = function getCardFlipAnimationBank_1(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , CARD_FLIP).path), Q$AnimationBank);
}
;
_.getCardFlipBackStage = function getCardFlipBackStage_1(cardId){
  return CARD_IDS[valueOf_0(__parseAndValidateInt(cardId)).value_0 - 1] + 'Flipback';
}
;
_.getCardFlipLocation = function getCardFlipLocation_1(locations){
  return dynamicCast(locations.locationsMap.get('CARD_CARD_ANIM'), Q$Location);
}
;
_.getCardInnerLocation = function getCardInnerLocation_1(locations){
  return dynamicCast(locations.locationsMap.get('CARD_CARD'), Q$Location);
}
;
_.getCardItemLocation = function getCardItemLocation_1(locations, cardPrefix, numOfCard){
  return dynamicCast(locations.locationsMap.get(cardPrefix + numOfCard), Q$Location);
}
;
_.getCardStage = function getCardStage_1(cardId){
  return CARD_IDS[valueOf_0(__parseAndValidateInt(cardId)).value_0 - 1];
}
;
_.getClass$ = function getClass_504(){
  return Lwebgl_client_nf_games_g431_Card_mainGameCardConfig_QueenOfDiamondsMainGameCardConfigurationMobile_2_classLit;
}
;
_.getDeselectAnimStageName = function getDeselectAnimStageName_1(){
  return 'deselect';
}
;
_.getFlipAnimStagePart1 = function getFlipAnimStagePart1_1(){
  return 'flip1';
}
;
_.getFlipAnimStagePart2 = function getFlipAnimStagePart2_1(){
  return 'flip2';
}
;
_.getFlipAnimStagePart3 = function getFlipAnimStagePart3_1(){
  return 'flip3';
}
;
_.getFlipBackAnimStagePart1 = function getFlipBackAnimStagePart1_1(){
  return 'flipback1';
}
;
_.getFlipBackAnimStagePart2 = function getFlipBackAnimStagePart2_1(){
  return 'flipback2';
}
;
_.getFullFlipAnimStage = function getFullFlipAnimStage_1(){
  return 'flip';
}
;
_.getFullFlipBackAnimStage = function getFullFlipBackAnimStage_1(){
  return 'flipback';
}
;
_.getGoldCardFlipAnimationBank = function getGoldCardFlipAnimationBank_1(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , GOLD_CARD_FLIP).path), Q$AnimationBank);
}
;
_.getGoldCardFlipLocation = function getGoldCardFlipLocation_1(locations){
  return dynamicCast(locations.locationsMap.get('CARD_GOLD_CARD'), Q$Location);
}
;
_.getHitAreaCardLocation = function getHitAreaCardLocation_1(locations, cardPrefix, numOfCard, itemLocation){
  return $relativeTo(dynamicCast(locations.locationsMap.get('CARD_HIT_AREA'), Q$Location), itemLocation);
}
;
_.getJokerCardFlipAnimationBank = function getJokerCardFlipAnimationBank_1(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , JOKER_CARD).path), Q$AnimationBank);
}
;
_.getJokerCardFlipLocation = function getJokerCardFlipLocation_1(locations){
  return dynamicCast(locations.locationsMap.get('CARD_JOKER_CARD'), Q$Location);
}
;
_.getPrizeLocation = function getPrizeLocation_1(locations){
  return dynamicCast(locations.locationsMap.get('CARD_PRIZE'), Q$Location);
}
;
_.getQueenCardFlipAnimationBank = function getQueenCardFlipAnimationBank_1(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , QUEEN_CARD).path), Q$AnimationBank);
}
;
_.getQueenCardFlipLocation = function getQueenCardFlipLocation_1(locations){
  return dynamicCast(locations.locationsMap.get('CARD_QUEEN_CARD'), Q$Location);
}
;
_.getQueenCardWinAnimationBank = function getQueenCardWinAnimationBank_1(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , QUEEN_CARD_WIN).path), Q$AnimationBank);
}
;
_.getQueenTextColor = function getQueenTextColor_1(){
  return '#fff4cb';
}
;
_.getQueenWinFrameStage = function getQueenWinFrameStage_1(){
  return 'Win01';
}
;
_.getQueenWinStage = function getQueenWinStage_1(){
  return 'Win';
}
;
_.getSelectAnimStageName = function getSelectAnimStageName_1(){
  return 'select';
}
;
_.getTextColor = function getTextColor_1(){
  return '#c8ad81';
}
;
_.getTextSize = function getTextSize_1(){
  return 19;
}
;
_.getUnselectedAnimStageName = function getUnselectedAnimStageName_1(){
  return 'unselected';
}
;
_.getUnselectedCardLocation = function getUnselectedCardLocation_1(locations){
  return dynamicCast(locations.locationsMap.get('CARD_DARK'), Q$Location);
}
;
_.getWinFrameAnimationBank = function getWinFrameAnimationBank_1(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , WIN_FRAME).path), Q$AnimationBank);
}
;
_.getWinFrameLocation = function getWinFrameLocation_1(locations){
  return dynamicCast(locations.locationsMap.get('CARD_WIN_FRAME'), Q$Location);
}
;
_.getWinGlowFrameStage = function getWinGlowFrameStage_1(){
  return 'win';
}
;
_.getWinStage = function getWinStage_1(){
  return 'win';
}
;
_.getcCardFlipDelay = function getcCardFlipDelay_1(){
  return 0;
}
;
_.playJokerFlipSound = function playJokerFlipSound_1(){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Flip_joker', 2);
}
;
_.playQueenFlipSound = function playQueenFlipSound_1(){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Flip_queen', 1);
}
;
_.playSelectSound = function playSelectSound_1(){
}
;
_.playUnselectSound = function playUnselectSound_1(){
}
;
_.shouldShowPrizeOnSecondStage = function shouldShowPrizeOnSecondStage_1(){
  return true;
}
;
var CARD_IDS;
function $clinit_QueenOfDiamondsMainGameCardConfigurationWeb(){
  $clinit_QueenOfDiamondsMainGameCardConfigurationWeb = nullMethod;
  CARD_IDS_0 = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$CharSequence_$1, Q$Comparable_$1, Q$Object_$1, Q$String_$1]), Q$String, ['clover1', 'clover2', 'clover3', 'clover4', 'clover5', 'clover6', 'clover7', 'clover8', 'clover9', 'clover10', 'diamond1', 'diamond2', 'diamond3', 'diamond4', 'diamond5', 'diamond6', 'diamond7', 'diamond8', 'diamond9', 'diamond10', 'heart1', 'heart2', 'heart3', 'heart4', 'heart5', 'heart6', 'heart7', 'heart8', 'heart9', 'heart10', 'club1', 'club2', 'club3', 'club4', 'club5', 'club6', 'club7', 'club8', 'club9', 'club10']);
}

function QueenOfDiamondsMainGameCardConfigurationWeb_0(){
  $clinit_QueenOfDiamondsMainGameCardConfigurationWeb();
}

function QueenOfDiamondsMainGameCardConfigurationWeb(){
}

_ = QueenOfDiamondsMainGameCardConfigurationWeb_0.prototype = QueenOfDiamondsMainGameCardConfigurationWeb.prototype = new AbstractQueenOfDiamondsCardConfiguration;
_.getCardContentAnimationBank = function getCardContentAnimationBank_2(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , CARDS).path), Q$AnimationBank);
}
;
_.getCardFlipAnimationBank = function getCardFlipAnimationBank_2(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , CARD_FLIP).path), Q$AnimationBank);
}
;
_.getCardFlipBackStage = function getCardFlipBackStage_2(cardId){
  return CARD_IDS_0[valueOf_0(__parseAndValidateInt(cardId)).value_0 - 1] + 'Flipback';
}
;
_.getCardFlipLocation = function getCardFlipLocation_2(locations){
  return dynamicCast(locations.locationsMap.get('CARD_CARD_ANIM'), Q$Location);
}
;
_.getCardInnerLocation = function getCardInnerLocation_2(locations){
  return dynamicCast(locations.locationsMap.get('CARD_CARD'), Q$Location);
}
;
_.getCardItemLocation = function getCardItemLocation_2(locations, cardPrefix, numOfCard){
  return dynamicCast(locations.locationsMap.get(cardPrefix + numOfCard), Q$Location);
}
;
_.getCardStage = function getCardStage_2(cardId){
  return CARD_IDS_0[valueOf_0(__parseAndValidateInt(cardId)).value_0 - 1];
}
;
_.getClass$ = function getClass_505(){
  return Lwebgl_client_nf_games_g431_Card_mainGameCardConfig_QueenOfDiamondsMainGameCardConfigurationWeb_2_classLit;
}
;
_.getDeselectAnimStageName = function getDeselectAnimStageName_2(){
  return 'deselect';
}
;
_.getFlipAnimStagePart1 = function getFlipAnimStagePart1_2(){
  return 'flip1';
}
;
_.getFlipAnimStagePart2 = function getFlipAnimStagePart2_2(){
  return 'flip2';
}
;
_.getFlipAnimStagePart3 = function getFlipAnimStagePart3_2(){
  return 'flip3';
}
;
_.getFlipBackAnimStagePart1 = function getFlipBackAnimStagePart1_2(){
  return 'flipback1';
}
;
_.getFlipBackAnimStagePart2 = function getFlipBackAnimStagePart2_2(){
  return 'flipback2';
}
;
_.getFullFlipAnimStage = function getFullFlipAnimStage_2(){
  return 'flip';
}
;
_.getFullFlipBackAnimStage = function getFullFlipBackAnimStage_2(){
  return 'flipback';
}
;
_.getGoldCardFlipAnimationBank = function getGoldCardFlipAnimationBank_2(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , GOLD_CARD_FLIP).path), Q$AnimationBank);
}
;
_.getGoldCardFlipLocation = function getGoldCardFlipLocation_2(locations){
  return dynamicCast(locations.locationsMap.get('CARD_GOLD_CARD'), Q$Location);
}
;
_.getHitAreaCardLocation = function getHitAreaCardLocation_2(locations, cardPrefix, numOfCard, itemLocation){
  return $relativeTo(dynamicCast(locations.locationsMap.get('CARD_HIT_AREA'), Q$Location), itemLocation);
}
;
_.getJokerCardFlipAnimationBank = function getJokerCardFlipAnimationBank_2(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , JOKER_CARD).path), Q$AnimationBank);
}
;
_.getJokerCardFlipLocation = function getJokerCardFlipLocation_2(locations){
  return dynamicCast(locations.locationsMap.get('CARD_JOKER_CARD'), Q$Location);
}
;
_.getPrizeLocation = function getPrizeLocation_2(locations){
  return dynamicCast(locations.locationsMap.get('CARD_PRIZE'), Q$Location);
}
;
_.getQueenCardFlipAnimationBank = function getQueenCardFlipAnimationBank_2(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , QUEEN_CARD).path), Q$AnimationBank);
}
;
_.getQueenCardFlipLocation = function getQueenCardFlipLocation_2(locations){
  return dynamicCast(locations.locationsMap.get('CARD_QUEEN_CARD'), Q$Location);
}
;
_.getQueenCardWinAnimationBank = function getQueenCardWinAnimationBank_2(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , QUEEN_CARD_WIN).path), Q$AnimationBank);
}
;
_.getQueenTextColor = function getQueenTextColor_2(){
  return '#fff4cb';
}
;
_.getQueenWinFrameStage = function getQueenWinFrameStage_2(){
  return 'Win01';
}
;
_.getQueenWinStage = function getQueenWinStage_2(){
  return 'Win';
}
;
_.getSelectAnimStageName = function getSelectAnimStageName_2(){
  return 'select';
}
;
_.getTextColor = function getTextColor_2(){
  return '#c8ad81';
}
;
_.getTextSize = function getTextSize_2(){
  return 18;
}
;
_.getUnselectedAnimStageName = function getUnselectedAnimStageName_2(){
  return 'unselected';
}
;
_.getUnselectedCardLocation = function getUnselectedCardLocation_2(locations){
  return dynamicCast(locations.locationsMap.get('CARD_DARK'), Q$Location);
}
;
_.getWinFrameAnimationBank = function getWinFrameAnimationBank_2(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , WIN_FRAME).path), Q$AnimationBank);
}
;
_.getWinFrameLocation = function getWinFrameLocation_2(locations){
  return dynamicCast(locations.locationsMap.get('CARD_WIN_FRAME'), Q$Location);
}
;
_.getWinGlowFrameStage = function getWinGlowFrameStage_2(){
  return 'win';
}
;
_.getWinStage = function getWinStage_2(){
  return 'win';
}
;
_.getcCardFlipDelay = function getcCardFlipDelay_2(){
  return 0.041666666666666664;
}
;
_.playJokerFlipSound = function playJokerFlipSound_2(){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Flip_joker', 2);
}
;
_.playQueenFlipSound = function playQueenFlipSound_2(){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Flip_queen', 1);
}
;
_.playSelectSound = function playSelectSound_2(){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Enable_card', 1);
}
;
_.playUnselectSound = function playUnselectSound_2(){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Disable_card', 1);
}
;
_.shouldShowPrizeOnSecondStage = function shouldShowPrizeOnSecondStage_2(){
  return false;
}
;
var CARD_IDS_0;
function $setJokerBonusCardConfiguration(this$static, jokerBonusCardConfiguration){
  this$static.jokerBonusCardConfiguration = jokerBonusCardConfiguration;
}

function $setMainGameCardConfiguration(this$static, mainGameCardConfiguration){
  this$static.mainGameCardConfiguration = mainGameCardConfiguration;
}

function $setWarBonusCardConfiguration(this$static, warBonusCardConfiguration){
  this$static.warBonusCardConfiguration = warBonusCardConfiguration;
}

function QueenOfDiamondsCardsConfigurationsService_0(){
}

function QueenOfDiamondsCardsConfigurationsService(){
}

_ = QueenOfDiamondsCardsConfigurationsService_0.prototype = QueenOfDiamondsCardsConfigurationsService.prototype = new Object_0;
_.getClass$ = function getClass_506(){
  return Lwebgl_client_nf_games_g431_Card_service_QueenOfDiamondsCardsConfigurationsService_2_classLit;
}
;
_.jokerBonusCardConfiguration = null;
_.mainGameCardConfiguration = null;
_.warBonusCardConfiguration = null;
function $createCardsMap_1(this$static){
  var i, indexsString;
  this$static.cardsStagesMap = new ArrayList_0;
  for (i = 1; i <= 13; ++i) {
    indexsString = '' + i;
    $add_10(this$static.cardsStagesMap, 'clover' + indexsString);
  }
  for (i = 1; i <= 13; ++i) {
    indexsString = '' + i;
    $add_10(this$static.cardsStagesMap, 'diamond' + indexsString);
  }
  for (i = 1; i <= 13; ++i) {
    indexsString = '' + i;
    $add_10(this$static.cardsStagesMap, 'heart' + indexsString);
  }
  for (i = 1; i <= 13; ++i) {
    indexsString = '' + i;
    $add_10(this$static.cardsStagesMap, 'club' + indexsString);
  }
}

function $getCardFlipAnimationBank(resources, cardSuffix){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , dynamicCast(valueOf(($clinit_QueenOfDiamondsResources$Map() , $MAP_0), 'WAR_BONUS_FLIP' + cardSuffix), Q$QueenOfDiamondsResources)).path), Q$AnimationBank);
}

function $getCardInnerLocation(locations, cardSuffix){
  return dynamicCast(locations.locationsMap.get('WAR_BONUS_CARD_VALUE' + cardSuffix), Q$Location);
}

function $getCardWinFrameLocation(locations, cardSuffix){
  return dynamicCast(locations.locationsMap.get('WAR_BONUS_CARD_WIN_FRAME' + cardSuffix), Q$Location);
}

function $getPoofLocation(locations, cardSuffix){
  return dynamicCast(locations.locationsMap.get('WAR_BONUS_CARD_POOF' + cardSuffix), Q$Location);
}

function $getStartFallAnimationBank(resources, cardSuffix){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , dynamicCast(valueOf(($clinit_QueenOfDiamondsResources$Map() , $MAP_0), 'WAR_BONUS_FALL' + cardSuffix), Q$QueenOfDiamondsResources)).path), Q$AnimationBank);
}

function $getWinLoseAnimationBank(resources, cardSuffix){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , dynamicCast(valueOf(($clinit_QueenOfDiamondsResources$Map() , $MAP_0), 'WAR_BONUS_WIN_LOSE' + cardSuffix), Q$QueenOfDiamondsResources)).path), Q$AnimationBank);
}

function AbstractQueenOfDiamondsWarCardConfiguration(){
}

_ = AbstractQueenOfDiamondsWarCardConfiguration.prototype = new AbstractQueenOfDiamondsCardConfiguration;
_.getCardFlipBackStage = function getCardFlipBackStage_3(cardId){
  return dynamicCast($get_5(this.cardsStagesMap, __parseAndValidateInt(cardId) - 1), Q$String) + 'Flipback';
}
;
_.getCardStage = function getCardStage_3(cardId){
  return dynamicCast($get_5(this.cardsStagesMap, __parseAndValidateInt(cardId) - 1), Q$String);
}
;
_.getClass$ = function getClass_507(){
  return Lwebgl_client_nf_games_g431_Card_warBonusCardConfig_AbstractQueenOfDiamondsWarCardConfiguration_2_classLit;
}
;
_.shouldShowPrizeOnSecondStage = function shouldShowPrizeOnSecondStage_3(){
  return true;
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractQueenOfDiamondsWarCardConfiguration]);
_.cardsStagesMap = null;
function QueenOfDiamondsWarBonusCardConfigurationMobile_0(){
  $createCardsMap_1(this);
}

function QueenOfDiamondsWarBonusCardConfigurationMobile(){
}

_ = QueenOfDiamondsWarBonusCardConfigurationMobile_0.prototype = QueenOfDiamondsWarBonusCardConfigurationMobile.prototype = new AbstractQueenOfDiamondsWarCardConfiguration;
_.getCardContentAnimationBank = function getCardContentAnimationBank_3(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , BONUSES_CARDS).path), Q$AnimationBank);
}
;
_.getCardFlipAnimationBank = function getCardFlipAnimationBank_3(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , CARD_FLIP).path), Q$AnimationBank);
}
;
_.getCardFlipLocation = function getCardFlipLocation_3(locations){
  return dynamicCast(locations.locationsMap.get('CARD_CARD_ANIM'), Q$Location);
}
;
_.getCardInnerLocation = function getCardInnerLocation_3(locations){
  return dynamicCast(locations.locationsMap.get('CARD_CARD'), Q$Location);
}
;
_.getCardItemLocation = function getCardItemLocation_3(locations, cardPrefix, numOfCard){
  return dynamicCast(locations.locationsMap.get(cardPrefix), Q$Location);
}
;
_.getClass$ = function getClass_508(){
  return Lwebgl_client_nf_games_g431_Card_warBonusCardConfig_QueenOfDiamondsWarBonusCardConfigurationMobile_2_classLit;
}
;
_.getDeselectAnimStageName = function getDeselectAnimStageName_3(){
  return 'deselect';
}
;
_.getFlipAnimStagePart1 = function getFlipAnimStagePart1_3(){
  return 'flip1';
}
;
_.getFlipAnimStagePart2 = function getFlipAnimStagePart2_3(){
  return 'flip2';
}
;
_.getFlipAnimStagePart3 = function getFlipAnimStagePart3_3(){
  return 'flip3';
}
;
_.getFlipBackAnimStagePart1 = function getFlipBackAnimStagePart1_3(){
  return 'flipback1';
}
;
_.getFlipBackAnimStagePart2 = function getFlipBackAnimStagePart2_3(){
  return 'poof';
}
;
_.getFullFlipAnimStage = function getFullFlipAnimStage_3(){
  return 'flip';
}
;
_.getFullFlipBackAnimStage = function getFullFlipBackAnimStage_3(){
  return 'flipback';
}
;
_.getGoldCardFlipAnimationBank = function getGoldCardFlipAnimationBank_3(resources){
  return null;
}
;
_.getGoldCardFlipLocation = function getGoldCardFlipLocation_3(locations){
  return dynamicCast(locations.locationsMap.get('CARD_GOLD_CARD'), Q$Location);
}
;
_.getHitAreaCardLocation = function getHitAreaCardLocation_3(locations, cardPrefix, numOfCard, itemLocation){
  return dynamicCast(locations.locationsMap.get(cardPrefix + numOfCard), Q$Location);
}
;
_.getJokerCardFlipAnimationBank = function getJokerCardFlipAnimationBank_3(resources){
  return null;
}
;
_.getJokerCardFlipLocation = function getJokerCardFlipLocation_3(locations){
  return dynamicCast(locations.locationsMap.get('CARD_JOKER_CARD'), Q$Location);
}
;
_.getPrizeLocation = function getPrizeLocation_3(locations){
  return dynamicCast(locations.locationsMap.get('CARD_PRIZE'), Q$Location);
}
;
_.getQueenCardFlipAnimationBank = function getQueenCardFlipAnimationBank_3(resources){
  return null;
}
;
_.getQueenCardFlipLocation = function getQueenCardFlipLocation_3(locations){
  return dynamicCast(locations.locationsMap.get('CARD_QUEEN_CARD'), Q$Location);
}
;
_.getQueenCardWinAnimationBank = function getQueenCardWinAnimationBank_3(resources){
  return null;
}
;
_.getQueenTextColor = function getQueenTextColor_3(){
  return '#c8ad81';
}
;
_.getQueenWinFrameStage = function getQueenWinFrameStage_3(){
  return 'Win01';
}
;
_.getQueenWinStage = function getQueenWinStage_3(){
  return 'Win';
}
;
_.getSelectAnimStageName = function getSelectAnimStageName_3(){
  return 'select';
}
;
_.getTextColor = function getTextColor_3(){
  return '#c8ad81';
}
;
_.getTextSize = function getTextSize_3(){
  return 20;
}
;
_.getUnselectedAnimStageName = function getUnselectedAnimStageName_3(){
  return 'unselected';
}
;
_.getUnselectedCardLocation = function getUnselectedCardLocation_3(locations){
  return dynamicCast(locations.locationsMap.get('CARD_DARK'), Q$Location);
}
;
_.getWinFrameAnimationBank = function getWinFrameAnimationBank_3(resources){
  return null;
}
;
_.getWinFrameLocation = function getWinFrameLocation_3(locations){
  return dynamicCast(locations.locationsMap.get('CARD_WIN_FRAME'), Q$Location);
}
;
_.getWinGlowFrameStage = function getWinGlowFrameStage_3(){
  return 'win';
}
;
_.getWinStage = function getWinStage_3(){
  return 'win';
}
;
_.getcCardFlipDelay = function getcCardFlipDelay_3(){
  return 0.041666666666666664;
}
;
_.playJokerFlipSound = function playJokerFlipSound_3(){
}
;
_.playQueenFlipSound = function playQueenFlipSound_3(){
}
;
_.playSelectSound = function playSelectSound_3(){
}
;
_.playUnselectSound = function playUnselectSound_3(){
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractQueenOfDiamondsWarCardConfiguration]);
function QueenOfDiamondsWarBonusCardConfigurationWeb_0(){
  $createCardsMap_1(this);
}

function QueenOfDiamondsWarBonusCardConfigurationWeb(){
}

_ = QueenOfDiamondsWarBonusCardConfigurationWeb_0.prototype = QueenOfDiamondsWarBonusCardConfigurationWeb.prototype = new AbstractQueenOfDiamondsWarCardConfiguration;
_.getCardContentAnimationBank = function getCardContentAnimationBank_4(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , BONUSES_CARDS).path), Q$AnimationBank);
}
;
_.getCardFlipAnimationBank = function getCardFlipAnimationBank_4(resources){
  return dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , CARD_FLIP).path), Q$AnimationBank);
}
;
_.getCardFlipLocation = function getCardFlipLocation_4(locations){
  return dynamicCast(locations.locationsMap.get('CARD_CARD_ANIM'), Q$Location);
}
;
_.getCardInnerLocation = function getCardInnerLocation_4(locations){
  return dynamicCast(locations.locationsMap.get('CARD_CARD'), Q$Location);
}
;
_.getCardItemLocation = function getCardItemLocation_4(locations, cardPrefix, numOfCard){
  return dynamicCast(locations.locationsMap.get(cardPrefix), Q$Location);
}
;
_.getClass$ = function getClass_509(){
  return Lwebgl_client_nf_games_g431_Card_warBonusCardConfig_QueenOfDiamondsWarBonusCardConfigurationWeb_2_classLit;
}
;
_.getDeselectAnimStageName = function getDeselectAnimStageName_4(){
  return 'deselect';
}
;
_.getFlipAnimStagePart1 = function getFlipAnimStagePart1_4(){
  return 'flip1';
}
;
_.getFlipAnimStagePart2 = function getFlipAnimStagePart2_4(){
  return 'flip2';
}
;
_.getFlipAnimStagePart3 = function getFlipAnimStagePart3_4(){
  return 'flip3';
}
;
_.getFlipBackAnimStagePart1 = function getFlipBackAnimStagePart1_4(){
  return 'flipback1';
}
;
_.getFlipBackAnimStagePart2 = function getFlipBackAnimStagePart2_4(){
  return 'poof';
}
;
_.getFullFlipAnimStage = function getFullFlipAnimStage_4(){
  return 'flip';
}
;
_.getFullFlipBackAnimStage = function getFullFlipBackAnimStage_4(){
  return 'flipback';
}
;
_.getGoldCardFlipAnimationBank = function getGoldCardFlipAnimationBank_4(resources){
  return null;
}
;
_.getGoldCardFlipLocation = function getGoldCardFlipLocation_4(locations){
  return dynamicCast(locations.locationsMap.get('CARD_GOLD_CARD'), Q$Location);
}
;
_.getHitAreaCardLocation = function getHitAreaCardLocation_4(locations, cardPrefix, numOfCard, itemLocation){
  return dynamicCast(locations.locationsMap.get(cardPrefix + numOfCard), Q$Location);
}
;
_.getJokerCardFlipAnimationBank = function getJokerCardFlipAnimationBank_4(resources){
  return null;
}
;
_.getJokerCardFlipLocation = function getJokerCardFlipLocation_4(locations){
  return dynamicCast(locations.locationsMap.get('CARD_JOKER_CARD'), Q$Location);
}
;
_.getPrizeLocation = function getPrizeLocation_4(locations){
  return dynamicCast(locations.locationsMap.get('CARD_PRIZE'), Q$Location);
}
;
_.getQueenCardFlipAnimationBank = function getQueenCardFlipAnimationBank_4(resources){
  return null;
}
;
_.getQueenCardFlipLocation = function getQueenCardFlipLocation_4(locations){
  return dynamicCast(locations.locationsMap.get('CARD_QUEEN_CARD'), Q$Location);
}
;
_.getQueenCardWinAnimationBank = function getQueenCardWinAnimationBank_4(resources){
  return null;
}
;
_.getQueenTextColor = function getQueenTextColor_4(){
  return '#c8ad81';
}
;
_.getQueenWinFrameStage = function getQueenWinFrameStage_4(){
  return 'Win01';
}
;
_.getQueenWinStage = function getQueenWinStage_4(){
  return 'Win';
}
;
_.getSelectAnimStageName = function getSelectAnimStageName_4(){
  return 'select';
}
;
_.getTextColor = function getTextColor_4(){
  return '#c8ad81';
}
;
_.getTextSize = function getTextSize_4(){
  return 20;
}
;
_.getUnselectedAnimStageName = function getUnselectedAnimStageName_4(){
  return 'unselected';
}
;
_.getUnselectedCardLocation = function getUnselectedCardLocation_4(locations){
  return dynamicCast(locations.locationsMap.get('CARD_DARK'), Q$Location);
}
;
_.getWinFrameAnimationBank = function getWinFrameAnimationBank_4(resources){
  return null;
}
;
_.getWinFrameLocation = function getWinFrameLocation_4(locations){
  return dynamicCast(locations.locationsMap.get('CARD_WIN_FRAME'), Q$Location);
}
;
_.getWinGlowFrameStage = function getWinGlowFrameStage_4(){
  return 'win';
}
;
_.getWinStage = function getWinStage_4(){
  return 'win';
}
;
_.getcCardFlipDelay = function getcCardFlipDelay_4(){
  return 0.041666666666666664;
}
;
_.playJokerFlipSound = function playJokerFlipSound_4(){
}
;
_.playQueenFlipSound = function playQueenFlipSound_4(){
}
;
_.playSelectSound = function playSelectSound_4(){
}
;
_.playUnselectSound = function playUnselectSound_4(){
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractQueenOfDiamondsWarCardConfiguration]);
function $addMenusToGamePanel(this$static, container){
  !!this$static.autoplayAttachable && this$static.autoplayAttachable.addMenuToPanel(container);
  !!this$static.globalMenuAttachable && this$static.globalMenuAttachable.addMenuToPanel(container);
}

function $autoPlayStartedHandler(this$static){
  $add_16(this$static.interruptsQueue, new GameInterrupt_0(new AbstractGame$4_0(this$static), null));
}

function $gameRender(this$static){
  var context;
  context = this$static.gameCanvas.element.getContext('2d');
  $gameRender_0(this$static, context);
}

function $gameStartedCompletedHandler(this$static){
  $add_16(this$static.interruptsQueue, new GameInterrupt_0(new AbstractGame$9_0(this$static), null));
}

function $getBetDenominations(this$static){
  var betDenominations;
  this$static.gameMode == ($clinit_Constants$CommonGamesConstants$GAME_MODE() , GAME_MODE_FREE_GAMES)?(betDenominations = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$CharSequence_$1, Q$Comparable_$1, Q$Object_$1, Q$String_$1]), Q$String, [gameDO_0.freeGamesDO.betValue])):(betDenominations = gameDO_0.betDenominations[0]);
  return betDenominations;
}

function $getBetDenominationsDefIndex(this$static){
  var betDefValue, denominations, i;
  if (this$static.gameMode == ($clinit_Constants$CommonGamesConstants$GAME_MODE() , GAME_MODE_FREE_GAMES)) {
    return 0;
  }
  betDefValue = $getDataFromStorage('GAME_BET_VALUE', 0);
  if (betDefValue != null) {
    denominations = $getBetDenominations(this$static);
    for (i = 0; i < denominations.length; ++i) {
      if ($equals(denominations[i], betDefValue)) {
        return i;
      }
    }
  }
  return gameDO_0.gameDefaultBetIndex;
}

function $getLinesDefValue(this$static, fallBackValue){
  var linesNumber;
  if (this$static.gameMode == ($clinit_Constants$CommonGamesConstants$GAME_MODE() , GAME_MODE_FREE_GAMES)) {
    return this$static.gameDO.freeGamesDO.numberOfLines;
  }
  linesNumber = $getLinesNumberValueFromStorage();
  if (linesNumber != -1) {
    return linesNumber;
  }
  return fallBackValue;
}

function $getLinesNumberValueFromStorage(){
  var lines, numberLines;
  if (useDefaultLineNumber) {
    return -1;
  }
  numberLines = $getDataFromStorage('GAME_LINES_NUMBER', 0);
  if (numberLines != null) {
    lines = __parseAndValidateInt(numberLines);
    return lines;
  }
  return -1;
}

function $handleRoundStartedCompleteInterrupt(this$static){
  !instance_2 && !instance_2 && (instance_2 = new GameResultRecord_0);
  $clearImpl(instance_2.gameHash);
  $sendBetMessageToServer(this$static.gameContainer, $createBTP(this$static.model));
}

function $isNewLocationFormat(locObj, resultArray){
  var value, version;
  value = $get_1(locObj, 'version');
  if (value) {
    version = value.isString().value_0;
    if ($equals(version, '2.0')) {
      $set(resultArray, 0, value);
      return true;
    }
  }
  return false;
}

function $onBalanceUpdated_0(this$static, balance){
  $onBalanceUpdated_1(this$static.gameContainer, balance);
}

function $parseAndSetLocations(this$static){
  var $e0, curBlock, e, i, index, jsonArray, key, key$array, key$index, key$max, locations, obj, resultArray;
  try {
    locations = dynamicCast(this$static.loadedResources.get('locations'), Q$JSONValue);
    jsonArray = locations.isArray();
    obj = $get_0(jsonArray, 0).isObject();
    resultArray = new JSONArray_0;
    index = 0;
    $isNewLocationFormat(obj, resultArray) && (index = 1);
    for (key$array = ($clinit_QueenOfDiamondsLocations() , KEYS) , key$index = 0 , key$max = key$array.length; key$index < key$max; ++key$index) {
      key = key$array[key$index];
      curBlock = $get_1(obj, key).isArray();
      for (i = 0; i < curBlock.jsArray.length; ++i) {
        $set(resultArray, index++, $get_0(curBlock, i));
      }
    }
    this$static.gameLocations = getQueenOfDiamondsLocations();
    $parseAndSaveLocations_0(this$static.gameLocations, resultArray);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Throwable)) {
      e = $e0;
      fatal('Error while parsing the game locations', 100006, e);
      throw e;
    }
     else 
      throw $e0;
  }
}

function $roundEndedCompletedHandler(this$static){
  $add_16(this$static.interruptsQueue, new GameInterrupt_0(new AbstractGame$10_0(this$static), null));
}

function $roundStartedCompletedHandler(this$static){
  $add_16(this$static.interruptsQueue, new GameInterrupt_0(new AbstractGame$11_0(this$static), null));
}

function $saveBetAndLineValuesToStorage(this$static){
  var betValue, linesNumber;
  if (this$static.gameMode != ($clinit_Constants$CommonGamesConstants$GAME_MODE() , GAME_MODE_FREE_GAMES)) {
    betValue = $getCurrentBetPerTicket(this$static.model);
    betValue != null && $setDataToStorage_0(this$static.gameContainer, 'GAME_BET_VALUE', betValue, 0);
    linesNumber = $getNumberOfTickets(this$static.model);
    linesNumber != -1 && $setDataToStorage_0(this$static.gameContainer, 'GAME_LINES_NUMBER', '' + linesNumber, 0);
  }
}

function $setDataToUserStorage(this$static, value){
  $setDataToStorage_0(this$static.gameContainer, 'QUEEN_OF_DIAMONDS_SHOULD_SHOW_SPLASH_AGAIN', value, 1);
}

function $setHistoryDO(this$static, historyStepDO){
  this$static.historyStepDO = historyStepDO;
}

function AbstractGame(){
}

_ = AbstractGame.prototype = new Object_0;
_.autoPlayEndedHandler_0 = function autoPlayEndedHandler(){
  $add_16(this.interruptsQueue, new GameInterrupt_0(new AbstractGame$3_0(this), null));
}
;
_.autoPlayStartedHandler_0 = function autoPlayStartedHandler(){
  $autoPlayStartedHandler(this);
}
;
_.autoPlayToggleClose_0 = function autoPlayToggleClose(){
  $add_16(this.interruptsQueue, new GameInterrupt_0(new AbstractGame$6_0(this), null));
}
;
_.autoPlayToggleOpen_0 = function autoPlayToggleOpen(){
  $add_16(this.interruptsQueue, new GameInterrupt_0(new AbstractGame$5_0, null));
}
;
_.betMessageReceivedHandler = function betMessageReceivedHandler(resultDO){
  $add_16(this.interruptsQueue, new GameInterrupt_0(new AbstractGame$7_0(this), initValues(_3Ljava_lang_Object_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$Object, [resultDO])));
}
;
_.gameEndedCompletedHandler = function gameEndedCompletedHandler(){
  $add_16(this.interruptsQueue, new GameInterrupt_0(new AbstractGame$8_0, null));
}
;
_.gameNonMandatoryResourcesLoadCompleteHandler = function gameNonMandatoryResourcesLoadCompleteHandler(exception, resourceName){
}
;
_.gamePreferredNonMandatoryResourcesLoadCompleteHandler = function gamePreferredNonMandatoryResourcesLoadCompleteHandler(exception, resourceName){
}
;
_.gameResourcesLoadCompleteHandler = function gameResourcesLoadCompleteHandler(resources){
  this.loadedResources = resources;
  $initGameOnLoadResourcesComplete(this);
  $gamePreRender(this);
  $gameRender(this);
  $start_0(this.frameManager);
  $add_16(this.interruptsQueue, new GameInterrupt_0(new AbstractGame$12_0(this), null));
}
;
_.getBetDenominations = function getBetDenominations(){
  return $getBetDenominations(this);
}
;
_.getBetDenominationsDefIndex = function getBetDenominationsDefIndex(){
  return $getBetDenominationsDefIndex(this);
}
;
_.getBgHeight_0 = function getBgHeight(){
  return $getHeight(this.gameBackground);
}
;
_.getBgWidth_0 = function getBgWidth(){
  return $getWidth(this.gameBackground);
}
;
_.getClass$ = function getClass_510(){
  return Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame_2_classLit;
}
;
_.getGameHeaderPanel = function getGameHeaderPanel(){
  return null;
}
;
_.getGameInfoMenuPanel = function getGameInfoMenuPanel(){
  return null;
}
;
_.getGameInfoMenuTitle = function getGameInfoMenuTitle(){
  return null;
}
;
_.getGameMainPanel = function getGameMainPanel(){
  return this.gamePanel;
}
;
_.getGameSettingsMenuPanel = function getGameSettingsMenuPanel(){
  return null;
}
;
_.getGameSettingsPanelTitle = function getGameSettingsPanelTitle(){
  return null;
}
;
_.getIsVerticalGame = function getIsVerticalGame(){
  return true;
}
;
_.getWinUpToValue = function getWinUpToValue(denomIndex){
  var betDenominations, betValue, i, winUpToValue;
  if (this.gameMode == ($clinit_Constants$CommonGamesConstants$GAME_MODE() , GAME_MODE_FREE_GAMES)) {
    betValue = gameDO_0.freeGamesDO.betValue;
    betDenominations = gameDO_0.betDenominations[0];
    for (i = 0; i < betDenominations.length; ++i) {
      if ($equals(betDenominations[i], betValue)) {
        denomIndex = i;
        break;
      }
    }
  }
  winUpToValue = winUpToValues[denomIndex];
  return winUpToValue;
}
;
_.handleCssFileLoaded = function handleCssFileLoaded(){
}
;
_.initGame = function initGame(basePanel, gameContainer, gameDO){
  this.gameDO = gameDO;
  this.gameContainer = gameContainer;
  this.panelManager = new PanelManager_0;
  $init_16(this.panelManager, basePanel);
  this.gamePanel = this.gameCustomization.getQueenOfDiamondsPanel();
  $initGamePanelServices(this.gamePanel, this);
  this.interruptsQueue = new GameInterruptQueue_0;
  this.isInAutoPlay = false;
  this.gameState = 0;
  this.gameMode = this.gameContainer.gameMode;
  this.frameManager = getInstance();
  $addFrameManagerListener(this.frameManager, this);
  $init_26(this.frameManager);
  getResizeManager().isGameOrientationVert = true;
  supportedLanguagesForLoadingResources = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$CharSequence_$1, Q$Comparable_$1, Q$Object_$1, Q$String_$1]), Q$String, ['ENG']);
}
;
_.isAutoPlaySupported_0 = function isAutoPlaySupported(){
  return true;
}
;
_.preRender = function preRender_1(){
  this.gameState == 1 && $gamePreRender(this);
}
;
_.render_0 = function render_1(){
  this.gameState == 1 && $gameRender(this);
}
;
_.setAutoplayAttachable = function setAutoplayAttachable(autoplayAttachable){
  this.autoplayAttachable = autoplayAttachable;
}
;
_.setBalance_0 = function setBalance_0(balance){
  this.gamePanel.setBalance_0(balance);
}
;
_.setGlobalMenuAttachable = function setGlobalMenuAttachable(globalMenuAttachable){
  this.globalMenuAttachable = globalMenuAttachable;
}
;
_.setHistoryDO = function setHistoryDO(historyStepDO){
  this.historyStepDO = historyStepDO;
}
;
_.setIsHistoryMode = function setIsHistoryMode(isHistoryMode){
  this.isHistoryMode = isHistoryMode;
}
;
_.shouldShowLogoInFullMenu = function shouldShowLogoInFullMenu(){
  return true;
}
;
_.stopGameOnError = function stopGameOnError(){
  !!this.frameManager && (this.frameManager.isRunning = false);
}
;
_.updateInterrupts = function updateInterrupts(){
  var $e0;
  try {
    $handleInterrupts(this.interruptsQueue);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Exception)) {
      !!this.frameManager && (this.frameManager.isRunning = false);
      $gameFatalErrorOccuredHandler_0(this.gameContainer, -1008, get_9('INGAME.INIT_ERROR_MESSAGE'));
    }
     else 
      throw $e0;
  }
}
;
_.castableTypeMap$ = makeCastMap([Q$FrameManagerListener]);
_.autoplayAttachable = null;
_.frameManager = null;
_.gameBackground = null;
_.gameCanvas = null;
_.gameContainer = null;
_.gameDO = null;
_.gameMode = null;
_.gamePanel = null;
_.gameState = 0;
_.globalMenuAttachable = null;
_.historyStepDO = null;
_.interruptsQueue = null;
_.isHistoryMode = false;
_.isInAutoPlay = false;
_.loadedResources = null;
_.panelManager = null;
function $clinit_Game431(){
  $clinit_Game431 = nullMethod;
  SOUND_FILE_URL = DownloadServerGamesGameNumURL + ($clinit_QueenOfDiamondsResources() , SOUND).path + '.mp3';
}

function $coinSizeChangedHandler(this$static, newIndex){
  if ($equals($getCurrentBetPerTicket(this$static.model), $getBetDenominations(this$static)[newIndex])) {
    return;
  }
  !!this$static.itsAwinnerPopup && $hidePopup_1(this$static.itsAwinnerPopup);
  !!this$static.bigWinPopup && $hidePopup_0(this$static.bigWinPopup);
  $hideToolTipPanel(this$static);
  $notifyBetPerLineChanged(this$static.gameDataObserver, $getBetDenominations(this$static)[newIndex]);
  $notifyBetChanged(this$static.gameDataObserver, $getTotalBet(this$static.model));
  $notifyWinUpToChanged(this$static.gameDataObserver, $getWinUpTo(this$static.model));
  $resetGame(this$static);
}

function $gamePreRender(this$static){
  if (this$static.isSplashVisible) {
    return;
  }
  $preRender_4(this$static.board);
  if (this$static.isNonMandatoryResourcesLoaded) {
    $preRender_0(this$static.allTimeAnimationController);
    $preRender_6(this$static.itsAwinnerPopup);
  }
}

function $gameRender_0(this$static, context){
  if (this$static.isSplashVisible) {
    $render_8(this$static.splashScreen);
    return;
  }
  $drawImage_1(this$static.gameBackground, context, 0, 0);
  this$static.isNonMandatoryResourcesLoaded && $render_0(this$static.allTimeAnimationController, context);
  $render_4(this$static.board, context);
  if (this$static.isNonMandatoryResourcesLoaded) {
    $render_7(this$static.itsAwinnerPopup, context);
    $render_6(this$static.bigWinPopup, context);
  }
}

function $handleAutoPlayStartedInterrupt(this$static){
  this$static.isInAutoPlay = true;
  this$static.gamePanel.enableMenu(false);
  $setKeyboardEnabled((!instance_12 && (instance_12 = new KeyboardManager_0) , instance_12), false);
}

function $handleAutoPlayToggleCloseInterrupt(this$static){
  this$static.isInAutoPlay = false;
  this$static.gamePanel.enableMenu(true);
  $setKeyboardEnabled((!instance_12 && (instance_12 = new KeyboardManager_0) , instance_12), true);
}

function $handleBetMessageReceivedInterrupt(this$static, resultDO){
  this$static.isGameDataRecieved = true;
  $parseResponse(this$static.model, resultDO);
  this$static.isBoardCompleteReset && $startPlayGame(this$static);
}

function $handleGameStartedCompleteInterrupt(this$static){
  !!this$static.itsAwinnerPopup && $hidePopup_1(this$static.itsAwinnerPopup);
  !!this$static.bigWinPopup && $hidePopup_0(this$static.bigWinPopup);
  $hideToolTipPanel(this$static);
  getSoundManager().stop_1(SOUND_FILE_URL, 'Intro_music');
  getSoundManager().play_1(SOUND_FILE_URL, 'Ambience_sound', 15, false);
  getSoundManager().stop_1(SOUND_FILE_URL, 'Its_a_winner');
  getSoundManager().stop_1(SOUND_FILE_URL, 'Big_win');
  $roundStartedHandler(this$static.gameContainer);
}

function $handleRoundEndedCompleteInterrupt(this$static){
  var finalTotalWin;
  this$static.board.mainArea.isShowCardsCoverAnimation = true;
  if (!this$static.isInAutoPlay) {
    $isWaitingForWinAnimations(this$static.gameContainer) || $setKeyboardEnabled((!instance_12 && (instance_12 = new KeyboardManager_0) , instance_12), true);
    $trackRoundEnd((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5));
    $switchScratchAllToPlayButton(this$static.gamePanel);
    this$static.gamePanel.enableMenu(true);
    this$static.gamePanel.roundEnded();
    finalTotalWin = convertFormattedAmountToNumber(this$static.model.totalWinAmount);
    $updateTotalWin_0(this$static.gamePanel, finalTotalWin, true);
  }
  $trackRoundPlayed((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5));
  $gameEndedHandler_0(this$static.gameContainer);
}

function $hideToolTipPanel(this$static){
  $cancel_0(this$static.toolTipTimer);
  if (this$static.tooltip.element.style.display != 'none') {
    !!this$static.toolTipTimer && $cancel_0(this$static.toolTipTimer);
    $hide_1(this$static.tooltip);
  }
}

function $initGameOnLoadResourcesComplete(this$static){
  var btpArr, i, numTickets, ticketsRange, linesValue, numTicketsValuesRange, numTicketsValuesRange_0;
  $activate((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5));
  $parseAndSetLocations(this$static);
  linesValue = $getLinesDefValue(this$static, ($clinit_QueenOfDiamondsModel() , valueOf_0(__parseAndValidateInt(DEFAULT_TICKETS_NUMBER_ARRAY[DEFAULT_TICKETS_NUMBER_ARRAY.length - 1])).value_0));
  numTicketsValuesRange = DEFAULT_TICKETS_NUMBER_ARRAY;
  this$static.gameMode == ($clinit_Constants$CommonGamesConstants$GAME_MODE() , GAME_MODE_FREE_GAMES) && (numTicketsValuesRange = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$CharSequence_$1, Q$Comparable_$1, Q$Object_$1, Q$String_$1]), Q$String, ['' + this$static.gameDO.freeGamesDO.numberOfLines]));
  this$static.model = new QueenOfDiamondsModel_0($getBetDenominations(this$static), $getBetDenominationsDefIndex(this$static), numTicketsValuesRange, linesValue);
  $register(this$static.gameDataObserver, this$static.model);
  this$static.gameBackground = dynamicCast(this$static.loadedResources.get('gameBG'), Q$TransformableImage);
  this$static.gamePanel.initLocations(this$static.gameLocations);
  $initGamePanelServices(this$static.gamePanel, this$static);
  this$static.gamePanel.initiateMenu(this$static.loadedResources);
  $init_22(this$static.gamePanel, $getWidth(this$static.gameBackground), $getHeight(this$static.gameBackground), this$static);
  $register(this$static.gameDataObserver, this$static.gamePanel);
  $setCurrentPanel(this$static.panelManager, this$static.gamePanel, false);
  numTicketsValuesRange_0 = this$static.model.numOfTicketsRange_0;
  this$static.gameCustomization.initGameSettingsMenuPanel(this$static.gameSettingsPanel, numTicketsValuesRange_0, this$static.model.currentNumTicketsIndex + 1, this$static, this$static);
  this$static.gameCanvas = createIfSupported();
  $setCoordinateSpaceWidth(this$static.gameCanvas, $getWidth(this$static.gameBackground));
  $setCoordinateSpaceHeight(this$static.gameCanvas, $getHeight(this$static.gameBackground));
  this$static.gameCanvas.element.style['zIndex'] = '50';
  this$static.gamePanel.add_2(this$static.gameCanvas, 0, 0);
  this$static.tooltip = new QueenOfDiamondsTooltip_0(this$static.gamePanel, $getLocation_0(this$static.gameLocations, 'BOARD_TOOLTIP'), (get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_BALANCE') , dynamicCast(this$static.loadedResources.get(($clinit_QueenOfDiamondsResources() , TOOL_TIP).path), Q$TransformableImage)));
  this$static.toolTipTimer = new Game431$1_0(this$static);
  this$static.newRoundDelay = new Game431$2_0(this$static);
  this$static.delayBeforeNextGameTimer = new Game431$3_0(this$static);
  $schedule(this$static.toolTipTimer, 7000);
  this$static.board = new QueenOfDiamondsBoard_0;
  $init_20(this$static.board, this$static.loadedResources, this$static.gameLocations, this$static.gamePanel, this$static, this$static.panelManager, this$static.gameCustomization.getCardsConfigurationService(), this$static.gameCustomization);
  $setSelectedTicketsNum(this$static.board, $getNumberOfTickets(this$static.model), true);
  ($clinit_ButtonsCommandsEnum() , CASHIER).addtionalCssStyle = 'Cashier';
  AUTOPLAY_LABEL.addtionalCssStyle = 'Autoplay-Text';
  AUTOPLAY_NUMBERS.addtionalCssStyle = 'Autoplay-Numbers';
  this$static.infoPopup = this$static.gameCustomization.initInfoPopup(this$static.gamePanel, this$static.loadedResources, this$static.gameLocations, this$static);
  $initSplashScreen(this$static);
  $addMenusToGamePanel(this$static, this$static.gamePanel);
  $notifyTotalWinsChanged(this$static.gameDataObserver, '');
  $notifyBetPerLineChanged(this$static.gameDataObserver, $getCurrentBetPerTicket(this$static.model));
  $notifyBetChanged(this$static.gameDataObserver, $getTotalBet(this$static.model));
  $notifyNumOfTicketChanged(this$static.gameDataObserver, this$static.model.currentNumTicketsIndex);
  $notifyWinUpToChanged(this$static.gameDataObserver, $getWinUpTo(this$static.model));
  $notifyBalanceChanged(this$static.gameDataObserver, ($clinit_PlayerDO() , !instance_3 && (instance_3 = new PlayerDO_0) , dynamicCast($get_3(playerInfo, paramsTag[0]), Q$String)));
  this$static.gameCustomization.onGameMandatoryResourcesLoadCompleteHandler(this$static.loadedResources);
  $resetGame(this$static);
  this$static.isIntroSoundPlaying = true;
  $addSoundEnableChangedListener(getSoundManager(), this$static);
  if (this$static.isHistoryMode) {
    this$static.gamePanel.displayValues(false);
    btpArr = $split(this$static.historyStepDO.btp_0, '=', 0);
    numTickets = $split(btpArr[0], '-', 0);
    ticketsRange = this$static.model.numOfTicketsRange_0;
    for (i = 0; i < ticketsRange.length; ++i) {
      if ($equals(ticketsRange[i], numTickets[0])) {
        break;
      }
    }
    $notifyNumOfTicketChanged(this$static.gameDataObserver, i);
    $setSelectedTicketsNum(this$static.board, $getNumberOfTickets(this$static.model), false);
    $notifyBetPerLineChanged(this$static.gameDataObserver, btpArr[1]);
    $notifyBetChanged(this$static.gameDataObserver, $getTotalBet(this$static.model));
    $notifyWinUpToChanged(this$static.gameDataObserver, $getWinUpTo(this$static.model));
  }
}

function $initSplashScreen(this$static){
  var delayBeforeRemovingSplashScreen, shouldShowSplashAgain, shouldShowSplashAgainValue;
  shouldShowSplashAgainValue = $getDataFromStorage('QUEEN_OF_DIAMONDS_SHOULD_SHOW_SPLASH_AGAIN', 1);
  shouldShowSplashAgain = shouldShowSplashAgainValue == null || ($clinit_Boolean() , $equalsIgnoreCase('true', shouldShowSplashAgainValue)?TRUE_0:FALSE_0).value_0;
  if (!this$static.isHistoryMode) {
    if (shouldShowSplashAgain) {
      (envType_0 == ($clinit_Constants$CommonGamesConstants$ENVIRONMENT_TYPE() , WEB) || !isSupportSound()) && $trackSplashScreenOpen((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5));
      $hideToolTipPanel(this$static);
      this$static.splashScreen = new QueenOfDiamondsSplash_0(this$static.gameLocations, this$static.loadedResources);
      this$static.splashScreen.element.style['zIndex'] = '2';
      delayBeforeRemovingSplashScreen = new Game431$4_0(this$static);
      $setListener_1(this$static.splashScreen, new Game431$5_0(this$static, delayBeforeRemovingSplashScreen));
      this$static.isSplashVisible = true;
      $setCurrentPanel(this$static.panelManager, this$static.splashScreen, false);
    }
     else {
      this$static.isSplashVisible = false;
      $schedule(this$static.toolTipTimer, 7000);
      $addSpaceBarKeyHandler(this$static.gamePanel);
    }
  }
}

function $onBoardClickableChange(this$static, isClickAble){
  $enableScratchAllButton(this$static.gamePanel, isClickAble);
  $setKeyboardEnabled((!instance_12 && (instance_12 = new KeyboardManager_0) , instance_12), isClickAble);
}

function $onBoardCompleteReset(this$static){
  this$static.isBoardCompleteReset = true;
  this$static.isGameDataRecieved && $startPlayGame(this$static);
}

function $onBoardFinished(this$static, pls){
  var balanceAmount, totalWinAmount;
  $setPLSData(this$static.model, pls);
  balanceAmount = convertFormattedAmountToNumber(this$static.model.balanceAfterBet);
  $notifyBalanceChanged(this$static.gameDataObserver, balanceAmount);
  totalWinAmount = convertFormattedAmountToNumber(this$static.model.totalWinAmount);
  $notifyTotalWinsChanged(this$static.gameDataObserver, totalWinAmount);
  if (this$static.model.isWin) {
    this$static.gamePanel.setTotalWinStyle(true);
    $playBottomBarWinAnimation(this$static.board);
    if (this$static.isNonMandatoryResourcesLoaded) {
      if ($isItIsAWinner(this$static.model)) {
        $updateTotalWin_0(this$static.gamePanel, totalWinAmount, false);
        $showPopup_2(this$static.itsAwinnerPopup, this$static.model.totalWinAmount, this$static.gamePanel);
        getSoundManager().play_2(SOUND_FILE_URL, 'Its_a_winner', 10);
        this$static.gamePanel.setLegendStyle(($clinit_Boolean() , $clinit_Boolean() , FALSE_0));
      }
       else if ((new Double_0(this$static.model.totalWinPrizeFactor)).value_0 >= 400) {
        $updateTotalWin_0(this$static.gamePanel, totalWinAmount, false);
        $showPopup_0(this$static.bigWinPopup, this$static.model.totalWinAmount, this$static.gamePanel);
        getSoundManager().play_2(SOUND_FILE_URL, 'Big_win', 11);
        this$static.gamePanel.setLegendStyle(($clinit_Boolean() , $clinit_Boolean() , FALSE_0));
      }
    }
  }
  this$static.isInAutoPlay?$schedule(this$static.delayBeforeNextGameTimer, this$static.model.isWin?3000:2000):$roundEndedHandler(this$static.gameContainer);
}

function $onInfoButtonClicked(this$static){
  $showPopup_1(this$static.infoPopup, this$static.gamePanel);
}

function $onInfoHoverDelayComplete(this$static){
  $cancel_0(this$static.toolTipTimer);
  $show_2(this$static.tooltip);
}

function $onQueenRevealed(this$static, itemID){
  this$static.currentTotalWin += $getItemFinalPrize(this$static.model, itemID);
  this$static.currentTotalWin = toDouble(fromDouble(round0(this$static.currentTotalWin * 100000))) / 100000;
  $updateTotalWin(this$static, this$static.currentTotalWin);
}

function $onSwitchItemsStarted(this$static){
  this$static.gamePanel.setTotalWinStyle(false);
  $stopBottomBarWinAnimation(this$static.board);
}

function $playGame(this$static){
  getSoundManager().stop_1(SOUND_FILE_URL, 'Intro_music');
  this$static.isIntroSoundPlaying = false;
  this$static.isHistoryMode && this$static.gamePanel.displayValues(true);
  $resetGame(this$static);
  this$static.gamePanel.enableMenu(false);
  $setKeyboardEnabled((!instance_12 && (instance_12 = new KeyboardManager_0) , instance_12), false);
  this$static.gamePanel.roundStarted();
  $gameStartedHandler(this$static.gameContainer);
}

function $playRequestHandler(this$static){
  var finalPrize;
  this$static.gamePanel.enableMenu(false);
  $setKeyboardEnabled((!instance_12 && (instance_12 = new KeyboardManager_0) , instance_12), false);
  $trackRoundStart((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5));
  getSoundManager().play_2(SOUND_FILE_URL, 'Play', 36);
  if (this$static.gamePanel.totalWinsCounter.isCounting) {
    finalPrize = convertFormattedAmountToNumber(this$static.model.totalWinAmount);
    $updateTotalWin_0(this$static.gamePanel, finalPrize, false);
    $schedule(this$static.newRoundDelay, 1000);
  }
   else {
    if (!!this$static.infoPopup && $isShowing(this$static.infoPopup)) {
      $hide_4(this$static.infoPopup);
      this$static.gamePanel.element.focus();
    }
    $playGame(this$static);
  }
}

function $resetGame(this$static){
  $setTotalWin_0(this$static.gamePanel, '0');
  $clear_2(this$static.model);
  this$static.isGameDataRecieved = false;
  !!this$static.allTimeAnimationController && (lt($getAVGUpdateFrameTime(getInstance()), Pc8_longLit)?$startAllTimeAnimations(this$static.allTimeAnimationController):$stopAllTimeAnimations(this$static.allTimeAnimationController));
  this$static.currentTotalWin = 0;
  this$static.isBoardCompleteReset = false;
  $reset_7(this$static.board);
  this$static.gamePanel.reset_0();
  $notifyTotalWinsChanged(this$static.gameDataObserver, '');
  this$static.gamePanel.setLegendStyle(($clinit_Boolean() , $clinit_Boolean() , TRUE_0));
  getSoundManager().stop_1(SOUND_FILE_URL, 'Its_a_winner');
  getSoundManager().stop_1(SOUND_FILE_URL, 'Big_win');
}

function $resumeAmbianceSounds(this$static, isEnable){
  isEnable && (this$static.board.currentBonus == ($clinit_QueenOfDiamondsBoard$BonusType() , NONE_0)?this$static.isIntroSoundPlaying?getSoundManager().play_2(SOUND_FILE_URL, 'Intro_music', 16):getSoundManager().play_2(SOUND_FILE_URL, 'Ambience_sound', 15):this$static.board.bonusesManager.currentBonusGame.playAmbienceSound());
}

function $scratchAllHandler(this$static){
  $setKeyboardEnabled((!instance_12 && (instance_12 = new KeyboardManager_0) , instance_12), false);
  $enableScratchAllButton(this$static.gamePanel, false);
  this$static.isInAutoPlay || $trackEvent_0((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5), 'RevealAll - ' + this$static.board.mainArea.numberOfRevealedItems, '' + $getNumberOfTickets(this$static.model), (new Float_0(parseFloat_0($getCurrentBetPerTicket(this$static.model)))).value_0);
  $revealAll(this$static.board);
}

function $sendInconsistencyLog(this$static, logData){
  fatal(logData + ' btr: ' + this$static.model.btr_0, 119666, null);
}

function $setBonusDataToStorage(this$static, bonusWasPlayedOnce){
  $setDataToStorage_0(this$static.gameContainer, bonusWasPlayedOnce, 'true', 0);
}

function $showCurrentFinalPrize(this$static){
  $updateTotalWin_0(this$static.gamePanel, '' + this$static.currentTotalWin, false);
}

function $startPlayGame(this$static){
  var historyPls, i;
  $notifyBalanceChanged(this$static.gameDataObserver, this$static.model.balanceBeforeBet);
  $setCardNumber(this$static.gamePanel, this$static.model.cardNumber);
  historyPls = null;
  if (this$static.isHistoryMode) {
    if (!this$static.historyStepDO || this$static.historyStepDO.pls_0 == null || this$static.historyStepDO.pls_0.length == 0) {
      historyPls = '';
      if (this$static.model.isJockerBonus) {
        for (i = 1; i <= this$static.model.jockerBonus.revealedItems.size_0; ++i) {
          historyPls += '' + i;
          i != this$static.model.jockerBonus.revealedItems.size_0 && (historyPls += ',');
        }
      }
    }
     else {
      historyPls = this$static.historyStepDO.pls_0;
    }
  }
  $setData_4(this$static.board, this$static.model.mainGameSymbols, (this$static.model , new Double_0(this$static.model.mainGameWinPrizeFactor) , this$static.model , this$static.model.jockerBonus), this$static.model.warBonus, historyPls);
  this$static.isNonMandatoryResourcesLoaded && (this$static.itsAwinnerPopup.isVisible?$hidePopup_1(this$static.itsAwinnerPopup):this$static.bigWinPopup.isVisible && $hidePopup_0(this$static.bigWinPopup));
  if (this$static.isInAutoPlay) {
    $scratchAllHandler(this$static);
  }
   else {
    $setKeyboardEnabled((!instance_12 && (instance_12 = new KeyboardManager_0) , instance_12), true);
    $setBoardIsClickable(this$static.board);
    $switchPlayToScratchAllButton(this$static.gamePanel);
    $enableScratchAllButton(this$static.gamePanel, true);
  }
}

function $ticketsNumChangedHandler(this$static, newNumTicketsIndex){
  if (this$static.model.currentNumTicketsIndex == newNumTicketsIndex) {
    return;
  }
  !!this$static.itsAwinnerPopup && $hidePopup_1(this$static.itsAwinnerPopup);
  !!this$static.bigWinPopup && $hidePopup_0(this$static.bigWinPopup);
  $hideToolTipPanel(this$static);
  $notifyNumOfTicketChanged(this$static.gameDataObserver, newNumTicketsIndex);
  $notifyBetChanged(this$static.gameDataObserver, $getTotalBet(this$static.model));
  $setSelectedTicketsNum(this$static.board, $getNumberOfTickets(this$static.model), false);
  $resetGame(this$static);
}

function $updateJokerBonusWin(this$static, prizeAmount){
  this$static.currentTotalWin += prizeAmount;
  this$static.currentTotalWin = toDouble(fromDouble(round0(this$static.currentTotalWin * 100000))) / 100000;
  $updateTotalWin(this$static, this$static.currentTotalWin);
  $updateJokerBonusWin_0(this$static.gamePanel, prizeAmount);
  $stopJokerAnimation(this$static.allTimeAnimationController);
}

function $updateTotalWin(this$static, newTotalWinAmount){
  var amount;
  amount = convertFormattedAmountToNumber(this$static.model.totalWinAmount);
  newTotalWinAmount <= (new Double_0(__parseAndValidateDouble(amount))).value_0 && $setTotalWin_0(this$static.gamePanel, '' + newTotalWinAmount);
}

function $updateWarBonusWin(this$static, prizeAmount){
  this$static.currentTotalWin += prizeAmount;
  this$static.currentTotalWin = toDouble(fromDouble(round0(this$static.currentTotalWin * 100000))) / 100000;
  $updateTotalWin(this$static, this$static.currentTotalWin);
  $updateWarBonusWin_0(this$static.gamePanel, prizeAmount);
}

function Game431_0(){
  $clinit_Game431();
  this.isNonMandatoryResourcesLoaded = false;
  this.gameDataObserver = new GameDataObserver_0;
  this.gameCustomization = getQueenOfDiamondsCustomization();
}

function Game431(){
}

_ = Game431_0.prototype = Game431.prototype = new AbstractGame;
_.autoPlayButtonClicked_0 = function autoPlayButtonClicked(){
  $hideToolTipPanel(this);
}
;
_.gameNonMandatoryResourcesLoadCompleteHandler_0 = function gameNonMandatoryResourcesLoadCompleteHandler_0(loadedResources){
  this.isNonMandatoryResourcesLoaded = true;
  this.loadedResources.putAll(loadedResources);
  this.itsAwinnerPopup = new QueenOfDiamondsItsAWinnerPopup_0;
  $init_25(this.itsAwinnerPopup, loadedResources, this.gameLocations, new Game431$6_0(this));
  this.bigWinPopup = new QueenOfDiamondsBigWinPopup_0;
  $init_24(this.bigWinPopup, loadedResources, this.gameLocations, new Game431$7_0(this));
  this.allTimeAnimationController = this.gameCustomization.initAllTimeAnimationController(loadedResources, this.gameLocations, this.board.jokerLegendAnimItem);
  $gameNonMandatoryResourcesLoadCompleteHandler_0(this.board, loadedResources);
  this.gameCustomization.onGameNonMandatoryResourcesLoadCompleteHandler(loadedResources, this.gamePanel);
}
;
_.gamePreferredNonMandatoryResourcesLoadCompleteHandler_0 = function gamePreferredNonMandatoryResourcesLoadCompleteHandler_0(loadedResources){
  this.gameCustomization.gamePreferredNonMandatoryResourcesLoadCompleteHandler_1(loadedResources, this.panelManager.basePanel);
}
;
_.getClass$ = function getClass_511(){
  return Lwebgl_client_nf_games_g431_Game431_2_classLit;
}
;
_.getGameAPIVersion = function getGameAPIVersion(){
  return '3.00';
}
;
_.getGameExternalResourcesList = function getGameExternalResourcesList(){
  var self_0, fileref;
  return self_0 = this , fileref = document.createElement('link') , fileref.rel = 'stylesheet' , fileref.type = 'text/css' , fileref.href = 'https://fonts.googleapis.com/css?family=Open+Sans:400,700' , $doc.getElementsByTagName('head')[0].appendChild(fileref) , fileref.onload = self_0.handleCssFileLoaded() , this.gameCustomization.getGameExternalResourcesList();
}
;
_.getGameHeaderPanel = function getGameHeaderPanel_0(){
  var menuHeader;
  menuHeader = new FullScreenMenuHeader_0;
  menuHeader.element['className'] = 'FullMenu-header';
  $initBalance(get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_BALANCE'));
  ($clinit_FullScreenMenuHeader$MenuHtmlUI() , BALANCE).labelStyle = 'FullMenu-header-label';
  BALANCE.amountStyle = 'FullMenu-header-value';
  $initTotalBets(get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_TOTAL_COST'));
  TOTAL_BETS.labelStyle = 'FullMenu-header-label';
  TOTAL_BETS.amountStyle = 'FullMenu-header-value';
  $initTotalWins(get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_WINS'));
  TOTAL_WINS.labelStyle = 'FullMenu-header-label';
  TOTAL_WINS.amountStyle = 'FullMenu-header-value';
  $setBalance_3(menuHeader, ($clinit_PlayerDO() , !instance_3 && (instance_3 = new PlayerDO_0) , dynamicCast($get_3(playerInfo, paramsTag[0]), Q$String)));
  $register(this.gameDataObserver, menuHeader);
  return menuHeader;
}
;
_.getGameInfoMenuPanel = function getGameInfoMenuPanel_0(){
  var i, infoList1, infoList2, infoPanel, line, subTitleHtml, text;
  infoList1 = new List_0;
  infoList2 = new List_0;
  infoList1.element.style['width'] = '90%';
  infoList2.element.style['width'] = '90%';
  infoPanel = new VerticalPanel_0;
  infoPanel.element.style['width'] = '100%';
  for (i = 0; i < 5; ++i) {
    text = get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_INFO' + (i + 1));
    $addText(infoList1, text);
  }
  $add_8(infoPanel, infoList1);
  $setCellHorizontalAlignment(infoPanel, infoList1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  subTitleHtml = new HTML_1(get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_INFO_SUB_TITLE'));
  subTitleHtml.setStyleName_0('settings-menu-subtitle');
  $add_8(infoPanel, subTitleHtml);
  for (i = 5; i < 7; ++i) {
    text = get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_INFO' + (i + 1));
    $addText(infoList2, text);
  }
  $add_8(infoPanel, infoList2);
  $setCellHorizontalAlignment(infoPanel, infoList2, ALIGN_CENTER);
  line = new HTML_0;
  line.setStyleName_0('FullMenu-Panel-Line');
  $add_8(infoPanel, line);
  $setCellHorizontalAlignment(infoPanel, line, ALIGN_CENTER);
  return infoPanel;
}
;
_.getGameInfoMenuTitle = function getGameInfoMenuTitle_0(){
  return get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_INFO_TITLE');
}
;
_.getGameNonMandatoryResourcesList = function getGameNonMandatoryResourcesList(){
  return this.gameCustomization.getGameNonMandatoryResourcesList();
}
;
_.getGamePreferredNonMandatoryResourcesList = function getGamePreferredNonMandatoryResourcesList(){
  return this.gameCustomization.getGamePreferredNonMandatoryResourcesList_0(!this.isHistoryMode || envType_0 == ($clinit_Constants$CommonGamesConstants$ENVIRONMENT_TYPE() , WEB));
}
;
_.getGameRotateNonMandatoryResourcesList = function getGameRotateNonMandatoryResourcesList(){
  return this.gameCustomization.getGameRotateNonMandatoryResourcesList_0();
}
;
_.getGameRotateResourcesList = function getGameRotateResourcesList(){
  return null;
}
;
_.getGameSettingsMenuPanel = function getGameSettingsMenuPanel_0(){
  this.gameSettingsPanel = new FullScreenMenuGameSettingsPanel_1(get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_NUMBER_OF_TICKETS'), get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_COST_PER_TICKET'), get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_TOTAL_COST'));
  return this.gameSettingsPanel;
}
;
_.handleCssFileLoaded = function handleCssFileLoaded_0(){
  !!this.gamePanel && this.gamePanel.centerTexts();
  !!this.board && $centerTexts(this.board.bonusesManager);
  !!this.itsAwinnerPopup && $centerTexts_8(this.itsAwinnerPopup);
  !!this.bigWinPopup && $centerTexts_7(this.bigWinPopup);
}
;
_.isFreeGamesSupported = function isFreeGamesSupported(){
  return true;
}
;
_.isNotAutoPlaySupported = function isNotAutoPlaySupported(){
  return true;
}
;
_.isSoundsRequired = function isSoundsRequired(){
  return !this.isHistoryMode || envType_0 == ($clinit_Constants$CommonGamesConstants$ENVIRONMENT_TYPE() , WEB);
}
;
_.notifySoundEnableChanged = function notifySoundEnableChanged(isEnable){
  isEnable && (this.board.currentBonus == ($clinit_QueenOfDiamondsBoard$BonusType() , NONE_0)?this.isIntroSoundPlaying?getSoundManager().play_2(SOUND_FILE_URL, 'Intro_music', 16):getSoundManager().play_2(SOUND_FILE_URL, 'Ambience_sound', 15):this.board.bonusesManager.currentBonusGame.playAmbienceSound());
}
;
_.onBetChanged = function onBetChanged(betValue){
  $coinSizeChangedHandler(this, this.gameSettingsPanel.betSelector.betDenominationsIndex);
  $hideToolTipPanel(this);
}
;
_.onNumOfTicketsChanged = function onNumOfTicketsChanged(ticketNumber){
  var i, newIndex, numTicketsValuesRange;
  numTicketsValuesRange = this.model.numOfTicketsRange_0;
  newIndex = 1;
  for (i = 0; i < numTicketsValuesRange.length; ++i) {
    if ($equals('' + ticketNumber, numTicketsValuesRange[i])) {
      newIndex = i;
      break;
    }
  }
  $ticketsNumChangedHandler(this, newIndex);
}
;
_.optionsToggleOpen = function optionsToggleOpen(){
  $hideToolTipPanel(this);
}
;
_.pauseGame = function pauseGame_0(){
}
;
_.playGame_0 = function playGame(BTP){
  $playGame(this);
}
;
_.resumeGame_0 = function resumeGame_0(){
  $resetGame(this);
  $resumeAmbianceSounds(this, $isEnable(getSoundManager()));
}
;
_.castableTypeMap$ = makeCastMap([Q$FrameManagerListener, Q$ISoundEnableChangedListener]);
_.allTimeAnimationController = null;
_.bigWinPopup = null;
_.board = null;
_.currentTotalWin = 0;
_.delayBeforeNextGameTimer = null;
_.gameCustomization = null;
_.gameDataObserver = null;
_.gameLocations = null;
_.gameSettingsPanel = null;
_.infoPopup = null;
_.isBoardCompleteReset = false;
_.isGameDataRecieved = false;
_.isIntroSoundPlaying = false;
_.isNonMandatoryResourcesLoaded = false;
_.isSplashVisible = false;
_.itsAwinnerPopup = null;
_.model = null;
_.newRoundDelay = null;
_.splashScreen = null;
_.toolTipTimer = null;
_.tooltip = null;
var SOUND_FILE_URL;
function Game431$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function Game431$1(){
}

_ = Game431$1_0.prototype = Game431$1.prototype = new Timer;
_.getClass$ = function getClass_512(){
  return Lwebgl_client_nf_games_g431_Game431$1_2_classLit;
}
;
_.run = function run_8(){
  $show_2(this.this$0.tooltip);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function Game431$2_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function Game431$2(){
}

_ = Game431$2_0.prototype = Game431$2.prototype = new Timer;
_.getClass$ = function getClass_513(){
  return Lwebgl_client_nf_games_g431_Game431$2_2_classLit;
}
;
_.run = function run_9(){
  $playGame(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function Game431$3_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function Game431$3(){
}

_ = Game431$3_0.prototype = Game431$3.prototype = new Timer;
_.getClass$ = function getClass_514(){
  return Lwebgl_client_nf_games_g431_Game431$3_2_classLit;
}
;
_.run = function run_10(){
  $roundEndedHandler(this.this$0.gameContainer);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function Game431$4_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function Game431$4(){
}

_ = Game431$4_0.prototype = Game431$4.prototype = new Timer;
_.getClass$ = function getClass_515(){
  return Lwebgl_client_nf_games_g431_Game431$4_2_classLit;
}
;
_.run = function run_11(){
  $setCurrentPanel(this.this$0.panelManager, this.this$0.gamePanel, false);
  $schedule(this.this$0.toolTipTimer, 7000);
  $addSpaceBarKeyHandler(this.this$0.gamePanel);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function $onSplashScreenHide(this$static){
  var shouldShowSplashAgain;
  $trackSplashScrenClose((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5));
  this$static.this$0.gamePanel.element.style['zIndex'] = '1';
  $add_2(this$static.this$0.panelManager.basePanel, this$static.this$0.gamePanel, 0, 0);
  this$static.this$0.isSplashVisible = false;
  shouldShowSplashAgain = !this$static.this$0.splashScreen.checkbox.isChecked;
  $setDataToUserStorage(this$static.this$0, '' + shouldShowSplashAgain);
  $trackSelectEvent((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5), shouldShowSplashAgain);
  $schedule(this$static.val$delayBeforeRemovingSplashScreen, 1000);
}

function Game431$5_0(this$0, val$delayBeforeRemovingSplashScreen){
  this.this$0 = this$0;
  this.val$delayBeforeRemovingSplashScreen = val$delayBeforeRemovingSplashScreen;
}

function Game431$5(){
}

_ = Game431$5_0.prototype = Game431$5.prototype = new Object_0;
_.getClass$ = function getClass_516(){
  return Lwebgl_client_nf_games_g431_Game431$5_2_classLit;
}
;
_.this$0 = null;
_.val$delayBeforeRemovingSplashScreen = null;
function Game431$6_0(this$0){
  this.this$0 = this$0;
}

function Game431$6(){
}

_ = Game431$6_0.prototype = Game431$6.prototype = new Object_0;
_.getClass$ = function getClass_517(){
  return Lwebgl_client_nf_games_g431_Game431$6_2_classLit;
}
;
_.this$0 = null;
function Game431$7_0(this$0){
  this.this$0 = this$0;
}

function Game431$7(){
}

_ = Game431$7_0.prototype = Game431$7.prototype = new Object_0;
_.getClass$ = function getClass_518(){
  return Lwebgl_client_nf_games_g431_Game431$7_2_classLit;
}
;
_.this$0 = null;
function $clinit_QueenOfDiamondsModel(){
  $clinit_QueenOfDiamondsModel = nullMethod;
  casinoId == 192?(DEFAULT_TICKETS_NUMBER_ARRAY = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$CharSequence_$1, Q$Comparable_$1, Q$Object_$1, Q$String_$1]), Q$String, ['9', '18'])):(DEFAULT_TICKETS_NUMBER_ARRAY = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$CharSequence_$1, Q$Comparable_$1, Q$Object_$1, Q$String_$1]), Q$String, ['3', '6', '9', '12', '15', '18']));
}

function $clear_2(this$static){
  $setMainGameSymbols(this$static, new ArrayList_0);
  this$static.jockerBonus = new QueenOfDiamondsJokerBonusDO_0;
  this$static.warBonus = new QueenOfDiamondsWarBonusDO_0;
  this$static.isJockerBonus = false;
  this$static.isWarBonus = false;
}

function $createBTP(this$static){
  var params;
  params = new StringBuffer_0;
  params.impl.string += 'BTP';
  params.impl.string += '=';
  $append_3(params, valueOf_0(__parseAndValidateInt(this$static.numOfTicketsRange_0[this$static.currentNumTicketsIndex])).value_0);
  params.impl.string += '-';
  params.impl.string += '=';
  $append_5(params, this$static.betDenominations[this$static.currentBetDenominationIndex]);
  return params.impl.string;
}

function $getCurrentBetPerTicket(this$static){
  return this$static.betDenominations[this$static.currentBetDenominationIndex];
}

function $getItemFinalPrize(this$static, itemID){
  return dynamicCast($get_5(this$static.mainGameSymbols, itemID), Q$QueenOfDiamondsMainGameSymbolDO).finalPrize;
}

function $getNumberOfTickets(this$static){
  return valueOf_0(__parseAndValidateInt(this$static.numOfTicketsRange_0[this$static.currentNumTicketsIndex])).value_0;
}

function $getTotalBet(this$static){
  var bet, pennies;
  bet = __parseAndValidateDouble(this$static.betDenominations[this$static.currentBetDenominationIndex]);
  pennies = fromDouble(Math.round(bet * 100));
  return penniesToDollars(mul(pennies, fromInt(valueOf_0(__parseAndValidateInt(this$static.numOfTicketsRange_0[this$static.currentNumTicketsIndex])).value_0)));
}

function $getWinUpTo(this$static){
  var mpf, winUpToAmount;
  mpf = gameDO_0.maxPrizeFactor;
  mpf > 0?(winUpToAmount = multiplyAmounts(this$static.betDenominations[this$static.currentBetDenominationIndex], mpf)):(winUpToAmount = getWinUpToValues(this$static.currentBetDenominationIndex));
  return winUpToAmount;
}

function $isItIsAWinner(this$static){
  return (new Double_0(this$static.totalWinPrizeFactor)).value_0 >= 70 && (new Double_0(this$static.totalWinPrizeFactor)).value_0 < 400;
}

function $parseBonusesData(this$static, strBtr){
  var bonusGameData, bonusGames, i;
  bonusGames = $split(strBtr, '\\!-!', 0);
  for (i = 0; i < bonusGames.length; ++i) {
    bonusGameData = $split(bonusGames[i], '\\!,!', 0);
    if ($equals(bonusGameData[1], 'B1')) {
      $parseJokerBonusData(this$static, bonusGameData);
      this$static.isJockerBonus = true;
    }
     else {
      $parseWarBonusData(this$static, bonusGameData);
      this$static.isWarBonus = true;
    }
  }
}

function $parseJokerBonusData(this$static, bonusGameData){
  var data, i, paytableData, paytableDataStrings, prizeData, revealedItems, step, stepsData, symbolsData;
  this$static.jockerBonus = new QueenOfDiamondsJokerBonusDO_0;
  prizeData = $split(bonusGameData[0], '\\=', 0);
  __parseAndValidateDouble(prizeData[0]);
  $setPrizeAmount(this$static.jockerBonus, __parseAndValidateDouble(prizeData[1]));
  $setTicketCost(this$static.jockerBonus, __parseAndValidateDouble(this$static.betDenominations[this$static.currentBetDenominationIndex]));
  symbolsData = $split(bonusGameData[2], '\\;', 0);
  stepsData = $split(symbolsData[0], '\\-', 0);
  revealedItems = new ArrayList_0;
  for (i = 0; i < stepsData.length; ++i) {
    step = $split(stepsData[i], '\\!', 0);
    $add_10(revealedItems, new QueenOfDiamondsJokerBonusStepDO_0(step[0], __parseAndValidateInt(step[1]), __parseAndValidateInt(step[2])));
  }
  $setRevealedItems(this$static.jockerBonus, revealedItems);
  paytableDataStrings = $split(symbolsData[3], '\\,', 0);
  paytableData = new ArrayList_0;
  for (i = 0; i < paytableDataStrings.length; ++i) {
    data = $split(paytableDataStrings[i], '\\=', 0);
    $add_10(paytableData, new QueenOfDiamondsPrizeType_0(__parseAndValidateDouble(data[0]), __parseAndValidateDouble(data[1])));
  }
  $setBonusPaytable(this$static.jockerBonus, paytableData);
}

function $parseMainGameData(this$static, strBtr){
  var finalPrize, i, isWin, mainGameData, splitedSymbolsData, symbolData, symbolID, symbolSubType, symbolType, symbolsData, yourSymbolsData;
  mainGameData = $split(strBtr, '\\!-!', 0);
  this$static.mainGameWinPrizeFactor = __parseAndValidateDouble($split(mainGameData[0], '\\=', 0)[0]);
  $split(mainGameData[0], '\\=', 0)[1];
  yourSymbolsData = mainGameData[2];
  symbolsData = $split(yourSymbolsData, ';', 0);
  for (i = 0; i < symbolsData.length; ++i) {
    splitedSymbolsData = $split(symbolsData[i], '!', 0);
    isWin = $equals('1', splitedSymbolsData[0]);
    symbolID = $equals('', splitedSymbolsData[1])?0:__parseAndValidateInt(splitedSymbolsData[1]);
    symbolType = splitedSymbolsData[2];
    symbolSubType = splitedSymbolsData[3];
    __parseAndValidateDouble(splitedSymbolsData[4]);
    if (splitedSymbolsData.length > 5) {
      __parseAndValidateDouble($split(splitedSymbolsData[5], '=', 0)[1]);
      finalPrize = __parseAndValidateDouble($split(splitedSymbolsData[6], '=', 0)[1]);
      symbolData = new QueenOfDiamondsMainGameSymbolDO_0(symbolID, symbolType, symbolSubType, isWin, finalPrize);
    }
     else {
      symbolData = new QueenOfDiamondsMainGameSymbolDO_1(symbolID, symbolType, symbolSubType, isWin);
    }
    $add_10(this$static.mainGameSymbols, symbolData);
  }
}

function $parseResponse(this$static, resultDO){
  var gameBoardData, gameBoardsData, splitedBTR, splitedtotalWins, totalWins;
  $clear_2(this$static);
  this$static.btr_0 = resultDO.btr_0;
  this$static.balanceBeforeBet = resultDO.balanceBefore_0;
  this$static.balanceAfterBet = resultDO.balanceAfter_0;
  this$static.cardNumber = resultDO.serialNumber_0;
  splitedBTR = $split(resultDO.btr_0, '\\^', 0);
  this$static.isWin = $equals('1', splitedBTR[0]);
  totalWins = splitedBTR[1];
  splitedtotalWins = $split(totalWins, '=', 0);
  this$static.totalWinPrizeFactor = __parseAndValidateDouble(splitedtotalWins[0]);
  this$static.totalWinAmount = penniesToDollars(dollarstopennies(splitedtotalWins[1]));
  gameBoardsData = $split(splitedBTR[2], '!;!', 0);
  gameBoardData = $split(gameBoardsData[0], ';-;', -1);
  this$static.jockerBonus = null;
  this$static.warBonus = null;
  $parseMainGameData(this$static, gameBoardData[1]);
  isEmpty_4(gameBoardData[2]) || $parseBonusesData(this$static, gameBoardData[2]);
  $setPLSData(this$static, '');
}

function $parseWarBonusData(this$static, bonusGameData){
  var accumulatedPrizeData, gameSteps, i, playerCards, prizeData, queenCards, step, stepPrizeData, stepsData;
  this$static.warBonus = new QueenOfDiamondsWarBonusDO_0;
  prizeData = $split(bonusGameData[0], '\\=', 0);
  __parseAndValidateDouble(prizeData[0]);
  $setPrizeAmount_0(this$static.warBonus, __parseAndValidateDouble(prizeData[1]));
  $setTicketCost_0(this$static.warBonus, __parseAndValidateDouble(this$static.betDenominations[this$static.currentBetDenominationIndex]));
  stepsData = $split(bonusGameData[2], '\\-', 0);
  gameSteps = new ArrayList_0;
  for (i = 0; i < stepsData.length; ++i) {
    step = $split(stepsData[i], '\\!', 0);
    queenCards = $split(step[1], '\\,', 0);
    playerCards = $split(step[2], '\\,', 0);
    stepPrizeData = $split(step[4], '\\=', 0);
    accumulatedPrizeData = $split(step[5], '\\=', 0);
    $add_10(gameSteps, new QueenOfDiamondsWarBonusStepDO_0($equals(step[0], '1'), queenCards, playerCards, __parseAndValidateInt(step[3]), new QueenOfDiamondsPrizeType_0(__parseAndValidateDouble(stepPrizeData[1]), __parseAndValidateInt(stepPrizeData[0])), new QueenOfDiamondsPrizeType_0(__parseAndValidateDouble(accumulatedPrizeData[1]), __parseAndValidateInt(accumulatedPrizeData[0]))));
  }
  $setGameSteps(this$static.warBonus, gameSteps);
}

function $setMainGameSymbols(this$static, mainGameSymbols){
  this$static.mainGameSymbols = mainGameSymbols;
}

function $setPLSData(this$static, PLSData){
  PLSData == null && (PLSData = '');
  this$static.PLSData = PLSData;
}

function QueenOfDiamondsModel_0(betDenominations, defaultBetDenominationIndex, numOfTicketsRange, numTicket){
  $clinit_QueenOfDiamondsModel();
  var i;
  this.betDenominations = betDenominations;
  this.currentBetDenominationIndex = defaultBetDenominationIndex;
  this.numOfTicketsRange_0 = numOfTicketsRange;
  this.currentNumTicketsIndex = 0;
  for (i = 0; i < this.numOfTicketsRange_0.length; ++i) {
    valueOf_0(__parseAndValidateInt(this.numOfTicketsRange_0[i])).value_0 == numTicket && (this.currentNumTicketsIndex = i);
  }
  this.PLSData = '';
}

function QueenOfDiamondsModel(){
}

_ = QueenOfDiamondsModel_0.prototype = QueenOfDiamondsModel.prototype = new Object_0;
_.getClass$ = function getClass_519(){
  return Lwebgl_client_nf_games_g431_QueenOfDiamondsModel_2_classLit;
}
;
_.setBalance_0 = function setBalance_1(balance){
}
;
_.setBetPerLine = function setBetPerLine(bet){
  var i;
  for (i = 0; i < this.betDenominations.length; ++i) {
    if ($equals(this.betDenominations[i], bet)) {
      break;
    }
  }
  this.currentBetDenominationIndex = i;
}
;
_.setNumOfTickets = function setNumOfTickets(newNumTicketsIndex){
  this.currentNumTicketsIndex = newNumTicketsIndex;
}
;
_.setTotalBet = function setTotalBet(bet){
}
;
_.setTotalWin = function setTotalWin(totalWin){
}
;
_.setWinUpTo = function setWinUpTo(winUpTo){
}
;
_.castableTypeMap$ = makeCastMap([Q$IGameDataObserver, Q$IPlatformsGameDataObserver]);
_.PLSData = null;
_.balanceAfterBet = null;
_.balanceBeforeBet = null;
_.betDenominations = null;
_.btr_0 = null;
_.cardNumber = null;
_.currentBetDenominationIndex = 0;
_.currentNumTicketsIndex = 0;
_.isJockerBonus = false;
_.isWarBonus = false;
_.isWin = false;
_.jockerBonus = null;
_.mainGameSymbols = null;
_.mainGameWinPrizeFactor = 0;
_.numOfTicketsRange_0 = null;
_.totalWinAmount = null;
_.totalWinPrizeFactor = 0;
_.warBonus = null;
var DEFAULT_TICKETS_NUMBER_ARRAY = null;
function $clinit_QueenOfDiamondsResources(){
  $clinit_QueenOfDiamondsResources = nullMethod;
  LOCATIONS_GAME = new QueenOfDiamondsResources_0('LOCATIONS_GAME', 0, '/locations');
  MENU_LOGO = new QueenOfDiamondsResources_0('MENU_LOGO', 1, '/menuLogo');
  BACKGROUND_0 = new QueenOfDiamondsResources_0('BACKGROUND', 2, '/bg_Horz');
  DARK_BG = new QueenOfDiamondsResources_0('DARK_BG', 3, '/Dark_BG');
  CARD_SELECT = new QueenOfDiamondsResources_0('CARD_SELECT', 4, '/Card_Select');
  JOKER_WIN = new QueenOfDiamondsResources_0('JOKER_WIN', 5, '/Joker_Win');
  SPLASH = new QueenOfDiamondsResources_0('SPLASH', 6, '/splash');
  DONT_SHOW_MARKER = new QueenOfDiamondsResources_0('DONT_SHOW_MARKER', 7, '/Dont_Show_Marker');
  CONTINUE_BTN = new QueenOfDiamondsResources_0('CONTINUE_BTN', 8, '/Continue_Btn');
  BIG_WIN_DIAMOND_1 = new QueenOfDiamondsResources_0('BIG_WIN_DIAMOND_1', 9, '/BigWin_Diamond_01');
  BIG_WIN_DIAMOND_2 = new QueenOfDiamondsResources_0('BIG_WIN_DIAMOND_2', 10, '/BigWin_Diamond_02');
  BIG_WIN_DIAMOND_3 = new QueenOfDiamondsResources_0('BIG_WIN_DIAMOND_3', 11, '/BigWin_Diamond_03');
  BIG_WIN_TITLE_BG = new QueenOfDiamondsResources_0('BIG_WIN_TITLE_BG', 12, '/Big_Win_title');
  BIG_WIN_AMOUNT_BG = new QueenOfDiamondsResources_0('BIG_WIN_AMOUNT_BG', 13, '/Big_Win_Amount');
  BIG_WIN_CHAIN = new QueenOfDiamondsResources_0('BIG_WIN_CHAIN', 14, '/BigWin_Chain');
  ITS_A_WINNER = new QueenOfDiamondsResources_0('ITS_A_WINNER', 15, '/ItsAwinner');
  STICK = new QueenOfDiamondsResources_0('STICK', 16, '/stick');
  INFO_STICK = new QueenOfDiamondsResources_0('INFO_STICK', 17, '/info_stick');
  INFO = new QueenOfDiamondsResources_0('INFO', 18, '/info');
  INFO_CONTENT_3 = new QueenOfDiamondsResources_0('INFO_CONTENT_3', 19, '/Info_Content_War');
  INFO_CONTENT_2 = new QueenOfDiamondsResources_0('INFO_CONTENT_2', 20, '/Info_Content_Joker');
  INFO_CONTENT_1 = new QueenOfDiamondsResources_0('INFO_CONTENT_1', 21, '/Info_Content_Main');
  JOKER_BONUS_POPUP_BG = new QueenOfDiamondsResources_0('JOKER_BONUS_POPUP_BG', 22, '/Joker_Popup');
  JOKER_BONUS_POPUP_BTN = new QueenOfDiamondsResources_0('JOKER_BONUS_POPUP_BTN', 23, '/Joker_Popup_Btn');
  JOKER_BONUS_POPUP_TXT_IMG = new QueenOfDiamondsResources_0('JOKER_BONUS_POPUP_TXT_IMG', 24, '/jokePopupText');
  JOKER_BONUS_SUMMARY_POPUP_TXT_IMG = new QueenOfDiamondsResources_0('JOKER_BONUS_SUMMARY_POPUP_TXT_IMG', 25, '/jokerSummeryPopUpText');
  WAR_BONUS_POPUP_BG = new QueenOfDiamondsResources_0('WAR_BONUS_POPUP_BG', 26, '/War_Popup');
  WAR_BONUS_POPUP_BTN = new QueenOfDiamondsResources_0('WAR_BONUS_POPUP_BTN', 27, '/War_Popup_Btn');
  WAR_BONUS_POPUP_TXT_IMG = new QueenOfDiamondsResources_0('WAR_BONUS_POPUP_TXT_IMG', 28, '/warPopupText');
  WAR_BONUS_SUMMARY_POPUP_TXT_IMG = new QueenOfDiamondsResources_0('WAR_BONUS_SUMMARY_POPUP_TXT_IMG', 29, '/warSummeryPopUpText');
  CARDS = new QueenOfDiamondsResources_0('CARDS', 30, '/Cards');
  CARD_FLIP = new QueenOfDiamondsResources_0('CARD_FLIP', 31, '/Card_Flip');
  GOLD_CARD_FLIP = new QueenOfDiamondsResources_0('GOLD_CARD_FLIP', 32, '/Gold_Card_Flip');
  JOKER_CARD = new QueenOfDiamondsResources_0('JOKER_CARD', 33, '/Joker_Card');
  PLAY_ALL_TIME = new QueenOfDiamondsResources_0('PLAY_ALL_TIME', 34, '/Play_AllTime');
  QUEEN_CARD = new QueenOfDiamondsResources_0('QUEEN_CARD', 35, '/Queen_card');
  QUEEN_CARD_WIN = new QueenOfDiamondsResources_0('QUEEN_CARD_WIN', 36, '/Queen_Card_Win');
  WIN_FRAME = new QueenOfDiamondsResources_0('WIN_FRAME', 37, '/Win_Frame');
  GENERAL_WIN = new QueenOfDiamondsResources_0('GENERAL_WIN', 38, '/General_Win');
  TRUMPET = new QueenOfDiamondsResources_0('TRUMPET', 39, '/Trumpet');
  TRUMPET_rotate = new QueenOfDiamondsResources_0('TRUMPET_rotate', 40, '/Trumpet_rotate');
  LOGO_ALL_TIME = new QueenOfDiamondsResources_0('LOGO_ALL_TIME', 41, '/Logo_Alltime');
  JOKER_COIN = new QueenOfDiamondsResources_0('JOKER_COIN', 42, '/Joker_Coin');
  JOKER_LEGEND_TEXT = new QueenOfDiamondsResources_0('JOKER_LEGEND_TEXT', 43, '/Joker_legend');
  WAR_BONUS = new QueenOfDiamondsResources_0('WAR_BONUS', 44, '/War_Bonus');
  WAR_LEGEND_TEXT = new QueenOfDiamondsResources_0('WAR_LEGEND_TEXT', 45, '/War_legend');
  LEGEND_PRIZE = new QueenOfDiamondsResources_0('LEGEND_PRIZE', 46, '/Legend_Prize');
  BUTTON_PLAY = new QueenOfDiamondsResources_0('BUTTON_PLAY', 47, '/play_btn');
  BUTTON_REVEAL_ALL = new QueenOfDiamondsResources_0('BUTTON_REVEAL_ALL', 48, '/reveal_btn');
  I_BTN = new QueenOfDiamondsResources_0('I_BTN', 49, '/i_btn');
  INFO_X_BTN = new QueenOfDiamondsResources_0('INFO_X_BTN', 50, '/Info_X_Btn');
  TICKET_COST_MINUS = new QueenOfDiamondsResources_0('TICKET_COST_MINUS', 51, '/Ticket_Cost_Minus');
  TICKET_COST_PLUS = new QueenOfDiamondsResources_0('TICKET_COST_PLUS', 52, '/Ticket_Cost_Plus');
  TICKET_NUM_MINUS = new QueenOfDiamondsResources_0('TICKET_NUM_MINUS', 53, '/Ticket_Num_Minus');
  TICKET_NUM_PLUS = new QueenOfDiamondsResources_0('TICKET_NUM_PLUS', 54, '/Ticket_Num_Plus');
  TOOL_TIP = new QueenOfDiamondsResources_0('TOOL_TIP', 55, '/tooltip');
  JOKER_BONUS_BG = new QueenOfDiamondsResources_0('JOKER_BONUS_BG', 56, '/Joker_bg_Horz');
  JOKER_BONUS_INFO_BUTTON = new QueenOfDiamondsResources_0('JOKER_BONUS_INFO_BUTTON', 57, '/i_btn_joker_bonus');
  JOKER_BONUS_STRIKE_ANIM = new QueenOfDiamondsResources_0('JOKER_BONUS_STRIKE_ANIM', 58, '/XXX');
  BONUSES_CARDS = new QueenOfDiamondsResources_0('BONUSES_CARDS', 59, '/Cards_01');
  JOKER_BONUS_CARD_FLIP = new QueenOfDiamondsResources_0('JOKER_BONUS_CARD_FLIP', 60, '/Joker_Bonus_Card_Flip');
  JOKER_BONUS_CARD = new QueenOfDiamondsResources_0('JOKER_BONUS_CARD', 61, '/Joker_Bonus_Card');
  JOKER_BONUS_CARD_X = new QueenOfDiamondsResources_0('JOKER_BONUS_CARD_X', 62, '/Joker_Bonus_Card_X');
  JOKER_BONUS_WIN_FRAME = new QueenOfDiamondsResources_0('JOKER_BONUS_WIN_FRAME', 63, '/Joker_Bonus_Win_Frame');
  JOKER_BONUS_NAVIGATOR = new QueenOfDiamondsResources_0('JOKER_BONUS_NAVIGATOR', 64, '/navigator_ON');
  WAR_BONUS_BG = new QueenOfDiamondsResources_0('WAR_BONUS_BG', 65, '/WarBonusBg');
  WAR_BONUS_BATTLE_BUTTON = new QueenOfDiamondsResources_0('WAR_BONUS_BATTLE_BUTTON', 66, '/WarBonusbattleButton');
  WAR_BONUS_INFO_BUTTON = new QueenOfDiamondsResources_0('WAR_BONUS_INFO_BUTTON', 67, '/WarBonusInfoButton');
  WAR_BONUS_ALL_QUEEN = new QueenOfDiamondsResources_0('WAR_BONUS_ALL_QUEEN', 68, '/warBonusblueAll');
  WAR_BONUS_FLIP_QUEEN = new QueenOfDiamondsResources_0('WAR_BONUS_FLIP_QUEEN', 69, '/warBonusBlueFront1');
  WAR_BONUS_WIN_LOSE_QUEEN = new QueenOfDiamondsResources_0('WAR_BONUS_WIN_LOSE_QUEEN', 70, '/warBonusBlueFront');
  WAR_BONUS_FALL_QUEEN = new QueenOfDiamondsResources_0('WAR_BONUS_FALL_QUEEN', 71, '/warBonusBlueFrontFall');
  WAR_BONUS_ALL_PLAYER = new QueenOfDiamondsResources_0('WAR_BONUS_ALL_PLAYER', 72, '/warBonusredAll');
  WAR_BONUS_FLIP_PLAYER = new QueenOfDiamondsResources_0('WAR_BONUS_FLIP_PLAYER', 73, '/warBonusRedFront1');
  WAR_BONUS_WIN_LOSE_PLAYER = new QueenOfDiamondsResources_0('WAR_BONUS_WIN_LOSE_PLAYER', 74, '/warBonusRedFront');
  WAR_BONUS_FALL_PLAYER = new QueenOfDiamondsResources_0('WAR_BONUS_FALL_PLAYER', 75, '/warBonusRedFrontFall');
  WAR_BONUS_SWORDS = new QueenOfDiamondsResources_0('WAR_BONUS_SWORDS', 76, '/warBonusswords');
  WAR_BONUS_POOF = new QueenOfDiamondsResources_0('WAR_BONUS_POOF', 77, '/poof');
  WAR_BONUS_DOOR = new QueenOfDiamondsResources_0('WAR_BONUS_DOOR', 78, '/door');
  WAR_BONUS_DIAMOND = new QueenOfDiamondsResources_0('WAR_BONUS_DIAMOND', 79, '/winDiamond');
  WAR_BONUS_WIN_FLAG = new QueenOfDiamondsResources_0('WAR_BONUS_WIN_FLAG', 80, '/warBonusFlag');
  WAR_BONUS_CALL_TO_ACTION = new QueenOfDiamondsResources_0('WAR_BONUS_CALL_TO_ACTION', 81, '/battleBtnAnim');
  WAR_BONUS_ALL_QUEEN_LIGHT_ANIM = new QueenOfDiamondsResources_0('WAR_BONUS_ALL_QUEEN_LIGHT_ANIM', 82, '/progressiveWarBonusblueAll');
  WAR_BONUS_ALL_PLAYER_LIGHT_ANIM = new QueenOfDiamondsResources_0('WAR_BONUS_ALL_PLAYER_LIGHT_ANIM', 83, '/progressiveWarBonusredAll');
  WAR_BONUS_WIN_FRAME = new QueenOfDiamondsResources_0('WAR_BONUS_WIN_FRAME', 84, '/warBonusWinFrame');
  WAR_BONUS_WIN_FRAME_QUEEN = new QueenOfDiamondsResources_0('WAR_BONUS_WIN_FRAME_QUEEN', 85, '/warBonusWinFrameQueen');
  SOUND = new QueenOfDiamondsResources_0('SOUND', 86, '/gameSound');
  $VALUES_19 = initValues(_3Lwebgl_client_nf_games_g431_QueenOfDiamondsResources_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$Comparable_$1, Q$Object_$1]), Q$QueenOfDiamondsResources, [LOCATIONS_GAME, MENU_LOGO, BACKGROUND_0, DARK_BG, CARD_SELECT, JOKER_WIN, SPLASH, DONT_SHOW_MARKER, CONTINUE_BTN, BIG_WIN_DIAMOND_1, BIG_WIN_DIAMOND_2, BIG_WIN_DIAMOND_3, BIG_WIN_TITLE_BG, BIG_WIN_AMOUNT_BG, BIG_WIN_CHAIN, ITS_A_WINNER, STICK, INFO_STICK, INFO, INFO_CONTENT_3, INFO_CONTENT_2, INFO_CONTENT_1, JOKER_BONUS_POPUP_BG, JOKER_BONUS_POPUP_BTN, JOKER_BONUS_POPUP_TXT_IMG, JOKER_BONUS_SUMMARY_POPUP_TXT_IMG, WAR_BONUS_POPUP_BG, WAR_BONUS_POPUP_BTN, WAR_BONUS_POPUP_TXT_IMG, WAR_BONUS_SUMMARY_POPUP_TXT_IMG, CARDS, CARD_FLIP, GOLD_CARD_FLIP, JOKER_CARD, PLAY_ALL_TIME, QUEEN_CARD, QUEEN_CARD_WIN, WIN_FRAME, GENERAL_WIN, TRUMPET, TRUMPET_rotate, LOGO_ALL_TIME, JOKER_COIN, JOKER_LEGEND_TEXT, WAR_BONUS, WAR_LEGEND_TEXT, LEGEND_PRIZE, BUTTON_PLAY, BUTTON_REVEAL_ALL, I_BTN, INFO_X_BTN, TICKET_COST_MINUS, TICKET_COST_PLUS, TICKET_NUM_MINUS, TICKET_NUM_PLUS, TOOL_TIP, JOKER_BONUS_BG, JOKER_BONUS_INFO_BUTTON, JOKER_BONUS_STRIKE_ANIM, BONUSES_CARDS, JOKER_BONUS_CARD_FLIP, JOKER_BONUS_CARD, JOKER_BONUS_CARD_X, JOKER_BONUS_WIN_FRAME, JOKER_BONUS_NAVIGATOR, WAR_BONUS_BG, WAR_BONUS_BATTLE_BUTTON, WAR_BONUS_INFO_BUTTON, WAR_BONUS_ALL_QUEEN, WAR_BONUS_FLIP_QUEEN, WAR_BONUS_WIN_LOSE_QUEEN, WAR_BONUS_FALL_QUEEN, WAR_BONUS_ALL_PLAYER, WAR_BONUS_FLIP_PLAYER, WAR_BONUS_WIN_LOSE_PLAYER, WAR_BONUS_FALL_PLAYER, WAR_BONUS_SWORDS, WAR_BONUS_POOF, WAR_BONUS_DOOR, WAR_BONUS_DIAMOND, WAR_BONUS_WIN_FLAG, WAR_BONUS_CALL_TO_ACTION, WAR_BONUS_ALL_QUEEN_LIGHT_ANIM, WAR_BONUS_ALL_PLAYER_LIGHT_ANIM, WAR_BONUS_WIN_FRAME, WAR_BONUS_WIN_FRAME_QUEEN, SOUND]);
}

function QueenOfDiamondsResources_0(enum$name, enum$ordinal, path){
  Enum_0.call(this, enum$name, enum$ordinal);
  this.path = path;
}

function valueOf_3(name_0){
  $clinit_QueenOfDiamondsResources();
  return valueOf(($clinit_QueenOfDiamondsResources$Map() , $MAP_0), name_0);
}

function values_20(){
  $clinit_QueenOfDiamondsResources();
  return $VALUES_19;
}

function QueenOfDiamondsResources(){
}

_ = QueenOfDiamondsResources_0.prototype = QueenOfDiamondsResources.prototype = new Enum;
_.getClass$ = function getClass_520(){
  return Lwebgl_client_nf_games_g431_QueenOfDiamondsResources_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Comparable, Q$Enum, Q$QueenOfDiamondsResources]);
_.path = null;
var $VALUES_19, BACKGROUND_0, BIG_WIN_AMOUNT_BG, BIG_WIN_CHAIN, BIG_WIN_DIAMOND_1, BIG_WIN_DIAMOND_2, BIG_WIN_DIAMOND_3, BIG_WIN_TITLE_BG, BONUSES_CARDS, BUTTON_PLAY, BUTTON_REVEAL_ALL, CARDS, CARD_FLIP, CARD_SELECT, CONTINUE_BTN, DARK_BG, DONT_SHOW_MARKER, GENERAL_WIN, GOLD_CARD_FLIP, INFO, INFO_CONTENT_1, INFO_CONTENT_2, INFO_CONTENT_3, INFO_STICK, INFO_X_BTN, ITS_A_WINNER, I_BTN, JOKER_BONUS_BG, JOKER_BONUS_CARD, JOKER_BONUS_CARD_FLIP, JOKER_BONUS_CARD_X, JOKER_BONUS_INFO_BUTTON, JOKER_BONUS_NAVIGATOR, JOKER_BONUS_POPUP_BG, JOKER_BONUS_POPUP_BTN, JOKER_BONUS_POPUP_TXT_IMG, JOKER_BONUS_STRIKE_ANIM, JOKER_BONUS_SUMMARY_POPUP_TXT_IMG, JOKER_BONUS_WIN_FRAME, JOKER_CARD, JOKER_COIN, JOKER_LEGEND_TEXT, JOKER_WIN, LEGEND_PRIZE, LOCATIONS_GAME, LOGO_ALL_TIME, MENU_LOGO, PLAY_ALL_TIME, QUEEN_CARD, QUEEN_CARD_WIN, SOUND, SPLASH, STICK, TICKET_COST_MINUS, TICKET_COST_PLUS, TICKET_NUM_MINUS, TICKET_NUM_PLUS, TOOL_TIP, TRUMPET, TRUMPET_rotate, WAR_BONUS, WAR_BONUS_ALL_PLAYER, WAR_BONUS_ALL_PLAYER_LIGHT_ANIM, WAR_BONUS_ALL_QUEEN, WAR_BONUS_ALL_QUEEN_LIGHT_ANIM, WAR_BONUS_BATTLE_BUTTON, WAR_BONUS_BG, WAR_BONUS_CALL_TO_ACTION, WAR_BONUS_DIAMOND, WAR_BONUS_DOOR, WAR_BONUS_FALL_PLAYER, WAR_BONUS_FALL_QUEEN, WAR_BONUS_FLIP_PLAYER, WAR_BONUS_FLIP_QUEEN, WAR_BONUS_INFO_BUTTON, WAR_BONUS_POOF, WAR_BONUS_POPUP_BG, WAR_BONUS_POPUP_BTN, WAR_BONUS_POPUP_TXT_IMG, WAR_BONUS_SUMMARY_POPUP_TXT_IMG, WAR_BONUS_SWORDS, WAR_BONUS_WIN_FLAG, WAR_BONUS_WIN_FRAME, WAR_BONUS_WIN_FRAME_QUEEN, WAR_BONUS_WIN_LOSE_PLAYER, WAR_BONUS_WIN_LOSE_QUEEN, WAR_LEGEND_TEXT, WIN_FRAME;
function $clinit_QueenOfDiamondsResources$Map(){
  $clinit_QueenOfDiamondsResources$Map = nullMethod;
  $MAP_0 = createValueOfMap(($clinit_QueenOfDiamondsResources() , $VALUES_19));
}

var $MAP_0;
function $hide_1(this$static){
  if (!(this$static.element.style.display != 'none')) {
    return;
  }
  setVisible(this$static.element, false);
  $removeFromParent(this$static);
}

function $show_2(this$static){
  if (!(this$static.element.style.display != 'none')) {
    $add_2(this$static.container, this$static, 0, 0);
    $setWidgetPosition(this$static.container, this$static, this$static.panelLocation.x_0 - (this$static.panelLocation.width_0 >> 1), this$static.panelLocation.y_0 - (this$static.panelLocation.height_0 >> 1));
    this$static.popupPanel.element.style.opacity = 0;
    setVisible(this$static.element, true);
    $setStyleName_0(this$static.popupPanel, 'tooltipFadeIn');
  }
}

function QueenOfDiamondsTooltip_0(gamePanel, location_0, bgImage){
  var htmlText, verticalPanel;
  this.container = gamePanel;
  this.panelLocation = location_0;
  this.popupPanel = new VerticalPanel_0;
  $setWidth(this.popupPanel, '' + this.panelLocation.width_0 + ($clinit_Style$Unit() , PX));
  this.popupPanel.element.style['zIndex'] = '5010';
  this.popupPanel.element.style['backgroundImage'] = 'url(' + bgImage.image.src + ')';
  $setPixelSize(this.popupPanel, $getWidth(bgImage), $getHeight(bgImage));
  $add_8(this.popupPanel, (verticalPanel = new VerticalPanel_0 , verticalPanel.element.style['width'] = '100%' , $setHorizontalAlignment_1(verticalPanel, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setVerticalAlignment(verticalPanel, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE)) , htmlText = new HTML_0 , $add_8(verticalPanel, htmlText) , $setCellHorizontalAlignment(verticalPanel, htmlText, ALIGN_CENTER) , verticalPanel));
  $initWidget(this, this.popupPanel);
  setVisible(this.element, false);
}

function QueenOfDiamondsTooltip(){
}

_ = QueenOfDiamondsTooltip_0.prototype = QueenOfDiamondsTooltip.prototype = new Composite;
_.getClass$ = function getClass_521(){
  return Lwebgl_client_nf_games_g431_QueenOfDiamondsTooltip_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]);
_.container = null;
_.panelLocation = null;
_.popupPanel = null;
function $init_17(this$static, loadedResources, gameLocations, isPlayJokerCoin, jokerLegendAnimItem){
  var logoAnimationBank;
  this$static.isPlayLogo = true;
  this$static.isPlayJokerCoin = isPlayJokerCoin;
  logoAnimationBank = dynamicCast(loadedResources.get(($clinit_QueenOfDiamondsResources() , LOGO_ALL_TIME).path), Q$AnimationBank);
  this$static.logoAnim = new AnimGameItem_0(0, new AnimationController_1(logoAnimationBank), true);
  $setLocation_3(this$static.logoAnim, dynamicCast(gameLocations.locationsMap.get('BOARD_LOGO_ALL_TIME'), Q$Location));
  $setAnimFinishedListener_0(this$static.logoAnim, new QueenOfDiamondsAllTimeAnimationController$3_0(this$static));
  if (isPlayJokerCoin) {
    this$static.jokerAnim = jokerLegendAnimItem;
    $setAnimFinishedListener_0(this$static.jokerAnim, this$static);
  }
}

function $preRender_0(this$static){
  this$static.isPlaying && this$static.isPlayLogo && $preRender_7(this$static.logoAnim);
}

function $render_0(this$static, g){
  this$static.isPlaying && this$static.isPlayLogo && $render_9(this$static.logoAnim, g);
}

function $showJokerAnimation(this$static){
  if (this$static.isPlaying && this$static.isPlayJokerCoin) {
    this$static.isJokerPlaying = true;
    this$static.jokerAnim.isVisible = true;
    $triggerItemAction(this$static.jokerAnim, 'coin');
  }
}

function $showLogoAnimation(this$static){
  if (this$static.isPlaying && this$static.isPlayLogo) {
    this$static.logoAnim.isVisible = true;
    $triggerItemAction(this$static.logoAnim, 'Logo');
  }
}

function $startAllTimeAnimations(this$static){
  if (this$static.isPlaying) {
    this$static.isJokerPlaying || $showJokerAnimation(this$static);
  }
   else {
    this$static.isPlaying = true;
    this$static.isPlayLogo && $showLogoAnimation(this$static);
    this$static.isPlayJokerCoin && $showJokerAnimation(this$static);
  }
}

function $stopAllTimeAnimations(this$static){
  if (!this$static.isPlaying)
    return;
  this$static.isPlaying = false;
  this$static.isJokerPlaying = false;
  $cancel_0(this$static.logoDelay);
  this$static.isPlayLogo && (this$static.logoAnim.isVisible = false , undefined);
  $stopJokerAnimation(this$static);
}

function $stopJokerAnimation(this$static){
  if (this$static.isPlayJokerCoin) {
    this$static.isJokerPlaying = false;
    $cancel_0(this$static.jokerCoinDelay);
  }
}

function QueenOfDiamondsAllTimeAnimationController_0(){
  this.isPlaying = false;
  this.isJokerPlaying = false;
  this.logoDelay = new QueenOfDiamondsAllTimeAnimationController$1_0(this);
  this.jokerCoinDelay = new QueenOfDiamondsAllTimeAnimationController$2_0(this);
}

function QueenOfDiamondsAllTimeAnimationController(){
}

_ = QueenOfDiamondsAllTimeAnimationController_0.prototype = QueenOfDiamondsAllTimeAnimationController.prototype = new Object_0;
_.getClass$ = function getClass_522(){
  return Lwebgl_client_nf_games_g431_allTime_QueenOfDiamondsAllTimeAnimationController_2_classLit;
}
;
_.handleGameItemFinished = function handleGameItemFinished_1(finishedAnimItem){
  $cancel_0(this.jokerCoinDelay);
  $schedule(this.jokerCoinDelay, round_int(10000 + Math.random() * 10000));
}
;
_.castableTypeMap$ = makeCastMap([Q$Renderable, Q$IGameItemFinishedListener]);
_.isJokerPlaying = false;
_.isPlayJokerCoin = false;
_.isPlayLogo = false;
_.isPlaying = false;
_.jokerAnim = null;
_.jokerCoinDelay = null;
_.logoAnim = null;
_.logoDelay = null;
function QueenOfDiamondsAllTimeAnimationController$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsAllTimeAnimationController$1(){
}

_ = QueenOfDiamondsAllTimeAnimationController$1_0.prototype = QueenOfDiamondsAllTimeAnimationController$1.prototype = new Timer;
_.getClass$ = function getClass_523(){
  return Lwebgl_client_nf_games_g431_allTime_QueenOfDiamondsAllTimeAnimationController$1_2_classLit;
}
;
_.run = function run_12(){
  $showLogoAnimation(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function QueenOfDiamondsAllTimeAnimationController$2_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsAllTimeAnimationController$2(){
}

_ = QueenOfDiamondsAllTimeAnimationController$2_0.prototype = QueenOfDiamondsAllTimeAnimationController$2.prototype = new Timer;
_.getClass$ = function getClass_524(){
  return Lwebgl_client_nf_games_g431_allTime_QueenOfDiamondsAllTimeAnimationController$2_2_classLit;
}
;
_.run = function run_13(){
  $showJokerAnimation(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function QueenOfDiamondsAllTimeAnimationController$3_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsAllTimeAnimationController$3(){
}

_ = QueenOfDiamondsAllTimeAnimationController$3_0.prototype = QueenOfDiamondsAllTimeAnimationController$3.prototype = new Object_0;
_.getClass$ = function getClass_525(){
  return Lwebgl_client_nf_games_g431_allTime_QueenOfDiamondsAllTimeAnimationController$3_2_classLit;
}
;
_.handleGameItemFinished = function handleGameItemFinished_2(finishedAnimItem){
  $cancel_0(this.this$0.logoDelay);
  $schedule(this.this$0.logoDelay, round_int(15000 + Math.random() * 5000));
}
;
_.castableTypeMap$ = makeCastMap([Q$IGameItemFinishedListener]);
_.this$0 = null;
function $bonusGameNonMandatoryResourcesLoadCompleteHandler_0(this$static, loadedResources){
  this$static.currentState != ($clinit_QueenOfDiamondsBonusesManager$BonusGamesState() , WAR_BONUS_GAME)?$bonusGameNonMandatoryResourcesLoadCompleteHandler_2(this$static.warBonusGame, loadedResources):(this$static.nonMandatoryResources = loadedResources);
}

function $centerTexts(this$static){
  !!this$static.jokerBonusGame && $centerTexts_0(this$static.jokerBonusGame);
  !!this$static.warBonusGame && $centerTexts_3(this$static.warBonusGame);
}

function $init_18(this$static, locations, loadedResources, finishListener, cardsConfiguration, gameCustomization){
  var bonusGamesLocation;
  this$static.finishListener = finishListener;
  this$static.nonMandatoryResources = null;
  bonusGamesLocation = dynamicCast(locations.locationsMap.get('BOARD_POPUP_LOCATION'), Q$Location);
  $initCanvas(this$static, bonusGamesLocation.width_0, bonusGamesLocation.height_0);
  this$static.jokerBonusGame = new QueenOfDiamondsJokerBonusManager_0(locations, loadedResources, bonusGamesLocation.width_0, bonusGamesLocation.height_0, this$static, cardsConfiguration.jokerBonusCardConfiguration, gameCustomization);
  this$static.warBonusGame = new QueenOfDiamondsWarBonusManager_0(locations, loadedResources, this$static, cardsConfiguration.warBonusCardConfiguration, gameCustomization);
}

function $initCanvas(this$static, width, height){
  var canvas;
  canvas = createIfSupported();
  $setWidth_0(canvas.element, width);
  $setHeight_0(canvas.element, height);
  canvas.element.style['zIndex'] = '50';
  this$static.canvas = canvas;
}

function $onFinishBonusGame(this$static, pls){
  $onFinishBonusGame_2(this$static.finishListener, pls);
}

function $preRender_1(this$static){
  !!this$static.currentBonusGame && this$static.currentBonusGame.preRender();
}

function $render_1(this$static, context){
  if (this$static.currentBonusGame) {
    context = this$static.canvas.element.getContext('2d');
    this$static.currentBonusGame.render(context);
  }
}

function $reset_2(this$static){
  this$static.currentBonusGame.reset_0();
  $setCurrentState(this$static, ($clinit_QueenOfDiamondsBonusesManager$BonusGamesState() , IDLE));
}

function $setCurrentState(this$static, currentState){
  switch (currentState.ordinal) {
    case 0:
      this$static.currentBonusGame = null;
      if (this$static.nonMandatoryResources) {
        $bonusGameNonMandatoryResourcesLoadCompleteHandler_2(this$static.warBonusGame, this$static.nonMandatoryResources);
        this$static.nonMandatoryResources = null;
      }

      break;
    case 1:
      this$static.currentBonusGame = this$static.jokerBonusGame;
      $removeFromParent(this$static.canvas);
      $add_1(this$static.currentBonusGame.getBonusPanel(), this$static.canvas);
      break;
    case 2:
      this$static.currentBonusGame = this$static.warBonusGame;
      $removeFromParent(this$static.canvas);
      $add_1(this$static.currentBonusGame.getBonusPanel(), this$static.canvas);
  }
  this$static.currentState = currentState;
}

function $setData_0(this$static, jokerBonusDO, warBonusDO){
  !!jokerBonusDO && $setData_2(this$static.jokerBonusGame, jokerBonusDO);
  !!warBonusDO && $setData_3(this$static.warBonusGame, warBonusDO);
}

function $startBonusGame(this$static, currentState, pls){
  $setCurrentState(this$static, currentState);
  this$static.currentBonusGame.startGame(pls);
}

function QueenOfDiamondsBonusesManager_0(){
}

function QueenOfDiamondsBonusesManager(){
}

_ = QueenOfDiamondsBonusesManager_0.prototype = QueenOfDiamondsBonusesManager.prototype = new Object_0;
_.getClass$ = function getClass_526(){
  return Lwebgl_client_nf_games_g431_bonuses_QueenOfDiamondsBonusesManager_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Renderable]);
_.canvas = null;
_.currentBonusGame = null;
_.currentState = null;
_.finishListener = null;
_.jokerBonusGame = null;
_.nonMandatoryResources = null;
_.warBonusGame = null;
function $clinit_QueenOfDiamondsBonusesManager$BonusGamesState(){
  $clinit_QueenOfDiamondsBonusesManager$BonusGamesState = nullMethod;
  IDLE = new QueenOfDiamondsBonusesManager$BonusGamesState_0('IDLE', 0);
  JOKER_BONUS_GAME = new QueenOfDiamondsBonusesManager$BonusGamesState_0('JOKER_BONUS_GAME', 1);
  WAR_BONUS_GAME = new QueenOfDiamondsBonusesManager$BonusGamesState_0('WAR_BONUS_GAME', 2);
  $VALUES_20 = initValues(_3Lwebgl_client_nf_games_g431_bonuses_QueenOfDiamondsBonusesManager$BonusGamesState_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$Comparable_$1, Q$Object_$1]), Q$QueenOfDiamondsBonusesManager$BonusGamesState, [IDLE, JOKER_BONUS_GAME, WAR_BONUS_GAME]);
}

function QueenOfDiamondsBonusesManager$BonusGamesState_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_21(){
  $clinit_QueenOfDiamondsBonusesManager$BonusGamesState();
  return $VALUES_20;
}

function QueenOfDiamondsBonusesManager$BonusGamesState(){
}

_ = QueenOfDiamondsBonusesManager$BonusGamesState_0.prototype = QueenOfDiamondsBonusesManager$BonusGamesState.prototype = new Enum;
_.getClass$ = function getClass_527(){
  return Lwebgl_client_nf_games_g431_bonuses_QueenOfDiamondsBonusesManager$BonusGamesState_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Comparable, Q$Enum, Q$QueenOfDiamondsBonusesManager$BonusGamesState]);
var $VALUES_20, IDLE, JOKER_BONUS_GAME, WAR_BONUS_GAME;
function $flipCard(this$static, card){
  if (this$static.stepsDOs.size_0 > 0) {
    if (card.cardState == ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , COVERED)) {
      this$static.currentStepDO = dynamicCast($get_5(this$static.stepsDOs, 0), Q$QueenOfDiamondsJokerBonusStepDO);
      $remove_10(this$static.stepsDOs, 0);
      this$static.stepsDOs.size_0 == 0 && $setCardsClickable(this$static, false);
      if (this$static.currentStepDO.bonusItemID.indexOf('W') != -1) {
        card.isJoker = true;
        card.isGoldCard = true;
        this$static.cardConfiguration.playJokerFlipSound();
      }
       else {
        card.isQueen = true;
        this$static.cardConfiguration.playQueenFlipSound();
      }
      card.reveal();
      this$static.pls_0 == ''?(this$static.pls_0 = this$static.pls_0 + '' + (card.itemID + 1)):(this$static.pls_0 = this$static.pls_0 + ',' + (card.itemID + 1));
    }
  }
}

function $init_19(this$static, resources, gameLocations, panel, cardConfiguration, listener){
  var i, strikeAnimationBank;
  this$static.loadedResources = resources;
  this$static.cardConfiguration = cardConfiguration;
  this$static.listener = listener;
  this$static.pls_0 = '';
  strikeAnimationBank = dynamicCast(this$static.loadedResources.get(($clinit_QueenOfDiamondsResources() , JOKER_BONUS_STRIKE_ANIM).path), Q$AnimationBank);
  this$static.strikeAnim = new AnimGameItem_0(0, new AnimationController_0(strikeAnimationBank, '1X'), false);
  $setLocation_3(this$static.strikeAnim, dynamicCast(gameLocations.locationsMap.get('JOKER_BONUS_XANIM'), Q$Location));
  this$static.cards = initDim(_3Lwebgl_client_nf_games_g431_Card_QueenOfDiamondsCard_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$QueenOfDiamondsCard, 16, 0);
  for (i = 0; i < 16; ++i) {
    setCheck(this$static.cards, i, new QueenOfDiamondsCard_0(i, resources, cardConfiguration, null));
    this$static.cards[i].setLocation(gameLocations, 'JOKER_BONUS_CARD');
    $setTouchableDivPanel(this$static.cards[i], panel);
    $setAnimFinishedListener(this$static.cards[i], this$static);
    $setIsSelected(this$static.cards[i], true, false);
    $setAnimClickListener(this$static.cards[i], new QueenOfDiamondsJokerBonusBoard$1_0(this$static));
  }
  this$static.replayTimer = new QueenOfDiamondsJokerBonusBoard$2_0(this$static);
}

function $preRender_2(this$static){
  var card, card$array, card$index, card$max;
  for (card$array = this$static.cards , card$index = 0 , card$max = card$array.length; card$index < card$max; ++card$index) {
    card = card$array[card$index];
    card.preRender();
  }
  $preRender_7(this$static.strikeAnim);
}

function $render_2(this$static, g){
  var card, card$array, card$index, card$max;
  for (card$array = this$static.cards , card$index = 0 , card$max = card$array.length; card$index < card$max; ++card$index) {
    card = card$array[card$index];
    card.render(g);
  }
  $render_9(this$static.strikeAnim, g);
}

function $reset_3(this$static){
  var card, card$array, card$index, card$max;
  this$static.stepsDOs = null;
  this$static.currentStepDO = null;
  this$static.strikeAnim.isVisible = false;
  this$static.pls_0 = '';
  for (card$array = this$static.cards , card$index = 0 , card$max = card$array.length; card$index < card$max; ++card$index) {
    card = card$array[card$index];
    card.reset_0();
  }
  this$static.historyPls = null;
  this$static.historyStep = 0;
  $cancel_0(this$static.replayTimer);
}

function $setCardsClickable(this$static, isClickable){
  var i;
  for (i = 0; i < 16; ++i) {
    $setIsClickable(this$static.cards[i], isClickable);
  }
}

function $setData_1(this$static, stepsDOs){
  this$static.stepsDOs = stepsDOs;
}

function $startHistoryReplay(this$static, historyPls){
  this$static.historyPls = historyPls;
  this$static.historyStep = 0;
  $schedule(this$static.replayTimer, 1000);
}

function $updateStrikeAnimation(this$static){
  if (this$static.currentStepDO.numOfLives < 3) {
    this$static.strikeAnim.isVisible = true;
    $triggerItemAction(this$static.strikeAnim, '' + (3 - this$static.currentStepDO.numOfLives) + 'x');
    this$static.currentStepDO.numOfLives == 0?getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Joker_game_over', 20):getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Strike', 19);
  }
}

function QueenOfDiamondsJokerBonusBoard_0(){
}

function QueenOfDiamondsJokerBonusBoard(){
}

_ = QueenOfDiamondsJokerBonusBoard_0.prototype = QueenOfDiamondsJokerBonusBoard.prototype = new Object_0;
_.getClass$ = function getClass_528(){
  return Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusBoard_2_classLit;
}
;
_.handleGameItemFinished = function handleGameItemFinished_3(finishedAnimItem){
  var card;
  card = dynamicCast(finishedAnimItem, Q$QueenOfDiamondsCard);
  if (this.currentStepDO) {
    $updatePaytableIndex(this.listener, this.currentStepDO.paytableIndex);
    card.isGoldCard || $updateStrikeAnimation(this);
    card.isGoldCard && $showGoldCardWinAnim(card);
  }
  this.stepsDOs.size_0 == 0 && $onBonusBoardComplete(this.listener, this.pls_0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Renderable, Q$IGameItemFinishedListener]);
_.cardConfiguration = null;
_.cards = null;
_.currentStepDO = null;
_.historyPls = null;
_.historyStep = 0;
_.listener = null;
_.loadedResources = null;
_.pls_0 = null;
_.replayTimer = null;
_.stepsDOs = null;
_.strikeAnim = null;
function QueenOfDiamondsJokerBonusBoard$1_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsJokerBonusBoard$1(){
}

_ = QueenOfDiamondsJokerBonusBoard$1_0.prototype = QueenOfDiamondsJokerBonusBoard$1.prototype = new Object_0;
_.getClass$ = function getClass_529(){
  return Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusBoard$1_2_classLit;
}
;
_.handleGameItemClicked = function handleGameItemClicked(clickedItem){
  $flipCard(this.this$0, clickedItem);
}
;
_.this$0 = null;
function QueenOfDiamondsJokerBonusBoard$2_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsJokerBonusBoard$2(){
}

_ = QueenOfDiamondsJokerBonusBoard$2_0.prototype = QueenOfDiamondsJokerBonusBoard$2.prototype = new Timer;
_.getClass$ = function getClass_530(){
  return Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusBoard$2_2_classLit;
}
;
_.run = function run_14(){
  var cardId;
  cardId = valueOf_0(__parseAndValidateInt(this.this$0.historyPls[this.this$0.historyStep])).value_0 - 1;
  ++this.this$0.historyStep;
  $flipCard(this.this$0, this.this$0.cards[cardId]);
  this.this$0.historyStep < this.this$0.cards.length && $schedule(this, 1000);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function $centerTexts_0(this$static){
  !!this$static.panel && $centerTexts_1(this$static.panel);
}

function $onBonusBoardComplete(this$static, pls){
  this$static.pls_0 = pls;
  $setEnabled_4(this$static.panel.infoButton, false);
  $schedule(this$static.gameEndDelay, 4000);
}

function $onFinishBonusGame_0(this$static){
  getSoundManager().stop_1(($clinit_Game431() , SOUND_FILE_URL), 'Joker_ambiance');
  getSoundManager().stop_1(SOUND_FILE_URL, 'Joker_popup_closing');
  getSoundManager().play_2(SOUND_FILE_URL, 'Joker_popup_closing', 22);
  $onFinishBonusGame(this$static.finishListener, this$static.pls_0);
}

function $setData_2(this$static, dataObject){
  this$static.jokerBonusDO = dataObject;
  $setData_1(this$static.board, this$static.jokerBonusDO.revealedItems);
  $setPrizes(this$static.panel, this$static.jokerBonusDO.bonusPaytable, this$static.jokerBonusDO.ticketCost);
  $setPrize_0(this$static.jokerSummaryPopup, dataObject.prizeAmount);
}

function $updatePaytableIndex(this$static, index){
  $setNewLevel(this$static.panel, index);
}

function QueenOfDiamondsJokerBonusManager_0(locations, loadedResources, panelWidth, panelHeight, finishListener, cardConfiguration, gameCustomization){
  var jokerPopupAmountLocation, jokerPopupBGImage, jokerPopupBtnImage, jokerPopupBtnLocation, jokerPopupBtnTxt, jokerPopupSummaryBGLocation, jokerPopupSummaryTxtImage, jokerPopupSummaryTxtImgLocation;
  this.finishListener = finishListener;
  this.panel = new QueenOfDiamondsJokerBonusPanel_0(panelWidth, panelHeight, locations, loadedResources, gameCustomization);
  this.bgImage = dynamicCast(loadedResources.get(($clinit_QueenOfDiamondsResources() , JOKER_BONUS_BG).path), Q$TransformableImage);
  this.board = new QueenOfDiamondsJokerBonusBoard_0;
  $init_19(this.board, loadedResources, locations, this.panel, cardConfiguration, this);
  jokerPopupSummaryTxtImage = dynamicCast(loadedResources.get(JOKER_BONUS_SUMMARY_POPUP_TXT_IMG.path), Q$TransformableImage);
  jokerPopupBGImage = dynamicCast(loadedResources.get(JOKER_BONUS_POPUP_BG.path), Q$TransformableImage);
  jokerPopupBtnImage = dynamicCast(loadedResources.get(JOKER_BONUS_POPUP_BTN.path), Q$TransformableImage);
  jokerPopupSummaryBGLocation = dynamicCast(locations.locationsMap.get('JOKER_POPUP_SUMMARY_BG'), Q$Location);
  $reverseRelativeTo(dynamicCast(locations.locationsMap.get('JOKER_POPUP_SUMMARY_TXT'), Q$Location), jokerPopupSummaryBGLocation);
  jokerPopupAmountLocation = $reverseRelativeTo(dynamicCast(locations.locationsMap.get('JOKER_POPUP_SUMMARY_AMOUNT'), Q$Location), jokerPopupSummaryBGLocation);
  jokerPopupSummaryTxtImgLocation = $reverseRelativeTo(dynamicCast(locations.locationsMap.get('JOKER_POPUP_SUMMARY_TXT_IMG'), Q$Location), jokerPopupSummaryBGLocation);
  jokerPopupBtnLocation = $reverseRelativeTo(dynamicCast(locations.locationsMap.get('JOKER_POPUP_SUMMARY_BTN'), Q$Location), jokerPopupSummaryBGLocation);
  jokerPopupBtnTxt = get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_JOKER_SUMMARY_BUTTON');
  get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_JOKER_SUMMARY1');
  get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_JOKER_SUMMARY2');
  this.jokerSummaryPopup = new QueenOfDiamondsBonusPopup_0(this.panel, jokerPopupBGImage, jokerPopupBtnImage, jokerPopupSummaryTxtImage, jokerPopupSummaryBGLocation, jokerPopupBtnLocation, jokerPopupAmountLocation, jokerPopupSummaryTxtImgLocation, jokerPopupBtnTxt, 'jokerBonusPopupAmount', 'lobby-btn jokerBonusPopupButton', ($clinit_QueenOfDiamondsBoard$PopupType() , JOKER_SUMMARY), new QueenOfDiamondsJokerBonusManager$1_0(this));
  this.gameEndDelay = new QueenOfDiamondsJokerBonusManager$2_0(this);
  this.autoDismissSummaryPopup = new QueenOfDiamondsJokerBonusManager$3_0(this);
}

function QueenOfDiamondsJokerBonusManager(){
}

_ = QueenOfDiamondsJokerBonusManager_0.prototype = QueenOfDiamondsJokerBonusManager.prototype = new Object_0;
_.getBonusPanel = function getBonusPanel(){
  return this.panel;
}
;
_.getClass$ = function getClass_531(){
  return Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusManager_2_classLit;
}
;
_.playAmbienceSound = function playAmbienceSound(){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Joker_ambiance', 23);
}
;
_.preRender = function preRender_2(){
  $preRender_2(this.board);
}
;
_.render = function render_2(g){
  $drawImage_1(this.bgImage, g, 0, 0);
  $render_2(this.board, g);
}
;
_.reset_0 = function reset_2(){
  $reset_3(this.board);
  $reset_4(this.panel);
  $hidePopup(this.jokerSummaryPopup, ($clinit_Boolean() , $clinit_Boolean() , FALSE_0));
  this.isReplay = false;
  $cancel_0(this.autoDismissSummaryPopup);
}
;
_.startGame = function startGame(pls){
  var cardsIds;
  pls != null && pls.length > 1?(this.isReplay = true , cardsIds = $split(pls, ',', 0) , $startHistoryReplay(this.board, cardsIds) , undefined):$setCardsClickable(this.board, true);
}
;
_.autoDismissSummaryPopup = null;
_.bgImage = null;
_.board = null;
_.finishListener = null;
_.gameEndDelay = null;
_.isReplay = false;
_.jokerBonusDO = null;
_.jokerSummaryPopup = null;
_.panel = null;
_.pls_0 = null;
function QueenOfDiamondsJokerBonusManager$1_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsJokerBonusManager$1(){
}

_ = QueenOfDiamondsJokerBonusManager$1_0.prototype = QueenOfDiamondsJokerBonusManager$1.prototype = new Object_0;
_.getClass$ = function getClass_532(){
  return Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusManager$1_2_classLit;
}
;
_.onBonusPopupCloseButtonClicked = function onBonusPopupCloseButtonClicked(type){
  $trackBonusEnd((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5), 'Joker');
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Continue', 38);
  $onFinishBonusGame_0(this.this$0);
}
;
_.this$0 = null;
function QueenOfDiamondsJokerBonusManager$2_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsJokerBonusManager$2(){
}

_ = QueenOfDiamondsJokerBonusManager$2_0.prototype = QueenOfDiamondsJokerBonusManager$2.prototype = new Timer;
_.getClass$ = function getClass_533(){
  return Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusManager$2_2_classLit;
}
;
_.run = function run_15(){
  $showPopup(this.this$0.jokerSummaryPopup, this.this$0.panel, ($clinit_Boolean() , $clinit_Boolean() , TRUE_0));
  this.this$0.isReplay && $schedule(this.this$0.autoDismissSummaryPopup, 3000);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function QueenOfDiamondsJokerBonusManager$3_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsJokerBonusManager$3(){
}

_ = QueenOfDiamondsJokerBonusManager$3_0.prototype = QueenOfDiamondsJokerBonusManager$3.prototype = new Timer;
_.getClass$ = function getClass_534(){
  return Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusManager$3_2_classLit;
}
;
_.run = function run_16(){
  this.isRepeating?clearInterval_0(this.timerId):clearTimeout_0(this.timerId);
  $remove_11(timers, this);
  $hidePopup(this.this$0.jokerSummaryPopup, ($clinit_Boolean() , $clinit_Boolean() , FALSE_0));
  $onFinishBonusGame_0(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function $centerTexts_1(this$static){
  !!this$static.paytable && $centerTexts_2(this$static.paytable);
  !!this$static.totalWinAmount && $centre(this$static.totalWinAmount);
}

function $onLevelReached(this$static, levelReached){
  var endValue, startValue;
  if (!this$static.paytableData) {
    return;
  }
  endValue = dynamicCast($get_5(this$static.paytableData, levelReached), Q$QueenOfDiamondsPrizeType).prizeFactor;
  levelReached > 0?(startValue = dynamicCast($get_5(this$static.paytableData, levelReached - 1), Q$QueenOfDiamondsPrizeType).prizeFactor):(startValue = endValue);
  this$static.gameCustomization.startJokerBonusRollup(this$static.totalWinCounter, startValue, endValue, this$static.rollupStep);
}

function $reset_4(this$static){
  $setNewLevel_0(this$static.paytable, 0);
  this$static.paytableData = null;
  $hide_4(this$static.infoPopup);
  $setEnabled_4(this$static.infoButton, true);
}

function $setNewLevel(this$static, newLevel){
  $setNewLevel_0(this$static.paytable, newLevel - 1);
}

function $setPrizes(this$static, paytableData, rollupStep){
  this$static.rollupStep = rollupStep;
  this$static.paytableData = paytableData;
  $setPrizes_0(this$static.paytable, paytableData);
  $onLevelReached(this$static, 0);
}

function $showInfoPopup(this$static){
  $showPopup_1(this$static.infoPopup, this$static);
  $trackBonusInfoOpen((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5));
}

function QueenOfDiamondsJokerBonusPanel_0(panelWidth, panelHeight, gameLocations, loadedResources, gameCustomization){
  var buttonImg, buttonLocation, navigatorImage;
  AbsoluteNeoPanel_0.call(this);
  this.locations = gameLocations;
  this.loadedResources = loadedResources;
  this.gameCustomization = gameCustomization;
  setStyleAttribute(this.element, 'width', panelWidth + 'px');
  setStyleAttribute(this.element, 'height', panelHeight + 'px');
  panelWidth >= 0 && setStyleAttribute(this.element, 'width', panelWidth + 'px');
  panelHeight >= 0 && setStyleAttribute(this.element, 'height', panelHeight + 'px');
  this.infoPopup = new QueenOfDiamondsInfoPopup_0(this, this.loadedResources, this.locations, ($clinit_QueenOfDiamondsInfoPopup$InfoPopupType() , JOKER));
  buttonLocation = $getLocation_0(this.locations, 'JOKER_BONUS_IBTN');
  buttonImg = dynamicCast(this.loadedResources.get(($clinit_QueenOfDiamondsResources() , JOKER_BONUS_INFO_BUTTON).path), Q$TransformableImage);
  this.infoButton = new MenuCommonButton_0('lobby-btn', '', buttonImg.image.src, $getWidth(buttonImg) >> 1, $getHeight(buttonImg) >> 1);
  this.infoButton.element.style['zIndex'] = '70';
  $addClickHandler_0(this.infoButton, new QueenOfDiamondsJokerBonusPanel$1_0(this));
  $add_15(this, this.infoButton, buttonLocation);
  this.totalWinAmount = this.gameCustomization.getJokerBonusTotalWinHTML($getLocation_0(this.locations, 'JOKER_BONUS_WINSTXT'), this);
  this.totalWinCounter = new QueenOfDiamondsJokerBonusPanel$2_0(this, this.totalWinAmount);
  this.totalWinCounter.adjuistStepValue = false;
  $setCounterPrefixText(this.totalWinCounter, get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_WINS') + ': ');
  navigatorImage = dynamicCast(this.loadedResources.get(JOKER_BONUS_NAVIGATOR.path), Q$TransformableImage);
  this.paytable = new QueenOfDiamondsJokerPaytable_0(this, navigatorImage, this.locations, this);
}

function QueenOfDiamondsJokerBonusPanel(){
}

_ = QueenOfDiamondsJokerBonusPanel_0.prototype = QueenOfDiamondsJokerBonusPanel.prototype = new AbsoluteNeoPanel;
_.getClass$ = function getClass_536(){
  return Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusPanel_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AbsolutePanel, Q$ComplexPanel, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$AbsoluteNeoPanel]);
_.gameCustomization = null;
_.infoButton = null;
_.infoPopup = null;
_.loadedResources = null;
_.locations = null;
_.paytable = null;
_.paytableData = null;
_.rollupStep = 0;
_.totalWinAmount = null;
_.totalWinCounter = null;
function QueenOfDiamondsJokerBonusPanel$1_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsJokerBonusPanel$1(){
}

_ = QueenOfDiamondsJokerBonusPanel$1_0.prototype = QueenOfDiamondsJokerBonusPanel$1.prototype = new Object_0;
_.getClass$ = function getClass_537(){
  return Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusPanel$1_2_classLit;
}
;
_.onClick = function onClick_9(event_0){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Info', 37);
  this.this$0.infoButton.button_0.element.blur();
  $isShowing(this.this$0.infoPopup)?$hidePopupWithFadeOut_0(this.this$0.infoPopup):$showInfoPopup(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function $setCounterPrefixText(this$static, counterPrefixText){
  this$static.counterPrefixText = counterPrefixText;
}

function $setText_2(this$static, text){
  this$static.counterPrefixText != null && (text = this$static.counterPrefixText + text);
  $setHTML_0(this$static.counterHTML, text);
}

function $start(this$static, fromValue, toValue, addValue){
  var estimatedTime, fmt, valueDiffAbs;
  this$static.currentValue = fromValue;
  this$static.isCountingDown = toValue - fromValue < 0;
  this$static.endValue = toValue;
  valueDiffAbs = toValue - fromValue <= 0?0 - (toValue - fromValue):toValue - fromValue;
  estimatedTime = valueDiffAbs / addValue * this$static.defaultTimeStep;
  this$static.adjuistStepValue?(this$static.stepValue = estimatedTime <= this$static.maxTimeInMilliseconds?addValue:this$static.defaultTimeStep * valueDiffAbs / this$static.maxTimeInMilliseconds):(this$static.stepValue = addValue);
  this$static.timeStep = round_int(estimatedTime <= this$static.maxTimeInMilliseconds?this$static.defaultTimeStep:this$static.maxTimeInMilliseconds / (valueDiffAbs / this$static.stepValue));
  if (this$static.timeStep < 10) {
    if (this$static.ignoreTotalTimeLimitForMinStepTime) {
      this$static.stepValue = addValue;
      this$static.timeStep = 10;
    }
     else {
      this$static.stepValue = estimatedTime <= this$static.maxTimeInMilliseconds?addValue:this$static.defaultTimeStep * valueDiffAbs / this$static.maxTimeInMilliseconds;
      this$static.timeStep = round_int(estimatedTime <= this$static.maxTimeInMilliseconds?this$static.defaultTimeStep:this$static.maxTimeInMilliseconds / (valueDiffAbs / this$static.stepValue));
    }
  }
  this$static.isCountingDown && (this$static.stepValue *= -1);
  fmt = this$static.getFormattedValue(fromValue);
  fmt = this$static.isCurrencyRequired?appendCurrencySymbol(fmt):fmt;
  $setText_2(this$static, fmt);
  this$static.isCounting = true;
  $scheduleRepeating(this$static.timer, this$static.timeStep);
}

function $stop(this$static){
  var pennisResult, result;
  $cancel_0(this$static.timer);
  this$static.isCounting = false;
  $setText_2(this$static, (pennisResult = dollarstopennies(this$static.endValue + '') , result = penniesToDollars(pennisResult) , this$static.isCurrencyRequired?appendCurrencySymbol(result):result));
}

function $stopOnCurrentValue(this$static){
  $cancel_0(this$static.timer);
  this$static.isCounting = false;
}

function TextCounterView_0(counter, maxTime){
  this.counterHTML = counter;
  this.isCurrencyRequired = true;
  this.maxTimeInMilliseconds = maxTime;
  this.isCounting = false;
  this.adjuistStepValue = true;
  this.ignoreTotalTimeLimitForMinStepTime = false;
  this.timer = new TextCounterView$1_0(this);
  this.defaultTimeStep = 50;
}

function TextCounterView(){
}

_ = TextCounterView.prototype = new Object_0;
_.getClass$ = function getClass_538(){
  return Lwebgl_client_nf_gamesFramework_ui_textCounterView_TextCounterView_2_classLit;
}
;
_.getFormattedValue = function getFormattedValue(value){
  var decimalSymbol, pennies;
  if (isUsingNewCurrencyFormat) {
    decimalSymbol = getCurDecimalSymbol();
    if ($equals(decimalSymbol, '.')) {
      return $format(($clinit_NumberFormat() , new NumberFormat_1($getDefaultNative())), value);
    }
    pennies = fromDouble(value * 100);
    return penniesToDollarsWithTwoDigits(pennies);
  }
  return $format(($clinit_NumberFormat() , new NumberFormat_1($getDefaultNative())), value);
}
;
_.adjuistStepValue = false;
_.counterHTML = null;
_.counterPrefixText = null;
_.currentValue = 0;
_.defaultTimeStep = 0;
_.endValue = 0;
_.ignoreTotalTimeLimitForMinStepTime = false;
_.isCounting = false;
_.isCountingDown = false;
_.isCurrencyRequired = false;
_.maxTimeInMilliseconds = 0;
_.stepValue = 0;
_.timeStep = 0;
_.timer = null;
function QueenOfDiamondsJokerBonusPanel$2_0(this$0, $anonymous0){
  this.this$0 = this$0;
  TextCounterView_0.call(this, $anonymous0, 10000);
}

function QueenOfDiamondsJokerBonusPanel$2(){
}

_ = QueenOfDiamondsJokerBonusPanel$2_0.prototype = QueenOfDiamondsJokerBonusPanel$2.prototype = new TextCounterView;
_.getClass$ = function getClass_539(){
  return Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusPanel$2_2_classLit;
}
;
_.getFormattedValue = function getFormattedValue_0(value){
  var pennies;
  if (this.this$0.rollupStep < 1) {
    return $format(($clinit_NumberFormat() , new NumberFormat_1($getDefaultNative())), value);
  }
  pennies = fromDouble(value * 100);
  return penniesToDollarsWithoutFormating(pennies);
}
;
_.this$0 = null;
function $centerTexts_2(this$static){
  var i;
  for (i = 0; i < 12; ++i) {
    $get_5(this$static.htmlLevels, i) != null && $centre(dynamicCast($get_5(this$static.htmlLevels, i), Q$CentredHTML));
  }
}

function $onLevelReached_0(this$static){
  $onLevelReached(this$static.listener, this$static.currentLevel);
}

function $setNewLevel_0(this$static, newLevel){
  if (newLevel == 0 || newLevel > this$static.currentLevel) {
    newLevel == 0?$setOffStyleToAllTexts(this$static):$setOffStyleToText(this$static, this$static.currentLevel, true);
    this$static.currentLevel = newLevel;
    $updateNavigatorLocation(this$static);
  }
}

function $setOffStyleToAllTexts(this$static){
  var i;
  for (i = 0; i < 12; ++i) {
    $setOffStyleToText(this$static, i, false);
  }
}

function $setOffStyleToText(this$static, id, isWithAnim){
  $setStyleName_2(dynamicCast($get_5(this$static.htmlLevels, id), Q$CentredHTML), 'jokerBonusPaytableTextOn', false);
  $setStyleName_2(dynamicCast($get_5(this$static.htmlLevels, id), Q$CentredHTML), 'jokerBonusPaytableTextOff jokerBonusPaytableTextOffAnim', false);
  $setStyleName_2(dynamicCast($get_5(this$static.htmlLevels, id), Q$CentredHTML), 'jokerBonusPaytableTextOff', false);
  isWithAnim?$setStyleName_2(dynamicCast($get_5(this$static.htmlLevels, id), Q$CentredHTML), 'jokerBonusPaytableTextOff jokerBonusPaytableTextOffAnim', true):$setStyleName_2(dynamicCast($get_5(this$static.htmlLevels, id), Q$CentredHTML), 'jokerBonusPaytableTextOff', true);
}

function $setOnStyleToText(this$static, id){
  $setStyleName_2(dynamicCast($get_5(this$static.htmlLevels, id), Q$CentredHTML), 'jokerBonusPaytableTextOff', false);
  $setStyleName_2(dynamicCast($get_5(this$static.htmlLevels, id), Q$CentredHTML), 'jokerBonusPaytableTextOff jokerBonusPaytableTextOffAnim', false);
  $setStyleName_2(dynamicCast($get_5(this$static.htmlLevels, id), Q$CentredHTML), 'jokerBonusPaytableTextOn', true);
}

function $setPrizes_0(this$static, paytableData){
  var i, pennisValue;
  for (i = 0; i < 12; ++i) {
    pennisValue = dollarstopennies('' + dynamicCast((checkIndex(i, paytableData.size_0) , paytableData.array[i]), Q$QueenOfDiamondsPrizeType).prizeFactor);
    $setHTML_0(dynamicCast($get_5(this$static.htmlLevels, i), Q$CentredHTML), appendCurrencySymbol(penniesToDollars(pennisValue)));
  }
}

function $updateNavigatorLocation(this$static){
  var duration, tweenProperties;
  tweenProperties = new ArrayList_0;
  $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , X), valueOf_0(this$static.navigatorLocations[this$static.currentLevel].x_0 - (this$static.navigatorLocations[this$static.currentLevel].width_0 >> 1))));
  $add_10(tweenProperties, new TweenProperty_0(Y, valueOf_0(this$static.navigatorLocations[this$static.currentLevel].y_0 - (this$static.navigatorLocations[this$static.currentLevel].height_0 >> 1))));
  duration = 0;
  if (this$static.currentLevel > 0) {
    getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Bar_Moving', 18);
    $add_10(tweenProperties, new TweenProperty_0(EASE, ($clinit_TweenMaxUtils$EASE_TYPE() , BACK_EASE_IN)));
    duration = 0.5;
  }
   else {
    $add_10(tweenProperties, new TweenProperty_0(EASE, ($clinit_TweenMaxUtils$EASE_TYPE() , LINEAR_EASE_NONE)));
  }
  $startGenericTween(this$static.navigatorTweenMaxElementWidget, null, tweenProperties, duration, 0, true);
}

function QueenOfDiamondsJokerPaytable_0(container, navigatorImage, gameLocations, listener){
  var htmlPrize, i, navImage, navigatorContainer;
  AbsoluteNeoPanel_0.call(this);
  this.listener = listener;
  this.navigatorLocations = initDim(_3Lwebgl_client_nf_core_Location_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$Location_$1, Q$Point_$1]), Q$Location, 12, 0);
  this.htmlLevels = new ArrayList_0;
  for (i = 0; i < 12; ++i) {
    htmlPrize = new CentredHTML_0;
    htmlPrize.element.style['zIndex'] = '25';
    $setPosition_1(htmlPrize, dynamicCast(gameLocations.locationsMap.get('JOKER_BONUS_PRIZE' + (i + 1)), Q$Location));
    $add_2(container, htmlPrize, 0, 0);
    $add_10(this.htmlLevels, htmlPrize);
    this.navigatorLocations[i] = dynamicCast(gameLocations.locationsMap.get('JOKER_BONUS_NAVIGATOR' + (i + 1)), Q$Location);
  }
  navImage = new Image_2(navigatorImage.image.src);
  navigatorContainer = new AbsoluteNeoPanel_0;
  $setPixelSize(navigatorContainer, navImage.element.width, navImage.element.height);
  navigatorContainer.element.style['zIndex'] = '70';
  setStyleName(navigatorContainer.element, 'noPointerEvents', true);
  $add_2(navigatorContainer, navImage, 0, 0);
  $add_2(container, navigatorContainer, 0, 0);
  this.navigatorTweenMaxElementWidget = new TweenMaxElementWidget_0(navigatorContainer);
  $init_23(this.navigatorTweenMaxElementWidget);
  $setListener_0(this.navigatorTweenMaxElementWidget, new QueenOfDiamondsJokerPaytable$1_0(this));
  $setNewLevel_0(this, 0);
}

function QueenOfDiamondsJokerPaytable(){
}

_ = QueenOfDiamondsJokerPaytable_0.prototype = QueenOfDiamondsJokerPaytable.prototype = new AbsoluteNeoPanel;
_.getClass$ = function getClass_540(){
  return Lwebgl_client_nf_games_g431_bonuses_joker_paytable_QueenOfDiamondsJokerPaytable_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AbsolutePanel, Q$ComplexPanel, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$AbsoluteNeoPanel]);
_.currentLevel = 0;
_.htmlLevels = null;
_.listener = null;
_.navigatorLocations = null;
_.navigatorTweenMaxElementWidget = null;
function QueenOfDiamondsJokerPaytable$1_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsJokerPaytable$1(){
}

_ = QueenOfDiamondsJokerPaytable$1_0.prototype = QueenOfDiamondsJokerPaytable$1.prototype = new Object_0;
_.getClass$ = function getClass_541(){
  return Lwebgl_client_nf_games_g431_bonuses_joker_paytable_QueenOfDiamondsJokerPaytable$1_2_classLit;
}
;
_.onPathFinished = function onPathFinished(element){
  $setOnStyleToText(this.this$0, this.this$0.currentLevel);
  $onLevelReached_0(this.this$0);
}
;
_.onPathStarted = function onPathStarted(element){
}
;
_.onPathUpdate = function onPathUpdate(element){
}
;
_.castableTypeMap$ = makeCastMap([Q$ITweenMaxPathListener]);
_.this$0 = null;
function $bonusGameNonMandatoryResourcesLoadCompleteHandler_1(this$static, loadedResources){
  $setAnimationBank(this$static.playerCardsSideAnim.animation, dynamicCast(this$static.resources.get(($clinit_QueenOfDiamondsResources() , WAR_BONUS_ALL_PLAYER).path), Q$AnimationBank));
  $setAnimationBank(this$static.queenCardsSideAnim.animation, dynamicCast(this$static.resources.get(WAR_BONUS_ALL_QUEEN.path), Q$AnimationBank));
  $setAnimationBank(this$static.doorAnim.animation, dynamicCast(this$static.resources.get(WAR_BONUS_DOOR.path), Q$AnimationBank));
  $bonusGameNonMandatoryResourcesLoadCompleteHandler(this$static.playerCard, loadedResources);
  $bonusGameNonMandatoryResourcesLoadCompleteHandler(this$static.queenCard, loadedResources);
}

function $flipCards(this$static){
  var cardPlace;
  $triggerItemAction(this$static.playerCardsSideAnim, 'idle');
  this$static.playerCardsSideAnim.isVisible = false;
  this$static.playerCardsSideImageLightVisible = true;
  $triggerItemAction(this$static.queenCardsSideAnim, 'idle');
  this$static.queenCardsSideAnim.isVisible = false;
  this$static.queenCardsSideImageLightVisible = true;
  $reset_1(this$static.queenCard);
  $reset_1(this$static.playerCard);
  cardPlace = this$static.isWar & this$static.isFirstPairFinished?1:0;
  $setCardId(this$static.playerCard, this$static.currentStepDO.playerCards[cardPlace]);
  $setCardId(this$static.queenCard, this$static.currentStepDO.queenCards[cardPlace]);
  if (this$static.isWar && !this$static.isFirstPairFinished) {
    this$static.playerCard.isWin = false;
    this$static.queenCard.isWin = false;
  }
   else {
    this$static.isWar = false;
    this$static.isFirstPairFinished = false;
    $setWin(this$static.playerCard, this$static.currentStepDO.isWin);
    $setWin(this$static.queenCard, !this$static.currentStepDO.isWin);
  }
  $reveal(this$static.queenCard);
  $reveal(this$static.playerCard);
}

function $playCardsInAnim(this$static){
  if (!($equals(this$static.playerCardsSideAnim.animation.animName, 'anim') && $equals(this$static.queenCardsSideAnim.animation.animName, 'anim'))) {
    getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Cards_to_place', 30);
    this$static.playerCardsSideImageLightVisible = false;
    this$static.playerCardsSideAnim.isVisible = true;
    $triggerItemAction(this$static.playerCardsSideAnim, 'anim');
    this$static.queenCardsSideImageLightVisible = false;
    this$static.queenCardsSideAnim.isVisible = true;
    $triggerItemAction(this$static.queenCardsSideAnim, 'anim');
  }
}

function $playCardsOutAnim(this$static){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Cards_falling', 31);
  this$static.doorAnim.isVisible = true;
  $triggerItemAction(this$static.doorAnim, 'door');
  $cover(this$static.playerCard);
  $cover(this$static.queenCard);
}

function $playGame_0(this$static, currentStepDO){
  this$static.isFlipCardsFunctionCalled = false;
  this$static.winsAreaBackgroundAnim.isVisible = false;
  this$static.warBonusFlag.isVisible = false;
  $cancel_0(this$static.callToActionDelay);
  this$static.currentStepDO = currentStepDO;
  currentStepDO.playerCards.length > 1 && (this$static.isWar = true);
  if (this$static.isFirstRound) {
    $playPotentialPrizeInAnim(this$static.listener.panel);
    $schedule(this$static.flipCardsDelay, 500);
    this$static.isFirstRound = false;
  }
   else {
    $playCardsOutAnim(this$static);
  }
}

function $preRender_3(this$static){
  $preRender_7(this$static.playerCardsSideAnim);
  $preRender(this$static.playerCard);
  $preRender_7(this$static.queenCardsSideAnim);
  $preRender(this$static.queenCard);
  $preRender_7(this$static.warWordsAnim);
  $preRender_7(this$static.doorAnim);
  $preRender_7(this$static.winsAreaBackgroundAnim);
  $preRender_7(this$static.warBonusFlag);
  $preRender_7(this$static.battleBtnCallToAction);
}

function $render_3(this$static, g){
  $drawImage_1(this$static.bgImage, g, 0, 0);
  $render_9(this$static.doorAnim, g);
  $render_9(this$static.playerCardsSideAnim, g);
  this$static.playerCardsSideImageLightVisible && $drawImage_1(this$static.playerCardsSideImageLight, g, round_int(this$static.playerCardsSideAnimLightPoint.x_0), round_int(this$static.playerCardsSideAnimLightPoint.y_0));
  $render(this$static.playerCard, g);
  $render_9(this$static.queenCardsSideAnim, g);
  this$static.queenCardsSideImageLightVisible && $drawImage_1(this$static.queenCardsSideImageLight, g, round_int(this$static.queenCardsSideAnimLightPoint.x_0), round_int(this$static.queenCardsSideAnimLightPoint.y_0));
  $render(this$static.queenCard, g);
  $render_9(this$static.warWordsAnim, g);
  $render_9(this$static.winsAreaBackgroundAnim, g);
  $render_9(this$static.warBonusFlag, g);
  $render_9(this$static.battleBtnCallToAction, g);
}

function $reset_5(this$static){
  this$static.isFirstRound = true;
  this$static.isWar = false;
  this$static.isFirstPairFinished = false;
  $reset_1(this$static.queenCard);
  $reset_1(this$static.playerCard);
  this$static.queenCard.flipAnimation.isVisible = true;
  this$static.playerCard.flipAnimation.isVisible = true;
  this$static.playerCardsSideAnim.isVisible = true;
  this$static.queenCardsSideAnim.isVisible = true;
  $triggerItemAction(this$static.playerCardsSideAnim, 'idle');
  $triggerItemAction(this$static.queenCardsSideAnim, 'idle');
  this$static.playerCardsSideImageLightVisible = false;
  this$static.queenCardsSideImageLightVisible = false;
  $triggerItemAction(this$static.warWordsAnim, 'idle');
  $triggerItemAction(this$static.doorAnim, 'idle');
  $triggerItemAction(this$static.winsAreaBackgroundAnim, 'idle');
  this$static.warWordsAnim.isVisible = false;
  this$static.doorAnim.isVisible = false;
  this$static.winsAreaBackgroundAnim.isVisible = false;
}

function $showWinAnimations(this$static){
  this$static.winsAreaBackgroundAnim.isVisible = true;
  this$static.warBonusFlag.isVisible = true;
  $triggerItemAction(this$static.winsAreaBackgroundAnim, 'win');
  $triggerItemAction(this$static.warBonusFlag, 'warBonusFlag');
}

function QueenOfDiamondsWarBonusBoard_0(resources, locations, cardConfiguration, listener){
  var animFrameHeight, animFrameWidth, callToActionAnimBank, doorAnimBank, location_0, playerCardsSideAnimBank, queenCardsSideAnimBank, swordsAnimBank, warBonusFlagAnimBank, winsDiamondAnimBank;
  this.resources = resources;
  this.cardConfiguration = cardConfiguration;
  this.listener = listener;
  this.bgImage = dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , WAR_BONUS_BG).path), Q$TransformableImage);
  this.playerCard = new QueenOfDiamondsWarCard_0(resources, cardConfiguration, false, this);
  $setLocation_2(this.playerCard, locations, 'WAR_BONUS_CARD_PLAYER');
  this.playerCard.animFinishedListener = this;
  $setIsSelected(this.playerCard, true, false);
  this.playerCard.isPlayerCard = true;
  this.queenCard = new QueenOfDiamondsWarCard_0(resources, cardConfiguration, true, this);
  $setLocation_2(this.queenCard, locations, 'WAR_BONUS_CARD_QUEEN');
  this.queenCard.animFinishedListener = this;
  $setIsSelected(this.queenCard, true, false);
  this.queenCard.isPlayerCard = false;
  playerCardsSideAnimBank = dynamicCast(resources.get(WAR_BONUS_ALL_PLAYER_LIGHT_ANIM.path), Q$AnimationBank);
  this.playerCardsSideAnim = new AnimGameItem_0(0, new AnimationController_0(playerCardsSideAnimBank, 'idle'), false);
  $setLocation_3(this.playerCardsSideAnim, dynamicCast(locations.locationsMap.get('WAR_BONUS_RED_SIDE'), Q$Location));
  this.playerCardsSideAnim.animFinishedListener = this;
  this.playerCardsSideImageLight = playerCardsSideAnimBank.image;
  location_0 = dynamicCast(locations.locationsMap.get('WAR_BONUS_RED_SIDE'), Q$Location);
  animFrameWidth = playerCardsSideAnimBank.sourceFrameWidth;
  animFrameHeight = playerCardsSideAnimBank.sourceFrameHeight;
  this.playerCardsSideAnimLightPoint = new Point_0(location_0.x_0 - (animFrameWidth >> 1), location_0.y_0 - (animFrameHeight >> 1));
  this.playerCardsSideImageLightVisible = true;
  queenCardsSideAnimBank = dynamicCast(resources.get(WAR_BONUS_ALL_QUEEN_LIGHT_ANIM.path), Q$AnimationBank);
  this.queenCardsSideAnim = new AnimGameItem_0(0, new AnimationController_0(queenCardsSideAnimBank, 'idle'), false);
  $setLocation_3(this.queenCardsSideAnim, dynamicCast(locations.locationsMap.get('WAR_BONUS_BLUE_SIDE'), Q$Location));
  this.queenCardsSideAnim.animFinishedListener = this;
  this.queenCardsSideImageLight = queenCardsSideAnimBank.image;
  location_0 = dynamicCast(locations.locationsMap.get('WAR_BONUS_BLUE_SIDE'), Q$Location);
  animFrameWidth = queenCardsSideAnimBank.sourceFrameWidth;
  animFrameHeight = queenCardsSideAnimBank.sourceFrameHeight;
  this.queenCardsSideAnimLightPoint = new Point_0(location_0.x_0 - (animFrameWidth >> 1), location_0.y_0 - (animFrameHeight >> 1));
  this.queenCardsSideImageLightVisible = true;
  swordsAnimBank = dynamicCast(resources.get(WAR_BONUS_SWORDS.path), Q$AnimationBank);
  this.warWordsAnim = new AnimGameItem_0(0, new AnimationController_0(swordsAnimBank, 'idle'), false);
  $setLocation_3(this.warWordsAnim, dynamicCast(locations.locationsMap.get('WAR_BONUS_SWORDS'), Q$Location));
  this.warWordsAnim.animFinishedListener = this;
  doorAnimBank = dynamicCast(resources.get(WAR_BONUS_DOOR.path), Q$AnimationBank);
  this.doorAnim = new AnimGameItem_0(0, new AnimationController_0(doorAnimBank, 'idle'), false);
  $setLocation_3(this.doorAnim, dynamicCast(locations.locationsMap.get('WAR_BONUS_DOOR'), Q$Location));
  this.doorAnim.animFinishedListener = this;
  winsDiamondAnimBank = dynamicCast(resources.get(WAR_BONUS_DIAMOND.path), Q$AnimationBank);
  this.winsAreaBackgroundAnim = new AnimGameItem_0(0, new AnimationController_0(winsDiamondAnimBank, 'idle'), false);
  $setLocation_3(this.winsAreaBackgroundAnim, dynamicCast(locations.locationsMap.get('WAR_BONUS_WIN_DIAMOND_LEFT'), Q$Location));
  warBonusFlagAnimBank = dynamicCast(resources.get(WAR_BONUS_WIN_FLAG.path), Q$AnimationBank);
  this.warBonusFlag = new AnimGameItem_0(0, new AnimationController_0(warBonusFlagAnimBank, 'idle'), false);
  $setLocation_3(this.warBonusFlag, dynamicCast(locations.locationsMap.get('WAR_BONUS_WIN_FLAG'), Q$Location));
  callToActionAnimBank = dynamicCast(resources.get(WAR_BONUS_CALL_TO_ACTION.path), Q$AnimationBank);
  this.battleBtnCallToAction = new AnimGameItem_0(0, new AnimationController_0(callToActionAnimBank, 'idle'), true);
  $setLocation_3(this.battleBtnCallToAction, dynamicCast(locations.locationsMap.get('WAR_BONUS_BATTLE_BUTTON'), Q$Location));
  $setAnimFinishedListener_0(this.battleBtnCallToAction, new QueenOfDiamondsWarBonusBoard$1_0(this));
  this.callToActionDelay = new QueenOfDiamondsWarBonusBoard$2_0(this);
  this.warWordsAnimationDelay = new QueenOfDiamondsWarBonusBoard$3_0(this);
  this.flipCardsDelay = new QueenOfDiamondsWarBonusBoard$4_0(this);
  this.isFirstRound = true;
  this.isFirstPairFinished = false;
  this.isWar = false;
}

function QueenOfDiamondsWarBonusBoard(){
}

_ = QueenOfDiamondsWarBonusBoard_0.prototype = QueenOfDiamondsWarBonusBoard.prototype = new Object_0;
_.getClass$ = function getClass_542(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusBoard_2_classLit;
}
;
_.goldCardStartReveal = function goldCardStartReveal(){
}
;
_.handleGameItemFinished = function handleGameItemFinished_4(finishedAnimItem){
  var animItem;
  if (instanceOf(finishedAnimItem, Q$AnimGameItem)) {
    animItem = dynamicCast(finishedAnimItem, Q$AnimGameItem);
    if ($equals(animItem.animation.animName, this.cardConfiguration.getWinStage())) {
      $schedule(this.callToActionDelay, 7000);
      $onBonusBoardComplete_0(this.listener);
    }
     else if ($equals(animItem.animation.animName, 'anim')) {
      if (!this.isFlipCardsFunctionCalled) {
        this.isFlipCardsFunctionCalled = true;
        $playPotentialPrizeInAnim(this.listener.panel);
        $schedule(this.flipCardsDelay, 500);
      }
    }
     else 
      $equals(animItem.animation.animName, 'door')?(this.doorAnim.isVisible = false , undefined):$equals(animItem.animation.animName, 'swords') && $schedule(this.warWordsAnimationDelay, 2000);
  }
   else if (instanceOf(finishedAnimItem, Q$QueenOfDiamondsCard)) {
    if (dynamicCast(finishedAnimItem, Q$QueenOfDiamondsCard).cardState == ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , COVERED)) {
      $playCardsInAnim(this);
    }
     else {
      if (this.isWar) {
        this.isFlipCardsFunctionCalled = false;
        this.isFirstPairFinished = true;
        getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'War', 27);
        this.warWordsAnim.isVisible = true;
        $triggerItemAction(this.warWordsAnim, 'swords');
      }
       else {
        $showWinLoseAnimation(dynamicCast(finishedAnimItem, Q$QueenOfDiamondsWarCard));
      }
    }
  }
}
;
_.jokerCardStartReveal = function jokerCardStartReveal(){
}
;
_.onPreBonusGoldCardsAnimationFinished = function onPreBonusGoldCardsAnimationFinished(){
}
;
_.onPreBonusJokerAnimationFinished = function onPreBonusJokerAnimationFinished(){
}
;
_.castableTypeMap$ = makeCastMap([Q$Renderable, Q$IGameItemFinishedListener]);
_.battleBtnCallToAction = null;
_.bgImage = null;
_.callToActionDelay = null;
_.cardConfiguration = null;
_.currentStepDO = null;
_.doorAnim = null;
_.flipCardsDelay = null;
_.isFirstPairFinished = false;
_.isFirstRound = false;
_.isFlipCardsFunctionCalled = false;
_.isWar = false;
_.listener = null;
_.playerCard = null;
_.playerCardsSideAnim = null;
_.playerCardsSideAnimLightPoint = null;
_.playerCardsSideImageLight = null;
_.playerCardsSideImageLightVisible = false;
_.queenCard = null;
_.queenCardsSideAnim = null;
_.queenCardsSideAnimLightPoint = null;
_.queenCardsSideImageLight = null;
_.queenCardsSideImageLightVisible = false;
_.resources = null;
_.warBonusFlag = null;
_.warWordsAnim = null;
_.warWordsAnimationDelay = null;
_.winsAreaBackgroundAnim = null;
function QueenOfDiamondsWarBonusBoard$1_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsWarBonusBoard$1(){
}

_ = QueenOfDiamondsWarBonusBoard$1_0.prototype = QueenOfDiamondsWarBonusBoard$1.prototype = new Object_0;
_.getClass$ = function getClass_543(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusBoard$1_2_classLit;
}
;
_.handleGameItemFinished = function handleGameItemFinished_5(finishedAnimItem){
  $schedule(this.this$0.callToActionDelay, 7000);
}
;
_.castableTypeMap$ = makeCastMap([Q$IGameItemFinishedListener]);
_.this$0 = null;
function QueenOfDiamondsWarBonusBoard$2_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsWarBonusBoard$2(){
}

_ = QueenOfDiamondsWarBonusBoard$2_0.prototype = QueenOfDiamondsWarBonusBoard$2.prototype = new Timer;
_.getClass$ = function getClass_544(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusBoard$2_2_classLit;
}
;
_.run = function run_17(){
  $cancel_0(this.this$0.callToActionDelay);
  $triggerItemAction(this.this$0.battleBtnCallToAction, 'battleBtnAnim');
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function QueenOfDiamondsWarBonusBoard$3_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsWarBonusBoard$3(){
}

_ = QueenOfDiamondsWarBonusBoard$3_0.prototype = QueenOfDiamondsWarBonusBoard$3.prototype = new Timer;
_.getClass$ = function getClass_545(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusBoard$3_2_classLit;
}
;
_.run = function run_18(){
  this.this$0.warWordsAnim.isVisible = false;
  $playCardsOutAnim(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function QueenOfDiamondsWarBonusBoard$4_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsWarBonusBoard$4(){
}

_ = QueenOfDiamondsWarBonusBoard$4_0.prototype = QueenOfDiamondsWarBonusBoard$4.prototype = new Timer;
_.getClass$ = function getClass_546(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusBoard$4_2_classLit;
}
;
_.run = function run_19(){
  $cancel_0(this.this$0.flipCardsDelay);
  $flipCards(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function $bonusGameNonMandatoryResourcesLoadCompleteHandler_2(this$static, loadedResources){
  $bonusGameNonMandatoryResourcesLoadCompleteHandler_1(this$static.board, loadedResources);
}

function $centerTexts_3(this$static){
  !!this$static.panel && $centerTexts_4(this$static.panel);
}

function $onBonusBoardComplete_0(this$static){
  var stepValue;
  if (dynamicCast($get_5(this$static.warBonusDO.gameSteps, this$static.warBonusDO.gameSteps.size_0 - this$static.roundsLeft - 1), Q$QueenOfDiamondsWarBonusStepDO).isWin) {
    $showWinAnimations(this$static.board);
    stepValue = this$static.warBonusDO.ticketCost;
    stepValue >= 1 && (stepValue = 1);
    $setTotalWin(this$static.panel, dynamicCast($get_5(this$static.warBonusDO.gameSteps, this$static.warBonusDO.gameSteps.size_0 - this$static.roundsLeft - 1), Q$QueenOfDiamondsWarBonusStepDO).accumulatedPrize.prizeAmount, stepValue);
  }
  if (this$static.roundsLeft > 0) {
    this$static.isReplay?$schedule(this$static.replayTimer, 1500):$enableButtons(this$static.panel, true);
  }
   else {
    $enableButtons(this$static.panel, false);
    getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'War_game_over', 32);
    $schedule(this$static.gameEndDelay, 4000);
  }
}

function $onFinishBonusGame_1(this$static){
  getSoundManager().stop_1(($clinit_Game431() , SOUND_FILE_URL), 'War_ambiance');
  getSoundManager().stop_1(SOUND_FILE_URL, 'War_popup_closing');
  getSoundManager().play_2(SOUND_FILE_URL, 'War_popup_closing', 34);
  $onFinishBonusGame(this$static.finishListener, '');
}

function $playGame_1(this$static){
  $setPotentialPrize(this$static.panel, dynamicCast($get_5(this$static.warBonusDO.gameSteps, this$static.warBonusDO.gameSteps.size_0 - this$static.roundsLeft), Q$QueenOfDiamondsWarBonusStepDO).stepPrize.prizeAmount);
  $playPotentialPrizeOutAnim(this$static.panel);
  $playGame_0(this$static.board, dynamicCast($get_5(this$static.warBonusDO.gameSteps, this$static.warBonusDO.gameSteps.size_0 - this$static.roundsLeft), Q$QueenOfDiamondsWarBonusStepDO));
  $setRoundsLeft(this$static, dynamicCast($get_5(this$static.warBonusDO.gameSteps, this$static.warBonusDO.gameSteps.size_0 - this$static.roundsLeft), Q$QueenOfDiamondsWarBonusStepDO).remainingMiniGames);
}

function $setData_3(this$static, dataObject){
  this$static.warBonusDO = dataObject;
  $setRoundsLeft(this$static, this$static.warBonusDO.gameSteps.size_0);
  $setPrize_0(this$static.warSummaryPopup, this$static.warBonusDO.prizeAmount);
}

function $setRoundsLeft(this$static, roundsLeft){
  this$static.roundsLeft = roundsLeft;
  $setRoundsLeft_0(this$static.panel, roundsLeft);
}

function QueenOfDiamondsWarBonusManager_0(locations, resources, finishListener, cardConfiguration, gameCustomization){
  var warPopupBGImage, warPopupBtnImage, warPopupBtnLocation, warPopupBtnTxt, warPopupSummaryBGLocation, warPopupSummarySubTxtLocation, warPopupSummaryTxtImage, warPopupSummaryTxtImgLocation;
  this.finishListener = finishListener;
  this.panel = new QueenOfDiamondsWarBonusPanel_0(resources, locations, gameCustomization, this);
  this.board = new QueenOfDiamondsWarBonusBoard_0(resources, locations, cardConfiguration, this);
  this.gameEndDelay = new QueenOfDiamondsWarBonusManager$1_0(this);
  warPopupBGImage = dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , WAR_BONUS_POPUP_BG).path), Q$TransformableImage);
  warPopupBtnImage = dynamicCast(resources.get(WAR_BONUS_POPUP_BTN.path), Q$TransformableImage);
  warPopupSummaryTxtImage = dynamicCast(resources.get(WAR_BONUS_SUMMARY_POPUP_TXT_IMG.path), Q$TransformableImage);
  warPopupSummaryBGLocation = dynamicCast(locations.locationsMap.get('WAR_POPUP_SUMMARY_BG'), Q$Location);
  warPopupBtnLocation = $reverseRelativeTo(dynamicCast(locations.locationsMap.get('WAR_POPUP_BTN'), Q$Location), warPopupSummaryBGLocation);
  $reverseRelativeTo(dynamicCast(locations.locationsMap.get('WAR_POPUP_TXT'), Q$Location), warPopupSummaryBGLocation);
  warPopupSummarySubTxtLocation = $reverseRelativeTo(dynamicCast(locations.locationsMap.get('WAR_POPUP_SUMMARY_AMOUNT'), Q$Location), warPopupSummaryBGLocation);
  warPopupSummaryTxtImgLocation = $reverseRelativeTo(dynamicCast(locations.locationsMap.get('WAR_POPUP_SUMMARY_TXT_IMG'), Q$Location), warPopupSummaryBGLocation);
  warPopupBtnTxt = get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_WAR_SUMMARY_BUTTON');
  get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_WAR_SUMMARY1');
  get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_WAR_SUMMARY2');
  this.warSummaryPopup = new QueenOfDiamondsBonusPopup_0(this.panel, warPopupBGImage, warPopupBtnImage, warPopupSummaryTxtImage, warPopupSummaryBGLocation, warPopupBtnLocation, warPopupSummarySubTxtLocation, warPopupSummaryTxtImgLocation, warPopupBtnTxt, 'warBonusPopupAmount', 'lobby-btn warBonusPopupButton', ($clinit_QueenOfDiamondsBoard$PopupType() , WAR_SUMMARY), new QueenOfDiamondsWarBonusManager$2_0(this));
  this.replayTimer = new QueenOfDiamondsWarBonusManager$3_0(this);
  this.autoDismissSummaryPopup = new QueenOfDiamondsWarBonusManager$4_0(this);
}

function QueenOfDiamondsWarBonusManager(){
}

_ = QueenOfDiamondsWarBonusManager_0.prototype = QueenOfDiamondsWarBonusManager.prototype = new Object_0;
_.getBonusPanel = function getBonusPanel_0(){
  return this.panel;
}
;
_.getClass$ = function getClass_547(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusManager_2_classLit;
}
;
_.playAmbienceSound = function playAmbienceSound_0(){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'War_ambiance', 35);
}
;
_.preRender = function preRender_3(){
  $preRender_3(this.board);
}
;
_.render = function render_3(g){
  $render_3(this.board, g);
}
;
_.reset_0 = function reset_3(){
  $reset_5(this.board);
  $reset_6(this.panel);
  $hidePopup(this.warSummaryPopup, ($clinit_Boolean() , $clinit_Boolean() , FALSE_0));
  this.isReplay = false;
  $cancel_0(this.autoDismissSummaryPopup);
}
;
_.startGame = function startGame_0(pls){
  if (pls != null) {
    this.isReplay = true;
    $schedule(this.replayTimer, 1500);
  }
   else {
    $schedule(this.board.callToActionDelay, 7000);
    $enableButtons(this.panel, true);
  }
}
;
_.autoDismissSummaryPopup = null;
_.board = null;
_.finishListener = null;
_.gameEndDelay = null;
_.isReplay = false;
_.panel = null;
_.replayTimer = null;
_.roundsLeft = 0;
_.warBonusDO = null;
_.warSummaryPopup = null;
function QueenOfDiamondsWarBonusManager$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsWarBonusManager$1(){
}

_ = QueenOfDiamondsWarBonusManager$1_0.prototype = QueenOfDiamondsWarBonusManager$1.prototype = new Timer;
_.getClass$ = function getClass_548(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusManager$1_2_classLit;
}
;
_.run = function run_20(){
  $showPopup(this.this$0.warSummaryPopup, this.this$0.panel, ($clinit_Boolean() , $clinit_Boolean() , TRUE_0));
  this.this$0.isReplay && $schedule(this.this$0.autoDismissSummaryPopup, 3000);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function QueenOfDiamondsWarBonusManager$2_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsWarBonusManager$2(){
}

_ = QueenOfDiamondsWarBonusManager$2_0.prototype = QueenOfDiamondsWarBonusManager$2.prototype = new Object_0;
_.getClass$ = function getClass_549(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusManager$2_2_classLit;
}
;
_.onBonusPopupCloseButtonClicked = function onBonusPopupCloseButtonClicked_0(type){
  $trackBonusEnd((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5), 'War');
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Continue', 38);
  $onFinishBonusGame_1(this.this$0);
}
;
_.this$0 = null;
function QueenOfDiamondsWarBonusManager$3_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsWarBonusManager$3(){
}

_ = QueenOfDiamondsWarBonusManager$3_0.prototype = QueenOfDiamondsWarBonusManager$3.prototype = new Timer;
_.getClass$ = function getClass_550(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusManager$3_2_classLit;
}
;
_.run = function run_21(){
  this.isRepeating?clearInterval_0(this.timerId):clearTimeout_0(this.timerId);
  $remove_11(timers, this);
  $playGame_1(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function QueenOfDiamondsWarBonusManager$4_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsWarBonusManager$4(){
}

_ = QueenOfDiamondsWarBonusManager$4_0.prototype = QueenOfDiamondsWarBonusManager$4.prototype = new Timer;
_.getClass$ = function getClass_551(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusManager$4_2_classLit;
}
;
_.run = function run_22(){
  this.isRepeating?clearInterval_0(this.timerId):clearTimeout_0(this.timerId);
  $remove_11(timers, this);
  $hidePopup(this.this$0.warSummaryPopup, ($clinit_Boolean() , $clinit_Boolean() , FALSE_0));
  $onFinishBonusGame_1(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function $centerTexts_4(this$static){
  !!this$static.htmlRoundsCounter && $centre(this$static.htmlRoundsCounter);
  !!this$static.htmlPotentialPrize && $centre(this$static.htmlPotentialPrize);
  !!this$static.htmlTotalWin && $centre(this$static.htmlTotalWin);
}

function $enableButtons(this$static, bEnabled){
  $setEnabled_4(this$static.battleBtn, bEnabled);
  $setEnabled_4(this$static.infoBtn, bEnabled);
  $setKeyboardEnabled((!instance_12 && (instance_12 = new KeyboardManager_0) , instance_12), bEnabled);
}

function $playPotentialPrizeInAnim(this$static){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'New_prize_reveal', 26);
  $setStyleName_2(this$static.htmlPotentialPrize, 'swashOut', false);
  $setStyleName_2(this$static.htmlPotentialPrize, 'swashIn', true);
  $setHTML_0(this$static.htmlPotentialPrize, this$static.potentialPrizeCurrentValue);
}

function $playPotentialPrizeOutAnim(this$static){
  $setStyleName_2(this$static.htmlPotentialPrize, 'swashIn', false);
  $setStyleName_2(this$static.htmlPotentialPrize, 'swashOut', true);
}

function $reset_6(this$static){
  $hide_4(this$static.infoPopup);
  $setHTML_0(this$static.htmlRoundsCounter, '0');
  $setPotentialPrize(this$static, 0);
  $setHTML_0(this$static.htmlTotalWin, '');
  this$static.totalWin_0 = 0;
}

function $setPotentialPrize(this$static, potentialPrize){
  var pennisValue;
  if (potentialPrize == 0) {
    $setHTML_0(this$static.htmlPotentialPrize, '');
  }
   else {
    pennisValue = dollarstopennies('' + potentialPrize);
    this$static.potentialPrizeCurrentValue = appendCurrencySymbol(penniesToDollars(pennisValue));
  }
}

function $setRoundsLeft_0(this$static, roundsLeft){
  $setHTML_0(this$static.htmlRoundsCounter, '' + roundsLeft);
}

function $setTotalWin(this$static, totalWin, rollupStep){
  this$static.rollUpStep = rollupStep;
  this$static.gameCustomization.startWarBonusRollup(this$static.totalWinCounter, this$static.totalWin_0, totalWin, rollupStep);
  this$static.totalWin_0 = totalWin;
}

function $showInfoPopup_0(this$static){
  $showPopup_1(this$static.infoPopup, this$static);
  $trackBonusInfoOpen((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5));
}

function QueenOfDiamondsWarBonusPanel_0(resources, locations, gameCustomization, listener){
  var battleBtnImg, battleBtnLocation, handler, infoBtnImg, infoBtnLocation;
  AbsoluteNeoPanel_0.call(this);
  this.resources = resources;
  this.locations = locations;
  this.gameCustomization = gameCustomization;
  this.listener = listener;
  this.infoPopup = new QueenOfDiamondsInfoPopup_0(this, this.resources, locations, ($clinit_QueenOfDiamondsInfoPopup$InfoPopupType() , WAR));
  battleBtnLocation = $getLocation_0(this.locations, 'WAR_BONUS_BATTLE_BUTTON');
  battleBtnImg = dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , WAR_BONUS_BATTLE_BUTTON).path), Q$TransformableImage);
  this.battleBtn = new MenuCommonButton_0('lobby-btn', '', battleBtnImg.image.src, $getWidth(battleBtnImg) >> 1, $getHeight(battleBtnImg) >> 1);
  this.battleBtn.element.style['zIndex'] = '65';
  handler = new QueenOfDiamondsWarBonusPanel$1_0(this, listener);
  $addClickHandler_0(this.battleBtn, handler);
  $add_15(this, this.battleBtn, battleBtnLocation);
  infoBtnLocation = $getLocation_0(this.locations, 'WAR_BONUS_INFO');
  infoBtnImg = dynamicCast(resources.get(WAR_BONUS_INFO_BUTTON.path), Q$TransformableImage);
  this.infoBtn = new MenuCommonButton_0('lobby-btn', '', infoBtnImg.image.src, $getWidth(infoBtnImg) >> 1, $getHeight(infoBtnImg) >> 1);
  this.infoBtn.element.style['zIndex'] = '65';
  handler = new QueenOfDiamondsWarBonusPanel$2_0(this);
  $addClickHandler_0(this.infoBtn, handler);
  $add_15(this, this.infoBtn, infoBtnLocation);
  this.htmlRoundsCounter = new CentredHTML_1('' + listener.roundsLeft);
  this.htmlRoundsCounter.element.style['zIndex'] = '95';
  $setPosition_1(this.htmlRoundsCounter, dynamicCast(locations.locationsMap.get('WAR_BONUS_ROUNDS_LEFT_NUMBER'), Q$Location));
  $setStyleName_2(this.htmlRoundsCounter, 'warBonusRoundsLeft', true);
  $add_1(this, this.htmlRoundsCounter);
  this.htmlPotentialPrize = new CentredHTML_0;
  this.htmlPotentialPrize.element.style['zIndex'] = '95';
  $setPosition_1(this.htmlPotentialPrize, dynamicCast(locations.locationsMap.get('WAR_BONUS_ROUND_PRIZE_VALUE'), Q$Location));
  $setStyleName_2(this.htmlPotentialPrize, 'warBonusRoundPrize', true);
  $add_1(this, this.htmlPotentialPrize);
  this.htmlTotalWin = new CentredHTML_0;
  this.htmlTotalWin.element.style['zIndex'] = '95';
  $setPosition_1(this.htmlTotalWin, dynamicCast(locations.locationsMap.get('WAR_BONUS_TOTAL_WINS_VALUE'), Q$Location));
  $setStyleName_2(this.htmlTotalWin, 'warBonusTotalWins', true);
  $add_1(this, this.htmlTotalWin);
  this.totalWinCounter = new QueenOfDiamondsWarBonusPanel$3_0(this, this.htmlTotalWin);
  this.totalWinCounter.adjuistStepValue = false;
  this.totalWinCounter.ignoreTotalTimeLimitForMinStepTime = true;
  this.totalWin_0 = 0;
  $addLeyboardListener((!instance_12 && (instance_12 = new KeyboardManager_0) , instance_12), new QueenOfDiamondsWarBonusPanel$4_0(this));
}

function QueenOfDiamondsWarBonusPanel(){
}

_ = QueenOfDiamondsWarBonusPanel_0.prototype = QueenOfDiamondsWarBonusPanel.prototype = new AbsoluteNeoPanel;
_.getClass$ = function getClass_552(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusPanel_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AbsolutePanel, Q$ComplexPanel, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$AbsoluteNeoPanel]);
_.battleBtn = null;
_.gameCustomization = null;
_.htmlPotentialPrize = null;
_.htmlRoundsCounter = null;
_.htmlTotalWin = null;
_.infoBtn = null;
_.infoPopup = null;
_.listener = null;
_.locations = null;
_.potentialPrizeCurrentValue = null;
_.resources = null;
_.rollUpStep = 0;
_.totalWin_0 = 0;
_.totalWinCounter = null;
function QueenOfDiamondsWarBonusPanel$1_0(this$0, val$listener){
  this.this$0 = this$0;
  this.val$listener = val$listener;
}

function QueenOfDiamondsWarBonusPanel$1(){
}

_ = QueenOfDiamondsWarBonusPanel$1_0.prototype = QueenOfDiamondsWarBonusPanel$1.prototype = new Object_0;
_.getClass$ = function getClass_553(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusPanel$1_2_classLit;
}
;
_.onClick = function onClick_10(event_0){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Battle', 39);
  $enableButtons(this.this$0, false);
  $playGame_1(this.val$listener);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
_.val$listener = null;
function QueenOfDiamondsWarBonusPanel$2_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsWarBonusPanel$2(){
}

_ = QueenOfDiamondsWarBonusPanel$2_0.prototype = QueenOfDiamondsWarBonusPanel$2.prototype = new Object_0;
_.getClass$ = function getClass_554(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusPanel$2_2_classLit;
}
;
_.onClick = function onClick_11(event_0){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Info', 37);
  $isShowing(this.this$0.infoPopup)?$hidePopupWithFadeOut_0(this.this$0.infoPopup):$showInfoPopup_0(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function QueenOfDiamondsWarBonusPanel$3_0(this$0, $anonymous0){
  this.this$0 = this$0;
  TextCounterView_0.call(this, $anonymous0, 2000);
}

function QueenOfDiamondsWarBonusPanel$3(){
}

_ = QueenOfDiamondsWarBonusPanel$3_0.prototype = QueenOfDiamondsWarBonusPanel$3.prototype = new TextCounterView;
_.getClass$ = function getClass_555(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusPanel$3_2_classLit;
}
;
_.getFormattedValue = function getFormattedValue_1(value){
  var pennisResult;
  pennisResult = dollarstopennies(value + '');
  if (this.this$0.rollUpStep < 1) {
    return penniesToDollarsWithTwoDigits(pennisResult);
  }
  return penniesToDollars(pennisResult);
}
;
_.this$0 = null;
function QueenOfDiamondsWarBonusPanel$4_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsWarBonusPanel$4(){
}

_ = QueenOfDiamondsWarBonusPanel$4_0.prototype = QueenOfDiamondsWarBonusPanel$4.prototype = new Object_0;
_.getClass$ = function getClass_556(){
  return Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusPanel$4_2_classLit;
}
;
_.onKeyboardKeyPressed = function onKeyboardKeyPressed(keboardKey){
  if (keboardKey == 0 && !this.this$0.battleBtn.button_0.element['disabled'] && this.this$0.attached) {
    $enableButtons(this.this$0, false);
    $isShowing(this.this$0.infoPopup) && $hidePopupWithFadeOut_0(this.this$0.infoPopup);
    $playGame_1(this.this$0.listener);
  }
}
;
_.castableTypeMap$ = makeCastMap([Q$IKeyboardListener]);
_.this$0 = null;
function getQueenOfDiamondsCustomization(){
  if (envType_0 == ($clinit_Constants$CommonGamesConstants$ENVIRONMENT_TYPE() , WEB)) {
    return new QueenOfDiamondsCustomizationWeb_0;
  }
  return new QueenOfDiamondsCustomizationMobile_0;
}

function QueenOfDiamondsCustomizationMobile_0(){
}

function QueenOfDiamondsCustomizationMobile(){
}

_ = QueenOfDiamondsCustomizationMobile_0.prototype = QueenOfDiamondsCustomizationMobile.prototype = new Object_0;
_.gamePreferredNonMandatoryResourcesLoadCompleteHandler_1 = function gamePreferredNonMandatoryResourcesLoadCompleteHandler_1(loadedResources, panel){
  var soundsList;
  soundsList = new ArrayList_0;
  $add_10(soundsList, new SoundDO_0(($clinit_Game431() , SOUND_FILE_URL), dynamicCast(loadedResources.get(($clinit_QueenOfDiamondsResources() , SOUND).path), Q$JSONValue)));
  $init_38(getSoundManager(), soundsList);
  $showPopup_4(getSoundManager(), panel, SOUND_FILE_URL, this, get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_SOUND_POPUP_TITLE'), get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_SOUND_POPUP_BODY'), get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_SOUND_POPUP_YES'), get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_SOUND_POPUP_NO'));
}
;
_.getCardsConfigurationService = function getCardsConfigurationService(){
  var cardsConfigurations;
  cardsConfigurations = new QueenOfDiamondsCardsConfigurationsService_0;
  $setMainGameCardConfiguration(cardsConfigurations, new QueenOfDiamondsMainGameCardConfigurationMobile_0);
  $setJokerBonusCardConfiguration(cardsConfigurations, new QueenOfDiamondsJokerBonusCardConfigurationMobile_0);
  $setWarBonusCardConfiguration(cardsConfigurations, new QueenOfDiamondsWarBonusCardConfigurationMobile_0);
  return cardsConfigurations;
}
;
_.getClass$ = function getClass_557(){
  return Lwebgl_client_nf_games_g431_customization_QueenOfDiamondsCustomizationMobile_2_classLit;
}
;
_.getGameExternalResourcesList = function getGameExternalResourcesList_0(){
  var resources;
  resources = new HashMap_0;
  resources.put('locations', new LoadingItem_0(XMLLocationsGameURL + ($clinit_QueenOfDiamondsResources() , LOCATIONS_GAME).path + '.xml', 1));
  resources.put('gameBG', new LoadingItem_1(DownloadServerGamesGameNumURL, BACKGROUND_0.path + '.jpg', 0, dynamicCast($getPlayerInfo(($clinit_PlayerDO() , paramsTag)[6]), Q$String)));
  addImageResource(resources, DONT_SHOW_MARKER.path, '.png', null);
  addImageResource(resources, SPLASH.path, '.jpg', dynamicCast($getPlayerInfo(paramsTag[6]), Q$String));
  addImageResource(resources, JOKER_WIN.path, '.png', null);
  addImageResource(resources, INFO_STICK.path, '.png', null);
  addImageResource(resources, INFO.path, '.png', null);
  addImageResource(resources, INFO_CONTENT_2.path, '.png', null);
  addImageResource(resources, INFO_CONTENT_3.path, '.png', null);
  addImageResource(resources, JOKER_BONUS_NAVIGATOR.path, '.png', null);
  addImageResource(resources, JOKER_BONUS_POPUP_BG.path, '.png', null);
  addImageResource(resources, WAR_BONUS_POPUP_BG.path, '.png', null);
  addImageResource(resources, TOOL_TIP.path, '.png', null);
  addImageResource(resources, JOKER_BONUS_POPUP_TXT_IMG.path, '.png', null);
  addImageResource(resources, JOKER_BONUS_SUMMARY_POPUP_TXT_IMG.path, '.png', null);
  addImageResource(resources, WAR_BONUS_POPUP_TXT_IMG.path, '.png', null);
  addImageResource(resources, WAR_BONUS_SUMMARY_POPUP_TXT_IMG.path, '.png', null);
  addImageResource(resources, MENU_LOGO.path, '.png', dynamicCast($getPlayerInfo(paramsTag[6]), Q$String));
  addImageResource_0(BUTTON_REVEAL_ALL.path, resources, BUTTON_REVEAL_ALL.path, gameDO_0.gameScratchVisualEffectCode);
  addImageResource(resources, BUTTON_PLAY.path, '.png', null);
  addImageResource(resources, CONTINUE_BTN.path, '.png', null);
  addImageResource(resources, JOKER_BONUS_POPUP_BTN.path, '.png', null);
  addImageResource(resources, WAR_BONUS_POPUP_BTN.path, '.png', null);
  addImageResource(resources, INFO_X_BTN.path, '.png', null);
  addAnimationResource(resources, CARD_SELECT.path, null);
  addAnimationResource(resources, CARDS.path, null);
  addAnimationResource(resources, CARD_FLIP.path, gameDO_0.gameScratchVisualEffectCode);
  addAnimationResource(resources, GOLD_CARD_FLIP.path, gameDO_0.gameScratchVisualEffectCode);
  addAnimationResource(resources, JOKER_CARD.path, gameDO_0.gameScratchVisualEffectCode);
  addAnimationResource(resources, QUEEN_CARD.path, gameDO_0.gameScratchVisualEffectCode);
  addAnimationResource(resources, QUEEN_CARD_WIN.path, null);
  addAnimationResource(resources, WIN_FRAME.path, null);
  addAnimationResource(resources, JOKER_COIN.path, null);
  addAnimationResource(resources, JOKER_LEGEND_TEXT.path, null);
  addAnimationResource(resources, WAR_BONUS.path, null);
  addAnimationResource(resources, WAR_LEGEND_TEXT.path, null);
  addAnimationResource(resources, LEGEND_PRIZE.path, null);
  addImageResource(resources, JOKER_BONUS_BG.path, '.jpg', null);
  addImageResource(resources, JOKER_BONUS_INFO_BUTTON.path, '.png', null);
  addAnimationResource(resources, JOKER_BONUS_STRIKE_ANIM.path, null);
  addAnimationResource(resources, BONUSES_CARDS.path, null);
  addAnimationResource(resources, JOKER_BONUS_CARD_FLIP.path, null);
  addAnimationResource(resources, JOKER_BONUS_CARD.path, gameDO_0.gameScratchVisualEffectCode);
  addAnimationResource(resources, JOKER_BONUS_CARD_X.path, gameDO_0.gameScratchVisualEffectCode);
  addAnimationResource(resources, JOKER_BONUS_WIN_FRAME.path, null);
  addImageResource(resources, WAR_BONUS_BG.path, '.jpg', null);
  addImageResource(resources, WAR_BONUS_BATTLE_BUTTON.path, '.png', null);
  addImageResource(resources, WAR_BONUS_INFO_BUTTON.path, '.png', null);
  addAnimationResource(resources, WAR_BONUS_SWORDS.path, null);
  addAnimationResource(resources, WAR_BONUS_FLIP_QUEEN.path, null);
  addAnimationResource(resources, WAR_BONUS_FLIP_PLAYER.path, null);
  addAnimationResource(resources, WAR_BONUS_WIN_LOSE_QUEEN.path, null);
  addAnimationResource(resources, WAR_BONUS_WIN_LOSE_PLAYER.path, null);
  addAnimationResource(resources, WAR_BONUS_DIAMOND.path, null);
  addAnimationResource(resources, WAR_BONUS_WIN_FLAG.path, null);
  addAnimationResource(resources, WAR_BONUS_CALL_TO_ACTION.path, null);
  addAnimationResource(resources, WAR_BONUS_ALL_QUEEN_LIGHT_ANIM.path, null);
  addAnimationResource(resources, WAR_BONUS_ALL_PLAYER_LIGHT_ANIM.path, null);
  addAnimationResource(resources, WAR_BONUS_WIN_FRAME.path, null);
  addAnimationResource(resources, WAR_BONUS_WIN_FRAME_QUEEN.path, null);
  resources.put('/carouselBack', new LoadingItem_0(DownloadServerGamesCommonURL + '/carouselBack.png', 0));
  resources.put('/rightButton', new LoadingItem_0(DownloadServerGamesCommonURL + '/rightButton.png', 0));
  resources.put('/leftButton', new LoadingItem_0(DownloadServerGamesCommonURL + '/leftButton.png', 0));
  return resources;
}
;
_.getGameNonMandatoryResourcesList = function getGameNonMandatoryResourcesList_0(){
  var resources;
  resources = new HashMap_0;
  addAnimationResource(resources, ($clinit_QueenOfDiamondsResources() , TRUMPET).path, null);
  addAnimationResource(resources, TRUMPET_rotate.path, null);
  addImageResource(resources, ITS_A_WINNER.path, '.png', null);
  addImageResource(resources, STICK.path, '.png', null);
  addImageResource(resources, DARK_BG.path, '.png', null);
  addImageResource(resources, BIG_WIN_DIAMOND_1.path, '.png', null);
  addImageResource(resources, BIG_WIN_DIAMOND_2.path, '.png', null);
  addImageResource(resources, BIG_WIN_DIAMOND_3.path, '.png', null);
  addImageResource(resources, BIG_WIN_AMOUNT_BG.path, '.png', null);
  addImageResource(resources, BIG_WIN_TITLE_BG.path, '.png', null);
  addAnimationResource(resources, LOGO_ALL_TIME.path, null);
  addAnimationResource(resources, PLAY_ALL_TIME.path, null);
  addAnimationResource(resources, WAR_BONUS_ALL_QUEEN.path, null);
  addAnimationResource(resources, WAR_BONUS_ALL_PLAYER.path, null);
  addAnimationResource(resources, WAR_BONUS_FALL_QUEEN.path, null);
  addAnimationResource(resources, WAR_BONUS_FALL_PLAYER.path, null);
  addAnimationResource(resources, WAR_BONUS_POOF.path, null);
  addAnimationResource(resources, WAR_BONUS_DOOR.path, null);
  return resources;
}
;
_.getGamePreferredNonMandatoryResourcesList_0 = function getGamePreferredNonMandatoryResourcesList_0(isSoundRequired){
  var resources;
  resources = new HashMap_0;
  isSoundRequired && addSoundResource(resources, ($clinit_QueenOfDiamondsResources() , SOUND).path);
  return resources;
}
;
_.getGameRotateNonMandatoryResourcesList_0 = function getGameRotateNonMandatoryResourcesList_0(){
  return null;
}
;
_.getJokerBonusTotalWinHTML = function getJokerBonusTotalWinHTML(textLocation, panel){
  return null;
}
;
_.getQueenOfDiamondsPanel = function getQueenOfDiamondsPanel(){
  return new QueenOfDiamondsPanelMobile_0;
}
;
_.initAllTimeAnimationController = function initAllTimeAnimationController(loadedResources, gameLocations, jokerLegendAnimItem){
  var allTimeAnimationController;
  allTimeAnimationController = new QueenOfDiamondsAllTimeAnimationController_0;
  $init_17(allTimeAnimationController, loadedResources, gameLocations, false, jokerLegendAnimItem);
  $startAllTimeAnimations(allTimeAnimationController);
  return allTimeAnimationController;
}
;
_.initGameSettingsMenuPanel = function initGameSettingsMenuPanel(gameSettingsPanel, numTicketsValuesRange, numOfSelectedTicketsIndex, services, listener){
  $init_31(gameSettingsPanel, numTicketsValuesRange, numOfSelectedTicketsIndex, services, listener);
}
;
_.initInfoPopup = function initInfoPopup(container, resources, locations, infoListener){
  return null;
}
;
_.onGameMandatoryResourcesLoadCompleteHandler = function onGameMandatoryResourcesLoadCompleteHandler(loadedResources){
}
;
_.onGameNonMandatoryResourcesLoadCompleteHandler = function onGameNonMandatoryResourcesLoadCompleteHandler(loadedResources, panel){
}
;
_.onPopupDialogClosed = function onPopupDialogClosed(dialog){
  $trackSplashScreenOpen((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5));
}
;
_.startJokerBonusRollup = function startJokerBonusRollup(totalWinCounter, startValue, endValue, rollupStep){
}
;
_.startWarBonusRollup = function startWarBonusRollup(totalWinCounter, startValue, endValue, rollupStep){
  $start(totalWinCounter, startValue, endValue, rollupStep);
}
;
_.castableTypeMap$ = makeCastMap([Q$IPopupDialogListener]);
function QueenOfDiamondsCustomizationWeb_0(){
}

function QueenOfDiamondsCustomizationWeb(){
}

_ = QueenOfDiamondsCustomizationWeb_0.prototype = QueenOfDiamondsCustomizationWeb.prototype = new Object_0;
_.gamePreferredNonMandatoryResourcesLoadCompleteHandler_1 = function gamePreferredNonMandatoryResourcesLoadCompleteHandler_2(loadedResources, panel){
}
;
_.getCardsConfigurationService = function getCardsConfigurationService_0(){
  var cardsConfigurations;
  cardsConfigurations = new QueenOfDiamondsCardsConfigurationsService_0;
  $setMainGameCardConfiguration(cardsConfigurations, new QueenOfDiamondsMainGameCardConfigurationWeb_0);
  $setJokerBonusCardConfiguration(cardsConfigurations, new QueenOfDiamondsJokerBonusCardConfigurationWeb_0);
  $setWarBonusCardConfiguration(cardsConfigurations, new QueenOfDiamondsWarBonusCardConfigurationWeb_0);
  return cardsConfigurations;
}
;
_.getClass$ = function getClass_558(){
  return Lwebgl_client_nf_games_g431_customization_QueenOfDiamondsCustomizationWeb_2_classLit;
}
;
_.getGameExternalResourcesList = function getGameExternalResourcesList_1(){
  var resources;
  resources = new HashMap_0;
  resources.put('locations', new LoadingItem_0(XMLLocationsGameURL + ($clinit_QueenOfDiamondsResources() , LOCATIONS_GAME).path + '.xml', 1));
  resources.put('gameBG', new LoadingItem_1(DownloadServerGamesGameNumURL, BACKGROUND_0.path + '.jpg', 0, dynamicCast($getPlayerInfo(($clinit_PlayerDO() , paramsTag)[6]), Q$String)));
  addImageResource(resources, INFO_STICK.path, '.png', null);
  addImageResource(resources, INFO.path, '.png', null);
  addImageResource(resources, DONT_SHOW_MARKER.path, '.png', null);
  addImageResource(resources, SPLASH.path, '.jpg', dynamicCast($getPlayerInfo(paramsTag[6]), Q$String));
  addImageResource(resources, JOKER_WIN.path, '.png', null);
  addImageResource(resources, INFO_CONTENT_1.path, '.png', null);
  addImageResource(resources, INFO_CONTENT_2.path, '.png', null);
  addImageResource(resources, INFO_CONTENT_3.path, '.png', null);
  addImageResource(resources, JOKER_BONUS_NAVIGATOR.path, '.png', null);
  addImageResource(resources, JOKER_BONUS_POPUP_BG.path, '.png', null);
  addImageResource(resources, WAR_BONUS_POPUP_BG.path, '.png', null);
  addImageResource(resources, TOOL_TIP.path, '.png', null);
  addImageResource(resources, JOKER_BONUS_POPUP_TXT_IMG.path, '.png', null);
  addImageResource(resources, JOKER_BONUS_SUMMARY_POPUP_TXT_IMG.path, '.png', null);
  addImageResource(resources, WAR_BONUS_POPUP_TXT_IMG.path, '.png', null);
  addImageResource(resources, WAR_BONUS_SUMMARY_POPUP_TXT_IMG.path, '.png', null);
  addImageResource_0(BUTTON_REVEAL_ALL.path, resources, BUTTON_REVEAL_ALL.path, gameDO_0.gameScratchVisualEffectCode);
  addImageResource(resources, BUTTON_PLAY.path, '.png', null);
  addImageResource(resources, CONTINUE_BTN.path, '.png', null);
  addImageResource(resources, I_BTN.path, '.png', null);
  addImageResource(resources, INFO_X_BTN.path, '.png', null);
  addImageResource(resources, TICKET_COST_MINUS.path, '.png', null);
  addImageResource(resources, TICKET_COST_PLUS.path, '.png', null);
  addImageResource(resources, TICKET_NUM_MINUS.path, '.png', null);
  addImageResource(resources, TICKET_NUM_PLUS.path, '.png', null);
  addImageResource(resources, JOKER_BONUS_POPUP_BTN.path, '.png', null);
  addImageResource(resources, WAR_BONUS_POPUP_BTN.path, '.png', null);
  addAnimationResource(resources, CARD_SELECT.path, null);
  addAnimationResource(resources, CARDS.path, null);
  addAnimationResource(resources, CARD_FLIP.path, gameDO_0.gameScratchVisualEffectCode);
  addAnimationResource(resources, GOLD_CARD_FLIP.path, gameDO_0.gameScratchVisualEffectCode);
  addAnimationResource(resources, JOKER_CARD.path, gameDO_0.gameScratchVisualEffectCode);
  addAnimationResource(resources, QUEEN_CARD.path, gameDO_0.gameScratchVisualEffectCode);
  addAnimationResource(resources, QUEEN_CARD_WIN.path, null);
  addAnimationResource(resources, WIN_FRAME.path, null);
  addAnimationResource(resources, GENERAL_WIN.path, null);
  addAnimationResource(resources, JOKER_COIN.path, null);
  addAnimationResource(resources, JOKER_LEGEND_TEXT.path, null);
  addAnimationResource(resources, WAR_BONUS.path, null);
  addAnimationResource(resources, WAR_LEGEND_TEXT.path, null);
  addAnimationResource(resources, LEGEND_PRIZE.path, null);
  addImageResource(resources, JOKER_BONUS_BG.path, '.jpg', null);
  addImageResource(resources, JOKER_BONUS_INFO_BUTTON.path, '.png', null);
  addAnimationResource(resources, JOKER_BONUS_STRIKE_ANIM.path, null);
  addAnimationResource(resources, BONUSES_CARDS.path, null);
  addAnimationResource(resources, JOKER_BONUS_CARD_FLIP.path, null);
  addAnimationResource(resources, JOKER_BONUS_CARD.path, gameDO_0.gameScratchVisualEffectCode);
  addAnimationResource(resources, JOKER_BONUS_CARD_X.path, gameDO_0.gameScratchVisualEffectCode);
  addAnimationResource(resources, JOKER_BONUS_WIN_FRAME.path, null);
  addImageResource(resources, WAR_BONUS_BG.path, '.jpg', null);
  addImageResource(resources, WAR_BONUS_BATTLE_BUTTON.path, '.png', null);
  addImageResource(resources, WAR_BONUS_INFO_BUTTON.path, '.png', null);
  addAnimationResource(resources, WAR_BONUS_SWORDS.path, null);
  addAnimationResource(resources, WAR_BONUS_FLIP_QUEEN.path, null);
  addAnimationResource(resources, WAR_BONUS_FLIP_PLAYER.path, null);
  addAnimationResource(resources, WAR_BONUS_WIN_LOSE_QUEEN.path, null);
  addAnimationResource(resources, WAR_BONUS_WIN_LOSE_PLAYER.path, null);
  addAnimationResource(resources, WAR_BONUS_DIAMOND.path, null);
  addAnimationResource(resources, WAR_BONUS_WIN_FLAG.path, null);
  addAnimationResource(resources, WAR_BONUS_CALL_TO_ACTION.path, null);
  addAnimationResource(resources, WAR_BONUS_ALL_QUEEN_LIGHT_ANIM.path, null);
  addAnimationResource(resources, WAR_BONUS_ALL_PLAYER_LIGHT_ANIM.path, null);
  addAnimationResource(resources, WAR_BONUS_WIN_FRAME.path, null);
  addAnimationResource(resources, WAR_BONUS_WIN_FRAME_QUEEN.path, null);
  addSoundResource(resources, SOUND.path);
  return resources;
}
;
_.getGameNonMandatoryResourcesList = function getGameNonMandatoryResourcesList_1(){
  var resources;
  resources = new HashMap_0;
  addAnimationResource(resources, ($clinit_QueenOfDiamondsResources() , TRUMPET).path, null);
  addImageResource(resources, ITS_A_WINNER.path, '.png', null);
  addImageResource(resources, STICK.path, '.png', null);
  addImageResource(resources, DARK_BG.path, '.png', null);
  addImageResource(resources, BIG_WIN_DIAMOND_1.path, '.png', null);
  addImageResource(resources, BIG_WIN_DIAMOND_2.path, '.png', null);
  addImageResource(resources, BIG_WIN_DIAMOND_3.path, '.png', null);
  addImageResource(resources, BIG_WIN_AMOUNT_BG.path, '.png', null);
  addImageResource(resources, BIG_WIN_TITLE_BG.path, '.png', null);
  addAnimationResource(resources, LOGO_ALL_TIME.path, null);
  addAnimationResource(resources, PLAY_ALL_TIME.path, null);
  addAnimationResource(resources, WAR_BONUS_ALL_QUEEN.path, null);
  addAnimationResource(resources, WAR_BONUS_ALL_PLAYER.path, null);
  addAnimationResource(resources, WAR_BONUS_FALL_QUEEN.path, null);
  addAnimationResource(resources, WAR_BONUS_FALL_PLAYER.path, null);
  addAnimationResource(resources, WAR_BONUS_POOF.path, null);
  addAnimationResource(resources, WAR_BONUS_DOOR.path, null);
  return resources;
}
;
_.getGamePreferredNonMandatoryResourcesList_0 = function getGamePreferredNonMandatoryResourcesList_1(isSoundRequired){
  return null;
}
;
_.getGameRotateNonMandatoryResourcesList_0 = function getGameRotateNonMandatoryResourcesList_1(){
  var mirroredResources, trumpetAnimMirror;
  mirroredResources = new ArrayList_0;
  trumpetAnimMirror = new RotateResourceElement_0(($clinit_QueenOfDiamondsResources() , TRUMPET).path, initValues(_3Lwebgl_client_nf_resource_RotateResourcesLoader$ROTATION_1TYPE_2_classLit, makeCastMap([Q$Serializable]), -1, [0]));
  setCheck(mirroredResources.array, mirroredResources.size_0++, trumpetAnimMirror);
  return mirroredResources;
}
;
_.getJokerBonusTotalWinHTML = function getJokerBonusTotalWinHTML_0(textLocation, panel){
  var totalWinHtml;
  totalWinHtml = new CentredHTML_0;
  totalWinHtml.element['className'] = 'jokerBonusWinTitleWin';
  $centre(totalWinHtml);
  $setPosition_1(totalWinHtml, textLocation);
  totalWinHtml.textAlignment = 0;
  $add_2(panel, totalWinHtml, 0, 0);
  return totalWinHtml;
}
;
_.getQueenOfDiamondsPanel = function getQueenOfDiamondsPanel_0(){
  return new QueenOfDiamondsPanelWeb_0;
}
;
_.initAllTimeAnimationController = function initAllTimeAnimationController_0(loadedResources, gameLocations, jokerLegendAnimItem){
  var allTimeAnimationController;
  allTimeAnimationController = new QueenOfDiamondsAllTimeAnimationController_0;
  $init_17(allTimeAnimationController, loadedResources, gameLocations, true, jokerLegendAnimItem);
  $startAllTimeAnimations(allTimeAnimationController);
  return allTimeAnimationController;
}
;
_.initGameSettingsMenuPanel = function initGameSettingsMenuPanel_0(gameSettingsPanel, numTicketsValuesRange, numOfSelectedTicketsIndex, services, listener){
}
;
_.initInfoPopup = function initInfoPopup_0(container, resources, locations, infoListener){
  return new QueenOfDiamondsInfoPopup_0(container, resources, locations, ($clinit_QueenOfDiamondsInfoPopup$InfoPopupType() , MAIN));
}
;
_.onGameMandatoryResourcesLoadCompleteHandler = function onGameMandatoryResourcesLoadCompleteHandler_0(loadedResources){
  var soundsList;
  soundsList = new ArrayList_0;
  $add_10(soundsList, new SoundDO_0(($clinit_Game431() , SOUND_FILE_URL), dynamicCast(loadedResources.get(($clinit_QueenOfDiamondsResources() , SOUND).path), Q$JSONValue)));
  $init_37(getSoundManager(), soundsList, SOUND_FILE_URL);
}
;
_.onGameNonMandatoryResourcesLoadCompleteHandler = function onGameNonMandatoryResourcesLoadCompleteHandler_0(loadedResources, panel){
}
;
_.startJokerBonusRollup = function startJokerBonusRollup_0(totalWinCounter, startValue, endValue, rollupStep){
  $start(totalWinCounter, startValue, endValue, rollupStep);
}
;
_.startWarBonusRollup = function startWarBonusRollup_0(totalWinCounter, startValue, endValue, rollupStep){
  $start(totalWinCounter, startValue, endValue, rollupStep);
}
;
function $getLocation_0(this$static, locationName){
  return dynamicCast(this$static.locationsMap.get(locationName), Q$Location);
}

function $isNewLocationFormat_0(locations){
  var version, versionNum;
  version = $get_0(locations, 0);
  if (instanceOf(version, Q$JSONString)) {
    versionNum = version.isString().value_0;
    if ($equals(versionNum, '2.0')) {
      return true;
    }
  }
  return false;
}

function $parseAndSaveLocations_0(this$static, locations){
  var i, locIndex, location_0;
  if ($isNewLocationFormat_0(locations)) {
    $parseAndSaveNewFormatLocations(this$static, locations);
  }
   else {
    locIndex = 0;
    for (i = 0; i < locations.jsArray.length; i += 4) {
      location_0 = new Location_1(round_int($get_0(locations, i).isNumber().value_0), round_int($get_0(locations, i + 1).isNumber().value_0), round_int($get_0(locations, i + 2).isNumber().value_0), round_int($get_0(locations, i + 3).isNumber().value_0));
      this$static.locations.put(null, location_0);
      this$static.locationsMap.put(this$static.getLocationConst(locIndex), location_0);
      ++locIndex;
    }
  }
}

function $parseAndSaveNewFormatLocations(this$static, locations){
  var i, key, locIndex, location_0, locationObj, obj;
  locIndex = 0;
  for (i = 1; i < locations.jsArray.length; ++i) {
    obj = $get_0(locations, i).isObject();
    key = dynamicCast($next_2(new AbstractList$IteratorImpl_0(new Arrays$ArrayList_0($keySet(obj).val$keys))), Q$String);
    locationObj = $get_1(obj, key).isObject();
    location_0 = new Location_1(round_int($get_1(locationObj, 'x').isNumber().value_0), round_int($get_1(locationObj, 'y').isNumber().value_0), round_int($get_1(locationObj, 'w').isNumber().value_0), round_int($get_1(locationObj, 'h').isNumber().value_0));
    this$static.locations.put(null, location_0);
    this$static.locationsMap.put(key, location_0);
    ++locIndex;
  }
}

function AbstractGameLocations(){
}

_ = AbstractGameLocations.prototype = new Object_0;
_.getClass$ = function getClass_559(){
  return Lwebgl_client_nf_games_location_AbstractGameLocations_2_classLit;
}
;
_.getLocationConst = function getLocationConst(index){
  return null;
}
;
_.locations = null;
_.locationsMap = null;
function $clinit_QueenOfDiamondsLocations(){
  $clinit_QueenOfDiamondsLocations = nullMethod;
  KEYS = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$CharSequence_$1, Q$Comparable_$1, Q$Object_$1, Q$String_$1]), Q$String, ['g431bgHorz', 'g431Cell', 'g431Info', 'g431Splash', 'g431ItsAWinner', 'g431BigWin', 'g431JokerBonus', 'g431JokerPopUp', 'g431JokerPopUpSummary', 'g431WarPopUp', 'g431WarPopUpSummary', 'g431JokerBonusCell', 'g431InfoJoker', 'g431InfoWar', 'g431WarBonus', 'g431WarBonusBlue', 'g431WarBonusRed']);
}

function QueenOfDiamondsLocations_0(){
  this.locations = new HashMap_0;
  this.locationsMap = new HashMap_0;
}

function QueenOfDiamondsLocations(){
}

_ = QueenOfDiamondsLocations.prototype = new AbstractGameLocations;
_.getClass$ = function getClass_560(){
  return Lwebgl_client_nf_games_g431_locations_QueenOfDiamondsLocations_2_classLit;
}
;
var KEYS;
function getQueenOfDiamondsLocations(){
  if (envType_0 == ($clinit_Constants$CommonGamesConstants$ENVIRONMENT_TYPE() , WEB)) {
    return new QueenOfDiamondsLocationsWeb_0;
  }
  return new QueenOfDiamondsLocationsMobile_0;
}

function QueenOfDiamondsLocationsMobile_0(){
  $clinit_QueenOfDiamondsLocations();
  QueenOfDiamondsLocations_0.call(this);
  this.locationsString = new ArrayList_0;
  $add_10(this.locationsString, 'BOARD_BALANCE_TITLE');
  $add_10(this.locationsString, 'BOARD_BALANCE_VALUE');
  $add_10(this.locationsString, 'BOARD_TOTAL_COST_LABLE');
  $add_10(this.locationsString, 'BOARD_TOTAL_COST_AMOUNT');
  $add_10(this.locationsString, 'BOARD_TOTAL_WINS_TITLE');
  $add_10(this.locationsString, 'BOARD_TOTAL_WINS_VALUE');
  $add_10(this.locationsString, 'BOARD_CARD1');
  $add_10(this.locationsString, 'BOARD_CARD2');
  $add_10(this.locationsString, 'BOARD_CARD3');
  $add_10(this.locationsString, 'BOARD_CARD4');
  $add_10(this.locationsString, 'BOARD_CARD5');
  $add_10(this.locationsString, 'BOARD_CARD6');
  $add_10(this.locationsString, 'BOARD_CARD7');
  $add_10(this.locationsString, 'BOARD_CARD8');
  $add_10(this.locationsString, 'BOARD_CARD9');
  $add_10(this.locationsString, 'BOARD_CARD10');
  $add_10(this.locationsString, 'BOARD_CARD11');
  $add_10(this.locationsString, 'BOARD_CARD12');
  $add_10(this.locationsString, 'BOARD_CARD13');
  $add_10(this.locationsString, 'BOARD_CARD14');
  $add_10(this.locationsString, 'BOARD_CARD15');
  $add_10(this.locationsString, 'BOARD_CARD16');
  $add_10(this.locationsString, 'BOARD_CARD17');
  $add_10(this.locationsString, 'BOARD_CARD18');
  $add_10(this.locationsString, 'BOARD_PLAY_BTN');
  $add_10(this.locationsString, 'BOARD_SERIAL_NUM');
  $add_10(this.locationsString, 'BOARD_TOOLTIP');
  $add_10(this.locationsString, 'BOARD_JOKER_BONUS');
  $add_10(this.locationsString, 'BOARD_LOGO_ALL_TIME');
  $add_10(this.locationsString, 'BOARD_JOKER_BONUS_TEXT');
  $add_10(this.locationsString, 'BOARD_WAR_BONUS_TEXT');
  $add_10(this.locationsString, 'BOARD_WAR_BONUS');
  $add_10(this.locationsString, 'BOARD_PLAY_BTN_ANIM');
  $add_10(this.locationsString, 'BOARD_POPUP_LOCATION');
  $add_10(this.locationsString, 'BOARD_LEGEND_PRIZE_JOKER');
  $add_10(this.locationsString, 'BOARD_LEGEND_PRIZE_WAR');
  $add_10(this.locationsString, 'BOARD_LEGEND_PRIZE_TXT');
  $add_10(this.locationsString, 'BOARD_LEGEND_PRIZE_TXT1');
  $add_10(this.locationsString, 'CARD_CARD_ANIM');
  $add_10(this.locationsString, 'CARD_CARD');
  $add_10(this.locationsString, 'CARD_PRIZE');
  $add_10(this.locationsString, 'CARD_GOLD_CARD');
  $add_10(this.locationsString, 'CARD_WIN_FRAME');
  $add_10(this.locationsString, 'CARD_JOKER_CARD');
  $add_10(this.locationsString, 'CARD_QUEEN_CARD');
  $add_10(this.locationsString, 'CARD_DARK');
  $add_10(this.locationsString, 'CARD_HIT_AREA');
  $add_10(this.locationsString, 'INFO_BG_0');
  $add_10(this.locationsString, 'INFO_STICK_0');
  $add_10(this.locationsString, 'INFO_BG_1');
  $add_10(this.locationsString, 'INFO_STICK_1');
  $add_10(this.locationsString, 'INFO_BG_2');
  $add_10(this.locationsString, 'INFO_STICK_2');
  $add_10(this.locationsString, 'INFO_CLOSE_BTN');
  $add_10(this.locationsString, 'INFO_QUEEN_TITLE');
  $add_10(this.locationsString, 'INFO_GOLD_TITLE');
  $add_10(this.locationsString, 'INFO_JOKER_TITLE');
  $add_10(this.locationsString, 'INFO_QUEEN_SUBTITLE');
  $add_10(this.locationsString, 'INFO_GOLD_SUBTITLE');
  $add_10(this.locationsString, 'INFO_JOKER_SUBTITLE');
  $add_10(this.locationsString, 'INFO_TEXT1');
  $add_10(this.locationsString, 'INFO_TEXT2');
  $add_10(this.locationsString, 'INFO_TITLE');
  $add_10(this.locationsString, 'INFO_SMALL_IMG_3');
  $add_10(this.locationsString, 'INFO_SMALL_IMG_2');
  $add_10(this.locationsString, 'INFO_SMALL_IMG_1');
  $add_10(this.locationsString, 'INFO_CONTENT_1');
  $add_10(this.locationsString, 'SPLASH_BG');
  $add_10(this.locationsString, 'SPLASH_BTN');
  $add_10(this.locationsString, 'SPLASH_DONT_SHOW_TEXT');
  $add_10(this.locationsString, 'SPLASH_DONT_SHOW_MARKER');
  $add_10(this.locationsString, 'SPLASH_TEXT');
  $add_10(this.locationsString, 'ITS_A_WINNER_ROLL_0');
  $add_10(this.locationsString, 'ITS_A_WINNER_STICK_0');
  $add_10(this.locationsString, 'ITS_A_WINNER_ROLL_4');
  $add_10(this.locationsString, 'ITS_A_WINNER_STICK_4');
  $add_10(this.locationsString, 'ITS_A_WINNER_ROLL_1');
  $add_10(this.locationsString, 'ITS_A_WINNER_STICK_1');
  $add_10(this.locationsString, 'ITS_A_WINNER_ROLL_2');
  $add_10(this.locationsString, 'ITS_A_WINNER_STICK_2');
  $add_10(this.locationsString, 'ITS_A_WINNER_ROLL_3');
  $add_10(this.locationsString, 'ITS_A_WINNER_STICK_3');
  $add_10(this.locationsString, 'ITS_A_WINNER_TEXT');
  $add_10(this.locationsString, 'ITS_A_WINNER_AMOUNT');
  $add_10(this.locationsString, 'ITS_A_WINNER_TRUMPET_1');
  $add_10(this.locationsString, 'ITS_A_WINNER_TRUMPET_2');
  $add_10(this.locationsString, 'BIG_WIN_TITLE_BG_1');
  $add_10(this.locationsString, 'BIG_WIN_TITLE_BG_2');
  $add_10(this.locationsString, 'BIG_WIN_TITLE_BG_3');
  $add_10(this.locationsString, 'BIG_WIN_TITLE_BG_4');
  $add_10(this.locationsString, 'BIG_WIN_TITLE_BG_5');
  $add_10(this.locationsString, 'BIG_WIN_AMOUNT_BG_1');
  $add_10(this.locationsString, 'BIG_WIN_AMOUNT_BG_2');
  $add_10(this.locationsString, 'BIG_WIN_AMOUNT_BG_3');
  $add_10(this.locationsString, 'BIG_WIN_AMOUNT_BG_4');
  $add_10(this.locationsString, 'BIG_WIN_AMOUNT_BG_5');
  $add_10(this.locationsString, 'BIG_WIN_CHAIN_1_1');
  $add_10(this.locationsString, 'BIG_WIN_CHAIN_2_1');
  $add_10(this.locationsString, 'BIG_WIN_CHAIN_3_1');
  $add_10(this.locationsString, 'BIG_WIN_CHAIN_1_2');
  $add_10(this.locationsString, 'BIG_WIN_CHAIN_2_2');
  $add_10(this.locationsString, 'BIG_WIN_CHAIN_3_2');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_1_1');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_1_2');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_1_3');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_1_4');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_2_1');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_2_2');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_2_3');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_2_4');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_3_1');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_3_2');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_3_3');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_3_4');
  $add_10(this.locationsString, 'BIG_WIN_AMOUNT');
  $add_10(this.locationsString, 'BIG_WIN_TITLE');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD1');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD2');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD3');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD4');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD5');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD6');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD7');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD8');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD9');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD10');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD11');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD12');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD13');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD14');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD15');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD16');
  $add_10(this.locationsString, 'JOKER_BONUS_INFO');
  $add_10(this.locationsString, 'JOKER_BONUS_XANIM');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE1');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE2');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE3');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE4');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE5');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE6');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE7');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE8');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE9');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE10');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE11');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE12');
  $add_10(this.locationsString, 'JOKER_BONUS_WINSTXT');
  $add_10(this.locationsString, 'JOKER_BONUS_IBTN');
  $add_10(this.locationsString, 'JOKER_BONUS_TOOLTIP');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR1');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR2');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR3');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR4');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR5');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR6');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR7');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR8');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR9');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR10');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR11');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR12');
  $add_10(this.locationsString, 'JOKER_POPUP_BG');
  $add_10(this.locationsString, 'JOKER_POPUP_TXT');
  $add_10(this.locationsString, 'JOKER_POPUP_BTN');
  $add_10(this.locationsString, 'JOKER_POPUP_TXT_2');
  $add_10(this.locationsString, 'JOKER_POPUP_TXT_IMG');
  $add_10(this.locationsString, 'JOKER_POPUP_SUMMARY_BG');
  $add_10(this.locationsString, 'JOKER_POPUP_SUMMARY_TXT');
  $add_10(this.locationsString, 'JOKER_POPUP_SUMMARY_BTN');
  $add_10(this.locationsString, 'JOKER_POPUP_SUMMARY_AMOUNT');
  $add_10(this.locationsString, 'JOKER_POPUP_SUMMARY_TXT_IMG');
  $add_10(this.locationsString, 'WAR_POPUP_BG');
  $add_10(this.locationsString, 'WAR_POPUP_TXT');
  $add_10(this.locationsString, 'WAR_POPUP_TXT_2');
  $add_10(this.locationsString, 'WAR_POPUP_BTN');
  $add_10(this.locationsString, 'WAR_POPUP_TXT_IMG');
  $add_10(this.locationsString, 'WAR_POPUP_SUMMARY_BG');
  $add_10(this.locationsString, 'WAR_POPUP_SUMMARY_TXT');
  $add_10(this.locationsString, 'WAR_POPUP_SUMMARY_AMOUNT');
  $add_10(this.locationsString, 'WAR_POPUP_SUMMARY_BTN');
  $add_10(this.locationsString, 'WAR_POPUP_SUMMARY_TXT_IMG');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD_ANIMATION');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD_WIN_FRAME');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD_HIT_AREA');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD_JOKER_CARD');
  $add_10(this.locationsString, 'INFO_BG_0');
  $add_10(this.locationsString, 'INFO_STICK_0');
  $add_10(this.locationsString, 'INFO_BG_1');
  $add_10(this.locationsString, 'INFO_STICK_1');
  $add_10(this.locationsString, 'INFO_BG_2');
  $add_10(this.locationsString, 'INFO_STICK_2');
  $add_10(this.locationsString, 'INFO_CLOSE_BTN');
  $add_10(this.locationsString, 'JOKER_INFO_TITLE');
  $add_10(this.locationsString, 'JOKER_INFO_CARDS');
  $add_10(this.locationsString, 'JOKER_INFO_SUB_TITLE');
  $add_10(this.locationsString, 'JOKER_INFO_CARDS_TEXTS');
  $add_10(this.locationsString, 'JOKER_INFO_STRIKES');
  $add_10(this.locationsString, 'JOKER_INFO_STRIKES_TEXT');
  $add_10(this.locationsString, 'INFO_CONTENT_2');
  $add_10(this.locationsString, 'INFO_BG_0');
  $add_10(this.locationsString, 'INFO_STICK_0');
  $add_10(this.locationsString, 'INFO_BG_1');
  $add_10(this.locationsString, 'INFO_STICK_1');
  $add_10(this.locationsString, 'INFO_BG_2');
  $add_10(this.locationsString, 'INFO_STICK_2');
  $add_10(this.locationsString, 'INFO_CLOSE_BTN');
  $add_10(this.locationsString, 'WAR_INFO_TITLE');
  $add_10(this.locationsString, 'WAR_INFO_QUEEN');
  $add_10(this.locationsString, 'WAR_INFO_TEXT');
  $add_10(this.locationsString, 'INFO_CONTENT_3');
  $add_10(this.locationsString, 'WAR_BONUS_YOU_TEXT');
  $add_10(this.locationsString, 'WAR_BONUS_QUEEN_TEXT');
  $add_10(this.locationsString, 'WAR_BONUS_LOGO');
  $add_10(this.locationsString, 'WAR_BONUS_BATTLE_BUTTON');
  $add_10(this.locationsString, 'WAR_BONUS_ROUNDS_LEFT_NUMBER');
  $add_10(this.locationsString, 'WAR_BONUS_ROUND_PRIZE_VALUE');
  $add_10(this.locationsString, 'WAR_BONUS_ROUND_PRIZE_TITLE');
  $add_10(this.locationsString, 'WAR_BONUS_TOTAL_WINS_TITLE');
  $add_10(this.locationsString, 'WAR_BONUS_ROUNDS_LEFT_TITLE');
  $add_10(this.locationsString, 'WAR_BONUS_TOTAL_WINS_VALUE');
  $add_10(this.locationsString, 'WAR_BONUS_INFO');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_PLAYER');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_QUEEN');
  $add_10(this.locationsString, 'WAR_BONUS_BLUE_SIDE');
  $add_10(this.locationsString, 'WAR_BONUS_RED_SIDE');
  $add_10(this.locationsString, 'WAR_BONUS_SWORDS');
  $add_10(this.locationsString, 'WAR_BONUS_SWORDS_TEXT1');
  $add_10(this.locationsString, 'WAR_BONUS_SWORDS_TEXT2');
  $add_10(this.locationsString, 'WAR_BONUS_DOOR');
  $add_10(this.locationsString, 'WAR_BONUS_WIN_DIAMOND_LEFT');
  $add_10(this.locationsString, 'WAR_BONUS_WIN_DIAMOND_RIGHT');
  $add_10(this.locationsString, 'WAR_BONUS_WIN_FLAG');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_VALUE_QUEEN');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_POOF_QUEEN');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_WIN_FRAME_QUEEN');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_VALUE_PLAYER');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_POOF_PLAYER');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_WIN_FRAME_PLAYER');
}

function QueenOfDiamondsLocationsMobile(){
}

_ = QueenOfDiamondsLocationsMobile_0.prototype = QueenOfDiamondsLocationsMobile.prototype = new QueenOfDiamondsLocations;
_.getClass$ = function getClass_561(){
  return Lwebgl_client_nf_games_g431_locations_QueenOfDiamondsLocationsMobile_2_classLit;
}
;
_.getLocationConst = function getLocationConst_0(index){
  return dynamicCast($get_5(this.locationsString, index), Q$String);
}
;
function QueenOfDiamondsLocationsWeb_0(){
  $clinit_QueenOfDiamondsLocations();
  QueenOfDiamondsLocations_0.call(this);
  this.locationsString = new ArrayList_0;
  $add_10(this.locationsString, 'BOARD_CARD1');
  $add_10(this.locationsString, 'BOARD_CARD2');
  $add_10(this.locationsString, 'BOARD_CARD3');
  $add_10(this.locationsString, 'BOARD_CARD4');
  $add_10(this.locationsString, 'BOARD_CARD5');
  $add_10(this.locationsString, 'BOARD_CARD6');
  $add_10(this.locationsString, 'BOARD_CARD7');
  $add_10(this.locationsString, 'BOARD_CARD8');
  $add_10(this.locationsString, 'BOARD_CARD9');
  $add_10(this.locationsString, 'BOARD_CARD10');
  $add_10(this.locationsString, 'BOARD_CARD11');
  $add_10(this.locationsString, 'BOARD_CARD12');
  $add_10(this.locationsString, 'BOARD_CARD13');
  $add_10(this.locationsString, 'BOARD_CARD14');
  $add_10(this.locationsString, 'BOARD_CARD15');
  $add_10(this.locationsString, 'BOARD_CARD16');
  $add_10(this.locationsString, 'BOARD_CARD17');
  $add_10(this.locationsString, 'BOARD_CARD18');
  $add_10(this.locationsString, 'BOARD_QUEEN');
  $add_10(this.locationsString, 'BOARD_BOTTOM_BAR');
  $add_10(this.locationsString, 'BOARD_LOGO');
  $add_10(this.locationsString, 'BOARD_PLAY_BTN');
  $add_10(this.locationsString, 'BOARD_WINS_TXT');
  $add_10(this.locationsString, 'BOARD_TOTAL_COST_AMOUNT');
  $add_10(this.locationsString, 'BOARD_TOTAL_COST_LABLE');
  $add_10(this.locationsString, 'BOARD_TICKET_COST_AMOUNT');
  $add_10(this.locationsString, 'BOARD_TICKET_COST_LABLE');
  $add_10(this.locationsString, 'BOARD_SELECT_TICKETS_AMOUNT');
  $add_10(this.locationsString, 'BOARD_SELECT_TICKETS_LABLE');
  $add_10(this.locationsString, 'BOARD_TICKET_COST_PLUS');
  $add_10(this.locationsString, 'BOARD_TICKET_COST_MINUS');
  $add_10(this.locationsString, 'BOARD_TICKET_NUM_MINUS');
  $add_10(this.locationsString, 'BOARD_TICKET_NUM_PLUS');
  $add_10(this.locationsString, 'BOARD_I_BTN');
  $add_10(this.locationsString, 'BOARD_WAR_BONUS');
  $add_10(this.locationsString, 'BOARD_JOKER_BONUS');
  $add_10(this.locationsString, 'BOARD_JOKER_BONUS_TEXT');
  $add_10(this.locationsString, 'BOARD_WAR_BONUS_TEXT');
  $add_10(this.locationsString, 'BOARD_PLAY_BTN_ANIM');
  $add_10(this.locationsString, 'BOARD_TOOLTIP');
  $add_10(this.locationsString, 'BOARD_POPUP_LOCATION');
  $add_10(this.locationsString, 'BOARD_BALANCE');
  $add_10(this.locationsString, 'BOARD_SERIAL_NUM');
  $add_10(this.locationsString, 'BOARD_LOGO_ALL_TIME');
  $add_10(this.locationsString, 'BOARD_DUST');
  $add_10(this.locationsString, 'BOARD_JOKER_BONUS_WIN');
  $add_10(this.locationsString, 'BOARD_MICHIGAN_LOTTERY');
  $add_10(this.locationsString, 'BOARD_BONUS_GAME');
  $add_10(this.locationsString, 'BOARD_LEGEND_PRIZE_JOKER');
  $add_10(this.locationsString, 'BOARD_LEGEND_PRIZE_WAR');
  $add_10(this.locationsString, 'BOARD_LEGEND_PRIZE_TXT');
  $add_10(this.locationsString, 'BOARD_LEGEND_PRIZE_TXT1');
  $add_10(this.locationsString, 'CARD_CARD_ANIM');
  $add_10(this.locationsString, 'CARD_CARD');
  $add_10(this.locationsString, 'CARD_PRIZE');
  $add_10(this.locationsString, 'CARD_GOLD_CARD');
  $add_10(this.locationsString, 'CARD_WIN_FRAME');
  $add_10(this.locationsString, 'CARD_JOKER_CARD');
  $add_10(this.locationsString, 'CARD_QUEEN_CARD');
  $add_10(this.locationsString, 'CARD_DARK');
  $add_10(this.locationsString, 'CARD_HIT_AREA');
  $add_10(this.locationsString, 'INFO_BG_0');
  $add_10(this.locationsString, 'INFO_STICK_0');
  $add_10(this.locationsString, 'INFO_BG_1');
  $add_10(this.locationsString, 'INFO_STICK_1');
  $add_10(this.locationsString, 'INFO_BG_2');
  $add_10(this.locationsString, 'INFO_STICK_2');
  $add_10(this.locationsString, 'INFO_CLOSE_BTN');
  $add_10(this.locationsString, 'INFO_QUEEN_TITLE');
  $add_10(this.locationsString, 'INFO_GOLD_TITLE');
  $add_10(this.locationsString, 'INFO_JOKER_TITLE');
  $add_10(this.locationsString, 'INFO_QUEEN_SUBTITLE');
  $add_10(this.locationsString, 'INFO_GOLD_SUBTITLE');
  $add_10(this.locationsString, 'INFO_JOKER_SUBTITLE');
  $add_10(this.locationsString, 'INFO_TEXT1');
  $add_10(this.locationsString, 'INFO_TEXT2');
  $add_10(this.locationsString, 'INFO_TITLE');
  $add_10(this.locationsString, 'INFO_SMALL_IMG_3');
  $add_10(this.locationsString, 'INFO_SMALL_IMG_2');
  $add_10(this.locationsString, 'INFO_SMALL_IMG_1');
  $add_10(this.locationsString, 'INFO_CONTENT_1');
  $add_10(this.locationsString, 'SPLASH_BG');
  $add_10(this.locationsString, 'SPLASH_BTN');
  $add_10(this.locationsString, 'SPLASH_DONT_SHOW_TEXT');
  $add_10(this.locationsString, 'SPLASH_DONT_SHOW_MARKER');
  $add_10(this.locationsString, 'SPLASH_TEXT');
  $add_10(this.locationsString, 'ITS_A_WINNER_ROLL_0');
  $add_10(this.locationsString, 'ITS_A_WINNER_STICK_0');
  $add_10(this.locationsString, 'ITS_A_WINNER_ROLL_4');
  $add_10(this.locationsString, 'ITS_A_WINNER_STICK_4');
  $add_10(this.locationsString, 'ITS_A_WINNER_ROLL_1');
  $add_10(this.locationsString, 'ITS_A_WINNER_STICK_1');
  $add_10(this.locationsString, 'ITS_A_WINNER_ROLL_2');
  $add_10(this.locationsString, 'ITS_A_WINNER_STICK_2');
  $add_10(this.locationsString, 'ITS_A_WINNER_ROLL_3');
  $add_10(this.locationsString, 'ITS_A_WINNER_STICK_3');
  $add_10(this.locationsString, 'ITS_A_WINNER_TEXT');
  $add_10(this.locationsString, 'ITS_A_WINNER_AMOUNT');
  $add_10(this.locationsString, 'ITS_A_WINNER_TRUMPET_1');
  $add_10(this.locationsString, 'ITS_A_WINNER_TRUMPET_2');
  $add_10(this.locationsString, 'BIG_WIN_TITLE_BG_1');
  $add_10(this.locationsString, 'BIG_WIN_TITLE_BG_2');
  $add_10(this.locationsString, 'BIG_WIN_TITLE_BG_3');
  $add_10(this.locationsString, 'BIG_WIN_TITLE_BG_4');
  $add_10(this.locationsString, 'BIG_WIN_TITLE_BG_5');
  $add_10(this.locationsString, 'BIG_WIN_AMOUNT_BG_1');
  $add_10(this.locationsString, 'BIG_WIN_AMOUNT_BG_2');
  $add_10(this.locationsString, 'BIG_WIN_AMOUNT_BG_3');
  $add_10(this.locationsString, 'BIG_WIN_AMOUNT_BG_4');
  $add_10(this.locationsString, 'BIG_WIN_AMOUNT_BG_5');
  $add_10(this.locationsString, 'BIG_WIN_CHAIN_1_1');
  $add_10(this.locationsString, 'BIG_WIN_CHAIN_2_1');
  $add_10(this.locationsString, 'BIG_WIN_CHAIN_3_1');
  $add_10(this.locationsString, 'BIG_WIN_CHAIN_1_2');
  $add_10(this.locationsString, 'BIG_WIN_CHAIN_2_2');
  $add_10(this.locationsString, 'BIG_WIN_CHAIN_3_2');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_1_1');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_1_2');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_1_3');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_1_4');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_2_1');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_2_2');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_2_3');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_2_4');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_3_1');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_3_2');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_3_3');
  $add_10(this.locationsString, 'BIG_WIN_DIAMOND_3_4');
  $add_10(this.locationsString, 'BIG_WIN_AMOUNT');
  $add_10(this.locationsString, 'BIG_WIN_TITLE');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD1');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD2');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD3');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD4');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD5');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD6');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD7');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD8');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD9');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD10');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD11');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD12');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD13');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD14');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD15');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD16');
  $add_10(this.locationsString, 'JOKER_BONUS_INFO');
  $add_10(this.locationsString, 'JOKER_BONUS_XANIM');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE1');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE2');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE3');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE4');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE5');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE6');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE7');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE8');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE9');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE10');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE11');
  $add_10(this.locationsString, 'JOKER_BONUS_PRIZE12');
  $add_10(this.locationsString, 'JOKER_BONUS_WINSTXT');
  $add_10(this.locationsString, 'JOKER_BONUS_IBTN');
  $add_10(this.locationsString, 'JOKER_BONUS_TOOLTIP');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR1');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR2');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR3');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR4');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR5');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR6');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR7');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR8');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR9');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR10');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR11');
  $add_10(this.locationsString, 'JOKER_BONUS_NAVIGATOR12');
  $add_10(this.locationsString, 'JOKER_POPUP_BG');
  $add_10(this.locationsString, 'JOKER_POPUP_TXT');
  $add_10(this.locationsString, 'JOKER_POPUP_BTN');
  $add_10(this.locationsString, 'JOKER_POPUP_TXT_2');
  $add_10(this.locationsString, 'JOKER_POPUP_TXT_IMG');
  $add_10(this.locationsString, 'JOKER_POPUP_SUMMARY_BG');
  $add_10(this.locationsString, 'JOKER_POPUP_SUMMARY_TXT');
  $add_10(this.locationsString, 'JOKER_POPUP_SUMMARY_BTN');
  $add_10(this.locationsString, 'JOKER_POPUP_SUMMARY_AMOUNT');
  $add_10(this.locationsString, 'JOKER_POPUP_SUMMARY_TXT_IMG');
  $add_10(this.locationsString, 'WAR_POPUP_BG');
  $add_10(this.locationsString, 'WAR_POPUP_TXT');
  $add_10(this.locationsString, 'WAR_POPUP_TXT_2');
  $add_10(this.locationsString, 'WAR_POPUP_BTN');
  $add_10(this.locationsString, 'WAR_POPUP_TXT_IMG');
  $add_10(this.locationsString, 'WAR_POPUP_SUMMARY_BG');
  $add_10(this.locationsString, 'WAR_POPUP_SUMMARY_TXT');
  $add_10(this.locationsString, 'WAR_POPUP_SUMMARY_AMOUNT');
  $add_10(this.locationsString, 'WAR_POPUP_SUMMARY_BTN');
  $add_10(this.locationsString, 'WAR_POPUP_SUMMARY_TXT_IMG');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD_ANIMATION');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD_WIN_FRAME');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD_HIT_AREA');
  $add_10(this.locationsString, 'JOKER_BONUS_CARD_JOKER_CARD');
  $add_10(this.locationsString, 'INFO_BG_0');
  $add_10(this.locationsString, 'INFO_STICK_0');
  $add_10(this.locationsString, 'INFO_BG_1');
  $add_10(this.locationsString, 'INFO_STICK_1');
  $add_10(this.locationsString, 'INFO_BG_2');
  $add_10(this.locationsString, 'INFO_STICK_2');
  $add_10(this.locationsString, 'INFO_CLOSE_BTN');
  $add_10(this.locationsString, 'JOKER_INFO_TITLE');
  $add_10(this.locationsString, 'JOKER_INFO_CARDS');
  $add_10(this.locationsString, 'JOKER_INFO_SUB_TITLE');
  $add_10(this.locationsString, 'JOKER_INFO_CARDS_TEXTS');
  $add_10(this.locationsString, 'JOKER_INFO_STRIKES');
  $add_10(this.locationsString, 'JOKER_INFO_STRIKES_TEXT');
  $add_10(this.locationsString, 'INFO_CONTENT_2');
  $add_10(this.locationsString, 'INFO_BG_0');
  $add_10(this.locationsString, 'INFO_STICK_0');
  $add_10(this.locationsString, 'INFO_BG_1');
  $add_10(this.locationsString, 'INFO_STICK_1');
  $add_10(this.locationsString, 'INFO_BG_2');
  $add_10(this.locationsString, 'INFO_STICK_2');
  $add_10(this.locationsString, 'INFO_CLOSE_BTN');
  $add_10(this.locationsString, 'WAR_INFO_TITLE');
  $add_10(this.locationsString, 'WAR_INFO_QUEEN');
  $add_10(this.locationsString, 'WAR_INFO_TEXT');
  $add_10(this.locationsString, 'INFO_CONTENT_3');
  $add_10(this.locationsString, 'WAR_BONUS_YOU_TEXT');
  $add_10(this.locationsString, 'WAR_BONUS_QUEEN_TEXT');
  $add_10(this.locationsString, 'WAR_BONUS_LOGO');
  $add_10(this.locationsString, 'WAR_BONUS_BATTLE_BUTTON');
  $add_10(this.locationsString, 'WAR_BONUS_ROUNDS_LEFT_NUMBER');
  $add_10(this.locationsString, 'WAR_BONUS_ROUND_PRIZE_VALUE');
  $add_10(this.locationsString, 'WAR_BONUS_ROUND_PRIZE_TITLE');
  $add_10(this.locationsString, 'WAR_BONUS_TOTAL_WINS_TITLE');
  $add_10(this.locationsString, 'WAR_BONUS_ROUNDS_LEFT_TITLE');
  $add_10(this.locationsString, 'WAR_BONUS_TOTAL_WINS_VALUE');
  $add_10(this.locationsString, 'WAR_BONUS_INFO');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_PLAYER');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_QUEEN');
  $add_10(this.locationsString, 'WAR_BONUS_BLUE_SIDE');
  $add_10(this.locationsString, 'WAR_BONUS_RED_SIDE');
  $add_10(this.locationsString, 'WAR_BONUS_SWORDS');
  $add_10(this.locationsString, 'WAR_BONUS_DOOR');
  $add_10(this.locationsString, 'WAR_BONUS_WIN_DIAMOND_LEFT');
  $add_10(this.locationsString, 'WAR_BONUS_WIN_DIAMOND_RIGHT');
  $add_10(this.locationsString, 'WAR_BONUS_WIN_FLAG');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_VALUE_QUEEN');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_POOF_QUEEN');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_WIN_FRAME_QUEEN');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_VALUE_PLAYER');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_POOF_PLAYER');
  $add_10(this.locationsString, 'WAR_BONUS_CARD_WIN_FRAME_PLAYER');
}

function QueenOfDiamondsLocationsWeb(){
}

_ = QueenOfDiamondsLocationsWeb_0.prototype = QueenOfDiamondsLocationsWeb.prototype = new QueenOfDiamondsLocations;
_.getClass$ = function getClass_562(){
  return Lwebgl_client_nf_games_g431_locations_QueenOfDiamondsLocationsWeb_2_classLit;
}
;
_.getLocationConst = function getLocationConst_1(index){
  return dynamicCast($get_5(this.locationsString, index), Q$String);
}
;
function $autoDismissIntroPopupOnHistoryMode(this$static, popupType){
  var dismissPopups;
  dismissPopups = new QueenOfDiamondsBoard$10_0(this$static, popupType);
  $schedule(dismissPopups, 3000);
}

function $checkNextStep(this$static){
  if ((this$static.isShouldWarBonusPlayed || this$static.isShouldJokerBonusPlayed) && this$static.currentBonus == ($clinit_QueenOfDiamondsBoard$BonusType() , NONE_0)) {
    $setIsClickable_0(this$static.mainArea, false);
    $onBoardClickableChange(this$static.listener, false);
    if (this$static.isShouldWarBonusPlayed) {
      $setCurrentBonus(this$static, ($clinit_QueenOfDiamondsBoard$BonusType() , WAR_BONUS_0));
      getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'War_winning', 8);
      this$static.warLegendTextAnimItem.isVisible = true;
      $triggerItemAction(this$static.warLegendTextAnimItem, 'win');
      $showGoldCardsWinAnim(this$static.mainArea);
    }
     else {
      $setCurrentBonus(this$static, ($clinit_QueenOfDiamondsBoard$BonusType() , JOKER_BONUS));
      getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Joker_Winning', 4);
      $triggerItemAction(this$static.jokerLegendAnimItem, 'PreWinJokerLegend');
      $triggerItemAction(this$static.jokerLegendTextAnimItem, 'win');
      $showJokerWinAnim_0(this$static.mainArea);
    }
  }
   else {
    this$static.isMainAreaFinished && this$static.currentBonus == ($clinit_QueenOfDiamondsBoard$BonusType() , NONE_0) && (this$static.mainArea.isShouldQueenWinAnimBePlayed?$showQueensWinAnim(this$static.mainArea):$onBoardFinished(this$static.listener, this$static.bonusPls));
  }
}

function $gameNonMandatoryResourcesLoadCompleteHandler_0(this$static, loadedResources){
  var callToActionAnimBank;
  callToActionAnimBank = dynamicCast(loadedResources.get(($clinit_QueenOfDiamondsResources() , PLAY_ALL_TIME).path), Q$AnimationBank);
  $setAnimationBank(this$static.callToActionAnimGameItem.animation, callToActionAnimBank);
  $triggerItemAction(this$static.callToActionAnimGameItem, 'Play');
  $bonusGameNonMandatoryResourcesLoadCompleteHandler_0(this$static.bonusesManager, loadedResources);
}

function $goldCardStartReveal(this$static){
  $setGoldCardsStartedReveal(this$static, this$static.goldCardsStartedReveal + 1);
  this$static.goldCardsStartedReveal == 3 && (this$static.isShouldWarBonusPlayed = true);
}

function $init_20(this$static, resources, gameLocations, panel, listener, panelManager, cardsConfigurations, gameCustomization){
  var boardWinAnimBank, callToActionAnimBank, popupLocation, jokerLegendAnimBank, jokerLegendLocation, jokerLegendPrizeAnimBank, jokerLegendTextAnimBank, jokerLegendTextLocation, jokerLegendWinAmountLocation, warLegendAnimBank, warLegendLocation, warLegendPrizeAnimBank, warLegendTextAnimItem, warLegendTextLocation, warLegendWinAmountLocation, jokerPopupBGImage, jokerPopupBGLocation, jokerPopupBtnImage, jokerPopupBtnLocation, jokerPopupBtnTxt, jokerPopupSubTxtLocation, jokerPopupTxtImage, jokerPopupTxtImgLocation, warPopupBGImage, warPopupBGLocation, warPopupBtnImage, warPopupBtnLocation, warPopupBtnTxt, warPopupSubTxtLocation, warPopupTxtImage, warPopupTxtImgLocation;
  this$static.listener = listener;
  this$static.mainAreaPanel = panel;
  this$static.panelManager = panelManager;
  this$static.isRenderOnlyBonus = false;
  this$static.mainArea = new QueenOfDiamondsMainArea_0;
  $init_21(this$static.mainArea, resources, gameLocations, panel, this$static, cardsConfigurations.mainGameCardConfiguration);
  this$static.bonusesManager = new QueenOfDiamondsBonusesManager_0;
  $init_18(this$static.bonusesManager, gameLocations, resources, this$static, cardsConfigurations, gameCustomization);
  jokerLegendAnimBank = dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , JOKER_COIN).path), Q$AnimationBank);
  this$static.jokerLegendAnimItem = new AnimGameItem_0(0, new AnimationController_0(jokerLegendAnimBank, 'PreWinJokerLegend'), false);
  jokerLegendLocation = dynamicCast(gameLocations.locationsMap.get('BOARD_JOKER_BONUS'), Q$Location);
  $setLocation_3(this$static.jokerLegendAnimItem, jokerLegendLocation);
  jokerLegendTextAnimBank = dynamicCast(resources.get(JOKER_LEGEND_TEXT.path), Q$AnimationBank);
  this$static.jokerLegendTextAnimItem = new AnimGameItem_0(0, new AnimationController_0(jokerLegendTextAnimBank, 'reg'), true);
  jokerLegendTextLocation = dynamicCast(gameLocations.locationsMap.get('BOARD_JOKER_BONUS_TEXT'), Q$Location);
  $setLocation_3(this$static.jokerLegendTextAnimItem, jokerLegendTextLocation);
  jokerLegendPrizeAnimBank = dynamicCast(resources.get(LEGEND_PRIZE.path), Q$AnimationBank);
  this$static.jokerLegendWinAmountAnimItem = new AnimGameItem_0(0, new AnimationController_0(jokerLegendPrizeAnimBank, 'idle'), false);
  jokerLegendWinAmountLocation = dynamicCast(gameLocations.locationsMap.get('BOARD_LEGEND_PRIZE_JOKER'), Q$Location);
  $setLocation_3(this$static.jokerLegendWinAmountAnimItem, jokerLegendWinAmountLocation);
  warLegendAnimBank = dynamicCast(resources.get(WAR_BONUS.path), Q$AnimationBank);
  this$static.warLegendAnimItem = new AnimGameItem_0(0, new AnimationController_0(warLegendAnimBank, 'idle'), true);
  warLegendLocation = dynamicCast(gameLocations.locationsMap.get('BOARD_WAR_BONUS'), Q$Location);
  $setLocation_3(this$static.warLegendAnimItem, warLegendLocation);
  this$static.currentWarLegendState = 0;
  warLegendTextAnimItem = dynamicCast(resources.get(WAR_LEGEND_TEXT.path), Q$AnimationBank);
  this$static.warLegendTextAnimItem = new AnimGameItem_0(0, new AnimationController_0(warLegendTextAnimItem, 'reg'), true);
  warLegendTextLocation = dynamicCast(gameLocations.locationsMap.get('BOARD_WAR_BONUS_TEXT'), Q$Location);
  $setLocation_3(this$static.warLegendTextAnimItem, warLegendTextLocation);
  warLegendPrizeAnimBank = dynamicCast(resources.get(LEGEND_PRIZE.path), Q$AnimationBank);
  this$static.warLegendWinAmountAnimItem = new AnimGameItem_0(0, new AnimationController_0(warLegendPrizeAnimBank, 'idle'), false);
  warLegendWinAmountLocation = dynamicCast(gameLocations.locationsMap.get('BOARD_LEGEND_PRIZE_WAR'), Q$Location);
  $setLocation_3(this$static.warLegendWinAmountAnimItem, warLegendWinAmountLocation);
  callToActionAnimBank = dynamicCast(resources.get(PLAY_ALL_TIME.path), Q$AnimationBank);
  this$static.callToActionAnimGameItem = new AnimGameItem_0(0, new AnimationController_0(callToActionAnimBank, 'Play'), true);
  $setLocation_3(this$static.callToActionAnimGameItem, dynamicCast(gameLocations.locationsMap.get('BOARD_PLAY_BTN_ANIM'), Q$Location));
  $setAnimFinishedListener_0(this$static.callToActionAnimGameItem, new QueenOfDiamondsBoard$1_0(this$static));
  this$static.callToActionDelay = new QueenOfDiamondsBoard$2_0(this$static);
  boardWinAnimBank = dynamicCast(resources.get(GENERAL_WIN.path), Q$AnimationBank);
  this$static.boardWinGameAnimItem = new AnimGameItem_0(0, new AnimationController_0(boardWinAnimBank, 'idle'), true);
  $setLocation_3(this$static.boardWinGameAnimItem, dynamicCast(gameLocations.locationsMap.get('BOARD_WINS_TXT'), Q$Location));
  $setAnimFinishedListener_0(this$static.boardWinGameAnimItem, new QueenOfDiamondsBoard$3_0);
  jokerPopupBGImage = dynamicCast(resources.get(JOKER_BONUS_POPUP_BG.path), Q$TransformableImage);
  jokerPopupBtnImage = dynamicCast(resources.get(JOKER_BONUS_POPUP_BTN.path), Q$TransformableImage);
  jokerPopupTxtImage = dynamicCast(resources.get(JOKER_BONUS_POPUP_TXT_IMG.path), Q$TransformableImage);
  jokerPopupBGLocation = dynamicCast(gameLocations.locationsMap.get('JOKER_POPUP_BG'), Q$Location);
  jokerPopupBtnLocation = $reverseRelativeTo(dynamicCast(gameLocations.locationsMap.get('JOKER_POPUP_BTN'), Q$Location), jokerPopupBGLocation);
  $reverseRelativeTo(dynamicCast(gameLocations.locationsMap.get('JOKER_POPUP_TXT'), Q$Location), jokerPopupBGLocation);
  jokerPopupSubTxtLocation = $reverseRelativeTo(dynamicCast(gameLocations.locationsMap.get('JOKER_POPUP_TXT_2'), Q$Location), jokerPopupBGLocation);
  jokerPopupTxtImgLocation = $reverseRelativeTo(dynamicCast(gameLocations.locationsMap.get('JOKER_POPUP_TXT_IMG'), Q$Location), jokerPopupBGLocation);
  jokerPopupBtnTxt = get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_JOKER_INTRO_BUTTON');
  get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_JOKER_INTRO1');
  get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_JOKER_INTRO2');
  this$static.jokerIntroPopup = new QueenOfDiamondsBonusPopup_0(this$static.mainAreaPanel, jokerPopupBGImage, jokerPopupBtnImage, jokerPopupTxtImage, jokerPopupBGLocation, jokerPopupBtnLocation, jokerPopupSubTxtLocation, jokerPopupTxtImgLocation, jokerPopupBtnTxt, 'bonusPopupSubText', 'lobby-btn jokerBonusPopupButton', ($clinit_QueenOfDiamondsBoard$PopupType() , JOKER_INTRO), this$static);
  warPopupBGImage = dynamicCast(resources.get(WAR_BONUS_POPUP_BG.path), Q$TransformableImage);
  warPopupBtnImage = dynamicCast(resources.get(WAR_BONUS_POPUP_BTN.path), Q$TransformableImage);
  warPopupTxtImage = dynamicCast(resources.get(WAR_BONUS_POPUP_TXT_IMG.path), Q$TransformableImage);
  warPopupBGLocation = dynamicCast(gameLocations.locationsMap.get('WAR_POPUP_BG'), Q$Location);
  warPopupBtnLocation = $reverseRelativeTo(dynamicCast(gameLocations.locationsMap.get('WAR_POPUP_BTN'), Q$Location), warPopupBGLocation);
  $reverseRelativeTo(dynamicCast(gameLocations.locationsMap.get('WAR_POPUP_TXT'), Q$Location), warPopupBGLocation);
  warPopupSubTxtLocation = $reverseRelativeTo(dynamicCast(gameLocations.locationsMap.get('WAR_POPUP_TXT_2'), Q$Location), warPopupBGLocation);
  warPopupTxtImgLocation = $reverseRelativeTo(dynamicCast(gameLocations.locationsMap.get('WAR_POPUP_TXT_IMG'), Q$Location), warPopupBGLocation);
  warPopupBtnTxt = get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_WAR_INTRO_BUTTON');
  get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_WAR_INTRO1');
  get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_WAR_INTRO2');
  this$static.warIntroPopup = new QueenOfDiamondsBonusPopup_0(this$static.mainAreaPanel, warPopupBGImage, warPopupBtnImage, warPopupTxtImage, warPopupBGLocation, warPopupBtnLocation, warPopupSubTxtLocation, warPopupTxtImgLocation, warPopupBtnTxt, 'bonusPopupSubText', 'lobby-btn warBonusPopupButton', WAR_INTRO, this$static);
  this$static.goldCardsStartedReveal = 0;
  this$static.goldCardsFinishedReveal = 0;
  this$static.preBonusGoldCardAnimPlayed = 0;
  this$static.isJokerBonusWasPlayedAtPrevRound = false;
  this$static.isWarBonusWasPlayedAtPrevRound = false;
  this$static.bonusGamePopupStartDelay = new QueenOfDiamondsBoard$4_0(this$static);
  this$static.winsAnimationStopDelay = new QueenOfDiamondsBoard$5_0(this$static);
  popupLocation = dynamicCast(gameLocations.locationsMap.get('BOARD_POPUP_LOCATION'), Q$Location);
  this$static.bonusFadePanel = new AbsoluteNeoPanel_0;
  $setSize(this$static.bonusFadePanel, popupLocation.width_0 + 'px', popupLocation.height_0 + 'px');
  this$static.bonusFadePanel.element.style['zIndex'] = '5000';
  $setStyleName(this$static.bonusFadePanel, 'bonusFadePanel', true);
  this$static.timerToStartJokerBonus = new QueenOfDiamondsBoard$6_0(this$static);
  this$static.timerToStartWarBonus = new QueenOfDiamondsBoard$7_0(this$static);
  this$static.timerToEndJokerBonus = new QueenOfDiamondsBoard$8_0(this$static);
  this$static.timerToEndWarBonus = new QueenOfDiamondsBoard$9_0(this$static);
}

function $onBonusPopupCloseButtonClicked(this$static, type){
  this$static.bonusFadePanel.parent_0 != this$static.mainAreaPanel && this$static.mainAreaPanel.add_2(this$static.bonusFadePanel, 0, 0);
  $setStyleName(this$static.bonusFadePanel, 'bonusFadePanelFadeOut', false);
  $setStyleName(this$static.bonusFadePanel, 'bonusFadePanelFadeIn', true);
  if (type == ($clinit_QueenOfDiamondsBoard$PopupType() , WAR_INTRO)) {
    $schedule(this$static.timerToStartWarBonus, 600);
    getSoundManager().stop_1(($clinit_Game431() , SOUND_FILE_URL), 'War_popup_opening');
  }
   else if (type == JOKER_INTRO) {
    $schedule(this$static.timerToStartJokerBonus, 600);
    getSoundManager().stop_1(($clinit_Game431() , SOUND_FILE_URL), 'Joker_popup_opening');
  }
  $trackBonusStart((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5));
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Continue', 38);
}

function $onFinishBonusGame_2(this$static, pls){
  this$static.bonusPls = pls;
  $setStyleName(this$static.bonusFadePanel, 'bonusFadePanelFadeOut', false);
  $setStyleName(this$static.bonusFadePanel, 'bonusFadePanelFadeIn', true);
  this$static.currentBonus == ($clinit_QueenOfDiamondsBoard$BonusType() , JOKER_BONUS)?$schedule(this$static.timerToEndJokerBonus, 600):this$static.currentBonus == WAR_BONUS_0 && $schedule(this$static.timerToEndWarBonus, 600);
}

function $onGoldCardRevealed(this$static){
  $setGoldCardsFinishedReveal(this$static, this$static.goldCardsFinishedReveal + 1);
  if (this$static.currentWarLegendState < this$static.goldCardsFinishedReveal) {
    $triggerItemAction(this$static.warLegendAnimItem, 'war' + this$static.goldCardsFinishedReveal);
    this$static.currentWarLegendState = this$static.goldCardsFinishedReveal;
    getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'War_legend_lights_' + this$static.goldCardsFinishedReveal, 5);
  }
  this$static.goldCardsFinishedReveal == 3 && (this$static.isRevealAll || $checkNextStep(this$static));
}

function $onJokerBonusFinished(this$static){
  $setCurrentBonus(this$static, ($clinit_QueenOfDiamondsBoard$BonusType() , NONE_0));
  $setBonusDataToStorage(this$static.listener, 'QUEEN_OF_DIAMONDS_JOKER_BONUS_WAS_PLAYED_ALREADY');
  $setIsClickable_0(this$static.mainArea, true);
  $onBoardClickableChange(this$static.listener, true);
  $checkNextStep(this$static);
}

function $onJokerRevealed(this$static){
  this$static.isRevealAll || $checkNextStep(this$static);
}

function $onMainAreaAllItemsRevealed(this$static){
  this$static.isMainAreaFinished = true;
  $checkNextStep(this$static);
}

function $onPreBonusGoldCardsAnimationFinished(this$static){
  $setPreBonusGoldCardAnimPlayed(this$static, this$static.preBonusGoldCardAnimPlayed + 1);
  if (this$static.preBonusGoldCardAnimPlayed == 3 && this$static.listener.model.isWarBonus) {
    $cancel_0(this$static.bonusGamePopupStartDelay);
    $schedule(this$static.bonusGamePopupStartDelay, 1000);
  }
}

function $onPreBonusJokerAnimationFinished(this$static){
  if (this$static.listener.model.isJockerBonus) {
    $cancel_0(this$static.bonusGamePopupStartDelay);
    $schedule(this$static.bonusGamePopupStartDelay, 1000);
  }
}

function $onQueenRevealed_0(this$static, itemID){
  $onQueenRevealed(this$static.listener, itemID);
}

function $onWarBonusFinished(this$static){
  $setCurrentBonus(this$static, ($clinit_QueenOfDiamondsBoard$BonusType() , NONE_0));
  $setBonusDataToStorage(this$static.listener, 'QUEEN_OF_DIAMONDS_WAR_BONUS_WAS_PLAYED_ALREADY');
  $setIsClickable_0(this$static.mainArea, true);
  $onBoardClickableChange(this$static.listener, true);
  $checkNextStep(this$static);
}

function $playBottomBarWinAnimation(this$static){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'General_win', 9);
  $triggerItemAction(this$static.boardWinGameAnimItem, 'win');
  $cancel_0(this$static.winsAnimationStopDelay);
  $schedule(this$static.winsAnimationStopDelay, 3000);
}

function $preRender_4(this$static){
  if (this$static.isRenderOnlyBonus) {
    $preRender_1(this$static.bonusesManager);
  }
   else {
    $preRender_5(this$static.mainArea);
    $preRender_7(this$static.callToActionAnimGameItem);
    $preRender_7(this$static.boardWinGameAnimItem);
    $preRender_7(this$static.jokerLegendAnimItem);
    $preRender_7(this$static.jokerLegendWinAmountAnimItem);
    $preRender_7(this$static.jokerLegendTextAnimItem);
    $preRender_7(this$static.warLegendAnimItem);
    $preRender_7(this$static.warLegendTextAnimItem);
    $preRender_7(this$static.warLegendWinAmountAnimItem);
  }
}

function $render_4(this$static, g){
  if (this$static.isRenderOnlyBonus) {
    if (this$static.mainAreaPanel.attached) {
      $isShowing(this$static.jokerIntroPopup)?$hidePopup(this$static.jokerIntroPopup, ($clinit_Boolean() , $clinit_Boolean() , FALSE_0)):$isShowing(this$static.warIntroPopup) && $hidePopup(this$static.warIntroPopup, ($clinit_Boolean() , $clinit_Boolean() , FALSE_0));
      $removeLastPanel(this$static.panelManager);
      $setCurrentPanel(this$static.panelManager, this$static.bonusesManager.currentBonusGame.getBonusPanel(), false);
      scrollToView();
      $add_2(this$static.bonusesManager.currentBonusGame.getBonusPanel(), this$static.bonusFadePanel, 0, 0);
      $setStyleName(this$static.bonusFadePanel, 'bonusFadePanelFadeOut', true);
      this$static.bonusesManager.currentBonusGame.playAmbienceSound();
    }
    $render_1(this$static.bonusesManager, g);
  }
   else {
    if (this$static.panelManager.basePanel.attached && !this$static.mainAreaPanel.attached) {
      $reset_2(this$static.bonusesManager);
      $removeLastPanel(this$static.panelManager);
      $setCurrentPanel(this$static.panelManager, this$static.mainAreaPanel, false);
      scrollToView();
      this$static.mainAreaPanel.add_2(this$static.bonusFadePanel, 0, 0);
      $setStyleName(this$static.bonusFadePanel, 'bonusFadePanelFadeOut', true);
    }
    $render_9(this$static.jokerLegendAnimItem, g);
    $render_9(this$static.jokerLegendWinAmountAnimItem, g);
    $render_9(this$static.jokerLegendTextAnimItem, g);
    $render_9(this$static.warLegendAnimItem, g);
    $render_9(this$static.warLegendTextAnimItem, g);
    $render_9(this$static.warLegendWinAmountAnimItem, g);
    $render_5(this$static.mainArea, g);
    $render_9(this$static.callToActionAnimGameItem, g);
    $render_9(this$static.boardWinGameAnimItem, g);
  }
}

function $reset_7(this$static){
  this$static.isRevealAll = false;
  this$static.isRenderOnlyBonus = false;
  $reset_8(this$static.mainArea);
  this$static.isMainAreaFinished = false;
  $stopBottomBarWinAnimation(this$static);
  $cancel_0(this$static.callToActionDelay);
  $schedule(this$static.callToActionDelay, 7000);
  if (this$static.isJokerBonusWasPlayedAtPrevRound) {
    $triggerItemAction(this$static.jokerLegendAnimItem, 'Appear');
    $triggerItemAction(this$static.jokerLegendWinAmountAnimItem, 'Dissapear');
    this$static.isJokerBonusWasPlayedAtPrevRound = false;
  }
   else if (this$static.jokerLegendAnimItem.animation.animName != 'coin') {
    this$static.jokerLegendAnimItem.isVisible = true;
    $triggerItemAction(this$static.jokerLegendAnimItem, 'coin');
  }
  if (this$static.isWarBonusWasPlayedAtPrevRound) {
    $triggerItemAction(this$static.warLegendAnimItem, 'Appear');
    $triggerItemAction(this$static.warLegendWinAmountAnimItem, 'Dissapear');
    this$static.isWarBonusWasPlayedAtPrevRound = false;
  }
   else {
    $triggerItemAction(this$static.warLegendAnimItem, 'idle');
  }
  this$static.currentWarLegendState = 0;
  $triggerItemAction(this$static.jokerLegendTextAnimItem, 'reg');
  $triggerItemAction(this$static.warLegendTextAnimItem, 'reg');
  this$static.isShouldJokerBonusPlayed = false;
  this$static.isShouldWarBonusPlayed = false;
  this$static.goldCardsStartedReveal = 0;
  this$static.goldCardsFinishedReveal = 0;
  this$static.preBonusGoldCardAnimPlayed = 0;
  $setCurrentBonus(this$static, ($clinit_QueenOfDiamondsBoard$BonusType() , NONE_0));
  this$static.historyPls = null;
}

function $revealAll(this$static){
  this$static.isRevealAll = true;
  $revealAll_0(this$static.mainArea);
}

function $setBoardIsClickable(this$static){
  $setIsClickable_0(this$static.mainArea, true);
  $onBoardClickableChange(this$static.listener, true);
}

function $setCurrentBonus(this$static, currentBonus){
  this$static.currentBonus = currentBonus;
}

function $setData_4(this$static, mainGameSymbols, jokerBonusDO, warBonusDO, historyPls){
  $setData_5(this$static.mainArea, mainGameSymbols);
  this$static.jokerBonusDO = jokerBonusDO;
  this$static.warBonusDO = warBonusDO;
  $setData_0(this$static.bonusesManager, this$static.jokerBonusDO, this$static.warBonusDO);
  this$static.historyPls = historyPls;
}

function $setGoldCardsFinishedReveal(this$static, goldCardsFinishedReveal){
  this$static.goldCardsFinishedReveal = goldCardsFinishedReveal;
}

function $setGoldCardsStartedReveal(this$static, goldCardsStartedReveal){
  this$static.goldCardsStartedReveal = goldCardsStartedReveal;
}

function $setPostBonusJokerLegend(this$static){
  $triggerItemAction(this$static.jokerLegendAnimItem, 'WinJokerLegend');
  this$static.jokerLegendWinAmountAnimItem.isVisible = true;
  $triggerItemAction(this$static.jokerLegendWinAmountAnimItem, 'idle');
}

function $setPostBonusWarLegend(this$static){
  $triggerItemAction(this$static.warLegendAnimItem, 'Dissapear');
  this$static.warLegendWinAmountAnimItem.isVisible = true;
  $triggerItemAction(this$static.warLegendWinAmountAnimItem, 'idle');
}

function $setPreBonusGoldCardAnimPlayed(this$static, preBonusGoldCardAnimPlayed){
  this$static.preBonusGoldCardAnimPlayed = preBonusGoldCardAnimPlayed;
}

function $setSelectedTicketsNum(this$static, ticketsNum, isInit){
  $setSelctedTicketsNum(this$static.mainArea, ticketsNum, isInit);
}

function $setWinJokerLegend(this$static){
  $updateJokerBonusWin(this$static.listener, this$static.jokerBonusDO.prizeAmount);
}

function $setWinWarLegend(this$static){
  $updateWarBonusWin(this$static.listener, this$static.warBonusDO.prizeAmount);
}

function $startBonus(this$static){
  getSoundManager().stop_1(($clinit_Game431() , SOUND_FILE_URL), 'Ambience_sound');
  $cancel_0(this$static.bonusGamePopupStartDelay);
  $showCurrentFinalPrize(this$static.listener);
  if (this$static.currentBonus == ($clinit_QueenOfDiamondsBoard$BonusType() , WAR_BONUS_0)) {
    this$static.isWarBonusWasPlayedAtPrevRound = true;
    this$static.isShouldWarBonusPlayed = false;
    $showPopup(this$static.warIntroPopup, this$static.mainAreaPanel, ($clinit_Boolean() , $clinit_Boolean() , TRUE_0));
    getSoundManager().play_2(SOUND_FILE_URL, 'War_popup_opening', 33);
    this$static.historyPls != null && $autoDismissIntroPopupOnHistoryMode(this$static, ($clinit_QueenOfDiamondsBoard$PopupType() , WAR_INTRO));
  }
   else if (this$static.currentBonus == JOKER_BONUS) {
    this$static.isJokerBonusWasPlayedAtPrevRound = true;
    this$static.isShouldJokerBonusPlayed = false;
    $showPopup(this$static.jokerIntroPopup, this$static.mainAreaPanel, ($clinit_Boolean() , $clinit_Boolean() , TRUE_0));
    getSoundManager().play_2(SOUND_FILE_URL, 'Joker_popup_opening', 21);
    this$static.historyPls != null && $autoDismissIntroPopupOnHistoryMode(this$static, ($clinit_QueenOfDiamondsBoard$PopupType() , JOKER_INTRO));
  }
}

function $stopBottomBarWinAnimation(this$static){
  getSoundManager().stop_1(($clinit_Game431() , SOUND_FILE_URL), 'General_win');
  $cancel_0(this$static.winsAnimationStopDelay);
  $triggerItemAction(this$static.boardWinGameAnimItem, 'idle');
  this$static.listener.gamePanel.winsAreaAnimFinished();
}

function QueenOfDiamondsBoard_0(){
}

function QueenOfDiamondsBoard(){
}

_ = QueenOfDiamondsBoard_0.prototype = QueenOfDiamondsBoard.prototype = new Object_0;
_.getClass$ = function getClass_563(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard_2_classLit;
}
;
_.onBonusPopupCloseButtonClicked = function onBonusPopupCloseButtonClicked_1(type){
  $onBonusPopupCloseButtonClicked(this, type);
}
;
_.castableTypeMap$ = makeCastMap([Q$Renderable]);
_.boardWinGameAnimItem = null;
_.bonusFadePanel = null;
_.bonusGamePopupStartDelay = null;
_.bonusPls = null;
_.bonusesManager = null;
_.callToActionAnimGameItem = null;
_.callToActionDelay = null;
_.currentBonus = null;
_.currentWarLegendState = 0;
_.goldCardsFinishedReveal = 0;
_.goldCardsStartedReveal = 0;
_.historyPls = null;
_.isJokerBonusWasPlayedAtPrevRound = false;
_.isMainAreaFinished = false;
_.isRenderOnlyBonus = false;
_.isRevealAll = false;
_.isShouldJokerBonusPlayed = false;
_.isShouldWarBonusPlayed = false;
_.isWarBonusWasPlayedAtPrevRound = false;
_.jokerBonusDO = null;
_.jokerIntroPopup = null;
_.jokerLegendAnimItem = null;
_.jokerLegendTextAnimItem = null;
_.jokerLegendWinAmountAnimItem = null;
_.listener = null;
_.mainArea = null;
_.mainAreaPanel = null;
_.panelManager = null;
_.preBonusGoldCardAnimPlayed = 0;
_.timerToEndJokerBonus = null;
_.timerToEndWarBonus = null;
_.timerToStartJokerBonus = null;
_.timerToStartWarBonus = null;
_.warBonusDO = null;
_.warIntroPopup = null;
_.warLegendAnimItem = null;
_.warLegendTextAnimItem = null;
_.warLegendWinAmountAnimItem = null;
_.winsAnimationStopDelay = null;
function QueenOfDiamondsBoard$1_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsBoard$1(){
}

_ = QueenOfDiamondsBoard$1_0.prototype = QueenOfDiamondsBoard$1.prototype = new Object_0;
_.getClass$ = function getClass_564(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$1_2_classLit;
}
;
_.handleGameItemFinished = function handleGameItemFinished_6(finishedAnimItem){
  $cancel_0(this.this$0.callToActionDelay);
  $schedule(this.this$0.callToActionDelay, 7000);
}
;
_.castableTypeMap$ = makeCastMap([Q$IGameItemFinishedListener]);
_.this$0 = null;
function QueenOfDiamondsBoard$10_0(this$0, val$popupType){
  $clinit_Timer();
  this.this$0 = this$0;
  this.val$popupType = val$popupType;
}

function QueenOfDiamondsBoard$10(){
}

_ = QueenOfDiamondsBoard$10_0.prototype = QueenOfDiamondsBoard$10.prototype = new Timer;
_.getClass$ = function getClass_565(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$10_2_classLit;
}
;
_.run = function run_23(){
  this.isRepeating?clearInterval_0(this.timerId):clearTimeout_0(this.timerId);
  $remove_11(timers, this);
  $onBonusPopupCloseButtonClicked(this.this$0, this.val$popupType);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
_.val$popupType = null;
function QueenOfDiamondsBoard$2_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsBoard$2(){
}

_ = QueenOfDiamondsBoard$2_0.prototype = QueenOfDiamondsBoard$2.prototype = new Timer;
_.getClass$ = function getClass_566(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$2_2_classLit;
}
;
_.run = function run_24(){
  $cancel_0(this.this$0.callToActionDelay);
  $triggerItemAction(this.this$0.callToActionAnimGameItem, 'Play');
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function QueenOfDiamondsBoard$3_0(){
}

function QueenOfDiamondsBoard$3(){
}

_ = QueenOfDiamondsBoard$3_0.prototype = QueenOfDiamondsBoard$3.prototype = new Object_0;
_.getClass$ = function getClass_567(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$3_2_classLit;
}
;
_.handleGameItemFinished = function handleGameItemFinished_7(finishedAnimItem){
}
;
_.castableTypeMap$ = makeCastMap([Q$IGameItemFinishedListener]);
function QueenOfDiamondsBoard$4_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsBoard$4(){
}

_ = QueenOfDiamondsBoard$4_0.prototype = QueenOfDiamondsBoard$4.prototype = new Timer;
_.getClass$ = function getClass_568(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$4_2_classLit;
}
;
_.run = function run_25(){
  $startBonus(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function QueenOfDiamondsBoard$5_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsBoard$5(){
}

_ = QueenOfDiamondsBoard$5_0.prototype = QueenOfDiamondsBoard$5.prototype = new Timer;
_.getClass$ = function getClass_569(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$5_2_classLit;
}
;
_.run = function run_26(){
  $stopBottomBarWinAnimation(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function QueenOfDiamondsBoard$6_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsBoard$6(){
}

_ = QueenOfDiamondsBoard$6_0.prototype = QueenOfDiamondsBoard$6.prototype = new Timer;
_.getClass$ = function getClass_570(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$6_2_classLit;
}
;
_.run = function run_27(){
  $startBonusGame(this.this$0.bonusesManager, ($clinit_QueenOfDiamondsBonusesManager$BonusGamesState() , JOKER_BONUS_GAME), this.this$0.historyPls);
  this.this$0.isRenderOnlyBonus = true;
  $setStyleName(this.this$0.bonusFadePanel, 'bonusFadePanelFadeIn', false);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function QueenOfDiamondsBoard$7_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsBoard$7(){
}

_ = QueenOfDiamondsBoard$7_0.prototype = QueenOfDiamondsBoard$7.prototype = new Timer;
_.getClass$ = function getClass_571(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$7_2_classLit;
}
;
_.run = function run_28(){
  this.this$0.isRenderOnlyBonus = true;
  $startBonusGame(this.this$0.bonusesManager, ($clinit_QueenOfDiamondsBonusesManager$BonusGamesState() , WAR_BONUS_GAME), this.this$0.historyPls);
  $setStyleName(this.this$0.bonusFadePanel, 'bonusFadePanelFadeIn', false);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function QueenOfDiamondsBoard$8_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsBoard$8(){
}

_ = QueenOfDiamondsBoard$8_0.prototype = QueenOfDiamondsBoard$8.prototype = new Timer;
_.getClass$ = function getClass_572(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$8_2_classLit;
}
;
_.run = function run_29(){
  $setPostBonusJokerLegend(this.this$0);
  $onJokerBonusFinished(this.this$0);
  $setWinJokerLegend(this.this$0);
  $setStyleName(this.this$0.bonusFadePanel, 'bonusFadePanelFadeOut', false);
  this.this$0.isRenderOnlyBonus = false;
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Ambience_sound', 15);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function QueenOfDiamondsBoard$9_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsBoard$9(){
}

_ = QueenOfDiamondsBoard$9_0.prototype = QueenOfDiamondsBoard$9.prototype = new Timer;
_.getClass$ = function getClass_573(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$9_2_classLit;
}
;
_.run = function run_30(){
  $setPostBonusWarLegend(this.this$0);
  $onWarBonusFinished(this.this$0);
  $setWinWarLegend(this.this$0);
  $setStyleName(this.this$0.bonusFadePanel, 'bonusFadePanelFadeOut', false);
  this.this$0.isRenderOnlyBonus = false;
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Ambience_sound', 15);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function $clinit_QueenOfDiamondsBoard$BonusType(){
  $clinit_QueenOfDiamondsBoard$BonusType = nullMethod;
  NONE_0 = new QueenOfDiamondsBoard$BonusType_0('NONE', 0);
  JOKER_BONUS = new QueenOfDiamondsBoard$BonusType_0('JOKER_BONUS', 1);
  WAR_BONUS_0 = new QueenOfDiamondsBoard$BonusType_0('WAR_BONUS', 2);
  $VALUES_21 = initValues(_3Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$BonusType_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$Comparable_$1, Q$Object_$1]), Q$QueenOfDiamondsBoard$BonusType, [NONE_0, JOKER_BONUS, WAR_BONUS_0]);
}

function QueenOfDiamondsBoard$BonusType_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_22(){
  $clinit_QueenOfDiamondsBoard$BonusType();
  return $VALUES_21;
}

function QueenOfDiamondsBoard$BonusType(){
}

_ = QueenOfDiamondsBoard$BonusType_0.prototype = QueenOfDiamondsBoard$BonusType.prototype = new Enum;
_.getClass$ = function getClass_574(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$BonusType_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Comparable, Q$Enum, Q$QueenOfDiamondsBoard$BonusType]);
var $VALUES_21, JOKER_BONUS, NONE_0, WAR_BONUS_0;
function $clinit_QueenOfDiamondsBoard$PopupType(){
  $clinit_QueenOfDiamondsBoard$PopupType = nullMethod;
  JOKER_INTRO = new QueenOfDiamondsBoard$PopupType_0('JOKER_INTRO', 0);
  JOKER_SUMMARY = new QueenOfDiamondsBoard$PopupType_0('JOKER_SUMMARY', 1);
  WAR_INTRO = new QueenOfDiamondsBoard$PopupType_0('WAR_INTRO', 2);
  WAR_SUMMARY = new QueenOfDiamondsBoard$PopupType_0('WAR_SUMMARY', 3);
  $VALUES_22 = initValues(_3Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$PopupType_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$Comparable_$1, Q$Object_$1]), Q$QueenOfDiamondsBoard$PopupType, [JOKER_INTRO, JOKER_SUMMARY, WAR_INTRO, WAR_SUMMARY]);
}

function QueenOfDiamondsBoard$PopupType_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_23(){
  $clinit_QueenOfDiamondsBoard$PopupType();
  return $VALUES_22;
}

function QueenOfDiamondsBoard$PopupType(){
}

_ = QueenOfDiamondsBoard$PopupType_0.prototype = QueenOfDiamondsBoard$PopupType.prototype = new Enum;
_.getClass$ = function getClass_575(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$PopupType_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Comparable, Q$Enum, Q$QueenOfDiamondsBoard$PopupType]);
var $VALUES_22, JOKER_INTRO, JOKER_SUMMARY, WAR_INTRO, WAR_SUMMARY;
function $isShowing(this$static){
  return this$static.element.style.display != 'none' && $isAttached(this$static);
}

function $hidePopup(this$static, isShowWithFadeOut){
  if (isShowWithFadeOut.value_0) {
    $setStyleName(this$static.darkBackground, 'bonusPopupFadeIn', false);
    $setStyleName(this$static.containerPanel, 'bonusPopupFadeIn', false);
    $setStyleName(this$static.darkBackground, 'bonusPopupFadeOut', true);
    $setStyleName(this$static.containerPanel, 'bonusPopupFadeOut', true);
  }
   else {
    $hide_2(this$static);
  }
}

function $setPrize_0(this$static, bonusPrizeAmount){
  var pennisValue, prizeAmount;
  pennisValue = dollarstopennies('' + bonusPrizeAmount);
  prizeAmount = appendCurrencySymbol(penniesToDollars(pennisValue));
  $setHTML_0(this$static.htmlSubTxt, prizeAmount);
}

function $showPopup(this$static, container, isShowWithFadeIn){
  if (this$static.element.style.display != 'none' && $isAttached(this$static)) {
    return;
  }
  $setEnabled_4(this$static.closeBtn, true);
  setVisible(this$static.element, true);
  $add_2(container, this$static, 0, 0);
  if (isShowWithFadeIn.value_0) {
    $setStyleName(this$static.darkBackground, 'bonusPopupFadeOut', false);
    $setStyleName(this$static.containerPanel, 'bonusPopupFadeOut', false);
    $setStyleName(this$static.darkBackground, 'bonusPopupFadeIn', true);
    $setStyleName(this$static.containerPanel, 'bonusPopupFadeIn', true);
  }
}

function QueenOfDiamondsBonusPopup_0(container, bgImage, btnImage, txtImage, bgLocation, btnLocation, subTxtLocation, txtImgLocation, btnTxt, subTxtStyle, popupButtonStyle, type, listener){
  var backgroundImage, txtImg;
  PopupDialog_0.call(this, container, true);
  this.type_0 = type;
  this.containerPanel = new AbsoluteNeoPanel_0;
  $setPixelSize(this.containerPanel, bgLocation.width_0, bgLocation.height_0);
  $setStyleName(this.containerPanel, 'noPointerEvents', true);
  backgroundImage = new Image_2(bgImage.image.src);
  backgroundImage.element.style['zIndex'] = '51';
  $add_2(this.containerPanel, backgroundImage, 0, 0);
  this.closeBtn = new MenuCommonButton_0(popupButtonStyle, btnTxt, btnImage.image.src, $getWidth(btnImage) >> 1, $getHeight(btnImage) >> 1);
  this.closeBtn.element.style['zIndex'] = '5505';
  $addClickHandler_0(this.closeBtn, new QueenOfDiamondsBonusPopup$1_0(this, listener));
  $add_15(this.containerPanel, this.closeBtn, btnLocation);
  txtImg = new Image_2(txtImage.image.src);
  txtImg.element.style['zIndex'] = '51';
  $add_2(this.containerPanel, txtImg, txtImgLocation.x_0 - (txtImgLocation.width_0 >> 1), txtImgLocation.y_0 - (txtImgLocation.height_0 >> 1));
  if (subTxtLocation) {
    this.htmlSubTxt = new CentredHTML_0;
    $setWordWrap(this.htmlSubTxt, false);
    $setHorizontalAlignment(this.htmlSubTxt, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
    $setStyleName_1(this.htmlSubTxt, subTxtStyle);
    this.htmlSubTxt.element.style['zIndex'] = '5505';
    $setPosition_1(this.htmlSubTxt, subTxtLocation);
    $add_2(this.containerPanel, this.htmlSubTxt, 0, 0);
  }
  $setStyleName(this.darkBackground, 'bonusPopupDark', true);
  $setPopupContent(this, this.containerPanel);
  setVisible(this.element, false);
}

function QueenOfDiamondsBonusPopup(){
}

_ = QueenOfDiamondsBonusPopup_0.prototype = QueenOfDiamondsBonusPopup.prototype = new PopupDialog;
_.getClass$ = function getClass_577(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBonusPopup_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]);
_.closeBtn = null;
_.containerPanel = null;
_.htmlSubTxt = null;
_.type_0 = null;
function QueenOfDiamondsBonusPopup$1_0(this$0, val$listener){
  this.this$0 = this$0;
  this.val$listener = val$listener;
}

function QueenOfDiamondsBonusPopup$1(){
}

_ = QueenOfDiamondsBonusPopup$1_0.prototype = QueenOfDiamondsBonusPopup$1.prototype = new Object_0;
_.getClass$ = function getClass_578(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBonusPopup$1_2_classLit;
}
;
_.onClick = function onClick_12(event_0){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Continue', 38);
  $setEnabled_4(this.this$0.closeBtn, false);
  this.val$listener.onBonusPopupCloseButtonClicked(this.this$0.type_0);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
_.val$listener = null;
function $coverItems(this$static){
  var i;
  this$static.numberOfItemsToCover = 0;
  for (i = 0; i < 18; ++i) {
    if (this$static.gameItems[i].cardState == ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , OPENED)) {
      ++this$static.numberOfItemsToCover;
      $cover(this$static.gameItems[i]);
    }
  }
  this$static.numberOfItemsToCover > 0 && getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'New_round', 13);
}

function $init_21(this$static, resources, gameLocations, panel, listener, cardConfiguration){
  var i;
  this$static.listener = listener;
  this$static.cardConfiguration = cardConfiguration;
  this$static.gameItems = initDim(_3Lwebgl_client_nf_games_g431_Card_QueenOfDiamondsCard_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$QueenOfDiamondsCard, 18, 0);
  this$static.isShowCardsCoverAnimation = false;
  for (i = 0; i < 18; ++i) {
    setCheck(this$static.gameItems, i, new QueenOfDiamondsCard_0(i, resources, cardConfiguration, this$static));
    this$static.gameItems[i].setLocation(gameLocations, 'BOARD_CARD');
    $setTouchableDivPanel(this$static.gameItems[i], panel);
    $setAnimFinishedListener(this$static.gameItems[i], this$static);
    this$static.gameItems[i].isVisible = false;
    $setAnimClickListener(this$static.gameItems[i], new QueenOfDiamondsMainArea$1_0(this$static, cardConfiguration, listener));
  }
  this$static.winningItemsIds = new ArrayList_0;
  this$static.revealTimer = new QueenOfDiamondsMainArea$2_0(this$static);
}

function $preRender_5(this$static){
  var item, item$array, item$index, item$max;
  for (item$array = this$static.gameItems , item$index = 0 , item$max = item$array.length; item$index < item$max; ++item$index) {
    item = item$array[item$index];
    item.preRender();
  }
}

function $render_5(this$static, g){
  var i;
  for (i = this$static.gameItems.length - 1; i >= 0; --i) {
    this$static.gameItems[i].render(g);
  }
}

function $reset_8(this$static){
  this$static.numberOfRevealedItems = 0;
  this$static.numberOfClickedItems = 0;
  this$static.numberOfItemsToCover = 0;
  this$static.numberOfQueenEndedWinAnimItems = 0;
  this$static.numberOfQueenRevealedItems = 0;
  this$static.lastRevealedIndex = 0;
  $cancel_0(this$static.revealTimer);
  $setIsClickable_0(this$static, false);
  this$static.isShouldQueenWinAnimBePlayed = false;
  if (this$static.isShowCardsCoverAnimation) {
    this$static.isShowCardsCoverAnimation = false;
    $coverItems(this$static);
  }
   else {
    $onBoardCompleteReset(this$static.listener.listener);
  }
}

function $revealAll_0(this$static){
  var i;
  $setIsClickable_0(this$static, false);
  for (i = 0; i < 18; ++i) {
    this$static.gameItems[i].isVisible = true;
  }
  $revealNextCard(this$static);
}

function $revealNextCard(this$static){
  $cancel_0(this$static.revealTimer);
  for (; this$static.lastRevealedIndex < this$static.numSelectedTickets; ++this$static.lastRevealedIndex) {
    if (this$static.gameItems[this$static.lastRevealedIndex].cardState == ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , COVERED)) {
      $setIsClickable(this$static.gameItems[this$static.lastRevealedIndex], false);
      this$static.gameItems[this$static.lastRevealedIndex].reveal();
      this$static.gameItems[this$static.lastRevealedIndex].isQueen?this$static.cardConfiguration.playQueenFlipSound():this$static.gameItems[this$static.lastRevealedIndex].isJoker?this$static.cardConfiguration.playJokerFlipSound():this$static.gameItems[this$static.lastRevealedIndex].isGoldCard?getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Flip_golden_card', 3):getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Flip_losing_card', 12);
      $schedule(this$static.revealTimer, 50);
      ++this$static.lastRevealedIndex;
      break;
    }
  }
}

function $setData_5(this$static, mainGameSymbols){
  var i, symbolDO;
  $clear_1(this$static.winningItemsIds);
  for (i = 0; i < mainGameSymbols.size_0; ++i) {
    symbolDO = dynamicCast((checkIndex(i, mainGameSymbols.size_0) , mainGameSymbols.array[i]), Q$QueenOfDiamondsMainGameSymbolDO);
    symbolDO.isWin && $add_10(this$static.winningItemsIds, valueOf_0(i));
    this$static.gameItems[i].setData(symbolDO);
  }
}

function $setIsClickable_0(this$static, isClickAble){
  var i;
  for (i = 0; i < this$static.numSelectedTickets; ++i) {
    (!isClickAble || this$static.gameItems[i].cardState == ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , COVERED)) && $setIsClickable(this$static.gameItems[i], isClickAble);
  }
}

function $setSelctedTicketsNum(this$static, ticketsNum, isInit){
  var i;
  this$static.numSelectedTickets = ticketsNum;
  for (i = 0; i < ticketsNum; ++i) {
    $setIsSelected(this$static.gameItems[i], true, isInit);
  }
  for (i = ticketsNum; i < 18; ++i) {
    $setIsSelected(this$static.gameItems[i], false, isInit);
  }
}

function $showGoldCardsWinAnim(this$static){
  var i;
  for (i = 0; i < this$static.gameItems.length; ++i) {
    $showGoldCardWinAnim(this$static.gameItems[i]);
  }
}

function $showJokerWinAnim_0(this$static){
  var i;
  for (i = 0; i < this$static.gameItems.length; ++i) {
    $showJokerWinAnim(this$static.gameItems[i]);
  }
}

function $showQueensWinAnim(this$static){
  var i;
  for (i = 0; i < this$static.gameItems.length; ++i) {
    $showQueenWinAnim(this$static.gameItems[i]);
  }
}

function QueenOfDiamondsMainArea_0(){
}

function QueenOfDiamondsMainArea(){
}

_ = QueenOfDiamondsMainArea_0.prototype = QueenOfDiamondsMainArea.prototype = new Object_0;
_.getClass$ = function getClass_579(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsMainArea_2_classLit;
}
;
_.goldCardStartReveal = function goldCardStartReveal_0(){
  $goldCardStartReveal(this.listener);
}
;
_.handleGameItemFinished = function handleGameItemFinished_8(finishedAnimItem){
  var item;
  item = dynamicCast(finishedAnimItem, Q$QueenOfDiamondsCard);
  if (item.cardState == ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , OPENED)) {
    ++this.numberOfRevealedItems;
    if (item.isQueen) {
      if (item.isQueenWinAnimPlayed) {
        ++this.numberOfQueenEndedWinAnimItems;
        if (this.numberOfQueenRevealedItems == this.numberOfQueenEndedWinAnimItems) {
          this.isShouldQueenWinAnimBePlayed = false;
          $onMainAreaAllItemsRevealed(this.listener);
        }
        return;
      }
       else {
        this.numberOfQueenRevealedItems == 0 && (this.isShouldQueenWinAnimBePlayed = true);
        ++this.numberOfQueenRevealedItems;
        $onQueenRevealed_0(this.listener, item.itemID);
      }
    }
     else 
      item.isJoker?$onJokerRevealed(this.listener):item.isGoldCard && $onGoldCardRevealed(this.listener);
    this.numberOfRevealedItems == this.numSelectedTickets && $onMainAreaAllItemsRevealed(this.listener);
  }
   else if (item.cardState == COVERED) {
    --this.numberOfItemsToCover;
    this.numberOfItemsToCover == 0 && $onBoardCompleteReset(this.listener.listener);
  }
}
;
_.jokerCardStartReveal = function jokerCardStartReveal_0(){
  this.listener.isShouldJokerBonusPlayed = true;
}
;
_.onPreBonusGoldCardsAnimationFinished = function onPreBonusGoldCardsAnimationFinished_0(){
  $onPreBonusGoldCardsAnimationFinished(this.listener);
}
;
_.onPreBonusJokerAnimationFinished = function onPreBonusJokerAnimationFinished_0(){
  $onPreBonusJokerAnimationFinished(this.listener);
}
;
_.castableTypeMap$ = makeCastMap([Q$Renderable, Q$IGameItemFinishedListener]);
_.cardConfiguration = null;
_.gameItems = null;
_.isShouldQueenWinAnimBePlayed = false;
_.isShowCardsCoverAnimation = false;
_.lastRevealedIndex = 0;
_.listener = null;
_.numSelectedTickets = 0;
_.numberOfClickedItems = 0;
_.numberOfItemsToCover = 0;
_.numberOfQueenEndedWinAnimItems = 0;
_.numberOfQueenRevealedItems = 0;
_.numberOfRevealedItems = 0;
_.revealTimer = null;
_.winningItemsIds = null;
function QueenOfDiamondsMainArea$1_0(this$0, val$cardConfiguration, val$listener){
  this.this$0 = this$0;
  this.val$cardConfiguration = val$cardConfiguration;
  this.val$listener = val$listener;
}

function QueenOfDiamondsMainArea$1(){
}

_ = QueenOfDiamondsMainArea$1_0.prototype = QueenOfDiamondsMainArea$1.prototype = new Object_0;
_.getClass$ = function getClass_580(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsMainArea$1_2_classLit;
}
;
_.handleGameItemClicked = function handleGameItemClicked_0(clickedItem){
  if (clickedItem.cardState == ($clinit_AbstractQueenOfDiamondsCardConfiguration$CardsState() , COVERED)) {
    ++this.this$0.numberOfClickedItems;
    $setIsClickable(clickedItem, false);
    clickedItem.reveal();
    clickedItem.isQueen?this.val$cardConfiguration.playQueenFlipSound():clickedItem.isJoker?this.val$cardConfiguration.playJokerFlipSound():clickedItem.isGoldCard?getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Flip_golden_card', 3):getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Flip_losing_card', 12);
    this.this$0.numberOfClickedItems == this.this$0.numSelectedTickets && (this.val$listener.listener.gamePanel.enableMenu(false) , $setKeyboardEnabled((!instance_12 && (instance_12 = new KeyboardManager_0) , instance_12), false));
  }
}
;
_.this$0 = null;
_.val$cardConfiguration = null;
_.val$listener = null;
function QueenOfDiamondsMainArea$2_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsMainArea$2(){
}

_ = QueenOfDiamondsMainArea$2_0.prototype = QueenOfDiamondsMainArea$2.prototype = new Timer;
_.getClass$ = function getClass_581(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsMainArea$2_2_classLit;
}
;
_.run = function run_31(){
  $revealNextCard(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function $clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes(){
  $clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes = nullMethod;
  NONE_1 = new QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes_0('NONE', 0);
  B2 = new QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes_0('B2', 1);
  $VALUES_23 = initValues(_3Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$Comparable_$1, Q$Object_$1]), Q$QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes, [NONE_1, B2]);
}

function QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function valueOf_4(name_0){
  $clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes();
  return valueOf(($clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes$Map() , $MAP_1), name_0);
}

function values_24(){
  $clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes();
  return $VALUES_23;
}

function QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes(){
}

_ = QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes_0.prototype = QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes.prototype = new Enum;
_.getClass$ = function getClass_582(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Comparable, Q$Enum, Q$QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes]);
var $VALUES_23, B2, NONE_1;
function $clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes$Map(){
  $clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes$Map = nullMethod;
  $MAP_1 = createValueOfMap(($clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes() , $VALUES_23));
}

var $MAP_1;
function $clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes(){
  $clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes = nullMethod;
  R = new QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes_0('R', 0);
  S = new QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes_0('S', 1);
  B1 = new QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes_0('B1', 2);
  $VALUES_24 = initValues(_3Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$Comparable_$1, Q$Object_$1]), Q$QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes, [R, S, B1]);
}

function QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function valueOf_5(name_0){
  $clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes();
  return valueOf(($clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes$Map() , $MAP_2), name_0);
}

function values_25(){
  $clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes();
  return $VALUES_24;
}

function QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes(){
}

_ = QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes_0.prototype = QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes.prototype = new Enum;
_.getClass$ = function getClass_583(){
  return Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Comparable, Q$Enum, Q$QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes]);
var $VALUES_24, B1, R, S;
function $clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes$Map(){
  $clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes$Map = nullMethod;
  $MAP_2 = createValueOfMap(($clinit_QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes() , $VALUES_24));
}

var $MAP_2;
function $getFactoredBalance(balance){
  var balanceDollar, balancePennies;
  balance = convertFormattedAmountToNumber(balance);
  balancePennies = dollarstopennies(balance);
  balanceDollar = penniesToDollarsWithTwoDigits(balancePennies);
  return appendCurrencySymbol(balanceDollar);
}

function $initGamePanelServices(this$static, gamePanelServices){
  this$static.gamePanelServices = gamePanelServices;
  this$static.befDenominationIndex = $getBetDenominationsDefIndex(gamePanelServices);
  this$static.betDenominations = $getBetDenominations(gamePanelServices);
}

function AbstractGamePanel(){
}

_ = AbstractGamePanel.prototype = new AbsoluteNeoPanel;
_.getClass$ = function getClass_584(){
  return Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGamePanel_2_classLit;
}
;
_.onAttach = function onAttach_4(){
  $onAttach(this);
}
;
_.setWinUpTo = function setWinUpTo_0(winUpToAmount){
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AbsolutePanel, Q$ComplexPanel, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$AbsoluteNeoPanel]);
_.befDenominationIndex = 0;
_.betDenominations = null;
_.gamePanelListener = null;
_.gamePanelServices = null;
function $addSpaceBarKeyHandler(this$static){
  $addLeyboardListener((!instance_12 && (instance_12 = new KeyboardManager_0) , instance_12), new AbstractQueenOfDiamondsPanel$4_0(this$static));
}

function $centerTexts_5(this$static){
  !!this$static.htmlSerialNumber && $centre(this$static.htmlSerialNumber);
  !!this$static.htmlTotalBetValue && $centre(this$static.htmlTotalBetValue);
  !!this$static.htmlTotalWinValue && $centre(this$static.htmlTotalWinValue);
  !!this$static.jokerBonusText && $centre(this$static.jokerBonusText);
  !!this$static.warBonusText && $centre(this$static.warBonusText);
}

function $enableScratchAllButton(this$static, isEnable){
  $setEnabled_4(this$static.scratchAllaButton, isEnable);
}

function $init_22(this$static, screenWidth, screenHeight, gamePanelListener){
  this$static.gamePanelListener = gamePanelListener;
  setStyleAttribute(this$static.element, 'width', screenWidth + 'px');
  setStyleAttribute(this$static.element, 'height', screenHeight + 'px');
  screenWidth >= 0 && setStyleAttribute(this$static.element, 'width', screenWidth + 'px');
  screenHeight >= 0 && setStyleAttribute(this$static.element, 'height', screenHeight + 'px');
  this$static.element.style['zIndex'] = '25';
  this$static.totalWinsCounter = new AbstractQueenOfDiamondsPanel$1_0(this$static, this$static.htmlTotalWinValue);
  this$static.totalWinsCounter.adjuistStepValue = false;
  this$static.totalWinsCounter.ignoreTotalTimeLimitForMinStepTime = true;
  $setCounterPrefixText(this$static.totalWinsCounter, this$static.getTextCounterPrefix());
}

function $initLocations(this$static, locations){
  this$static.locations = locations;
  this$static.htmlSerialNumber = new CentredHTML_0;
  this$static.htmlSerialNumber.element.style['zIndex'] = '95';
  $setStyleName_1(this$static.htmlSerialNumber, 'CardId');
  $add_1(this$static, this$static.htmlSerialNumber);
  this$static.htmlTotalBetTitle = new CentredHTML_0;
  this$static.htmlTotalBetTitle.element.style['zIndex'] = '95';
  $setHorizontalAlignment(this$static.htmlTotalBetTitle, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $setStyleName_2(this$static.htmlTotalBetTitle, 'panelLabelsTitles', true);
  this$static.htmlTotalBetValue = new CentredHTML_0;
  $setStyleName_1(this$static.htmlTotalBetValue, 'panelLabelsValues');
  this$static.htmlTotalBetValue.element.style['zIndex'] = '95';
  $setPosition_1(this$static.htmlSerialNumber, $getLocation_0(this$static.locations, 'BOARD_SERIAL_NUM'));
  this$static.jokerBonusText = new CentredHTML_0;
  this$static.jokerBonusText.element.style['zIndex'] = '95';
  $setStyleName_1(this$static.jokerBonusText, 'legendTitles');
  $setPosition_1(this$static.jokerBonusText, dynamicCast(locations.locationsMap.get('BOARD_LEGEND_PRIZE_TXT'), Q$Location));
  $add_2(this$static, this$static.jokerBonusText, 0, 0);
  this$static.warBonusText = new CentredHTML_0;
  this$static.warBonusText.element.style['zIndex'] = '95';
  $setStyleName_1(this$static.warBonusText, 'legendTitles');
  $setPosition_1(this$static.warBonusText, dynamicCast(locations.locationsMap.get('BOARD_LEGEND_PRIZE_TXT1'), Q$Location));
  $add_2(this$static, this$static.warBonusText, 0, 0);
}

function $initiateMenu(this$static, resources){
  var handler, playButtonImg, revealButtonImg;
  playButtonImg = dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , BUTTON_PLAY).path), Q$TransformableImage);
  this$static.playButton = new MenuCommonButton_0('lobby-btn Play-Button', '', playButtonImg.image.src, $getWidth(playButtonImg) >> 1, $getHeight(playButtonImg) >> 1);
  this$static.playButton.element.style['zIndex'] = '65';
  handler = new AbstractQueenOfDiamondsPanel$2_0(this$static);
  $addClickHandler_0(this$static.playButton, handler);
  revealButtonImg = dynamicCast(resources.get(BUTTON_REVEAL_ALL.path), Q$TransformableImage);
  this$static.scratchAllaButton = new MenuCommonButton_0('lobby-btn Play-Button', '', revealButtonImg.image.src, $getWidth(revealButtonImg) >> 1, $getHeight(revealButtonImg) >> 1);
  $setVisible_4(this$static.scratchAllaButton, false);
  this$static.scratchAllaButton.element.style['zIndex'] = '65';
  handler = new AbstractQueenOfDiamondsPanel$3_0(this$static);
  $addClickHandler_0(this$static.scratchAllaButton, handler);
  this$static.htmlTotalWinValue = new CentredHTML_0;
  this$static.htmlTotalWinValue.element.className = 'test';
}

function $reset_9(this$static){
  $setVisible_5(this$static.htmlSerialNumber, true);
  $setText_7(this$static.htmlSerialNumber, '');
  $setHTML_0(this$static.jokerBonusText, '');
  $setHTML_0(this$static.warBonusText, '');
  this$static.setLegendStyle(($clinit_Boolean() , $clinit_Boolean() , TRUE_0));
  this$static.setLegendStyle(TRUE_0);
}

function $setCardNumber(this$static, cardNumber){
  $setVisible_5(this$static.htmlSerialNumber, true);
  $setText_7(this$static.htmlSerialNumber, cardNumber);
}

function $setLegendStyle(this$static, isRegularStyle){
  if (isRegularStyle.value_0) {
    $setStyleName_2(this$static.jokerBonusText, 'panelLabelsValuesDark', false);
    $setStyleName_2(this$static.warBonusText, 'panelLabelsValuesDark', false);
  }
   else {
    $setStyleName_2(this$static.jokerBonusText, 'panelLabelsValuesDark', true);
    $setStyleName_2(this$static.warBonusText, 'panelLabelsValuesDark', true);
  }
}

function $setTotalWin_0(this$static, totalWin){
  !!this$static.totalWinsCounter && $updateTotalWin_0(this$static, totalWin, true);
}

function $switchPlayToScratchAllButton(this$static){
  $setVisible_4(this$static.playButton, false);
  $setVisible_4(this$static.scratchAllaButton, true);
}

function $switchScratchAllToPlayButton(this$static){
  $setVisible_4(this$static.playButton, true);
  $setVisible_4(this$static.scratchAllaButton, false);
}

function $updateJokerBonusWin_0(this$static, prizeAmount){
  var pennisValue, prize;
  pennisValue = dollarstopennies('' + prizeAmount);
  prize = appendCurrencySymbol(penniesToDollars(pennisValue));
  $setHTML_0(this$static.jokerBonusText, prize);
}

function $updateTotalWin_0(this$static, totalWin, showCounter){
  var bet, startValue, wins;
  if (totalWin != null && !$equals(totalWin, '')) {
    wins = __parseAndValidateDouble(totalWin);
    bet = __parseAndValidateDouble(this$static.betPerTicket);
    wins > 0 && this$static.totalWinsCounter.currentValue > 0 && this$static.totalWinsCounter.endValue > wins && $sendInconsistencyLog(this$static.gamePanelListener, 'Queen of diamonds setTotal win error. endValue: ' + this$static.totalWinsCounter.endValue + ' > wins: ' + wins);
    $stopOnCurrentValue(this$static.totalWinsCounter);
    if (showCounter && wins > 0) {
      startValue = this$static.totalWinsCounter.currentValue;
      startValue <= wins && $start(this$static.totalWinsCounter, startValue, wins, bet);
    }
     else {
      $start(this$static.totalWinsCounter, wins, wins, bet);
    }
  }
   else {
    $stop(this$static.totalWinsCounter);
    $setText_7(this$static.totalWinsCounter.counterHTML, this$static.getTextCounterPrefix());
    this$static.totalWinsCounter.currentValue = 0;
  }
}

function $updateWarBonusWin_0(this$static, prizeAmount){
  var pennisValue, prize;
  pennisValue = dollarstopennies('' + prizeAmount);
  prize = appendCurrencySymbol(penniesToDollars(pennisValue));
  $setHTML_0(this$static.warBonusText, prize);
}

function AbstractQueenOfDiamondsPanel_0(){
  AbsoluteNeoPanel_0.call(this);
  this.befDenominationIndex = gameDO_0.gameDefaultBetIndex;
  this.betDenominations = gameDO_0.betDenominations[0];
}

function AbstractQueenOfDiamondsPanel(){
}

_ = AbstractQueenOfDiamondsPanel.prototype = new AbstractGamePanel;
_.centerTexts = function centerTexts(){
  $centerTexts_5(this);
}
;
_.displayValues = function displayValues(showVals){
  showVals?(this.htmlTotalBetValue.element.style.opacity = 1 , undefined):(this.htmlTotalBetValue.element.style.opacity = 0 , undefined);
}
;
_.enableMenu = function enableMenu(isEnabled){
  $setEnabled_4(this.playButton, isEnabled);
  $setEnabled_4(this.scratchAllaButton, isEnabled);
}
;
_.getClass$ = function getClass_585(){
  return Lwebgl_client_nf_games_g431_panel_AbstractQueenOfDiamondsPanel_2_classLit;
}
;
_.initLocations = function initLocations(locations){
  $initLocations(this, locations);
}
;
_.initiateMenu = function initiateMenu(resources){
  $initiateMenu(this, resources);
}
;
_.reset_0 = function reset_4(){
  $reset_9(this);
}
;
_.roundEnded = function roundEnded(){
}
;
_.roundStarted = function roundStarted(){
}
;
_.setBalance_0 = function setBalance_2(balance){
  !!this.gamePanelListener && $onBalanceUpdated_0(this.gamePanelListener, balance);
}
;
_.setBetPerLine = function setBetPerLine_0(bet){
  this.betPerTicket = bet;
}
;
_.setLegendStyle = function setLegendStyle(isRegularStyle){
  $setLegendStyle(this, isRegularStyle);
}
;
_.setNumOfTickets = function setNumOfTickets_0(newNumTicketsIndex){
}
;
_.setTotalBet = function setTotalBet_0(bet){
  var pennisValue, prize;
  bet = bet.length < 1?'':bet;
  pennisValue = dollarstopennies('' + bet);
  prize = appendCurrencySymbol(penniesToDollars(pennisValue));
  $setHTML_0(this.htmlTotalBetValue, prize);
}
;
_.setTotalWin = function setTotalWin_0(totalWin){
  $setTotalWin_0(this, totalWin);
}
;
_.setTotalWinStyle = function setTotalWinStyle(shouldShowWinsStyle){
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AbsolutePanel, Q$ComplexPanel, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$IGameDataObserver, Q$IPlatformsGameDataObserver, Q$AbsoluteNeoPanel]);
_.betPerTicket = null;
_.htmlSerialNumber = null;
_.htmlTotalBetTitle = null;
_.htmlTotalBetValue = null;
_.htmlTotalWinValue = null;
_.jokerBonusText = null;
_.locations = null;
_.playButton = null;
_.scratchAllaButton = null;
_.totalWinsCounter = null;
_.warBonusText = null;
function AbstractQueenOfDiamondsPanel$1_0(this$0, $anonymous0){
  this.this$0 = this$0;
  TextCounterView_0.call(this, $anonymous0, 4000);
}

function AbstractQueenOfDiamondsPanel$1(){
}

_ = AbstractQueenOfDiamondsPanel$1_0.prototype = AbstractQueenOfDiamondsPanel$1.prototype = new TextCounterView;
_.getClass$ = function getClass_586(){
  return Lwebgl_client_nf_games_g431_panel_AbstractQueenOfDiamondsPanel$1_2_classLit;
}
;
_.getFormattedValue = function getFormattedValue_2(value){
  var pennies;
  if (__parseAndValidateDouble(this.this$0.betPerTicket) < 1 && value > 0) {
    return $format(($clinit_NumberFormat() , new NumberFormat_1($getDefaultNative())), value);
  }
  pennies = fromDouble(value * 100);
  return penniesToDollarsWithoutFormating(pennies);
}
;
_.this$0 = null;
function AbstractQueenOfDiamondsPanel$2_0(this$0){
  this.this$0 = this$0;
}

function AbstractQueenOfDiamondsPanel$2(){
}

_ = AbstractQueenOfDiamondsPanel$2_0.prototype = AbstractQueenOfDiamondsPanel$2.prototype = new Object_0;
_.getClass$ = function getClass_587(){
  return Lwebgl_client_nf_games_g431_panel_AbstractQueenOfDiamondsPanel$2_2_classLit;
}
;
_.onClick = function onClick_13(event_0){
  $playRequestHandler(this.this$0.gamePanelListener);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function AbstractQueenOfDiamondsPanel$3_0(this$0){
  this.this$0 = this$0;
}

function AbstractQueenOfDiamondsPanel$3(){
}

_ = AbstractQueenOfDiamondsPanel$3_0.prototype = AbstractQueenOfDiamondsPanel$3.prototype = new Object_0;
_.getClass$ = function getClass_588(){
  return Lwebgl_client_nf_games_g431_panel_AbstractQueenOfDiamondsPanel$3_2_classLit;
}
;
_.onClick = function onClick_14(event_0){
  $scratchAllHandler(this.this$0.gamePanelListener);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function AbstractQueenOfDiamondsPanel$4_0(this$0){
  this.this$0 = this$0;
}

function AbstractQueenOfDiamondsPanel$4(){
}

_ = AbstractQueenOfDiamondsPanel$4_0.prototype = AbstractQueenOfDiamondsPanel$4.prototype = new Object_0;
_.getClass$ = function getClass_589(){
  return Lwebgl_client_nf_games_g431_panel_AbstractQueenOfDiamondsPanel$4_2_classLit;
}
;
_.onKeyboardKeyPressed = function onKeyboardKeyPressed_0(keboardKey){
  keboardKey == 0 && this.this$0.attached && (this.this$0.playButton.element.style.display != 'none' && !this.this$0.playButton.button_0.element['disabled']?$playRequestHandler(this.this$0.gamePanelListener):this.this$0.scratchAllaButton.element.style.display != 'none' && !this.this$0.scratchAllaButton.button_0.element['disabled'] && $scratchAllHandler(this.this$0.gamePanelListener));
}
;
_.castableTypeMap$ = makeCastMap([Q$IKeyboardListener]);
_.this$0 = null;
function QueenOfDiamondsPanelMobile_0(){
  AbstractQueenOfDiamondsPanel_0.call(this);
}

function QueenOfDiamondsPanelMobile(){
}

_ = QueenOfDiamondsPanelMobile_0.prototype = QueenOfDiamondsPanelMobile.prototype = new AbstractQueenOfDiamondsPanel;
_.centerTexts = function centerTexts_0(){
  $centerTexts_5(this);
  !!this.htmlBalanceValue && $centre(this.htmlBalanceValue);
}
;
_.displayValues = function displayValues_0(showVals){
  showVals?(this.htmlTotalBetValue.element.style.opacity = 1 , undefined):(this.htmlTotalBetValue.element.style.opacity = 0 , undefined);
  showVals?(this.htmlBalanceValue.element.style.opacity = 1 , undefined):(this.htmlBalanceValue.element.style.opacity = 0 , undefined);
}
;
_.getClass$ = function getClass_590(){
  return Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelMobile_2_classLit;
}
;
_.getTextCounterPrefix = function getTextCounterPrefix(){
  return '';
}
;
_.initiateMenu = function initiateMenu_0(resources){
  var playButtonLocation;
  $initiateMenu(this, resources);
  playButtonLocation = $getLocation_0(this.locations, 'BOARD_PLAY_BTN');
  $add_15(this, this.playButton, playButtonLocation);
  $add_15(this, this.scratchAllaButton, playButtonLocation);
  this.htmlBalanceTitle = new CentredHTML_0;
  $setStyleName_1(this.htmlBalanceTitle, 'panelLabelsTitles');
  this.htmlBalanceTitle.element.style['zIndex'] = '70';
  $setPosition_1(this.htmlBalanceTitle, $getLocation_0(this.locations, 'BOARD_BALANCE_TITLE'));
  $add_2(this, this.htmlBalanceTitle, 0, 0);
  this.htmlBalanceValue = new CentredHTML_0;
  $setStyleName_1(this.htmlBalanceValue, 'panelLabelsValues');
  this.htmlBalanceValue.element.style['zIndex'] = '70';
  $setPosition_1(this.htmlBalanceValue, $getLocation_0(this.locations, 'BOARD_BALANCE_VALUE'));
  $add_2(this, this.htmlBalanceValue, 0, 0);
  $setPosition_1(this.htmlTotalBetValue, $getLocation_0(this.locations, 'BOARD_TOTAL_COST_AMOUNT'));
  $add_2(this, this.htmlTotalBetValue, 0, 0);
  $setPosition_1(this.htmlTotalBetTitle, $getLocation_0(this.locations, 'BOARD_TOTAL_COST_LABLE'));
  $add_2(this, this.htmlTotalBetTitle, 0, 0);
  this.htmlTotalWinsTitle = new CentredHTML_0;
  $setStyleName_1(this.htmlTotalWinsTitle, 'panelLabelsTitles');
  this.htmlTotalWinsTitle.element.style['zIndex'] = '70';
  $setPosition_1(this.htmlTotalWinsTitle, $getLocation_0(this.locations, 'BOARD_TOTAL_WINS_TITLE'));
  $add_2(this, this.htmlTotalWinsTitle, 0, 0);
  $setStyleName_1(this.htmlTotalWinValue, 'panelLabelsValues');
  this.htmlTotalWinValue.element.style['zIndex'] = '70';
  $setPosition_1(this.htmlTotalWinValue, $getLocation_0(this.locations, 'BOARD_TOTAL_WINS_VALUE'));
  $add_2(this, this.htmlTotalWinValue, 0, 0);
}
;
_.setBalance_0 = function setBalance_3(balance){
  !!this.gamePanelListener && $onBalanceUpdated_0(this.gamePanelListener, balance);
  $setHTML_0(this.htmlBalanceValue, $getFactoredBalance(balance));
}
;
_.setLegendStyle = function setLegendStyle_0(bShowGlow){
  $setLegendStyle(this, bShowGlow);
  if (bShowGlow.value_0) {
    $setStyleName_1(this.htmlTotalWinValue, 'panelLabelsValues');
    $setStyleName_1(this.htmlBalanceValue, 'panelLabelsValues');
    $setStyleName_1(this.htmlTotalBetValue, 'panelLabelsValues');
  }
   else {
    $setStyleName_1(this.htmlTotalWinValue, 'panelLabelsValuesDark');
    $setStyleName_1(this.htmlBalanceValue, 'panelLabelsValuesDark');
    $setStyleName_1(this.htmlTotalBetValue, 'panelLabelsValuesDark');
  }
}
;
_.setNumOfTickets = function setNumOfTickets_1(newNumTicketsIndex){
}
;
_.setWinUpTo = function setWinUpTo_1(winUpTo){
}
;
_.winsAreaAnimFinished = function winsAreaAnimFinished(){
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AbsolutePanel, Q$ComplexPanel, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$IGameDataObserver, Q$IPlatformsGameDataObserver, Q$AbsoluteNeoPanel]);
_.htmlBalanceTitle = null;
_.htmlBalanceValue = null;
_.htmlTotalWinsTitle = null;
function QueenOfDiamondsPanelWeb_0(){
  AbstractQueenOfDiamondsPanel_0.call(this);
}

function QueenOfDiamondsPanelWeb(){
}

_ = QueenOfDiamondsPanelWeb_0.prototype = QueenOfDiamondsPanelWeb.prototype = new AbstractQueenOfDiamondsPanel;
_.centerTexts = function centerTexts_1(){
  $centerTexts_5(this);
  !!this.htmlTicketsNumValue && $centre(this.htmlTicketsNumValue);
  !!this.htmlTicketCostValue && $centre(this.htmlTicketCostValue);
  !!this.winsArea && $centerTexts_6(this.winsArea);
}
;
_.displayValues = function displayValues_1(showVals){
  showVals?(this.htmlTotalBetValue.element.style.opacity = 1 , undefined):(this.htmlTotalBetValue.element.style.opacity = 0 , undefined);
  $setIsVisible(this.winsArea, showVals);
  if (showVals) {
    this.htmlTicketsNumValue.element.style.opacity = 1;
    this.htmlTicketCostValue.element.style.opacity = 1;
  }
   else {
    this.htmlTicketsNumValue.element.style.opacity = 0;
    this.htmlTicketCostValue.element.style.opacity = 0;
  }
}
;
_.enableMenu = function enableMenu_0(isEnabled){
  $setEnabled_4(this.playButton, isEnabled);
  $setEnabled_4(this.scratchAllaButton, isEnabled);
  $setEnabled_3(this.ticketCostController, isEnabled);
  $setEnabled_3(this.ticketsNumController, isEnabled);
  $setEnabled_4(this.infoButton, isEnabled);
}
;
_.getClass$ = function getClass_591(){
  return Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb_2_classLit;
}
;
_.getTextCounterPrefix = function getTextCounterPrefix_0(){
  return get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_WINS') + ': ';
}
;
_.initLocations = function initLocations_0(locations){
  var michiganLottery;
  $initLocations(this, locations);
  this.bottomBarLocation = $getLocation_0(this.locations, 'BOARD_BOTTOM_BAR');
  michiganLottery = new CentredHTML_0;
  michiganLottery.element.style['zIndex'] = '95';
  michiganLottery.element['className'] = 'michigamLotteryLabel';
  $centre(michiganLottery);
  $setPosition_1(michiganLottery, dynamicCast(locations.locationsMap.get('BOARD_MICHIGAN_LOTTERY'), Q$Location));
  michiganLottery.textAlignment = 1;
  $add_2(this, michiganLottery, 0, 0);
  this.htmlTicketsNumTitle = new CentredHTML_0;
  this.htmlTicketsNumTitle.element.style['zIndex'] = '95';
  $setHorizontalAlignment(this.htmlTicketsNumTitle, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $setStyleName_2(this.htmlTicketsNumTitle, 'panelLabelsTitles', true);
  this.htmlTicketsNumValue = new CentredHTML_0;
  $setStyleName_1(this.htmlTicketsNumValue, 'panelLabelsValues');
  this.htmlTicketsNumValue.element.style['zIndex'] = '95';
  this.htmlTicketCostTitle = new CentredHTML_0;
  this.htmlTicketCostTitle.element.style['zIndex'] = '95';
  $setHorizontalAlignment(this.htmlTicketCostTitle, ALIGN_CENTER);
  $setStyleName_2(this.htmlTicketCostTitle, 'panelLabelsTitles', true);
  this.htmlTicketCostValue = new CentredHTML_0;
  $setStyleName_1(this.htmlTicketCostValue, 'panelLabelsValues');
  this.htmlTicketCostValue.element.style['zIndex'] = '95';
  $setPosition_1(this.htmlTicketsNumTitle, $reverseRelativeTo($getLocation_0(this.locations, 'BOARD_SELECT_TICKETS_LABLE'), this.bottomBarLocation));
  $setPosition_1(this.htmlTicketsNumValue, $reverseRelativeTo($getLocation_0(this.locations, 'BOARD_SELECT_TICKETS_AMOUNT'), this.bottomBarLocation));
  $setPosition_1(this.htmlTicketCostTitle, $reverseRelativeTo($getLocation_0(this.locations, 'BOARD_TICKET_COST_LABLE'), this.bottomBarLocation));
  $setPosition_1(this.htmlTicketCostValue, $reverseRelativeTo($getLocation_0(this.locations, 'BOARD_TICKET_COST_AMOUNT'), this.bottomBarLocation));
  $setPosition_1(this.htmlTotalBetTitle, $reverseRelativeTo($getLocation_0(this.locations, 'BOARD_TOTAL_COST_LABLE'), this.bottomBarLocation));
  $setPosition_1(this.htmlTotalBetValue, $reverseRelativeTo($getLocation_0(this.locations, 'BOARD_TOTAL_COST_AMOUNT'), this.bottomBarLocation));
  this.htmlTotalBetTitle = new CentredHTML_0;
  this.htmlTotalBetTitle.element.style['zIndex'] = '95';
  $setHorizontalAlignment(this.htmlTotalBetTitle, ALIGN_CENTER);
  $setStyleName_2(this.htmlTotalBetTitle, 'panelLabelsTitles', true);
}
;
_.initiateMenu = function initiateMenu_1(resources){
  var buttonImg, buttonLocation, buttonMinusLocation, buttonMinusTicketsNumLocation, buttonPlusLocation, buttonPlusTicketsNumLocation, minusButton, minusButtonImg, minusTicketsNumButton, minusTicketsNumButtonImg, playButtonLocation, plusButton, plusButtonImg, plusTicketsNumButton, plusTicketsNumButtonImg, winUpToAndWinsContainer, winUpToAndWinsContainerLocation, winUpToAndWinsHeight, winUpToAndWinsWidth;
  $initiateMenu(this, resources);
  this.bottomBarContainer = new AbsoluteNeoPanel_0;
  $setStyleName_0(this.bottomBarContainer, 'Game-panel-container');
  $setPixelSize(this.bottomBarContainer, this.bottomBarLocation.width_0, this.bottomBarLocation.height_0);
  this.bottomBarContainer.element.style['zIndex'] = '51';
  $add_15(this, this.bottomBarContainer, this.bottomBarLocation);
  $add_2(this.bottomBarContainer, this.htmlTicketsNumTitle, 0, 0);
  $add_2(this.bottomBarContainer, this.htmlTicketsNumValue, 0, 0);
  $add_2(this.bottomBarContainer, this.htmlTicketCostTitle, 0, 0);
  $add_2(this.bottomBarContainer, this.htmlTicketCostValue, 0, 0);
  $add_2(this.bottomBarContainer, this.htmlTotalBetTitle, 0, 0);
  $add_2(this.bottomBarContainer, this.htmlTotalBetValue, 0, 0);
  $add_15(this, this.bottomBarContainer, this.bottomBarLocation);
  buttonLocation = $getLocation_0(this.locations, 'BOARD_I_BTN');
  buttonImg = dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , I_BTN).path), Q$TransformableImage);
  this.infoButton = new MenuCommonButton_0('lobby-btn Play-Button', '', buttonImg.image.src, $getWidth(buttonImg) >> 1, $getHeight(buttonImg) >> 1);
  this.infoButton.element.style['zIndex'] = '70';
  $addClickHandler_0(this.infoButton, new QueenOfDiamondsPanelWeb$1_0(this));
  $setMouseHoverListener(this.infoButton, this);
  this.toolTipTimer = new QueenOfDiamondsPanelWeb$2_0(this);
  $add_15(this.bottomBarContainer, this.infoButton, $reverseRelativeTo(buttonLocation, this.bottomBarLocation));
  playButtonLocation = $getLocation_0(this.locations, 'BOARD_PLAY_BTN');
  $add_15(this.bottomBarContainer, this.playButton, $reverseRelativeTo(playButtonLocation, this.bottomBarLocation));
  $add_15(this.bottomBarContainer, this.scratchAllaButton, $reverseRelativeTo(playButtonLocation, this.bottomBarLocation));
  buttonPlusLocation = $getLocation_0(this.locations, 'BOARD_TICKET_COST_PLUS');
  plusButtonImg = dynamicCast(resources.get(TICKET_COST_PLUS.path), Q$TransformableImage);
  plusButton = new MenuCommonButton_0('lobby-btn', '', plusButtonImg.image.src, $getWidth(plusButtonImg) >> 1, $getHeight(plusButtonImg) >> 1);
  plusButton.element.style['zIndex'] = '95';
  $addClickHandler_0(plusButton, new QueenOfDiamondsPanelWeb$3_0(this));
  $add_15(this.bottomBarContainer, plusButton, $reverseRelativeTo(buttonPlusLocation, this.bottomBarLocation));
  buttonMinusLocation = $getLocation_0(this.locations, 'BOARD_TICKET_COST_MINUS');
  minusButtonImg = dynamicCast(resources.get(TICKET_COST_MINUS.path), Q$TransformableImage);
  minusButton = new MenuCommonButton_0('lobby-btn', '', minusButtonImg.image.src, $getWidth(minusButtonImg) >> 1, $getHeight(minusButtonImg) >> 1);
  minusButton.element.style['zIndex'] = '95';
  $addClickHandler_0(minusButton, new QueenOfDiamondsPanelWeb$4_0(this));
  $add_15(this.bottomBarContainer, minusButton, $reverseRelativeTo(buttonMinusLocation, this.bottomBarLocation));
  this.ticketCostController = new UpDownController_0;
  $init_35(this.ticketCostController, plusButton, minusButton, new QueenOfDiamondsPanelWeb$5_0(this), this.betDenominations, false, this.befDenominationIndex);
  buttonPlusTicketsNumLocation = $getLocation_0(this.locations, 'BOARD_TICKET_NUM_PLUS');
  plusTicketsNumButtonImg = dynamicCast(resources.get(TICKET_NUM_PLUS.path), Q$TransformableImage);
  plusTicketsNumButton = new MenuCommonButton_0('lobby-btn', '', plusTicketsNumButtonImg.image.src, $getWidth(plusTicketsNumButtonImg) >> 1, $getHeight(plusTicketsNumButtonImg) >> 1);
  plusTicketsNumButton.element.style['zIndex'] = '95';
  $addClickHandler_0(plusTicketsNumButton, new QueenOfDiamondsPanelWeb$6_0(this));
  $add_15(this.bottomBarContainer, plusTicketsNumButton, $reverseRelativeTo(buttonPlusTicketsNumLocation, this.bottomBarLocation));
  buttonMinusTicketsNumLocation = $getLocation_0(this.locations, 'BOARD_TICKET_NUM_MINUS');
  minusTicketsNumButtonImg = dynamicCast(resources.get(TICKET_NUM_MINUS.path), Q$TransformableImage);
  minusTicketsNumButton = new MenuCommonButton_0('lobby-btn', '', minusTicketsNumButtonImg.image.src, $getWidth(minusTicketsNumButtonImg) >> 1, $getHeight(minusTicketsNumButtonImg) >> 1);
  minusTicketsNumButton.element.style['zIndex'] = '95';
  $addClickHandler_0(minusTicketsNumButton, new QueenOfDiamondsPanelWeb$7_0(this));
  $add_15(this.bottomBarContainer, minusTicketsNumButton, $reverseRelativeTo(buttonMinusTicketsNumLocation, this.bottomBarLocation));
  this.ticketsNumController = new UpDownController_0;
  $init_35(this.ticketsNumController, plusTicketsNumButton, minusTicketsNumButton, new QueenOfDiamondsPanelWeb$8_0(this), this.gamePanelServices.model.numOfTicketsRange_0, false, this.gamePanelServices.model.currentNumTicketsIndex);
  winUpToAndWinsContainerLocation = $reverseRelativeTo($getLocation_0(this.locations, 'BOARD_WINS_TXT'), this.bottomBarLocation);
  winUpToAndWinsWidth = winUpToAndWinsContainerLocation.width_0;
  winUpToAndWinsHeight = winUpToAndWinsContainerLocation.height_0;
  winUpToAndWinsContainer = new AbsoluteNeoPanel_0;
  winUpToAndWinsWidth >= 0 && setStyleAttribute(winUpToAndWinsContainer.element, 'width', winUpToAndWinsWidth + 'px');
  winUpToAndWinsHeight >= 0 && setStyleAttribute(winUpToAndWinsContainer.element, 'height', winUpToAndWinsHeight + 'px');
  winUpToAndWinsContainer.element.style['zIndex'] = '51';
  $add_15(this.bottomBarContainer, winUpToAndWinsContainer, winUpToAndWinsContainerLocation);
  this.winsArea = new QueenOfDiamondsWinsArea_0(this.htmlTotalWinValue, $reverseRelativeTo($getLocation_0(this.locations, 'BOARD_WINS_TXT'), this.bottomBarLocation), this.bottomBarContainer, this);
}
;
_.onMouseHoverIn = function onMouseHoverIn_0(widget){
  $schedule(this.toolTipTimer, 500);
}
;
_.onMouseHoverOut = function onMouseHoverOut_0(widget){
  $cancel_0(this.toolTipTimer);
  $hideToolTipPanel(this.gamePanelListener);
}
;
_.reset_0 = function reset_5(){
  $reset_9(this);
  $reset_10(this.winsArea);
}
;
_.roundEnded = function roundEnded_0(){
  this.totalWinsCounter.isCounting || $startUserInterventionTimer(this.winsArea.switcherManager);
}
;
_.roundStarted = function roundStarted_0(){
  $roundStarted(this.winsArea);
}
;
_.setBetPerLine = function setBetPerLine_1(bet){
  var i;
  this.betPerTicket = bet;
  for (i = 0; i < this.betDenominations.length; ++i) {
    if ($equals(this.betDenominations[i], bet)) {
      break;
    }
  }
  $setCurrentIndex(this.ticketCostController, i);
  bet = bet.length < 1?'':appendCurrencySymbol(bet);
  $setHTML_0(this.htmlTicketCostValue, bet);
}
;
_.setNumOfTickets = function setNumOfTickets_2(newNumTicketsIndex){
  $setCurrentIndex(this.ticketsNumController, newNumTicketsIndex);
  $centre(this.htmlTicketsNumValue);
  $setHTML_0(this.htmlTicketsNumValue, '<span class="panelLabelsValues">' + this.gamePanelServices.model.numOfTicketsRange_0[newNumTicketsIndex] + '<\/span>');
}
;
_.setTotalWinStyle = function setTotalWinStyle_0(shouldShowWinsStyle){
  $setTotalWinStyle(this.winsArea, shouldShowWinsStyle);
}
;
_.setWinUpTo = function setWinUpTo_2(winUpTo){
  var pennisValue, winUpToAmount;
  if (this.winsArea) {
    pennisValue = dollarstopennies('' + winUpTo);
    winUpToAmount = appendCurrencySymbol(penniesToDollars(pennisValue));
    $setWinUpTo(this.winsArea, get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_WIN_UP_TO') + ' ' + winUpToAmount);
  }
}
;
_.winsAreaAnimFinished = function winsAreaAnimFinished_0(){
  $startUserInterventionTimer(this.winsArea.switcherManager);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AbsolutePanel, Q$ComplexPanel, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$IGameDataObserver, Q$IPlatformsGameDataObserver, Q$AbsoluteNeoPanel, Q$IMouseHoverListener]);
_.bottomBarContainer = null;
_.bottomBarLocation = null;
_.htmlTicketCostTitle = null;
_.htmlTicketCostValue = null;
_.htmlTicketsNumTitle = null;
_.htmlTicketsNumValue = null;
_.infoButton = null;
_.ticketCostController = null;
_.ticketsNumController = null;
_.toolTipTimer = null;
_.winsArea = null;
function QueenOfDiamondsPanelWeb$1_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsPanelWeb$1(){
}

_ = QueenOfDiamondsPanelWeb$1_0.prototype = QueenOfDiamondsPanelWeb$1.prototype = new Object_0;
_.getClass$ = function getClass_592(){
  return Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$1_2_classLit;
}
;
_.onClick = function onClick_15(event_0){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Info', 37);
  $onInfoButtonClicked(this.this$0.gamePanelListener);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function QueenOfDiamondsPanelWeb$2_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsPanelWeb$2(){
}

_ = QueenOfDiamondsPanelWeb$2_0.prototype = QueenOfDiamondsPanelWeb$2.prototype = new Timer;
_.getClass$ = function getClass_593(){
  return Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$2_2_classLit;
}
;
_.run = function run_32(){
  $onInfoHoverDelayComplete(this.this$0.gamePanelListener);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function QueenOfDiamondsPanelWeb$3_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsPanelWeb$3(){
}

_ = QueenOfDiamondsPanelWeb$3_0.prototype = QueenOfDiamondsPanelWeb$3.prototype = new Object_0;
_.getClass$ = function getClass_594(){
  return Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$3_2_classLit;
}
;
_.onClick = function onClick_16(event_0){
  $notifyUpPressed(this.this$0.ticketCostController);
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Bet_+', 36);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function QueenOfDiamondsPanelWeb$4_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsPanelWeb$4(){
}

_ = QueenOfDiamondsPanelWeb$4_0.prototype = QueenOfDiamondsPanelWeb$4.prototype = new Object_0;
_.getClass$ = function getClass_595(){
  return Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$4_2_classLit;
}
;
_.onClick = function onClick_17(event_0){
  $notifyDownPressed(this.this$0.ticketCostController);
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Bet_-', 36);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function QueenOfDiamondsPanelWeb$5_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsPanelWeb$5(){
}

_ = QueenOfDiamondsPanelWeb$5_0.prototype = QueenOfDiamondsPanelWeb$5.prototype = new Object_0;
_.getClass$ = function getClass_596(){
  return Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$5_2_classLit;
}
;
_.upDownChangedHandler = function upDownChangedHandler(newIndex){
  $coinSizeChangedHandler(this.this$0.gamePanelListener, newIndex);
}
;
_.this$0 = null;
function QueenOfDiamondsPanelWeb$6_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsPanelWeb$6(){
}

_ = QueenOfDiamondsPanelWeb$6_0.prototype = QueenOfDiamondsPanelWeb$6.prototype = new Object_0;
_.getClass$ = function getClass_597(){
  return Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$6_2_classLit;
}
;
_.onClick = function onClick_18(event_0){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Tickets_+', 36);
  $notifyUpPressed(this.this$0.ticketsNumController);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function QueenOfDiamondsPanelWeb$7_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsPanelWeb$7(){
}

_ = QueenOfDiamondsPanelWeb$7_0.prototype = QueenOfDiamondsPanelWeb$7.prototype = new Object_0;
_.getClass$ = function getClass_598(){
  return Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$7_2_classLit;
}
;
_.onClick = function onClick_19(event_0){
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Tickets_-', 36);
  $notifyDownPressed(this.this$0.ticketsNumController);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function QueenOfDiamondsPanelWeb$8_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsPanelWeb$8(){
}

_ = QueenOfDiamondsPanelWeb$8_0.prototype = QueenOfDiamondsPanelWeb$8.prototype = new Object_0;
_.getClass$ = function getClass_599(){
  return Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$8_2_classLit;
}
;
_.upDownChangedHandler = function upDownChangedHandler_0(newIndex){
  $ticketsNumChangedHandler(this.this$0.gamePanelListener, newIndex);
}
;
_.this$0 = null;
function $centerTexts_6(this$static){
  !!this$static.htmlGameWinUpTo && $centre(this$static.htmlGameWinUpTo);
}

function $reset_10(this$static){
  $stopLoppingOnItem(this$static.switcherManager, 0);
  $reset_11(this$static.switcherManager);
  $setStyleName_1(this$static.htmlTotalWins, 'winTitle');
}

function $roundStarted(this$static){
  $stopLoppingOnItem(this$static.switcherManager, 1);
  $reset_11(this$static.switcherManager);
}

function $setIsVisible(this$static, isVisible){
  $setVisible_5(this$static.htmlGameWinUpTo, isVisible);
  $setVisible_5(this$static.htmlTotalWins, isVisible);
}

function $setTotalWinStyle(this$static, shouldShowWinsStyle){
  if (shouldShowWinsStyle) {
    $setStyleName_2(this$static.htmlTotalWins, 'winTitle', false);
    $setStyleName_1(this$static.htmlTotalWins, 'winTitleWin');
  }
   else {
    $setStyleName_2(this$static.htmlTotalWins, 'winTitleWin', false);
    $setStyleName_1(this$static.htmlTotalWins, 'winTitle');
  }
}

function $setWinUpTo(this$static, winUpTo){
  $setHTML_0(this$static.htmlGameWinUpTo, winUpTo);
}

function QueenOfDiamondsWinsArea_0(htmlTotalWins, winUpToAndWinsContainerLocation, container, switcherListener){
  var itemsToSwitch, winUpToAndWinsContainer, winUpToAndWinsHeight, winUpToAndWinsWidth;
  this.htmlGameWinUpTo = new CentredHTML_0;
  this.htmlGameWinUpTo.element.style['zIndex'] = '95';
  $setStyleName_1(this.htmlGameWinUpTo, 'winTitle');
  this.htmlTotalWins = htmlTotalWins;
  this.htmlTotalWins.element.style['zIndex'] = '95';
  $setStyleName_1(this.htmlTotalWins, 'winTitle');
  winUpToAndWinsWidth = winUpToAndWinsContainerLocation.width_0;
  winUpToAndWinsHeight = winUpToAndWinsContainerLocation.height_0;
  winUpToAndWinsContainer = new AbsoluteNeoPanel_0;
  winUpToAndWinsWidth >= 0 && setStyleAttribute(winUpToAndWinsContainer.element, 'width', winUpToAndWinsWidth + 'px');
  winUpToAndWinsHeight >= 0 && setStyleAttribute(winUpToAndWinsContainer.element, 'height', winUpToAndWinsHeight + 'px');
  winUpToAndWinsContainer.element.style['zIndex'] = '51';
  $add_2(container, winUpToAndWinsContainer, winUpToAndWinsContainerLocation.x_0 - (winUpToAndWinsContainerLocation.width_0 >> 1), winUpToAndWinsContainerLocation.y_0 - (winUpToAndWinsContainerLocation.height_0 >> 1));
  this.winUpToContainer = new AbsoluteNeoPanel_0;
  $setPixelSize(this.winUpToContainer, winUpToAndWinsWidth, winUpToAndWinsHeight);
  this.winUpToContainer.element.style['zIndex'] = '51';
  $add_2(winUpToAndWinsContainer, this.winUpToContainer, 0, 0);
  $add_2(this.winUpToContainer, this.htmlGameWinUpTo, 0, 0);
  this.winsContainer = new AbsoluteNeoPanel_0;
  $setPixelSize(this.winsContainer, winUpToAndWinsWidth, winUpToAndWinsHeight);
  this.winsContainer.element.style['zIndex'] = '51';
  $add_2(winUpToAndWinsContainer, this.winsContainer, 0, 0);
  $add_2(this.winsContainer, this.htmlTotalWins, 0, 0);
  $setPosition_1(this.htmlGameWinUpTo, new Location_1(winUpToAndWinsWidth >> 1, winUpToAndWinsHeight >> 1, winUpToAndWinsWidth, winUpToAndWinsHeight));
  $setPosition_1(this.htmlTotalWins, new Location_1(winUpToAndWinsWidth >> 1, winUpToAndWinsHeight >> 1, winUpToAndWinsWidth, winUpToAndWinsHeight));
  this.switcherManager = new WinUpToAndWinsSwitcherManager_0(switcherListener);
  itemsToSwitch = new ArrayList_0;
  $add_10(itemsToSwitch, this.winUpToContainer);
  $add_10(itemsToSwitch, this.winsContainer);
  $setItemsToSwitch(this.switcherManager, itemsToSwitch);
  $showItem(this.switcherManager);
}

function QueenOfDiamondsWinsArea(){
}

_ = QueenOfDiamondsWinsArea_0.prototype = QueenOfDiamondsWinsArea.prototype = new Object_0;
_.getClass$ = function getClass_600(){
  return Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsWinsArea_2_classLit;
}
;
_.htmlGameWinUpTo = null;
_.htmlTotalWins = null;
_.switcherManager = null;
_.winUpToContainer = null;
_.winsContainer = null;
function $fadeInOut(this$static, opacity, duration){
  var tweenProperties;
  tweenProperties = new ArrayList_0;
  $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , OPACITY), opacity));
  $startGenericTween(dynamicCast($get_5(this$static.itemsToSwitch, this$static.currentDisplayedItemIndex), Q$WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget), null, tweenProperties, duration, 0, false);
}

function $playInTween(this$static){
  var tweenProperties;
  dynamicCast($get_5(this$static.itemsToSwitch, this$static.currentDisplayedItemIndex), Q$WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget).widget.setVisible(true);
  tweenProperties = new ArrayList_0;
  $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , OPACITY), '1'));
  $startGenericTween(dynamicCast($get_5(this$static.itemsToSwitch, this$static.currentDisplayedItemIndex), Q$WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget), null, tweenProperties, 0.5, 0, true);
  $setListener_0(dynamicCast($get_5(this$static.itemsToSwitch, this$static.currentDisplayedItemIndex), Q$WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget), new WinUpToAndWinsSwitcherManager$3_0(this$static));
}

function $quickDisplayItem(this$static, index){
  if (this$static.currentDisplayedItemIndex == index) {
    return;
  }
   else {
    dynamicCast($get_5(this$static.itemsToSwitch, index), Q$WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget).widget.setVisible(false);
    this$static.currentDisplayedItemIndex = index;
    dynamicCast($get_5(this$static.itemsToSwitch, index), Q$WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget).widget.setVisible(true);
    $fadeInOut(this$static, '0', 0);
    $fadeInOut(this$static, '1', 1);
  }
}

function $reset_11(this$static){
  this$static.isSwitching = false;
  $cancel_0(this$static.userInterventionTimer);
}

function $setItemsToSwitch(this$static, itemsToSwitch){
  var item, item$iterator, newTweenMaxElementWidget;
  for (item$iterator = new AbstractList$IteratorImpl_0(itemsToSwitch); item$iterator.i < item$iterator.this$0_0.size_1();) {
    item = dynamicCast($next_2(item$iterator), Q$AbsoluteNeoPanel);
    newTweenMaxElementWidget = new WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget_0(item);
    newTweenMaxElementWidget.widget.setVisible(false);
    $add_10(this$static.itemsToSwitch, newTweenMaxElementWidget);
  }
}

function $showItem(this$static){
  dynamicCast($get_5(this$static.itemsToSwitch, 0), Q$WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget).widget.setVisible(true);
  if (this$static.currentDisplayedItemIndex == 0) {
    return;
  }
   else {
    this$static.currentDisplayedItemIndex = 0;
    $playInTween(this$static);
  }
}

function $startUserInterventionTimer(this$static){
  $cancel_0(this$static.userInterventionTimer);
  $schedule(this$static.userInterventionTimer, 15000);
}

function $stopLoppingOnItem(this$static, index){
  this$static.isSwitching = false;
  $cancel_0(this$static.switcherTimer);
  $cancel_0(this$static.userInterventionTimer);
  if (this$static.currentDisplayedItemIndex == index) {
    return;
  }
   else {
    dynamicCast($get_5(this$static.itemsToSwitch, this$static.currentDisplayedItemIndex), Q$WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget).widget.setVisible(false);
    $quickDisplayItem(this$static, index);
  }
}

function $switchItems(this$static){
  var tweenProperties;
  $onSwitchItemsStarted(this$static.switcherListener.gamePanelListener);
  tweenProperties = new ArrayList_0;
  $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , OPACITY), '0'));
  $startGenericTween(dynamicCast($get_5(this$static.itemsToSwitch, this$static.currentDisplayedItemIndex), Q$WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget), null, tweenProperties, 0.5, 0, true);
  $setListener_0(dynamicCast($get_5(this$static.itemsToSwitch, this$static.currentDisplayedItemIndex), Q$WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget), new WinUpToAndWinsSwitcherManager$4_0(this$static));
  this$static.currentDisplayedItemIndex = (this$static.currentDisplayedItemIndex + 1) % this$static.itemsToSwitch.size_0;
}

function $switchItemsInLoop(this$static){
  this$static.isSwitching = true;
  $switchItems(this$static);
}

function WinUpToAndWinsSwitcherManager_0(listener){
  this.currentDisplayedItemIndex = 0;
  this.switcherListener = listener;
  this.itemsToSwitch = new ArrayList_0;
  this.userInterventionTimer = new WinUpToAndWinsSwitcherManager$1_0(this);
  this.switcherTimer = new WinUpToAndWinsSwitcherManager$2_0(this);
}

function WinUpToAndWinsSwitcherManager(){
}

_ = WinUpToAndWinsSwitcherManager_0.prototype = WinUpToAndWinsSwitcherManager.prototype = new Object_0;
_.getClass$ = function getClass_601(){
  return Lwebgl_client_nf_games_g431_panel_WinUpToAndWinsSwitcherManager_2_classLit;
}
;
_.currentDisplayedItemIndex = 0;
_.isSwitching = false;
_.itemsToSwitch = null;
_.switcherListener = null;
_.switcherTimer = null;
_.userInterventionTimer = null;
function WinUpToAndWinsSwitcherManager$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function WinUpToAndWinsSwitcherManager$1(){
}

_ = WinUpToAndWinsSwitcherManager$1_0.prototype = WinUpToAndWinsSwitcherManager$1.prototype = new Timer;
_.getClass$ = function getClass_602(){
  return Lwebgl_client_nf_games_g431_panel_WinUpToAndWinsSwitcherManager$1_2_classLit;
}
;
_.run = function run_33(){
  this.this$0.isSwitching || $switchItemsInLoop(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function WinUpToAndWinsSwitcherManager$2_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function WinUpToAndWinsSwitcherManager$2(){
}

_ = WinUpToAndWinsSwitcherManager$2_0.prototype = WinUpToAndWinsSwitcherManager$2.prototype = new Timer;
_.getClass$ = function getClass_603(){
  return Lwebgl_client_nf_games_g431_panel_WinUpToAndWinsSwitcherManager$2_2_classLit;
}
;
_.run = function run_34(){
  $switchItems(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function WinUpToAndWinsSwitcherManager$3_0(this$0){
  this.this$0 = this$0;
}

function WinUpToAndWinsSwitcherManager$3(){
}

_ = WinUpToAndWinsSwitcherManager$3_0.prototype = WinUpToAndWinsSwitcherManager$3.prototype = new Object_0;
_.getClass$ = function getClass_604(){
  return Lwebgl_client_nf_games_g431_panel_WinUpToAndWinsSwitcherManager$3_2_classLit;
}
;
_.onPathFinished = function onPathFinished_0(element){
  if (this.this$0.isSwitching) {
    $cancel_0(this.this$0.switcherTimer);
    $schedule(this.this$0.switcherTimer, 5000);
  }
}
;
_.onPathStarted = function onPathStarted_0(element){
}
;
_.onPathUpdate = function onPathUpdate_0(element){
}
;
_.castableTypeMap$ = makeCastMap([Q$ITweenMaxPathListener]);
_.this$0 = null;
function WinUpToAndWinsSwitcherManager$4_0(this$0){
  this.this$0 = this$0;
}

function WinUpToAndWinsSwitcherManager$4(){
}

_ = WinUpToAndWinsSwitcherManager$4_0.prototype = WinUpToAndWinsSwitcherManager$4.prototype = new Object_0;
_.getClass$ = function getClass_605(){
  return Lwebgl_client_nf_games_g431_panel_WinUpToAndWinsSwitcherManager$4_2_classLit;
}
;
_.onPathFinished = function onPathFinished_1(element){
  $playInTween(this.this$0);
}
;
_.onPathStarted = function onPathStarted_1(element){
}
;
_.onPathUpdate = function onPathUpdate_1(element){
}
;
_.castableTypeMap$ = makeCastMap([Q$ITweenMaxPathListener]);
_.this$0 = null;
function WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget_0(widget){
  this.widget = widget;
  $init_23(this);
}

function WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget(){
}

_ = WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget_0.prototype = WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget.prototype = new TweenMaxElementWidget;
_.getClass$ = function getClass_608(){
  return Lwebgl_client_nf_games_g431_panel_WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget, Q$AbstractTweenMaxElement, Q$TweenMaxElementWidget]);
function $clinit_QueenOfDiamondsBigWinPopup(){
  $clinit_QueenOfDiamondsBigWinPopup = nullMethod;
  DIAMONDS_DURATIONS = initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0, 0.3, 0.2, 0.2]);
  DIAMONDS_DELAIES = initValues(_3_3D_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$double_$1, [initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0.07, 0, 0, 0]), initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0.08, 0, 0, 0]), initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0.1, 0, 0, 0])]);
  DIAMONDS_SCALE = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$CharSequence_$1, Q$Comparable_$1, Q$Object_$1, Q$String_$1]), Q$String, ['0.0', '1.0', '1.12', '1.0']);
  BIG_WIN_DURATIONS = initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0, 0.5, 0.1, 0.2, 0.2]);
  BIG_WIN_DELAIES = initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0.1, 0, 0, 0, 0]);
  BIG_WIN_ROTATE = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$CharSequence_$1, Q$Comparable_$1, Q$Object_$1, Q$String_$1]), Q$String, ['1.0', '7.0', '7.0', '4.0', '7.0']);
  AMOUNT_DURATIONS = initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0, 0.5, 0.1, 0.2, 0.2]);
  AMOUNT_DELAIES = initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0, 0, 0, 0, 0]);
  AMOUNT_ROTATE = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$CharSequence_$1, Q$Comparable_$1, Q$Object_$1, Q$String_$1]), Q$String, ['-1.0', '-1.0', '-1.0', '-3.0', '-5.0']);
}

function $centerTexts_7(this$static){
  !!this$static.popupTitleHTML && $centre(this$static.popupTitleHTML);
  !!this$static.textAmount && $centre(this$static.textAmount);
}

function $getBigWinAmountSequence(this$static){
  var i, stepDo, steps, tweenProperties;
  steps = initDim(_3Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxGenericSequenceDO_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$TweenMaxGenericSequenceDO, this$static.amountLocations.length, 0);
  for (i = 0; i < this$static.amountLocations.length; ++i) {
    tweenProperties = new ArrayList_0;
    $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , Y), valueOf_0(this$static.amountLocations[i].y_0 - (this$static.amountLocations[i].height_0 >> 1))));
    $add_10(tweenProperties, new TweenProperty_0(X, valueOf_0(this$static.amountLocations[i].x_0 - (this$static.amountLocations[i].width_0 >> 1))));
    $add_10(tweenProperties, new TweenProperty_0(ROTATION, AMOUNT_ROTATE[i]));
    stepDo = new TweenMaxGenericSequenceDO_0(tweenProperties, AMOUNT_DURATIONS[i], AMOUNT_DELAIES[i]);
    steps[i] = stepDo;
  }
  return steps;
}

function $getBigWinSequence(this$static){
  var i, stepDo, steps, tweenProperties;
  steps = initDim(_3Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxGenericSequenceDO_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$TweenMaxGenericSequenceDO, this$static.bigWinLocations.length, 0);
  for (i = 0; i < this$static.bigWinLocations.length; ++i) {
    tweenProperties = new ArrayList_0;
    $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , Y), valueOf_0(this$static.bigWinLocations[i].y_0 - (this$static.bigWinLocations[i].height_0 >> 1))));
    $add_10(tweenProperties, new TweenProperty_0(X, valueOf_0(this$static.bigWinLocations[i].x_0 - (this$static.bigWinLocations[i].width_0 >> 1))));
    $add_10(tweenProperties, new TweenProperty_0(ROTATION, BIG_WIN_ROTATE[i]));
    stepDo = new TweenMaxGenericSequenceDO_0(tweenProperties, BIG_WIN_DURATIONS[i], BIG_WIN_DELAIES[i]);
    steps[i] = stepDo;
  }
  return steps;
}

function $getDiamondsSequence(this$static, i){
  var j, location_0, scaledHeight, scaledWidth, stepDo, steps, tweenProperties;
  steps = initDim(_3Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxGenericSequenceDO_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$TweenMaxGenericSequenceDO, 4, 0);
  for (j = 0; j < 4; ++j) {
    location_0 = this$static.diamondsLocations[i][j];
    scaledHeight = round_int(location_0.height_0 * (new Double_0(__parseAndValidateDouble(DIAMONDS_SCALE[j]))).value_0);
    scaledWidth = round_int(location_0.width_0 * (new Double_0(__parseAndValidateDouble(DIAMONDS_SCALE[j]))).value_0);
    tweenProperties = new ArrayList_0;
    $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , Y), valueOf_0(location_0.y_0 - location_0.height_0 + (scaledHeight >> 1))));
    $add_10(tweenProperties, new TweenProperty_0(X, valueOf_0(location_0.x_0 - location_0.width_0 + (scaledWidth >> 1))));
    $add_10(tweenProperties, new TweenProperty_0(SCALE_X, DIAMONDS_SCALE[j]));
    $add_10(tweenProperties, new TweenProperty_0(SCALE_Y, DIAMONDS_SCALE[j]));
    stepDo = new TweenMaxGenericSequenceDO_0(tweenProperties, DIAMONDS_DURATIONS[j], DIAMONDS_DELAIES[i][j]);
    steps[j] = stepDo;
  }
  return steps;
}

function $hide_3(this$static){
  setVisible(this$static.element, false);
  $removeFromParent(this$static);
  $cancel_0(this$static.autoDismissTimerFadeOUt);
  $cancel_0(this$static.autoCompletlyDismissTimer);
  $setHTML_0(this$static.textAmount, '');
  this$static.isVisible = false;
  $reset_12(this$static);
}

function $hidePopup_0(this$static){
  this$static.messagesListener.this$0.gamePanel.setLegendStyle(($clinit_Boolean() , $clinit_Boolean() , TRUE_0));
  $hide_3(this$static);
}

function $hidePopupWithFadeOut(this$static){
  var i, tweenProperties;
  $stop_0(this$static.bigWinTweenMaxManager);
  $startDarkness(this$static, false);
  tweenProperties = new ArrayList_0;
  $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , OPACITY), '0'));
  $startGenericTween(this$static.bigWinTweenMax, null, tweenProperties, 0, 0, false);
  $startGenericTween(this$static.amountTweenMax, null, tweenProperties, 0, 0, false);
  for (i = 0; i < 3; ++i) {
    $stop_0(this$static.diamondsTweenMaxManagers[i]);
    $startGenericTween(this$static.diamondsTweenMax[i], null, tweenProperties, 0, 0, false);
  }
  $schedule(this$static.autoCompletlyDismissTimer, 700);
}

function $init_24(this$static, resources, locations, messagesListener){
  var amountBGImage, amountPanel, bigWinBGImage, bigWinTitlePanel, diamond, diamondImage, i, j, popupLoaction, titleLocation, tweenProperties, winAmountLocation;
  this$static.messagesListener = messagesListener;
  popupLoaction = dynamicCast(locations.locationsMap.get('BOARD_POPUP_LOCATION'), Q$Location);
  this$static.element.style['zIndex'] = '3000';
  this$static.element['className'] = 'bigWinPopupPanel';
  $setSize(this$static, popupLoaction.width_0 + 'px', popupLoaction.height_0 + 'px');
  this$static.diamondsLocations = initDims([_3_3Lwebgl_client_nf_core_Location_2_classLit, _3Lwebgl_client_nf_core_Location_2_classLit], [makeCastMap([Q$Serializable, Q$Object_$1]), makeCastMap([Q$Serializable, Q$Object_$1, Q$Location_$1, Q$Point_$1])], [Q$Location_$1, Q$Location], [3, 4], 2, 0);
  for (i = 0; i < 3; ++i) {
    for (j = 0; j < 4; ++j) {
      this$static.diamondsLocations[i][j] = dynamicCast(locations.locationsMap.get('BIG_WIN_DIAMOND_' + (i + 1) + '_' + (j + 1)), Q$Location);
    }
  }
  this$static.diamondsTweenMax = initDim(_3Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxElementWidget_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$TweenMaxElementWidget, 3, 0);
  this$static.diamondsTweenMaxManagers = initDim(_3Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxGenericSequenceManager_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$TweenMaxGenericSequenceManager, 3, 0);
  for (i = 0; i < 3; ++i) {
    diamondImage = dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , dynamicCast(valueOf(($clinit_QueenOfDiamondsResources$Map() , $MAP_0), 'BIG_WIN_DIAMOND_' + (i + 1)), Q$QueenOfDiamondsResources)).path), Q$TransformableImage);
    diamond = new Image_6(diamondImage.image.src);
    diamond.element.style['zIndex'] = '5505';
    setCheck(this$static.diamondsTweenMax, i, new TweenMaxElementWidget_0(diamond));
    $init_23(this$static.diamondsTweenMax[i]);
    this$static.diamondsTweenMaxManagers[i] = new TweenMaxGenericSequenceManager_0(this$static.diamondsTweenMax[i]);
    $add_2(this$static, diamond, 0, 0);
  }
  this$static.bigWinLocations = initDim(_3Lwebgl_client_nf_core_Location_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$Location_$1, Q$Point_$1]), Q$Location, 5, 0);
  for (i = 0; i < 5; ++i) {
    this$static.bigWinLocations[i] = dynamicCast(locations.locationsMap.get('BIG_WIN_TITLE_BG_' + (i + 1)), Q$Location);
  }
  bigWinTitlePanel = new AbsoluteNeoPanel_0;
  bigWinTitlePanel.element['className'] = 'bigWinPopupPanel';
  $setPixelSize(bigWinTitlePanel, this$static.bigWinLocations[0].width_0, this$static.bigWinLocations[0].height_0);
  bigWinTitlePanel.element.style['zIndex'] = '3005';
  bigWinBGImage = dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , BIG_WIN_TITLE_BG).path), Q$TransformableImage);
  $add_2(bigWinTitlePanel, new Image_6(bigWinBGImage.image.src), 0, 0);
  this$static.bigWinTweenMax = new TweenMaxElementWidget_0(bigWinTitlePanel);
  $init_23(this$static.bigWinTweenMax);
  this$static.bigWinTweenMaxManager = new TweenMaxGenericSequenceManager_0(this$static.bigWinTweenMax);
  $add_2(this$static, bigWinTitlePanel, 0, 0);
  titleLocation = dynamicCast(locations.locationsMap.get('BIG_WIN_TITLE'), Q$Location);
  this$static.popupTitleHTML = new CentredHTML_0;
  $setStyleName_1(this$static.popupTitleHTML, 'bigWinPopupTitle');
  $setPosition_1(this$static.popupTitleHTML, $reverseRelativeTo(titleLocation, this$static.bigWinLocations[4]));
  $setWordWrap(this$static.popupTitleHTML, false);
  $add_2(bigWinTitlePanel, this$static.popupTitleHTML, 0, 0);
  this$static.amountLocations = initDim(_3Lwebgl_client_nf_core_Location_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$Location_$1, Q$Point_$1]), Q$Location, 5, 0);
  for (i = 0; i < 5; ++i) {
    this$static.amountLocations[i] = dynamicCast(locations.locationsMap.get('BIG_WIN_AMOUNT_BG_' + (i + 1)), Q$Location);
  }
  amountPanel = new AbsoluteNeoPanel_0;
  amountPanel.element['className'] = 'bigWinPopupPanel';
  $setPixelSize(amountPanel, this$static.amountLocations[0].width_0, this$static.amountLocations[0].height_0);
  amountPanel.element.style['zIndex'] = '3000';
  amountBGImage = dynamicCast(resources.get(BIG_WIN_AMOUNT_BG.path), Q$TransformableImage);
  $add_2(amountPanel, new Image_6(amountBGImage.image.src), 0, 0);
  this$static.amountTweenMax = new TweenMaxElementWidget_0(amountPanel);
  $init_23(this$static.amountTweenMax);
  this$static.amountTweenMaxManager = new TweenMaxGenericSequenceManager_0(this$static.amountTweenMax);
  $add_2(this$static, amountPanel, 0, 0);
  winAmountLocation = dynamicCast(locations.locationsMap.get('BIG_WIN_AMOUNT'), Q$Location);
  this$static.textAmount = new CentredHTML_0;
  $setStyleName_1(this$static.textAmount, 'bigWinPopupAmount');
  $setPosition_1(this$static.textAmount, $reverseRelativeTo(winAmountLocation, this$static.amountLocations[4]));
  $setWordWrap(this$static.textAmount, false);
  $add_2(amountPanel, this$static.textAmount, 0, 0);
  this$static.darknessTween = new TweenMaxElementImage_0(dynamicCast(resources.get(DARK_BG.path), Q$TransformableImage));
  $init_23(this$static.darknessTween);
  tweenProperties = new ArrayList_0;
  $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , OPACITY), '0'));
  $add_10(tweenProperties, new TweenProperty_0(Y, valueOf_0(0)));
  $add_10(tweenProperties, new TweenProperty_0(X, valueOf_0(0)));
  $startGenericTween(this$static.darknessTween, null, tweenProperties, 0, 0, false);
  this$static.autoDismissTimerFadeOUt = new QueenOfDiamondsBigWinPopup$1_0(this$static, messagesListener);
  this$static.autoCompletlyDismissTimer = new QueenOfDiamondsBigWinPopup$2_0(this$static);
}

function $render_6(this$static, g){
  this$static.isVisible && $renderElement(this$static.darknessTween, g);
}

function $reset_12(this$static){
  var i, tweenProperties;
  tweenProperties = new ArrayList_0;
  $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , OPACITY), '1'));
  $startGenericTween(this$static.bigWinTweenMax, null, tweenProperties, 0, 0, false);
  $startGenericTween(this$static.amountTweenMax, null, tweenProperties, 0, 0, false);
  for (i = 0; i < 3; ++i) {
    $stop_0(this$static.diamondsTweenMaxManagers[i]);
    $startGenericTween(this$static.diamondsTweenMax[i], null, tweenProperties, 0, 0, false);
  }
}

function $showPopup_0(this$static, winValue, container){
  var i, pennisValue, prizeAmount;
  setVisible(this$static.element, true);
  $add_2(container, this$static, 0, 0);
  $startDarkness(this$static, true);
  for (i = 0; i < 3; ++i) {
    $startSequence(this$static.diamondsTweenMaxManagers[i], $getDiamondsSequence(this$static, i));
  }
  pennisValue = dollarstopennies('' + winValue);
  prizeAmount = appendCurrencySymbol(penniesToDollars(pennisValue));
  $setHTML_0(this$static.textAmount, prizeAmount);
  $startSequence(this$static.amountTweenMaxManager, $getBigWinAmountSequence(this$static));
  $startSequence(this$static.bigWinTweenMaxManager, $getBigWinSequence(this$static));
  $schedule(this$static.autoDismissTimerFadeOUt, 4000);
  this$static.isVisible = true;
}

function $startDarkness(this$static, shouldShow){
  var opacity, tweenPropertiesDarkness;
  opacity = shouldShow?'1':'0';
  tweenPropertiesDarkness = new ArrayList_0;
  $add_10(tweenPropertiesDarkness, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , OPACITY), opacity));
  $startGenericTween(this$static.darknessTween, null, tweenPropertiesDarkness, 0.3, 0, false);
}

function QueenOfDiamondsBigWinPopup_0(){
  $clinit_QueenOfDiamondsBigWinPopup();
  AbsoluteNeoPanel_0.call(this);
}

function QueenOfDiamondsBigWinPopup(){
}

_ = QueenOfDiamondsBigWinPopup_0.prototype = QueenOfDiamondsBigWinPopup.prototype = new AbsoluteNeoPanel;
_.getClass$ = function getClass_609(){
  return Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsBigWinPopup_2_classLit;
}
;
_.isVisible_0 = function isVisible_2(){
  return this.isVisible;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AbsolutePanel, Q$ComplexPanel, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Renderable, Q$AbsoluteNeoPanel]);
_.amountLocations = null;
_.amountTweenMax = null;
_.amountTweenMaxManager = null;
_.autoCompletlyDismissTimer = null;
_.autoDismissTimerFadeOUt = null;
_.bigWinLocations = null;
_.bigWinTweenMax = null;
_.bigWinTweenMaxManager = null;
_.darknessTween = null;
_.diamondsLocations = null;
_.diamondsTweenMax = null;
_.diamondsTweenMaxManagers = null;
_.isVisible = false;
_.messagesListener = null;
_.popupTitleHTML = null;
_.textAmount = null;
var AMOUNT_DELAIES, AMOUNT_DURATIONS, AMOUNT_ROTATE, BIG_WIN_DELAIES, BIG_WIN_DURATIONS, BIG_WIN_ROTATE, DIAMONDS_DELAIES, DIAMONDS_DURATIONS, DIAMONDS_SCALE;
function QueenOfDiamondsBigWinPopup$1_0(this$0, val$messagesListener){
  $clinit_Timer();
  this.this$0 = this$0;
  this.val$messagesListener = val$messagesListener;
}

function QueenOfDiamondsBigWinPopup$1(){
}

_ = QueenOfDiamondsBigWinPopup$1_0.prototype = QueenOfDiamondsBigWinPopup$1.prototype = new Timer;
_.getClass$ = function getClass_610(){
  return Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsBigWinPopup$1_2_classLit;
}
;
_.run = function run_35(){
  $hidePopupWithFadeOut(this.this$0);
  this.val$messagesListener.this$0.gamePanel.setLegendStyle(($clinit_Boolean() , $clinit_Boolean() , TRUE_0));
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
_.val$messagesListener = null;
function QueenOfDiamondsBigWinPopup$2_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsBigWinPopup$2(){
}

_ = QueenOfDiamondsBigWinPopup$2_0.prototype = QueenOfDiamondsBigWinPopup$2.prototype = new Timer;
_.getClass$ = function getClass_611(){
  return Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsBigWinPopup$2_2_classLit;
}
;
_.run = function run_36(){
  $hide_3(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function $clinit_QueenOfDiamondsInfoPopup(){
  $clinit_QueenOfDiamondsInfoPopup = nullMethod;
  STICK_DURATIONS = initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0, 0.2, 0.1]);
  STICK_DELAIES = initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0.3, 0, 0]);
  ROLL_DURATIONS = initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0, 0.2, 0.1, 0.2]);
  ROLL_DELAIES = initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0.3, 0, 0, 0]);
  ROLL_SCALE_Y = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$CharSequence_$1, Q$Comparable_$1, Q$Object_$1, Q$String_$1]), Q$String, ['0.434', '0.82', '0.989', '1.00']);
}

function $getRollSequence(this$static){
  var i, scaledHeight, stepDo, steps, tweenProperties;
  steps = initDim(_3Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxGenericSequenceDO_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$TweenMaxGenericSequenceDO, this$static.royalRollLocations.length, 0);
  for (i = 0; i < this$static.royalRollLocations.length; ++i) {
    tweenProperties = new ArrayList_0;
    scaledHeight = round_int(this$static.royalRollLocations[i].height_0 * (new Double_0(__parseAndValidateDouble(ROLL_SCALE_Y[i]))).value_0);
    $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , Y), valueOf_0(this$static.royalRollLocations[i].y_0 - this$static.royalRollLocations[i].height_0 + (scaledHeight >> 1))));
    $add_10(tweenProperties, new TweenProperty_0(X, valueOf_0(this$static.royalRollLocations[i].x_0 - (this$static.royalRollLocations[i].width_0 >> 1))));
    $add_10(tweenProperties, new TweenProperty_0(SCALE_Y, ROLL_SCALE_Y[i]));
    stepDo = new TweenMaxGenericSequenceDO_0(tweenProperties, ROLL_DURATIONS[i], ROLL_DELAIES[i]);
    steps[i] = stepDo;
  }
  return steps;
}

function $getStickSequence(this$static){
  var i, stepDo, steps, tweenProperties;
  steps = initDim(_3Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxGenericSequenceDO_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$TweenMaxGenericSequenceDO, this$static.stickLocations.length, 0);
  for (i = 0; i < this$static.stickLocations.length; ++i) {
    tweenProperties = new ArrayList_0;
    $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , Y), valueOf_0(this$static.stickLocations[i].y_0 - (this$static.stickLocations[i].height_0 >> 1))));
    $add_10(tweenProperties, new TweenProperty_0(X, valueOf_0(this$static.stickLocations[i].x_0 - (this$static.stickLocations[i].width_0 >> 1))));
    stepDo = new TweenMaxGenericSequenceDO_0(tweenProperties, STICK_DURATIONS[i], STICK_DELAIES[i]);
    steps[i] = stepDo;
  }
  return steps;
}

function $hide_4(this$static){
  this$static.isShowing = false;
  $cancel_0(this$static.autoCompletlyDismissTimer);
  $hide_2(this$static);
}

function $hidePopupWithFadeOut_0(this$static){
  var tweenProperties;
  this$static.isShowing = false;
  $stop_0(this$static.stickTweenMaxManager);
  $stop_0(this$static.royalRollTweenMaxManager);
  tweenProperties = new ArrayList_0;
  $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , OPACITY), '0'));
  $startGenericTween(this$static.stickTweenMax, null, tweenProperties, 0.8, 0, false);
  $startGenericTween(this$static.royalRollTweenMax, null, tweenProperties, 0.8, 0, false);
  $setStyleName(this$static.darkBackground, 'bonusPopupFadeOut', true);
  $cancel_0(this$static.autoCompletlyDismissTimer);
  $schedule(this$static.autoCompletlyDismissTimer, 800);
  this$static.infoType != ($clinit_QueenOfDiamondsInfoPopup$InfoPopupType() , MAIN) && $trackBonusInfoClose((!instance_5 && (instance_5 = new AnalyticsTracker_0) , instance_5), this$static.infoType == JOKER?'JokerInfo':'WarInfo');
}

function $showPopup_1(this$static, container){
  var tweenProperties;
  if (this$static.element.style.display != 'none' && $isAttached(this$static)) {
    return;
  }
  this$static.isShowing = true;
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'info_opening', 14);
  setVisible(this$static.element, true);
  $add_2(container, this$static, 0, 0);
  $setStyleName(this$static.darkBackground, 'bonusPopupFadeOut', false);
  $startSequence(this$static.stickTweenMaxManager, $getStickSequence(this$static));
  $startSequence(this$static.royalRollTweenMaxManager, $getRollSequence(this$static));
  tweenProperties = new ArrayList_0;
  $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , OPACITY), '1'));
  $startGenericTween(this$static.stickTweenMax, null, tweenProperties, 0, 0, false);
  $startGenericTween(this$static.royalRollTweenMax, null, tweenProperties, 0, 0, false);
}

function QueenOfDiamondsInfoPopup_0(container, resources, locations, type){
  $clinit_QueenOfDiamondsInfoPopup();
  var buttonImg, closeBtn, containerPanel, content_0, i, imageLoc, infoPopUpLocation, royalRollContainerPanel, royalRollFinalFrameLocation, royalRollImage, stick, stickImage;
  PopupDialog_0.call(this, container, true);
  this.isShowing = false;
  this.infoType = type;
  containerPanel = new AbsoluteNeoPanel_0;
  infoPopUpLocation = dynamicCast(locations.locationsMap.get('BOARD_POPUP_LOCATION'), Q$Location);
  $setPixelSize(containerPanel, infoPopUpLocation.width_0, infoPopUpLocation.height_0);
  $addDomHandler(containerPanel, new QueenOfDiamondsInfoPopup$1_0(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  this.stickLocations = initDim(_3Lwebgl_client_nf_core_Location_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$Location_$1, Q$Point_$1]), Q$Location, 3, 0);
  for (i = 0; i < 3; ++i) {
    this.stickLocations[i] = dynamicCast(locations.locationsMap.get('INFO_STICK_' + i), Q$Location);
  }
  stickImage = dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , INFO_STICK).path), Q$TransformableImage);
  stick = new Image_2(stickImage.image.src);
  stick.element.style['zIndex'] = '3005';
  this.stickTweenMax = new TweenMaxElementWidget_0(stick);
  $init_23(this.stickTweenMax);
  this.stickTweenMaxManager = new TweenMaxGenericSequenceManager_0(this.stickTweenMax);
  $add_2(containerPanel, stick, 0, 0);
  this.royalRollLocations = initDim(_3Lwebgl_client_nf_core_Location_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$Location_$1, Q$Point_$1]), Q$Location, 4, 0);
  for (i = 0; i < 3; ++i) {
    this.royalRollLocations[i] = dynamicCast(locations.locationsMap.get('INFO_BG_' + i), Q$Location);
  }
  this.royalRollLocations[3] = dynamicCast(locations.locationsMap.get('INFO_BG_2'), Q$Location);
  royalRollContainerPanel = new AbsoluteNeoPanel_0;
  royalRollContainerPanel.element['className'] = 'infoPopupPanel';
  $setPixelSize(royalRollContainerPanel, this.royalRollLocations[0].width_0, this.royalRollLocations[0].height_0);
  royalRollContainerPanel.element.style['zIndex'] = '3000';
  royalRollImage = dynamicCast(resources.get(INFO.path), Q$TransformableImage);
  $add_2(royalRollContainerPanel, new Image_2(royalRollImage.image.src), 0, 0);
  this.royalRollTweenMax = new TweenMaxElementWidget_0(royalRollContainerPanel);
  $init_23(this.royalRollTweenMax);
  this.royalRollTweenMaxManager = new TweenMaxGenericSequenceManager_0(this.royalRollTweenMax);
  $add_2(containerPanel, royalRollContainerPanel, 0, 0);
  royalRollFinalFrameLocation = this.royalRollLocations[3];
  content_0 = dynamicCast(resources.get(valueOf_3('INFO_CONTENT_' + (type.ordinal + 1)).path), Q$TransformableImage);
  this.contentImage = new Image_2(content_0.image.src);
  $setVisible(this.contentImage, true);
  imageLoc = $getLocation_0(locations, 'INFO_CONTENT_' + (type.ordinal + 1));
  $add_15(royalRollContainerPanel, this.contentImage, $reverseRelativeTo(imageLoc, royalRollFinalFrameLocation));
  buttonImg = dynamicCast(resources.get(INFO_X_BTN.path), Q$TransformableImage);
  closeBtn = new MenuCommonButton_0('lobby-btn', '', buttonImg.image.src, $getWidth(buttonImg) >> 1, $getHeight(buttonImg) >> 1);
  $addClickHandler_0(closeBtn, new QueenOfDiamondsInfoPopup$2_0(this));
  this.htmlTitle = new CentredHTML_0;
  this.htmlQueenTitle = new CentredHTML_0;
  this.htmlJokerTitle = new CentredHTML_0;
  this.htmlGoldTitle = new CentredHTML_0;
  this.htmlQueenSubTitle = new CentredHTML_0;
  this.htmlJokerSubTitle = new CentredHTML_0;
  this.htmlGoldSubTitle = new CentredHTML_0;
  this.htmlText1 = new CentredHTML_0;
  this.htmlText2 = new CentredHTML_0;
  $setWordWrap(this.htmlTitle, false);
  $setWordWrap(this.htmlQueenTitle, false);
  $setWordWrap(this.htmlJokerTitle, false);
  $setWordWrap(this.htmlGoldTitle, false);
  $setWordWrap(this.htmlQueenSubTitle, false);
  $setWordWrap(this.htmlJokerSubTitle, false);
  $setWordWrap(this.htmlGoldSubTitle, false);
  $setWordWrap(this.htmlText1, false);
  $setWordWrap(this.htmlText2, false);
  $setStyleName_1(this.htmlTitle, 'infoPopupTitle');
  $setStyleName_1(this.htmlQueenTitle, 'infoPopupTitle');
  $setStyleName_1(this.htmlJokerTitle, 'infoPopupTitle');
  $setStyleName_1(this.htmlGoldTitle, 'infoPopupTitle');
  $setStyleName_1(this.htmlQueenSubTitle, 'infoPopupSubTitle');
  $setStyleName_1(this.htmlJokerSubTitle, 'infoPopupSubTitle');
  $setStyleName_1(this.htmlGoldSubTitle, 'infoPopupSubTitle');
  $setStyleName_1(this.htmlText1, 'infoPopupText');
  $setStyleName_1(this.htmlText2, 'infoPopupText');
  closeBtn.element.style['zIndex'] = '5505';
  this.htmlTitle.element.style['zIndex'] = '5505';
  this.htmlQueenTitle.element.style['zIndex'] = '5505';
  this.htmlJokerTitle.element.style['zIndex'] = '5505';
  this.htmlGoldTitle.element.style['zIndex'] = '5505';
  this.htmlQueenSubTitle.element.style['zIndex'] = '5505';
  this.htmlJokerSubTitle.element.style['zIndex'] = '5505';
  this.htmlGoldSubTitle.element.style['zIndex'] = '5505';
  this.htmlText1.element.style['zIndex'] = '5505';
  this.htmlText2.element.style['zIndex'] = '5505';
  $setHorizontalAlignment(this.htmlText1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $setHorizontalAlignment(this.htmlText2, ALIGN_CENTER);
  $setPosition_1(this.htmlTitle, $reverseRelativeTo(dynamicCast(locations.locationsMap.get('INFO_TITLE'), Q$Location), royalRollFinalFrameLocation));
  $setPosition_1(this.htmlQueenTitle, $reverseRelativeTo(dynamicCast(locations.locationsMap.get('INFO_QUEEN_TITLE'), Q$Location), royalRollFinalFrameLocation));
  $setPosition_1(this.htmlJokerTitle, $reverseRelativeTo(dynamicCast(locations.locationsMap.get('INFO_JOKER_TITLE'), Q$Location), royalRollFinalFrameLocation));
  $setPosition_1(this.htmlGoldTitle, $reverseRelativeTo(dynamicCast(locations.locationsMap.get('INFO_GOLD_TITLE'), Q$Location), royalRollFinalFrameLocation));
  $setPosition_1(this.htmlQueenSubTitle, $reverseRelativeTo(dynamicCast(locations.locationsMap.get('INFO_QUEEN_SUBTITLE'), Q$Location), royalRollFinalFrameLocation));
  $setPosition_1(this.htmlJokerSubTitle, $reverseRelativeTo(dynamicCast(locations.locationsMap.get('INFO_JOKER_SUBTITLE'), Q$Location), royalRollFinalFrameLocation));
  $setPosition_1(this.htmlGoldSubTitle, $reverseRelativeTo(dynamicCast(locations.locationsMap.get('INFO_GOLD_SUBTITLE'), Q$Location), royalRollFinalFrameLocation));
  $setPosition_1(this.htmlText1, $reverseRelativeTo(dynamicCast(locations.locationsMap.get('INFO_TEXT1'), Q$Location), royalRollFinalFrameLocation));
  $setPosition_1(this.htmlText2, $reverseRelativeTo(dynamicCast(locations.locationsMap.get('INFO_TEXT2'), Q$Location), royalRollFinalFrameLocation));
  $add_15(royalRollContainerPanel, closeBtn, $reverseRelativeTo(dynamicCast(locations.locationsMap.get('INFO_CLOSE_BTN'), Q$Location), royalRollFinalFrameLocation));
  $add_2(royalRollContainerPanel, this.htmlTitle, 0, 0);
  $add_2(royalRollContainerPanel, this.htmlQueenTitle, 0, 0);
  $add_2(royalRollContainerPanel, this.htmlJokerTitle, 0, 0);
  $add_2(royalRollContainerPanel, this.htmlGoldTitle, 0, 0);
  $add_2(royalRollContainerPanel, this.htmlQueenSubTitle, 0, 0);
  $add_2(royalRollContainerPanel, this.htmlJokerSubTitle, 0, 0);
  $add_2(royalRollContainerPanel, this.htmlGoldSubTitle, 0, 0);
  $add_2(royalRollContainerPanel, this.htmlText1, 0, 0);
  $add_2(royalRollContainerPanel, this.htmlText2, 0, 0);
  $add_8(this.popupContentPanel, containerPanel);
  $setVisible(this.popupContentPanel, true);
  this.autoCompletlyDismissTimer = new QueenOfDiamondsInfoPopup$3_0(this);
}

function QueenOfDiamondsInfoPopup(){
}

_ = QueenOfDiamondsInfoPopup_0.prototype = QueenOfDiamondsInfoPopup.prototype = new PopupDialog;
_.getClass$ = function getClass_612(){
  return Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsInfoPopup_2_classLit;
}
;
_.hide = function hide_0(){
  $hide_4(this);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$HasVisibility, Q$IsRenderable, Q$IsWidget, Q$UIObject, Q$Widget]);
_.autoCompletlyDismissTimer = null;
_.contentImage = null;
_.htmlGoldSubTitle = null;
_.htmlGoldTitle = null;
_.htmlJokerSubTitle = null;
_.htmlJokerTitle = null;
_.htmlQueenSubTitle = null;
_.htmlQueenTitle = null;
_.htmlText1 = null;
_.htmlText2 = null;
_.htmlTitle = null;
_.infoType = null;
_.isShowing = false;
_.royalRollLocations = null;
_.royalRollTweenMax = null;
_.royalRollTweenMaxManager = null;
_.stickLocations = null;
_.stickTweenMax = null;
_.stickTweenMaxManager = null;
var ROLL_DELAIES, ROLL_DURATIONS, ROLL_SCALE_Y, STICK_DELAIES, STICK_DURATIONS;
function QueenOfDiamondsInfoPopup$1_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsInfoPopup$1(){
}

_ = QueenOfDiamondsInfoPopup$1_0.prototype = QueenOfDiamondsInfoPopup$1.prototype = new Object_0;
_.getClass$ = function getClass_613(){
  return Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsInfoPopup$1_2_classLit;
}
;
_.onClick = function onClick_20(event_0){
  this.this$0.isShowing && $hidePopupWithFadeOut_0(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function QueenOfDiamondsInfoPopup$2_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsInfoPopup$2(){
}

_ = QueenOfDiamondsInfoPopup$2_0.prototype = QueenOfDiamondsInfoPopup$2.prototype = new Object_0;
_.getClass$ = function getClass_614(){
  return Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsInfoPopup$2_2_classLit;
}
;
_.onClick = function onClick_21(event_0){
  $hidePopupWithFadeOut_0(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function QueenOfDiamondsInfoPopup$3_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsInfoPopup$3(){
}

_ = QueenOfDiamondsInfoPopup$3_0.prototype = QueenOfDiamondsInfoPopup$3.prototype = new Timer;
_.getClass$ = function getClass_615(){
  return Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsInfoPopup$3_2_classLit;
}
;
_.run = function run_37(){
  $hide_4(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function $clinit_QueenOfDiamondsInfoPopup$InfoPopupType(){
  $clinit_QueenOfDiamondsInfoPopup$InfoPopupType = nullMethod;
  MAIN = new QueenOfDiamondsInfoPopup$InfoPopupType_0('MAIN', 0);
  JOKER = new QueenOfDiamondsInfoPopup$InfoPopupType_0('JOKER', 1);
  WAR = new QueenOfDiamondsInfoPopup$InfoPopupType_0('WAR', 2);
  $VALUES_25 = initValues(_3Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsInfoPopup$InfoPopupType_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$Comparable_$1, Q$Object_$1]), Q$QueenOfDiamondsInfoPopup$InfoPopupType, [MAIN, JOKER, WAR]);
}

function QueenOfDiamondsInfoPopup$InfoPopupType_0(enum$name, enum$ordinal){
  Enum_0.call(this, enum$name, enum$ordinal);
}

function values_26(){
  $clinit_QueenOfDiamondsInfoPopup$InfoPopupType();
  return $VALUES_25;
}

function QueenOfDiamondsInfoPopup$InfoPopupType(){
}

_ = QueenOfDiamondsInfoPopup$InfoPopupType_0.prototype = QueenOfDiamondsInfoPopup$InfoPopupType.prototype = new Enum;
_.getClass$ = function getClass_616(){
  return Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsInfoPopup$InfoPopupType_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Comparable, Q$Enum, Q$QueenOfDiamondsInfoPopup$InfoPopupType]);
var $VALUES_25, JOKER, MAIN, WAR;
function $clinit_QueenOfDiamondsItsAWinnerPopup(){
  $clinit_QueenOfDiamondsItsAWinnerPopup = nullMethod;
  STICK_DURATIONS_0 = initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0, 0.3, 0.1, 0.1, 0.1]);
  STICK_DELAIES_0 = initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0.5, 0, 0, 0, 0]);
  ROLL_DURATIONS_0 = initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0, 0.3, 0.1, 0.1, 0.2]);
  ROLL_DELAIES_0 = initValues(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, [0.5, 0, 0, 0, 0]);
  ROLL_SCALE_Y_0 = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$CharSequence_$1, Q$Comparable_$1, Q$Object_$1, Q$String_$1]), Q$String, ['0.426', '0.495', '1.141', '1.00', '1.00']);
}

function $centerTexts_8(this$static){
  !!this$static.popupTitleHTML && $centre(this$static.popupTitleHTML);
  !!this$static.textAmount && $centre(this$static.textAmount);
}

function $getRollSequence_0(this$static){
  var i, scaledHeight, stepDo, steps, tweenProperties;
  steps = initDim(_3Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxGenericSequenceDO_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$TweenMaxGenericSequenceDO, this$static.royalRollLocations.length, 0);
  for (i = 0; i < this$static.royalRollLocations.length; ++i) {
    tweenProperties = new ArrayList_0;
    scaledHeight = round_int(this$static.royalRollLocations[i].height_0 * (new Double_0(__parseAndValidateDouble(ROLL_SCALE_Y_0[i]))).value_0);
    $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , Y), valueOf_0(this$static.royalRollLocations[i].y_0 - this$static.royalRollLocations[i].height_0 + (scaledHeight >> 1))));
    $add_10(tweenProperties, new TweenProperty_0(X, valueOf_0(this$static.royalRollLocations[i].x_0 - (this$static.royalRollLocations[i].width_0 >> 1))));
    $add_10(tweenProperties, new TweenProperty_0(SCALE_Y, ROLL_SCALE_Y_0[i]));
    stepDo = new TweenMaxGenericSequenceDO_0(tweenProperties, ROLL_DURATIONS_0[i], ROLL_DELAIES_0[i]);
    steps[i] = stepDo;
  }
  return steps;
}

function $getStickSequence_0(this$static){
  var i, stepDo, steps, tweenProperties;
  steps = initDim(_3Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxGenericSequenceDO_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$TweenMaxGenericSequenceDO, this$static.stickLocations.length, 0);
  for (i = 0; i < this$static.stickLocations.length; ++i) {
    tweenProperties = new ArrayList_0;
    $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , Y), valueOf_0(this$static.stickLocations[i].y_0 - (this$static.stickLocations[i].height_0 >> 1))));
    $add_10(tweenProperties, new TweenProperty_0(X, valueOf_0(this$static.stickLocations[i].x_0 - (this$static.stickLocations[i].width_0 >> 1))));
    stepDo = new TweenMaxGenericSequenceDO_0(tweenProperties, STICK_DURATIONS_0[i], STICK_DELAIES_0[i]);
    steps[i] = stepDo;
  }
  return steps;
}

function $hide_5(this$static){
  setVisible(this$static.element, false);
  $removeFromParent(this$static);
  $cancel_0(this$static.autoDismissTimerFadeOUt);
  $cancel_0(this$static.autoCompletlyDismissTimer);
  $setHTML_0(this$static.textAmount, '');
  this$static.isVisible = false;
}

function $hidePopup_1(this$static){
  this$static.messagesListener.this$0.gamePanel.setLegendStyle(($clinit_Boolean() , $clinit_Boolean() , TRUE_0));
  $hide_5(this$static);
}

function $hidePopupWithFadeOut_1(this$static){
  var i, tweenProperties;
  $stop_0(this$static.stickTweenMaxManager);
  $stop_0(this$static.royalRollTweenMaxManager);
  $startDarkness_0(this$static, false);
  tweenProperties = new ArrayList_0;
  $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , OPACITY), '0'));
  $startGenericTween(this$static.stickTweenMax, null, tweenProperties, 0, 0, false);
  $startGenericTween(this$static.royalRollTweenMax, null, tweenProperties, 0, 0, false);
  for (i = 0; i < 2; ++i) {
    this$static.trumpetsAnims[i].isVisible = false;
  }
  $schedule(this$static.autoCompletlyDismissTimer, 700);
}

function $init_25(this$static, resources, locations, messagesListener){
  var i, popupLoaction, royalRollImage, stick, stickImage, titleLocation, trumpetsAnim, tweenProperties, winAmountLocation;
  this$static.messagesListener = messagesListener;
  popupLoaction = dynamicCast(locations.locationsMap.get('BOARD_POPUP_LOCATION'), Q$Location);
  this$static.element.style['zIndex'] = '3000';
  this$static.element['className'] = 'itsAwinnerPopupPanel';
  $setSize(this$static, popupLoaction.width_0 + 'px', popupLoaction.height_0 + 'px');
  this$static.stickLocations = initDim(_3Lwebgl_client_nf_core_Location_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$Location_$1, Q$Point_$1]), Q$Location, 5, 0);
  for (i = 0; i < 5; ++i) {
    this$static.stickLocations[i] = dynamicCast(locations.locationsMap.get('ITS_A_WINNER_STICK_' + i), Q$Location);
  }
  stickImage = dynamicCast(resources.get(($clinit_QueenOfDiamondsResources() , STICK).path), Q$TransformableImage);
  stick = new Image_6(stickImage.image.src);
  this$static.stickTweenMax = new TweenMaxElementWidget_0(stick);
  $init_23(this$static.stickTweenMax);
  this$static.stickTweenMaxManager = new TweenMaxGenericSequenceManager_0(this$static.stickTweenMax);
  $add_2(this$static, stick, 0, 0);
  this$static.royalRollLocations = initDim(_3Lwebgl_client_nf_core_Location_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1, Q$Location_$1, Q$Point_$1]), Q$Location, 5, 0);
  for (i = 0; i < 5; ++i) {
    this$static.royalRollLocations[i] = dynamicCast(locations.locationsMap.get('ITS_A_WINNER_ROLL_' + i), Q$Location);
  }
  this$static.royalRollContainerPanel = new AbsoluteNeoPanel_0;
  $setStyleName_0(this$static.royalRollContainerPanel, 'itsAwinnerPopupPanel');
  $setPixelSize(this$static.royalRollContainerPanel, this$static.royalRollLocations[0].width_0, this$static.royalRollLocations[0].height_0);
  this$static.royalRollContainerPanel.element.style['zIndex'] = '3000';
  royalRollImage = dynamicCast(resources.get(ITS_A_WINNER.path), Q$TransformableImage);
  $add_2(this$static.royalRollContainerPanel, new Image_6(royalRollImage.image.src), 0, 0);
  this$static.royalRollTweenMax = new TweenMaxElementWidget_0(this$static.royalRollContainerPanel);
  $init_23(this$static.royalRollTweenMax);
  this$static.royalRollTweenMaxManager = new TweenMaxGenericSequenceManager_0(this$static.royalRollTweenMax);
  $add_2(this$static, this$static.royalRollContainerPanel, 0, 0);
  titleLocation = dynamicCast(locations.locationsMap.get('ITS_A_WINNER_TEXT'), Q$Location);
  this$static.popupTitleHTML = new CentredHTML_0;
  $setStyleName_1(this$static.popupTitleHTML, 'itsAwinnerPopupTitle');
  $setPosition_1(this$static.popupTitleHTML, $reverseRelativeTo(titleLocation, this$static.royalRollLocations[4]));
  $setWordWrap(this$static.popupTitleHTML, false);
  $add_2(this$static.royalRollContainerPanel, this$static.popupTitleHTML, 0, 0);
  winAmountLocation = dynamicCast(locations.locationsMap.get('ITS_A_WINNER_AMOUNT'), Q$Location);
  this$static.textAmount = new CentredHTML_1('');
  $setStyleName_1(this$static.textAmount, 'itsAwinnerPopupAmount');
  $setPosition_1(this$static.textAmount, $reverseRelativeTo(winAmountLocation, this$static.royalRollLocations[4]));
  this$static.textAmount.shouldResizeText = false;
  $setWordWrap(this$static.textAmount, false);
  $add_2(this$static.royalRollContainerPanel, this$static.textAmount, 0, 0);
  trumpetsAnim = initValues(_3Lwebgl_client_nf_animator_AnimationBank_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$AnimationBank, [dynamicCast(resources.get(TRUMPET.path), Q$AnimationBank), dynamicCast(resources.get(TRUMPET_rotate.path), Q$AnimationBank)]);
  this$static.trumpetsAnims = initDim(_3Lwebgl_client_nf_gamesFramework_gameItem_item_AnimGameItem_2_classLit, makeCastMap([Q$Serializable, Q$Object_$1]), Q$AnimGameItem, 2, 0);
  for (i = 0; i < 2; ++i) {
    this$static.trumpetsAnims[i] = new AnimGameItem_0(i, new AnimationController_1(trumpetsAnim[i]), false);
    $setLocation_3(this$static.trumpetsAnims[i], dynamicCast(locations.locationsMap.get('ITS_A_WINNER_TRUMPET_' + (i + 1)), Q$Location));
  }
  this$static.darknessTween = new TweenMaxElementImage_0(dynamicCast(resources.get(DARK_BG.path), Q$TransformableImage));
  $init_23(this$static.darknessTween);
  tweenProperties = new ArrayList_0;
  $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , OPACITY), '0'));
  $add_10(tweenProperties, new TweenProperty_0(Y, valueOf_0(0)));
  $add_10(tweenProperties, new TweenProperty_0(X, valueOf_0(0)));
  $startGenericTween(this$static.darknessTween, null, tweenProperties, 0, 0, false);
  this$static.autoDismissTimerFadeOUt = new QueenOfDiamondsItsAWinnerPopup$1_0(this$static, messagesListener);
  this$static.autoCompletlyDismissTimer = new QueenOfDiamondsItsAWinnerPopup$2_0(this$static);
  $reset_13(this$static);
}

function $preRender_6(this$static){
  var anim, anim$array, anim$index, anim$max;
  if (this$static.isVisible) {
    for (anim$array = this$static.trumpetsAnims , anim$index = 0 , anim$max = anim$array.length; anim$index < anim$max; ++anim$index) {
      anim = anim$array[anim$index];
      $preRender_7(anim);
    }
  }
}

function $render_7(this$static, g){
  var anim, anim$array, anim$index, anim$max;
  if (this$static.isVisible) {
    $renderElement(this$static.darknessTween, g);
    for (anim$array = this$static.trumpetsAnims , anim$index = 0 , anim$max = anim$array.length; anim$index < anim$max; ++anim$index) {
      anim = anim$array[anim$index];
      $render_9(anim, g);
    }
  }
}

function $reset_13(this$static){
  var tweenProperties;
  tweenProperties = new ArrayList_0;
  $add_10(tweenProperties, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , OPACITY), '1'));
  $startGenericTween(this$static.stickTweenMax, null, tweenProperties, 0, 0, false);
  $startGenericTween(this$static.royalRollTweenMax, null, tweenProperties, 0, 0, false);
}

function $showPopup_2(this$static, winValue, container){
  var i, pennisValue, prizeAmount;
  setVisible(this$static.element, true);
  $add_2(container, this$static, 0, 0);
  $startDarkness_0(this$static, true);
  for (i = 0; i < 2; ++i) {
    this$static.trumpetsAnims[i].isVisible = true;
    $triggerItemAction(this$static.trumpetsAnims[i], 'Trumpet');
  }
  pennisValue = dollarstopennies('' + winValue);
  prizeAmount = appendCurrencySymbol(penniesToDollars(pennisValue));
  $setHTML_0(this$static.textAmount, prizeAmount);
  $startSequence(this$static.stickTweenMaxManager, $getStickSequence_0(this$static));
  $startSequence(this$static.royalRollTweenMaxManager, $getRollSequence_0(this$static));
  $schedule(this$static.autoDismissTimerFadeOUt, 4000);
  this$static.isVisible = true;
  $reset_13(this$static);
}

function $startDarkness_0(this$static, shouldShow){
  var opacity, tweenPropertiesDarkness;
  opacity = shouldShow?'1':'0';
  tweenPropertiesDarkness = new ArrayList_0;
  $add_10(tweenPropertiesDarkness, new TweenProperty_0(($clinit_TweenProperty$TWEEN_POPERTY_TYPE() , OPACITY), opacity));
  $startGenericTween(this$static.darknessTween, null, tweenPropertiesDarkness, 0.3, 0, false);
}

function QueenOfDiamondsItsAWinnerPopup_0(){
  $clinit_QueenOfDiamondsItsAWinnerPopup();
  AbsoluteNeoPanel_0.call(this);
}

function QueenOfDiamondsItsAWinnerPopup(){
}

_ = QueenOfDiamondsItsAWinnerPopup_0.prototype = QueenOfDiamondsItsAWinnerPopup.prototype = new AbsoluteNeoPanel;
_.getClass$ = function getClass_617(){
  return Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsItsAWinnerPopup_2_classLit;
}
;
_.isVisible_0 = function isVisible_3(){
  return this.isVisible;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AbsolutePanel, Q$ComplexPanel, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Renderable, Q$AbsoluteNeoPanel]);
_.autoCompletlyDismissTimer = null;
_.autoDismissTimerFadeOUt = null;
_.darknessTween = null;
_.isVisible = false;
_.messagesListener = null;
_.popupTitleHTML = null;
_.royalRollContainerPanel = null;
_.royalRollLocations = null;
_.royalRollTweenMax = null;
_.royalRollTweenMaxManager = null;
_.stickLocations = null;
_.stickTweenMax = null;
_.stickTweenMaxManager = null;
_.textAmount = null;
_.trumpetsAnims = null;
var ROLL_DELAIES_0, ROLL_DURATIONS_0, ROLL_SCALE_Y_0, STICK_DELAIES_0, STICK_DURATIONS_0;
function QueenOfDiamondsItsAWinnerPopup$1_0(this$0, val$messagesListener){
  $clinit_Timer();
  this.this$0 = this$0;
  this.val$messagesListener = val$messagesListener;
}

function QueenOfDiamondsItsAWinnerPopup$1(){
}

_ = QueenOfDiamondsItsAWinnerPopup$1_0.prototype = QueenOfDiamondsItsAWinnerPopup$1.prototype = new Timer;
_.getClass$ = function getClass_618(){
  return Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsItsAWinnerPopup$1_2_classLit;
}
;
_.run = function run_38(){
  $hidePopupWithFadeOut_1(this.this$0);
  this.val$messagesListener.this$0.gamePanel.setLegendStyle(($clinit_Boolean() , $clinit_Boolean() , TRUE_0));
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
_.val$messagesListener = null;
function QueenOfDiamondsItsAWinnerPopup$2_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function QueenOfDiamondsItsAWinnerPopup$2(){
}

_ = QueenOfDiamondsItsAWinnerPopup$2_0.prototype = QueenOfDiamondsItsAWinnerPopup$2.prototype = new Timer;
_.getClass$ = function getClass_619(){
  return Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsItsAWinnerPopup$2_2_classLit;
}
;
_.run = function run_39(){
  $hide_5(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
function $setListener_1(this$static, listener){
  this$static.listener = listener;
}

function AbstractSplashScreen(){
}

_ = AbstractSplashScreen.prototype = new AbsoluteNeoPanel;
_.getClass$ = function getClass_620(){
  return Lwebgl_client_nf_ui_AbstractSplashScreen_AbstractSplashScreen_2_classLit;
}
;
_.onAttach = function onAttach_5(){
  var checkboxLocation;
  $onAttach(this);
  if (this.checkbox) {
    checkboxLocation = $getLocation_0(this.locations, 'SPLASH_DONT_SHOW_MARKER');
    $onAttach_1(this.checkbox, this, checkboxLocation);
  }
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AbsolutePanel, Q$ComplexPanel, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$AbsoluteNeoPanel]);
_.checkbox = null;
_.continueButton = null;
_.listener = null;
_.locations = null;
_.resources = null;
function $hide_6(this$static){
  $addClassName(this$static.element, 'splashFadeOutAnimation');
  !!this$static.listener && $onSplashScreenHide(this$static.listener);
  getSoundManager().play_2(($clinit_Game431() , SOUND_FILE_URL), 'Continue', 38);
}

function $render_8(this$static){
  var context;
  context = this$static.splashCanvas.element.getContext('2d');
  $drawImage_1(this$static.splashBackground, context, 0, 0);
}

function QueenOfDiamondsSplash_0(locations, resources){
  var buttonImg, buttonLocation, checkboxLocation, checkedImage, donotShowAgain;
  AbsoluteNeoPanel_0.call(this);
  this.locations = locations;
  this.resources = resources;
  this.splashBackground = dynamicCast(this.resources.get(($clinit_QueenOfDiamondsResources() , SPLASH).path), Q$TransformableImage);
  $setWidth(this, '' + $getWidth(this.splashBackground));
  $setHeight(this, '' + $getHeight(this.splashBackground));
  this.splashCanvas = createIfSupported();
  $setCoordinateSpaceWidth(this.splashCanvas, $getWidth(this.splashBackground));
  $setCoordinateSpaceHeight(this.splashCanvas, $getHeight(this.splashBackground));
  $add_2(this, this.splashCanvas, 0, 0);
  $setSize(this, $getWidth(this.splashBackground) + 'px', $getHeight(this.splashBackground) + 'px');
  this.element.style['zIndex'] = '5000';
  buttonLocation = $getLocation_0(this.locations, 'SPLASH_BTN');
  buttonImg = dynamicCast(this.resources.get(CONTINUE_BTN.path), Q$TransformableImage);
  this.continueButton = new MenuCommonButton_0('splash-continue-button lobby-btn', '', buttonImg.image.src, $getWidth(buttonImg) >> 1, $getHeight(buttonImg) >> 1);
  $setSize(this.continueButton, buttonLocation.width_0 + 'px', buttonLocation.height_0 + 'px');
  $addClickHandler_0(this.continueButton, new QueenOfDiamondsSplash$1_0(this));
  $add_15(this, this.continueButton, buttonLocation);
  checkedImage = dynamicCast(this.resources.get(DONT_SHOW_MARKER.path), Q$TransformableImage);
  this.checkbox = new CheckBoxButton_0('about:blank', checkedImage.image.src, $getWidth(checkedImage), $getHeight(checkedImage), null);
  checkboxLocation = $getLocation_0(this.locations, 'SPLASH_DONT_SHOW_MARKER');
  $addToPanel(this.checkbox, this, checkboxLocation);
  donotShowAgain = new CentredHTML_0;
  donotShowAgain.isOnlyYcentered = true;
  donotShowAgain.element['className'] = 'SplashDoNotShowAgain';
  $centre(donotShowAgain);
  donotShowAgain.element.style['zIndex'] = '70';
  $setPosition_1(donotShowAgain, $getLocation_0(this.locations, 'SPLASH_DONT_SHOW_TEXT'));
  $setText_7(donotShowAgain, get_9('SPECIFIC_GAME.QUEEN_OF_DIAMONDS_DO_NOT_SHOW_AGAIN'));
  $addDomHandler(donotShowAgain, new QueenOfDiamondsSplash$2_0(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $add_2(this, donotShowAgain, 0, 0);
}

function QueenOfDiamondsSplash(){
}

_ = QueenOfDiamondsSplash_0.prototype = QueenOfDiamondsSplash.prototype = new AbstractSplashScreen;
_.getClass$ = function getClass_621(){
  return Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsSplash_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$AbsolutePanel, Q$ComplexPanel, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget, Q$Renderable, Q$AbsoluteNeoPanel]);
_.splashBackground = null;
_.splashCanvas = null;
function QueenOfDiamondsSplash$1_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsSplash$1(){
}

_ = QueenOfDiamondsSplash$1_0.prototype = QueenOfDiamondsSplash$1.prototype = new Object_0;
_.getClass$ = function getClass_622(){
  return Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsSplash$1_2_classLit;
}
;
_.onClick = function onClick_22(event_0){
  $setEnabled_4(this.this$0.continueButton, false);
  $hide_6(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function QueenOfDiamondsSplash$2_0(this$0){
  this.this$0 = this$0;
}

function QueenOfDiamondsSplash$2(){
}

_ = QueenOfDiamondsSplash$2_0.prototype = QueenOfDiamondsSplash$2.prototype = new Object_0;
_.getClass$ = function getClass_623(){
  return Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsSplash$2_2_classLit;
}
;
_.onClick = function onClick_23(event_0){
  $onClick(this.this$0.checkbox);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function $setBonusPaytable(this$static, bonusPaytable){
  this$static.bonusPaytable = bonusPaytable;
}

function $setPrizeAmount(this$static, prizeAmount){
  this$static.prizeAmount = prizeAmount;
}

function $setRevealedItems(this$static, revealedItems){
  this$static.revealedItems = revealedItems;
}

function $setTicketCost(this$static, ticketCost){
  this$static.ticketCost = ticketCost;
}

function QueenOfDiamondsJokerBonusDO_0(){
}

function QueenOfDiamondsJokerBonusDO(){
}

_ = QueenOfDiamondsJokerBonusDO_0.prototype = QueenOfDiamondsJokerBonusDO.prototype = new Object_0;
_.getClass$ = function getClass_624(){
  return Lwebgl_client_nf_games_g431_queenOfDiamondsDO_QueenOfDiamondsJokerBonusDO_2_classLit;
}
;
_.bonusPaytable = null;
_.prizeAmount = 0;
_.revealedItems = null;
_.ticketCost = 0;
function QueenOfDiamondsJokerBonusStepDO_0(bonusItemID, paytableIndex, numOfLives){
  this.bonusItemID = bonusItemID;
  this.paytableIndex = paytableIndex;
  this.numOfLives = numOfLives;
}

function QueenOfDiamondsJokerBonusStepDO(){
}

_ = QueenOfDiamondsJokerBonusStepDO_0.prototype = QueenOfDiamondsJokerBonusStepDO.prototype = new Object_0;
_.getClass$ = function getClass_625(){
  return Lwebgl_client_nf_games_g431_queenOfDiamondsDO_QueenOfDiamondsJokerBonusStepDO_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$QueenOfDiamondsJokerBonusStepDO]);
_.bonusItemID = null;
_.numOfLives = 0;
_.paytableIndex = 0;
function QueenOfDiamondsMainGameSymbolDO_0(symbolID, symbolType, symbolSubType, isWin, finalPrize){
  this.symbolID = symbolID;
  this.symbolType = symbolType;
  this.isWin = isWin;
  this.finalPrize = finalPrize;
  this.symbolSubType = symbolSubType;
}

function QueenOfDiamondsMainGameSymbolDO_1(symbolID, symbolType, symbolSubType, isWin){
  this.symbolID = symbolID;
  this.symbolType = symbolType;
  this.isWin = isWin;
  this.symbolSubType = symbolSubType;
}

function QueenOfDiamondsMainGameSymbolDO(){
}

_ = QueenOfDiamondsMainGameSymbolDO_1.prototype = QueenOfDiamondsMainGameSymbolDO_0.prototype = QueenOfDiamondsMainGameSymbolDO.prototype = new Object_0;
_.getClass$ = function getClass_626(){
  return Lwebgl_client_nf_games_g431_queenOfDiamondsDO_QueenOfDiamondsMainGameSymbolDO_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$QueenOfDiamondsMainGameSymbolDO]);
_.finalPrize = 0;
_.isWin = false;
_.symbolID = 0;
_.symbolSubType = null;
_.symbolType = null;
function QueenOfDiamondsPrizeType_0(prizeAmount, prizeFactor){
  this.prizeAmount = prizeAmount;
  this.prizeFactor = prizeFactor;
}

function QueenOfDiamondsPrizeType(){
}

_ = QueenOfDiamondsPrizeType_0.prototype = QueenOfDiamondsPrizeType.prototype = new Object_0;
_.getClass$ = function getClass_627(){
  return Lwebgl_client_nf_games_g431_queenOfDiamondsDO_QueenOfDiamondsPrizeType_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$QueenOfDiamondsPrizeType]);
_.prizeAmount = 0;
_.prizeFactor = 0;
function $setGameSteps(this$static, gameSteps){
  this$static.gameSteps = gameSteps;
}

function $setPrizeAmount_0(this$static, prizeAmount){
  this$static.prizeAmount = prizeAmount;
}

function $setTicketCost_0(this$static, ticketCost){
  this$static.ticketCost = ticketCost;
}

function QueenOfDiamondsWarBonusDO_0(){
}

function QueenOfDiamondsWarBonusDO(){
}

_ = QueenOfDiamondsWarBonusDO_0.prototype = QueenOfDiamondsWarBonusDO.prototype = new Object_0;
_.getClass$ = function getClass_628(){
  return Lwebgl_client_nf_games_g431_queenOfDiamondsDO_QueenOfDiamondsWarBonusDO_2_classLit;
}
;
_.gameSteps = null;
_.prizeAmount = 0;
_.ticketCost = 0;
function QueenOfDiamondsWarBonusStepDO_0(isWin, queenCards, playerCards, remainingMiniGames, stepPrize, accumulatedPrize){
  this.isWin = isWin;
  this.queenCards = queenCards;
  this.playerCards = playerCards;
  this.remainingMiniGames = remainingMiniGames;
  this.stepPrize = stepPrize;
  this.accumulatedPrize = accumulatedPrize;
}

function QueenOfDiamondsWarBonusStepDO(){
}

_ = QueenOfDiamondsWarBonusStepDO_0.prototype = QueenOfDiamondsWarBonusStepDO.prototype = new Object_0;
_.getClass$ = function getClass_629(){
  return Lwebgl_client_nf_games_g431_queenOfDiamondsDO_QueenOfDiamondsWarBonusStepDO_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$QueenOfDiamondsWarBonusStepDO]);
_.accumulatedPrize = null;
_.isWin = false;
_.playerCards = null;
_.queenCards = null;
_.remainingMiniGames = 0;
_.stepPrize = null;
function $onUpdate_0(this$static, progress){
  var positionX, positionY;
  positionX = this$static.startX + progress * (this$static.finalX - this$static.startX);
  positionY = this$static.startY + progress * (this$static.finalY - this$static.startY);
  this$static.animWidget.element.style['left'] = positionX + ($clinit_Style$Unit() , 'px');
  this$static.animWidget.element.style['top'] = positionY + 'px';
}

function ViewMoveAnimation_0(widget){
  Animation_0.call(this);
  this.animWidget = widget;
}

function ViewMoveAnimation(){
}

_ = ViewMoveAnimation_0.prototype = ViewMoveAnimation.prototype = new Animation;
_.getClass$ = function getClass_632(){
  return Lwebgl_client_nf_gamesFramework_Util_animation_ViewMoveAnimation_2_classLit;
}
;
_.moveTo_0 = function moveTo_0(x, y, milliseconds){
  this.finalX = x;
  this.finalY = y;
  this.startX = this.animWidget.element.offsetLeft || 0;
  this.startY = this.animWidget.element.offsetTop || 0;
  $run(this, 300, currentTimeMillis());
}
;
_.onComplete = function onComplete_1(){
  $onUpdate_0(this, (1 + Math.cos(6.283185307179586)) / 2);
  this.animWidget.element.style['left'] = this.finalX + ($clinit_Style$Unit() , 'px');
  this.animWidget.element.style['top'] = this.finalY + 'px';
}
;
_.onUpdate = function onUpdate_0(progress){
  $onUpdate_0(this, progress);
}
;
_.animWidget = null;
_.finalX = 0;
_.finalY = 0;
_.startX = 0;
_.startY = 0;
function AbstractGame$10_0(this$0){
  this.this$0 = this$0;
}

function AbstractGame$10(){
}

_ = AbstractGame$10_0.prototype = AbstractGame$10.prototype = new Object_0;
_.execute_3 = function execute_43(params){
  $handleRoundEndedCompleteInterrupt(this.this$0);
}
;
_.getClass$ = function getClass_634(){
  return Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$10_2_classLit;
}
;
_.this$0 = null;
function AbstractGame$11_0(this$0){
  this.this$0 = this$0;
}

function AbstractGame$11(){
}

_ = AbstractGame$11_0.prototype = AbstractGame$11.prototype = new Object_0;
_.execute_3 = function execute_44(params){
  $handleRoundStartedCompleteInterrupt(this.this$0);
}
;
_.getClass$ = function getClass_635(){
  return Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$11_2_classLit;
}
;
_.this$0 = null;
function AbstractGame$12_0(this$0){
  this.this$0 = this$0;
}

function AbstractGame$12(){
}

_ = AbstractGame$12_0.prototype = AbstractGame$12.prototype = new Object_0;
_.execute_3 = function execute_45(params){
  $gameLoadCompletedHandler_0(this.this$0.gameContainer);
  $clinit_RootPanel();
  $setStyleName_0(get(), 'Game-BG');
  this.this$0.gameState = 1;
}
;
_.getClass$ = function getClass_636(){
  return Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$12_2_classLit;
}
;
_.this$0 = null;
function AbstractGame$3_0(this$0){
  this.this$0 = this$0;
}

function AbstractGame$3(){
}

_ = AbstractGame$3_0.prototype = AbstractGame$3.prototype = new Object_0;
_.execute_3 = function execute_46(params){
  this.this$0.isInAutoPlay = false;
}
;
_.getClass$ = function getClass_637(){
  return Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$3_2_classLit;
}
;
_.this$0 = null;
function AbstractGame$4_0(this$0){
  this.this$0 = this$0;
}

function AbstractGame$4(){
}

_ = AbstractGame$4_0.prototype = AbstractGame$4.prototype = new Object_0;
_.execute_3 = function execute_47(params){
  $handleAutoPlayStartedInterrupt(this.this$0);
}
;
_.getClass$ = function getClass_638(){
  return Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$4_2_classLit;
}
;
_.this$0 = null;
function AbstractGame$5_0(){
}

function AbstractGame$5(){
}

_ = AbstractGame$5_0.prototype = AbstractGame$5.prototype = new Object_0;
_.execute_3 = function execute_48(params){
}
;
_.getClass$ = function getClass_639(){
  return Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$5_2_classLit;
}
;
function AbstractGame$6_0(this$0){
  this.this$0 = this$0;
}

function AbstractGame$6(){
}

_ = AbstractGame$6_0.prototype = AbstractGame$6.prototype = new Object_0;
_.execute_3 = function execute_49(params){
  $handleAutoPlayToggleCloseInterrupt(this.this$0);
}
;
_.getClass$ = function getClass_640(){
  return Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$6_2_classLit;
}
;
_.this$0 = null;
function AbstractGame$7_0(this$0){
  this.this$0 = this$0;
}

function AbstractGame$7(){
}

_ = AbstractGame$7_0.prototype = AbstractGame$7.prototype = new Object_0;
_.execute_3 = function execute_50(params){
  var $e0, $e1, betDo, btr, e;
  try {
    $saveBetAndLineValuesToStorage(this.this$0);
    $handleBetMessageReceivedInterrupt(this.this$0, dynamicCast(params[0], Q$BETResultDO));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Throwable)) {
      e = $e0;
      try {
        if (params[0] == null) {
          btr = 'params[0] is null';
        }
         else if (instanceOf(params[0], Q$BETResultDO)) {
          betDo = dynamicCast(params[0], Q$BETResultDO);
          if (!betDo) {
            btr = 'betDo is null';
          }
           else {
            btr = betDo.btr_0;
            btr == null && (btr = 'btr is null');
          }
        }
         else {
          btr = 'not instance of BETResultDO';
        }
      }
       catch ($e1) {
        $e1 = caught_0($e1);
        if (!instanceOf($e1, Q$Exception))
          throw $e1;
      }
      fatal("Error parsing the bet's btr: " + btr, 100003, e);
      throw e;
    }
     else 
      throw $e0;
  }
}
;
_.getClass$ = function getClass_641(){
  return Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$7_2_classLit;
}
;
_.this$0 = null;
function AbstractGame$8_0(){
}

function AbstractGame$8(){
}

_ = AbstractGame$8_0.prototype = AbstractGame$8.prototype = new Object_0;
_.execute_3 = function execute_51(params){
}
;
_.getClass$ = function getClass_642(){
  return Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$8_2_classLit;
}
;
function AbstractGame$9_0(this$0){
  this.this$0 = this$0;
}

function AbstractGame$9(){
}

_ = AbstractGame$9_0.prototype = AbstractGame$9.prototype = new Object_0;
_.execute_3 = function execute_52(params){
  $handleGameStartedCompleteInterrupt(this.this$0);
}
;
_.getClass$ = function getClass_643(){
  return Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$9_2_classLit;
}
;
_.this$0 = null;
function $execute_10(this$static){
  var $e0, e;
  try {
    this$static.execCommand.execute_3(this$static.params);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Throwable)) {
      e = $e0;
      $clinit_NewApplication();
      error_0('There was an uncaught exception', 120006, e);
    }
     else 
      throw $e0;
  }
  this$static.params = null;
  this$static.execCommand = null;
}

function GameInterrupt_0(execCommand, params){
  this.execCommand = execCommand;
  this.params = params;
}

function GameInterrupt(){
}

_ = GameInterrupt_0.prototype = GameInterrupt.prototype = new Object_0;
_.execute_1 = function execute_53(){
  $execute_10(this);
}
;
_.getClass$ = function getClass_644(){
  return Lwebgl_client_nf_gamesFramework_abstractGame_interrupts_GameInterrupt_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Command, Q$GameInterrupt]);
_.execCommand = null;
_.params = null;
function $add_16(this$static, interrupt){
  $add_13(this$static.queue, interrupt);
}

function $handleInterrupts(this$static){
  var $e0, curInterrupt, e;
  while (this$static.queue.size_0 > 0) {
    this$static.isInExecuteCycle || (this$static.isInExecuteCycle = true);
    curInterrupt = dynamicCast($poll(this$static.queue), Q$GameInterrupt);
    try {
      $execute_10(curInterrupt);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, Q$Exception)) {
        e = $e0;
        error_0('Error while handling interrupt', 120008, e);
        throw e;
      }
       else 
        throw $e0;
    }
  }
  this$static.isInExecuteCycle = false;
}

function GameInterruptQueue_0(){
  this.queue = new LinkedList_0;
  this.isInExecuteCycle = false;
}

function GameInterruptQueue(){
}

_ = GameInterruptQueue_0.prototype = GameInterruptQueue.prototype = new Object_0;
_.getClass$ = function getClass_645(){
  return Lwebgl_client_nf_gamesFramework_abstractGame_interrupts_GameInterruptQueue_2_classLit;
}
;
_.isInExecuteCycle = false;
_.queue = null;
function $addFrameManagerListener(this$static, frameManagerListener){
  $add_13(this$static.listeners, frameManagerListener);
}

function $init_26(this$static){
  this$static.frameTime = 40;
  this$static.sumUpdateFrameTime = P0_longLit;
}

function $removeFrameManagerListener(this$static, frameManagerListener){
  $remove_0(this$static.listeners, frameManagerListener);
}

function $requestAnimationFrame(instance){
  var frameFunc = function(){
    instance.updateFrame();
  }
  ;
  $wnd.requestAnimationFrame(frameFunc);
}

function $setAnimationTimer(this$static){
  if (envType_0 == ($clinit_Constants$CommonGamesConstants$ENVIRONMENT_TYPE() , WEB)) {
    $requestAnimationFrame(this$static);
  }
   else {
    this$static.animationTimer = new FrameManager$1_0(this$static);
    $schedule_0(this$static.animationTimer, 5);
  }
}

function $setSUMUpdateFrameTime(this$static, timestamp){
  if (lt(timestamp, P1f4_longLit)) {
    this$static.sumUpdateFrameTime = add_1(this$static.sumUpdateFrameTime, timestamp);
    this$static.counterUpdateFrameTime = add_1(this$static.counterUpdateFrameTime, P1_longLit);
  }
}

function $start_0(this$static){
  this$static.isRunning = true;
  this$static.startFrameTime = fromDouble(currentTimeMillis0());
  $setAnimationTimer(this$static);
}

function $updateFrame(this$static){
  var currentTime, frameDelta, i, oldFrameTime, sleepTime, timestamp;
  oldFrameTime = this$static.startFrameTime;
  this$static.startFrameTime = fromDouble(currentTimeMillis0());
  timestamp = sub(this$static.startFrameTime, oldFrameTime);
  $setSUMUpdateFrameTime(this$static, timestamp);
  if (this$static.isRunning) {
    for (i = 0; i < this$static.listeners.size_0; ++i) {
      dynamicCast($get_4(this$static.listeners, i), Q$FrameManagerListener).preRender();
    }
    for (i = 0; i < this$static.listeners.size_0; ++i) {
      dynamicCast($get_4(this$static.listeners, i), Q$FrameManagerListener).render_0();
    }
    for (i = 0; i < this$static.listeners.size_0; ++i) {
      dynamicCast($get_4(this$static.listeners, i), Q$FrameManagerListener).updateInterrupts();
    }
    currentTime = fromDouble(currentTimeMillis0());
    frameDelta = sub(currentTime, this$static.startFrameTime);
    sleepTime = toInt(sub(fromInt(this$static.frameTime), frameDelta));
    sleepTime = 5 > sleepTime?5:sleepTime;
    envType_0 == ($clinit_Constants$CommonGamesConstants$ENVIRONMENT_TYPE() , WEB)?$requestAnimationFrame(this$static):$schedule_0(this$static.animationTimer, sleepTime);
  }
}

_ = FrameManager.prototype;
_.updateFrame = function updateFrame(){
  $updateFrame(this);
}
;
function FrameManager$1_0(this$0){
  this.this$0 = this$0;
}

function FrameManager$1(){
}

_ = FrameManager$1_0.prototype = FrameManager$1.prototype = new OPTimer;
_.getClass$ = function getClass_665(){
  return Lwebgl_client_nf_gamesFramework_frameManager_FrameManager$1_2_classLit;
}
;
_.this$0 = null;
function AbstractInteractiveGameItem$1_0(this$0){
  this.this$0 = this$0;
}

function AbstractInteractiveGameItem$1(){
}

_ = AbstractInteractiveGameItem$1_0.prototype = AbstractInteractiveGameItem$1.prototype = new Object_0;
_.getClass$ = function getClass_666(){
  return Lwebgl_client_nf_gamesFramework_gameItem_item_AbstractInteractiveGameItem$1_2_classLit;
}
;
_.onClick = function onClick_35(event_0){
  this.this$0.isClickable && (this.this$0.animClickListener?$handleClickEvent(this.this$0):undefined);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function $playAnim(this$static, animationStage){
  if (!this$static.animation) {
    return;
  }
  $doAnim(this$static.animation, animationStage);
  $resetAnim(this$static.animation);
}

function $preRender_7(this$static){
  if (this$static.isActive && this$static.isVisible && !!this$static.animation) {
    if ($update_0(this$static.animation, false)) {
      this$static.isActive = false;
      !$equals(this$static.animation.animName, this$static.idleAnimStateName) && !!this$static.animFinishedListener && this$static.animFinishedListener.handleGameItemFinished(this$static);
    }
     else if (!this$static.animation.animBank && this$static.animation.dummyAnimTriggered) {
      this$static.animation.dummyAnimTriggered = false;
      !$equals(this$static.animation.animName, this$static.idleAnimStateName) && !!this$static.animFinishedListener && this$static.animFinishedListener.handleGameItemFinished(this$static);
    }
  }
}

function $render_9(this$static, g){
  var animFrameHeight, animFrameWidth, bank, centerX, centerY, loc;
  if (this$static.isVisible) {
    if (this$static.animation) {
      bank = this$static.animation.animBank;
      if (bank) {
        animFrameWidth = bank.sourceFrameWidth;
        animFrameHeight = bank.sourceFrameHeight;
        loc = this$static.location_0;
        centerX = loc.x_0 - (animFrameWidth >> 1);
        centerY = loc.y_0 - (animFrameHeight >> 1);
        $paint_1(this$static.animation, g, centerX, centerY);
      }
    }
  }
}

function $setAnimFinishedListener_0(this$static, listener){
  this$static.animFinishedListener = listener;
}

function $setIsClickable_1(this$static){
  this$static.isClickable = false;
  if (this$static.isClickable) {
    !this$static.clickHandler && (this$static.clickHandler = new AnimGameItem$1_0(this$static));
    if (!this$static.touchableDiv) {
      this$static.touchableDiv = createNewEventsHandlerDiv();
      setMouseHoverListener_0(this$static.touchableDiv, this$static);
      $addDomHandler(this$static.touchableDiv, this$static.clickHandler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
      this$static.tooltipText != null && $setTooltip_0(this$static, this$static.tooltipText);
    }
  }
  if (this$static.touchableDiv) {
    $setEnabled(this$static.touchableDiv, false);
    $setVisible(this$static.touchableDiv, false);
  }
}

function $setLocation_3(this$static, location_0){
  if (!location_0) {
    if (!this$static.animation.animBank) {
      return;
    }
     else {
      throw new IllegalArgumentException_0;
    }
  }
  this$static.location_0 = location_0;
}

function $setTooltip_0(this$static, tooltipText){
  this$static.tooltipText = tooltipText;
  !!this$static.touchableDiv && setTooltip(this$static.touchableDiv, tooltipText);
}

function $triggerItemAction(this$static, animStage){
  $setIsClickable_1(this$static);
  this$static.isActive = true;
  $playAnim(this$static, animStage);
}

function AnimGameItem_0(itemID, animation, startAsVisible){
  this.itemID = itemID;
  this.isVisible = startAsVisible;
  this.isClickable = false;
  this.animation = animation;
  this.isActive = true;
  this.idleAnimStateName = 'idle';
}

function AnimGameItem(){
}

_ = AnimGameItem_0.prototype = AnimGameItem.prototype = new AbstractGameItem;
_.getClass$ = function getClass_667(){
  return Lwebgl_client_nf_gamesFramework_gameItem_item_AnimGameItem_2_classLit;
}
;
_.onMouseHoverIn = function onMouseHoverIn_1(widget){
}
;
_.onMouseHoverOut = function onMouseHoverOut_1(widget){
}
;
_.castableTypeMap$ = makeCastMap([Q$Renderable, Q$AbstractGameItem, Q$AnimGameItem, Q$HasReset, Q$IHoverDiv, Q$IMouseHoverListener]);
_.animFinishedListener = null;
_.animation = null;
_.clickHandler = null;
_.idleAnimStateName = null;
_.isActive = false;
_.isClickable = false;
_.tooltipText = null;
_.touchableDiv = null;
function AnimGameItem$1_0(this$0){
  this.this$0 = this$0;
}

function AnimGameItem$1(){
}

_ = AnimGameItem$1_0.prototype = AnimGameItem$1.prototype = new Object_0;
_.getClass$ = function getClass_668(){
  return Lwebgl_client_nf_gamesFramework_gameItem_item_AnimGameItem$1_2_classLit;
}
;
_.onClick = function onClick_36(event_0){
  this.this$0.isClickable && $triggerItemAction(this.this$0, 'stage1');
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function $render_10(this$static, g){
  var textWidth;
  if (this$static.text_0 != null && this$static.text_0.length > 0 && this$static.isVisible) {
    $setFont(g, $toString_4(this$static.fontDefinition));
    $setFillStyleWeb(g, this$static.fontDefinition.fontColor.colorStr);
    this$static.shouldSetAdjFontSize?$setFont(g, this$static.fontDefinition.fontWeight + ' ' + this$static.fontSize_0 + 'px ' + this$static.fontDefinition.fontName):(this$static.fontSize_0 = this$static.fontDefinition.fontSize_0);
    if (this$static.maxTextWidth > 0) {
      textWidth = round_int($measureText(g, this$static.text_0).width);
      while (textWidth > this$static.maxTextWidth && this$static.fontSize_0 > 1) {
        --this$static.fontSize_0;
        $setFont(g, this$static.fontDefinition.fontWeight + ' ' + this$static.fontSize_0 + 'px ' + this$static.fontDefinition.fontName);
        textWidth = round_int($measureText(g, this$static.text_0).width);
      }
    }
    $setTextBaseline(g, ($clinit_Context2d$TextBaseline() , MIDDLE).value_0);
    $setTextAlign(g, this$static.fontDefinition.horizontalAlignment.value_0);
    g.save();
    if (this$static.hasShadow) {
      $setShadowColor(g, null.nullMethod());
      $setShadowOffsetX(g, this$static.shadowOffsetX_0);
      $setShadowOffsetY(g, this$static.shadowOffsetY_0);
      $setShadowBlur(g, this$static.shadowBlur_0);
    }
     else {
      g.shadowOffsetX = 0;
      g.shadowOffsetY = 0;
      g.shadowBlur = 0;
    }
    if (this$static.hasStroke) {
      $setFont(g, this$static.fontDefinition.fontWeight + ' ' + this$static.fontSize_0 + 'px ' + this$static.fontDefinition.fontName);
      $setFillStyleWeb(g, null.nullMethod());
      $fillText(g, this$static.text_0, this$static.location_0.x_0 + this$static.strokeOffset, this$static.location_0.y_0 + this$static.strokeOffset);
      $fillText(g, this$static.text_0, this$static.location_0.x_0 + this$static.strokeOffset, this$static.location_0.y_0 - this$static.strokeOffset);
      $fillText(g, this$static.text_0, this$static.location_0.x_0 - this$static.strokeOffset, this$static.location_0.y_0 + this$static.strokeOffset);
      $fillText(g, this$static.text_0, this$static.location_0.x_0 - this$static.strokeOffset, this$static.location_0.y_0 - this$static.strokeOffset);
    }
    $setFillStyleWeb(g, this$static.fontDefinition.fontColor.colorStr);
    $setFont(g, this$static.fontDefinition.fontWeight + ' ' + this$static.fontSize_0 + 'px  ' + this$static.fontDefinition.fontName);
    $fillText(g, this$static.text_0, this$static.location_0.x_0, this$static.location_0.y_0);
    $fillText(g, this$static.text_0, this$static.location_0.x_0, this$static.location_0.y_0);
    g.restore();
  }
}

function $setFontDefinition(this$static, fontDefinition){
  this$static.fontDefinition = fontDefinition;
}

function $setText_3(this$static, text){
  this$static.text_0 = text;
}

function TextGameItem_0(fontDefinition, maxTextWidth){
  this.itemID = 0;
  this.isVisible = true;
  this.fontDefinition = fontDefinition;
  this.maxTextWidth = maxTextWidth;
  this.hasShadow = false;
  this.hasStroke = false;
  this.strokeOffset = 1;
  this.shouldSetAdjFontSize = false;
}

function TextGameItem(){
}

_ = TextGameItem_0.prototype = TextGameItem.prototype = new AbstractGameItem;
_.getClass$ = function getClass_669(){
  return Lwebgl_client_nf_gamesFramework_gameItem_item_TextGameItem_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$Renderable, Q$AbstractGameItem, Q$HasReset]);
_.fontDefinition = null;
_.fontSize_0 = 0;
_.hasShadow = false;
_.hasStroke = false;
_.maxTextWidth = 0;
_.shadowBlur_0 = 0;
_.shadowOffsetX_0 = 0;
_.shadowOffsetY_0 = 0;
_.shouldSetAdjFontSize = false;
_.strokeOffset = 0;
_.text_0 = null;
function $isWaitingForWinAnimations(this$static){
  if (this$static.claimId != null || this$static.showDemoConversionPopup || this$static.showFreeRoundsConclusionPopup || this$static.showFreeRoundPartialConclusionPopup || this$static.showRealityPopup) {
    return true;
  }
  return false;
}

function $onBalanceUpdated_1(this$static, balance){
  $onBalanceUpdated(this$static.gameServices, balance);
}

function $gameEndedHandler_0(this$static){
  $gameEndedHandler(this$static, this$static.game.model.PLSData);
}

function $gameLoadComplete_0(this$static){
  if (isUsingOldLobbyMenu() && $isAutoPlayEnabled_0(this$static)) {
    this$static.autoPlayContoller.setGamePanel(this$static.game.gamePanel);
    this$static.autoPlayContoller.getView().setAutoPlayBarLocation(new Point_4(0, 0));
    this$static.autoPlayContoller.initView();
  }
  $gameLoadCompletedHandler(this$static.gameServices);
  scrollToView();
  this$static.gameMode == ($clinit_Constants$CommonGamesConstants$GAME_MODE() , GAME_MODE_HISTORY) && $schedule(new GameManager$5_0(this$static), 800);
  info_0('The loading process for game completed successfully', 180003);
}

function $gameLoadCompletedHandler_0(this$static){
  if (this$static.gameDO.gameHistory)
  ;
  else {
    if (this$static.gameDO.gameIsFinished) {
      $clinit_History();
      !!impl_1 && fire_3(impl_1);
    }
     else {
      !!this$static.autoPlayContoller && !this$static.isInAutoPlaySequence && this$static.autoPlayContoller.getView().setEnabled(false);
      isUsingOldLobbyMenu() || (this$static.menuManager.menuView.setEnalbed(false) , undefined);
      if (!this$static.gameDO.gameResumeDO) {
        $sendResumeGameCommamd(this$static.gameServices, new GameManager$4_0(this$static));
        return;
      }
    }
  }
  $gameLoadComplete_0(this$static);
}

function $gameStartedHandler(this$static){
  $schedule(this$static.roundStartedTimer, 50);
  !!this$static.autoPlayContoller && !this$static.isInAutoPlaySequence && this$static.autoPlayContoller.getView().setEnabled(false);
  isUsingOldLobbyMenu() || (this$static.menuManager.menuView.setEnalbed(false) , undefined);
  this$static.gameMode == ($clinit_Constants$CommonGamesConstants$GAME_MODE() , GAME_MODE_HISTORY) && $setLobbyBtnEnalbed(this$static.menuManager.menuView);
  $notifyGameStarted(getSoundManager());
  $onGameStart((!instance_4 && (instance_4 = new EnvironmentManager_0) , instance_4));
  $gameStartedCompletedHandler(this$static.game);
}

function $roundEndedHandler(this$static){
  var btp;
  $onRoundEnd((!instance_4 && (instance_4 = new EnvironmentManager_0) , instance_4));
  $roundEndedCompletedHandler(this$static.game);
  if (this$static.gameMode == ($clinit_Constants$CommonGamesConstants$GAME_MODE() , GAME_MODE_HISTORY)) {
    ++this$static.currentHistoryStepIndex;
    if (this$static.currentHistoryStepIndex < this$static.historyDO.steps_0.size_0) {
      $setHistoryDO(this$static.game, dynamicCast($get_5(this$static.historyDO.steps_0, this$static.currentHistoryStepIndex), Q$HistoryStepDO));
      btp = dynamicCast($get_5(this$static.historyDO.steps_0, this$static.currentHistoryStepIndex), Q$HistoryStepDO).btp_0;
      $playGame(this$static.game);
    }
  }
}

function $roundStartedHandler(this$static){
  $onRoundStart((!instance_4 && (instance_4 = new EnvironmentManager_0) , instance_4));
  $roundStartedCompletedHandler(this$static.game);
}

function $resumeCommandFinished(this$static, responseDO){
  $setGameResumeData_0(this$static.this$0.gameDO, responseDO);
  $gameLoadComplete_0(this$static.this$0);
}

function GameManager$4_0(this$0){
  this.this$0 = this$0;
}

function GameManager$4(){
}

_ = GameManager$4_0.prototype = GameManager$4.prototype = new Object_0;
_.getClass$ = function getClass_693(){
  return Lwebgl_client_nf_gamesFramework_gameManager_GameManager$4_2_classLit;
}
;
_.this$0 = null;
function GameManager$5_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function GameManager$5(){
}

_ = GameManager$5_0.prototype = GameManager$5.prototype = new Timer;
_.getClass$ = function getClass_694(){
  return Lwebgl_client_nf_gamesFramework_gameManager_GameManager$5_2_classLit;
}
;
_.run = function run_42(){
  var btp;
  $autoPlayStartedHandler(this.this$0.game);
  btp = dynamicCast($get_5(this.this$0.historyDO.steps_0, this.this$0.currentHistoryStepIndex), Q$HistoryStepDO).btp_0;
  $playGame(this.this$0.game);
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
_ = GameManager$8.prototype;
_.onSuccess = function onSuccess(){
  var clientFactory;
  clientFactory = new Game431_0;
  this.this$0.game = clientFactory;
  $initGame_0(this.this$0);
}
;
function isFireFox(){
  $clinit_Device();
  var userAgent;
  if (isDesktop()) {
    userAgent = getUserAgent().toLowerCase();
    return userAgent.indexOf('firefox') != -1;
  }
  return false;
}

function $notifyBalanceChanged(this$static, newBalance){
  var observer, observer$iterator;
  for (observer$iterator = new AbstractList$IteratorImpl_0(this$static.observers.arrayList); observer$iterator.i < observer$iterator.this$0_0.size_1();) {
    observer = dynamicCast($next_2(observer$iterator), Q$IGameDataObserver);
    observer.setBalance_0(newBalance);
  }
}

function $notifyBetChanged(this$static, newBet){
  var observer, observer$iterator;
  for (observer$iterator = new AbstractList$IteratorImpl_0(this$static.observers.arrayList); observer$iterator.i < observer$iterator.this$0_0.size_1();) {
    observer = dynamicCast($next_2(observer$iterator), Q$IGameDataObserver);
    observer.setTotalBet(newBet);
  }
}

function $notifyBetPerLineChanged(this$static, newBet){
  var observer, observer$iterator;
  for (observer$iterator = new AbstractList$IteratorImpl_0(this$static.observers.arrayList); observer$iterator.i < observer$iterator.this$0_0.size_1();) {
    observer = dynamicCast($next_2(observer$iterator), Q$IGameDataObserver);
    observer.setBetPerLine(newBet);
  }
}

function $notifyNumOfTicketChanged(this$static, newNumTicketsIndex){
  var observer, observer$iterator;
  for (observer$iterator = new AbstractList$IteratorImpl_0(this$static.observers.arrayList); observer$iterator.i < observer$iterator.this$0_0.size_1();) {
    observer = dynamicCast($next_2(observer$iterator), Q$IGameDataObserver);
    instanceOf(observer, Q$IPlatformsGameDataObserver) && dynamicCast(observer, Q$IPlatformsGameDataObserver).setNumOfTickets(newNumTicketsIndex);
  }
}

function $notifyTotalWinsChanged(this$static, newTotalWin){
  var observer, observer$iterator;
  for (observer$iterator = new AbstractList$IteratorImpl_0(this$static.observers.arrayList); observer$iterator.i < observer$iterator.this$0_0.size_1();) {
    observer = dynamicCast($next_2(observer$iterator), Q$IGameDataObserver);
    observer.setTotalWin(newTotalWin);
  }
}

function $notifyWinUpToChanged(this$static, winUpTo){
  var observer, observer$iterator;
  for (observer$iterator = new AbstractList$IteratorImpl_0(this$static.observers.arrayList); observer$iterator.i < observer$iterator.this$0_0.size_1();) {
    observer = dynamicCast($next_2(observer$iterator), Q$IGameDataObserver);
    observer.setWinUpTo(winUpTo);
  }
}

function $register(this$static, subject){
  $add_14(this$static.observers, subject);
}

function GameDataObserver_0(){
  this.observers = new Vector_0;
}

function GameDataObserver(){
}

_ = GameDataObserver_0.prototype = GameDataObserver.prototype = new Object_0;
_.getClass$ = function getClass_723(){
  return Lwebgl_client_nf_gamesFramework_observer_GameDataObserver_2_classLit;
}
;
_.observers = null;
function addAnimationResource(resources, path, scratchVisualEffectCode){
  resources.put(path, new LoadingItemAnim_1(DownloadServerGamesGameNumURL, XMLLocationsGameURL, path, scratchVisualEffectCode));
}

function addImageResource(resources, path, type, languageCode){
  resources.put(path, new LoadingItem_2(DownloadServerGamesGameNumURL, path + type, 0, languageCode, null));
}

function addImageResource_0(key, resources, path, scratchVisualEffectCode){
  resources.put(key, new LoadingItem_2(DownloadServerGamesGameNumURL, path + '.png', 0, null, scratchVisualEffectCode));
}

function addSoundResource(resources, path){
  resources.put(path, new LoadingItemSound_0(DownloadServerGamesGameNumURL, path));
}

function $calculateElementUpdate(this$static){
  var $e0, opacity, trans, translate, translateArr;
  trans = this$static.element.style['transform'];
  trans == null && (trans = this$static.element.style['webkitTransform']);
  trans == null && (trans = this$static.element.style['mozTransform']);
  trans == null && (trans = this$static.element.style['msTransform']);
  trans == null && (trans = this$static.element.style['oTransform']);
  trans != null && $setTransformData(this$static, trans);
  translate = this$static.element.style['transformOrigin'];
  translate == null && (translate = this$static.element.style['webkitTransformOrigin']);
  translate == null && (translate = this$static.element.style['mozTransformOrigin']);
  translate == null && (translate = this$static.element.style['msTransformOrigin']);
  translate == null && (translate = this$static.element.style['oTransformOrigin']);
  if (translate != null && !$equals(translate, '')) {
    translateArr = $split(translate, ' ', 0);
    if (translateArr.length >= 2) {
      $endsWith(translateArr[0], 'px') && (translateArr[0] = $substring_0(translateArr[0], 0, translateArr[0].length - 2));
      $endsWith(translateArr[1], 'px') && (translateArr[1] = $substring_0(translateArr[1], 0, translateArr[1].length - 2));
      try {
        this$static.translateX = __parseAndValidateDouble(translateArr[0]);
        this$static.translateY = __parseAndValidateDouble(translateArr[1]);
      }
       catch ($e0) {
        $e0 = caught_0($e0);
        if (!instanceOf($e0, Q$Exception))
          throw $e0;
      }
    }
  }
  opacity = this$static.element.style['opacity'];
  opacity == null || opacity.length == 0?(this$static.opacity_0 = 1):(this$static.opacity_0 = __parseAndValidateDouble(opacity));
}

function $renderElement(this$static, context){
  if (this$static.isVisible) {
    $calculateElementUpdate(this$static);
    context.save();
    $transform(context, this$static.transformMatrixValues[0], this$static.transformMatrixValues[1], this$static.transformMatrixValues[2], this$static.transformMatrixValues[3], this$static.transformMatrixValues[4], this$static.transformMatrixValues[5]);
    $setGlobalAlpha(context, this$static.opacity_0);
    this$static.translateX != -1 && this$static.translateY != -1 && $translate(context, this$static.translateX, this$static.translateY);
    !!this$static.image && $drawImage_2(this$static.image, context);
    context.restore();
  }
}

function $setTransformData(this$static, trans){
  var i, index, matrixArr;
  index = trans.indexOf('(');
  if (index != -1) {
    trans = $substring(trans, index + 1);
    index = trans.indexOf(')');
    if (index != -1) {
      trans = trans.substr(0, index - 0);
      trans = $replace_0(trans, ' ', '');
      matrixArr = $split(trans, ',', 0);
      if (matrixArr.length == 6) {
        for (i = 0; i < 6; ++i) {
          this$static.transformMatrixValues[i] = __parseAndValidateDouble(matrixArr[i]);
        }
      }
    }
  }
}

function AbstractTweenMaxGraphic(){
}

_ = AbstractTweenMaxGraphic.prototype = new AbstractTweenMaxElement;
_.getClass$ = function getClass_724(){
  return Lwebgl_client_nf_gamesFramework_tweenMax_AbstractTweenMaxGraphic_2_classLit;
}
;
_.onPathFinished_0 = function onPathFinished_3(element){
  $calculateElementUpdate(this);
  !!this.listener && this.listener.onPathFinished(this);
}
;
_.updateElement = function updateElement_0(){
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractTweenMaxElement]);
_.isVisible = false;
_.opacity_0 = 0;
_.transformMatrixValues = null;
_.translateX = 0;
_.translateY = 0;
function TweenMaxElementImage_0(image){
  var animLocation, height, width, x, y;
  this.transformMatrixValues = initDim(_3D_classLit, makeCastMap([Q$double_$1, Q$Serializable]), -1, 6, 1);
  this.transformMatrixValues[0] = 1;
  this.transformMatrixValues[1] = 0;
  this.transformMatrixValues[2] = 0;
  this.transformMatrixValues[3] = 1;
  this.transformMatrixValues[4] = 0;
  this.transformMatrixValues[5] = 0;
  this.translateX = -1;
  this.translateX = -1;
  this.opacity_0 = 1;
  this.isVisible = true;
  this.image = image;
  !this.image.imageLocation && (width = $getWidth(this.image) , height = $getHeight(this.image) , x = width >> 1 , y = height >> 1 , animLocation = new Location_1(x, y, width, height) , $setLocation(this.image, animLocation) , undefined);
}

function TweenMaxElementImage(){
}

_ = TweenMaxElementImage_0.prototype = TweenMaxElementImage.prototype = new AbstractTweenMaxGraphic;
_.getClass$ = function getClass_725(){
  return Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxElementImage_2_classLit;
}
;
_.getHeight = function getHeight_0(){
  return $getHeight(this.image);
}
;
_.getInternalTweenMaxElement = function getInternalTweenMaxElement_0(){
  var imageElement;
  imageElement = this.image.image.cloneNode(true);
  return imageElement;
}
;
_.getWidth = function getWidth_0(){
  return $getWidth(this.image);
}
;
_.castableTypeMap$ = makeCastMap([Q$AbstractTweenMaxElement]);
_.image = null;
function TweenMaxGenericSequenceDO_0(tweenProperties, duration, delay){
  this.elementStartPoint = null;
  this.tweenProperties = tweenProperties;
  this.duration = duration;
  this.delay = delay;
  this.updateOnChanges = true;
}

function TweenMaxGenericSequenceDO(){
}

_ = TweenMaxGenericSequenceDO_0.prototype = TweenMaxGenericSequenceDO.prototype = new Object_0;
_.getClass$ = function getClass_726(){
  return Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxGenericSequenceDO_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$TweenMaxGenericSequenceDO]);
_.delay = 0;
_.duration = 0;
_.elementStartPoint = null;
_.tweenProperties = null;
_.updateOnChanges = false;
function $startNextStep(this$static){
  var step;
  if (this$static.steps_0 != null) {
    step = this$static.steps_0[this$static.currentIndex];
    $startGenericTween(this$static.tweenMaxElement, step.elementStartPoint, step.tweenProperties, step.duration, step.delay, step.updateOnChanges);
  }
}

function $startSequence(this$static, steps){
  this$static.steps_0 = steps;
  this$static.currentIndex = 0;
  $startNextStep(this$static);
}

function $stop_0(this$static){
  killTweenOnElement(this$static.tweenMaxElement.element);
  this$static.steps_0 = null;
}

function TweenMaxGenericSequenceManager_0(tweenElement){
  this.tweenMaxElement = tweenElement;
  this.tweenMaxElement.listener = this;
}

function TweenMaxGenericSequenceManager(){
}

_ = TweenMaxGenericSequenceManager_0.prototype = TweenMaxGenericSequenceManager.prototype = new Object_0;
_.getClass$ = function getClass_727(){
  return Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxGenericSequenceManager_2_classLit;
}
;
_.onPathFinished = function onPathFinished_4(element){
  ++this.currentIndex;
  this.steps_0 != null && this.currentIndex < this.steps_0.length && $startNextStep(this);
}
;
_.onPathStarted = function onPathStarted_3(element){
}
;
_.onPathUpdate = function onPathUpdate_3(element){
}
;
_.castableTypeMap$ = makeCastMap([Q$ITweenMaxPathListener, Q$TweenMaxGenericSequenceManager]);
_.currentIndex = 0;
_.steps_0 = null;
_.tweenMaxElement = null;
function $clinit_TweenMaxUtils$EASE_TYPE(){
  $clinit_TweenMaxUtils$EASE_TYPE = nullMethod;
  LINEAR_EASE_NONE = new TweenMaxUtils$EASE_TYPE_0('LINEAR_EASE_NONE', 0, 'Linear', 'easeNone');
  POWER_EASE_IN_LIN = new TweenMaxUtils$EASE_TYPE_0('POWER_EASE_IN_LIN', 1, 'Power0', 'easeIn');
  POWER_EASE_IN_OUT_LIN = new TweenMaxUtils$EASE_TYPE_0('POWER_EASE_IN_OUT_LIN', 2, 'Power0', 'easeInOut');
  POWER_EASE_OUT_LIN = new TweenMaxUtils$EASE_TYPE_0('POWER_EASE_OUT_LIN', 3, 'Power0', 'easeOut');
  POWER1_EASE_IN = new TweenMaxUtils$EASE_TYPE_0('POWER1_EASE_IN', 4, 'Power1', 'easeIn');
  POWER1_EASE_IN_OUT = new TweenMaxUtils$EASE_TYPE_0('POWER1_EASE_IN_OUT', 5, 'Power1', 'easeInOut');
  POWER1_EASE_OUT = new TweenMaxUtils$EASE_TYPE_0('POWER1_EASE_OUT', 6, 'Power1', 'easeOut');
  POWER2_EASE_IN = new TweenMaxUtils$EASE_TYPE_0('POWER2_EASE_IN', 7, 'Power2', 'easeIn');
  POWER2_EASE_IN_OUT = new TweenMaxUtils$EASE_TYPE_0('POWER2_EASE_IN_OUT', 8, 'Power2', 'easeInOut');
  POWER2_EASE_OUT = new TweenMaxUtils$EASE_TYPE_0('POWER2_EASE_OUT', 9, 'Power2', 'easeOut');
  POWER3_EASE_IN = new TweenMaxUtils$EASE_TYPE_0('POWER3_EASE_IN', 10, 'Power3', 'easeIn');
  POWER3_EASE_IN_OUT = new TweenMaxUtils$EASE_TYPE_0('POWER3_EASE_IN_OUT', 11, 'Power3', 'easeInOut');
  POWER3_EASE_OUT = new TweenMaxUtils$EASE_TYPE_0('POWER3_EASE_OUT', 12, 'Power3', 'easeOut');
  POWER4_EASE_IN = new TweenMaxUtils$EASE_TYPE_0('POWER4_EASE_IN', 13, 'Power4', 'easeIn');
  POWER4_EASE_IN_OUT = new TweenMaxUtils$EASE_TYPE_0('POWER4_EASE_IN_OUT', 14, 'Power4', 'easeInOut');
  POWER4_EASE_OUT = new TweenMaxUtils$EASE_TYPE_0('POWER4_EASE_OUT', 15, 'Power3', 'easeOut');
  BACK_EASE_IN = new TweenMaxUtils$EASE_TYPE_0('BACK_EASE_IN', 16, 'Back', 'easeIn');
  BACK_EASE_IN_OUT = new TweenMaxUtils$EASE_TYPE_0('BACK_EASE_IN_OUT', 17, 'Back', 'easeInOut');
  BACK_EASE_OUT = new TweenMaxUtils$EASE_TYPE_0('BACK_EASE_OUT', 18, 'Back', 'easeOut');
  BOUNCE_EASE_IN = new TweenMaxUtils$EASE_TYPE_0('BOUNCE_EASE_IN', 19, 'Bounce', 'easeIn');
  BOUNCE_EASE_IN_OUT = new TweenMaxUtils$EASE_TYPE_0('BOUNCE_EASE_IN_OUT', 20, 'Bounce', 'easeInOut');
  BOUNCE_EASE_OUT = new TweenMaxUtils$EASE_TYPE_0('BOUNCE_EASE_OUT', 21, 'Bounce', 'easeOut');
  $VALUES_32 = initValues(_3Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxUtils$EASE_1TYPE_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$Comparable_$1, Q$Object_$1]), Q$TweenMaxUtils$EASE_TYPE, [LINEAR_EASE_NONE, POWER_EASE_IN_LIN, POWER_EASE_IN_OUT_LIN, POWER_EASE_OUT_LIN, POWER1_EASE_IN, POWER1_EASE_IN_OUT, POWER1_EASE_OUT, POWER2_EASE_IN, POWER2_EASE_IN_OUT, POWER2_EASE_OUT, POWER3_EASE_IN, POWER3_EASE_IN_OUT, POWER3_EASE_OUT, POWER4_EASE_IN, POWER4_EASE_IN_OUT, POWER4_EASE_OUT, BACK_EASE_IN, BACK_EASE_IN_OUT, BACK_EASE_OUT, BOUNCE_EASE_IN, BOUNCE_EASE_IN_OUT, BOUNCE_EASE_OUT]);
}

function TweenMaxUtils$EASE_TYPE_0(enum$name, enum$ordinal, functionClassStr, functionNameStr){
  Enum_0.call(this, enum$name, enum$ordinal);
  this.functionName = functionNameStr;
  this.functionClass = functionClassStr;
}

function values_33(){
  $clinit_TweenMaxUtils$EASE_TYPE();
  return $VALUES_32;
}

function TweenMaxUtils$EASE_TYPE(){
}

_ = TweenMaxUtils$EASE_TYPE_0.prototype = TweenMaxUtils$EASE_TYPE.prototype = new Enum;
_.getClass$ = function getClass_728(){
  return Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxUtils$EASE_1TYPE_2_classLit;
}
;
_.getFunctionClass = function getFunctionClass(){
  return this.functionClass;
}
;
_.getFunctionName = function getFunctionName(){
  return this.functionName;
}
;
_.castableTypeMap$ = makeCastMap([Q$Serializable, Q$Comparable, Q$Enum, Q$TweenMaxUtils$EASE_TYPE]);
_.functionClass = null;
_.functionName = null;
var $VALUES_32, BACK_EASE_IN, BACK_EASE_IN_OUT, BACK_EASE_OUT, BOUNCE_EASE_IN, BOUNCE_EASE_IN_OUT, BOUNCE_EASE_OUT, LINEAR_EASE_NONE, POWER1_EASE_IN, POWER1_EASE_IN_OUT, POWER1_EASE_OUT, POWER2_EASE_IN, POWER2_EASE_IN_OUT, POWER2_EASE_OUT, POWER3_EASE_IN, POWER3_EASE_IN_OUT, POWER3_EASE_OUT, POWER4_EASE_IN, POWER4_EASE_IN_OUT, POWER4_EASE_OUT, POWER_EASE_IN_LIN, POWER_EASE_IN_OUT_LIN, POWER_EASE_OUT_LIN;
function $addText(this$static, text){
  var listItem;
  listItem = new List$ListTextItem_0;
  setInnerText(listItem.element, text == null?'':text);
  listItem.element['className'] = 'FullMenu-infoText';
  $add_0(this$static, listItem, this$static.element);
}

function $onAttach_1(this$static, panel, loc){
  var heightOffset, widthOffset;
  widthOffset = 0;
  heightOffset = 0;
  if (this$static.checkedBtn.element.style.display != 'none') {
    widthOffset = $getPropertyInt(this$static.checkedBtn.element, 'offsetWidth');
    heightOffset = $getPropertyInt(this$static.checkedBtn.element, 'offsetHeight');
  }
   else if (this$static.uncheckedBtn.element.style.display != 'none') {
    widthOffset = $getPropertyInt(this$static.uncheckedBtn.element, 'offsetWidth');
    heightOffset = $getPropertyInt(this$static.uncheckedBtn.element, 'offsetHeight');
  }
  $setWidgetPosition(panel, this$static.checkedBtn, loc.x_0 - (widthOffset >> 1), loc.y_0 - (heightOffset >> 1));
  $setWidgetPosition(panel, this$static.uncheckedBtn, loc.x_0 - (widthOffset >> 1), loc.y_0 - (heightOffset >> 1));
}

function TextCounterView$1_0(this$0){
  $clinit_Timer();
  this.this$0 = this$0;
}

function TextCounterView$1(){
}

_ = TextCounterView$1_0.prototype = TextCounterView$1.prototype = new Timer;
_.getClass$ = function getClass_736(){
  return Lwebgl_client_nf_gamesFramework_ui_textCounterView_TextCounterView$1_2_classLit;
}
;
_.run = function run_51(){
  var fmt, result;
  this.this$0.currentValue = this.this$0.currentValue + this.this$0.stepValue;
  this.this$0.currentValue = toDouble(fromDouble(round0(this.this$0.currentValue * 100000))) / 100000;
  if (this.this$0.isCountingDown && this.this$0.currentValue <= this.this$0.endValue || !this.this$0.isCountingDown && this.this$0.currentValue >= this.this$0.endValue) {
    $stop(this.this$0);
  }
   else {
    fmt = this.this$0.getFormattedValue(this.this$0.currentValue);
    result = this.this$0.isCurrencyRequired?appendCurrencySymbol(fmt):fmt;
    $setText_2(this.this$0, result);
  }
}
;
_.castableTypeMap$ = makeCastMap([Q$Timer]);
_.this$0 = null;
_ = AutoPlayControllerNew.prototype;
_.setGamePanel = function setGamePanel_0(gamePanel){
}
;
_ = AutoPlayViewNew.prototype;
_.setAutoPlayBarLocation = function setAutoPlayBarLocation_2(location_0){
}
;
_ = AutoPlayViewWeb.prototype;
_.setAutoPlayBarLocation = function setAutoPlayBarLocation_3(location_0){
}
;
function FullScreenMenuGameSettingsPanel_1(numOfTicketsTitleText, betSelectorTitleText, totalCostTitleText){
  FullScreenMenuGameSettingsPanel_3.call(this, numOfTicketsTitleText, betSelectorTitleText, totalCostTitleText, ($clinit_Constants$LayoutAlignment() , VERTICAL));
}

function FullScreenMenuGameSettingsPanel_3(numOfTicketsTitleText, betSelectorTitleText, totalCostTitleText, layountAlignment){
  VerticalPanel_0.call(this);
  this.layountAlignment = layountAlignment;
  this.numOfTicketsTitleText = numOfTicketsTitleText;
  this.betSelectorTitleText = betSelectorTitleText;
  this.totalCostTitleText = totalCostTitleText;
}

_ = FullScreenMenuGameSettingsPanel_1.prototype = FullScreenMenuGameSettingsPanel.prototype;
function $initBalance(labelText){
  $setText_5(($clinit_FullScreenMenuHeader$MenuHtmlUI() , BALANCE), labelText);
  BALANCE.isNewLineForNumber = true;
}

function $initTotalBets(labelText){
  $setText_5(($clinit_FullScreenMenuHeader$MenuHtmlUI() , TOTAL_BETS), labelText);
  TOTAL_BETS.isNewLineForNumber = true;
}

function $initTotalWins(labelText){
  $setText_5(($clinit_FullScreenMenuHeader$MenuHtmlUI() , TOTAL_WINS), labelText);
  TOTAL_WINS.isNewLineForNumber = true;
}

_ = FullScreenMenuHeader.prototype;
_.setBalance_0 = function setBalance_6(balance){
  $setBalance_3(this, balance);
}
;
_.setBetPerLine = function setBetPerLine_2(bet){
}
;
_.setTotalBet = function setTotalBet_1(bet){
  $setTotalBet(this, bet);
}
;
_.setTotalWin = function setTotalWin_1(totalWin){
  $setTotalWin_1(this, totalWin);
}
;
_.setWinUpTo = function setWinUpTo_3(totalWin){
}
;
function $clinit_CanvasButton(){
  $clinit_CanvasButton = nullMethod;
  STATES_TO_ANIMS = initValues(_3Ljava_lang_String_2_classLit, makeCastMap([Q$Serializable, Q$Serializable_$1, Q$CharSequence_$1, Q$Comparable_$1, Q$Object_$1, Q$String_$1]), Q$String, ['enabled', 'hover', 'down', 'startAnim']);
}

function $getTextWidthAndHieght(this$static){
  var arr, result, textHeight, textLocationHeight, textLocationWidth, textWidth;
  result = initDim(_3I_classLit, makeCastMap([Q$Serializable]), -1, 2, 1);
  textLocationHeight = this$static.textLocation.height_0;
  textHeight = $getPropertyInt(this$static.textPanel.element, 'offsetHeight');
  textHeight == 0 && (textLocationHeight == 0?(textHeight = this$static.buttonHeight):(textHeight = textLocationHeight));
  textLocationWidth = this$static.textLocation.width_0;
  textWidth = $getPropertyInt(this$static.textPanel.element, 'offsetWidth');
  textWidth == 0 && (textLocationWidth == 0?(textWidth = this$static.buttonWidth):(textWidth = textLocationWidth));
  if (textLocationWidth != 0 && textWidth > textLocationWidth) {
    arr = $split($getTextOrHtml(this$static.text_0.directionalTextHelper), ' ', 0);
    if (arr.length > 1) {
      textWidth = textLocationWidth;
      textLocationHeight == 0?(textHeight = this$static.buttonHeight):(textHeight = textLocationHeight);
    }
  }
  textWidth += 5;
  result[0] = textWidth;
  result[1] = textHeight;
  return result;
}

function $init_34(this$static, buttonText, clickHandler, styleStandard, styleDisabled, panel, locations, buttonAnimation){
  this$static.panel = panel;
  this$static.isEnabled = true;
  this$static.buttonState = 0;
  this$static.buttonWidth = 0;
  this$static.buttonHeight = 0;
  this$static.styleStandard = styleStandard;
  this$static.styleDisabled = styleDisabled;
  this$static.initialLocations = locations;
  !this$static.textLocation && (this$static.textLocation = new Location_2(locations));
  this$static.buttonAnimation = buttonAnimation;
  if (buttonText != null) {
    this$static.text_0 = new HTML_1(buttonText);
    this$static.text_0.setStyleName_0(styleStandard);
    this$static.text_0.element.style['zIndex'] = '3000';
    this$static.textPanel = new TextPanel_0;
    this$static.textPanel.element.style['zIndex'] = '3000';
    $add_17(this$static.textPanel, this$static.text_0);
  }
  if (clickHandler) {
    this$static.clickHandler = clickHandler;
    this$static.eventHandler = new EventsHandlerDiv_0;
    this$static.eventHandler.element.style['zIndex'] = '3000';
    $addDomHandler(this$static.eventHandler, this$static, ($clinit_TouchStartEvent() , $clinit_TouchStartEvent() , TYPE_13));
    $addDomHandler(this$static.eventHandler, this$static, ($clinit_TouchEndEvent() , $clinit_TouchEndEvent() , TYPE_11));
    $addDomHandler(this$static.eventHandler, this$static, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  }
  this$static.canvas.element.style['zIndex'] = '2999';
  $initLocations_0(this$static);
}

function $initLocations_0(this$static){
  var textCurrentLocationX, textCurrentLocationY;
  this$static.buttonWidth = this$static.buttonAnimation.animBank.sourceFrameWidth;
  this$static.buttonHeight = this$static.buttonAnimation.animBank.sourceFrameHeight;
  this$static.currentLocationX = this$static.initialLocations.x_0 - (this$static.buttonWidth >> 1);
  this$static.currentLocationY = this$static.initialLocations.y_0 - (this$static.buttonHeight >> 1);
  $setCoordinateSpaceWidth(this$static.canvas, this$static.buttonWidth);
  $setCoordinateSpaceHeight(this$static.canvas, this$static.buttonHeight);
  $clearRect(this$static.canvas.element.getContext('2d'), 0, 0, this$static.buttonWidth, this$static.buttonHeight);
  $runAnimByState(this$static, this$static.isEnabled, this$static.buttonState);
  $remove_4(this$static.panel, this$static.canvas);
  $add_2(this$static.panel, this$static.canvas, this$static.currentLocationX, this$static.currentLocationY);
  if (this$static.textPanel) {
    $addHandler(this$static.textPanel, new CanvasButton$2_0(this$static), (!TYPE_14 && (TYPE_14 = new GwtEvent$Type_0) , TYPE_14));
    textCurrentLocationX = this$static.textLocation.x_0 - (this$static.buttonAnimation.animBank.sourceFrameWidth >> 1);
    textCurrentLocationY = this$static.textLocation.y_0 - (this$static.buttonAnimation.animBank.sourceFrameHeight >> 1);
    $add_2(this$static.panel, this$static.textPanel, textCurrentLocationX, textCurrentLocationY);
  }
  if (this$static.eventHandler) {
    $remove_4(this$static.panel, this$static.eventHandler);
    $add_2(this$static.panel, this$static.eventHandler, this$static.currentLocationX, this$static.currentLocationY);
    $setSize(this$static.eventHandler, this$static.buttonWidth + 'px', this$static.buttonHeight + 'px');
  }
}

function $runAnimByState(this$static, isEnabled, state){
  if (isEnabled) {
    if (state == 3 && !this$static.isInAnimationCycle) {
      $doAnim(this$static.buttonAnimation, STATES_TO_ANIMS[3]);
      this$static.isInAnimationCycle = true;
      this$static.animListener = new CanvasButton$1_0(this$static);
      $addFrameManagerListener(getInstance(), this$static.animListener);
      return;
    }
     else {
      this$static.isInAnimationCycle && $stopAnimPlaying(this$static);
      $doAnim(this$static.buttonAnimation, STATES_TO_ANIMS[state]);
    }
  }
   else {
    $doAnim(this$static.buttonAnimation, 'disabled');
  }
  $resetAnim(this$static.buttonAnimation);
  $update_0(this$static.buttonAnimation, true);
  $paint_0(this$static.buttonAnimation, this$static.canvas.element.getContext('2d'));
}

function $setEnabled_2(this$static, isEnabled){
  if (this$static.isEnabled != isEnabled) {
    this$static.isButtonDisabledVisually && (this$static.isButtonDisabledVisually = false);
    $runAnimByState(this$static, isEnabled, this$static.buttonState);
    !!this$static.text_0 && this$static.text_0.setStyleName_0(isEnabled?this$static.styleStandard:this$static.styleDisabled);
    this$static.isEnabled = isEnabled;
    isEnabled && !!this$static.eventHandler?$getWidgetIndex(this$static.panel, this$static.eventHandler) == -1 && $add_2(this$static.panel, this$static.eventHandler, this$static.currentLocationX, this$static.currentLocationY):$getWidgetIndex(this$static.panel, this$static.eventHandler) != -1 && $remove_4(this$static.panel, this$static.eventHandler);
  }
}

function $stopAnimPlaying(this$static){
  this$static.isInAnimationCycle = false;
  $removeFrameManagerListener(getInstance(), this$static.animListener);
  $runAnimByState(this$static, this$static.isEnabled, 0);
}

function CanvasButton_0(){
  $clinit_CanvasButton();
  this.canvas = createIfSupported();
  $setStyleName_0(this.canvas, 'canvas-button-style');
}

function CanvasButton(){
}

_ = CanvasButton_0.prototype = CanvasButton.prototype = new Object_0;
_.getClass$ = function getClass_796(){
  return Lwebgl_client_nf_menus_gamebuttons_CanvasButton_2_classLit;
}
;
_.onClick = function onClick_56(event_0){
  this.isEnabled && !!this.clickHandler && this.clickHandler.onClick(event_0);
}
;
_.onTouchEnd = function onTouchEnd_3(event_0){
  this.isButtonDisabledVisually || ($runAnimByState(this, this.isEnabled, 0) , this.buttonState = 0);
}
;
_.onTouchStart = function onTouchStart_2(event_0){
  this.isButtonDisabledVisually || ($runAnimByState(this, this.isEnabled, 2) , this.buttonState = 2);
}
;
_.setEnabled = function setEnabled_3(isEnabled){
  $setEnabled_2(this, isEnabled);
}
;
_.setVisible = function setVisible_6(visible){
  $setVisible(this.canvas, visible);
  !!this.textPanel && $setVisible(this.textPanel, visible);
  !!this.text_0 && this.text_0.setVisible(visible);
  !!this.eventHandler && $setVisible(this.eventHandler, visible);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$TouchEndHandler, Q$TouchStartHandler, Q$EventHandler, Q$HasEnabled]);
_.animListener = null;
_.buttonAnimation = null;
_.buttonHeight = 0;
_.buttonState = 0;
_.buttonWidth = 0;
_.canvas = null;
_.clickHandler = null;
_.currentLocationX = 0;
_.currentLocationY = 0;
_.eventHandler = null;
_.initialLocations = null;
_.isButtonDisabledVisually = false;
_.isEnabled = false;
_.isInAnimationCycle = false;
_.panel = null;
_.styleDisabled = null;
_.styleStandard = null;
_.text_0 = null;
_.textLocation = null;
_.textPanel = null;
var STATES_TO_ANIMS;
function CanvasButton$1_0(this$0){
  this.this$0 = this$0;
}

function CanvasButton$1(){
}

_ = CanvasButton$1_0.prototype = CanvasButton$1.prototype = new Object_0;
_.getClass$ = function getClass_797(){
  return Lwebgl_client_nf_menus_gamebuttons_CanvasButton$1_2_classLit;
}
;
_.preRender = function preRender_4(){
  $update_0(this.this$0.buttonAnimation, false) && $stopAnimPlaying(this.this$0);
}
;
_.render_0 = function render_4(){
  !!this.this$0.buttonAnimation && $paint_0(this.this$0.buttonAnimation, this.this$0.canvas.element.getContext('2d'));
}
;
_.updateInterrupts = function updateInterrupts_0(){
}
;
_.castableTypeMap$ = makeCastMap([Q$FrameManagerListener]);
_.this$0 = null;
function CanvasButton$2_0(this$0){
  this.this$0 = this$0;
}

function CanvasButton$2(){
}

_ = CanvasButton$2_0.prototype = CanvasButton$2.prototype = new Object_0;
_.getClass$ = function getClass_798(){
  return Lwebgl_client_nf_menus_gamebuttons_CanvasButton$2_2_classLit;
}
;
_.onAttachOrDetach = function onAttachOrDetach_8(event_0){
  var textCurrentLocationX, textCurrentLocationY, textWidthHeight;
  if (event_0.attached) {
    textWidthHeight = $getTextWidthAndHieght(this.this$0);
    $setWidth(this.this$0.textPanel, textWidthHeight[0] + 'px');
    $setHeight(this.this$0.textPanel, textWidthHeight[1] + 'px');
    textCurrentLocationX = this.this$0.textLocation.x_0 - (textWidthHeight[0] >> 1);
    textCurrentLocationY = this.this$0.textLocation.y_0 - (textWidthHeight[1] >> 1);
    $setWidgetPosition(this.this$0.panel, this.this$0.textPanel, textCurrentLocationX, textCurrentLocationY);
  }
}
;
_.castableTypeMap$ = makeCastMap([Q$AttachEvent$Handler, Q$EventHandler]);
_.this$0 = null;
function CanvasButtonUpDown$1_0(this$0){
  this.this$0 = this$0;
}

function CanvasButtonUpDown$1(){
}

_ = CanvasButtonUpDown$1_0.prototype = CanvasButtonUpDown$1.prototype = new Object_0;
_.getClass$ = function getClass_799(){
  return Lwebgl_client_nf_menus_gamebuttons_CanvasButtonUpDown$1_2_classLit;
}
;
_.onClick = function onClick_57(event_0){
  $handleUpPressed(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function CanvasButtonUpDown$2_0(this$0){
  this.this$0 = this$0;
}

function CanvasButtonUpDown$2(){
}

_ = CanvasButtonUpDown$2_0.prototype = CanvasButtonUpDown$2.prototype = new Object_0;
_.getClass$ = function getClass_800(){
  return Lwebgl_client_nf_menus_gamebuttons_CanvasButtonUpDown$2_2_classLit;
}
;
_.onClick = function onClick_58(event_0){
  $handleDownPressed(this.this$0);
}
;
_.castableTypeMap$ = makeCastMap([Q$ClickHandler, Q$EventHandler]);
_.this$0 = null;
function $setCurrentIndex(this$static, index){
  this$static.currentIndex = index;
  $setEnabled_4(this$static.upButton, true);
  $setEnabled_4(this$static.downButton, true);
  if (!this$static.isCircular) {
    this$static.currentIndex == 0 && $setEnabled_4(this$static.downButton, false);
    this$static.currentIndex == this$static.values_0.length - 1 && $setEnabled_4(this$static.upButton, false);
  }
}

function $setEnabled_3(this$static, isEnabled){
  if (this$static.currentIndex == 0) {
    $setEnabled_4(this$static.downButton, false);
    $setEnabled_4(this$static.upButton, isEnabled && this$static.values_0.length > 1);
  }
   else if (this$static.currentIndex == this$static.values_0.length - 1) {
    $setEnabled_4(this$static.downButton, isEnabled);
    $setEnabled_4(this$static.upButton, false);
  }
   else {
    $setEnabled_4(this$static.downButton, isEnabled);
    $setEnabled_4(this$static.upButton, isEnabled);
  }
}

function RotateResourceElement_0(itemKey, mirrorType){
  this.itemKey = itemKey;
  this.rotationType = mirrorType;
  this.resourceSuffix = '_rotate';
}

function RotateResourceElement(){
}

_ = RotateResourceElement_0.prototype = RotateResourceElement.prototype = new Object_0;
_.getClass$ = function getClass_826(){
  return Lwebgl_client_nf_resource_RotateResourceElement_2_classLit;
}
;
_.getItemKey = function getItemKey(){
  return this.itemKey;
}
;
_.getRotationTypes = function getRotationTypes(){
  return this.rotationType;
}
;
_.getSuffix = function getSuffix(){
  return this.resourceSuffix;
}
;
_.castableTypeMap$ = makeCastMap([Q$RotateResourceElement]);
_.itemKey = null;
_.resourceSuffix = null;
_.rotationType = null;
function LoadingItemSound_0(url, fileName){
  LoadingItem_3.call(this, url, fileName, 6, null, null, null);
  this.xmlPath = $getUrl(this) + '.xml';
  this.mp3Path = $getUrl(this) + '.mp3';
}

function LoadingItemSound(){
}

_ = LoadingItemSound_0.prototype = LoadingItemSound.prototype = new LoadingItem;
_.getClass$ = function getClass_832(){
  return Lwebgl_client_nf_resource_items_LoadingItemSound_2_classLit;
}
;
_.getSoundPath = function getSoundPath(){
  return this.mp3Path;
}
;
_.getXmlPath = function getXmlPath(){
  return this.xmlPath;
}
;
_.castableTypeMap$ = makeCastMap([Q$LoadingItem, Q$LoadingItemSound]);
_.mp3Path = null;
_.xmlPath = null;
function SoundDO_0(soundURL, soundSprite){
  this.soundURL = soundURL;
  this.soundSprite = soundSprite;
}

function SoundDO(){
}

_ = SoundDO_0.prototype = SoundDO.prototype = new Object_0;
_.getClass$ = function getClass_847(){
  return Lwebgl_client_nf_sounds_SoundDO_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$SoundDO]);
_.soundSprite = null;
_.soundURL = null;
function createSoundInstance(fileName, soundId, start, end, isLoop){
  var result;
  ($clinit_Device$DeviceType() , IPHONE) == ($clinit_Device() , !instance_11 && (instance_11 = new Device_0) , $clinit_Device() , deviceType) || IPAD == (!instance_11 && (instance_11 = new Device_0) , deviceType)?(result = new IOSSoundInstance_0(fileName, soundId, start, end, isLoop)):deviceType == ANDROID || deviceType == ANDROID_TABLET || deviceType == LG || deviceType == KINDLE || deviceType == NEW_LG?(doInit() , fisChrome?(result = new ChromeSoundInstance_0(fileName, soundId, start, end, isLoop)):(result = new AndroidSoundInstance_0(fileName, soundId, start, end, isLoop))):isDesktop() && (doInit() , fisChrome)?(result = new ChromeSoundInstance_0(fileName, soundId, start, end, isLoop)):isAudioSpriteSupported()?(doInit() , fisSafari) || isFireFox()?(result = new IOSSoundInstance_0(fileName, soundId, start, end, isLoop)):(result = new AndroidSoundInstance_0(fileName, soundId, start, end, isLoop)):(result = new IESoundInstance_0(fileName, soundId, start, end, isLoop));
  return result;
}

function isAudioSpriteSupported(){
  var userAgent;
  if (isDesktop() && ($clinit_Device() , userAgent = getUserAgent().toLowerCase() , userAgent.indexOf('trident') != -1)) {
    return false;
  }
  return true;
}

function SoundInstance_0(fileName, id, startTime, endTime, isLoop){
  this.soundFilePath = fileName;
  this.id_0 = id;
  this.endTime = endTime;
  this.startTime = startTime;
  this.isLoop = isLoop;
  this.nativeCallBackFunction = getSoundInstanceCallbackFunction(this);
}

function getSoundInstanceCallbackFunction(callBack){
  return function(){
    callBack.onSoundFinish();
  }
  ;
}

function SoundInstance(){
}

_ = SoundInstance.prototype = new Object_0;
_.getClass$ = function getClass_848(){
  return Lwebgl_client_nf_sounds_soundInstance_SoundInstance_2_classLit;
}
;
_.init_2 = function init_16(){
  var $e0;
  try {
    this.instance = this.createNativeSoundInstance();
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$Exception))
      throw $e0;
  }
}
;
_.onSoundFinish = function onSoundFinish(){
  this.isLoop?this.play_0():this.listener.onSoundFinish_0(this.soundFilePath, this.id_0);
}
;
_.castableTypeMap$ = makeCastMap([Q$ISoundInstance]);
_.endTime = P0_longLit;
_.id_0 = null;
_.instance = null;
_.isLoop = false;
_.listener = null;
_.nativeCallBackFunction = null;
_.soundFilePath = null;
_.startTime = P0_longLit;
function $createNativeSoundInstance(fileID){
  return $wnd.createjs.Sound.createInstance(fileID);
}

function $nativePlay(instance, offsetSound, duration, callBack){
  instance.setPosition(offsetSound);
  instance.play();
  var intervalVariable = setTimeout(function(){
    instance.pause();
    callBack();
  }
  , duration);
  return intervalVariable;
}

function $nativeStop(instance, intervalVariable){
  instance.stop();
  clearTimeout(intervalVariable);
}

function AndroidSoundInstance_0(fileName, id, start, end, isLoop){
  SoundInstance_0.call(this, fileName, id, start, end, isLoop);
}

function AndroidSoundInstance(){
}

_ = AndroidSoundInstance_0.prototype = AndroidSoundInstance.prototype = new SoundInstance;
_.createNativeSoundInstance = function createNativeSoundInstance(){
  return $createNativeSoundInstance(this.soundFilePath);
}
;
_.getClass$ = function getClass_849(){
  return Lwebgl_client_nf_sounds_soundInstance_AndroidSoundInstance_2_classLit;
}
;
_.play_0 = function play(){
  var $e0;
  try {
    this.nativeTimer = $nativePlay(this.instance, toInt(this.startTime), toInt(sub(this.endTime, this.startTime)), this.nativeCallBackFunction);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$Exception))
      throw $e0;
  }
}
;
_.stop_0 = function stop_0(){
  var $e0;
  try {
    $nativeStop(this.instance, this.nativeTimer);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$Exception))
      throw $e0;
  }
}
;
_.castableTypeMap$ = makeCastMap([Q$ISoundInstance]);
_.nativeTimer = null;
function $createNativeSoundInstance_0(fileID){
  var instance = $wnd.createjs.Sound.play(fileID, $wnd.createjs.Sound.INTERRUPT_NONE);
  instance.pause();
  return instance;
}

function $nativePause(instance, intervalVariable){
  instance.pause();
  clearTimeout(intervalVariable);
}

function $nativePlay_0(instance, offset, duration, callBack){
  instance.resume();
  instance.setPosition(offset);
  var intervalVariable = setTimeout(function(){
    instance.pause();
    callBack();
  }
  , duration);
  return intervalVariable;
}

function ChromeSoundInstance_0(fileName, id, start, end, isLoop){
  SoundInstance_0.call(this, fileName, id, start, end, isLoop);
}

function ChromeSoundInstance(){
}

_ = ChromeSoundInstance_0.prototype = ChromeSoundInstance.prototype = new SoundInstance;
_.createNativeSoundInstance = function createNativeSoundInstance_0(){
  return $createNativeSoundInstance_0(this.soundFilePath);
}
;
_.getClass$ = function getClass_850(){
  return Lwebgl_client_nf_sounds_soundInstance_ChromeSoundInstance_2_classLit;
}
;
_.play_0 = function play_0(){
  var $e0;
  try {
    this.nativeTimer = $nativePlay_0(this.instance, toInt(this.startTime), toInt(sub(this.endTime, this.startTime)), this.nativeCallBackFunction);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$Exception))
      throw $e0;
  }
}
;
_.stop_0 = function stop_1(){
  var $e0;
  try {
    $nativePause(this.instance, this.nativeTimer);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$Exception))
      throw $e0;
  }
}
;
_.castableTypeMap$ = makeCastMap([Q$ISoundInstance]);
_.nativeTimer = null;
function $createNativeSoundInstance_1(fileID){
  return $wnd.createjs.Sound.createInstance(fileID);
}

function $nativePlay_1(instance, duration, callBack){
  instance.play();
  var intervalVariable = setTimeout(function(){
    instance.pause();
    callBack();
  }
  , duration);
  return intervalVariable;
}

function $nativeStop_0(instance, intervalVariable){
  instance.stop();
  clearTimeout(intervalVariable);
}

function IESoundInstance_0(fileName, id, start, end, isLoop){
  var endFileName, startFileName;
  SoundInstance_0.call(this, (startFileName = fileName.lastIndexOf('/') + 1 , endFileName = fileName.lastIndexOf('.') , fileName.substr(0, startFileName - 0) + 'sounds/' + id + $substring_0(fileName, endFileName, fileName.length)), id, start, end, isLoop);
}

function IESoundInstance(){
}

_ = IESoundInstance_0.prototype = IESoundInstance.prototype = new SoundInstance;
_.createNativeSoundInstance = function createNativeSoundInstance_1(){
  return $createNativeSoundInstance_1(this.soundFilePath);
}
;
_.getClass$ = function getClass_851(){
  return Lwebgl_client_nf_sounds_soundInstance_IESoundInstance_2_classLit;
}
;
_.play_0 = function play_1(){
  var $e0;
  try {
    this.nativeTimer = $nativePlay_1(this.instance, toInt(sub(this.endTime, this.startTime)), this.nativeCallBackFunction);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$Exception))
      throw $e0;
  }
}
;
_.stop_0 = function stop_2(){
  var $e0;
  try {
    $nativeStop_0(this.instance, this.nativeTimer);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$Exception))
      throw $e0;
  }
}
;
_.castableTypeMap$ = makeCastMap([Q$ISoundInstance]);
_.nativeTimer = null;
function $createNativeSoundInstance_2(fileID){
  var instance = $wnd.createjs.Sound.play(fileID, $wnd.createjs.Sound.INTERRUPT_NONE);
  instance.pause();
  return instance;
}

function $nativePause_0(instance, intervalVariable){
  instance.pause();
  clearTimeout(intervalVariable);
}

function $nativePlay_2(instance, offset, duration, callBack){
  instance.resume();
  instance.setPosition(offset);
  var intervalVariable = setTimeout(function(){
    instance.pause();
    callBack();
  }
  , duration);
  return intervalVariable;
}

function IOSSoundInstance_0(fileName, id, start, end, isLoop){
  SoundInstance_0.call(this, fileName, id, start, end, isLoop);
}

function IOSSoundInstance(){
}

_ = IOSSoundInstance_0.prototype = IOSSoundInstance.prototype = new SoundInstance;
_.createNativeSoundInstance = function createNativeSoundInstance_2(){
  return $createNativeSoundInstance_2(this.soundFilePath);
}
;
_.getClass$ = function getClass_852(){
  return Lwebgl_client_nf_sounds_soundInstance_IOSSoundInstance_2_classLit;
}
;
_.play_0 = function play_2(){
  var $e0;
  try {
    this.nativeTimer = $nativePlay_2(this.instance, toInt(this.startTime), toInt(sub(this.endTime, this.startTime)), this.nativeCallBackFunction);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$Exception))
      throw $e0;
  }
}
;
_.stop_0 = function stop_3(){
  var $e0;
  try {
    $nativePause_0(this.instance, this.nativeTimer);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (!instanceOf($e0, Q$Exception))
      throw $e0;
  }
}
;
_.castableTypeMap$ = makeCastMap([Q$ISoundInstance]);
_.nativeTimer = null;
function $init_37(this$static, soundsList, fileName){
  this$static.fileNameToPlayAfterLoading = fileName;
  this$static.soundIDToPlayAfterLoading = 'Intro_music';
  this$static.soundPriorityToPlayAfterLoading = 16;
  $init_38(this$static, soundsList);
}

function $init_38(this$static, soundsList){
  var $e0, soundDO, soundDO$iterator, soundUrl;
  if (this$static.sounds.size_0 != 0) {
    return;
  }
  try {
    for (soundDO$iterator = new AbstractList$IteratorImpl_0(soundsList); soundDO$iterator.i < soundDO$iterator.this$0_0.size_1();) {
      soundDO = dynamicCast($next_2(soundDO$iterator), Q$SoundDO);
      soundUrl = soundDO.soundURL + '?' + cacheBusterURLParam;
      $put_2(this$static.sounds, soundUrl, $parse_2(this$static, soundUrl, soundDO.soundSprite));
    }
    this$static.soundManagerState = ($clinit_SoundManager$SoundManagerState() , PARSE_DONE);
    envType_0 == ($clinit_Constants$CommonGamesConstants$ENVIRONMENT_TYPE() , WEB) && (this$static.isSoundChangedByUser?$setSoundsEnable_2(this$static, this$static.isSoundEnabled):$setSoundsEnable_2(this$static, gameDO_0.isSoundOnWhenGameStart));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$Exception)) {
      this$static.soundManagerState = ($clinit_SoundManager$SoundManagerState() , NOT_AVAILABLE);
    }
     else 
      throw $e0;
  }
}

function $isEnable(this$static){
  return this$static.isSoundEnabled && ($clinit_SoundManager$SoundManagerState() , AVAILABLE) == this$static.soundManagerState && this$static.isPlaySoundsDuringGame && !this$static.isErrorOccur;
}

function $parse_2(this$static, fileURL, soundSprite){
  var end, instance, jsonObject, key, keysIterator, loop, soundData, soundInstances, soundKey, start, valIterator, valueObject, valueText;
  soundInstances = new SynchronizedHashMap_0;
  jsonObject = soundSprite.isObject();
  keysIterator = new AbstractList$IteratorImpl_0(new Arrays$ArrayList_0($keySet(jsonObject).val$keys));
  while (keysIterator.i < keysIterator.this$0_0.size_1()) {
    key = dynamicCast($next_2(keysIterator), Q$String);
    if ($equals('spritemap', key)) {
      valueText = $get_1(jsonObject, key);
      valueObject = valueText.isObject();
      valIterator = new AbstractList$IteratorImpl_0(new Arrays$ArrayList_0($keySet(valueObject).val$keys));
      while (valIterator.i < valIterator.this$0_0.size_1()) {
        soundKey = dynamicCast($next_2(valIterator), Q$String);
        soundData = $get_1(valueObject, soundKey).isObject();
        start = $get_1(soundData, 'start').toString$();
        end = $get_1(soundData, 'end').toString$();
        loop = $get_1(soundData, 'loop').toString$();
        instance = createSoundInstance(fileURL, soundKey, fromDouble(__parseAndValidateDouble(start) * 1000), fromDouble(__parseAndValidateDouble(end) * 1000), ($clinit_Boolean() , $equalsIgnoreCase('true', loop)));
        instance.listener = this$static;
        soundKey == null?$putNullSlot(soundInstances, instance):soundKey != null?$putStringValue(soundInstances, soundKey, instance):$putHashValue(soundInstances, null, instance, ~~getHashCode_0(null));
      }
      break;
    }
  }
  return soundInstances;
}

function $showPopup_4(this$static, container, fileName, listener, popupTitle, popupMessage, yesBtnText, noBtnText){
  this$static.popupTitleText = popupTitle;
  this$static.popupMessageText = popupMessage;
  this$static.popupYesButtonText = yesBtnText;
  this$static.popupNoButtonText = noBtnText;
  this$static.fileNameToPlayAfterLoading = fileName;
  this$static.soundIDToPlayAfterLoading = 'Intro_music';
  this$static.soundPriorityToPlayAfterLoading = 16;
  $showPopup_3(this$static, container, listener);
}

_ = SoundManager.prototype;
_.onSoundFinish_0 = function onSoundFinish_0(fileURL, id){
}
;
_.stop_1 = function stop_4(fileName, soundId){
  $stop_1(this, fileName, soundId);
}
;
_ = ParallelSoundManager.prototype;
_.onSoundFinish_0 = function onSoundFinish_1(fileURL, id){
  $remove_11(this.currentPlayedSoundId, id);
}
;
_.play_1 = function play_5(fileName, soundId, priority, startPlayingIfCurrentlyPlayed){
  if (!startPlayingIfCurrentlyPlayed && $indexOf_3(this.currentPlayedSoundId, soundId, 0) != -1) {
    return;
  }
  $play_0(this, fileName, soundId, priority);
}
;
_.stop_1 = function stop_5(fileName, soundId){
  if (this.isSoundEnabled && ($clinit_SoundManager$SoundManagerState() , AVAILABLE) == this.soundManagerState && this.isPlaySoundsDuringGame && !this.isErrorOccur) {
    $stop_1(this, fileName, soundId);
    $remove_11(this.currentPlayedSoundId, soundId);
  }
}
;
_ = SingleSoundManager.prototype;
_.onSoundFinish_0 = function onSoundFinish_2(fileURL, id){
  $equals(this.currentlyPlaySoundID, id) && (this.currentlyPlaySoundID = null);
}
;
_.play_1 = function play_7(fileName, soundId, priority, startPlayingIfCurrentlyPlayed){
  if (!startPlayingIfCurrentlyPlayed && this.currentlyPlaySoundID != null && $equals(this.currentlyPlaySoundID, soundId)) {
    return;
  }
  $play_1(this, fileName, soundId, priority);
}
;
_.stop_1 = function stop_6(fileName, soundId){
  if (this.isSoundEnabled && ($clinit_SoundManager$SoundManagerState() , AVAILABLE) == this.soundManagerState && this.isPlaySoundsDuringGame && !this.isErrorOccur) {
    $stop_1(this, fileName, soundId);
    this.currentlyPlaySoundID = null;
  }
}
;
function createNewEventsHandlerDiv(){
  if (envType_0 == ($clinit_Constants$CommonGamesConstants$ENVIRONMENT_TYPE() , WEB)) {
    return new EventsHandlerHoverDiv_0;
  }
  return new EventsHandlerDiv_0;
}

function setMouseHoverListener_0(div, divHoverListener){
  envType_0 == ($clinit_Constants$CommonGamesConstants$ENVIRONMENT_TYPE() , WEB) && instanceOf(div, Q$EventsHandlerHoverDiv) && $setMouseHoverListener_0(dynamicCast(div, Q$EventsHandlerHoverDiv), divHoverListener);
}

function setTooltip(div, tooltipText){
  envType_0 == ($clinit_Constants$CommonGamesConstants$ENVIRONMENT_TYPE() , WEB)?instanceOf(div, Q$EventsHandlerHoverDiv) && $setTitle(dynamicCast(div, Q$EventsHandlerHoverDiv), tooltipText):tooltipText == null || tooltipText.length == 0?(div.element.removeAttribute('title') , undefined):$setAttribute(div.element, 'title', tooltipText);
}

function $setMouseHoverListener_0(this$static, divHoverListener){
  this$static.hoverListener = divHoverListener;
}

function EventsHandlerHoverDiv_0(){
  EventsHandlerDiv_0.call(this);
  $addDomHandler(this, this, ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_7));
  $addDomHandler(this, this, ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_8));
  setStyleName(this.element, 'div-with-hover', true);
}

function EventsHandlerHoverDiv(){
}

_ = EventsHandlerHoverDiv_0.prototype = EventsHandlerHoverDiv.prototype = new EventsHandlerDiv;
_.getClass$ = function getClass_894(){
  return Lwebgl_client_nf_ui_hover_EventsHandlerHoverDiv_2_classLit;
}
;
_.onMouseOut = function onMouseOut_0(event_0){
  !!this.hoverListener && this.hoverListener.onMouseHoverOut(this);
}
;
_.onMouseOver = function onMouseOver_0(event_0){
  !!this.hoverListener && this.hoverListener.onMouseHoverIn(this);
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAllDragAndDropHandlers, Q$HasAllFocusHandlers, Q$HasAllGestureHandlers, Q$HasAllKeyHandlers, Q$HasAllMouseHandlers, Q$HasAllTouchHandlers, Q$HasBlurHandlers, Q$HasClickHandlers, Q$HasDoubleClickHandlers, Q$HasDragEndHandlers, Q$HasDragEnterHandlers, Q$HasDragHandlers, Q$HasDragLeaveHandlers, Q$HasDragOverHandlers, Q$HasDragStartHandlers, Q$HasDropHandlers, Q$HasFocusHandlers, Q$HasGestureChangeHandlers, Q$HasGestureEndHandlers, Q$HasGestureStartHandlers, Q$HasKeyDownHandlers, Q$HasKeyPressHandlers, Q$HasKeyUpHandlers, Q$HasMouseDownHandlers, Q$HasMouseMoveHandlers, Q$HasMouseOutHandlers, Q$HasMouseOverHandlers, Q$HasMouseUpHandlers, Q$HasMouseWheelHandlers, Q$HasTouchCancelHandlers, Q$HasTouchEndHandlers, Q$HasTouchMoveHandlers, Q$HasTouchStartHandlers, Q$MouseOutHandler, Q$MouseOverHandler, Q$HasAttachHandlers, Q$EventHandler, Q$HasHandlers, Q$EventListener, Q$FocusWidget, Q$Focusable, Q$HasEnabled, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$SourcesClickEvents, Q$SourcesFocusEvents, Q$SourcesKeyboardEvents, Q$SourcesMouseEvents, Q$UIObject, Q$Widget, Q$EventsHandlerHoverDiv, Q$IHoverDiv]);
_.hoverListener = null;
function $add_17(this$static, child){
  var td, tr;
  tr = $doc.createElement('tr');
  td = $doc.createElement('td');
  $appendChild(tr, $resolve(td));
  $appendChild(this$static.body_0, $resolve(tr));
  $add_0(this$static, child, td);
}

function TextPanel_0(){
  CellPanel_0.call(this);
}

function TextPanel(){
}

_ = TextPanel_0.prototype = TextPanel.prototype = new CellPanel;
_.add_1 = function add_21(child){
  $add_17(this, child);
}
;
_.getClass$ = function getClass_926(){
  return Lwebgl_client_ui_TextPanel_2_classLit;
}
;
_.castableTypeMap$ = makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$ComplexPanel, Q$HasVisibility, Q$HasWidgets, Q$IsWidget, Q$Panel, Q$UIObject, Q$Widget]);
var Lcom_google_gwt_canvas_dom_client_Context2d$TextAlign_2_classLit = createForEnum('com.google.gwt.canvas.dom.client.', 'Context2d$TextAlign', values_0), _3Lcom_google_gwt_canvas_dom_client_Context2d$TextAlign_2_classLit = createForArray('[Lcom.google.gwt.canvas.dom.client.', 'Context2d$TextAlign;'), Lcom_google_gwt_canvas_dom_client_Context2d$TextBaseline_2_classLit = createForEnum('com.google.gwt.canvas.dom.client.', 'Context2d$TextBaseline', values_1), _3Lcom_google_gwt_canvas_dom_client_Context2d$TextBaseline_2_classLit = createForArray('[Lcom.google.gwt.canvas.dom.client.', 'Context2d$TextBaseline;'), Lcom_google_gwt_i18n_client_NumberFormat_2_classLit = createForClass('com.google.gwt.i18n.client.', 'NumberFormat'), Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1_2_classLit = createForClass('com.google.gwt.i18n.client.constants.', 'NumberConstantsImpl_'), Ljava_lang_Float_2_classLit = createForClass('java.lang.', 'Float'), Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang.', 'StringBuilder'), Lwebgl_client_com_google_gwt_widgetideas_graphics_client_Color_2_classLit = createForClass('webgl.client.com.google.gwt.widgetideas.graphics.client.', 'Color'), Lwebgl_client_gamesFramework_OPTimer_2_classLit = createForClass('webgl.client.gamesFramework.', 'OPTimer'), Lwebgl_client_nf_menus_gamebuttons_CanvasButtonUpDown_2_classLit = createForClass('webgl.client.nf.menus.gamebuttons.', 'CanvasButtonUpDown'), Lwebgl_client_nf_menus_gamebuttons_CanvasButtonUpDownStandard_2_classLit = createForClass('webgl.client.nf.menus.gamebuttons.', 'CanvasButtonUpDownStandard'), Lwebgl_client_gamesFramework_autoplay_AutoPlayButton_2_classLit = createForClass('webgl.client.gamesFramework.autoplay.', 'AutoPlayButton'), Lwebgl_client_gamesFramework_autoplay_AutoPlayView$1_2_classLit = createForClass('webgl.client.gamesFramework.autoplay.', 'AutoPlayView$1'), Lwebgl_client_gamesFramework_autoplay_AutoPlayView$2_2_classLit = createForClass('webgl.client.gamesFramework.autoplay.', 'AutoPlayView$2'), Lwebgl_client_gamesFramework_autoplay_AutoPlayView$3_2_classLit = createForClass('webgl.client.gamesFramework.autoplay.', 'AutoPlayView$3'), Lwebgl_client_gamesFramework_autoplay_AutoPlayView$AutoPlayButtonEnum_2_classLit = createForEnum('webgl.client.gamesFramework.autoplay.', 'AutoPlayView$AutoPlayButtonEnum', values_17), _3Lwebgl_client_gamesFramework_autoplay_AutoPlayView$AutoPlayButtonEnum_2_classLit = createForArray('[Lwebgl.client.gamesFramework.autoplay.', 'AutoPlayView$AutoPlayButtonEnum;'), Lwebgl_client_nf_animator_AnimationController_2_classLit = createForClass('webgl.client.nf.animator.', 'AnimationController'), Lwebgl_client_nf_application_NewApplication$10_2_classLit = createForClass('webgl.client.nf.application.', 'NewApplication$10'), Lwebgl_client_nf_application_network_commands_RGRCommand_2_classLit = createForClass('webgl.client.nf.application.network.commands.', 'RGRCommand'), Lwebgl_client_nf_core_FontDefinition_2_classLit = createForClass('webgl.client.nf.core.', 'FontDefinition'), Lwebgl_client_nf_games_g431_Card_AbstractQueenOfDiamondsCardConfiguration_2_classLit = createForClass('webgl.client.nf.games.g431.Card.', 'AbstractQueenOfDiamondsCardConfiguration'), Lwebgl_client_nf_games_g431_Card_AbstractQueenOfDiamondsCardConfiguration$CardsState_2_classLit = createForEnum('webgl.client.nf.games.g431.Card.', 'AbstractQueenOfDiamondsCardConfiguration$CardsState', values_19), _3Lwebgl_client_nf_games_g431_Card_AbstractQueenOfDiamondsCardConfiguration$CardsState_2_classLit = createForArray('[Lwebgl.client.nf.games.g431.Card.', 'AbstractQueenOfDiamondsCardConfiguration$CardsState;'), Lwebgl_client_nf_gamesFramework_gameItem_item_AbstractGameItem_2_classLit = createForClass('webgl.client.nf.gamesFramework.gameItem.item.', 'AbstractGameItem'), Lwebgl_client_nf_gamesFramework_gameItem_item_AbstractInteractiveGameItem_2_classLit = createForClass('webgl.client.nf.gamesFramework.gameItem.item.', 'AbstractInteractiveGameItem'), Lwebgl_client_nf_games_g431_Card_QueenOfDiamondsCard_2_classLit = createForClass('webgl.client.nf.games.g431.Card.', 'QueenOfDiamondsCard'), Lwebgl_client_nf_games_g431_Card_QueenOfDiamondsWarCard_2_classLit = createForClass('webgl.client.nf.games.g431.Card.', 'QueenOfDiamondsWarCard'), Lwebgl_client_nf_games_g431_Card_jokerBonusCardConfig_QueenOfDiamondsJokerBonusCardConfigurationMobile_2_classLit = createForClass('webgl.client.nf.games.g431.Card.jokerBonusCardConfig.', 'QueenOfDiamondsJokerBonusCardConfigurationMobile'), Lwebgl_client_nf_games_g431_Card_jokerBonusCardConfig_QueenOfDiamondsJokerBonusCardConfigurationWeb_2_classLit = createForClass('webgl.client.nf.games.g431.Card.jokerBonusCardConfig.', 'QueenOfDiamondsJokerBonusCardConfigurationWeb'), Lwebgl_client_nf_games_g431_Card_mainGameCardConfig_QueenOfDiamondsMainGameCardConfigurationMobile_2_classLit = createForClass('webgl.client.nf.games.g431.Card.mainGameCardConfig.', 'QueenOfDiamondsMainGameCardConfigurationMobile'), Lwebgl_client_nf_games_g431_Card_mainGameCardConfig_QueenOfDiamondsMainGameCardConfigurationWeb_2_classLit = createForClass('webgl.client.nf.games.g431.Card.mainGameCardConfig.', 'QueenOfDiamondsMainGameCardConfigurationWeb'), Lwebgl_client_nf_games_g431_Card_service_QueenOfDiamondsCardsConfigurationsService_2_classLit = createForClass('webgl.client.nf.games.g431.Card.service.', 'QueenOfDiamondsCardsConfigurationsService'), Lwebgl_client_nf_games_g431_Card_warBonusCardConfig_AbstractQueenOfDiamondsWarCardConfiguration_2_classLit = createForClass('webgl.client.nf.games.g431.Card.warBonusCardConfig.', 'AbstractQueenOfDiamondsWarCardConfiguration'), Lwebgl_client_nf_games_g431_Card_warBonusCardConfig_QueenOfDiamondsWarBonusCardConfigurationMobile_2_classLit = createForClass('webgl.client.nf.games.g431.Card.warBonusCardConfig.', 'QueenOfDiamondsWarBonusCardConfigurationMobile'), Lwebgl_client_nf_games_g431_Card_warBonusCardConfig_QueenOfDiamondsWarBonusCardConfigurationWeb_2_classLit = createForClass('webgl.client.nf.games.g431.Card.warBonusCardConfig.', 'QueenOfDiamondsWarBonusCardConfigurationWeb'), Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame_2_classLit = createForClass('webgl.client.nf.gamesFramework.abstractGame.', 'AbstractGame'), Lwebgl_client_nf_games_g431_Game431_2_classLit = createForClass('webgl.client.nf.games.g431.', 'Game431'), Lwebgl_client_nf_games_g431_Game431$1_2_classLit = createForClass('webgl.client.nf.games.g431.', 'Game431$1'), Lwebgl_client_nf_games_g431_Game431$2_2_classLit = createForClass('webgl.client.nf.games.g431.', 'Game431$2'), Lwebgl_client_nf_games_g431_Game431$3_2_classLit = createForClass('webgl.client.nf.games.g431.', 'Game431$3'), Lwebgl_client_nf_games_g431_Game431$4_2_classLit = createForClass('webgl.client.nf.games.g431.', 'Game431$4'), Lwebgl_client_nf_games_g431_Game431$5_2_classLit = createForClass('webgl.client.nf.games.g431.', 'Game431$5'), Lwebgl_client_nf_games_g431_Game431$6_2_classLit = createForClass('webgl.client.nf.games.g431.', 'Game431$6'), Lwebgl_client_nf_games_g431_Game431$7_2_classLit = createForClass('webgl.client.nf.games.g431.', 'Game431$7'), Lwebgl_client_nf_games_g431_QueenOfDiamondsModel_2_classLit = createForClass('webgl.client.nf.games.g431.', 'QueenOfDiamondsModel'), Lwebgl_client_nf_games_g431_QueenOfDiamondsResources_2_classLit = createForEnum('webgl.client.nf.games.g431.', 'QueenOfDiamondsResources', values_20), _3Lwebgl_client_nf_games_g431_QueenOfDiamondsResources_2_classLit = createForArray('[Lwebgl.client.nf.games.g431.', 'QueenOfDiamondsResources;'), Lwebgl_client_nf_games_g431_QueenOfDiamondsTooltip_2_classLit = createForClass('webgl.client.nf.games.g431.', 'QueenOfDiamondsTooltip'), Lwebgl_client_nf_games_g431_allTime_QueenOfDiamondsAllTimeAnimationController_2_classLit = createForClass('webgl.client.nf.games.g431.allTime.', 'QueenOfDiamondsAllTimeAnimationController'), Lwebgl_client_nf_games_g431_allTime_QueenOfDiamondsAllTimeAnimationController$1_2_classLit = createForClass('webgl.client.nf.games.g431.allTime.', 'QueenOfDiamondsAllTimeAnimationController$1'), Lwebgl_client_nf_games_g431_allTime_QueenOfDiamondsAllTimeAnimationController$2_2_classLit = createForClass('webgl.client.nf.games.g431.allTime.', 'QueenOfDiamondsAllTimeAnimationController$2'), Lwebgl_client_nf_games_g431_allTime_QueenOfDiamondsAllTimeAnimationController$3_2_classLit = createForClass('webgl.client.nf.games.g431.allTime.', 'QueenOfDiamondsAllTimeAnimationController$3'), Lwebgl_client_nf_games_g431_bonuses_QueenOfDiamondsBonusesManager_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.', 'QueenOfDiamondsBonusesManager'), Lwebgl_client_nf_games_g431_bonuses_QueenOfDiamondsBonusesManager$BonusGamesState_2_classLit = createForEnum('webgl.client.nf.games.g431.bonuses.', 'QueenOfDiamondsBonusesManager$BonusGamesState', values_21), _3Lwebgl_client_nf_games_g431_bonuses_QueenOfDiamondsBonusesManager$BonusGamesState_2_classLit = createForArray('[Lwebgl.client.nf.games.g431.bonuses.', 'QueenOfDiamondsBonusesManager$BonusGamesState;'), Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusBoard_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.joker.', 'QueenOfDiamondsJokerBonusBoard'), _3Lwebgl_client_nf_games_g431_Card_QueenOfDiamondsCard_2_classLit = createForArray('[Lwebgl.client.nf.games.g431.Card.', 'QueenOfDiamondsCard;'), Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusBoard$1_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.joker.', 'QueenOfDiamondsJokerBonusBoard$1'), Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusBoard$2_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.joker.', 'QueenOfDiamondsJokerBonusBoard$2'), Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusManager_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.joker.', 'QueenOfDiamondsJokerBonusManager'), Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusManager$1_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.joker.', 'QueenOfDiamondsJokerBonusManager$1'), Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusManager$2_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.joker.', 'QueenOfDiamondsJokerBonusManager$2'), Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusManager$3_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.joker.', 'QueenOfDiamondsJokerBonusManager$3'), Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusPanel_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.joker.', 'QueenOfDiamondsJokerBonusPanel'), Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusPanel$1_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.joker.', 'QueenOfDiamondsJokerBonusPanel$1'), Lwebgl_client_nf_gamesFramework_ui_textCounterView_TextCounterView_2_classLit = createForClass('webgl.client.nf.gamesFramework.ui.textCounterView.', 'TextCounterView'), Lwebgl_client_nf_games_g431_bonuses_joker_QueenOfDiamondsJokerBonusPanel$2_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.joker.', 'QueenOfDiamondsJokerBonusPanel$2'), Lwebgl_client_nf_games_g431_bonuses_joker_paytable_QueenOfDiamondsJokerPaytable_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.joker.paytable.', 'QueenOfDiamondsJokerPaytable'), _3Lwebgl_client_nf_core_Location_2_classLit = createForArray('[Lwebgl.client.nf.core.', 'Location;'), Lwebgl_client_nf_games_g431_bonuses_joker_paytable_QueenOfDiamondsJokerPaytable$1_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.joker.paytable.', 'QueenOfDiamondsJokerPaytable$1'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusBoard_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusBoard'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusBoard$1_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusBoard$1'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusBoard$2_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusBoard$2'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusBoard$3_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusBoard$3'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusBoard$4_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusBoard$4'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusManager_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusManager'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusManager$1_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusManager$1'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusManager$2_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusManager$2'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusManager$3_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusManager$3'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusManager$4_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusManager$4'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusPanel_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusPanel'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusPanel$1_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusPanel$1'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusPanel$2_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusPanel$2'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusPanel$3_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusPanel$3'), Lwebgl_client_nf_games_g431_bonuses_war_QueenOfDiamondsWarBonusPanel$4_2_classLit = createForClass('webgl.client.nf.games.g431.bonuses.war.', 'QueenOfDiamondsWarBonusPanel$4'), Lwebgl_client_nf_games_g431_customization_QueenOfDiamondsCustomizationMobile_2_classLit = createForClass('webgl.client.nf.games.g431.customization.', 'QueenOfDiamondsCustomizationMobile'), Lwebgl_client_nf_games_g431_customization_QueenOfDiamondsCustomizationWeb_2_classLit = createForClass('webgl.client.nf.games.g431.customization.', 'QueenOfDiamondsCustomizationWeb'), _3Lwebgl_client_nf_resource_RotateResourcesLoader$ROTATION_1TYPE_2_classLit = createForArray('[Lwebgl.client.nf.resource.', 'RotateResourcesLoader$ROTATION_TYPE;'), Lwebgl_client_nf_games_location_AbstractGameLocations_2_classLit = createForClass('webgl.client.nf.games.location.', 'AbstractGameLocations'), Lwebgl_client_nf_games_g431_locations_QueenOfDiamondsLocations_2_classLit = createForClass('webgl.client.nf.games.g431.locations.', 'QueenOfDiamondsLocations'), Lwebgl_client_nf_games_g431_locations_QueenOfDiamondsLocationsMobile_2_classLit = createForClass('webgl.client.nf.games.g431.locations.', 'QueenOfDiamondsLocationsMobile'), Lwebgl_client_nf_games_g431_locations_QueenOfDiamondsLocationsWeb_2_classLit = createForClass('webgl.client.nf.games.g431.locations.', 'QueenOfDiamondsLocationsWeb'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$1_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard$1'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$10_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard$10'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$2_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard$2'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$3_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard$3'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$4_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard$4'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$5_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard$5'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$6_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard$6'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$7_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard$7'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$8_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard$8'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$9_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard$9'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$BonusType_2_classLit = createForEnum('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard$BonusType', values_22), _3Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$BonusType_2_classLit = createForArray('[Lwebgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard$BonusType;'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$PopupType_2_classLit = createForEnum('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard$PopupType', values_23), _3Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBoard$PopupType_2_classLit = createForArray('[Lwebgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBoard$PopupType;'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBonusPopup_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBonusPopup'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsBonusPopup$1_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsBonusPopup$1'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsMainArea_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsMainArea'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsMainArea$1_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsMainArea$1'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsMainArea$2_2_classLit = createForClass('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsMainArea$2'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes_2_classLit = createForEnum('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes', values_24), _3Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes_2_classLit = createForArray('[Lwebgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsMainArea$QueenOfDiamondsCardsSubTypes;'), Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes_2_classLit = createForEnum('webgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes', values_25), _3Lwebgl_client_nf_games_g431_mainGame_QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes_2_classLit = createForArray('[Lwebgl.client.nf.games.g431.mainGame.', 'QueenOfDiamondsMainArea$QueenOfDiamondsCardsTypes;'), Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGamePanel_2_classLit = createForClass('webgl.client.nf.gamesFramework.abstractGame.', 'AbstractGamePanel'), Lwebgl_client_nf_games_g431_panel_AbstractQueenOfDiamondsPanel_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'AbstractQueenOfDiamondsPanel'), Lwebgl_client_nf_games_g431_panel_AbstractQueenOfDiamondsPanel$1_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'AbstractQueenOfDiamondsPanel$1'), Lwebgl_client_nf_games_g431_panel_AbstractQueenOfDiamondsPanel$2_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'AbstractQueenOfDiamondsPanel$2'), Lwebgl_client_nf_games_g431_panel_AbstractQueenOfDiamondsPanel$3_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'AbstractQueenOfDiamondsPanel$3'), Lwebgl_client_nf_games_g431_panel_AbstractQueenOfDiamondsPanel$4_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'AbstractQueenOfDiamondsPanel$4'), Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelMobile_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'QueenOfDiamondsPanelMobile'), Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'QueenOfDiamondsPanelWeb'), Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$1_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'QueenOfDiamondsPanelWeb$1'), Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$2_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'QueenOfDiamondsPanelWeb$2'), Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$3_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'QueenOfDiamondsPanelWeb$3'), Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$4_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'QueenOfDiamondsPanelWeb$4'), Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$5_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'QueenOfDiamondsPanelWeb$5'), Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$6_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'QueenOfDiamondsPanelWeb$6'), Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$7_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'QueenOfDiamondsPanelWeb$7'), Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsPanelWeb$8_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'QueenOfDiamondsPanelWeb$8'), Lwebgl_client_nf_games_g431_panel_QueenOfDiamondsWinsArea_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'QueenOfDiamondsWinsArea'), Lwebgl_client_nf_games_g431_panel_WinUpToAndWinsSwitcherManager_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'WinUpToAndWinsSwitcherManager'), Lwebgl_client_nf_games_g431_panel_WinUpToAndWinsSwitcherManager$1_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'WinUpToAndWinsSwitcherManager$1'), Lwebgl_client_nf_games_g431_panel_WinUpToAndWinsSwitcherManager$2_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'WinUpToAndWinsSwitcherManager$2'), Lwebgl_client_nf_games_g431_panel_WinUpToAndWinsSwitcherManager$3_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'WinUpToAndWinsSwitcherManager$3'), Lwebgl_client_nf_games_g431_panel_WinUpToAndWinsSwitcherManager$4_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'WinUpToAndWinsSwitcherManager$4'), Lwebgl_client_nf_games_g431_panel_WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget_2_classLit = createForClass('webgl.client.nf.games.g431.panel.', 'WinUpToAndWinsSwitcherManager$QueenOfDiamondsSwitchingTweenMaxWidget'), _3_3D_classLit = createForArray('', '[[D'), Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsBigWinPopup_2_classLit = createForClass('webgl.client.nf.games.g431.popups.', 'QueenOfDiamondsBigWinPopup'), _3_3Lwebgl_client_nf_core_Location_2_classLit = createForArray('[[Lwebgl.client.nf.core.', 'Location;'), _3Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxElementWidget_2_classLit = createForArray('[Lwebgl.client.nf.gamesFramework.tweenMax.', 'TweenMaxElementWidget;'), Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxGenericSequenceManager_2_classLit = createForClass('webgl.client.nf.gamesFramework.tweenMax.', 'TweenMaxGenericSequenceManager'), _3Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxGenericSequenceManager_2_classLit = createForArray('[Lwebgl.client.nf.gamesFramework.tweenMax.', 'TweenMaxGenericSequenceManager;'), Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxGenericSequenceDO_2_classLit = createForClass('webgl.client.nf.gamesFramework.tweenMax.', 'TweenMaxGenericSequenceDO'), _3Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxGenericSequenceDO_2_classLit = createForArray('[Lwebgl.client.nf.gamesFramework.tweenMax.', 'TweenMaxGenericSequenceDO;'), Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsBigWinPopup$1_2_classLit = createForClass('webgl.client.nf.games.g431.popups.', 'QueenOfDiamondsBigWinPopup$1'), Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsBigWinPopup$2_2_classLit = createForClass('webgl.client.nf.games.g431.popups.', 'QueenOfDiamondsBigWinPopup$2'), Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsInfoPopup_2_classLit = createForClass('webgl.client.nf.games.g431.popups.', 'QueenOfDiamondsInfoPopup'), Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsInfoPopup$1_2_classLit = createForClass('webgl.client.nf.games.g431.popups.', 'QueenOfDiamondsInfoPopup$1'), Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsInfoPopup$2_2_classLit = createForClass('webgl.client.nf.games.g431.popups.', 'QueenOfDiamondsInfoPopup$2'), Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsInfoPopup$3_2_classLit = createForClass('webgl.client.nf.games.g431.popups.', 'QueenOfDiamondsInfoPopup$3'), Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsInfoPopup$InfoPopupType_2_classLit = createForEnum('webgl.client.nf.games.g431.popups.', 'QueenOfDiamondsInfoPopup$InfoPopupType', values_26), _3Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsInfoPopup$InfoPopupType_2_classLit = createForArray('[Lwebgl.client.nf.games.g431.popups.', 'QueenOfDiamondsInfoPopup$InfoPopupType;'), Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsItsAWinnerPopup_2_classLit = createForClass('webgl.client.nf.games.g431.popups.', 'QueenOfDiamondsItsAWinnerPopup'), _3Lwebgl_client_nf_animator_AnimationBank_2_classLit = createForArray('[Lwebgl.client.nf.animator.', 'AnimationBank;'), Lwebgl_client_nf_gamesFramework_gameItem_item_AnimGameItem_2_classLit = createForClass('webgl.client.nf.gamesFramework.gameItem.item.', 'AnimGameItem'), _3Lwebgl_client_nf_gamesFramework_gameItem_item_AnimGameItem_2_classLit = createForArray('[Lwebgl.client.nf.gamesFramework.gameItem.item.', 'AnimGameItem;'), Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsItsAWinnerPopup$1_2_classLit = createForClass('webgl.client.nf.games.g431.popups.', 'QueenOfDiamondsItsAWinnerPopup$1'), Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsItsAWinnerPopup$2_2_classLit = createForClass('webgl.client.nf.games.g431.popups.', 'QueenOfDiamondsItsAWinnerPopup$2'), Lwebgl_client_nf_ui_AbstractSplashScreen_AbstractSplashScreen_2_classLit = createForClass('webgl.client.nf.ui.AbstractSplashScreen.', 'AbstractSplashScreen'), Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsSplash_2_classLit = createForClass('webgl.client.nf.games.g431.popups.', 'QueenOfDiamondsSplash'), Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsSplash$1_2_classLit = createForClass('webgl.client.nf.games.g431.popups.', 'QueenOfDiamondsSplash$1'), Lwebgl_client_nf_games_g431_popups_QueenOfDiamondsSplash$2_2_classLit = createForClass('webgl.client.nf.games.g431.popups.', 'QueenOfDiamondsSplash$2'), Lwebgl_client_nf_games_g431_queenOfDiamondsDO_QueenOfDiamondsJokerBonusDO_2_classLit = createForClass('webgl.client.nf.games.g431.queenOfDiamondsDO.', 'QueenOfDiamondsJokerBonusDO'), Lwebgl_client_nf_games_g431_queenOfDiamondsDO_QueenOfDiamondsJokerBonusStepDO_2_classLit = createForClass('webgl.client.nf.games.g431.queenOfDiamondsDO.', 'QueenOfDiamondsJokerBonusStepDO'), Lwebgl_client_nf_games_g431_queenOfDiamondsDO_QueenOfDiamondsMainGameSymbolDO_2_classLit = createForClass('webgl.client.nf.games.g431.queenOfDiamondsDO.', 'QueenOfDiamondsMainGameSymbolDO'), Lwebgl_client_nf_games_g431_queenOfDiamondsDO_QueenOfDiamondsPrizeType_2_classLit = createForClass('webgl.client.nf.games.g431.queenOfDiamondsDO.', 'QueenOfDiamondsPrizeType'), Lwebgl_client_nf_games_g431_queenOfDiamondsDO_QueenOfDiamondsWarBonusDO_2_classLit = createForClass('webgl.client.nf.games.g431.queenOfDiamondsDO.', 'QueenOfDiamondsWarBonusDO'), Lwebgl_client_nf_games_g431_queenOfDiamondsDO_QueenOfDiamondsWarBonusStepDO_2_classLit = createForClass('webgl.client.nf.games.g431.queenOfDiamondsDO.', 'QueenOfDiamondsWarBonusStepDO'), Lwebgl_client_nf_gamesFramework_Util_animation_ViewMoveAnimation_2_classLit = createForClass('webgl.client.nf.gamesFramework.Util.animation.', 'ViewMoveAnimation'), Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$10_2_classLit = createForClass('webgl.client.nf.gamesFramework.abstractGame.', 'AbstractGame$10'), Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$11_2_classLit = createForClass('webgl.client.nf.gamesFramework.abstractGame.', 'AbstractGame$11'), Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$12_2_classLit = createForClass('webgl.client.nf.gamesFramework.abstractGame.', 'AbstractGame$12'), Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$3_2_classLit = createForClass('webgl.client.nf.gamesFramework.abstractGame.', 'AbstractGame$3'), Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$4_2_classLit = createForClass('webgl.client.nf.gamesFramework.abstractGame.', 'AbstractGame$4'), Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$5_2_classLit = createForClass('webgl.client.nf.gamesFramework.abstractGame.', 'AbstractGame$5'), Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$6_2_classLit = createForClass('webgl.client.nf.gamesFramework.abstractGame.', 'AbstractGame$6'), Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$7_2_classLit = createForClass('webgl.client.nf.gamesFramework.abstractGame.', 'AbstractGame$7'), Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$8_2_classLit = createForClass('webgl.client.nf.gamesFramework.abstractGame.', 'AbstractGame$8'), Lwebgl_client_nf_gamesFramework_abstractGame_AbstractGame$9_2_classLit = createForClass('webgl.client.nf.gamesFramework.abstractGame.', 'AbstractGame$9'), Lwebgl_client_nf_gamesFramework_abstractGame_interrupts_GameInterrupt_2_classLit = createForClass('webgl.client.nf.gamesFramework.abstractGame.interrupts.', 'GameInterrupt'), Lwebgl_client_nf_gamesFramework_abstractGame_interrupts_GameInterruptQueue_2_classLit = createForClass('webgl.client.nf.gamesFramework.abstractGame.interrupts.', 'GameInterruptQueue'), Lwebgl_client_nf_gamesFramework_frameManager_FrameManager$1_2_classLit = createForClass('webgl.client.nf.gamesFramework.frameManager.', 'FrameManager$1'), Lwebgl_client_nf_gamesFramework_gameItem_item_AbstractInteractiveGameItem$1_2_classLit = createForClass('webgl.client.nf.gamesFramework.gameItem.item.', 'AbstractInteractiveGameItem$1'), Lwebgl_client_nf_gamesFramework_gameItem_item_AnimGameItem$1_2_classLit = createForClass('webgl.client.nf.gamesFramework.gameItem.item.', 'AnimGameItem$1'), Lwebgl_client_nf_gamesFramework_gameItem_item_TextGameItem_2_classLit = createForClass('webgl.client.nf.gamesFramework.gameItem.item.', 'TextGameItem'), Lwebgl_client_nf_gamesFramework_gameManager_GameManager$4_2_classLit = createForClass('webgl.client.nf.gamesFramework.gameManager.', 'GameManager$4'), Lwebgl_client_nf_gamesFramework_gameManager_GameManager$5_2_classLit = createForClass('webgl.client.nf.gamesFramework.gameManager.', 'GameManager$5'), Lwebgl_client_nf_gamesFramework_observer_GameDataObserver_2_classLit = createForClass('webgl.client.nf.gamesFramework.observer.', 'GameDataObserver'), Lwebgl_client_nf_gamesFramework_tweenMax_AbstractTweenMaxGraphic_2_classLit = createForClass('webgl.client.nf.gamesFramework.tweenMax.', 'AbstractTweenMaxGraphic'), Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxElementImage_2_classLit = createForClass('webgl.client.nf.gamesFramework.tweenMax.', 'TweenMaxElementImage'), Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxUtils$EASE_1TYPE_2_classLit = createForEnum('webgl.client.nf.gamesFramework.tweenMax.', 'TweenMaxUtils$EASE_TYPE', values_33), _3Lwebgl_client_nf_gamesFramework_tweenMax_TweenMaxUtils$EASE_1TYPE_2_classLit = createForArray('[Lwebgl.client.nf.gamesFramework.tweenMax.', 'TweenMaxUtils$EASE_TYPE;'), Lwebgl_client_nf_gamesFramework_ui_textCounterView_TextCounterView$1_2_classLit = createForClass('webgl.client.nf.gamesFramework.ui.textCounterView.', 'TextCounterView$1'), Lwebgl_client_nf_menus_gamebuttons_CanvasButton_2_classLit = createForClass('webgl.client.nf.menus.gamebuttons.', 'CanvasButton'), Lwebgl_client_nf_menus_gamebuttons_CanvasButton$1_2_classLit = createForClass('webgl.client.nf.menus.gamebuttons.', 'CanvasButton$1'), Lwebgl_client_nf_menus_gamebuttons_CanvasButton$2_2_classLit = createForClass('webgl.client.nf.menus.gamebuttons.', 'CanvasButton$2'), Lwebgl_client_nf_menus_gamebuttons_CanvasButtonUpDown$1_2_classLit = createForClass('webgl.client.nf.menus.gamebuttons.', 'CanvasButtonUpDown$1'), Lwebgl_client_nf_menus_gamebuttons_CanvasButtonUpDown$2_2_classLit = createForClass('webgl.client.nf.menus.gamebuttons.', 'CanvasButtonUpDown$2'), Lwebgl_client_nf_resource_RotateResourceElement_2_classLit = createForClass('webgl.client.nf.resource.', 'RotateResourceElement'), Lwebgl_client_nf_resource_items_LoadingItemSound_2_classLit = createForClass('webgl.client.nf.resource.items.', 'LoadingItemSound'), Lwebgl_client_nf_sounds_SoundDO_2_classLit = createForClass('webgl.client.nf.sounds.', 'SoundDO'), Lwebgl_client_nf_sounds_soundInstance_SoundInstance_2_classLit = createForClass('webgl.client.nf.sounds.soundInstance.', 'SoundInstance'), Lwebgl_client_nf_sounds_soundInstance_AndroidSoundInstance_2_classLit = createForClass('webgl.client.nf.sounds.soundInstance.', 'AndroidSoundInstance'), Lwebgl_client_nf_sounds_soundInstance_ChromeSoundInstance_2_classLit = createForClass('webgl.client.nf.sounds.soundInstance.', 'ChromeSoundInstance'), Lwebgl_client_nf_sounds_soundInstance_IESoundInstance_2_classLit = createForClass('webgl.client.nf.sounds.soundInstance.', 'IESoundInstance'), Lwebgl_client_nf_sounds_soundInstance_IOSSoundInstance_2_classLit = createForClass('webgl.client.nf.sounds.soundInstance.', 'IOSSoundInstance'), Lwebgl_client_nf_ui_hover_EventsHandlerHoverDiv_2_classLit = createForClass('webgl.client.nf.ui.hover.', 'EventsHandlerHoverDiv'), Lwebgl_client_ui_TextPanel_2_classLit = createForClass('webgl.client.ui.', 'TextPanel');
$entry(onLoad_0)(1);
