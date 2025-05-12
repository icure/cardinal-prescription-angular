import * as options from './options.mjs'
import * as utils from './utils.mjs'
import * as sdk from './sdk.mjs'
import * as model from './model.mjs'
import * as api from './api.mjs'
import {
  CoroutineImpl2sn3kjnwmfr10 as CoroutineImpl,
  Unit_instance104q5opgivhr8 as Unit_instance,
  protoOf180f3jzyo7rfj as protoOf,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  isInterface3d6p8outrmvmk as isInterface,
  get_COROUTINE_SUSPENDED3ujt3p13qm4iy as get_COROUTINE_SUSPENDED,
  initMetadataForLambda3af3he42mmnh as initMetadataForLambda,
  VOID7hggqo3abtya as VOID,
  initMetadataForObject1cxne3s9w65el as initMetadataForObject,
  lazy2hsh8ze7j6ikd as lazy,
  defineProp3hxgpk2knu2px as defineProp,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  KProperty1ca4yb4wlo496 as KProperty1,
  getPropertyCallableRef1ajb9in178r5r as getPropertyCallableRef,
  isNaNymqb93xtq8w8 as isNaN_0,
  isFinite2t9l5a275mxm6 as isFinite,
  toString1pkumu07cwy4m as toString,
  IllegalArgumentException_init_$Create$310sysrobvll9 as IllegalArgumentException_init_$Create$,
  numberToLong1a4cndvg6c52s as numberToLong,
  ArrayList_init_$Create$1s1wkrw82c0iw as ArrayList_init_$Create$,
  collectionSizeOrDefault36dulx8yinfqm as collectionSizeOrDefault,
  copyToArray2j022khrow2yi as copyToArray,
  getKClassFromExpression3vpejubogshaw as getKClassFromExpression,
  initMetadataForInterface1egvbzx539z91 as initMetadataForInterface,
} from './kotlin-kotlin-stdlib.mjs';
import {
  CoroutineScopefcb5f5dwqcas as CoroutineScope,
  GlobalScope_instance3rq364dcgnf9q as GlobalScope_instance,
  promise1ky6tawqaxbt4 as promise,
} from './kotlinx-coroutines-core.mjs';
import {
  Companion_getInstanceactlngkbt0hm as Companion_getInstance,
  SamSdkOptions18w2nrd9smr51 as SamSdkOptions,
  isJsSafe3tg3iamd6fmve as isJsSafe,
  InternalCardinalExceptionc3t96mv2fga as InternalCardinalException,
  _JwtRefresh___init__impl__17g47n1afq558xdrghz as _JwtRefresh___init__impl__17g47n,
  _JwtBearer___init__impl__envtvz2ggyg5x2saf6o as _JwtBearer___init__impl__envtvz,
  JwtBearer1yfd1mgpklfw8 as JwtBearer,
  JwtCredentials2bkcd3j3a9kcm as JwtCredentials,
  valueOf2742a51uwcjku as valueOf,
  ThirdPartyAuthentication14c770gl4xl8k as ThirdPartyAuthentication,
  UsernameLongToken2ndogdyawcawo as UsernameLongToken,
  UsernamePassword1chj6960jmwe9 as UsernamePassword,
} from './cardinal-be-sam.mjs';
import {
  base32Encodekmf3yf2s0juj as base32Encode,
  base32Decode2jbdu2t0l4088 as base32Decode,
  toHexStringu73q9mlb2b2a as toHexString,
  hexToByteArray3fb7kdnap6dyp as hexToByteArray,
  base64Encode2qlepsvd3tele as base64Encode,
  base64Decodes731id9on7gy as base64Decode,
} from './kryptom-lib.mjs';
import './ktor-ktor-client-ktor-client-core.mjs';
//region block: imports
var CodeStub = model.CodeStub;
var Amp = model.Amp;
var Nmp = model.Nmp;
var Paragraph = model.Paragraph;
var PharmaceuticalForm = model.PharmaceuticalForm;
var SamVersion = model.SamVersion;
var Substance = model.Substance;
var Verse = model.Verse;
var VmpGroup = model.VmpGroup;
var Vmp = model.Vmp;
var AddedDocument = model.AddedDocument;
var AmpComponent = model.AmpComponent;
var AmppComponent = model.AmppComponent;
var Ampp = model.Ampp;
var Atc = model.Atc;
var BoundedParameter = model.BoundedParameter;
var CommentedClassification = model.CommentedClassification;
var Commercialization = model.Commercialization;
var Company = model.Company;
var ComplexStrength = model.ComplexStrength;
var Copayment = model.Copayment;
var DeviceType = model.DeviceType;
var Dmpp = model.Dmpp;
var DosageParameter = model.DosageParameter;
var Indication = model.Indication;
var Ingredient = model.Ingredient;
var NoGenericPrescriptionReason = model.NoGenericPrescriptionReason;
var NoSwitchReason = model.NoSwitchReason;
var NumeratorRange = model.NumeratorRange;
var PackagingType = model.PackagingType;
var Pricing = model.Pricing;
var Quantity = model.Quantity;
var ReimbursementCriterion = model.ReimbursementCriterion;
var Reimbursement = model.Reimbursement;
var RouteOfAdministration = model.RouteOfAdministration;
var SamText = model.SamText;
var StandardDosage = model.StandardDosage;
var StandardSubstance = model.StandardSubstance;
var StrengthRange = model.StrengthRange;
var SupplyProblem = model.SupplyProblem;
var VirtualForm = model.VirtualForm;
var VirtualIngredient = model.VirtualIngredient;
var VmpComponent = model.VmpComponent;
var Vtm = model.Vtm;
var Wada = model.Wada;
var PharmaceuticalFormStub = model.PharmaceuticalFormStub;
var SubstanceStub = model.SubstanceStub;
var VmpGroupStub = model.VmpGroupStub;
var VmpStub = model.VmpStub;
var JwtCredentials_0 = options.Credentials.JwtCredentials;
var ThirdPartyAuth = options.Credentials.ThirdPartyAuth;
var UsernameLongToken_0 = options.Credentials.UsernameLongToken;
var UsernamePassword_0 = options.Credentials.UsernamePassword;
//endregion
//region block: pre-declaration
initMetadataForLambda(InternalSdkInitializers$initializeSdk$slambda, CoroutineImpl, VOID, [1]);
initMetadataForObject(InternalSdkInitializers_0, 'InternalSdkInitializers');
initMetadataForClass(CardinalBeSamSdkJsImpl, 'CardinalBeSamSdkJsImpl');
initMetadataForLambda(SamV2ApiImplJs$getSamVersion$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findAmpsByDmppCode$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findAmpsByAmpCode$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listVmpsByVmpCodes$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listVmpsByGroupIds$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listAmpsByGroupCodes$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listAmpsByDmppCodes$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listAmpsByGroupIds$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listAmpsByVmpCodes$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listAmpsByVmpIds$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listNmpsByCnks$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listSubstances$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$listPharmaceuticalForms$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$getAddedDocument$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findParagraphs$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$findParagraphsWithCnk$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$getAmpsForParagraph$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$getVtmNamesForParagraph$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(SamV2ApiImplJs$getVersesHierarchy$slambda, CoroutineImpl, VOID, [1]);
initMetadataForClass(SamV2ApiImplJs, 'SamV2ApiImplJs');
initMetadataForObject(CheckedConverters, 'CheckedConverters');
initMetadataForInterface(PaginatedListIterator, 'PaginatedListIteratorJs');
initMetadataForLambda(paginatedListIterator_toJs$o$hasNext$slambda, CoroutineImpl, VOID, [1]);
initMetadataForLambda(paginatedListIterator_toJs$o$next$slambda, CoroutineImpl, VOID, [1]);
initMetadataForClass(paginatedListIterator_toJs$1, VOID, VOID, VOID, [PaginatedListIterator]);
//endregion
function InternalSdkInitializers$initializeSdk$slambda($applicationId, $apiUrl, $credentials, resultContinuation) {
  this.m7g_1 = $applicationId;
  this.n7g_1 = $apiUrl;
  this.o7g_1 = $credentials;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(InternalSdkInitializers$initializeSdk$slambda).q7g = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(InternalSdkInitializers$initializeSdk$slambda).k9 = function (p1, $completion) {
  return this.q7g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(InternalSdkInitializers$initializeSdk$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.o8_1 = 1;
          suspendResult = Companion_getInstance().f56(this.m7g_1, this.n7g_1, toKt(this.o7g_1), new SamSdkOptions(), this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var ARGUMENT = suspendResult;
          return new CardinalBeSamSdkJsImpl(ARGUMENT);
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
protoOf(InternalSdkInitializers$initializeSdk$slambda).t1q = function ($this$promise, completion) {
  var i = new InternalSdkInitializers$initializeSdk$slambda(this.m7g_1, this.n7g_1, this.o7g_1, completion);
  i.p7g_1 = $this$promise;
  return i;
};
function InternalSdkInitializers$initializeSdk$slambda_0($applicationId, $apiUrl, $credentials, resultContinuation) {
  var i = new InternalSdkInitializers$initializeSdk$slambda($applicationId, $apiUrl, $credentials, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.q7g($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function InternalSdkInitializers_0() {
}
protoOf(InternalSdkInitializers_0).initializeSdk = function (applicationId, apiUrl, credentials) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, InternalSdkInitializers$initializeSdk$slambda_0(applicationId, apiUrl, credentials, null));
};
var InternalSdkInitializers_instance;
function InternalSdkInitializers_getInstance() {
  return InternalSdkInitializers_instance;
}
function CardinalBeSamSdkJsImpl$sam$delegate$lambda(this$0) {
  return function () {
    return new SamV2ApiImplJs(this$0.r7g_1.o56());
  };
}
function CardinalBeSamSdkJsImpl(sdk) {
  this.r7g_1 = sdk;
  var tmp = this;
  tmp.s7g_1 = lazy(CardinalBeSamSdkJsImpl$sam$delegate$lambda(this));
}
protoOf(CardinalBeSamSdkJsImpl).o56 = function () {
  var tmp0 = this.s7g_1;
  // Inline function 'kotlin.getValue' call
  sam$factory();
  return tmp0.z();
};
function sam$factory() {
  return getPropertyCallableRef('sam', 1, KProperty1, function (receiver) {
    return receiver.o56();
  }, null);
}
function SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda$lambda(x1) {
  return vmp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda$lambda(x1) {
  return vmp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda$lambda(x1) {
  return vmp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda$lambda(x1) {
  return nmp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda$lambda(x1) {
  return vmp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findAmpsByDmppCode$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findAmpsByAmpCode$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda$lambda(x1) {
  return vmpGroup_toJs(x1);
}
function SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda$lambda(x1) {
  return vmpGroup_toJs(x1);
}
function SamV2ApiImplJs$listVmpsByVmpCodes$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listVmpsByVmpCodes$slambda$lambda_0(x1) {
  return vmp_toJs(x1);
}
function SamV2ApiImplJs$listVmpsByGroupIds$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listVmpsByGroupIds$slambda$lambda_0(x1) {
  return vmp_toJs(x1);
}
function SamV2ApiImplJs$listAmpsByGroupCodes$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listAmpsByGroupCodes$slambda$lambda_0(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$listAmpsByDmppCodes$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listAmpsByDmppCodes$slambda$lambda_0(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$listAmpsByGroupIds$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listAmpsByGroupIds$slambda$lambda_0(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$listAmpsByVmpCodes$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listAmpsByVmpCodes$slambda$lambda_0(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$listAmpsByVmpIds$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listAmpsByVmpIds$slambda$lambda_0(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda$lambda_0(x1) {
  return vmpGroup_toJs(x1);
}
function SamV2ApiImplJs$listNmpsByCnks$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$listNmpsByCnks$slambda$lambda_0(x1) {
  return nmp_toJs(x1);
}
function SamV2ApiImplJs$listSubstances$slambda$lambda(x1) {
  return substance_toJs(x1);
}
function SamV2ApiImplJs$listPharmaceuticalForms$slambda$lambda(x1) {
  return pharmaceuticalForm_toJs(x1);
}
function SamV2ApiImplJs$findParagraphs$slambda$lambda(x1) {
  return paragraph_toJs(x1);
}
function SamV2ApiImplJs$findParagraphsWithCnk$slambda$lambda(x1) {
  return paragraph_toJs(x1);
}
function SamV2ApiImplJs$getAmpsForParagraph$slambda$lambda(x1) {
  return amp_toJs(x1);
}
function SamV2ApiImplJs$getVtmNamesForParagraph$slambda$lambda(x1) {
  return x1;
}
function SamV2ApiImplJs$getSamVersion$slambda(this$0, resultContinuation) {
  this.b7h_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$getSamVersion$slambda).d7h = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$getSamVersion$slambda).k9 = function (p1, $completion) {
  return this.d7h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$getSamVersion$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.o8_1 = 1;
          suspendResult = this.b7h_1.e7h_1.a5o(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return samVersion_toJs(result);
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
protoOf(SamV2ApiImplJs$getSamVersion$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$getSamVersion$slambda(this.b7h_1, completion);
  i.c7h_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$getSamVersion$slambda_0(this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$getSamVersion$slambda(this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.d7h($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda($language, $label, this$0, resultContinuation) {
  this.n7h_1 = $language;
  this.o7h_1 = $label;
  this.p7h_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda).t7h = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda).k9 = function (p1, $completion) {
  return this.t7h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.r7h_1 = CheckedConverters_instance.y7h(this.n7h_1);
          this.s7h_1 = CheckedConverters_instance.y7h(this.o7h_1);
          this.o8_1 = 1;
          suspendResult = this.p7h_1.e7h_1.b5o(this.r7h_1, this.s7h_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda(this.n7h_1, this.o7h_1, this.p7h_1, completion);
  i.q7h_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda_0($language, $label, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda($language, $label, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.t7h($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda($language, $label, this$0, resultContinuation) {
  this.h7i_1 = $language;
  this.i7i_1 = $label;
  this.j7i_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda).n7i = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda).k9 = function (p1, $completion) {
  return this.n7i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.l7i_1 = CheckedConverters_instance.y7h(this.h7i_1);
          this.m7i_1 = CheckedConverters_instance.y7h(this.i7i_1);
          this.o8_1 = 1;
          suspendResult = this.j7i_1.e7h_1.c5o(this.l7i_1, this.m7i_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda(this.h7i_1, this.i7i_1, this.j7i_1, completion);
  i.k7i_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda_0($language, $label, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda($language, $label, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.n7i($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda($vmpgCode, this$0, resultContinuation) {
  this.w7i_1 = $vmpgCode;
  this.x7i_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda).n7i = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda).k9 = function (p1, $completion) {
  return this.n7i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.z7i_1 = this.w7i_1;
          this.o8_1 = 1;
          suspendResult = this.x7i_1.e7h_1.d5o(this.z7i_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda(this.w7i_1, this.x7i_1, completion);
  i.y7i_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda_0($vmpgCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda($vmpgCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.n7i($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda($vmpCode, this$0, resultContinuation) {
  this.i7j_1 = $vmpCode;
  this.j7j_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda).n7i = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda).k9 = function (p1, $completion) {
  return this.n7i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.l7j_1 = this.i7j_1;
          this.o8_1 = 1;
          suspendResult = this.j7j_1.e7h_1.e5o(this.l7j_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda(this.i7j_1, this.j7j_1, completion);
  i.k7j_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda_0($vmpCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda($vmpCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.n7i($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda($language, $label, this$0, resultContinuation) {
  this.u7j_1 = $language;
  this.v7j_1 = $label;
  this.w7j_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda).a7k = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda).k9 = function (p1, $completion) {
  return this.a7k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.y7j_1 = CheckedConverters_instance.y7h(this.u7j_1);
          this.z7j_1 = CheckedConverters_instance.y7h(this.v7j_1);
          this.o8_1 = 1;
          suspendResult = this.w7j_1.e7h_1.f5o(this.y7j_1, this.z7j_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda(this.u7j_1, this.v7j_1, this.w7j_1, completion);
  i.x7j_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda_0($language, $label, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda($language, $label, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.a7k($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda($vmpgId, this$0, resultContinuation) {
  this.j7k_1 = $vmpgId;
  this.k7k_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda).n7i = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda).k9 = function (p1, $completion) {
  return this.n7i((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.m7k_1 = this.j7k_1;
          this.o8_1 = 1;
          suspendResult = this.k7k_1.e7h_1.g5o(this.m7k_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda(this.j7k_1, this.k7k_1, completion);
  i.l7k_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda_0($vmpgId, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda($vmpgId, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.n7i($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda($vmpgCode, this$0, resultContinuation) {
  this.v7k_1 = $vmpgCode;
  this.w7k_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda).t7h = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda).k9 = function (p1, $completion) {
  return this.t7h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.y7k_1 = this.v7k_1;
          this.o8_1 = 1;
          suspendResult = this.w7k_1.e7h_1.h5o(this.y7k_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda(this.v7k_1, this.w7k_1, completion);
  i.x7k_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda_0($vmpgCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda($vmpgCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.t7h($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda($ampId, this$0, resultContinuation) {
  this.h7l_1 = $ampId;
  this.i7l_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda).t7h = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda).k9 = function (p1, $completion) {
  return this.t7h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.k7l_1 = this.h7l_1;
          this.o8_1 = 1;
          suspendResult = this.i7l_1.e7h_1.i5o(this.k7l_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda(this.h7l_1, this.i7l_1, completion);
  i.j7l_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda_0($ampId, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda($ampId, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.t7h($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda($vmpCode, this$0, resultContinuation) {
  this.t7l_1 = $vmpCode;
  this.u7l_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda).t7h = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda).k9 = function (p1, $completion) {
  return this.t7h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.w7l_1 = this.t7l_1;
          this.o8_1 = 1;
          suspendResult = this.u7l_1.e7h_1.j5o(this.w7l_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda(this.t7l_1, this.u7l_1, completion);
  i.v7l_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda_0($vmpCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda($vmpCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.t7h($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda($atcCode, this$0, resultContinuation) {
  this.f7m_1 = $atcCode;
  this.g7m_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda).t7h = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda).k9 = function (p1, $completion) {
  return this.t7h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.i7m_1 = this.f7m_1;
          this.o8_1 = 1;
          suspendResult = this.g7m_1.e7h_1.k5o(this.i7m_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda(this.f7m_1, this.g7m_1, completion);
  i.h7m_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda_0($atcCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda($atcCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.t7h($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda($vmpId, this$0, resultContinuation) {
  this.r7m_1 = $vmpId;
  this.s7m_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda).t7h = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda).k9 = function (p1, $completion) {
  return this.t7h((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.u7m_1 = this.r7m_1;
          this.o8_1 = 1;
          suspendResult = this.s7m_1.e7h_1.l5o(this.u7m_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda(this.r7m_1, this.s7m_1, completion);
  i.t7m_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda_0($vmpId, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda($vmpId, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.t7h($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findAmpsByDmppCode$slambda($dmppCode, this$0, resultContinuation) {
  this.d7n_1 = $dmppCode;
  this.e7n_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findAmpsByDmppCode$slambda).h7n = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findAmpsByDmppCode$slambda).k9 = function (p1, $completion) {
  return this.h7n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findAmpsByDmppCode$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.g7n_1 = this.d7n_1;
          this.o8_1 = 1;
          suspendResult = this.e7n_1.e7h_1.m5o(this.g7n_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.i7n(result, SamV2ApiImplJs$findAmpsByDmppCode$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findAmpsByDmppCode$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findAmpsByDmppCode$slambda(this.d7n_1, this.e7n_1, completion);
  i.f7n_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findAmpsByDmppCode$slambda_0($dmppCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findAmpsByDmppCode$slambda($dmppCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.h7n($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findAmpsByAmpCode$slambda($ampCode, this$0, resultContinuation) {
  this.r7n_1 = $ampCode;
  this.s7n_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findAmpsByAmpCode$slambda).h7n = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findAmpsByAmpCode$slambda).k9 = function (p1, $completion) {
  return this.h7n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findAmpsByAmpCode$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.u7n_1 = this.r7n_1;
          this.o8_1 = 1;
          suspendResult = this.s7n_1.e7h_1.n5o(this.u7n_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.i7n(result, SamV2ApiImplJs$findAmpsByAmpCode$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findAmpsByAmpCode$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findAmpsByAmpCode$slambda(this.r7n_1, this.s7n_1, completion);
  i.t7n_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findAmpsByAmpCode$slambda_0($ampCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findAmpsByAmpCode$slambda($ampCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.h7n($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda($language, $label, this$0, resultContinuation) {
  this.d7o_1 = $language;
  this.e7o_1 = $label;
  this.f7o_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda).j7o = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda).k9 = function (p1, $completion) {
  return this.j7o((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.h7o_1 = CheckedConverters_instance.y7h(this.d7o_1);
          this.i7o_1 = CheckedConverters_instance.y7h(this.e7o_1);
          this.o8_1 = 1;
          suspendResult = this.f7o_1.e7h_1.o5o(this.h7o_1, this.i7o_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda(this.d7o_1, this.e7o_1, this.f7o_1, completion);
  i.g7o_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda_0($language, $label, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda($language, $label, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.j7o($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda($vmpgCode, this$0, resultContinuation) {
  this.s7o_1 = $vmpgCode;
  this.t7o_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda).j7o = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda).k9 = function (p1, $completion) {
  return this.j7o((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.v7o_1 = this.s7o_1;
          this.o8_1 = 1;
          suspendResult = this.t7o_1.e7h_1.p5o(this.v7o_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          return paginatedListIterator_toJs(result, SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda(this.s7o_1, this.t7o_1, completion);
  i.u7o_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda_0($vmpgCode, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda($vmpgCode, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.j7o($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listVmpsByVmpCodes$slambda($vmpCodes, this$0, resultContinuation) {
  this.e7p_1 = $vmpCodes;
  this.f7p_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listVmpsByVmpCodes$slambda).i7p = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$listVmpsByVmpCodes$slambda).k9 = function (p1, $completion) {
  return this.i7p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listVmpsByVmpCodes$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.h7p_1 = tmp_1.j7p(this.e7p_1, 'vmpCodes', SamV2ApiImplJs$listVmpsByVmpCodes$slambda$lambda);
          this.o8_1 = 1;
          suspendResult = this.f7p_1.e7h_1.q5o(this.h7p_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.i7n(result, SamV2ApiImplJs$listVmpsByVmpCodes$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listVmpsByVmpCodes$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listVmpsByVmpCodes$slambda(this.e7p_1, this.f7p_1, completion);
  i.g7p_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listVmpsByVmpCodes$slambda_0($vmpCodes, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listVmpsByVmpCodes$slambda($vmpCodes, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.i7p($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listVmpsByGroupIds$slambda($vmpgIds, this$0, resultContinuation) {
  this.s7p_1 = $vmpgIds;
  this.t7p_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listVmpsByGroupIds$slambda).i7p = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$listVmpsByGroupIds$slambda).k9 = function (p1, $completion) {
  return this.i7p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listVmpsByGroupIds$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.v7p_1 = tmp_1.j7p(this.s7p_1, 'vmpgIds', SamV2ApiImplJs$listVmpsByGroupIds$slambda$lambda);
          this.o8_1 = 1;
          suspendResult = this.t7p_1.e7h_1.r5o(this.v7p_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.i7n(result, SamV2ApiImplJs$listVmpsByGroupIds$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listVmpsByGroupIds$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listVmpsByGroupIds$slambda(this.s7p_1, this.t7p_1, completion);
  i.u7p_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listVmpsByGroupIds$slambda_0($vmpgIds, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listVmpsByGroupIds$slambda($vmpgIds, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.i7p($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listAmpsByGroupCodes$slambda($ampCodes, this$0, resultContinuation) {
  this.e7q_1 = $ampCodes;
  this.f7q_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listAmpsByGroupCodes$slambda).h7n = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$listAmpsByGroupCodes$slambda).k9 = function (p1, $completion) {
  return this.h7n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listAmpsByGroupCodes$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.h7q_1 = tmp_1.j7p(this.e7q_1, 'ampCodes', SamV2ApiImplJs$listAmpsByGroupCodes$slambda$lambda);
          this.o8_1 = 1;
          suspendResult = this.f7q_1.e7h_1.s5o(this.h7q_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.i7n(result, SamV2ApiImplJs$listAmpsByGroupCodes$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listAmpsByGroupCodes$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listAmpsByGroupCodes$slambda(this.e7q_1, this.f7q_1, completion);
  i.g7q_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listAmpsByGroupCodes$slambda_0($ampCodes, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listAmpsByGroupCodes$slambda($ampCodes, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.h7n($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listAmpsByDmppCodes$slambda($dmppCodes, this$0, resultContinuation) {
  this.q7q_1 = $dmppCodes;
  this.r7q_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listAmpsByDmppCodes$slambda).h7n = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$listAmpsByDmppCodes$slambda).k9 = function (p1, $completion) {
  return this.h7n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listAmpsByDmppCodes$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.t7q_1 = tmp_1.j7p(this.q7q_1, 'dmppCodes', SamV2ApiImplJs$listAmpsByDmppCodes$slambda$lambda);
          this.o8_1 = 1;
          suspendResult = this.r7q_1.e7h_1.t5o(this.t7q_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.i7n(result, SamV2ApiImplJs$listAmpsByDmppCodes$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listAmpsByDmppCodes$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listAmpsByDmppCodes$slambda(this.q7q_1, this.r7q_1, completion);
  i.s7q_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listAmpsByDmppCodes$slambda_0($dmppCodes, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listAmpsByDmppCodes$slambda($dmppCodes, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.h7n($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listAmpsByGroupIds$slambda($groupIds, this$0, resultContinuation) {
  this.c7r_1 = $groupIds;
  this.d7r_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listAmpsByGroupIds$slambda).h7n = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$listAmpsByGroupIds$slambda).k9 = function (p1, $completion) {
  return this.h7n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listAmpsByGroupIds$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.f7r_1 = tmp_1.j7p(this.c7r_1, 'groupIds', SamV2ApiImplJs$listAmpsByGroupIds$slambda$lambda);
          this.o8_1 = 1;
          suspendResult = this.d7r_1.e7h_1.u5o(this.f7r_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.i7n(result, SamV2ApiImplJs$listAmpsByGroupIds$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listAmpsByGroupIds$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listAmpsByGroupIds$slambda(this.c7r_1, this.d7r_1, completion);
  i.e7r_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listAmpsByGroupIds$slambda_0($groupIds, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listAmpsByGroupIds$slambda($groupIds, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.h7n($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listAmpsByVmpCodes$slambda($vmpgCodes, this$0, resultContinuation) {
  this.o7r_1 = $vmpgCodes;
  this.p7r_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listAmpsByVmpCodes$slambda).h7n = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$listAmpsByVmpCodes$slambda).k9 = function (p1, $completion) {
  return this.h7n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listAmpsByVmpCodes$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.r7r_1 = tmp_1.j7p(this.o7r_1, 'vmpgCodes', SamV2ApiImplJs$listAmpsByVmpCodes$slambda$lambda);
          this.o8_1 = 1;
          suspendResult = this.p7r_1.e7h_1.v5o(this.r7r_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.i7n(result, SamV2ApiImplJs$listAmpsByVmpCodes$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listAmpsByVmpCodes$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listAmpsByVmpCodes$slambda(this.o7r_1, this.p7r_1, completion);
  i.q7r_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listAmpsByVmpCodes$slambda_0($vmpgCodes, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listAmpsByVmpCodes$slambda($vmpgCodes, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.h7n($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listAmpsByVmpIds$slambda($vmpIds, this$0, resultContinuation) {
  this.a7s_1 = $vmpIds;
  this.b7s_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listAmpsByVmpIds$slambda).h7n = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$listAmpsByVmpIds$slambda).k9 = function (p1, $completion) {
  return this.h7n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listAmpsByVmpIds$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.d7s_1 = tmp_1.j7p(this.a7s_1, 'vmpIds', SamV2ApiImplJs$listAmpsByVmpIds$slambda$lambda);
          this.o8_1 = 1;
          suspendResult = this.b7s_1.e7h_1.w5o(this.d7s_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.i7n(result, SamV2ApiImplJs$listAmpsByVmpIds$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listAmpsByVmpIds$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listAmpsByVmpIds$slambda(this.a7s_1, this.b7s_1, completion);
  i.c7s_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listAmpsByVmpIds$slambda_0($vmpIds, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listAmpsByVmpIds$slambda($vmpIds, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.h7n($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda($vmpgCodes, this$0, resultContinuation) {
  this.m7s_1 = $vmpgCodes;
  this.n7s_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda).q7s = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda).k9 = function (p1, $completion) {
  return this.q7s((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.p7s_1 = tmp_1.j7p(this.m7s_1, 'vmpgCodes', SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda$lambda);
          this.o8_1 = 1;
          suspendResult = this.n7s_1.e7h_1.x5o(this.p7s_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.i7n(result, SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda(this.m7s_1, this.n7s_1, completion);
  i.o7s_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda_0($vmpgCodes, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda($vmpgCodes, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.q7s($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listNmpsByCnks$slambda($cnks, this$0, resultContinuation) {
  this.z7s_1 = $cnks;
  this.a7t_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listNmpsByCnks$slambda).d7t = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$listNmpsByCnks$slambda).k9 = function (p1, $completion) {
  return this.d7t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listNmpsByCnks$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          var tmp_0 = this;
          var tmp_1 = CheckedConverters_instance;
          tmp_0.c7t_1 = tmp_1.j7p(this.z7s_1, 'cnks', SamV2ApiImplJs$listNmpsByCnks$slambda$lambda);
          this.o8_1 = 1;
          suspendResult = this.a7t_1.e7h_1.y5o(this.c7t_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_2 = CheckedConverters_instance;
          return tmp_2.i7n(result, SamV2ApiImplJs$listNmpsByCnks$slambda$lambda_0);
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
protoOf(SamV2ApiImplJs$listNmpsByCnks$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listNmpsByCnks$slambda(this.z7s_1, this.a7t_1, completion);
  i.b7t_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listNmpsByCnks$slambda_0($cnks, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listNmpsByCnks$slambda($cnks, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.d7t($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listSubstances$slambda(this$0, resultContinuation) {
  this.m7t_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listSubstances$slambda).o7t = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$listSubstances$slambda).k9 = function (p1, $completion) {
  return this.o7t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listSubstances$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.o8_1 = 1;
          suspendResult = this.m7t_1.e7h_1.z5o(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.i7n(result, SamV2ApiImplJs$listSubstances$slambda$lambda);
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
protoOf(SamV2ApiImplJs$listSubstances$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listSubstances$slambda(this.m7t_1, completion);
  i.n7t_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listSubstances$slambda_0(this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listSubstances$slambda(this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.o7t($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$listPharmaceuticalForms$slambda(this$0, resultContinuation) {
  this.x7t_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$listPharmaceuticalForms$slambda).z7t = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$listPharmaceuticalForms$slambda).k9 = function (p1, $completion) {
  return this.z7t((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$listPharmaceuticalForms$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.o8_1 = 1;
          suspendResult = this.x7t_1.e7h_1.a5p(this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.i7n(result, SamV2ApiImplJs$listPharmaceuticalForms$slambda$lambda);
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
protoOf(SamV2ApiImplJs$listPharmaceuticalForms$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$listPharmaceuticalForms$slambda(this.x7t_1, completion);
  i.y7t_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$listPharmaceuticalForms$slambda_0(this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$listPharmaceuticalForms$slambda(this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.z7t($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$getAddedDocument$slambda($chapterName, $paragraphName, $verseSeq, $docSeq, $language, this$0, resultContinuation) {
  this.i7u_1 = $chapterName;
  this.j7u_1 = $paragraphName;
  this.k7u_1 = $verseSeq;
  this.l7u_1 = $docSeq;
  this.m7u_1 = $language;
  this.n7u_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$getAddedDocument$slambda).u7u = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$getAddedDocument$slambda).k9 = function (p1, $completion) {
  return this.u7u((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$getAddedDocument$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.p7u_1 = this.i7u_1;
          this.q7u_1 = this.j7u_1;
          this.r7u_1 = CheckedConverters_instance.v7u(this.k7u_1, 'verseSeq');
          this.s7u_1 = CheckedConverters_instance.v7u(this.l7u_1, 'docSeq');
          this.t7u_1 = this.m7u_1;
          this.o8_1 = 1;
          suspendResult = this.n7u_1.e7h_1.b5p(this.p7u_1, this.q7u_1, this.r7u_1, this.s7u_1, this.t7u_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
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
protoOf(SamV2ApiImplJs$getAddedDocument$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$getAddedDocument$slambda(this.i7u_1, this.j7u_1, this.k7u_1, this.l7u_1, this.m7u_1, this.n7u_1, completion);
  i.o7u_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$getAddedDocument$slambda_0($chapterName, $paragraphName, $verseSeq, $docSeq, $language, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$getAddedDocument$slambda($chapterName, $paragraphName, $verseSeq, $docSeq, $language, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.u7u($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findParagraphs$slambda($searchString, $language, this$0, resultContinuation) {
  this.e7v_1 = $searchString;
  this.f7v_1 = $language;
  this.g7v_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findParagraphs$slambda).k7v = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findParagraphs$slambda).k9 = function (p1, $completion) {
  return this.k7v((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findParagraphs$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.i7v_1 = this.e7v_1;
          this.j7v_1 = this.f7v_1;
          this.o8_1 = 1;
          suspendResult = this.g7v_1.e7h_1.c5p(this.i7v_1, this.j7v_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.i7n(result, SamV2ApiImplJs$findParagraphs$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findParagraphs$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findParagraphs$slambda(this.e7v_1, this.f7v_1, this.g7v_1, completion);
  i.h7v_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findParagraphs$slambda_0($searchString, $language, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findParagraphs$slambda($searchString, $language, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.k7v($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$findParagraphsWithCnk$slambda($cnk, $language, this$0, resultContinuation) {
  this.t7v_1 = $cnk;
  this.u7v_1 = $language;
  this.v7v_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$findParagraphsWithCnk$slambda).k7v = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$findParagraphsWithCnk$slambda).k9 = function (p1, $completion) {
  return this.k7v((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$findParagraphsWithCnk$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.x7v_1 = CheckedConverters_instance.v7u(this.t7v_1, 'cnk');
          this.y7v_1 = this.u7v_1;
          this.o8_1 = 1;
          suspendResult = this.v7v_1.e7h_1.d5p(this.x7v_1, this.y7v_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.i7n(result, SamV2ApiImplJs$findParagraphsWithCnk$slambda$lambda);
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
protoOf(SamV2ApiImplJs$findParagraphsWithCnk$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$findParagraphsWithCnk$slambda(this.t7v_1, this.u7v_1, this.v7v_1, completion);
  i.w7v_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$findParagraphsWithCnk$slambda_0($cnk, $language, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$findParagraphsWithCnk$slambda($cnk, $language, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.k7v($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$getAmpsForParagraph$slambda($chapterName, $paragraphName, this$0, resultContinuation) {
  this.h7w_1 = $chapterName;
  this.i7w_1 = $paragraphName;
  this.j7w_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$getAmpsForParagraph$slambda).h7n = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$getAmpsForParagraph$slambda).k9 = function (p1, $completion) {
  return this.h7n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$getAmpsForParagraph$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.l7w_1 = this.h7w_1;
          this.m7w_1 = this.i7w_1;
          this.o8_1 = 1;
          suspendResult = this.j7w_1.e7h_1.e5p(this.l7w_1, this.m7w_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.i7n(result, SamV2ApiImplJs$getAmpsForParagraph$slambda$lambda);
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
protoOf(SamV2ApiImplJs$getAmpsForParagraph$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$getAmpsForParagraph$slambda(this.h7w_1, this.i7w_1, this.j7w_1, completion);
  i.k7w_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$getAmpsForParagraph$slambda_0($chapterName, $paragraphName, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$getAmpsForParagraph$slambda($chapterName, $paragraphName, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.h7n($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$getVtmNamesForParagraph$slambda($chapterName, $paragraphName, $language, this$0, resultContinuation) {
  this.v7w_1 = $chapterName;
  this.w7w_1 = $paragraphName;
  this.x7w_1 = $language;
  this.y7w_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$getVtmNamesForParagraph$slambda).d7x = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$getVtmNamesForParagraph$slambda).k9 = function (p1, $completion) {
  return this.d7x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$getVtmNamesForParagraph$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.a7x_1 = this.v7w_1;
          this.b7x_1 = this.w7w_1;
          this.c7x_1 = this.x7w_1;
          this.o8_1 = 1;
          suspendResult = this.y7w_1.e7h_1.f5p(this.a7x_1, this.b7x_1, this.c7x_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          return tmp_0.i7n(result, SamV2ApiImplJs$getVtmNamesForParagraph$slambda$lambda);
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
protoOf(SamV2ApiImplJs$getVtmNamesForParagraph$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$getVtmNamesForParagraph$slambda(this.v7w_1, this.w7w_1, this.x7w_1, this.y7w_1, completion);
  i.z7w_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$getVtmNamesForParagraph$slambda_0($chapterName, $paragraphName, $language, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$getVtmNamesForParagraph$slambda($chapterName, $paragraphName, $language, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.d7x($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs$getVersesHierarchy$slambda($chapterName, $paragraphName, this$0, resultContinuation) {
  this.m7x_1 = $chapterName;
  this.n7x_1 = $paragraphName;
  this.o7x_1 = this$0;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(SamV2ApiImplJs$getVersesHierarchy$slambda).s7x = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(SamV2ApiImplJs$getVersesHierarchy$slambda).k9 = function (p1, $completion) {
  return this.s7x((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(SamV2ApiImplJs$getVersesHierarchy$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.q7x_1 = this.m7x_1;
          this.r7x_1 = this.n7x_1;
          this.o8_1 = 1;
          suspendResult = this.o7x_1.e7h_1.g5p(this.q7x_1, this.r7x_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var result = suspendResult;
          var tmp_0 = CheckedConverters_instance;
          var tmp_1;
          if (result == null) {
            tmp_1 = null;
          } else {
            tmp_1 = verse_toJs(result);
          }

          return tmp_0.t7x(tmp_1);
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
protoOf(SamV2ApiImplJs$getVersesHierarchy$slambda).t1q = function ($this$promise, completion) {
  var i = new SamV2ApiImplJs$getVersesHierarchy$slambda(this.m7x_1, this.n7x_1, this.o7x_1, completion);
  i.p7x_1 = $this$promise;
  return i;
};
function SamV2ApiImplJs$getVersesHierarchy$slambda_0($chapterName, $paragraphName, this$0, resultContinuation) {
  var i = new SamV2ApiImplJs$getVersesHierarchy$slambda($chapterName, $paragraphName, this$0, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.s7x($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function SamV2ApiImplJs(samV2Api) {
  this.e7h_1 = samV2Api;
}
protoOf(SamV2ApiImplJs).u7x = function () {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$getSamVersion$slambda_0(this, null));
};
protoOf(SamV2ApiImplJs).getSamVersion = function () {
  return this.u7x();
};
protoOf(SamV2ApiImplJs).v7x = function (language, label) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedAmpsByLabel$slambda_0(language, label, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedAmpsByLabel = function (language, label) {
  return this.v7x(language, label);
};
protoOf(SamV2ApiImplJs).w7x = function (language, label) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedVmpsByLabel$slambda_0(language, label, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedVmpsByLabel = function (language, label) {
  return this.w7x(language, label);
};
protoOf(SamV2ApiImplJs).x7x = function (vmpgCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedVmpsByGroupCode$slambda_0(vmpgCode, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedVmpsByGroupCode = function (vmpgCode) {
  return this.x7x(vmpgCode);
};
protoOf(SamV2ApiImplJs).y7x = function (vmpCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedVmpsByVmpCode$slambda_0(vmpCode, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedVmpsByVmpCode = function (vmpCode) {
  return this.y7x(vmpCode);
};
protoOf(SamV2ApiImplJs).z7x = function (language, label) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedNmpsByLabel$slambda_0(language, label, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedNmpsByLabel = function (language, label) {
  return this.z7x(language, label);
};
protoOf(SamV2ApiImplJs).a7y = function (vmpgId) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedVmpsByGroupId$slambda_0(vmpgId, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedVmpsByGroupId = function (vmpgId) {
  return this.a7y(vmpgId);
};
protoOf(SamV2ApiImplJs).b7y = function (vmpgCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedAmpsByGroupCode$slambda_0(vmpgCode, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedAmpsByGroupCode = function (vmpgCode) {
  return this.b7y(vmpgCode);
};
protoOf(SamV2ApiImplJs).c7y = function (ampId) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedAmpsByGroupId$slambda_0(ampId, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedAmpsByGroupId = function (ampId) {
  return this.c7y(ampId);
};
protoOf(SamV2ApiImplJs).d7y = function (vmpCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedAmpsByVmpCode$slambda_0(vmpCode, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedAmpsByVmpCode = function (vmpCode) {
  return this.d7y(vmpCode);
};
protoOf(SamV2ApiImplJs).e7y = function (atcCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedAmpsByAtc$slambda_0(atcCode, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedAmpsByAtc = function (atcCode) {
  return this.e7y(atcCode);
};
protoOf(SamV2ApiImplJs).f7y = function (vmpId) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedAmpsByVmpId$slambda_0(vmpId, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedAmpsByVmpId = function (vmpId) {
  return this.f7y(vmpId);
};
protoOf(SamV2ApiImplJs).g7y = function (dmppCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findAmpsByDmppCode$slambda_0(dmppCode, this, null));
};
protoOf(SamV2ApiImplJs).findAmpsByDmppCode = function (dmppCode) {
  return this.g7y(dmppCode);
};
protoOf(SamV2ApiImplJs).h7y = function (ampCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findAmpsByAmpCode$slambda_0(ampCode, this, null));
};
protoOf(SamV2ApiImplJs).findAmpsByAmpCode = function (ampCode) {
  return this.h7y(ampCode);
};
protoOf(SamV2ApiImplJs).i7y = function (language, label) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedVmpGroupsByLabel$slambda_0(language, label, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedVmpGroupsByLabel = function (language, label) {
  return this.i7y(language, label);
};
protoOf(SamV2ApiImplJs).j7y = function (vmpgCode) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findPaginatedVmpGroupsByVmpGroupCode$slambda_0(vmpgCode, this, null));
};
protoOf(SamV2ApiImplJs).findPaginatedVmpGroupsByVmpGroupCode = function (vmpgCode) {
  return this.j7y(vmpgCode);
};
protoOf(SamV2ApiImplJs).k7y = function (vmpCodes) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listVmpsByVmpCodes$slambda_0(vmpCodes, this, null));
};
protoOf(SamV2ApiImplJs).listVmpsByVmpCodes = function (vmpCodes) {
  return this.k7y(vmpCodes);
};
protoOf(SamV2ApiImplJs).l7y = function (vmpgIds) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listVmpsByGroupIds$slambda_0(vmpgIds, this, null));
};
protoOf(SamV2ApiImplJs).listVmpsByGroupIds = function (vmpgIds) {
  return this.l7y(vmpgIds);
};
protoOf(SamV2ApiImplJs).m7y = function (ampCodes) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listAmpsByGroupCodes$slambda_0(ampCodes, this, null));
};
protoOf(SamV2ApiImplJs).listAmpsByGroupCodes = function (ampCodes) {
  return this.m7y(ampCodes);
};
protoOf(SamV2ApiImplJs).n7y = function (dmppCodes) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listAmpsByDmppCodes$slambda_0(dmppCodes, this, null));
};
protoOf(SamV2ApiImplJs).listAmpsByDmppCodes = function (dmppCodes) {
  return this.n7y(dmppCodes);
};
protoOf(SamV2ApiImplJs).o7y = function (groupIds) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listAmpsByGroupIds$slambda_0(groupIds, this, null));
};
protoOf(SamV2ApiImplJs).listAmpsByGroupIds = function (groupIds) {
  return this.o7y(groupIds);
};
protoOf(SamV2ApiImplJs).p7y = function (vmpgCodes) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listAmpsByVmpCodes$slambda_0(vmpgCodes, this, null));
};
protoOf(SamV2ApiImplJs).listAmpsByVmpCodes = function (vmpgCodes) {
  return this.p7y(vmpgCodes);
};
protoOf(SamV2ApiImplJs).q7y = function (vmpIds) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listAmpsByVmpIds$slambda_0(vmpIds, this, null));
};
protoOf(SamV2ApiImplJs).listAmpsByVmpIds = function (vmpIds) {
  return this.q7y(vmpIds);
};
protoOf(SamV2ApiImplJs).r7y = function (vmpgCodes) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listVmpGroupsByVmpGroupCodes$slambda_0(vmpgCodes, this, null));
};
protoOf(SamV2ApiImplJs).listVmpGroupsByVmpGroupCodes = function (vmpgCodes) {
  return this.r7y(vmpgCodes);
};
protoOf(SamV2ApiImplJs).s7y = function (cnks) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listNmpsByCnks$slambda_0(cnks, this, null));
};
protoOf(SamV2ApiImplJs).listNmpsByCnks = function (cnks) {
  return this.s7y(cnks);
};
protoOf(SamV2ApiImplJs).t7y = function () {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listSubstances$slambda_0(this, null));
};
protoOf(SamV2ApiImplJs).listSubstances = function () {
  return this.t7y();
};
protoOf(SamV2ApiImplJs).u7y = function () {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$listPharmaceuticalForms$slambda_0(this, null));
};
protoOf(SamV2ApiImplJs).listPharmaceuticalForms = function () {
  return this.u7y();
};
protoOf(SamV2ApiImplJs).v7y = function (chapterName, paragraphName, verseSeq, docSeq, language) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$getAddedDocument$slambda_0(chapterName, paragraphName, verseSeq, docSeq, language, this, null));
};
protoOf(SamV2ApiImplJs).getAddedDocument = function (chapterName, paragraphName, verseSeq, docSeq, language) {
  return this.v7y(chapterName, paragraphName, verseSeq, docSeq, language);
};
protoOf(SamV2ApiImplJs).w7y = function (searchString, language) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findParagraphs$slambda_0(searchString, language, this, null));
};
protoOf(SamV2ApiImplJs).findParagraphs = function (searchString, language) {
  return this.w7y(searchString, language);
};
protoOf(SamV2ApiImplJs).x7y = function (cnk, language) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$findParagraphsWithCnk$slambda_0(cnk, language, this, null));
};
protoOf(SamV2ApiImplJs).findParagraphsWithCnk = function (cnk, language) {
  return this.x7y(cnk, language);
};
protoOf(SamV2ApiImplJs).y7y = function (chapterName, paragraphName) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$getAmpsForParagraph$slambda_0(chapterName, paragraphName, this, null));
};
protoOf(SamV2ApiImplJs).getAmpsForParagraph = function (chapterName, paragraphName) {
  return this.y7y(chapterName, paragraphName);
};
protoOf(SamV2ApiImplJs).z7y = function (chapterName, paragraphName, language) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$getVtmNamesForParagraph$slambda_0(chapterName, paragraphName, language, this, null));
};
protoOf(SamV2ApiImplJs).getVtmNamesForParagraph = function (chapterName, paragraphName, language) {
  return this.z7y(chapterName, paragraphName, language);
};
protoOf(SamV2ApiImplJs).a7z = function (chapterName, paragraphName) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, SamV2ApiImplJs$getVersesHierarchy$slambda_0(chapterName, paragraphName, this, null));
};
protoOf(SamV2ApiImplJs).getVersesHierarchy = function (chapterName, paragraphName) {
  return this.a7z(chapterName, paragraphName);
};
function CheckedConverters() {
  this.u7h_1 = 9.007199254740991E15;
  this.v7h_1 = -9.007199254740991E15;
  this.w7h_1 = -2.147483648E9;
  this.x7h_1 = 2.147483647E9;
}
protoOf(CheckedConverters).v7u = function (number, description) {
  var tmp;
  if (!isNaN_0(number) && isFinite(number)) {
    // Inline function 'kotlin.math.floor' call
    tmp = Math.floor(number) === number;
  } else {
    tmp = false;
  }
  // Inline function 'kotlin.require' call
  if (!tmp) {
    var message = description + ' should be a 64bits integer - got ' + number;
    throw IllegalArgumentException_init_$Create$(toString(message));
  }
  // Inline function 'kotlin.require' call
  if (!(-9.007199254740991E15 <= number ? number <= 9.007199254740991E15 : false)) {
    var message_0 = description + ' is outside of the safe integer range for javascript numbers, conversion may cause loss of precision - got ' + number;
    throw IllegalArgumentException_init_$Create$(toString(message_0));
  }
  return numberToLong(number);
};
protoOf(CheckedConverters).b7z = function (long) {
  // Inline function 'com.icure.cardinal.sdk.utils.ensure' call
  if (!isJsSafe(long)) {
    var tmp$ret$0 = 'Number is not in safe integer range: ' + long.toString();
    throw new InternalCardinalException(tmp$ret$0);
  }
  return long.l3();
};
protoOf(CheckedConverters).c7z = function (long) {
  var tmp;
  if (long == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = CheckedConverters_instance.b7z(long);
  }
  return tmp;
};
protoOf(CheckedConverters).d7z = function (int) {
  return int;
};
protoOf(CheckedConverters).e7z = function (map, convertKey, convertValue) {
  var obj = {};
  // Inline function 'kotlin.collections.iterator' call
  var _iterator__ex2g4s = map.x().m();
  while (_iterator__ex2g4s.n()) {
    var _destruct__k2r9zo = _iterator__ex2g4s.o();
    // Inline function 'kotlin.collections.component1' call
    var key = _destruct__k2r9zo.y();
    // Inline function 'kotlin.collections.component2' call
    var value = _destruct__k2r9zo.z();
    obj[convertKey(key)] = convertValue(value);
  }
  return obj;
};
protoOf(CheckedConverters).f7z = function (map, convertKey, convertValue) {
  var tmp;
  if (map == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = CheckedConverters_instance.e7z(map, convertKey, convertValue);
  }
  return tmp;
};
protoOf(CheckedConverters).j7p = function (array, description, convertValue) {
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(array.length);
  var inductionVariable = 0;
  var last = array.length;
  while (inductionVariable < last) {
    var item = array[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var tmp$ret$0 = convertValue(item);
    destination.k(tmp$ret$0);
  }
  return destination;
};
protoOf(CheckedConverters).i7n = function (list, convertValue) {
  // Inline function 'kotlin.collections.map' call
  // Inline function 'kotlin.collections.mapTo' call
  var destination = ArrayList_init_$Create$(collectionSizeOrDefault(list, 10));
  var _iterator__ex2g4s = list.m();
  while (_iterator__ex2g4s.n()) {
    var item = _iterator__ex2g4s.o();
    var tmp$ret$0 = convertValue(item);
    destination.k(tmp$ret$0);
  }
  // Inline function 'kotlin.collections.toTypedArray' call
  return copyToArray(destination);
};
protoOf(CheckedConverters).g7z = function (list, convertValue) {
  var tmp;
  if (list == null) {
    tmp = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp = CheckedConverters_instance.i7n(list, convertValue);
  }
  return tmp;
};
protoOf(CheckedConverters).t7x = function (obj) {
  return obj == null ? undefined : obj;
};
protoOf(CheckedConverters).y7h = function (obj) {
  return obj == null ? null : obj;
};
var CheckedConverters_instance;
function CheckedConverters_getInstance() {
  return CheckedConverters_instance;
}
function codeStub_toJs(obj) {
  var id = CheckedConverters_instance.t7x(obj.z6s_1);
  var context = CheckedConverters_instance.t7x(obj.a6t_1);
  var type = CheckedConverters_instance.t7x(obj.b6t_1);
  var code = CheckedConverters_instance.t7x(obj.c6t_1);
  var version = CheckedConverters_instance.t7x(obj.d6t_1);
  var contextLabel = CheckedConverters_instance.t7x(obj.e6t_1);
  var tmp = CheckedConverters_instance;
  var tmp_0 = CheckedConverters_instance;
  var tmp_1 = codeStub_toJs$lambda;
  var label = tmp.t7x(tmp_0.f7z(obj.f6t_1, tmp_1, codeStub_toJs$lambda_0));
  return new CodeStub({id: id, context: context, type: type, code: code, version: version, contextLabel: contextLabel, label: label});
}
function codeStub_toJs$lambda(x1) {
  return x1;
}
function codeStub_toJs$lambda_0(x1) {
  return x1;
}
function amp_toJs(obj) {
  var id = obj.m6t_1;
  var rev = CheckedConverters_instance.t7x(obj.n6t_1);
  var deletionDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.o6t_1));
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.p6t_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.q6t_1));
  var code = CheckedConverters_instance.t7x(obj.r6t_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.s6t_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = vmpStub_toJs(tmp0_safe_receiver);
  }
  var vmp = tmp.t7x(tmp_0);
  var officialName = CheckedConverters_instance.t7x(obj.t6t_1);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.u6t_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = tmp1_safe_receiver.m2_1;
  }
  var status = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.v6t_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var name = tmp_3.t7x(tmp_4);
  var blackTriangle = obj.w6t_1;
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.x6t_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_6 = tmp3_safe_receiver.m2_1;
  }
  var medicineType = tmp_5.t7x(tmp_6);
  var tmp_7 = CheckedConverters_instance;
  var tmp4_safe_receiver = obj.y6t_1;
  var tmp_8;
  if (tmp4_safe_receiver == null) {
    tmp_8 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_8 = company_toJs(tmp4_safe_receiver);
  }
  var company = tmp_7.t7x(tmp_8);
  var tmp_9 = CheckedConverters_instance;
  var tmp5_safe_receiver = obj.z6t_1;
  var tmp_10;
  if (tmp5_safe_receiver == null) {
    tmp_10 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_10 = samText_toJs(tmp5_safe_receiver);
  }
  var abbreviatedName = tmp_9.t7x(tmp_10);
  var tmp_11 = CheckedConverters_instance;
  var tmp6_safe_receiver = obj.a6u_1;
  var tmp_12;
  if (tmp6_safe_receiver == null) {
    tmp_12 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_12 = samText_toJs(tmp6_safe_receiver);
  }
  var proprietarySuffix = tmp_11.t7x(tmp_12);
  var tmp_13 = CheckedConverters_instance;
  var tmp7_safe_receiver = obj.b6u_1;
  var tmp_14;
  if (tmp7_safe_receiver == null) {
    tmp_14 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_14 = samText_toJs(tmp7_safe_receiver);
  }
  var prescriptionName = tmp_13.t7x(tmp_14);
  var tmp_15 = CheckedConverters_instance;
  var ampps = tmp_15.i7n(obj.c6u_1, amp_toJs$lambda);
  var tmp_16 = CheckedConverters_instance;
  var components = tmp_16.i7n(obj.d6u_1, amp_toJs$lambda_0);
  return new Amp({id: id, rev: rev, deletionDate: deletionDate, from: from, to: to, code: code, vmp: vmp, officialName: officialName, status: status, name: name, blackTriangle: blackTriangle, medicineType: medicineType, company: company, abbreviatedName: abbreviatedName, proprietarySuffix: proprietarySuffix, prescriptionName: prescriptionName, ampps: ampps, components: components});
}
function amp_toJs$lambda(x1) {
  return ampp_toJs(x1);
}
function amp_toJs$lambda_0(x1) {
  return ampComponent_toJs(x1);
}
function nmp_toJs(obj) {
  var id = obj.g6u_1;
  var rev = CheckedConverters_instance.t7x(obj.h6u_1);
  var deletionDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.i6u_1));
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.j6u_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.k6u_1));
  var code = CheckedConverters_instance.t7x(obj.l6u_1);
  var productId = CheckedConverters_instance.t7x(obj.m6u_1);
  var category = CheckedConverters_instance.t7x(obj.n6u_1);
  var commercialStatus = CheckedConverters_instance.t7x(obj.o6u_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.p6u_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.q6u_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var producer = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.r6u_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var distributor = tmp_3.t7x(tmp_4);
  return new Nmp({id: id, rev: rev, deletionDate: deletionDate, from: from, to: to, code: code, productId: productId, category: category, commercialStatus: commercialStatus, name: name, producer: producer, distributor: distributor});
}
function paragraph_toJs(obj) {
  var id = obj.u6u_1;
  var rev = CheckedConverters_instance.t7x(obj.v6u_1);
  var deletionDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.w6u_1));
  var chapterName = CheckedConverters_instance.t7x(obj.x6u_1);
  var paragraphName = CheckedConverters_instance.t7x(obj.y6u_1);
  var startDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.z6u_1));
  var createdTms = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.a6v_1));
  var createdUserId = CheckedConverters_instance.t7x(obj.b6v_1);
  var endDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.c6v_1));
  var keyStringNl = CheckedConverters_instance.t7x(obj.d6v_1);
  var keyStringFr = CheckedConverters_instance.t7x(obj.e6v_1);
  var agreementType = CheckedConverters_instance.t7x(obj.f6v_1);
  var processType = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.g6v_1));
  var legalReference = CheckedConverters_instance.t7x(obj.h6v_1);
  var publicationDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.i6v_1));
  var modificationDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.j6v_1));
  var processTypeOverrule = CheckedConverters_instance.t7x(obj.k6v_1);
  var paragraphVersion = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.l6v_1));
  var agreementTypePro = CheckedConverters_instance.t7x(obj.m6v_1);
  var modificationStatus = CheckedConverters_instance.t7x(obj.n6v_1);
  return new Paragraph({id: id, rev: rev, deletionDate: deletionDate, chapterName: chapterName, paragraphName: paragraphName, startDate: startDate, createdTms: createdTms, createdUserId: createdUserId, endDate: endDate, keyStringNl: keyStringNl, keyStringFr: keyStringFr, agreementType: agreementType, processType: processType, legalReference: legalReference, publicationDate: publicationDate, modificationDate: modificationDate, processTypeOverrule: processTypeOverrule, paragraphVersion: paragraphVersion, agreementTypePro: agreementTypePro, modificationStatus: modificationStatus});
}
function pharmaceuticalForm_toJs(obj) {
  var id = obj.r6v_1;
  var rev = CheckedConverters_instance.t7x(obj.s6v_1);
  var deletionDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.t6v_1));
  var code = CheckedConverters_instance.t7x(obj.u6v_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.v6v_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var standardForms = tmp_1.i7n(obj.w6v_1, pharmaceuticalForm_toJs$lambda);
  return new PharmaceuticalForm({id: id, rev: rev, deletionDate: deletionDate, code: code, name: name, standardForms: standardForms});
}
function pharmaceuticalForm_toJs$lambda(x1) {
  return codeStub_toJs(x1);
}
function samVersion_toJs(obj) {
  var id = obj.z6v_1;
  var rev = CheckedConverters_instance.t7x(obj.a6w_1);
  var deletionDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.b6w_1));
  var version = CheckedConverters_instance.t7x(obj.c6w_1);
  var date = CheckedConverters_instance.t7x(CheckedConverters_instance.d7z(obj.d6w_1));
  return new SamVersion({id: id, rev: rev, deletionDate: deletionDate, version: version, date: date});
}
function substance_toJs(obj) {
  var id = obj.h6w_1;
  var rev = CheckedConverters_instance.t7x(obj.i6w_1);
  var deletionDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.j6w_1));
  var code = CheckedConverters_instance.t7x(obj.k6w_1);
  var chemicalForm = CheckedConverters_instance.t7x(obj.l6w_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.m6w_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.n6w_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var note = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp_4 = CheckedConverters_instance;
  var standardSubstances = tmp_3.t7x(tmp_4.g7z(obj.o6w_1, substance_toJs$lambda));
  return new Substance({id: id, rev: rev, deletionDate: deletionDate, code: code, chemicalForm: chemicalForm, name: name, note: note, standardSubstances: standardSubstances});
}
function substance_toJs$lambda(x1) {
  return standardSubstance_toJs(x1);
}
function verse_toJs(obj) {
  var id = obj.s6w_1;
  var rev = CheckedConverters_instance.t7x(obj.t6w_1);
  var deletionDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.u6w_1));
  var chapterName = CheckedConverters_instance.t7x(obj.v6w_1);
  var paragraphName = CheckedConverters_instance.t7x(obj.w6w_1);
  var verseSeq = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.x6w_1));
  var startDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.y6w_1));
  var createdTms = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.z6w_1));
  var createdUserId = CheckedConverters_instance.t7x(obj.a6x_1);
  var endDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.b6x_1));
  var verseNum = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.c6x_1));
  var verseSeqParent = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.d6x_1));
  var verseLevel = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.e6x_1));
  var verseType = CheckedConverters_instance.t7x(obj.f6x_1);
  var checkBoxInd = CheckedConverters_instance.t7x(obj.g6x_1);
  var minCheckNum = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.h6x_1));
  var andClauseNum = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.i6x_1));
  var textFr = CheckedConverters_instance.t7x(obj.j6x_1);
  var textNl = CheckedConverters_instance.t7x(obj.k6x_1);
  var requestType = CheckedConverters_instance.t7x(obj.l6x_1);
  var agreementTerm = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.m6x_1));
  var agreementTermUnit = CheckedConverters_instance.t7x(obj.n6x_1);
  var maxPackageNumber = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.o6x_1));
  var purchasingAdvisorQualList = CheckedConverters_instance.t7x(obj.p6x_1);
  var legalReference = CheckedConverters_instance.t7x(obj.q6x_1);
  var modificationDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.r6x_1));
  var tmp = CheckedConverters_instance;
  var addedDocuments = tmp.i7n(obj.s6x_1, verse_toJs$lambda);
  var agreementYearMax = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.t6x_1));
  var agreementRenewalMax = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.u6x_1));
  var sexRestricted = CheckedConverters_instance.t7x(obj.v6x_1);
  var minimumAgeAuthorized = CheckedConverters_instance.t7x(obj.w6x_1);
  var maximumAgeAuthorized = CheckedConverters_instance.t7x(obj.x6x_1);
  var maximumContentQuantity = CheckedConverters_instance.t7x(obj.y6x_1);
  var maximumContentUnit = CheckedConverters_instance.t7x(obj.z6x_1);
  var maximumStrengthQuantity = CheckedConverters_instance.t7x(obj.a6y_1);
  var maximumStrengthUnit = CheckedConverters_instance.t7x(obj.b6y_1);
  var maximumDurationQuantity = CheckedConverters_instance.t7x(obj.c6y_1);
  var maximumDurationUnit = CheckedConverters_instance.t7x(obj.d6y_1);
  var otherAddedDocumentInd = CheckedConverters_instance.t7x(obj.e6y_1);
  var minimumAgeAuthorizedUnit = CheckedConverters_instance.t7x(obj.f6y_1);
  var maximumAgeAuthorizedUnit = CheckedConverters_instance.t7x(obj.g6y_1);
  var modificationStatus = CheckedConverters_instance.t7x(obj.h6y_1);
  var tmp_0 = CheckedConverters_instance;
  var tmp_1 = CheckedConverters_instance;
  var children = tmp_0.t7x(tmp_1.g7z(obj.i6y_1, verse_toJs$lambda_0));
  return new Verse({id: id, rev: rev, deletionDate: deletionDate, chapterName: chapterName, paragraphName: paragraphName, verseSeq: verseSeq, startDate: startDate, createdTms: createdTms, createdUserId: createdUserId, endDate: endDate, verseNum: verseNum, verseSeqParent: verseSeqParent, verseLevel: verseLevel, verseType: verseType, checkBoxInd: checkBoxInd, minCheckNum: minCheckNum, andClauseNum: andClauseNum, textFr: textFr, textNl: textNl, requestType: requestType, agreementTerm: agreementTerm, agreementTermUnit: agreementTermUnit, maxPackageNumber: maxPackageNumber, purchasingAdvisorQualList: purchasingAdvisorQualList, legalReference: legalReference, modificationDate: modificationDate, addedDocuments: addedDocuments, agreementYearMax: agreementYearMax, agreementRenewalMax: agreementRenewalMax, sexRestricted: sexRestricted, minimumAgeAuthorized: minimumAgeAuthorized, maximumAgeAuthorized: maximumAgeAuthorized, maximumContentQuantity: maximumContentQuantity, maximumContentUnit: maximumContentUnit, maximumStrengthQuantity: maximumStrengthQuantity, maximumStrengthUnit: maximumStrengthUnit, maximumDurationQuantity: maximumDurationQuantity, maximumDurationUnit: maximumDurationUnit, otherAddedDocumentInd: otherAddedDocumentInd, minimumAgeAuthorizedUnit: minimumAgeAuthorizedUnit, maximumAgeAuthorizedUnit: maximumAgeAuthorizedUnit, modificationStatus: modificationStatus, children: children});
}
function verse_toJs$lambda(x1) {
  return addedDocument_toJs(x1);
}
function verse_toJs$lambda_0(x1) {
  return verse_toJs(x1);
}
function vmpGroup_toJs(obj) {
  var id = obj.d6z_1;
  var rev = CheckedConverters_instance.t7x(obj.e6z_1);
  var deletionDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.f6z_1));
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.g6z_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.h6z_1));
  var productId = CheckedConverters_instance.t7x(obj.i6z_1);
  var code = CheckedConverters_instance.t7x(obj.j6z_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.k6z_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.l6z_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = noGenericPrescriptionReason_toJs(tmp1_safe_receiver);
  }
  var noGenericPrescriptionReason = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.m6z_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = noSwitchReason_toJs(tmp2_safe_receiver);
  }
  var noSwitchReason = tmp_3.t7x(tmp_4);
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.n6z_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_6 = quantity_toJs(tmp3_safe_receiver);
  }
  var singleAdministrationDose = tmp_5.t7x(tmp_6);
  var tmp_7 = CheckedConverters_instance;
  var tmp_8 = CheckedConverters_instance;
  var standardDosage = tmp_7.t7x(tmp_8.g7z(obj.o6z_1, vmpGroup_toJs$lambda));
  return new VmpGroup({id: id, rev: rev, deletionDate: deletionDate, from: from, to: to, productId: productId, code: code, name: name, noGenericPrescriptionReason: noGenericPrescriptionReason, noSwitchReason: noSwitchReason, singleAdministrationDose: singleAdministrationDose, standardDosage: standardDosage});
}
function vmpGroup_toJs$lambda(x1) {
  return standardDosage_toJs(x1);
}
function vmp_toJs(obj) {
  var id = obj.m6y_1;
  var rev = CheckedConverters_instance.t7x(obj.n6y_1);
  var deletionDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.o6y_1));
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.p6y_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.q6y_1));
  var code = CheckedConverters_instance.t7x(obj.r6y_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.s6y_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = vmpGroupStub_toJs(tmp0_safe_receiver);
  }
  var vmpGroup = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.t6y_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = quantity_toJs(tmp1_safe_receiver);
  }
  var singleAdministrationDose = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.u6y_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var name = tmp_3.t7x(tmp_4);
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.v6y_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_6 = samText_toJs(tmp3_safe_receiver);
  }
  var abbreviation = tmp_5.t7x(tmp_6);
  var tmp_7 = CheckedConverters_instance;
  var tmp4_safe_receiver = obj.w6y_1;
  var tmp_8;
  if (tmp4_safe_receiver == null) {
    tmp_8 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_8 = vtm_toJs(tmp4_safe_receiver);
  }
  var vtm = tmp_7.t7x(tmp_8);
  var tmp_9 = CheckedConverters_instance;
  var tmp_10 = CheckedConverters_instance;
  var wadas = tmp_9.t7x(tmp_10.g7z(obj.x6y_1, vmp_toJs$lambda));
  var tmp_11 = CheckedConverters_instance;
  var tmp_12 = CheckedConverters_instance;
  var components = tmp_11.t7x(tmp_12.g7z(obj.y6y_1, vmp_toJs$lambda_0));
  var tmp_13 = CheckedConverters_instance;
  var tmp_14 = CheckedConverters_instance;
  var commentedClassifications = tmp_13.t7x(tmp_14.g7z(obj.z6y_1, vmp_toJs$lambda_1));
  return new Vmp({id: id, rev: rev, deletionDate: deletionDate, from: from, to: to, code: code, vmpGroup: vmpGroup, singleAdministrationDose: singleAdministrationDose, name: name, abbreviation: abbreviation, vtm: vtm, wadas: wadas, components: components, commentedClassifications: commentedClassifications});
}
function vmp_toJs$lambda(x1) {
  return wada_toJs(x1);
}
function vmp_toJs$lambda_0(x1) {
  return vmpComponent_toJs(x1);
}
function vmp_toJs$lambda_1(x1) {
  return commentedClassification_toJs(x1);
}
function addedDocument_toJs(obj) {
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.r6z_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.s6z_1));
  var verseSeq = CheckedConverters_instance.b7z(obj.t6z_1);
  var documentSeq = CheckedConverters_instance.b7z(obj.u6z_1);
  var mimeType = CheckedConverters_instance.t7x(obj.v6z_1);
  var addressUrl = CheckedConverters_instance.t7x(obj.w6z_1);
  var descrNl = CheckedConverters_instance.t7x(obj.x6z_1);
  var descrFr = CheckedConverters_instance.t7x(obj.y6z_1);
  var localPath = CheckedConverters_instance.t7x(obj.z6z_1);
  return new AddedDocument({from: from, to: to, verseSeq: verseSeq, documentSeq: documentSeq, mimeType: mimeType, addressUrl: addressUrl, descrNl: descrNl, descrFr: descrFr, localPath: localPath});
}
function ampComponent_toJs(obj) {
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.f70_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.g70_1));
  var tmp = CheckedConverters_instance;
  var tmp_0 = CheckedConverters_instance;
  var ingredients = tmp.t7x(tmp_0.g7z(obj.h70_1, ampComponent_toJs$lambda));
  var tmp_1 = CheckedConverters_instance;
  var tmp_2 = CheckedConverters_instance;
  var pharmaceuticalForms = tmp_1.t7x(tmp_2.g7z(obj.i70_1, ampComponent_toJs$lambda_0));
  var tmp_3 = CheckedConverters_instance;
  var tmp_4 = CheckedConverters_instance;
  var routeOfAdministrations = tmp_3.t7x(tmp_4.g7z(obj.j70_1, ampComponent_toJs$lambda_1));
  var dividable = CheckedConverters_instance.t7x(obj.k70_1);
  var scored = CheckedConverters_instance.t7x(obj.l70_1);
  var tmp_5 = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.m70_1;
  var tmp_6;
  if (tmp0_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_6 = tmp0_safe_receiver.m2_1;
  }
  var crushable = tmp_5.t7x(tmp_6);
  var tmp_7 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.n70_1;
  var tmp_8;
  if (tmp1_safe_receiver == null) {
    tmp_8 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_8 = tmp1_safe_receiver.m2_1;
  }
  var containsAlcohol = tmp_7.t7x(tmp_8);
  var sugarFree = CheckedConverters_instance.t7x(obj.o70_1);
  var modifiedReleaseType = CheckedConverters_instance.t7x(CheckedConverters_instance.d7z(obj.p70_1));
  var specificDrugDevice = CheckedConverters_instance.t7x(CheckedConverters_instance.d7z(obj.q70_1));
  var dimensions = CheckedConverters_instance.t7x(obj.r70_1);
  var tmp_9 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.s70_1;
  var tmp_10;
  if (tmp2_safe_receiver == null) {
    tmp_10 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_10 = samText_toJs(tmp2_safe_receiver);
  }
  var name = tmp_9.t7x(tmp_10);
  var tmp_11 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.t70_1;
  var tmp_12;
  if (tmp3_safe_receiver == null) {
    tmp_12 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_12 = samText_toJs(tmp3_safe_receiver);
  }
  var note = tmp_11.t7x(tmp_12);
  return new AmpComponent({from: from, to: to, ingredients: ingredients, pharmaceuticalForms: pharmaceuticalForms, routeOfAdministrations: routeOfAdministrations, dividable: dividable, scored: scored, crushable: crushable, containsAlcohol: containsAlcohol, sugarFree: sugarFree, modifiedReleaseType: modifiedReleaseType, specificDrugDevice: specificDrugDevice, dimensions: dimensions, name: name, note: note});
}
function ampComponent_toJs$lambda(x1) {
  return ingredient_toJs(x1);
}
function ampComponent_toJs$lambda_0(x1) {
  return pharmaceuticalFormStub_toJs(x1);
}
function ampComponent_toJs$lambda_1(x1) {
  return routeOfAdministration_toJs(x1);
}
function amppComponent_toJs(obj) {
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.s72_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.t72_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.u72_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = tmp0_safe_receiver.m2_1;
  }
  var contentType = tmp.t7x(tmp_0);
  var contentMultiplier = CheckedConverters_instance.t7x(CheckedConverters_instance.d7z(obj.v72_1));
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.w72_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var packSpecification = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.x72_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = deviceType_toJs(tmp2_safe_receiver);
  }
  var deviceType = tmp_3.t7x(tmp_4);
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.y72_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_6 = packagingType_toJs(tmp3_safe_receiver);
  }
  var packagingType = tmp_5.t7x(tmp_6);
  return new AmppComponent({from: from, to: to, contentType: contentType, contentMultiplier: contentMultiplier, packSpecification: packSpecification, deviceType: deviceType, packagingType: packagingType});
}
function ampp_toJs(obj) {
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.x70_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.y70_1));
  var index = CheckedConverters_instance.t7x(obj.z70_1);
  var ctiExtended = CheckedConverters_instance.t7x(obj.a71_1);
  var orphan = obj.b71_1;
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.c71_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var leafletLink = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.d71_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var spcLink = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.e71_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var rmaPatientLink = tmp_3.t7x(tmp_4);
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.f71_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_6 = samText_toJs(tmp3_safe_receiver);
  }
  var rmaProfessionalLink = tmp_5.t7x(tmp_6);
  var parallelCircuit = CheckedConverters_instance.t7x(CheckedConverters_instance.d7z(obj.g71_1));
  var parallelDistributor = CheckedConverters_instance.t7x(obj.h71_1);
  var packMultiplier = CheckedConverters_instance.t7x(obj.i71_1);
  var tmp_7 = CheckedConverters_instance;
  var tmp4_safe_receiver = obj.j71_1;
  var tmp_8;
  if (tmp4_safe_receiver == null) {
    tmp_8 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_8 = quantity_toJs(tmp4_safe_receiver);
  }
  var packAmount = tmp_7.t7x(tmp_8);
  var tmp_9 = CheckedConverters_instance;
  var tmp5_safe_receiver = obj.k71_1;
  var tmp_10;
  if (tmp5_safe_receiver == null) {
    tmp_10 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_10 = samText_toJs(tmp5_safe_receiver);
  }
  var packDisplayValue = tmp_9.t7x(tmp_10);
  var tmp_11 = CheckedConverters_instance;
  var tmp6_safe_receiver = obj.l71_1;
  var tmp_12;
  if (tmp6_safe_receiver == null) {
    tmp_12 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_12 = tmp6_safe_receiver.m2_1;
  }
  var status = tmp_11.t7x(tmp_12);
  var tmp_13 = CheckedConverters_instance;
  var atcs = tmp_13.i7n(obj.m71_1, ampp_toJs$lambda);
  var tmp_14 = CheckedConverters_instance;
  var tmp7_safe_receiver = obj.n71_1;
  var tmp_15;
  if (tmp7_safe_receiver == null) {
    tmp_15 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_15 = samText_toJs(tmp7_safe_receiver);
  }
  var crmLink = tmp_14.t7x(tmp_15);
  var deliveryModusCode = CheckedConverters_instance.t7x(obj.o71_1);
  var tmp_16 = CheckedConverters_instance;
  var tmp8_safe_receiver = obj.p71_1;
  var tmp_17;
  if (tmp8_safe_receiver == null) {
    tmp_17 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_17 = samText_toJs(tmp8_safe_receiver);
  }
  var deliveryModus = tmp_16.t7x(tmp_17);
  var deliveryModusSpecificationCode = CheckedConverters_instance.t7x(obj.q71_1);
  var tmp_18 = CheckedConverters_instance;
  var tmp9_safe_receiver = obj.r71_1;
  var tmp_19;
  if (tmp9_safe_receiver == null) {
    tmp_19 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_19 = samText_toJs(tmp9_safe_receiver);
  }
  var deliveryModusSpecification = tmp_18.t7x(tmp_19);
  var tmp_20 = CheckedConverters_instance;
  var tmp10_safe_receiver = obj.s71_1;
  var tmp_21;
  if (tmp10_safe_receiver == null) {
    tmp_21 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_21 = samText_toJs(tmp10_safe_receiver);
  }
  var dhpcLink = tmp_20.t7x(tmp_21);
  var tmp_22 = CheckedConverters_instance;
  var tmp11_safe_receiver = obj.t71_1;
  var tmp_23;
  if (tmp11_safe_receiver == null) {
    tmp_23 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_23 = company_toJs(tmp11_safe_receiver);
  }
  var distributorCompany = tmp_22.t7x(tmp_23);
  var singleUse = CheckedConverters_instance.t7x(obj.u71_1);
  var speciallyRegulated = CheckedConverters_instance.t7x(CheckedConverters_instance.d7z(obj.v71_1));
  var tmp_24 = CheckedConverters_instance;
  var tmp12_safe_receiver = obj.w71_1;
  var tmp_25;
  if (tmp12_safe_receiver == null) {
    tmp_25 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_25 = samText_toJs(tmp12_safe_receiver);
  }
  var abbreviatedName = tmp_24.t7x(tmp_25);
  var tmp_26 = CheckedConverters_instance;
  var tmp13_safe_receiver = obj.x71_1;
  var tmp_27;
  if (tmp13_safe_receiver == null) {
    tmp_27 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_27 = samText_toJs(tmp13_safe_receiver);
  }
  var prescriptionName = tmp_26.t7x(tmp_27);
  var tmp_28 = CheckedConverters_instance;
  var tmp14_safe_receiver = obj.y71_1;
  var tmp_29;
  if (tmp14_safe_receiver == null) {
    tmp_29 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_29 = samText_toJs(tmp14_safe_receiver);
  }
  var note = tmp_28.t7x(tmp_29);
  var tmp_30 = CheckedConverters_instance;
  var tmp15_safe_receiver = obj.z71_1;
  var tmp_31;
  if (tmp15_safe_receiver == null) {
    tmp_31 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_31 = samText_toJs(tmp15_safe_receiver);
  }
  var posologyNote = tmp_30.t7x(tmp_31);
  var tmp_32 = CheckedConverters_instance;
  var tmp_33 = CheckedConverters_instance;
  var noGenericPrescriptionReasons = tmp_32.t7x(tmp_33.g7z(obj.a72_1, ampp_toJs$lambda_0));
  var exFactoryPrice = CheckedConverters_instance.t7x(obj.b72_1);
  var reimbursementCode = CheckedConverters_instance.t7x(CheckedConverters_instance.d7z(obj.c72_1));
  var tmp_34 = CheckedConverters_instance;
  var tmp16_safe_receiver = obj.d72_1;
  var tmp_35;
  if (tmp16_safe_receiver == null) {
    tmp_35 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_35 = quantity_toJs(tmp16_safe_receiver);
  }
  var definedDailyDose = tmp_34.t7x(tmp_35);
  var officialExFactoryPrice = CheckedConverters_instance.t7x(obj.e72_1);
  var realExFactoryPrice = CheckedConverters_instance.t7x(obj.f72_1);
  var pricingInformationDecisionDate = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.g72_1));
  var tmp_36 = CheckedConverters_instance;
  var tmp_37 = CheckedConverters_instance;
  var components = tmp_36.t7x(tmp_37.g7z(obj.h72_1, ampp_toJs$lambda_1));
  var tmp_38 = CheckedConverters_instance;
  var tmp_39 = CheckedConverters_instance;
  var commercializations = tmp_38.t7x(tmp_39.g7z(obj.i72_1, ampp_toJs$lambda_2));
  var tmp_40 = CheckedConverters_instance;
  var tmp_41 = CheckedConverters_instance;
  var supplyProblems = tmp_40.t7x(tmp_41.g7z(obj.j72_1, ampp_toJs$lambda_3));
  var tmp_42 = CheckedConverters_instance;
  var dmpps = tmp_42.i7n(obj.k72_1, ampp_toJs$lambda_4);
  var tmp_43 = CheckedConverters_instance;
  var tmp_44 = CheckedConverters_instance;
  var vaccineIndicationCodes = tmp_43.t7x(tmp_44.g7z(obj.l72_1, ampp_toJs$lambda_5));
  var tmp_45 = CheckedConverters_instance;
  var tmp17_safe_receiver = obj.m72_1;
  var tmp_46;
  if (tmp17_safe_receiver == null) {
    tmp_46 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_46 = samText_toJs(tmp17_safe_receiver);
  }
  var rmaKeyMessages = tmp_45.t7x(tmp_46);
  var genericPrescriptionRequired = CheckedConverters_instance.t7x(obj.n72_1);
  return new Ampp({from: from, to: to, index: index, ctiExtended: ctiExtended, orphan: orphan, leafletLink: leafletLink, spcLink: spcLink, rmaPatientLink: rmaPatientLink, rmaProfessionalLink: rmaProfessionalLink, parallelCircuit: parallelCircuit, parallelDistributor: parallelDistributor, packMultiplier: packMultiplier, packAmount: packAmount, packDisplayValue: packDisplayValue, status: status, atcs: atcs, crmLink: crmLink, deliveryModusCode: deliveryModusCode, deliveryModus: deliveryModus, deliveryModusSpecificationCode: deliveryModusSpecificationCode, deliveryModusSpecification: deliveryModusSpecification, dhpcLink: dhpcLink, distributorCompany: distributorCompany, singleUse: singleUse, speciallyRegulated: speciallyRegulated, abbreviatedName: abbreviatedName, prescriptionName: prescriptionName, note: note, posologyNote: posologyNote, noGenericPrescriptionReasons: noGenericPrescriptionReasons, exFactoryPrice: exFactoryPrice, reimbursementCode: reimbursementCode, definedDailyDose: definedDailyDose, officialExFactoryPrice: officialExFactoryPrice, realExFactoryPrice: realExFactoryPrice, pricingInformationDecisionDate: pricingInformationDecisionDate, components: components, commercializations: commercializations, supplyProblems: supplyProblems, dmpps: dmpps, vaccineIndicationCodes: vaccineIndicationCodes, rmaKeyMessages: rmaKeyMessages, genericPrescriptionRequired: genericPrescriptionRequired});
}
function ampp_toJs$lambda(x1) {
  return atc_toJs(x1);
}
function ampp_toJs$lambda_0(x1) {
  return samText_toJs(x1);
}
function ampp_toJs$lambda_1(x1) {
  var tmp = CheckedConverters_instance;
  var tmp_0;
  if (x1 == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = amppComponent_toJs(x1);
  }
  return tmp.t7x(tmp_0);
}
function ampp_toJs$lambda_2(x1) {
  return commercialization_toJs(x1);
}
function ampp_toJs$lambda_3(x1) {
  return supplyProblem_toJs(x1);
}
function ampp_toJs$lambda_4(x1) {
  return dmpp_toJs(x1);
}
function ampp_toJs$lambda_5(x1) {
  return x1;
}
function atc_toJs(obj) {
  var code = CheckedConverters_instance.t7x(obj.b73_1);
  var description = CheckedConverters_instance.t7x(obj.c73_1);
  return new Atc({code: code, description: description});
}
function boundedParameter_toJs(obj) {
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.f73_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = dosageParameter_toJs(tmp0_safe_receiver);
  }
  var dosageParameter = tmp.t7x(tmp_0);
  var lowerBound = CheckedConverters_instance.t7x(obj.g73_1);
  var upperBound = CheckedConverters_instance.t7x(obj.h73_1);
  return new BoundedParameter({dosageParameter: dosageParameter, lowerBound: lowerBound, upperBound: upperBound});
}
function commentedClassification_toJs(obj) {
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.l73_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var title = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.m73_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var url = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp_4 = CheckedConverters_instance;
  var commentedClassification = tmp_3.t7x(tmp_4.g7z(obj.n73_1, commentedClassification_toJs$lambda));
  return new CommentedClassification({title: title, url: url, commentedClassification: commentedClassification});
}
function commentedClassification_toJs$lambda(x1) {
  return commentedClassification_toJs(x1);
}
function commercialization_toJs(obj) {
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.q73_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.r73_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.s73_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var reason = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.t73_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var endOfComercialization = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.u73_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var impact = tmp_3.t7x(tmp_4);
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.v73_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_6 = samText_toJs(tmp3_safe_receiver);
  }
  var additionalInformation = tmp_5.t7x(tmp_6);
  return new Commercialization({from: from, to: to, reason: reason, endOfComercialization: endOfComercialization, impact: impact, additionalInformation: additionalInformation});
}
function company_toJs(obj) {
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.z73_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.a74_1));
  var authorisationNr = CheckedConverters_instance.t7x(obj.b74_1);
  var tmp = CheckedConverters_instance;
  var tmp_0 = CheckedConverters_instance;
  var tmp_1 = company_toJs$lambda;
  var vatNr = tmp.t7x(tmp_0.f7z(obj.c74_1, tmp_1, company_toJs$lambda_0));
  var europeanNr = CheckedConverters_instance.t7x(obj.d74_1);
  var denomination = CheckedConverters_instance.t7x(obj.e74_1);
  var legalForm = CheckedConverters_instance.t7x(obj.f74_1);
  var building = CheckedConverters_instance.t7x(obj.g74_1);
  var streetName = CheckedConverters_instance.t7x(obj.h74_1);
  var streetNum = CheckedConverters_instance.t7x(obj.i74_1);
  var postbox = CheckedConverters_instance.t7x(obj.j74_1);
  var postcode = CheckedConverters_instance.t7x(obj.k74_1);
  var city = CheckedConverters_instance.t7x(obj.l74_1);
  var countryCode = CheckedConverters_instance.t7x(obj.m74_1);
  var phone = CheckedConverters_instance.t7x(obj.n74_1);
  var language = CheckedConverters_instance.t7x(obj.o74_1);
  var website = CheckedConverters_instance.t7x(obj.p74_1);
  return new Company({from: from, to: to, authorisationNr: authorisationNr, vatNr: vatNr, europeanNr: europeanNr, denomination: denomination, legalForm: legalForm, building: building, streetName: streetName, streetNum: streetNum, postbox: postbox, postcode: postcode, city: city, countryCode: countryCode, phone: phone, language: language, website: website});
}
function company_toJs$lambda(x1) {
  return x1;
}
function company_toJs$lambda_0(x1) {
  return x1;
}
function complexStrength_toJs(obj) {
  var operator = CheckedConverters_instance.t7x(obj.s74_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.t74_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = quantity_toJs(tmp0_safe_receiver);
  }
  var quantity = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.u74_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = quantity_toJs(tmp1_safe_receiver);
  }
  var secondQuantity = tmp_1.t7x(tmp_2);
  return new ComplexStrength({operator: operator, quantity: quantity, secondQuantity: secondQuantity});
}
function copayment_toJs(obj) {
  var regimeType = CheckedConverters_instance.t7x(CheckedConverters_instance.d7z(obj.x74_1));
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.y74_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.z74_1));
  var feeAmount = CheckedConverters_instance.t7x(obj.a75_1);
  return new Copayment({regimeType: regimeType, from: from, to: to, feeAmount: feeAmount});
}
function deviceType_toJs(obj) {
  var code = CheckedConverters_instance.t7x(obj.e75_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.f75_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  var edqmCode = CheckedConverters_instance.t7x(obj.g75_1);
  var edqmDefinition = CheckedConverters_instance.t7x(obj.h75_1);
  return new DeviceType({code: code, name: name, edqmCode: edqmCode, edqmDefinition: edqmDefinition});
}
function dmpp_toJs(obj) {
  var id = CheckedConverters_instance.t7x(obj.m75_1);
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.n75_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.o75_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.p75_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = tmp0_safe_receiver.m2_1;
  }
  var deliveryEnvironment = tmp.t7x(tmp_0);
  var code = CheckedConverters_instance.t7x(obj.q75_1);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.r75_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = tmp1_safe_receiver.m2_1;
  }
  var codeType = tmp_1.t7x(tmp_2);
  var price = CheckedConverters_instance.t7x(obj.s75_1);
  var cheap = CheckedConverters_instance.t7x(obj.t75_1);
  var cheapest = CheckedConverters_instance.t7x(obj.u75_1);
  var reimbursable = CheckedConverters_instance.t7x(obj.v75_1);
  var tmp_3 = CheckedConverters_instance;
  var tmp_4 = CheckedConverters_instance;
  var reimbursements = tmp_3.t7x(tmp_4.g7z(obj.w75_1, dmpp_toJs$lambda));
  var productId = CheckedConverters_instance.t7x(obj.x75_1);
  return new Dmpp({id: id, from: from, to: to, deliveryEnvironment: deliveryEnvironment, code: code, codeType: codeType, price: price, cheap: cheap, cheapest: cheapest, reimbursable: reimbursable, reimbursements: reimbursements, productId: productId});
}
function dmpp_toJs$lambda(x1) {
  return reimbursement_toJs(x1);
}
function dosageParameter_toJs(obj) {
  var code = CheckedConverters_instance.t7x(obj.a76_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.b76_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.c76_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var definition = tmp_1.t7x(tmp_2);
  var standardUnit = CheckedConverters_instance.t7x(obj.d76_1);
  var snomedCT = CheckedConverters_instance.t7x(obj.e76_1);
  return new DosageParameter({code: code, name: name, definition: definition, standardUnit: standardUnit, snomedCT: snomedCT});
}
function indication_toJs(obj) {
  var code = CheckedConverters_instance.t7x(obj.h76_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.i76_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  var snomedCT = CheckedConverters_instance.t7x(obj.j76_1);
  return new Indication({code: code, name: name, snomedCT: snomedCT});
}
function ingredient_toJs(obj) {
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.o76_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.p76_1));
  var rank = CheckedConverters_instance.t7x(CheckedConverters_instance.d7z(obj.q76_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.r76_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = tmp0_safe_receiver.m2_1;
  }
  var type = tmp.t7x(tmp_0);
  var knownEffect = CheckedConverters_instance.t7x(obj.s76_1);
  var strengthDescription = CheckedConverters_instance.t7x(obj.t76_1);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.u76_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = complexStrength_toJs(tmp1_safe_receiver);
  }
  var strength = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.v76_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var additionalInformation = tmp_3.t7x(tmp_4);
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.w76_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_6 = substanceStub_toJs(tmp3_safe_receiver);
  }
  var substance = tmp_5.t7x(tmp_6);
  return new Ingredient({from: from, to: to, rank: rank, type: type, knownEffect: knownEffect, strengthDescription: strengthDescription, strength: strength, additionalInformation: additionalInformation, substance: substance});
}
function noGenericPrescriptionReason_toJs(obj) {
  var code = CheckedConverters_instance.t7x(obj.a77_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.b77_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var description = tmp.t7x(tmp_0);
  return new NoGenericPrescriptionReason({code: code, description: description});
}
function noSwitchReason_toJs(obj) {
  var code = CheckedConverters_instance.t7x(obj.e77_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.f77_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var description = tmp.t7x(tmp_0);
  return new NoSwitchReason({code: code, description: description});
}
function numeratorRange_toJs(obj) {
  var min = CheckedConverters_instance.t7x(obj.i77_1);
  var max = CheckedConverters_instance.t7x(obj.j77_1);
  var unit = CheckedConverters_instance.t7x(obj.k77_1);
  return new NumeratorRange({min: min, max: max, unit: unit});
}
function packagingType_toJs(obj) {
  var code = CheckedConverters_instance.t7x(obj.n77_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.o77_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  var edqmCode = CheckedConverters_instance.t7x(obj.p77_1);
  var edqmDefinition = CheckedConverters_instance.t7x(obj.q77_1);
  return new PackagingType({code: code, name: name, edqmCode: edqmCode, edqmDefinition: edqmDefinition});
}
function pricing_toJs(obj) {
  var quantity = CheckedConverters_instance.t7x(obj.t77_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.u77_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var label = tmp.t7x(tmp_0);
  return new Pricing({quantity: quantity, label: label});
}
function quantity_toJs(obj) {
  var value = CheckedConverters_instance.t7x(obj.x77_1);
  var unit = CheckedConverters_instance.t7x(obj.y77_1);
  return new Quantity({value: value, unit: unit});
}
function reimbursementCriterion_toJs(obj) {
  var category = CheckedConverters_instance.t7x(obj.v78_1);
  var code = CheckedConverters_instance.t7x(obj.w78_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.x78_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var description = tmp.t7x(tmp_0);
  return new ReimbursementCriterion({category: category, code: code, description: description});
}
function reimbursement_toJs(obj) {
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.c78_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.d78_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.e78_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = tmp0_safe_receiver.m2_1;
  }
  var deliveryEnvironment = tmp.t7x(tmp_0);
  var code = CheckedConverters_instance.t7x(obj.f78_1);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.g78_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = tmp1_safe_receiver.m2_1;
  }
  var codeType = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.h78_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = tmp2_safe_receiver.m2_1;
  }
  var multiple = tmp_3.t7x(tmp_4);
  var temporary = CheckedConverters_instance.t7x(obj.i78_1);
  var reference = CheckedConverters_instance.t7x(obj.j78_1);
  var legalReferencePath = CheckedConverters_instance.t7x(obj.k78_1);
  var flatRateSystem = CheckedConverters_instance.t7x(obj.l78_1);
  var reimbursementBasePrice = CheckedConverters_instance.t7x(obj.m78_1);
  var referenceBasePrice = CheckedConverters_instance.t7x(obj.n78_1);
  var copaymentSupplement = CheckedConverters_instance.t7x(obj.o78_1);
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.p78_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_6 = pricing_toJs(tmp3_safe_receiver);
  }
  var pricingUnit = tmp_5.t7x(tmp_6);
  var tmp_7 = CheckedConverters_instance;
  var tmp4_safe_receiver = obj.q78_1;
  var tmp_8;
  if (tmp4_safe_receiver == null) {
    tmp_8 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_8 = pricing_toJs(tmp4_safe_receiver);
  }
  var pricingSlice = tmp_7.t7x(tmp_8);
  var tmp_9 = CheckedConverters_instance;
  var tmp5_safe_receiver = obj.r78_1;
  var tmp_10;
  if (tmp5_safe_receiver == null) {
    tmp_10 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_10 = reimbursementCriterion_toJs(tmp5_safe_receiver);
  }
  var reimbursementCriterion = tmp_9.t7x(tmp_10);
  var tmp_11 = CheckedConverters_instance;
  var tmp_12 = CheckedConverters_instance;
  var copayments = tmp_11.t7x(tmp_12.g7z(obj.s78_1, reimbursement_toJs$lambda));
  return new Reimbursement({from: from, to: to, deliveryEnvironment: deliveryEnvironment, code: code, codeType: codeType, multiple: multiple, temporary: temporary, reference: reference, legalReferencePath: legalReferencePath, flatRateSystem: flatRateSystem, reimbursementBasePrice: reimbursementBasePrice, referenceBasePrice: referenceBasePrice, copaymentSupplement: copaymentSupplement, pricingUnit: pricingUnit, pricingSlice: pricingSlice, reimbursementCriterion: reimbursementCriterion, copayments: copayments});
}
function reimbursement_toJs$lambda(x1) {
  return copayment_toJs(x1);
}
function routeOfAdministration_toJs(obj) {
  var code = CheckedConverters_instance.t7x(obj.b79_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.c79_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var standardRoutes = tmp_1.i7n(obj.d79_1, routeOfAdministration_toJs$lambda);
  return new RouteOfAdministration({code: code, name: name, standardRoutes: standardRoutes});
}
function routeOfAdministration_toJs$lambda(x1) {
  return codeStub_toJs(x1);
}
function samText_toJs(obj) {
  var fr = CheckedConverters_instance.t7x(obj.g79_1);
  var nl = CheckedConverters_instance.t7x(obj.h79_1);
  var de = CheckedConverters_instance.t7x(obj.i79_1);
  var en = CheckedConverters_instance.t7x(obj.j79_1);
  return new SamText({fr: fr, nl: nl, de: de, en: en});
}
function standardDosage_toJs(obj) {
  var code = CheckedConverters_instance.t7x(CheckedConverters_instance.d7z(obj.n79_1));
  var targetGroup = CheckedConverters_instance.t7x(obj.o79_1);
  var kidneyFailureClass = CheckedConverters_instance.t7x(CheckedConverters_instance.d7z(obj.p79_1));
  var liverFailureClass = CheckedConverters_instance.t7x(CheckedConverters_instance.d7z(obj.q79_1));
  var treatmentDurationType = CheckedConverters_instance.t7x(obj.r79_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.s79_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = quantity_toJs(tmp0_safe_receiver);
  }
  var temporalityDuration = tmp.t7x(tmp_0);
  var temporalityUserProvided = CheckedConverters_instance.t7x(obj.t79_1);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.u79_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var temporalityNote = tmp_1.t7x(tmp_2);
  var quantity = CheckedConverters_instance.t7x(obj.v79_1);
  var quantityDenominator = CheckedConverters_instance.t7x(obj.w79_1);
  var quantityMultiplicator = CheckedConverters_instance.t7x(obj.x79_1);
  var quantityRangeLower = CheckedConverters_instance.t7x(obj.y79_1);
  var quantityRangeLowerDenominator = CheckedConverters_instance.t7x(obj.z79_1);
  var quantityRangeUpper = CheckedConverters_instance.t7x(obj.a7a_1);
  var quantityRangeUpperDenominator = CheckedConverters_instance.t7x(obj.b7a_1);
  var administrationFrequencyQuantity = CheckedConverters_instance.t7x(CheckedConverters_instance.d7z(obj.c7a_1));
  var administrationFrequencyIsMax = CheckedConverters_instance.t7x(obj.d7a_1);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.e7a_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = quantity_toJs(tmp2_safe_receiver);
  }
  var administrationFrequencyTimeframe = tmp_3.t7x(tmp_4);
  var maximumAdministrationQuantity = CheckedConverters_instance.t7x(obj.f7a_1);
  var maximumAdministrationQuantityDenominator = CheckedConverters_instance.t7x(obj.g7a_1);
  var maximumAdministrationQuantityMultiplicator = CheckedConverters_instance.t7x(obj.h7a_1);
  var maximumDailyQuantity = CheckedConverters_instance.t7x(obj.i7a_1);
  var maximumDailyQuantityDenominator = CheckedConverters_instance.t7x(obj.j7a_1);
  var maximumDailyQuantityMultiplicator = CheckedConverters_instance.t7x(obj.k7a_1);
  var tmp_5 = CheckedConverters_instance;
  var tmp3_safe_receiver = obj.l7a_1;
  var tmp_6;
  if (tmp3_safe_receiver == null) {
    tmp_6 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_6 = samText_toJs(tmp3_safe_receiver);
  }
  var textualDosage = tmp_5.t7x(tmp_6);
  var tmp_7 = CheckedConverters_instance;
  var tmp4_safe_receiver = obj.m7a_1;
  var tmp_8;
  if (tmp4_safe_receiver == null) {
    tmp_8 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_8 = samText_toJs(tmp4_safe_receiver);
  }
  var supplementaryInfo = tmp_7.t7x(tmp_8);
  var tmp_9 = CheckedConverters_instance;
  var tmp5_safe_receiver = obj.n7a_1;
  var tmp_10;
  if (tmp5_safe_receiver == null) {
    tmp_10 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_10 = samText_toJs(tmp5_safe_receiver);
  }
  var routeSpecification = tmp_9.t7x(tmp_10);
  var tmp_11 = CheckedConverters_instance;
  var tmp_12 = CheckedConverters_instance;
  var indication = tmp_11.t7x(tmp_12.g7z(obj.o7a_1, standardDosage_toJs$lambda));
  var tmp_13 = CheckedConverters_instance;
  var tmp_14 = CheckedConverters_instance;
  var parameterBounds = tmp_13.t7x(tmp_14.g7z(obj.p7a_1, standardDosage_toJs$lambda_0));
  var tmp_15 = CheckedConverters_instance;
  var tmp6_safe_receiver = obj.q7a_1;
  var tmp_16;
  if (tmp6_safe_receiver == null) {
    tmp_16 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_16 = routeOfAdministration_toJs(tmp6_safe_receiver);
  }
  var routeOfAdministration = tmp_15.t7x(tmp_16);
  return new StandardDosage({code: code, targetGroup: targetGroup, kidneyFailureClass: kidneyFailureClass, liverFailureClass: liverFailureClass, treatmentDurationType: treatmentDurationType, temporalityDuration: temporalityDuration, temporalityUserProvided: temporalityUserProvided, temporalityNote: temporalityNote, quantity: quantity, quantityDenominator: quantityDenominator, quantityMultiplicator: quantityMultiplicator, quantityRangeLower: quantityRangeLower, quantityRangeLowerDenominator: quantityRangeLowerDenominator, quantityRangeUpper: quantityRangeUpper, quantityRangeUpperDenominator: quantityRangeUpperDenominator, administrationFrequencyQuantity: administrationFrequencyQuantity, administrationFrequencyIsMax: administrationFrequencyIsMax, administrationFrequencyTimeframe: administrationFrequencyTimeframe, maximumAdministrationQuantity: maximumAdministrationQuantity, maximumAdministrationQuantityDenominator: maximumAdministrationQuantityDenominator, maximumAdministrationQuantityMultiplicator: maximumAdministrationQuantityMultiplicator, maximumDailyQuantity: maximumDailyQuantity, maximumDailyQuantityDenominator: maximumDailyQuantityDenominator, maximumDailyQuantityMultiplicator: maximumDailyQuantityMultiplicator, textualDosage: textualDosage, supplementaryInfo: supplementaryInfo, routeSpecification: routeSpecification, indication: indication, parameterBounds: parameterBounds, routeOfAdministration: routeOfAdministration});
}
function standardDosage_toJs$lambda(x1) {
  return indication_toJs(x1);
}
function standardDosage_toJs$lambda_0(x1) {
  return boundedParameter_toJs(x1);
}
function standardSubstance_toJs(obj) {
  var code = CheckedConverters_instance.t7x(obj.v7a_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.w7a_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = tmp0_safe_receiver.m2_1;
  }
  var type = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.x7a_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var name = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.y7a_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var definition = tmp_3.t7x(tmp_4);
  var url = CheckedConverters_instance.t7x(obj.z7a_1);
  return new StandardSubstance({code: code, type: type, name: name, definition: definition, url: url});
}
function strengthRange_toJs(obj) {
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.f7b_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = numeratorRange_toJs(tmp0_safe_receiver);
  }
  var numeratorRange = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.g7b_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = quantity_toJs(tmp1_safe_receiver);
  }
  var denominator = tmp_1.t7x(tmp_2);
  return new StrengthRange({numeratorRange: numeratorRange, denominator: denominator});
}
function supplyProblem_toJs(obj) {
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.j7b_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.k7b_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.l7b_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var reason = tmp.t7x(tmp_0);
  var expectedEndOn = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.m7b_1));
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.n7b_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var impact = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.o7b_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = samText_toJs(tmp2_safe_receiver);
  }
  var additionalInformation = tmp_3.t7x(tmp_4);
  return new SupplyProblem({from: from, to: to, reason: reason, expectedEndOn: expectedEndOn, impact: impact, additionalInformation: additionalInformation});
}
function virtualForm_toJs(obj) {
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.s7b_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var standardForms = tmp_1.i7n(obj.t7b_1, virtualForm_toJs$lambda);
  return new VirtualForm({name: name, standardForms: standardForms});
}
function virtualForm_toJs$lambda(x1) {
  return codeStub_toJs(x1);
}
function virtualIngredient_toJs(obj) {
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.x7b_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.y7b_1));
  var rank = CheckedConverters_instance.t7x(CheckedConverters_instance.d7z(obj.z7b_1));
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.a7c_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = tmp0_safe_receiver.m2_1;
  }
  var type = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.b7c_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = strengthRange_toJs(tmp1_safe_receiver);
  }
  var strengthRange = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp2_safe_receiver = obj.c7c_1;
  var tmp_4;
  if (tmp2_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = substanceStub_toJs(tmp2_safe_receiver);
  }
  var substance = tmp_3.t7x(tmp_4);
  return new VirtualIngredient({from: from, to: to, rank: rank, type: type, strengthRange: strengthRange, substance: substance});
}
function vmpComponent_toJs(obj) {
  var code = CheckedConverters_instance.t7x(obj.g7c_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.h7c_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = virtualForm_toJs(tmp0_safe_receiver);
  }
  var virtualForm = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp_2 = CheckedConverters_instance;
  var routeOfAdministrations = tmp_1.t7x(tmp_2.g7z(obj.i7c_1, vmpComponent_toJs$lambda));
  var tmp_3 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.j7c_1;
  var tmp_4;
  if (tmp1_safe_receiver == null) {
    tmp_4 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_4 = samText_toJs(tmp1_safe_receiver);
  }
  var name = tmp_3.t7x(tmp_4);
  var phaseNumber = CheckedConverters_instance.t7x(obj.k7c_1);
  var tmp_5 = CheckedConverters_instance;
  var tmp_6 = CheckedConverters_instance;
  var virtualIngredients = tmp_5.t7x(tmp_6.g7z(obj.l7c_1, vmpComponent_toJs$lambda_0));
  return new VmpComponent({code: code, virtualForm: virtualForm, routeOfAdministrations: routeOfAdministrations, name: name, phaseNumber: phaseNumber, virtualIngredients: virtualIngredients});
}
function vmpComponent_toJs$lambda(x1) {
  return routeOfAdministration_toJs(x1);
}
function vmpComponent_toJs$lambda_0(x1) {
  return virtualIngredient_toJs(x1);
}
function vtm_toJs(obj) {
  var from = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.o7c_1));
  var to = CheckedConverters_instance.t7x(CheckedConverters_instance.c7z(obj.p7c_1));
  var code = CheckedConverters_instance.t7x(obj.q7c_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.r7c_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  return new Vtm({from: from, to: to, code: code, name: name});
}
function wada_toJs(obj) {
  var code = CheckedConverters_instance.t7x(obj.u7c_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.v7c_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.w7c_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var description = tmp_1.t7x(tmp_2);
  return new Wada({code: code, name: name, description: description});
}
function pharmaceuticalFormStub_toJs(obj) {
  var id = CheckedConverters_instance.t7x(obj.a7d_1);
  var code = CheckedConverters_instance.t7x(obj.b7d_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.c7d_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var standardForms = tmp_1.i7n(obj.d7d_1, pharmaceuticalFormStub_toJs$lambda);
  return new PharmaceuticalFormStub({id: id, code: code, name: name, standardForms: standardForms});
}
function pharmaceuticalFormStub_toJs$lambda(x1) {
  return codeStub_toJs(x1);
}
function substanceStub_toJs(obj) {
  var id = CheckedConverters_instance.t7x(obj.h7d_1);
  var code = CheckedConverters_instance.t7x(obj.i7d_1);
  var chemicalForm = CheckedConverters_instance.t7x(obj.j7d_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.k7d_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.l7d_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var note = tmp_1.t7x(tmp_2);
  var tmp_3 = CheckedConverters_instance;
  var tmp_4 = CheckedConverters_instance;
  var standardSubstances = tmp_3.t7x(tmp_4.g7z(obj.m7d_1, substanceStub_toJs$lambda));
  return new SubstanceStub({id: id, code: code, chemicalForm: chemicalForm, name: name, note: note, standardSubstances: standardSubstances});
}
function substanceStub_toJs$lambda(x1) {
  return standardSubstance_toJs(x1);
}
function vmpGroupStub_toJs(obj) {
  var id = obj.p7d_1;
  var code = CheckedConverters_instance.t7x(obj.q7d_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.r7d_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = samText_toJs(tmp0_safe_receiver);
  }
  var name = tmp.t7x(tmp_0);
  var productId = CheckedConverters_instance.t7x(obj.s7d_1);
  return new VmpGroupStub({id: id, code: code, name: name, productId: productId});
}
function vmpStub_toJs(obj) {
  var id = obj.v7d_1;
  var code = CheckedConverters_instance.t7x(obj.w7d_1);
  var tmp = CheckedConverters_instance;
  var tmp0_safe_receiver = obj.x7d_1;
  var tmp_0;
  if (tmp0_safe_receiver == null) {
    tmp_0 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_0 = vmpGroupStub_toJs(tmp0_safe_receiver);
  }
  var vmpGroup = tmp.t7x(tmp_0);
  var tmp_1 = CheckedConverters_instance;
  var tmp1_safe_receiver = obj.y7d_1;
  var tmp_2;
  if (tmp1_safe_receiver == null) {
    tmp_2 = null;
  } else {
    // Inline function 'kotlin.let' call
    tmp_2 = samText_toJs(tmp1_safe_receiver);
  }
  var name = tmp_1.t7x(tmp_2);
  return new VmpStub({id: id, code: code, vmpGroup: vmpGroup, name: name});
}
function toKt(_this__u8e3s4) {
  var tmp;
  if (_this__u8e3s4 instanceof UsernamePassword_0) {
    tmp = new UsernamePassword(_this__u8e3s4.username, _this__u8e3s4.password);
  } else {
    if (_this__u8e3s4 instanceof UsernameLongToken_0) {
      tmp = new UsernameLongToken(_this__u8e3s4.username, _this__u8e3s4.token);
    } else {
      if (_this__u8e3s4 instanceof ThirdPartyAuth) {
        tmp = new ThirdPartyAuthentication(_this__u8e3s4.token, valueOf(_this__u8e3s4.provider));
      } else {
        if (_this__u8e3s4 instanceof JwtCredentials_0) {
          var tmp2_refresh = _JwtRefresh___init__impl__17g47n(_this__u8e3s4.refresh);
          var tmp1_safe_receiver = _this__u8e3s4.bearer;
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            tmp_0 = _JwtBearer___init__impl__envtvz(tmp1_safe_receiver);
          }
          var tmp3_initialBearer = tmp_0;
          tmp = new JwtCredentials(tmp3_initialBearer, tmp2_refresh);
        } else {
          throw IllegalArgumentException_init_$Create$('Unrecognised authentication method: ' + getKClassFromExpression(_this__u8e3s4).sa());
        }
      }
    }
  }
  return tmp;
}
function base32Encode_0(bytes) {
  return base32Encode(bytes);
}
function base32Decode_0(base32String) {
  return base32Decode(base32String);
}
function hexEncode(bytes) {
  return toHexString(bytes);
}
function hexDecode(hexString) {
  return hexToByteArray(hexString);
}
function base64Encode_0(bytes) {
  return base64Encode(bytes);
}
function base64Decode_0(base64String) {
  return base64Decode(base64String);
}
function PaginatedListIterator() {
}
function paginatedListIterator_toJs(paginatedListIterator, tConverter) {
  return new paginatedListIterator_toJs$1(paginatedListIterator, tConverter);
}
function paginatedListIterator_toJs$o$hasNext$slambda($paginatedListIterator, resultContinuation) {
  this.p7z_1 = $paginatedListIterator;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(paginatedListIterator_toJs$o$hasNext$slambda).r7z = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(paginatedListIterator_toJs$o$hasNext$slambda).k9 = function (p1, $completion) {
  return this.r7z((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(paginatedListIterator_toJs$o$hasNext$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.o8_1 = 1;
          suspendResult = this.p7z_1.x11(this);
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
protoOf(paginatedListIterator_toJs$o$hasNext$slambda).t1q = function ($this$promise, completion) {
  var i = new paginatedListIterator_toJs$o$hasNext$slambda(this.p7z_1, completion);
  i.q7z_1 = $this$promise;
  return i;
};
function paginatedListIterator_toJs$o$hasNext$slambda_0($paginatedListIterator, resultContinuation) {
  var i = new paginatedListIterator_toJs$o$hasNext$slambda($paginatedListIterator, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.r7z($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function paginatedListIterator_toJs$o$next$slambda($paginatedListIterator, $limit, $tConverter, resultContinuation) {
  this.a80_1 = $paginatedListIterator;
  this.b80_1 = $limit;
  this.c80_1 = $tConverter;
  CoroutineImpl.call(this, resultContinuation);
}
protoOf(paginatedListIterator_toJs$o$next$slambda).e80 = function ($this$promise, $completion) {
  var tmp = this.t1q($this$promise, $completion);
  tmp.q8_1 = Unit_instance;
  tmp.r8_1 = null;
  return tmp.w8();
};
protoOf(paginatedListIterator_toJs$o$next$slambda).k9 = function (p1, $completion) {
  return this.e80((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
};
protoOf(paginatedListIterator_toJs$o$next$slambda).w8 = function () {
  var suspendResult = this.q8_1;
  $sm: do
    try {
      var tmp = this.o8_1;
      switch (tmp) {
        case 0:
          this.p8_1 = 2;
          this.o8_1 = 1;
          suspendResult = this.a80_1.d7g(this.b80_1, this);
          if (suspendResult === get_COROUTINE_SUSPENDED()) {
            return suspendResult;
          }

          continue $sm;
        case 1:
          var this_0 = suspendResult;
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
          var _iterator__ex2g4s = this_0.m();
          while (_iterator__ex2g4s.n()) {
            var item = _iterator__ex2g4s.o();
            destination.k(this.c80_1(item));
          }

          return copyToArray(destination);
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
protoOf(paginatedListIterator_toJs$o$next$slambda).t1q = function ($this$promise, completion) {
  var i = new paginatedListIterator_toJs$o$next$slambda(this.a80_1, this.b80_1, this.c80_1, completion);
  i.d80_1 = $this$promise;
  return i;
};
function paginatedListIterator_toJs$o$next$slambda_0($paginatedListIterator, $limit, $tConverter, resultContinuation) {
  var i = new paginatedListIterator_toJs$o$next$slambda($paginatedListIterator, $limit, $tConverter, resultContinuation);
  var l = function ($this$promise, $completion) {
    return i.e80($this$promise, $completion);
  };
  l.$arity = 1;
  return l;
}
function paginatedListIterator_toJs$1($paginatedListIterator, $tConverter) {
  this.f80_1 = $paginatedListIterator;
  this.g80_1 = $tConverter;
}
protoOf(paginatedListIterator_toJs$1).hasNext = function () {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, paginatedListIterator_toJs$o$hasNext$slambda_0(this.f80_1, null));
};
protoOf(paginatedListIterator_toJs$1).next = function (limit) {
  var tmp = GlobalScope_instance;
  return promise(tmp, VOID, VOID, paginatedListIterator_toJs$o$next$slambda_0(this.f80_1, limit, this.g80_1, null));
};
//region block: post-declaration
defineProp(protoOf(CardinalBeSamSdkJsImpl), 'sam', function () {
  return this.o56();
});
//endregion
//region block: init
InternalSdkInitializers_instance = new InternalSdkInitializers_0();
CheckedConverters_instance = new CheckedConverters();
//endregion
//region block: exports
var InternalSdkInitializers = {getInstance: InternalSdkInitializers_getInstance};
export {
  InternalSdkInitializers as InternalSdkInitializers,
  base32Encode_0 as base32Encode,
  base32Decode_0 as base32Decode,
  hexEncode as hexEncode,
  hexDecode as hexDecode,
  base64Encode_0 as base64Encode,
  base64Decode_0 as base64Decode,
};
//endregion

//# sourceMappingURL=cardinal-be-sam-ts.mjs.map
export * from './options.mjs'
export * from './utils.mjs'
export * from './sdk.mjs'
export * from './model.mjs'
export * from './api.mjs'
export { RevisionConflictException } from './cardinal-be-sam.mjs'
