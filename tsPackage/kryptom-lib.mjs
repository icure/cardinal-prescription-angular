import {
  charArray2ujmm1qusno00 as charArray,
  toLongw1zpgk99d84b as toLong,
  Long2qws0ah9gnpki as Long,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Unit_instance104q5opgivhr8 as Unit_instance,
  concatToString3cxf0c1gqonpo as concatToString,
  until1jbpn0z3f8lbg as until,
  _Char___init__impl__6a9atx281r2pd9o601g as _Char___init__impl__6a9atx,
  charSequenceLength3278n89t01tmv as charSequenceLength,
  toString1pkumu07cwy4m as toString,
  IllegalArgumentException_init_$Create$310sysrobvll9 as IllegalArgumentException_init_$Create$,
  last2n4gf5az1lkn4 as last,
  sliceArray2hu2ljigibgmi as sliceArray,
  getOrNull3idcogs0ybps as getOrNull,
  longArray288a0fctlmjmj as longArray,
  numberToChar93r9buh19yek as numberToChar,
  indexOf1xbs558u7wr52 as indexOf,
  getOrNullef5jbxih7r4f as getOrNull_0,
  toByte4i43936u611k as toByte,
  Companion_getInstance2jfkguz61ctfl as Companion_getInstance,
  toHexString5bhtjxqec7ow as toHexString,
  hexToByteArrayj26yk4970vc7 as hexToByteArray,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Buffergs925ekssbch as Buffer,
  writeString33ca4btrgctw7 as writeString,
  readByteArray1ri21h2rciakw as readByteArray,
} from './kotlinx-io-kotlinx-io-core.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
//endregion
function get_BASE32_INVERSE_ALPHABET_STANDARD() {
  _init_properties_Base32_kt__x6ecls();
  return BASE32_INVERSE_ALPHABET_STANDARD;
}
var BASE32_INVERSE_ALPHABET_STANDARD;
function base32Encode(bytes) {
  _init_properties_Base32_kt__x6ecls();
  return encodeBase32(bytes, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567');
}
function base32Decode(base32String) {
  _init_properties_Base32_kt__x6ecls();
  return decodeBase32(base32String, get_BASE32_INVERSE_ALPHABET_STANDARD());
}
function encodeBase32(data, alphabet) {
  _init_properties_Base32_kt__x6ecls();
  var position = {_v: 0};
  var writeOffset = 0;
  var charArray_0 = charArray((imul(data.length, 8) / 5 | 0) + 7 | 0);
  while ((position._v + 5 | 0) < data.length) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(5);
    while (tmp < 5) {
      var tmp_1 = tmp;
      tmp_0[tmp_1] = toLong(data[position._v + tmp_1 | 0]);
      tmp = tmp + 1 | 0;
    }
    var octets = tmp_0;
    position._v = position._v + 5 | 0;
    // Inline function 'kotlin.collections.foldIndexed' call
    var index = 0;
    var accumulator = new Long(0, 0);
    var inductionVariable = 0;
    var last = octets.length;
    while (inductionVariable < last) {
      var element = octets[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      accumulator = accumulator.h3(element.g3(new Long(255, 0)).d3(32 - imul(8, _unary__edvuaz) | 0));
    }
    var chunk = accumulator;
    var inductionVariable_0 = 7;
    if (0 <= inductionVariable_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + -1 | 0;
        var char = chunk.e3(imul(5, index_0)).j1() & 31;
        var _unary__edvuaz_0 = writeOffset;
        writeOffset = _unary__edvuaz_0 + 1 | 0;
        charArray_0[_unary__edvuaz_0] = charSequenceGet(alphabet, char);
      }
       while (0 <= inductionVariable_0);
  }
  var remaining = data.length - position._v | 0;
  if (remaining === 0)
    return concatToString(charArray_0, 0, writeOffset);
  var tmp6 = until(0, 5);
  // Inline function 'kotlin.collections.fold' call
  var accumulator_0 = new Long(0, 0);
  var inductionVariable_1 = tmp6.f1_1;
  var last_0 = tmp6.g1_1;
  if (inductionVariable_1 <= last_0)
    do {
      var element_0 = inductionVariable_1;
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      var tmp8 = accumulator_0;
      var idx = element_0;
      var tmp_2;
      if (idx < remaining) {
        tmp_2 = toLong(data[position._v + idx | 0]);
      } else {
        tmp_2 = new Long(0, 0);
      }
      var octet = tmp_2;
      accumulator_0 = tmp8.h3(octet.g3(new Long(255, 0)).d3(32 - imul(8, idx) | 0));
    }
     while (!(element_0 === last_0));
  var chunk_0 = accumulator_0;
  var padSize = imul(5 - remaining | 0, 8) / 5 | 0;
  var inductionVariable_2 = 7;
  if (padSize <= inductionVariable_2)
    do {
      var index_1 = inductionVariable_2;
      inductionVariable_2 = inductionVariable_2 + -1 | 0;
      var char_0 = chunk_0.e3(imul(5, index_1)).j1() & 31;
      var _unary__edvuaz_1 = writeOffset;
      writeOffset = _unary__edvuaz_1 + 1 | 0;
      charArray_0[_unary__edvuaz_1] = charSequenceGet(alphabet, char_0);
    }
     while (!(index_1 === padSize));
  // Inline function 'kotlin.repeat' call
  var inductionVariable_3 = 0;
  if (inductionVariable_3 < padSize)
    do {
      var index_2 = inductionVariable_3;
      inductionVariable_3 = inductionVariable_3 + 1 | 0;
      var _unary__edvuaz_2 = writeOffset;
      writeOffset = _unary__edvuaz_2 + 1 | 0;
      charArray_0[_unary__edvuaz_2] = _Char___init__impl__6a9atx(61);
    }
     while (inductionVariable_3 < padSize);
  return concatToString(charArray_0, 0, writeOffset);
}
function decodeBase32(input, lookupTable) {
  _init_properties_Base32_kt__x6ecls();
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(input) === 0) {
    // Inline function 'kotlin.byteArrayOf' call
    return new Int8Array([]);
  }
  var tmp;
  if (last(input) === _Char___init__impl__6a9atx(61)) {
    // Inline function 'kotlin.require' call
    if (!((input.length % 8 | 0) === 0)) {
      var message = 'Invalid padded base32 string length: ' + input.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!(charSequenceGet(input, input.length - 7 | 0) === _Char___init__impl__6a9atx(61))) {
      var message_0 = 'Too much padding';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$7;
    $l$block: {
      // Inline function 'kotlin.text.indexOfFirst' call
      var inductionVariable = 0;
      var last_0 = charSequenceLength(input) - 1 | 0;
      if (inductionVariable <= last_0)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (charSequenceGet(input, index) === _Char___init__impl__6a9atx(61)) {
            tmp$ret$7 = index;
            break $l$block;
          }
        }
         while (inductionVariable <= last_0);
      tmp$ret$7 = -1;
    }
    var lastPadIndex = tmp$ret$7;
    // Inline function 'kotlin.require' call
    if (!(lastPadIndex > (input.length - 7 | 0))) {
      var message_1 = 'Invalid base32 string, padding before last octets';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = input.substring(0, lastPadIndex);
  } else {
    tmp = input;
  }
  var unpaddedData = tmp;
  // Inline function 'kotlin.apply' call
  var this_0 = new Buffer();
  writeString(this_0, unpaddedData);
  var packet = this_0;
  var bufferSize = 8;
  var data = new Int8Array(bufferSize);
  // Inline function 'kotlin.apply' call
  var this_1 = new Buffer();
  while (!packet.k1c()) {
    var read = packet.k1d(data);
    // Inline function 'kotlin.let' call
    var tmp_0;
    if (read < bufferSize) {
      tmp_0 = sliceArray(data, until(0, read));
    } else {
      tmp_0 = data;
    }
    var tmp2 = tmp_0;
    // Inline function 'kotlin.collections.foldIndexed' call
    var index_0 = 0;
    var accumulator = new Long(0, 0);
    var inductionVariable_0 = 0;
    var last_1 = tmp2.length;
    while (inductionVariable_0 < last_1) {
      var element = tmp2[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      var _unary__edvuaz = index_0;
      index_0 = _unary__edvuaz + 1 | 0;
      var result = accumulator;
      var tmp0_safe_receiver = getOrNull(lookupTable, element);
      var tmp_1;
      if (tmp0_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_2;
        if (tmp0_safe_receiver.e1(new Long(0, 0)) >= 0) {
          tmp_2 = tmp0_safe_receiver;
        } else {
          tmp_2 = null;
        }
        tmp_1 = tmp_2;
      }
      var tmp1_elvis_lhs = tmp_1;
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$('Invalid base32 character: ' + element);
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      var found = tmp_3;
      accumulator = result.h3(found.d3(imul(7 - _unary__edvuaz | 0, 5)));
    }
    var chunk = accumulator;
    var tmp_4;
    switch (read) {
      case 2:
        tmp_4 = 4;
        break;
      case 4:
        tmp_4 = 3;
        break;
      case 5:
        tmp_4 = 2;
        break;
      case 7:
        tmp_4 = 1;
        break;
      case 8:
        tmp_4 = 0;
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Invalid base 32 character, loaded ' + read + ' bytes');
    }
    var bytesToLoad = tmp_4;
    var inductionVariable_1 = 4;
    if (bytesToLoad <= inductionVariable_1)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + -1 | 0;
        var origin = chunk.e3(imul(8, index_1)).g3(new Long(255, 0));
        this_1.e1e(origin.j3());
      }
       while (!(index_1 === bytesToLoad));
  }
  return readByteArray(this_1);
}
var properties_initialized_Base32_kt_5ejedq;
function _init_properties_Base32_kt__x6ecls() {
  if (!properties_initialized_Base32_kt_5ejedq) {
    properties_initialized_Base32_kt_5ejedq = true;
    var tmp = 0;
    var tmp_0 = longArray(256);
    while (tmp < 256) {
      var tmp_1 = tmp;
      tmp_0[tmp_1] = toLong(indexOf('ABCDEFGHIJKLMNOPQRSTUVWXYZ234567', numberToChar(tmp_1)));
      tmp = tmp + 1 | 0;
    }
    BASE32_INVERSE_ALPHABET_STANDARD = tmp_0;
  }
}
function get_BASE64_INVERSE_ALPHABET_STANDARD() {
  _init_properties_Base64_kt__ymmsz3();
  return BASE64_INVERSE_ALPHABET_STANDARD;
}
var BASE64_INVERSE_ALPHABET_STANDARD;
var BASE64_INVERSE_ALPHABET_URL;
function encodeBase64(data, alphabet) {
  _init_properties_Base64_kt__ymmsz3();
  var position = 0;
  var writeOffset = 0;
  var charArray_0 = charArray((imul(data.length, 8) / 6 | 0) + 3 | 0);
  while ((position + 3 | 0) <= data.length) {
    var first = data[position];
    var second = data[position + 1 | 0];
    var third = data[position + 2 | 0];
    position = position + 3 | 0;
    var chunk = (first & 255) << 16 | (second & 255) << 8 | third & 255;
    var inductionVariable = 3;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var char = chunk >> imul(6, index) & 63;
        var _unary__edvuaz = writeOffset;
        writeOffset = _unary__edvuaz + 1 | 0;
        charArray_0[_unary__edvuaz] = charSequenceGet(alphabet, char);
      }
       while (0 <= inductionVariable);
  }
  var remaining = data.length - position | 0;
  if (remaining === 0)
    return concatToString(charArray_0, 0, writeOffset);
  var tmp;
  if (remaining === 1) {
    tmp = (data[position] & 255) << 16 | 0 | 0;
  } else {
    tmp = (data[position] & 255) << 16 | (data[position + 1 | 0] & 255) << 8 | 0;
  }
  var chunk_0 = tmp;
  var padSize = imul(3 - remaining | 0, 8) / 6 | 0;
  var inductionVariable_0 = 3;
  if (padSize <= inductionVariable_0)
    do {
      var index_0 = inductionVariable_0;
      inductionVariable_0 = inductionVariable_0 + -1 | 0;
      var char_0 = chunk_0 >> imul(6, index_0) & 63;
      var _unary__edvuaz_0 = writeOffset;
      writeOffset = _unary__edvuaz_0 + 1 | 0;
      charArray_0[_unary__edvuaz_0] = charSequenceGet(alphabet, char_0);
    }
     while (!(index_0 === padSize));
  // Inline function 'kotlin.repeat' call
  var inductionVariable_1 = 0;
  if (inductionVariable_1 < padSize)
    do {
      var index_1 = inductionVariable_1;
      inductionVariable_1 = inductionVariable_1 + 1 | 0;
      var _unary__edvuaz_1 = writeOffset;
      writeOffset = _unary__edvuaz_1 + 1 | 0;
      charArray_0[_unary__edvuaz_1] = _Char___init__impl__6a9atx(61);
    }
     while (inductionVariable_1 < padSize);
  return concatToString(charArray_0, 0, writeOffset);
}
function decodeBase64(input, lookupTable) {
  _init_properties_Base64_kt__ymmsz3();
  // Inline function 'kotlin.text.isEmpty' call
  if (charSequenceLength(input) === 0) {
    // Inline function 'kotlin.byteArrayOf' call
    return new Int8Array([]);
  }
  var tmp;
  if (charSequenceGet(input, input.length - 1 | 0) === _Char___init__impl__6a9atx(61)) {
    // Inline function 'kotlin.require' call
    if (!((input.length % 4 | 0) === 0)) {
      var message = 'Invalid padded base64 string length: ' + input.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!(charSequenceGet(input, input.length - 3 | 0) === _Char___init__impl__6a9atx(61))) {
      var message_0 = 'Too much padding';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp_0;
    if (charSequenceGet(input, input.length - 2 | 0) === _Char___init__impl__6a9atx(61)) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = input.length - 2 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = input.substring(0, endIndex);
    } else {
      // Inline function 'kotlin.text.substring' call
      var endIndex_0 = input.length - 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = input.substring(0, endIndex_0);
    }
    tmp = tmp_0;
  } else {
    tmp = input;
  }
  var unpaddedData = tmp;
  // Inline function 'kotlin.apply' call
  var this_0 = new Buffer();
  writeString(this_0, unpaddedData);
  var packet = this_0;
  var bufferSize = 4;
  var data = new Int8Array(bufferSize);
  // Inline function 'kotlin.apply' call
  var this_1 = new Buffer();
  while (!packet.k1c()) {
    var read = packet.k1d(data);
    // Inline function 'kotlin.let' call
    var tmp_1;
    if (read < bufferSize) {
      tmp_1 = sliceArray(data, until(0, read));
    } else {
      tmp_1 = data;
    }
    // Inline function 'kotlin.collections.foldIndexed' call
    var index = 0;
    var accumulator = 0;
    var indexedObject = tmp_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var result = accumulator;
      var tmp0_safe_receiver = getOrNull_0(lookupTable, element);
      var tmp_2;
      if (tmp0_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_3;
        if (tmp0_safe_receiver >= 0) {
          tmp_3 = tmp0_safe_receiver;
        } else {
          tmp_3 = null;
        }
        tmp_2 = tmp_3;
      }
      var tmp1_elvis_lhs = tmp_2;
      var tmp_4;
      if (tmp1_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$('Invalid base64 character: ' + element);
      } else {
        tmp_4 = tmp1_elvis_lhs;
      }
      var found = tmp_4;
      accumulator = result | found << imul(3 - _unary__edvuaz | 0, 6);
    }
    var chunk = accumulator;
    var inductionVariable_0 = bufferSize - 2 | 0;
    var last_0 = bufferSize - read | 0;
    if (last_0 <= inductionVariable_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + -1 | 0;
        var origin = chunk >> imul(8, index_0) & 255;
        this_1.e1e(toByte(origin));
      }
       while (!(index_0 === last_0));
  }
  return readByteArray(this_1);
}
function base64Encode(bytes) {
  _init_properties_Base64_kt__ymmsz3();
  return encodeBase64(bytes, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/');
}
function base64Decode(base64String) {
  _init_properties_Base64_kt__ymmsz3();
  return decodeBase64(base64String, get_BASE64_INVERSE_ALPHABET_STANDARD());
}
var properties_initialized_Base64_kt_5g824v;
function _init_properties_Base64_kt__ymmsz3() {
  if (!properties_initialized_Base64_kt_5g824v) {
    properties_initialized_Base64_kt_5g824v = true;
    var tmp = 0;
    var tmp_0 = new Int32Array(256);
    while (tmp < 256) {
      var tmp_1 = tmp;
      tmp_0[tmp_1] = indexOf('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', numberToChar(tmp_1));
      tmp = tmp + 1 | 0;
    }
    BASE64_INVERSE_ALPHABET_STANDARD = tmp_0;
    var tmp_2 = 0;
    var tmp_3 = new Int32Array(256);
    while (tmp_2 < 256) {
      var tmp_4 = tmp_2;
      tmp_3[tmp_4] = indexOf('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_', numberToChar(tmp_4));
      tmp_2 = tmp_2 + 1 | 0;
    }
    BASE64_INVERSE_ALPHABET_URL = tmp_3;
  }
}
function toHexString_0(_this__u8e3s4) {
  return toHexString(_this__u8e3s4, Companion_getInstance().nh_1);
}
function hexToByteArray_0(hexString) {
  return hexToByteArray(hexString, Companion_getInstance().nh_1);
}
//region block: exports
export {
  base32Decode as base32Decode2jbdu2t0l4088,
  base32Encode as base32Encodekmf3yf2s0juj,
  base64Decode as base64Decodes731id9on7gy,
  base64Encode as base64Encode2qlepsvd3tele,
  hexToByteArray_0 as hexToByteArray3fb7kdnap6dyp,
  toHexString_0 as toHexStringu73q9mlb2b2a,
};
//endregion

//# sourceMappingURL=kryptom-lib.mjs.map
