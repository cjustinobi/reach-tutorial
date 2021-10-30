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
  
  return {
    infos: {
      },
    views: {
      1: []
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
  const ctc1 = stdlib.T_Null;
  
  
  const v50 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:18:50:application',
    fs: ['at ./index.rsh:17:13:application call to [unknown function] (defined at: ./index.rsh:17:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v50],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v52], secs: v54, time: v53, didSend: v24, from: v51 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v52], secs: v54, time: v53, didSend: v24, from: v51 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v60], secs: v62, time: v61, didSend: v34, from: v59 } = txn2;
  ;
  const v64 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:28:33:decimal', stdlib.UInt_max, 4), v60);
  const v65 = stdlib.add(v52, v64);
  const v66 = stdlib.mod(v65, stdlib.checkedBigNumberify('./index.rsh:28:49:decimal', stdlib.UInt_max, 3));
  stdlib.protect(ctc1, await interact.seeOutcome(v66), {
    at: './index.rsh:32:24:application',
    fs: ['at ./index.rsh:31:7:application call to [unknown function] (defined at: ./index.rsh:31:25:function exp)'],
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
  const ctc1 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v52], secs: v54, time: v53, didSend: v24, from: v51 } = txn1;
  ;
  const v58 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:24:48:application',
    fs: ['at ./index.rsh:23:11:application call to [unknown function] (defined at: ./index.rsh:23:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v58],
    evt_cnt: 1,
    funcNum: 1,
    lct: v53,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v60], secs: v62, time: v61, didSend: v34, from: v59 } = txn2;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v64 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:28:33:decimal', stdlib.UInt_max, 4), v60);
      const v65 = stdlib.add(v52, v64);
      const v66 = stdlib.mod(v65, stdlib.checkedBigNumberify('./index.rsh:28:49:decimal', stdlib.UInt_max, 3));
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v60], secs: v62, time: v61, didSend: v34, from: v59 } = txn2;
  ;
  const v64 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:28:33:decimal', stdlib.UInt_max, 4), v60);
  const v65 = stdlib.add(v52, v64);
  const v66 = stdlib.mod(v65, stdlib.checkedBigNumberify('./index.rsh:28:49:decimal', stdlib.UInt_max, 3));
  stdlib.protect(ctc1, await interact.seeOutcome(v66), {
    at: './index.rsh:32:24:application',
    fs: ['at ./index.rsh:31:7:application call to [unknown function] (defined at: ./index.rsh:31:25:function exp)'],
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
int 40
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:20:9:dot"
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
// "./index.rsh:20:9:dot"
// "[]"
byte base64()
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
bz l2
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
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 255
pop
// "CheckPay"
// "./index.rsh:26:7:dot"
// "[]"
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
l3:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l2:
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
  stateKeys: 0,
  stateSize: 0,
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
                "name": "v52",
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
                "name": "v52",
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
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
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
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161064e38038061064e83398101604081905261002291610170565b60008055604080518251815260208084015151908201527fcbe8b01c100825cba852556e4d2f014b5e636208419a4c3d83f7ef63111ab885910160405180910390a1610070341560076100ae565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100a69260029201906100d7565b505050610249565b816100d35760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100e39061020e565b90600052602060002090601f016020900481019282610105576000855561014b565b82601f1061011e57805160ff191683800117855561014b565b8280016001018555821561014b579182015b8281111561014b578251825591602001919060010190610130565b5061015792915061015b565b5090565b5b80821115610157576000815560010161015c565b600081830360408082121561018457600080fd5b80518082016001600160401b0380821183831017156101b357634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101cc57600080fd5b8351945060208501915084821081831117156101f857634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061022257607f821691505b6020821081141561024357634e487b7160e01b600052602260045260246000fd5b50919050565b6103f6806102586000396000f3fe6080604052600436106100385760003560e01c80634666ce22146100445780638323075714610059578063ab53f2c61461007c57600080fd5b3661003f57005b600080fd5b6100576100523660046102ed565b61009f565b005b34801561006557600080fd5b506001546040519081526020015b60405180910390f35b34801561008857600080fd5b506100916101d1565b604051610073929190610305565b6100af600160005414600961026e565b6100c9813515806100c257506001548235145b600a61026e565b6000808055600280546100db90610362565b80601f016020809104026020016040519081016040528092919081815260200182805461010790610362565b80156101545780601f1061012957610100808354040283529160200191610154565b820191906000526020600020905b81548152906001019060200180831161013757829003601f168201915b505050505080602001905181019061016c9190610397565b6040805184358152602080860135908201529192507fa08c449ed6ef7da678fe7758c5f03fb415c18ff52ea0281dc0c4f34e76337c9b910160405180910390a16101b83415600861026e565b600080805560018190556101ce90600290610297565b33ff5b6000606060005460028080546101e690610362565b80601f016020809104026020016040519081016040528092919081815260200182805461021290610362565b801561025f5780601f106102345761010080835404028352916020019161025f565b820191906000526020600020905b81548152906001019060200180831161024257829003601f168201915b50505050509050915091509091565b816102935760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b5080546102a390610362565b6000825580601f106102b3575050565b601f0160209004906000526020600020908101906102d191906102d4565b50565b5b808211156102e957600081556001016102d5565b5090565b6000604082840312156102ff57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103395785810183015185820160600152820161031d565b8181111561034b576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061037657607f821691505b602082108114156102ff57634e487b7160e01b600052602260045260246000fd5b6000602082840312156103a957600080fd5b815180151581146103b957600080fd5b939250505056fea2646970667358221220db3e76d996559a0214c62a93530425826c395cb75d52ebf66a1756b4fe6307c464736f6c63430008090033`,
  BytecodeLen: 1614,
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
