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
      1: [ctc0, ctc1, ctc2, ctc1, ctc1],
      3: [ctc0, ctc1, ctc2, ctc0, ctc1, ctc1, ctc1]
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
  
  
  const v182 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v183 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v186 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:47:40:application',
    fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v187 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:57:31:application',
    fs: ['at ./index.rsh:48:54:application call to "makeCommitment" (defined at: reach standard library:56:8:function exp)', 'at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v188 = stdlib.digest(ctc1, [v187, v186]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v183, v188, v182],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:52:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc2, ctc0],
    pay: [v183, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v191, v192, v193], secs: v195, time: v194, didSend: v58, from: v190 } = txn1;
      
      sim_r.txns.push({
        amt: v191,
        kind: 'to',
        tok: undefined
        });
      const v199 = stdlib.add(v194, v193);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v191, v192, v193], secs: v195, time: v194, didSend: v58, from: v190 } = txn1;
  ;
  const v199 = stdlib.add(v194, v193);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ['time', v199],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v190, v191, v192, v193, v199],
      evt_cnt: 0,
      funcNum: 2,
      lct: v194,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v271, time: v270, didSend: v150, from: v269 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v273 = stdlib.addressEq(v190, v269);
        stdlib.assert(v273, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:63:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.txns.push({
          amt: v191,
          kind: 'from',
          to: v190,
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
      tys: [ctc4, ctc0, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v271, time: v270, didSend: v150, from: v269 } = txn3;
    ;
    const v273 = stdlib.addressEq(v190, v269);
    stdlib.assert(v273, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:63:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:41:29:application',
      fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:63:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [v205], secs: v207, time: v206, didSend: v69, from: v204 } = txn2;
    const v209 = stdlib.add(v191, v191);
    ;
    const v211 = stdlib.add(v206, v193);
    const txn3 = await (ctc.sendrecv({
      args: [v190, v191, v192, v204, v205, v209, v211, v187, v186],
      evt_cnt: 2,
      funcNum: 3,
      lct: v206,
      onlyIf: true,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v216, v217], secs: v219, time: v218, didSend: v80, from: v215 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v221 = stdlib.addressEq(v190, v215);
        stdlib.assert(v221, {
          at: './index.rsh:70:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v222 = stdlib.digest(ctc1, [v216, v217]);
        const v223 = stdlib.digestEq(v192, v222);
        stdlib.assert(v223, {
          at: 'reach standard library:62:17:application',
          fs: ['at ./index.rsh:72:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
          msg: null,
          who: 'Alice'
          });
        const v224 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v205);
        const v225 = stdlib.add(v217, v224);
        const v226 = stdlib.mod(v225, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
        const v227 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v228 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
        const v229 = [stdlib.checkedBigNumberify('./index.rsh:77:33:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:77:41:decimal', stdlib.UInt_max, 2)];
        const v230 = [stdlib.checkedBigNumberify('./index.rsh:78:33:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:78:41:decimal', stdlib.UInt_max, 1)];
        const v231 = v228 ? v229 : v230;
        const v232 = [stdlib.checkedBigNumberify('./index.rsh:76:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:76:41:decimal', stdlib.UInt_max, 0)];
        const v233 = v227 ? v232 : v231;
        const v234 = v233[stdlib.checkedBigNumberify('./index.rsh:75:25:array', stdlib.UInt_max, 0)];
        const v235 = v233[stdlib.checkedBigNumberify('./index.rsh:75:25:array', stdlib.UInt_max, 1)];
        const v236 = stdlib.mul(v234, v191);
        sim_r.txns.push({
          amt: v236,
          kind: 'from',
          to: v190,
          tok: undefined
          });
        const v241 = stdlib.mul(v235, v191);
        sim_r.txns.push({
          amt: v241,
          kind: 'from',
          to: v204,
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
      timeoutAt: ['time', v211],
      tys: [ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v254, time: v253, didSend: v124, from: v252 } = txn4;
      ;
      const v256 = stdlib.addressEq(v204, v252);
      stdlib.assert(v256, {
        at: 'reach standard library:206:7:dot',
        fs: ['at ./index.rsh:71:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc3, await interact.informTimeout(), {
        at: './index.rsh:41:29:application',
        fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:71:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v216, v217], secs: v219, time: v218, didSend: v80, from: v215 } = txn3;
      ;
      const v221 = stdlib.addressEq(v190, v215);
      stdlib.assert(v221, {
        at: './index.rsh:70:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v222 = stdlib.digest(ctc1, [v216, v217]);
      const v223 = stdlib.digestEq(v192, v222);
      stdlib.assert(v223, {
        at: 'reach standard library:62:17:application',
        fs: ['at ./index.rsh:72:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
        msg: null,
        who: 'Alice'
        });
      const v224 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v205);
      const v225 = stdlib.add(v217, v224);
      const v226 = stdlib.mod(v225, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v227 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v228 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v229 = [stdlib.checkedBigNumberify('./index.rsh:77:33:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:77:41:decimal', stdlib.UInt_max, 2)];
      const v230 = [stdlib.checkedBigNumberify('./index.rsh:78:33:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:78:41:decimal', stdlib.UInt_max, 1)];
      const v231 = v228 ? v229 : v230;
      const v232 = [stdlib.checkedBigNumberify('./index.rsh:76:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:76:41:decimal', stdlib.UInt_max, 0)];
      const v233 = v227 ? v232 : v231;
      const v234 = v233[stdlib.checkedBigNumberify('./index.rsh:75:25:array', stdlib.UInt_max, 0)];
      const v235 = v233[stdlib.checkedBigNumberify('./index.rsh:75:25:array', stdlib.UInt_max, 1)];
      const v236 = stdlib.mul(v234, v191);
      ;
      const v241 = stdlib.mul(v235, v191);
      ;
      stdlib.protect(ctc3, await interact.seeOutcome(v226), {
        at: './index.rsh:84:24:application',
        fs: ['at ./index.rsh:83:7:application call to [unknown function] (defined at: ./index.rsh:83:25:function exp)'],
        msg: 'seeOutcome',
        who: 'Alice'
        });
      
      return;
      }
    
    }
  
  
  
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
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v191, v192, v193], secs: v195, time: v194, didSend: v58, from: v190 } = txn1;
  ;
  const v199 = stdlib.add(v194, v193);
  stdlib.protect(ctc2, await interact.acceptWager(v191), {
    at: './index.rsh:58:25:application',
    fs: ['at ./index.rsh:57:11:application call to [unknown function] (defined at: ./index.rsh:57:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v203 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:59:48:application',
    fs: ['at ./index.rsh:57:11:application call to [unknown function] (defined at: ./index.rsh:57:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v190, v191, v192, v193, v199, v203],
    evt_cnt: 1,
    funcNum: 1,
    lct: v194,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v191, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v205], secs: v207, time: v206, didSend: v69, from: v204 } = txn2;
      
      const v209 = stdlib.add(v191, v191);
      sim_r.txns.push({
        amt: v191,
        kind: 'to',
        tok: undefined
        });
      const v211 = stdlib.add(v206, v193);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v199],
    tys: [ctc4, ctc0, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v271, time: v270, didSend: v150, from: v269 } = txn3;
    ;
    const v273 = stdlib.addressEq(v190, v269);
    stdlib.assert(v273, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:63:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:41:29:application',
      fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:63:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [v205], secs: v207, time: v206, didSend: v69, from: v204 } = txn2;
    const v209 = stdlib.add(v191, v191);
    ;
    const v211 = stdlib.add(v206, v193);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 3,
      out_tys: [ctc0, ctc0],
      timeoutAt: ['time', v211],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v190, v191, v192, v204, v205, v209, v211],
        evt_cnt: 0,
        funcNum: 4,
        lct: v206,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [], secs: v254, time: v253, didSend: v124, from: v252 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v256 = stdlib.addressEq(v204, v252);
          stdlib.assert(v256, {
            at: 'reach standard library:206:7:dot',
            fs: ['at ./index.rsh:71:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          sim_r.txns.push({
            amt: v209,
            kind: 'from',
            to: v204,
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
        tys: [ctc4, ctc0, ctc1, ctc4, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v254, time: v253, didSend: v124, from: v252 } = txn4;
      ;
      const v256 = stdlib.addressEq(v204, v252);
      stdlib.assert(v256, {
        at: 'reach standard library:206:7:dot',
        fs: ['at ./index.rsh:71:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc2, await interact.informTimeout(), {
        at: './index.rsh:41:29:application',
        fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:27:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:71:51:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v216, v217], secs: v219, time: v218, didSend: v80, from: v215 } = txn3;
      ;
      const v221 = stdlib.addressEq(v190, v215);
      stdlib.assert(v221, {
        at: './index.rsh:70:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v222 = stdlib.digest(ctc3, [v216, v217]);
      const v223 = stdlib.digestEq(v192, v222);
      stdlib.assert(v223, {
        at: 'reach standard library:62:17:application',
        fs: ['at ./index.rsh:72:18:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
        msg: null,
        who: 'Bob'
        });
      const v224 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:18:decimal', stdlib.UInt_max, 4), v205);
      const v225 = stdlib.add(v217, v224);
      const v226 = stdlib.mod(v225, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v227 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v228 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0));
      const v229 = [stdlib.checkedBigNumberify('./index.rsh:77:33:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:77:41:decimal', stdlib.UInt_max, 2)];
      const v230 = [stdlib.checkedBigNumberify('./index.rsh:78:33:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:78:41:decimal', stdlib.UInt_max, 1)];
      const v231 = v228 ? v229 : v230;
      const v232 = [stdlib.checkedBigNumberify('./index.rsh:76:33:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:76:41:decimal', stdlib.UInt_max, 0)];
      const v233 = v227 ? v232 : v231;
      const v234 = v233[stdlib.checkedBigNumberify('./index.rsh:75:25:array', stdlib.UInt_max, 0)];
      const v235 = v233[stdlib.checkedBigNumberify('./index.rsh:75:25:array', stdlib.UInt_max, 1)];
      const v236 = stdlib.mul(v234, v191);
      ;
      const v241 = stdlib.mul(v235, v191);
      ;
      stdlib.protect(ctc2, await interact.seeOutcome(v226), {
        at: './index.rsh:84:24:application',
        fs: ['at ./index.rsh:83:7:application call to [unknown function] (defined at: ./index.rsh:83:25:function exp)'],
        msg: 'seeOutcome',
        who: 'Bob'
        });
      
      return;
      }
    
    }
  
  
  
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
int 80
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
dup
substring 72 80
btoi
store 252
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:52:9:dot"
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
// "./index.rsh:52:9:dot"
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
global Round
load 252
+
store 251
txn Sender
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
int 1
bzero
dig 1
substring 0 88
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
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 250
pop
global Round
load 251
<
assert
load 254
dup
+
store 249
// "CheckPay"
// "./index.rsh:61:7:dot"
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
global Round
load 252
+
store 248
load 255
load 254
itob
concat
load 253
concat
txn Sender
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
int 1
bzero
dig 1
substring 0 127
app_global_put
byte base64(AQ==)
dig 1
substring 127 128
app_global_put
pop
int 3
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
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 251
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:63:51:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:63:51:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 254
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
l5:
// Handler 3
dup
int 3
==
bz l8
pop
// check step
int 3
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
byte base64(AQ==)
app_global_get
concat
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
dup
substring 112 120
btoi
store 250
dup
substring 120 128
btoi
store 249
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
store 248
dup
substring 8 16
btoi
store 247
pop
global Round
load 249
<
assert
// "CheckPay"
// "./index.rsh:70:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:70:9:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "reach standard library:62:17:application"
// "[at ./index.rsh:72:18:application call to \"checkCommitment\" (defined at: reach standard library:61:8:function exp)]"
load 253
load 248
itob
load 247
itob
concat
sha256
==
assert
load 247
int 4
load 251
-
+
int 3
%
store 246
byte base64(AAAAAAAAAAEAAAAAAAAAAQ==)
byte base64(AAAAAAAAAAAAAAAAAAAAAg==)
load 246
int 0
==
select
byte base64(AAAAAAAAAAIAAAAAAAAAAA==)
load 246
int 2
==
select
dup
store 245
substring 0 8
btoi
load 254
*
dup
bz l9
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
l9:
pop
load 245
substring 8 16
btoi
load 254
*
dup
bz l10
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
l10:
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
l11:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l8:
// Handler 4
dup
int 4
==
bz l12
pop
// check step
int 3
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
byte base64(AQ==)
app_global_get
concat
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
dup
substring 112 120
btoi
store 250
dup
substring 120 128
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 249
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:71:51:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:71:51:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 252
txn Sender
==
assert
load 250
dup
bz l13
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
l13:
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
l14:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l12:
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
  stateKeys: 2,
  stateSize: 128,
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
                "name": "v191",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v192",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v193",
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
                "name": "v191",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v192",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v193",
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
                "name": "v205",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
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
                "name": "v216",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v217",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
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
                "name": "v205",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v216",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v217",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200121a3803806200121a833981016040819052620000269162000264565b60008080556040805160208101909152908152604080518351815260208085015180518284015290810151828401529091015160608201527f2b503748d0ce4d38b7205da582fbada74bd25ba4394ec04043207368c5ec170e9060800160405180910390a1602082015151620000a090341460076200015d565b602082015160400151620000b59043620002fb565b81526040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528d8801805151885280518901518752518c015184528c518252600198899055439098558a51808801989098529451878b0152925191860191909152519084015251828401528451808303909301835260c09091019093528051919262000153926002929091019062000187565b505050506200035f565b81620001835760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001959062000322565b90600052602060002090601f016020900481019282620001b9576000855562000204565b82601f10620001d457805160ff191683800117855562000204565b8280016001018555821562000204579182015b8281111562000204578251825591602001919060010190620001e7565b506200021292915062000216565b5090565b5b8082111562000212576000815560010162000217565b604051606081016001600160401b03811182821017156200025e57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200027857600080fd5b604080519081016001600160401b0381118282101715620002a957634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002c357600080fd5b620002cd6200022d565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600082198211156200031d57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200033757607f821691505b602082108114156200035957634e487b7160e01b600052602260045260246000fd5b50919050565b610eab806200036f6000396000f3fe6080604052600436106100595760003560e01c80630d19a5fb146100655780634666ce221461007a578063832307571461008d5780638f2b3760146100b0578063ab53f2c6146100c3578063fd948b86146100e657600080fd5b3661006057005b600080fd5b610078610073366004610bc1565b6100f9565b005b610078610088366004610bc1565b610293565b34801561009957600080fd5b506001546040519081526020015b60405180910390f35b6100786100be366004610be4565b61052d565b3480156100cf57600080fd5b506100d86107fa565b6040516100a7929190610bf6565b6100786100f4366004610bc1565b610897565b6101096003600054146019610a10565b6101238135158061011c57506001548235145b601a610a10565b60008080556002805461013590610c53565b80601f016020809104026020016040519081016040528092919081815260200182805461016190610c53565b80156101ae5780601f10610183576101008083540402835291602001916101ae565b820191906000526020600020905b81548152906001019060200180831161019157829003601f168201915b50505050508060200190518101906101c69190610ca4565b90506101da8160c00151431015601b610a10565b7f64c05390f66d4c96d69b55a2d6f7bb5135997731e2b63f4a719a786bc0579627826040516102099190610d42565b60405180910390a161021d34156017610a10565b6060810151610238906001600160a01b031633146018610a10565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f19350505050158015610279573d6000803e3d6000fd5b506000808055600181905561029090600290610a39565b33ff5b6102a36001600054146009610a10565b6102bd813515806102b657506001548235145b600a610a10565b6000808055600280546102cf90610c53565b80601f01602080910402602001604051908101604052809291908181526020018280546102fb90610c53565b80156103485780601f1061031d57610100808354040283529160200191610348565b820191906000526020600020905b81548152906001019060200180831161032b57829003601f168201915b50505050508060200190518101906103609190610d6c565b905061037f604051806040016040528060008152602001600081525090565b61039082608001514310600b610a10565b6040805184358152602080860135908201527fa08c449ed6ef7da678fe7758c5f03fb415c18ff52ea0281dc0c4f34e76337c9b910160405180910390a160208201516103dc9080610e05565b815260208201516103f09034146008610a10565b60608201516103ff9043610e05565b81602001818152505061045a6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b82516001600160a01b031681526020808401518183015260408085015181840152336060840152858201356080840152835160a08401528382015160c0840152600360005543600155516105029183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0918201519181019190915260e00190565b60405160208183030381529060405260029080519060200190610526929190610a76565b5050505050565b61053d6003600054146014610a10565b6105578135158061055057506001548235145b6015610a10565b60008080556002805461056990610c53565b80601f016020809104026020016040519081016040528092919081815260200182805461059590610c53565b80156105e25780601f106105b7576101008083540402835291602001916105e2565b820191906000526020600020905b8154815290600101906020018083116105c557829003601f168201915b50505050508060200190518101906105fa9190610ca4565b9050610604610afa565b6106158260c0015143106016610a10565b604080518435815260208086013590820152848201358183015290517f50ba70e108cf0b98d2c9380757bd805c1176858d8c80b33125bd6a70c52bfbc79181900360600190a161066734156011610a10565b815161067f906001600160a01b031633146012610a10565b604080516106cb916106a591602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360400151146013610a10565b6003826080015160046106de9190610e1d565b6106ec906040860135610e05565b6106f69190610e34565b815260208082018051600090819052905160029083018190526040840180516001908190529051840152606084018051829052519092015281511461075057805115610746578060400151610756565b8060200151610756565b80606001515b608082018190528251602084015191516001600160a01b03909116916108fc916107809190610e56565b6040518115909202916000818181858888f193505050501580156107a8573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc83602001518360800151602001516107d29190610e56565b6040518115909202916000818181858888f19350505050158015610279573d6000803e3d6000fd5b60006060600054600280805461080f90610c53565b80601f016020809104026020016040519081016040528092919081815260200182805461083b90610c53565b80156108885780601f1061085d57610100808354040283529160200191610888565b820191906000526020600020905b81548152906001019060200180831161086b57829003601f168201915b50505050509050915091509091565b6108a7600160005414600e610a10565b6108c1813515806108ba57506001548235145b600f610a10565b6000808055600280546108d390610c53565b80601f01602080910402602001604051908101604052809291908181526020018280546108ff90610c53565b801561094c5780601f106109215761010080835404028352916020019161094c565b820191906000526020600020905b81548152906001019060200180831161092f57829003601f168201915b50505050508060200190518101906109649190610d6c565b905061097881608001514310156010610a10565b7fe0777bbb0edbebd8a5c254bf54fd955256e9bf9fb0fe4138cd88ac193a101d15826040516109a79190610d42565b60405180910390a16109bb3415600c610a10565b80516109d3906001600160a01b03163314600d610a10565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610279573d6000803e3d6000fd5b81610a355760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b508054610a4590610c53565b6000825580601f10610a55575050565b601f016020900490600052602060002090810190610a739190610b94565b50565b828054610a8290610c53565b90600052602060002090601f016020900481019282610aa45760008555610aea565b82601f10610abd57805160ff1916838001178555610aea565b82800160010185558215610aea579182015b82811115610aea578251825591602001919060010190610acf565b50610af6929150610b94565b5090565b6040518060a0016040528060008152602001610b29604051806040016040528060008152602001600081525090565b8152602001610b4b604051806040016040528060008152602001600081525090565b8152602001610b6d604051806040016040528060008152602001600081525090565b8152602001610b8f604051806040016040528060008152602001600081525090565b905290565b5b80821115610af65760008155600101610b95565b600060408284031215610bbb57600080fd5b50919050565b600060408284031215610bd357600080fd5b610bdd8383610ba9565b9392505050565b600060608284031215610bbb57600080fd5b82815260006020604081840152835180604085015260005b81811015610c2a57858101830151858201606001528201610c0e565b81811115610c3c576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610c6757607f821691505b60208210811415610bbb57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610c9f57600080fd5b919050565b600060e08284031215610cb657600080fd5b60405160e0810181811067ffffffffffffffff82111715610ce757634e487b7160e01b600052604160045260246000fd5b604052610cf383610c88565b81526020830151602082015260408301516040820152610d1560608401610c88565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b81358152604081016020830135801515808214610d5e57600080fd5b806020850152505092915050565b600060a08284031215610d7e57600080fd5b60405160a0810181811067ffffffffffffffff82111715610daf57634e487b7160e01b600052604160045260246000fd5b604052610dbb83610c88565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610e1857610e18610def565b500190565b600082821015610e2f57610e2f610def565b500390565b600082610e5157634e487b7160e01b600052601260045260246000fd5b500690565b6000816000190483118215151615610e7057610e70610def565b50029056fea264697066735822122019a2f9eaa9e9a9996b52fc752e46856882665ddd935cec49a9a501f1c2f273a364736f6c63430008090033`,
  BytecodeLen: 4634,
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
