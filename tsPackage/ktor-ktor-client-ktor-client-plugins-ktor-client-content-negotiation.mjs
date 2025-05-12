import {
  protoOf180f3jzyo7rfj as protoOf,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  plus1ogy4liedzq5j as plus,
  toMutableSetjdpdbr9jsqq8 as toMutableSet,
  ArrayList_init_$Create$2qnngtk1et9r9 as ArrayList_init_$Create$,
  Unit_instance104q5opgivhr8 as Unit_instance,
  VOID7hggqo3abtya as VOID,
  Exceptiondt2hlxn7j7vw as Exception,
  Exception_init_$Init$32vb8wlewqrmh as Exception_init_$Init$,
  captureStack1fzi4aczwc4hg as captureStack,
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  isInterface3d6p8outrmvmk as isInterface,
  toString1pkumu07cwy4m as toString,
  Collection1k04j3hzsbod0 as Collection,
  emptyList1g2z5xcrvp2zy as emptyList,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  Unitkvevlwgzwiuc as Unit,
  ensureNotNull1e947j3ixpazm as ensureNotNull,
  equals2au1ep9vhcato as equals,
  joinToString1cxrrlmo0chqs as joinToString,
  initMetadataForCoroutine1i7lbatuf5bnt as initMetadataForCoroutine,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  ArrayList_init_$Create$1s1wkrw82c0iw as ArrayList_init_$Create$_0,
  PrimitiveClasses_getInstance28ukyr6i8fs0q as PrimitiveClasses_getInstance,
  getKClass1s3j9wy1cofik as getKClass,
  setOf45ia9pnfhe90 as setOf,
  KtList3hktaavzmj137 as KtList,
  arrayOf1akklvh2at202 as arrayOf,
  createKType1lgox3mzhchp5 as createKType,
  createInvariantKTypeProjection3sfd0u0y62ozd as createInvariantKTypeProjection,
  endsWith3cq61xxngobwh as endsWith,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  LinkedHashSet_init_$Create$3qv13l7kzf0ni as LinkedHashSet_init_$Create$,
} from './kotlin-kotlin-stdlib.mjs';
import {
  Application_getInstance1d4ly18wdhadx as Application_getInstance,
  contentType317fn4f991q9a as contentType,
  HttpHeaders_getInstancekqele34vb34f as HttpHeaders_getInstance,
  Companion_getInstance2t5xhismubxj4 as Companion_getInstance,
  OutgoingContent3t2ohmyam9o76 as OutgoingContent,
  contentType2zzm38yxo3syt as contentType_0,
  charset1dribv3ku48b1 as charset,
  NullBody_instance9oj4j8z4op1j as NullBody_instance,
  HttpStatusCode3o1wkms10pg4k as HttpStatusCode,
  ContentType1svlpabm9v7iz as ContentType,
} from './ktor-ktor-http.mjs';
import {
  register$default2n93tkqtk1ptz as register$default,
  Configuration20xgygxdzhlk5 as Configuration,
  suitableCharset1jgdcpdzbzgzn as suitableCharset,
  deserialize17rec5pkkk30w as deserialize,
} from './ktor-ktor-shared-ktor-serialization.mjs';
import {
  Charsets_getInstancemd62gu5po4os as Charsets_getInstance,
  ByteReadChannel2wzou76jce72d as ByteReadChannel,
} from './ktor-ktor-io.mjs';
import {
  TransformRequestBodyContext3ll40opqaho0d as TransformRequestBodyContext,
  HttpRequestBuilder15f2nnx9sjuv1 as HttpRequestBuilder,
  TransformResponseBodyContext1axf7xx6ifwbj as TransformResponseBodyContext,
  HttpResponse1532ob1hsse1y as HttpResponse,
  get_request3dwcif5y0fvf1 as get_request,
  accept2gi3b7wj4jds9 as accept,
  EmptyContent_getInstance14idgfcuyuug as EmptyContent_getInstance,
  createClientPluginjwpvufjows5r as createClientPlugin,
} from './ktor-ktor-client-ktor-client-core.mjs';
import {
  TypeInfo2nbxsuf4v8os2 as TypeInfo,
  KtorSimpleLogger1xdphsp5l4e48 as KtorSimpleLogger,
  AttributeKey3aq8ytwgx54f7 as AttributeKey,
} from './ktor-ktor-utils.mjs';
//region block: imports
//endregion
//region block: pre-declaration
initMetadataForClass(ConverterRegistration, 'ConverterRegistration');
initMetadataForClass(ContentNegotiationConfig$defaultMatcher$1);
initMetadataForClass(ContentNegotiationConfig, 'ContentNegotiationConfig', ContentNegotiationConfig, VOID, [Configuration]);
initMetadataForClass(ContentConverterException, 'ContentConverterException', VOID, Exception);
initMetadataForLambda(ContentNegotiation$lambda$slambda, CoroutineImpl, VOID, [4]);
initMetadataForLambda(ContentNegotiation$lambda$slambda_1, CoroutineImpl, VOID, [4]);
initMetadataForCoroutine($invoke$convertRequestCOROUTINE$0, CoroutineImpl);
initMetadataForCoroutine($invoke$convertResponseCOROUTINE$1, CoroutineImpl);
initMetadataForObject(JsonContentTypeMatcher, 'JsonContentTypeMatcher');
//endregion
function get_LOGGER() {
  _init_properties_ContentNegotiation_kt__o183go();
  return LOGGER;
}
var LOGGER;
function get_DefaultCommonIgnoredTypes() {
  _init_properties_ContentNegotiation_kt__o183go();
  return DefaultCommonIgnoredTypes;
}
var DefaultCommonIgnoredTypes;
function get_ExcludedContentTypes() {
  _init_properties_ContentNegotiation_kt__o183go();
  return ExcludedContentTypes;
}
var ExcludedContentTypes;
function get_ContentNegotiation() {
  _init_properties_ContentNegotiation_kt__o183go();
  return ContentNegotiation;
}
var ContentNegotiation;
function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
  this.n4l_1 = converter;
  this.o4l_1 = contentTypeToSend;
  this.p4l_1 = contentTypeMatcher;
}
function defaultMatcher($this, pattern) {
  return new ContentNegotiationConfig$defaultMatcher$1(pattern);
}
function ContentNegotiationConfig$defaultMatcher$1($pattern) {
  this.q4l_1 = $pattern;
}
protoOf(ContentNegotiationConfig$defaultMatcher$1).r4l = function (contentType) {
  return contentType.o2l(this.q4l_1);
};
function ContentNegotiationConfig() {
  this.s4l_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
  var tmp = this;
  // Inline function 'kotlin.collections.mutableListOf' call
  tmp.t4l_1 = ArrayList_init_$Create$();
  this.u4l_1 = null;
}
protoOf(ContentNegotiationConfig).w3a = function (contentType, converter, configuration) {
  var matcher = contentType.o2l(Application_getInstance().u2j_1) ? JsonContentTypeMatcher_instance : defaultMatcher(this, contentType);
  this.v4l(contentType, converter, matcher, configuration);
};
protoOf(ContentNegotiationConfig).v4l = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
  // Inline function 'kotlin.apply' call
  configuration(converter);
  var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
  this.t4l_1.k(registration);
};
function ContentConverterException(message) {
  Exception_init_$Init$(message, this);
  captureStack(this, ContentConverterException);
}
function ContentNegotiationConfig$_init_$ref_1ne3ob() {
  var l = function () {
    return new ContentNegotiationConfig();
  };
  l.callableName = '<init>';
  return l;
}
function ContentNegotiation$lambda($this$createClientPlugin) {
  _init_properties_ContentNegotiation_kt__o183go();
  var registrations = $this$createClientPlugin.p3n_1.t4l_1;
  var ignoredTypes = $this$createClientPlugin.p3n_1.s4l_1;
  $this$createClientPlugin.j45(ContentNegotiation$lambda$slambda_0(registrations, $this$createClientPlugin, ignoredTypes, null));
  $this$createClientPlugin.f3y(ContentNegotiation$lambda$slambda_2(ignoredTypes, registrations, $this$createClientPlugin, null));
  return Unit_instance;
}
function invoke$convertRequest(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion) {
  var tmp = new $invoke$convertRequestCOROUTINE$0(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
}
function invoke$convertResponse(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion) {
  charset = charset === VOID ? Charsets_getInstance().o1r_1 : charset;
  var tmp = new $invoke$convertResponseCOROUTINE$1(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
}
function ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation) {
  this.t4n_1 = $registrations;
  this.u4n_1 = $this_createClientPlugin;
  this.v4n_1 = $ignoredTypes;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ContentNegotiation$lambda$slambda).a4o = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
  var tmp = this.b4o($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(ContentNegotiation$lambda$slambda).k3z = function (p1, p2, p3, p4, $completion) {
  var tmp = p1 instanceof TransformRequestBodyContext ? p1 : THROW_CCE();
  var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
  var tmp_1 = !(p3 == null) ? p3 : THROW_CCE();
  return this.a4o(tmp, tmp_0, tmp_1, (p4 == null ? true : p4 instanceof TypeInfo) ? p4 : THROW_CCE(), $completion);
};
protoOf(ContentNegotiation$lambda$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.o8_1 = 1;
          suspendResult = invoke$convertRequest(this.t4n_1, this.u4n_1, this.v4n_1, this.x4n_1, this.y4n_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return suspendResult;
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
protoOf(ContentNegotiation$lambda$slambda).b4o = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, completion) {
  var i = new ContentNegotiation$lambda$slambda(this.t4n_1, this.u4n_1, this.v4n_1, completion);
  i.w4n_1 = $this$transformRequestBody;
  i.x4n_1 = request;
  i.y4n_1 = body;
  i.z4n_1 = _unused_var__etf5q3;
  return i;
};
function ContentNegotiation$lambda$slambda_0($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation) {
  var i = new ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation);
  var l = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
    return i.a4o($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
  };
  l.$arity = 4;
  return l;
}
function ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
  this.k4o_1 = $ignoredTypes;
  this.l4o_1 = $registrations;
  this.m4o_1 = $this_createClientPlugin;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(ContentNegotiation$lambda$slambda_1).i3z = function ($this$transformResponseBody, response, body, info, $completion) {
  var tmp = this.j3z($this$transformResponseBody, response, body, info, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(ContentNegotiation$lambda$slambda_1).k3z = function (p1, p2, p3, p4, $completion) {
  var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
  var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
  var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
  return this.i3z(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
};
protoOf(ContentNegotiation$lambda$slambda_1).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          var tmp_0 = this;
          var tmp0_elvis_lhs = contentType(this.o4o_1);
          var tmp_1;
          if (tmp0_elvis_lhs == null) {
            return null;
          } else {
            tmp_1 = tmp0_elvis_lhs;
          }

          tmp_0.r4o_1 = tmp_1;
          this.s4o_1 = suitableCharset(get_request(this.o4o_1).x2p());
          this.o8_1 = 1;
          suspendResult = invoke$convertResponse(this.k4o_1, this.l4o_1, this.m4o_1, get_request(this.o4o_1).q3h(), this.q4o_1, this.p4o_1, this.r4o_1, this.s4o_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          return suspendResult;
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
protoOf(ContentNegotiation$lambda$slambda_1).j3z = function ($this$transformResponseBody, response, body, info, completion) {
  var i = new ContentNegotiation$lambda$slambda_1(this.k4o_1, this.l4o_1, this.m4o_1, completion);
  i.n4o_1 = $this$transformResponseBody;
  i.o4o_1 = response;
  i.p4o_1 = body;
  i.q4o_1 = info;
  return i;
};
function ContentNegotiation$lambda$slambda_2($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
  var i = new ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation);
  var l = function ($this$transformResponseBody, response, body, info, $completion) {
    return i.i3z($this$transformResponseBody, response, body, info, $completion);
  };
  l.$arity = 4;
  return l;
}
function ContentNegotiation$lambda$convertRequest$lambda(it) {
  _init_properties_ContentNegotiation_kt__o183go();
  return toString(it.n4l_1);
}
function $invoke$convertRequestCOROUTINE$0(registrations, $this_createClientPlugin, ignoredTypes, request, body, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.e4m_1 = registrations;
  this.f4m_1 = $this_createClientPlugin;
  this.g4m_1 = ignoredTypes;
  this.h4m_1 = request;
  this.i4m_1 = body;
}
protoOf($invoke$convertRequestCOROUTINE$0).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 7;
          var tmp_0 = this;
          var tmp_1;
          if (this.h4m_1.j3f_1.n2d(get_ExcludedContentTypes())) {
            var excluded = this.h4m_1.j3f_1.l2d(get_ExcludedContentTypes());
            var tmp0 = this.e4m_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.m();
            while (_iterator__ex2g4s.n()) {
              var element = _iterator__ex2g4s.o();
              var tmp$ret$0;
              l$ret$1: do {
                var tmp_2;
                if (isInterface(excluded, Collection)) {
                  tmp_2 = excluded.h();
                } else {
                  tmp_2 = false;
                }
                if (tmp_2) {
                  tmp$ret$0 = true;
                  break l$ret$1;
                }
                var _iterator__ex2g4s_0 = excluded.m();
                while (_iterator__ex2g4s_0.n()) {
                  var element_0 = _iterator__ex2g4s_0.o();
                  if (element.o4l_1.o2l(element_0)) {
                    tmp$ret$0 = false;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = true;
              }
               while (false);
              if (tmp$ret$0) {
                destination.k(element);
              }
            }
            tmp_1 = destination;
          } else {
            tmp_1 = this.e4m_1;
          }

          tmp_0.j4m_1 = tmp_1;
          var tmp_3 = this;
          var tmp0_elvis_lhs = this.h4m_1.g3f_1.a2f(HttpHeaders_getInstance().u2l_1);
          tmp_3.k4m_1 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
          var _iterator__ex2g4s_1 = this.j4m_1.m();
          while (_iterator__ex2g4s_1.n()) {
            var element_1 = _iterator__ex2g4s_1.o();
            var tmp0_0 = this.k4m_1;
            var tmp$ret$2;
            l$ret$3: do {
              var tmp_4;
              if (isInterface(tmp0_0, Collection)) {
                tmp_4 = tmp0_0.h();
              } else {
                tmp_4 = false;
              }
              if (tmp_4) {
                tmp$ret$2 = true;
                break l$ret$3;
              }
              var _iterator__ex2g4s_2 = tmp0_0.m();
              while (_iterator__ex2g4s_2.n()) {
                var element_2 = _iterator__ex2g4s_2.o();
                if (Companion_getInstance().zj(element_2).o2l(element_1.o4l_1)) {
                  tmp$ret$2 = false;
                  break l$ret$3;
                }
              }
              tmp$ret$2 = true;
            }
             while (false);
            if (tmp$ret$2) {
              var qValue = this.f4m_1.p3n_1.u4l_1;
              var contentTypeToSend = qValue == null ? element_1.o4l_1 : element_1.o4l_1.m2l('q', qValue.toString());
              get_LOGGER().g2j('Adding Accept=' + contentTypeToSend.toString() + ' header for ' + this.h4m_1.e3f_1.toString());
              accept(this.h4m_1, contentTypeToSend);
            }
          }

          var tmp_5;
          var tmp_6 = this.i4m_1;
          if (tmp_6 instanceof OutgoingContent) {
            tmp_5 = true;
          } else {
            var tmp5 = this.g4m_1;
            var tmp$ret$4;
            l$ret$5: do {
              var tmp_7;
              if (isInterface(tmp5, Collection)) {
                tmp_7 = tmp5.h();
              } else {
                tmp_7 = false;
              }
              if (tmp_7) {
                tmp$ret$4 = false;
                break l$ret$5;
              }
              var _iterator__ex2g4s_3 = tmp5.m();
              while (_iterator__ex2g4s_3.n()) {
                var element_3 = _iterator__ex2g4s_3.o();
                if (element_3.ta(this.i4m_1)) {
                  tmp$ret$4 = true;
                  break l$ret$5;
                }
              }
              tmp$ret$4 = false;
            }
             while (false);
            tmp_5 = tmp$ret$4;
          }

          if (tmp_5) {
            get_LOGGER().g2j('Body type ' + toString(getKClassFromExpression(this.i4m_1)) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.h4m_1.e3f_1.toString() + '.'));
            return null;
          }

          var tmp_8 = this;
          var tmp0_elvis_lhs_0 = contentType_0(this.h4m_1);
          var tmp_9;
          if (tmp0_elvis_lhs_0 == null) {
            this.f4m_1;
            get_LOGGER().g2j("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.h4m_1.e3f_1.toString() + '.');
            return null;
          } else {
            tmp_9 = tmp0_elvis_lhs_0;
          }

          tmp_8.l4m_1 = tmp_9;
          var tmp_10 = this.i4m_1;
          if (tmp_10 instanceof Unit) {
            get_LOGGER().g2j('Sending empty body for ' + this.h4m_1.e3f_1.toString());
            this.h4m_1.g3f_1.m2f(HttpHeaders_getInstance().m2m_1);
            return EmptyContent_getInstance();
          }

          var tmp_11 = this;
          var tmp0_1 = this.e4m_1;
          var destination_0 = ArrayList_init_$Create$();
          var _iterator__ex2g4s_4 = tmp0_1.m();
          while (_iterator__ex2g4s_4.n()) {
            var element_4 = _iterator__ex2g4s_4.o();
            if (element_4.p4l_1.r4l(this.l4m_1)) {
              destination_0.k(element_4);
            }
          }

          var tmp_12;
          if (!destination_0.h()) {
            tmp_12 = destination_0;
          } else {
            tmp_12 = null;
          }

          var tmp1_elvis_lhs = tmp_12;
          var tmp_13;
          if (tmp1_elvis_lhs == null) {
            this.f4m_1;
            get_LOGGER().g2j('None of the registered converters match request Content-Type=' + this.l4m_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.h4m_1.e3f_1.toString() + '.'));
            return null;
          } else {
            tmp_13 = tmp1_elvis_lhs;
          }

          tmp_11.m4m_1 = tmp_13;
          if (this.h4m_1.g47() == null) {
            get_LOGGER().g2j('Request has unknown body type. Skipping ContentNegotiation for ' + this.h4m_1.e3f_1.toString() + '.');
            return null;
          }

          this.h4m_1.g3f_1.m2f(HttpHeaders_getInstance().m2m_1);
          var tmp_14 = this;
          tmp_14.n4m_1 = this.m4m_1;
          this.o8_1 = 1;
          continue $sm;
        case 1:
          this.p4m_1 = this.n4m_1;
          this.q4m_1 = this.p4m_1.m();
          this.o8_1 = 2;
          continue $sm;
        case 2:
          if (!this.q4m_1.n()) {
            this.o8_1 = 5;
            continue $sm;
          }

          this.r4m_1 = this.q4m_1.o();
          var tmp_15 = this;
          tmp_15.s4m_1 = this.r4m_1;
          this.t4m_1 = this.s4m_1;
          this.o8_1 = 3;
          var tmp0_elvis_lhs_1 = charset(this.l4m_1);
          var tmp_16 = tmp0_elvis_lhs_1 == null ? Charsets_getInstance().o1r_1 : tmp0_elvis_lhs_1;
          var tmp_17 = ensureNotNull(this.h4m_1.g47());
          var this_0 = this.i4m_1;
          var tmp_18;
          if (!equals(this_0, NullBody_instance)) {
            tmp_18 = this_0;
          } else {
            tmp_18 = null;
          }

          suspendResult = this.t4m_1.n4l_1.t4o(this.l4m_1, tmp_16, tmp_17, tmp_18, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 3:
          var result = suspendResult;
          if (!(result == null)) {
            get_LOGGER().g2j('Converted request body using ' + toString(this.t4m_1.n4l_1) + ' for ' + this.h4m_1.e3f_1.toString());
          }

          var result_0 = result;
          if (!(result_0 == null)) {
            this.o4m_1 = result_0;
            this.o8_1 = 6;
            continue $sm;
          } else {
            this.o8_1 = 4;
            continue $sm;
          }

        case 4:
          this.o8_1 = 2;
          continue $sm;
        case 5:
          this.o4m_1 = null;
          if (false) {
            this.o8_1 = 1;
            continue $sm;
          }

          this.o8_1 = 6;
          continue $sm;
        case 6:
          var tmp2_elvis_lhs = this.o4m_1;
          var tmp_19;
          if (tmp2_elvis_lhs == null) {
            var tmp_20 = "Can't convert " + toString(this.i4m_1) + ' with contentType ' + this.l4m_1.toString() + ' using converters ';
            throw new ContentConverterException(tmp_20 + joinToString(this.m4m_1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$lambda$convertRequest$lambda));
          } else {
            tmp_19 = tmp2_elvis_lhs;
          }

          var serializedContent = tmp_19;
          return serializedContent;
        case 7:
          throw this.r8_1;
      }
    } catch ($p) {
      var e = $p;
      if (this.p8_1 === 7) {
        throw e;
      } else {
        this.o8_1 = this.p8_1;
        this.r8_1 = e;
      }
    }
   while (true);
};
function $invoke$convertResponseCOROUTINE$1(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, resultContinuation) {
  CoroutineImpl.call(this, resultContinuation);
  this.c4n_1 = ignoredTypes;
  this.d4n_1 = registrations;
  this.e4n_1 = $this_createClientPlugin;
  this.f4n_1 = requestUrl;
  this.g4n_1 = info;
  this.h4n_1 = body;
  this.i4n_1 = responseContentType;
  this.j4n_1 = charset;
}
protoOf($invoke$convertResponseCOROUTINE$1).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          var tmp_0 = this.h4n_1;
          if (!isInterface(tmp_0, ByteReadChannel)) {
            get_LOGGER().g2j('Response body is already transformed. Skipping ContentNegotiation for ' + this.f4n_1.toString() + '.');
            return null;
          }

          if (this.c4n_1.x1(this.g4n_1.c2j_1)) {
            get_LOGGER().g2j('Response body type ' + toString(this.g4n_1.c2j_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.f4n_1.toString() + '.'));
            return null;
          }

          var tmp_1 = this;
          var tmp0 = this.d4n_1;
          var destination = ArrayList_init_$Create$();
          var _iterator__ex2g4s = tmp0.m();
          while (_iterator__ex2g4s.n()) {
            var element = _iterator__ex2g4s.o();
            if (element.p4l_1.r4l(this.i4n_1)) {
              destination.k(element);
            }
          }

          var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
          var _iterator__ex2g4s_0 = destination.m();
          while (_iterator__ex2g4s_0.n()) {
            var item = _iterator__ex2g4s_0.o();
            destination_0.k(item.n4l_1);
          }

          var tmp_2;
          if (!destination_0.h()) {
            tmp_2 = destination_0;
          } else {
            tmp_2 = null;
          }

          var tmp0_elvis_lhs = tmp_2;
          var tmp_3;
          if (tmp0_elvis_lhs == null) {
            this.e4n_1;
            get_LOGGER().g2j('None of the registered converters match response with Content-Type=' + this.i4n_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.f4n_1.toString() + '.'));
            return null;
          } else {
            tmp_3 = tmp0_elvis_lhs;
          }

          tmp_1.k4n_1 = tmp_3;
          this.o8_1 = 1;
          suspendResult = deserialize(this.k4n_1, this.h4n_1, this.g4n_1, this.j4n_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          if (!isInterface(result, ByteReadChannel)) {
            get_LOGGER().g2j('Response body was converted to ' + toString(getKClassFromExpression(result)) + ' for ' + this.f4n_1.toString() + '.');
          }

          return result;
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
var properties_initialized_ContentNegotiation_kt_1ayduy;
function _init_properties_ContentNegotiation_kt__o183go() {
  if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
    properties_initialized_ContentNegotiation_kt_1ayduy = true;
    LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
    DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().cc(), PrimitiveClasses_getInstance().yb(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
    // Inline function 'io.ktor.util.AttributeKey' call
    var name = 'ExcludedContentTypesAttr';
    // Inline function 'io.ktor.util.reflect.typeInfo' call
    var tmp = getKClass(KtList);
    // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
    var tmp_0;
    try {
      tmp_0 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ContentType), arrayOf([]), false))]), false);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_1 = null;
      } else {
        throw $p;
      }
      tmp_0 = tmp_1;
    }
    var tmp$ret$0 = tmp_0;
    var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$0);
    ExcludedContentTypes = new AttributeKey(name, tmp$ret$1);
    var tmp_2 = ContentNegotiationConfig$_init_$ref_1ne3ob();
    ContentNegotiation = createClientPlugin('ContentNegotiation', tmp_2, ContentNegotiation$lambda);
  }
}
function JsonContentTypeMatcher() {
}
protoOf(JsonContentTypeMatcher).r4l = function (contentType) {
  if (contentType.o2l(Application_getInstance().u2j_1)) {
    return true;
  }
  var value = contentType.n2l().toString();
  return Application_getInstance().o2k(value) && endsWith(value, '+json', true);
};
var JsonContentTypeMatcher_instance;
function JsonContentTypeMatcher_getInstance() {
  return JsonContentTypeMatcher_instance;
}
function get_DefaultIgnoredTypes() {
  _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1();
  return DefaultIgnoredTypes;
}
var DefaultIgnoredTypes;
var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
function _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1() {
  if (!properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
    properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
    // Inline function 'kotlin.collections.mutableSetOf' call
    DefaultIgnoredTypes = LinkedHashSet_init_$Create$();
  }
}
//region block: post-declaration
protoOf(ContentNegotiationConfig).x3a = register$default;
//endregion
//region block: init
JsonContentTypeMatcher_instance = new JsonContentTypeMatcher();
//endregion
//region block: exports
export {
  get_ContentNegotiation as get_ContentNegotiationcp59ye9rorjc,
};
//endregion

//# sourceMappingURL=ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.mjs.map
