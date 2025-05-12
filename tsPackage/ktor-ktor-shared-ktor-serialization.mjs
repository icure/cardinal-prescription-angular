import {
  Exceptiondt2hlxn7j7vw as Exception,
  VOID7hggqo3abtya as VOID,
  Exception_init_$Init$2fx1sms2m4tu1 as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  Unit_instance104q5opgivhr8 as Unit_instance,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
  equals2au1ep9vhcato as equals,
  FunctionAdapter3lcrrz3moet5b as FunctionAdapter,
  isInterface3d6p8outrmvmk as isInterface,
  hashCodeq5arwsb9dgti as hashCode,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Charsets_getInstancemd62gu5po4os as Charsets_getInstance,
  forName2faodmskqnoz5 as forName,
  isSupported2nf870ypy50et as isSupported,
} from './ktor-ktor-io.mjs';
import {
  HttpHeaders_getInstancekqele34vb34f as HttpHeaders_getInstance,
  parseAndSortHeader33xgq5fx7y6j1 as parseAndSortHeader,
  NullBody_instance9oj4j8z4op1j as NullBody_instance,
} from './ktor-ktor-http.mjs';
import {
  FlowCollector26clgpmzihvke as FlowCollector,
  asFlow3ngsnn5xpz8pw as asFlow,
  firstOrNull3pfaj04seehr5 as firstOrNull,
} from './kotlinx-coroutines-core.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(ContentConvertException, 'ContentConvertException', VOID, Exception);
initMetadataForClass(JsonConvertException, 'JsonConvertException', VOID, ContentConvertException);
function register$default(contentType, converter, configuration, $super) {
  var tmp;
  if (configuration === VOID) {
    tmp = Configuration$register$lambda;
  } else {
    tmp = configuration;
  }
  configuration = tmp;
  var tmp_0;
  if ($super === VOID) {
    this.w3a(contentType, converter, configuration);
    tmp_0 = Unit_instance;
  } else {
    tmp_0 = $super.w3a.call(this, contentType, converter, configuration);
  }
  return tmp_0;
}
initMetadataForInterface(Configuration, 'Configuration');
initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
initMetadataForLambda(deserialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($collectCOROUTINE$1, CoroutineImpl);
initMetadataForClass(deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
initMetadataForLambda(deserialize$slambda, CoroutineImpl, VOID, [1]);
initMetadataForCoroutine($deserializeCOROUTINE$0, CoroutineImpl);
//endregion
function ContentConvertException(message, cause) {
  cause = cause === VOID ? null : cause;
  Exception_init_$Init$(message, cause, this);
  captureStack(this, ContentConvertException);
}
function JsonConvertException(message, cause) {
  cause = cause === VOID ? null : cause;
  ContentConvertException.call(this, message, cause);
  captureStack(this, JsonConvertException);
}
function deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
  var tmp = new $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
}
function suitableCharset(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().o1r_1 : defaultCharset;
  var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
  return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
}
function Configuration$register$lambda(_this__u8e3s4) {
  return Unit_instance;
}
function Configuration() {
}
function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
  defaultCharset = defaultCharset === VOID ? Charsets_getInstance().o1r_1 : defaultCharset;
  var _iterator__ex2g4s = parseAndSortHeader(_this__u8e3s4.w2d(HttpHeaders_getInstance().v2l_1)).m();
  while (_iterator__ex2g4s.n()) {
    var charset = _iterator__ex2g4s.o().bf();
    if (charset === '*')
      return defaultCharset;
    else if (isSupported(Charsets_getInstance(), charset))
      return forName(Charsets_getInstance(), charset);
  }
  return null;
}
function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
  this.y3a_1 = function_0;
}
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).z16 = function (value, $completion) {
  return this.y3a_1(value, $completion);
};
protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).m3 = function () {
  return this.y3a_1;
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
function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
  this.h3b_1 = $$this$unsafeFlow;
  this.i3b_1 = $charset;
  this.j3b_1 = $typeInfo;
  this.k3b_1 = $body;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(deserialize$o$collect$slambda).t3b = function (value, $completion) {
  var tmp = this.u3b(value, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(deserialize$o$collect$slambda).k9 = function (p1, $completion) {
  return this.t3b((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(deserialize$o$collect$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 3;
          var tmp_0 = this;
          tmp_0.m3b_1 = this.h3b_1;
          var tmp_1 = this;
          tmp_1.n3b_1 = this.l3b_1;
          this.o3b_1 = this.m3b_1;
          this.p3b_1 = this.n3b_1;
          var tmp_2 = this;
          tmp_2.q3b_1 = this.p3b_1;
          this.r3b_1 = this.q3b_1;
          this.o8_1 = 1;
          suspendResult = this.r3b_1.v3b(this.i3b_1, this.j3b_1, this.k3b_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          this.s3b_1 = suspendResult;
          this.o8_1 = 2;
          suspendResult = this.o3b_1.z16(this.s3b_1, this);
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
protoOf(deserialize$o$collect$slambda).u3b = function (value, completion) {
  var i = new deserialize$o$collect$slambda(this.h3b_1, this.i3b_1, this.j3b_1, this.k3b_1, completion);
  i.l3b_1 = value;
  return i;
};
function deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
  var i = new deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation);
  var l = function (value, $completion) {
    return i.t3b(value, $completion);
  };
  l.$arity = 1;
  return l;
}
function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.e3c_1 = _this__u8e3s4;
  this.f3c_1 = collector;
}
protoOf($collectCOROUTINE$1).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          var tmp_0 = this;
          tmp_0.g3c_1 = this.f3c_1;
          this.h3c_1 = this.g3c_1;
          this.o8_1 = 1;
          var tmp_1 = deserialize$o$collect$slambda_0(this.h3c_1, this.e3c_1.j3c_1, this.e3c_1.k3c_1, this.e3c_1.l3c_1, null);
          suspendResult = this.e3c_1.i3c_1.b17(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
function deserialize$$inlined$map$1($this, $charset, $typeInfo, $body) {
  this.i3c_1 = $this;
  this.j3c_1 = $charset;
  this.k3c_1 = $typeInfo;
  this.l3c_1 = $body;
}
protoOf(deserialize$$inlined$map$1).a17 = function (collector, $completion) {
  var tmp = new $collectCOROUTINE$1(this, collector, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(deserialize$$inlined$map$1).b17 = function (collector, $completion) {
  return this.a17(collector, $completion);
};
function deserialize$slambda($body, resultContinuation) {
  this.u3c_1 = $body;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(deserialize$slambda).w3c = function (it, $completion) {
  var tmp = this.u3b(it, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(deserialize$slambda).k9 = function (p1, $completion) {
  return this.w3c((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
};
protoOf(deserialize$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      if (tmp === 0) {
        this.p8_1 = 1;
        return !(this.v3c_1 == null) || this.u3c_1.y1h();
      } else if (tmp === 1) {
        throw this.r8_1;
      }
    } catch ($p) {
      var e = $p;
      throw e;
    }
   while (true);
};
protoOf(deserialize$slambda).u3b = function (it, completion) {
  var i = new deserialize$slambda(this.u3c_1, completion);
  i.v3c_1 = it;
  return i;
};
function deserialize$slambda_0($body, resultContinuation) {
  var i = new deserialize$slambda($body, resultContinuation);
  var l = function (it, $completion) {
    return i.w3c(it, $completion);
  };
  l.$arity = 1;
  return l;
}
function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.s3a_1 = _this__u8e3s4;
  this.t3a_1 = body;
  this.u3a_1 = typeInfo;
  this.v3a_1 = charset;
}
protoOf($deserializeCOROUTINE$0).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.o8_1 = 1;
          var this_0 = asFlow(this.s3a_1);
          var tmp_0 = new deserialize$$inlined$map$1(this_0, this.v3a_1, this.u3a_1, this.t3a_1);
          suspendResult = firstOrNull(tmp_0, deserialize$slambda_0(this.t3a_1, null), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_1;
          if (!(result == null)) {
            tmp_1 = result;
          } else {
            if (!this.t3a_1.y1h()) {
              tmp_1 = this.t3a_1;
            } else {
              var tmp0_safe_receiver = this.u3a_1.d2j_1;
              if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.jb()) === true) {
                tmp_1 = NullBody_instance;
              } else {
                throw new ContentConvertException('No suitable converter found for ' + this.u3a_1.toString());
              }
            }
          }

          return tmp_1;
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
//region block: exports
export {
  deserialize as deserialize17rec5pkkk30w,
  register$default as register$default2n93tkqtk1ptz,
  Configuration as Configuration20xgygxdzhlk5,
  JsonConvertException as JsonConvertExceptiongnc5x6xwaf77,
  suitableCharset as suitableCharset1jgdcpdzbzgzn,
};
//endregion

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization.mjs.map
