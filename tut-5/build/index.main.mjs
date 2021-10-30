// Automatically generated with Reach 0.1.6
/* eslint-disable */
export const _version = '0.1.6';
export const _backendVersion = 5;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v128 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v131 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:39:40:application',
    fs: ['at ./index.rsh:37:13:application call to [unknown function] (defined at: ./index.rsh:37:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v132 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:57:31:application',
    fs: ['at ./index.rsh:40:54:application call to "makeCommitment" (defined at: reach standard library:56:8:function exp)', 'at ./index.rsh:37:13:application call to [unknown function] (defined at: ./index.rsh:37:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v133 = stdlib.digest(ctc1, [v132, v131]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v128, v133],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:43:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [v128, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v136, v137], secs: v139, time: v138, didSend: v56, from: v135 } = txn1;
      
      sim_r.txns.push({
        amt: v136,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v136, v137], secs: v139, time: v138, didSend: v56, from: v135 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v146], secs: v148, time: v147, didSend: v67, from: v145 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v135, v136, v137, v145, v146, v132, v131],
    evt_cnt: 2,
    funcNum: 2,
    lct: v147,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v154, v155], secs: v157, time: v156, didSend: v78, from: v153 } = txn3;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v159 = stdlib.addressEq(v135, v153);
      stdlib.assert(v159, {
        at: './index.rsh:60:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v160 = stdlib.digest(ctc1, [v154, v155]);
      const v161 = stdlib.digestEq(v137, v160);
      stdlib.assert(v161, {
        at: 'reach standard library:62:17:application',
        fs: ['at ./index.rsh:61:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v162 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v146);
      const v163 = stdlib.add(v155, v162);
      const v164 = stdlib.mod(v163, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v165 = stdlib.eq(v164, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v166 = stdlib.eq(v164, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v167 = [stdlib.checkedBigNumberify('./index.rsh:66:33:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:66:41:decimal', stdlib.UInt_max, 2)];
      const v168 = [stdlib.checkedBigNumberify('./index.rsh:67:33:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:67:41:decimal', stdlib.UInt_max, 1)];
      const v169 = v166 ? v167 : v168;
      const v170 = [stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:65:41:decimal', stdlib.UInt_max, 0)];
      const v171 = v165 ? v170 : v169;
      const v172 = v171[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, 0)];
      const v173 = v171[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, 1)];
      const v174 = stdlib.mul(v172, v136);
      sim_r.txns.push({
        amt: v174,
        kind: 'from',
        to: v135,
        tok: undefined
        });
      const v179 = stdlib.mul(v173, v136);
      sim_r.txns.push({
        amt: v179,
        kind: 'from',
        to: v145,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v154, v155], secs: v157, time: v156, didSend: v78, from: v153 } = txn3;
  ;
  const v159 = stdlib.addressEq(v135, v153);
  stdlib.assert(v159, {
    at: './index.rsh:60:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v160 = stdlib.digest(ctc1, [v154, v155]);
  const v161 = stdlib.digestEq(v137, v160);
  stdlib.assert(v161, {
    at: 'reach standard library:62:17:application',
    fs: ['at ./index.rsh:61:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v162 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v146);
  const v163 = stdlib.add(v155, v162);
  const v164 = stdlib.mod(v163, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
  const v165 = stdlib.eq(v164, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
  const v166 = stdlib.eq(v164, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
  const v167 = [stdlib.checkedBigNumberify('./index.rsh:66:33:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:66:41:decimal', stdlib.UInt_max, 2)];
  const v168 = [stdlib.checkedBigNumberify('./index.rsh:67:33:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:67:41:decimal', stdlib.UInt_max, 1)];
  const v169 = v166 ? v167 : v168;
  const v170 = [stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:65:41:decimal', stdlib.UInt_max, 0)];
  const v171 = v165 ? v170 : v169;
  const v172 = v171[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, 0)];
  const v173 = v171[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, 1)];
  const v174 = stdlib.mul(v172, v136);
  ;
  const v179 = stdlib.mul(v173, v136);
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v164), {
    at: './index.rsh:73:24:application',
    fs: ['at ./index.rsh:72:7:application call to [unknown function] (defined at: ./index.rsh:72:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v136, v137], secs: v139, time: v138, didSend: v56, from: v135 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v136), {
    at: './index.rsh:49:25:application',
    fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v144 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:50:48:application',
    fs: ['at ./index.rsh:48:11:application call to [unknown function] (defined at: ./index.rsh:48:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v135, v136, v137, v144],
    evt_cnt: 1,
    funcNum: 1,
    lct: v138,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v136, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v146], secs: v148, time: v147, didSend: v67, from: v145 } = txn2;
      
      sim_r.txns.push({
        amt: v136,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc4, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v146], secs: v148, time: v147, didSend: v67, from: v145 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v154, v155], secs: v157, time: v156, didSend: v78, from: v153 } = txn3;
  ;
  const v159 = stdlib.addressEq(v135, v153);
  stdlib.assert(v159, {
    at: './index.rsh:60:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v160 = stdlib.digest(ctc3, [v154, v155]);
  const v161 = stdlib.digestEq(v137, v160);
  stdlib.assert(v161, {
    at: 'reach standard library:62:17:application',
    fs: ['at ./index.rsh:61:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v162 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v146);
  const v163 = stdlib.add(v155, v162);
  const v164 = stdlib.mod(v163, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
  const v165 = stdlib.eq(v164, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
  const v166 = stdlib.eq(v164, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
  const v167 = [stdlib.checkedBigNumberify('./index.rsh:66:33:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:66:41:decimal', stdlib.UInt_max, 2)];
  const v168 = [stdlib.checkedBigNumberify('./index.rsh:67:33:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:67:41:decimal', stdlib.UInt_max, 1)];
  const v169 = v166 ? v167 : v168;
  const v170 = [stdlib.checkedBigNumberify('./index.rsh:65:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:65:41:decimal', stdlib.UInt_max, 0)];
  const v171 = v165 ? v170 : v169;
  const v172 = v171[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, 0)];
  const v173 = v171[stdlib.checkedBigNumberify('./index.rsh:64:25:array', stdlib.UInt_max, 1)];
  const v174 = stdlib.mul(v172, v136);
  ;
  const v179 = stdlib.mul(v173, v136);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v164), {
    at: './index.rsh:73:24:application',
    fs: ['at ./index.rsh:72:7:application call to [unknown function] (defined at: ./index.rsh:72:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 8
btoi
store 1
dup
substring 8 16
btoi
store 2
substring 16 48
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
// Handler 0
dup
int 0
==
bz l0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 72
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:43:9:dot"
// "[]"
int 100000
dup
bz l1
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1:
pop
// "CheckPay"
// "./index.rsh:43:9:dot"
// "[]"
load 254
dup
bz l2
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l2:
pop
txn Sender
load 254
itob
concat
load 253
concat
int 1
bzero
dig 1
substring 0 72
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0:
// Handler 1
dup
int 1
==
bz l3
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 252
pop
// "CheckPay"
// "./index.rsh:52:7:dot"
// "[]"
load 254
dup
bz l4
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l4:
pop
load 255
load 254
itob
concat
load 253
concat
txn Sender
concat
load 252
itob
concat
int 1
bzero
dig 1
substring 0 112
app_global_put
pop
int 2
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l3:
// Handler 2
dup
int 2
==
bz l5
pop
// check step
int 2
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 112
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
substring 0 8
btoi
store 250
dup
substring 8 16
btoi
store 249
pop
// "CheckPay"
// "./index.rsh:60:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:60:9:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "reach standard library:62:17:application"
// "[at ./index.rsh:61:18:application call to \"checkCommitment\" (defined at: reach standard library:61:8:function exp)]"
load 253
load 250
itob
load 249
itob
concat
sha256
==
assert
load 249
int 4
load 251
-
+
int 3
%
store 248
byte base64(AAAAAAAAAAEAAAAAAAAAAQ==)
byte base64(AAAAAAAAAAAAAAAAAAAAAg==)
load 248
int 0
==
select
byte base64(AAAAAAAAAAIAAAAAAAAAAA==)
load 248
int 2
==
select
dup
store 247
substring 0 8
btoi
load 254
*
dup
bz l6
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l6:
pop
load 247
substring 8 16
btoi
load 254
*
dup
bz l7
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 252
dig 1
gtxns Receiver
==
assert
l7:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l8:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l5:
int 0
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  escrow: `#pragma version 5
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 5
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v137",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v137",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v146",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v154",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v155",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v146",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v154",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v155",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000d3b38038062000d3b833981016040819052620000269162000228565b60008055604080518251815260208084015180518284015201518183015290517ff6f99043ebaefcd14be52433ca7dc9978aa637aef8ca1601e1816a0abc2f99299181900360600190a160208101515162000085903414600762000121565b620000b3604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252600160008190554390558051808501959095529151848301525160608085019190915281518085039091018152608090930190528151620001189260029201906200014b565b505050620002c5565b81620001475760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001599062000288565b90600052602060002090601f0160209004810192826200017d5760008555620001c8565b82601f106200019857805160ff1916838001178555620001c8565b82800160010185558215620001c8579182015b82811115620001c8578251825591602001919060010190620001ab565b50620001d6929150620001da565b5090565b5b80821115620001d65760008155600101620001db565b604080519081016001600160401b03811182821017156200022257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200023c57600080fd5b62000246620001f1565b835181526040601f19830112156200025d57600080fd5b62000267620001f1565b60208581015182526040909501518582015293810193909352509092915050565b600181811c908216806200029d57607f821691505b60208210811415620002bf57634e487b7160e01b600052602260045260246000fd5b50919050565b610a6680620002d56000396000f3fe6080604052600436106100435760003560e01c80630d28f5911461004f5780634666ce22146100645780638323075714610077578063ab53f2c61461009a57600080fd5b3661004a57005b600080fd5b61006261005d3660046107d9565b6100bd565b005b6100626100723660046107f1565b610393565b34801561008357600080fd5b506001546040519081526020015b60405180910390f35b3480156100a657600080fd5b506100af6105a3565b604051610091929190610803565b6100cd600260005414600e610640565b6100e7813515806100e057506001548235145b600f610640565b6000808055600280546100f990610860565b80601f016020809104026020016040519081016040528092919081815260200182805461012590610860565b80156101725780601f1061014757610100808354040283529160200191610172565b820191906000526020600020905b81548152906001019060200180831161015557829003601f168201915b505050505080602001905181019061018a91906108b1565b9050610194610669565b604080518435815260208086013590820152848201358183015290517f797d3cf24c61ddef167f613bd90cd51f53bcc717a7944bf246f70f607221ac509181900360600190a16101e63415600b610640565b81516101fe906001600160a01b03163314600c610640565b6040805161024a9161022491602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836040015114600d610640565b60038260800151600461025d9190610951565b61026b906040860135610968565b6102759190610980565b81526020808201805160009081905290516002908301819052604084018051600190819052905184015260608401805182905251909201528151146102cf578051156102c55780604001516102d5565b80602001516102d5565b80606001515b608082018190528251602084015191516001600160a01b03909116916108fc916102ff91906109a2565b6040518115909202916000818181858888f19350505050158015610327573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc836020015183608001516020015161035191906109a2565b6040518115909202916000818181858888f19350505050158015610379573d6000803e3d6000fd5b506000808055600181905561039090600290610703565b33ff5b6103a36001600054146009610640565b6103bd813515806103b657506001548235145b600a610640565b6000808055600280546103cf90610860565b80601f01602080910402602001604051908101604052809291908181526020018280546103fb90610860565b80156104485780601f1061041d57610100808354040283529160200191610448565b820191906000526020600020905b81548152906001019060200180831161042b57829003601f168201915b505050505080602001905181019061046091906109c1565b6040805184358152602080860135908201529192507fa08c449ed6ef7da678fe7758c5f03fb415c18ff52ea0281dc0c4f34e76337c9b910160405180910390a16104b1816020015134146008610640565b6104f56040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152336060840152848201356080840152600260005543600155516105799183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b6040516020818303038152906040526002908051906020019061059d929190610740565b50505050565b6000606060005460028080546105b890610860565b80601f01602080910402602001604051908101604052809291908181526020018280546105e490610860565b80156106315780601f1061060657610100808354040283529160200191610631565b820191906000526020600020905b81548152906001019060200180831161061457829003601f168201915b50505050509050915091509091565b816106655760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060a0016040528060008152602001610698604051806040016040528060008152602001600081525090565b81526020016106ba604051806040016040528060008152602001600081525090565b81526020016106dc604051806040016040528060008152602001600081525090565b81526020016106fe604051806040016040528060008152602001600081525090565b905290565b50805461070f90610860565b6000825580601f1061071f575050565b601f01602090049060005260206000209081019061073d91906107c4565b50565b82805461074c90610860565b90600052602060002090601f01602090048101928261076e57600085556107b4565b82601f1061078757805160ff19168380011785556107b4565b828001600101855582156107b4579182015b828111156107b4578251825591602001919060010190610799565b506107c09291506107c4565b5090565b5b808211156107c057600081556001016107c5565b6000606082840312156107eb57600080fd5b50919050565b6000604082840312156107eb57600080fd5b82815260006020604081840152835180604085015260005b818110156108375785810183015185820160600152820161081b565b81811115610849576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061087457607f821691505b602082108114156107eb57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146108ac57600080fd5b919050565b600060a082840312156108c357600080fd5b60405160a0810181811067ffffffffffffffff821117156108f457634e487b7160e01b600052604160045260246000fd5b60405261090083610895565b8152602083015160208201526040830151604082015261092260608401610895565b6060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000828210156109635761096361093b565b500390565b6000821982111561097b5761097b61093b565b500190565b60008261099d57634e487b7160e01b600052601260045260246000fd5b500690565b60008160001904831182151516156109bc576109bc61093b565b500290565b6000606082840312156109d357600080fd5b6040516060810181811067ffffffffffffffff82111715610a0457634e487b7160e01b600052604160045260246000fd5b604052610a1083610895565b81526020830151602082015260408301516040820152809150509291505056fea264697066735822122027621a53861cef62270180635167ccdb44ae59bf100ecacf46c423cd7fc2f47964736f6c63430008090033`,
  BytecodeLen: 3387,
  Which: `oD`,
  version: 4,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
