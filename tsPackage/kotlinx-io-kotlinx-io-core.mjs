import {
  IndexOutOfBoundsException_init_$Create$jb51qtvf74or as IndexOutOfBoundsException_init_$Create$,
  Long2qws0ah9gnpki as Long,
  IllegalArgumentException_init_$Create$310sysrobvll9 as IllegalArgumentException_init_$Create$,
  _Char___init__impl__6a9atx281r2pd9o601g as _Char___init__impl__6a9atx,
  charArrayOf27f4r3dozbrk1 as charArrayOf,
  protoOf180f3jzyo7rfj as protoOf,
  toString1pkumu07cwy4m as toString,
  Unit_instance104q5opgivhr8 as Unit_instance,
  toShort36kaw0zjdq3ex as toShort,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  toLongw1zpgk99d84b as toLong,
  StringBuilder_init_$Create$23o1ixl6cos5l as StringBuilder_init_$Create$,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  VOID7hggqo3abtya as VOID,
  IllegalStateException_init_$Create$3ib9qa3pip8n4 as IllegalStateException_init_$Create$,
  AutoCloseable1l5p57f9lp7kv as AutoCloseable,
  objectCreate1ve4bgxiu4x98 as objectCreate,
  initMetadataForCompanion1wyw17z38v6ac as initMetadataForCompanion,
  arrayCopytctsywo3h7gj as arrayCopy,
  toByte4i43936u611k as toByte,
  IllegalArgumentException_init_$Create$2lx7x8ynu2218 as IllegalArgumentException_init_$Create$_0,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  charSequenceGet1vxk1y5n17t1z as charSequenceGet,
  Char__toInt_impl_vasixd2xlaiz5u3itpv as Char__toInt_impl_vasixd,
  charArray2ujmm1qusno00 as charArray,
  numberToChar93r9buh19yek as numberToChar,
  concatToString3cxf0c1gqonpo as concatToString,
  Exception_init_$Init$1f5sozasf31ba as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  Exception_init_$Init$32vb8wlewqrmh as Exception_init_$Init$_0,
  Exception_init_$Init$2fx1sms2m4tu1 as Exception_init_$Init$_1,
  Exceptiondt2hlxn7j7vw as Exception,
} from './kotlin-kotlin-stdlib.mjs';
import { UnsafeByteStringOperations_instance39s7tll95rf4n as UnsafeByteStringOperations_instance } from './kotlinx-io-kotlinx-io-bytestring.mjs';
//region block: imports
var imul = Math.imul;
//endregion
//region block: pre-declaration
function readAtMostTo$default(sink, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? sink.length : endIndex;
  return $super === VOID ? this.i1d(sink, startIndex, endIndex) : $super.i1d.call(this, sink, startIndex, endIndex);
}
initMetadataForInterface(Source, 'Source', VOID, VOID, [AutoCloseable]);
function write$default(source, startIndex, endIndex, $super) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? source.length : endIndex;
  var tmp;
  if ($super === VOID) {
    this.u1d(source, startIndex, endIndex);
    tmp = Unit_instance;
  } else {
    tmp = $super.u1d.call(this, source, startIndex, endIndex);
  }
  return tmp;
}
initMetadataForInterface(Sink, 'Sink', VOID, VOID, [AutoCloseable]);
initMetadataForClass(Buffer, 'Buffer', Buffer, VOID, [Source, Sink]);
initMetadataForClass(PeekSource, 'PeekSource', VOID, VOID, [AutoCloseable]);
initMetadataForClass(RealSource, 'RealSource', VOID, VOID, [Source]);
initMetadataForCompanion(Companion);
initMetadataForClass(Segment, 'Segment');
initMetadataForClass(SegmentCopyTracker, 'SegmentCopyTracker');
initMetadataForObject(AlwaysSharedCopyTracker, 'AlwaysSharedCopyTracker', VOID, SegmentCopyTracker);
initMetadataForObject(UnsafeBufferOperations, 'UnsafeBufferOperations');
initMetadataForClass(SegmentReadContextImpl$1);
initMetadataForClass(SegmentWriteContextImpl$1);
initMetadataForClass(BufferIterationContextImpl$1);
initMetadataForClass(IOException, 'IOException', IOException_init_$Create$, Exception);
initMetadataForClass(EOFException, 'EOFException', EOFException_init_$Create$, IOException);
initMetadataForObject(SegmentPool, 'SegmentPool');
//endregion
function get_HEX_DIGIT_CHARS() {
  _init_properties__Util_kt__g8tcl9();
  return HEX_DIGIT_CHARS;
}
var HEX_DIGIT_CHARS;
function checkBounds(size, startIndex, endIndex) {
  _init_properties__Util_kt__g8tcl9();
  if (startIndex.e1(new Long(0, 0)) < 0 || endIndex.e1(size) > 0) {
    throw IndexOutOfBoundsException_init_$Create$('startIndex (' + startIndex.toString() + ') and endIndex (' + endIndex.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
  if (startIndex.e1(endIndex) > 0) {
    throw IllegalArgumentException_init_$Create$('startIndex (' + startIndex.toString() + ') > endIndex (' + endIndex.toString() + ')');
  }
}
function checkOffsetAndCount(size, offset, byteCount) {
  _init_properties__Util_kt__g8tcl9();
  if (offset.e1(new Long(0, 0)) < 0 || offset.e1(size) > 0 || size.u2(offset).e1(byteCount) < 0 || byteCount.e1(new Long(0, 0)) < 0) {
    throw IllegalArgumentException_init_$Create$('offset (' + offset.toString() + ') and byteCount (' + byteCount.toString() + ') are not within the range [0..size(' + size.toString() + '))');
  }
}
var properties_initialized__Util_kt_67kc5b;
function _init_properties__Util_kt__g8tcl9() {
  if (!properties_initialized__Util_kt_67kc5b) {
    properties_initialized__Util_kt_67kc5b = true;
    // Inline function 'kotlin.charArrayOf' call
    HEX_DIGIT_CHARS = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(98), _Char___init__impl__6a9atx(99), _Char___init__impl__6a9atx(100), _Char___init__impl__6a9atx(101), _Char___init__impl__6a9atx(102)]);
  }
}
function throwEof($this, byteCount) {
  throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + $this.p().toString() + ', required: ' + byteCount.toString() + ')');
}
function Buffer() {
  this.g1c_1 = null;
  this.h1c_1 = null;
  this.i1c_1 = new Long(0, 0);
}
protoOf(Buffer).p = function () {
  return this.i1c_1;
};
protoOf(Buffer).j1c = function () {
  return this;
};
protoOf(Buffer).k1c = function () {
  return this.p().equals(new Long(0, 0));
};
protoOf(Buffer).l1c = function (byteCount) {
  // Inline function 'kotlin.require' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    var message = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.p().e1(byteCount) < 0) {
    throw EOFException_init_$Create$_0("Buffer doesn't contain required number of bytes (size: " + this.p().toString() + ', required: ' + byteCount.toString() + ')');
  }
};
protoOf(Buffer).m1c = function (byteCount) {
  // Inline function 'kotlin.require' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    var message = 'byteCount: ' + byteCount.toString() + ' < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return this.p().e1(byteCount) >= 0;
};
protoOf(Buffer).n1c = function () {
  var tmp0_elvis_lhs = this.g1c_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throwEof(this, new Long(1, 0));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var segment = tmp;
  var segmentSize = segment.p();
  if (segmentSize === 0) {
    this.v1c();
    return this.n1c();
  }
  var v = segment.w1c();
  this.i1c_1 = this.i1c_1.u2(new Long(1, 0));
  if (segmentSize === 1) {
    this.v1c();
  }
  return v;
};
protoOf(Buffer).x1c = function () {
  var tmp0_elvis_lhs = this.g1c_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    throwEof(this, new Long(2, 0));
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var segment = tmp;
  var segmentSize = segment.p();
  if (segmentSize < 2) {
    this.l1c(new Long(2, 0));
    if (segmentSize === 0) {
      this.v1c();
      return this.x1c();
    }
    // Inline function 'kotlinx.io.and' call
    var tmp_0 = (this.n1c() & 255) << 8;
    // Inline function 'kotlinx.io.and' call
    var tmp$ret$1 = this.n1c() & 255;
    return toShort(tmp_0 | tmp$ret$1);
  }
  var v = segment.y1c();
  this.i1c_1 = this.i1c_1.u2(new Long(2, 0));
  if (segmentSize === 2) {
    this.v1c();
  }
  return v;
};
protoOf(Buffer).z1c = function () {
  return Unit_instance;
};
protoOf(Buffer).a1d = function (out, startIndex, endIndex) {
  checkBounds(this.p(), startIndex, endIndex);
  if (startIndex.equals(endIndex))
    return Unit_instance;
  var currentOffset = startIndex;
  var remainingByteCount = endIndex.u2(startIndex);
  out.i1c_1 = out.i1c_1.t2(remainingByteCount);
  var s = this.g1c_1;
  while (currentOffset.e1(toLong(ensureNotNull(s).q1c_1 - s.p1c_1 | 0)) >= 0) {
    currentOffset = currentOffset.u2(toLong(s.q1c_1 - s.p1c_1 | 0));
    s = s.t1c_1;
  }
  while (remainingByteCount.e1(new Long(0, 0)) > 0) {
    var copy = ensureNotNull(s).b1d();
    copy.p1c_1 = copy.p1c_1 + currentOffset.j1() | 0;
    var tmp = copy;
    var tmp0 = copy.p1c_1 + remainingByteCount.j1() | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = copy.q1c_1;
    tmp.q1c_1 = Math.min(tmp0, b);
    // Inline function 'kotlinx.io.Buffer.pushSegment' call
    if (out.g1c_1 == null) {
      out.g1c_1 = copy;
      out.h1c_1 = copy;
    } else if (false) {
      out.h1c_1 = ensureNotNull(out.h1c_1).c1d(copy).d1d();
      if (ensureNotNull(out.h1c_1).u1c_1 == null) {
        out.g1c_1 = out.h1c_1;
      }
    } else {
      out.h1c_1 = ensureNotNull(out.h1c_1).c1d(copy);
    }
    remainingByteCount = remainingByteCount.u2(toLong(copy.q1c_1 - copy.p1c_1 | 0));
    currentOffset = new Long(0, 0);
    s = s.t1c_1;
  }
};
protoOf(Buffer).e1d = function () {
  var result = this.p();
  if (result.equals(new Long(0, 0)))
    return new Long(0, 0);
  var tail = ensureNotNull(this.h1c_1);
  if (tail.q1c_1 < 8192 && tail.s1c_1) {
    result = result.u2(toLong(tail.q1c_1 - tail.p1c_1 | 0));
  }
  return result;
};
protoOf(Buffer).f1d = function (position) {
  if (position.e1(new Long(0, 0)) < 0 || position.e1(this.p()) >= 0) {
    throw IndexOutOfBoundsException_init_$Create$('position (' + position.toString() + ') is not within the range [0..size(' + this.p().toString() + '))');
  }
  if (position.equals(new Long(0, 0))) {
    return ensureNotNull(this.g1c_1).g1d(0);
  }
  // Inline function 'kotlinx.io.seek' call
  if (this.g1c_1 == null) {
    var offset = new Long(-1, -1);
    return ensureNotNull(null).g1d(position.u2(offset).j1());
  }
  if (this.p().u2(position).e1(position) < 0) {
    var s = this.h1c_1;
    var offset_0 = this.p();
    $l$loop: while (!(s == null) && offset_0.e1(position) > 0) {
      offset_0 = offset_0.u2(toLong(s.q1c_1 - s.p1c_1 | 0));
      if (offset_0.e1(position) <= 0)
        break $l$loop;
      s = s.u1c_1;
    }
    var tmp4 = s;
    var offset_1 = offset_0;
    return ensureNotNull(tmp4).g1d(position.u2(offset_1).j1());
  } else {
    var s_0 = this.g1c_1;
    var offset_2 = new Long(0, 0);
    $l$loop_0: while (!(s_0 == null)) {
      var tmp0 = offset_2;
      // Inline function 'kotlin.Long.plus' call
      var other = s_0.q1c_1 - s_0.p1c_1 | 0;
      var nextOffset = tmp0.t2(toLong(other));
      if (nextOffset.e1(position) > 0)
        break $l$loop_0;
      s_0 = s_0.t1c_1;
      offset_2 = nextOffset;
    }
    var tmp6 = s_0;
    var offset_3 = offset_2;
    return ensureNotNull(tmp6).g1d(position.u2(offset_3).j1());
  }
};
protoOf(Buffer).a2 = function () {
  return this.h1d(this.p());
};
protoOf(Buffer).h1d = function (byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var remainingByteCount = byteCount;
  while (remainingByteCount.e1(new Long(0, 0)) > 0) {
    var tmp0_elvis_lhs = this.g1c_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw EOFException_init_$Create$_0('Buffer exhausted before skipping ' + byteCount.toString() + ' bytes.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var head = tmp;
    var tmp1 = remainingByteCount;
    // Inline function 'kotlinx.io.minOf' call
    var b = head.q1c_1 - head.p1c_1 | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b_0 = toLong(b);
    var toSkip = (tmp1.e1(b_0) <= 0 ? tmp1 : b_0).j1();
    this.i1c_1 = this.i1c_1.u2(toLong(toSkip));
    remainingByteCount = remainingByteCount.u2(toLong(toSkip));
    head.p1c_1 = head.p1c_1 + toSkip | 0;
    if (head.p1c_1 === head.q1c_1) {
      this.v1c();
    }
  }
};
protoOf(Buffer).i1d = function (sink, startIndex, endIndex) {
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  var tmp0_elvis_lhs = this.g1c_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return -1;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var s = tmp;
  var tmp3 = endIndex - startIndex | 0;
  // Inline function 'kotlin.comparisons.minOf' call
  var b = s.p();
  var toCopy = Math.min(tmp3, b);
  s.j1d(sink, startIndex, startIndex + toCopy | 0);
  this.i1c_1 = this.i1c_1.u2(toLong(toCopy));
  if (isEmpty(s)) {
    this.v1c();
  }
  return toCopy;
};
protoOf(Buffer).l1d = function (sink, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.p().equals(new Long(0, 0)))
    return new Long(-1, -1);
  var bytesWritten = byteCount.e1(this.p()) > 0 ? this.p() : byteCount;
  sink.m1d(this, bytesWritten);
  return bytesWritten;
};
protoOf(Buffer).n1d = function (sink, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.p().e1(byteCount) < 0) {
    sink.m1d(this, this.p());
    throw EOFException_init_$Create$_0('Buffer exhausted before writing ' + byteCount.toString() + ' bytes. Only ' + this.p().toString() + ' bytes were written.');
  }
  sink.m1d(this, byteCount);
};
protoOf(Buffer).o1d = function (sink) {
  var byteCount = this.p();
  if (byteCount.e1(new Long(0, 0)) > 0) {
    sink.m1d(this, byteCount);
  }
  return byteCount;
};
protoOf(Buffer).p1d = function () {
  return buffered(new PeekSource(this));
};
protoOf(Buffer).q1d = function (minimumCapacity) {
  // Inline function 'kotlin.require' call
  if (!(minimumCapacity >= 1 && minimumCapacity <= 8192)) {
    var message = 'unexpected capacity (' + minimumCapacity + '), should be in range [1, 8192]';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  if (this.h1c_1 == null) {
    var result = SegmentPool_instance.t1d();
    this.g1c_1 = result;
    this.h1c_1 = result;
    return result;
  }
  var t = ensureNotNull(this.h1c_1);
  if ((t.q1c_1 + minimumCapacity | 0) > 8192 || !t.s1c_1) {
    var newTail = t.c1d(SegmentPool_instance.t1d());
    this.h1c_1 = newTail;
    return newTail;
  }
  return t;
};
protoOf(Buffer).u1d = function (source, startIndex, endIndex) {
  // Inline function 'kotlinx.io.checkBounds' call
  var size = source.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  var currentOffset = startIndex;
  while (currentOffset < endIndex) {
    var tail = this.q1d(1);
    var tmp3 = endIndex - currentOffset | 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = tail.v1d();
    var toCopy = Math.min(tmp3, b);
    tail.w1d(source, currentOffset, currentOffset + toCopy | 0);
    currentOffset = currentOffset + toCopy | 0;
  }
  var tmp = this;
  var tmp5 = this.i1c_1;
  // Inline function 'kotlin.Long.plus' call
  var other = endIndex - startIndex | 0;
  tmp.i1c_1 = tmp5.t2(toLong(other));
};
protoOf(Buffer).y1d = function (source, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    var message = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var remainingByteCount = byteCount;
  while (remainingByteCount.e1(new Long(0, 0)) > 0) {
    var read = source.l1d(this, remainingByteCount);
    if (read.equals(new Long(-1, -1))) {
      throw EOFException_init_$Create$_0('Source exhausted before reading ' + byteCount.toString() + ' bytes. ' + ('Only ' + byteCount.u2(remainingByteCount).toString() + ' were read.'));
    }
    remainingByteCount = remainingByteCount.u2(read);
  }
};
protoOf(Buffer).m1d = function (source, byteCount) {
  // Inline function 'kotlin.require' call
  if (!!(source === this)) {
    var message = 'source == this';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  checkOffsetAndCount(source.i1c_1, new Long(0, 0), byteCount);
  var remainingByteCount = byteCount;
  while (remainingByteCount.e1(new Long(0, 0)) > 0) {
    if (remainingByteCount.e1(toLong(ensureNotNull(source.g1c_1).p())) < 0) {
      var tail = this.h1c_1;
      var tmp;
      if (!(tail == null) && tail.s1c_1) {
        var tmp1 = remainingByteCount;
        // Inline function 'kotlin.Long.plus' call
        var other = tail.q1c_1;
        var tmp3 = tmp1.t2(toLong(other));
        // Inline function 'kotlin.Long.minus' call
        var other_0 = tail.z1d() ? 0 : tail.p1c_1;
        tmp = tmp3.u2(toLong(other_0)).e1(new Long(8192, 0)) <= 0;
      } else {
        tmp = false;
      }
      if (tmp) {
        ensureNotNull(source.g1c_1).b1e(tail, remainingByteCount.j1());
        source.i1c_1 = source.i1c_1.u2(remainingByteCount);
        this.i1c_1 = this.i1c_1.t2(remainingByteCount);
        return Unit_instance;
      } else {
        source.g1c_1 = ensureNotNull(source.g1c_1).a1e(remainingByteCount.j1());
      }
    }
    var segmentToMove = ensureNotNull(source.g1c_1);
    var movedByteCount = toLong(segmentToMove.p());
    source.g1c_1 = segmentToMove.c1e();
    if (source.g1c_1 == null) {
      source.h1c_1 = null;
    }
    // Inline function 'kotlinx.io.Buffer.pushSegment' call
    if (this.g1c_1 == null) {
      this.g1c_1 = segmentToMove;
      this.h1c_1 = segmentToMove;
    } else if (true) {
      this.h1c_1 = ensureNotNull(this.h1c_1).c1d(segmentToMove).d1d();
      if (ensureNotNull(this.h1c_1).u1c_1 == null) {
        this.g1c_1 = this.h1c_1;
      }
    } else {
      this.h1c_1 = ensureNotNull(this.h1c_1).c1d(segmentToMove);
    }
    source.i1c_1 = source.i1c_1.u2(movedByteCount);
    this.i1c_1 = this.i1c_1.t2(movedByteCount);
    remainingByteCount = remainingByteCount.u2(movedByteCount);
  }
};
protoOf(Buffer).d1e = function (source) {
  var totalBytesRead = new Long(0, 0);
  $l$loop: while (true) {
    var readCount = source.l1d(this, new Long(8192, 0));
    if (readCount.equals(new Long(-1, -1)))
      break $l$loop;
    totalBytesRead = totalBytesRead.t2(readCount);
  }
  return totalBytesRead;
};
protoOf(Buffer).e1e = function (byte) {
  this.q1d(1).f1e(byte);
  this.i1c_1 = this.i1c_1.t2(new Long(1, 0));
};
protoOf(Buffer).g1e = function (short) {
  this.q1d(2).h1e(short);
  this.i1c_1 = this.i1c_1.t2(new Long(2, 0));
};
protoOf(Buffer).c4 = function () {
  return Unit_instance;
};
protoOf(Buffer).toString = function () {
  if (this.p().equals(new Long(0, 0)))
    return 'Buffer(size=0)';
  var maxPrintableBytes = 64;
  // Inline function 'kotlinx.io.minOf' call
  var b = this.p();
  // Inline function 'kotlin.comparisons.minOf' call
  var a = toLong(maxPrintableBytes);
  var len = (a.e1(b) <= 0 ? a : b).j1();
  var builder = StringBuilder_init_$Create$(imul(len, 2) + (this.p().e1(toLong(maxPrintableBytes)) > 0 ? 1 : 0) | 0);
  var bytesWritten = 0;
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = this.g1c_1;
  while (!(curr == null)) {
    var tmp4 = get_SegmentReadContextImpl();
    var segment = curr;
    var idx = 0;
    while (bytesWritten < len && idx < segment.p()) {
      var _unary__edvuaz = idx;
      idx = _unary__edvuaz + 1 | 0;
      var b_0 = tmp4.i1e(segment, _unary__edvuaz);
      bytesWritten = bytesWritten + 1 | 0;
      var tmp = get_HEX_DIGIT_CHARS();
      // Inline function 'kotlinx.io.shr' call
      var tmp$ret$2 = b_0 >> 4;
      var tmp_0 = builder.d8(tmp[tmp$ret$2 & 15]);
      var tmp_1 = get_HEX_DIGIT_CHARS();
      // Inline function 'kotlinx.io.and' call
      var tmp$ret$3 = b_0 & 15;
      tmp_0.d8(tmp_1[tmp$ret$3]);
    }
    curr = curr.t1c_1;
  }
  if (this.p().e1(toLong(maxPrintableBytes)) > 0) {
    builder.d8(_Char___init__impl__6a9atx(8230));
  }
  return 'Buffer(size=' + this.p().toString() + ' hex=' + builder.toString() + ')';
};
protoOf(Buffer).v1c = function () {
  var oldHead = ensureNotNull(this.g1c_1);
  var nextHead = oldHead.t1c_1;
  this.g1c_1 = nextHead;
  if (nextHead == null) {
    this.h1c_1 = null;
  } else {
    nextHead.u1c_1 = null;
  }
  oldHead.t1c_1 = null;
  SegmentPool_instance.j1e(oldHead);
};
protoOf(Buffer).k1e = function () {
  var oldTail = ensureNotNull(this.h1c_1);
  var newTail = oldTail.u1c_1;
  this.h1c_1 = newTail;
  if (newTail == null) {
    this.g1c_1 = null;
  } else {
    newTail.t1c_1 = null;
  }
  oldTail.u1c_1 = null;
  SegmentPool_instance.j1e(oldTail);
};
function readByteString(_this__u8e3s4, byteCount) {
  return UnsafeByteStringOperations_instance.f1c(readByteArray_0(_this__u8e3s4, byteCount));
}
function buffered(_this__u8e3s4) {
  return new RealSource(_this__u8e3s4);
}
function PeekSource(upstream) {
  this.l1e_1 = upstream;
  this.m1e_1 = this.l1e_1.j1c();
  this.n1e_1 = this.m1e_1.g1c_1;
  var tmp = this;
  var tmp0_safe_receiver = this.m1e_1.g1c_1;
  var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p1c_1;
  tmp.o1e_1 = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
  this.p1e_1 = false;
  this.q1e_1 = new Long(0, 0);
}
protoOf(PeekSource).l1d = function (sink, byteCount) {
  // Inline function 'kotlin.check' call
  if (!!this.p1e_1) {
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlinx.io.checkByteCount' call
  // Inline function 'kotlin.require' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    var message_0 = 'byteCount (' + byteCount.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  // Inline function 'kotlin.check' call
  if (!(this.n1e_1 == null || (this.n1e_1 === this.m1e_1.g1c_1 && this.o1e_1 === ensureNotNull(this.m1e_1.g1c_1).p1c_1))) {
    var message_1 = 'Peek source is invalid because upstream source was used';
    throw IllegalStateException_init_$Create$(toString(message_1));
  }
  if (byteCount.equals(new Long(0, 0)))
    return new Long(0, 0);
  // Inline function 'kotlin.Long.plus' call
  var tmp$ret$7 = this.q1e_1.t2(toLong(1));
  if (!this.l1e_1.m1c(tmp$ret$7))
    return new Long(-1, -1);
  if (this.n1e_1 == null && !(this.m1e_1.g1c_1 == null)) {
    this.n1e_1 = this.m1e_1.g1c_1;
    this.o1e_1 = ensureNotNull(this.m1e_1.g1c_1).p1c_1;
  }
  // Inline function 'kotlin.comparisons.minOf' call
  var b = this.m1e_1.p().u2(this.q1e_1);
  var toCopy = byteCount.e1(b) <= 0 ? byteCount : b;
  this.m1e_1.a1d(sink, this.q1e_1, this.q1e_1.t2(toCopy));
  this.q1e_1 = this.q1e_1.t2(toCopy);
  return toCopy;
};
protoOf(PeekSource).c4 = function () {
  this.p1e_1 = true;
};
function RealSource(source) {
  this.r1e_1 = source;
  this.s1e_1 = false;
  this.t1e_1 = new Buffer();
}
protoOf(RealSource).j1c = function () {
  return this.t1e_1;
};
protoOf(RealSource).l1d = function (sink, byteCount) {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  if (!!this.s1e_1) {
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    var message_0 = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  if (this.t1e_1.p().equals(new Long(0, 0))) {
    var read = this.r1e_1.l1d(this.t1e_1, new Long(8192, 0));
    if (read.equals(new Long(-1, -1)))
      return new Long(-1, -1);
  }
  // Inline function 'kotlin.comparisons.minOf' call
  var b = this.t1e_1.p();
  var toRead = byteCount.e1(b) <= 0 ? byteCount : b;
  return this.t1e_1.l1d(sink, toRead);
};
protoOf(RealSource).k1c = function () {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  if (!!this.s1e_1) {
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  return this.t1e_1.k1c() && this.r1e_1.l1d(this.t1e_1, new Long(8192, 0)).equals(new Long(-1, -1));
};
protoOf(RealSource).l1c = function (byteCount) {
  if (!this.m1c(byteCount))
    throw EOFException_init_$Create$_0("Source doesn't contain required number of bytes (" + byteCount.toString() + ').');
};
protoOf(RealSource).m1c = function (byteCount) {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  if (!!this.s1e_1) {
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(byteCount.e1(new Long(0, 0)) >= 0)) {
    var message_0 = 'byteCount: ' + byteCount.toString();
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  while (this.t1e_1.p().e1(byteCount) < 0) {
    if (this.r1e_1.l1d(this.t1e_1, new Long(8192, 0)).equals(new Long(-1, -1)))
      return false;
  }
  return true;
};
protoOf(RealSource).n1c = function () {
  this.l1c(new Long(1, 0));
  return this.t1e_1.n1c();
};
protoOf(RealSource).i1d = function (sink, startIndex, endIndex) {
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  if (this.t1e_1.p().equals(new Long(0, 0))) {
    var read = this.r1e_1.l1d(this.t1e_1, new Long(8192, 0));
    if (read.equals(new Long(-1, -1)))
      return -1;
  }
  var tmp3 = endIndex - startIndex | 0;
  // Inline function 'kotlinx.io.minOf' call
  var b = this.t1e_1.p();
  // Inline function 'kotlin.comparisons.minOf' call
  var a = toLong(tmp3);
  var toRead = (a.e1(b) <= 0 ? a : b).j1();
  return this.t1e_1.i1d(sink, startIndex, startIndex + toRead | 0);
};
protoOf(RealSource).n1d = function (sink, byteCount) {
  try {
    this.l1c(byteCount);
  } catch ($p) {
    if ($p instanceof EOFException) {
      var e = $p;
      sink.m1d(this.t1e_1, this.t1e_1.p());
      throw e;
    } else {
      throw $p;
    }
  }
  this.t1e_1.n1d(sink, byteCount);
};
protoOf(RealSource).o1d = function (sink) {
  var totalBytesWritten = new Long(0, 0);
  while (!this.r1e_1.l1d(this.t1e_1, new Long(8192, 0)).equals(new Long(-1, -1))) {
    var emitByteCount = this.t1e_1.e1d();
    if (emitByteCount.e1(new Long(0, 0)) > 0) {
      totalBytesWritten = totalBytesWritten.t2(emitByteCount);
      sink.m1d(this.t1e_1, emitByteCount);
    }
  }
  if (this.t1e_1.p().e1(new Long(0, 0)) > 0) {
    totalBytesWritten = totalBytesWritten.t2(this.t1e_1.p());
    sink.m1d(this.t1e_1, this.t1e_1.p());
  }
  return totalBytesWritten;
};
protoOf(RealSource).x1c = function () {
  this.l1c(new Long(2, 0));
  return this.t1e_1.x1c();
};
protoOf(RealSource).p1d = function () {
  // Inline function 'kotlinx.io.RealSource.checkNotClosed' call
  // Inline function 'kotlin.check' call
  if (!!this.s1e_1) {
    var message = 'Source is closed.';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  return buffered(new PeekSource(this));
};
protoOf(RealSource).c4 = function () {
  if (this.s1e_1)
    return Unit_instance;
  this.s1e_1 = true;
  this.r1e_1.c4();
  this.t1e_1.a2();
};
protoOf(RealSource).toString = function () {
  return 'buffered(' + toString(this.r1e_1) + ')';
};
function Segment_init_$Init$($this) {
  Segment.call($this);
  $this.o1c_1 = new Int8Array(8192);
  $this.s1c_1 = true;
  $this.r1c_1 = null;
  return $this;
}
function Segment_init_$Create$() {
  return Segment_init_$Init$(objectCreate(protoOf(Segment)));
}
function Segment_init_$Init$_0(data, pos, limit, shareToken, owner, $this) {
  Segment.call($this);
  $this.o1c_1 = data;
  $this.p1c_1 = pos;
  $this.q1c_1 = limit;
  $this.r1c_1 = shareToken;
  $this.s1c_1 = owner;
  return $this;
}
function Segment_init_$Create$_0(data, pos, limit, shareToken, owner) {
  return Segment_init_$Init$_0(data, pos, limit, shareToken, owner, objectCreate(protoOf(Segment)));
}
function Companion() {
  this.u1e_1 = 8192;
  this.v1e_1 = 1024;
}
protoOf(Companion).w1e = function () {
  return Segment_init_$Create$();
};
var Companion_instance;
function Companion_getInstance() {
  return Companion_instance;
}
protoOf(Segment).z1d = function () {
  var tmp1_safe_receiver = this.r1c_1;
  var tmp0_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x1e();
  return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
};
protoOf(Segment).b1d = function () {
  var tmp0_elvis_lhs = this.r1c_1;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    // Inline function 'kotlin.also' call
    var this_0 = SegmentPool_instance.y1e();
    this.r1c_1 = this_0;
    tmp = this_0;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var t = tmp;
  var tmp_0 = this.p1c_1;
  var tmp_1 = this.q1c_1;
  // Inline function 'kotlin.also' call
  t.z1e();
  return Segment_init_$Create$_0(this.o1c_1, tmp_0, tmp_1, t, false);
};
protoOf(Segment).c1e = function () {
  var result = this.t1c_1;
  if (!(this.u1c_1 == null)) {
    ensureNotNull(this.u1c_1).t1c_1 = this.t1c_1;
  }
  if (!(this.t1c_1 == null)) {
    ensureNotNull(this.t1c_1).u1c_1 = this.u1c_1;
  }
  this.t1c_1 = null;
  this.u1c_1 = null;
  return result;
};
protoOf(Segment).c1d = function (segment) {
  segment.u1c_1 = this;
  segment.t1c_1 = this.t1c_1;
  if (!(this.t1c_1 == null)) {
    ensureNotNull(this.t1c_1).u1c_1 = segment;
  }
  this.t1c_1 = segment;
  return segment;
};
protoOf(Segment).a1e = function (byteCount) {
  // Inline function 'kotlin.require' call
  if (!(byteCount > 0 && byteCount <= (this.q1c_1 - this.p1c_1 | 0))) {
    var message = 'byteCount out of range';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  var prefix;
  if (byteCount >= 1024) {
    prefix = this.b1d();
  } else {
    prefix = SegmentPool_instance.t1d();
    var tmp1 = this.o1c_1;
    var tmp2 = prefix.o1c_1;
    var tmp3 = this.p1c_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = this.p1c_1 + byteCount | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, 0, tmp3, endIndex);
  }
  prefix.q1c_1 = prefix.p1c_1 + byteCount | 0;
  this.p1c_1 = this.p1c_1 + byteCount | 0;
  if (!(this.u1c_1 == null)) {
    ensureNotNull(this.u1c_1).c1d(prefix);
  } else {
    prefix.t1c_1 = this;
    this.u1c_1 = prefix;
  }
  return prefix;
};
protoOf(Segment).d1d = function () {
  // Inline function 'kotlin.check' call
  if (!!(this.u1c_1 == null)) {
    var message = 'cannot compact';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if (!ensureNotNull(this.u1c_1).s1c_1)
    return this;
  var byteCount = this.q1c_1 - this.p1c_1 | 0;
  var availableByteCount = (8192 - ensureNotNull(this.u1c_1).q1c_1 | 0) + (ensureNotNull(this.u1c_1).z1d() ? 0 : ensureNotNull(this.u1c_1).p1c_1) | 0;
  if (byteCount > availableByteCount)
    return this;
  var predecessor = this.u1c_1;
  this.b1e(ensureNotNull(predecessor), byteCount);
  var successor = this.c1e();
  // Inline function 'kotlin.check' call
  if (!(successor == null)) {
    throw IllegalStateException_init_$Create$('Check failed.');
  }
  SegmentPool_instance.j1e(this);
  return predecessor;
};
protoOf(Segment).f1e = function (byte) {
  var _unary__edvuaz = this.q1c_1;
  this.q1c_1 = _unary__edvuaz + 1 | 0;
  this.o1c_1[_unary__edvuaz] = byte;
};
protoOf(Segment).h1e = function (short) {
  var data = this.o1c_1;
  var limit = this.q1c_1;
  var _unary__edvuaz = limit;
  limit = _unary__edvuaz + 1 | 0;
  data[_unary__edvuaz] = toByte((short >>> 8 | 0) & 255);
  var _unary__edvuaz_0 = limit;
  limit = _unary__edvuaz_0 + 1 | 0;
  data[_unary__edvuaz_0] = toByte(short & 255);
  this.q1c_1 = limit;
};
protoOf(Segment).w1c = function () {
  var _unary__edvuaz = this.p1c_1;
  this.p1c_1 = _unary__edvuaz + 1 | 0;
  return this.o1c_1[_unary__edvuaz];
};
protoOf(Segment).y1c = function () {
  var data = this.o1c_1;
  var pos = this.p1c_1;
  var _unary__edvuaz = pos;
  pos = _unary__edvuaz + 1 | 0;
  // Inline function 'kotlinx.io.and' call
  var tmp = (data[_unary__edvuaz] & 255) << 8;
  var _unary__edvuaz_0 = pos;
  pos = _unary__edvuaz_0 + 1 | 0;
  // Inline function 'kotlinx.io.and' call
  var tmp$ret$1 = data[_unary__edvuaz_0] & 255;
  var s = toShort(tmp | tmp$ret$1);
  this.p1c_1 = pos;
  return s;
};
protoOf(Segment).b1e = function (sink, byteCount) {
  // Inline function 'kotlin.check' call
  if (!sink.s1c_1) {
    var message = 'only owner can write';
    throw IllegalStateException_init_$Create$(toString(message));
  }
  if ((sink.q1c_1 + byteCount | 0) > 8192) {
    if (sink.z1d())
      throw IllegalArgumentException_init_$Create$_0();
    if (((sink.q1c_1 + byteCount | 0) - sink.p1c_1 | 0) > 8192)
      throw IllegalArgumentException_init_$Create$_0();
    var tmp1 = sink.o1c_1;
    var tmp2 = sink.o1c_1;
    var tmp3 = sink.p1c_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = sink.q1c_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, tmp2, 0, tmp3, endIndex);
    sink.q1c_1 = sink.q1c_1 - sink.p1c_1 | 0;
    sink.p1c_1 = 0;
  }
  var tmp6 = this.o1c_1;
  var tmp7 = sink.o1c_1;
  var tmp8 = sink.q1c_1;
  var tmp9 = this.p1c_1;
  // Inline function 'kotlin.collections.copyInto' call
  var endIndex_0 = this.p1c_1 + byteCount | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp_0 = tmp6;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp_0, tmp7, tmp8, tmp9, endIndex_0);
  sink.q1c_1 = sink.q1c_1 + byteCount | 0;
  this.p1c_1 = this.p1c_1 + byteCount | 0;
};
protoOf(Segment).j1d = function (dst, dstStartOffset, dstEndOffset) {
  var len = dstEndOffset - dstStartOffset | 0;
  var tmp0 = this.o1c_1;
  var tmp3 = this.p1c_1;
  // Inline function 'kotlin.collections.copyInto' call
  var endIndex = this.p1c_1 + len | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = tmp0;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, dst, dstStartOffset, tmp3, endIndex);
  this.p1c_1 = this.p1c_1 + len | 0;
};
protoOf(Segment).w1d = function (src, srcStartOffset, srcEndOffset) {
  var tmp1 = this.o1c_1;
  // Inline function 'kotlin.collections.copyInto' call
  var destinationOffset = this.q1c_1;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  var tmp = src;
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  arrayCopy(tmp, tmp1, destinationOffset, srcStartOffset, srcEndOffset);
  this.q1c_1 = this.q1c_1 + (srcEndOffset - srcStartOffset | 0) | 0;
};
protoOf(Segment).p = function () {
  return this.q1c_1 - this.p1c_1 | 0;
};
protoOf(Segment).v1d = function () {
  return this.o1c_1.length - this.q1c_1 | 0;
};
protoOf(Segment).a1f = function (readOnly) {
  return this.o1c_1;
};
protoOf(Segment).g1d = function (index) {
  return this.o1c_1[this.p1c_1 + index | 0];
};
protoOf(Segment).b1f = function (index, value) {
  this.o1c_1[this.q1c_1 + index | 0] = value;
};
protoOf(Segment).c1f = function (index, b0, b1) {
  var d = this.o1c_1;
  var l = this.q1c_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
};
protoOf(Segment).d1f = function (index, b0, b1, b2) {
  var d = this.o1c_1;
  var l = this.q1c_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
  d[(l + index | 0) + 2 | 0] = b2;
};
protoOf(Segment).e1f = function (index, b0, b1, b2, b3) {
  var d = this.o1c_1;
  var l = this.q1c_1;
  d[l + index | 0] = b0;
  d[(l + index | 0) + 1 | 0] = b1;
  d[(l + index | 0) + 2 | 0] = b2;
  d[(l + index | 0) + 3 | 0] = b3;
};
function Segment() {
  this.p1c_1 = 0;
  this.q1c_1 = 0;
  this.r1c_1 = null;
  this.s1c_1 = false;
  this.t1c_1 = null;
  this.u1c_1 = null;
}
function SegmentCopyTracker() {
}
function isEmpty(_this__u8e3s4) {
  return _this__u8e3s4.p() === 0;
}
function AlwaysSharedCopyTracker() {
  AlwaysSharedCopyTracker_instance = this;
  SegmentCopyTracker.call(this);
}
protoOf(AlwaysSharedCopyTracker).x1e = function () {
  return true;
};
protoOf(AlwaysSharedCopyTracker).z1e = function () {
  return Unit_instance;
};
var AlwaysSharedCopyTracker_instance;
function AlwaysSharedCopyTracker_getInstance() {
  if (AlwaysSharedCopyTracker_instance == null)
    new AlwaysSharedCopyTracker();
  return AlwaysSharedCopyTracker_instance;
}
function Sink() {
}
function Source() {
}
function readByteArray(_this__u8e3s4) {
  return readByteArrayImpl(_this__u8e3s4, -1);
}
function readByteArrayImpl(_this__u8e3s4, size) {
  var arraySize = size;
  if (size === -1) {
    var fetchSize = new Long(2147483647, 0);
    while (_this__u8e3s4.j1c().p().e1(new Long(2147483647, 0)) < 0 && _this__u8e3s4.m1c(fetchSize)) {
      // Inline function 'kotlin.Long.times' call
      fetchSize = fetchSize.v2(toLong(2));
    }
    // Inline function 'kotlin.check' call
    if (!(_this__u8e3s4.j1c().p().e1(new Long(2147483647, 0)) < 0)) {
      var message = "Can't create an array of size " + _this__u8e3s4.j1c().p().toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    arraySize = _this__u8e3s4.j1c().p().j1();
  } else {
    _this__u8e3s4.l1c(toLong(size));
  }
  var array = new Int8Array(arraySize);
  readTo(_this__u8e3s4.j1c(), array);
  return array;
}
function readTo(_this__u8e3s4, sink, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? sink.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = sink.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  var offset = startIndex;
  while (offset < endIndex) {
    var bytesRead = _this__u8e3s4.i1d(sink, offset, endIndex);
    if (bytesRead === -1) {
      throw EOFException_init_$Create$_0('Source exhausted before reading ' + (endIndex - startIndex | 0) + ' bytes. ' + ('Only ' + bytesRead + ' bytes were read.'));
    }
    offset = offset + bytesRead | 0;
  }
}
function readByteArray_0(_this__u8e3s4, byteCount) {
  // Inline function 'kotlinx.io.checkByteCount' call
  var byteCount_0 = toLong(byteCount);
  // Inline function 'kotlin.require' call
  if (!(byteCount_0.e1(new Long(0, 0)) >= 0)) {
    var message = 'byteCount (' + byteCount_0.toString() + ') < 0';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  return readByteArrayImpl(_this__u8e3s4, byteCount);
}
function writeString(_this__u8e3s4, string, startIndex, endIndex) {
  startIndex = startIndex === VOID ? 0 : startIndex;
  endIndex = endIndex === VOID ? string.length : endIndex;
  // Inline function 'kotlinx.io.checkBounds' call
  var size = string.length;
  checkBounds(toLong(size), toLong(startIndex), toLong(endIndex));
  // Inline function 'kotlinx.io.writeToInternalBuffer' call
  // Inline function 'kotlinx.io.commonWriteUtf8' call
  var this_0 = _this__u8e3s4.j1c();
  var i = startIndex;
  while (i < endIndex) {
    var p0 = i;
    // Inline function 'kotlin.code' call
    var this_1 = charSequenceGet(string, p0);
    var c = Char__toInt_impl_vasixd(this_1);
    if (c < 128) {
      $l$block_0: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail = this_0.q1d(1);
        var ctx = get_SegmentWriteContextImpl();
        var segmentOffset = -i | 0;
        // Inline function 'kotlin.comparisons.minOf' call
        var b = i + tail.v1d() | 0;
        var runLimit = Math.min(endIndex, b);
        var _unary__edvuaz = i;
        i = _unary__edvuaz + 1 | 0;
        ctx.i1f(tail, segmentOffset + _unary__edvuaz | 0, toByte(c));
        $l$loop: while (i < runLimit) {
          var p0_0 = i;
          // Inline function 'kotlin.code' call
          var this_2 = charSequenceGet(string, p0_0);
          c = Char__toInt_impl_vasixd(this_2);
          if (c >= 128)
            break $l$loop;
          var _unary__edvuaz_0 = i;
          i = _unary__edvuaz_0 + 1 | 0;
          ctx.i1f(tail, segmentOffset + _unary__edvuaz_0 | 0, toByte(c));
        }
        var bytesWritten = i + segmentOffset | 0;
        if (bytesWritten === 1) {
          tail.q1c_1 = tail.q1c_1 + bytesWritten | 0;
          var tmp = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp.i1c_1 = this_0.i1c_1.t2(toLong(bytesWritten));
          break $l$block_0;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten ? bytesWritten <= tail.v1d() : false)) {
          var message = 'Invalid number of bytes written: ' + bytesWritten + '. Should be in 0..' + tail.v1d();
          throw IllegalStateException_init_$Create$(toString(message));
        }
        if (!(bytesWritten === 0)) {
          tail.q1c_1 = tail.q1c_1 + bytesWritten | 0;
          var tmp_0 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_0.i1c_1 = this_0.i1c_1.t2(toLong(bytesWritten));
          break $l$block_0;
        }
        if (isEmpty(tail)) {
          this_0.k1e();
        }
      }
    } else if (c < 2048) {
      $l$block_2: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_0 = this_0.q1d(2);
        get_SegmentWriteContextImpl().h1f(tail_0, 0, toByte(c >> 6 | 192), toByte(c & 63 | 128));
        var bytesWritten_0 = 2;
        if (bytesWritten_0 === 2) {
          tail_0.q1c_1 = tail_0.q1c_1 + bytesWritten_0 | 0;
          var tmp_1 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_1.i1c_1 = this_0.i1c_1.t2(toLong(bytesWritten_0));
          break $l$block_2;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_0 ? bytesWritten_0 <= tail_0.v1d() : false)) {
          var message_0 = 'Invalid number of bytes written: ' + bytesWritten_0 + '. Should be in 0..' + tail_0.v1d();
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
        if (!(bytesWritten_0 === 0)) {
          tail_0.q1c_1 = tail_0.q1c_1 + bytesWritten_0 | 0;
          var tmp_2 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_2.i1c_1 = this_0.i1c_1.t2(toLong(bytesWritten_0));
          break $l$block_2;
        }
        if (isEmpty(tail_0)) {
          this_0.k1e();
        }
      }
      i = i + 1 | 0;
    } else if (c < 55296 || c > 57343) {
      $l$block_4: {
        // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
        var tail_1 = this_0.q1d(3);
        get_SegmentWriteContextImpl().g1f(tail_1, 0, toByte(c >> 12 | 224), toByte(c >> 6 & 63 | 128), toByte(c & 63 | 128));
        var bytesWritten_1 = 3;
        if (bytesWritten_1 === 3) {
          tail_1.q1c_1 = tail_1.q1c_1 + bytesWritten_1 | 0;
          var tmp_3 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_3.i1c_1 = this_0.i1c_1.t2(toLong(bytesWritten_1));
          break $l$block_4;
        }
        // Inline function 'kotlin.check' call
        if (!(0 <= bytesWritten_1 ? bytesWritten_1 <= tail_1.v1d() : false)) {
          var message_1 = 'Invalid number of bytes written: ' + bytesWritten_1 + '. Should be in 0..' + tail_1.v1d();
          throw IllegalStateException_init_$Create$(toString(message_1));
        }
        if (!(bytesWritten_1 === 0)) {
          tail_1.q1c_1 = tail_1.q1c_1 + bytesWritten_1 | 0;
          var tmp_4 = this_0;
          // Inline function 'kotlin.Long.plus' call
          tmp_4.i1c_1 = this_0.i1c_1.t2(toLong(bytesWritten_1));
          break $l$block_4;
        }
        if (isEmpty(tail_1)) {
          this_0.k1e();
        }
      }
      i = i + 1 | 0;
    } else {
      var tmp_5;
      if ((i + 1 | 0) < endIndex) {
        var p0_1 = i + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_3 = charSequenceGet(string, p0_1);
        tmp_5 = Char__toInt_impl_vasixd(this_3);
      } else {
        tmp_5 = 0;
      }
      var low = tmp_5;
      if (c > 56319 || !(56320 <= low ? low <= 57343 : false)) {
        // Inline function 'kotlin.code' call
        var this_4 = _Char___init__impl__6a9atx(63);
        var tmp$ret$26 = Char__toInt_impl_vasixd(this_4);
        this_0.e1e(toByte(tmp$ret$26));
        i = i + 1 | 0;
      } else {
        var codePoint = 65536 + ((c & 1023) << 10 | low & 1023) | 0;
        $l$block_6: {
          // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.writeToTail' call
          var tail_2 = this_0.q1d(4);
          get_SegmentWriteContextImpl().f1f(tail_2, 0, toByte(codePoint >> 18 | 240), toByte(codePoint >> 12 & 63 | 128), toByte(codePoint >> 6 & 63 | 128), toByte(codePoint & 63 | 128));
          var bytesWritten_2 = 4;
          if (bytesWritten_2 === 4) {
            tail_2.q1c_1 = tail_2.q1c_1 + bytesWritten_2 | 0;
            var tmp_6 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_6.i1c_1 = this_0.i1c_1.t2(toLong(bytesWritten_2));
            break $l$block_6;
          }
          // Inline function 'kotlin.check' call
          if (!(0 <= bytesWritten_2 ? bytesWritten_2 <= tail_2.v1d() : false)) {
            var message_2 = 'Invalid number of bytes written: ' + bytesWritten_2 + '. Should be in 0..' + tail_2.v1d();
            throw IllegalStateException_init_$Create$(toString(message_2));
          }
          if (!(bytesWritten_2 === 0)) {
            tail_2.q1c_1 = tail_2.q1c_1 + bytesWritten_2 | 0;
            var tmp_7 = this_0;
            // Inline function 'kotlin.Long.plus' call
            tmp_7.i1c_1 = this_0.i1c_1.t2(toLong(bytesWritten_2));
            break $l$block_6;
          }
          if (isEmpty(tail_2)) {
            this_0.k1e();
          }
        }
        i = i + 2 | 0;
      }
    }
  }
  _this__u8e3s4.z1c();
}
function readString(_this__u8e3s4) {
  _this__u8e3s4.m1c(new Long(-1, 2147483647));
  return commonReadUtf8(_this__u8e3s4.j1c(), _this__u8e3s4.j1c().p());
}
function readString_0(_this__u8e3s4, byteCount) {
  _this__u8e3s4.l1c(byteCount);
  return commonReadUtf8(_this__u8e3s4.j1c(), byteCount);
}
function readString_1(_this__u8e3s4) {
  return commonReadUtf8(_this__u8e3s4, _this__u8e3s4.p());
}
function commonReadUtf8(_this__u8e3s4, byteCount) {
  if (byteCount.equals(new Long(0, 0)))
    return '';
  // Inline function 'kotlinx.io.unsafe.UnsafeBufferOperations.forEachSegment' call
  var curr = _this__u8e3s4.g1c_1;
  while (!(curr == null)) {
    get_SegmentReadContextImpl();
    if (toLong(curr.p()).e1(byteCount) >= 0) {
      var result = '';
      // Inline function 'kotlinx.io.unsafe.withData' call
      var tmp2 = curr.a1f(true);
      var tmp3 = curr.p1c_1;
      var tmp0 = curr.q1c_1;
      // Inline function 'kotlin.math.min' call
      var b = tmp3 + byteCount.j1() | 0;
      var tmp$ret$0 = Math.min(tmp0, b);
      result = commonToUtf8String(tmp2, tmp3, tmp$ret$0);
      _this__u8e3s4.h1d(byteCount);
      return result;
    }
    return commonToUtf8String(readByteArray_0(_this__u8e3s4, byteCount.j1()));
  }
  // Inline function 'kotlin.error' call
  var message = 'Unreacheable';
  throw IllegalStateException_init_$Create$(toString(message));
}
function commonToUtf8String(_this__u8e3s4, beginIndex, endIndex) {
  beginIndex = beginIndex === VOID ? 0 : beginIndex;
  endIndex = endIndex === VOID ? _this__u8e3s4.length : endIndex;
  if (beginIndex < 0 || endIndex > _this__u8e3s4.length || beginIndex > endIndex) {
    throw IndexOutOfBoundsException_init_$Create$('size=' + _this__u8e3s4.length + ' beginIndex=' + beginIndex + ' endIndex=' + endIndex);
  }
  var chars = charArray(endIndex - beginIndex | 0);
  var length = 0;
  // Inline function 'kotlinx.io.internal.processUtf16Chars' call
  var index = beginIndex;
  while (index < endIndex) {
    var b0 = _this__u8e3s4[index];
    if (b0 >= 0) {
      var c = numberToChar(b0);
      var _unary__edvuaz = length;
      length = _unary__edvuaz + 1 | 0;
      chars[_unary__edvuaz] = c;
      index = index + 1 | 0;
      while (index < endIndex && _this__u8e3s4[index] >= 0) {
        var _unary__edvuaz_0 = index;
        index = _unary__edvuaz_0 + 1 | 0;
        var c_0 = numberToChar(_this__u8e3s4[_unary__edvuaz_0]);
        var _unary__edvuaz_1 = length;
        length = _unary__edvuaz_1 + 1 | 0;
        chars[_unary__edvuaz_1] = c_0;
      }
    } else {
      // Inline function 'kotlinx.io.shr' call
      if (b0 >> 5 === -2) {
        var tmp = index;
        var tmp3 = index;
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'kotlinx.io.internal.process2Utf8Bytes' call
          if (endIndex <= (tmp3 + 1 | 0)) {
            var c_1 = numberToChar(65533);
            var _unary__edvuaz_2 = length;
            length = _unary__edvuaz_2 + 1 | 0;
            chars[_unary__edvuaz_2] = c_1;
            tmp$ret$5 = 1;
            break $l$block_0;
          }
          var b0_0 = _this__u8e3s4[tmp3];
          var b1 = _this__u8e3s4[tmp3 + 1 | 0];
          // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
          // Inline function 'kotlinx.io.and' call
          if (!((b1 & 192) === 128)) {
            var c_2 = numberToChar(65533);
            var _unary__edvuaz_3 = length;
            length = _unary__edvuaz_3 + 1 | 0;
            chars[_unary__edvuaz_3] = c_2;
            tmp$ret$5 = 1;
            break $l$block_0;
          }
          var codePoint = 3968 ^ b1 ^ b0_0 << 6;
          if (codePoint < 128) {
            var c_3 = numberToChar(65533);
            var _unary__edvuaz_4 = length;
            length = _unary__edvuaz_4 + 1 | 0;
            chars[_unary__edvuaz_4] = c_3;
          } else {
            var c_4 = numberToChar(codePoint);
            var _unary__edvuaz_5 = length;
            length = _unary__edvuaz_5 + 1 | 0;
            chars[_unary__edvuaz_5] = c_4;
          }
          tmp$ret$5 = 2;
        }
        index = tmp + tmp$ret$5 | 0;
      } else {
        // Inline function 'kotlinx.io.shr' call
        if (b0 >> 4 === -2) {
          var tmp_0 = index;
          var tmp12 = index;
          var tmp$ret$19;
          $l$block_4: {
            // Inline function 'kotlinx.io.internal.process3Utf8Bytes' call
            if (endIndex <= (tmp12 + 2 | 0)) {
              var c_5 = numberToChar(65533);
              var _unary__edvuaz_6 = length;
              length = _unary__edvuaz_6 + 1 | 0;
              chars[_unary__edvuaz_6] = c_5;
              var tmp_1;
              if (endIndex <= (tmp12 + 1 | 0)) {
                tmp_1 = true;
              } else {
                // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                // Inline function 'kotlinx.io.and' call
                tmp_1 = !((_this__u8e3s4[tmp12 + 1 | 0] & 192) === 128);
              }
              if (tmp_1) {
                tmp$ret$19 = 1;
                break $l$block_4;
              } else {
                tmp$ret$19 = 2;
                break $l$block_4;
              }
            }
            var b0_1 = _this__u8e3s4[tmp12];
            var b1_0 = _this__u8e3s4[tmp12 + 1 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b1_0 & 192) === 128)) {
              var c_6 = numberToChar(65533);
              var _unary__edvuaz_7 = length;
              length = _unary__edvuaz_7 + 1 | 0;
              chars[_unary__edvuaz_7] = c_6;
              tmp$ret$19 = 1;
              break $l$block_4;
            }
            var b2 = _this__u8e3s4[tmp12 + 2 | 0];
            // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
            // Inline function 'kotlinx.io.and' call
            if (!((b2 & 192) === 128)) {
              var c_7 = numberToChar(65533);
              var _unary__edvuaz_8 = length;
              length = _unary__edvuaz_8 + 1 | 0;
              chars[_unary__edvuaz_8] = c_7;
              tmp$ret$19 = 2;
              break $l$block_4;
            }
            var codePoint_0 = -123008 ^ b2 ^ b1_0 << 6 ^ b0_1 << 12;
            if (codePoint_0 < 2048) {
              var c_8 = numberToChar(65533);
              var _unary__edvuaz_9 = length;
              length = _unary__edvuaz_9 + 1 | 0;
              chars[_unary__edvuaz_9] = c_8;
            } else if (55296 <= codePoint_0 ? codePoint_0 <= 57343 : false) {
              var c_9 = numberToChar(65533);
              var _unary__edvuaz_10 = length;
              length = _unary__edvuaz_10 + 1 | 0;
              chars[_unary__edvuaz_10] = c_9;
            } else {
              var c_10 = numberToChar(codePoint_0);
              var _unary__edvuaz_11 = length;
              length = _unary__edvuaz_11 + 1 | 0;
              chars[_unary__edvuaz_11] = c_10;
            }
            tmp$ret$19 = 3;
          }
          index = tmp_0 + tmp$ret$19 | 0;
        } else {
          // Inline function 'kotlinx.io.shr' call
          if (b0 >> 3 === -2) {
            var tmp_2 = index;
            var tmp23 = index;
            var tmp$ret$41;
            $l$block_10: {
              // Inline function 'kotlinx.io.internal.process4Utf8Bytes' call
              if (endIndex <= (tmp23 + 3 | 0)) {
                if (!(65533 === 65533)) {
                  var c_11 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_12 = length;
                  length = _unary__edvuaz_12 + 1 | 0;
                  chars[_unary__edvuaz_12] = c_11;
                  var c_12 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_13 = length;
                  length = _unary__edvuaz_13 + 1 | 0;
                  chars[_unary__edvuaz_13] = c_12;
                } else {
                  var c_13 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_14 = length;
                  length = _unary__edvuaz_14 + 1 | 0;
                  chars[_unary__edvuaz_14] = c_13;
                }
                var tmp_3;
                if (endIndex <= (tmp23 + 1 | 0)) {
                  tmp_3 = true;
                } else {
                  // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                  // Inline function 'kotlinx.io.and' call
                  tmp_3 = !((_this__u8e3s4[tmp23 + 1 | 0] & 192) === 128);
                }
                if (tmp_3) {
                  tmp$ret$41 = 1;
                  break $l$block_10;
                } else {
                  var tmp_4;
                  if (endIndex <= (tmp23 + 2 | 0)) {
                    tmp_4 = true;
                  } else {
                    // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
                    // Inline function 'kotlinx.io.and' call
                    tmp_4 = !((_this__u8e3s4[tmp23 + 2 | 0] & 192) === 128);
                  }
                  if (tmp_4) {
                    tmp$ret$41 = 2;
                    break $l$block_10;
                  } else {
                    tmp$ret$41 = 3;
                    break $l$block_10;
                  }
                }
              }
              var b0_2 = _this__u8e3s4[tmp23];
              var b1_1 = _this__u8e3s4[tmp23 + 1 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b1_1 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_14 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_15 = length;
                  length = _unary__edvuaz_15 + 1 | 0;
                  chars[_unary__edvuaz_15] = c_14;
                  var c_15 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_16 = length;
                  length = _unary__edvuaz_16 + 1 | 0;
                  chars[_unary__edvuaz_16] = c_15;
                } else {
                  var c_16 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_17 = length;
                  length = _unary__edvuaz_17 + 1 | 0;
                  chars[_unary__edvuaz_17] = c_16;
                }
                tmp$ret$41 = 1;
                break $l$block_10;
              }
              var b2_0 = _this__u8e3s4[tmp23 + 2 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b2_0 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_17 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_18 = length;
                  length = _unary__edvuaz_18 + 1 | 0;
                  chars[_unary__edvuaz_18] = c_17;
                  var c_18 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_19 = length;
                  length = _unary__edvuaz_19 + 1 | 0;
                  chars[_unary__edvuaz_19] = c_18;
                } else {
                  var c_19 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_20 = length;
                  length = _unary__edvuaz_20 + 1 | 0;
                  chars[_unary__edvuaz_20] = c_19;
                }
                tmp$ret$41 = 2;
                break $l$block_10;
              }
              var b3 = _this__u8e3s4[tmp23 + 3 | 0];
              // Inline function 'kotlinx.io.internal.isUtf8Continuation' call
              // Inline function 'kotlinx.io.and' call
              if (!((b3 & 192) === 128)) {
                if (!(65533 === 65533)) {
                  var c_20 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_21 = length;
                  length = _unary__edvuaz_21 + 1 | 0;
                  chars[_unary__edvuaz_21] = c_20;
                  var c_21 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_22 = length;
                  length = _unary__edvuaz_22 + 1 | 0;
                  chars[_unary__edvuaz_22] = c_21;
                } else {
                  var c_22 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_23 = length;
                  length = _unary__edvuaz_23 + 1 | 0;
                  chars[_unary__edvuaz_23] = c_22;
                }
                tmp$ret$41 = 3;
                break $l$block_10;
              }
              var codePoint_1 = 3678080 ^ b3 ^ b2_0 << 6 ^ b1_1 << 12 ^ b0_2 << 18;
              if (codePoint_1 > 1114111) {
                if (!(65533 === 65533)) {
                  var c_23 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_24 = length;
                  length = _unary__edvuaz_24 + 1 | 0;
                  chars[_unary__edvuaz_24] = c_23;
                  var c_24 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_25 = length;
                  length = _unary__edvuaz_25 + 1 | 0;
                  chars[_unary__edvuaz_25] = c_24;
                } else {
                  var c_25 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_26 = length;
                  length = _unary__edvuaz_26 + 1 | 0;
                  chars[_unary__edvuaz_26] = c_25;
                }
              } else if (55296 <= codePoint_1 ? codePoint_1 <= 57343 : false) {
                if (!(65533 === 65533)) {
                  var c_26 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_27 = length;
                  length = _unary__edvuaz_27 + 1 | 0;
                  chars[_unary__edvuaz_27] = c_26;
                  var c_27 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_28 = length;
                  length = _unary__edvuaz_28 + 1 | 0;
                  chars[_unary__edvuaz_28] = c_27;
                } else {
                  var c_28 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_29 = length;
                  length = _unary__edvuaz_29 + 1 | 0;
                  chars[_unary__edvuaz_29] = c_28;
                }
              } else if (codePoint_1 < 65536) {
                if (!(65533 === 65533)) {
                  var c_29 = numberToChar((65533 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_30 = length;
                  length = _unary__edvuaz_30 + 1 | 0;
                  chars[_unary__edvuaz_30] = c_29;
                  var c_30 = numberToChar((65533 & 1023) + 56320 | 0);
                  var _unary__edvuaz_31 = length;
                  length = _unary__edvuaz_31 + 1 | 0;
                  chars[_unary__edvuaz_31] = c_30;
                } else {
                  var c_31 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_32 = length;
                  length = _unary__edvuaz_32 + 1 | 0;
                  chars[_unary__edvuaz_32] = c_31;
                }
              } else {
                if (!(codePoint_1 === 65533)) {
                  var c_32 = numberToChar((codePoint_1 >>> 10 | 0) + 55232 | 0);
                  var _unary__edvuaz_33 = length;
                  length = _unary__edvuaz_33 + 1 | 0;
                  chars[_unary__edvuaz_33] = c_32;
                  var c_33 = numberToChar((codePoint_1 & 1023) + 56320 | 0);
                  var _unary__edvuaz_34 = length;
                  length = _unary__edvuaz_34 + 1 | 0;
                  chars[_unary__edvuaz_34] = c_33;
                } else {
                  var c_34 = _Char___init__impl__6a9atx(65533);
                  var _unary__edvuaz_35 = length;
                  length = _unary__edvuaz_35 + 1 | 0;
                  chars[_unary__edvuaz_35] = c_34;
                }
              }
              tmp$ret$41 = 4;
            }
            index = tmp_2 + tmp$ret$41 | 0;
          } else {
            var c_35 = _Char___init__impl__6a9atx(65533);
            var _unary__edvuaz_36 = length;
            length = _unary__edvuaz_36 + 1 | 0;
            chars[_unary__edvuaz_36] = c_35;
            index = index + 1 | 0;
          }
        }
      }
    }
  }
  return concatToString(chars, 0, length);
}
function get_SegmentReadContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentReadContextImpl;
}
var SegmentReadContextImpl;
function get_SegmentWriteContextImpl() {
  _init_properties_UnsafeBufferOperations_kt__xw75gy();
  return SegmentWriteContextImpl;
}
var SegmentWriteContextImpl;
var BufferIterationContextImpl;
function UnsafeBufferOperations() {
}
var UnsafeBufferOperations_instance;
function UnsafeBufferOperations_getInstance() {
  return UnsafeBufferOperations_instance;
}
function SegmentReadContextImpl$1() {
}
protoOf(SegmentReadContextImpl$1).i1e = function (segment, offset) {
  return segment.g1d(offset);
};
function SegmentWriteContextImpl$1() {
}
protoOf(SegmentWriteContextImpl$1).i1f = function (segment, offset, value) {
  segment.b1f(offset, value);
};
protoOf(SegmentWriteContextImpl$1).h1f = function (segment, offset, b0, b1) {
  segment.c1f(offset, b0, b1);
};
protoOf(SegmentWriteContextImpl$1).g1f = function (segment, offset, b0, b1, b2) {
  segment.d1f(offset, b0, b1, b2);
};
protoOf(SegmentWriteContextImpl$1).f1f = function (segment, offset, b0, b1, b2, b3) {
  segment.e1f(offset, b0, b1, b2, b3);
};
function BufferIterationContextImpl$1() {
}
protoOf(BufferIterationContextImpl$1).i1e = function (segment, offset) {
  return get_SegmentReadContextImpl().i1e(segment, offset);
};
var properties_initialized_UnsafeBufferOperations_kt_2xfgoc;
function _init_properties_UnsafeBufferOperations_kt__xw75gy() {
  if (!properties_initialized_UnsafeBufferOperations_kt_2xfgoc) {
    properties_initialized_UnsafeBufferOperations_kt_2xfgoc = true;
    SegmentReadContextImpl = new SegmentReadContextImpl$1();
    SegmentWriteContextImpl = new SegmentWriteContextImpl$1();
    BufferIterationContextImpl = new BufferIterationContextImpl$1();
  }
}
function IOException_init_$Init$($this) {
  Exception_init_$Init$($this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$() {
  var tmp = IOException_init_$Init$(objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$);
  return tmp;
}
function IOException_init_$Init$_0(message, $this) {
  Exception_init_$Init$_0(message, $this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$_0(message) {
  var tmp = IOException_init_$Init$_0(message, objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$_0);
  return tmp;
}
function IOException_init_$Init$_1(message, cause, $this) {
  Exception_init_$Init$_1(message, cause, $this);
  IOException.call($this);
  return $this;
}
function IOException_init_$Create$_1(message, cause) {
  var tmp = IOException_init_$Init$_1(message, cause, objectCreate(protoOf(IOException)));
  captureStack(tmp, IOException_init_$Create$_1);
  return tmp;
}
function IOException() {
  captureStack(this, IOException);
}
function EOFException_init_$Init$($this) {
  IOException_init_$Init$($this);
  EOFException.call($this);
  return $this;
}
function EOFException_init_$Create$() {
  var tmp = EOFException_init_$Init$(objectCreate(protoOf(EOFException)));
  captureStack(tmp, EOFException_init_$Create$);
  return tmp;
}
function EOFException_init_$Init$_0(message, $this) {
  IOException_init_$Init$_0(message, $this);
  EOFException.call($this);
  return $this;
}
function EOFException_init_$Create$_0(message) {
  var tmp = EOFException_init_$Init$_0(message, objectCreate(protoOf(EOFException)));
  captureStack(tmp, EOFException_init_$Create$_0);
  return tmp;
}
function EOFException() {
  captureStack(this, EOFException);
}
function SegmentPool() {
  this.r1d_1 = 0;
  this.s1d_1 = 0;
}
protoOf(SegmentPool).t1d = function () {
  return Companion_instance.w1e();
};
protoOf(SegmentPool).j1e = function (segment) {
};
protoOf(SegmentPool).y1e = function () {
  return AlwaysSharedCopyTracker_getInstance();
};
var SegmentPool_instance;
function SegmentPool_getInstance() {
  return SegmentPool_instance;
}
//region block: post-declaration
protoOf(Buffer).k1d = readAtMostTo$default;
protoOf(Buffer).x1d = write$default;
protoOf(RealSource).k1d = readAtMostTo$default;
//endregion
//region block: init
Companion_instance = new Companion();
UnsafeBufferOperations_instance = new UnsafeBufferOperations();
SegmentPool_instance = new SegmentPool();
//endregion
//region block: exports
export {
  EOFException_init_$Create$_0 as EOFException_init_$Create$1fcl7h9im3v9r,
  IOException_init_$Init$_0 as IOException_init_$Init$2jjz3fe04l3kq,
  IOException_init_$Create$_0 as IOException_init_$Create$13y6ig657l2av,
  IOException_init_$Init$_1 as IOException_init_$Init$2zqugtfkvfigo,
  IOException_init_$Create$_1 as IOException_init_$Create$39p2wsfj1vt0k,
  Buffer as Buffergs925ekssbch,
  IOException as IOException1wyutdmfe71nu,
  Source as Source1shr0ps16u4p4,
  readByteArray_0 as readByteArray1fhzfwi2j014k,
  readByteArray as readByteArray1ri21h2rciakw,
  readByteString as readByteString2hnsbql6t4ads,
  readString as readString2nvggcfaijfhd,
  readString_0 as readString3v6duspiz33tv,
  readString_1 as readStringo8i62qxt5m4m,
  writeString as writeString33ca4btrgctw7,
};
//endregion

//# sourceMappingURL=kotlinx-io-kotlinx-io-core.mjs.map
