import {
  VOID7hggqo3abtya as VOID,
  copyOfRange3alro60z4hhf8 as copyOfRange,
  protoOf180f3jzyo7rfj as protoOf,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  toCharArray32huqyw9tt7kx as toCharArray,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  Unit_instance104q5opgivhr8 as Unit_instance,
  contentEquals1cdp6c846cfdi as contentEquals,
  contentHashCode25jw6rgkgywwr as contentHashCode,
  IndexOutOfBoundsException_init_$Create$jb51qtvf74or as IndexOutOfBoundsException_init_$Create$,
  _UByte___init__impl__g9hnc415bxbmye0j11o as _UByte___init__impl__g9hnc4,
  _UByte___get_data__impl__jof9qrfj1ch8mjizvj as _UByte___get_data__impl__jof9qr,
  compareTo3ankvs086tmwq as compareTo,
  StringBuilder_init_$Create$23o1ixl6cos5l as StringBuilder_init_$Create$,
  _Char___init__impl__6a9atx281r2pd9o601g as _Char___init__impl__6a9atx,
  Comparable198qfk8pnblz0 as Comparable,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  decodeToString1x4faah2liw2p as decodeToString,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
initMetadataForCompanion(Companion);
initMetadataForClass(ByteString, 'ByteString', VOID, VOID, [Comparable]);
initMetadataForObject(UnsafeByteStringOperations, 'UnsafeByteStringOperations');
//endregion
function ByteString_init_$Init$(data, startIndex, endIndex, $this) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? data.length : endIndex;
  ByteString.call($this, copyOfRange(data, startIndex, endIndex), null);
  return $this;
}
function ByteString_init_$Create$(data, startIndex, endIndex) {
  return ByteString_init_$Init$(data, startIndex, endIndex, objectCreate(protoOf(ByteString)));
}
function Companion() {
  Companion_instance = this;
  this.w1b_1 = new ByteString(new Int8Array(0), null);
  this.x1b_1 = toCharArray('0123456789abcdef');
}
protoOf(Companion).y1b = function (byteArray) {
  return new ByteString(byteArray, null);
};
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance == null)
    new Companion();
  return Companion_instance;
}
function ByteString(data, dummy) {
  Companion_getInstance();
  this.z1b_1 = data;
  this.a1c_1 = 0;
}
protoOf(ByteString).p = function () {
  return this.z1b_1.length;
};
protoOf(ByteString).equals = function (other) {
  if (this === other)
    return true;
  if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
    return false;
  if (!(other instanceof ByteString))
    THROW_CCE();
  if (!(other.z1b_1.length === this.z1b_1.length))
    return false;
  if (!(other.a1c_1 === 0) && !(this.a1c_1 === 0) && !(other.a1c_1 === this.a1c_1))
    return false;
  return contentEquals(this.z1b_1, other.z1b_1);
};
protoOf(ByteString).hashCode = function () {
  var hc = this.a1c_1;
  if (hc === 0) {
    hc = contentHashCode(this.z1b_1);
    this.a1c_1 = hc;
  }
  return hc;
};
protoOf(ByteString).u = function (index) {
  if (index < 0 || index >= this.p())
    throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of byte string bounds: [0..' + this.p() + ')');
  return this.z1b_1[index];
};
protoOf(ByteString).b1c = function (startIndex, endIndex) {
  var tmp;
  if (startIndex === endIndex) {
    tmp = Companion_getInstance().w1b_1;
  } else {
    tmp = ByteString_init_$Create$(this.z1b_1, startIndex, endIndex);
  }
  return tmp;
};
protoOf(ByteString).c1c = function (startIndex, endIndex, $super) {
  endIndex = endIndex === VOID ? this.p() : endIndex;
  return $super === VOID ? this.b1c(startIndex, endIndex) : $super.b1c.call(this, startIndex, endIndex);
};
protoOf(ByteString).d1c = function (other) {
  if (other === this)
    return 0;
  var localData = this.z1b_1;
  var otherData = other.z1b_1;
  var inductionVariable = 0;
  var tmp0 = this.p();
  // Inline function 'kotlin.math.min' call
  var b = other.p();
  var last = Math.min(tmp0, b);
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.toUByte' call
      var this_0 = localData[i];
      var tmp4 = _UByte___init__impl__g9hnc4(this_0);
      // Inline function 'kotlin.toUByte' call
      var this_1 = otherData[i];
      // Inline function 'kotlin.UByte.compareTo' call
      var other_0 = _UByte___init__impl__g9hnc4(this_1);
      // Inline function 'kotlin.UByte.toInt' call
      var tmp = _UByte___get_data__impl__jof9qr(tmp4) & 255;
      // Inline function 'kotlin.UByte.toInt' call
      var tmp$ret$4 = _UByte___get_data__impl__jof9qr(other_0) & 255;
      var cmp = compareTo(tmp, tmp$ret$4);
      if (!(cmp === 0))
        return cmp;
    }
     while (inductionVariable < last);
  return compareTo(this.p(), other.p());
};
protoOf(ByteString).d = function (other) {
  return this.d1c(other instanceof ByteString ? other : THROW_CCE());
};
protoOf(ByteString).toString = function () {
  if (isEmpty(this)) {
    return 'ByteString(size=0)';
  }
  var sizeStr = this.p().toString();
  var len = (22 + sizeStr.length | 0) + imul(this.p(), 2) | 0;
  // Inline function 'kotlin.with' call
  var $this$with = StringBuilder_init_$Create$(len);
  $this$with.c8('ByteString(size=');
  $this$with.c8(sizeStr);
  $this$with.c8(' hex=');
  var localData = this.z1b_1;
  var inductionVariable = 0;
  var last = this.p();
  if (inductionVariable < last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var b = localData[i];
      $this$with.d8(Companion_getInstance().x1b_1[(b >>> 4 | 0) & 15]);
      $this$with.d8(Companion_getInstance().x1b_1[b & 15]);
    }
     while (inductionVariable < last);
  return $this$with.d8(_Char___init__impl__6a9atx(41)).toString();
};
protoOf(ByteString).e1c = function () {
  return this.z1b_1;
};
function ByteString_0(bytes) {
  var tmp;
  // Inline function 'kotlin.collections.isEmpty' call
  if (bytes.length === 0) {
    tmp = Companion_getInstance().w1b_1;
  } else {
    tmp = Companion_getInstance().y1b(bytes);
  }
  return tmp;
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.p() === 0;
}
function decodeToString_0(_this__u8e3s4) {
  return decodeToString(_this__u8e3s4.e1c());
}
function UnsafeByteStringOperations() {
}
protoOf(UnsafeByteStringOperations).f1c = function (array) {
  return Companion_getInstance().y1b(array);
};
var UnsafeByteStringOperations_instance;
function UnsafeByteStringOperations_getInstance() {
  return UnsafeByteStringOperations_instance;
}
//region block: init
UnsafeByteStringOperations_instance = new UnsafeByteStringOperations();
//endregion
//region block: exports
export {
  ByteString_init_$Create$ as ByteString_init_$Create$szylcqpww4kx,
  UnsafeByteStringOperations_instance as UnsafeByteStringOperations_instance39s7tll95rf4n,
  ByteString_0 as ByteString3c9fk8lsh3lvs,
  decodeToString_0 as decodeToString2ede220pr5xir,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-bytestring.mjs.map
