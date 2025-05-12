import {
  ArrayList_init_$Create$2qnngtk1et9r9 as ArrayList_init_$Create$,
  Unit_instance104q5opgivhr8 as Unit_instance,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  protoOf180f3jzyo7rfj as protoOf,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  VOID7hggqo3abtya as VOID,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  toString1pkumu07cwy4m as toString,
  IllegalStateException_init_$Create$3ib9qa3pip8n4 as IllegalStateException_init_$Create$,
  isInterface3d6p8outrmvmk as isInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  hashCodeq5arwsb9dgti as hashCode,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  IllegalArgumentException_init_$Create$310sysrobvll9 as IllegalArgumentException_init_$Create$,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  KtMap140uvy3s5zad8 as KtMap,
  KtSetjrjc7fhfd6b9 as KtSet,
  firstOrNull1gk7vzkf4h3nq as firstOrNull,
  StringCompanionObject_instance2odz3s3zbrixa as StringCompanionObject_instance,
  isArray1hxjqtqy632bc as isArray,
  KtList3hktaavzmj137 as KtList,
  filterNotNull3qfgcwmxhwfxe as filterNotNull,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$1s1wkrw82c0iw as ArrayList_init_$Create$_0,
  HashSet_init_$Create$1urd5csbv51lq as HashSet_init_$Create$,
  singleOrNullrknfaxokm1sl as singleOrNull,
  Collection1k04j3hzsbod0 as Collection,
  emptyList1g2z5xcrvp2zy as emptyList,
} from './kotlin-kotlin-stdlib.mjs';
import {
  KSerializerzf77vz1967fq as KSerializer,
  BinaryFormat3f3aelhmz0ro1 as BinaryFormat,
  StringFormat2r2ka8mzcb3mi as StringFormat,
  SerializationExceptioneqrdve3ts2n9 as SerializationException,
  serializerOrNull31x2b6nu6gruj as serializerOrNull,
  serializer1rka18p0rjk4x as serializer,
  MapSerializer11kmegt3g5c1g as MapSerializer,
  SetSerializert3lb0yy9iftr as SetSerializer,
  serializer1x79l67jvwntn as serializer_0,
  ListSerializer1hxuk9dx5n9du as ListSerializer,
  get_nullable197rfua9r7fsz as get_nullable,
} from './kotlinx-serialization-kotlinx-serialization-core.mjs';
import {
  ByteArrayContent9zol65b22hp0 as ByteArrayContent,
  withCharsetIfNeeded3sz33ys0x9vfx as withCharsetIfNeeded,
  TextContent1rb6ftlpvl1d2 as TextContent,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
} from './ktor-ktor-http.mjs';
import {
  FlowCollector26clgpmzihvke as FlowCollector,
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull3pfaj04seehr5 as firstOrNull_0,
} from './kotlinx-coroutines-core.mjs';
import {
  readRemaining33cdmbznvdvtg as readRemaining,
  discard3ugntd47xyll6 as discard,
  readText27783kyxjxi1g as readText,
} from './ktor-ktor-io.mjs';
import { readByteArray1ri21h2rciakw as readByteArray } from './kotlinx-io-kotlinx-io-core.mjs';
import { JsonConvertExceptiongnc5x6xwaf77 as JsonConvertException } from './ktor-ktor-shared-ktor-serialization.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForLambda(KotlinxSerializationConverter$serialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$2, CoroutineImpl);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$3, CoroutineImpl);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForClass(KotlinxSerializationConverter$serialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$serialize$slambda, CoroutineImpl, VOID, [1]);
initMetadataForClass(KotlinxSerializationConverter$deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(KotlinxSerializationConverter$deserialize$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($serializeCOROUTINE$0, CoroutineImpl);
initMetadataForCoroutine($deserializeCOROUTINE$1, CoroutineImpl);
initMetadataForClass(KotlinxSerializationConverter, 'KotlinxSerializationConverter', VOID, VOID, VOID, [4, 3]);
//endregion
function extensions(format) {
  // Inline function 'kotlin.collections.mapNotNull' call
  var tmp0 = get_providers();
  // Inline function 'kotlin.collections.mapNotNullTo' call
  var destination = ArrayList_init_$Create$();
  // Inline function 'kotlin.collections.forEach' call
  var _iterator__ex2g4s = tmp0.m();
  while (_iterator__ex2g4s.n()) {
    var element = _iterator__ex2g4s.o();
    var tmp0_safe_receiver = element.u4o(format);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      destination.k(tmp0_safe_receiver);
    }
  }
  return destination;
}
function serialization(_this__u8e3s4, contentType, format) {
  _this__u8e3s4.x3a(contentType, new KotlinxSerializationConverter(format));
}
function KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
  this.d4p_1 = $$this$unsafeFlow;
  this.e4p_1 = $contentType;
  this.f4p_1 = $charset;
  this.g4p_1 = $typeInfo;
  this.h4p_1 = $value;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).t3b = function (value, $completion) {
  var tmp = this.u3b(value, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).k9 = function (p1, $completion) {
  return this.t3b((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 3;
          var tmp_0 = this;
          tmp_0.j4p_1 = this.d4p_1;
          var tmp_1 = this;
          tmp_1.k4p_1 = this.i4p_1;
          this.l4p_1 = this.j4p_1;
          this.m4p_1 = this.k4p_1;
          var tmp_2 = this;
          tmp_2.n4p_1 = this.m4p_1;
          this.o4p_1 = this.n4p_1;
          this.o8_1 = 1;
          suspendResult = this.o4p_1.t4o(this.e4p_1, this.f4p_1, this.g4p_1, this.h4p_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.p4p_1 = suspendResult;
          this.o8_1 = 2;
          suspendResult = this.l4p_1.z16(this.p4p_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          return Unit_instance;
        case 3:
          throw this.r8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.p8_1 === 3) {
        throw e;
      } else {
        this.o8_1 = this.p8_1;
        this.r8_1 = e;
      }
    }
   while (true);
};
protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).u3b = function (value, completion) {
  var i = new KotlinxSerializationConverter$serialize$o$collect$slambda(this.d4p_1, this.e4p_1, this.f4p_1, this.g4p_1, this.h4p_1, completion);
  i.i4p_1 = value;
  return i;
};
function KotlinxSerializationConverter$serialize$o$collect$slambda_0($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
  var i = new KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation);
  var l = function (value, $completion) {
    return i.t3b(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.y4p_1 = _this__u8e3s4;
  this.z4p_1 = collector;
}
protoOf($collectCOROUTINE$2).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          var tmp_0 = this;
          tmp_0.a4q_1 = this.z4p_1;
          this.b4q_1 = this.a4q_1;
          this.o8_1 = 1;
          var tmp_1 = KotlinxSerializationConverter$serialize$o$collect$slambda_0(this.b4q_1, this.y4p_1.d4q_1, this.y4p_1.e4q_1, this.y4p_1.f4q_1, this.y4p_1.g4q_1, null);
          suspendResult = this.y4p_1.c4q_1.b17(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return Unit_instance;
        case 2:
          throw this.r8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.p8_1 === 2) {
        throw e;
      } else {
        this.o8_1 = this.p8_1;
        this.r8_1 = e;
      }
    }
   while (true);
};
function KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
  this.p4q_1 = $$this$unsafeFlow;
  this.q4q_1 = $charset;
  this.r4q_1 = $typeInfo;
  this.s4q_1 = $content;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).t3b = function (value, $completion) {
  var tmp = this.u3b(value, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).k9 = function (p1, $completion) {
  return this.t3b((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 3;
          var tmp_0 = this;
          tmp_0.u4q_1 = this.p4q_1;
          var tmp_1 = this;
          tmp_1.v4q_1 = this.t4q_1;
          this.w4q_1 = this.u4q_1;
          this.x4q_1 = this.v4q_1;
          var tmp_2 = this;
          tmp_2.y4q_1 = this.x4q_1;
          this.z4q_1 = this.y4q_1;
          this.o8_1 = 1;
          suspendResult = this.z4q_1.v3b(this.q4q_1, this.r4q_1, this.s4q_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.a4r_1 = suspendResult;
          this.o8_1 = 2;
          suspendResult = this.w4q_1.z16(this.a4r_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          return Unit_instance;
        case 3:
          throw this.r8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.p8_1 === 3) {
        throw e;
      } else {
        this.o8_1 = this.p8_1;
        this.r8_1 = e;
      }
    }
   while (true);
};
protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).u3b = function (value, completion) {
  var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda(this.p4q_1, this.q4q_1, this.r4q_1, this.s4q_1, completion);
  i.t4q_1 = value;
  return i;
};
function KotlinxSerializationConverter$deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
  var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation);
  var l = function (value, $completion) {
    return i.t3b(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.j4r_1 = _this__u8e3s4;
  this.k4r_1 = collector;
}
protoOf($collectCOROUTINE$3).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          var tmp_0 = this;
          tmp_0.l4r_1 = this.k4r_1;
          this.m4r_1 = this.l4r_1;
          this.o8_1 = 1;
          var tmp_1 = KotlinxSerializationConverter$deserialize$o$collect$slambda_0(this.m4r_1, this.j4r_1.o4r_1, this.j4r_1.p4r_1, this.j4r_1.q4r_1, null);
          suspendResult = this.j4r_1.n4r_1.b17(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return Unit_instance;
        case 2:
          throw this.r8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.p8_1 === 2) {
        throw e;
      } else {
        this.o8_1 = this.p8_1;
        this.r8_1 = e;
      }
    }
   while (true);
};
function serializeContent($this, serializer, format, value, contentType, charset) {
  var tmp;
  if (isInterface(format, StringFormat)) {
    var content = format.l1t(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
    tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
  } else {
    if (isInterface(format, BinaryFormat)) {
      var content_0 = format.n1t(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new ByteArrayContent(content_0, contentType);
    } else {
      var message = 'Unsupported format ' + toString(format);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  return tmp;
}
function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
  this.r4r_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).z16 = function (value, $completion) {
  return this.r4r_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).m3 = function () {
  return this.r4r_1;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, FlowCollector) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.m3(), other.m3());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
  return hashCode(this.m3());
};
function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
  this.s4r_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).z16 = function (value, $completion) {
  return this.s4r_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).m3 = function () {
  return this.s4r_1;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
  var tmp;
  if (!(other == null) ? isInterface(other, FlowCollector) : false) {
    var tmp_0;
    if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
      tmp_0 = equals(this.m3(), other.m3());
    } else {
      tmp_0 = false;
    }
    tmp = tmp_0;
  } else {
    tmp = false;
  }
  return tmp;
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
  return hashCode(this.m3());
};
function KotlinxSerializationConverter$serialize$$inlined$map$1($this, $contentType, $charset, $typeInfo, $value) {
  this.c4q_1 = $this;
  this.d4q_1 = $contentType;
  this.e4q_1 = $charset;
  this.f4q_1 = $typeInfo;
  this.g4q_1 = $value;
}
protoOf(KotlinxSerializationConverter$serialize$$inlined$map$1).a17 = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$2(this, collector, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(KotlinxSerializationConverter$serialize$$inlined$map$1).b17 = function (collector, $completion) {
  return this.a17(collector, $completion);
};
function KotlinxSerializationConverter$serialize$slambda(resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$serialize$slambda).c4s = function (it, $completion) {
  var tmp = this.d4s(it, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(KotlinxSerializationConverter$serialize$slambda).k9 = function (p1, $completion) {
  return this.c4s((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$serialize$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      if (tmp === 0) {
        this.p8_1 = 1;
        return !(this.b4s_1 == null);
      } else if (tmp === 1) {
        throw this.r8_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(KotlinxSerializationConverter$serialize$slambda).d4s = function (it, completion) {
  var i = new KotlinxSerializationConverter$serialize$slambda(completion);
  i.b4s_1 = it;
  return i;
};
function KotlinxSerializationConverter$serialize$slambda_0(resultContinuation) {
  var i = new KotlinxSerializationConverter$serialize$slambda(resultContinuation);
  var l = function (it, $completion) {
    return i.c4s(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function KotlinxSerializationConverter$deserialize$$inlined$map$1($this, $charset, $typeInfo, $content) {
  this.n4r_1 = $this;
  this.o4r_1 = $charset;
  this.p4r_1 = $typeInfo;
  this.q4r_1 = $content;
}
protoOf(KotlinxSerializationConverter$deserialize$$inlined$map$1).a17 = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$3(this, collector, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(KotlinxSerializationConverter$deserialize$$inlined$map$1).b17 = function (collector, $completion) {
  return this.a17(collector, $completion);
};
function KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation) {
  this.m4s_1 = $content;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(KotlinxSerializationConverter$deserialize$slambda).w3c = function (it, $completion) {
  var tmp = this.u3b(it, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).k9 = function (p1, $completion) {
  return this.w3c((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      if (tmp === 0) {
        this.p8_1 = 1;
        return !(this.n4s_1 == null) || this.m4s_1.y1h();
      } else if (tmp === 1) {
        throw this.r8_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(KotlinxSerializationConverter$deserialize$slambda).u3b = function (it, completion) {
  var i = new KotlinxSerializationConverter$deserialize$slambda(this.m4s_1, completion);
  i.n4s_1 = it;
  return i;
};
function KotlinxSerializationConverter$deserialize$slambda_0($content, resultContinuation) {
  var i = new KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation);
  var l = function (it, $completion) {
    return i.w3c(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function $serializeCOROUTINE$0(_this__u8e3s4, contentType, charset, typeInfo, value, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.w4s_1 = _this__u8e3s4;
  this.x4s_1 = contentType;
  this.y4s_1 = charset;
  this.z4s_1 = typeInfo;
  this.a4t_1 = value;
}
protoOf($serializeCOROUTINE$0).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.o8_1 = 1;
          var this_0 = asFlow(this.w4s_1.c4t_1);
          var tmp_0 = new KotlinxSerializationConverter$serialize$$inlined$map$1(this_0, this.x4s_1, this.y4s_1, this.z4s_1, this.a4t_1);
          suspendResult = firstOrNull_0(tmp_0, KotlinxSerializationConverter$serialize$slambda_0(null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var fromExtension = suspendResult;
          if (!(fromExtension == null))
            return fromExtension;
          var tmp_1;
          try {
            tmp_1 = serializerForTypeInfo(this.w4s_1.b4t_1.l1w(), this.z4s_1);
          } catch ($p) {
            var tmp_2;
            if ($p instanceof SerializationException) {
              var cause = $p;
              tmp_2 = guessSerializer(this.a4t_1, this.w4s_1.b4t_1.l1w());
            } else {
              throw $p;
            }
            tmp_1 = tmp_2;
          }

          var serializer = tmp_1;
          return serializeContent(this.w4s_1, serializer, this.w4s_1.b4t_1, this.a4t_1, this.x4s_1, this.y4s_1);
        case 2:
          throw this.r8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.p8_1 === 2) {
        throw e;
      } else {
        this.o8_1 = this.p8_1;
        this.r8_1 = e;
      }
    }
   while (true);
};
function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.l4t_1 = _this__u8e3s4;
  this.m4t_1 = charset;
  this.n4t_1 = typeInfo;
  this.o4t_1 = content;
}
protoOf($deserializeCOROUTINE$1).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 4;
          this.o8_1 = 1;
          var this_0 = asFlow(this.l4t_1.c4t_1);
          var tmp_0 = new KotlinxSerializationConverter$deserialize$$inlined$map$1(this_0, this.m4t_1, this.n4t_1, this.o4t_1);
          suspendResult = firstOrNull_0(tmp_0, KotlinxSerializationConverter$deserialize$slambda_0(this.o4t_1, null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.p4t_1 = suspendResult;
          var tmp_1;
          if (!this.l4t_1.c4t_1.h()) {
            tmp_1 = !(this.p4t_1 == null) || this.o4t_1.y1h();
          } else {
            tmp_1 = false;
          }

          if (tmp_1)
            return this.p4t_1;
          this.q4t_1 = serializerForTypeInfo(this.l4t_1.b4t_1.l1w(), this.n4t_1);
          this.o8_1 = 2;
          suspendResult = readRemaining(this.o4t_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 2:
          var contentPacket = suspendResult;
          this.p8_1 = 3;
          var tmp0_subject = this.l4t_1.b4t_1;
          var tmp_2;
          if (isInterface(tmp0_subject, StringFormat)) {
            tmp_2 = this.l4t_1.b4t_1.m1t(this.q4t_1, readText(contentPacket, this.m4t_1));
          } else {
            if (isInterface(tmp0_subject, BinaryFormat)) {
              tmp_2 = this.l4t_1.b4t_1.o1t(this.q4t_1, readByteArray(contentPacket));
            } else {
              discard(contentPacket);
              var message = 'Unsupported format ' + toString(this.l4t_1.b4t_1);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }

          return tmp_2;
        case 3:
          this.p8_1 = 4;
          var tmp_3 = this.r8_1;
          if (tmp_3 instanceof Error) {
            var cause = this.r8_1;
            throw new JsonConvertException('Illegal input: ' + cause.message, cause);
          } else {
            throw this.r8_1;
          }

        case 4:
          throw this.r8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.p8_1 === 4) {
        throw e;
      } else {
        this.o8_1 = this.p8_1;
        this.r8_1 = e;
      }
    }
   while (true);
};
function KotlinxSerializationConverter(format) {
  this.b4t_1 = format;
  this.c4t_1 = extensions(this.b4t_1);
  var tmp;
  var tmp_0 = this.b4t_1;
  if (isInterface(tmp_0, BinaryFormat)) {
    tmp = true;
  } else {
    var tmp_1 = this.b4t_1;
    tmp = isInterface(tmp_1, StringFormat);
  }
  // Inline function 'kotlin.require' call
  if (!tmp) {
    var message = 'Only binary and string formats are supported, ' + toString(this.b4t_1) + ' is not supported.';
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
}
protoOf(KotlinxSerializationConverter).r4t = function (contentType, charset, typeInfo, value, $completion) {
  var tmp = new $serializeCOROUTINE$0(this, contentType, charset, typeInfo, value, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(KotlinxSerializationConverter).t4o = function (contentType, charset, typeInfo, value, $completion) {
  return this.r4t(contentType, charset, typeInfo, value, $completion);
};
protoOf(KotlinxSerializationConverter).v3b = function (charset, typeInfo, content, $completion) {
  var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
  var module_0 = _this__u8e3s4;
  var tmp0_safe_receiver = typeInfo.d2j_1;
  var tmp;
  if (tmp0_safe_receiver == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    var tmp_0;
    if (tmp0_safe_receiver.ib().h()) {
      tmp_0 = null;
    } else {
      tmp_0 = serializerOrNull(module_0, tmp0_safe_receiver);
    }
    tmp = tmp_0;
  }
  var tmp1_elvis_lhs = tmp;
  var tmp_1;
  if (tmp1_elvis_lhs == null) {
    var tmp2_safe_receiver = module_0.r1t(typeInfo.c2j_1);
    tmp_1 = tmp2_safe_receiver == null ? null : maybeNullable(tmp2_safe_receiver, typeInfo);
  } else {
    tmp_1 = tmp1_elvis_lhs;
  }
  var tmp3_elvis_lhs = tmp_1;
  return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.c2j_1), typeInfo) : tmp3_elvis_lhs;
}
function guessSerializer(value, module_0) {
  var tmp;
  if (value == null) {
    tmp = get_nullable(serializer_0(StringCompanionObject_instance));
  } else {
    if (!(value == null) ? isInterface(value, KtList) : false) {
      tmp = ListSerializer(elementSerializer(value, module_0));
    } else {
      if (!(value == null) ? isArray(value) : false) {
        var tmp1_safe_receiver = firstOrNull(value);
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = guessSerializer(tmp1_safe_receiver, module_0);
        }
        var tmp2_elvis_lhs = tmp_0;
        tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_instance)) : tmp2_elvis_lhs;
      } else {
        if (!(value == null) ? isInterface(value, KtSet) : false) {
          tmp = SetSerializer(elementSerializer(value, module_0));
        } else {
          if (!(value == null) ? isInterface(value, KtMap) : false) {
            var keySerializer = elementSerializer(value.h2(), module_0);
            var valueSerializer = elementSerializer(value.i2(), module_0);
            tmp = MapSerializer(keySerializer, valueSerializer);
          } else {
            var tmp3_elvis_lhs = module_0.r1t(getKClassFromExpression(value));
            tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
          }
        }
      }
    }
  }
  var tmp_1 = tmp;
  return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
}
function maybeNullable(_this__u8e3s4, typeInfo) {
  var tmp;
  var tmp0_safe_receiver = typeInfo.d2j_1;
  if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jb()) === true) {
    tmp = get_nullable(_this__u8e3s4);
  } else {
    tmp = _this__u8e3s4;
  }
  return tmp;
}
function elementSerializer(_this__u8e3s4, module_0) {
  // Inline function 'kotlin.collections.map' call
  var this_0 = filterNotNull(_this__u8e3s4);
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
  var _iterator__ex2g4s = this_0.m();
  while (_iterator__ex2g4s.n()) {
    var item = _iterator__ex2g4s.o();
    var tmp$ret$0 = guessSerializer(item, module_0);
    destination.k(tmp$ret$0);
  }
  // Inline function 'kotlin.collections.distinctBy' call
  var set = HashSet_init_$Create$();
  var list = ArrayList_init_$Create$();
  var _iterator__ex2g4s_0 = destination.m();
  while (_iterator__ex2g4s_0.n()) {
    var e = _iterator__ex2g4s_0.o();
    var key = e.r1s().z1t();
    if (set.k(key)) {
      list.k(e);
    }
  }
  var serializers = list;
  if (serializers.p() > 1) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(serializers, 10));
    var _iterator__ex2g4s_1 = serializers.m();
    while (_iterator__ex2g4s_1.n()) {
      var item_0 = _iterator__ex2g4s_1.o();
      var tmp$ret$5 = item_0.r1s().z1t();
      destination_0.k(tmp$ret$5);
    }
    // Inline function 'kotlin.error' call
    var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + toString(destination_0));
    throw IllegalStateException_init_$Create$(toString(message));
  }
  var tmp0_elvis_lhs = singleOrNull(serializers);
  var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_instance) : tmp0_elvis_lhs;
  if (selected.r1s().v1t()) {
    return selected;
  }
  if (!isInterface(selected, KSerializer))
    THROW_CCE();
  var tmp$ret$8;
  $l$block_0: {
    // Inline function 'kotlin.collections.any' call
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.h();
    } else {
      tmp = false;
    }
    if (tmp) {
      tmp$ret$8 = false;
      break $l$block_0;
    }
    var _iterator__ex2g4s_2 = _this__u8e3s4.m();
    while (_iterator__ex2g4s_2.n()) {
      var element = _iterator__ex2g4s_2.o();
      if (element == null) {
        tmp$ret$8 = true;
        break $l$block_0;
      }
    }
    tmp$ret$8 = false;
  }
  if (tmp$ret$8) {
    return get_nullable(selected);
  }
  return selected;
}
function get_providers() {
  return emptyList();
}
//region block: exports
export {
  serialization as serialization1fpeds7cruos4,
};
//endregion

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx.mjs.map
