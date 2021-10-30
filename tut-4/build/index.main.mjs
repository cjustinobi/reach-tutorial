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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1]
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
  
  
  const v71 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v74 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:21:50:application',
    fs: ['at ./index.rsh:19:13:application call to [unknown function] (defined at: ./index.rsh:19:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v71, v74],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:23:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v71, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v76, v77], secs: v79, time: v78, didSend: v27, from: v75 } = txn1;
      
      sim_r.txns.push({
        amt: v76,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v76, v77], secs: v79, time: v78, didSend: v27, from: v75 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v86], secs: v88, time: v87, didSend: v38, from: v85 } = txn2;
  ;
  const v91 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:35:35:decimal', stdlib.UInt_max, 4), v86);
  const v92 = stdlib.add(v77, v91);
  const v93 = stdlib.mod(v92, stdlib.checkedBigNumberify('./index.rsh:35:51:decimal', stdlib.UInt_max, 3));
  const v94 = stdlib.eq(v93, stdlib.checkedBigNumberify('./index.rsh:37:18:decimal', stdlib.UInt_max, 2));
  const v95 = stdlib.eq(v93, stdlib.checkedBigNumberify('./index.rsh:38:18:decimal', stdlib.UInt_max, 0));
  const v96 = [stdlib.checkedBigNumberify('./index.rsh:38:30:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:38:38:decimal', stdlib.UInt_max, 2)];
  const v97 = [stdlib.checkedBigNumberify('./index.rsh:39:30:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:39:38:decimal', stdlib.UInt_max, 1)];
  const v98 = v95 ? v96 : v97;
  const v99 = [stdlib.checkedBigNumberify('./index.rsh:37:30:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:37:38:decimal', stdlib.UInt_max, 0)];
  const v100 = v94 ? v99 : v98;
  const v101 = v100[stdlib.checkedBigNumberify('./index.rsh:36:22:array', stdlib.UInt_max, 0)];
  const v102 = v100[stdlib.checkedBigNumberify('./index.rsh:36:22:array', stdlib.UInt_max, 1)];
  const v103 = stdlib.mul(v101, v76);
  ;
  const v108 = stdlib.mul(v102, v76);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v93), {
    at: './index.rsh:48:24:application',
    fs: ['at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:25:function exp)'],
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
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v76, v77], secs: v79, time: v78, didSend: v27, from: v75 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v76), {
    at: './index.rsh:28:25:application',
    fs: ['at ./index.rsh:27:11:application call to [unknown function] (defined at: ./index.rsh:27:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v84 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:29:48:application',
    fs: ['at ./index.rsh:27:11:application call to [unknown function] (defined at: ./index.rsh:27:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v75, v76, v77, v84],
    evt_cnt: 1,
    funcNum: 1,
    lct: v78,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v76, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v86], secs: v88, time: v87, didSend: v38, from: v85 } = txn2;
      
      sim_r.txns.push({
        amt: v76,
        kind: 'to',
        tok: undefined
        });
      const v91 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:35:35:decimal', stdlib.UInt_max, 4), v86);
      const v92 = stdlib.add(v77, v91);
      const v93 = stdlib.mod(v92, stdlib.checkedBigNumberify('./index.rsh:35:51:decimal', stdlib.UInt_max, 3));
      const v94 = stdlib.eq(v93, stdlib.checkedBigNumberify('./index.rsh:37:18:decimal', stdlib.UInt_max, 2));
      const v95 = stdlib.eq(v93, stdlib.checkedBigNumberify('./index.rsh:38:18:decimal', stdlib.UInt_max, 0));
      const v96 = [stdlib.checkedBigNumberify('./index.rsh:38:30:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:38:38:decimal', stdlib.UInt_max, 2)];
      const v97 = [stdlib.checkedBigNumberify('./index.rsh:39:30:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:39:38:decimal', stdlib.UInt_max, 1)];
      const v98 = v95 ? v96 : v97;
      const v99 = [stdlib.checkedBigNumberify('./index.rsh:37:30:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:37:38:decimal', stdlib.UInt_max, 0)];
      const v100 = v94 ? v99 : v98;
      const v101 = v100[stdlib.checkedBigNumberify('./index.rsh:36:22:array', stdlib.UInt_max, 0)];
      const v102 = v100[stdlib.checkedBigNumberify('./index.rsh:36:22:array', stdlib.UInt_max, 1)];
      const v103 = stdlib.mul(v101, v76);
      sim_r.txns.push({
        amt: v103,
        kind: 'from',
        to: v75,
        tok: undefined
        });
      const v108 = stdlib.mul(v102, v76);
      sim_r.txns.push({
        amt: v108,
        kind: 'from',
        to: v85,
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
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v86], secs: v88, time: v87, didSend: v38, from: v85 } = txn2;
  ;
  const v91 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:35:35:decimal', stdlib.UInt_max, 4), v86);
  const v92 = stdlib.add(v77, v91);
  const v93 = stdlib.mod(v92, stdlib.checkedBigNumberify('./index.rsh:35:51:decimal', stdlib.UInt_max, 3));
  const v94 = stdlib.eq(v93, stdlib.checkedBigNumberify('./index.rsh:37:18:decimal', stdlib.UInt_max, 2));
  const v95 = stdlib.eq(v93, stdlib.checkedBigNumberify('./index.rsh:38:18:decimal', stdlib.UInt_max, 0));
  const v96 = [stdlib.checkedBigNumberify('./index.rsh:38:30:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:38:38:decimal', stdlib.UInt_max, 2)];
  const v97 = [stdlib.checkedBigNumberify('./index.rsh:39:30:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:39:38:decimal', stdlib.UInt_max, 1)];
  const v98 = v95 ? v96 : v97;
  const v99 = [stdlib.checkedBigNumberify('./index.rsh:37:30:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:37:38:decimal', stdlib.UInt_max, 0)];
  const v100 = v94 ? v99 : v98;
  const v101 = v100[stdlib.checkedBigNumberify('./index.rsh:36:22:array', stdlib.UInt_max, 0)];
  const v102 = v100[stdlib.checkedBigNumberify('./index.rsh:36:22:array', stdlib.UInt_max, 1)];
  const v103 = stdlib.mul(v101, v76);
  ;
  const v108 = stdlib.mul(v102, v76);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v93), {
    at: './index.rsh:48:24:application',
    fs: ['at ./index.rsh:47:7:application call to [unknown function] (defined at: ./index.rsh:47:25:function exp)'],
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
int 48
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
substring 40 48
btoi
store 253
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:23:9:dot"
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
// "./index.rsh:23:9:dot"
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
itob
concat
int 1
bzero
dig 1
substring 0 48
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
substring 40 48
btoi
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
// "./index.rsh:31:7:dot"
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
load 253
int 4
load 252
-
+
int 3
%
store 251
byte base64(AAAAAAAAAAEAAAAAAAAAAQ==)
byte base64(AAAAAAAAAAAAAAAAAAAAAg==)
load 251
int 0
==
select
byte base64(AAAAAAAAAAIAAAAAAAAAAA==)
load 251
int 2
==
select
dup
store 250
substring 0 8
btoi
load 254
*
dup
bz l5
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
l5:
pop
load 250
substring 8 16
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
txn Sender
dig 1
gtxns Receiver
==
assert
l6:
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
l7:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l3:
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
  stateSize: 48,
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
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v77",
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
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v77",
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
                "name": "v86",
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
                "name": "v86",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516109533803806109538339810160408190526100229161020f565b60008055604080518251815260208084015180518284015201518183015290517ff6f99043ebaefcd14be52433ca7dc9978aa637aef8ca1601e1816a0abc2f99299181900360600190a160208101515161007f9034146007610117565b6100ac604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b3380825260208381018051518285019081529051820151604080860191825260016000819055439055805180850195909552915184830152516060808501919091528151808503909101815260809093019052815161010f926002920190610140565b5050506102a4565b8161013c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461014c90610269565b90600052602060002090601f01602090048101928261016e57600085556101b4565b82601f1061018757805160ff19168380011785556101b4565b828001600101855582156101b4579182015b828111156101b4578251825591602001919060010190610199565b506101c09291506101c4565b5090565b5b808211156101c057600081556001016101c5565b604080519081016001600160401b038111828210171561020957634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561022257600080fd5b61022a6101d9565b835181526040601f198301121561024057600080fd5b6102486101d9565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061027d57607f821691505b6020821081141561029e57634e487b7160e01b600052602260045260246000fd5b50919050565b6106a0806102b36000396000f3fe6080604052600436106100385760003560e01c80634666ce22146100445780638323075714610059578063ab53f2c61461007c57600080fd5b3661003f57005b600080fd5b6100576100523660046104be565b61009f565b005b34801561006557600080fd5b506001546040519081526020015b60405180910390f35b34801561008857600080fd5b50610091610308565b6040516100739291906104d6565b6100af60016000541460096103a5565b6100c9813515806100c257506001548235145b600a6103a5565b6000808055600280546100db90610533565b80601f016020809104026020016040519081016040528092919081815260200182805461010790610533565b80156101545780601f1061012957610100808354040283529160200191610154565b820191906000526020600020905b81548152906001019060200180831161013757829003601f168201915b505050505080602001905181019061016c9190610568565b90506101766103ce565b6040805184358152602080860135908201527fa08c449ed6ef7da678fe7758c5f03fb415c18ff52ea0281dc0c4f34e76337c9b910160405180910390a16101c48260200151341460086103a5565b60036101d5602085013560046105fa565b83604001516101e49190610611565b6101ee9190610629565b81526020808201805160009081905290516002908301819052604084018051600190819052905184015260608401805182905251909201528151146102485780511561023e57806040015161024e565b806020015161024e565b80606001515b608082018190528251602084015191516001600160a01b03909116916108fc91610278919061064b565b6040518115909202916000818181858888f193505050501580156102a0573d6000803e3d6000fd5b50336001600160a01b03166108fc83602001518360800151602001516102c6919061064b565b6040518115909202916000818181858888f193505050501580156102ee573d6000803e3d6000fd5b506000808055600181905561030590600290610468565b33ff5b60006060600054600280805461031d90610533565b80601f016020809104026020016040519081016040528092919081815260200182805461034990610533565b80156103965780601f1061036b57610100808354040283529160200191610396565b820191906000526020600020905b81548152906001019060200180831161037957829003601f168201915b50505050509050915091509091565b816103ca5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060a00160405280600081526020016103fd604051806040016040528060008152602001600081525090565b815260200161041f604051806040016040528060008152602001600081525090565b8152602001610441604051806040016040528060008152602001600081525090565b8152602001610463604051806040016040528060008152602001600081525090565b905290565b50805461047490610533565b6000825580601f10610484575050565b601f0160209004906000526020600020908101906104a291906104a5565b50565b5b808211156104ba57600081556001016104a6565b5090565b6000604082840312156104d057600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561050a578581018301518582016060015282016104ee565b8181111561051c576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061054757607f821691505b602082108114156104d057634e487b7160e01b600052602260045260246000fd5b60006060828403121561057a57600080fd5b6040516060810181811067ffffffffffffffff821117156105ab57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146105c557600080fd5b8152602083810151908201526040928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561060c5761060c6105e4565b500390565b60008219821115610624576106246105e4565b500190565b60008261064657634e487b7160e01b600052601260045260246000fd5b500690565b6000816000190483118215151615610665576106656105e4565b50029056fea26469706673582212202dac7ddc3a0a839f1329252433a7d88d92af9b75c345f3bbd4f88042fbb7cbe464736f6c63430008090033`,
  BytecodeLen: 2387,
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
