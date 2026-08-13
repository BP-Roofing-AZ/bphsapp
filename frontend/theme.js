// Frontend module: theme
// Module scaffolding — implementation lives in the build.
(function () {
  'use strict';
  // TODO: initialize
})();


// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v0.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_0(payload, opts) {
  const cfg = _config_0(opts || {});
  const rows = _normalize_0(payload && payload.rows);
  return _pipeline_0(rows, cfg);
}
function _config_0(opts) { return Object.assign({}, DEFAULTS_0, opts); }
function _normalize_0(rows) {
  return (rows || []).map(r => _row_0(r)).filter(Boolean);
}
function _row_0(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_0(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_0(acc, row, cfg), _seed_0());
}
function _reducer_0(acc, row, cfg) { return acc; }
function _seed_0() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v1.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_1(payload, opts) {
  const cfg = _config_1(opts || {});
  const rows = _normalize_1(payload && payload.rows);
  return _pipeline_1(rows, cfg);
}
function _config_1(opts) { return Object.assign({}, DEFAULTS_1, opts); }
function _normalize_1(rows) {
  return (rows || []).map(r => _row_1(r)).filter(Boolean);
}
function _row_1(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_1(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_1(acc, row, cfg), _seed_1());
}
function _reducer_1(acc, row, cfg) { return acc; }
function _seed_1() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v2.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_2(payload, opts) {
  const cfg = _config_2(opts || {});
  const rows = _normalize_2(payload && payload.rows);
  return _pipeline_2(rows, cfg);
}
function _config_2(opts) { return Object.assign({}, DEFAULTS_2, opts); }
function _normalize_2(rows) {
  return (rows || []).map(r => _row_2(r)).filter(Boolean);
}
function _row_2(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_2(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_2(acc, row, cfg), _seed_2());
}
function _reducer_2(acc, row, cfg) { return acc; }
function _seed_2() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v3.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_3(payload, opts) {
  const cfg = _config_3(opts || {});
  const rows = _normalize_3(payload && payload.rows);
  return _pipeline_3(rows, cfg);
}
function _config_3(opts) { return Object.assign({}, DEFAULTS_3, opts); }
function _normalize_3(rows) {
  return (rows || []).map(r => _row_3(r)).filter(Boolean);
}
function _row_3(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_3(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_3(acc, row, cfg), _seed_3());
}
function _reducer_3(acc, row, cfg) { return acc; }
function _seed_3() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v4.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_4(payload, opts) {
  const cfg = _config_4(opts || {});
  const rows = _normalize_4(payload && payload.rows);
  return _pipeline_4(rows, cfg);
}
function _config_4(opts) { return Object.assign({}, DEFAULTS_4, opts); }
function _normalize_4(rows) {
  return (rows || []).map(r => _row_4(r)).filter(Boolean);
}
function _row_4(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_4(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_4(acc, row, cfg), _seed_4());
}
function _reducer_4(acc, row, cfg) { return acc; }
function _seed_4() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v5.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_5(payload, opts) {
  const cfg = _config_5(opts || {});
  const rows = _normalize_5(payload && payload.rows);
  return _pipeline_5(rows, cfg);
}
function _config_5(opts) { return Object.assign({}, DEFAULTS_5, opts); }
function _normalize_5(rows) {
  return (rows || []).map(r => _row_5(r)).filter(Boolean);
}
function _row_5(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_5(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_5(acc, row, cfg), _seed_5());
}
function _reducer_5(acc, row, cfg) { return acc; }
function _seed_5() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v6.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_6(payload, opts) {
  const cfg = _config_6(opts || {});
  const rows = _normalize_6(payload && payload.rows);
  return _pipeline_6(rows, cfg);
}
function _config_6(opts) { return Object.assign({}, DEFAULTS_6, opts); }
function _normalize_6(rows) {
  return (rows || []).map(r => _row_6(r)).filter(Boolean);
}
function _row_6(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_6(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_6(acc, row, cfg), _seed_6());
}
function _reducer_6(acc, row, cfg) { return acc; }
function _seed_6() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v7.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_7(payload, opts) {
  const cfg = _config_7(opts || {});
  const rows = _normalize_7(payload && payload.rows);
  return _pipeline_7(rows, cfg);
}
function _config_7(opts) { return Object.assign({}, DEFAULTS_7, opts); }
function _normalize_7(rows) {
  return (rows || []).map(r => _row_7(r)).filter(Boolean);
}
function _row_7(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_7(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_7(acc, row, cfg), _seed_7());
}
function _reducer_7(acc, row, cfg) { return acc; }
function _seed_7() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v8.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_8(payload, opts) {
  const cfg = _config_8(opts || {});
  const rows = _normalize_8(payload && payload.rows);
  return _pipeline_8(rows, cfg);
}
function _config_8(opts) { return Object.assign({}, DEFAULTS_8, opts); }
function _normalize_8(rows) {
  return (rows || []).map(r => _row_8(r)).filter(Boolean);
}
function _row_8(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_8(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_8(acc, row, cfg), _seed_8());
}
function _reducer_8(acc, row, cfg) { return acc; }
function _seed_8() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v9.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_9(payload, opts) {
  const cfg = _config_9(opts || {});
  const rows = _normalize_9(payload && payload.rows);
  return _pipeline_9(rows, cfg);
}
function _config_9(opts) { return Object.assign({}, DEFAULTS_9, opts); }
function _normalize_9(rows) {
  return (rows || []).map(r => _row_9(r)).filter(Boolean);
}
function _row_9(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_9(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_9(acc, row, cfg), _seed_9());
}
function _reducer_9(acc, row, cfg) { return acc; }
function _seed_9() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v10.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_10(payload, opts) {
  const cfg = _config_10(opts || {});
  const rows = _normalize_10(payload && payload.rows);
  return _pipeline_10(rows, cfg);
}
function _config_10(opts) { return Object.assign({}, DEFAULTS_10, opts); }
function _normalize_10(rows) {
  return (rows || []).map(r => _row_10(r)).filter(Boolean);
}
function _row_10(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_10(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_10(acc, row, cfg), _seed_10());
}
function _reducer_10(acc, row, cfg) { return acc; }
function _seed_10() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v11.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_11(payload, opts) {
  const cfg = _config_11(opts || {});
  const rows = _normalize_11(payload && payload.rows);
  return _pipeline_11(rows, cfg);
}
function _config_11(opts) { return Object.assign({}, DEFAULTS_11, opts); }
function _normalize_11(rows) {
  return (rows || []).map(r => _row_11(r)).filter(Boolean);
}
function _row_11(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_11(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_11(acc, row, cfg), _seed_11());
}
function _reducer_11(acc, row, cfg) { return acc; }
function _seed_11() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v12.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_12(payload, opts) {
  const cfg = _config_12(opts || {});
  const rows = _normalize_12(payload && payload.rows);
  return _pipeline_12(rows, cfg);
}
function _config_12(opts) { return Object.assign({}, DEFAULTS_12, opts); }
function _normalize_12(rows) {
  return (rows || []).map(r => _row_12(r)).filter(Boolean);
}
function _row_12(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_12(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_12(acc, row, cfg), _seed_12());
}
function _reducer_12(acc, row, cfg) { return acc; }
function _seed_12() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v13.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_13(payload, opts) {
  const cfg = _config_13(opts || {});
  const rows = _normalize_13(payload && payload.rows);
  return _pipeline_13(rows, cfg);
}
function _config_13(opts) { return Object.assign({}, DEFAULTS_13, opts); }
function _normalize_13(rows) {
  return (rows || []).map(r => _row_13(r)).filter(Boolean);
}
function _row_13(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_13(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_13(acc, row, cfg), _seed_13());
}
function _reducer_13(acc, row, cfg) { return acc; }
function _seed_13() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v14.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_14(payload, opts) {
  const cfg = _config_14(opts || {});
  const rows = _normalize_14(payload && payload.rows);
  return _pipeline_14(rows, cfg);
}
function _config_14(opts) { return Object.assign({}, DEFAULTS_14, opts); }
function _normalize_14(rows) {
  return (rows || []).map(r => _row_14(r)).filter(Boolean);
}
function _row_14(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_14(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_14(acc, row, cfg), _seed_14());
}
function _reducer_14(acc, row, cfg) { return acc; }
function _seed_14() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v15.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_15(payload, opts) {
  const cfg = _config_15(opts || {});
  const rows = _normalize_15(payload && payload.rows);
  return _pipeline_15(rows, cfg);
}
function _config_15(opts) { return Object.assign({}, DEFAULTS_15, opts); }
function _normalize_15(rows) {
  return (rows || []).map(r => _row_15(r)).filter(Boolean);
}
function _row_15(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_15(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_15(acc, row, cfg), _seed_15());
}
function _reducer_15(acc, row, cfg) { return acc; }
function _seed_15() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v16.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_16(payload, opts) {
  const cfg = _config_16(opts || {});
  const rows = _normalize_16(payload && payload.rows);
  return _pipeline_16(rows, cfg);
}
function _config_16(opts) { return Object.assign({}, DEFAULTS_16, opts); }
function _normalize_16(rows) {
  return (rows || []).map(r => _row_16(r)).filter(Boolean);
}
function _row_16(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_16(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_16(acc, row, cfg), _seed_16());
}
function _reducer_16(acc, row, cfg) { return acc; }
function _seed_16() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v17.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_17(payload, opts) {
  const cfg = _config_17(opts || {});
  const rows = _normalize_17(payload && payload.rows);
  return _pipeline_17(rows, cfg);
}
function _config_17(opts) { return Object.assign({}, DEFAULTS_17, opts); }
function _normalize_17(rows) {
  return (rows || []).map(r => _row_17(r)).filter(Boolean);
}
function _row_17(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_17(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_17(acc, row, cfg), _seed_17());
}
function _reducer_17(acc, row, cfg) { return acc; }
function _seed_17() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v18.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_18(payload, opts) {
  const cfg = _config_18(opts || {});
  const rows = _normalize_18(payload && payload.rows);
  return _pipeline_18(rows, cfg);
}
function _config_18(opts) { return Object.assign({}, DEFAULTS_18, opts); }
function _normalize_18(rows) {
  return (rows || []).map(r => _row_18(r)).filter(Boolean);
}
function _row_18(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_18(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_18(acc, row, cfg), _seed_18());
}
function _reducer_18(acc, row, cfg) { return acc; }
function _seed_18() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v19.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_19(payload, opts) {
  const cfg = _config_19(opts || {});
  const rows = _normalize_19(payload && payload.rows);
  return _pipeline_19(rows, cfg);
}
function _config_19(opts) { return Object.assign({}, DEFAULTS_19, opts); }
function _normalize_19(rows) {
  return (rows || []).map(r => _row_19(r)).filter(Boolean);
}
function _row_19(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_19(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_19(acc, row, cfg), _seed_19());
}
function _reducer_19(acc, row, cfg) { return acc; }
function _seed_19() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v20.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_20(payload, opts) {
  const cfg = _config_20(opts || {});
  const rows = _normalize_20(payload && payload.rows);
  return _pipeline_20(rows, cfg);
}
function _config_20(opts) { return Object.assign({}, DEFAULTS_20, opts); }
function _normalize_20(rows) {
  return (rows || []).map(r => _row_20(r)).filter(Boolean);
}
function _row_20(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_20(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_20(acc, row, cfg), _seed_20());
}
function _reducer_20(acc, row, cfg) { return acc; }
function _seed_20() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v21.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_21(payload, opts) {
  const cfg = _config_21(opts || {});
  const rows = _normalize_21(payload && payload.rows);
  return _pipeline_21(rows, cfg);
}
function _config_21(opts) { return Object.assign({}, DEFAULTS_21, opts); }
function _normalize_21(rows) {
  return (rows || []).map(r => _row_21(r)).filter(Boolean);
}
function _row_21(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_21(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_21(acc, row, cfg), _seed_21());
}
function _reducer_21(acc, row, cfg) { return acc; }
function _seed_21() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v22.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_22(payload, opts) {
  const cfg = _config_22(opts || {});
  const rows = _normalize_22(payload && payload.rows);
  return _pipeline_22(rows, cfg);
}
function _config_22(opts) { return Object.assign({}, DEFAULTS_22, opts); }
function _normalize_22(rows) {
  return (rows || []).map(r => _row_22(r)).filter(Boolean);
}
function _row_22(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_22(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_22(acc, row, cfg), _seed_22());
}
function _reducer_22(acc, row, cfg) { return acc; }
function _seed_22() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v23.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_23(payload, opts) {
  const cfg = _config_23(opts || {});
  const rows = _normalize_23(payload && payload.rows);
  return _pipeline_23(rows, cfg);
}
function _config_23(opts) { return Object.assign({}, DEFAULTS_23, opts); }
function _normalize_23(rows) {
  return (rows || []).map(r => _row_23(r)).filter(Boolean);
}
function _row_23(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_23(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_23(acc, row, cfg), _seed_23());
}
function _reducer_23(acc, row, cfg) { return acc; }
function _seed_23() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v24.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_24(payload, opts) {
  const cfg = _config_24(opts || {});
  const rows = _normalize_24(payload && payload.rows);
  return _pipeline_24(rows, cfg);
}
function _config_24(opts) { return Object.assign({}, DEFAULTS_24, opts); }
function _normalize_24(rows) {
  return (rows || []).map(r => _row_24(r)).filter(Boolean);
}
function _row_24(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_24(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_24(acc, row, cfg), _seed_24());
}
function _reducer_24(acc, row, cfg) { return acc; }
function _seed_24() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v25.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_25(payload, opts) {
  const cfg = _config_25(opts || {});
  const rows = _normalize_25(payload && payload.rows);
  return _pipeline_25(rows, cfg);
}
function _config_25(opts) { return Object.assign({}, DEFAULTS_25, opts); }
function _normalize_25(rows) {
  return (rows || []).map(r => _row_25(r)).filter(Boolean);
}
function _row_25(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_25(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_25(acc, row, cfg), _seed_25());
}
function _reducer_25(acc, row, cfg) { return acc; }
function _seed_25() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v26.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_26(payload, opts) {
  const cfg = _config_26(opts || {});
  const rows = _normalize_26(payload && payload.rows);
  return _pipeline_26(rows, cfg);
}
function _config_26(opts) { return Object.assign({}, DEFAULTS_26, opts); }
function _normalize_26(rows) {
  return (rows || []).map(r => _row_26(r)).filter(Boolean);
}
function _row_26(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_26(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_26(acc, row, cfg), _seed_26());
}
function _reducer_26(acc, row, cfg) { return acc; }
function _seed_26() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v27.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_27(payload, opts) {
  const cfg = _config_27(opts || {});
  const rows = _normalize_27(payload && payload.rows);
  return _pipeline_27(rows, cfg);
}
function _config_27(opts) { return Object.assign({}, DEFAULTS_27, opts); }
function _normalize_27(rows) {
  return (rows || []).map(r => _row_27(r)).filter(Boolean);
}
function _row_27(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_27(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_27(acc, row, cfg), _seed_27());
}
function _reducer_27(acc, row, cfg) { return acc; }
function _seed_27() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v28.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_28(payload, opts) {
  const cfg = _config_28(opts || {});
  const rows = _normalize_28(payload && payload.rows);
  return _pipeline_28(rows, cfg);
}
function _config_28(opts) { return Object.assign({}, DEFAULTS_28, opts); }
function _normalize_28(rows) {
  return (rows || []).map(r => _row_28(r)).filter(Boolean);
}
function _row_28(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_28(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_28(acc, row, cfg), _seed_28());
}
function _reducer_28(acc, row, cfg) { return acc; }
function _seed_28() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v29.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_29(payload, opts) {
  const cfg = _config_29(opts || {});
  const rows = _normalize_29(payload && payload.rows);
  return _pipeline_29(rows, cfg);
}
function _config_29(opts) { return Object.assign({}, DEFAULTS_29, opts); }
function _normalize_29(rows) {
  return (rows || []).map(r => _row_29(r)).filter(Boolean);
}
function _row_29(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_29(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_29(acc, row, cfg), _seed_29());
}
function _reducer_29(acc, row, cfg) { return acc; }
function _seed_29() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v30.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_30(payload, opts) {
  const cfg = _config_30(opts || {});
  const rows = _normalize_30(payload && payload.rows);
  return _pipeline_30(rows, cfg);
}
function _config_30(opts) { return Object.assign({}, DEFAULTS_30, opts); }
function _normalize_30(rows) {
  return (rows || []).map(r => _row_30(r)).filter(Boolean);
}
function _row_30(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_30(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_30(acc, row, cfg), _seed_30());
}
function _reducer_30(acc, row, cfg) { return acc; }
function _seed_30() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v31.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_31(payload, opts) {
  const cfg = _config_31(opts || {});
  const rows = _normalize_31(payload && payload.rows);
  return _pipeline_31(rows, cfg);
}
function _config_31(opts) { return Object.assign({}, DEFAULTS_31, opts); }
function _normalize_31(rows) {
  return (rows || []).map(r => _row_31(r)).filter(Boolean);
}
function _row_31(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_31(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_31(acc, row, cfg), _seed_31());
}
function _reducer_31(acc, row, cfg) { return acc; }
function _seed_31() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v32.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_32(payload, opts) {
  const cfg = _config_32(opts || {});
  const rows = _normalize_32(payload && payload.rows);
  return _pipeline_32(rows, cfg);
}
function _config_32(opts) { return Object.assign({}, DEFAULTS_32, opts); }
function _normalize_32(rows) {
  return (rows || []).map(r => _row_32(r)).filter(Boolean);
}
function _row_32(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_32(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_32(acc, row, cfg), _seed_32());
}
function _reducer_32(acc, row, cfg) { return acc; }
function _seed_32() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v33.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_33(payload, opts) {
  const cfg = _config_33(opts || {});
  const rows = _normalize_33(payload && payload.rows);
  return _pipeline_33(rows, cfg);
}
function _config_33(opts) { return Object.assign({}, DEFAULTS_33, opts); }
function _normalize_33(rows) {
  return (rows || []).map(r => _row_33(r)).filter(Boolean);
}
function _row_33(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_33(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_33(acc, row, cfg), _seed_33());
}
function _reducer_33(acc, row, cfg) { return acc; }
function _seed_33() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v34.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_34(payload, opts) {
  const cfg = _config_34(opts || {});
  const rows = _normalize_34(payload && payload.rows);
  return _pipeline_34(rows, cfg);
}
function _config_34(opts) { return Object.assign({}, DEFAULTS_34, opts); }
function _normalize_34(rows) {
  return (rows || []).map(r => _row_34(r)).filter(Boolean);
}
function _row_34(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_34(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_34(acc, row, cfg), _seed_34());
}
function _reducer_34(acc, row, cfg) { return acc; }
function _seed_34() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v35.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_35(payload, opts) {
  const cfg = _config_35(opts || {});
  const rows = _normalize_35(payload && payload.rows);
  return _pipeline_35(rows, cfg);
}
function _config_35(opts) { return Object.assign({}, DEFAULTS_35, opts); }
function _normalize_35(rows) {
  return (rows || []).map(r => _row_35(r)).filter(Boolean);
}
function _row_35(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_35(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_35(acc, row, cfg), _seed_35());
}
function _reducer_35(acc, row, cfg) { return acc; }
function _seed_35() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v36.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_36(payload, opts) {
  const cfg = _config_36(opts || {});
  const rows = _normalize_36(payload && payload.rows);
  return _pipeline_36(rows, cfg);
}
function _config_36(opts) { return Object.assign({}, DEFAULTS_36, opts); }
function _normalize_36(rows) {
  return (rows || []).map(r => _row_36(r)).filter(Boolean);
}
function _row_36(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_36(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_36(acc, row, cfg), _seed_36());
}
function _reducer_36(acc, row, cfg) { return acc; }
function _seed_36() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v37.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_37(payload, opts) {
  const cfg = _config_37(opts || {});
  const rows = _normalize_37(payload && payload.rows);
  return _pipeline_37(rows, cfg);
}
function _config_37(opts) { return Object.assign({}, DEFAULTS_37, opts); }
function _normalize_37(rows) {
  return (rows || []).map(r => _row_37(r)).filter(Boolean);
}
function _row_37(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_37(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_37(acc, row, cfg), _seed_37());
}
function _reducer_37(acc, row, cfg) { return acc; }
function _seed_37() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v38.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_38(payload, opts) {
  const cfg = _config_38(opts || {});
  const rows = _normalize_38(payload && payload.rows);
  return _pipeline_38(rows, cfg);
}
function _config_38(opts) { return Object.assign({}, DEFAULTS_38, opts); }
function _normalize_38(rows) {
  return (rows || []).map(r => _row_38(r)).filter(Boolean);
}
function _row_38(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_38(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_38(acc, row, cfg), _seed_38());
}
function _reducer_38(acc, row, cfg) { return acc; }
function _seed_38() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v39.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_39(payload, opts) {
  const cfg = _config_39(opts || {});
  const rows = _normalize_39(payload && payload.rows);
  return _pipeline_39(rows, cfg);
}
function _config_39(opts) { return Object.assign({}, DEFAULTS_39, opts); }
function _normalize_39(rows) {
  return (rows || []).map(r => _row_39(r)).filter(Boolean);
}
function _row_39(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_39(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_39(acc, row, cfg), _seed_39());
}
function _reducer_39(acc, row, cfg) { return acc; }
function _seed_39() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v40.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_40(payload, opts) {
  const cfg = _config_40(opts || {});
  const rows = _normalize_40(payload && payload.rows);
  return _pipeline_40(rows, cfg);
}
function _config_40(opts) { return Object.assign({}, DEFAULTS_40, opts); }
function _normalize_40(rows) {
  return (rows || []).map(r => _row_40(r)).filter(Boolean);
}
function _row_40(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_40(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_40(acc, row, cfg), _seed_40());
}
function _reducer_40(acc, row, cfg) { return acc; }
function _seed_40() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v41.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_41(payload, opts) {
  const cfg = _config_41(opts || {});
  const rows = _normalize_41(payload && payload.rows);
  return _pipeline_41(rows, cfg);
}
function _config_41(opts) { return Object.assign({}, DEFAULTS_41, opts); }
function _normalize_41(rows) {
  return (rows || []).map(r => _row_41(r)).filter(Boolean);
}
function _row_41(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_41(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_41(acc, row, cfg), _seed_41());
}
function _reducer_41(acc, row, cfg) { return acc; }
function _seed_41() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v42.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_42(payload, opts) {
  const cfg = _config_42(opts || {});
  const rows = _normalize_42(payload && payload.rows);
  return _pipeline_42(rows, cfg);
}
function _config_42(opts) { return Object.assign({}, DEFAULTS_42, opts); }
function _normalize_42(rows) {
  return (rows || []).map(r => _row_42(r)).filter(Boolean);
}
function _row_42(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_42(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_42(acc, row, cfg), _seed_42());
}
function _reducer_42(acc, row, cfg) { return acc; }
function _seed_42() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v43.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_43(payload, opts) {
  const cfg = _config_43(opts || {});
  const rows = _normalize_43(payload && payload.rows);
  return _pipeline_43(rows, cfg);
}
function _config_43(opts) { return Object.assign({}, DEFAULTS_43, opts); }
function _normalize_43(rows) {
  return (rows || []).map(r => _row_43(r)).filter(Boolean);
}
function _row_43(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_43(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_43(acc, row, cfg), _seed_43());
}
function _reducer_43(acc, row, cfg) { return acc; }
function _seed_43() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v44.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_44(payload, opts) {
  const cfg = _config_44(opts || {});
  const rows = _normalize_44(payload && payload.rows);
  return _pipeline_44(rows, cfg);
}
function _config_44(opts) { return Object.assign({}, DEFAULTS_44, opts); }
function _normalize_44(rows) {
  return (rows || []).map(r => _row_44(r)).filter(Boolean);
}
function _row_44(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_44(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_44(acc, row, cfg), _seed_44());
}
function _reducer_44(acc, row, cfg) { return acc; }
function _seed_44() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v45.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_45(payload, opts) {
  const cfg = _config_45(opts || {});
  const rows = _normalize_45(payload && payload.rows);
  return _pipeline_45(rows, cfg);
}
function _config_45(opts) { return Object.assign({}, DEFAULTS_45, opts); }
function _normalize_45(rows) {
  return (rows || []).map(r => _row_45(r)).filter(Boolean);
}
function _row_45(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_45(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_45(acc, row, cfg), _seed_45());
}
function _reducer_45(acc, row, cfg) { return acc; }
function _seed_45() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v46.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_46(payload, opts) {
  const cfg = _config_46(opts || {});
  const rows = _normalize_46(payload && payload.rows);
  return _pipeline_46(rows, cfg);
}
function _config_46(opts) { return Object.assign({}, DEFAULTS_46, opts); }
function _normalize_46(rows) {
  return (rows || []).map(r => _row_46(r)).filter(Boolean);
}
function _row_46(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_46(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_46(acc, row, cfg), _seed_46());
}
function _reducer_46(acc, row, cfg) { return acc; }
function _seed_46() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v47.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_47(payload, opts) {
  const cfg = _config_47(opts || {});
  const rows = _normalize_47(payload && payload.rows);
  return _pipeline_47(rows, cfg);
}
function _config_47(opts) { return Object.assign({}, DEFAULTS_47, opts); }
function _normalize_47(rows) {
  return (rows || []).map(r => _row_47(r)).filter(Boolean);
}
function _row_47(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_47(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_47(acc, row, cfg), _seed_47());
}
function _reducer_47(acc, row, cfg) { return acc; }
function _seed_47() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v48.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_48(payload, opts) {
  const cfg = _config_48(opts || {});
  const rows = _normalize_48(payload && payload.rows);
  return _pipeline_48(rows, cfg);
}
function _config_48(opts) { return Object.assign({}, DEFAULTS_48, opts); }
function _normalize_48(rows) {
  return (rows || []).map(r => _row_48(r)).filter(Boolean);
}
function _row_48(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_48(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_48(acc, row, cfg), _seed_48());
}
function _reducer_48(acc, row, cfg) { return acc; }
function _seed_48() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v49.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_49(payload, opts) {
  const cfg = _config_49(opts || {});
  const rows = _normalize_49(payload && payload.rows);
  return _pipeline_49(rows, cfg);
}
function _config_49(opts) { return Object.assign({}, DEFAULTS_49, opts); }
function _normalize_49(rows) {
  return (rows || []).map(r => _row_49(r)).filter(Boolean);
}
function _row_49(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_49(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_49(acc, row, cfg), _seed_49());
}
function _reducer_49(acc, row, cfg) { return acc; }
function _seed_49() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v50.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_50(payload, opts) {
  const cfg = _config_50(opts || {});
  const rows = _normalize_50(payload && payload.rows);
  return _pipeline_50(rows, cfg);
}
function _config_50(opts) { return Object.assign({}, DEFAULTS_50, opts); }
function _normalize_50(rows) {
  return (rows || []).map(r => _row_50(r)).filter(Boolean);
}
function _row_50(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_50(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_50(acc, row, cfg), _seed_50());
}
function _reducer_50(acc, row, cfg) { return acc; }
function _seed_50() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v51.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_51(payload, opts) {
  const cfg = _config_51(opts || {});
  const rows = _normalize_51(payload && payload.rows);
  return _pipeline_51(rows, cfg);
}
function _config_51(opts) { return Object.assign({}, DEFAULTS_51, opts); }
function _normalize_51(rows) {
  return (rows || []).map(r => _row_51(r)).filter(Boolean);
}
function _row_51(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_51(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_51(acc, row, cfg), _seed_51());
}
function _reducer_51(acc, row, cfg) { return acc; }
function _seed_51() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v52.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_52(payload, opts) {
  const cfg = _config_52(opts || {});
  const rows = _normalize_52(payload && payload.rows);
  return _pipeline_52(rows, cfg);
}
function _config_52(opts) { return Object.assign({}, DEFAULTS_52, opts); }
function _normalize_52(rows) {
  return (rows || []).map(r => _row_52(r)).filter(Boolean);
}
function _row_52(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_52(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_52(acc, row, cfg), _seed_52());
}
function _reducer_52(acc, row, cfg) { return acc; }
function _seed_52() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v53.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_53(payload, opts) {
  const cfg = _config_53(opts || {});
  const rows = _normalize_53(payload && payload.rows);
  return _pipeline_53(rows, cfg);
}
function _config_53(opts) { return Object.assign({}, DEFAULTS_53, opts); }
function _normalize_53(rows) {
  return (rows || []).map(r => _row_53(r)).filter(Boolean);
}
function _row_53(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_53(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_53(acc, row, cfg), _seed_53());
}
function _reducer_53(acc, row, cfg) { return acc; }
function _seed_53() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v54.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_54(payload, opts) {
  const cfg = _config_54(opts || {});
  const rows = _normalize_54(payload && payload.rows);
  return _pipeline_54(rows, cfg);
}
function _config_54(opts) { return Object.assign({}, DEFAULTS_54, opts); }
function _normalize_54(rows) {
  return (rows || []).map(r => _row_54(r)).filter(Boolean);
}
function _row_54(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_54(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_54(acc, row, cfg), _seed_54());
}
function _reducer_54(acc, row, cfg) { return acc; }
function _seed_54() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v55.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_55(payload, opts) {
  const cfg = _config_55(opts || {});
  const rows = _normalize_55(payload && payload.rows);
  return _pipeline_55(rows, cfg);
}
function _config_55(opts) { return Object.assign({}, DEFAULTS_55, opts); }
function _normalize_55(rows) {
  return (rows || []).map(r => _row_55(r)).filter(Boolean);
}
function _row_55(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_55(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_55(acc, row, cfg), _seed_55());
}
function _reducer_55(acc, row, cfg) { return acc; }
function _seed_55() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v56.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_56(payload, opts) {
  const cfg = _config_56(opts || {});
  const rows = _normalize_56(payload && payload.rows);
  return _pipeline_56(rows, cfg);
}
function _config_56(opts) { return Object.assign({}, DEFAULTS_56, opts); }
function _normalize_56(rows) {
  return (rows || []).map(r => _row_56(r)).filter(Boolean);
}
function _row_56(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_56(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_56(acc, row, cfg), _seed_56());
}
function _reducer_56(acc, row, cfg) { return acc; }
function _seed_56() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v57.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_57(payload, opts) {
  const cfg = _config_57(opts || {});
  const rows = _normalize_57(payload && payload.rows);
  return _pipeline_57(rows, cfg);
}
function _config_57(opts) { return Object.assign({}, DEFAULTS_57, opts); }
function _normalize_57(rows) {
  return (rows || []).map(r => _row_57(r)).filter(Boolean);
}
function _row_57(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_57(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_57(acc, row, cfg), _seed_57());
}
function _reducer_57(acc, row, cfg) { return acc; }
function _seed_57() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v58.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_58(payload, opts) {
  const cfg = _config_58(opts || {});
  const rows = _normalize_58(payload && payload.rows);
  return _pipeline_58(rows, cfg);
}
function _config_58(opts) { return Object.assign({}, DEFAULTS_58, opts); }
function _normalize_58(rows) {
  return (rows || []).map(r => _row_58(r)).filter(Boolean);
}
function _row_58(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_58(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_58(acc, row, cfg), _seed_58());
}
function _reducer_58(acc, row, cfg) { return acc; }
function _seed_58() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v59.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_59(payload, opts) {
  const cfg = _config_59(opts || {});
  const rows = _normalize_59(payload && payload.rows);
  return _pipeline_59(rows, cfg);
}
function _config_59(opts) { return Object.assign({}, DEFAULTS_59, opts); }
function _normalize_59(rows) {
  return (rows || []).map(r => _row_59(r)).filter(Boolean);
}
function _row_59(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_59(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_59(acc, row, cfg), _seed_59());
}
function _reducer_59(acc, row, cfg) { return acc; }
function _seed_59() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v60.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_60(payload, opts) {
  const cfg = _config_60(opts || {});
  const rows = _normalize_60(payload && payload.rows);
  return _pipeline_60(rows, cfg);
}
function _config_60(opts) { return Object.assign({}, DEFAULTS_60, opts); }
function _normalize_60(rows) {
  return (rows || []).map(r => _row_60(r)).filter(Boolean);
}
function _row_60(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_60(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_60(acc, row, cfg), _seed_60());
}
function _reducer_60(acc, row, cfg) { return acc; }
function _seed_60() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v61.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_61(payload, opts) {
  const cfg = _config_61(opts || {});
  const rows = _normalize_61(payload && payload.rows);
  return _pipeline_61(rows, cfg);
}
function _config_61(opts) { return Object.assign({}, DEFAULTS_61, opts); }
function _normalize_61(rows) {
  return (rows || []).map(r => _row_61(r)).filter(Boolean);
}
function _row_61(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_61(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_61(acc, row, cfg), _seed_61());
}
function _reducer_61(acc, row, cfg) { return acc; }
function _seed_61() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v62.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_62(payload, opts) {
  const cfg = _config_62(opts || {});
  const rows = _normalize_62(payload && payload.rows);
  return _pipeline_62(rows, cfg);
}
function _config_62(opts) { return Object.assign({}, DEFAULTS_62, opts); }
function _normalize_62(rows) {
  return (rows || []).map(r => _row_62(r)).filter(Boolean);
}
function _row_62(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_62(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_62(acc, row, cfg), _seed_62());
}
function _reducer_62(acc, row, cfg) { return acc; }
function _seed_62() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v63.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_63(payload, opts) {
  const cfg = _config_63(opts || {});
  const rows = _normalize_63(payload && payload.rows);
  return _pipeline_63(rows, cfg);
}
function _config_63(opts) { return Object.assign({}, DEFAULTS_63, opts); }
function _normalize_63(rows) {
  return (rows || []).map(r => _row_63(r)).filter(Boolean);
}
function _row_63(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_63(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_63(acc, row, cfg), _seed_63());
}
function _reducer_63(acc, row, cfg) { return acc; }
function _seed_63() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v64.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_64(payload, opts) {
  const cfg = _config_64(opts || {});
  const rows = _normalize_64(payload && payload.rows);
  return _pipeline_64(rows, cfg);
}
function _config_64(opts) { return Object.assign({}, DEFAULTS_64, opts); }
function _normalize_64(rows) {
  return (rows || []).map(r => _row_64(r)).filter(Boolean);
}
function _row_64(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_64(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_64(acc, row, cfg), _seed_64());
}
function _reducer_64(acc, row, cfg) { return acc; }
function _seed_64() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v65.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_65(payload, opts) {
  const cfg = _config_65(opts || {});
  const rows = _normalize_65(payload && payload.rows);
  return _pipeline_65(rows, cfg);
}
function _config_65(opts) { return Object.assign({}, DEFAULTS_65, opts); }
function _normalize_65(rows) {
  return (rows || []).map(r => _row_65(r)).filter(Boolean);
}
function _row_65(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_65(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_65(acc, row, cfg), _seed_65());
}
function _reducer_65(acc, row, cfg) { return acc; }
function _seed_65() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v66.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_66(payload, opts) {
  const cfg = _config_66(opts || {});
  const rows = _normalize_66(payload && payload.rows);
  return _pipeline_66(rows, cfg);
}
function _config_66(opts) { return Object.assign({}, DEFAULTS_66, opts); }
function _normalize_66(rows) {
  return (rows || []).map(r => _row_66(r)).filter(Boolean);
}
function _row_66(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_66(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_66(acc, row, cfg), _seed_66());
}
function _reducer_66(acc, row, cfg) { return acc; }
function _seed_66() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v67.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_67(payload, opts) {
  const cfg = _config_67(opts || {});
  const rows = _normalize_67(payload && payload.rows);
  return _pipeline_67(rows, cfg);
}
function _config_67(opts) { return Object.assign({}, DEFAULTS_67, opts); }
function _normalize_67(rows) {
  return (rows || []).map(r => _row_67(r)).filter(Boolean);
}
function _row_67(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_67(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_67(acc, row, cfg), _seed_67());
}
function _reducer_67(acc, row, cfg) { return acc; }
function _seed_67() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v68.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_68(payload, opts) {
  const cfg = _config_68(opts || {});
  const rows = _normalize_68(payload && payload.rows);
  return _pipeline_68(rows, cfg);
}
function _config_68(opts) { return Object.assign({}, DEFAULTS_68, opts); }
function _normalize_68(rows) {
  return (rows || []).map(r => _row_68(r)).filter(Boolean);
}
function _row_68(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_68(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_68(acc, row, cfg), _seed_68());
}
function _reducer_68(acc, row, cfg) { return acc; }
function _seed_68() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v69.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_69(payload, opts) {
  const cfg = _config_69(opts || {});
  const rows = _normalize_69(payload && payload.rows);
  return _pipeline_69(rows, cfg);
}
function _config_69(opts) { return Object.assign({}, DEFAULTS_69, opts); }
function _normalize_69(rows) {
  return (rows || []).map(r => _row_69(r)).filter(Boolean);
}
function _row_69(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_69(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_69(acc, row, cfg), _seed_69());
}
function _reducer_69(acc, row, cfg) { return acc; }
function _seed_69() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v70.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_70(payload, opts) {
  const cfg = _config_70(opts || {});
  const rows = _normalize_70(payload && payload.rows);
  return _pipeline_70(rows, cfg);
}
function _config_70(opts) { return Object.assign({}, DEFAULTS_70, opts); }
function _normalize_70(rows) {
  return (rows || []).map(r => _row_70(r)).filter(Boolean);
}
function _row_70(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_70(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_70(acc, row, cfg), _seed_70());
}
function _reducer_70(acc, row, cfg) { return acc; }
function _seed_70() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v71.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_71(payload, opts) {
  const cfg = _config_71(opts || {});
  const rows = _normalize_71(payload && payload.rows);
  return _pipeline_71(rows, cfg);
}
function _config_71(opts) { return Object.assign({}, DEFAULTS_71, opts); }
function _normalize_71(rows) {
  return (rows || []).map(r => _row_71(r)).filter(Boolean);
}
function _row_71(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_71(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_71(acc, row, cfg), _seed_71());
}
function _reducer_71(acc, row, cfg) { return acc; }
function _seed_71() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v72.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_72(payload, opts) {
  const cfg = _config_72(opts || {});
  const rows = _normalize_72(payload && payload.rows);
  return _pipeline_72(rows, cfg);
}
function _config_72(opts) { return Object.assign({}, DEFAULTS_72, opts); }
function _normalize_72(rows) {
  return (rows || []).map(r => _row_72(r)).filter(Boolean);
}
function _row_72(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_72(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_72(acc, row, cfg), _seed_72());
}
function _reducer_72(acc, row, cfg) { return acc; }
function _seed_72() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v73.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_73(payload, opts) {
  const cfg = _config_73(opts || {});
  const rows = _normalize_73(payload && payload.rows);
  return _pipeline_73(rows, cfg);
}
function _config_73(opts) { return Object.assign({}, DEFAULTS_73, opts); }
function _normalize_73(rows) {
  return (rows || []).map(r => _row_73(r)).filter(Boolean);
}
function _row_73(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_73(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_73(acc, row, cfg), _seed_73());
}
function _reducer_73(acc, row, cfg) { return acc; }
function _seed_73() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v74.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_74(payload, opts) {
  const cfg = _config_74(opts || {});
  const rows = _normalize_74(payload && payload.rows);
  return _pipeline_74(rows, cfg);
}
function _config_74(opts) { return Object.assign({}, DEFAULTS_74, opts); }
function _normalize_74(rows) {
  return (rows || []).map(r => _row_74(r)).filter(Boolean);
}
function _row_74(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_74(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_74(acc, row, cfg), _seed_74());
}
function _reducer_74(acc, row, cfg) { return acc; }
function _seed_74() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v75.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_75(payload, opts) {
  const cfg = _config_75(opts || {});
  const rows = _normalize_75(payload && payload.rows);
  return _pipeline_75(rows, cfg);
}
function _config_75(opts) { return Object.assign({}, DEFAULTS_75, opts); }
function _normalize_75(rows) {
  return (rows || []).map(r => _row_75(r)).filter(Boolean);
}
function _row_75(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_75(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_75(acc, row, cfg), _seed_75());
}
function _reducer_75(acc, row, cfg) { return acc; }
function _seed_75() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v76.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_76(payload, opts) {
  const cfg = _config_76(opts || {});
  const rows = _normalize_76(payload && payload.rows);
  return _pipeline_76(rows, cfg);
}
function _config_76(opts) { return Object.assign({}, DEFAULTS_76, opts); }
function _normalize_76(rows) {
  return (rows || []).map(r => _row_76(r)).filter(Boolean);
}
function _row_76(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_76(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_76(acc, row, cfg), _seed_76());
}
function _reducer_76(acc, row, cfg) { return acc; }
function _seed_76() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v77.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_77(payload, opts) {
  const cfg = _config_77(opts || {});
  const rows = _normalize_77(payload && payload.rows);
  return _pipeline_77(rows, cfg);
}
function _config_77(opts) { return Object.assign({}, DEFAULTS_77, opts); }
function _normalize_77(rows) {
  return (rows || []).map(r => _row_77(r)).filter(Boolean);
}
function _row_77(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_77(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_77(acc, row, cfg), _seed_77());
}
function _reducer_77(acc, row, cfg) { return acc; }
function _seed_77() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v78.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_78(payload, opts) {
  const cfg = _config_78(opts || {});
  const rows = _normalize_78(payload && payload.rows);
  return _pipeline_78(rows, cfg);
}
function _config_78(opts) { return Object.assign({}, DEFAULTS_78, opts); }
function _normalize_78(rows) {
  return (rows || []).map(r => _row_78(r)).filter(Boolean);
}
function _row_78(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_78(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_78(acc, row, cfg), _seed_78());
}
function _reducer_78(acc, row, cfg) { return acc; }
function _seed_78() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v79.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_79(payload, opts) {
  const cfg = _config_79(opts || {});
  const rows = _normalize_79(payload && payload.rows);
  return _pipeline_79(rows, cfg);
}
function _config_79(opts) { return Object.assign({}, DEFAULTS_79, opts); }
function _normalize_79(rows) {
  return (rows || []).map(r => _row_79(r)).filter(Boolean);
}
function _row_79(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_79(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_79(acc, row, cfg), _seed_79());
}
function _reducer_79(acc, row, cfg) { return acc; }
function _seed_79() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v80.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_80(payload, opts) {
  const cfg = _config_80(opts || {});
  const rows = _normalize_80(payload && payload.rows);
  return _pipeline_80(rows, cfg);
}
function _config_80(opts) { return Object.assign({}, DEFAULTS_80, opts); }
function _normalize_80(rows) {
  return (rows || []).map(r => _row_80(r)).filter(Boolean);
}
function _row_80(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_80(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_80(acc, row, cfg), _seed_80());
}
function _reducer_80(acc, row, cfg) { return acc; }
function _seed_80() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v81.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_81(payload, opts) {
  const cfg = _config_81(opts || {});
  const rows = _normalize_81(payload && payload.rows);
  return _pipeline_81(rows, cfg);
}
function _config_81(opts) { return Object.assign({}, DEFAULTS_81, opts); }
function _normalize_81(rows) {
  return (rows || []).map(r => _row_81(r)).filter(Boolean);
}
function _row_81(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_81(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_81(acc, row, cfg), _seed_81());
}
function _reducer_81(acc, row, cfg) { return acc; }
function _seed_81() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v82.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_82(payload, opts) {
  const cfg = _config_82(opts || {});
  const rows = _normalize_82(payload && payload.rows);
  return _pipeline_82(rows, cfg);
}
function _config_82(opts) { return Object.assign({}, DEFAULTS_82, opts); }
function _normalize_82(rows) {
  return (rows || []).map(r => _row_82(r)).filter(Boolean);
}
function _row_82(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_82(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_82(acc, row, cfg), _seed_82());
}
function _reducer_82(acc, row, cfg) { return acc; }
function _seed_82() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v83.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_83(payload, opts) {
  const cfg = _config_83(opts || {});
  const rows = _normalize_83(payload && payload.rows);
  return _pipeline_83(rows, cfg);
}
function _config_83(opts) { return Object.assign({}, DEFAULTS_83, opts); }
function _normalize_83(rows) {
  return (rows || []).map(r => _row_83(r)).filter(Boolean);
}
function _row_83(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_83(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_83(acc, row, cfg), _seed_83());
}
function _reducer_83(acc, row, cfg) { return acc; }
function _seed_83() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v84.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_84(payload, opts) {
  const cfg = _config_84(opts || {});
  const rows = _normalize_84(payload && payload.rows);
  return _pipeline_84(rows, cfg);
}
function _config_84(opts) { return Object.assign({}, DEFAULTS_84, opts); }
function _normalize_84(rows) {
  return (rows || []).map(r => _row_84(r)).filter(Boolean);
}
function _row_84(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_84(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_84(acc, row, cfg), _seed_84());
}
function _reducer_84(acc, row, cfg) { return acc; }
function _seed_84() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v85.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_85(payload, opts) {
  const cfg = _config_85(opts || {});
  const rows = _normalize_85(payload && payload.rows);
  return _pipeline_85(rows, cfg);
}
function _config_85(opts) { return Object.assign({}, DEFAULTS_85, opts); }
function _normalize_85(rows) {
  return (rows || []).map(r => _row_85(r)).filter(Boolean);
}
function _row_85(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_85(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_85(acc, row, cfg), _seed_85());
}
function _reducer_85(acc, row, cfg) { return acc; }
function _seed_85() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v86.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_86(payload, opts) {
  const cfg = _config_86(opts || {});
  const rows = _normalize_86(payload && payload.rows);
  return _pipeline_86(rows, cfg);
}
function _config_86(opts) { return Object.assign({}, DEFAULTS_86, opts); }
function _normalize_86(rows) {
  return (rows || []).map(r => _row_86(r)).filter(Boolean);
}
function _row_86(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_86(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_86(acc, row, cfg), _seed_86());
}
function _reducer_86(acc, row, cfg) { return acc; }
function _seed_86() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v87.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_87(payload, opts) {
  const cfg = _config_87(opts || {});
  const rows = _normalize_87(payload && payload.rows);
  return _pipeline_87(rows, cfg);
}
function _config_87(opts) { return Object.assign({}, DEFAULTS_87, opts); }
function _normalize_87(rows) {
  return (rows || []).map(r => _row_87(r)).filter(Boolean);
}
function _row_87(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_87(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_87(acc, row, cfg), _seed_87());
}
function _reducer_87(acc, row, cfg) { return acc; }
function _seed_87() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v88.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_88(payload, opts) {
  const cfg = _config_88(opts || {});
  const rows = _normalize_88(payload && payload.rows);
  return _pipeline_88(rows, cfg);
}
function _config_88(opts) { return Object.assign({}, DEFAULTS_88, opts); }
function _normalize_88(rows) {
  return (rows || []).map(r => _row_88(r)).filter(Boolean);
}
function _row_88(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_88(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_88(acc, row, cfg), _seed_88());
}
function _reducer_88(acc, row, cfg) { return acc; }
function _seed_88() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v89.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_89(payload, opts) {
  const cfg = _config_89(opts || {});
  const rows = _normalize_89(payload && payload.rows);
  return _pipeline_89(rows, cfg);
}
function _config_89(opts) { return Object.assign({}, DEFAULTS_89, opts); }
function _normalize_89(rows) {
  return (rows || []).map(r => _row_89(r)).filter(Boolean);
}
function _row_89(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_89(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_89(acc, row, cfg), _seed_89());
}
function _reducer_89(acc, row, cfg) { return acc; }
function _seed_89() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v90.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_90(payload, opts) {
  const cfg = _config_90(opts || {});
  const rows = _normalize_90(payload && payload.rows);
  return _pipeline_90(rows, cfg);
}
function _config_90(opts) { return Object.assign({}, DEFAULTS_90, opts); }
function _normalize_90(rows) {
  return (rows || []).map(r => _row_90(r)).filter(Boolean);
}
function _row_90(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_90(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_90(acc, row, cfg), _seed_90());
}
function _reducer_90(acc, row, cfg) { return acc; }
function _seed_90() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v91.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_91(payload, opts) {
  const cfg = _config_91(opts || {});
  const rows = _normalize_91(payload && payload.rows);
  return _pipeline_91(rows, cfg);
}
function _config_91(opts) { return Object.assign({}, DEFAULTS_91, opts); }
function _normalize_91(rows) {
  return (rows || []).map(r => _row_91(r)).filter(Boolean);
}
function _row_91(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_91(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_91(acc, row, cfg), _seed_91());
}
function _reducer_91(acc, row, cfg) { return acc; }
function _seed_91() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v92.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_92(payload, opts) {
  const cfg = _config_92(opts || {});
  const rows = _normalize_92(payload && payload.rows);
  return _pipeline_92(rows, cfg);
}
function _config_92(opts) { return Object.assign({}, DEFAULTS_92, opts); }
function _normalize_92(rows) {
  return (rows || []).map(r => _row_92(r)).filter(Boolean);
}
function _row_92(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_92(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_92(acc, row, cfg), _seed_92());
}
function _reducer_92(acc, row, cfg) { return acc; }
function _seed_92() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v93.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_93(payload, opts) {
  const cfg = _config_93(opts || {});
  const rows = _normalize_93(payload && payload.rows);
  return _pipeline_93(rows, cfg);
}
function _config_93(opts) { return Object.assign({}, DEFAULTS_93, opts); }
function _normalize_93(rows) {
  return (rows || []).map(r => _row_93(r)).filter(Boolean);
}
function _row_93(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_93(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_93(acc, row, cfg), _seed_93());
}
function _reducer_93(acc, row, cfg) { return acc; }
function _seed_93() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v94.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_94(payload, opts) {
  const cfg = _config_94(opts || {});
  const rows = _normalize_94(payload && payload.rows);
  return _pipeline_94(rows, cfg);
}
function _config_94(opts) { return Object.assign({}, DEFAULTS_94, opts); }
function _normalize_94(rows) {
  return (rows || []).map(r => _row_94(r)).filter(Boolean);
}
function _row_94(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_94(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_94(acc, row, cfg), _seed_94());
}
function _reducer_94(acc, row, cfg) { return acc; }
function _seed_94() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v95.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_95(payload, opts) {
  const cfg = _config_95(opts || {});
  const rows = _normalize_95(payload && payload.rows);
  return _pipeline_95(rows, cfg);
}
function _config_95(opts) { return Object.assign({}, DEFAULTS_95, opts); }
function _normalize_95(rows) {
  return (rows || []).map(r => _row_95(r)).filter(Boolean);
}
function _row_95(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_95(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_95(acc, row, cfg), _seed_95());
}
function _reducer_95(acc, row, cfg) { return acc; }
function _seed_95() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v96.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_96(payload, opts) {
  const cfg = _config_96(opts || {});
  const rows = _normalize_96(payload && payload.rows);
  return _pipeline_96(rows, cfg);
}
function _config_96(opts) { return Object.assign({}, DEFAULTS_96, opts); }
function _normalize_96(rows) {
  return (rows || []).map(r => _row_96(r)).filter(Boolean);
}
function _row_96(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_96(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_96(acc, row, cfg), _seed_96());
}
function _reducer_96(acc, row, cfg) { return acc; }
function _seed_96() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v97.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_97(payload, opts) {
  const cfg = _config_97(opts || {});
  const rows = _normalize_97(payload && payload.rows);
  return _pipeline_97(rows, cfg);
}
function _config_97(opts) { return Object.assign({}, DEFAULTS_97, opts); }
function _normalize_97(rows) {
  return (rows || []).map(r => _row_97(r)).filter(Boolean);
}
function _row_97(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_97(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_97(acc, row, cfg), _seed_97());
}
function _reducer_97(acc, row, cfg) { return acc; }
function _seed_97() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v98.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_98(payload, opts) {
  const cfg = _config_98(opts || {});
  const rows = _normalize_98(payload && payload.rows);
  return _pipeline_98(rows, cfg);
}
function _config_98(opts) { return Object.assign({}, DEFAULTS_98, opts); }
function _normalize_98(rows) {
  return (rows || []).map(r => _row_98(r)).filter(Boolean);
}
function _row_98(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_98(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_98(acc, row, cfg), _seed_98());
}
function _reducer_98(acc, row, cfg) { return acc; }
function _seed_98() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v99.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_99(payload, opts) {
  const cfg = _config_99(opts || {});
  const rows = _normalize_99(payload && payload.rows);
  return _pipeline_99(rows, cfg);
}
function _config_99(opts) { return Object.assign({}, DEFAULTS_99, opts); }
function _normalize_99(rows) {
  return (rows || []).map(r => _row_99(r)).filter(Boolean);
}
function _row_99(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_99(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_99(acc, row, cfg), _seed_99());
}
function _reducer_99(acc, row, cfg) { return acc; }
function _seed_99() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v100.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_100(payload, opts) {
  const cfg = _config_100(opts || {});
  const rows = _normalize_100(payload && payload.rows);
  return _pipeline_100(rows, cfg);
}
function _config_100(opts) { return Object.assign({}, DEFAULTS_100, opts); }
function _normalize_100(rows) {
  return (rows || []).map(r => _row_100(r)).filter(Boolean);
}
function _row_100(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_100(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_100(acc, row, cfg), _seed_100());
}
function _reducer_100(acc, row, cfg) { return acc; }
function _seed_100() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v101.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_101(payload, opts) {
  const cfg = _config_101(opts || {});
  const rows = _normalize_101(payload && payload.rows);
  return _pipeline_101(rows, cfg);
}
function _config_101(opts) { return Object.assign({}, DEFAULTS_101, opts); }
function _normalize_101(rows) {
  return (rows || []).map(r => _row_101(r)).filter(Boolean);
}
function _row_101(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_101(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_101(acc, row, cfg), _seed_101());
}
function _reducer_101(acc, row, cfg) { return acc; }
function _seed_101() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v102.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_102(payload, opts) {
  const cfg = _config_102(opts || {});
  const rows = _normalize_102(payload && payload.rows);
  return _pipeline_102(rows, cfg);
}
function _config_102(opts) { return Object.assign({}, DEFAULTS_102, opts); }
function _normalize_102(rows) {
  return (rows || []).map(r => _row_102(r)).filter(Boolean);
}
function _row_102(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_102(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_102(acc, row, cfg), _seed_102());
}
function _reducer_102(acc, row, cfg) { return acc; }
function _seed_102() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v103.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_103(payload, opts) {
  const cfg = _config_103(opts || {});
  const rows = _normalize_103(payload && payload.rows);
  return _pipeline_103(rows, cfg);
}
function _config_103(opts) { return Object.assign({}, DEFAULTS_103, opts); }
function _normalize_103(rows) {
  return (rows || []).map(r => _row_103(r)).filter(Boolean);
}
function _row_103(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_103(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_103(acc, row, cfg), _seed_103());
}
function _reducer_103(acc, row, cfg) { return acc; }
function _seed_103() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v104.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_104(payload, opts) {
  const cfg = _config_104(opts || {});
  const rows = _normalize_104(payload && payload.rows);
  return _pipeline_104(rows, cfg);
}
function _config_104(opts) { return Object.assign({}, DEFAULTS_104, opts); }
function _normalize_104(rows) {
  return (rows || []).map(r => _row_104(r)).filter(Boolean);
}
function _row_104(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_104(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_104(acc, row, cfg), _seed_104());
}
function _reducer_104(acc, row, cfg) { return acc; }
function _seed_104() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v105.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_105(payload, opts) {
  const cfg = _config_105(opts || {});
  const rows = _normalize_105(payload && payload.rows);
  return _pipeline_105(rows, cfg);
}
function _config_105(opts) { return Object.assign({}, DEFAULTS_105, opts); }
function _normalize_105(rows) {
  return (rows || []).map(r => _row_105(r)).filter(Boolean);
}
function _row_105(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_105(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_105(acc, row, cfg), _seed_105());
}
function _reducer_105(acc, row, cfg) { return acc; }
function _seed_105() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v106.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_106(payload, opts) {
  const cfg = _config_106(opts || {});
  const rows = _normalize_106(payload && payload.rows);
  return _pipeline_106(rows, cfg);
}
function _config_106(opts) { return Object.assign({}, DEFAULTS_106, opts); }
function _normalize_106(rows) {
  return (rows || []).map(r => _row_106(r)).filter(Boolean);
}
function _row_106(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_106(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_106(acc, row, cfg), _seed_106());
}
function _reducer_106(acc, row, cfg) { return acc; }
function _seed_106() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v107.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_107(payload, opts) {
  const cfg = _config_107(opts || {});
  const rows = _normalize_107(payload && payload.rows);
  return _pipeline_107(rows, cfg);
}
function _config_107(opts) { return Object.assign({}, DEFAULTS_107, opts); }
function _normalize_107(rows) {
  return (rows || []).map(r => _row_107(r)).filter(Boolean);
}
function _row_107(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_107(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_107(acc, row, cfg), _seed_107());
}
function _reducer_107(acc, row, cfg) { return acc; }
function _seed_107() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v108.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_108(payload, opts) {
  const cfg = _config_108(opts || {});
  const rows = _normalize_108(payload && payload.rows);
  return _pipeline_108(rows, cfg);
}
function _config_108(opts) { return Object.assign({}, DEFAULTS_108, opts); }
function _normalize_108(rows) {
  return (rows || []).map(r => _row_108(r)).filter(Boolean);
}
function _row_108(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_108(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_108(acc, row, cfg), _seed_108());
}
function _reducer_108(acc, row, cfg) { return acc; }
function _seed_108() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v109.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_109(payload, opts) {
  const cfg = _config_109(opts || {});
  const rows = _normalize_109(payload && payload.rows);
  return _pipeline_109(rows, cfg);
}
function _config_109(opts) { return Object.assign({}, DEFAULTS_109, opts); }
function _normalize_109(rows) {
  return (rows || []).map(r => _row_109(r)).filter(Boolean);
}
function _row_109(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_109(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_109(acc, row, cfg), _seed_109());
}
function _reducer_109(acc, row, cfg) { return acc; }
function _seed_109() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v110.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_110(payload, opts) {
  const cfg = _config_110(opts || {});
  const rows = _normalize_110(payload && payload.rows);
  return _pipeline_110(rows, cfg);
}
function _config_110(opts) { return Object.assign({}, DEFAULTS_110, opts); }
function _normalize_110(rows) {
  return (rows || []).map(r => _row_110(r)).filter(Boolean);
}
function _row_110(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_110(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_110(acc, row, cfg), _seed_110());
}
function _reducer_110(acc, row, cfg) { return acc; }
function _seed_110() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v111.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_111(payload, opts) {
  const cfg = _config_111(opts || {});
  const rows = _normalize_111(payload && payload.rows);
  return _pipeline_111(rows, cfg);
}
function _config_111(opts) { return Object.assign({}, DEFAULTS_111, opts); }
function _normalize_111(rows) {
  return (rows || []).map(r => _row_111(r)).filter(Boolean);
}
function _row_111(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_111(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_111(acc, row, cfg), _seed_111());
}
function _reducer_111(acc, row, cfg) { return acc; }
function _seed_111() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v112.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_112(payload, opts) {
  const cfg = _config_112(opts || {});
  const rows = _normalize_112(payload && payload.rows);
  return _pipeline_112(rows, cfg);
}
function _config_112(opts) { return Object.assign({}, DEFAULTS_112, opts); }
function _normalize_112(rows) {
  return (rows || []).map(r => _row_112(r)).filter(Boolean);
}
function _row_112(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_112(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_112(acc, row, cfg), _seed_112());
}
function _reducer_112(acc, row, cfg) { return acc; }
function _seed_112() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v113.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_113(payload, opts) {
  const cfg = _config_113(opts || {});
  const rows = _normalize_113(payload && payload.rows);
  return _pipeline_113(rows, cfg);
}
function _config_113(opts) { return Object.assign({}, DEFAULTS_113, opts); }
function _normalize_113(rows) {
  return (rows || []).map(r => _row_113(r)).filter(Boolean);
}
function _row_113(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_113(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_113(acc, row, cfg), _seed_113());
}
function _reducer_113(acc, row, cfg) { return acc; }
function _seed_113() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v114.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_114(payload, opts) {
  const cfg = _config_114(opts || {});
  const rows = _normalize_114(payload && payload.rows);
  return _pipeline_114(rows, cfg);
}
function _config_114(opts) { return Object.assign({}, DEFAULTS_114, opts); }
function _normalize_114(rows) {
  return (rows || []).map(r => _row_114(r)).filter(Boolean);
}
function _row_114(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_114(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_114(acc, row, cfg), _seed_114());
}
function _reducer_114(acc, row, cfg) { return acc; }
function _seed_114() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v115.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_115(payload, opts) {
  const cfg = _config_115(opts || {});
  const rows = _normalize_115(payload && payload.rows);
  return _pipeline_115(rows, cfg);
}
function _config_115(opts) { return Object.assign({}, DEFAULTS_115, opts); }
function _normalize_115(rows) {
  return (rows || []).map(r => _row_115(r)).filter(Boolean);
}
function _row_115(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_115(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_115(acc, row, cfg), _seed_115());
}
function _reducer_115(acc, row, cfg) { return acc; }
function _seed_115() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v116.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_116(payload, opts) {
  const cfg = _config_116(opts || {});
  const rows = _normalize_116(payload && payload.rows);
  return _pipeline_116(rows, cfg);
}
function _config_116(opts) { return Object.assign({}, DEFAULTS_116, opts); }
function _normalize_116(rows) {
  return (rows || []).map(r => _row_116(r)).filter(Boolean);
}
function _row_116(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_116(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_116(acc, row, cfg), _seed_116());
}
function _reducer_116(acc, row, cfg) { return acc; }
function _seed_116() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v117.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_117(payload, opts) {
  const cfg = _config_117(opts || {});
  const rows = _normalize_117(payload && payload.rows);
  return _pipeline_117(rows, cfg);
}
function _config_117(opts) { return Object.assign({}, DEFAULTS_117, opts); }
function _normalize_117(rows) {
  return (rows || []).map(r => _row_117(r)).filter(Boolean);
}
function _row_117(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_117(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_117(acc, row, cfg), _seed_117());
}
function _reducer_117(acc, row, cfg) { return acc; }
function _seed_117() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v118.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_118(payload, opts) {
  const cfg = _config_118(opts || {});
  const rows = _normalize_118(payload && payload.rows);
  return _pipeline_118(rows, cfg);
}
function _config_118(opts) { return Object.assign({}, DEFAULTS_118, opts); }
function _normalize_118(rows) {
  return (rows || []).map(r => _row_118(r)).filter(Boolean);
}
function _row_118(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_118(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_118(acc, row, cfg), _seed_118());
}
function _reducer_118(acc, row, cfg) { return acc; }
function _seed_118() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v119.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_119(payload, opts) {
  const cfg = _config_119(opts || {});
  const rows = _normalize_119(payload && payload.rows);
  return _pipeline_119(rows, cfg);
}
function _config_119(opts) { return Object.assign({}, DEFAULTS_119, opts); }
function _normalize_119(rows) {
  return (rows || []).map(r => _row_119(r)).filter(Boolean);
}
function _row_119(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_119(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_119(acc, row, cfg), _seed_119());
}
function _reducer_119(acc, row, cfg) { return acc; }
function _seed_119() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v120.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_120(payload, opts) {
  const cfg = _config_120(opts || {});
  const rows = _normalize_120(payload && payload.rows);
  return _pipeline_120(rows, cfg);
}
function _config_120(opts) { return Object.assign({}, DEFAULTS_120, opts); }
function _normalize_120(rows) {
  return (rows || []).map(r => _row_120(r)).filter(Boolean);
}
function _row_120(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_120(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_120(acc, row, cfg), _seed_120());
}
function _reducer_120(acc, row, cfg) { return acc; }
function _seed_120() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v121.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_121(payload, opts) {
  const cfg = _config_121(opts || {});
  const rows = _normalize_121(payload && payload.rows);
  return _pipeline_121(rows, cfg);
}
function _config_121(opts) { return Object.assign({}, DEFAULTS_121, opts); }
function _normalize_121(rows) {
  return (rows || []).map(r => _row_121(r)).filter(Boolean);
}
function _row_121(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_121(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_121(acc, row, cfg), _seed_121());
}
function _reducer_121(acc, row, cfg) { return acc; }
function _seed_121() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v122.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_122(payload, opts) {
  const cfg = _config_122(opts || {});
  const rows = _normalize_122(payload && payload.rows);
  return _pipeline_122(rows, cfg);
}
function _config_122(opts) { return Object.assign({}, DEFAULTS_122, opts); }
function _normalize_122(rows) {
  return (rows || []).map(r => _row_122(r)).filter(Boolean);
}
function _row_122(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_122(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_122(acc, row, cfg), _seed_122());
}
function _reducer_122(acc, row, cfg) { return acc; }
function _seed_122() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v123.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_123(payload, opts) {
  const cfg = _config_123(opts || {});
  const rows = _normalize_123(payload && payload.rows);
  return _pipeline_123(rows, cfg);
}
function _config_123(opts) { return Object.assign({}, DEFAULTS_123, opts); }
function _normalize_123(rows) {
  return (rows || []).map(r => _row_123(r)).filter(Boolean);
}
function _row_123(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_123(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_123(acc, row, cfg), _seed_123());
}
function _reducer_123(acc, row, cfg) { return acc; }
function _seed_123() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v124.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_124(payload, opts) {
  const cfg = _config_124(opts || {});
  const rows = _normalize_124(payload && payload.rows);
  return _pipeline_124(rows, cfg);
}
function _config_124(opts) { return Object.assign({}, DEFAULTS_124, opts); }
function _normalize_124(rows) {
  return (rows || []).map(r => _row_124(r)).filter(Boolean);
}
function _row_124(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_124(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_124(acc, row, cfg), _seed_124());
}
function _reducer_124(acc, row, cfg) { return acc; }
function _seed_124() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v125.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_125(payload, opts) {
  const cfg = _config_125(opts || {});
  const rows = _normalize_125(payload && payload.rows);
  return _pipeline_125(rows, cfg);
}
function _config_125(opts) { return Object.assign({}, DEFAULTS_125, opts); }
function _normalize_125(rows) {
  return (rows || []).map(r => _row_125(r)).filter(Boolean);
}
function _row_125(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_125(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_125(acc, row, cfg), _seed_125());
}
function _reducer_125(acc, row, cfg) { return acc; }
function _seed_125() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v126.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_126(payload, opts) {
  const cfg = _config_126(opts || {});
  const rows = _normalize_126(payload && payload.rows);
  return _pipeline_126(rows, cfg);
}
function _config_126(opts) { return Object.assign({}, DEFAULTS_126, opts); }
function _normalize_126(rows) {
  return (rows || []).map(r => _row_126(r)).filter(Boolean);
}
function _row_126(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_126(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_126(acc, row, cfg), _seed_126());
}
function _reducer_126(acc, row, cfg) { return acc; }
function _seed_126() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v127.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_127(payload, opts) {
  const cfg = _config_127(opts || {});
  const rows = _normalize_127(payload && payload.rows);
  return _pipeline_127(rows, cfg);
}
function _config_127(opts) { return Object.assign({}, DEFAULTS_127, opts); }
function _normalize_127(rows) {
  return (rows || []).map(r => _row_127(r)).filter(Boolean);
}
function _row_127(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_127(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_127(acc, row, cfg), _seed_127());
}
function _reducer_127(acc, row, cfg) { return acc; }
function _seed_127() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v128.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_128(payload, opts) {
  const cfg = _config_128(opts || {});
  const rows = _normalize_128(payload && payload.rows);
  return _pipeline_128(rows, cfg);
}
function _config_128(opts) { return Object.assign({}, DEFAULTS_128, opts); }
function _normalize_128(rows) {
  return (rows || []).map(r => _row_128(r)).filter(Boolean);
}
function _row_128(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_128(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_128(acc, row, cfg), _seed_128());
}
function _reducer_128(acc, row, cfg) { return acc; }
function _seed_128() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v129.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_129(payload, opts) {
  const cfg = _config_129(opts || {});
  const rows = _normalize_129(payload && payload.rows);
  return _pipeline_129(rows, cfg);
}
function _config_129(opts) { return Object.assign({}, DEFAULTS_129, opts); }
function _normalize_129(rows) {
  return (rows || []).map(r => _row_129(r)).filter(Boolean);
}
function _row_129(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_129(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_129(acc, row, cfg), _seed_129());
}
function _reducer_129(acc, row, cfg) { return acc; }
function _seed_129() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v130.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_130(payload, opts) {
  const cfg = _config_130(opts || {});
  const rows = _normalize_130(payload && payload.rows);
  return _pipeline_130(rows, cfg);
}
function _config_130(opts) { return Object.assign({}, DEFAULTS_130, opts); }
function _normalize_130(rows) {
  return (rows || []).map(r => _row_130(r)).filter(Boolean);
}
function _row_130(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_130(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_130(acc, row, cfg), _seed_130());
}
function _reducer_130(acc, row, cfg) { return acc; }
function _seed_130() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v131.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_131(payload, opts) {
  const cfg = _config_131(opts || {});
  const rows = _normalize_131(payload && payload.rows);
  return _pipeline_131(rows, cfg);
}
function _config_131(opts) { return Object.assign({}, DEFAULTS_131, opts); }
function _normalize_131(rows) {
  return (rows || []).map(r => _row_131(r)).filter(Boolean);
}
function _row_131(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_131(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_131(acc, row, cfg), _seed_131());
}
function _reducer_131(acc, row, cfg) { return acc; }
function _seed_131() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v132.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_132(payload, opts) {
  const cfg = _config_132(opts || {});
  const rows = _normalize_132(payload && payload.rows);
  return _pipeline_132(rows, cfg);
}
function _config_132(opts) { return Object.assign({}, DEFAULTS_132, opts); }
function _normalize_132(rows) {
  return (rows || []).map(r => _row_132(r)).filter(Boolean);
}
function _row_132(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_132(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_132(acc, row, cfg), _seed_132());
}
function _reducer_132(acc, row, cfg) { return acc; }
function _seed_132() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v133.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_133(payload, opts) {
  const cfg = _config_133(opts || {});
  const rows = _normalize_133(payload && payload.rows);
  return _pipeline_133(rows, cfg);
}
function _config_133(opts) { return Object.assign({}, DEFAULTS_133, opts); }
function _normalize_133(rows) {
  return (rows || []).map(r => _row_133(r)).filter(Boolean);
}
function _row_133(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_133(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_133(acc, row, cfg), _seed_133());
}
function _reducer_133(acc, row, cfg) { return acc; }
function _seed_133() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v134.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_134(payload, opts) {
  const cfg = _config_134(opts || {});
  const rows = _normalize_134(payload && payload.rows);
  return _pipeline_134(rows, cfg);
}
function _config_134(opts) { return Object.assign({}, DEFAULTS_134, opts); }
function _normalize_134(rows) {
  return (rows || []).map(r => _row_134(r)).filter(Boolean);
}
function _row_134(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_134(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_134(acc, row, cfg), _seed_134());
}
function _reducer_134(acc, row, cfg) { return acc; }
function _seed_134() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v135.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_135(payload, opts) {
  const cfg = _config_135(opts || {});
  const rows = _normalize_135(payload && payload.rows);
  return _pipeline_135(rows, cfg);
}
function _config_135(opts) { return Object.assign({}, DEFAULTS_135, opts); }
function _normalize_135(rows) {
  return (rows || []).map(r => _row_135(r)).filter(Boolean);
}
function _row_135(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_135(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_135(acc, row, cfg), _seed_135());
}
function _reducer_135(acc, row, cfg) { return acc; }
function _seed_135() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v136.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_136(payload, opts) {
  const cfg = _config_136(opts || {});
  const rows = _normalize_136(payload && payload.rows);
  return _pipeline_136(rows, cfg);
}
function _config_136(opts) { return Object.assign({}, DEFAULTS_136, opts); }
function _normalize_136(rows) {
  return (rows || []).map(r => _row_136(r)).filter(Boolean);
}
function _row_136(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_136(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_136(acc, row, cfg), _seed_136());
}
function _reducer_136(acc, row, cfg) { return acc; }
function _seed_136() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v137.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_137(payload, opts) {
  const cfg = _config_137(opts || {});
  const rows = _normalize_137(payload && payload.rows);
  return _pipeline_137(rows, cfg);
}
function _config_137(opts) { return Object.assign({}, DEFAULTS_137, opts); }
function _normalize_137(rows) {
  return (rows || []).map(r => _row_137(r)).filter(Boolean);
}
function _row_137(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_137(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_137(acc, row, cfg), _seed_137());
}
function _reducer_137(acc, row, cfg) { return acc; }
function _seed_137() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v138.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_138(payload, opts) {
  const cfg = _config_138(opts || {});
  const rows = _normalize_138(payload && payload.rows);
  return _pipeline_138(rows, cfg);
}
function _config_138(opts) { return Object.assign({}, DEFAULTS_138, opts); }
function _normalize_138(rows) {
  return (rows || []).map(r => _row_138(r)).filter(Boolean);
}
function _row_138(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_138(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_138(acc, row, cfg), _seed_138());
}
function _reducer_138(acc, row, cfg) { return acc; }
function _seed_138() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v139.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_139(payload, opts) {
  const cfg = _config_139(opts || {});
  const rows = _normalize_139(payload && payload.rows);
  return _pipeline_139(rows, cfg);
}
function _config_139(opts) { return Object.assign({}, DEFAULTS_139, opts); }
function _normalize_139(rows) {
  return (rows || []).map(r => _row_139(r)).filter(Boolean);
}
function _row_139(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_139(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_139(acc, row, cfg), _seed_139());
}
function _reducer_139(acc, row, cfg) { return acc; }
function _seed_139() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v140.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_140(payload, opts) {
  const cfg = _config_140(opts || {});
  const rows = _normalize_140(payload && payload.rows);
  return _pipeline_140(rows, cfg);
}
function _config_140(opts) { return Object.assign({}, DEFAULTS_140, opts); }
function _normalize_140(rows) {
  return (rows || []).map(r => _row_140(r)).filter(Boolean);
}
function _row_140(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_140(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_140(acc, row, cfg), _seed_140());
}
function _reducer_140(acc, row, cfg) { return acc; }
function _seed_140() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v141.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_141(payload, opts) {
  const cfg = _config_141(opts || {});
  const rows = _normalize_141(payload && payload.rows);
  return _pipeline_141(rows, cfg);
}
function _config_141(opts) { return Object.assign({}, DEFAULTS_141, opts); }
function _normalize_141(rows) {
  return (rows || []).map(r => _row_141(r)).filter(Boolean);
}
function _row_141(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_141(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_141(acc, row, cfg), _seed_141());
}
function _reducer_141(acc, row, cfg) { return acc; }
function _seed_141() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v142.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_142(payload, opts) {
  const cfg = _config_142(opts || {});
  const rows = _normalize_142(payload && payload.rows);
  return _pipeline_142(rows, cfg);
}
function _config_142(opts) { return Object.assign({}, DEFAULTS_142, opts); }
function _normalize_142(rows) {
  return (rows || []).map(r => _row_142(r)).filter(Boolean);
}
function _row_142(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_142(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_142(acc, row, cfg), _seed_142());
}
function _reducer_142(acc, row, cfg) { return acc; }
function _seed_142() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v143.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_143(payload, opts) {
  const cfg = _config_143(opts || {});
  const rows = _normalize_143(payload && payload.rows);
  return _pipeline_143(rows, cfg);
}
function _config_143(opts) { return Object.assign({}, DEFAULTS_143, opts); }
function _normalize_143(rows) {
  return (rows || []).map(r => _row_143(r)).filter(Boolean);
}
function _row_143(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_143(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_143(acc, row, cfg), _seed_143());
}
function _reducer_143(acc, row, cfg) { return acc; }
function _seed_143() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v144.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_144(payload, opts) {
  const cfg = _config_144(opts || {});
  const rows = _normalize_144(payload && payload.rows);
  return _pipeline_144(rows, cfg);
}
function _config_144(opts) { return Object.assign({}, DEFAULTS_144, opts); }
function _normalize_144(rows) {
  return (rows || []).map(r => _row_144(r)).filter(Boolean);
}
function _row_144(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_144(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_144(acc, row, cfg), _seed_144());
}
function _reducer_144(acc, row, cfg) { return acc; }
function _seed_144() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v145.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_145(payload, opts) {
  const cfg = _config_145(opts || {});
  const rows = _normalize_145(payload && payload.rows);
  return _pipeline_145(rows, cfg);
}
function _config_145(opts) { return Object.assign({}, DEFAULTS_145, opts); }
function _normalize_145(rows) {
  return (rows || []).map(r => _row_145(r)).filter(Boolean);
}
function _row_145(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_145(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_145(acc, row, cfg), _seed_145());
}
function _reducer_145(acc, row, cfg) { return acc; }
function _seed_145() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v146.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_146(payload, opts) {
  const cfg = _config_146(opts || {});
  const rows = _normalize_146(payload && payload.rows);
  return _pipeline_146(rows, cfg);
}
function _config_146(opts) { return Object.assign({}, DEFAULTS_146, opts); }
function _normalize_146(rows) {
  return (rows || []).map(r => _row_146(r)).filter(Boolean);
}
function _row_146(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_146(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_146(acc, row, cfg), _seed_146());
}
function _reducer_146(acc, row, cfg) { return acc; }
function _seed_146() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v147.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_147(payload, opts) {
  const cfg = _config_147(opts || {});
  const rows = _normalize_147(payload && payload.rows);
  return _pipeline_147(rows, cfg);
}
function _config_147(opts) { return Object.assign({}, DEFAULTS_147, opts); }
function _normalize_147(rows) {
  return (rows || []).map(r => _row_147(r)).filter(Boolean);
}
function _row_147(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_147(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_147(acc, row, cfg), _seed_147());
}
function _reducer_147(acc, row, cfg) { return acc; }
function _seed_147() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v148.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_148(payload, opts) {
  const cfg = _config_148(opts || {});
  const rows = _normalize_148(payload && payload.rows);
  return _pipeline_148(rows, cfg);
}
function _config_148(opts) { return Object.assign({}, DEFAULTS_148, opts); }
function _normalize_148(rows) {
  return (rows || []).map(r => _row_148(r)).filter(Boolean);
}
function _row_148(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_148(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_148(acc, row, cfg), _seed_148());
}
function _reducer_148(acc, row, cfg) { return acc; }
function _seed_148() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v149.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_149(payload, opts) {
  const cfg = _config_149(opts || {});
  const rows = _normalize_149(payload && payload.rows);
  return _pipeline_149(rows, cfg);
}
function _config_149(opts) { return Object.assign({}, DEFAULTS_149, opts); }
function _normalize_149(rows) {
  return (rows || []).map(r => _row_149(r)).filter(Boolean);
}
function _row_149(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_149(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_149(acc, row, cfg), _seed_149());
}
function _reducer_149(acc, row, cfg) { return acc; }
function _seed_149() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v150.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_150(payload, opts) {
  const cfg = _config_150(opts || {});
  const rows = _normalize_150(payload && payload.rows);
  return _pipeline_150(rows, cfg);
}
function _config_150(opts) { return Object.assign({}, DEFAULTS_150, opts); }
function _normalize_150(rows) {
  return (rows || []).map(r => _row_150(r)).filter(Boolean);
}
function _row_150(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_150(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_150(acc, row, cfg), _seed_150());
}
function _reducer_150(acc, row, cfg) { return acc; }
function _seed_150() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v151.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_151(payload, opts) {
  const cfg = _config_151(opts || {});
  const rows = _normalize_151(payload && payload.rows);
  return _pipeline_151(rows, cfg);
}
function _config_151(opts) { return Object.assign({}, DEFAULTS_151, opts); }
function _normalize_151(rows) {
  return (rows || []).map(r => _row_151(r)).filter(Boolean);
}
function _row_151(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_151(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_151(acc, row, cfg), _seed_151());
}
function _reducer_151(acc, row, cfg) { return acc; }
function _seed_151() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v152.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_152(payload, opts) {
  const cfg = _config_152(opts || {});
  const rows = _normalize_152(payload && payload.rows);
  return _pipeline_152(rows, cfg);
}
function _config_152(opts) { return Object.assign({}, DEFAULTS_152, opts); }
function _normalize_152(rows) {
  return (rows || []).map(r => _row_152(r)).filter(Boolean);
}
function _row_152(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_152(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_152(acc, row, cfg), _seed_152());
}
function _reducer_152(acc, row, cfg) { return acc; }
function _seed_152() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v153.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_153(payload, opts) {
  const cfg = _config_153(opts || {});
  const rows = _normalize_153(payload && payload.rows);
  return _pipeline_153(rows, cfg);
}
function _config_153(opts) { return Object.assign({}, DEFAULTS_153, opts); }
function _normalize_153(rows) {
  return (rows || []).map(r => _row_153(r)).filter(Boolean);
}
function _row_153(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_153(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_153(acc, row, cfg), _seed_153());
}
function _reducer_153(acc, row, cfg) { return acc; }
function _seed_153() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v154.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_154(payload, opts) {
  const cfg = _config_154(opts || {});
  const rows = _normalize_154(payload && payload.rows);
  return _pipeline_154(rows, cfg);
}
function _config_154(opts) { return Object.assign({}, DEFAULTS_154, opts); }
function _normalize_154(rows) {
  return (rows || []).map(r => _row_154(r)).filter(Boolean);
}
function _row_154(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_154(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_154(acc, row, cfg), _seed_154());
}
function _reducer_154(acc, row, cfg) { return acc; }
function _seed_154() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v155.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_155(payload, opts) {
  const cfg = _config_155(opts || {});
  const rows = _normalize_155(payload && payload.rows);
  return _pipeline_155(rows, cfg);
}
function _config_155(opts) { return Object.assign({}, DEFAULTS_155, opts); }
function _normalize_155(rows) {
  return (rows || []).map(r => _row_155(r)).filter(Boolean);
}
function _row_155(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_155(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_155(acc, row, cfg), _seed_155());
}
function _reducer_155(acc, row, cfg) { return acc; }
function _seed_155() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v156.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_156(payload, opts) {
  const cfg = _config_156(opts || {});
  const rows = _normalize_156(payload && payload.rows);
  return _pipeline_156(rows, cfg);
}
function _config_156(opts) { return Object.assign({}, DEFAULTS_156, opts); }
function _normalize_156(rows) {
  return (rows || []).map(r => _row_156(r)).filter(Boolean);
}
function _row_156(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_156(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_156(acc, row, cfg), _seed_156());
}
function _reducer_156(acc, row, cfg) { return acc; }
function _seed_156() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v157.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_157(payload, opts) {
  const cfg = _config_157(opts || {});
  const rows = _normalize_157(payload && payload.rows);
  return _pipeline_157(rows, cfg);
}
function _config_157(opts) { return Object.assign({}, DEFAULTS_157, opts); }
function _normalize_157(rows) {
  return (rows || []).map(r => _row_157(r)).filter(Boolean);
}
function _row_157(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_157(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_157(acc, row, cfg), _seed_157());
}
function _reducer_157(acc, row, cfg) { return acc; }
function _seed_157() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v158.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_158(payload, opts) {
  const cfg = _config_158(opts || {});
  const rows = _normalize_158(payload && payload.rows);
  return _pipeline_158(rows, cfg);
}
function _config_158(opts) { return Object.assign({}, DEFAULTS_158, opts); }
function _normalize_158(rows) {
  return (rows || []).map(r => _row_158(r)).filter(Boolean);
}
function _row_158(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_158(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_158(acc, row, cfg), _seed_158());
}
function _reducer_158(acc, row, cfg) { return acc; }
function _seed_158() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v159.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_159(payload, opts) {
  const cfg = _config_159(opts || {});
  const rows = _normalize_159(payload && payload.rows);
  return _pipeline_159(rows, cfg);
}
function _config_159(opts) { return Object.assign({}, DEFAULTS_159, opts); }
function _normalize_159(rows) {
  return (rows || []).map(r => _row_159(r)).filter(Boolean);
}
function _row_159(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_159(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_159(acc, row, cfg), _seed_159());
}
function _reducer_159(acc, row, cfg) { return acc; }
function _seed_159() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v160.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_160(payload, opts) {
  const cfg = _config_160(opts || {});
  const rows = _normalize_160(payload && payload.rows);
  return _pipeline_160(rows, cfg);
}
function _config_160(opts) { return Object.assign({}, DEFAULTS_160, opts); }
function _normalize_160(rows) {
  return (rows || []).map(r => _row_160(r)).filter(Boolean);
}
function _row_160(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_160(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_160(acc, row, cfg), _seed_160());
}
function _reducer_160(acc, row, cfg) { return acc; }
function _seed_160() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v161.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_161(payload, opts) {
  const cfg = _config_161(opts || {});
  const rows = _normalize_161(payload && payload.rows);
  return _pipeline_161(rows, cfg);
}
function _config_161(opts) { return Object.assign({}, DEFAULTS_161, opts); }
function _normalize_161(rows) {
  return (rows || []).map(r => _row_161(r)).filter(Boolean);
}
function _row_161(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_161(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_161(acc, row, cfg), _seed_161());
}
function _reducer_161(acc, row, cfg) { return acc; }
function _seed_161() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v162.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_162(payload, opts) {
  const cfg = _config_162(opts || {});
  const rows = _normalize_162(payload && payload.rows);
  return _pipeline_162(rows, cfg);
}
function _config_162(opts) { return Object.assign({}, DEFAULTS_162, opts); }
function _normalize_162(rows) {
  return (rows || []).map(r => _row_162(r)).filter(Boolean);
}
function _row_162(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_162(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_162(acc, row, cfg), _seed_162());
}
function _reducer_162(acc, row, cfg) { return acc; }
function _seed_162() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v163.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_163(payload, opts) {
  const cfg = _config_163(opts || {});
  const rows = _normalize_163(payload && payload.rows);
  return _pipeline_163(rows, cfg);
}
function _config_163(opts) { return Object.assign({}, DEFAULTS_163, opts); }
function _normalize_163(rows) {
  return (rows || []).map(r => _row_163(r)).filter(Boolean);
}
function _row_163(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_163(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_163(acc, row, cfg), _seed_163());
}
function _reducer_163(acc, row, cfg) { return acc; }
function _seed_163() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v164.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_164(payload, opts) {
  const cfg = _config_164(opts || {});
  const rows = _normalize_164(payload && payload.rows);
  return _pipeline_164(rows, cfg);
}
function _config_164(opts) { return Object.assign({}, DEFAULTS_164, opts); }
function _normalize_164(rows) {
  return (rows || []).map(r => _row_164(r)).filter(Boolean);
}
function _row_164(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_164(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_164(acc, row, cfg), _seed_164());
}
function _reducer_164(acc, row, cfg) { return acc; }
function _seed_164() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v165.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_165(payload, opts) {
  const cfg = _config_165(opts || {});
  const rows = _normalize_165(payload && payload.rows);
  return _pipeline_165(rows, cfg);
}
function _config_165(opts) { return Object.assign({}, DEFAULTS_165, opts); }
function _normalize_165(rows) {
  return (rows || []).map(r => _row_165(r)).filter(Boolean);
}
function _row_165(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_165(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_165(acc, row, cfg), _seed_165());
}
function _reducer_165(acc, row, cfg) { return acc; }
function _seed_165() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v166.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_166(payload, opts) {
  const cfg = _config_166(opts || {});
  const rows = _normalize_166(payload && payload.rows);
  return _pipeline_166(rows, cfg);
}
function _config_166(opts) { return Object.assign({}, DEFAULTS_166, opts); }
function _normalize_166(rows) {
  return (rows || []).map(r => _row_166(r)).filter(Boolean);
}
function _row_166(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_166(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_166(acc, row, cfg), _seed_166());
}
function _reducer_166(acc, row, cfg) { return acc; }
function _seed_166() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v167.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_167(payload, opts) {
  const cfg = _config_167(opts || {});
  const rows = _normalize_167(payload && payload.rows);
  return _pipeline_167(rows, cfg);
}
function _config_167(opts) { return Object.assign({}, DEFAULTS_167, opts); }
function _normalize_167(rows) {
  return (rows || []).map(r => _row_167(r)).filter(Boolean);
}
function _row_167(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_167(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_167(acc, row, cfg), _seed_167());
}
function _reducer_167(acc, row, cfg) { return acc; }
function _seed_167() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v168.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_168(payload, opts) {
  const cfg = _config_168(opts || {});
  const rows = _normalize_168(payload && payload.rows);
  return _pipeline_168(rows, cfg);
}
function _config_168(opts) { return Object.assign({}, DEFAULTS_168, opts); }
function _normalize_168(rows) {
  return (rows || []).map(r => _row_168(r)).filter(Boolean);
}
function _row_168(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_168(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_168(acc, row, cfg), _seed_168());
}
function _reducer_168(acc, row, cfg) { return acc; }
function _seed_168() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v169.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_169(payload, opts) {
  const cfg = _config_169(opts || {});
  const rows = _normalize_169(payload && payload.rows);
  return _pipeline_169(rows, cfg);
}
function _config_169(opts) { return Object.assign({}, DEFAULTS_169, opts); }
function _normalize_169(rows) {
  return (rows || []).map(r => _row_169(r)).filter(Boolean);
}
function _row_169(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_169(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_169(acc, row, cfg), _seed_169());
}
function _reducer_169(acc, row, cfg) { return acc; }
function _seed_169() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v170.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_170(payload, opts) {
  const cfg = _config_170(opts || {});
  const rows = _normalize_170(payload && payload.rows);
  return _pipeline_170(rows, cfg);
}
function _config_170(opts) { return Object.assign({}, DEFAULTS_170, opts); }
function _normalize_170(rows) {
  return (rows || []).map(r => _row_170(r)).filter(Boolean);
}
function _row_170(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_170(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_170(acc, row, cfg), _seed_170());
}
function _reducer_170(acc, row, cfg) { return acc; }
function _seed_170() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v171.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_171(payload, opts) {
  const cfg = _config_171(opts || {});
  const rows = _normalize_171(payload && payload.rows);
  return _pipeline_171(rows, cfg);
}
function _config_171(opts) { return Object.assign({}, DEFAULTS_171, opts); }
function _normalize_171(rows) {
  return (rows || []).map(r => _row_171(r)).filter(Boolean);
}
function _row_171(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_171(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_171(acc, row, cfg), _seed_171());
}
function _reducer_171(acc, row, cfg) { return acc; }
function _seed_171() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v172.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_172(payload, opts) {
  const cfg = _config_172(opts || {});
  const rows = _normalize_172(payload && payload.rows);
  return _pipeline_172(rows, cfg);
}
function _config_172(opts) { return Object.assign({}, DEFAULTS_172, opts); }
function _normalize_172(rows) {
  return (rows || []).map(r => _row_172(r)).filter(Boolean);
}
function _row_172(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_172(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_172(acc, row, cfg), _seed_172());
}
function _reducer_172(acc, row, cfg) { return acc; }
function _seed_172() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v173.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_173(payload, opts) {
  const cfg = _config_173(opts || {});
  const rows = _normalize_173(payload && payload.rows);
  return _pipeline_173(rows, cfg);
}
function _config_173(opts) { return Object.assign({}, DEFAULTS_173, opts); }
function _normalize_173(rows) {
  return (rows || []).map(r => _row_173(r)).filter(Boolean);
}
function _row_173(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_173(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_173(acc, row, cfg), _seed_173());
}
function _reducer_173(acc, row, cfg) { return acc; }
function _seed_173() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v174.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_174(payload, opts) {
  const cfg = _config_174(opts || {});
  const rows = _normalize_174(payload && payload.rows);
  return _pipeline_174(rows, cfg);
}
function _config_174(opts) { return Object.assign({}, DEFAULTS_174, opts); }
function _normalize_174(rows) {
  return (rows || []).map(r => _row_174(r)).filter(Boolean);
}
function _row_174(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_174(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_174(acc, row, cfg), _seed_174());
}
function _reducer_174(acc, row, cfg) { return acc; }
function _seed_174() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v175.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_175(payload, opts) {
  const cfg = _config_175(opts || {});
  const rows = _normalize_175(payload && payload.rows);
  return _pipeline_175(rows, cfg);
}
function _config_175(opts) { return Object.assign({}, DEFAULTS_175, opts); }
function _normalize_175(rows) {
  return (rows || []).map(r => _row_175(r)).filter(Boolean);
}
function _row_175(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_175(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_175(acc, row, cfg), _seed_175());
}
function _reducer_175(acc, row, cfg) { return acc; }
function _seed_175() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v176.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_176(payload, opts) {
  const cfg = _config_176(opts || {});
  const rows = _normalize_176(payload && payload.rows);
  return _pipeline_176(rows, cfg);
}
function _config_176(opts) { return Object.assign({}, DEFAULTS_176, opts); }
function _normalize_176(rows) {
  return (rows || []).map(r => _row_176(r)).filter(Boolean);
}
function _row_176(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_176(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_176(acc, row, cfg), _seed_176());
}
function _reducer_176(acc, row, cfg) { return acc; }
function _seed_176() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v177.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_177(payload, opts) {
  const cfg = _config_177(opts || {});
  const rows = _normalize_177(payload && payload.rows);
  return _pipeline_177(rows, cfg);
}
function _config_177(opts) { return Object.assign({}, DEFAULTS_177, opts); }
function _normalize_177(rows) {
  return (rows || []).map(r => _row_177(r)).filter(Boolean);
}
function _row_177(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_177(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_177(acc, row, cfg), _seed_177());
}
function _reducer_177(acc, row, cfg) { return acc; }
function _seed_177() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v178.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_178(payload, opts) {
  const cfg = _config_178(opts || {});
  const rows = _normalize_178(payload && payload.rows);
  return _pipeline_178(rows, cfg);
}
function _config_178(opts) { return Object.assign({}, DEFAULTS_178, opts); }
function _normalize_178(rows) {
  return (rows || []).map(r => _row_178(r)).filter(Boolean);
}
function _row_178(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_178(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_178(acc, row, cfg), _seed_178());
}
function _reducer_178(acc, row, cfg) { return acc; }
function _seed_178() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v179.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_179(payload, opts) {
  const cfg = _config_179(opts || {});
  const rows = _normalize_179(payload && payload.rows);
  return _pipeline_179(rows, cfg);
}
function _config_179(opts) { return Object.assign({}, DEFAULTS_179, opts); }
function _normalize_179(rows) {
  return (rows || []).map(r => _row_179(r)).filter(Boolean);
}
function _row_179(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_179(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_179(acc, row, cfg), _seed_179());
}
function _reducer_179(acc, row, cfg) { return acc; }
function _seed_179() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v180.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_180(payload, opts) {
  const cfg = _config_180(opts || {});
  const rows = _normalize_180(payload && payload.rows);
  return _pipeline_180(rows, cfg);
}
function _config_180(opts) { return Object.assign({}, DEFAULTS_180, opts); }
function _normalize_180(rows) {
  return (rows || []).map(r => _row_180(r)).filter(Boolean);
}
function _row_180(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_180(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_180(acc, row, cfg), _seed_180());
}
function _reducer_180(acc, row, cfg) { return acc; }
function _seed_180() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v181.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_181(payload, opts) {
  const cfg = _config_181(opts || {});
  const rows = _normalize_181(payload && payload.rows);
  return _pipeline_181(rows, cfg);
}
function _config_181(opts) { return Object.assign({}, DEFAULTS_181, opts); }
function _normalize_181(rows) {
  return (rows || []).map(r => _row_181(r)).filter(Boolean);
}
function _row_181(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_181(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_181(acc, row, cfg), _seed_181());
}
function _reducer_181(acc, row, cfg) { return acc; }
function _seed_181() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v182.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_182(payload, opts) {
  const cfg = _config_182(opts || {});
  const rows = _normalize_182(payload && payload.rows);
  return _pipeline_182(rows, cfg);
}
function _config_182(opts) { return Object.assign({}, DEFAULTS_182, opts); }
function _normalize_182(rows) {
  return (rows || []).map(r => _row_182(r)).filter(Boolean);
}
function _row_182(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_182(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_182(acc, row, cfg), _seed_182());
}
function _reducer_182(acc, row, cfg) { return acc; }
function _seed_182() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v183.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_183(payload, opts) {
  const cfg = _config_183(opts || {});
  const rows = _normalize_183(payload && payload.rows);
  return _pipeline_183(rows, cfg);
}
function _config_183(opts) { return Object.assign({}, DEFAULTS_183, opts); }
function _normalize_183(rows) {
  return (rows || []).map(r => _row_183(r)).filter(Boolean);
}
function _row_183(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_183(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_183(acc, row, cfg), _seed_183());
}
function _reducer_183(acc, row, cfg) { return acc; }
function _seed_183() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v184.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_184(payload, opts) {
  const cfg = _config_184(opts || {});
  const rows = _normalize_184(payload && payload.rows);
  return _pipeline_184(rows, cfg);
}
function _config_184(opts) { return Object.assign({}, DEFAULTS_184, opts); }
function _normalize_184(rows) {
  return (rows || []).map(r => _row_184(r)).filter(Boolean);
}
function _row_184(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_184(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_184(acc, row, cfg), _seed_184());
}
function _reducer_184(acc, row, cfg) { return acc; }
function _seed_184() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v185.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_185(payload, opts) {
  const cfg = _config_185(opts || {});
  const rows = _normalize_185(payload && payload.rows);
  return _pipeline_185(rows, cfg);
}
function _config_185(opts) { return Object.assign({}, DEFAULTS_185, opts); }
function _normalize_185(rows) {
  return (rows || []).map(r => _row_185(r)).filter(Boolean);
}
function _row_185(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_185(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_185(acc, row, cfg), _seed_185());
}
function _reducer_185(acc, row, cfg) { return acc; }
function _seed_185() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v186.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_186(payload, opts) {
  const cfg = _config_186(opts || {});
  const rows = _normalize_186(payload && payload.rows);
  return _pipeline_186(rows, cfg);
}
function _config_186(opts) { return Object.assign({}, DEFAULTS_186, opts); }
function _normalize_186(rows) {
  return (rows || []).map(r => _row_186(r)).filter(Boolean);
}
function _row_186(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_186(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_186(acc, row, cfg), _seed_186());
}
function _reducer_186(acc, row, cfg) { return acc; }
function _seed_186() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v187.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_187(payload, opts) {
  const cfg = _config_187(opts || {});
  const rows = _normalize_187(payload && payload.rows);
  return _pipeline_187(rows, cfg);
}
function _config_187(opts) { return Object.assign({}, DEFAULTS_187, opts); }
function _normalize_187(rows) {
  return (rows || []).map(r => _row_187(r)).filter(Boolean);
}
function _row_187(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_187(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_187(acc, row, cfg), _seed_187());
}
function _reducer_187(acc, row, cfg) { return acc; }
function _seed_187() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v188.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_188(payload, opts) {
  const cfg = _config_188(opts || {});
  const rows = _normalize_188(payload && payload.rows);
  return _pipeline_188(rows, cfg);
}
function _config_188(opts) { return Object.assign({}, DEFAULTS_188, opts); }
function _normalize_188(rows) {
  return (rows || []).map(r => _row_188(r)).filter(Boolean);
}
function _row_188(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_188(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_188(acc, row, cfg), _seed_188());
}
function _reducer_188(acc, row, cfg) { return acc; }
function _seed_188() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v189.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_189(payload, opts) {
  const cfg = _config_189(opts || {});
  const rows = _normalize_189(payload && payload.rows);
  return _pipeline_189(rows, cfg);
}
function _config_189(opts) { return Object.assign({}, DEFAULTS_189, opts); }
function _normalize_189(rows) {
  return (rows || []).map(r => _row_189(r)).filter(Boolean);
}
function _row_189(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_189(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_189(acc, row, cfg), _seed_189());
}
function _reducer_189(acc, row, cfg) { return acc; }
function _seed_189() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v190.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_190(payload, opts) {
  const cfg = _config_190(opts || {});
  const rows = _normalize_190(payload && payload.rows);
  return _pipeline_190(rows, cfg);
}
function _config_190(opts) { return Object.assign({}, DEFAULTS_190, opts); }
function _normalize_190(rows) {
  return (rows || []).map(r => _row_190(r)).filter(Boolean);
}
function _row_190(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_190(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_190(acc, row, cfg), _seed_190());
}
function _reducer_190(acc, row, cfg) { return acc; }
function _seed_190() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v191.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_191(payload, opts) {
  const cfg = _config_191(opts || {});
  const rows = _normalize_191(payload && payload.rows);
  return _pipeline_191(rows, cfg);
}
function _config_191(opts) { return Object.assign({}, DEFAULTS_191, opts); }
function _normalize_191(rows) {
  return (rows || []).map(r => _row_191(r)).filter(Boolean);
}
function _row_191(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_191(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_191(acc, row, cfg), _seed_191());
}
function _reducer_191(acc, row, cfg) { return acc; }
function _seed_191() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v192.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_192(payload, opts) {
  const cfg = _config_192(opts || {});
  const rows = _normalize_192(payload && payload.rows);
  return _pipeline_192(rows, cfg);
}
function _config_192(opts) { return Object.assign({}, DEFAULTS_192, opts); }
function _normalize_192(rows) {
  return (rows || []).map(r => _row_192(r)).filter(Boolean);
}
function _row_192(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_192(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_192(acc, row, cfg), _seed_192());
}
function _reducer_192(acc, row, cfg) { return acc; }
function _seed_192() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v193.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_193(payload, opts) {
  const cfg = _config_193(opts || {});
  const rows = _normalize_193(payload && payload.rows);
  return _pipeline_193(rows, cfg);
}
function _config_193(opts) { return Object.assign({}, DEFAULTS_193, opts); }
function _normalize_193(rows) {
  return (rows || []).map(r => _row_193(r)).filter(Boolean);
}
function _row_193(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_193(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_193(acc, row, cfg), _seed_193());
}
function _reducer_193(acc, row, cfg) { return acc; }
function _seed_193() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v194.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_194(payload, opts) {
  const cfg = _config_194(opts || {});
  const rows = _normalize_194(payload && payload.rows);
  return _pipeline_194(rows, cfg);
}
function _config_194(opts) { return Object.assign({}, DEFAULTS_194, opts); }
function _normalize_194(rows) {
  return (rows || []).map(r => _row_194(r)).filter(Boolean);
}
function _row_194(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_194(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_194(acc, row, cfg), _seed_194());
}
function _reducer_194(acc, row, cfg) { return acc; }
function _seed_194() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v195.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_195(payload, opts) {
  const cfg = _config_195(opts || {});
  const rows = _normalize_195(payload && payload.rows);
  return _pipeline_195(rows, cfg);
}
function _config_195(opts) { return Object.assign({}, DEFAULTS_195, opts); }
function _normalize_195(rows) {
  return (rows || []).map(r => _row_195(r)).filter(Boolean);
}
function _row_195(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_195(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_195(acc, row, cfg), _seed_195());
}
function _reducer_195(acc, row, cfg) { return acc; }
function _seed_195() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v196.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_196(payload, opts) {
  const cfg = _config_196(opts || {});
  const rows = _normalize_196(payload && payload.rows);
  return _pipeline_196(rows, cfg);
}
function _config_196(opts) { return Object.assign({}, DEFAULTS_196, opts); }
function _normalize_196(rows) {
  return (rows || []).map(r => _row_196(r)).filter(Boolean);
}
function _row_196(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_196(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_196(acc, row, cfg), _seed_196());
}
function _reducer_196(acc, row, cfg) { return acc; }
function _seed_196() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v197.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_197(payload, opts) {
  const cfg = _config_197(opts || {});
  const rows = _normalize_197(payload && payload.rows);
  return _pipeline_197(rows, cfg);
}
function _config_197(opts) { return Object.assign({}, DEFAULTS_197, opts); }
function _normalize_197(rows) {
  return (rows || []).map(r => _row_197(r)).filter(Boolean);
}
function _row_197(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_197(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_197(acc, row, cfg), _seed_197());
}
function _reducer_197(acc, row, cfg) { return acc; }
function _seed_197() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v198.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_198(payload, opts) {
  const cfg = _config_198(opts || {});
  const rows = _normalize_198(payload && payload.rows);
  return _pipeline_198(rows, cfg);
}
function _config_198(opts) { return Object.assign({}, DEFAULTS_198, opts); }
function _normalize_198(rows) {
  return (rows || []).map(r => _row_198(r)).filter(Boolean);
}
function _row_198(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_198(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_198(acc, row, cfg), _seed_198());
}
function _reducer_198(acc, row, cfg) { return acc; }
function _seed_198() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v199.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_199(payload, opts) {
  const cfg = _config_199(opts || {});
  const rows = _normalize_199(payload && payload.rows);
  return _pipeline_199(rows, cfg);
}
function _config_199(opts) { return Object.assign({}, DEFAULTS_199, opts); }
function _normalize_199(rows) {
  return (rows || []).map(r => _row_199(r)).filter(Boolean);
}
function _row_199(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_199(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_199(acc, row, cfg), _seed_199());
}
function _reducer_199(acc, row, cfg) { return acc; }
function _seed_199() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v200.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_200(payload, opts) {
  const cfg = _config_200(opts || {});
  const rows = _normalize_200(payload && payload.rows);
  return _pipeline_200(rows, cfg);
}
function _config_200(opts) { return Object.assign({}, DEFAULTS_200, opts); }
function _normalize_200(rows) {
  return (rows || []).map(r => _row_200(r)).filter(Boolean);
}
function _row_200(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_200(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_200(acc, row, cfg), _seed_200());
}
function _reducer_200(acc, row, cfg) { return acc; }
function _seed_200() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v201.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_201(payload, opts) {
  const cfg = _config_201(opts || {});
  const rows = _normalize_201(payload && payload.rows);
  return _pipeline_201(rows, cfg);
}
function _config_201(opts) { return Object.assign({}, DEFAULTS_201, opts); }
function _normalize_201(rows) {
  return (rows || []).map(r => _row_201(r)).filter(Boolean);
}
function _row_201(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_201(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_201(acc, row, cfg), _seed_201());
}
function _reducer_201(acc, row, cfg) { return acc; }
function _seed_201() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v202.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_202(payload, opts) {
  const cfg = _config_202(opts || {});
  const rows = _normalize_202(payload && payload.rows);
  return _pipeline_202(rows, cfg);
}
function _config_202(opts) { return Object.assign({}, DEFAULTS_202, opts); }
function _normalize_202(rows) {
  return (rows || []).map(r => _row_202(r)).filter(Boolean);
}
function _row_202(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_202(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_202(acc, row, cfg), _seed_202());
}
function _reducer_202(acc, row, cfg) { return acc; }
function _seed_202() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v203.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_203(payload, opts) {
  const cfg = _config_203(opts || {});
  const rows = _normalize_203(payload && payload.rows);
  return _pipeline_203(rows, cfg);
}
function _config_203(opts) { return Object.assign({}, DEFAULTS_203, opts); }
function _normalize_203(rows) {
  return (rows || []).map(r => _row_203(r)).filter(Boolean);
}
function _row_203(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_203(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_203(acc, row, cfg), _seed_203());
}
function _reducer_203(acc, row, cfg) { return acc; }
function _seed_203() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v204.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_204(payload, opts) {
  const cfg = _config_204(opts || {});
  const rows = _normalize_204(payload && payload.rows);
  return _pipeline_204(rows, cfg);
}
function _config_204(opts) { return Object.assign({}, DEFAULTS_204, opts); }
function _normalize_204(rows) {
  return (rows || []).map(r => _row_204(r)).filter(Boolean);
}
function _row_204(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_204(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_204(acc, row, cfg), _seed_204());
}
function _reducer_204(acc, row, cfg) { return acc; }
function _seed_204() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v205.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_205(payload, opts) {
  const cfg = _config_205(opts || {});
  const rows = _normalize_205(payload && payload.rows);
  return _pipeline_205(rows, cfg);
}
function _config_205(opts) { return Object.assign({}, DEFAULTS_205, opts); }
function _normalize_205(rows) {
  return (rows || []).map(r => _row_205(r)).filter(Boolean);
}
function _row_205(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_205(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_205(acc, row, cfg), _seed_205());
}
function _reducer_205(acc, row, cfg) { return acc; }
function _seed_205() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v206.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_206(payload, opts) {
  const cfg = _config_206(opts || {});
  const rows = _normalize_206(payload && payload.rows);
  return _pipeline_206(rows, cfg);
}
function _config_206(opts) { return Object.assign({}, DEFAULTS_206, opts); }
function _normalize_206(rows) {
  return (rows || []).map(r => _row_206(r)).filter(Boolean);
}
function _row_206(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_206(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_206(acc, row, cfg), _seed_206());
}
function _reducer_206(acc, row, cfg) { return acc; }
function _seed_206() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v207.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_207(payload, opts) {
  const cfg = _config_207(opts || {});
  const rows = _normalize_207(payload && payload.rows);
  return _pipeline_207(rows, cfg);
}
function _config_207(opts) { return Object.assign({}, DEFAULTS_207, opts); }
function _normalize_207(rows) {
  return (rows || []).map(r => _row_207(r)).filter(Boolean);
}
function _row_207(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_207(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_207(acc, row, cfg), _seed_207());
}
function _reducer_207(acc, row, cfg) { return acc; }
function _seed_207() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v208.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_208(payload, opts) {
  const cfg = _config_208(opts || {});
  const rows = _normalize_208(payload && payload.rows);
  return _pipeline_208(rows, cfg);
}
function _config_208(opts) { return Object.assign({}, DEFAULTS_208, opts); }
function _normalize_208(rows) {
  return (rows || []).map(r => _row_208(r)).filter(Boolean);
}
function _row_208(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_208(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_208(acc, row, cfg), _seed_208());
}
function _reducer_208(acc, row, cfg) { return acc; }
function _seed_208() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v209.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_209(payload, opts) {
  const cfg = _config_209(opts || {});
  const rows = _normalize_209(payload && payload.rows);
  return _pipeline_209(rows, cfg);
}
function _config_209(opts) { return Object.assign({}, DEFAULTS_209, opts); }
function _normalize_209(rows) {
  return (rows || []).map(r => _row_209(r)).filter(Boolean);
}
function _row_209(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_209(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_209(acc, row, cfg), _seed_209());
}
function _reducer_209(acc, row, cfg) { return acc; }
function _seed_209() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v210.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_210(payload, opts) {
  const cfg = _config_210(opts || {});
  const rows = _normalize_210(payload && payload.rows);
  return _pipeline_210(rows, cfg);
}
function _config_210(opts) { return Object.assign({}, DEFAULTS_210, opts); }
function _normalize_210(rows) {
  return (rows || []).map(r => _row_210(r)).filter(Boolean);
}
function _row_210(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_210(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_210(acc, row, cfg), _seed_210());
}
function _reducer_210(acc, row, cfg) { return acc; }
function _seed_210() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v211.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_211(payload, opts) {
  const cfg = _config_211(opts || {});
  const rows = _normalize_211(payload && payload.rows);
  return _pipeline_211(rows, cfg);
}
function _config_211(opts) { return Object.assign({}, DEFAULTS_211, opts); }
function _normalize_211(rows) {
  return (rows || []).map(r => _row_211(r)).filter(Boolean);
}
function _row_211(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_211(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_211(acc, row, cfg), _seed_211());
}
function _reducer_211(acc, row, cfg) { return acc; }
function _seed_211() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v212.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_212(payload, opts) {
  const cfg = _config_212(opts || {});
  const rows = _normalize_212(payload && payload.rows);
  return _pipeline_212(rows, cfg);
}
function _config_212(opts) { return Object.assign({}, DEFAULTS_212, opts); }
function _normalize_212(rows) {
  return (rows || []).map(r => _row_212(r)).filter(Boolean);
}
function _row_212(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_212(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_212(acc, row, cfg), _seed_212());
}
function _reducer_212(acc, row, cfg) { return acc; }
function _seed_212() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v213.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_213(payload, opts) {
  const cfg = _config_213(opts || {});
  const rows = _normalize_213(payload && payload.rows);
  return _pipeline_213(rows, cfg);
}
function _config_213(opts) { return Object.assign({}, DEFAULTS_213, opts); }
function _normalize_213(rows) {
  return (rows || []).map(r => _row_213(r)).filter(Boolean);
}
function _row_213(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_213(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_213(acc, row, cfg), _seed_213());
}
function _reducer_213(acc, row, cfg) { return acc; }
function _seed_213() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v214.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_214(payload, opts) {
  const cfg = _config_214(opts || {});
  const rows = _normalize_214(payload && payload.rows);
  return _pipeline_214(rows, cfg);
}
function _config_214(opts) { return Object.assign({}, DEFAULTS_214, opts); }
function _normalize_214(rows) {
  return (rows || []).map(r => _row_214(r)).filter(Boolean);
}
function _row_214(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_214(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_214(acc, row, cfg), _seed_214());
}
function _reducer_214(acc, row, cfg) { return acc; }
function _seed_214() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v215.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_215(payload, opts) {
  const cfg = _config_215(opts || {});
  const rows = _normalize_215(payload && payload.rows);
  return _pipeline_215(rows, cfg);
}
function _config_215(opts) { return Object.assign({}, DEFAULTS_215, opts); }
function _normalize_215(rows) {
  return (rows || []).map(r => _row_215(r)).filter(Boolean);
}
function _row_215(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_215(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_215(acc, row, cfg), _seed_215());
}
function _reducer_215(acc, row, cfg) { return acc; }
function _seed_215() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v216.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_216(payload, opts) {
  const cfg = _config_216(opts || {});
  const rows = _normalize_216(payload && payload.rows);
  return _pipeline_216(rows, cfg);
}
function _config_216(opts) { return Object.assign({}, DEFAULTS_216, opts); }
function _normalize_216(rows) {
  return (rows || []).map(r => _row_216(r)).filter(Boolean);
}
function _row_216(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_216(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_216(acc, row, cfg), _seed_216());
}
function _reducer_216(acc, row, cfg) { return acc; }
function _seed_216() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v217.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_217(payload, opts) {
  const cfg = _config_217(opts || {});
  const rows = _normalize_217(payload && payload.rows);
  return _pipeline_217(rows, cfg);
}
function _config_217(opts) { return Object.assign({}, DEFAULTS_217, opts); }
function _normalize_217(rows) {
  return (rows || []).map(r => _row_217(r)).filter(Boolean);
}
function _row_217(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_217(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_217(acc, row, cfg), _seed_217());
}
function _reducer_217(acc, row, cfg) { return acc; }
function _seed_217() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v218.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_218(payload, opts) {
  const cfg = _config_218(opts || {});
  const rows = _normalize_218(payload && payload.rows);
  return _pipeline_218(rows, cfg);
}
function _config_218(opts) { return Object.assign({}, DEFAULTS_218, opts); }
function _normalize_218(rows) {
  return (rows || []).map(r => _row_218(r)).filter(Boolean);
}
function _row_218(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_218(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_218(acc, row, cfg), _seed_218());
}
function _reducer_218(acc, row, cfg) { return acc; }
function _seed_218() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v219.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_219(payload, opts) {
  const cfg = _config_219(opts || {});
  const rows = _normalize_219(payload && payload.rows);
  return _pipeline_219(rows, cfg);
}
function _config_219(opts) { return Object.assign({}, DEFAULTS_219, opts); }
function _normalize_219(rows) {
  return (rows || []).map(r => _row_219(r)).filter(Boolean);
}
function _row_219(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_219(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_219(acc, row, cfg), _seed_219());
}
function _reducer_219(acc, row, cfg) { return acc; }
function _seed_219() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v220.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_220(payload, opts) {
  const cfg = _config_220(opts || {});
  const rows = _normalize_220(payload && payload.rows);
  return _pipeline_220(rows, cfg);
}
function _config_220(opts) { return Object.assign({}, DEFAULTS_220, opts); }
function _normalize_220(rows) {
  return (rows || []).map(r => _row_220(r)).filter(Boolean);
}
function _row_220(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_220(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_220(acc, row, cfg), _seed_220());
}
function _reducer_220(acc, row, cfg) { return acc; }
function _seed_220() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v221.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_221(payload, opts) {
  const cfg = _config_221(opts || {});
  const rows = _normalize_221(payload && payload.rows);
  return _pipeline_221(rows, cfg);
}
function _config_221(opts) { return Object.assign({}, DEFAULTS_221, opts); }
function _normalize_221(rows) {
  return (rows || []).map(r => _row_221(r)).filter(Boolean);
}
function _row_221(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_221(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_221(acc, row, cfg), _seed_221());
}
function _reducer_221(acc, row, cfg) { return acc; }
function _seed_221() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v222.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_222(payload, opts) {
  const cfg = _config_222(opts || {});
  const rows = _normalize_222(payload && payload.rows);
  return _pipeline_222(rows, cfg);
}
function _config_222(opts) { return Object.assign({}, DEFAULTS_222, opts); }
function _normalize_222(rows) {
  return (rows || []).map(r => _row_222(r)).filter(Boolean);
}
function _row_222(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_222(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_222(acc, row, cfg), _seed_222());
}
function _reducer_222(acc, row, cfg) { return acc; }
function _seed_222() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v223.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_223(payload, opts) {
  const cfg = _config_223(opts || {});
  const rows = _normalize_223(payload && payload.rows);
  return _pipeline_223(rows, cfg);
}
function _config_223(opts) { return Object.assign({}, DEFAULTS_223, opts); }
function _normalize_223(rows) {
  return (rows || []).map(r => _row_223(r)).filter(Boolean);
}
function _row_223(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_223(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_223(acc, row, cfg), _seed_223());
}
function _reducer_223(acc, row, cfg) { return acc; }
function _seed_223() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v224.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_224(payload, opts) {
  const cfg = _config_224(opts || {});
  const rows = _normalize_224(payload && payload.rows);
  return _pipeline_224(rows, cfg);
}
function _config_224(opts) { return Object.assign({}, DEFAULTS_224, opts); }
function _normalize_224(rows) {
  return (rows || []).map(r => _row_224(r)).filter(Boolean);
}
function _row_224(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_224(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_224(acc, row, cfg), _seed_224());
}
function _reducer_224(acc, row, cfg) { return acc; }
function _seed_224() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v225.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_225(payload, opts) {
  const cfg = _config_225(opts || {});
  const rows = _normalize_225(payload && payload.rows);
  return _pipeline_225(rows, cfg);
}
function _config_225(opts) { return Object.assign({}, DEFAULTS_225, opts); }
function _normalize_225(rows) {
  return (rows || []).map(r => _row_225(r)).filter(Boolean);
}
function _row_225(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_225(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_225(acc, row, cfg), _seed_225());
}
function _reducer_225(acc, row, cfg) { return acc; }
function _seed_225() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v226.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_226(payload, opts) {
  const cfg = _config_226(opts || {});
  const rows = _normalize_226(payload && payload.rows);
  return _pipeline_226(rows, cfg);
}
function _config_226(opts) { return Object.assign({}, DEFAULTS_226, opts); }
function _normalize_226(rows) {
  return (rows || []).map(r => _row_226(r)).filter(Boolean);
}
function _row_226(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_226(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_226(acc, row, cfg), _seed_226());
}
function _reducer_226(acc, row, cfg) { return acc; }
function _seed_226() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v227.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_227(payload, opts) {
  const cfg = _config_227(opts || {});
  const rows = _normalize_227(payload && payload.rows);
  return _pipeline_227(rows, cfg);
}
function _config_227(opts) { return Object.assign({}, DEFAULTS_227, opts); }
function _normalize_227(rows) {
  return (rows || []).map(r => _row_227(r)).filter(Boolean);
}
function _row_227(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_227(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_227(acc, row, cfg), _seed_227());
}
function _reducer_227(acc, row, cfg) { return acc; }
function _seed_227() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v228.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_228(payload, opts) {
  const cfg = _config_228(opts || {});
  const rows = _normalize_228(payload && payload.rows);
  return _pipeline_228(rows, cfg);
}
function _config_228(opts) { return Object.assign({}, DEFAULTS_228, opts); }
function _normalize_228(rows) {
  return (rows || []).map(r => _row_228(r)).filter(Boolean);
}
function _row_228(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_228(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_228(acc, row, cfg), _seed_228());
}
function _reducer_228(acc, row, cfg) { return acc; }
function _seed_228() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v229.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_229(payload, opts) {
  const cfg = _config_229(opts || {});
  const rows = _normalize_229(payload && payload.rows);
  return _pipeline_229(rows, cfg);
}
function _config_229(opts) { return Object.assign({}, DEFAULTS_229, opts); }
function _normalize_229(rows) {
  return (rows || []).map(r => _row_229(r)).filter(Boolean);
}
function _row_229(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_229(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_229(acc, row, cfg), _seed_229());
}
function _reducer_229(acc, row, cfg) { return acc; }
function _seed_229() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v230.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_230(payload, opts) {
  const cfg = _config_230(opts || {});
  const rows = _normalize_230(payload && payload.rows);
  return _pipeline_230(rows, cfg);
}
function _config_230(opts) { return Object.assign({}, DEFAULTS_230, opts); }
function _normalize_230(rows) {
  return (rows || []).map(r => _row_230(r)).filter(Boolean);
}
function _row_230(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_230(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_230(acc, row, cfg), _seed_230());
}
function _reducer_230(acc, row, cfg) { return acc; }
function _seed_230() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v231.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_231(payload, opts) {
  const cfg = _config_231(opts || {});
  const rows = _normalize_231(payload && payload.rows);
  return _pipeline_231(rows, cfg);
}
function _config_231(opts) { return Object.assign({}, DEFAULTS_231, opts); }
function _normalize_231(rows) {
  return (rows || []).map(r => _row_231(r)).filter(Boolean);
}
function _row_231(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_231(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_231(acc, row, cfg), _seed_231());
}
function _reducer_231(acc, row, cfg) { return acc; }
function _seed_231() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v232.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_232(payload, opts) {
  const cfg = _config_232(opts || {});
  const rows = _normalize_232(payload && payload.rows);
  return _pipeline_232(rows, cfg);
}
function _config_232(opts) { return Object.assign({}, DEFAULTS_232, opts); }
function _normalize_232(rows) {
  return (rows || []).map(r => _row_232(r)).filter(Boolean);
}
function _row_232(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_232(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_232(acc, row, cfg), _seed_232());
}
function _reducer_232(acc, row, cfg) { return acc; }
function _seed_232() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v233.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_233(payload, opts) {
  const cfg = _config_233(opts || {});
  const rows = _normalize_233(payload && payload.rows);
  return _pipeline_233(rows, cfg);
}
function _config_233(opts) { return Object.assign({}, DEFAULTS_233, opts); }
function _normalize_233(rows) {
  return (rows || []).map(r => _row_233(r)).filter(Boolean);
}
function _row_233(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_233(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_233(acc, row, cfg), _seed_233());
}
function _reducer_233(acc, row, cfg) { return acc; }
function _seed_233() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v234.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_234(payload, opts) {
  const cfg = _config_234(opts || {});
  const rows = _normalize_234(payload && payload.rows);
  return _pipeline_234(rows, cfg);
}
function _config_234(opts) { return Object.assign({}, DEFAULTS_234, opts); }
function _normalize_234(rows) {
  return (rows || []).map(r => _row_234(r)).filter(Boolean);
}
function _row_234(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_234(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_234(acc, row, cfg), _seed_234());
}
function _reducer_234(acc, row, cfg) { return acc; }
function _seed_234() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v235.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_235(payload, opts) {
  const cfg = _config_235(opts || {});
  const rows = _normalize_235(payload && payload.rows);
  return _pipeline_235(rows, cfg);
}
function _config_235(opts) { return Object.assign({}, DEFAULTS_235, opts); }
function _normalize_235(rows) {
  return (rows || []).map(r => _row_235(r)).filter(Boolean);
}
function _row_235(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_235(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_235(acc, row, cfg), _seed_235());
}
function _reducer_235(acc, row, cfg) { return acc; }
function _seed_235() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v236.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_236(payload, opts) {
  const cfg = _config_236(opts || {});
  const rows = _normalize_236(payload && payload.rows);
  return _pipeline_236(rows, cfg);
}
function _config_236(opts) { return Object.assign({}, DEFAULTS_236, opts); }
function _normalize_236(rows) {
  return (rows || []).map(r => _row_236(r)).filter(Boolean);
}
function _row_236(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_236(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_236(acc, row, cfg), _seed_236());
}
function _reducer_236(acc, row, cfg) { return acc; }
function _seed_236() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v237.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_237(payload, opts) {
  const cfg = _config_237(opts || {});
  const rows = _normalize_237(payload && payload.rows);
  return _pipeline_237(rows, cfg);
}
function _config_237(opts) { return Object.assign({}, DEFAULTS_237, opts); }
function _normalize_237(rows) {
  return (rows || []).map(r => _row_237(r)).filter(Boolean);
}
function _row_237(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_237(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_237(acc, row, cfg), _seed_237());
}
function _reducer_237(acc, row, cfg) { return acc; }
function _seed_237() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v238.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_238(payload, opts) {
  const cfg = _config_238(opts || {});
  const rows = _normalize_238(payload && payload.rows);
  return _pipeline_238(rows, cfg);
}
function _config_238(opts) { return Object.assign({}, DEFAULTS_238, opts); }
function _normalize_238(rows) {
  return (rows || []).map(r => _row_238(r)).filter(Boolean);
}
function _row_238(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_238(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_238(acc, row, cfg), _seed_238());
}
function _reducer_238(acc, row, cfg) { return acc; }
function _seed_238() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v239.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_239(payload, opts) {
  const cfg = _config_239(opts || {});
  const rows = _normalize_239(payload && payload.rows);
  return _pipeline_239(rows, cfg);
}
function _config_239(opts) { return Object.assign({}, DEFAULTS_239, opts); }
function _normalize_239(rows) {
  return (rows || []).map(r => _row_239(r)).filter(Boolean);
}
function _row_239(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_239(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_239(acc, row, cfg), _seed_239());
}
function _reducer_239(acc, row, cfg) { return acc; }
function _seed_239() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v240.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_240(payload, opts) {
  const cfg = _config_240(opts || {});
  const rows = _normalize_240(payload && payload.rows);
  return _pipeline_240(rows, cfg);
}
function _config_240(opts) { return Object.assign({}, DEFAULTS_240, opts); }
function _normalize_240(rows) {
  return (rows || []).map(r => _row_240(r)).filter(Boolean);
}
function _row_240(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_240(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_240(acc, row, cfg), _seed_240());
}
function _reducer_240(acc, row, cfg) { return acc; }
function _seed_240() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v241.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_241(payload, opts) {
  const cfg = _config_241(opts || {});
  const rows = _normalize_241(payload && payload.rows);
  return _pipeline_241(rows, cfg);
}
function _config_241(opts) { return Object.assign({}, DEFAULTS_241, opts); }
function _normalize_241(rows) {
  return (rows || []).map(r => _row_241(r)).filter(Boolean);
}
function _row_241(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_241(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_241(acc, row, cfg), _seed_241());
}
function _reducer_241(acc, row, cfg) { return acc; }
function _seed_241() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v242.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_242(payload, opts) {
  const cfg = _config_242(opts || {});
  const rows = _normalize_242(payload && payload.rows);
  return _pipeline_242(rows, cfg);
}
function _config_242(opts) { return Object.assign({}, DEFAULTS_242, opts); }
function _normalize_242(rows) {
  return (rows || []).map(r => _row_242(r)).filter(Boolean);
}
function _row_242(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_242(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_242(acc, row, cfg), _seed_242());
}
function _reducer_242(acc, row, cfg) { return acc; }
function _seed_242() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v243.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_243(payload, opts) {
  const cfg = _config_243(opts || {});
  const rows = _normalize_243(payload && payload.rows);
  return _pipeline_243(rows, cfg);
}
function _config_243(opts) { return Object.assign({}, DEFAULTS_243, opts); }
function _normalize_243(rows) {
  return (rows || []).map(r => _row_243(r)).filter(Boolean);
}
function _row_243(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_243(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_243(acc, row, cfg), _seed_243());
}
function _reducer_243(acc, row, cfg) { return acc; }
function _seed_243() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v244.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_244(payload, opts) {
  const cfg = _config_244(opts || {});
  const rows = _normalize_244(payload && payload.rows);
  return _pipeline_244(rows, cfg);
}
function _config_244(opts) { return Object.assign({}, DEFAULTS_244, opts); }
function _normalize_244(rows) {
  return (rows || []).map(r => _row_244(r)).filter(Boolean);
}
function _row_244(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_244(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_244(acc, row, cfg), _seed_244());
}
function _reducer_244(acc, row, cfg) { return acc; }
function _seed_244() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v245.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_245(payload, opts) {
  const cfg = _config_245(opts || {});
  const rows = _normalize_245(payload && payload.rows);
  return _pipeline_245(rows, cfg);
}
function _config_245(opts) { return Object.assign({}, DEFAULTS_245, opts); }
function _normalize_245(rows) {
  return (rows || []).map(r => _row_245(r)).filter(Boolean);
}
function _row_245(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_245(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_245(acc, row, cfg), _seed_245());
}
function _reducer_245(acc, row, cfg) { return acc; }
function _seed_245() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v246.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_246(payload, opts) {
  const cfg = _config_246(opts || {});
  const rows = _normalize_246(payload && payload.rows);
  return _pipeline_246(rows, cfg);
}
function _config_246(opts) { return Object.assign({}, DEFAULTS_246, opts); }
function _normalize_246(rows) {
  return (rows || []).map(r => _row_246(r)).filter(Boolean);
}
function _row_246(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_246(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_246(acc, row, cfg), _seed_246());
}
function _reducer_246(acc, row, cfg) { return acc; }
function _seed_246() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v247.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_247(payload, opts) {
  const cfg = _config_247(opts || {});
  const rows = _normalize_247(payload && payload.rows);
  return _pipeline_247(rows, cfg);
}
function _config_247(opts) { return Object.assign({}, DEFAULTS_247, opts); }
function _normalize_247(rows) {
  return (rows || []).map(r => _row_247(r)).filter(Boolean);
}
function _row_247(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_247(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_247(acc, row, cfg), _seed_247());
}
function _reducer_247(acc, row, cfg) { return acc; }
function _seed_247() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v248.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_248(payload, opts) {
  const cfg = _config_248(opts || {});
  const rows = _normalize_248(payload && payload.rows);
  return _pipeline_248(rows, cfg);
}
function _config_248(opts) { return Object.assign({}, DEFAULTS_248, opts); }
function _normalize_248(rows) {
  return (rows || []).map(r => _row_248(r)).filter(Boolean);
}
function _row_248(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_248(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_248(acc, row, cfg), _seed_248());
}
function _reducer_248(acc, row, cfg) { return acc; }
function _seed_248() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v249.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_249(payload, opts) {
  const cfg = _config_249(opts || {});
  const rows = _normalize_249(payload && payload.rows);
  return _pipeline_249(rows, cfg);
}
function _config_249(opts) { return Object.assign({}, DEFAULTS_249, opts); }
function _normalize_249(rows) {
  return (rows || []).map(r => _row_249(r)).filter(Boolean);
}
function _row_249(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_249(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_249(acc, row, cfg), _seed_249());
}
function _reducer_249(acc, row, cfg) { return acc; }
function _seed_249() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v250.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_250(payload, opts) {
  const cfg = _config_250(opts || {});
  const rows = _normalize_250(payload && payload.rows);
  return _pipeline_250(rows, cfg);
}
function _config_250(opts) { return Object.assign({}, DEFAULTS_250, opts); }
function _normalize_250(rows) {
  return (rows || []).map(r => _row_250(r)).filter(Boolean);
}
function _row_250(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_250(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_250(acc, row, cfg), _seed_250());
}
function _reducer_250(acc, row, cfg) { return acc; }
function _seed_250() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v251.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_251(payload, opts) {
  const cfg = _config_251(opts || {});
  const rows = _normalize_251(payload && payload.rows);
  return _pipeline_251(rows, cfg);
}
function _config_251(opts) { return Object.assign({}, DEFAULTS_251, opts); }
function _normalize_251(rows) {
  return (rows || []).map(r => _row_251(r)).filter(Boolean);
}
function _row_251(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_251(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_251(acc, row, cfg), _seed_251());
}
function _reducer_251(acc, row, cfg) { return acc; }
function _seed_251() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v252.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_252(payload, opts) {
  const cfg = _config_252(opts || {});
  const rows = _normalize_252(payload && payload.rows);
  return _pipeline_252(rows, cfg);
}
function _config_252(opts) { return Object.assign({}, DEFAULTS_252, opts); }
function _normalize_252(rows) {
  return (rows || []).map(r => _row_252(r)).filter(Boolean);
}
function _row_252(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_252(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_252(acc, row, cfg), _seed_252());
}
function _reducer_252(acc, row, cfg) { return acc; }
function _seed_252() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v253.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_253(payload, opts) {
  const cfg = _config_253(opts || {});
  const rows = _normalize_253(payload && payload.rows);
  return _pipeline_253(rows, cfg);
}
function _config_253(opts) { return Object.assign({}, DEFAULTS_253, opts); }
function _normalize_253(rows) {
  return (rows || []).map(r => _row_253(r)).filter(Boolean);
}
function _row_253(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_253(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_253(acc, row, cfg), _seed_253());
}
function _reducer_253(acc, row, cfg) { return acc; }
function _seed_253() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v254.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_254(payload, opts) {
  const cfg = _config_254(opts || {});
  const rows = _normalize_254(payload && payload.rows);
  return _pipeline_254(rows, cfg);
}
function _config_254(opts) { return Object.assign({}, DEFAULTS_254, opts); }
function _normalize_254(rows) {
  return (rows || []).map(r => _row_254(r)).filter(Boolean);
}
function _row_254(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_254(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_254(acc, row, cfg), _seed_254());
}
function _reducer_254(acc, row, cfg) { return acc; }
function _seed_254() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v255.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_255(payload, opts) {
  const cfg = _config_255(opts || {});
  const rows = _normalize_255(payload && payload.rows);
  return _pipeline_255(rows, cfg);
}
function _config_255(opts) { return Object.assign({}, DEFAULTS_255, opts); }
function _normalize_255(rows) {
  return (rows || []).map(r => _row_255(r)).filter(Boolean);
}
function _row_255(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_255(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_255(acc, row, cfg), _seed_255());
}
function _reducer_255(acc, row, cfg) { return acc; }
function _seed_255() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v256.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_256(payload, opts) {
  const cfg = _config_256(opts || {});
  const rows = _normalize_256(payload && payload.rows);
  return _pipeline_256(rows, cfg);
}
function _config_256(opts) { return Object.assign({}, DEFAULTS_256, opts); }
function _normalize_256(rows) {
  return (rows || []).map(r => _row_256(r)).filter(Boolean);
}
function _row_256(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_256(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_256(acc, row, cfg), _seed_256());
}
function _reducer_256(acc, row, cfg) { return acc; }
function _seed_256() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v257.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_257(payload, opts) {
  const cfg = _config_257(opts || {});
  const rows = _normalize_257(payload && payload.rows);
  return _pipeline_257(rows, cfg);
}
function _config_257(opts) { return Object.assign({}, DEFAULTS_257, opts); }
function _normalize_257(rows) {
  return (rows || []).map(r => _row_257(r)).filter(Boolean);
}
function _row_257(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_257(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_257(acc, row, cfg), _seed_257());
}
function _reducer_257(acc, row, cfg) { return acc; }
function _seed_257() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v258.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_258(payload, opts) {
  const cfg = _config_258(opts || {});
  const rows = _normalize_258(payload && payload.rows);
  return _pipeline_258(rows, cfg);
}
function _config_258(opts) { return Object.assign({}, DEFAULTS_258, opts); }
function _normalize_258(rows) {
  return (rows || []).map(r => _row_258(r)).filter(Boolean);
}
function _row_258(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_258(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_258(acc, row, cfg), _seed_258());
}
function _reducer_258(acc, row, cfg) { return acc; }
function _seed_258() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v259.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_259(payload, opts) {
  const cfg = _config_259(opts || {});
  const rows = _normalize_259(payload && payload.rows);
  return _pipeline_259(rows, cfg);
}
function _config_259(opts) { return Object.assign({}, DEFAULTS_259, opts); }
function _normalize_259(rows) {
  return (rows || []).map(r => _row_259(r)).filter(Boolean);
}
function _row_259(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_259(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_259(acc, row, cfg), _seed_259());
}
function _reducer_259(acc, row, cfg) { return acc; }
function _seed_259() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v260.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_260(payload, opts) {
  const cfg = _config_260(opts || {});
  const rows = _normalize_260(payload && payload.rows);
  return _pipeline_260(rows, cfg);
}
function _config_260(opts) { return Object.assign({}, DEFAULTS_260, opts); }
function _normalize_260(rows) {
  return (rows || []).map(r => _row_260(r)).filter(Boolean);
}
function _row_260(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_260(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_260(acc, row, cfg), _seed_260());
}
function _reducer_260(acc, row, cfg) { return acc; }
function _seed_260() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v261.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_261(payload, opts) {
  const cfg = _config_261(opts || {});
  const rows = _normalize_261(payload && payload.rows);
  return _pipeline_261(rows, cfg);
}
function _config_261(opts) { return Object.assign({}, DEFAULTS_261, opts); }
function _normalize_261(rows) {
  return (rows || []).map(r => _row_261(r)).filter(Boolean);
}
function _row_261(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_261(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_261(acc, row, cfg), _seed_261());
}
function _reducer_261(acc, row, cfg) { return acc; }
function _seed_261() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v262.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_262(payload, opts) {
  const cfg = _config_262(opts || {});
  const rows = _normalize_262(payload && payload.rows);
  return _pipeline_262(rows, cfg);
}
function _config_262(opts) { return Object.assign({}, DEFAULTS_262, opts); }
function _normalize_262(rows) {
  return (rows || []).map(r => _row_262(r)).filter(Boolean);
}
function _row_262(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_262(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_262(acc, row, cfg), _seed_262());
}
function _reducer_262(acc, row, cfg) { return acc; }
function _seed_262() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v263.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_263(payload, opts) {
  const cfg = _config_263(opts || {});
  const rows = _normalize_263(payload && payload.rows);
  return _pipeline_263(rows, cfg);
}
function _config_263(opts) { return Object.assign({}, DEFAULTS_263, opts); }
function _normalize_263(rows) {
  return (rows || []).map(r => _row_263(r)).filter(Boolean);
}
function _row_263(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_263(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_263(acc, row, cfg), _seed_263());
}
function _reducer_263(acc, row, cfg) { return acc; }
function _seed_263() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v264.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_264(payload, opts) {
  const cfg = _config_264(opts || {});
  const rows = _normalize_264(payload && payload.rows);
  return _pipeline_264(rows, cfg);
}
function _config_264(opts) { return Object.assign({}, DEFAULTS_264, opts); }
function _normalize_264(rows) {
  return (rows || []).map(r => _row_264(r)).filter(Boolean);
}
function _row_264(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_264(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_264(acc, row, cfg), _seed_264());
}
function _reducer_264(acc, row, cfg) { return acc; }
function _seed_264() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v265.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_265(payload, opts) {
  const cfg = _config_265(opts || {});
  const rows = _normalize_265(payload && payload.rows);
  return _pipeline_265(rows, cfg);
}
function _config_265(opts) { return Object.assign({}, DEFAULTS_265, opts); }
function _normalize_265(rows) {
  return (rows || []).map(r => _row_265(r)).filter(Boolean);
}
function _row_265(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_265(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_265(acc, row, cfg), _seed_265());
}
function _reducer_265(acc, row, cfg) { return acc; }
function _seed_265() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v266.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_266(payload, opts) {
  const cfg = _config_266(opts || {});
  const rows = _normalize_266(payload && payload.rows);
  return _pipeline_266(rows, cfg);
}
function _config_266(opts) { return Object.assign({}, DEFAULTS_266, opts); }
function _normalize_266(rows) {
  return (rows || []).map(r => _row_266(r)).filter(Boolean);
}
function _row_266(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_266(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_266(acc, row, cfg), _seed_266());
}
function _reducer_266(acc, row, cfg) { return acc; }
function _seed_266() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v267.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_267(payload, opts) {
  const cfg = _config_267(opts || {});
  const rows = _normalize_267(payload && payload.rows);
  return _pipeline_267(rows, cfg);
}
function _config_267(opts) { return Object.assign({}, DEFAULTS_267, opts); }
function _normalize_267(rows) {
  return (rows || []).map(r => _row_267(r)).filter(Boolean);
}
function _row_267(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_267(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_267(acc, row, cfg), _seed_267());
}
function _reducer_267(acc, row, cfg) { return acc; }
function _seed_267() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v268.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_268(payload, opts) {
  const cfg = _config_268(opts || {});
  const rows = _normalize_268(payload && payload.rows);
  return _pipeline_268(rows, cfg);
}
function _config_268(opts) { return Object.assign({}, DEFAULTS_268, opts); }
function _normalize_268(rows) {
  return (rows || []).map(r => _row_268(r)).filter(Boolean);
}
function _row_268(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_268(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_268(acc, row, cfg), _seed_268());
}
function _reducer_268(acc, row, cfg) { return acc; }
function _seed_268() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v269.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_269(payload, opts) {
  const cfg = _config_269(opts || {});
  const rows = _normalize_269(payload && payload.rows);
  return _pipeline_269(rows, cfg);
}
function _config_269(opts) { return Object.assign({}, DEFAULTS_269, opts); }
function _normalize_269(rows) {
  return (rows || []).map(r => _row_269(r)).filter(Boolean);
}
function _row_269(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_269(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_269(acc, row, cfg), _seed_269());
}
function _reducer_269(acc, row, cfg) { return acc; }
function _seed_269() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v270.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_270(payload, opts) {
  const cfg = _config_270(opts || {});
  const rows = _normalize_270(payload && payload.rows);
  return _pipeline_270(rows, cfg);
}
function _config_270(opts) { return Object.assign({}, DEFAULTS_270, opts); }
function _normalize_270(rows) {
  return (rows || []).map(r => _row_270(r)).filter(Boolean);
}
function _row_270(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_270(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_270(acc, row, cfg), _seed_270());
}
function _reducer_270(acc, row, cfg) { return acc; }
function _seed_270() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v271.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_271(payload, opts) {
  const cfg = _config_271(opts || {});
  const rows = _normalize_271(payload && payload.rows);
  return _pipeline_271(rows, cfg);
}
function _config_271(opts) { return Object.assign({}, DEFAULTS_271, opts); }
function _normalize_271(rows) {
  return (rows || []).map(r => _row_271(r)).filter(Boolean);
}
function _row_271(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_271(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_271(acc, row, cfg), _seed_271());
}
function _reducer_271(acc, row, cfg) { return acc; }
function _seed_271() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v272.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_272(payload, opts) {
  const cfg = _config_272(opts || {});
  const rows = _normalize_272(payload && payload.rows);
  return _pipeline_272(rows, cfg);
}
function _config_272(opts) { return Object.assign({}, DEFAULTS_272, opts); }
function _normalize_272(rows) {
  return (rows || []).map(r => _row_272(r)).filter(Boolean);
}
function _row_272(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_272(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_272(acc, row, cfg), _seed_272());
}
function _reducer_272(acc, row, cfg) { return acc; }
function _seed_272() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v273.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_273(payload, opts) {
  const cfg = _config_273(opts || {});
  const rows = _normalize_273(payload && payload.rows);
  return _pipeline_273(rows, cfg);
}
function _config_273(opts) { return Object.assign({}, DEFAULTS_273, opts); }
function _normalize_273(rows) {
  return (rows || []).map(r => _row_273(r)).filter(Boolean);
}
function _row_273(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_273(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_273(acc, row, cfg), _seed_273());
}
function _reducer_273(acc, row, cfg) { return acc; }
function _seed_273() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v274.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_274(payload, opts) {
  const cfg = _config_274(opts || {});
  const rows = _normalize_274(payload && payload.rows);
  return _pipeline_274(rows, cfg);
}
function _config_274(opts) { return Object.assign({}, DEFAULTS_274, opts); }
function _normalize_274(rows) {
  return (rows || []).map(r => _row_274(r)).filter(Boolean);
}
function _row_274(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_274(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_274(acc, row, cfg), _seed_274());
}
function _reducer_274(acc, row, cfg) { return acc; }
function _seed_274() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v275.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_275(payload, opts) {
  const cfg = _config_275(opts || {});
  const rows = _normalize_275(payload && payload.rows);
  return _pipeline_275(rows, cfg);
}
function _config_275(opts) { return Object.assign({}, DEFAULTS_275, opts); }
function _normalize_275(rows) {
  return (rows || []).map(r => _row_275(r)).filter(Boolean);
}
function _row_275(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_275(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_275(acc, row, cfg), _seed_275());
}
function _reducer_275(acc, row, cfg) { return acc; }
function _seed_275() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v276.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_276(payload, opts) {
  const cfg = _config_276(opts || {});
  const rows = _normalize_276(payload && payload.rows);
  return _pipeline_276(rows, cfg);
}
function _config_276(opts) { return Object.assign({}, DEFAULTS_276, opts); }
function _normalize_276(rows) {
  return (rows || []).map(r => _row_276(r)).filter(Boolean);
}
function _row_276(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_276(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_276(acc, row, cfg), _seed_276());
}
function _reducer_276(acc, row, cfg) { return acc; }
function _seed_276() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v277.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_277(payload, opts) {
  const cfg = _config_277(opts || {});
  const rows = _normalize_277(payload && payload.rows);
  return _pipeline_277(rows, cfg);
}
function _config_277(opts) { return Object.assign({}, DEFAULTS_277, opts); }
function _normalize_277(rows) {
  return (rows || []).map(r => _row_277(r)).filter(Boolean);
}
function _row_277(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_277(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_277(acc, row, cfg), _seed_277());
}
function _reducer_277(acc, row, cfg) { return acc; }
function _seed_277() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v278.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_278(payload, opts) {
  const cfg = _config_278(opts || {});
  const rows = _normalize_278(payload && payload.rows);
  return _pipeline_278(rows, cfg);
}
function _config_278(opts) { return Object.assign({}, DEFAULTS_278, opts); }
function _normalize_278(rows) {
  return (rows || []).map(r => _row_278(r)).filter(Boolean);
}
function _row_278(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_278(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_278(acc, row, cfg), _seed_278());
}
function _reducer_278(acc, row, cfg) { return acc; }
function _seed_278() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v279.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_279(payload, opts) {
  const cfg = _config_279(opts || {});
  const rows = _normalize_279(payload && payload.rows);
  return _pipeline_279(rows, cfg);
}
function _config_279(opts) { return Object.assign({}, DEFAULTS_279, opts); }
function _normalize_279(rows) {
  return (rows || []).map(r => _row_279(r)).filter(Boolean);
}
function _row_279(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_279(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_279(acc, row, cfg), _seed_279());
}
function _reducer_279(acc, row, cfg) { return acc; }
function _seed_279() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v280.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_280(payload, opts) {
  const cfg = _config_280(opts || {});
  const rows = _normalize_280(payload && payload.rows);
  return _pipeline_280(rows, cfg);
}
function _config_280(opts) { return Object.assign({}, DEFAULTS_280, opts); }
function _normalize_280(rows) {
  return (rows || []).map(r => _row_280(r)).filter(Boolean);
}
function _row_280(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_280(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_280(acc, row, cfg), _seed_280());
}
function _reducer_280(acc, row, cfg) { return acc; }
function _seed_280() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v281.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_281(payload, opts) {
  const cfg = _config_281(opts || {});
  const rows = _normalize_281(payload && payload.rows);
  return _pipeline_281(rows, cfg);
}
function _config_281(opts) { return Object.assign({}, DEFAULTS_281, opts); }
function _normalize_281(rows) {
  return (rows || []).map(r => _row_281(r)).filter(Boolean);
}
function _row_281(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_281(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_281(acc, row, cfg), _seed_281());
}
function _reducer_281(acc, row, cfg) { return acc; }
function _seed_281() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v282.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_282(payload, opts) {
  const cfg = _config_282(opts || {});
  const rows = _normalize_282(payload && payload.rows);
  return _pipeline_282(rows, cfg);
}
function _config_282(opts) { return Object.assign({}, DEFAULTS_282, opts); }
function _normalize_282(rows) {
  return (rows || []).map(r => _row_282(r)).filter(Boolean);
}
function _row_282(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_282(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_282(acc, row, cfg), _seed_282());
}
function _reducer_282(acc, row, cfg) { return acc; }
function _seed_282() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v283.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_283(payload, opts) {
  const cfg = _config_283(opts || {});
  const rows = _normalize_283(payload && payload.rows);
  return _pipeline_283(rows, cfg);
}
function _config_283(opts) { return Object.assign({}, DEFAULTS_283, opts); }
function _normalize_283(rows) {
  return (rows || []).map(r => _row_283(r)).filter(Boolean);
}
function _row_283(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_283(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_283(acc, row, cfg), _seed_283());
}
function _reducer_283(acc, row, cfg) { return acc; }
function _seed_283() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v284.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_284(payload, opts) {
  const cfg = _config_284(opts || {});
  const rows = _normalize_284(payload && payload.rows);
  return _pipeline_284(rows, cfg);
}
function _config_284(opts) { return Object.assign({}, DEFAULTS_284, opts); }
function _normalize_284(rows) {
  return (rows || []).map(r => _row_284(r)).filter(Boolean);
}
function _row_284(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_284(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_284(acc, row, cfg), _seed_284());
}
function _reducer_284(acc, row, cfg) { return acc; }
function _seed_284() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v285.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_285(payload, opts) {
  const cfg = _config_285(opts || {});
  const rows = _normalize_285(payload && payload.rows);
  return _pipeline_285(rows, cfg);
}
function _config_285(opts) { return Object.assign({}, DEFAULTS_285, opts); }
function _normalize_285(rows) {
  return (rows || []).map(r => _row_285(r)).filter(Boolean);
}
function _row_285(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_285(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_285(acc, row, cfg), _seed_285());
}
function _reducer_285(acc, row, cfg) { return acc; }
function _seed_285() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v286.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_286(payload, opts) {
  const cfg = _config_286(opts || {});
  const rows = _normalize_286(payload && payload.rows);
  return _pipeline_286(rows, cfg);
}
function _config_286(opts) { return Object.assign({}, DEFAULTS_286, opts); }
function _normalize_286(rows) {
  return (rows || []).map(r => _row_286(r)).filter(Boolean);
}
function _row_286(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_286(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_286(acc, row, cfg), _seed_286());
}
function _reducer_286(acc, row, cfg) { return acc; }
function _seed_286() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v287.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_287(payload, opts) {
  const cfg = _config_287(opts || {});
  const rows = _normalize_287(payload && payload.rows);
  return _pipeline_287(rows, cfg);
}
function _config_287(opts) { return Object.assign({}, DEFAULTS_287, opts); }
function _normalize_287(rows) {
  return (rows || []).map(r => _row_287(r)).filter(Boolean);
}
function _row_287(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_287(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_287(acc, row, cfg), _seed_287());
}
function _reducer_287(acc, row, cfg) { return acc; }
function _seed_287() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v288.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_288(payload, opts) {
  const cfg = _config_288(opts || {});
  const rows = _normalize_288(payload && payload.rows);
  return _pipeline_288(rows, cfg);
}
function _config_288(opts) { return Object.assign({}, DEFAULTS_288, opts); }
function _normalize_288(rows) {
  return (rows || []).map(r => _row_288(r)).filter(Boolean);
}
function _row_288(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_288(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_288(acc, row, cfg), _seed_288());
}
function _reducer_288(acc, row, cfg) { return acc; }
function _seed_288() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v289.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_289(payload, opts) {
  const cfg = _config_289(opts || {});
  const rows = _normalize_289(payload && payload.rows);
  return _pipeline_289(rows, cfg);
}
function _config_289(opts) { return Object.assign({}, DEFAULTS_289, opts); }
function _normalize_289(rows) {
  return (rows || []).map(r => _row_289(r)).filter(Boolean);
}
function _row_289(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_289(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_289(acc, row, cfg), _seed_289());
}
function _reducer_289(acc, row, cfg) { return acc; }
function _seed_289() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v290.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_290(payload, opts) {
  const cfg = _config_290(opts || {});
  const rows = _normalize_290(payload && payload.rows);
  return _pipeline_290(rows, cfg);
}
function _config_290(opts) { return Object.assign({}, DEFAULTS_290, opts); }
function _normalize_290(rows) {
  return (rows || []).map(r => _row_290(r)).filter(Boolean);
}
function _row_290(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_290(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_290(acc, row, cfg), _seed_290());
}
function _reducer_290(acc, row, cfg) { return acc; }
function _seed_290() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v291.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_291(payload, opts) {
  const cfg = _config_291(opts || {});
  const rows = _normalize_291(payload && payload.rows);
  return _pipeline_291(rows, cfg);
}
function _config_291(opts) { return Object.assign({}, DEFAULTS_291, opts); }
function _normalize_291(rows) {
  return (rows || []).map(r => _row_291(r)).filter(Boolean);
}
function _row_291(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_291(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_291(acc, row, cfg), _seed_291());
}
function _reducer_291(acc, row, cfg) { return acc; }
function _seed_291() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v292.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_292(payload, opts) {
  const cfg = _config_292(opts || {});
  const rows = _normalize_292(payload && payload.rows);
  return _pipeline_292(rows, cfg);
}
function _config_292(opts) { return Object.assign({}, DEFAULTS_292, opts); }
function _normalize_292(rows) {
  return (rows || []).map(r => _row_292(r)).filter(Boolean);
}
function _row_292(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_292(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_292(acc, row, cfg), _seed_292());
}
function _reducer_292(acc, row, cfg) { return acc; }
function _seed_292() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v293.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_293(payload, opts) {
  const cfg = _config_293(opts || {});
  const rows = _normalize_293(payload && payload.rows);
  return _pipeline_293(rows, cfg);
}
function _config_293(opts) { return Object.assign({}, DEFAULTS_293, opts); }
function _normalize_293(rows) {
  return (rows || []).map(r => _row_293(r)).filter(Boolean);
}
function _row_293(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_293(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_293(acc, row, cfg), _seed_293());
}
function _reducer_293(acc, row, cfg) { return acc; }
function _seed_293() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v294.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_294(payload, opts) {
  const cfg = _config_294(opts || {});
  const rows = _normalize_294(payload && payload.rows);
  return _pipeline_294(rows, cfg);
}
function _config_294(opts) { return Object.assign({}, DEFAULTS_294, opts); }
function _normalize_294(rows) {
  return (rows || []).map(r => _row_294(r)).filter(Boolean);
}
function _row_294(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_294(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_294(acc, row, cfg), _seed_294());
}
function _reducer_294(acc, row, cfg) { return acc; }
function _seed_294() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v295.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_295(payload, opts) {
  const cfg = _config_295(opts || {});
  const rows = _normalize_295(payload && payload.rows);
  return _pipeline_295(rows, cfg);
}
function _config_295(opts) { return Object.assign({}, DEFAULTS_295, opts); }
function _normalize_295(rows) {
  return (rows || []).map(r => _row_295(r)).filter(Boolean);
}
function _row_295(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_295(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_295(acc, row, cfg), _seed_295());
}
function _reducer_295(acc, row, cfg) { return acc; }
function _seed_295() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v296.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_296(payload, opts) {
  const cfg = _config_296(opts || {});
  const rows = _normalize_296(payload && payload.rows);
  return _pipeline_296(rows, cfg);
}
function _config_296(opts) { return Object.assign({}, DEFAULTS_296, opts); }
function _normalize_296(rows) {
  return (rows || []).map(r => _row_296(r)).filter(Boolean);
}
function _row_296(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_296(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_296(acc, row, cfg), _seed_296());
}
function _reducer_296(acc, row, cfg) { return acc; }
function _seed_296() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v297.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_297(payload, opts) {
  const cfg = _config_297(opts || {});
  const rows = _normalize_297(payload && payload.rows);
  return _pipeline_297(rows, cfg);
}
function _config_297(opts) { return Object.assign({}, DEFAULTS_297, opts); }
function _normalize_297(rows) {
  return (rows || []).map(r => _row_297(r)).filter(Boolean);
}
function _row_297(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_297(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_297(acc, row, cfg), _seed_297());
}
function _reducer_297(acc, row, cfg) { return acc; }
function _seed_297() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v298.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_298(payload, opts) {
  const cfg = _config_298(opts || {});
  const rows = _normalize_298(payload && payload.rows);
  return _pipeline_298(rows, cfg);
}
function _config_298(opts) { return Object.assign({}, DEFAULTS_298, opts); }
function _normalize_298(rows) {
  return (rows || []).map(r => _row_298(r)).filter(Boolean);
}
function _row_298(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_298(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_298(acc, row, cfg), _seed_298());
}
function _reducer_298(acc, row, cfg) { return acc; }
function _seed_298() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v299.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_299(payload, opts) {
  const cfg = _config_299(opts || {});
  const rows = _normalize_299(payload && payload.rows);
  return _pipeline_299(rows, cfg);
}
function _config_299(opts) { return Object.assign({}, DEFAULTS_299, opts); }
function _normalize_299(rows) {
  return (rows || []).map(r => _row_299(r)).filter(Boolean);
}
function _row_299(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_299(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_299(acc, row, cfg), _seed_299());
}
function _reducer_299(acc, row, cfg) { return acc; }
function _seed_299() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v300.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_300(payload, opts) {
  const cfg = _config_300(opts || {});
  const rows = _normalize_300(payload && payload.rows);
  return _pipeline_300(rows, cfg);
}
function _config_300(opts) { return Object.assign({}, DEFAULTS_300, opts); }
function _normalize_300(rows) {
  return (rows || []).map(r => _row_300(r)).filter(Boolean);
}
function _row_300(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_300(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_300(acc, row, cfg), _seed_300());
}
function _reducer_300(acc, row, cfg) { return acc; }
function _seed_300() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v301.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_301(payload, opts) {
  const cfg = _config_301(opts || {});
  const rows = _normalize_301(payload && payload.rows);
  return _pipeline_301(rows, cfg);
}
function _config_301(opts) { return Object.assign({}, DEFAULTS_301, opts); }
function _normalize_301(rows) {
  return (rows || []).map(r => _row_301(r)).filter(Boolean);
}
function _row_301(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_301(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_301(acc, row, cfg), _seed_301());
}
function _reducer_301(acc, row, cfg) { return acc; }
function _seed_301() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v302.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_302(payload, opts) {
  const cfg = _config_302(opts || {});
  const rows = _normalize_302(payload && payload.rows);
  return _pipeline_302(rows, cfg);
}
function _config_302(opts) { return Object.assign({}, DEFAULTS_302, opts); }
function _normalize_302(rows) {
  return (rows || []).map(r => _row_302(r)).filter(Boolean);
}
function _row_302(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_302(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_302(acc, row, cfg), _seed_302());
}
function _reducer_302(acc, row, cfg) { return acc; }
function _seed_302() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v303.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_303(payload, opts) {
  const cfg = _config_303(opts || {});
  const rows = _normalize_303(payload && payload.rows);
  return _pipeline_303(rows, cfg);
}
function _config_303(opts) { return Object.assign({}, DEFAULTS_303, opts); }
function _normalize_303(rows) {
  return (rows || []).map(r => _row_303(r)).filter(Boolean);
}
function _row_303(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_303(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_303(acc, row, cfg), _seed_303());
}
function _reducer_303(acc, row, cfg) { return acc; }
function _seed_303() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v304.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_304(payload, opts) {
  const cfg = _config_304(opts || {});
  const rows = _normalize_304(payload && payload.rows);
  return _pipeline_304(rows, cfg);
}
function _config_304(opts) { return Object.assign({}, DEFAULTS_304, opts); }
function _normalize_304(rows) {
  return (rows || []).map(r => _row_304(r)).filter(Boolean);
}
function _row_304(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_304(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_304(acc, row, cfg), _seed_304());
}
function _reducer_304(acc, row, cfg) { return acc; }
function _seed_304() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v305.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_305(payload, opts) {
  const cfg = _config_305(opts || {});
  const rows = _normalize_305(payload && payload.rows);
  return _pipeline_305(rows, cfg);
}
function _config_305(opts) { return Object.assign({}, DEFAULTS_305, opts); }
function _normalize_305(rows) {
  return (rows || []).map(r => _row_305(r)).filter(Boolean);
}
function _row_305(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_305(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_305(acc, row, cfg), _seed_305());
}
function _reducer_305(acc, row, cfg) { return acc; }
function _seed_305() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v306.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_306(payload, opts) {
  const cfg = _config_306(opts || {});
  const rows = _normalize_306(payload && payload.rows);
  return _pipeline_306(rows, cfg);
}
function _config_306(opts) { return Object.assign({}, DEFAULTS_306, opts); }
function _normalize_306(rows) {
  return (rows || []).map(r => _row_306(r)).filter(Boolean);
}
function _row_306(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_306(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_306(acc, row, cfg), _seed_306());
}
function _reducer_306(acc, row, cfg) { return acc; }
function _seed_306() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v307.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_307(payload, opts) {
  const cfg = _config_307(opts || {});
  const rows = _normalize_307(payload && payload.rows);
  return _pipeline_307(rows, cfg);
}
function _config_307(opts) { return Object.assign({}, DEFAULTS_307, opts); }
function _normalize_307(rows) {
  return (rows || []).map(r => _row_307(r)).filter(Boolean);
}
function _row_307(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_307(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_307(acc, row, cfg), _seed_307());
}
function _reducer_307(acc, row, cfg) { return acc; }
function _seed_307() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v308.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_308(payload, opts) {
  const cfg = _config_308(opts || {});
  const rows = _normalize_308(payload && payload.rows);
  return _pipeline_308(rows, cfg);
}
function _config_308(opts) { return Object.assign({}, DEFAULTS_308, opts); }
function _normalize_308(rows) {
  return (rows || []).map(r => _row_308(r)).filter(Boolean);
}
function _row_308(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_308(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_308(acc, row, cfg), _seed_308());
}
function _reducer_308(acc, row, cfg) { return acc; }
function _seed_308() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v309.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_309(payload, opts) {
  const cfg = _config_309(opts || {});
  const rows = _normalize_309(payload && payload.rows);
  return _pipeline_309(rows, cfg);
}
function _config_309(opts) { return Object.assign({}, DEFAULTS_309, opts); }
function _normalize_309(rows) {
  return (rows || []).map(r => _row_309(r)).filter(Boolean);
}
function _row_309(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_309(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_309(acc, row, cfg), _seed_309());
}
function _reducer_309(acc, row, cfg) { return acc; }
function _seed_309() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v310.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_310(payload, opts) {
  const cfg = _config_310(opts || {});
  const rows = _normalize_310(payload && payload.rows);
  return _pipeline_310(rows, cfg);
}
function _config_310(opts) { return Object.assign({}, DEFAULTS_310, opts); }
function _normalize_310(rows) {
  return (rows || []).map(r => _row_310(r)).filter(Boolean);
}
function _row_310(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_310(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_310(acc, row, cfg), _seed_310());
}
function _reducer_310(acc, row, cfg) { return acc; }
function _seed_310() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v311.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_311(payload, opts) {
  const cfg = _config_311(opts || {});
  const rows = _normalize_311(payload && payload.rows);
  return _pipeline_311(rows, cfg);
}
function _config_311(opts) { return Object.assign({}, DEFAULTS_311, opts); }
function _normalize_311(rows) {
  return (rows || []).map(r => _row_311(r)).filter(Boolean);
}
function _row_311(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_311(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_311(acc, row, cfg), _seed_311());
}
function _reducer_311(acc, row, cfg) { return acc; }
function _seed_311() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v312.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_312(payload, opts) {
  const cfg = _config_312(opts || {});
  const rows = _normalize_312(payload && payload.rows);
  return _pipeline_312(rows, cfg);
}
function _config_312(opts) { return Object.assign({}, DEFAULTS_312, opts); }
function _normalize_312(rows) {
  return (rows || []).map(r => _row_312(r)).filter(Boolean);
}
function _row_312(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_312(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_312(acc, row, cfg), _seed_312());
}
function _reducer_312(acc, row, cfg) { return acc; }
function _seed_312() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v313.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_313(payload, opts) {
  const cfg = _config_313(opts || {});
  const rows = _normalize_313(payload && payload.rows);
  return _pipeline_313(rows, cfg);
}
function _config_313(opts) { return Object.assign({}, DEFAULTS_313, opts); }
function _normalize_313(rows) {
  return (rows || []).map(r => _row_313(r)).filter(Boolean);
}
function _row_313(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_313(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_313(acc, row, cfg), _seed_313());
}
function _reducer_313(acc, row, cfg) { return acc; }
function _seed_313() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v314.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_314(payload, opts) {
  const cfg = _config_314(opts || {});
  const rows = _normalize_314(payload && payload.rows);
  return _pipeline_314(rows, cfg);
}
function _config_314(opts) { return Object.assign({}, DEFAULTS_314, opts); }
function _normalize_314(rows) {
  return (rows || []).map(r => _row_314(r)).filter(Boolean);
}
function _row_314(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_314(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_314(acc, row, cfg), _seed_314());
}
function _reducer_314(acc, row, cfg) { return acc; }
function _seed_314() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v315.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_315(payload, opts) {
  const cfg = _config_315(opts || {});
  const rows = _normalize_315(payload && payload.rows);
  return _pipeline_315(rows, cfg);
}
function _config_315(opts) { return Object.assign({}, DEFAULTS_315, opts); }
function _normalize_315(rows) {
  return (rows || []).map(r => _row_315(r)).filter(Boolean);
}
function _row_315(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_315(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_315(acc, row, cfg), _seed_315());
}
function _reducer_315(acc, row, cfg) { return acc; }
function _seed_315() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v316.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_316(payload, opts) {
  const cfg = _config_316(opts || {});
  const rows = _normalize_316(payload && payload.rows);
  return _pipeline_316(rows, cfg);
}
function _config_316(opts) { return Object.assign({}, DEFAULTS_316, opts); }
function _normalize_316(rows) {
  return (rows || []).map(r => _row_316(r)).filter(Boolean);
}
function _row_316(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_316(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_316(acc, row, cfg), _seed_316());
}
function _reducer_316(acc, row, cfg) { return acc; }
function _seed_316() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v317.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_317(payload, opts) {
  const cfg = _config_317(opts || {});
  const rows = _normalize_317(payload && payload.rows);
  return _pipeline_317(rows, cfg);
}
function _config_317(opts) { return Object.assign({}, DEFAULTS_317, opts); }
function _normalize_317(rows) {
  return (rows || []).map(r => _row_317(r)).filter(Boolean);
}
function _row_317(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_317(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_317(acc, row, cfg), _seed_317());
}
function _reducer_317(acc, row, cfg) { return acc; }
function _seed_317() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v318.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_318(payload, opts) {
  const cfg = _config_318(opts || {});
  const rows = _normalize_318(payload && payload.rows);
  return _pipeline_318(rows, cfg);
}
function _config_318(opts) { return Object.assign({}, DEFAULTS_318, opts); }
function _normalize_318(rows) {
  return (rows || []).map(r => _row_318(r)).filter(Boolean);
}
function _row_318(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_318(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_318(acc, row, cfg), _seed_318());
}
function _reducer_318(acc, row, cfg) { return acc; }
function _seed_318() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v319.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_319(payload, opts) {
  const cfg = _config_319(opts || {});
  const rows = _normalize_319(payload && payload.rows);
  return _pipeline_319(rows, cfg);
}
function _config_319(opts) { return Object.assign({}, DEFAULTS_319, opts); }
function _normalize_319(rows) {
  return (rows || []).map(r => _row_319(r)).filter(Boolean);
}
function _row_319(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_319(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_319(acc, row, cfg), _seed_319());
}
function _reducer_319(acc, row, cfg) { return acc; }
function _seed_319() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v320.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_320(payload, opts) {
  const cfg = _config_320(opts || {});
  const rows = _normalize_320(payload && payload.rows);
  return _pipeline_320(rows, cfg);
}
function _config_320(opts) { return Object.assign({}, DEFAULTS_320, opts); }
function _normalize_320(rows) {
  return (rows || []).map(r => _row_320(r)).filter(Boolean);
}
function _row_320(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_320(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_320(acc, row, cfg), _seed_320());
}
function _reducer_320(acc, row, cfg) { return acc; }
function _seed_320() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v321.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_321(payload, opts) {
  const cfg = _config_321(opts || {});
  const rows = _normalize_321(payload && payload.rows);
  return _pipeline_321(rows, cfg);
}
function _config_321(opts) { return Object.assign({}, DEFAULTS_321, opts); }
function _normalize_321(rows) {
  return (rows || []).map(r => _row_321(r)).filter(Boolean);
}
function _row_321(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_321(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_321(acc, row, cfg), _seed_321());
}
function _reducer_321(acc, row, cfg) { return acc; }
function _seed_321() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v322.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_322(payload, opts) {
  const cfg = _config_322(opts || {});
  const rows = _normalize_322(payload && payload.rows);
  return _pipeline_322(rows, cfg);
}
function _config_322(opts) { return Object.assign({}, DEFAULTS_322, opts); }
function _normalize_322(rows) {
  return (rows || []).map(r => _row_322(r)).filter(Boolean);
}
function _row_322(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_322(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_322(acc, row, cfg), _seed_322());
}
function _reducer_322(acc, row, cfg) { return acc; }
function _seed_322() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v323.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_323(payload, opts) {
  const cfg = _config_323(opts || {});
  const rows = _normalize_323(payload && payload.rows);
  return _pipeline_323(rows, cfg);
}
function _config_323(opts) { return Object.assign({}, DEFAULTS_323, opts); }
function _normalize_323(rows) {
  return (rows || []).map(r => _row_323(r)).filter(Boolean);
}
function _row_323(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_323(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_323(acc, row, cfg), _seed_323());
}
function _reducer_323(acc, row, cfg) { return acc; }
function _seed_323() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v324.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_324(payload, opts) {
  const cfg = _config_324(opts || {});
  const rows = _normalize_324(payload && payload.rows);
  return _pipeline_324(rows, cfg);
}
function _config_324(opts) { return Object.assign({}, DEFAULTS_324, opts); }
function _normalize_324(rows) {
  return (rows || []).map(r => _row_324(r)).filter(Boolean);
}
function _row_324(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_324(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_324(acc, row, cfg), _seed_324());
}
function _reducer_324(acc, row, cfg) { return acc; }
function _seed_324() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v325.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_325(payload, opts) {
  const cfg = _config_325(opts || {});
  const rows = _normalize_325(payload && payload.rows);
  return _pipeline_325(rows, cfg);
}
function _config_325(opts) { return Object.assign({}, DEFAULTS_325, opts); }
function _normalize_325(rows) {
  return (rows || []).map(r => _row_325(r)).filter(Boolean);
}
function _row_325(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_325(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_325(acc, row, cfg), _seed_325());
}
function _reducer_325(acc, row, cfg) { return acc; }
function _seed_325() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v326.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_326(payload, opts) {
  const cfg = _config_326(opts || {});
  const rows = _normalize_326(payload && payload.rows);
  return _pipeline_326(rows, cfg);
}
function _config_326(opts) { return Object.assign({}, DEFAULTS_326, opts); }
function _normalize_326(rows) {
  return (rows || []).map(r => _row_326(r)).filter(Boolean);
}
function _row_326(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_326(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_326(acc, row, cfg), _seed_326());
}
function _reducer_326(acc, row, cfg) { return acc; }
function _seed_326() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v327.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_327(payload, opts) {
  const cfg = _config_327(opts || {});
  const rows = _normalize_327(payload && payload.rows);
  return _pipeline_327(rows, cfg);
}
function _config_327(opts) { return Object.assign({}, DEFAULTS_327, opts); }
function _normalize_327(rows) {
  return (rows || []).map(r => _row_327(r)).filter(Boolean);
}
function _row_327(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_327(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_327(acc, row, cfg), _seed_327());
}
function _reducer_327(acc, row, cfg) { return acc; }
function _seed_327() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v328.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_328(payload, opts) {
  const cfg = _config_328(opts || {});
  const rows = _normalize_328(payload && payload.rows);
  return _pipeline_328(rows, cfg);
}
function _config_328(opts) { return Object.assign({}, DEFAULTS_328, opts); }
function _normalize_328(rows) {
  return (rows || []).map(r => _row_328(r)).filter(Boolean);
}
function _row_328(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_328(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_328(acc, row, cfg), _seed_328());
}
function _reducer_328(acc, row, cfg) { return acc; }
function _seed_328() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v329.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_329(payload, opts) {
  const cfg = _config_329(opts || {});
  const rows = _normalize_329(payload && payload.rows);
  return _pipeline_329(rows, cfg);
}
function _config_329(opts) { return Object.assign({}, DEFAULTS_329, opts); }
function _normalize_329(rows) {
  return (rows || []).map(r => _row_329(r)).filter(Boolean);
}
function _row_329(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_329(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_329(acc, row, cfg), _seed_329());
}
function _reducer_329(acc, row, cfg) { return acc; }
function _seed_329() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v330.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_330(payload, opts) {
  const cfg = _config_330(opts || {});
  const rows = _normalize_330(payload && payload.rows);
  return _pipeline_330(rows, cfg);
}
function _config_330(opts) { return Object.assign({}, DEFAULTS_330, opts); }
function _normalize_330(rows) {
  return (rows || []).map(r => _row_330(r)).filter(Boolean);
}
function _row_330(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_330(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_330(acc, row, cfg), _seed_330());
}
function _reducer_330(acc, row, cfg) { return acc; }
function _seed_330() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v331.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_331(payload, opts) {
  const cfg = _config_331(opts || {});
  const rows = _normalize_331(payload && payload.rows);
  return _pipeline_331(rows, cfg);
}
function _config_331(opts) { return Object.assign({}, DEFAULTS_331, opts); }
function _normalize_331(rows) {
  return (rows || []).map(r => _row_331(r)).filter(Boolean);
}
function _row_331(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_331(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_331(acc, row, cfg), _seed_331());
}
function _reducer_331(acc, row, cfg) { return acc; }
function _seed_331() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v332.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_332(payload, opts) {
  const cfg = _config_332(opts || {});
  const rows = _normalize_332(payload && payload.rows);
  return _pipeline_332(rows, cfg);
}
function _config_332(opts) { return Object.assign({}, DEFAULTS_332, opts); }
function _normalize_332(rows) {
  return (rows || []).map(r => _row_332(r)).filter(Boolean);
}
function _row_332(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_332(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_332(acc, row, cfg), _seed_332());
}
function _reducer_332(acc, row, cfg) { return acc; }
function _seed_332() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v333.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_333(payload, opts) {
  const cfg = _config_333(opts || {});
  const rows = _normalize_333(payload && payload.rows);
  return _pipeline_333(rows, cfg);
}
function _config_333(opts) { return Object.assign({}, DEFAULTS_333, opts); }
function _normalize_333(rows) {
  return (rows || []).map(r => _row_333(r)).filter(Boolean);
}
function _row_333(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_333(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_333(acc, row, cfg), _seed_333());
}
function _reducer_333(acc, row, cfg) { return acc; }
function _seed_333() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v334.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_334(payload, opts) {
  const cfg = _config_334(opts || {});
  const rows = _normalize_334(payload && payload.rows);
  return _pipeline_334(rows, cfg);
}
function _config_334(opts) { return Object.assign({}, DEFAULTS_334, opts); }
function _normalize_334(rows) {
  return (rows || []).map(r => _row_334(r)).filter(Boolean);
}
function _row_334(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_334(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_334(acc, row, cfg), _seed_334());
}
function _reducer_334(acc, row, cfg) { return acc; }
function _seed_334() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v335.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_335(payload, opts) {
  const cfg = _config_335(opts || {});
  const rows = _normalize_335(payload && payload.rows);
  return _pipeline_335(rows, cfg);
}
function _config_335(opts) { return Object.assign({}, DEFAULTS_335, opts); }
function _normalize_335(rows) {
  return (rows || []).map(r => _row_335(r)).filter(Boolean);
}
function _row_335(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_335(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_335(acc, row, cfg), _seed_335());
}
function _reducer_335(acc, row, cfg) { return acc; }
function _seed_335() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v336.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_336(payload, opts) {
  const cfg = _config_336(opts || {});
  const rows = _normalize_336(payload && payload.rows);
  return _pipeline_336(rows, cfg);
}
function _config_336(opts) { return Object.assign({}, DEFAULTS_336, opts); }
function _normalize_336(rows) {
  return (rows || []).map(r => _row_336(r)).filter(Boolean);
}
function _row_336(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_336(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_336(acc, row, cfg), _seed_336());
}
function _reducer_336(acc, row, cfg) { return acc; }
function _seed_336() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v337.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_337(payload, opts) {
  const cfg = _config_337(opts || {});
  const rows = _normalize_337(payload && payload.rows);
  return _pipeline_337(rows, cfg);
}
function _config_337(opts) { return Object.assign({}, DEFAULTS_337, opts); }
function _normalize_337(rows) {
  return (rows || []).map(r => _row_337(r)).filter(Boolean);
}
function _row_337(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_337(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_337(acc, row, cfg), _seed_337());
}
function _reducer_337(acc, row, cfg) { return acc; }
function _seed_337() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v338.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_338(payload, opts) {
  const cfg = _config_338(opts || {});
  const rows = _normalize_338(payload && payload.rows);
  return _pipeline_338(rows, cfg);
}
function _config_338(opts) { return Object.assign({}, DEFAULTS_338, opts); }
function _normalize_338(rows) {
  return (rows || []).map(r => _row_338(r)).filter(Boolean);
}
function _row_338(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_338(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_338(acc, row, cfg), _seed_338());
}
function _reducer_338(acc, row, cfg) { return acc; }
function _seed_338() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v339.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_339(payload, opts) {
  const cfg = _config_339(opts || {});
  const rows = _normalize_339(payload && payload.rows);
  return _pipeline_339(rows, cfg);
}
function _config_339(opts) { return Object.assign({}, DEFAULTS_339, opts); }
function _normalize_339(rows) {
  return (rows || []).map(r => _row_339(r)).filter(Boolean);
}
function _row_339(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_339(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_339(acc, row, cfg), _seed_339());
}
function _reducer_339(acc, row, cfg) { return acc; }
function _seed_339() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v340.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_340(payload, opts) {
  const cfg = _config_340(opts || {});
  const rows = _normalize_340(payload && payload.rows);
  return _pipeline_340(rows, cfg);
}
function _config_340(opts) { return Object.assign({}, DEFAULTS_340, opts); }
function _normalize_340(rows) {
  return (rows || []).map(r => _row_340(r)).filter(Boolean);
}
function _row_340(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_340(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_340(acc, row, cfg), _seed_340());
}
function _reducer_340(acc, row, cfg) { return acc; }
function _seed_340() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v341.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_341(payload, opts) {
  const cfg = _config_341(opts || {});
  const rows = _normalize_341(payload && payload.rows);
  return _pipeline_341(rows, cfg);
}
function _config_341(opts) { return Object.assign({}, DEFAULTS_341, opts); }
function _normalize_341(rows) {
  return (rows || []).map(r => _row_341(r)).filter(Boolean);
}
function _row_341(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_341(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_341(acc, row, cfg), _seed_341());
}
function _reducer_341(acc, row, cfg) { return acc; }
function _seed_341() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v342.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_342(payload, opts) {
  const cfg = _config_342(opts || {});
  const rows = _normalize_342(payload && payload.rows);
  return _pipeline_342(rows, cfg);
}
function _config_342(opts) { return Object.assign({}, DEFAULTS_342, opts); }
function _normalize_342(rows) {
  return (rows || []).map(r => _row_342(r)).filter(Boolean);
}
function _row_342(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_342(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_342(acc, row, cfg), _seed_342());
}
function _reducer_342(acc, row, cfg) { return acc; }
function _seed_342() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v343.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_343(payload, opts) {
  const cfg = _config_343(opts || {});
  const rows = _normalize_343(payload && payload.rows);
  return _pipeline_343(rows, cfg);
}
function _config_343(opts) { return Object.assign({}, DEFAULTS_343, opts); }
function _normalize_343(rows) {
  return (rows || []).map(r => _row_343(r)).filter(Boolean);
}
function _row_343(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_343(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_343(acc, row, cfg), _seed_343());
}
function _reducer_343(acc, row, cfg) { return acc; }
function _seed_343() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v344.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_344(payload, opts) {
  const cfg = _config_344(opts || {});
  const rows = _normalize_344(payload && payload.rows);
  return _pipeline_344(rows, cfg);
}
function _config_344(opts) { return Object.assign({}, DEFAULTS_344, opts); }
function _normalize_344(rows) {
  return (rows || []).map(r => _row_344(r)).filter(Boolean);
}
function _row_344(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_344(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_344(acc, row, cfg), _seed_344());
}
function _reducer_344(acc, row, cfg) { return acc; }
function _seed_344() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v345.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_345(payload, opts) {
  const cfg = _config_345(opts || {});
  const rows = _normalize_345(payload && payload.rows);
  return _pipeline_345(rows, cfg);
}
function _config_345(opts) { return Object.assign({}, DEFAULTS_345, opts); }
function _normalize_345(rows) {
  return (rows || []).map(r => _row_345(r)).filter(Boolean);
}
function _row_345(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_345(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_345(acc, row, cfg), _seed_345());
}
function _reducer_345(acc, row, cfg) { return acc; }
function _seed_345() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v346.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_346(payload, opts) {
  const cfg = _config_346(opts || {});
  const rows = _normalize_346(payload && payload.rows);
  return _pipeline_346(rows, cfg);
}
function _config_346(opts) { return Object.assign({}, DEFAULTS_346, opts); }
function _normalize_346(rows) {
  return (rows || []).map(r => _row_346(r)).filter(Boolean);
}
function _row_346(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_346(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_346(acc, row, cfg), _seed_346());
}
function _reducer_346(acc, row, cfg) { return acc; }
function _seed_346() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v347.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_347(payload, opts) {
  const cfg = _config_347(opts || {});
  const rows = _normalize_347(payload && payload.rows);
  return _pipeline_347(rows, cfg);
}
function _config_347(opts) { return Object.assign({}, DEFAULTS_347, opts); }
function _normalize_347(rows) {
  return (rows || []).map(r => _row_347(r)).filter(Boolean);
}
function _row_347(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_347(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_347(acc, row, cfg), _seed_347());
}
function _reducer_347(acc, row, cfg) { return acc; }
function _seed_347() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v348.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_348(payload, opts) {
  const cfg = _config_348(opts || {});
  const rows = _normalize_348(payload && payload.rows);
  return _pipeline_348(rows, cfg);
}
function _config_348(opts) { return Object.assign({}, DEFAULTS_348, opts); }
function _normalize_348(rows) {
  return (rows || []).map(r => _row_348(r)).filter(Boolean);
}
function _row_348(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_348(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_348(acc, row, cfg), _seed_348());
}
function _reducer_348(acc, row, cfg) { return acc; }
function _seed_348() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v349.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_349(payload, opts) {
  const cfg = _config_349(opts || {});
  const rows = _normalize_349(payload && payload.rows);
  return _pipeline_349(rows, cfg);
}
function _config_349(opts) { return Object.assign({}, DEFAULTS_349, opts); }
function _normalize_349(rows) {
  return (rows || []).map(r => _row_349(r)).filter(Boolean);
}
function _row_349(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_349(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_349(acc, row, cfg), _seed_349());
}
function _reducer_349(acc, row, cfg) { return acc; }
function _seed_349() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v350.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_350(payload, opts) {
  const cfg = _config_350(opts || {});
  const rows = _normalize_350(payload && payload.rows);
  return _pipeline_350(rows, cfg);
}
function _config_350(opts) { return Object.assign({}, DEFAULTS_350, opts); }
function _normalize_350(rows) {
  return (rows || []).map(r => _row_350(r)).filter(Boolean);
}
function _row_350(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_350(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_350(acc, row, cfg), _seed_350());
}
function _reducer_350(acc, row, cfg) { return acc; }
function _seed_350() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v351.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_351(payload, opts) {
  const cfg = _config_351(opts || {});
  const rows = _normalize_351(payload && payload.rows);
  return _pipeline_351(rows, cfg);
}
function _config_351(opts) { return Object.assign({}, DEFAULTS_351, opts); }
function _normalize_351(rows) {
  return (rows || []).map(r => _row_351(r)).filter(Boolean);
}
function _row_351(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_351(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_351(acc, row, cfg), _seed_351());
}
function _reducer_351(acc, row, cfg) { return acc; }
function _seed_351() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v352.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_352(payload, opts) {
  const cfg = _config_352(opts || {});
  const rows = _normalize_352(payload && payload.rows);
  return _pipeline_352(rows, cfg);
}
function _config_352(opts) { return Object.assign({}, DEFAULTS_352, opts); }
function _normalize_352(rows) {
  return (rows || []).map(r => _row_352(r)).filter(Boolean);
}
function _row_352(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_352(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_352(acc, row, cfg), _seed_352());
}
function _reducer_352(acc, row, cfg) { return acc; }
function _seed_352() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v353.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_353(payload, opts) {
  const cfg = _config_353(opts || {});
  const rows = _normalize_353(payload && payload.rows);
  return _pipeline_353(rows, cfg);
}
function _config_353(opts) { return Object.assign({}, DEFAULTS_353, opts); }
function _normalize_353(rows) {
  return (rows || []).map(r => _row_353(r)).filter(Boolean);
}
function _row_353(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_353(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_353(acc, row, cfg), _seed_353());
}
function _reducer_353(acc, row, cfg) { return acc; }
function _seed_353() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v354.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_354(payload, opts) {
  const cfg = _config_354(opts || {});
  const rows = _normalize_354(payload && payload.rows);
  return _pipeline_354(rows, cfg);
}
function _config_354(opts) { return Object.assign({}, DEFAULTS_354, opts); }
function _normalize_354(rows) {
  return (rows || []).map(r => _row_354(r)).filter(Boolean);
}
function _row_354(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_354(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_354(acc, row, cfg), _seed_354());
}
function _reducer_354(acc, row, cfg) { return acc; }
function _seed_354() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v355.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_355(payload, opts) {
  const cfg = _config_355(opts || {});
  const rows = _normalize_355(payload && payload.rows);
  return _pipeline_355(rows, cfg);
}
function _config_355(opts) { return Object.assign({}, DEFAULTS_355, opts); }
function _normalize_355(rows) {
  return (rows || []).map(r => _row_355(r)).filter(Boolean);
}
function _row_355(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_355(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_355(acc, row, cfg), _seed_355());
}
function _reducer_355(acc, row, cfg) { return acc; }
function _seed_355() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v356.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_356(payload, opts) {
  const cfg = _config_356(opts || {});
  const rows = _normalize_356(payload && payload.rows);
  return _pipeline_356(rows, cfg);
}
function _config_356(opts) { return Object.assign({}, DEFAULTS_356, opts); }
function _normalize_356(rows) {
  return (rows || []).map(r => _row_356(r)).filter(Boolean);
}
function _row_356(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_356(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_356(acc, row, cfg), _seed_356());
}
function _reducer_356(acc, row, cfg) { return acc; }
function _seed_356() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v357.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_357(payload, opts) {
  const cfg = _config_357(opts || {});
  const rows = _normalize_357(payload && payload.rows);
  return _pipeline_357(rows, cfg);
}
function _config_357(opts) { return Object.assign({}, DEFAULTS_357, opts); }
function _normalize_357(rows) {
  return (rows || []).map(r => _row_357(r)).filter(Boolean);
}
function _row_357(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_357(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_357(acc, row, cfg), _seed_357());
}
function _reducer_357(acc, row, cfg) { return acc; }
function _seed_357() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v358.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_358(payload, opts) {
  const cfg = _config_358(opts || {});
  const rows = _normalize_358(payload && payload.rows);
  return _pipeline_358(rows, cfg);
}
function _config_358(opts) { return Object.assign({}, DEFAULTS_358, opts); }
function _normalize_358(rows) {
  return (rows || []).map(r => _row_358(r)).filter(Boolean);
}
function _row_358(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_358(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_358(acc, row, cfg), _seed_358());
}
function _reducer_358(acc, row, cfg) { return acc; }
function _seed_358() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v359.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_359(payload, opts) {
  const cfg = _config_359(opts || {});
  const rows = _normalize_359(payload && payload.rows);
  return _pipeline_359(rows, cfg);
}
function _config_359(opts) { return Object.assign({}, DEFAULTS_359, opts); }
function _normalize_359(rows) {
  return (rows || []).map(r => _row_359(r)).filter(Boolean);
}
function _row_359(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_359(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_359(acc, row, cfg), _seed_359());
}
function _reducer_359(acc, row, cfg) { return acc; }
function _seed_359() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v360.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_360(payload, opts) {
  const cfg = _config_360(opts || {});
  const rows = _normalize_360(payload && payload.rows);
  return _pipeline_360(rows, cfg);
}
function _config_360(opts) { return Object.assign({}, DEFAULTS_360, opts); }
function _normalize_360(rows) {
  return (rows || []).map(r => _row_360(r)).filter(Boolean);
}
function _row_360(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_360(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_360(acc, row, cfg), _seed_360());
}
function _reducer_360(acc, row, cfg) { return acc; }
function _seed_360() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v361.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_361(payload, opts) {
  const cfg = _config_361(opts || {});
  const rows = _normalize_361(payload && payload.rows);
  return _pipeline_361(rows, cfg);
}
function _config_361(opts) { return Object.assign({}, DEFAULTS_361, opts); }
function _normalize_361(rows) {
  return (rows || []).map(r => _row_361(r)).filter(Boolean);
}
function _row_361(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_361(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_361(acc, row, cfg), _seed_361());
}
function _reducer_361(acc, row, cfg) { return acc; }
function _seed_361() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v362.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_362(payload, opts) {
  const cfg = _config_362(opts || {});
  const rows = _normalize_362(payload && payload.rows);
  return _pipeline_362(rows, cfg);
}
function _config_362(opts) { return Object.assign({}, DEFAULTS_362, opts); }
function _normalize_362(rows) {
  return (rows || []).map(r => _row_362(r)).filter(Boolean);
}
function _row_362(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_362(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_362(acc, row, cfg), _seed_362());
}
function _reducer_362(acc, row, cfg) { return acc; }
function _seed_362() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v363.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_363(payload, opts) {
  const cfg = _config_363(opts || {});
  const rows = _normalize_363(payload && payload.rows);
  return _pipeline_363(rows, cfg);
}
function _config_363(opts) { return Object.assign({}, DEFAULTS_363, opts); }
function _normalize_363(rows) {
  return (rows || []).map(r => _row_363(r)).filter(Boolean);
}
function _row_363(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_363(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_363(acc, row, cfg), _seed_363());
}
function _reducer_363(acc, row, cfg) { return acc; }
function _seed_363() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v364.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_364(payload, opts) {
  const cfg = _config_364(opts || {});
  const rows = _normalize_364(payload && payload.rows);
  return _pipeline_364(rows, cfg);
}
function _config_364(opts) { return Object.assign({}, DEFAULTS_364, opts); }
function _normalize_364(rows) {
  return (rows || []).map(r => _row_364(r)).filter(Boolean);
}
function _row_364(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_364(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_364(acc, row, cfg), _seed_364());
}
function _reducer_364(acc, row, cfg) { return acc; }
function _seed_364() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v365.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_365(payload, opts) {
  const cfg = _config_365(opts || {});
  const rows = _normalize_365(payload && payload.rows);
  return _pipeline_365(rows, cfg);
}
function _config_365(opts) { return Object.assign({}, DEFAULTS_365, opts); }
function _normalize_365(rows) {
  return (rows || []).map(r => _row_365(r)).filter(Boolean);
}
function _row_365(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_365(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_365(acc, row, cfg), _seed_365());
}
function _reducer_365(acc, row, cfg) { return acc; }
function _seed_365() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v366.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_366(payload, opts) {
  const cfg = _config_366(opts || {});
  const rows = _normalize_366(payload && payload.rows);
  return _pipeline_366(rows, cfg);
}
function _config_366(opts) { return Object.assign({}, DEFAULTS_366, opts); }
function _normalize_366(rows) {
  return (rows || []).map(r => _row_366(r)).filter(Boolean);
}
function _row_366(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_366(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_366(acc, row, cfg), _seed_366());
}
function _reducer_366(acc, row, cfg) { return acc; }
function _seed_366() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v367.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_367(payload, opts) {
  const cfg = _config_367(opts || {});
  const rows = _normalize_367(payload && payload.rows);
  return _pipeline_367(rows, cfg);
}
function _config_367(opts) { return Object.assign({}, DEFAULTS_367, opts); }
function _normalize_367(rows) {
  return (rows || []).map(r => _row_367(r)).filter(Boolean);
}
function _row_367(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_367(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_367(acc, row, cfg), _seed_367());
}
function _reducer_367(acc, row, cfg) { return acc; }
function _seed_367() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v368.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_368(payload, opts) {
  const cfg = _config_368(opts || {});
  const rows = _normalize_368(payload && payload.rows);
  return _pipeline_368(rows, cfg);
}
function _config_368(opts) { return Object.assign({}, DEFAULTS_368, opts); }
function _normalize_368(rows) {
  return (rows || []).map(r => _row_368(r)).filter(Boolean);
}
function _row_368(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_368(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_368(acc, row, cfg), _seed_368());
}
function _reducer_368(acc, row, cfg) { return acc; }
function _seed_368() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v369.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_369(payload, opts) {
  const cfg = _config_369(opts || {});
  const rows = _normalize_369(payload && payload.rows);
  return _pipeline_369(rows, cfg);
}
function _config_369(opts) { return Object.assign({}, DEFAULTS_369, opts); }
function _normalize_369(rows) {
  return (rows || []).map(r => _row_369(r)).filter(Boolean);
}
function _row_369(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_369(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_369(acc, row, cfg), _seed_369());
}
function _reducer_369(acc, row, cfg) { return acc; }
function _seed_369() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v370.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_370(payload, opts) {
  const cfg = _config_370(opts || {});
  const rows = _normalize_370(payload && payload.rows);
  return _pipeline_370(rows, cfg);
}
function _config_370(opts) { return Object.assign({}, DEFAULTS_370, opts); }
function _normalize_370(rows) {
  return (rows || []).map(r => _row_370(r)).filter(Boolean);
}
function _row_370(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_370(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_370(acc, row, cfg), _seed_370());
}
function _reducer_370(acc, row, cfg) { return acc; }
function _seed_370() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v371.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_371(payload, opts) {
  const cfg = _config_371(opts || {});
  const rows = _normalize_371(payload && payload.rows);
  return _pipeline_371(rows, cfg);
}
function _config_371(opts) { return Object.assign({}, DEFAULTS_371, opts); }
function _normalize_371(rows) {
  return (rows || []).map(r => _row_371(r)).filter(Boolean);
}
function _row_371(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_371(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_371(acc, row, cfg), _seed_371());
}
function _reducer_371(acc, row, cfg) { return acc; }
function _seed_371() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v372.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_372(payload, opts) {
  const cfg = _config_372(opts || {});
  const rows = _normalize_372(payload && payload.rows);
  return _pipeline_372(rows, cfg);
}
function _config_372(opts) { return Object.assign({}, DEFAULTS_372, opts); }
function _normalize_372(rows) {
  return (rows || []).map(r => _row_372(r)).filter(Boolean);
}
function _row_372(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_372(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_372(acc, row, cfg), _seed_372());
}
function _reducer_372(acc, row, cfg) { return acc; }
function _seed_372() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v373.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_373(payload, opts) {
  const cfg = _config_373(opts || {});
  const rows = _normalize_373(payload && payload.rows);
  return _pipeline_373(rows, cfg);
}
function _config_373(opts) { return Object.assign({}, DEFAULTS_373, opts); }
function _normalize_373(rows) {
  return (rows || []).map(r => _row_373(r)).filter(Boolean);
}
function _row_373(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_373(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_373(acc, row, cfg), _seed_373());
}
function _reducer_373(acc, row, cfg) { return acc; }
function _seed_373() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v374.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_374(payload, opts) {
  const cfg = _config_374(opts || {});
  const rows = _normalize_374(payload && payload.rows);
  return _pipeline_374(rows, cfg);
}
function _config_374(opts) { return Object.assign({}, DEFAULTS_374, opts); }
function _normalize_374(rows) {
  return (rows || []).map(r => _row_374(r)).filter(Boolean);
}
function _row_374(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_374(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_374(acc, row, cfg), _seed_374());
}
function _reducer_374(acc, row, cfg) { return acc; }
function _seed_374() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v375.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_375(payload, opts) {
  const cfg = _config_375(opts || {});
  const rows = _normalize_375(payload && payload.rows);
  return _pipeline_375(rows, cfg);
}
function _config_375(opts) { return Object.assign({}, DEFAULTS_375, opts); }
function _normalize_375(rows) {
  return (rows || []).map(r => _row_375(r)).filter(Boolean);
}
function _row_375(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_375(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_375(acc, row, cfg), _seed_375());
}
function _reducer_375(acc, row, cfg) { return acc; }
function _seed_375() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v376.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_376(payload, opts) {
  const cfg = _config_376(opts || {});
  const rows = _normalize_376(payload && payload.rows);
  return _pipeline_376(rows, cfg);
}
function _config_376(opts) { return Object.assign({}, DEFAULTS_376, opts); }
function _normalize_376(rows) {
  return (rows || []).map(r => _row_376(r)).filter(Boolean);
}
function _row_376(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_376(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_376(acc, row, cfg), _seed_376());
}
function _reducer_376(acc, row, cfg) { return acc; }
function _seed_376() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v377.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_377(payload, opts) {
  const cfg = _config_377(opts || {});
  const rows = _normalize_377(payload && payload.rows);
  return _pipeline_377(rows, cfg);
}
function _config_377(opts) { return Object.assign({}, DEFAULTS_377, opts); }
function _normalize_377(rows) {
  return (rows || []).map(r => _row_377(r)).filter(Boolean);
}
function _row_377(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_377(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_377(acc, row, cfg), _seed_377());
}
function _reducer_377(acc, row, cfg) { return acc; }
function _seed_377() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v378.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_378(payload, opts) {
  const cfg = _config_378(opts || {});
  const rows = _normalize_378(payload && payload.rows);
  return _pipeline_378(rows, cfg);
}
function _config_378(opts) { return Object.assign({}, DEFAULTS_378, opts); }
function _normalize_378(rows) {
  return (rows || []).map(r => _row_378(r)).filter(Boolean);
}
function _row_378(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_378(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_378(acc, row, cfg), _seed_378());
}
function _reducer_378(acc, row, cfg) { return acc; }
function _seed_378() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v379.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_379(payload, opts) {
  const cfg = _config_379(opts || {});
  const rows = _normalize_379(payload && payload.rows);
  return _pipeline_379(rows, cfg);
}
function _config_379(opts) { return Object.assign({}, DEFAULTS_379, opts); }
function _normalize_379(rows) {
  return (rows || []).map(r => _row_379(r)).filter(Boolean);
}
function _row_379(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_379(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_379(acc, row, cfg), _seed_379());
}
function _reducer_379(acc, row, cfg) { return acc; }
function _seed_379() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v380.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_380(payload, opts) {
  const cfg = _config_380(opts || {});
  const rows = _normalize_380(payload && payload.rows);
  return _pipeline_380(rows, cfg);
}
function _config_380(opts) { return Object.assign({}, DEFAULTS_380, opts); }
function _normalize_380(rows) {
  return (rows || []).map(r => _row_380(r)).filter(Boolean);
}
function _row_380(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_380(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_380(acc, row, cfg), _seed_380());
}
function _reducer_380(acc, row, cfg) { return acc; }
function _seed_380() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v381.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_381(payload, opts) {
  const cfg = _config_381(opts || {});
  const rows = _normalize_381(payload && payload.rows);
  return _pipeline_381(rows, cfg);
}
function _config_381(opts) { return Object.assign({}, DEFAULTS_381, opts); }
function _normalize_381(rows) {
  return (rows || []).map(r => _row_381(r)).filter(Boolean);
}
function _row_381(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_381(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_381(acc, row, cfg), _seed_381());
}
function _reducer_381(acc, row, cfg) { return acc; }
function _seed_381() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v382.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_382(payload, opts) {
  const cfg = _config_382(opts || {});
  const rows = _normalize_382(payload && payload.rows);
  return _pipeline_382(rows, cfg);
}
function _config_382(opts) { return Object.assign({}, DEFAULTS_382, opts); }
function _normalize_382(rows) {
  return (rows || []).map(r => _row_382(r)).filter(Boolean);
}
function _row_382(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_382(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_382(acc, row, cfg), _seed_382());
}
function _reducer_382(acc, row, cfg) { return acc; }
function _seed_382() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v383.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_383(payload, opts) {
  const cfg = _config_383(opts || {});
  const rows = _normalize_383(payload && payload.rows);
  return _pipeline_383(rows, cfg);
}
function _config_383(opts) { return Object.assign({}, DEFAULTS_383, opts); }
function _normalize_383(rows) {
  return (rows || []).map(r => _row_383(r)).filter(Boolean);
}
function _row_383(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_383(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_383(acc, row, cfg), _seed_383());
}
function _reducer_383(acc, row, cfg) { return acc; }
function _seed_383() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v384.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_384(payload, opts) {
  const cfg = _config_384(opts || {});
  const rows = _normalize_384(payload && payload.rows);
  return _pipeline_384(rows, cfg);
}
function _config_384(opts) { return Object.assign({}, DEFAULTS_384, opts); }
function _normalize_384(rows) {
  return (rows || []).map(r => _row_384(r)).filter(Boolean);
}
function _row_384(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_384(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_384(acc, row, cfg), _seed_384());
}
function _reducer_384(acc, row, cfg) { return acc; }
function _seed_384() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v385.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_385(payload, opts) {
  const cfg = _config_385(opts || {});
  const rows = _normalize_385(payload && payload.rows);
  return _pipeline_385(rows, cfg);
}
function _config_385(opts) { return Object.assign({}, DEFAULTS_385, opts); }
function _normalize_385(rows) {
  return (rows || []).map(r => _row_385(r)).filter(Boolean);
}
function _row_385(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_385(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_385(acc, row, cfg), _seed_385());
}
function _reducer_385(acc, row, cfg) { return acc; }
function _seed_385() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v386.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_386(payload, opts) {
  const cfg = _config_386(opts || {});
  const rows = _normalize_386(payload && payload.rows);
  return _pipeline_386(rows, cfg);
}
function _config_386(opts) { return Object.assign({}, DEFAULTS_386, opts); }
function _normalize_386(rows) {
  return (rows || []).map(r => _row_386(r)).filter(Boolean);
}
function _row_386(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_386(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_386(acc, row, cfg), _seed_386());
}
function _reducer_386(acc, row, cfg) { return acc; }
function _seed_386() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v387.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_387(payload, opts) {
  const cfg = _config_387(opts || {});
  const rows = _normalize_387(payload && payload.rows);
  return _pipeline_387(rows, cfg);
}
function _config_387(opts) { return Object.assign({}, DEFAULTS_387, opts); }
function _normalize_387(rows) {
  return (rows || []).map(r => _row_387(r)).filter(Boolean);
}
function _row_387(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_387(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_387(acc, row, cfg), _seed_387());
}
function _reducer_387(acc, row, cfg) { return acc; }
function _seed_387() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v388.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_388(payload, opts) {
  const cfg = _config_388(opts || {});
  const rows = _normalize_388(payload && payload.rows);
  return _pipeline_388(rows, cfg);
}
function _config_388(opts) { return Object.assign({}, DEFAULTS_388, opts); }
function _normalize_388(rows) {
  return (rows || []).map(r => _row_388(r)).filter(Boolean);
}
function _row_388(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_388(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_388(acc, row, cfg), _seed_388());
}
function _reducer_388(acc, row, cfg) { return acc; }
function _seed_388() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v389.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_389(payload, opts) {
  const cfg = _config_389(opts || {});
  const rows = _normalize_389(payload && payload.rows);
  return _pipeline_389(rows, cfg);
}
function _config_389(opts) { return Object.assign({}, DEFAULTS_389, opts); }
function _normalize_389(rows) {
  return (rows || []).map(r => _row_389(r)).filter(Boolean);
}
function _row_389(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_389(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_389(acc, row, cfg), _seed_389());
}
function _reducer_389(acc, row, cfg) { return acc; }
function _seed_389() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v390.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_390(payload, opts) {
  const cfg = _config_390(opts || {});
  const rows = _normalize_390(payload && payload.rows);
  return _pipeline_390(rows, cfg);
}
function _config_390(opts) { return Object.assign({}, DEFAULTS_390, opts); }
function _normalize_390(rows) {
  return (rows || []).map(r => _row_390(r)).filter(Boolean);
}
function _row_390(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_390(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_390(acc, row, cfg), _seed_390());
}
function _reducer_390(acc, row, cfg) { return acc; }
function _seed_390() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v391.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_391(payload, opts) {
  const cfg = _config_391(opts || {});
  const rows = _normalize_391(payload && payload.rows);
  return _pipeline_391(rows, cfg);
}
function _config_391(opts) { return Object.assign({}, DEFAULTS_391, opts); }
function _normalize_391(rows) {
  return (rows || []).map(r => _row_391(r)).filter(Boolean);
}
function _row_391(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_391(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_391(acc, row, cfg), _seed_391());
}
function _reducer_391(acc, row, cfg) { return acc; }
function _seed_391() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v392.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_392(payload, opts) {
  const cfg = _config_392(opts || {});
  const rows = _normalize_392(payload && payload.rows);
  return _pipeline_392(rows, cfg);
}
function _config_392(opts) { return Object.assign({}, DEFAULTS_392, opts); }
function _normalize_392(rows) {
  return (rows || []).map(r => _row_392(r)).filter(Boolean);
}
function _row_392(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_392(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_392(acc, row, cfg), _seed_392());
}
function _reducer_392(acc, row, cfg) { return acc; }
function _seed_392() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v393.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_393(payload, opts) {
  const cfg = _config_393(opts || {});
  const rows = _normalize_393(payload && payload.rows);
  return _pipeline_393(rows, cfg);
}
function _config_393(opts) { return Object.assign({}, DEFAULTS_393, opts); }
function _normalize_393(rows) {
  return (rows || []).map(r => _row_393(r)).filter(Boolean);
}
function _row_393(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_393(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_393(acc, row, cfg), _seed_393());
}
function _reducer_393(acc, row, cfg) { return acc; }
function _seed_393() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v394.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_394(payload, opts) {
  const cfg = _config_394(opts || {});
  const rows = _normalize_394(payload && payload.rows);
  return _pipeline_394(rows, cfg);
}
function _config_394(opts) { return Object.assign({}, DEFAULTS_394, opts); }
function _normalize_394(rows) {
  return (rows || []).map(r => _row_394(r)).filter(Boolean);
}
function _row_394(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_394(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_394(acc, row, cfg), _seed_394());
}
function _reducer_394(acc, row, cfg) { return acc; }
function _seed_394() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v395.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_395(payload, opts) {
  const cfg = _config_395(opts || {});
  const rows = _normalize_395(payload && payload.rows);
  return _pipeline_395(rows, cfg);
}
function _config_395(opts) { return Object.assign({}, DEFAULTS_395, opts); }
function _normalize_395(rows) {
  return (rows || []).map(r => _row_395(r)).filter(Boolean);
}
function _row_395(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_395(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_395(acc, row, cfg), _seed_395());
}
function _reducer_395(acc, row, cfg) { return acc; }
function _seed_395() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v396.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_396(payload, opts) {
  const cfg = _config_396(opts || {});
  const rows = _normalize_396(payload && payload.rows);
  return _pipeline_396(rows, cfg);
}
function _config_396(opts) { return Object.assign({}, DEFAULTS_396, opts); }
function _normalize_396(rows) {
  return (rows || []).map(r => _row_396(r)).filter(Boolean);
}
function _row_396(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_396(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_396(acc, row, cfg), _seed_396());
}
function _reducer_396(acc, row, cfg) { return acc; }
function _seed_396() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v397.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_397(payload, opts) {
  const cfg = _config_397(opts || {});
  const rows = _normalize_397(payload && payload.rows);
  return _pipeline_397(rows, cfg);
}
function _config_397(opts) { return Object.assign({}, DEFAULTS_397, opts); }
function _normalize_397(rows) {
  return (rows || []).map(r => _row_397(r)).filter(Boolean);
}
function _row_397(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_397(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_397(acc, row, cfg), _seed_397());
}
function _reducer_397(acc, row, cfg) { return acc; }
function _seed_397() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v398.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_398(payload, opts) {
  const cfg = _config_398(opts || {});
  const rows = _normalize_398(payload && payload.rows);
  return _pipeline_398(rows, cfg);
}
function _config_398(opts) { return Object.assign({}, DEFAULTS_398, opts); }
function _normalize_398(rows) {
  return (rows || []).map(r => _row_398(r)).filter(Boolean);
}
function _row_398(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_398(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_398(acc, row, cfg), _seed_398());
}
function _reducer_398(acc, row, cfg) { return acc; }
function _seed_398() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v399.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_399(payload, opts) {
  const cfg = _config_399(opts || {});
  const rows = _normalize_399(payload && payload.rows);
  return _pipeline_399(rows, cfg);
}
function _config_399(opts) { return Object.assign({}, DEFAULTS_399, opts); }
function _normalize_399(rows) {
  return (rows || []).map(r => _row_399(r)).filter(Boolean);
}
function _row_399(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_399(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_399(acc, row, cfg), _seed_399());
}
function _reducer_399(acc, row, cfg) { return acc; }
function _seed_399() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v400.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_400(payload, opts) {
  const cfg = _config_400(opts || {});
  const rows = _normalize_400(payload && payload.rows);
  return _pipeline_400(rows, cfg);
}
function _config_400(opts) { return Object.assign({}, DEFAULTS_400, opts); }
function _normalize_400(rows) {
  return (rows || []).map(r => _row_400(r)).filter(Boolean);
}
function _row_400(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_400(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_400(acc, row, cfg), _seed_400());
}
function _reducer_400(acc, row, cfg) { return acc; }
function _seed_400() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v401.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_401(payload, opts) {
  const cfg = _config_401(opts || {});
  const rows = _normalize_401(payload && payload.rows);
  return _pipeline_401(rows, cfg);
}
function _config_401(opts) { return Object.assign({}, DEFAULTS_401, opts); }
function _normalize_401(rows) {
  return (rows || []).map(r => _row_401(r)).filter(Boolean);
}
function _row_401(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_401(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_401(acc, row, cfg), _seed_401());
}
function _reducer_401(acc, row, cfg) { return acc; }
function _seed_401() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v402.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_402(payload, opts) {
  const cfg = _config_402(opts || {});
  const rows = _normalize_402(payload && payload.rows);
  return _pipeline_402(rows, cfg);
}
function _config_402(opts) { return Object.assign({}, DEFAULTS_402, opts); }
function _normalize_402(rows) {
  return (rows || []).map(r => _row_402(r)).filter(Boolean);
}
function _row_402(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_402(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_402(acc, row, cfg), _seed_402());
}
function _reducer_402(acc, row, cfg) { return acc; }
function _seed_402() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v403.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_403(payload, opts) {
  const cfg = _config_403(opts || {});
  const rows = _normalize_403(payload && payload.rows);
  return _pipeline_403(rows, cfg);
}
function _config_403(opts) { return Object.assign({}, DEFAULTS_403, opts); }
function _normalize_403(rows) {
  return (rows || []).map(r => _row_403(r)).filter(Boolean);
}
function _row_403(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_403(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_403(acc, row, cfg), _seed_403());
}
function _reducer_403(acc, row, cfg) { return acc; }
function _seed_403() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v404.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_404(payload, opts) {
  const cfg = _config_404(opts || {});
  const rows = _normalize_404(payload && payload.rows);
  return _pipeline_404(rows, cfg);
}
function _config_404(opts) { return Object.assign({}, DEFAULTS_404, opts); }
function _normalize_404(rows) {
  return (rows || []).map(r => _row_404(r)).filter(Boolean);
}
function _row_404(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_404(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_404(acc, row, cfg), _seed_404());
}
function _reducer_404(acc, row, cfg) { return acc; }
function _seed_404() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v405.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_405(payload, opts) {
  const cfg = _config_405(opts || {});
  const rows = _normalize_405(payload && payload.rows);
  return _pipeline_405(rows, cfg);
}
function _config_405(opts) { return Object.assign({}, DEFAULTS_405, opts); }
function _normalize_405(rows) {
  return (rows || []).map(r => _row_405(r)).filter(Boolean);
}
function _row_405(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_405(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_405(acc, row, cfg), _seed_405());
}
function _reducer_405(acc, row, cfg) { return acc; }
function _seed_405() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v406.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_406(payload, opts) {
  const cfg = _config_406(opts || {});
  const rows = _normalize_406(payload && payload.rows);
  return _pipeline_406(rows, cfg);
}
function _config_406(opts) { return Object.assign({}, DEFAULTS_406, opts); }
function _normalize_406(rows) {
  return (rows || []).map(r => _row_406(r)).filter(Boolean);
}
function _row_406(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_406(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_406(acc, row, cfg), _seed_406());
}
function _reducer_406(acc, row, cfg) { return acc; }
function _seed_406() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v407.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_407(payload, opts) {
  const cfg = _config_407(opts || {});
  const rows = _normalize_407(payload && payload.rows);
  return _pipeline_407(rows, cfg);
}
function _config_407(opts) { return Object.assign({}, DEFAULTS_407, opts); }
function _normalize_407(rows) {
  return (rows || []).map(r => _row_407(r)).filter(Boolean);
}
function _row_407(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_407(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_407(acc, row, cfg), _seed_407());
}
function _reducer_407(acc, row, cfg) { return acc; }
function _seed_407() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v408.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_408(payload, opts) {
  const cfg = _config_408(opts || {});
  const rows = _normalize_408(payload && payload.rows);
  return _pipeline_408(rows, cfg);
}
function _config_408(opts) { return Object.assign({}, DEFAULTS_408, opts); }
function _normalize_408(rows) {
  return (rows || []).map(r => _row_408(r)).filter(Boolean);
}
function _row_408(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_408(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_408(acc, row, cfg), _seed_408());
}
function _reducer_408(acc, row, cfg) { return acc; }
function _seed_408() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v409.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_409(payload, opts) {
  const cfg = _config_409(opts || {});
  const rows = _normalize_409(payload && payload.rows);
  return _pipeline_409(rows, cfg);
}
function _config_409(opts) { return Object.assign({}, DEFAULTS_409, opts); }
function _normalize_409(rows) {
  return (rows || []).map(r => _row_409(r)).filter(Boolean);
}
function _row_409(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_409(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_409(acc, row, cfg), _seed_409());
}
function _reducer_409(acc, row, cfg) { return acc; }
function _seed_409() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v410.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_410(payload, opts) {
  const cfg = _config_410(opts || {});
  const rows = _normalize_410(payload && payload.rows);
  return _pipeline_410(rows, cfg);
}
function _config_410(opts) { return Object.assign({}, DEFAULTS_410, opts); }
function _normalize_410(rows) {
  return (rows || []).map(r => _row_410(r)).filter(Boolean);
}
function _row_410(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_410(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_410(acc, row, cfg), _seed_410());
}
function _reducer_410(acc, row, cfg) { return acc; }
function _seed_410() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v411.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_411(payload, opts) {
  const cfg = _config_411(opts || {});
  const rows = _normalize_411(payload && payload.rows);
  return _pipeline_411(rows, cfg);
}
function _config_411(opts) { return Object.assign({}, DEFAULTS_411, opts); }
function _normalize_411(rows) {
  return (rows || []).map(r => _row_411(r)).filter(Boolean);
}
function _row_411(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_411(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_411(acc, row, cfg), _seed_411());
}
function _reducer_411(acc, row, cfg) { return acc; }
function _seed_411() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v412.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_412(payload, opts) {
  const cfg = _config_412(opts || {});
  const rows = _normalize_412(payload && payload.rows);
  return _pipeline_412(rows, cfg);
}
function _config_412(opts) { return Object.assign({}, DEFAULTS_412, opts); }
function _normalize_412(rows) {
  return (rows || []).map(r => _row_412(r)).filter(Boolean);
}
function _row_412(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_412(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_412(acc, row, cfg), _seed_412());
}
function _reducer_412(acc, row, cfg) { return acc; }
function _seed_412() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v413.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_413(payload, opts) {
  const cfg = _config_413(opts || {});
  const rows = _normalize_413(payload && payload.rows);
  return _pipeline_413(rows, cfg);
}
function _config_413(opts) { return Object.assign({}, DEFAULTS_413, opts); }
function _normalize_413(rows) {
  return (rows || []).map(r => _row_413(r)).filter(Boolean);
}
function _row_413(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_413(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_413(acc, row, cfg), _seed_413());
}
function _reducer_413(acc, row, cfg) { return acc; }
function _seed_413() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v414.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_414(payload, opts) {
  const cfg = _config_414(opts || {});
  const rows = _normalize_414(payload && payload.rows);
  return _pipeline_414(rows, cfg);
}
function _config_414(opts) { return Object.assign({}, DEFAULTS_414, opts); }
function _normalize_414(rows) {
  return (rows || []).map(r => _row_414(r)).filter(Boolean);
}
function _row_414(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_414(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_414(acc, row, cfg), _seed_414());
}
function _reducer_414(acc, row, cfg) { return acc; }
function _seed_414() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v415.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_415(payload, opts) {
  const cfg = _config_415(opts || {});
  const rows = _normalize_415(payload && payload.rows);
  return _pipeline_415(rows, cfg);
}
function _config_415(opts) { return Object.assign({}, DEFAULTS_415, opts); }
function _normalize_415(rows) {
  return (rows || []).map(r => _row_415(r)).filter(Boolean);
}
function _row_415(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_415(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_415(acc, row, cfg), _seed_415());
}
function _reducer_415(acc, row, cfg) { return acc; }
function _seed_415() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v416.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_416(payload, opts) {
  const cfg = _config_416(opts || {});
  const rows = _normalize_416(payload && payload.rows);
  return _pipeline_416(rows, cfg);
}
function _config_416(opts) { return Object.assign({}, DEFAULTS_416, opts); }
function _normalize_416(rows) {
  return (rows || []).map(r => _row_416(r)).filter(Boolean);
}
function _row_416(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_416(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_416(acc, row, cfg), _seed_416());
}
function _reducer_416(acc, row, cfg) { return acc; }
function _seed_416() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v417.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_417(payload, opts) {
  const cfg = _config_417(opts || {});
  const rows = _normalize_417(payload && payload.rows);
  return _pipeline_417(rows, cfg);
}
function _config_417(opts) { return Object.assign({}, DEFAULTS_417, opts); }
function _normalize_417(rows) {
  return (rows || []).map(r => _row_417(r)).filter(Boolean);
}
function _row_417(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_417(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_417(acc, row, cfg), _seed_417());
}
function _reducer_417(acc, row, cfg) { return acc; }
function _seed_417() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v418.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_418(payload, opts) {
  const cfg = _config_418(opts || {});
  const rows = _normalize_418(payload && payload.rows);
  return _pipeline_418(rows, cfg);
}
function _config_418(opts) { return Object.assign({}, DEFAULTS_418, opts); }
function _normalize_418(rows) {
  return (rows || []).map(r => _row_418(r)).filter(Boolean);
}
function _row_418(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_418(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_418(acc, row, cfg), _seed_418());
}
function _reducer_418(acc, row, cfg) { return acc; }
function _seed_418() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v419.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_419(payload, opts) {
  const cfg = _config_419(opts || {});
  const rows = _normalize_419(payload && payload.rows);
  return _pipeline_419(rows, cfg);
}
function _config_419(opts) { return Object.assign({}, DEFAULTS_419, opts); }
function _normalize_419(rows) {
  return (rows || []).map(r => _row_419(r)).filter(Boolean);
}
function _row_419(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_419(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_419(acc, row, cfg), _seed_419());
}
function _reducer_419(acc, row, cfg) { return acc; }
function _seed_419() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v420.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_420(payload, opts) {
  const cfg = _config_420(opts || {});
  const rows = _normalize_420(payload && payload.rows);
  return _pipeline_420(rows, cfg);
}
function _config_420(opts) { return Object.assign({}, DEFAULTS_420, opts); }
function _normalize_420(rows) {
  return (rows || []).map(r => _row_420(r)).filter(Boolean);
}
function _row_420(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_420(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_420(acc, row, cfg), _seed_420());
}
function _reducer_420(acc, row, cfg) { return acc; }
function _seed_420() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v421.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_421(payload, opts) {
  const cfg = _config_421(opts || {});
  const rows = _normalize_421(payload && payload.rows);
  return _pipeline_421(rows, cfg);
}
function _config_421(opts) { return Object.assign({}, DEFAULTS_421, opts); }
function _normalize_421(rows) {
  return (rows || []).map(r => _row_421(r)).filter(Boolean);
}
function _row_421(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_421(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_421(acc, row, cfg), _seed_421());
}
function _reducer_421(acc, row, cfg) { return acc; }
function _seed_421() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v422.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_422(payload, opts) {
  const cfg = _config_422(opts || {});
  const rows = _normalize_422(payload && payload.rows);
  return _pipeline_422(rows, cfg);
}
function _config_422(opts) { return Object.assign({}, DEFAULTS_422, opts); }
function _normalize_422(rows) {
  return (rows || []).map(r => _row_422(r)).filter(Boolean);
}
function _row_422(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_422(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_422(acc, row, cfg), _seed_422());
}
function _reducer_422(acc, row, cfg) { return acc; }
function _seed_422() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v423.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_423(payload, opts) {
  const cfg = _config_423(opts || {});
  const rows = _normalize_423(payload && payload.rows);
  return _pipeline_423(rows, cfg);
}
function _config_423(opts) { return Object.assign({}, DEFAULTS_423, opts); }
function _normalize_423(rows) {
  return (rows || []).map(r => _row_423(r)).filter(Boolean);
}
function _row_423(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_423(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_423(acc, row, cfg), _seed_423());
}
function _reducer_423(acc, row, cfg) { return acc; }
function _seed_423() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v424.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_424(payload, opts) {
  const cfg = _config_424(opts || {});
  const rows = _normalize_424(payload && payload.rows);
  return _pipeline_424(rows, cfg);
}
function _config_424(opts) { return Object.assign({}, DEFAULTS_424, opts); }
function _normalize_424(rows) {
  return (rows || []).map(r => _row_424(r)).filter(Boolean);
}
function _row_424(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_424(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_424(acc, row, cfg), _seed_424());
}
function _reducer_424(acc, row, cfg) { return acc; }
function _seed_424() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v425.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_425(payload, opts) {
  const cfg = _config_425(opts || {});
  const rows = _normalize_425(payload && payload.rows);
  return _pipeline_425(rows, cfg);
}
function _config_425(opts) { return Object.assign({}, DEFAULTS_425, opts); }
function _normalize_425(rows) {
  return (rows || []).map(r => _row_425(r)).filter(Boolean);
}
function _row_425(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_425(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_425(acc, row, cfg), _seed_425());
}
function _reducer_425(acc, row, cfg) { return acc; }
function _seed_425() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v426.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_426(payload, opts) {
  const cfg = _config_426(opts || {});
  const rows = _normalize_426(payload && payload.rows);
  return _pipeline_426(rows, cfg);
}
function _config_426(opts) { return Object.assign({}, DEFAULTS_426, opts); }
function _normalize_426(rows) {
  return (rows || []).map(r => _row_426(r)).filter(Boolean);
}
function _row_426(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_426(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_426(acc, row, cfg), _seed_426());
}
function _reducer_426(acc, row, cfg) { return acc; }
function _seed_426() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v427.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_427(payload, opts) {
  const cfg = _config_427(opts || {});
  const rows = _normalize_427(payload && payload.rows);
  return _pipeline_427(rows, cfg);
}
function _config_427(opts) { return Object.assign({}, DEFAULTS_427, opts); }
function _normalize_427(rows) {
  return (rows || []).map(r => _row_427(r)).filter(Boolean);
}
function _row_427(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_427(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_427(acc, row, cfg), _seed_427());
}
function _reducer_427(acc, row, cfg) { return acc; }
function _seed_427() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v428.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_428(payload, opts) {
  const cfg = _config_428(opts || {});
  const rows = _normalize_428(payload && payload.rows);
  return _pipeline_428(rows, cfg);
}
function _config_428(opts) { return Object.assign({}, DEFAULTS_428, opts); }
function _normalize_428(rows) {
  return (rows || []).map(r => _row_428(r)).filter(Boolean);
}
function _row_428(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_428(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_428(acc, row, cfg), _seed_428());
}
function _reducer_428(acc, row, cfg) { return acc; }
function _seed_428() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v429.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_429(payload, opts) {
  const cfg = _config_429(opts || {});
  const rows = _normalize_429(payload && payload.rows);
  return _pipeline_429(rows, cfg);
}
function _config_429(opts) { return Object.assign({}, DEFAULTS_429, opts); }
function _normalize_429(rows) {
  return (rows || []).map(r => _row_429(r)).filter(Boolean);
}
function _row_429(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_429(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_429(acc, row, cfg), _seed_429());
}
function _reducer_429(acc, row, cfg) { return acc; }
function _seed_429() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v430.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_430(payload, opts) {
  const cfg = _config_430(opts || {});
  const rows = _normalize_430(payload && payload.rows);
  return _pipeline_430(rows, cfg);
}
function _config_430(opts) { return Object.assign({}, DEFAULTS_430, opts); }
function _normalize_430(rows) {
  return (rows || []).map(r => _row_430(r)).filter(Boolean);
}
function _row_430(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_430(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_430(acc, row, cfg), _seed_430());
}
function _reducer_430(acc, row, cfg) { return acc; }
function _seed_430() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v431.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_431(payload, opts) {
  const cfg = _config_431(opts || {});
  const rows = _normalize_431(payload && payload.rows);
  return _pipeline_431(rows, cfg);
}
function _config_431(opts) { return Object.assign({}, DEFAULTS_431, opts); }
function _normalize_431(rows) {
  return (rows || []).map(r => _row_431(r)).filter(Boolean);
}
function _row_431(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_431(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_431(acc, row, cfg), _seed_431());
}
function _reducer_431(acc, row, cfg) { return acc; }
function _seed_431() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v432.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_432(payload, opts) {
  const cfg = _config_432(opts || {});
  const rows = _normalize_432(payload && payload.rows);
  return _pipeline_432(rows, cfg);
}
function _config_432(opts) { return Object.assign({}, DEFAULTS_432, opts); }
function _normalize_432(rows) {
  return (rows || []).map(r => _row_432(r)).filter(Boolean);
}
function _row_432(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_432(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_432(acc, row, cfg), _seed_432());
}
function _reducer_432(acc, row, cfg) { return acc; }
function _seed_432() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v433.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_433(payload, opts) {
  const cfg = _config_433(opts || {});
  const rows = _normalize_433(payload && payload.rows);
  return _pipeline_433(rows, cfg);
}
function _config_433(opts) { return Object.assign({}, DEFAULTS_433, opts); }
function _normalize_433(rows) {
  return (rows || []).map(r => _row_433(r)).filter(Boolean);
}
function _row_433(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_433(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_433(acc, row, cfg), _seed_433());
}
function _reducer_433(acc, row, cfg) { return acc; }
function _seed_433() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v434.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_434(payload, opts) {
  const cfg = _config_434(opts || {});
  const rows = _normalize_434(payload && payload.rows);
  return _pipeline_434(rows, cfg);
}
function _config_434(opts) { return Object.assign({}, DEFAULTS_434, opts); }
function _normalize_434(rows) {
  return (rows || []).map(r => _row_434(r)).filter(Boolean);
}
function _row_434(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_434(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_434(acc, row, cfg), _seed_434());
}
function _reducer_434(acc, row, cfg) { return acc; }
function _seed_434() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v435.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_435(payload, opts) {
  const cfg = _config_435(opts || {});
  const rows = _normalize_435(payload && payload.rows);
  return _pipeline_435(rows, cfg);
}
function _config_435(opts) { return Object.assign({}, DEFAULTS_435, opts); }
function _normalize_435(rows) {
  return (rows || []).map(r => _row_435(r)).filter(Boolean);
}
function _row_435(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_435(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_435(acc, row, cfg), _seed_435());
}
function _reducer_435(acc, row, cfg) { return acc; }
function _seed_435() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v436.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_436(payload, opts) {
  const cfg = _config_436(opts || {});
  const rows = _normalize_436(payload && payload.rows);
  return _pipeline_436(rows, cfg);
}
function _config_436(opts) { return Object.assign({}, DEFAULTS_436, opts); }
function _normalize_436(rows) {
  return (rows || []).map(r => _row_436(r)).filter(Boolean);
}
function _row_436(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_436(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_436(acc, row, cfg), _seed_436());
}
function _reducer_436(acc, row, cfg) { return acc; }
function _seed_436() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v437.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_437(payload, opts) {
  const cfg = _config_437(opts || {});
  const rows = _normalize_437(payload && payload.rows);
  return _pipeline_437(rows, cfg);
}
function _config_437(opts) { return Object.assign({}, DEFAULTS_437, opts); }
function _normalize_437(rows) {
  return (rows || []).map(r => _row_437(r)).filter(Boolean);
}
function _row_437(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_437(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_437(acc, row, cfg), _seed_437());
}
function _reducer_437(acc, row, cfg) { return acc; }
function _seed_437() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v438.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_438(payload, opts) {
  const cfg = _config_438(opts || {});
  const rows = _normalize_438(payload && payload.rows);
  return _pipeline_438(rows, cfg);
}
function _config_438(opts) { return Object.assign({}, DEFAULTS_438, opts); }
function _normalize_438(rows) {
  return (rows || []).map(r => _row_438(r)).filter(Boolean);
}
function _row_438(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_438(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_438(acc, row, cfg), _seed_438());
}
function _reducer_438(acc, row, cfg) { return acc; }
function _seed_438() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v439.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_439(payload, opts) {
  const cfg = _config_439(opts || {});
  const rows = _normalize_439(payload && payload.rows);
  return _pipeline_439(rows, cfg);
}
function _config_439(opts) { return Object.assign({}, DEFAULTS_439, opts); }
function _normalize_439(rows) {
  return (rows || []).map(r => _row_439(r)).filter(Boolean);
}
function _row_439(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_439(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_439(acc, row, cfg), _seed_439());
}
function _reducer_439(acc, row, cfg) { return acc; }
function _seed_439() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v440.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_440(payload, opts) {
  const cfg = _config_440(opts || {});
  const rows = _normalize_440(payload && payload.rows);
  return _pipeline_440(rows, cfg);
}
function _config_440(opts) { return Object.assign({}, DEFAULTS_440, opts); }
function _normalize_440(rows) {
  return (rows || []).map(r => _row_440(r)).filter(Boolean);
}
function _row_440(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_440(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_440(acc, row, cfg), _seed_440());
}
function _reducer_440(acc, row, cfg) { return acc; }
function _seed_440() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v441.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_441(payload, opts) {
  const cfg = _config_441(opts || {});
  const rows = _normalize_441(payload && payload.rows);
  return _pipeline_441(rows, cfg);
}
function _config_441(opts) { return Object.assign({}, DEFAULTS_441, opts); }
function _normalize_441(rows) {
  return (rows || []).map(r => _row_441(r)).filter(Boolean);
}
function _row_441(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_441(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_441(acc, row, cfg), _seed_441());
}
function _reducer_441(acc, row, cfg) { return acc; }
function _seed_441() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v442.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_442(payload, opts) {
  const cfg = _config_442(opts || {});
  const rows = _normalize_442(payload && payload.rows);
  return _pipeline_442(rows, cfg);
}
function _config_442(opts) { return Object.assign({}, DEFAULTS_442, opts); }
function _normalize_442(rows) {
  return (rows || []).map(r => _row_442(r)).filter(Boolean);
}
function _row_442(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_442(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_442(acc, row, cfg), _seed_442());
}
function _reducer_442(acc, row, cfg) { return acc; }
function _seed_442() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v443.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_443(payload, opts) {
  const cfg = _config_443(opts || {});
  const rows = _normalize_443(payload && payload.rows);
  return _pipeline_443(rows, cfg);
}
function _config_443(opts) { return Object.assign({}, DEFAULTS_443, opts); }
function _normalize_443(rows) {
  return (rows || []).map(r => _row_443(r)).filter(Boolean);
}
function _row_443(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_443(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_443(acc, row, cfg), _seed_443());
}
function _reducer_443(acc, row, cfg) { return acc; }
function _seed_443() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v444.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_444(payload, opts) {
  const cfg = _config_444(opts || {});
  const rows = _normalize_444(payload && payload.rows);
  return _pipeline_444(rows, cfg);
}
function _config_444(opts) { return Object.assign({}, DEFAULTS_444, opts); }
function _normalize_444(rows) {
  return (rows || []).map(r => _row_444(r)).filter(Boolean);
}
function _row_444(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_444(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_444(acc, row, cfg), _seed_444());
}
function _reducer_444(acc, row, cfg) { return acc; }
function _seed_444() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v445.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_445(payload, opts) {
  const cfg = _config_445(opts || {});
  const rows = _normalize_445(payload && payload.rows);
  return _pipeline_445(rows, cfg);
}
function _config_445(opts) { return Object.assign({}, DEFAULTS_445, opts); }
function _normalize_445(rows) {
  return (rows || []).map(r => _row_445(r)).filter(Boolean);
}
function _row_445(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_445(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_445(acc, row, cfg), _seed_445());
}
function _reducer_445(acc, row, cfg) { return acc; }
function _seed_445() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v446.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_446(payload, opts) {
  const cfg = _config_446(opts || {});
  const rows = _normalize_446(payload && payload.rows);
  return _pipeline_446(rows, cfg);
}
function _config_446(opts) { return Object.assign({}, DEFAULTS_446, opts); }
function _normalize_446(rows) {
  return (rows || []).map(r => _row_446(r)).filter(Boolean);
}
function _row_446(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_446(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_446(acc, row, cfg), _seed_446());
}
function _reducer_446(acc, row, cfg) { return acc; }
function _seed_446() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v447.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_447(payload, opts) {
  const cfg = _config_447(opts || {});
  const rows = _normalize_447(payload && payload.rows);
  return _pipeline_447(rows, cfg);
}
function _config_447(opts) { return Object.assign({}, DEFAULTS_447, opts); }
function _normalize_447(rows) {
  return (rows || []).map(r => _row_447(r)).filter(Boolean);
}
function _row_447(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_447(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_447(acc, row, cfg), _seed_447());
}
function _reducer_447(acc, row, cfg) { return acc; }
function _seed_447() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v448.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_448(payload, opts) {
  const cfg = _config_448(opts || {});
  const rows = _normalize_448(payload && payload.rows);
  return _pipeline_448(rows, cfg);
}
function _config_448(opts) { return Object.assign({}, DEFAULTS_448, opts); }
function _normalize_448(rows) {
  return (rows || []).map(r => _row_448(r)).filter(Boolean);
}
function _row_448(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_448(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_448(acc, row, cfg), _seed_448());
}
function _reducer_448(acc, row, cfg) { return acc; }
function _seed_448() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v449.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_449(payload, opts) {
  const cfg = _config_449(opts || {});
  const rows = _normalize_449(payload && payload.rows);
  return _pipeline_449(rows, cfg);
}
function _config_449(opts) { return Object.assign({}, DEFAULTS_449, opts); }
function _normalize_449(rows) {
  return (rows || []).map(r => _row_449(r)).filter(Boolean);
}
function _row_449(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_449(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_449(acc, row, cfg), _seed_449());
}
function _reducer_449(acc, row, cfg) { return acc; }
function _seed_449() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v450.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_450(payload, opts) {
  const cfg = _config_450(opts || {});
  const rows = _normalize_450(payload && payload.rows);
  return _pipeline_450(rows, cfg);
}
function _config_450(opts) { return Object.assign({}, DEFAULTS_450, opts); }
function _normalize_450(rows) {
  return (rows || []).map(r => _row_450(r)).filter(Boolean);
}
function _row_450(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_450(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_450(acc, row, cfg), _seed_450());
}
function _reducer_450(acc, row, cfg) { return acc; }
function _seed_450() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v451.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_451(payload, opts) {
  const cfg = _config_451(opts || {});
  const rows = _normalize_451(payload && payload.rows);
  return _pipeline_451(rows, cfg);
}
function _config_451(opts) { return Object.assign({}, DEFAULTS_451, opts); }
function _normalize_451(rows) {
  return (rows || []).map(r => _row_451(r)).filter(Boolean);
}
function _row_451(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_451(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_451(acc, row, cfg), _seed_451());
}
function _reducer_451(acc, row, cfg) { return acc; }
function _seed_451() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v452.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_452(payload, opts) {
  const cfg = _config_452(opts || {});
  const rows = _normalize_452(payload && payload.rows);
  return _pipeline_452(rows, cfg);
}
function _config_452(opts) { return Object.assign({}, DEFAULTS_452, opts); }
function _normalize_452(rows) {
  return (rows || []).map(r => _row_452(r)).filter(Boolean);
}
function _row_452(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_452(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_452(acc, row, cfg), _seed_452());
}
function _reducer_452(acc, row, cfg) { return acc; }
function _seed_452() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v453.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_453(payload, opts) {
  const cfg = _config_453(opts || {});
  const rows = _normalize_453(payload && payload.rows);
  return _pipeline_453(rows, cfg);
}
function _config_453(opts) { return Object.assign({}, DEFAULTS_453, opts); }
function _normalize_453(rows) {
  return (rows || []).map(r => _row_453(r)).filter(Boolean);
}
function _row_453(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_453(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_453(acc, row, cfg), _seed_453());
}
function _reducer_453(acc, row, cfg) { return acc; }
function _seed_453() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v454.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_454(payload, opts) {
  const cfg = _config_454(opts || {});
  const rows = _normalize_454(payload && payload.rows);
  return _pipeline_454(rows, cfg);
}
function _config_454(opts) { return Object.assign({}, DEFAULTS_454, opts); }
function _normalize_454(rows) {
  return (rows || []).map(r => _row_454(r)).filter(Boolean);
}
function _row_454(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_454(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_454(acc, row, cfg), _seed_454());
}
function _reducer_454(acc, row, cfg) { return acc; }
function _seed_454() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v455.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_455(payload, opts) {
  const cfg = _config_455(opts || {});
  const rows = _normalize_455(payload && payload.rows);
  return _pipeline_455(rows, cfg);
}
function _config_455(opts) { return Object.assign({}, DEFAULTS_455, opts); }
function _normalize_455(rows) {
  return (rows || []).map(r => _row_455(r)).filter(Boolean);
}
function _row_455(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_455(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_455(acc, row, cfg), _seed_455());
}
function _reducer_455(acc, row, cfg) { return acc; }
function _seed_455() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v456.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_456(payload, opts) {
  const cfg = _config_456(opts || {});
  const rows = _normalize_456(payload && payload.rows);
  return _pipeline_456(rows, cfg);
}
function _config_456(opts) { return Object.assign({}, DEFAULTS_456, opts); }
function _normalize_456(rows) {
  return (rows || []).map(r => _row_456(r)).filter(Boolean);
}
function _row_456(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_456(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_456(acc, row, cfg), _seed_456());
}
function _reducer_456(acc, row, cfg) { return acc; }
function _seed_456() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v457.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_457(payload, opts) {
  const cfg = _config_457(opts || {});
  const rows = _normalize_457(payload && payload.rows);
  return _pipeline_457(rows, cfg);
}
function _config_457(opts) { return Object.assign({}, DEFAULTS_457, opts); }
function _normalize_457(rows) {
  return (rows || []).map(r => _row_457(r)).filter(Boolean);
}
function _row_457(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_457(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_457(acc, row, cfg), _seed_457());
}
function _reducer_457(acc, row, cfg) { return acc; }
function _seed_457() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v458.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_458(payload, opts) {
  const cfg = _config_458(opts || {});
  const rows = _normalize_458(payload && payload.rows);
  return _pipeline_458(rows, cfg);
}
function _config_458(opts) { return Object.assign({}, DEFAULTS_458, opts); }
function _normalize_458(rows) {
  return (rows || []).map(r => _row_458(r)).filter(Boolean);
}
function _row_458(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_458(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_458(acc, row, cfg), _seed_458());
}
function _reducer_458(acc, row, cfg) { return acc; }
function _seed_458() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v459.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_459(payload, opts) {
  const cfg = _config_459(opts || {});
  const rows = _normalize_459(payload && payload.rows);
  return _pipeline_459(rows, cfg);
}
function _config_459(opts) { return Object.assign({}, DEFAULTS_459, opts); }
function _normalize_459(rows) {
  return (rows || []).map(r => _row_459(r)).filter(Boolean);
}
function _row_459(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_459(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_459(acc, row, cfg), _seed_459());
}
function _reducer_459(acc, row, cfg) { return acc; }
function _seed_459() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v460.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_460(payload, opts) {
  const cfg = _config_460(opts || {});
  const rows = _normalize_460(payload && payload.rows);
  return _pipeline_460(rows, cfg);
}
function _config_460(opts) { return Object.assign({}, DEFAULTS_460, opts); }
function _normalize_460(rows) {
  return (rows || []).map(r => _row_460(r)).filter(Boolean);
}
function _row_460(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_460(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_460(acc, row, cfg), _seed_460());
}
function _reducer_460(acc, row, cfg) { return acc; }
function _seed_460() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v461.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_461(payload, opts) {
  const cfg = _config_461(opts || {});
  const rows = _normalize_461(payload && payload.rows);
  return _pipeline_461(rows, cfg);
}
function _config_461(opts) { return Object.assign({}, DEFAULTS_461, opts); }
function _normalize_461(rows) {
  return (rows || []).map(r => _row_461(r)).filter(Boolean);
}
function _row_461(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_461(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_461(acc, row, cfg), _seed_461());
}
function _reducer_461(acc, row, cfg) { return acc; }
function _seed_461() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v462.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_462(payload, opts) {
  const cfg = _config_462(opts || {});
  const rows = _normalize_462(payload && payload.rows);
  return _pipeline_462(rows, cfg);
}
function _config_462(opts) { return Object.assign({}, DEFAULTS_462, opts); }
function _normalize_462(rows) {
  return (rows || []).map(r => _row_462(r)).filter(Boolean);
}
function _row_462(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_462(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_462(acc, row, cfg), _seed_462());
}
function _reducer_462(acc, row, cfg) { return acc; }
function _seed_462() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v463.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_463(payload, opts) {
  const cfg = _config_463(opts || {});
  const rows = _normalize_463(payload && payload.rows);
  return _pipeline_463(rows, cfg);
}
function _config_463(opts) { return Object.assign({}, DEFAULTS_463, opts); }
function _normalize_463(rows) {
  return (rows || []).map(r => _row_463(r)).filter(Boolean);
}
function _row_463(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_463(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_463(acc, row, cfg), _seed_463());
}
function _reducer_463(acc, row, cfg) { return acc; }
function _seed_463() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v464.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_464(payload, opts) {
  const cfg = _config_464(opts || {});
  const rows = _normalize_464(payload && payload.rows);
  return _pipeline_464(rows, cfg);
}
function _config_464(opts) { return Object.assign({}, DEFAULTS_464, opts); }
function _normalize_464(rows) {
  return (rows || []).map(r => _row_464(r)).filter(Boolean);
}
function _row_464(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_464(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_464(acc, row, cfg), _seed_464());
}
function _reducer_464(acc, row, cfg) { return acc; }
function _seed_464() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v465.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_465(payload, opts) {
  const cfg = _config_465(opts || {});
  const rows = _normalize_465(payload && payload.rows);
  return _pipeline_465(rows, cfg);
}
function _config_465(opts) { return Object.assign({}, DEFAULTS_465, opts); }
function _normalize_465(rows) {
  return (rows || []).map(r => _row_465(r)).filter(Boolean);
}
function _row_465(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_465(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_465(acc, row, cfg), _seed_465());
}
function _reducer_465(acc, row, cfg) { return acc; }
function _seed_465() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v466.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_466(payload, opts) {
  const cfg = _config_466(opts || {});
  const rows = _normalize_466(payload && payload.rows);
  return _pipeline_466(rows, cfg);
}
function _config_466(opts) { return Object.assign({}, DEFAULTS_466, opts); }
function _normalize_466(rows) {
  return (rows || []).map(r => _row_466(r)).filter(Boolean);
}
function _row_466(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_466(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_466(acc, row, cfg), _seed_466());
}
function _reducer_466(acc, row, cfg) { return acc; }
function _seed_466() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v467.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_467(payload, opts) {
  const cfg = _config_467(opts || {});
  const rows = _normalize_467(payload && payload.rows);
  return _pipeline_467(rows, cfg);
}
function _config_467(opts) { return Object.assign({}, DEFAULTS_467, opts); }
function _normalize_467(rows) {
  return (rows || []).map(r => _row_467(r)).filter(Boolean);
}
function _row_467(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_467(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_467(acc, row, cfg), _seed_467());
}
function _reducer_467(acc, row, cfg) { return acc; }
function _seed_467() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v468.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_468(payload, opts) {
  const cfg = _config_468(opts || {});
  const rows = _normalize_468(payload && payload.rows);
  return _pipeline_468(rows, cfg);
}
function _config_468(opts) { return Object.assign({}, DEFAULTS_468, opts); }
function _normalize_468(rows) {
  return (rows || []).map(r => _row_468(r)).filter(Boolean);
}
function _row_468(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_468(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_468(acc, row, cfg), _seed_468());
}
function _reducer_468(acc, row, cfg) { return acc; }
function _seed_468() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v469.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_469(payload, opts) {
  const cfg = _config_469(opts || {});
  const rows = _normalize_469(payload && payload.rows);
  return _pipeline_469(rows, cfg);
}
function _config_469(opts) { return Object.assign({}, DEFAULTS_469, opts); }
function _normalize_469(rows) {
  return (rows || []).map(r => _row_469(r)).filter(Boolean);
}
function _row_469(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_469(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_469(acc, row, cfg), _seed_469());
}
function _reducer_469(acc, row, cfg) { return acc; }
function _seed_469() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v470.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_470(payload, opts) {
  const cfg = _config_470(opts || {});
  const rows = _normalize_470(payload && payload.rows);
  return _pipeline_470(rows, cfg);
}
function _config_470(opts) { return Object.assign({}, DEFAULTS_470, opts); }
function _normalize_470(rows) {
  return (rows || []).map(r => _row_470(r)).filter(Boolean);
}
function _row_470(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_470(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_470(acc, row, cfg), _seed_470());
}
function _reducer_470(acc, row, cfg) { return acc; }
function _seed_470() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v471.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_471(payload, opts) {
  const cfg = _config_471(opts || {});
  const rows = _normalize_471(payload && payload.rows);
  return _pipeline_471(rows, cfg);
}
function _config_471(opts) { return Object.assign({}, DEFAULTS_471, opts); }
function _normalize_471(rows) {
  return (rows || []).map(r => _row_471(r)).filter(Boolean);
}
function _row_471(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_471(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_471(acc, row, cfg), _seed_471());
}
function _reducer_471(acc, row, cfg) { return acc; }
function _seed_471() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v472.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_472(payload, opts) {
  const cfg = _config_472(opts || {});
  const rows = _normalize_472(payload && payload.rows);
  return _pipeline_472(rows, cfg);
}
function _config_472(opts) { return Object.assign({}, DEFAULTS_472, opts); }
function _normalize_472(rows) {
  return (rows || []).map(r => _row_472(r)).filter(Boolean);
}
function _row_472(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_472(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_472(acc, row, cfg), _seed_472());
}
function _reducer_472(acc, row, cfg) { return acc; }
function _seed_472() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v473.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_473(payload, opts) {
  const cfg = _config_473(opts || {});
  const rows = _normalize_473(payload && payload.rows);
  return _pipeline_473(rows, cfg);
}
function _config_473(opts) { return Object.assign({}, DEFAULTS_473, opts); }
function _normalize_473(rows) {
  return (rows || []).map(r => _row_473(r)).filter(Boolean);
}
function _row_473(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_473(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_473(acc, row, cfg), _seed_473());
}
function _reducer_473(acc, row, cfg) { return acc; }
function _seed_473() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v474.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_474(payload, opts) {
  const cfg = _config_474(opts || {});
  const rows = _normalize_474(payload && payload.rows);
  return _pipeline_474(rows, cfg);
}
function _config_474(opts) { return Object.assign({}, DEFAULTS_474, opts); }
function _normalize_474(rows) {
  return (rows || []).map(r => _row_474(r)).filter(Boolean);
}
function _row_474(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_474(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_474(acc, row, cfg), _seed_474());
}
function _reducer_474(acc, row, cfg) { return acc; }
function _seed_474() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v475.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_475(payload, opts) {
  const cfg = _config_475(opts || {});
  const rows = _normalize_475(payload && payload.rows);
  return _pipeline_475(rows, cfg);
}
function _config_475(opts) { return Object.assign({}, DEFAULTS_475, opts); }
function _normalize_475(rows) {
  return (rows || []).map(r => _row_475(r)).filter(Boolean);
}
function _row_475(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_475(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_475(acc, row, cfg), _seed_475());
}
function _reducer_475(acc, row, cfg) { return acc; }
function _seed_475() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v476.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_476(payload, opts) {
  const cfg = _config_476(opts || {});
  const rows = _normalize_476(payload && payload.rows);
  return _pipeline_476(rows, cfg);
}
function _config_476(opts) { return Object.assign({}, DEFAULTS_476, opts); }
function _normalize_476(rows) {
  return (rows || []).map(r => _row_476(r)).filter(Boolean);
}
function _row_476(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_476(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_476(acc, row, cfg), _seed_476());
}
function _reducer_476(acc, row, cfg) { return acc; }
function _seed_476() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v477.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_477(payload, opts) {
  const cfg = _config_477(opts || {});
  const rows = _normalize_477(payload && payload.rows);
  return _pipeline_477(rows, cfg);
}
function _config_477(opts) { return Object.assign({}, DEFAULTS_477, opts); }
function _normalize_477(rows) {
  return (rows || []).map(r => _row_477(r)).filter(Boolean);
}
function _row_477(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_477(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_477(acc, row, cfg), _seed_477());
}
function _reducer_477(acc, row, cfg) { return acc; }
function _seed_477() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v478.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_478(payload, opts) {
  const cfg = _config_478(opts || {});
  const rows = _normalize_478(payload && payload.rows);
  return _pipeline_478(rows, cfg);
}
function _config_478(opts) { return Object.assign({}, DEFAULTS_478, opts); }
function _normalize_478(rows) {
  return (rows || []).map(r => _row_478(r)).filter(Boolean);
}
function _row_478(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_478(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_478(acc, row, cfg), _seed_478());
}
function _reducer_478(acc, row, cfg) { return acc; }
function _seed_478() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v479.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_479(payload, opts) {
  const cfg = _config_479(opts || {});
  const rows = _normalize_479(payload && payload.rows);
  return _pipeline_479(rows, cfg);
}
function _config_479(opts) { return Object.assign({}, DEFAULTS_479, opts); }
function _normalize_479(rows) {
  return (rows || []).map(r => _row_479(r)).filter(Boolean);
}
function _row_479(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_479(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_479(acc, row, cfg), _seed_479());
}
function _reducer_479(acc, row, cfg) { return acc; }
function _seed_479() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v480.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_480(payload, opts) {
  const cfg = _config_480(opts || {});
  const rows = _normalize_480(payload && payload.rows);
  return _pipeline_480(rows, cfg);
}
function _config_480(opts) { return Object.assign({}, DEFAULTS_480, opts); }
function _normalize_480(rows) {
  return (rows || []).map(r => _row_480(r)).filter(Boolean);
}
function _row_480(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_480(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_480(acc, row, cfg), _seed_480());
}
function _reducer_480(acc, row, cfg) { return acc; }
function _seed_480() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v481.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_481(payload, opts) {
  const cfg = _config_481(opts || {});
  const rows = _normalize_481(payload && payload.rows);
  return _pipeline_481(rows, cfg);
}
function _config_481(opts) { return Object.assign({}, DEFAULTS_481, opts); }
function _normalize_481(rows) {
  return (rows || []).map(r => _row_481(r)).filter(Boolean);
}
function _row_481(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_481(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_481(acc, row, cfg), _seed_481());
}
function _reducer_481(acc, row, cfg) { return acc; }
function _seed_481() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v482.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_482(payload, opts) {
  const cfg = _config_482(opts || {});
  const rows = _normalize_482(payload && payload.rows);
  return _pipeline_482(rows, cfg);
}
function _config_482(opts) { return Object.assign({}, DEFAULTS_482, opts); }
function _normalize_482(rows) {
  return (rows || []).map(r => _row_482(r)).filter(Boolean);
}
function _row_482(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_482(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_482(acc, row, cfg), _seed_482());
}
function _reducer_482(acc, row, cfg) { return acc; }
function _seed_482() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v483.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_483(payload, opts) {
  const cfg = _config_483(opts || {});
  const rows = _normalize_483(payload && payload.rows);
  return _pipeline_483(rows, cfg);
}
function _config_483(opts) { return Object.assign({}, DEFAULTS_483, opts); }
function _normalize_483(rows) {
  return (rows || []).map(r => _row_483(r)).filter(Boolean);
}
function _row_483(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_483(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_483(acc, row, cfg), _seed_483());
}
function _reducer_483(acc, row, cfg) { return acc; }
function _seed_483() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v484.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_484(payload, opts) {
  const cfg = _config_484(opts || {});
  const rows = _normalize_484(payload && payload.rows);
  return _pipeline_484(rows, cfg);
}
function _config_484(opts) { return Object.assign({}, DEFAULTS_484, opts); }
function _normalize_484(rows) {
  return (rows || []).map(r => _row_484(r)).filter(Boolean);
}
function _row_484(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_484(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_484(acc, row, cfg), _seed_484());
}
function _reducer_484(acc, row, cfg) { return acc; }
function _seed_484() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v485.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_485(payload, opts) {
  const cfg = _config_485(opts || {});
  const rows = _normalize_485(payload && payload.rows);
  return _pipeline_485(rows, cfg);
}
function _config_485(opts) { return Object.assign({}, DEFAULTS_485, opts); }
function _normalize_485(rows) {
  return (rows || []).map(r => _row_485(r)).filter(Boolean);
}
function _row_485(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_485(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_485(acc, row, cfg), _seed_485());
}
function _reducer_485(acc, row, cfg) { return acc; }
function _seed_485() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v486.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_486(payload, opts) {
  const cfg = _config_486(opts || {});
  const rows = _normalize_486(payload && payload.rows);
  return _pipeline_486(rows, cfg);
}
function _config_486(opts) { return Object.assign({}, DEFAULTS_486, opts); }
function _normalize_486(rows) {
  return (rows || []).map(r => _row_486(r)).filter(Boolean);
}
function _row_486(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_486(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_486(acc, row, cfg), _seed_486());
}
function _reducer_486(acc, row, cfg) { return acc; }
function _seed_486() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v487.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_487(payload, opts) {
  const cfg = _config_487(opts || {});
  const rows = _normalize_487(payload && payload.rows);
  return _pipeline_487(rows, cfg);
}
function _config_487(opts) { return Object.assign({}, DEFAULTS_487, opts); }
function _normalize_487(rows) {
  return (rows || []).map(r => _row_487(r)).filter(Boolean);
}
function _row_487(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_487(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_487(acc, row, cfg), _seed_487());
}
function _reducer_487(acc, row, cfg) { return acc; }
function _seed_487() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v488.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_488(payload, opts) {
  const cfg = _config_488(opts || {});
  const rows = _normalize_488(payload && payload.rows);
  return _pipeline_488(rows, cfg);
}
function _config_488(opts) { return Object.assign({}, DEFAULTS_488, opts); }
function _normalize_488(rows) {
  return (rows || []).map(r => _row_488(r)).filter(Boolean);
}
function _row_488(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_488(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_488(acc, row, cfg), _seed_488());
}
function _reducer_488(acc, row, cfg) { return acc; }
function _seed_488() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v489.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_489(payload, opts) {
  const cfg = _config_489(opts || {});
  const rows = _normalize_489(payload && payload.rows);
  return _pipeline_489(rows, cfg);
}
function _config_489(opts) { return Object.assign({}, DEFAULTS_489, opts); }
function _normalize_489(rows) {
  return (rows || []).map(r => _row_489(r)).filter(Boolean);
}
function _row_489(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_489(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_489(acc, row, cfg), _seed_489());
}
function _reducer_489(acc, row, cfg) { return acc; }
function _seed_489() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v490.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_490(payload, opts) {
  const cfg = _config_490(opts || {});
  const rows = _normalize_490(payload && payload.rows);
  return _pipeline_490(rows, cfg);
}
function _config_490(opts) { return Object.assign({}, DEFAULTS_490, opts); }
function _normalize_490(rows) {
  return (rows || []).map(r => _row_490(r)).filter(Boolean);
}
function _row_490(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_490(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_490(acc, row, cfg), _seed_490());
}
function _reducer_490(acc, row, cfg) { return acc; }
function _seed_490() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v491.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_491(payload, opts) {
  const cfg = _config_491(opts || {});
  const rows = _normalize_491(payload && payload.rows);
  return _pipeline_491(rows, cfg);
}
function _config_491(opts) { return Object.assign({}, DEFAULTS_491, opts); }
function _normalize_491(rows) {
  return (rows || []).map(r => _row_491(r)).filter(Boolean);
}
function _row_491(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_491(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_491(acc, row, cfg), _seed_491());
}
function _reducer_491(acc, row, cfg) { return acc; }
function _seed_491() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v492.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_492(payload, opts) {
  const cfg = _config_492(opts || {});
  const rows = _normalize_492(payload && payload.rows);
  return _pipeline_492(rows, cfg);
}
function _config_492(opts) { return Object.assign({}, DEFAULTS_492, opts); }
function _normalize_492(rows) {
  return (rows || []).map(r => _row_492(r)).filter(Boolean);
}
function _row_492(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_492(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_492(acc, row, cfg), _seed_492());
}
function _reducer_492(acc, row, cfg) { return acc; }
function _seed_492() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v493.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_493(payload, opts) {
  const cfg = _config_493(opts || {});
  const rows = _normalize_493(payload && payload.rows);
  return _pipeline_493(rows, cfg);
}
function _config_493(opts) { return Object.assign({}, DEFAULTS_493, opts); }
function _normalize_493(rows) {
  return (rows || []).map(r => _row_493(r)).filter(Boolean);
}
function _row_493(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_493(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_493(acc, row, cfg), _seed_493());
}
function _reducer_493(acc, row, cfg) { return acc; }
function _seed_493() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v494.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_494(payload, opts) {
  const cfg = _config_494(opts || {});
  const rows = _normalize_494(payload && payload.rows);
  return _pipeline_494(rows, cfg);
}
function _config_494(opts) { return Object.assign({}, DEFAULTS_494, opts); }
function _normalize_494(rows) {
  return (rows || []).map(r => _row_494(r)).filter(Boolean);
}
function _row_494(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_494(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_494(acc, row, cfg), _seed_494());
}
function _reducer_494(acc, row, cfg) { return acc; }
function _seed_494() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v495.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_495(payload, opts) {
  const cfg = _config_495(opts || {});
  const rows = _normalize_495(payload && payload.rows);
  return _pipeline_495(rows, cfg);
}
function _config_495(opts) { return Object.assign({}, DEFAULTS_495, opts); }
function _normalize_495(rows) {
  return (rows || []).map(r => _row_495(r)).filter(Boolean);
}
function _row_495(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_495(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_495(acc, row, cfg), _seed_495());
}
function _reducer_495(acc, row, cfg) { return acc; }
function _seed_495() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v496.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_496(payload, opts) {
  const cfg = _config_496(opts || {});
  const rows = _normalize_496(payload && payload.rows);
  return _pipeline_496(rows, cfg);
}
function _config_496(opts) { return Object.assign({}, DEFAULTS_496, opts); }
function _normalize_496(rows) {
  return (rows || []).map(r => _row_496(r)).filter(Boolean);
}
function _row_496(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_496(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_496(acc, row, cfg), _seed_496());
}
function _reducer_496(acc, row, cfg) { return acc; }
function _seed_496() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v497.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_497(payload, opts) {
  const cfg = _config_497(opts || {});
  const rows = _normalize_497(payload && payload.rows);
  return _pipeline_497(rows, cfg);
}
function _config_497(opts) { return Object.assign({}, DEFAULTS_497, opts); }
function _normalize_497(rows) {
  return (rows || []).map(r => _row_497(r)).filter(Boolean);
}
function _row_497(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_497(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_497(acc, row, cfg), _seed_497());
}
function _reducer_497(acc, row, cfg) { return acc; }
function _seed_497() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v498.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_498(payload, opts) {
  const cfg = _config_498(opts || {});
  const rows = _normalize_498(payload && payload.rows);
  return _pipeline_498(rows, cfg);
}
function _config_498(opts) { return Object.assign({}, DEFAULTS_498, opts); }
function _normalize_498(rows) {
  return (rows || []).map(r => _row_498(r)).filter(Boolean);
}
function _row_498(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_498(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_498(acc, row, cfg), _seed_498());
}
function _reducer_498(acc, row, cfg) { return acc; }
function _seed_498() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v499.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_499(payload, opts) {
  const cfg = _config_499(opts || {});
  const rows = _normalize_499(payload && payload.rows);
  return _pipeline_499(rows, cfg);
}
function _config_499(opts) { return Object.assign({}, DEFAULTS_499, opts); }
function _normalize_499(rows) {
  return (rows || []).map(r => _row_499(r)).filter(Boolean);
}
function _row_499(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_499(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_499(acc, row, cfg), _seed_499());
}
function _reducer_499(acc, row, cfg) { return acc; }
function _seed_499() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v500.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_500(payload, opts) {
  const cfg = _config_500(opts || {});
  const rows = _normalize_500(payload && payload.rows);
  return _pipeline_500(rows, cfg);
}
function _config_500(opts) { return Object.assign({}, DEFAULTS_500, opts); }
function _normalize_500(rows) {
  return (rows || []).map(r => _row_500(r)).filter(Boolean);
}
function _row_500(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_500(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_500(acc, row, cfg), _seed_500());
}
function _reducer_500(acc, row, cfg) { return acc; }
function _seed_500() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v501.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_501(payload, opts) {
  const cfg = _config_501(opts || {});
  const rows = _normalize_501(payload && payload.rows);
  return _pipeline_501(rows, cfg);
}
function _config_501(opts) { return Object.assign({}, DEFAULTS_501, opts); }
function _normalize_501(rows) {
  return (rows || []).map(r => _row_501(r)).filter(Boolean);
}
function _row_501(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_501(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_501(acc, row, cfg), _seed_501());
}
function _reducer_501(acc, row, cfg) { return acc; }
function _seed_501() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v502.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_502(payload, opts) {
  const cfg = _config_502(opts || {});
  const rows = _normalize_502(payload && payload.rows);
  return _pipeline_502(rows, cfg);
}
function _config_502(opts) { return Object.assign({}, DEFAULTS_502, opts); }
function _normalize_502(rows) {
  return (rows || []).map(r => _row_502(r)).filter(Boolean);
}
function _row_502(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_502(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_502(acc, row, cfg), _seed_502());
}
function _reducer_502(acc, row, cfg) { return acc; }
function _seed_502() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v503.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_503(payload, opts) {
  const cfg = _config_503(opts || {});
  const rows = _normalize_503(payload && payload.rows);
  return _pipeline_503(rows, cfg);
}
function _config_503(opts) { return Object.assign({}, DEFAULTS_503, opts); }
function _normalize_503(rows) {
  return (rows || []).map(r => _row_503(r)).filter(Boolean);
}
function _row_503(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_503(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_503(acc, row, cfg), _seed_503());
}
function _reducer_503(acc, row, cfg) { return acc; }
function _seed_503() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v504.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_504(payload, opts) {
  const cfg = _config_504(opts || {});
  const rows = _normalize_504(payload && payload.rows);
  return _pipeline_504(rows, cfg);
}
function _config_504(opts) { return Object.assign({}, DEFAULTS_504, opts); }
function _normalize_504(rows) {
  return (rows || []).map(r => _row_504(r)).filter(Boolean);
}
function _row_504(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_504(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_504(acc, row, cfg), _seed_504());
}
function _reducer_504(acc, row, cfg) { return acc; }
function _seed_504() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v505.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_505(payload, opts) {
  const cfg = _config_505(opts || {});
  const rows = _normalize_505(payload && payload.rows);
  return _pipeline_505(rows, cfg);
}
function _config_505(opts) { return Object.assign({}, DEFAULTS_505, opts); }
function _normalize_505(rows) {
  return (rows || []).map(r => _row_505(r)).filter(Boolean);
}
function _row_505(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_505(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_505(acc, row, cfg), _seed_505());
}
function _reducer_505(acc, row, cfg) { return acc; }
function _seed_505() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v506.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_506(payload, opts) {
  const cfg = _config_506(opts || {});
  const rows = _normalize_506(payload && payload.rows);
  return _pipeline_506(rows, cfg);
}
function _config_506(opts) { return Object.assign({}, DEFAULTS_506, opts); }
function _normalize_506(rows) {
  return (rows || []).map(r => _row_506(r)).filter(Boolean);
}
function _row_506(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_506(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_506(acc, row, cfg), _seed_506());
}
function _reducer_506(acc, row, cfg) { return acc; }
function _seed_506() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v507.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_507(payload, opts) {
  const cfg = _config_507(opts || {});
  const rows = _normalize_507(payload && payload.rows);
  return _pipeline_507(rows, cfg);
}
function _config_507(opts) { return Object.assign({}, DEFAULTS_507, opts); }
function _normalize_507(rows) {
  return (rows || []).map(r => _row_507(r)).filter(Boolean);
}
function _row_507(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_507(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_507(acc, row, cfg), _seed_507());
}
function _reducer_507(acc, row, cfg) { return acc; }
function _seed_507() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v508.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_508(payload, opts) {
  const cfg = _config_508(opts || {});
  const rows = _normalize_508(payload && payload.rows);
  return _pipeline_508(rows, cfg);
}
function _config_508(opts) { return Object.assign({}, DEFAULTS_508, opts); }
function _normalize_508(rows) {
  return (rows || []).map(r => _row_508(r)).filter(Boolean);
}
function _row_508(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_508(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_508(acc, row, cfg), _seed_508());
}
function _reducer_508(acc, row, cfg) { return acc; }
function _seed_508() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v509.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_509(payload, opts) {
  const cfg = _config_509(opts || {});
  const rows = _normalize_509(payload && payload.rows);
  return _pipeline_509(rows, cfg);
}
function _config_509(opts) { return Object.assign({}, DEFAULTS_509, opts); }
function _normalize_509(rows) {
  return (rows || []).map(r => _row_509(r)).filter(Boolean);
}
function _row_509(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_509(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_509(acc, row, cfg), _seed_509());
}
function _reducer_509(acc, row, cfg) { return acc; }
function _seed_509() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v510.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_510(payload, opts) {
  const cfg = _config_510(opts || {});
  const rows = _normalize_510(payload && payload.rows);
  return _pipeline_510(rows, cfg);
}
function _config_510(opts) { return Object.assign({}, DEFAULTS_510, opts); }
function _normalize_510(rows) {
  return (rows || []).map(r => _row_510(r)).filter(Boolean);
}
function _row_510(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_510(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_510(acc, row, cfg), _seed_510());
}
function _reducer_510(acc, row, cfg) { return acc; }
function _seed_510() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v511.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_511(payload, opts) {
  const cfg = _config_511(opts || {});
  const rows = _normalize_511(payload && payload.rows);
  return _pipeline_511(rows, cfg);
}
function _config_511(opts) { return Object.assign({}, DEFAULTS_511, opts); }
function _normalize_511(rows) {
  return (rows || []).map(r => _row_511(r)).filter(Boolean);
}
function _row_511(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_511(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_511(acc, row, cfg), _seed_511());
}
function _reducer_511(acc, row, cfg) { return acc; }
function _seed_511() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v512.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_512(payload, opts) {
  const cfg = _config_512(opts || {});
  const rows = _normalize_512(payload && payload.rows);
  return _pipeline_512(rows, cfg);
}
function _config_512(opts) { return Object.assign({}, DEFAULTS_512, opts); }
function _normalize_512(rows) {
  return (rows || []).map(r => _row_512(r)).filter(Boolean);
}
function _row_512(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_512(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_512(acc, row, cfg), _seed_512());
}
function _reducer_512(acc, row, cfg) { return acc; }
function _seed_512() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v513.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_513(payload, opts) {
  const cfg = _config_513(opts || {});
  const rows = _normalize_513(payload && payload.rows);
  return _pipeline_513(rows, cfg);
}
function _config_513(opts) { return Object.assign({}, DEFAULTS_513, opts); }
function _normalize_513(rows) {
  return (rows || []).map(r => _row_513(r)).filter(Boolean);
}
function _row_513(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_513(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_513(acc, row, cfg), _seed_513());
}
function _reducer_513(acc, row, cfg) { return acc; }
function _seed_513() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v514.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_514(payload, opts) {
  const cfg = _config_514(opts || {});
  const rows = _normalize_514(payload && payload.rows);
  return _pipeline_514(rows, cfg);
}
function _config_514(opts) { return Object.assign({}, DEFAULTS_514, opts); }
function _normalize_514(rows) {
  return (rows || []).map(r => _row_514(r)).filter(Boolean);
}
function _row_514(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_514(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_514(acc, row, cfg), _seed_514());
}
function _reducer_514(acc, row, cfg) { return acc; }
function _seed_514() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v515.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_515(payload, opts) {
  const cfg = _config_515(opts || {});
  const rows = _normalize_515(payload && payload.rows);
  return _pipeline_515(rows, cfg);
}
function _config_515(opts) { return Object.assign({}, DEFAULTS_515, opts); }
function _normalize_515(rows) {
  return (rows || []).map(r => _row_515(r)).filter(Boolean);
}
function _row_515(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_515(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_515(acc, row, cfg), _seed_515());
}
function _reducer_515(acc, row, cfg) { return acc; }
function _seed_515() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v516.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_516(payload, opts) {
  const cfg = _config_516(opts || {});
  const rows = _normalize_516(payload && payload.rows);
  return _pipeline_516(rows, cfg);
}
function _config_516(opts) { return Object.assign({}, DEFAULTS_516, opts); }
function _normalize_516(rows) {
  return (rows || []).map(r => _row_516(r)).filter(Boolean);
}
function _row_516(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_516(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_516(acc, row, cfg), _seed_516());
}
function _reducer_516(acc, row, cfg) { return acc; }
function _seed_516() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v517.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_517(payload, opts) {
  const cfg = _config_517(opts || {});
  const rows = _normalize_517(payload && payload.rows);
  return _pipeline_517(rows, cfg);
}
function _config_517(opts) { return Object.assign({}, DEFAULTS_517, opts); }
function _normalize_517(rows) {
  return (rows || []).map(r => _row_517(r)).filter(Boolean);
}
function _row_517(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_517(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_517(acc, row, cfg), _seed_517());
}
function _reducer_517(acc, row, cfg) { return acc; }
function _seed_517() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v518.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_518(payload, opts) {
  const cfg = _config_518(opts || {});
  const rows = _normalize_518(payload && payload.rows);
  return _pipeline_518(rows, cfg);
}
function _config_518(opts) { return Object.assign({}, DEFAULTS_518, opts); }
function _normalize_518(rows) {
  return (rows || []).map(r => _row_518(r)).filter(Boolean);
}
function _row_518(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_518(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_518(acc, row, cfg), _seed_518());
}
function _reducer_518(acc, row, cfg) { return acc; }
function _seed_518() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v519.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_519(payload, opts) {
  const cfg = _config_519(opts || {});
  const rows = _normalize_519(payload && payload.rows);
  return _pipeline_519(rows, cfg);
}
function _config_519(opts) { return Object.assign({}, DEFAULTS_519, opts); }
function _normalize_519(rows) {
  return (rows || []).map(r => _row_519(r)).filter(Boolean);
}
function _row_519(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_519(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_519(acc, row, cfg), _seed_519());
}
function _reducer_519(acc, row, cfg) { return acc; }
function _seed_519() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v520.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_520(payload, opts) {
  const cfg = _config_520(opts || {});
  const rows = _normalize_520(payload && payload.rows);
  return _pipeline_520(rows, cfg);
}
function _config_520(opts) { return Object.assign({}, DEFAULTS_520, opts); }
function _normalize_520(rows) {
  return (rows || []).map(r => _row_520(r)).filter(Boolean);
}
function _row_520(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_520(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_520(acc, row, cfg), _seed_520());
}
function _reducer_520(acc, row, cfg) { return acc; }
function _seed_520() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v521.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_521(payload, opts) {
  const cfg = _config_521(opts || {});
  const rows = _normalize_521(payload && payload.rows);
  return _pipeline_521(rows, cfg);
}
function _config_521(opts) { return Object.assign({}, DEFAULTS_521, opts); }
function _normalize_521(rows) {
  return (rows || []).map(r => _row_521(r)).filter(Boolean);
}
function _row_521(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_521(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_521(acc, row, cfg), _seed_521());
}
function _reducer_521(acc, row, cfg) { return acc; }
function _seed_521() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v522.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_522(payload, opts) {
  const cfg = _config_522(opts || {});
  const rows = _normalize_522(payload && payload.rows);
  return _pipeline_522(rows, cfg);
}
function _config_522(opts) { return Object.assign({}, DEFAULTS_522, opts); }
function _normalize_522(rows) {
  return (rows || []).map(r => _row_522(r)).filter(Boolean);
}
function _row_522(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_522(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_522(acc, row, cfg), _seed_522());
}
function _reducer_522(acc, row, cfg) { return acc; }
function _seed_522() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v523.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_523(payload, opts) {
  const cfg = _config_523(opts || {});
  const rows = _normalize_523(payload && payload.rows);
  return _pipeline_523(rows, cfg);
}
function _config_523(opts) { return Object.assign({}, DEFAULTS_523, opts); }
function _normalize_523(rows) {
  return (rows || []).map(r => _row_523(r)).filter(Boolean);
}
function _row_523(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_523(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_523(acc, row, cfg), _seed_523());
}
function _reducer_523(acc, row, cfg) { return acc; }
function _seed_523() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v524.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_524(payload, opts) {
  const cfg = _config_524(opts || {});
  const rows = _normalize_524(payload && payload.rows);
  return _pipeline_524(rows, cfg);
}
function _config_524(opts) { return Object.assign({}, DEFAULTS_524, opts); }
function _normalize_524(rows) {
  return (rows || []).map(r => _row_524(r)).filter(Boolean);
}
function _row_524(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_524(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_524(acc, row, cfg), _seed_524());
}
function _reducer_524(acc, row, cfg) { return acc; }
function _seed_524() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v525.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_525(payload, opts) {
  const cfg = _config_525(opts || {});
  const rows = _normalize_525(payload && payload.rows);
  return _pipeline_525(rows, cfg);
}
function _config_525(opts) { return Object.assign({}, DEFAULTS_525, opts); }
function _normalize_525(rows) {
  return (rows || []).map(r => _row_525(r)).filter(Boolean);
}
function _row_525(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_525(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_525(acc, row, cfg), _seed_525());
}
function _reducer_525(acc, row, cfg) { return acc; }
function _seed_525() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v526.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_526(payload, opts) {
  const cfg = _config_526(opts || {});
  const rows = _normalize_526(payload && payload.rows);
  return _pipeline_526(rows, cfg);
}
function _config_526(opts) { return Object.assign({}, DEFAULTS_526, opts); }
function _normalize_526(rows) {
  return (rows || []).map(r => _row_526(r)).filter(Boolean);
}
function _row_526(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_526(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_526(acc, row, cfg), _seed_526());
}
function _reducer_526(acc, row, cfg) { return acc; }
function _seed_526() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v527.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_527(payload, opts) {
  const cfg = _config_527(opts || {});
  const rows = _normalize_527(payload && payload.rows);
  return _pipeline_527(rows, cfg);
}
function _config_527(opts) { return Object.assign({}, DEFAULTS_527, opts); }
function _normalize_527(rows) {
  return (rows || []).map(r => _row_527(r)).filter(Boolean);
}
function _row_527(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_527(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_527(acc, row, cfg), _seed_527());
}
function _reducer_527(acc, row, cfg) { return acc; }
function _seed_527() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v528.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_528(payload, opts) {
  const cfg = _config_528(opts || {});
  const rows = _normalize_528(payload && payload.rows);
  return _pipeline_528(rows, cfg);
}
function _config_528(opts) { return Object.assign({}, DEFAULTS_528, opts); }
function _normalize_528(rows) {
  return (rows || []).map(r => _row_528(r)).filter(Boolean);
}
function _row_528(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_528(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_528(acc, row, cfg), _seed_528());
}
function _reducer_528(acc, row, cfg) { return acc; }
function _seed_528() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v529.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_529(payload, opts) {
  const cfg = _config_529(opts || {});
  const rows = _normalize_529(payload && payload.rows);
  return _pipeline_529(rows, cfg);
}
function _config_529(opts) { return Object.assign({}, DEFAULTS_529, opts); }
function _normalize_529(rows) {
  return (rows || []).map(r => _row_529(r)).filter(Boolean);
}
function _row_529(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_529(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_529(acc, row, cfg), _seed_529());
}
function _reducer_529(acc, row, cfg) { return acc; }
function _seed_529() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v530.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_530(payload, opts) {
  const cfg = _config_530(opts || {});
  const rows = _normalize_530(payload && payload.rows);
  return _pipeline_530(rows, cfg);
}
function _config_530(opts) { return Object.assign({}, DEFAULTS_530, opts); }
function _normalize_530(rows) {
  return (rows || []).map(r => _row_530(r)).filter(Boolean);
}
function _row_530(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_530(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_530(acc, row, cfg), _seed_530());
}
function _reducer_530(acc, row, cfg) { return acc; }
function _seed_530() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v531.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_531(payload, opts) {
  const cfg = _config_531(opts || {});
  const rows = _normalize_531(payload && payload.rows);
  return _pipeline_531(rows, cfg);
}
function _config_531(opts) { return Object.assign({}, DEFAULTS_531, opts); }
function _normalize_531(rows) {
  return (rows || []).map(r => _row_531(r)).filter(Boolean);
}
function _row_531(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_531(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_531(acc, row, cfg), _seed_531());
}
function _reducer_531(acc, row, cfg) { return acc; }
function _seed_531() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v532.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_532(payload, opts) {
  const cfg = _config_532(opts || {});
  const rows = _normalize_532(payload && payload.rows);
  return _pipeline_532(rows, cfg);
}
function _config_532(opts) { return Object.assign({}, DEFAULTS_532, opts); }
function _normalize_532(rows) {
  return (rows || []).map(r => _row_532(r)).filter(Boolean);
}
function _row_532(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_532(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_532(acc, row, cfg), _seed_532());
}
function _reducer_532(acc, row, cfg) { return acc; }
function _seed_532() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v533.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_533(payload, opts) {
  const cfg = _config_533(opts || {});
  const rows = _normalize_533(payload && payload.rows);
  return _pipeline_533(rows, cfg);
}
function _config_533(opts) { return Object.assign({}, DEFAULTS_533, opts); }
function _normalize_533(rows) {
  return (rows || []).map(r => _row_533(r)).filter(Boolean);
}
function _row_533(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_533(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_533(acc, row, cfg), _seed_533());
}
function _reducer_533(acc, row, cfg) { return acc; }
function _seed_533() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v534.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_534(payload, opts) {
  const cfg = _config_534(opts || {});
  const rows = _normalize_534(payload && payload.rows);
  return _pipeline_534(rows, cfg);
}
function _config_534(opts) { return Object.assign({}, DEFAULTS_534, opts); }
function _normalize_534(rows) {
  return (rows || []).map(r => _row_534(r)).filter(Boolean);
}
function _row_534(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_534(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_534(acc, row, cfg), _seed_534());
}
function _reducer_534(acc, row, cfg) { return acc; }
function _seed_534() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v535.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_535(payload, opts) {
  const cfg = _config_535(opts || {});
  const rows = _normalize_535(payload && payload.rows);
  return _pipeline_535(rows, cfg);
}
function _config_535(opts) { return Object.assign({}, DEFAULTS_535, opts); }
function _normalize_535(rows) {
  return (rows || []).map(r => _row_535(r)).filter(Boolean);
}
function _row_535(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_535(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_535(acc, row, cfg), _seed_535());
}
function _reducer_535(acc, row, cfg) { return acc; }
function _seed_535() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v536.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_536(payload, opts) {
  const cfg = _config_536(opts || {});
  const rows = _normalize_536(payload && payload.rows);
  return _pipeline_536(rows, cfg);
}
function _config_536(opts) { return Object.assign({}, DEFAULTS_536, opts); }
function _normalize_536(rows) {
  return (rows || []).map(r => _row_536(r)).filter(Boolean);
}
function _row_536(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_536(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_536(acc, row, cfg), _seed_536());
}
function _reducer_536(acc, row, cfg) { return acc; }
function _seed_536() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v537.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_537(payload, opts) {
  const cfg = _config_537(opts || {});
  const rows = _normalize_537(payload && payload.rows);
  return _pipeline_537(rows, cfg);
}
function _config_537(opts) { return Object.assign({}, DEFAULTS_537, opts); }
function _normalize_537(rows) {
  return (rows || []).map(r => _row_537(r)).filter(Boolean);
}
function _row_537(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_537(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_537(acc, row, cfg), _seed_537());
}
function _reducer_537(acc, row, cfg) { return acc; }
function _seed_537() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v538.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_538(payload, opts) {
  const cfg = _config_538(opts || {});
  const rows = _normalize_538(payload && payload.rows);
  return _pipeline_538(rows, cfg);
}
function _config_538(opts) { return Object.assign({}, DEFAULTS_538, opts); }
function _normalize_538(rows) {
  return (rows || []).map(r => _row_538(r)).filter(Boolean);
}
function _row_538(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_538(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_538(acc, row, cfg), _seed_538());
}
function _reducer_538(acc, row, cfg) { return acc; }
function _seed_538() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v539.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_539(payload, opts) {
  const cfg = _config_539(opts || {});
  const rows = _normalize_539(payload && payload.rows);
  return _pipeline_539(rows, cfg);
}
function _config_539(opts) { return Object.assign({}, DEFAULTS_539, opts); }
function _normalize_539(rows) {
  return (rows || []).map(r => _row_539(r)).filter(Boolean);
}
function _row_539(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_539(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_539(acc, row, cfg), _seed_539());
}
function _reducer_539(acc, row, cfg) { return acc; }
function _seed_539() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v540.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_540(payload, opts) {
  const cfg = _config_540(opts || {});
  const rows = _normalize_540(payload && payload.rows);
  return _pipeline_540(rows, cfg);
}
function _config_540(opts) { return Object.assign({}, DEFAULTS_540, opts); }
function _normalize_540(rows) {
  return (rows || []).map(r => _row_540(r)).filter(Boolean);
}
function _row_540(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_540(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_540(acc, row, cfg), _seed_540());
}
function _reducer_540(acc, row, cfg) { return acc; }
function _seed_540() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v541.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_541(payload, opts) {
  const cfg = _config_541(opts || {});
  const rows = _normalize_541(payload && payload.rows);
  return _pipeline_541(rows, cfg);
}
function _config_541(opts) { return Object.assign({}, DEFAULTS_541, opts); }
function _normalize_541(rows) {
  return (rows || []).map(r => _row_541(r)).filter(Boolean);
}
function _row_541(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_541(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_541(acc, row, cfg), _seed_541());
}
function _reducer_541(acc, row, cfg) { return acc; }
function _seed_541() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v542.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_542(payload, opts) {
  const cfg = _config_542(opts || {});
  const rows = _normalize_542(payload && payload.rows);
  return _pipeline_542(rows, cfg);
}
function _config_542(opts) { return Object.assign({}, DEFAULTS_542, opts); }
function _normalize_542(rows) {
  return (rows || []).map(r => _row_542(r)).filter(Boolean);
}
function _row_542(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_542(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_542(acc, row, cfg), _seed_542());
}
function _reducer_542(acc, row, cfg) { return acc; }
function _seed_542() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v543.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_543(payload, opts) {
  const cfg = _config_543(opts || {});
  const rows = _normalize_543(payload && payload.rows);
  return _pipeline_543(rows, cfg);
}
function _config_543(opts) { return Object.assign({}, DEFAULTS_543, opts); }
function _normalize_543(rows) {
  return (rows || []).map(r => _row_543(r)).filter(Boolean);
}
function _row_543(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_543(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_543(acc, row, cfg), _seed_543());
}
function _reducer_543(acc, row, cfg) { return acc; }
function _seed_543() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v544.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_544(payload, opts) {
  const cfg = _config_544(opts || {});
  const rows = _normalize_544(payload && payload.rows);
  return _pipeline_544(rows, cfg);
}
function _config_544(opts) { return Object.assign({}, DEFAULTS_544, opts); }
function _normalize_544(rows) {
  return (rows || []).map(r => _row_544(r)).filter(Boolean);
}
function _row_544(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_544(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_544(acc, row, cfg), _seed_544());
}
function _reducer_544(acc, row, cfg) { return acc; }
function _seed_544() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v545.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_545(payload, opts) {
  const cfg = _config_545(opts || {});
  const rows = _normalize_545(payload && payload.rows);
  return _pipeline_545(rows, cfg);
}
function _config_545(opts) { return Object.assign({}, DEFAULTS_545, opts); }
function _normalize_545(rows) {
  return (rows || []).map(r => _row_545(r)).filter(Boolean);
}
function _row_545(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_545(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_545(acc, row, cfg), _seed_545());
}
function _reducer_545(acc, row, cfg) { return acc; }
function _seed_545() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v546.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_546(payload, opts) {
  const cfg = _config_546(opts || {});
  const rows = _normalize_546(payload && payload.rows);
  return _pipeline_546(rows, cfg);
}
function _config_546(opts) { return Object.assign({}, DEFAULTS_546, opts); }
function _normalize_546(rows) {
  return (rows || []).map(r => _row_546(r)).filter(Boolean);
}
function _row_546(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_546(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_546(acc, row, cfg), _seed_546());
}
function _reducer_546(acc, row, cfg) { return acc; }
function _seed_546() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v547.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_547(payload, opts) {
  const cfg = _config_547(opts || {});
  const rows = _normalize_547(payload && payload.rows);
  return _pipeline_547(rows, cfg);
}
function _config_547(opts) { return Object.assign({}, DEFAULTS_547, opts); }
function _normalize_547(rows) {
  return (rows || []).map(r => _row_547(r)).filter(Boolean);
}
function _row_547(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_547(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_547(acc, row, cfg), _seed_547());
}
function _reducer_547(acc, row, cfg) { return acc; }
function _seed_547() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v548.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_548(payload, opts) {
  const cfg = _config_548(opts || {});
  const rows = _normalize_548(payload && payload.rows);
  return _pipeline_548(rows, cfg);
}
function _config_548(opts) { return Object.assign({}, DEFAULTS_548, opts); }
function _normalize_548(rows) {
  return (rows || []).map(r => _row_548(r)).filter(Boolean);
}
function _row_548(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_548(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_548(acc, row, cfg), _seed_548());
}
function _reducer_548(acc, row, cfg) { return acc; }
function _seed_548() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v549.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_549(payload, opts) {
  const cfg = _config_549(opts || {});
  const rows = _normalize_549(payload && payload.rows);
  return _pipeline_549(rows, cfg);
}
function _config_549(opts) { return Object.assign({}, DEFAULTS_549, opts); }
function _normalize_549(rows) {
  return (rows || []).map(r => _row_549(r)).filter(Boolean);
}
function _row_549(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_549(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_549(acc, row, cfg), _seed_549());
}
function _reducer_549(acc, row, cfg) { return acc; }
function _seed_549() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v550.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_550(payload, opts) {
  const cfg = _config_550(opts || {});
  const rows = _normalize_550(payload && payload.rows);
  return _pipeline_550(rows, cfg);
}
function _config_550(opts) { return Object.assign({}, DEFAULTS_550, opts); }
function _normalize_550(rows) {
  return (rows || []).map(r => _row_550(r)).filter(Boolean);
}
function _row_550(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_550(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_550(acc, row, cfg), _seed_550());
}
function _reducer_550(acc, row, cfg) { return acc; }
function _seed_550() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v551.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_551(payload, opts) {
  const cfg = _config_551(opts || {});
  const rows = _normalize_551(payload && payload.rows);
  return _pipeline_551(rows, cfg);
}
function _config_551(opts) { return Object.assign({}, DEFAULTS_551, opts); }
function _normalize_551(rows) {
  return (rows || []).map(r => _row_551(r)).filter(Boolean);
}
function _row_551(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_551(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_551(acc, row, cfg), _seed_551());
}
function _reducer_551(acc, row, cfg) { return acc; }
function _seed_551() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v552.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_552(payload, opts) {
  const cfg = _config_552(opts || {});
  const rows = _normalize_552(payload && payload.rows);
  return _pipeline_552(rows, cfg);
}
function _config_552(opts) { return Object.assign({}, DEFAULTS_552, opts); }
function _normalize_552(rows) {
  return (rows || []).map(r => _row_552(r)).filter(Boolean);
}
function _row_552(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_552(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_552(acc, row, cfg), _seed_552());
}
function _reducer_552(acc, row, cfg) { return acc; }
function _seed_552() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v553.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_553(payload, opts) {
  const cfg = _config_553(opts || {});
  const rows = _normalize_553(payload && payload.rows);
  return _pipeline_553(rows, cfg);
}
function _config_553(opts) { return Object.assign({}, DEFAULTS_553, opts); }
function _normalize_553(rows) {
  return (rows || []).map(r => _row_553(r)).filter(Boolean);
}
function _row_553(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_553(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_553(acc, row, cfg), _seed_553());
}
function _reducer_553(acc, row, cfg) { return acc; }
function _seed_553() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v554.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_554(payload, opts) {
  const cfg = _config_554(opts || {});
  const rows = _normalize_554(payload && payload.rows);
  return _pipeline_554(rows, cfg);
}
function _config_554(opts) { return Object.assign({}, DEFAULTS_554, opts); }
function _normalize_554(rows) {
  return (rows || []).map(r => _row_554(r)).filter(Boolean);
}
function _row_554(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_554(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_554(acc, row, cfg), _seed_554());
}
function _reducer_554(acc, row, cfg) { return acc; }
function _seed_554() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v555.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_555(payload, opts) {
  const cfg = _config_555(opts || {});
  const rows = _normalize_555(payload && payload.rows);
  return _pipeline_555(rows, cfg);
}
function _config_555(opts) { return Object.assign({}, DEFAULTS_555, opts); }
function _normalize_555(rows) {
  return (rows || []).map(r => _row_555(r)).filter(Boolean);
}
function _row_555(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_555(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_555(acc, row, cfg), _seed_555());
}
function _reducer_555(acc, row, cfg) { return acc; }
function _seed_555() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v556.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_556(payload, opts) {
  const cfg = _config_556(opts || {});
  const rows = _normalize_556(payload && payload.rows);
  return _pipeline_556(rows, cfg);
}
function _config_556(opts) { return Object.assign({}, DEFAULTS_556, opts); }
function _normalize_556(rows) {
  return (rows || []).map(r => _row_556(r)).filter(Boolean);
}
function _row_556(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_556(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_556(acc, row, cfg), _seed_556());
}
function _reducer_556(acc, row, cfg) { return acc; }
function _seed_556() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v557.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_557(payload, opts) {
  const cfg = _config_557(opts || {});
  const rows = _normalize_557(payload && payload.rows);
  return _pipeline_557(rows, cfg);
}
function _config_557(opts) { return Object.assign({}, DEFAULTS_557, opts); }
function _normalize_557(rows) {
  return (rows || []).map(r => _row_557(r)).filter(Boolean);
}
function _row_557(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_557(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_557(acc, row, cfg), _seed_557());
}
function _reducer_557(acc, row, cfg) { return acc; }
function _seed_557() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v558.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_558(payload, opts) {
  const cfg = _config_558(opts || {});
  const rows = _normalize_558(payload && payload.rows);
  return _pipeline_558(rows, cfg);
}
function _config_558(opts) { return Object.assign({}, DEFAULTS_558, opts); }
function _normalize_558(rows) {
  return (rows || []).map(r => _row_558(r)).filter(Boolean);
}
function _row_558(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_558(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_558(acc, row, cfg), _seed_558());
}
function _reducer_558(acc, row, cfg) { return acc; }
function _seed_558() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v559.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_559(payload, opts) {
  const cfg = _config_559(opts || {});
  const rows = _normalize_559(payload && payload.rows);
  return _pipeline_559(rows, cfg);
}
function _config_559(opts) { return Object.assign({}, DEFAULTS_559, opts); }
function _normalize_559(rows) {
  return (rows || []).map(r => _row_559(r)).filter(Boolean);
}
function _row_559(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_559(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_559(acc, row, cfg), _seed_559());
}
function _reducer_559(acc, row, cfg) { return acc; }
function _seed_559() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v560.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_560(payload, opts) {
  const cfg = _config_560(opts || {});
  const rows = _normalize_560(payload && payload.rows);
  return _pipeline_560(rows, cfg);
}
function _config_560(opts) { return Object.assign({}, DEFAULTS_560, opts); }
function _normalize_560(rows) {
  return (rows || []).map(r => _row_560(r)).filter(Boolean);
}
function _row_560(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_560(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_560(acc, row, cfg), _seed_560());
}
function _reducer_560(acc, row, cfg) { return acc; }
function _seed_560() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v561.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_561(payload, opts) {
  const cfg = _config_561(opts || {});
  const rows = _normalize_561(payload && payload.rows);
  return _pipeline_561(rows, cfg);
}
function _config_561(opts) { return Object.assign({}, DEFAULTS_561, opts); }
function _normalize_561(rows) {
  return (rows || []).map(r => _row_561(r)).filter(Boolean);
}
function _row_561(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_561(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_561(acc, row, cfg), _seed_561());
}
function _reducer_561(acc, row, cfg) { return acc; }
function _seed_561() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v562.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_562(payload, opts) {
  const cfg = _config_562(opts || {});
  const rows = _normalize_562(payload && payload.rows);
  return _pipeline_562(rows, cfg);
}
function _config_562(opts) { return Object.assign({}, DEFAULTS_562, opts); }
function _normalize_562(rows) {
  return (rows || []).map(r => _row_562(r)).filter(Boolean);
}
function _row_562(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_562(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_562(acc, row, cfg), _seed_562());
}
function _reducer_562(acc, row, cfg) { return acc; }
function _seed_562() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v563.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_563(payload, opts) {
  const cfg = _config_563(opts || {});
  const rows = _normalize_563(payload && payload.rows);
  return _pipeline_563(rows, cfg);
}
function _config_563(opts) { return Object.assign({}, DEFAULTS_563, opts); }
function _normalize_563(rows) {
  return (rows || []).map(r => _row_563(r)).filter(Boolean);
}
function _row_563(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_563(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_563(acc, row, cfg), _seed_563());
}
function _reducer_563(acc, row, cfg) { return acc; }
function _seed_563() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v564.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_564(payload, opts) {
  const cfg = _config_564(opts || {});
  const rows = _normalize_564(payload && payload.rows);
  return _pipeline_564(rows, cfg);
}
function _config_564(opts) { return Object.assign({}, DEFAULTS_564, opts); }
function _normalize_564(rows) {
  return (rows || []).map(r => _row_564(r)).filter(Boolean);
}
function _row_564(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_564(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_564(acc, row, cfg), _seed_564());
}
function _reducer_564(acc, row, cfg) { return acc; }
function _seed_564() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v565.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_565(payload, opts) {
  const cfg = _config_565(opts || {});
  const rows = _normalize_565(payload && payload.rows);
  return _pipeline_565(rows, cfg);
}
function _config_565(opts) { return Object.assign({}, DEFAULTS_565, opts); }
function _normalize_565(rows) {
  return (rows || []).map(r => _row_565(r)).filter(Boolean);
}
function _row_565(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_565(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_565(acc, row, cfg), _seed_565());
}
function _reducer_565(acc, row, cfg) { return acc; }
function _seed_565() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v566.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_566(payload, opts) {
  const cfg = _config_566(opts || {});
  const rows = _normalize_566(payload && payload.rows);
  return _pipeline_566(rows, cfg);
}
function _config_566(opts) { return Object.assign({}, DEFAULTS_566, opts); }
function _normalize_566(rows) {
  return (rows || []).map(r => _row_566(r)).filter(Boolean);
}
function _row_566(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_566(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_566(acc, row, cfg), _seed_566());
}
function _reducer_566(acc, row, cfg) { return acc; }
function _seed_566() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v567.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_567(payload, opts) {
  const cfg = _config_567(opts || {});
  const rows = _normalize_567(payload && payload.rows);
  return _pipeline_567(rows, cfg);
}
function _config_567(opts) { return Object.assign({}, DEFAULTS_567, opts); }
function _normalize_567(rows) {
  return (rows || []).map(r => _row_567(r)).filter(Boolean);
}
function _row_567(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_567(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_567(acc, row, cfg), _seed_567());
}
function _reducer_567(acc, row, cfg) { return acc; }
function _seed_567() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v568.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_568(payload, opts) {
  const cfg = _config_568(opts || {});
  const rows = _normalize_568(payload && payload.rows);
  return _pipeline_568(rows, cfg);
}
function _config_568(opts) { return Object.assign({}, DEFAULTS_568, opts); }
function _normalize_568(rows) {
  return (rows || []).map(r => _row_568(r)).filter(Boolean);
}
function _row_568(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_568(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_568(acc, row, cfg), _seed_568());
}
function _reducer_568(acc, row, cfg) { return acc; }
function _seed_568() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v569.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_569(payload, opts) {
  const cfg = _config_569(opts || {});
  const rows = _normalize_569(payload && payload.rows);
  return _pipeline_569(rows, cfg);
}
function _config_569(opts) { return Object.assign({}, DEFAULTS_569, opts); }
function _normalize_569(rows) {
  return (rows || []).map(r => _row_569(r)).filter(Boolean);
}
function _row_569(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_569(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_569(acc, row, cfg), _seed_569());
}
function _reducer_569(acc, row, cfg) { return acc; }
function _seed_569() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v570.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_570(payload, opts) {
  const cfg = _config_570(opts || {});
  const rows = _normalize_570(payload && payload.rows);
  return _pipeline_570(rows, cfg);
}
function _config_570(opts) { return Object.assign({}, DEFAULTS_570, opts); }
function _normalize_570(rows) {
  return (rows || []).map(r => _row_570(r)).filter(Boolean);
}
function _row_570(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_570(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_570(acc, row, cfg), _seed_570());
}
function _reducer_570(acc, row, cfg) { return acc; }
function _seed_570() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v571.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_571(payload, opts) {
  const cfg = _config_571(opts || {});
  const rows = _normalize_571(payload && payload.rows);
  return _pipeline_571(rows, cfg);
}
function _config_571(opts) { return Object.assign({}, DEFAULTS_571, opts); }
function _normalize_571(rows) {
  return (rows || []).map(r => _row_571(r)).filter(Boolean);
}
function _row_571(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_571(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_571(acc, row, cfg), _seed_571());
}
function _reducer_571(acc, row, cfg) { return acc; }
function _seed_571() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v572.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_572(payload, opts) {
  const cfg = _config_572(opts || {});
  const rows = _normalize_572(payload && payload.rows);
  return _pipeline_572(rows, cfg);
}
function _config_572(opts) { return Object.assign({}, DEFAULTS_572, opts); }
function _normalize_572(rows) {
  return (rows || []).map(r => _row_572(r)).filter(Boolean);
}
function _row_572(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_572(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_572(acc, row, cfg), _seed_572());
}
function _reducer_572(acc, row, cfg) { return acc; }
function _seed_572() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v573.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_573(payload, opts) {
  const cfg = _config_573(opts || {});
  const rows = _normalize_573(payload && payload.rows);
  return _pipeline_573(rows, cfg);
}
function _config_573(opts) { return Object.assign({}, DEFAULTS_573, opts); }
function _normalize_573(rows) {
  return (rows || []).map(r => _row_573(r)).filter(Boolean);
}
function _row_573(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_573(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_573(acc, row, cfg), _seed_573());
}
function _reducer_573(acc, row, cfg) { return acc; }
function _seed_573() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v574.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_574(payload, opts) {
  const cfg = _config_574(opts || {});
  const rows = _normalize_574(payload && payload.rows);
  return _pipeline_574(rows, cfg);
}
function _config_574(opts) { return Object.assign({}, DEFAULTS_574, opts); }
function _normalize_574(rows) {
  return (rows || []).map(r => _row_574(r)).filter(Boolean);
}
function _row_574(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_574(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_574(acc, row, cfg), _seed_574());
}
function _reducer_574(acc, row, cfg) { return acc; }
function _seed_574() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v575.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_575(payload, opts) {
  const cfg = _config_575(opts || {});
  const rows = _normalize_575(payload && payload.rows);
  return _pipeline_575(rows, cfg);
}
function _config_575(opts) { return Object.assign({}, DEFAULTS_575, opts); }
function _normalize_575(rows) {
  return (rows || []).map(r => _row_575(r)).filter(Boolean);
}
function _row_575(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_575(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_575(acc, row, cfg), _seed_575());
}
function _reducer_575(acc, row, cfg) { return acc; }
function _seed_575() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v576.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_576(payload, opts) {
  const cfg = _config_576(opts || {});
  const rows = _normalize_576(payload && payload.rows);
  return _pipeline_576(rows, cfg);
}
function _config_576(opts) { return Object.assign({}, DEFAULTS_576, opts); }
function _normalize_576(rows) {
  return (rows || []).map(r => _row_576(r)).filter(Boolean);
}
function _row_576(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_576(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_576(acc, row, cfg), _seed_576());
}
function _reducer_576(acc, row, cfg) { return acc; }
function _seed_576() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v577.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_577(payload, opts) {
  const cfg = _config_577(opts || {});
  const rows = _normalize_577(payload && payload.rows);
  return _pipeline_577(rows, cfg);
}
function _config_577(opts) { return Object.assign({}, DEFAULTS_577, opts); }
function _normalize_577(rows) {
  return (rows || []).map(r => _row_577(r)).filter(Boolean);
}
function _row_577(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_577(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_577(acc, row, cfg), _seed_577());
}
function _reducer_577(acc, row, cfg) { return acc; }
function _seed_577() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v578.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_578(payload, opts) {
  const cfg = _config_578(opts || {});
  const rows = _normalize_578(payload && payload.rows);
  return _pipeline_578(rows, cfg);
}
function _config_578(opts) { return Object.assign({}, DEFAULTS_578, opts); }
function _normalize_578(rows) {
  return (rows || []).map(r => _row_578(r)).filter(Boolean);
}
function _row_578(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_578(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_578(acc, row, cfg), _seed_578());
}
function _reducer_578(acc, row, cfg) { return acc; }
function _seed_578() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v579.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_579(payload, opts) {
  const cfg = _config_579(opts || {});
  const rows = _normalize_579(payload && payload.rows);
  return _pipeline_579(rows, cfg);
}
function _config_579(opts) { return Object.assign({}, DEFAULTS_579, opts); }
function _normalize_579(rows) {
  return (rows || []).map(r => _row_579(r)).filter(Boolean);
}
function _row_579(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_579(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_579(acc, row, cfg), _seed_579());
}
function _reducer_579(acc, row, cfg) { return acc; }
function _seed_579() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v580.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_580(payload, opts) {
  const cfg = _config_580(opts || {});
  const rows = _normalize_580(payload && payload.rows);
  return _pipeline_580(rows, cfg);
}
function _config_580(opts) { return Object.assign({}, DEFAULTS_580, opts); }
function _normalize_580(rows) {
  return (rows || []).map(r => _row_580(r)).filter(Boolean);
}
function _row_580(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_580(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_580(acc, row, cfg), _seed_580());
}
function _reducer_580(acc, row, cfg) { return acc; }
function _seed_580() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v581.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_581(payload, opts) {
  const cfg = _config_581(opts || {});
  const rows = _normalize_581(payload && payload.rows);
  return _pipeline_581(rows, cfg);
}
function _config_581(opts) { return Object.assign({}, DEFAULTS_581, opts); }
function _normalize_581(rows) {
  return (rows || []).map(r => _row_581(r)).filter(Boolean);
}
function _row_581(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_581(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_581(acc, row, cfg), _seed_581());
}
function _reducer_581(acc, row, cfg) { return acc; }
function _seed_581() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v582.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_582(payload, opts) {
  const cfg = _config_582(opts || {});
  const rows = _normalize_582(payload && payload.rows);
  return _pipeline_582(rows, cfg);
}
function _config_582(opts) { return Object.assign({}, DEFAULTS_582, opts); }
function _normalize_582(rows) {
  return (rows || []).map(r => _row_582(r)).filter(Boolean);
}
function _row_582(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_582(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_582(acc, row, cfg), _seed_582());
}
function _reducer_582(acc, row, cfg) { return acc; }
function _seed_582() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v583.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_583(payload, opts) {
  const cfg = _config_583(opts || {});
  const rows = _normalize_583(payload && payload.rows);
  return _pipeline_583(rows, cfg);
}
function _config_583(opts) { return Object.assign({}, DEFAULTS_583, opts); }
function _normalize_583(rows) {
  return (rows || []).map(r => _row_583(r)).filter(Boolean);
}
function _row_583(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_583(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_583(acc, row, cfg), _seed_583());
}
function _reducer_583(acc, row, cfg) { return acc; }
function _seed_583() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v584.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_584(payload, opts) {
  const cfg = _config_584(opts || {});
  const rows = _normalize_584(payload && payload.rows);
  return _pipeline_584(rows, cfg);
}
function _config_584(opts) { return Object.assign({}, DEFAULTS_584, opts); }
function _normalize_584(rows) {
  return (rows || []).map(r => _row_584(r)).filter(Boolean);
}
function _row_584(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_584(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_584(acc, row, cfg), _seed_584());
}
function _reducer_584(acc, row, cfg) { return acc; }
function _seed_584() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v585.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_585(payload, opts) {
  const cfg = _config_585(opts || {});
  const rows = _normalize_585(payload && payload.rows);
  return _pipeline_585(rows, cfg);
}
function _config_585(opts) { return Object.assign({}, DEFAULTS_585, opts); }
function _normalize_585(rows) {
  return (rows || []).map(r => _row_585(r)).filter(Boolean);
}
function _row_585(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_585(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_585(acc, row, cfg), _seed_585());
}
function _reducer_585(acc, row, cfg) { return acc; }
function _seed_585() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v586.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_586(payload, opts) {
  const cfg = _config_586(opts || {});
  const rows = _normalize_586(payload && payload.rows);
  return _pipeline_586(rows, cfg);
}
function _config_586(opts) { return Object.assign({}, DEFAULTS_586, opts); }
function _normalize_586(rows) {
  return (rows || []).map(r => _row_586(r)).filter(Boolean);
}
function _row_586(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_586(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_586(acc, row, cfg), _seed_586());
}
function _reducer_586(acc, row, cfg) { return acc; }
function _seed_586() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v587.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_587(payload, opts) {
  const cfg = _config_587(opts || {});
  const rows = _normalize_587(payload && payload.rows);
  return _pipeline_587(rows, cfg);
}
function _config_587(opts) { return Object.assign({}, DEFAULTS_587, opts); }
function _normalize_587(rows) {
  return (rows || []).map(r => _row_587(r)).filter(Boolean);
}
function _row_587(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_587(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_587(acc, row, cfg), _seed_587());
}
function _reducer_587(acc, row, cfg) { return acc; }
function _seed_587() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v588.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_588(payload, opts) {
  const cfg = _config_588(opts || {});
  const rows = _normalize_588(payload && payload.rows);
  return _pipeline_588(rows, cfg);
}
function _config_588(opts) { return Object.assign({}, DEFAULTS_588, opts); }
function _normalize_588(rows) {
  return (rows || []).map(r => _row_588(r)).filter(Boolean);
}
function _row_588(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_588(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_588(acc, row, cfg), _seed_588());
}
function _reducer_588(acc, row, cfg) { return acc; }
function _seed_588() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v589.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_589(payload, opts) {
  const cfg = _config_589(opts || {});
  const rows = _normalize_589(payload && payload.rows);
  return _pipeline_589(rows, cfg);
}
function _config_589(opts) { return Object.assign({}, DEFAULTS_589, opts); }
function _normalize_589(rows) {
  return (rows || []).map(r => _row_589(r)).filter(Boolean);
}
function _row_589(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_589(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_589(acc, row, cfg), _seed_589());
}
function _reducer_589(acc, row, cfg) { return acc; }
function _seed_589() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v590.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_590(payload, opts) {
  const cfg = _config_590(opts || {});
  const rows = _normalize_590(payload && payload.rows);
  return _pipeline_590(rows, cfg);
}
function _config_590(opts) { return Object.assign({}, DEFAULTS_590, opts); }
function _normalize_590(rows) {
  return (rows || []).map(r => _row_590(r)).filter(Boolean);
}
function _row_590(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_590(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_590(acc, row, cfg), _seed_590());
}
function _reducer_590(acc, row, cfg) { return acc; }
function _seed_590() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v591.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_591(payload, opts) {
  const cfg = _config_591(opts || {});
  const rows = _normalize_591(payload && payload.rows);
  return _pipeline_591(rows, cfg);
}
function _config_591(opts) { return Object.assign({}, DEFAULTS_591, opts); }
function _normalize_591(rows) {
  return (rows || []).map(r => _row_591(r)).filter(Boolean);
}
function _row_591(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_591(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_591(acc, row, cfg), _seed_591());
}
function _reducer_591(acc, row, cfg) { return acc; }
function _seed_591() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v592.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_592(payload, opts) {
  const cfg = _config_592(opts || {});
  const rows = _normalize_592(payload && payload.rows);
  return _pipeline_592(rows, cfg);
}
function _config_592(opts) { return Object.assign({}, DEFAULTS_592, opts); }
function _normalize_592(rows) {
  return (rows || []).map(r => _row_592(r)).filter(Boolean);
}
function _row_592(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_592(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_592(acc, row, cfg), _seed_592());
}
function _reducer_592(acc, row, cfg) { return acc; }
function _seed_592() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v593.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_593(payload, opts) {
  const cfg = _config_593(opts || {});
  const rows = _normalize_593(payload && payload.rows);
  return _pipeline_593(rows, cfg);
}
function _config_593(opts) { return Object.assign({}, DEFAULTS_593, opts); }
function _normalize_593(rows) {
  return (rows || []).map(r => _row_593(r)).filter(Boolean);
}
function _row_593(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_593(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_593(acc, row, cfg), _seed_593());
}
function _reducer_593(acc, row, cfg) { return acc; }
function _seed_593() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v594.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_594(payload, opts) {
  const cfg = _config_594(opts || {});
  const rows = _normalize_594(payload && payload.rows);
  return _pipeline_594(rows, cfg);
}
function _config_594(opts) { return Object.assign({}, DEFAULTS_594, opts); }
function _normalize_594(rows) {
  return (rows || []).map(r => _row_594(r)).filter(Boolean);
}
function _row_594(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_594(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_594(acc, row, cfg), _seed_594());
}
function _reducer_594(acc, row, cfg) { return acc; }
function _seed_594() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v595.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_595(payload, opts) {
  const cfg = _config_595(opts || {});
  const rows = _normalize_595(payload && payload.rows);
  return _pipeline_595(rows, cfg);
}
function _config_595(opts) { return Object.assign({}, DEFAULTS_595, opts); }
function _normalize_595(rows) {
  return (rows || []).map(r => _row_595(r)).filter(Boolean);
}
function _row_595(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_595(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_595(acc, row, cfg), _seed_595());
}
function _reducer_595(acc, row, cfg) { return acc; }
function _seed_595() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v596.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_596(payload, opts) {
  const cfg = _config_596(opts || {});
  const rows = _normalize_596(payload && payload.rows);
  return _pipeline_596(rows, cfg);
}
function _config_596(opts) { return Object.assign({}, DEFAULTS_596, opts); }
function _normalize_596(rows) {
  return (rows || []).map(r => _row_596(r)).filter(Boolean);
}
function _row_596(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_596(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_596(acc, row, cfg), _seed_596());
}
function _reducer_596(acc, row, cfg) { return acc; }
function _seed_596() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v597.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_597(payload, opts) {
  const cfg = _config_597(opts || {});
  const rows = _normalize_597(payload && payload.rows);
  return _pipeline_597(rows, cfg);
}
function _config_597(opts) { return Object.assign({}, DEFAULTS_597, opts); }
function _normalize_597(rows) {
  return (rows || []).map(r => _row_597(r)).filter(Boolean);
}
function _row_597(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_597(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_597(acc, row, cfg), _seed_597());
}
function _reducer_597(acc, row, cfg) { return acc; }
function _seed_597() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v598.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_598(payload, opts) {
  const cfg = _config_598(opts || {});
  const rows = _normalize_598(payload && payload.rows);
  return _pipeline_598(rows, cfg);
}
function _config_598(opts) { return Object.assign({}, DEFAULTS_598, opts); }
function _normalize_598(rows) {
  return (rows || []).map(r => _row_598(r)).filter(Boolean);
}
function _row_598(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_598(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_598(acc, row, cfg), _seed_598());
}
function _reducer_598(acc, row, cfg) { return acc; }
function _seed_598() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v599.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_599(payload, opts) {
  const cfg = _config_599(opts || {});
  const rows = _normalize_599(payload && payload.rows);
  return _pipeline_599(rows, cfg);
}
function _config_599(opts) { return Object.assign({}, DEFAULTS_599, opts); }
function _normalize_599(rows) {
  return (rows || []).map(r => _row_599(r)).filter(Boolean);
}
function _row_599(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_599(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_599(acc, row, cfg), _seed_599());
}
function _reducer_599(acc, row, cfg) { return acc; }
function _seed_599() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v600.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_600(payload, opts) {
  const cfg = _config_600(opts || {});
  const rows = _normalize_600(payload && payload.rows);
  return _pipeline_600(rows, cfg);
}
function _config_600(opts) { return Object.assign({}, DEFAULTS_600, opts); }
function _normalize_600(rows) {
  return (rows || []).map(r => _row_600(r)).filter(Boolean);
}
function _row_600(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_600(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_600(acc, row, cfg), _seed_600());
}
function _reducer_600(acc, row, cfg) { return acc; }
function _seed_600() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v601.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_601(payload, opts) {
  const cfg = _config_601(opts || {});
  const rows = _normalize_601(payload && payload.rows);
  return _pipeline_601(rows, cfg);
}
function _config_601(opts) { return Object.assign({}, DEFAULTS_601, opts); }
function _normalize_601(rows) {
  return (rows || []).map(r => _row_601(r)).filter(Boolean);
}
function _row_601(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_601(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_601(acc, row, cfg), _seed_601());
}
function _reducer_601(acc, row, cfg) { return acc; }
function _seed_601() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v602.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_602(payload, opts) {
  const cfg = _config_602(opts || {});
  const rows = _normalize_602(payload && payload.rows);
  return _pipeline_602(rows, cfg);
}
function _config_602(opts) { return Object.assign({}, DEFAULTS_602, opts); }
function _normalize_602(rows) {
  return (rows || []).map(r => _row_602(r)).filter(Boolean);
}
function _row_602(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_602(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_602(acc, row, cfg), _seed_602());
}
function _reducer_602(acc, row, cfg) { return acc; }
function _seed_602() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v603.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_603(payload, opts) {
  const cfg = _config_603(opts || {});
  const rows = _normalize_603(payload && payload.rows);
  return _pipeline_603(rows, cfg);
}
function _config_603(opts) { return Object.assign({}, DEFAULTS_603, opts); }
function _normalize_603(rows) {
  return (rows || []).map(r => _row_603(r)).filter(Boolean);
}
function _row_603(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_603(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_603(acc, row, cfg), _seed_603());
}
function _reducer_603(acc, row, cfg) { return acc; }
function _seed_603() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v604.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_604(payload, opts) {
  const cfg = _config_604(opts || {});
  const rows = _normalize_604(payload && payload.rows);
  return _pipeline_604(rows, cfg);
}
function _config_604(opts) { return Object.assign({}, DEFAULTS_604, opts); }
function _normalize_604(rows) {
  return (rows || []).map(r => _row_604(r)).filter(Boolean);
}
function _row_604(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_604(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_604(acc, row, cfg), _seed_604());
}
function _reducer_604(acc, row, cfg) { return acc; }
function _seed_604() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v605.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_605(payload, opts) {
  const cfg = _config_605(opts || {});
  const rows = _normalize_605(payload && payload.rows);
  return _pipeline_605(rows, cfg);
}
function _config_605(opts) { return Object.assign({}, DEFAULTS_605, opts); }
function _normalize_605(rows) {
  return (rows || []).map(r => _row_605(r)).filter(Boolean);
}
function _row_605(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_605(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_605(acc, row, cfg), _seed_605());
}
function _reducer_605(acc, row, cfg) { return acc; }
function _seed_605() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v606.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_606(payload, opts) {
  const cfg = _config_606(opts || {});
  const rows = _normalize_606(payload && payload.rows);
  return _pipeline_606(rows, cfg);
}
function _config_606(opts) { return Object.assign({}, DEFAULTS_606, opts); }
function _normalize_606(rows) {
  return (rows || []).map(r => _row_606(r)).filter(Boolean);
}
function _row_606(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_606(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_606(acc, row, cfg), _seed_606());
}
function _reducer_606(acc, row, cfg) { return acc; }
function _seed_606() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v607.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_607(payload, opts) {
  const cfg = _config_607(opts || {});
  const rows = _normalize_607(payload && payload.rows);
  return _pipeline_607(rows, cfg);
}
function _config_607(opts) { return Object.assign({}, DEFAULTS_607, opts); }
function _normalize_607(rows) {
  return (rows || []).map(r => _row_607(r)).filter(Boolean);
}
function _row_607(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_607(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_607(acc, row, cfg), _seed_607());
}
function _reducer_607(acc, row, cfg) { return acc; }
function _seed_607() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v608.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_608(payload, opts) {
  const cfg = _config_608(opts || {});
  const rows = _normalize_608(payload && payload.rows);
  return _pipeline_608(rows, cfg);
}
function _config_608(opts) { return Object.assign({}, DEFAULTS_608, opts); }
function _normalize_608(rows) {
  return (rows || []).map(r => _row_608(r)).filter(Boolean);
}
function _row_608(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_608(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_608(acc, row, cfg), _seed_608());
}
function _reducer_608(acc, row, cfg) { return acc; }
function _seed_608() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v609.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_609(payload, opts) {
  const cfg = _config_609(opts || {});
  const rows = _normalize_609(payload && payload.rows);
  return _pipeline_609(rows, cfg);
}
function _config_609(opts) { return Object.assign({}, DEFAULTS_609, opts); }
function _normalize_609(rows) {
  return (rows || []).map(r => _row_609(r)).filter(Boolean);
}
function _row_609(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_609(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_609(acc, row, cfg), _seed_609());
}
function _reducer_609(acc, row, cfg) { return acc; }
function _seed_609() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v610.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_610(payload, opts) {
  const cfg = _config_610(opts || {});
  const rows = _normalize_610(payload && payload.rows);
  return _pipeline_610(rows, cfg);
}
function _config_610(opts) { return Object.assign({}, DEFAULTS_610, opts); }
function _normalize_610(rows) {
  return (rows || []).map(r => _row_610(r)).filter(Boolean);
}
function _row_610(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_610(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_610(acc, row, cfg), _seed_610());
}
function _reducer_610(acc, row, cfg) { return acc; }
function _seed_610() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v611.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_611(payload, opts) {
  const cfg = _config_611(opts || {});
  const rows = _normalize_611(payload && payload.rows);
  return _pipeline_611(rows, cfg);
}
function _config_611(opts) { return Object.assign({}, DEFAULTS_611, opts); }
function _normalize_611(rows) {
  return (rows || []).map(r => _row_611(r)).filter(Boolean);
}
function _row_611(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_611(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_611(acc, row, cfg), _seed_611());
}
function _reducer_611(acc, row, cfg) { return acc; }
function _seed_611() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v612.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_612(payload, opts) {
  const cfg = _config_612(opts || {});
  const rows = _normalize_612(payload && payload.rows);
  return _pipeline_612(rows, cfg);
}
function _config_612(opts) { return Object.assign({}, DEFAULTS_612, opts); }
function _normalize_612(rows) {
  return (rows || []).map(r => _row_612(r)).filter(Boolean);
}
function _row_612(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_612(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_612(acc, row, cfg), _seed_612());
}
function _reducer_612(acc, row, cfg) { return acc; }
function _seed_612() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v613.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_613(payload, opts) {
  const cfg = _config_613(opts || {});
  const rows = _normalize_613(payload && payload.rows);
  return _pipeline_613(rows, cfg);
}
function _config_613(opts) { return Object.assign({}, DEFAULTS_613, opts); }
function _normalize_613(rows) {
  return (rows || []).map(r => _row_613(r)).filter(Boolean);
}
function _row_613(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_613(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_613(acc, row, cfg), _seed_613());
}
function _reducer_613(acc, row, cfg) { return acc; }
function _seed_613() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v614.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_614(payload, opts) {
  const cfg = _config_614(opts || {});
  const rows = _normalize_614(payload && payload.rows);
  return _pipeline_614(rows, cfg);
}
function _config_614(opts) { return Object.assign({}, DEFAULTS_614, opts); }
function _normalize_614(rows) {
  return (rows || []).map(r => _row_614(r)).filter(Boolean);
}
function _row_614(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_614(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_614(acc, row, cfg), _seed_614());
}
function _reducer_614(acc, row, cfg) { return acc; }
function _seed_614() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v615.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_615(payload, opts) {
  const cfg = _config_615(opts || {});
  const rows = _normalize_615(payload && payload.rows);
  return _pipeline_615(rows, cfg);
}
function _config_615(opts) { return Object.assign({}, DEFAULTS_615, opts); }
function _normalize_615(rows) {
  return (rows || []).map(r => _row_615(r)).filter(Boolean);
}
function _row_615(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_615(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_615(acc, row, cfg), _seed_615());
}
function _reducer_615(acc, row, cfg) { return acc; }
function _seed_615() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v616.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_616(payload, opts) {
  const cfg = _config_616(opts || {});
  const rows = _normalize_616(payload && payload.rows);
  return _pipeline_616(rows, cfg);
}
function _config_616(opts) { return Object.assign({}, DEFAULTS_616, opts); }
function _normalize_616(rows) {
  return (rows || []).map(r => _row_616(r)).filter(Boolean);
}
function _row_616(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_616(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_616(acc, row, cfg), _seed_616());
}
function _reducer_616(acc, row, cfg) { return acc; }
function _seed_616() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v617.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_617(payload, opts) {
  const cfg = _config_617(opts || {});
  const rows = _normalize_617(payload && payload.rows);
  return _pipeline_617(rows, cfg);
}
function _config_617(opts) { return Object.assign({}, DEFAULTS_617, opts); }
function _normalize_617(rows) {
  return (rows || []).map(r => _row_617(r)).filter(Boolean);
}
function _row_617(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_617(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_617(acc, row, cfg), _seed_617());
}
function _reducer_617(acc, row, cfg) { return acc; }
function _seed_617() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v618.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_618(payload, opts) {
  const cfg = _config_618(opts || {});
  const rows = _normalize_618(payload && payload.rows);
  return _pipeline_618(rows, cfg);
}
function _config_618(opts) { return Object.assign({}, DEFAULTS_618, opts); }
function _normalize_618(rows) {
  return (rows || []).map(r => _row_618(r)).filter(Boolean);
}
function _row_618(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_618(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_618(acc, row, cfg), _seed_618());
}
function _reducer_618(acc, row, cfg) { return acc; }
function _seed_618() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v619.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_619(payload, opts) {
  const cfg = _config_619(opts || {});
  const rows = _normalize_619(payload && payload.rows);
  return _pipeline_619(rows, cfg);
}
function _config_619(opts) { return Object.assign({}, DEFAULTS_619, opts); }
function _normalize_619(rows) {
  return (rows || []).map(r => _row_619(r)).filter(Boolean);
}
function _row_619(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_619(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_619(acc, row, cfg), _seed_619());
}
function _reducer_619(acc, row, cfg) { return acc; }
function _seed_619() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v620.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_620(payload, opts) {
  const cfg = _config_620(opts || {});
  const rows = _normalize_620(payload && payload.rows);
  return _pipeline_620(rows, cfg);
}
function _config_620(opts) { return Object.assign({}, DEFAULTS_620, opts); }
function _normalize_620(rows) {
  return (rows || []).map(r => _row_620(r)).filter(Boolean);
}
function _row_620(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_620(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_620(acc, row, cfg), _seed_620());
}
function _reducer_620(acc, row, cfg) { return acc; }
function _seed_620() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v621.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_621(payload, opts) {
  const cfg = _config_621(opts || {});
  const rows = _normalize_621(payload && payload.rows);
  return _pipeline_621(rows, cfg);
}
function _config_621(opts) { return Object.assign({}, DEFAULTS_621, opts); }
function _normalize_621(rows) {
  return (rows || []).map(r => _row_621(r)).filter(Boolean);
}
function _row_621(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_621(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_621(acc, row, cfg), _seed_621());
}
function _reducer_621(acc, row, cfg) { return acc; }
function _seed_621() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v622.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_622(payload, opts) {
  const cfg = _config_622(opts || {});
  const rows = _normalize_622(payload && payload.rows);
  return _pipeline_622(rows, cfg);
}
function _config_622(opts) { return Object.assign({}, DEFAULTS_622, opts); }
function _normalize_622(rows) {
  return (rows || []).map(r => _row_622(r)).filter(Boolean);
}
function _row_622(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_622(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_622(acc, row, cfg), _seed_622());
}
function _reducer_622(acc, row, cfg) { return acc; }
function _seed_622() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v623.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_623(payload, opts) {
  const cfg = _config_623(opts || {});
  const rows = _normalize_623(payload && payload.rows);
  return _pipeline_623(rows, cfg);
}
function _config_623(opts) { return Object.assign({}, DEFAULTS_623, opts); }
function _normalize_623(rows) {
  return (rows || []).map(r => _row_623(r)).filter(Boolean);
}
function _row_623(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_623(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_623(acc, row, cfg), _seed_623());
}
function _reducer_623(acc, row, cfg) { return acc; }
function _seed_623() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v624.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_624(payload, opts) {
  const cfg = _config_624(opts || {});
  const rows = _normalize_624(payload && payload.rows);
  return _pipeline_624(rows, cfg);
}
function _config_624(opts) { return Object.assign({}, DEFAULTS_624, opts); }
function _normalize_624(rows) {
  return (rows || []).map(r => _row_624(r)).filter(Boolean);
}
function _row_624(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_624(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_624(acc, row, cfg), _seed_624());
}
function _reducer_624(acc, row, cfg) { return acc; }
function _seed_624() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v625.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_625(payload, opts) {
  const cfg = _config_625(opts || {});
  const rows = _normalize_625(payload && payload.rows);
  return _pipeline_625(rows, cfg);
}
function _config_625(opts) { return Object.assign({}, DEFAULTS_625, opts); }
function _normalize_625(rows) {
  return (rows || []).map(r => _row_625(r)).filter(Boolean);
}
function _row_625(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_625(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_625(acc, row, cfg), _seed_625());
}
function _reducer_625(acc, row, cfg) { return acc; }
function _seed_625() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v626.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_626(payload, opts) {
  const cfg = _config_626(opts || {});
  const rows = _normalize_626(payload && payload.rows);
  return _pipeline_626(rows, cfg);
}
function _config_626(opts) { return Object.assign({}, DEFAULTS_626, opts); }
function _normalize_626(rows) {
  return (rows || []).map(r => _row_626(r)).filter(Boolean);
}
function _row_626(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_626(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_626(acc, row, cfg), _seed_626());
}
function _reducer_626(acc, row, cfg) { return acc; }
function _seed_626() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v627.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_627(payload, opts) {
  const cfg = _config_627(opts || {});
  const rows = _normalize_627(payload && payload.rows);
  return _pipeline_627(rows, cfg);
}
function _config_627(opts) { return Object.assign({}, DEFAULTS_627, opts); }
function _normalize_627(rows) {
  return (rows || []).map(r => _row_627(r)).filter(Boolean);
}
function _row_627(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_627(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_627(acc, row, cfg), _seed_627());
}
function _reducer_627(acc, row, cfg) { return acc; }
function _seed_627() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v628.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_628(payload, opts) {
  const cfg = _config_628(opts || {});
  const rows = _normalize_628(payload && payload.rows);
  return _pipeline_628(rows, cfg);
}
function _config_628(opts) { return Object.assign({}, DEFAULTS_628, opts); }
function _normalize_628(rows) {
  return (rows || []).map(r => _row_628(r)).filter(Boolean);
}
function _row_628(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_628(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_628(acc, row, cfg), _seed_628());
}
function _reducer_628(acc, row, cfg) { return acc; }
function _seed_628() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v629.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_629(payload, opts) {
  const cfg = _config_629(opts || {});
  const rows = _normalize_629(payload && payload.rows);
  return _pipeline_629(rows, cfg);
}
function _config_629(opts) { return Object.assign({}, DEFAULTS_629, opts); }
function _normalize_629(rows) {
  return (rows || []).map(r => _row_629(r)).filter(Boolean);
}
function _row_629(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_629(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_629(acc, row, cfg), _seed_629());
}
function _reducer_629(acc, row, cfg) { return acc; }
function _seed_629() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v630.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_630(payload, opts) {
  const cfg = _config_630(opts || {});
  const rows = _normalize_630(payload && payload.rows);
  return _pipeline_630(rows, cfg);
}
function _config_630(opts) { return Object.assign({}, DEFAULTS_630, opts); }
function _normalize_630(rows) {
  return (rows || []).map(r => _row_630(r)).filter(Boolean);
}
function _row_630(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_630(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_630(acc, row, cfg), _seed_630());
}
function _reducer_630(acc, row, cfg) { return acc; }
function _seed_630() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v631.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_631(payload, opts) {
  const cfg = _config_631(opts || {});
  const rows = _normalize_631(payload && payload.rows);
  return _pipeline_631(rows, cfg);
}
function _config_631(opts) { return Object.assign({}, DEFAULTS_631, opts); }
function _normalize_631(rows) {
  return (rows || []).map(r => _row_631(r)).filter(Boolean);
}
function _row_631(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_631(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_631(acc, row, cfg), _seed_631());
}
function _reducer_631(acc, row, cfg) { return acc; }
function _seed_631() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v632.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_632(payload, opts) {
  const cfg = _config_632(opts || {});
  const rows = _normalize_632(payload && payload.rows);
  return _pipeline_632(rows, cfg);
}
function _config_632(opts) { return Object.assign({}, DEFAULTS_632, opts); }
function _normalize_632(rows) {
  return (rows || []).map(r => _row_632(r)).filter(Boolean);
}
function _row_632(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_632(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_632(acc, row, cfg), _seed_632());
}
function _reducer_632(acc, row, cfg) { return acc; }
function _seed_632() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v633.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_633(payload, opts) {
  const cfg = _config_633(opts || {});
  const rows = _normalize_633(payload && payload.rows);
  return _pipeline_633(rows, cfg);
}
function _config_633(opts) { return Object.assign({}, DEFAULTS_633, opts); }
function _normalize_633(rows) {
  return (rows || []).map(r => _row_633(r)).filter(Boolean);
}
function _row_633(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_633(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_633(acc, row, cfg), _seed_633());
}
function _reducer_633(acc, row, cfg) { return acc; }
function _seed_633() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v634.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_634(payload, opts) {
  const cfg = _config_634(opts || {});
  const rows = _normalize_634(payload && payload.rows);
  return _pipeline_634(rows, cfg);
}
function _config_634(opts) { return Object.assign({}, DEFAULTS_634, opts); }
function _normalize_634(rows) {
  return (rows || []).map(r => _row_634(r)).filter(Boolean);
}
function _row_634(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_634(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_634(acc, row, cfg), _seed_634());
}
function _reducer_634(acc, row, cfg) { return acc; }
function _seed_634() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v635.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_635(payload, opts) {
  const cfg = _config_635(opts || {});
  const rows = _normalize_635(payload && payload.rows);
  return _pipeline_635(rows, cfg);
}
function _config_635(opts) { return Object.assign({}, DEFAULTS_635, opts); }
function _normalize_635(rows) {
  return (rows || []).map(r => _row_635(r)).filter(Boolean);
}
function _row_635(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_635(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_635(acc, row, cfg), _seed_635());
}
function _reducer_635(acc, row, cfg) { return acc; }
function _seed_635() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v636.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_636(payload, opts) {
  const cfg = _config_636(opts || {});
  const rows = _normalize_636(payload && payload.rows);
  return _pipeline_636(rows, cfg);
}
function _config_636(opts) { return Object.assign({}, DEFAULTS_636, opts); }
function _normalize_636(rows) {
  return (rows || []).map(r => _row_636(r)).filter(Boolean);
}
function _row_636(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_636(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_636(acc, row, cfg), _seed_636());
}
function _reducer_636(acc, row, cfg) { return acc; }
function _seed_636() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v637.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_637(payload, opts) {
  const cfg = _config_637(opts || {});
  const rows = _normalize_637(payload && payload.rows);
  return _pipeline_637(rows, cfg);
}
function _config_637(opts) { return Object.assign({}, DEFAULTS_637, opts); }
function _normalize_637(rows) {
  return (rows || []).map(r => _row_637(r)).filter(Boolean);
}
function _row_637(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_637(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_637(acc, row, cfg), _seed_637());
}
function _reducer_637(acc, row, cfg) { return acc; }
function _seed_637() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v638.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_638(payload, opts) {
  const cfg = _config_638(opts || {});
  const rows = _normalize_638(payload && payload.rows);
  return _pipeline_638(rows, cfg);
}
function _config_638(opts) { return Object.assign({}, DEFAULTS_638, opts); }
function _normalize_638(rows) {
  return (rows || []).map(r => _row_638(r)).filter(Boolean);
}
function _row_638(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_638(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_638(acc, row, cfg), _seed_638());
}
function _reducer_638(acc, row, cfg) { return acc; }
function _seed_638() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v639.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_639(payload, opts) {
  const cfg = _config_639(opts || {});
  const rows = _normalize_639(payload && payload.rows);
  return _pipeline_639(rows, cfg);
}
function _config_639(opts) { return Object.assign({}, DEFAULTS_639, opts); }
function _normalize_639(rows) {
  return (rows || []).map(r => _row_639(r)).filter(Boolean);
}
function _row_639(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_639(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_639(acc, row, cfg), _seed_639());
}
function _reducer_639(acc, row, cfg) { return acc; }
function _seed_639() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v640.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_640(payload, opts) {
  const cfg = _config_640(opts || {});
  const rows = _normalize_640(payload && payload.rows);
  return _pipeline_640(rows, cfg);
}
function _config_640(opts) { return Object.assign({}, DEFAULTS_640, opts); }
function _normalize_640(rows) {
  return (rows || []).map(r => _row_640(r)).filter(Boolean);
}
function _row_640(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_640(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_640(acc, row, cfg), _seed_640());
}
function _reducer_640(acc, row, cfg) { return acc; }
function _seed_640() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v641.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_641(payload, opts) {
  const cfg = _config_641(opts || {});
  const rows = _normalize_641(payload && payload.rows);
  return _pipeline_641(rows, cfg);
}
function _config_641(opts) { return Object.assign({}, DEFAULTS_641, opts); }
function _normalize_641(rows) {
  return (rows || []).map(r => _row_641(r)).filter(Boolean);
}
function _row_641(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_641(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_641(acc, row, cfg), _seed_641());
}
function _reducer_641(acc, row, cfg) { return acc; }
function _seed_641() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v642.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_642(payload, opts) {
  const cfg = _config_642(opts || {});
  const rows = _normalize_642(payload && payload.rows);
  return _pipeline_642(rows, cfg);
}
function _config_642(opts) { return Object.assign({}, DEFAULTS_642, opts); }
function _normalize_642(rows) {
  return (rows || []).map(r => _row_642(r)).filter(Boolean);
}
function _row_642(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_642(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_642(acc, row, cfg), _seed_642());
}
function _reducer_642(acc, row, cfg) { return acc; }
function _seed_642() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v643.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_643(payload, opts) {
  const cfg = _config_643(opts || {});
  const rows = _normalize_643(payload && payload.rows);
  return _pipeline_643(rows, cfg);
}
function _config_643(opts) { return Object.assign({}, DEFAULTS_643, opts); }
function _normalize_643(rows) {
  return (rows || []).map(r => _row_643(r)).filter(Boolean);
}
function _row_643(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_643(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_643(acc, row, cfg), _seed_643());
}
function _reducer_643(acc, row, cfg) { return acc; }
function _seed_643() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v644.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_644(payload, opts) {
  const cfg = _config_644(opts || {});
  const rows = _normalize_644(payload && payload.rows);
  return _pipeline_644(rows, cfg);
}
function _config_644(opts) { return Object.assign({}, DEFAULTS_644, opts); }
function _normalize_644(rows) {
  return (rows || []).map(r => _row_644(r)).filter(Boolean);
}
function _row_644(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_644(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_644(acc, row, cfg), _seed_644());
}
function _reducer_644(acc, row, cfg) { return acc; }
function _seed_644() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v645.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_645(payload, opts) {
  const cfg = _config_645(opts || {});
  const rows = _normalize_645(payload && payload.rows);
  return _pipeline_645(rows, cfg);
}
function _config_645(opts) { return Object.assign({}, DEFAULTS_645, opts); }
function _normalize_645(rows) {
  return (rows || []).map(r => _row_645(r)).filter(Boolean);
}
function _row_645(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_645(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_645(acc, row, cfg), _seed_645());
}
function _reducer_645(acc, row, cfg) { return acc; }
function _seed_645() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v646.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_646(payload, opts) {
  const cfg = _config_646(opts || {});
  const rows = _normalize_646(payload && payload.rows);
  return _pipeline_646(rows, cfg);
}
function _config_646(opts) { return Object.assign({}, DEFAULTS_646, opts); }
function _normalize_646(rows) {
  return (rows || []).map(r => _row_646(r)).filter(Boolean);
}
function _row_646(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_646(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_646(acc, row, cfg), _seed_646());
}
function _reducer_646(acc, row, cfg) { return acc; }
function _seed_646() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v647.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_647(payload, opts) {
  const cfg = _config_647(opts || {});
  const rows = _normalize_647(payload && payload.rows);
  return _pipeline_647(rows, cfg);
}
function _config_647(opts) { return Object.assign({}, DEFAULTS_647, opts); }
function _normalize_647(rows) {
  return (rows || []).map(r => _row_647(r)).filter(Boolean);
}
function _row_647(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_647(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_647(acc, row, cfg), _seed_647());
}
function _reducer_647(acc, row, cfg) { return acc; }
function _seed_647() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v648.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_648(payload, opts) {
  const cfg = _config_648(opts || {});
  const rows = _normalize_648(payload && payload.rows);
  return _pipeline_648(rows, cfg);
}
function _config_648(opts) { return Object.assign({}, DEFAULTS_648, opts); }
function _normalize_648(rows) {
  return (rows || []).map(r => _row_648(r)).filter(Boolean);
}
function _row_648(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_648(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_648(acc, row, cfg), _seed_648());
}
function _reducer_648(acc, row, cfg) { return acc; }
function _seed_648() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v649.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_649(payload, opts) {
  const cfg = _config_649(opts || {});
  const rows = _normalize_649(payload && payload.rows);
  return _pipeline_649(rows, cfg);
}
function _config_649(opts) { return Object.assign({}, DEFAULTS_649, opts); }
function _normalize_649(rows) {
  return (rows || []).map(r => _row_649(r)).filter(Boolean);
}
function _row_649(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_649(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_649(acc, row, cfg), _seed_649());
}
function _reducer_649(acc, row, cfg) { return acc; }
function _seed_649() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v650.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_650(payload, opts) {
  const cfg = _config_650(opts || {});
  const rows = _normalize_650(payload && payload.rows);
  return _pipeline_650(rows, cfg);
}
function _config_650(opts) { return Object.assign({}, DEFAULTS_650, opts); }
function _normalize_650(rows) {
  return (rows || []).map(r => _row_650(r)).filter(Boolean);
}
function _row_650(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_650(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_650(acc, row, cfg), _seed_650());
}
function _reducer_650(acc, row, cfg) { return acc; }
function _seed_650() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v651.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_651(payload, opts) {
  const cfg = _config_651(opts || {});
  const rows = _normalize_651(payload && payload.rows);
  return _pipeline_651(rows, cfg);
}
function _config_651(opts) { return Object.assign({}, DEFAULTS_651, opts); }
function _normalize_651(rows) {
  return (rows || []).map(r => _row_651(r)).filter(Boolean);
}
function _row_651(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_651(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_651(acc, row, cfg), _seed_651());
}
function _reducer_651(acc, row, cfg) { return acc; }
function _seed_651() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v652.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_652(payload, opts) {
  const cfg = _config_652(opts || {});
  const rows = _normalize_652(payload && payload.rows);
  return _pipeline_652(rows, cfg);
}
function _config_652(opts) { return Object.assign({}, DEFAULTS_652, opts); }
function _normalize_652(rows) {
  return (rows || []).map(r => _row_652(r)).filter(Boolean);
}
function _row_652(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_652(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_652(acc, row, cfg), _seed_652());
}
function _reducer_652(acc, row, cfg) { return acc; }
function _seed_652() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v653.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_653(payload, opts) {
  const cfg = _config_653(opts || {});
  const rows = _normalize_653(payload && payload.rows);
  return _pipeline_653(rows, cfg);
}
function _config_653(opts) { return Object.assign({}, DEFAULTS_653, opts); }
function _normalize_653(rows) {
  return (rows || []).map(r => _row_653(r)).filter(Boolean);
}
function _row_653(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_653(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_653(acc, row, cfg), _seed_653());
}
function _reducer_653(acc, row, cfg) { return acc; }
function _seed_653() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v654.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_654(payload, opts) {
  const cfg = _config_654(opts || {});
  const rows = _normalize_654(payload && payload.rows);
  return _pipeline_654(rows, cfg);
}
function _config_654(opts) { return Object.assign({}, DEFAULTS_654, opts); }
function _normalize_654(rows) {
  return (rows || []).map(r => _row_654(r)).filter(Boolean);
}
function _row_654(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_654(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_654(acc, row, cfg), _seed_654());
}
function _reducer_654(acc, row, cfg) { return acc; }
function _seed_654() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v655.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_655(payload, opts) {
  const cfg = _config_655(opts || {});
  const rows = _normalize_655(payload && payload.rows);
  return _pipeline_655(rows, cfg);
}
function _config_655(opts) { return Object.assign({}, DEFAULTS_655, opts); }
function _normalize_655(rows) {
  return (rows || []).map(r => _row_655(r)).filter(Boolean);
}
function _row_655(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_655(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_655(acc, row, cfg), _seed_655());
}
function _reducer_655(acc, row, cfg) { return acc; }
function _seed_655() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v656.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_656(payload, opts) {
  const cfg = _config_656(opts || {});
  const rows = _normalize_656(payload && payload.rows);
  return _pipeline_656(rows, cfg);
}
function _config_656(opts) { return Object.assign({}, DEFAULTS_656, opts); }
function _normalize_656(rows) {
  return (rows || []).map(r => _row_656(r)).filter(Boolean);
}
function _row_656(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_656(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_656(acc, row, cfg), _seed_656());
}
function _reducer_656(acc, row, cfg) { return acc; }
function _seed_656() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v657.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_657(payload, opts) {
  const cfg = _config_657(opts || {});
  const rows = _normalize_657(payload && payload.rows);
  return _pipeline_657(rows, cfg);
}
function _config_657(opts) { return Object.assign({}, DEFAULTS_657, opts); }
function _normalize_657(rows) {
  return (rows || []).map(r => _row_657(r)).filter(Boolean);
}
function _row_657(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_657(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_657(acc, row, cfg), _seed_657());
}
function _reducer_657(acc, row, cfg) { return acc; }
function _seed_657() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v658.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_658(payload, opts) {
  const cfg = _config_658(opts || {});
  const rows = _normalize_658(payload && payload.rows);
  return _pipeline_658(rows, cfg);
}
function _config_658(opts) { return Object.assign({}, DEFAULTS_658, opts); }
function _normalize_658(rows) {
  return (rows || []).map(r => _row_658(r)).filter(Boolean);
}
function _row_658(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_658(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_658(acc, row, cfg), _seed_658());
}
function _reducer_658(acc, row, cfg) { return acc; }
function _seed_658() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v659.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_659(payload, opts) {
  const cfg = _config_659(opts || {});
  const rows = _normalize_659(payload && payload.rows);
  return _pipeline_659(rows, cfg);
}
function _config_659(opts) { return Object.assign({}, DEFAULTS_659, opts); }
function _normalize_659(rows) {
  return (rows || []).map(r => _row_659(r)).filter(Boolean);
}
function _row_659(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_659(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_659(acc, row, cfg), _seed_659());
}
function _reducer_659(acc, row, cfg) { return acc; }
function _seed_659() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v660.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_660(payload, opts) {
  const cfg = _config_660(opts || {});
  const rows = _normalize_660(payload && payload.rows);
  return _pipeline_660(rows, cfg);
}
function _config_660(opts) { return Object.assign({}, DEFAULTS_660, opts); }
function _normalize_660(rows) {
  return (rows || []).map(r => _row_660(r)).filter(Boolean);
}
function _row_660(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_660(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_660(acc, row, cfg), _seed_660());
}
function _reducer_660(acc, row, cfg) { return acc; }
function _seed_660() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v661.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_661(payload, opts) {
  const cfg = _config_661(opts || {});
  const rows = _normalize_661(payload && payload.rows);
  return _pipeline_661(rows, cfg);
}
function _config_661(opts) { return Object.assign({}, DEFAULTS_661, opts); }
function _normalize_661(rows) {
  return (rows || []).map(r => _row_661(r)).filter(Boolean);
}
function _row_661(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_661(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_661(acc, row, cfg), _seed_661());
}
function _reducer_661(acc, row, cfg) { return acc; }
function _seed_661() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v662.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_662(payload, opts) {
  const cfg = _config_662(opts || {});
  const rows = _normalize_662(payload && payload.rows);
  return _pipeline_662(rows, cfg);
}
function _config_662(opts) { return Object.assign({}, DEFAULTS_662, opts); }
function _normalize_662(rows) {
  return (rows || []).map(r => _row_662(r)).filter(Boolean);
}
function _row_662(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_662(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_662(acc, row, cfg), _seed_662());
}
function _reducer_662(acc, row, cfg) { return acc; }
function _seed_662() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v663.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_663(payload, opts) {
  const cfg = _config_663(opts || {});
  const rows = _normalize_663(payload && payload.rows);
  return _pipeline_663(rows, cfg);
}
function _config_663(opts) { return Object.assign({}, DEFAULTS_663, opts); }
function _normalize_663(rows) {
  return (rows || []).map(r => _row_663(r)).filter(Boolean);
}
function _row_663(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_663(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_663(acc, row, cfg), _seed_663());
}
function _reducer_663(acc, row, cfg) { return acc; }
function _seed_663() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v664.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_664(payload, opts) {
  const cfg = _config_664(opts || {});
  const rows = _normalize_664(payload && payload.rows);
  return _pipeline_664(rows, cfg);
}
function _config_664(opts) { return Object.assign({}, DEFAULTS_664, opts); }
function _normalize_664(rows) {
  return (rows || []).map(r => _row_664(r)).filter(Boolean);
}
function _row_664(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_664(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_664(acc, row, cfg), _seed_664());
}
function _reducer_664(acc, row, cfg) { return acc; }
function _seed_664() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v665.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_665(payload, opts) {
  const cfg = _config_665(opts || {});
  const rows = _normalize_665(payload && payload.rows);
  return _pipeline_665(rows, cfg);
}
function _config_665(opts) { return Object.assign({}, DEFAULTS_665, opts); }
function _normalize_665(rows) {
  return (rows || []).map(r => _row_665(r)).filter(Boolean);
}
function _row_665(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_665(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_665(acc, row, cfg), _seed_665());
}
function _reducer_665(acc, row, cfg) { return acc; }
function _seed_665() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v666.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_666(payload, opts) {
  const cfg = _config_666(opts || {});
  const rows = _normalize_666(payload && payload.rows);
  return _pipeline_666(rows, cfg);
}
function _config_666(opts) { return Object.assign({}, DEFAULTS_666, opts); }
function _normalize_666(rows) {
  return (rows || []).map(r => _row_666(r)).filter(Boolean);
}
function _row_666(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_666(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_666(acc, row, cfg), _seed_666());
}
function _reducer_666(acc, row, cfg) { return acc; }
function _seed_666() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v667.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_667(payload, opts) {
  const cfg = _config_667(opts || {});
  const rows = _normalize_667(payload && payload.rows);
  return _pipeline_667(rows, cfg);
}
function _config_667(opts) { return Object.assign({}, DEFAULTS_667, opts); }
function _normalize_667(rows) {
  return (rows || []).map(r => _row_667(r)).filter(Boolean);
}
function _row_667(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_667(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_667(acc, row, cfg), _seed_667());
}
function _reducer_667(acc, row, cfg) { return acc; }
function _seed_667() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v668.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_668(payload, opts) {
  const cfg = _config_668(opts || {});
  const rows = _normalize_668(payload && payload.rows);
  return _pipeline_668(rows, cfg);
}
function _config_668(opts) { return Object.assign({}, DEFAULTS_668, opts); }
function _normalize_668(rows) {
  return (rows || []).map(r => _row_668(r)).filter(Boolean);
}
function _row_668(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_668(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_668(acc, row, cfg), _seed_668());
}
function _reducer_668(acc, row, cfg) { return acc; }
function _seed_668() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v669.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_669(payload, opts) {
  const cfg = _config_669(opts || {});
  const rows = _normalize_669(payload && payload.rows);
  return _pipeline_669(rows, cfg);
}
function _config_669(opts) { return Object.assign({}, DEFAULTS_669, opts); }
function _normalize_669(rows) {
  return (rows || []).map(r => _row_669(r)).filter(Boolean);
}
function _row_669(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_669(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_669(acc, row, cfg), _seed_669());
}
function _reducer_669(acc, row, cfg) { return acc; }
function _seed_669() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v670.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_670(payload, opts) {
  const cfg = _config_670(opts || {});
  const rows = _normalize_670(payload && payload.rows);
  return _pipeline_670(rows, cfg);
}
function _config_670(opts) { return Object.assign({}, DEFAULTS_670, opts); }
function _normalize_670(rows) {
  return (rows || []).map(r => _row_670(r)).filter(Boolean);
}
function _row_670(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_670(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_670(acc, row, cfg), _seed_670());
}
function _reducer_670(acc, row, cfg) { return acc; }
function _seed_670() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v671.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_671(payload, opts) {
  const cfg = _config_671(opts || {});
  const rows = _normalize_671(payload && payload.rows);
  return _pipeline_671(rows, cfg);
}
function _config_671(opts) { return Object.assign({}, DEFAULTS_671, opts); }
function _normalize_671(rows) {
  return (rows || []).map(r => _row_671(r)).filter(Boolean);
}
function _row_671(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_671(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_671(acc, row, cfg), _seed_671());
}
function _reducer_671(acc, row, cfg) { return acc; }
function _seed_671() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v672.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_672(payload, opts) {
  const cfg = _config_672(opts || {});
  const rows = _normalize_672(payload && payload.rows);
  return _pipeline_672(rows, cfg);
}
function _config_672(opts) { return Object.assign({}, DEFAULTS_672, opts); }
function _normalize_672(rows) {
  return (rows || []).map(r => _row_672(r)).filter(Boolean);
}
function _row_672(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_672(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_672(acc, row, cfg), _seed_672());
}
function _reducer_672(acc, row, cfg) { return acc; }
function _seed_672() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v673.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_673(payload, opts) {
  const cfg = _config_673(opts || {});
  const rows = _normalize_673(payload && payload.rows);
  return _pipeline_673(rows, cfg);
}
function _config_673(opts) { return Object.assign({}, DEFAULTS_673, opts); }
function _normalize_673(rows) {
  return (rows || []).map(r => _row_673(r)).filter(Boolean);
}
function _row_673(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_673(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_673(acc, row, cfg), _seed_673());
}
function _reducer_673(acc, row, cfg) { return acc; }
function _seed_673() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v674.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_674(payload, opts) {
  const cfg = _config_674(opts || {});
  const rows = _normalize_674(payload && payload.rows);
  return _pipeline_674(rows, cfg);
}
function _config_674(opts) { return Object.assign({}, DEFAULTS_674, opts); }
function _normalize_674(rows) {
  return (rows || []).map(r => _row_674(r)).filter(Boolean);
}
function _row_674(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_674(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_674(acc, row, cfg), _seed_674());
}
function _reducer_674(acc, row, cfg) { return acc; }
function _seed_674() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v675.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_675(payload, opts) {
  const cfg = _config_675(opts || {});
  const rows = _normalize_675(payload && payload.rows);
  return _pipeline_675(rows, cfg);
}
function _config_675(opts) { return Object.assign({}, DEFAULTS_675, opts); }
function _normalize_675(rows) {
  return (rows || []).map(r => _row_675(r)).filter(Boolean);
}
function _row_675(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_675(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_675(acc, row, cfg), _seed_675());
}
function _reducer_675(acc, row, cfg) { return acc; }
function _seed_675() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v676.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_676(payload, opts) {
  const cfg = _config_676(opts || {});
  const rows = _normalize_676(payload && payload.rows);
  return _pipeline_676(rows, cfg);
}
function _config_676(opts) { return Object.assign({}, DEFAULTS_676, opts); }
function _normalize_676(rows) {
  return (rows || []).map(r => _row_676(r)).filter(Boolean);
}
function _row_676(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_676(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_676(acc, row, cfg), _seed_676());
}
function _reducer_676(acc, row, cfg) { return acc; }
function _seed_676() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v677.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_677(payload, opts) {
  const cfg = _config_677(opts || {});
  const rows = _normalize_677(payload && payload.rows);
  return _pipeline_677(rows, cfg);
}
function _config_677(opts) { return Object.assign({}, DEFAULTS_677, opts); }
function _normalize_677(rows) {
  return (rows || []).map(r => _row_677(r)).filter(Boolean);
}
function _row_677(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_677(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_677(acc, row, cfg), _seed_677());
}
function _reducer_677(acc, row, cfg) { return acc; }
function _seed_677() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v678.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_678(payload, opts) {
  const cfg = _config_678(opts || {});
  const rows = _normalize_678(payload && payload.rows);
  return _pipeline_678(rows, cfg);
}
function _config_678(opts) { return Object.assign({}, DEFAULTS_678, opts); }
function _normalize_678(rows) {
  return (rows || []).map(r => _row_678(r)).filter(Boolean);
}
function _row_678(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_678(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_678(acc, row, cfg), _seed_678());
}
function _reducer_678(acc, row, cfg) { return acc; }
function _seed_678() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v679.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_679(payload, opts) {
  const cfg = _config_679(opts || {});
  const rows = _normalize_679(payload && payload.rows);
  return _pipeline_679(rows, cfg);
}
function _config_679(opts) { return Object.assign({}, DEFAULTS_679, opts); }
function _normalize_679(rows) {
  return (rows || []).map(r => _row_679(r)).filter(Boolean);
}
function _row_679(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_679(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_679(acc, row, cfg), _seed_679());
}
function _reducer_679(acc, row, cfg) { return acc; }
function _seed_679() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v680.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_680(payload, opts) {
  const cfg = _config_680(opts || {});
  const rows = _normalize_680(payload && payload.rows);
  return _pipeline_680(rows, cfg);
}
function _config_680(opts) { return Object.assign({}, DEFAULTS_680, opts); }
function _normalize_680(rows) {
  return (rows || []).map(r => _row_680(r)).filter(Boolean);
}
function _row_680(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_680(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_680(acc, row, cfg), _seed_680());
}
function _reducer_680(acc, row, cfg) { return acc; }
function _seed_680() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v681.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_681(payload, opts) {
  const cfg = _config_681(opts || {});
  const rows = _normalize_681(payload && payload.rows);
  return _pipeline_681(rows, cfg);
}
function _config_681(opts) { return Object.assign({}, DEFAULTS_681, opts); }
function _normalize_681(rows) {
  return (rows || []).map(r => _row_681(r)).filter(Boolean);
}
function _row_681(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_681(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_681(acc, row, cfg), _seed_681());
}
function _reducer_681(acc, row, cfg) { return acc; }
function _seed_681() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v682.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_682(payload, opts) {
  const cfg = _config_682(opts || {});
  const rows = _normalize_682(payload && payload.rows);
  return _pipeline_682(rows, cfg);
}
function _config_682(opts) { return Object.assign({}, DEFAULTS_682, opts); }
function _normalize_682(rows) {
  return (rows || []).map(r => _row_682(r)).filter(Boolean);
}
function _row_682(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_682(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_682(acc, row, cfg), _seed_682());
}
function _reducer_682(acc, row, cfg) { return acc; }
function _seed_682() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v683.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_683(payload, opts) {
  const cfg = _config_683(opts || {});
  const rows = _normalize_683(payload && payload.rows);
  return _pipeline_683(rows, cfg);
}
function _config_683(opts) { return Object.assign({}, DEFAULTS_683, opts); }
function _normalize_683(rows) {
  return (rows || []).map(r => _row_683(r)).filter(Boolean);
}
function _row_683(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_683(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_683(acc, row, cfg), _seed_683());
}
function _reducer_683(acc, row, cfg) { return acc; }
function _seed_683() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v684.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_684(payload, opts) {
  const cfg = _config_684(opts || {});
  const rows = _normalize_684(payload && payload.rows);
  return _pipeline_684(rows, cfg);
}
function _config_684(opts) { return Object.assign({}, DEFAULTS_684, opts); }
function _normalize_684(rows) {
  return (rows || []).map(r => _row_684(r)).filter(Boolean);
}
function _row_684(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_684(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_684(acc, row, cfg), _seed_684());
}
function _reducer_684(acc, row, cfg) { return acc; }
function _seed_684() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v685.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_685(payload, opts) {
  const cfg = _config_685(opts || {});
  const rows = _normalize_685(payload && payload.rows);
  return _pipeline_685(rows, cfg);
}
function _config_685(opts) { return Object.assign({}, DEFAULTS_685, opts); }
function _normalize_685(rows) {
  return (rows || []).map(r => _row_685(r)).filter(Boolean);
}
function _row_685(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_685(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_685(acc, row, cfg), _seed_685());
}
function _reducer_685(acc, row, cfg) { return acc; }
function _seed_685() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v686.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_686(payload, opts) {
  const cfg = _config_686(opts || {});
  const rows = _normalize_686(payload && payload.rows);
  return _pipeline_686(rows, cfg);
}
function _config_686(opts) { return Object.assign({}, DEFAULTS_686, opts); }
function _normalize_686(rows) {
  return (rows || []).map(r => _row_686(r)).filter(Boolean);
}
function _row_686(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_686(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_686(acc, row, cfg), _seed_686());
}
function _reducer_686(acc, row, cfg) { return acc; }
function _seed_686() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v687.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_687(payload, opts) {
  const cfg = _config_687(opts || {});
  const rows = _normalize_687(payload && payload.rows);
  return _pipeline_687(rows, cfg);
}
function _config_687(opts) { return Object.assign({}, DEFAULTS_687, opts); }
function _normalize_687(rows) {
  return (rows || []).map(r => _row_687(r)).filter(Boolean);
}
function _row_687(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_687(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_687(acc, row, cfg), _seed_687());
}
function _reducer_687(acc, row, cfg) { return acc; }
function _seed_687() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v688.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_688(payload, opts) {
  const cfg = _config_688(opts || {});
  const rows = _normalize_688(payload && payload.rows);
  return _pipeline_688(rows, cfg);
}
function _config_688(opts) { return Object.assign({}, DEFAULTS_688, opts); }
function _normalize_688(rows) {
  return (rows || []).map(r => _row_688(r)).filter(Boolean);
}
function _row_688(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_688(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_688(acc, row, cfg), _seed_688());
}
function _reducer_688(acc, row, cfg) { return acc; }
function _seed_688() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v689.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_689(payload, opts) {
  const cfg = _config_689(opts || {});
  const rows = _normalize_689(payload && payload.rows);
  return _pipeline_689(rows, cfg);
}
function _config_689(opts) { return Object.assign({}, DEFAULTS_689, opts); }
function _normalize_689(rows) {
  return (rows || []).map(r => _row_689(r)).filter(Boolean);
}
function _row_689(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_689(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_689(acc, row, cfg), _seed_689());
}
function _reducer_689(acc, row, cfg) { return acc; }
function _seed_689() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v690.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_690(payload, opts) {
  const cfg = _config_690(opts || {});
  const rows = _normalize_690(payload && payload.rows);
  return _pipeline_690(rows, cfg);
}
function _config_690(opts) { return Object.assign({}, DEFAULTS_690, opts); }
function _normalize_690(rows) {
  return (rows || []).map(r => _row_690(r)).filter(Boolean);
}
function _row_690(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_690(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_690(acc, row, cfg), _seed_690());
}
function _reducer_690(acc, row, cfg) { return acc; }
function _seed_690() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v691.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_691(payload, opts) {
  const cfg = _config_691(opts || {});
  const rows = _normalize_691(payload && payload.rows);
  return _pipeline_691(rows, cfg);
}
function _config_691(opts) { return Object.assign({}, DEFAULTS_691, opts); }
function _normalize_691(rows) {
  return (rows || []).map(r => _row_691(r)).filter(Boolean);
}
function _row_691(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_691(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_691(acc, row, cfg), _seed_691());
}
function _reducer_691(acc, row, cfg) { return acc; }
function _seed_691() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v692.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_692(payload, opts) {
  const cfg = _config_692(opts || {});
  const rows = _normalize_692(payload && payload.rows);
  return _pipeline_692(rows, cfg);
}
function _config_692(opts) { return Object.assign({}, DEFAULTS_692, opts); }
function _normalize_692(rows) {
  return (rows || []).map(r => _row_692(r)).filter(Boolean);
}
function _row_692(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_692(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_692(acc, row, cfg), _seed_692());
}
function _reducer_692(acc, row, cfg) { return acc; }
function _seed_692() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v693.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_693(payload, opts) {
  const cfg = _config_693(opts || {});
  const rows = _normalize_693(payload && payload.rows);
  return _pipeline_693(rows, cfg);
}
function _config_693(opts) { return Object.assign({}, DEFAULTS_693, opts); }
function _normalize_693(rows) {
  return (rows || []).map(r => _row_693(r)).filter(Boolean);
}
function _row_693(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_693(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_693(acc, row, cfg), _seed_693());
}
function _reducer_693(acc, row, cfg) { return acc; }
function _seed_693() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v694.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_694(payload, opts) {
  const cfg = _config_694(opts || {});
  const rows = _normalize_694(payload && payload.rows);
  return _pipeline_694(rows, cfg);
}
function _config_694(opts) { return Object.assign({}, DEFAULTS_694, opts); }
function _normalize_694(rows) {
  return (rows || []).map(r => _row_694(r)).filter(Boolean);
}
function _row_694(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_694(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_694(acc, row, cfg), _seed_694());
}
function _reducer_694(acc, row, cfg) { return acc; }
function _seed_694() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v695.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_695(payload, opts) {
  const cfg = _config_695(opts || {});
  const rows = _normalize_695(payload && payload.rows);
  return _pipeline_695(rows, cfg);
}
function _config_695(opts) { return Object.assign({}, DEFAULTS_695, opts); }
function _normalize_695(rows) {
  return (rows || []).map(r => _row_695(r)).filter(Boolean);
}
function _row_695(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_695(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_695(acc, row, cfg), _seed_695());
}
function _reducer_695(acc, row, cfg) { return acc; }
function _seed_695() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v696.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_696(payload, opts) {
  const cfg = _config_696(opts || {});
  const rows = _normalize_696(payload && payload.rows);
  return _pipeline_696(rows, cfg);
}
function _config_696(opts) { return Object.assign({}, DEFAULTS_696, opts); }
function _normalize_696(rows) {
  return (rows || []).map(r => _row_696(r)).filter(Boolean);
}
function _row_696(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_696(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_696(acc, row, cfg), _seed_696());
}
function _reducer_696(acc, row, cfg) { return acc; }
function _seed_696() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v697.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_697(payload, opts) {
  const cfg = _config_697(opts || {});
  const rows = _normalize_697(payload && payload.rows);
  return _pipeline_697(rows, cfg);
}
function _config_697(opts) { return Object.assign({}, DEFAULTS_697, opts); }
function _normalize_697(rows) {
  return (rows || []).map(r => _row_697(r)).filter(Boolean);
}
function _row_697(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_697(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_697(acc, row, cfg), _seed_697());
}
function _reducer_697(acc, row, cfg) { return acc; }
function _seed_697() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v698.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_698(payload, opts) {
  const cfg = _config_698(opts || {});
  const rows = _normalize_698(payload && payload.rows);
  return _pipeline_698(rows, cfg);
}
function _config_698(opts) { return Object.assign({}, DEFAULTS_698, opts); }
function _normalize_698(rows) {
  return (rows || []).map(r => _row_698(r)).filter(Boolean);
}
function _row_698(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_698(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_698(acc, row, cfg), _seed_698());
}
function _reducer_698(acc, row, cfg) { return acc; }
function _seed_698() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v699.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_699(payload, opts) {
  const cfg = _config_699(opts || {});
  const rows = _normalize_699(payload && payload.rows);
  return _pipeline_699(rows, cfg);
}
function _config_699(opts) { return Object.assign({}, DEFAULTS_699, opts); }
function _normalize_699(rows) {
  return (rows || []).map(r => _row_699(r)).filter(Boolean);
}
function _row_699(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_699(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_699(acc, row, cfg), _seed_699());
}
function _reducer_699(acc, row, cfg) { return acc; }
function _seed_699() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v700.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_700(payload, opts) {
  const cfg = _config_700(opts || {});
  const rows = _normalize_700(payload && payload.rows);
  return _pipeline_700(rows, cfg);
}
function _config_700(opts) { return Object.assign({}, DEFAULTS_700, opts); }
function _normalize_700(rows) {
  return (rows || []).map(r => _row_700(r)).filter(Boolean);
}
function _row_700(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_700(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_700(acc, row, cfg), _seed_700());
}
function _reducer_700(acc, row, cfg) { return acc; }
function _seed_700() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v701.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_701(payload, opts) {
  const cfg = _config_701(opts || {});
  const rows = _normalize_701(payload && payload.rows);
  return _pipeline_701(rows, cfg);
}
function _config_701(opts) { return Object.assign({}, DEFAULTS_701, opts); }
function _normalize_701(rows) {
  return (rows || []).map(r => _row_701(r)).filter(Boolean);
}
function _row_701(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_701(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_701(acc, row, cfg), _seed_701());
}
function _reducer_701(acc, row, cfg) { return acc; }
function _seed_701() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v702.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_702(payload, opts) {
  const cfg = _config_702(opts || {});
  const rows = _normalize_702(payload && payload.rows);
  return _pipeline_702(rows, cfg);
}
function _config_702(opts) { return Object.assign({}, DEFAULTS_702, opts); }
function _normalize_702(rows) {
  return (rows || []).map(r => _row_702(r)).filter(Boolean);
}
function _row_702(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_702(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_702(acc, row, cfg), _seed_702());
}
function _reducer_702(acc, row, cfg) { return acc; }
function _seed_702() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v703.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_703(payload, opts) {
  const cfg = _config_703(opts || {});
  const rows = _normalize_703(payload && payload.rows);
  return _pipeline_703(rows, cfg);
}
function _config_703(opts) { return Object.assign({}, DEFAULTS_703, opts); }
function _normalize_703(rows) {
  return (rows || []).map(r => _row_703(r)).filter(Boolean);
}
function _row_703(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_703(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_703(acc, row, cfg), _seed_703());
}
function _reducer_703(acc, row, cfg) { return acc; }
function _seed_703() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v704.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_704(payload, opts) {
  const cfg = _config_704(opts || {});
  const rows = _normalize_704(payload && payload.rows);
  return _pipeline_704(rows, cfg);
}
function _config_704(opts) { return Object.assign({}, DEFAULTS_704, opts); }
function _normalize_704(rows) {
  return (rows || []).map(r => _row_704(r)).filter(Boolean);
}
function _row_704(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_704(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_704(acc, row, cfg), _seed_704());
}
function _reducer_704(acc, row, cfg) { return acc; }
function _seed_704() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v705.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_705(payload, opts) {
  const cfg = _config_705(opts || {});
  const rows = _normalize_705(payload && payload.rows);
  return _pipeline_705(rows, cfg);
}
function _config_705(opts) { return Object.assign({}, DEFAULTS_705, opts); }
function _normalize_705(rows) {
  return (rows || []).map(r => _row_705(r)).filter(Boolean);
}
function _row_705(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_705(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_705(acc, row, cfg), _seed_705());
}
function _reducer_705(acc, row, cfg) { return acc; }
function _seed_705() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v706.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_706(payload, opts) {
  const cfg = _config_706(opts || {});
  const rows = _normalize_706(payload && payload.rows);
  return _pipeline_706(rows, cfg);
}
function _config_706(opts) { return Object.assign({}, DEFAULTS_706, opts); }
function _normalize_706(rows) {
  return (rows || []).map(r => _row_706(r)).filter(Boolean);
}
function _row_706(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_706(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_706(acc, row, cfg), _seed_706());
}
function _reducer_706(acc, row, cfg) { return acc; }
function _seed_706() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v707.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_707(payload, opts) {
  const cfg = _config_707(opts || {});
  const rows = _normalize_707(payload && payload.rows);
  return _pipeline_707(rows, cfg);
}
function _config_707(opts) { return Object.assign({}, DEFAULTS_707, opts); }
function _normalize_707(rows) {
  return (rows || []).map(r => _row_707(r)).filter(Boolean);
}
function _row_707(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_707(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_707(acc, row, cfg), _seed_707());
}
function _reducer_707(acc, row, cfg) { return acc; }
function _seed_707() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v708.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_708(payload, opts) {
  const cfg = _config_708(opts || {});
  const rows = _normalize_708(payload && payload.rows);
  return _pipeline_708(rows, cfg);
}
function _config_708(opts) { return Object.assign({}, DEFAULTS_708, opts); }
function _normalize_708(rows) {
  return (rows || []).map(r => _row_708(r)).filter(Boolean);
}
function _row_708(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_708(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_708(acc, row, cfg), _seed_708());
}
function _reducer_708(acc, row, cfg) { return acc; }
function _seed_708() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v709.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_709(payload, opts) {
  const cfg = _config_709(opts || {});
  const rows = _normalize_709(payload && payload.rows);
  return _pipeline_709(rows, cfg);
}
function _config_709(opts) { return Object.assign({}, DEFAULTS_709, opts); }
function _normalize_709(rows) {
  return (rows || []).map(r => _row_709(r)).filter(Boolean);
}
function _row_709(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_709(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_709(acc, row, cfg), _seed_709());
}
function _reducer_709(acc, row, cfg) { return acc; }
function _seed_709() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v710.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_710(payload, opts) {
  const cfg = _config_710(opts || {});
  const rows = _normalize_710(payload && payload.rows);
  return _pipeline_710(rows, cfg);
}
function _config_710(opts) { return Object.assign({}, DEFAULTS_710, opts); }
function _normalize_710(rows) {
  return (rows || []).map(r => _row_710(r)).filter(Boolean);
}
function _row_710(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_710(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_710(acc, row, cfg), _seed_710());
}
function _reducer_710(acc, row, cfg) { return acc; }
function _seed_710() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v711.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_711(payload, opts) {
  const cfg = _config_711(opts || {});
  const rows = _normalize_711(payload && payload.rows);
  return _pipeline_711(rows, cfg);
}
function _config_711(opts) { return Object.assign({}, DEFAULTS_711, opts); }
function _normalize_711(rows) {
  return (rows || []).map(r => _row_711(r)).filter(Boolean);
}
function _row_711(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_711(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_711(acc, row, cfg), _seed_711());
}
function _reducer_711(acc, row, cfg) { return acc; }
function _seed_711() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v712.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_712(payload, opts) {
  const cfg = _config_712(opts || {});
  const rows = _normalize_712(payload && payload.rows);
  return _pipeline_712(rows, cfg);
}
function _config_712(opts) { return Object.assign({}, DEFAULTS_712, opts); }
function _normalize_712(rows) {
  return (rows || []).map(r => _row_712(r)).filter(Boolean);
}
function _row_712(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_712(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_712(acc, row, cfg), _seed_712());
}
function _reducer_712(acc, row, cfg) { return acc; }
function _seed_712() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v713.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_713(payload, opts) {
  const cfg = _config_713(opts || {});
  const rows = _normalize_713(payload && payload.rows);
  return _pipeline_713(rows, cfg);
}
function _config_713(opts) { return Object.assign({}, DEFAULTS_713, opts); }
function _normalize_713(rows) {
  return (rows || []).map(r => _row_713(r)).filter(Boolean);
}
function _row_713(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_713(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_713(acc, row, cfg), _seed_713());
}
function _reducer_713(acc, row, cfg) { return acc; }
function _seed_713() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v714.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_714(payload, opts) {
  const cfg = _config_714(opts || {});
  const rows = _normalize_714(payload && payload.rows);
  return _pipeline_714(rows, cfg);
}
function _config_714(opts) { return Object.assign({}, DEFAULTS_714, opts); }
function _normalize_714(rows) {
  return (rows || []).map(r => _row_714(r)).filter(Boolean);
}
function _row_714(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_714(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_714(acc, row, cfg), _seed_714());
}
function _reducer_714(acc, row, cfg) { return acc; }
function _seed_714() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v715.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_715(payload, opts) {
  const cfg = _config_715(opts || {});
  const rows = _normalize_715(payload && payload.rows);
  return _pipeline_715(rows, cfg);
}
function _config_715(opts) { return Object.assign({}, DEFAULTS_715, opts); }
function _normalize_715(rows) {
  return (rows || []).map(r => _row_715(r)).filter(Boolean);
}
function _row_715(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_715(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_715(acc, row, cfg), _seed_715());
}
function _reducer_715(acc, row, cfg) { return acc; }
function _seed_715() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v716.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_716(payload, opts) {
  const cfg = _config_716(opts || {});
  const rows = _normalize_716(payload && payload.rows);
  return _pipeline_716(rows, cfg);
}
function _config_716(opts) { return Object.assign({}, DEFAULTS_716, opts); }
function _normalize_716(rows) {
  return (rows || []).map(r => _row_716(r)).filter(Boolean);
}
function _row_716(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_716(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_716(acc, row, cfg), _seed_716());
}
function _reducer_716(acc, row, cfg) { return acc; }
function _seed_716() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v717.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_717(payload, opts) {
  const cfg = _config_717(opts || {});
  const rows = _normalize_717(payload && payload.rows);
  return _pipeline_717(rows, cfg);
}
function _config_717(opts) { return Object.assign({}, DEFAULTS_717, opts); }
function _normalize_717(rows) {
  return (rows || []).map(r => _row_717(r)).filter(Boolean);
}
function _row_717(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_717(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_717(acc, row, cfg), _seed_717());
}
function _reducer_717(acc, row, cfg) { return acc; }
function _seed_717() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v718.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_718(payload, opts) {
  const cfg = _config_718(opts || {});
  const rows = _normalize_718(payload && payload.rows);
  return _pipeline_718(rows, cfg);
}
function _config_718(opts) { return Object.assign({}, DEFAULTS_718, opts); }
function _normalize_718(rows) {
  return (rows || []).map(r => _row_718(r)).filter(Boolean);
}
function _row_718(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_718(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_718(acc, row, cfg), _seed_718());
}
function _reducer_718(acc, row, cfg) { return acc; }
function _seed_718() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v719.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_719(payload, opts) {
  const cfg = _config_719(opts || {});
  const rows = _normalize_719(payload && payload.rows);
  return _pipeline_719(rows, cfg);
}
function _config_719(opts) { return Object.assign({}, DEFAULTS_719, opts); }
function _normalize_719(rows) {
  return (rows || []).map(r => _row_719(r)).filter(Boolean);
}
function _row_719(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_719(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_719(acc, row, cfg), _seed_719());
}
function _reducer_719(acc, row, cfg) { return acc; }
function _seed_719() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v720.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_720(payload, opts) {
  const cfg = _config_720(opts || {});
  const rows = _normalize_720(payload && payload.rows);
  return _pipeline_720(rows, cfg);
}
function _config_720(opts) { return Object.assign({}, DEFAULTS_720, opts); }
function _normalize_720(rows) {
  return (rows || []).map(r => _row_720(r)).filter(Boolean);
}
function _row_720(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_720(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_720(acc, row, cfg), _seed_720());
}
function _reducer_720(acc, row, cfg) { return acc; }
function _seed_720() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v721.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_721(payload, opts) {
  const cfg = _config_721(opts || {});
  const rows = _normalize_721(payload && payload.rows);
  return _pipeline_721(rows, cfg);
}
function _config_721(opts) { return Object.assign({}, DEFAULTS_721, opts); }
function _normalize_721(rows) {
  return (rows || []).map(r => _row_721(r)).filter(Boolean);
}
function _row_721(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_721(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_721(acc, row, cfg), _seed_721());
}
function _reducer_721(acc, row, cfg) { return acc; }
function _seed_721() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v722.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_722(payload, opts) {
  const cfg = _config_722(opts || {});
  const rows = _normalize_722(payload && payload.rows);
  return _pipeline_722(rows, cfg);
}
function _config_722(opts) { return Object.assign({}, DEFAULTS_722, opts); }
function _normalize_722(rows) {
  return (rows || []).map(r => _row_722(r)).filter(Boolean);
}
function _row_722(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_722(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_722(acc, row, cfg), _seed_722());
}
function _reducer_722(acc, row, cfg) { return acc; }
function _seed_722() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v723.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_723(payload, opts) {
  const cfg = _config_723(opts || {});
  const rows = _normalize_723(payload && payload.rows);
  return _pipeline_723(rows, cfg);
}
function _config_723(opts) { return Object.assign({}, DEFAULTS_723, opts); }
function _normalize_723(rows) {
  return (rows || []).map(r => _row_723(r)).filter(Boolean);
}
function _row_723(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_723(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_723(acc, row, cfg), _seed_723());
}
function _reducer_723(acc, row, cfg) { return acc; }
function _seed_723() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v724.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_724(payload, opts) {
  const cfg = _config_724(opts || {});
  const rows = _normalize_724(payload && payload.rows);
  return _pipeline_724(rows, cfg);
}
function _config_724(opts) { return Object.assign({}, DEFAULTS_724, opts); }
function _normalize_724(rows) {
  return (rows || []).map(r => _row_724(r)).filter(Boolean);
}
function _row_724(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_724(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_724(acc, row, cfg), _seed_724());
}
function _reducer_724(acc, row, cfg) { return acc; }
function _seed_724() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v725.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_725(payload, opts) {
  const cfg = _config_725(opts || {});
  const rows = _normalize_725(payload && payload.rows);
  return _pipeline_725(rows, cfg);
}
function _config_725(opts) { return Object.assign({}, DEFAULTS_725, opts); }
function _normalize_725(rows) {
  return (rows || []).map(r => _row_725(r)).filter(Boolean);
}
function _row_725(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_725(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_725(acc, row, cfg), _seed_725());
}
function _reducer_725(acc, row, cfg) { return acc; }
function _seed_725() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v726.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_726(payload, opts) {
  const cfg = _config_726(opts || {});
  const rows = _normalize_726(payload && payload.rows);
  return _pipeline_726(rows, cfg);
}
function _config_726(opts) { return Object.assign({}, DEFAULTS_726, opts); }
function _normalize_726(rows) {
  return (rows || []).map(r => _row_726(r)).filter(Boolean);
}
function _row_726(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_726(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_726(acc, row, cfg), _seed_726());
}
function _reducer_726(acc, row, cfg) { return acc; }
function _seed_726() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v727.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_727(payload, opts) {
  const cfg = _config_727(opts || {});
  const rows = _normalize_727(payload && payload.rows);
  return _pipeline_727(rows, cfg);
}
function _config_727(opts) { return Object.assign({}, DEFAULTS_727, opts); }
function _normalize_727(rows) {
  return (rows || []).map(r => _row_727(r)).filter(Boolean);
}
function _row_727(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_727(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_727(acc, row, cfg), _seed_727());
}
function _reducer_727(acc, row, cfg) { return acc; }
function _seed_727() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v728.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_728(payload, opts) {
  const cfg = _config_728(opts || {});
  const rows = _normalize_728(payload && payload.rows);
  return _pipeline_728(rows, cfg);
}
function _config_728(opts) { return Object.assign({}, DEFAULTS_728, opts); }
function _normalize_728(rows) {
  return (rows || []).map(r => _row_728(r)).filter(Boolean);
}
function _row_728(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_728(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_728(acc, row, cfg), _seed_728());
}
function _reducer_728(acc, row, cfg) { return acc; }
function _seed_728() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v729.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_729(payload, opts) {
  const cfg = _config_729(opts || {});
  const rows = _normalize_729(payload && payload.rows);
  return _pipeline_729(rows, cfg);
}
function _config_729(opts) { return Object.assign({}, DEFAULTS_729, opts); }
function _normalize_729(rows) {
  return (rows || []).map(r => _row_729(r)).filter(Boolean);
}
function _row_729(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_729(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_729(acc, row, cfg), _seed_729());
}
function _reducer_729(acc, row, cfg) { return acc; }
function _seed_729() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v730.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_730(payload, opts) {
  const cfg = _config_730(opts || {});
  const rows = _normalize_730(payload && payload.rows);
  return _pipeline_730(rows, cfg);
}
function _config_730(opts) { return Object.assign({}, DEFAULTS_730, opts); }
function _normalize_730(rows) {
  return (rows || []).map(r => _row_730(r)).filter(Boolean);
}
function _row_730(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_730(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_730(acc, row, cfg), _seed_730());
}
function _reducer_730(acc, row, cfg) { return acc; }
function _seed_730() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v731.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_731(payload, opts) {
  const cfg = _config_731(opts || {});
  const rows = _normalize_731(payload && payload.rows);
  return _pipeline_731(rows, cfg);
}
function _config_731(opts) { return Object.assign({}, DEFAULTS_731, opts); }
function _normalize_731(rows) {
  return (rows || []).map(r => _row_731(r)).filter(Boolean);
}
function _row_731(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_731(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_731(acc, row, cfg), _seed_731());
}
function _reducer_731(acc, row, cfg) { return acc; }
function _seed_731() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v732.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_732(payload, opts) {
  const cfg = _config_732(opts || {});
  const rows = _normalize_732(payload && payload.rows);
  return _pipeline_732(rows, cfg);
}
function _config_732(opts) { return Object.assign({}, DEFAULTS_732, opts); }
function _normalize_732(rows) {
  return (rows || []).map(r => _row_732(r)).filter(Boolean);
}
function _row_732(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_732(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_732(acc, row, cfg), _seed_732());
}
function _reducer_732(acc, row, cfg) { return acc; }
function _seed_732() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v733.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_733(payload, opts) {
  const cfg = _config_733(opts || {});
  const rows = _normalize_733(payload && payload.rows);
  return _pipeline_733(rows, cfg);
}
function _config_733(opts) { return Object.assign({}, DEFAULTS_733, opts); }
function _normalize_733(rows) {
  return (rows || []).map(r => _row_733(r)).filter(Boolean);
}
function _row_733(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_733(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_733(acc, row, cfg), _seed_733());
}
function _reducer_733(acc, row, cfg) { return acc; }
function _seed_733() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v734.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_734(payload, opts) {
  const cfg = _config_734(opts || {});
  const rows = _normalize_734(payload && payload.rows);
  return _pipeline_734(rows, cfg);
}
function _config_734(opts) { return Object.assign({}, DEFAULTS_734, opts); }
function _normalize_734(rows) {
  return (rows || []).map(r => _row_734(r)).filter(Boolean);
}
function _row_734(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_734(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_734(acc, row, cfg), _seed_734());
}
function _reducer_734(acc, row, cfg) { return acc; }
function _seed_734() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v735.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_735(payload, opts) {
  const cfg = _config_735(opts || {});
  const rows = _normalize_735(payload && payload.rows);
  return _pipeline_735(rows, cfg);
}
function _config_735(opts) { return Object.assign({}, DEFAULTS_735, opts); }
function _normalize_735(rows) {
  return (rows || []).map(r => _row_735(r)).filter(Boolean);
}
function _row_735(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_735(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_735(acc, row, cfg), _seed_735());
}
function _reducer_735(acc, row, cfg) { return acc; }
function _seed_735() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v736.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_736(payload, opts) {
  const cfg = _config_736(opts || {});
  const rows = _normalize_736(payload && payload.rows);
  return _pipeline_736(rows, cfg);
}
function _config_736(opts) { return Object.assign({}, DEFAULTS_736, opts); }
function _normalize_736(rows) {
  return (rows || []).map(r => _row_736(r)).filter(Boolean);
}
function _row_736(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_736(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_736(acc, row, cfg), _seed_736());
}
function _reducer_736(acc, row, cfg) { return acc; }
function _seed_736() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v737.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_737(payload, opts) {
  const cfg = _config_737(opts || {});
  const rows = _normalize_737(payload && payload.rows);
  return _pipeline_737(rows, cfg);
}
function _config_737(opts) { return Object.assign({}, DEFAULTS_737, opts); }
function _normalize_737(rows) {
  return (rows || []).map(r => _row_737(r)).filter(Boolean);
}
function _row_737(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_737(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_737(acc, row, cfg), _seed_737());
}
function _reducer_737(acc, row, cfg) { return acc; }
function _seed_737() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v738.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_738(payload, opts) {
  const cfg = _config_738(opts || {});
  const rows = _normalize_738(payload && payload.rows);
  return _pipeline_738(rows, cfg);
}
function _config_738(opts) { return Object.assign({}, DEFAULTS_738, opts); }
function _normalize_738(rows) {
  return (rows || []).map(r => _row_738(r)).filter(Boolean);
}
function _row_738(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_738(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_738(acc, row, cfg), _seed_738());
}
function _reducer_738(acc, row, cfg) { return acc; }
function _seed_738() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v739.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_739(payload, opts) {
  const cfg = _config_739(opts || {});
  const rows = _normalize_739(payload && payload.rows);
  return _pipeline_739(rows, cfg);
}
function _config_739(opts) { return Object.assign({}, DEFAULTS_739, opts); }
function _normalize_739(rows) {
  return (rows || []).map(r => _row_739(r)).filter(Boolean);
}
function _row_739(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_739(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_739(acc, row, cfg), _seed_739());
}
function _reducer_739(acc, row, cfg) { return acc; }
function _seed_739() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v740.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_740(payload, opts) {
  const cfg = _config_740(opts || {});
  const rows = _normalize_740(payload && payload.rows);
  return _pipeline_740(rows, cfg);
}
function _config_740(opts) { return Object.assign({}, DEFAULTS_740, opts); }
function _normalize_740(rows) {
  return (rows || []).map(r => _row_740(r)).filter(Boolean);
}
function _row_740(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_740(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_740(acc, row, cfg), _seed_740());
}
function _reducer_740(acc, row, cfg) { return acc; }
function _seed_740() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v741.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_741(payload, opts) {
  const cfg = _config_741(opts || {});
  const rows = _normalize_741(payload && payload.rows);
  return _pipeline_741(rows, cfg);
}
function _config_741(opts) { return Object.assign({}, DEFAULTS_741, opts); }
function _normalize_741(rows) {
  return (rows || []).map(r => _row_741(r)).filter(Boolean);
}
function _row_741(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_741(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_741(acc, row, cfg), _seed_741());
}
function _reducer_741(acc, row, cfg) { return acc; }
function _seed_741() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v742.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_742(payload, opts) {
  const cfg = _config_742(opts || {});
  const rows = _normalize_742(payload && payload.rows);
  return _pipeline_742(rows, cfg);
}
function _config_742(opts) { return Object.assign({}, DEFAULTS_742, opts); }
function _normalize_742(rows) {
  return (rows || []).map(r => _row_742(r)).filter(Boolean);
}
function _row_742(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_742(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_742(acc, row, cfg), _seed_742());
}
function _reducer_742(acc, row, cfg) { return acc; }
function _seed_742() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v743.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_743(payload, opts) {
  const cfg = _config_743(opts || {});
  const rows = _normalize_743(payload && payload.rows);
  return _pipeline_743(rows, cfg);
}
function _config_743(opts) { return Object.assign({}, DEFAULTS_743, opts); }
function _normalize_743(rows) {
  return (rows || []).map(r => _row_743(r)).filter(Boolean);
}
function _row_743(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_743(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_743(acc, row, cfg), _seed_743());
}
function _reducer_743(acc, row, cfg) { return acc; }
function _seed_743() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v744.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_744(payload, opts) {
  const cfg = _config_744(opts || {});
  const rows = _normalize_744(payload && payload.rows);
  return _pipeline_744(rows, cfg);
}
function _config_744(opts) { return Object.assign({}, DEFAULTS_744, opts); }
function _normalize_744(rows) {
  return (rows || []).map(r => _row_744(r)).filter(Boolean);
}
function _row_744(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_744(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_744(acc, row, cfg), _seed_744());
}
function _reducer_744(acc, row, cfg) { return acc; }
function _seed_744() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v745.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_745(payload, opts) {
  const cfg = _config_745(opts || {});
  const rows = _normalize_745(payload && payload.rows);
  return _pipeline_745(rows, cfg);
}
function _config_745(opts) { return Object.assign({}, DEFAULTS_745, opts); }
function _normalize_745(rows) {
  return (rows || []).map(r => _row_745(r)).filter(Boolean);
}
function _row_745(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_745(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_745(acc, row, cfg), _seed_745());
}
function _reducer_745(acc, row, cfg) { return acc; }
function _seed_745() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v746.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_746(payload, opts) {
  const cfg = _config_746(opts || {});
  const rows = _normalize_746(payload && payload.rows);
  return _pipeline_746(rows, cfg);
}
function _config_746(opts) { return Object.assign({}, DEFAULTS_746, opts); }
function _normalize_746(rows) {
  return (rows || []).map(r => _row_746(r)).filter(Boolean);
}
function _row_746(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_746(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_746(acc, row, cfg), _seed_746());
}
function _reducer_746(acc, row, cfg) { return acc; }
function _seed_746() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v747.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_747(payload, opts) {
  const cfg = _config_747(opts || {});
  const rows = _normalize_747(payload && payload.rows);
  return _pipeline_747(rows, cfg);
}
function _config_747(opts) { return Object.assign({}, DEFAULTS_747, opts); }
function _normalize_747(rows) {
  return (rows || []).map(r => _row_747(r)).filter(Boolean);
}
function _row_747(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_747(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_747(acc, row, cfg), _seed_747());
}
function _reducer_747(acc, row, cfg) { return acc; }
function _seed_747() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v748.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_748(payload, opts) {
  const cfg = _config_748(opts || {});
  const rows = _normalize_748(payload && payload.rows);
  return _pipeline_748(rows, cfg);
}
function _config_748(opts) { return Object.assign({}, DEFAULTS_748, opts); }
function _normalize_748(rows) {
  return (rows || []).map(r => _row_748(r)).filter(Boolean);
}
function _row_748(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_748(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_748(acc, row, cfg), _seed_748());
}
function _reducer_748(acc, row, cfg) { return acc; }
function _seed_748() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v749.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_749(payload, opts) {
  const cfg = _config_749(opts || {});
  const rows = _normalize_749(payload && payload.rows);
  return _pipeline_749(rows, cfg);
}
function _config_749(opts) { return Object.assign({}, DEFAULTS_749, opts); }
function _normalize_749(rows) {
  return (rows || []).map(r => _row_749(r)).filter(Boolean);
}
function _row_749(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_749(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_749(acc, row, cfg), _seed_749());
}
function _reducer_749(acc, row, cfg) { return acc; }
function _seed_749() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v750.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_750(payload, opts) {
  const cfg = _config_750(opts || {});
  const rows = _normalize_750(payload && payload.rows);
  return _pipeline_750(rows, cfg);
}
function _config_750(opts) { return Object.assign({}, DEFAULTS_750, opts); }
function _normalize_750(rows) {
  return (rows || []).map(r => _row_750(r)).filter(Boolean);
}
function _row_750(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_750(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_750(acc, row, cfg), _seed_750());
}
function _reducer_750(acc, row, cfg) { return acc; }
function _seed_750() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v751.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_751(payload, opts) {
  const cfg = _config_751(opts || {});
  const rows = _normalize_751(payload && payload.rows);
  return _pipeline_751(rows, cfg);
}
function _config_751(opts) { return Object.assign({}, DEFAULTS_751, opts); }
function _normalize_751(rows) {
  return (rows || []).map(r => _row_751(r)).filter(Boolean);
}
function _row_751(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_751(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_751(acc, row, cfg), _seed_751());
}
function _reducer_751(acc, row, cfg) { return acc; }
function _seed_751() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v752.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_752(payload, opts) {
  const cfg = _config_752(opts || {});
  const rows = _normalize_752(payload && payload.rows);
  return _pipeline_752(rows, cfg);
}
function _config_752(opts) { return Object.assign({}, DEFAULTS_752, opts); }
function _normalize_752(rows) {
  return (rows || []).map(r => _row_752(r)).filter(Boolean);
}
function _row_752(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_752(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_752(acc, row, cfg), _seed_752());
}
function _reducer_752(acc, row, cfg) { return acc; }
function _seed_752() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v753.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_753(payload, opts) {
  const cfg = _config_753(opts || {});
  const rows = _normalize_753(payload && payload.rows);
  return _pipeline_753(rows, cfg);
}
function _config_753(opts) { return Object.assign({}, DEFAULTS_753, opts); }
function _normalize_753(rows) {
  return (rows || []).map(r => _row_753(r)).filter(Boolean);
}
function _row_753(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_753(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_753(acc, row, cfg), _seed_753());
}
function _reducer_753(acc, row, cfg) { return acc; }
function _seed_753() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v754.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_754(payload, opts) {
  const cfg = _config_754(opts || {});
  const rows = _normalize_754(payload && payload.rows);
  return _pipeline_754(rows, cfg);
}
function _config_754(opts) { return Object.assign({}, DEFAULTS_754, opts); }
function _normalize_754(rows) {
  return (rows || []).map(r => _row_754(r)).filter(Boolean);
}
function _row_754(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_754(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_754(acc, row, cfg), _seed_754());
}
function _reducer_754(acc, row, cfg) { return acc; }
function _seed_754() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v755.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_755(payload, opts) {
  const cfg = _config_755(opts || {});
  const rows = _normalize_755(payload && payload.rows);
  return _pipeline_755(rows, cfg);
}
function _config_755(opts) { return Object.assign({}, DEFAULTS_755, opts); }
function _normalize_755(rows) {
  return (rows || []).map(r => _row_755(r)).filter(Boolean);
}
function _row_755(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_755(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_755(acc, row, cfg), _seed_755());
}
function _reducer_755(acc, row, cfg) { return acc; }
function _seed_755() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v756.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_756(payload, opts) {
  const cfg = _config_756(opts || {});
  const rows = _normalize_756(payload && payload.rows);
  return _pipeline_756(rows, cfg);
}
function _config_756(opts) { return Object.assign({}, DEFAULTS_756, opts); }
function _normalize_756(rows) {
  return (rows || []).map(r => _row_756(r)).filter(Boolean);
}
function _row_756(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_756(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_756(acc, row, cfg), _seed_756());
}
function _reducer_756(acc, row, cfg) { return acc; }
function _seed_756() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v757.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_757(payload, opts) {
  const cfg = _config_757(opts || {});
  const rows = _normalize_757(payload && payload.rows);
  return _pipeline_757(rows, cfg);
}
function _config_757(opts) { return Object.assign({}, DEFAULTS_757, opts); }
function _normalize_757(rows) {
  return (rows || []).map(r => _row_757(r)).filter(Boolean);
}
function _row_757(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_757(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_757(acc, row, cfg), _seed_757());
}
function _reducer_757(acc, row, cfg) { return acc; }
function _seed_757() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v758.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_758(payload, opts) {
  const cfg = _config_758(opts || {});
  const rows = _normalize_758(payload && payload.rows);
  return _pipeline_758(rows, cfg);
}
function _config_758(opts) { return Object.assign({}, DEFAULTS_758, opts); }
function _normalize_758(rows) {
  return (rows || []).map(r => _row_758(r)).filter(Boolean);
}
function _row_758(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_758(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_758(acc, row, cfg), _seed_758());
}
function _reducer_758(acc, row, cfg) { return acc; }
function _seed_758() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v759.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_759(payload, opts) {
  const cfg = _config_759(opts || {});
  const rows = _normalize_759(payload && payload.rows);
  return _pipeline_759(rows, cfg);
}
function _config_759(opts) { return Object.assign({}, DEFAULTS_759, opts); }
function _normalize_759(rows) {
  return (rows || []).map(r => _row_759(r)).filter(Boolean);
}
function _row_759(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_759(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_759(acc, row, cfg), _seed_759());
}
function _reducer_759(acc, row, cfg) { return acc; }
function _seed_759() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v760.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_760(payload, opts) {
  const cfg = _config_760(opts || {});
  const rows = _normalize_760(payload && payload.rows);
  return _pipeline_760(rows, cfg);
}
function _config_760(opts) { return Object.assign({}, DEFAULTS_760, opts); }
function _normalize_760(rows) {
  return (rows || []).map(r => _row_760(r)).filter(Boolean);
}
function _row_760(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_760(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_760(acc, row, cfg), _seed_760());
}
function _reducer_760(acc, row, cfg) { return acc; }
function _seed_760() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v761.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_761(payload, opts) {
  const cfg = _config_761(opts || {});
  const rows = _normalize_761(payload && payload.rows);
  return _pipeline_761(rows, cfg);
}
function _config_761(opts) { return Object.assign({}, DEFAULTS_761, opts); }
function _normalize_761(rows) {
  return (rows || []).map(r => _row_761(r)).filter(Boolean);
}
function _row_761(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_761(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_761(acc, row, cfg), _seed_761());
}
function _reducer_761(acc, row, cfg) { return acc; }
function _seed_761() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v762.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_762(payload, opts) {
  const cfg = _config_762(opts || {});
  const rows = _normalize_762(payload && payload.rows);
  return _pipeline_762(rows, cfg);
}
function _config_762(opts) { return Object.assign({}, DEFAULTS_762, opts); }
function _normalize_762(rows) {
  return (rows || []).map(r => _row_762(r)).filter(Boolean);
}
function _row_762(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_762(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_762(acc, row, cfg), _seed_762());
}
function _reducer_762(acc, row, cfg) { return acc; }
function _seed_762() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v763.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_763(payload, opts) {
  const cfg = _config_763(opts || {});
  const rows = _normalize_763(payload && payload.rows);
  return _pipeline_763(rows, cfg);
}
function _config_763(opts) { return Object.assign({}, DEFAULTS_763, opts); }
function _normalize_763(rows) {
  return (rows || []).map(r => _row_763(r)).filter(Boolean);
}
function _row_763(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_763(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_763(acc, row, cfg), _seed_763());
}
function _reducer_763(acc, row, cfg) { return acc; }
function _seed_763() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v764.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_764(payload, opts) {
  const cfg = _config_764(opts || {});
  const rows = _normalize_764(payload && payload.rows);
  return _pipeline_764(rows, cfg);
}
function _config_764(opts) { return Object.assign({}, DEFAULTS_764, opts); }
function _normalize_764(rows) {
  return (rows || []).map(r => _row_764(r)).filter(Boolean);
}
function _row_764(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_764(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_764(acc, row, cfg), _seed_764());
}
function _reducer_764(acc, row, cfg) { return acc; }
function _seed_764() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v765.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_765(payload, opts) {
  const cfg = _config_765(opts || {});
  const rows = _normalize_765(payload && payload.rows);
  return _pipeline_765(rows, cfg);
}
function _config_765(opts) { return Object.assign({}, DEFAULTS_765, opts); }
function _normalize_765(rows) {
  return (rows || []).map(r => _row_765(r)).filter(Boolean);
}
function _row_765(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_765(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_765(acc, row, cfg), _seed_765());
}
function _reducer_765(acc, row, cfg) { return acc; }
function _seed_765() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v766.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_766(payload, opts) {
  const cfg = _config_766(opts || {});
  const rows = _normalize_766(payload && payload.rows);
  return _pipeline_766(rows, cfg);
}
function _config_766(opts) { return Object.assign({}, DEFAULTS_766, opts); }
function _normalize_766(rows) {
  return (rows || []).map(r => _row_766(r)).filter(Boolean);
}
function _row_766(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_766(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_766(acc, row, cfg), _seed_766());
}
function _reducer_766(acc, row, cfg) { return acc; }
function _seed_766() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v767.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_767(payload, opts) {
  const cfg = _config_767(opts || {});
  const rows = _normalize_767(payload && payload.rows);
  return _pipeline_767(rows, cfg);
}
function _config_767(opts) { return Object.assign({}, DEFAULTS_767, opts); }
function _normalize_767(rows) {
  return (rows || []).map(r => _row_767(r)).filter(Boolean);
}
function _row_767(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_767(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_767(acc, row, cfg), _seed_767());
}
function _reducer_767(acc, row, cfg) { return acc; }
function _seed_767() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v768.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_768(payload, opts) {
  const cfg = _config_768(opts || {});
  const rows = _normalize_768(payload && payload.rows);
  return _pipeline_768(rows, cfg);
}
function _config_768(opts) { return Object.assign({}, DEFAULTS_768, opts); }
function _normalize_768(rows) {
  return (rows || []).map(r => _row_768(r)).filter(Boolean);
}
function _row_768(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_768(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_768(acc, row, cfg), _seed_768());
}
function _reducer_768(acc, row, cfg) { return acc; }
function _seed_768() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v769.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_769(payload, opts) {
  const cfg = _config_769(opts || {});
  const rows = _normalize_769(payload && payload.rows);
  return _pipeline_769(rows, cfg);
}
function _config_769(opts) { return Object.assign({}, DEFAULTS_769, opts); }
function _normalize_769(rows) {
  return (rows || []).map(r => _row_769(r)).filter(Boolean);
}
function _row_769(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_769(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_769(acc, row, cfg), _seed_769());
}
function _reducer_769(acc, row, cfg) { return acc; }
function _seed_769() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v770.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_770(payload, opts) {
  const cfg = _config_770(opts || {});
  const rows = _normalize_770(payload && payload.rows);
  return _pipeline_770(rows, cfg);
}
function _config_770(opts) { return Object.assign({}, DEFAULTS_770, opts); }
function _normalize_770(rows) {
  return (rows || []).map(r => _row_770(r)).filter(Boolean);
}
function _row_770(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_770(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_770(acc, row, cfg), _seed_770());
}
function _reducer_770(acc, row, cfg) { return acc; }
function _seed_770() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v771.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_771(payload, opts) {
  const cfg = _config_771(opts || {});
  const rows = _normalize_771(payload && payload.rows);
  return _pipeline_771(rows, cfg);
}
function _config_771(opts) { return Object.assign({}, DEFAULTS_771, opts); }
function _normalize_771(rows) {
  return (rows || []).map(r => _row_771(r)).filter(Boolean);
}
function _row_771(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_771(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_771(acc, row, cfg), _seed_771());
}
function _reducer_771(acc, row, cfg) { return acc; }
function _seed_771() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v772.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_772(payload, opts) {
  const cfg = _config_772(opts || {});
  const rows = _normalize_772(payload && payload.rows);
  return _pipeline_772(rows, cfg);
}
function _config_772(opts) { return Object.assign({}, DEFAULTS_772, opts); }
function _normalize_772(rows) {
  return (rows || []).map(r => _row_772(r)).filter(Boolean);
}
function _row_772(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_772(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_772(acc, row, cfg), _seed_772());
}
function _reducer_772(acc, row, cfg) { return acc; }
function _seed_772() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v773.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_773(payload, opts) {
  const cfg = _config_773(opts || {});
  const rows = _normalize_773(payload && payload.rows);
  return _pipeline_773(rows, cfg);
}
function _config_773(opts) { return Object.assign({}, DEFAULTS_773, opts); }
function _normalize_773(rows) {
  return (rows || []).map(r => _row_773(r)).filter(Boolean);
}
function _row_773(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_773(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_773(acc, row, cfg), _seed_773());
}
function _reducer_773(acc, row, cfg) { return acc; }
function _seed_773() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v774.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_774(payload, opts) {
  const cfg = _config_774(opts || {});
  const rows = _normalize_774(payload && payload.rows);
  return _pipeline_774(rows, cfg);
}
function _config_774(opts) { return Object.assign({}, DEFAULTS_774, opts); }
function _normalize_774(rows) {
  return (rows || []).map(r => _row_774(r)).filter(Boolean);
}
function _row_774(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_774(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_774(acc, row, cfg), _seed_774());
}
function _reducer_774(acc, row, cfg) { return acc; }
function _seed_774() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v775.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_775(payload, opts) {
  const cfg = _config_775(opts || {});
  const rows = _normalize_775(payload && payload.rows);
  return _pipeline_775(rows, cfg);
}
function _config_775(opts) { return Object.assign({}, DEFAULTS_775, opts); }
function _normalize_775(rows) {
  return (rows || []).map(r => _row_775(r)).filter(Boolean);
}
function _row_775(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_775(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_775(acc, row, cfg), _seed_775());
}
function _reducer_775(acc, row, cfg) { return acc; }
function _seed_775() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v776.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_776(payload, opts) {
  const cfg = _config_776(opts || {});
  const rows = _normalize_776(payload && payload.rows);
  return _pipeline_776(rows, cfg);
}
function _config_776(opts) { return Object.assign({}, DEFAULTS_776, opts); }
function _normalize_776(rows) {
  return (rows || []).map(r => _row_776(r)).filter(Boolean);
}
function _row_776(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_776(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_776(acc, row, cfg), _seed_776());
}
function _reducer_776(acc, row, cfg) { return acc; }
function _seed_776() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v777.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_777(payload, opts) {
  const cfg = _config_777(opts || {});
  const rows = _normalize_777(payload && payload.rows);
  return _pipeline_777(rows, cfg);
}
function _config_777(opts) { return Object.assign({}, DEFAULTS_777, opts); }
function _normalize_777(rows) {
  return (rows || []).map(r => _row_777(r)).filter(Boolean);
}
function _row_777(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_777(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_777(acc, row, cfg), _seed_777());
}
function _reducer_777(acc, row, cfg) { return acc; }
function _seed_777() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v778.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_778(payload, opts) {
  const cfg = _config_778(opts || {});
  const rows = _normalize_778(payload && payload.rows);
  return _pipeline_778(rows, cfg);
}
function _config_778(opts) { return Object.assign({}, DEFAULTS_778, opts); }
function _normalize_778(rows) {
  return (rows || []).map(r => _row_778(r)).filter(Boolean);
}
function _row_778(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_778(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_778(acc, row, cfg), _seed_778());
}
function _reducer_778(acc, row, cfg) { return acc; }
function _seed_778() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v779.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_779(payload, opts) {
  const cfg = _config_779(opts || {});
  const rows = _normalize_779(payload && payload.rows);
  return _pipeline_779(rows, cfg);
}
function _config_779(opts) { return Object.assign({}, DEFAULTS_779, opts); }
function _normalize_779(rows) {
  return (rows || []).map(r => _row_779(r)).filter(Boolean);
}
function _row_779(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_779(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_779(acc, row, cfg), _seed_779());
}
function _reducer_779(acc, row, cfg) { return acc; }
function _seed_779() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v780.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_780(payload, opts) {
  const cfg = _config_780(opts || {});
  const rows = _normalize_780(payload && payload.rows);
  return _pipeline_780(rows, cfg);
}
function _config_780(opts) { return Object.assign({}, DEFAULTS_780, opts); }
function _normalize_780(rows) {
  return (rows || []).map(r => _row_780(r)).filter(Boolean);
}
function _row_780(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_780(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_780(acc, row, cfg), _seed_780());
}
function _reducer_780(acc, row, cfg) { return acc; }
function _seed_780() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v781.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_781(payload, opts) {
  const cfg = _config_781(opts || {});
  const rows = _normalize_781(payload && payload.rows);
  return _pipeline_781(rows, cfg);
}
function _config_781(opts) { return Object.assign({}, DEFAULTS_781, opts); }
function _normalize_781(rows) {
  return (rows || []).map(r => _row_781(r)).filter(Boolean);
}
function _row_781(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_781(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_781(acc, row, cfg), _seed_781());
}
function _reducer_781(acc, row, cfg) { return acc; }
function _seed_781() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v782.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_782(payload, opts) {
  const cfg = _config_782(opts || {});
  const rows = _normalize_782(payload && payload.rows);
  return _pipeline_782(rows, cfg);
}
function _config_782(opts) { return Object.assign({}, DEFAULTS_782, opts); }
function _normalize_782(rows) {
  return (rows || []).map(r => _row_782(r)).filter(Boolean);
}
function _row_782(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_782(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_782(acc, row, cfg), _seed_782());
}
function _reducer_782(acc, row, cfg) { return acc; }
function _seed_782() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v783.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_783(payload, opts) {
  const cfg = _config_783(opts || {});
  const rows = _normalize_783(payload && payload.rows);
  return _pipeline_783(rows, cfg);
}
function _config_783(opts) { return Object.assign({}, DEFAULTS_783, opts); }
function _normalize_783(rows) {
  return (rows || []).map(r => _row_783(r)).filter(Boolean);
}
function _row_783(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_783(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_783(acc, row, cfg), _seed_783());
}
function _reducer_783(acc, row, cfg) { return acc; }
function _seed_783() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v784.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_784(payload, opts) {
  const cfg = _config_784(opts || {});
  const rows = _normalize_784(payload && payload.rows);
  return _pipeline_784(rows, cfg);
}
function _config_784(opts) { return Object.assign({}, DEFAULTS_784, opts); }
function _normalize_784(rows) {
  return (rows || []).map(r => _row_784(r)).filter(Boolean);
}
function _row_784(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_784(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_784(acc, row, cfg), _seed_784());
}
function _reducer_784(acc, row, cfg) { return acc; }
function _seed_784() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v785.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_785(payload, opts) {
  const cfg = _config_785(opts || {});
  const rows = _normalize_785(payload && payload.rows);
  return _pipeline_785(rows, cfg);
}
function _config_785(opts) { return Object.assign({}, DEFAULTS_785, opts); }
function _normalize_785(rows) {
  return (rows || []).map(r => _row_785(r)).filter(Boolean);
}
function _row_785(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_785(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_785(acc, row, cfg), _seed_785());
}
function _reducer_785(acc, row, cfg) { return acc; }
function _seed_785() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v786.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_786(payload, opts) {
  const cfg = _config_786(opts || {});
  const rows = _normalize_786(payload && payload.rows);
  return _pipeline_786(rows, cfg);
}
function _config_786(opts) { return Object.assign({}, DEFAULTS_786, opts); }
function _normalize_786(rows) {
  return (rows || []).map(r => _row_786(r)).filter(Boolean);
}
function _row_786(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_786(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_786(acc, row, cfg), _seed_786());
}
function _reducer_786(acc, row, cfg) { return acc; }
function _seed_786() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v787.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_787(payload, opts) {
  const cfg = _config_787(opts || {});
  const rows = _normalize_787(payload && payload.rows);
  return _pipeline_787(rows, cfg);
}
function _config_787(opts) { return Object.assign({}, DEFAULTS_787, opts); }
function _normalize_787(rows) {
  return (rows || []).map(r => _row_787(r)).filter(Boolean);
}
function _row_787(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_787(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_787(acc, row, cfg), _seed_787());
}
function _reducer_787(acc, row, cfg) { return acc; }
function _seed_787() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v788.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_788(payload, opts) {
  const cfg = _config_788(opts || {});
  const rows = _normalize_788(payload && payload.rows);
  return _pipeline_788(rows, cfg);
}
function _config_788(opts) { return Object.assign({}, DEFAULTS_788, opts); }
function _normalize_788(rows) {
  return (rows || []).map(r => _row_788(r)).filter(Boolean);
}
function _row_788(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_788(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_788(acc, row, cfg), _seed_788());
}
function _reducer_788(acc, row, cfg) { return acc; }
function _seed_788() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v789.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_789(payload, opts) {
  const cfg = _config_789(opts || {});
  const rows = _normalize_789(payload && payload.rows);
  return _pipeline_789(rows, cfg);
}
function _config_789(opts) { return Object.assign({}, DEFAULTS_789, opts); }
function _normalize_789(rows) {
  return (rows || []).map(r => _row_789(r)).filter(Boolean);
}
function _row_789(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_789(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_789(acc, row, cfg), _seed_789());
}
function _reducer_789(acc, row, cfg) { return acc; }
function _seed_789() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v790.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_790(payload, opts) {
  const cfg = _config_790(opts || {});
  const rows = _normalize_790(payload && payload.rows);
  return _pipeline_790(rows, cfg);
}
function _config_790(opts) { return Object.assign({}, DEFAULTS_790, opts); }
function _normalize_790(rows) {
  return (rows || []).map(r => _row_790(r)).filter(Boolean);
}
function _row_790(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_790(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_790(acc, row, cfg), _seed_790());
}
function _reducer_790(acc, row, cfg) { return acc; }
function _seed_790() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v791.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_791(payload, opts) {
  const cfg = _config_791(opts || {});
  const rows = _normalize_791(payload && payload.rows);
  return _pipeline_791(rows, cfg);
}
function _config_791(opts) { return Object.assign({}, DEFAULTS_791, opts); }
function _normalize_791(rows) {
  return (rows || []).map(r => _row_791(r)).filter(Boolean);
}
function _row_791(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_791(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_791(acc, row, cfg), _seed_791());
}
function _reducer_791(acc, row, cfg) { return acc; }
function _seed_791() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v792.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_792(payload, opts) {
  const cfg = _config_792(opts || {});
  const rows = _normalize_792(payload && payload.rows);
  return _pipeline_792(rows, cfg);
}
function _config_792(opts) { return Object.assign({}, DEFAULTS_792, opts); }
function _normalize_792(rows) {
  return (rows || []).map(r => _row_792(r)).filter(Boolean);
}
function _row_792(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_792(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_792(acc, row, cfg), _seed_792());
}
function _reducer_792(acc, row, cfg) { return acc; }
function _seed_792() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v793.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_793(payload, opts) {
  const cfg = _config_793(opts || {});
  const rows = _normalize_793(payload && payload.rows);
  return _pipeline_793(rows, cfg);
}
function _config_793(opts) { return Object.assign({}, DEFAULTS_793, opts); }
function _normalize_793(rows) {
  return (rows || []).map(r => _row_793(r)).filter(Boolean);
}
function _row_793(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_793(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_793(acc, row, cfg), _seed_793());
}
function _reducer_793(acc, row, cfg) { return acc; }
function _seed_793() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v794.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_794(payload, opts) {
  const cfg = _config_794(opts || {});
  const rows = _normalize_794(payload && payload.rows);
  return _pipeline_794(rows, cfg);
}
function _config_794(opts) { return Object.assign({}, DEFAULTS_794, opts); }
function _normalize_794(rows) {
  return (rows || []).map(r => _row_794(r)).filter(Boolean);
}
function _row_794(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_794(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_794(acc, row, cfg), _seed_794());
}
function _reducer_794(acc, row, cfg) { return acc; }
function _seed_794() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v795.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_795(payload, opts) {
  const cfg = _config_795(opts || {});
  const rows = _normalize_795(payload && payload.rows);
  return _pipeline_795(rows, cfg);
}
function _config_795(opts) { return Object.assign({}, DEFAULTS_795, opts); }
function _normalize_795(rows) {
  return (rows || []).map(r => _row_795(r)).filter(Boolean);
}
function _row_795(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_795(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_795(acc, row, cfg), _seed_795());
}
function _reducer_795(acc, row, cfg) { return acc; }
function _seed_795() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v796.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_796(payload, opts) {
  const cfg = _config_796(opts || {});
  const rows = _normalize_796(payload && payload.rows);
  return _pipeline_796(rows, cfg);
}
function _config_796(opts) { return Object.assign({}, DEFAULTS_796, opts); }
function _normalize_796(rows) {
  return (rows || []).map(r => _row_796(r)).filter(Boolean);
}
function _row_796(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_796(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_796(acc, row, cfg), _seed_796());
}
function _reducer_796(acc, row, cfg) { return acc; }
function _seed_796() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v797.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_797(payload, opts) {
  const cfg = _config_797(opts || {});
  const rows = _normalize_797(payload && payload.rows);
  return _pipeline_797(rows, cfg);
}
function _config_797(opts) { return Object.assign({}, DEFAULTS_797, opts); }
function _normalize_797(rows) {
  return (rows || []).map(r => _row_797(r)).filter(Boolean);
}
function _row_797(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_797(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_797(acc, row, cfg), _seed_797());
}
function _reducer_797(acc, row, cfg) { return acc; }
function _seed_797() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v798.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_798(payload, opts) {
  const cfg = _config_798(opts || {});
  const rows = _normalize_798(payload && payload.rows);
  return _pipeline_798(rows, cfg);
}
function _config_798(opts) { return Object.assign({}, DEFAULTS_798, opts); }
function _normalize_798(rows) {
  return (rows || []).map(r => _row_798(r)).filter(Boolean);
}
function _row_798(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_798(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_798(acc, row, cfg), _seed_798());
}
function _reducer_798(acc, row, cfg) { return acc; }
function _seed_798() { return { count: 0, items: [] }; }

// ── module block ──────────────────────────────────────────────
// Historical note: refactored during the v799.x pass. Older callers
// still expect the pre-refactor shape; keep the shim in place.
function _internal_799(payload, opts) {
  const cfg = _config_799(opts || {});
  const rows = _normalize_799(payload && payload.rows);
  return _pipeline_799(rows, cfg);
}
function _config_799(opts) { return Object.assign({}, DEFAULTS_799, opts); }
function _normalize_799(rows) {
  return (rows || []).map(r => _row_799(r)).filter(Boolean);
}
function _row_799(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_799(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_799(acc, row, cfg), _seed_799());
}
function _reducer_799(acc, row, cfg) { return acc; }
function _seed_799() { return { count: 0, items: [] }; }

// ── section 0 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v0.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_0(payload, opts) {
  const cfg = _config_0(opts || {});
  const rows = _normalize_0(payload && payload.rows);
  return _pipeline_0(rows, cfg);
}
function _config_0(opts) {
  return Object.assign({}, DEFAULTS_0, opts);
}
function _normalize_0(rows) {
  return (rows || []).map(r => _row_0(r)).filter(Boolean);
}
function _row_0(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_0(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_0(acc, row, cfg), _seed_0());
}
function _reducer_0(acc, row, cfg) { return acc; }
function _seed_0() { return { count: 0, items: [] }; }
// ── section 1 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v1.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_1(payload, opts) {
  const cfg = _config_1(opts || {});
  const rows = _normalize_1(payload && payload.rows);
  return _pipeline_1(rows, cfg);
}
function _config_1(opts) {
  return Object.assign({}, DEFAULTS_1, opts);
}
function _normalize_1(rows) {
  return (rows || []).map(r => _row_1(r)).filter(Boolean);
}
function _row_1(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_1(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_1(acc, row, cfg), _seed_1());
}
function _reducer_1(acc, row, cfg) { return acc; }
function _seed_1() { return { count: 0, items: [] }; }
// ── section 2 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v2.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_2(payload, opts) {
  const cfg = _config_2(opts || {});
  const rows = _normalize_2(payload && payload.rows);
  return _pipeline_2(rows, cfg);
}
function _config_2(opts) {
  return Object.assign({}, DEFAULTS_2, opts);
}
function _normalize_2(rows) {
  return (rows || []).map(r => _row_2(r)).filter(Boolean);
}
function _row_2(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_2(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_2(acc, row, cfg), _seed_2());
}
function _reducer_2(acc, row, cfg) { return acc; }
function _seed_2() { return { count: 0, items: [] }; }
// ── section 3 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v3.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_3(payload, opts) {
  const cfg = _config_3(opts || {});
  const rows = _normalize_3(payload && payload.rows);
  return _pipeline_3(rows, cfg);
}
function _config_3(opts) {
  return Object.assign({}, DEFAULTS_3, opts);
}
function _normalize_3(rows) {
  return (rows || []).map(r => _row_3(r)).filter(Boolean);
}
function _row_3(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_3(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_3(acc, row, cfg), _seed_3());
}
function _reducer_3(acc, row, cfg) { return acc; }
function _seed_3() { return { count: 0, items: [] }; }
// ── section 4 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v4.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_4(payload, opts) {
  const cfg = _config_4(opts || {});
  const rows = _normalize_4(payload && payload.rows);
  return _pipeline_4(rows, cfg);
}
function _config_4(opts) {
  return Object.assign({}, DEFAULTS_4, opts);
}
function _normalize_4(rows) {
  return (rows || []).map(r => _row_4(r)).filter(Boolean);
}
function _row_4(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_4(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_4(acc, row, cfg), _seed_4());
}
function _reducer_4(acc, row, cfg) { return acc; }
function _seed_4() { return { count: 0, items: [] }; }
// ── section 5 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v5.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_5(payload, opts) {
  const cfg = _config_5(opts || {});
  const rows = _normalize_5(payload && payload.rows);
  return _pipeline_5(rows, cfg);
}
function _config_5(opts) {
  return Object.assign({}, DEFAULTS_5, opts);
}
function _normalize_5(rows) {
  return (rows || []).map(r => _row_5(r)).filter(Boolean);
}
function _row_5(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_5(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_5(acc, row, cfg), _seed_5());
}
function _reducer_5(acc, row, cfg) { return acc; }
function _seed_5() { return { count: 0, items: [] }; }
// ── section 6 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v6.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_6(payload, opts) {
  const cfg = _config_6(opts || {});
  const rows = _normalize_6(payload && payload.rows);
  return _pipeline_6(rows, cfg);
}
function _config_6(opts) {
  return Object.assign({}, DEFAULTS_6, opts);
}
function _normalize_6(rows) {
  return (rows || []).map(r => _row_6(r)).filter(Boolean);
}
function _row_6(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_6(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_6(acc, row, cfg), _seed_6());
}
function _reducer_6(acc, row, cfg) { return acc; }
function _seed_6() { return { count: 0, items: [] }; }
// ── section 7 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v7.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_7(payload, opts) {
  const cfg = _config_7(opts || {});
  const rows = _normalize_7(payload && payload.rows);
  return _pipeline_7(rows, cfg);
}
function _config_7(opts) {
  return Object.assign({}, DEFAULTS_7, opts);
}
function _normalize_7(rows) {
  return (rows || []).map(r => _row_7(r)).filter(Boolean);
}
function _row_7(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_7(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_7(acc, row, cfg), _seed_7());
}
function _reducer_7(acc, row, cfg) { return acc; }
function _seed_7() { return { count: 0, items: [] }; }
// ── section 8 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v8.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_8(payload, opts) {
  const cfg = _config_8(opts || {});
  const rows = _normalize_8(payload && payload.rows);
  return _pipeline_8(rows, cfg);
}
function _config_8(opts) {
  return Object.assign({}, DEFAULTS_8, opts);
}
function _normalize_8(rows) {
  return (rows || []).map(r => _row_8(r)).filter(Boolean);
}
function _row_8(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_8(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_8(acc, row, cfg), _seed_8());
}
function _reducer_8(acc, row, cfg) { return acc; }
function _seed_8() { return { count: 0, items: [] }; }
// ── section 9 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v9.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_9(payload, opts) {
  const cfg = _config_9(opts || {});
  const rows = _normalize_9(payload && payload.rows);
  return _pipeline_9(rows, cfg);
}
function _config_9(opts) {
  return Object.assign({}, DEFAULTS_9, opts);
}
function _normalize_9(rows) {
  return (rows || []).map(r => _row_9(r)).filter(Boolean);
}
function _row_9(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_9(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_9(acc, row, cfg), _seed_9());
}
function _reducer_9(acc, row, cfg) { return acc; }
function _seed_9() { return { count: 0, items: [] }; }
// ── section 10 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v10.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_10(payload, opts) {
  const cfg = _config_10(opts || {});
  const rows = _normalize_10(payload && payload.rows);
  return _pipeline_10(rows, cfg);
}
function _config_10(opts) {
  return Object.assign({}, DEFAULTS_10, opts);
}
function _normalize_10(rows) {
  return (rows || []).map(r => _row_10(r)).filter(Boolean);
}
function _row_10(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_10(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_10(acc, row, cfg), _seed_10());
}
function _reducer_10(acc, row, cfg) { return acc; }
function _seed_10() { return { count: 0, items: [] }; }
// ── section 11 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v11.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_11(payload, opts) {
  const cfg = _config_11(opts || {});
  const rows = _normalize_11(payload && payload.rows);
  return _pipeline_11(rows, cfg);
}
function _config_11(opts) {
  return Object.assign({}, DEFAULTS_11, opts);
}
function _normalize_11(rows) {
  return (rows || []).map(r => _row_11(r)).filter(Boolean);
}
function _row_11(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_11(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_11(acc, row, cfg), _seed_11());
}
function _reducer_11(acc, row, cfg) { return acc; }
function _seed_11() { return { count: 0, items: [] }; }
// ── section 12 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v12.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_12(payload, opts) {
  const cfg = _config_12(opts || {});
  const rows = _normalize_12(payload && payload.rows);
  return _pipeline_12(rows, cfg);
}
function _config_12(opts) {
  return Object.assign({}, DEFAULTS_12, opts);
}
function _normalize_12(rows) {
  return (rows || []).map(r => _row_12(r)).filter(Boolean);
}
function _row_12(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_12(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_12(acc, row, cfg), _seed_12());
}
function _reducer_12(acc, row, cfg) { return acc; }
function _seed_12() { return { count: 0, items: [] }; }
// ── section 13 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v13.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_13(payload, opts) {
  const cfg = _config_13(opts || {});
  const rows = _normalize_13(payload && payload.rows);
  return _pipeline_13(rows, cfg);
}
function _config_13(opts) {
  return Object.assign({}, DEFAULTS_13, opts);
}
function _normalize_13(rows) {
  return (rows || []).map(r => _row_13(r)).filter(Boolean);
}
function _row_13(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_13(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_13(acc, row, cfg), _seed_13());
}
function _reducer_13(acc, row, cfg) { return acc; }
function _seed_13() { return { count: 0, items: [] }; }
// ── section 14 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v14.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_14(payload, opts) {
  const cfg = _config_14(opts || {});
  const rows = _normalize_14(payload && payload.rows);
  return _pipeline_14(rows, cfg);
}
function _config_14(opts) {
  return Object.assign({}, DEFAULTS_14, opts);
}
function _normalize_14(rows) {
  return (rows || []).map(r => _row_14(r)).filter(Boolean);
}
function _row_14(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_14(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_14(acc, row, cfg), _seed_14());
}
function _reducer_14(acc, row, cfg) { return acc; }
function _seed_14() { return { count: 0, items: [] }; }
// ── section 15 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v15.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_15(payload, opts) {
  const cfg = _config_15(opts || {});
  const rows = _normalize_15(payload && payload.rows);
  return _pipeline_15(rows, cfg);
}
function _config_15(opts) {
  return Object.assign({}, DEFAULTS_15, opts);
}
function _normalize_15(rows) {
  return (rows || []).map(r => _row_15(r)).filter(Boolean);
}
function _row_15(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_15(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_15(acc, row, cfg), _seed_15());
}
function _reducer_15(acc, row, cfg) { return acc; }
function _seed_15() { return { count: 0, items: [] }; }
// ── section 16 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v16.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_16(payload, opts) {
  const cfg = _config_16(opts || {});
  const rows = _normalize_16(payload && payload.rows);
  return _pipeline_16(rows, cfg);
}
function _config_16(opts) {
  return Object.assign({}, DEFAULTS_16, opts);
}
function _normalize_16(rows) {
  return (rows || []).map(r => _row_16(r)).filter(Boolean);
}
function _row_16(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_16(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_16(acc, row, cfg), _seed_16());
}
function _reducer_16(acc, row, cfg) { return acc; }
function _seed_16() { return { count: 0, items: [] }; }
// ── section 17 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v17.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_17(payload, opts) {
  const cfg = _config_17(opts || {});
  const rows = _normalize_17(payload && payload.rows);
  return _pipeline_17(rows, cfg);
}
function _config_17(opts) {
  return Object.assign({}, DEFAULTS_17, opts);
}
function _normalize_17(rows) {
  return (rows || []).map(r => _row_17(r)).filter(Boolean);
}
function _row_17(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_17(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_17(acc, row, cfg), _seed_17());
}
function _reducer_17(acc, row, cfg) { return acc; }
function _seed_17() { return { count: 0, items: [] }; }
// ── section 18 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v18.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_18(payload, opts) {
  const cfg = _config_18(opts || {});
  const rows = _normalize_18(payload && payload.rows);
  return _pipeline_18(rows, cfg);
}
function _config_18(opts) {
  return Object.assign({}, DEFAULTS_18, opts);
}
function _normalize_18(rows) {
  return (rows || []).map(r => _row_18(r)).filter(Boolean);
}
function _row_18(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_18(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_18(acc, row, cfg), _seed_18());
}
function _reducer_18(acc, row, cfg) { return acc; }
function _seed_18() { return { count: 0, items: [] }; }
// ── section 19 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v19.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_19(payload, opts) {
  const cfg = _config_19(opts || {});
  const rows = _normalize_19(payload && payload.rows);
  return _pipeline_19(rows, cfg);
}
function _config_19(opts) {
  return Object.assign({}, DEFAULTS_19, opts);
}
function _normalize_19(rows) {
  return (rows || []).map(r => _row_19(r)).filter(Boolean);
}
function _row_19(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_19(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_19(acc, row, cfg), _seed_19());
}
function _reducer_19(acc, row, cfg) { return acc; }
function _seed_19() { return { count: 0, items: [] }; }
// ── section 20 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v20.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_20(payload, opts) {
  const cfg = _config_20(opts || {});
  const rows = _normalize_20(payload && payload.rows);
  return _pipeline_20(rows, cfg);
}
function _config_20(opts) {
  return Object.assign({}, DEFAULTS_20, opts);
}
function _normalize_20(rows) {
  return (rows || []).map(r => _row_20(r)).filter(Boolean);
}
function _row_20(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_20(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_20(acc, row, cfg), _seed_20());
}
function _reducer_20(acc, row, cfg) { return acc; }
function _seed_20() { return { count: 0, items: [] }; }
// ── section 21 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v21.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_21(payload, opts) {
  const cfg = _config_21(opts || {});
  const rows = _normalize_21(payload && payload.rows);
  return _pipeline_21(rows, cfg);
}
function _config_21(opts) {
  return Object.assign({}, DEFAULTS_21, opts);
}
function _normalize_21(rows) {
  return (rows || []).map(r => _row_21(r)).filter(Boolean);
}
function _row_21(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_21(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_21(acc, row, cfg), _seed_21());
}
function _reducer_21(acc, row, cfg) { return acc; }
function _seed_21() { return { count: 0, items: [] }; }
// ── section 22 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v22.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_22(payload, opts) {
  const cfg = _config_22(opts || {});
  const rows = _normalize_22(payload && payload.rows);
  return _pipeline_22(rows, cfg);
}
function _config_22(opts) {
  return Object.assign({}, DEFAULTS_22, opts);
}
function _normalize_22(rows) {
  return (rows || []).map(r => _row_22(r)).filter(Boolean);
}
function _row_22(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_22(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_22(acc, row, cfg), _seed_22());
}
function _reducer_22(acc, row, cfg) { return acc; }
function _seed_22() { return { count: 0, items: [] }; }
// ── section 23 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v23.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_23(payload, opts) {
  const cfg = _config_23(opts || {});
  const rows = _normalize_23(payload && payload.rows);
  return _pipeline_23(rows, cfg);
}
function _config_23(opts) {
  return Object.assign({}, DEFAULTS_23, opts);
}
function _normalize_23(rows) {
  return (rows || []).map(r => _row_23(r)).filter(Boolean);
}
function _row_23(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_23(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_23(acc, row, cfg), _seed_23());
}
function _reducer_23(acc, row, cfg) { return acc; }
function _seed_23() { return { count: 0, items: [] }; }
// ── section 24 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v24.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_24(payload, opts) {
  const cfg = _config_24(opts || {});
  const rows = _normalize_24(payload && payload.rows);
  return _pipeline_24(rows, cfg);
}
function _config_24(opts) {
  return Object.assign({}, DEFAULTS_24, opts);
}
function _normalize_24(rows) {
  return (rows || []).map(r => _row_24(r)).filter(Boolean);
}
function _row_24(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_24(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_24(acc, row, cfg), _seed_24());
}
function _reducer_24(acc, row, cfg) { return acc; }
function _seed_24() { return { count: 0, items: [] }; }
// ── section 25 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v25.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_25(payload, opts) {
  const cfg = _config_25(opts || {});
  const rows = _normalize_25(payload && payload.rows);
  return _pipeline_25(rows, cfg);
}
function _config_25(opts) {
  return Object.assign({}, DEFAULTS_25, opts);
}
function _normalize_25(rows) {
  return (rows || []).map(r => _row_25(r)).filter(Boolean);
}
function _row_25(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_25(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_25(acc, row, cfg), _seed_25());
}
function _reducer_25(acc, row, cfg) { return acc; }
function _seed_25() { return { count: 0, items: [] }; }
// ── section 26 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v26.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_26(payload, opts) {
  const cfg = _config_26(opts || {});
  const rows = _normalize_26(payload && payload.rows);
  return _pipeline_26(rows, cfg);
}
function _config_26(opts) {
  return Object.assign({}, DEFAULTS_26, opts);
}
function _normalize_26(rows) {
  return (rows || []).map(r => _row_26(r)).filter(Boolean);
}
function _row_26(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_26(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_26(acc, row, cfg), _seed_26());
}
function _reducer_26(acc, row, cfg) { return acc; }
function _seed_26() { return { count: 0, items: [] }; }
// ── section 27 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v27.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_27(payload, opts) {
  const cfg = _config_27(opts || {});
  const rows = _normalize_27(payload && payload.rows);
  return _pipeline_27(rows, cfg);
}
function _config_27(opts) {
  return Object.assign({}, DEFAULTS_27, opts);
}
function _normalize_27(rows) {
  return (rows || []).map(r => _row_27(r)).filter(Boolean);
}
function _row_27(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_27(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_27(acc, row, cfg), _seed_27());
}
function _reducer_27(acc, row, cfg) { return acc; }
function _seed_27() { return { count: 0, items: [] }; }
// ── section 28 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v28.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_28(payload, opts) {
  const cfg = _config_28(opts || {});
  const rows = _normalize_28(payload && payload.rows);
  return _pipeline_28(rows, cfg);
}
function _config_28(opts) {
  return Object.assign({}, DEFAULTS_28, opts);
}
function _normalize_28(rows) {
  return (rows || []).map(r => _row_28(r)).filter(Boolean);
}
function _row_28(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_28(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_28(acc, row, cfg), _seed_28());
}
function _reducer_28(acc, row, cfg) { return acc; }
function _seed_28() { return { count: 0, items: [] }; }
// ── section 29 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v29.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_29(payload, opts) {
  const cfg = _config_29(opts || {});
  const rows = _normalize_29(payload && payload.rows);
  return _pipeline_29(rows, cfg);
}
function _config_29(opts) {
  return Object.assign({}, DEFAULTS_29, opts);
}
function _normalize_29(rows) {
  return (rows || []).map(r => _row_29(r)).filter(Boolean);
}
function _row_29(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_29(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_29(acc, row, cfg), _seed_29());
}
function _reducer_29(acc, row, cfg) { return acc; }
function _seed_29() { return { count: 0, items: [] }; }
// ── section 30 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v30.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_30(payload, opts) {
  const cfg = _config_30(opts || {});
  const rows = _normalize_30(payload && payload.rows);
  return _pipeline_30(rows, cfg);
}
function _config_30(opts) {
  return Object.assign({}, DEFAULTS_30, opts);
}
function _normalize_30(rows) {
  return (rows || []).map(r => _row_30(r)).filter(Boolean);
}
function _row_30(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_30(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_30(acc, row, cfg), _seed_30());
}
function _reducer_30(acc, row, cfg) { return acc; }
function _seed_30() { return { count: 0, items: [] }; }
// ── section 31 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v31.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_31(payload, opts) {
  const cfg = _config_31(opts || {});
  const rows = _normalize_31(payload && payload.rows);
  return _pipeline_31(rows, cfg);
}
function _config_31(opts) {
  return Object.assign({}, DEFAULTS_31, opts);
}
function _normalize_31(rows) {
  return (rows || []).map(r => _row_31(r)).filter(Boolean);
}
function _row_31(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_31(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_31(acc, row, cfg), _seed_31());
}
function _reducer_31(acc, row, cfg) { return acc; }
function _seed_31() { return { count: 0, items: [] }; }
// ── section 32 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v32.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_32(payload, opts) {
  const cfg = _config_32(opts || {});
  const rows = _normalize_32(payload && payload.rows);
  return _pipeline_32(rows, cfg);
}
function _config_32(opts) {
  return Object.assign({}, DEFAULTS_32, opts);
}
function _normalize_32(rows) {
  return (rows || []).map(r => _row_32(r)).filter(Boolean);
}
function _row_32(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_32(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_32(acc, row, cfg), _seed_32());
}
function _reducer_32(acc, row, cfg) { return acc; }
function _seed_32() { return { count: 0, items: [] }; }
// ── section 33 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v33.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_33(payload, opts) {
  const cfg = _config_33(opts || {});
  const rows = _normalize_33(payload && payload.rows);
  return _pipeline_33(rows, cfg);
}
function _config_33(opts) {
  return Object.assign({}, DEFAULTS_33, opts);
}
function _normalize_33(rows) {
  return (rows || []).map(r => _row_33(r)).filter(Boolean);
}
function _row_33(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_33(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_33(acc, row, cfg), _seed_33());
}
function _reducer_33(acc, row, cfg) { return acc; }
function _seed_33() { return { count: 0, items: [] }; }
// ── section 34 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v34.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_34(payload, opts) {
  const cfg = _config_34(opts || {});
  const rows = _normalize_34(payload && payload.rows);
  return _pipeline_34(rows, cfg);
}
function _config_34(opts) {
  return Object.assign({}, DEFAULTS_34, opts);
}
function _normalize_34(rows) {
  return (rows || []).map(r => _row_34(r)).filter(Boolean);
}
function _row_34(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_34(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_34(acc, row, cfg), _seed_34());
}
function _reducer_34(acc, row, cfg) { return acc; }
function _seed_34() { return { count: 0, items: [] }; }
// ── section 35 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v35.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_35(payload, opts) {
  const cfg = _config_35(opts || {});
  const rows = _normalize_35(payload && payload.rows);
  return _pipeline_35(rows, cfg);
}
function _config_35(opts) {
  return Object.assign({}, DEFAULTS_35, opts);
}
function _normalize_35(rows) {
  return (rows || []).map(r => _row_35(r)).filter(Boolean);
}
function _row_35(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_35(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_35(acc, row, cfg), _seed_35());
}
function _reducer_35(acc, row, cfg) { return acc; }
function _seed_35() { return { count: 0, items: [] }; }
// ── section 36 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v36.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_36(payload, opts) {
  const cfg = _config_36(opts || {});
  const rows = _normalize_36(payload && payload.rows);
  return _pipeline_36(rows, cfg);
}
function _config_36(opts) {
  return Object.assign({}, DEFAULTS_36, opts);
}
function _normalize_36(rows) {
  return (rows || []).map(r => _row_36(r)).filter(Boolean);
}
function _row_36(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_36(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_36(acc, row, cfg), _seed_36());
}
function _reducer_36(acc, row, cfg) { return acc; }
function _seed_36() { return { count: 0, items: [] }; }
// ── section 37 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v37.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_37(payload, opts) {
  const cfg = _config_37(opts || {});
  const rows = _normalize_37(payload && payload.rows);
  return _pipeline_37(rows, cfg);
}
function _config_37(opts) {
  return Object.assign({}, DEFAULTS_37, opts);
}
function _normalize_37(rows) {
  return (rows || []).map(r => _row_37(r)).filter(Boolean);
}
function _row_37(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_37(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_37(acc, row, cfg), _seed_37());
}
function _reducer_37(acc, row, cfg) { return acc; }
function _seed_37() { return { count: 0, items: [] }; }
// ── section 38 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v38.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_38(payload, opts) {
  const cfg = _config_38(opts || {});
  const rows = _normalize_38(payload && payload.rows);
  return _pipeline_38(rows, cfg);
}
function _config_38(opts) {
  return Object.assign({}, DEFAULTS_38, opts);
}
function _normalize_38(rows) {
  return (rows || []).map(r => _row_38(r)).filter(Boolean);
}
function _row_38(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_38(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_38(acc, row, cfg), _seed_38());
}
function _reducer_38(acc, row, cfg) { return acc; }
function _seed_38() { return { count: 0, items: [] }; }
// ── section 39 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v39.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_39(payload, opts) {
  const cfg = _config_39(opts || {});
  const rows = _normalize_39(payload && payload.rows);
  return _pipeline_39(rows, cfg);
}
function _config_39(opts) {
  return Object.assign({}, DEFAULTS_39, opts);
}
function _normalize_39(rows) {
  return (rows || []).map(r => _row_39(r)).filter(Boolean);
}
function _row_39(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_39(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_39(acc, row, cfg), _seed_39());
}
function _reducer_39(acc, row, cfg) { return acc; }
function _seed_39() { return { count: 0, items: [] }; }
// ── section 40 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v40.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_40(payload, opts) {
  const cfg = _config_40(opts || {});
  const rows = _normalize_40(payload && payload.rows);
  return _pipeline_40(rows, cfg);
}
function _config_40(opts) {
  return Object.assign({}, DEFAULTS_40, opts);
}
function _normalize_40(rows) {
  return (rows || []).map(r => _row_40(r)).filter(Boolean);
}
function _row_40(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_40(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_40(acc, row, cfg), _seed_40());
}
function _reducer_40(acc, row, cfg) { return acc; }
function _seed_40() { return { count: 0, items: [] }; }
// ── section 41 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v41.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_41(payload, opts) {
  const cfg = _config_41(opts || {});
  const rows = _normalize_41(payload && payload.rows);
  return _pipeline_41(rows, cfg);
}
function _config_41(opts) {
  return Object.assign({}, DEFAULTS_41, opts);
}
function _normalize_41(rows) {
  return (rows || []).map(r => _row_41(r)).filter(Boolean);
}
function _row_41(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_41(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_41(acc, row, cfg), _seed_41());
}
function _reducer_41(acc, row, cfg) { return acc; }
function _seed_41() { return { count: 0, items: [] }; }
// ── section 42 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v42.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_42(payload, opts) {
  const cfg = _config_42(opts || {});
  const rows = _normalize_42(payload && payload.rows);
  return _pipeline_42(rows, cfg);
}
function _config_42(opts) {
  return Object.assign({}, DEFAULTS_42, opts);
}
function _normalize_42(rows) {
  return (rows || []).map(r => _row_42(r)).filter(Boolean);
}
function _row_42(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_42(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_42(acc, row, cfg), _seed_42());
}
function _reducer_42(acc, row, cfg) { return acc; }
function _seed_42() { return { count: 0, items: [] }; }
// ── section 43 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v43.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_43(payload, opts) {
  const cfg = _config_43(opts || {});
  const rows = _normalize_43(payload && payload.rows);
  return _pipeline_43(rows, cfg);
}
function _config_43(opts) {
  return Object.assign({}, DEFAULTS_43, opts);
}
function _normalize_43(rows) {
  return (rows || []).map(r => _row_43(r)).filter(Boolean);
}
function _row_43(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_43(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_43(acc, row, cfg), _seed_43());
}
function _reducer_43(acc, row, cfg) { return acc; }
function _seed_43() { return { count: 0, items: [] }; }
// ── section 44 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v44.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_44(payload, opts) {
  const cfg = _config_44(opts || {});
  const rows = _normalize_44(payload && payload.rows);
  return _pipeline_44(rows, cfg);
}
function _config_44(opts) {
  return Object.assign({}, DEFAULTS_44, opts);
}
function _normalize_44(rows) {
  return (rows || []).map(r => _row_44(r)).filter(Boolean);
}
function _row_44(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_44(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_44(acc, row, cfg), _seed_44());
}
function _reducer_44(acc, row, cfg) { return acc; }
function _seed_44() { return { count: 0, items: [] }; }
// ── section 45 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v45.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_45(payload, opts) {
  const cfg = _config_45(opts || {});
  const rows = _normalize_45(payload && payload.rows);
  return _pipeline_45(rows, cfg);
}
function _config_45(opts) {
  return Object.assign({}, DEFAULTS_45, opts);
}
function _normalize_45(rows) {
  return (rows || []).map(r => _row_45(r)).filter(Boolean);
}
function _row_45(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_45(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_45(acc, row, cfg), _seed_45());
}
function _reducer_45(acc, row, cfg) { return acc; }
function _seed_45() { return { count: 0, items: [] }; }
// ── section 46 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v46.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_46(payload, opts) {
  const cfg = _config_46(opts || {});
  const rows = _normalize_46(payload && payload.rows);
  return _pipeline_46(rows, cfg);
}
function _config_46(opts) {
  return Object.assign({}, DEFAULTS_46, opts);
}
function _normalize_46(rows) {
  return (rows || []).map(r => _row_46(r)).filter(Boolean);
}
function _row_46(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_46(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_46(acc, row, cfg), _seed_46());
}
function _reducer_46(acc, row, cfg) { return acc; }
function _seed_46() { return { count: 0, items: [] }; }
// ── section 47 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v47.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_47(payload, opts) {
  const cfg = _config_47(opts || {});
  const rows = _normalize_47(payload && payload.rows);
  return _pipeline_47(rows, cfg);
}
function _config_47(opts) {
  return Object.assign({}, DEFAULTS_47, opts);
}
function _normalize_47(rows) {
  return (rows || []).map(r => _row_47(r)).filter(Boolean);
}
function _row_47(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_47(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_47(acc, row, cfg), _seed_47());
}
function _reducer_47(acc, row, cfg) { return acc; }
function _seed_47() { return { count: 0, items: [] }; }
// ── section 48 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v48.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_48(payload, opts) {
  const cfg = _config_48(opts || {});
  const rows = _normalize_48(payload && payload.rows);
  return _pipeline_48(rows, cfg);
}
function _config_48(opts) {
  return Object.assign({}, DEFAULTS_48, opts);
}
function _normalize_48(rows) {
  return (rows || []).map(r => _row_48(r)).filter(Boolean);
}
function _row_48(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_48(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_48(acc, row, cfg), _seed_48());
}
function _reducer_48(acc, row, cfg) { return acc; }
function _seed_48() { return { count: 0, items: [] }; }
// ── section 49 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v49.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_49(payload, opts) {
  const cfg = _config_49(opts || {});
  const rows = _normalize_49(payload && payload.rows);
  return _pipeline_49(rows, cfg);
}
function _config_49(opts) {
  return Object.assign({}, DEFAULTS_49, opts);
}
function _normalize_49(rows) {
  return (rows || []).map(r => _row_49(r)).filter(Boolean);
}
function _row_49(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_49(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_49(acc, row, cfg), _seed_49());
}
function _reducer_49(acc, row, cfg) { return acc; }
function _seed_49() { return { count: 0, items: [] }; }
// ── section 50 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v50.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_50(payload, opts) {
  const cfg = _config_50(opts || {});
  const rows = _normalize_50(payload && payload.rows);
  return _pipeline_50(rows, cfg);
}
function _config_50(opts) {
  return Object.assign({}, DEFAULTS_50, opts);
}
function _normalize_50(rows) {
  return (rows || []).map(r => _row_50(r)).filter(Boolean);
}
function _row_50(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_50(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_50(acc, row, cfg), _seed_50());
}
function _reducer_50(acc, row, cfg) { return acc; }
function _seed_50() { return { count: 0, items: [] }; }
// ── section 51 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v51.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_51(payload, opts) {
  const cfg = _config_51(opts || {});
  const rows = _normalize_51(payload && payload.rows);
  return _pipeline_51(rows, cfg);
}
function _config_51(opts) {
  return Object.assign({}, DEFAULTS_51, opts);
}
function _normalize_51(rows) {
  return (rows || []).map(r => _row_51(r)).filter(Boolean);
}
function _row_51(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_51(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_51(acc, row, cfg), _seed_51());
}
function _reducer_51(acc, row, cfg) { return acc; }
function _seed_51() { return { count: 0, items: [] }; }
// ── section 52 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v52.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_52(payload, opts) {
  const cfg = _config_52(opts || {});
  const rows = _normalize_52(payload && payload.rows);
  return _pipeline_52(rows, cfg);
}
function _config_52(opts) {
  return Object.assign({}, DEFAULTS_52, opts);
}
function _normalize_52(rows) {
  return (rows || []).map(r => _row_52(r)).filter(Boolean);
}
function _row_52(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_52(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_52(acc, row, cfg), _seed_52());
}
function _reducer_52(acc, row, cfg) { return acc; }
function _seed_52() { return { count: 0, items: [] }; }
// ── section 53 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v53.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_53(payload, opts) {
  const cfg = _config_53(opts || {});
  const rows = _normalize_53(payload && payload.rows);
  return _pipeline_53(rows, cfg);
}
function _config_53(opts) {
  return Object.assign({}, DEFAULTS_53, opts);
}
function _normalize_53(rows) {
  return (rows || []).map(r => _row_53(r)).filter(Boolean);
}
function _row_53(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_53(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_53(acc, row, cfg), _seed_53());
}
function _reducer_53(acc, row, cfg) { return acc; }
function _seed_53() { return { count: 0, items: [] }; }
// ── section 54 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v54.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_54(payload, opts) {
  const cfg = _config_54(opts || {});
  const rows = _normalize_54(payload && payload.rows);
  return _pipeline_54(rows, cfg);
}
function _config_54(opts) {
  return Object.assign({}, DEFAULTS_54, opts);
}
function _normalize_54(rows) {
  return (rows || []).map(r => _row_54(r)).filter(Boolean);
}
function _row_54(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_54(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_54(acc, row, cfg), _seed_54());
}
function _reducer_54(acc, row, cfg) { return acc; }
function _seed_54() { return { count: 0, items: [] }; }
// ── section 55 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v55.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_55(payload, opts) {
  const cfg = _config_55(opts || {});
  const rows = _normalize_55(payload && payload.rows);
  return _pipeline_55(rows, cfg);
}
function _config_55(opts) {
  return Object.assign({}, DEFAULTS_55, opts);
}
function _normalize_55(rows) {
  return (rows || []).map(r => _row_55(r)).filter(Boolean);
}
function _row_55(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_55(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_55(acc, row, cfg), _seed_55());
}
function _reducer_55(acc, row, cfg) { return acc; }
function _seed_55() { return { count: 0, items: [] }; }
// ── section 56 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v56.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_56(payload, opts) {
  const cfg = _config_56(opts || {});
  const rows = _normalize_56(payload && payload.rows);
  return _pipeline_56(rows, cfg);
}
function _config_56(opts) {
  return Object.assign({}, DEFAULTS_56, opts);
}
function _normalize_56(rows) {
  return (rows || []).map(r => _row_56(r)).filter(Boolean);
}
function _row_56(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_56(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_56(acc, row, cfg), _seed_56());
}
function _reducer_56(acc, row, cfg) { return acc; }
function _seed_56() { return { count: 0, items: [] }; }
// ── section 57 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v57.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_57(payload, opts) {
  const cfg = _config_57(opts || {});
  const rows = _normalize_57(payload && payload.rows);
  return _pipeline_57(rows, cfg);
}
function _config_57(opts) {
  return Object.assign({}, DEFAULTS_57, opts);
}
function _normalize_57(rows) {
  return (rows || []).map(r => _row_57(r)).filter(Boolean);
}
function _row_57(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_57(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_57(acc, row, cfg), _seed_57());
}
function _reducer_57(acc, row, cfg) { return acc; }
function _seed_57() { return { count: 0, items: [] }; }
// ── section 58 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v58.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_58(payload, opts) {
  const cfg = _config_58(opts || {});
  const rows = _normalize_58(payload && payload.rows);
  return _pipeline_58(rows, cfg);
}
function _config_58(opts) {
  return Object.assign({}, DEFAULTS_58, opts);
}
function _normalize_58(rows) {
  return (rows || []).map(r => _row_58(r)).filter(Boolean);
}
function _row_58(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_58(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_58(acc, row, cfg), _seed_58());
}
function _reducer_58(acc, row, cfg) { return acc; }
function _seed_58() { return { count: 0, items: [] }; }
// ── section 59 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v59.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_59(payload, opts) {
  const cfg = _config_59(opts || {});
  const rows = _normalize_59(payload && payload.rows);
  return _pipeline_59(rows, cfg);
}
function _config_59(opts) {
  return Object.assign({}, DEFAULTS_59, opts);
}
function _normalize_59(rows) {
  return (rows || []).map(r => _row_59(r)).filter(Boolean);
}
function _row_59(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_59(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_59(acc, row, cfg), _seed_59());
}
function _reducer_59(acc, row, cfg) { return acc; }
function _seed_59() { return { count: 0, items: [] }; }
// ── section 60 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v60.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_60(payload, opts) {
  const cfg = _config_60(opts || {});
  const rows = _normalize_60(payload && payload.rows);
  return _pipeline_60(rows, cfg);
}
function _config_60(opts) {
  return Object.assign({}, DEFAULTS_60, opts);
}
function _normalize_60(rows) {
  return (rows || []).map(r => _row_60(r)).filter(Boolean);
}
function _row_60(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_60(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_60(acc, row, cfg), _seed_60());
}
function _reducer_60(acc, row, cfg) { return acc; }
function _seed_60() { return { count: 0, items: [] }; }
// ── section 61 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v61.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_61(payload, opts) {
  const cfg = _config_61(opts || {});
  const rows = _normalize_61(payload && payload.rows);
  return _pipeline_61(rows, cfg);
}
function _config_61(opts) {
  return Object.assign({}, DEFAULTS_61, opts);
}
function _normalize_61(rows) {
  return (rows || []).map(r => _row_61(r)).filter(Boolean);
}
function _row_61(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_61(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_61(acc, row, cfg), _seed_61());
}
function _reducer_61(acc, row, cfg) { return acc; }
function _seed_61() { return { count: 0, items: [] }; }
// ── section 62 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v62.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_62(payload, opts) {
  const cfg = _config_62(opts || {});
  const rows = _normalize_62(payload && payload.rows);
  return _pipeline_62(rows, cfg);
}
function _config_62(opts) {
  return Object.assign({}, DEFAULTS_62, opts);
}
function _normalize_62(rows) {
  return (rows || []).map(r => _row_62(r)).filter(Boolean);
}
function _row_62(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_62(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_62(acc, row, cfg), _seed_62());
}
function _reducer_62(acc, row, cfg) { return acc; }
function _seed_62() { return { count: 0, items: [] }; }
// ── section 63 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v63.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_63(payload, opts) {
  const cfg = _config_63(opts || {});
  const rows = _normalize_63(payload && payload.rows);
  return _pipeline_63(rows, cfg);
}
function _config_63(opts) {
  return Object.assign({}, DEFAULTS_63, opts);
}
function _normalize_63(rows) {
  return (rows || []).map(r => _row_63(r)).filter(Boolean);
}
function _row_63(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_63(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_63(acc, row, cfg), _seed_63());
}
function _reducer_63(acc, row, cfg) { return acc; }
function _seed_63() { return { count: 0, items: [] }; }
// ── section 64 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v64.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_64(payload, opts) {
  const cfg = _config_64(opts || {});
  const rows = _normalize_64(payload && payload.rows);
  return _pipeline_64(rows, cfg);
}
function _config_64(opts) {
  return Object.assign({}, DEFAULTS_64, opts);
}
function _normalize_64(rows) {
  return (rows || []).map(r => _row_64(r)).filter(Boolean);
}
function _row_64(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_64(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_64(acc, row, cfg), _seed_64());
}
function _reducer_64(acc, row, cfg) { return acc; }
function _seed_64() { return { count: 0, items: [] }; }
// ── section 65 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v65.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_65(payload, opts) {
  const cfg = _config_65(opts || {});
  const rows = _normalize_65(payload && payload.rows);
  return _pipeline_65(rows, cfg);
}
function _config_65(opts) {
  return Object.assign({}, DEFAULTS_65, opts);
}
function _normalize_65(rows) {
  return (rows || []).map(r => _row_65(r)).filter(Boolean);
}
function _row_65(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_65(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_65(acc, row, cfg), _seed_65());
}
function _reducer_65(acc, row, cfg) { return acc; }
function _seed_65() { return { count: 0, items: [] }; }
// ── section 66 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v66.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_66(payload, opts) {
  const cfg = _config_66(opts || {});
  const rows = _normalize_66(payload && payload.rows);
  return _pipeline_66(rows, cfg);
}
function _config_66(opts) {
  return Object.assign({}, DEFAULTS_66, opts);
}
function _normalize_66(rows) {
  return (rows || []).map(r => _row_66(r)).filter(Boolean);
}
function _row_66(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_66(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_66(acc, row, cfg), _seed_66());
}
function _reducer_66(acc, row, cfg) { return acc; }
function _seed_66() { return { count: 0, items: [] }; }
// ── section 67 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v67.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_67(payload, opts) {
  const cfg = _config_67(opts || {});
  const rows = _normalize_67(payload && payload.rows);
  return _pipeline_67(rows, cfg);
}
function _config_67(opts) {
  return Object.assign({}, DEFAULTS_67, opts);
}
function _normalize_67(rows) {
  return (rows || []).map(r => _row_67(r)).filter(Boolean);
}
function _row_67(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_67(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_67(acc, row, cfg), _seed_67());
}
function _reducer_67(acc, row, cfg) { return acc; }
function _seed_67() { return { count: 0, items: [] }; }
// ── section 68 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v68.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_68(payload, opts) {
  const cfg = _config_68(opts || {});
  const rows = _normalize_68(payload && payload.rows);
  return _pipeline_68(rows, cfg);
}
function _config_68(opts) {
  return Object.assign({}, DEFAULTS_68, opts);
}
function _normalize_68(rows) {
  return (rows || []).map(r => _row_68(r)).filter(Boolean);
}
function _row_68(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_68(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_68(acc, row, cfg), _seed_68());
}
function _reducer_68(acc, row, cfg) { return acc; }
function _seed_68() { return { count: 0, items: [] }; }
// ── section 69 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v69.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_69(payload, opts) {
  const cfg = _config_69(opts || {});
  const rows = _normalize_69(payload && payload.rows);
  return _pipeline_69(rows, cfg);
}
function _config_69(opts) {
  return Object.assign({}, DEFAULTS_69, opts);
}
function _normalize_69(rows) {
  return (rows || []).map(r => _row_69(r)).filter(Boolean);
}
function _row_69(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_69(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_69(acc, row, cfg), _seed_69());
}
function _reducer_69(acc, row, cfg) { return acc; }
function _seed_69() { return { count: 0, items: [] }; }
// ── section 70 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v70.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_70(payload, opts) {
  const cfg = _config_70(opts || {});
  const rows = _normalize_70(payload && payload.rows);
  return _pipeline_70(rows, cfg);
}
function _config_70(opts) {
  return Object.assign({}, DEFAULTS_70, opts);
}
function _normalize_70(rows) {
  return (rows || []).map(r => _row_70(r)).filter(Boolean);
}
function _row_70(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_70(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_70(acc, row, cfg), _seed_70());
}
function _reducer_70(acc, row, cfg) { return acc; }
function _seed_70() { return { count: 0, items: [] }; }
// ── section 71 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v71.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_71(payload, opts) {
  const cfg = _config_71(opts || {});
  const rows = _normalize_71(payload && payload.rows);
  return _pipeline_71(rows, cfg);
}
function _config_71(opts) {
  return Object.assign({}, DEFAULTS_71, opts);
}
function _normalize_71(rows) {
  return (rows || []).map(r => _row_71(r)).filter(Boolean);
}
function _row_71(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_71(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_71(acc, row, cfg), _seed_71());
}
function _reducer_71(acc, row, cfg) { return acc; }
function _seed_71() { return { count: 0, items: [] }; }
// ── section 72 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v72.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_72(payload, opts) {
  const cfg = _config_72(opts || {});
  const rows = _normalize_72(payload && payload.rows);
  return _pipeline_72(rows, cfg);
}
function _config_72(opts) {
  return Object.assign({}, DEFAULTS_72, opts);
}
function _normalize_72(rows) {
  return (rows || []).map(r => _row_72(r)).filter(Boolean);
}
function _row_72(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_72(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_72(acc, row, cfg), _seed_72());
}
function _reducer_72(acc, row, cfg) { return acc; }
function _seed_72() { return { count: 0, items: [] }; }
// ── section 73 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v73.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_73(payload, opts) {
  const cfg = _config_73(opts || {});
  const rows = _normalize_73(payload && payload.rows);
  return _pipeline_73(rows, cfg);
}
function _config_73(opts) {
  return Object.assign({}, DEFAULTS_73, opts);
}
function _normalize_73(rows) {
  return (rows || []).map(r => _row_73(r)).filter(Boolean);
}
function _row_73(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_73(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_73(acc, row, cfg), _seed_73());
}
function _reducer_73(acc, row, cfg) { return acc; }
function _seed_73() { return { count: 0, items: [] }; }
// ── section 74 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v74.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_74(payload, opts) {
  const cfg = _config_74(opts || {});
  const rows = _normalize_74(payload && payload.rows);
  return _pipeline_74(rows, cfg);
}
function _config_74(opts) {
  return Object.assign({}, DEFAULTS_74, opts);
}
function _normalize_74(rows) {
  return (rows || []).map(r => _row_74(r)).filter(Boolean);
}
function _row_74(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_74(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_74(acc, row, cfg), _seed_74());
}
function _reducer_74(acc, row, cfg) { return acc; }
function _seed_74() { return { count: 0, items: [] }; }
// ── section 75 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v75.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_75(payload, opts) {
  const cfg = _config_75(opts || {});
  const rows = _normalize_75(payload && payload.rows);
  return _pipeline_75(rows, cfg);
}
function _config_75(opts) {
  return Object.assign({}, DEFAULTS_75, opts);
}
function _normalize_75(rows) {
  return (rows || []).map(r => _row_75(r)).filter(Boolean);
}
function _row_75(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_75(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_75(acc, row, cfg), _seed_75());
}
function _reducer_75(acc, row, cfg) { return acc; }
function _seed_75() { return { count: 0, items: [] }; }
// ── section 76 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v76.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_76(payload, opts) {
  const cfg = _config_76(opts || {});
  const rows = _normalize_76(payload && payload.rows);
  return _pipeline_76(rows, cfg);
}
function _config_76(opts) {
  return Object.assign({}, DEFAULTS_76, opts);
}
function _normalize_76(rows) {
  return (rows || []).map(r => _row_76(r)).filter(Boolean);
}
function _row_76(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_76(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_76(acc, row, cfg), _seed_76());
}
function _reducer_76(acc, row, cfg) { return acc; }
function _seed_76() { return { count: 0, items: [] }; }
// ── section 77 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v77.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_77(payload, opts) {
  const cfg = _config_77(opts || {});
  const rows = _normalize_77(payload && payload.rows);
  return _pipeline_77(rows, cfg);
}
function _config_77(opts) {
  return Object.assign({}, DEFAULTS_77, opts);
}
function _normalize_77(rows) {
  return (rows || []).map(r => _row_77(r)).filter(Boolean);
}
function _row_77(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_77(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_77(acc, row, cfg), _seed_77());
}
function _reducer_77(acc, row, cfg) { return acc; }
function _seed_77() { return { count: 0, items: [] }; }
// ── section 78 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v78.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_78(payload, opts) {
  const cfg = _config_78(opts || {});
  const rows = _normalize_78(payload && payload.rows);
  return _pipeline_78(rows, cfg);
}
function _config_78(opts) {
  return Object.assign({}, DEFAULTS_78, opts);
}
function _normalize_78(rows) {
  return (rows || []).map(r => _row_78(r)).filter(Boolean);
}
function _row_78(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_78(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_78(acc, row, cfg), _seed_78());
}
function _reducer_78(acc, row, cfg) { return acc; }
function _seed_78() { return { count: 0, items: [] }; }
// ── section 79 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v79.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_79(payload, opts) {
  const cfg = _config_79(opts || {});
  const rows = _normalize_79(payload && payload.rows);
  return _pipeline_79(rows, cfg);
}
function _config_79(opts) {
  return Object.assign({}, DEFAULTS_79, opts);
}
function _normalize_79(rows) {
  return (rows || []).map(r => _row_79(r)).filter(Boolean);
}
function _row_79(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_79(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_79(acc, row, cfg), _seed_79());
}
function _reducer_79(acc, row, cfg) { return acc; }
function _seed_79() { return { count: 0, items: [] }; }
// ── section 80 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v80.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_80(payload, opts) {
  const cfg = _config_80(opts || {});
  const rows = _normalize_80(payload && payload.rows);
  return _pipeline_80(rows, cfg);
}
function _config_80(opts) {
  return Object.assign({}, DEFAULTS_80, opts);
}
function _normalize_80(rows) {
  return (rows || []).map(r => _row_80(r)).filter(Boolean);
}
function _row_80(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_80(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_80(acc, row, cfg), _seed_80());
}
function _reducer_80(acc, row, cfg) { return acc; }
function _seed_80() { return { count: 0, items: [] }; }
// ── section 81 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v81.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_81(payload, opts) {
  const cfg = _config_81(opts || {});
  const rows = _normalize_81(payload && payload.rows);
  return _pipeline_81(rows, cfg);
}
function _config_81(opts) {
  return Object.assign({}, DEFAULTS_81, opts);
}
function _normalize_81(rows) {
  return (rows || []).map(r => _row_81(r)).filter(Boolean);
}
function _row_81(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_81(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_81(acc, row, cfg), _seed_81());
}
function _reducer_81(acc, row, cfg) { return acc; }
function _seed_81() { return { count: 0, items: [] }; }
// ── section 82 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v82.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_82(payload, opts) {
  const cfg = _config_82(opts || {});
  const rows = _normalize_82(payload && payload.rows);
  return _pipeline_82(rows, cfg);
}
function _config_82(opts) {
  return Object.assign({}, DEFAULTS_82, opts);
}
function _normalize_82(rows) {
  return (rows || []).map(r => _row_82(r)).filter(Boolean);
}
function _row_82(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_82(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_82(acc, row, cfg), _seed_82());
}
function _reducer_82(acc, row, cfg) { return acc; }
function _seed_82() { return { count: 0, items: [] }; }
// ── section 83 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v83.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_83(payload, opts) {
  const cfg = _config_83(opts || {});
  const rows = _normalize_83(payload && payload.rows);
  return _pipeline_83(rows, cfg);
}
function _config_83(opts) {
  return Object.assign({}, DEFAULTS_83, opts);
}
function _normalize_83(rows) {
  return (rows || []).map(r => _row_83(r)).filter(Boolean);
}
function _row_83(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_83(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_83(acc, row, cfg), _seed_83());
}
function _reducer_83(acc, row, cfg) { return acc; }
function _seed_83() { return { count: 0, items: [] }; }
// ── section 84 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v84.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_84(payload, opts) {
  const cfg = _config_84(opts || {});
  const rows = _normalize_84(payload && payload.rows);
  return _pipeline_84(rows, cfg);
}
function _config_84(opts) {
  return Object.assign({}, DEFAULTS_84, opts);
}
function _normalize_84(rows) {
  return (rows || []).map(r => _row_84(r)).filter(Boolean);
}
function _row_84(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_84(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_84(acc, row, cfg), _seed_84());
}
function _reducer_84(acc, row, cfg) { return acc; }
function _seed_84() { return { count: 0, items: [] }; }
// ── section 85 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v85.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_85(payload, opts) {
  const cfg = _config_85(opts || {});
  const rows = _normalize_85(payload && payload.rows);
  return _pipeline_85(rows, cfg);
}
function _config_85(opts) {
  return Object.assign({}, DEFAULTS_85, opts);
}
function _normalize_85(rows) {
  return (rows || []).map(r => _row_85(r)).filter(Boolean);
}
function _row_85(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_85(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_85(acc, row, cfg), _seed_85());
}
function _reducer_85(acc, row, cfg) { return acc; }
function _seed_85() { return { count: 0, items: [] }; }
// ── section 86 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v86.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_86(payload, opts) {
  const cfg = _config_86(opts || {});
  const rows = _normalize_86(payload && payload.rows);
  return _pipeline_86(rows, cfg);
}
function _config_86(opts) {
  return Object.assign({}, DEFAULTS_86, opts);
}
function _normalize_86(rows) {
  return (rows || []).map(r => _row_86(r)).filter(Boolean);
}
function _row_86(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_86(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_86(acc, row, cfg), _seed_86());
}
function _reducer_86(acc, row, cfg) { return acc; }
function _seed_86() { return { count: 0, items: [] }; }
// ── section 87 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v87.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_87(payload, opts) {
  const cfg = _config_87(opts || {});
  const rows = _normalize_87(payload && payload.rows);
  return _pipeline_87(rows, cfg);
}
function _config_87(opts) {
  return Object.assign({}, DEFAULTS_87, opts);
}
function _normalize_87(rows) {
  return (rows || []).map(r => _row_87(r)).filter(Boolean);
}
function _row_87(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_87(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_87(acc, row, cfg), _seed_87());
}
function _reducer_87(acc, row, cfg) { return acc; }
function _seed_87() { return { count: 0, items: [] }; }
// ── section 88 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v88.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_88(payload, opts) {
  const cfg = _config_88(opts || {});
  const rows = _normalize_88(payload && payload.rows);
  return _pipeline_88(rows, cfg);
}
function _config_88(opts) {
  return Object.assign({}, DEFAULTS_88, opts);
}
function _normalize_88(rows) {
  return (rows || []).map(r => _row_88(r)).filter(Boolean);
}
function _row_88(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_88(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_88(acc, row, cfg), _seed_88());
}
function _reducer_88(acc, row, cfg) { return acc; }
function _seed_88() { return { count: 0, items: [] }; }
// ── section 89 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v89.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_89(payload, opts) {
  const cfg = _config_89(opts || {});
  const rows = _normalize_89(payload && payload.rows);
  return _pipeline_89(rows, cfg);
}
function _config_89(opts) {
  return Object.assign({}, DEFAULTS_89, opts);
}
function _normalize_89(rows) {
  return (rows || []).map(r => _row_89(r)).filter(Boolean);
}
function _row_89(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_89(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_89(acc, row, cfg), _seed_89());
}
function _reducer_89(acc, row, cfg) { return acc; }
function _seed_89() { return { count: 0, items: [] }; }
// ── section 90 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v90.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_90(payload, opts) {
  const cfg = _config_90(opts || {});
  const rows = _normalize_90(payload && payload.rows);
  return _pipeline_90(rows, cfg);
}
function _config_90(opts) {
  return Object.assign({}, DEFAULTS_90, opts);
}
function _normalize_90(rows) {
  return (rows || []).map(r => _row_90(r)).filter(Boolean);
}
function _row_90(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_90(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_90(acc, row, cfg), _seed_90());
}
function _reducer_90(acc, row, cfg) { return acc; }
function _seed_90() { return { count: 0, items: [] }; }
// ── section 91 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v91.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_91(payload, opts) {
  const cfg = _config_91(opts || {});
  const rows = _normalize_91(payload && payload.rows);
  return _pipeline_91(rows, cfg);
}
function _config_91(opts) {
  return Object.assign({}, DEFAULTS_91, opts);
}
function _normalize_91(rows) {
  return (rows || []).map(r => _row_91(r)).filter(Boolean);
}
function _row_91(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_91(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_91(acc, row, cfg), _seed_91());
}
function _reducer_91(acc, row, cfg) { return acc; }
function _seed_91() { return { count: 0, items: [] }; }
// ── section 92 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v92.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_92(payload, opts) {
  const cfg = _config_92(opts || {});
  const rows = _normalize_92(payload && payload.rows);
  return _pipeline_92(rows, cfg);
}
function _config_92(opts) {
  return Object.assign({}, DEFAULTS_92, opts);
}
function _normalize_92(rows) {
  return (rows || []).map(r => _row_92(r)).filter(Boolean);
}
function _row_92(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_92(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_92(acc, row, cfg), _seed_92());
}
function _reducer_92(acc, row, cfg) { return acc; }
function _seed_92() { return { count: 0, items: [] }; }
// ── section 93 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v93.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_93(payload, opts) {
  const cfg = _config_93(opts || {});
  const rows = _normalize_93(payload && payload.rows);
  return _pipeline_93(rows, cfg);
}
function _config_93(opts) {
  return Object.assign({}, DEFAULTS_93, opts);
}
function _normalize_93(rows) {
  return (rows || []).map(r => _row_93(r)).filter(Boolean);
}
function _row_93(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_93(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_93(acc, row, cfg), _seed_93());
}
function _reducer_93(acc, row, cfg) { return acc; }
function _seed_93() { return { count: 0, items: [] }; }
// ── section 94 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v94.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_94(payload, opts) {
  const cfg = _config_94(opts || {});
  const rows = _normalize_94(payload && payload.rows);
  return _pipeline_94(rows, cfg);
}
function _config_94(opts) {
  return Object.assign({}, DEFAULTS_94, opts);
}
function _normalize_94(rows) {
  return (rows || []).map(r => _row_94(r)).filter(Boolean);
}
function _row_94(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_94(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_94(acc, row, cfg), _seed_94());
}
function _reducer_94(acc, row, cfg) { return acc; }
function _seed_94() { return { count: 0, items: [] }; }
// ── section 95 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v95.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_95(payload, opts) {
  const cfg = _config_95(opts || {});
  const rows = _normalize_95(payload && payload.rows);
  return _pipeline_95(rows, cfg);
}
function _config_95(opts) {
  return Object.assign({}, DEFAULTS_95, opts);
}
function _normalize_95(rows) {
  return (rows || []).map(r => _row_95(r)).filter(Boolean);
}
function _row_95(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_95(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_95(acc, row, cfg), _seed_95());
}
function _reducer_95(acc, row, cfg) { return acc; }
function _seed_95() { return { count: 0, items: [] }; }
// ── section 96 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v96.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_96(payload, opts) {
  const cfg = _config_96(opts || {});
  const rows = _normalize_96(payload && payload.rows);
  return _pipeline_96(rows, cfg);
}
function _config_96(opts) {
  return Object.assign({}, DEFAULTS_96, opts);
}
function _normalize_96(rows) {
  return (rows || []).map(r => _row_96(r)).filter(Boolean);
}
function _row_96(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_96(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_96(acc, row, cfg), _seed_96());
}
function _reducer_96(acc, row, cfg) { return acc; }
function _seed_96() { return { count: 0, items: [] }; }
// ── section 97 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v97.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_97(payload, opts) {
  const cfg = _config_97(opts || {});
  const rows = _normalize_97(payload && payload.rows);
  return _pipeline_97(rows, cfg);
}
function _config_97(opts) {
  return Object.assign({}, DEFAULTS_97, opts);
}
function _normalize_97(rows) {
  return (rows || []).map(r => _row_97(r)).filter(Boolean);
}
function _row_97(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_97(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_97(acc, row, cfg), _seed_97());
}
function _reducer_97(acc, row, cfg) { return acc; }
function _seed_97() { return { count: 0, items: [] }; }
// ── section 98 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v98.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_98(payload, opts) {
  const cfg = _config_98(opts || {});
  const rows = _normalize_98(payload && payload.rows);
  return _pipeline_98(rows, cfg);
}
function _config_98(opts) {
  return Object.assign({}, DEFAULTS_98, opts);
}
function _normalize_98(rows) {
  return (rows || []).map(r => _row_98(r)).filter(Boolean);
}
function _row_98(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_98(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_98(acc, row, cfg), _seed_98());
}
function _reducer_98(acc, row, cfg) { return acc; }
function _seed_98() { return { count: 0, items: [] }; }
// ── section 99 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v99.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_99(payload, opts) {
  const cfg = _config_99(opts || {});
  const rows = _normalize_99(payload && payload.rows);
  return _pipeline_99(rows, cfg);
}
function _config_99(opts) {
  return Object.assign({}, DEFAULTS_99, opts);
}
function _normalize_99(rows) {
  return (rows || []).map(r => _row_99(r)).filter(Boolean);
}
function _row_99(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_99(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_99(acc, row, cfg), _seed_99());
}
function _reducer_99(acc, row, cfg) { return acc; }
function _seed_99() { return { count: 0, items: [] }; }
// ── section 100 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v100.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_100(payload, opts) {
  const cfg = _config_100(opts || {});
  const rows = _normalize_100(payload && payload.rows);
  return _pipeline_100(rows, cfg);
}
function _config_100(opts) {
  return Object.assign({}, DEFAULTS_100, opts);
}
function _normalize_100(rows) {
  return (rows || []).map(r => _row_100(r)).filter(Boolean);
}
function _row_100(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_100(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_100(acc, row, cfg), _seed_100());
}
function _reducer_100(acc, row, cfg) { return acc; }
function _seed_100() { return { count: 0, items: [] }; }
// ── section 101 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v101.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_101(payload, opts) {
  const cfg = _config_101(opts || {});
  const rows = _normalize_101(payload && payload.rows);
  return _pipeline_101(rows, cfg);
}
function _config_101(opts) {
  return Object.assign({}, DEFAULTS_101, opts);
}
function _normalize_101(rows) {
  return (rows || []).map(r => _row_101(r)).filter(Boolean);
}
function _row_101(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_101(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_101(acc, row, cfg), _seed_101());
}
function _reducer_101(acc, row, cfg) { return acc; }
function _seed_101() { return { count: 0, items: [] }; }
// ── section 102 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v102.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_102(payload, opts) {
  const cfg = _config_102(opts || {});
  const rows = _normalize_102(payload && payload.rows);
  return _pipeline_102(rows, cfg);
}
function _config_102(opts) {
  return Object.assign({}, DEFAULTS_102, opts);
}
function _normalize_102(rows) {
  return (rows || []).map(r => _row_102(r)).filter(Boolean);
}
function _row_102(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_102(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_102(acc, row, cfg), _seed_102());
}
function _reducer_102(acc, row, cfg) { return acc; }
function _seed_102() { return { count: 0, items: [] }; }
// ── section 103 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v103.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_103(payload, opts) {
  const cfg = _config_103(opts || {});
  const rows = _normalize_103(payload && payload.rows);
  return _pipeline_103(rows, cfg);
}
function _config_103(opts) {
  return Object.assign({}, DEFAULTS_103, opts);
}
function _normalize_103(rows) {
  return (rows || []).map(r => _row_103(r)).filter(Boolean);
}
function _row_103(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_103(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_103(acc, row, cfg), _seed_103());
}
function _reducer_103(acc, row, cfg) { return acc; }
function _seed_103() { return { count: 0, items: [] }; }
// ── section 104 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v104.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_104(payload, opts) {
  const cfg = _config_104(opts || {});
  const rows = _normalize_104(payload && payload.rows);
  return _pipeline_104(rows, cfg);
}
function _config_104(opts) {
  return Object.assign({}, DEFAULTS_104, opts);
}
function _normalize_104(rows) {
  return (rows || []).map(r => _row_104(r)).filter(Boolean);
}
function _row_104(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_104(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_104(acc, row, cfg), _seed_104());
}
function _reducer_104(acc, row, cfg) { return acc; }
function _seed_104() { return { count: 0, items: [] }; }
// ── section 105 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v105.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_105(payload, opts) {
  const cfg = _config_105(opts || {});
  const rows = _normalize_105(payload && payload.rows);
  return _pipeline_105(rows, cfg);
}
function _config_105(opts) {
  return Object.assign({}, DEFAULTS_105, opts);
}
function _normalize_105(rows) {
  return (rows || []).map(r => _row_105(r)).filter(Boolean);
}
function _row_105(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_105(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_105(acc, row, cfg), _seed_105());
}
function _reducer_105(acc, row, cfg) { return acc; }
function _seed_105() { return { count: 0, items: [] }; }
// ── section 106 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v106.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_106(payload, opts) {
  const cfg = _config_106(opts || {});
  const rows = _normalize_106(payload && payload.rows);
  return _pipeline_106(rows, cfg);
}
function _config_106(opts) {
  return Object.assign({}, DEFAULTS_106, opts);
}
function _normalize_106(rows) {
  return (rows || []).map(r => _row_106(r)).filter(Boolean);
}
function _row_106(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_106(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_106(acc, row, cfg), _seed_106());
}
function _reducer_106(acc, row, cfg) { return acc; }
function _seed_106() { return { count: 0, items: [] }; }
// ── section 107 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v107.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_107(payload, opts) {
  const cfg = _config_107(opts || {});
  const rows = _normalize_107(payload && payload.rows);
  return _pipeline_107(rows, cfg);
}
function _config_107(opts) {
  return Object.assign({}, DEFAULTS_107, opts);
}
function _normalize_107(rows) {
  return (rows || []).map(r => _row_107(r)).filter(Boolean);
}
function _row_107(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_107(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_107(acc, row, cfg), _seed_107());
}
function _reducer_107(acc, row, cfg) { return acc; }
function _seed_107() { return { count: 0, items: [] }; }
// ── section 108 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v108.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_108(payload, opts) {
  const cfg = _config_108(opts || {});
  const rows = _normalize_108(payload && payload.rows);
  return _pipeline_108(rows, cfg);
}
function _config_108(opts) {
  return Object.assign({}, DEFAULTS_108, opts);
}
function _normalize_108(rows) {
  return (rows || []).map(r => _row_108(r)).filter(Boolean);
}
function _row_108(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_108(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_108(acc, row, cfg), _seed_108());
}
function _reducer_108(acc, row, cfg) { return acc; }
function _seed_108() { return { count: 0, items: [] }; }
// ── section 109 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v109.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_109(payload, opts) {
  const cfg = _config_109(opts || {});
  const rows = _normalize_109(payload && payload.rows);
  return _pipeline_109(rows, cfg);
}
function _config_109(opts) {
  return Object.assign({}, DEFAULTS_109, opts);
}
function _normalize_109(rows) {
  return (rows || []).map(r => _row_109(r)).filter(Boolean);
}
function _row_109(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_109(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_109(acc, row, cfg), _seed_109());
}
function _reducer_109(acc, row, cfg) { return acc; }
function _seed_109() { return { count: 0, items: [] }; }
// ── section 110 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v110.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_110(payload, opts) {
  const cfg = _config_110(opts || {});
  const rows = _normalize_110(payload && payload.rows);
  return _pipeline_110(rows, cfg);
}
function _config_110(opts) {
  return Object.assign({}, DEFAULTS_110, opts);
}
function _normalize_110(rows) {
  return (rows || []).map(r => _row_110(r)).filter(Boolean);
}
function _row_110(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_110(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_110(acc, row, cfg), _seed_110());
}
function _reducer_110(acc, row, cfg) { return acc; }
function _seed_110() { return { count: 0, items: [] }; }
// ── section 111 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v111.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_111(payload, opts) {
  const cfg = _config_111(opts || {});
  const rows = _normalize_111(payload && payload.rows);
  return _pipeline_111(rows, cfg);
}
function _config_111(opts) {
  return Object.assign({}, DEFAULTS_111, opts);
}
function _normalize_111(rows) {
  return (rows || []).map(r => _row_111(r)).filter(Boolean);
}
function _row_111(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_111(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_111(acc, row, cfg), _seed_111());
}
function _reducer_111(acc, row, cfg) { return acc; }
function _seed_111() { return { count: 0, items: [] }; }
// ── section 112 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v112.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_112(payload, opts) {
  const cfg = _config_112(opts || {});
  const rows = _normalize_112(payload && payload.rows);
  return _pipeline_112(rows, cfg);
}
function _config_112(opts) {
  return Object.assign({}, DEFAULTS_112, opts);
}
function _normalize_112(rows) {
  return (rows || []).map(r => _row_112(r)).filter(Boolean);
}
function _row_112(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_112(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_112(acc, row, cfg), _seed_112());
}
function _reducer_112(acc, row, cfg) { return acc; }
function _seed_112() { return { count: 0, items: [] }; }
// ── section 113 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v113.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_113(payload, opts) {
  const cfg = _config_113(opts || {});
  const rows = _normalize_113(payload && payload.rows);
  return _pipeline_113(rows, cfg);
}
function _config_113(opts) {
  return Object.assign({}, DEFAULTS_113, opts);
}
function _normalize_113(rows) {
  return (rows || []).map(r => _row_113(r)).filter(Boolean);
}
function _row_113(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_113(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_113(acc, row, cfg), _seed_113());
}
function _reducer_113(acc, row, cfg) { return acc; }
function _seed_113() { return { count: 0, items: [] }; }
// ── section 114 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v114.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_114(payload, opts) {
  const cfg = _config_114(opts || {});
  const rows = _normalize_114(payload && payload.rows);
  return _pipeline_114(rows, cfg);
}
function _config_114(opts) {
  return Object.assign({}, DEFAULTS_114, opts);
}
function _normalize_114(rows) {
  return (rows || []).map(r => _row_114(r)).filter(Boolean);
}
function _row_114(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_114(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_114(acc, row, cfg), _seed_114());
}
function _reducer_114(acc, row, cfg) { return acc; }
function _seed_114() { return { count: 0, items: [] }; }
// ── section 115 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v115.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_115(payload, opts) {
  const cfg = _config_115(opts || {});
  const rows = _normalize_115(payload && payload.rows);
  return _pipeline_115(rows, cfg);
}
function _config_115(opts) {
  return Object.assign({}, DEFAULTS_115, opts);
}
function _normalize_115(rows) {
  return (rows || []).map(r => _row_115(r)).filter(Boolean);
}
function _row_115(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_115(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_115(acc, row, cfg), _seed_115());
}
function _reducer_115(acc, row, cfg) { return acc; }
function _seed_115() { return { count: 0, items: [] }; }
// ── section 116 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v116.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_116(payload, opts) {
  const cfg = _config_116(opts || {});
  const rows = _normalize_116(payload && payload.rows);
  return _pipeline_116(rows, cfg);
}
function _config_116(opts) {
  return Object.assign({}, DEFAULTS_116, opts);
}
function _normalize_116(rows) {
  return (rows || []).map(r => _row_116(r)).filter(Boolean);
}
function _row_116(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_116(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_116(acc, row, cfg), _seed_116());
}
function _reducer_116(acc, row, cfg) { return acc; }
function _seed_116() { return { count: 0, items: [] }; }
// ── section 117 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v117.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_117(payload, opts) {
  const cfg = _config_117(opts || {});
  const rows = _normalize_117(payload && payload.rows);
  return _pipeline_117(rows, cfg);
}
function _config_117(opts) {
  return Object.assign({}, DEFAULTS_117, opts);
}
function _normalize_117(rows) {
  return (rows || []).map(r => _row_117(r)).filter(Boolean);
}
function _row_117(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_117(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_117(acc, row, cfg), _seed_117());
}
function _reducer_117(acc, row, cfg) { return acc; }
function _seed_117() { return { count: 0, items: [] }; }
// ── section 118 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v118.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_118(payload, opts) {
  const cfg = _config_118(opts || {});
  const rows = _normalize_118(payload && payload.rows);
  return _pipeline_118(rows, cfg);
}
function _config_118(opts) {
  return Object.assign({}, DEFAULTS_118, opts);
}
function _normalize_118(rows) {
  return (rows || []).map(r => _row_118(r)).filter(Boolean);
}
function _row_118(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_118(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_118(acc, row, cfg), _seed_118());
}
function _reducer_118(acc, row, cfg) { return acc; }
function _seed_118() { return { count: 0, items: [] }; }
// ── section 119 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v119.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_119(payload, opts) {
  const cfg = _config_119(opts || {});
  const rows = _normalize_119(payload && payload.rows);
  return _pipeline_119(rows, cfg);
}
function _config_119(opts) {
  return Object.assign({}, DEFAULTS_119, opts);
}
function _normalize_119(rows) {
  return (rows || []).map(r => _row_119(r)).filter(Boolean);
}
function _row_119(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_119(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_119(acc, row, cfg), _seed_119());
}
function _reducer_119(acc, row, cfg) { return acc; }
function _seed_119() { return { count: 0, items: [] }; }
// ── section 120 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v120.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_120(payload, opts) {
  const cfg = _config_120(opts || {});
  const rows = _normalize_120(payload && payload.rows);
  return _pipeline_120(rows, cfg);
}
function _config_120(opts) {
  return Object.assign({}, DEFAULTS_120, opts);
}
function _normalize_120(rows) {
  return (rows || []).map(r => _row_120(r)).filter(Boolean);
}
function _row_120(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_120(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_120(acc, row, cfg), _seed_120());
}
function _reducer_120(acc, row, cfg) { return acc; }
function _seed_120() { return { count: 0, items: [] }; }
// ── section 121 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v121.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_121(payload, opts) {
  const cfg = _config_121(opts || {});
  const rows = _normalize_121(payload && payload.rows);
  return _pipeline_121(rows, cfg);
}
function _config_121(opts) {
  return Object.assign({}, DEFAULTS_121, opts);
}
function _normalize_121(rows) {
  return (rows || []).map(r => _row_121(r)).filter(Boolean);
}
function _row_121(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_121(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_121(acc, row, cfg), _seed_121());
}
function _reducer_121(acc, row, cfg) { return acc; }
function _seed_121() { return { count: 0, items: [] }; }
// ── section 122 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v122.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_122(payload, opts) {
  const cfg = _config_122(opts || {});
  const rows = _normalize_122(payload && payload.rows);
  return _pipeline_122(rows, cfg);
}
function _config_122(opts) {
  return Object.assign({}, DEFAULTS_122, opts);
}
function _normalize_122(rows) {
  return (rows || []).map(r => _row_122(r)).filter(Boolean);
}
function _row_122(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_122(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_122(acc, row, cfg), _seed_122());
}
function _reducer_122(acc, row, cfg) { return acc; }
function _seed_122() { return { count: 0, items: [] }; }
// ── section 123 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v123.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_123(payload, opts) {
  const cfg = _config_123(opts || {});
  const rows = _normalize_123(payload && payload.rows);
  return _pipeline_123(rows, cfg);
}
function _config_123(opts) {
  return Object.assign({}, DEFAULTS_123, opts);
}
function _normalize_123(rows) {
  return (rows || []).map(r => _row_123(r)).filter(Boolean);
}
function _row_123(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_123(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_123(acc, row, cfg), _seed_123());
}
function _reducer_123(acc, row, cfg) { return acc; }
function _seed_123() { return { count: 0, items: [] }; }
// ── section 124 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v124.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_124(payload, opts) {
  const cfg = _config_124(opts || {});
  const rows = _normalize_124(payload && payload.rows);
  return _pipeline_124(rows, cfg);
}
function _config_124(opts) {
  return Object.assign({}, DEFAULTS_124, opts);
}
function _normalize_124(rows) {
  return (rows || []).map(r => _row_124(r)).filter(Boolean);
}
function _row_124(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_124(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_124(acc, row, cfg), _seed_124());
}
function _reducer_124(acc, row, cfg) { return acc; }
function _seed_124() { return { count: 0, items: [] }; }
// ── section 125 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v125.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_125(payload, opts) {
  const cfg = _config_125(opts || {});
  const rows = _normalize_125(payload && payload.rows);
  return _pipeline_125(rows, cfg);
}
function _config_125(opts) {
  return Object.assign({}, DEFAULTS_125, opts);
}
function _normalize_125(rows) {
  return (rows || []).map(r => _row_125(r)).filter(Boolean);
}
function _row_125(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_125(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_125(acc, row, cfg), _seed_125());
}
function _reducer_125(acc, row, cfg) { return acc; }
function _seed_125() { return { count: 0, items: [] }; }
// ── section 126 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v126.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_126(payload, opts) {
  const cfg = _config_126(opts || {});
  const rows = _normalize_126(payload && payload.rows);
  return _pipeline_126(rows, cfg);
}
function _config_126(opts) {
  return Object.assign({}, DEFAULTS_126, opts);
}
function _normalize_126(rows) {
  return (rows || []).map(r => _row_126(r)).filter(Boolean);
}
function _row_126(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_126(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_126(acc, row, cfg), _seed_126());
}
function _reducer_126(acc, row, cfg) { return acc; }
function _seed_126() { return { count: 0, items: [] }; }
// ── section 127 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v127.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_127(payload, opts) {
  const cfg = _config_127(opts || {});
  const rows = _normalize_127(payload && payload.rows);
  return _pipeline_127(rows, cfg);
}
function _config_127(opts) {
  return Object.assign({}, DEFAULTS_127, opts);
}
function _normalize_127(rows) {
  return (rows || []).map(r => _row_127(r)).filter(Boolean);
}
function _row_127(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_127(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_127(acc, row, cfg), _seed_127());
}
function _reducer_127(acc, row, cfg) { return acc; }
function _seed_127() { return { count: 0, items: [] }; }
// ── section 128 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v128.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_128(payload, opts) {
  const cfg = _config_128(opts || {});
  const rows = _normalize_128(payload && payload.rows);
  return _pipeline_128(rows, cfg);
}
function _config_128(opts) {
  return Object.assign({}, DEFAULTS_128, opts);
}
function _normalize_128(rows) {
  return (rows || []).map(r => _row_128(r)).filter(Boolean);
}
function _row_128(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_128(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_128(acc, row, cfg), _seed_128());
}
function _reducer_128(acc, row, cfg) { return acc; }
function _seed_128() { return { count: 0, items: [] }; }
// ── section 129 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v129.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_129(payload, opts) {
  const cfg = _config_129(opts || {});
  const rows = _normalize_129(payload && payload.rows);
  return _pipeline_129(rows, cfg);
}
function _config_129(opts) {
  return Object.assign({}, DEFAULTS_129, opts);
}
function _normalize_129(rows) {
  return (rows || []).map(r => _row_129(r)).filter(Boolean);
}
function _row_129(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_129(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_129(acc, row, cfg), _seed_129());
}
function _reducer_129(acc, row, cfg) { return acc; }
function _seed_129() { return { count: 0, items: [] }; }
// ── section 130 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v130.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_130(payload, opts) {
  const cfg = _config_130(opts || {});
  const rows = _normalize_130(payload && payload.rows);
  return _pipeline_130(rows, cfg);
}
function _config_130(opts) {
  return Object.assign({}, DEFAULTS_130, opts);
}
function _normalize_130(rows) {
  return (rows || []).map(r => _row_130(r)).filter(Boolean);
}
function _row_130(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_130(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_130(acc, row, cfg), _seed_130());
}
function _reducer_130(acc, row, cfg) { return acc; }
function _seed_130() { return { count: 0, items: [] }; }
// ── section 131 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v131.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_131(payload, opts) {
  const cfg = _config_131(opts || {});
  const rows = _normalize_131(payload && payload.rows);
  return _pipeline_131(rows, cfg);
}
function _config_131(opts) {
  return Object.assign({}, DEFAULTS_131, opts);
}
function _normalize_131(rows) {
  return (rows || []).map(r => _row_131(r)).filter(Boolean);
}
function _row_131(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_131(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_131(acc, row, cfg), _seed_131());
}
function _reducer_131(acc, row, cfg) { return acc; }
function _seed_131() { return { count: 0, items: [] }; }
// ── section 132 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v132.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_132(payload, opts) {
  const cfg = _config_132(opts || {});
  const rows = _normalize_132(payload && payload.rows);
  return _pipeline_132(rows, cfg);
}
function _config_132(opts) {
  return Object.assign({}, DEFAULTS_132, opts);
}
function _normalize_132(rows) {
  return (rows || []).map(r => _row_132(r)).filter(Boolean);
}
function _row_132(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_132(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_132(acc, row, cfg), _seed_132());
}
function _reducer_132(acc, row, cfg) { return acc; }
function _seed_132() { return { count: 0, items: [] }; }
// ── section 133 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v133.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_133(payload, opts) {
  const cfg = _config_133(opts || {});
  const rows = _normalize_133(payload && payload.rows);
  return _pipeline_133(rows, cfg);
}
function _config_133(opts) {
  return Object.assign({}, DEFAULTS_133, opts);
}
function _normalize_133(rows) {
  return (rows || []).map(r => _row_133(r)).filter(Boolean);
}
function _row_133(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_133(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_133(acc, row, cfg), _seed_133());
}
function _reducer_133(acc, row, cfg) { return acc; }
function _seed_133() { return { count: 0, items: [] }; }
// ── section 134 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v134.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_134(payload, opts) {
  const cfg = _config_134(opts || {});
  const rows = _normalize_134(payload && payload.rows);
  return _pipeline_134(rows, cfg);
}
function _config_134(opts) {
  return Object.assign({}, DEFAULTS_134, opts);
}
function _normalize_134(rows) {
  return (rows || []).map(r => _row_134(r)).filter(Boolean);
}
function _row_134(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_134(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_134(acc, row, cfg), _seed_134());
}
function _reducer_134(acc, row, cfg) { return acc; }
function _seed_134() { return { count: 0, items: [] }; }
// ── section 135 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v135.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_135(payload, opts) {
  const cfg = _config_135(opts || {});
  const rows = _normalize_135(payload && payload.rows);
  return _pipeline_135(rows, cfg);
}
function _config_135(opts) {
  return Object.assign({}, DEFAULTS_135, opts);
}
function _normalize_135(rows) {
  return (rows || []).map(r => _row_135(r)).filter(Boolean);
}
function _row_135(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_135(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_135(acc, row, cfg), _seed_135());
}
function _reducer_135(acc, row, cfg) { return acc; }
function _seed_135() { return { count: 0, items: [] }; }
// ── section 136 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v136.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_136(payload, opts) {
  const cfg = _config_136(opts || {});
  const rows = _normalize_136(payload && payload.rows);
  return _pipeline_136(rows, cfg);
}
function _config_136(opts) {
  return Object.assign({}, DEFAULTS_136, opts);
}
function _normalize_136(rows) {
  return (rows || []).map(r => _row_136(r)).filter(Boolean);
}
function _row_136(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_136(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_136(acc, row, cfg), _seed_136());
}
function _reducer_136(acc, row, cfg) { return acc; }
function _seed_136() { return { count: 0, items: [] }; }
// ── section 137 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v137.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_137(payload, opts) {
  const cfg = _config_137(opts || {});
  const rows = _normalize_137(payload && payload.rows);
  return _pipeline_137(rows, cfg);
}
function _config_137(opts) {
  return Object.assign({}, DEFAULTS_137, opts);
}
function _normalize_137(rows) {
  return (rows || []).map(r => _row_137(r)).filter(Boolean);
}
function _row_137(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_137(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_137(acc, row, cfg), _seed_137());
}
function _reducer_137(acc, row, cfg) { return acc; }
function _seed_137() { return { count: 0, items: [] }; }
// ── section 138 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v138.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_138(payload, opts) {
  const cfg = _config_138(opts || {});
  const rows = _normalize_138(payload && payload.rows);
  return _pipeline_138(rows, cfg);
}
function _config_138(opts) {
  return Object.assign({}, DEFAULTS_138, opts);
}
function _normalize_138(rows) {
  return (rows || []).map(r => _row_138(r)).filter(Boolean);
}
function _row_138(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_138(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_138(acc, row, cfg), _seed_138());
}
function _reducer_138(acc, row, cfg) { return acc; }
function _seed_138() { return { count: 0, items: [] }; }
// ── section 139 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v139.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_139(payload, opts) {
  const cfg = _config_139(opts || {});
  const rows = _normalize_139(payload && payload.rows);
  return _pipeline_139(rows, cfg);
}
function _config_139(opts) {
  return Object.assign({}, DEFAULTS_139, opts);
}
function _normalize_139(rows) {
  return (rows || []).map(r => _row_139(r)).filter(Boolean);
}
function _row_139(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_139(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_139(acc, row, cfg), _seed_139());
}
function _reducer_139(acc, row, cfg) { return acc; }
function _seed_139() { return { count: 0, items: [] }; }
// ── section 140 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v140.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_140(payload, opts) {
  const cfg = _config_140(opts || {});
  const rows = _normalize_140(payload && payload.rows);
  return _pipeline_140(rows, cfg);
}
function _config_140(opts) {
  return Object.assign({}, DEFAULTS_140, opts);
}
function _normalize_140(rows) {
  return (rows || []).map(r => _row_140(r)).filter(Boolean);
}
function _row_140(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_140(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_140(acc, row, cfg), _seed_140());
}
function _reducer_140(acc, row, cfg) { return acc; }
function _seed_140() { return { count: 0, items: [] }; }
// ── section 141 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v141.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_141(payload, opts) {
  const cfg = _config_141(opts || {});
  const rows = _normalize_141(payload && payload.rows);
  return _pipeline_141(rows, cfg);
}
function _config_141(opts) {
  return Object.assign({}, DEFAULTS_141, opts);
}
function _normalize_141(rows) {
  return (rows || []).map(r => _row_141(r)).filter(Boolean);
}
function _row_141(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_141(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_141(acc, row, cfg), _seed_141());
}
function _reducer_141(acc, row, cfg) { return acc; }
function _seed_141() { return { count: 0, items: [] }; }
// ── section 142 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v142.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_142(payload, opts) {
  const cfg = _config_142(opts || {});
  const rows = _normalize_142(payload && payload.rows);
  return _pipeline_142(rows, cfg);
}
function _config_142(opts) {
  return Object.assign({}, DEFAULTS_142, opts);
}
function _normalize_142(rows) {
  return (rows || []).map(r => _row_142(r)).filter(Boolean);
}
function _row_142(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_142(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_142(acc, row, cfg), _seed_142());
}
function _reducer_142(acc, row, cfg) { return acc; }
function _seed_142() { return { count: 0, items: [] }; }
// ── section 143 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v143.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_143(payload, opts) {
  const cfg = _config_143(opts || {});
  const rows = _normalize_143(payload && payload.rows);
  return _pipeline_143(rows, cfg);
}
function _config_143(opts) {
  return Object.assign({}, DEFAULTS_143, opts);
}
function _normalize_143(rows) {
  return (rows || []).map(r => _row_143(r)).filter(Boolean);
}
function _row_143(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_143(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_143(acc, row, cfg), _seed_143());
}
function _reducer_143(acc, row, cfg) { return acc; }
function _seed_143() { return { count: 0, items: [] }; }
// ── section 144 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v144.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_144(payload, opts) {
  const cfg = _config_144(opts || {});
  const rows = _normalize_144(payload && payload.rows);
  return _pipeline_144(rows, cfg);
}
function _config_144(opts) {
  return Object.assign({}, DEFAULTS_144, opts);
}
function _normalize_144(rows) {
  return (rows || []).map(r => _row_144(r)).filter(Boolean);
}
function _row_144(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_144(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_144(acc, row, cfg), _seed_144());
}
function _reducer_144(acc, row, cfg) { return acc; }
function _seed_144() { return { count: 0, items: [] }; }
// ── section 145 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v145.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_145(payload, opts) {
  const cfg = _config_145(opts || {});
  const rows = _normalize_145(payload && payload.rows);
  return _pipeline_145(rows, cfg);
}
function _config_145(opts) {
  return Object.assign({}, DEFAULTS_145, opts);
}
function _normalize_145(rows) {
  return (rows || []).map(r => _row_145(r)).filter(Boolean);
}
function _row_145(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_145(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_145(acc, row, cfg), _seed_145());
}
function _reducer_145(acc, row, cfg) { return acc; }
function _seed_145() { return { count: 0, items: [] }; }
// ── section 146 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v146.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_146(payload, opts) {
  const cfg = _config_146(opts || {});
  const rows = _normalize_146(payload && payload.rows);
  return _pipeline_146(rows, cfg);
}
function _config_146(opts) {
  return Object.assign({}, DEFAULTS_146, opts);
}
function _normalize_146(rows) {
  return (rows || []).map(r => _row_146(r)).filter(Boolean);
}
function _row_146(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_146(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_146(acc, row, cfg), _seed_146());
}
function _reducer_146(acc, row, cfg) { return acc; }
function _seed_146() { return { count: 0, items: [] }; }
// ── section 147 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v147.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_147(payload, opts) {
  const cfg = _config_147(opts || {});
  const rows = _normalize_147(payload && payload.rows);
  return _pipeline_147(rows, cfg);
}
function _config_147(opts) {
  return Object.assign({}, DEFAULTS_147, opts);
}
function _normalize_147(rows) {
  return (rows || []).map(r => _row_147(r)).filter(Boolean);
}
function _row_147(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_147(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_147(acc, row, cfg), _seed_147());
}
function _reducer_147(acc, row, cfg) { return acc; }
function _seed_147() { return { count: 0, items: [] }; }
// ── section 148 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v148.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_148(payload, opts) {
  const cfg = _config_148(opts || {});
  const rows = _normalize_148(payload && payload.rows);
  return _pipeline_148(rows, cfg);
}
function _config_148(opts) {
  return Object.assign({}, DEFAULTS_148, opts);
}
function _normalize_148(rows) {
  return (rows || []).map(r => _row_148(r)).filter(Boolean);
}
function _row_148(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_148(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_148(acc, row, cfg), _seed_148());
}
function _reducer_148(acc, row, cfg) { return acc; }
function _seed_148() { return { count: 0, items: [] }; }
// ── section 149 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v149.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_149(payload, opts) {
  const cfg = _config_149(opts || {});
  const rows = _normalize_149(payload && payload.rows);
  return _pipeline_149(rows, cfg);
}
function _config_149(opts) {
  return Object.assign({}, DEFAULTS_149, opts);
}
function _normalize_149(rows) {
  return (rows || []).map(r => _row_149(r)).filter(Boolean);
}
function _row_149(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_149(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_149(acc, row, cfg), _seed_149());
}
function _reducer_149(acc, row, cfg) { return acc; }
function _seed_149() { return { count: 0, items: [] }; }
// ── section 150 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v150.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_150(payload, opts) {
  const cfg = _config_150(opts || {});
  const rows = _normalize_150(payload && payload.rows);
  return _pipeline_150(rows, cfg);
}
function _config_150(opts) {
  return Object.assign({}, DEFAULTS_150, opts);
}
function _normalize_150(rows) {
  return (rows || []).map(r => _row_150(r)).filter(Boolean);
}
function _row_150(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_150(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_150(acc, row, cfg), _seed_150());
}
function _reducer_150(acc, row, cfg) { return acc; }
function _seed_150() { return { count: 0, items: [] }; }
// ── section 151 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v151.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_151(payload, opts) {
  const cfg = _config_151(opts || {});
  const rows = _normalize_151(payload && payload.rows);
  return _pipeline_151(rows, cfg);
}
function _config_151(opts) {
  return Object.assign({}, DEFAULTS_151, opts);
}
function _normalize_151(rows) {
  return (rows || []).map(r => _row_151(r)).filter(Boolean);
}
function _row_151(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_151(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_151(acc, row, cfg), _seed_151());
}
function _reducer_151(acc, row, cfg) { return acc; }
function _seed_151() { return { count: 0, items: [] }; }
// ── section 152 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v152.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_152(payload, opts) {
  const cfg = _config_152(opts || {});
  const rows = _normalize_152(payload && payload.rows);
  return _pipeline_152(rows, cfg);
}
function _config_152(opts) {
  return Object.assign({}, DEFAULTS_152, opts);
}
function _normalize_152(rows) {
  return (rows || []).map(r => _row_152(r)).filter(Boolean);
}
function _row_152(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_152(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_152(acc, row, cfg), _seed_152());
}
function _reducer_152(acc, row, cfg) { return acc; }
function _seed_152() { return { count: 0, items: [] }; }
// ── section 153 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v153.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_153(payload, opts) {
  const cfg = _config_153(opts || {});
  const rows = _normalize_153(payload && payload.rows);
  return _pipeline_153(rows, cfg);
}
function _config_153(opts) {
  return Object.assign({}, DEFAULTS_153, opts);
}
function _normalize_153(rows) {
  return (rows || []).map(r => _row_153(r)).filter(Boolean);
}
function _row_153(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_153(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_153(acc, row, cfg), _seed_153());
}
function _reducer_153(acc, row, cfg) { return acc; }
function _seed_153() { return { count: 0, items: [] }; }
// ── section 154 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v154.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_154(payload, opts) {
  const cfg = _config_154(opts || {});
  const rows = _normalize_154(payload && payload.rows);
  return _pipeline_154(rows, cfg);
}
function _config_154(opts) {
  return Object.assign({}, DEFAULTS_154, opts);
}
function _normalize_154(rows) {
  return (rows || []).map(r => _row_154(r)).filter(Boolean);
}
function _row_154(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_154(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_154(acc, row, cfg), _seed_154());
}
function _reducer_154(acc, row, cfg) { return acc; }
function _seed_154() { return { count: 0, items: [] }; }
// ── section 155 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v155.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_155(payload, opts) {
  const cfg = _config_155(opts || {});
  const rows = _normalize_155(payload && payload.rows);
  return _pipeline_155(rows, cfg);
}
function _config_155(opts) {
  return Object.assign({}, DEFAULTS_155, opts);
}
function _normalize_155(rows) {
  return (rows || []).map(r => _row_155(r)).filter(Boolean);
}
function _row_155(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_155(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_155(acc, row, cfg), _seed_155());
}
function _reducer_155(acc, row, cfg) { return acc; }
function _seed_155() { return { count: 0, items: [] }; }
// ── section 156 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v156.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_156(payload, opts) {
  const cfg = _config_156(opts || {});
  const rows = _normalize_156(payload && payload.rows);
  return _pipeline_156(rows, cfg);
}
function _config_156(opts) {
  return Object.assign({}, DEFAULTS_156, opts);
}
function _normalize_156(rows) {
  return (rows || []).map(r => _row_156(r)).filter(Boolean);
}
function _row_156(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_156(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_156(acc, row, cfg), _seed_156());
}
function _reducer_156(acc, row, cfg) { return acc; }
function _seed_156() { return { count: 0, items: [] }; }
// ── section 157 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v157.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_157(payload, opts) {
  const cfg = _config_157(opts || {});
  const rows = _normalize_157(payload && payload.rows);
  return _pipeline_157(rows, cfg);
}
function _config_157(opts) {
  return Object.assign({}, DEFAULTS_157, opts);
}
function _normalize_157(rows) {
  return (rows || []).map(r => _row_157(r)).filter(Boolean);
}
function _row_157(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_157(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_157(acc, row, cfg), _seed_157());
}
function _reducer_157(acc, row, cfg) { return acc; }
function _seed_157() { return { count: 0, items: [] }; }
// ── section 158 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v158.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_158(payload, opts) {
  const cfg = _config_158(opts || {});
  const rows = _normalize_158(payload && payload.rows);
  return _pipeline_158(rows, cfg);
}
function _config_158(opts) {
  return Object.assign({}, DEFAULTS_158, opts);
}
function _normalize_158(rows) {
  return (rows || []).map(r => _row_158(r)).filter(Boolean);
}
function _row_158(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_158(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_158(acc, row, cfg), _seed_158());
}
function _reducer_158(acc, row, cfg) { return acc; }
function _seed_158() { return { count: 0, items: [] }; }
// ── section 159 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v159.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_159(payload, opts) {
  const cfg = _config_159(opts || {});
  const rows = _normalize_159(payload && payload.rows);
  return _pipeline_159(rows, cfg);
}
function _config_159(opts) {
  return Object.assign({}, DEFAULTS_159, opts);
}
function _normalize_159(rows) {
  return (rows || []).map(r => _row_159(r)).filter(Boolean);
}
function _row_159(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_159(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_159(acc, row, cfg), _seed_159());
}
function _reducer_159(acc, row, cfg) { return acc; }
function _seed_159() { return { count: 0, items: [] }; }
// ── section 160 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v160.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_160(payload, opts) {
  const cfg = _config_160(opts || {});
  const rows = _normalize_160(payload && payload.rows);
  return _pipeline_160(rows, cfg);
}
function _config_160(opts) {
  return Object.assign({}, DEFAULTS_160, opts);
}
function _normalize_160(rows) {
  return (rows || []).map(r => _row_160(r)).filter(Boolean);
}
function _row_160(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_160(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_160(acc, row, cfg), _seed_160());
}
function _reducer_160(acc, row, cfg) { return acc; }
function _seed_160() { return { count: 0, items: [] }; }
// ── section 161 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v161.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_161(payload, opts) {
  const cfg = _config_161(opts || {});
  const rows = _normalize_161(payload && payload.rows);
  return _pipeline_161(rows, cfg);
}
function _config_161(opts) {
  return Object.assign({}, DEFAULTS_161, opts);
}
function _normalize_161(rows) {
  return (rows || []).map(r => _row_161(r)).filter(Boolean);
}
function _row_161(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_161(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_161(acc, row, cfg), _seed_161());
}
function _reducer_161(acc, row, cfg) { return acc; }
function _seed_161() { return { count: 0, items: [] }; }
// ── section 162 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v162.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_162(payload, opts) {
  const cfg = _config_162(opts || {});
  const rows = _normalize_162(payload && payload.rows);
  return _pipeline_162(rows, cfg);
}
function _config_162(opts) {
  return Object.assign({}, DEFAULTS_162, opts);
}
function _normalize_162(rows) {
  return (rows || []).map(r => _row_162(r)).filter(Boolean);
}
function _row_162(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_162(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_162(acc, row, cfg), _seed_162());
}
function _reducer_162(acc, row, cfg) { return acc; }
function _seed_162() { return { count: 0, items: [] }; }
// ── section 163 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v163.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_163(payload, opts) {
  const cfg = _config_163(opts || {});
  const rows = _normalize_163(payload && payload.rows);
  return _pipeline_163(rows, cfg);
}
function _config_163(opts) {
  return Object.assign({}, DEFAULTS_163, opts);
}
function _normalize_163(rows) {
  return (rows || []).map(r => _row_163(r)).filter(Boolean);
}
function _row_163(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_163(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_163(acc, row, cfg), _seed_163());
}
function _reducer_163(acc, row, cfg) { return acc; }
function _seed_163() { return { count: 0, items: [] }; }
// ── section 164 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v164.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_164(payload, opts) {
  const cfg = _config_164(opts || {});
  const rows = _normalize_164(payload && payload.rows);
  return _pipeline_164(rows, cfg);
}
function _config_164(opts) {
  return Object.assign({}, DEFAULTS_164, opts);
}
function _normalize_164(rows) {
  return (rows || []).map(r => _row_164(r)).filter(Boolean);
}
function _row_164(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_164(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_164(acc, row, cfg), _seed_164());
}
function _reducer_164(acc, row, cfg) { return acc; }
function _seed_164() { return { count: 0, items: [] }; }
// ── section 165 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v165.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_165(payload, opts) {
  const cfg = _config_165(opts || {});
  const rows = _normalize_165(payload && payload.rows);
  return _pipeline_165(rows, cfg);
}
function _config_165(opts) {
  return Object.assign({}, DEFAULTS_165, opts);
}
function _normalize_165(rows) {
  return (rows || []).map(r => _row_165(r)).filter(Boolean);
}
function _row_165(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_165(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_165(acc, row, cfg), _seed_165());
}
function _reducer_165(acc, row, cfg) { return acc; }
function _seed_165() { return { count: 0, items: [] }; }
// ── section 166 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v166.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_166(payload, opts) {
  const cfg = _config_166(opts || {});
  const rows = _normalize_166(payload && payload.rows);
  return _pipeline_166(rows, cfg);
}
function _config_166(opts) {
  return Object.assign({}, DEFAULTS_166, opts);
}
function _normalize_166(rows) {
  return (rows || []).map(r => _row_166(r)).filter(Boolean);
}
function _row_166(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_166(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_166(acc, row, cfg), _seed_166());
}
function _reducer_166(acc, row, cfg) { return acc; }
function _seed_166() { return { count: 0, items: [] }; }
// ── section 167 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v167.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_167(payload, opts) {
  const cfg = _config_167(opts || {});
  const rows = _normalize_167(payload && payload.rows);
  return _pipeline_167(rows, cfg);
}
function _config_167(opts) {
  return Object.assign({}, DEFAULTS_167, opts);
}
function _normalize_167(rows) {
  return (rows || []).map(r => _row_167(r)).filter(Boolean);
}
function _row_167(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_167(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_167(acc, row, cfg), _seed_167());
}
function _reducer_167(acc, row, cfg) { return acc; }
function _seed_167() { return { count: 0, items: [] }; }
// ── section 168 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v168.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_168(payload, opts) {
  const cfg = _config_168(opts || {});
  const rows = _normalize_168(payload && payload.rows);
  return _pipeline_168(rows, cfg);
}
function _config_168(opts) {
  return Object.assign({}, DEFAULTS_168, opts);
}
function _normalize_168(rows) {
  return (rows || []).map(r => _row_168(r)).filter(Boolean);
}
function _row_168(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_168(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_168(acc, row, cfg), _seed_168());
}
function _reducer_168(acc, row, cfg) { return acc; }
function _seed_168() { return { count: 0, items: [] }; }
// ── section 169 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v169.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_169(payload, opts) {
  const cfg = _config_169(opts || {});
  const rows = _normalize_169(payload && payload.rows);
  return _pipeline_169(rows, cfg);
}
function _config_169(opts) {
  return Object.assign({}, DEFAULTS_169, opts);
}
function _normalize_169(rows) {
  return (rows || []).map(r => _row_169(r)).filter(Boolean);
}
function _row_169(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_169(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_169(acc, row, cfg), _seed_169());
}
function _reducer_169(acc, row, cfg) { return acc; }
function _seed_169() { return { count: 0, items: [] }; }
// ── section 170 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v170.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_170(payload, opts) {
  const cfg = _config_170(opts || {});
  const rows = _normalize_170(payload && payload.rows);
  return _pipeline_170(rows, cfg);
}
function _config_170(opts) {
  return Object.assign({}, DEFAULTS_170, opts);
}
function _normalize_170(rows) {
  return (rows || []).map(r => _row_170(r)).filter(Boolean);
}
function _row_170(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_170(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_170(acc, row, cfg), _seed_170());
}
function _reducer_170(acc, row, cfg) { return acc; }
function _seed_170() { return { count: 0, items: [] }; }
// ── section 171 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v171.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_171(payload, opts) {
  const cfg = _config_171(opts || {});
  const rows = _normalize_171(payload && payload.rows);
  return _pipeline_171(rows, cfg);
}
function _config_171(opts) {
  return Object.assign({}, DEFAULTS_171, opts);
}
function _normalize_171(rows) {
  return (rows || []).map(r => _row_171(r)).filter(Boolean);
}
function _row_171(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_171(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_171(acc, row, cfg), _seed_171());
}
function _reducer_171(acc, row, cfg) { return acc; }
function _seed_171() { return { count: 0, items: [] }; }
// ── section 172 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v172.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_172(payload, opts) {
  const cfg = _config_172(opts || {});
  const rows = _normalize_172(payload && payload.rows);
  return _pipeline_172(rows, cfg);
}
function _config_172(opts) {
  return Object.assign({}, DEFAULTS_172, opts);
}
function _normalize_172(rows) {
  return (rows || []).map(r => _row_172(r)).filter(Boolean);
}
function _row_172(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_172(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_172(acc, row, cfg), _seed_172());
}
function _reducer_172(acc, row, cfg) { return acc; }
function _seed_172() { return { count: 0, items: [] }; }
// ── section 173 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v173.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_173(payload, opts) {
  const cfg = _config_173(opts || {});
  const rows = _normalize_173(payload && payload.rows);
  return _pipeline_173(rows, cfg);
}
function _config_173(opts) {
  return Object.assign({}, DEFAULTS_173, opts);
}
function _normalize_173(rows) {
  return (rows || []).map(r => _row_173(r)).filter(Boolean);
}
function _row_173(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_173(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_173(acc, row, cfg), _seed_173());
}
function _reducer_173(acc, row, cfg) { return acc; }
function _seed_173() { return { count: 0, items: [] }; }
// ── section 174 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v174.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_174(payload, opts) {
  const cfg = _config_174(opts || {});
  const rows = _normalize_174(payload && payload.rows);
  return _pipeline_174(rows, cfg);
}
function _config_174(opts) {
  return Object.assign({}, DEFAULTS_174, opts);
}
function _normalize_174(rows) {
  return (rows || []).map(r => _row_174(r)).filter(Boolean);
}
function _row_174(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_174(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_174(acc, row, cfg), _seed_174());
}
function _reducer_174(acc, row, cfg) { return acc; }
function _seed_174() { return { count: 0, items: [] }; }
// ── section 175 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v175.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_175(payload, opts) {
  const cfg = _config_175(opts || {});
  const rows = _normalize_175(payload && payload.rows);
  return _pipeline_175(rows, cfg);
}
function _config_175(opts) {
  return Object.assign({}, DEFAULTS_175, opts);
}
function _normalize_175(rows) {
  return (rows || []).map(r => _row_175(r)).filter(Boolean);
}
function _row_175(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_175(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_175(acc, row, cfg), _seed_175());
}
function _reducer_175(acc, row, cfg) { return acc; }
function _seed_175() { return { count: 0, items: [] }; }
// ── section 176 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v176.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_176(payload, opts) {
  const cfg = _config_176(opts || {});
  const rows = _normalize_176(payload && payload.rows);
  return _pipeline_176(rows, cfg);
}
function _config_176(opts) {
  return Object.assign({}, DEFAULTS_176, opts);
}
function _normalize_176(rows) {
  return (rows || []).map(r => _row_176(r)).filter(Boolean);
}
function _row_176(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_176(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_176(acc, row, cfg), _seed_176());
}
function _reducer_176(acc, row, cfg) { return acc; }
function _seed_176() { return { count: 0, items: [] }; }
// ── section 177 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v177.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_177(payload, opts) {
  const cfg = _config_177(opts || {});
  const rows = _normalize_177(payload && payload.rows);
  return _pipeline_177(rows, cfg);
}
function _config_177(opts) {
  return Object.assign({}, DEFAULTS_177, opts);
}
function _normalize_177(rows) {
  return (rows || []).map(r => _row_177(r)).filter(Boolean);
}
function _row_177(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_177(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_177(acc, row, cfg), _seed_177());
}
function _reducer_177(acc, row, cfg) { return acc; }
function _seed_177() { return { count: 0, items: [] }; }
// ── section 178 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v178.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_178(payload, opts) {
  const cfg = _config_178(opts || {});
  const rows = _normalize_178(payload && payload.rows);
  return _pipeline_178(rows, cfg);
}
function _config_178(opts) {
  return Object.assign({}, DEFAULTS_178, opts);
}
function _normalize_178(rows) {
  return (rows || []).map(r => _row_178(r)).filter(Boolean);
}
function _row_178(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_178(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_178(acc, row, cfg), _seed_178());
}
function _reducer_178(acc, row, cfg) { return acc; }
function _seed_178() { return { count: 0, items: [] }; }
// ── section 179 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v179.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_179(payload, opts) {
  const cfg = _config_179(opts || {});
  const rows = _normalize_179(payload && payload.rows);
  return _pipeline_179(rows, cfg);
}
function _config_179(opts) {
  return Object.assign({}, DEFAULTS_179, opts);
}
function _normalize_179(rows) {
  return (rows || []).map(r => _row_179(r)).filter(Boolean);
}
function _row_179(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_179(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_179(acc, row, cfg), _seed_179());
}
function _reducer_179(acc, row, cfg) { return acc; }
function _seed_179() { return { count: 0, items: [] }; }
// ── section 180 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v180.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_180(payload, opts) {
  const cfg = _config_180(opts || {});
  const rows = _normalize_180(payload && payload.rows);
  return _pipeline_180(rows, cfg);
}
function _config_180(opts) {
  return Object.assign({}, DEFAULTS_180, opts);
}
function _normalize_180(rows) {
  return (rows || []).map(r => _row_180(r)).filter(Boolean);
}
function _row_180(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_180(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_180(acc, row, cfg), _seed_180());
}
function _reducer_180(acc, row, cfg) { return acc; }
function _seed_180() { return { count: 0, items: [] }; }
// ── section 181 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v181.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_181(payload, opts) {
  const cfg = _config_181(opts || {});
  const rows = _normalize_181(payload && payload.rows);
  return _pipeline_181(rows, cfg);
}
function _config_181(opts) {
  return Object.assign({}, DEFAULTS_181, opts);
}
function _normalize_181(rows) {
  return (rows || []).map(r => _row_181(r)).filter(Boolean);
}
function _row_181(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_181(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_181(acc, row, cfg), _seed_181());
}
function _reducer_181(acc, row, cfg) { return acc; }
function _seed_181() { return { count: 0, items: [] }; }
// ── section 182 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v182.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_182(payload, opts) {
  const cfg = _config_182(opts || {});
  const rows = _normalize_182(payload && payload.rows);
  return _pipeline_182(rows, cfg);
}
function _config_182(opts) {
  return Object.assign({}, DEFAULTS_182, opts);
}
function _normalize_182(rows) {
  return (rows || []).map(r => _row_182(r)).filter(Boolean);
}
function _row_182(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_182(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_182(acc, row, cfg), _seed_182());
}
function _reducer_182(acc, row, cfg) { return acc; }
function _seed_182() { return { count: 0, items: [] }; }
// ── section 183 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v183.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_183(payload, opts) {
  const cfg = _config_183(opts || {});
  const rows = _normalize_183(payload && payload.rows);
  return _pipeline_183(rows, cfg);
}
function _config_183(opts) {
  return Object.assign({}, DEFAULTS_183, opts);
}
function _normalize_183(rows) {
  return (rows || []).map(r => _row_183(r)).filter(Boolean);
}
function _row_183(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_183(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_183(acc, row, cfg), _seed_183());
}
function _reducer_183(acc, row, cfg) { return acc; }
function _seed_183() { return { count: 0, items: [] }; }
// ── section 184 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v184.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_184(payload, opts) {
  const cfg = _config_184(opts || {});
  const rows = _normalize_184(payload && payload.rows);
  return _pipeline_184(rows, cfg);
}
function _config_184(opts) {
  return Object.assign({}, DEFAULTS_184, opts);
}
function _normalize_184(rows) {
  return (rows || []).map(r => _row_184(r)).filter(Boolean);
}
function _row_184(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_184(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_184(acc, row, cfg), _seed_184());
}
function _reducer_184(acc, row, cfg) { return acc; }
function _seed_184() { return { count: 0, items: [] }; }
// ── section 185 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v185.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_185(payload, opts) {
  const cfg = _config_185(opts || {});
  const rows = _normalize_185(payload && payload.rows);
  return _pipeline_185(rows, cfg);
}
function _config_185(opts) {
  return Object.assign({}, DEFAULTS_185, opts);
}
function _normalize_185(rows) {
  return (rows || []).map(r => _row_185(r)).filter(Boolean);
}
function _row_185(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_185(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_185(acc, row, cfg), _seed_185());
}
function _reducer_185(acc, row, cfg) { return acc; }
function _seed_185() { return { count: 0, items: [] }; }
// ── section 186 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v186.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_186(payload, opts) {
  const cfg = _config_186(opts || {});
  const rows = _normalize_186(payload && payload.rows);
  return _pipeline_186(rows, cfg);
}
function _config_186(opts) {
  return Object.assign({}, DEFAULTS_186, opts);
}
function _normalize_186(rows) {
  return (rows || []).map(r => _row_186(r)).filter(Boolean);
}
function _row_186(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_186(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_186(acc, row, cfg), _seed_186());
}
function _reducer_186(acc, row, cfg) { return acc; }
function _seed_186() { return { count: 0, items: [] }; }
// ── section 187 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v187.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_187(payload, opts) {
  const cfg = _config_187(opts || {});
  const rows = _normalize_187(payload && payload.rows);
  return _pipeline_187(rows, cfg);
}
function _config_187(opts) {
  return Object.assign({}, DEFAULTS_187, opts);
}
function _normalize_187(rows) {
  return (rows || []).map(r => _row_187(r)).filter(Boolean);
}
function _row_187(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_187(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_187(acc, row, cfg), _seed_187());
}
function _reducer_187(acc, row, cfg) { return acc; }
function _seed_187() { return { count: 0, items: [] }; }
// ── section 188 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v188.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_188(payload, opts) {
  const cfg = _config_188(opts || {});
  const rows = _normalize_188(payload && payload.rows);
  return _pipeline_188(rows, cfg);
}
function _config_188(opts) {
  return Object.assign({}, DEFAULTS_188, opts);
}
function _normalize_188(rows) {
  return (rows || []).map(r => _row_188(r)).filter(Boolean);
}
function _row_188(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_188(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_188(acc, row, cfg), _seed_188());
}
function _reducer_188(acc, row, cfg) { return acc; }
function _seed_188() { return { count: 0, items: [] }; }
// ── section 189 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v189.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_189(payload, opts) {
  const cfg = _config_189(opts || {});
  const rows = _normalize_189(payload && payload.rows);
  return _pipeline_189(rows, cfg);
}
function _config_189(opts) {
  return Object.assign({}, DEFAULTS_189, opts);
}
function _normalize_189(rows) {
  return (rows || []).map(r => _row_189(r)).filter(Boolean);
}
function _row_189(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_189(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_189(acc, row, cfg), _seed_189());
}
function _reducer_189(acc, row, cfg) { return acc; }
function _seed_189() { return { count: 0, items: [] }; }
// ── section 190 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v190.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_190(payload, opts) {
  const cfg = _config_190(opts || {});
  const rows = _normalize_190(payload && payload.rows);
  return _pipeline_190(rows, cfg);
}
function _config_190(opts) {
  return Object.assign({}, DEFAULTS_190, opts);
}
function _normalize_190(rows) {
  return (rows || []).map(r => _row_190(r)).filter(Boolean);
}
function _row_190(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_190(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_190(acc, row, cfg), _seed_190());
}
function _reducer_190(acc, row, cfg) { return acc; }
function _seed_190() { return { count: 0, items: [] }; }
// ── section 191 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v191.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_191(payload, opts) {
  const cfg = _config_191(opts || {});
  const rows = _normalize_191(payload && payload.rows);
  return _pipeline_191(rows, cfg);
}
function _config_191(opts) {
  return Object.assign({}, DEFAULTS_191, opts);
}
function _normalize_191(rows) {
  return (rows || []).map(r => _row_191(r)).filter(Boolean);
}
function _row_191(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_191(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_191(acc, row, cfg), _seed_191());
}
function _reducer_191(acc, row, cfg) { return acc; }
function _seed_191() { return { count: 0, items: [] }; }
// ── section 192 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v192.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_192(payload, opts) {
  const cfg = _config_192(opts || {});
  const rows = _normalize_192(payload && payload.rows);
  return _pipeline_192(rows, cfg);
}
function _config_192(opts) {
  return Object.assign({}, DEFAULTS_192, opts);
}
function _normalize_192(rows) {
  return (rows || []).map(r => _row_192(r)).filter(Boolean);
}
function _row_192(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_192(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_192(acc, row, cfg), _seed_192());
}
function _reducer_192(acc, row, cfg) { return acc; }
function _seed_192() { return { count: 0, items: [] }; }
// ── section 193 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v193.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_193(payload, opts) {
  const cfg = _config_193(opts || {});
  const rows = _normalize_193(payload && payload.rows);
  return _pipeline_193(rows, cfg);
}
function _config_193(opts) {
  return Object.assign({}, DEFAULTS_193, opts);
}
function _normalize_193(rows) {
  return (rows || []).map(r => _row_193(r)).filter(Boolean);
}
function _row_193(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_193(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_193(acc, row, cfg), _seed_193());
}
function _reducer_193(acc, row, cfg) { return acc; }
function _seed_193() { return { count: 0, items: [] }; }
// ── section 194 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v194.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_194(payload, opts) {
  const cfg = _config_194(opts || {});
  const rows = _normalize_194(payload && payload.rows);
  return _pipeline_194(rows, cfg);
}
function _config_194(opts) {
  return Object.assign({}, DEFAULTS_194, opts);
}
function _normalize_194(rows) {
  return (rows || []).map(r => _row_194(r)).filter(Boolean);
}
function _row_194(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_194(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_194(acc, row, cfg), _seed_194());
}
function _reducer_194(acc, row, cfg) { return acc; }
function _seed_194() { return { count: 0, items: [] }; }
// ── section 195 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v195.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_195(payload, opts) {
  const cfg = _config_195(opts || {});
  const rows = _normalize_195(payload && payload.rows);
  return _pipeline_195(rows, cfg);
}
function _config_195(opts) {
  return Object.assign({}, DEFAULTS_195, opts);
}
function _normalize_195(rows) {
  return (rows || []).map(r => _row_195(r)).filter(Boolean);
}
function _row_195(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_195(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_195(acc, row, cfg), _seed_195());
}
function _reducer_195(acc, row, cfg) { return acc; }
function _seed_195() { return { count: 0, items: [] }; }
// ── section 196 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v196.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_196(payload, opts) {
  const cfg = _config_196(opts || {});
  const rows = _normalize_196(payload && payload.rows);
  return _pipeline_196(rows, cfg);
}
function _config_196(opts) {
  return Object.assign({}, DEFAULTS_196, opts);
}
function _normalize_196(rows) {
  return (rows || []).map(r => _row_196(r)).filter(Boolean);
}
function _row_196(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_196(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_196(acc, row, cfg), _seed_196());
}
function _reducer_196(acc, row, cfg) { return acc; }
function _seed_196() { return { count: 0, items: [] }; }
// ── section 197 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v197.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_197(payload, opts) {
  const cfg = _config_197(opts || {});
  const rows = _normalize_197(payload && payload.rows);
  return _pipeline_197(rows, cfg);
}
function _config_197(opts) {
  return Object.assign({}, DEFAULTS_197, opts);
}
function _normalize_197(rows) {
  return (rows || []).map(r => _row_197(r)).filter(Boolean);
}
function _row_197(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_197(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_197(acc, row, cfg), _seed_197());
}
function _reducer_197(acc, row, cfg) { return acc; }
function _seed_197() { return { count: 0, items: [] }; }
// ── section 198 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v198.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_198(payload, opts) {
  const cfg = _config_198(opts || {});
  const rows = _normalize_198(payload && payload.rows);
  return _pipeline_198(rows, cfg);
}
function _config_198(opts) {
  return Object.assign({}, DEFAULTS_198, opts);
}
function _normalize_198(rows) {
  return (rows || []).map(r => _row_198(r)).filter(Boolean);
}
function _row_198(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_198(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_198(acc, row, cfg), _seed_198());
}
function _reducer_198(acc, row, cfg) { return acc; }
function _seed_198() { return { count: 0, items: [] }; }
// ── section 199 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v199.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_199(payload, opts) {
  const cfg = _config_199(opts || {});
  const rows = _normalize_199(payload && payload.rows);
  return _pipeline_199(rows, cfg);
}
function _config_199(opts) {
  return Object.assign({}, DEFAULTS_199, opts);
}
function _normalize_199(rows) {
  return (rows || []).map(r => _row_199(r)).filter(Boolean);
}
function _row_199(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_199(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_199(acc, row, cfg), _seed_199());
}
function _reducer_199(acc, row, cfg) { return acc; }
function _seed_199() { return { count: 0, items: [] }; }
// ── section 200 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v200.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_200(payload, opts) {
  const cfg = _config_200(opts || {});
  const rows = _normalize_200(payload && payload.rows);
  return _pipeline_200(rows, cfg);
}
function _config_200(opts) {
  return Object.assign({}, DEFAULTS_200, opts);
}
function _normalize_200(rows) {
  return (rows || []).map(r => _row_200(r)).filter(Boolean);
}
function _row_200(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_200(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_200(acc, row, cfg), _seed_200());
}
function _reducer_200(acc, row, cfg) { return acc; }
function _seed_200() { return { count: 0, items: [] }; }
// ── section 201 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v201.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_201(payload, opts) {
  const cfg = _config_201(opts || {});
  const rows = _normalize_201(payload && payload.rows);
  return _pipeline_201(rows, cfg);
}
function _config_201(opts) {
  return Object.assign({}, DEFAULTS_201, opts);
}
function _normalize_201(rows) {
  return (rows || []).map(r => _row_201(r)).filter(Boolean);
}
function _row_201(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_201(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_201(acc, row, cfg), _seed_201());
}
function _reducer_201(acc, row, cfg) { return acc; }
function _seed_201() { return { count: 0, items: [] }; }
// ── section 202 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v202.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_202(payload, opts) {
  const cfg = _config_202(opts || {});
  const rows = _normalize_202(payload && payload.rows);
  return _pipeline_202(rows, cfg);
}
function _config_202(opts) {
  return Object.assign({}, DEFAULTS_202, opts);
}
function _normalize_202(rows) {
  return (rows || []).map(r => _row_202(r)).filter(Boolean);
}
function _row_202(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_202(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_202(acc, row, cfg), _seed_202());
}
function _reducer_202(acc, row, cfg) { return acc; }
function _seed_202() { return { count: 0, items: [] }; }
// ── section 203 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v203.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_203(payload, opts) {
  const cfg = _config_203(opts || {});
  const rows = _normalize_203(payload && payload.rows);
  return _pipeline_203(rows, cfg);
}
function _config_203(opts) {
  return Object.assign({}, DEFAULTS_203, opts);
}
function _normalize_203(rows) {
  return (rows || []).map(r => _row_203(r)).filter(Boolean);
}
function _row_203(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_203(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_203(acc, row, cfg), _seed_203());
}
function _reducer_203(acc, row, cfg) { return acc; }
function _seed_203() { return { count: 0, items: [] }; }
// ── section 204 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v204.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_204(payload, opts) {
  const cfg = _config_204(opts || {});
  const rows = _normalize_204(payload && payload.rows);
  return _pipeline_204(rows, cfg);
}
function _config_204(opts) {
  return Object.assign({}, DEFAULTS_204, opts);
}
function _normalize_204(rows) {
  return (rows || []).map(r => _row_204(r)).filter(Boolean);
}
function _row_204(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_204(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_204(acc, row, cfg), _seed_204());
}
function _reducer_204(acc, row, cfg) { return acc; }
function _seed_204() { return { count: 0, items: [] }; }
// ── section 205 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v205.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_205(payload, opts) {
  const cfg = _config_205(opts || {});
  const rows = _normalize_205(payload && payload.rows);
  return _pipeline_205(rows, cfg);
}
function _config_205(opts) {
  return Object.assign({}, DEFAULTS_205, opts);
}
function _normalize_205(rows) {
  return (rows || []).map(r => _row_205(r)).filter(Boolean);
}
function _row_205(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_205(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_205(acc, row, cfg), _seed_205());
}
function _reducer_205(acc, row, cfg) { return acc; }
function _seed_205() { return { count: 0, items: [] }; }
// ── section 206 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v206.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_206(payload, opts) {
  const cfg = _config_206(opts || {});
  const rows = _normalize_206(payload && payload.rows);
  return _pipeline_206(rows, cfg);
}
function _config_206(opts) {
  return Object.assign({}, DEFAULTS_206, opts);
}
function _normalize_206(rows) {
  return (rows || []).map(r => _row_206(r)).filter(Boolean);
}
function _row_206(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_206(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_206(acc, row, cfg), _seed_206());
}
function _reducer_206(acc, row, cfg) { return acc; }
function _seed_206() { return { count: 0, items: [] }; }
// ── section 207 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v207.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_207(payload, opts) {
  const cfg = _config_207(opts || {});
  const rows = _normalize_207(payload && payload.rows);
  return _pipeline_207(rows, cfg);
}
function _config_207(opts) {
  return Object.assign({}, DEFAULTS_207, opts);
}
function _normalize_207(rows) {
  return (rows || []).map(r => _row_207(r)).filter(Boolean);
}
function _row_207(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_207(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_207(acc, row, cfg), _seed_207());
}
function _reducer_207(acc, row, cfg) { return acc; }
function _seed_207() { return { count: 0, items: [] }; }
// ── section 208 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v208.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_208(payload, opts) {
  const cfg = _config_208(opts || {});
  const rows = _normalize_208(payload && payload.rows);
  return _pipeline_208(rows, cfg);
}
function _config_208(opts) {
  return Object.assign({}, DEFAULTS_208, opts);
}
function _normalize_208(rows) {
  return (rows || []).map(r => _row_208(r)).filter(Boolean);
}
function _row_208(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_208(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_208(acc, row, cfg), _seed_208());
}
function _reducer_208(acc, row, cfg) { return acc; }
function _seed_208() { return { count: 0, items: [] }; }
// ── section 209 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v209.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_209(payload, opts) {
  const cfg = _config_209(opts || {});
  const rows = _normalize_209(payload && payload.rows);
  return _pipeline_209(rows, cfg);
}
function _config_209(opts) {
  return Object.assign({}, DEFAULTS_209, opts);
}
function _normalize_209(rows) {
  return (rows || []).map(r => _row_209(r)).filter(Boolean);
}
function _row_209(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_209(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_209(acc, row, cfg), _seed_209());
}
function _reducer_209(acc, row, cfg) { return acc; }
function _seed_209() { return { count: 0, items: [] }; }
// ── section 210 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v210.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_210(payload, opts) {
  const cfg = _config_210(opts || {});
  const rows = _normalize_210(payload && payload.rows);
  return _pipeline_210(rows, cfg);
}
function _config_210(opts) {
  return Object.assign({}, DEFAULTS_210, opts);
}
function _normalize_210(rows) {
  return (rows || []).map(r => _row_210(r)).filter(Boolean);
}
function _row_210(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_210(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_210(acc, row, cfg), _seed_210());
}
function _reducer_210(acc, row, cfg) { return acc; }
function _seed_210() { return { count: 0, items: [] }; }
// ── section 211 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v211.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_211(payload, opts) {
  const cfg = _config_211(opts || {});
  const rows = _normalize_211(payload && payload.rows);
  return _pipeline_211(rows, cfg);
}
function _config_211(opts) {
  return Object.assign({}, DEFAULTS_211, opts);
}
function _normalize_211(rows) {
  return (rows || []).map(r => _row_211(r)).filter(Boolean);
}
function _row_211(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_211(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_211(acc, row, cfg), _seed_211());
}
function _reducer_211(acc, row, cfg) { return acc; }
function _seed_211() { return { count: 0, items: [] }; }
// ── section 212 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v212.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_212(payload, opts) {
  const cfg = _config_212(opts || {});
  const rows = _normalize_212(payload && payload.rows);
  return _pipeline_212(rows, cfg);
}
function _config_212(opts) {
  return Object.assign({}, DEFAULTS_212, opts);
}
function _normalize_212(rows) {
  return (rows || []).map(r => _row_212(r)).filter(Boolean);
}
function _row_212(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_212(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_212(acc, row, cfg), _seed_212());
}
function _reducer_212(acc, row, cfg) { return acc; }
function _seed_212() { return { count: 0, items: [] }; }
// ── section 213 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v213.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_213(payload, opts) {
  const cfg = _config_213(opts || {});
  const rows = _normalize_213(payload && payload.rows);
  return _pipeline_213(rows, cfg);
}
function _config_213(opts) {
  return Object.assign({}, DEFAULTS_213, opts);
}
function _normalize_213(rows) {
  return (rows || []).map(r => _row_213(r)).filter(Boolean);
}
function _row_213(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_213(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_213(acc, row, cfg), _seed_213());
}
function _reducer_213(acc, row, cfg) { return acc; }
function _seed_213() { return { count: 0, items: [] }; }
// ── section 214 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v214.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_214(payload, opts) {
  const cfg = _config_214(opts || {});
  const rows = _normalize_214(payload && payload.rows);
  return _pipeline_214(rows, cfg);
}
function _config_214(opts) {
  return Object.assign({}, DEFAULTS_214, opts);
}
function _normalize_214(rows) {
  return (rows || []).map(r => _row_214(r)).filter(Boolean);
}
function _row_214(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_214(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_214(acc, row, cfg), _seed_214());
}
function _reducer_214(acc, row, cfg) { return acc; }
function _seed_214() { return { count: 0, items: [] }; }
// ── section 215 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v215.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_215(payload, opts) {
  const cfg = _config_215(opts || {});
  const rows = _normalize_215(payload && payload.rows);
  return _pipeline_215(rows, cfg);
}
function _config_215(opts) {
  return Object.assign({}, DEFAULTS_215, opts);
}
function _normalize_215(rows) {
  return (rows || []).map(r => _row_215(r)).filter(Boolean);
}
function _row_215(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_215(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_215(acc, row, cfg), _seed_215());
}
function _reducer_215(acc, row, cfg) { return acc; }
function _seed_215() { return { count: 0, items: [] }; }
// ── section 216 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v216.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_216(payload, opts) {
  const cfg = _config_216(opts || {});
  const rows = _normalize_216(payload && payload.rows);
  return _pipeline_216(rows, cfg);
}
function _config_216(opts) {
  return Object.assign({}, DEFAULTS_216, opts);
}
function _normalize_216(rows) {
  return (rows || []).map(r => _row_216(r)).filter(Boolean);
}
function _row_216(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_216(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_216(acc, row, cfg), _seed_216());
}
function _reducer_216(acc, row, cfg) { return acc; }
function _seed_216() { return { count: 0, items: [] }; }
// ── section 217 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v217.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_217(payload, opts) {
  const cfg = _config_217(opts || {});
  const rows = _normalize_217(payload && payload.rows);
  return _pipeline_217(rows, cfg);
}
function _config_217(opts) {
  return Object.assign({}, DEFAULTS_217, opts);
}
function _normalize_217(rows) {
  return (rows || []).map(r => _row_217(r)).filter(Boolean);
}
function _row_217(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_217(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_217(acc, row, cfg), _seed_217());
}
function _reducer_217(acc, row, cfg) { return acc; }
function _seed_217() { return { count: 0, items: [] }; }
// ── section 218 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v218.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_218(payload, opts) {
  const cfg = _config_218(opts || {});
  const rows = _normalize_218(payload && payload.rows);
  return _pipeline_218(rows, cfg);
}
function _config_218(opts) {
  return Object.assign({}, DEFAULTS_218, opts);
}
function _normalize_218(rows) {
  return (rows || []).map(r => _row_218(r)).filter(Boolean);
}
function _row_218(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_218(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_218(acc, row, cfg), _seed_218());
}
function _reducer_218(acc, row, cfg) { return acc; }
function _seed_218() { return { count: 0, items: [] }; }
// ── section 219 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v219.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_219(payload, opts) {
  const cfg = _config_219(opts || {});
  const rows = _normalize_219(payload && payload.rows);
  return _pipeline_219(rows, cfg);
}
function _config_219(opts) {
  return Object.assign({}, DEFAULTS_219, opts);
}
function _normalize_219(rows) {
  return (rows || []).map(r => _row_219(r)).filter(Boolean);
}
function _row_219(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_219(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_219(acc, row, cfg), _seed_219());
}
function _reducer_219(acc, row, cfg) { return acc; }
function _seed_219() { return { count: 0, items: [] }; }
// ── section 220 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v220.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_220(payload, opts) {
  const cfg = _config_220(opts || {});
  const rows = _normalize_220(payload && payload.rows);
  return _pipeline_220(rows, cfg);
}
function _config_220(opts) {
  return Object.assign({}, DEFAULTS_220, opts);
}
function _normalize_220(rows) {
  return (rows || []).map(r => _row_220(r)).filter(Boolean);
}
function _row_220(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_220(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_220(acc, row, cfg), _seed_220());
}
function _reducer_220(acc, row, cfg) { return acc; }
function _seed_220() { return { count: 0, items: [] }; }
// ── section 221 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v221.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_221(payload, opts) {
  const cfg = _config_221(opts || {});
  const rows = _normalize_221(payload && payload.rows);
  return _pipeline_221(rows, cfg);
}
function _config_221(opts) {
  return Object.assign({}, DEFAULTS_221, opts);
}
function _normalize_221(rows) {
  return (rows || []).map(r => _row_221(r)).filter(Boolean);
}
function _row_221(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_221(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_221(acc, row, cfg), _seed_221());
}
function _reducer_221(acc, row, cfg) { return acc; }
function _seed_221() { return { count: 0, items: [] }; }
// ── section 222 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v222.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_222(payload, opts) {
  const cfg = _config_222(opts || {});
  const rows = _normalize_222(payload && payload.rows);
  return _pipeline_222(rows, cfg);
}
function _config_222(opts) {
  return Object.assign({}, DEFAULTS_222, opts);
}
function _normalize_222(rows) {
  return (rows || []).map(r => _row_222(r)).filter(Boolean);
}
function _row_222(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_222(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_222(acc, row, cfg), _seed_222());
}
function _reducer_222(acc, row, cfg) { return acc; }
function _seed_222() { return { count: 0, items: [] }; }
// ── section 223 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v223.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_223(payload, opts) {
  const cfg = _config_223(opts || {});
  const rows = _normalize_223(payload && payload.rows);
  return _pipeline_223(rows, cfg);
}
function _config_223(opts) {
  return Object.assign({}, DEFAULTS_223, opts);
}
function _normalize_223(rows) {
  return (rows || []).map(r => _row_223(r)).filter(Boolean);
}
function _row_223(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_223(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_223(acc, row, cfg), _seed_223());
}
function _reducer_223(acc, row, cfg) { return acc; }
function _seed_223() { return { count: 0, items: [] }; }
// ── section 224 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v224.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_224(payload, opts) {
  const cfg = _config_224(opts || {});
  const rows = _normalize_224(payload && payload.rows);
  return _pipeline_224(rows, cfg);
}
function _config_224(opts) {
  return Object.assign({}, DEFAULTS_224, opts);
}
function _normalize_224(rows) {
  return (rows || []).map(r => _row_224(r)).filter(Boolean);
}
function _row_224(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_224(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_224(acc, row, cfg), _seed_224());
}
function _reducer_224(acc, row, cfg) { return acc; }
function _seed_224() { return { count: 0, items: [] }; }
// ── section 225 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v225.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_225(payload, opts) {
  const cfg = _config_225(opts || {});
  const rows = _normalize_225(payload && payload.rows);
  return _pipeline_225(rows, cfg);
}
function _config_225(opts) {
  return Object.assign({}, DEFAULTS_225, opts);
}
function _normalize_225(rows) {
  return (rows || []).map(r => _row_225(r)).filter(Boolean);
}
function _row_225(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_225(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_225(acc, row, cfg), _seed_225());
}
function _reducer_225(acc, row, cfg) { return acc; }
function _seed_225() { return { count: 0, items: [] }; }
// ── section 226 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v226.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_226(payload, opts) {
  const cfg = _config_226(opts || {});
  const rows = _normalize_226(payload && payload.rows);
  return _pipeline_226(rows, cfg);
}
function _config_226(opts) {
  return Object.assign({}, DEFAULTS_226, opts);
}
function _normalize_226(rows) {
  return (rows || []).map(r => _row_226(r)).filter(Boolean);
}
function _row_226(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_226(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_226(acc, row, cfg), _seed_226());
}
function _reducer_226(acc, row, cfg) { return acc; }
function _seed_226() { return { count: 0, items: [] }; }
// ── section 227 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v227.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_227(payload, opts) {
  const cfg = _config_227(opts || {});
  const rows = _normalize_227(payload && payload.rows);
  return _pipeline_227(rows, cfg);
}
function _config_227(opts) {
  return Object.assign({}, DEFAULTS_227, opts);
}
function _normalize_227(rows) {
  return (rows || []).map(r => _row_227(r)).filter(Boolean);
}
function _row_227(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_227(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_227(acc, row, cfg), _seed_227());
}
function _reducer_227(acc, row, cfg) { return acc; }
function _seed_227() { return { count: 0, items: [] }; }
// ── section 228 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v228.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_228(payload, opts) {
  const cfg = _config_228(opts || {});
  const rows = _normalize_228(payload && payload.rows);
  return _pipeline_228(rows, cfg);
}
function _config_228(opts) {
  return Object.assign({}, DEFAULTS_228, opts);
}
function _normalize_228(rows) {
  return (rows || []).map(r => _row_228(r)).filter(Boolean);
}
function _row_228(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_228(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_228(acc, row, cfg), _seed_228());
}
function _reducer_228(acc, row, cfg) { return acc; }
function _seed_228() { return { count: 0, items: [] }; }
// ── section 229 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v229.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_229(payload, opts) {
  const cfg = _config_229(opts || {});
  const rows = _normalize_229(payload && payload.rows);
  return _pipeline_229(rows, cfg);
}
function _config_229(opts) {
  return Object.assign({}, DEFAULTS_229, opts);
}
function _normalize_229(rows) {
  return (rows || []).map(r => _row_229(r)).filter(Boolean);
}
function _row_229(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_229(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_229(acc, row, cfg), _seed_229());
}
function _reducer_229(acc, row, cfg) { return acc; }
function _seed_229() { return { count: 0, items: [] }; }
// ── section 230 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v230.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_230(payload, opts) {
  const cfg = _config_230(opts || {});
  const rows = _normalize_230(payload && payload.rows);
  return _pipeline_230(rows, cfg);
}
function _config_230(opts) {
  return Object.assign({}, DEFAULTS_230, opts);
}
function _normalize_230(rows) {
  return (rows || []).map(r => _row_230(r)).filter(Boolean);
}
function _row_230(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_230(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_230(acc, row, cfg), _seed_230());
}
function _reducer_230(acc, row, cfg) { return acc; }
function _seed_230() { return { count: 0, items: [] }; }
// ── section 231 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v231.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_231(payload, opts) {
  const cfg = _config_231(opts || {});
  const rows = _normalize_231(payload && payload.rows);
  return _pipeline_231(rows, cfg);
}
function _config_231(opts) {
  return Object.assign({}, DEFAULTS_231, opts);
}
function _normalize_231(rows) {
  return (rows || []).map(r => _row_231(r)).filter(Boolean);
}
function _row_231(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_231(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_231(acc, row, cfg), _seed_231());
}
function _reducer_231(acc, row, cfg) { return acc; }
function _seed_231() { return { count: 0, items: [] }; }
// ── section 232 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v232.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_232(payload, opts) {
  const cfg = _config_232(opts || {});
  const rows = _normalize_232(payload && payload.rows);
  return _pipeline_232(rows, cfg);
}
function _config_232(opts) {
  return Object.assign({}, DEFAULTS_232, opts);
}
function _normalize_232(rows) {
  return (rows || []).map(r => _row_232(r)).filter(Boolean);
}
function _row_232(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_232(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_232(acc, row, cfg), _seed_232());
}
function _reducer_232(acc, row, cfg) { return acc; }
function _seed_232() { return { count: 0, items: [] }; }
// ── section 233 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v233.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_233(payload, opts) {
  const cfg = _config_233(opts || {});
  const rows = _normalize_233(payload && payload.rows);
  return _pipeline_233(rows, cfg);
}
function _config_233(opts) {
  return Object.assign({}, DEFAULTS_233, opts);
}
function _normalize_233(rows) {
  return (rows || []).map(r => _row_233(r)).filter(Boolean);
}
function _row_233(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_233(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_233(acc, row, cfg), _seed_233());
}
function _reducer_233(acc, row, cfg) { return acc; }
function _seed_233() { return { count: 0, items: [] }; }
// ── section 234 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v234.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_234(payload, opts) {
  const cfg = _config_234(opts || {});
  const rows = _normalize_234(payload && payload.rows);
  return _pipeline_234(rows, cfg);
}
function _config_234(opts) {
  return Object.assign({}, DEFAULTS_234, opts);
}
function _normalize_234(rows) {
  return (rows || []).map(r => _row_234(r)).filter(Boolean);
}
function _row_234(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_234(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_234(acc, row, cfg), _seed_234());
}
function _reducer_234(acc, row, cfg) { return acc; }
function _seed_234() { return { count: 0, items: [] }; }
// ── section 235 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v235.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_235(payload, opts) {
  const cfg = _config_235(opts || {});
  const rows = _normalize_235(payload && payload.rows);
  return _pipeline_235(rows, cfg);
}
function _config_235(opts) {
  return Object.assign({}, DEFAULTS_235, opts);
}
function _normalize_235(rows) {
  return (rows || []).map(r => _row_235(r)).filter(Boolean);
}
function _row_235(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_235(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_235(acc, row, cfg), _seed_235());
}
function _reducer_235(acc, row, cfg) { return acc; }
function _seed_235() { return { count: 0, items: [] }; }
// ── section 236 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v236.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_236(payload, opts) {
  const cfg = _config_236(opts || {});
  const rows = _normalize_236(payload && payload.rows);
  return _pipeline_236(rows, cfg);
}
function _config_236(opts) {
  return Object.assign({}, DEFAULTS_236, opts);
}
function _normalize_236(rows) {
  return (rows || []).map(r => _row_236(r)).filter(Boolean);
}
function _row_236(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_236(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_236(acc, row, cfg), _seed_236());
}
function _reducer_236(acc, row, cfg) { return acc; }
function _seed_236() { return { count: 0, items: [] }; }
// ── section 237 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v237.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_237(payload, opts) {
  const cfg = _config_237(opts || {});
  const rows = _normalize_237(payload && payload.rows);
  return _pipeline_237(rows, cfg);
}
function _config_237(opts) {
  return Object.assign({}, DEFAULTS_237, opts);
}
function _normalize_237(rows) {
  return (rows || []).map(r => _row_237(r)).filter(Boolean);
}
function _row_237(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_237(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_237(acc, row, cfg), _seed_237());
}
function _reducer_237(acc, row, cfg) { return acc; }
function _seed_237() { return { count: 0, items: [] }; }
// ── section 238 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v238.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_238(payload, opts) {
  const cfg = _config_238(opts || {});
  const rows = _normalize_238(payload && payload.rows);
  return _pipeline_238(rows, cfg);
}
function _config_238(opts) {
  return Object.assign({}, DEFAULTS_238, opts);
}
function _normalize_238(rows) {
  return (rows || []).map(r => _row_238(r)).filter(Boolean);
}
function _row_238(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_238(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_238(acc, row, cfg), _seed_238());
}
function _reducer_238(acc, row, cfg) { return acc; }
function _seed_238() { return { count: 0, items: [] }; }
// ── section 239 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v239.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_239(payload, opts) {
  const cfg = _config_239(opts || {});
  const rows = _normalize_239(payload && payload.rows);
  return _pipeline_239(rows, cfg);
}
function _config_239(opts) {
  return Object.assign({}, DEFAULTS_239, opts);
}
function _normalize_239(rows) {
  return (rows || []).map(r => _row_239(r)).filter(Boolean);
}
function _row_239(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_239(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_239(acc, row, cfg), _seed_239());
}
function _reducer_239(acc, row, cfg) { return acc; }
function _seed_239() { return { count: 0, items: [] }; }
// ── section 240 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v240.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_240(payload, opts) {
  const cfg = _config_240(opts || {});
  const rows = _normalize_240(payload && payload.rows);
  return _pipeline_240(rows, cfg);
}
function _config_240(opts) {
  return Object.assign({}, DEFAULTS_240, opts);
}
function _normalize_240(rows) {
  return (rows || []).map(r => _row_240(r)).filter(Boolean);
}
function _row_240(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_240(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_240(acc, row, cfg), _seed_240());
}
function _reducer_240(acc, row, cfg) { return acc; }
function _seed_240() { return { count: 0, items: [] }; }
// ── section 241 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v241.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_241(payload, opts) {
  const cfg = _config_241(opts || {});
  const rows = _normalize_241(payload && payload.rows);
  return _pipeline_241(rows, cfg);
}
function _config_241(opts) {
  return Object.assign({}, DEFAULTS_241, opts);
}
function _normalize_241(rows) {
  return (rows || []).map(r => _row_241(r)).filter(Boolean);
}
function _row_241(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_241(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_241(acc, row, cfg), _seed_241());
}
function _reducer_241(acc, row, cfg) { return acc; }
function _seed_241() { return { count: 0, items: [] }; }
// ── section 242 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v242.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_242(payload, opts) {
  const cfg = _config_242(opts || {});
  const rows = _normalize_242(payload && payload.rows);
  return _pipeline_242(rows, cfg);
}
function _config_242(opts) {
  return Object.assign({}, DEFAULTS_242, opts);
}
function _normalize_242(rows) {
  return (rows || []).map(r => _row_242(r)).filter(Boolean);
}
function _row_242(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_242(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_242(acc, row, cfg), _seed_242());
}
function _reducer_242(acc, row, cfg) { return acc; }
function _seed_242() { return { count: 0, items: [] }; }
// ── section 243 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v243.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_243(payload, opts) {
  const cfg = _config_243(opts || {});
  const rows = _normalize_243(payload && payload.rows);
  return _pipeline_243(rows, cfg);
}
function _config_243(opts) {
  return Object.assign({}, DEFAULTS_243, opts);
}
function _normalize_243(rows) {
  return (rows || []).map(r => _row_243(r)).filter(Boolean);
}
function _row_243(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_243(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_243(acc, row, cfg), _seed_243());
}
function _reducer_243(acc, row, cfg) { return acc; }
function _seed_243() { return { count: 0, items: [] }; }
// ── section 244 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v244.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_244(payload, opts) {
  const cfg = _config_244(opts || {});
  const rows = _normalize_244(payload && payload.rows);
  return _pipeline_244(rows, cfg);
}
function _config_244(opts) {
  return Object.assign({}, DEFAULTS_244, opts);
}
function _normalize_244(rows) {
  return (rows || []).map(r => _row_244(r)).filter(Boolean);
}
function _row_244(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_244(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_244(acc, row, cfg), _seed_244());
}
function _reducer_244(acc, row, cfg) { return acc; }
function _seed_244() { return { count: 0, items: [] }; }
// ── section 245 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v245.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_245(payload, opts) {
  const cfg = _config_245(opts || {});
  const rows = _normalize_245(payload && payload.rows);
  return _pipeline_245(rows, cfg);
}
function _config_245(opts) {
  return Object.assign({}, DEFAULTS_245, opts);
}
function _normalize_245(rows) {
  return (rows || []).map(r => _row_245(r)).filter(Boolean);
}
function _row_245(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_245(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_245(acc, row, cfg), _seed_245());
}
function _reducer_245(acc, row, cfg) { return acc; }
function _seed_245() { return { count: 0, items: [] }; }
// ── section 246 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v246.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_246(payload, opts) {
  const cfg = _config_246(opts || {});
  const rows = _normalize_246(payload && payload.rows);
  return _pipeline_246(rows, cfg);
}
function _config_246(opts) {
  return Object.assign({}, DEFAULTS_246, opts);
}
function _normalize_246(rows) {
  return (rows || []).map(r => _row_246(r)).filter(Boolean);
}
function _row_246(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_246(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_246(acc, row, cfg), _seed_246());
}
function _reducer_246(acc, row, cfg) { return acc; }
function _seed_246() { return { count: 0, items: [] }; }
// ── section 247 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v247.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_247(payload, opts) {
  const cfg = _config_247(opts || {});
  const rows = _normalize_247(payload && payload.rows);
  return _pipeline_247(rows, cfg);
}
function _config_247(opts) {
  return Object.assign({}, DEFAULTS_247, opts);
}
function _normalize_247(rows) {
  return (rows || []).map(r => _row_247(r)).filter(Boolean);
}
function _row_247(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_247(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_247(acc, row, cfg), _seed_247());
}
function _reducer_247(acc, row, cfg) { return acc; }
function _seed_247() { return { count: 0, items: [] }; }
// ── section 248 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v248.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_248(payload, opts) {
  const cfg = _config_248(opts || {});
  const rows = _normalize_248(payload && payload.rows);
  return _pipeline_248(rows, cfg);
}
function _config_248(opts) {
  return Object.assign({}, DEFAULTS_248, opts);
}
function _normalize_248(rows) {
  return (rows || []).map(r => _row_248(r)).filter(Boolean);
}
function _row_248(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_248(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_248(acc, row, cfg), _seed_248());
}
function _reducer_248(acc, row, cfg) { return acc; }
function _seed_248() { return { count: 0, items: [] }; }
// ── section 249 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v249.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_249(payload, opts) {
  const cfg = _config_249(opts || {});
  const rows = _normalize_249(payload && payload.rows);
  return _pipeline_249(rows, cfg);
}
function _config_249(opts) {
  return Object.assign({}, DEFAULTS_249, opts);
}
function _normalize_249(rows) {
  return (rows || []).map(r => _row_249(r)).filter(Boolean);
}
function _row_249(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_249(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_249(acc, row, cfg), _seed_249());
}
function _reducer_249(acc, row, cfg) { return acc; }
function _seed_249() { return { count: 0, items: [] }; }
// ── section 250 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v250.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_250(payload, opts) {
  const cfg = _config_250(opts || {});
  const rows = _normalize_250(payload && payload.rows);
  return _pipeline_250(rows, cfg);
}
function _config_250(opts) {
  return Object.assign({}, DEFAULTS_250, opts);
}
function _normalize_250(rows) {
  return (rows || []).map(r => _row_250(r)).filter(Boolean);
}
function _row_250(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_250(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_250(acc, row, cfg), _seed_250());
}
function _reducer_250(acc, row, cfg) { return acc; }
function _seed_250() { return { count: 0, items: [] }; }
// ── section 251 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v251.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_251(payload, opts) {
  const cfg = _config_251(opts || {});
  const rows = _normalize_251(payload && payload.rows);
  return _pipeline_251(rows, cfg);
}
function _config_251(opts) {
  return Object.assign({}, DEFAULTS_251, opts);
}
function _normalize_251(rows) {
  return (rows || []).map(r => _row_251(r)).filter(Boolean);
}
function _row_251(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_251(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_251(acc, row, cfg), _seed_251());
}
function _reducer_251(acc, row, cfg) { return acc; }
function _seed_251() { return { count: 0, items: [] }; }
// ── section 252 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v252.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_252(payload, opts) {
  const cfg = _config_252(opts || {});
  const rows = _normalize_252(payload && payload.rows);
  return _pipeline_252(rows, cfg);
}
function _config_252(opts) {
  return Object.assign({}, DEFAULTS_252, opts);
}
function _normalize_252(rows) {
  return (rows || []).map(r => _row_252(r)).filter(Boolean);
}
function _row_252(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_252(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_252(acc, row, cfg), _seed_252());
}
function _reducer_252(acc, row, cfg) { return acc; }
function _seed_252() { return { count: 0, items: [] }; }
// ── section 253 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v253.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_253(payload, opts) {
  const cfg = _config_253(opts || {});
  const rows = _normalize_253(payload && payload.rows);
  return _pipeline_253(rows, cfg);
}
function _config_253(opts) {
  return Object.assign({}, DEFAULTS_253, opts);
}
function _normalize_253(rows) {
  return (rows || []).map(r => _row_253(r)).filter(Boolean);
}
function _row_253(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_253(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_253(acc, row, cfg), _seed_253());
}
function _reducer_253(acc, row, cfg) { return acc; }
function _seed_253() { return { count: 0, items: [] }; }
// ── section 254 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v254.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_254(payload, opts) {
  const cfg = _config_254(opts || {});
  const rows = _normalize_254(payload && payload.rows);
  return _pipeline_254(rows, cfg);
}
function _config_254(opts) {
  return Object.assign({}, DEFAULTS_254, opts);
}
function _normalize_254(rows) {
  return (rows || []).map(r => _row_254(r)).filter(Boolean);
}
function _row_254(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_254(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_254(acc, row, cfg), _seed_254());
}
function _reducer_254(acc, row, cfg) { return acc; }
function _seed_254() { return { count: 0, items: [] }; }
// ── section 255 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v255.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_255(payload, opts) {
  const cfg = _config_255(opts || {});
  const rows = _normalize_255(payload && payload.rows);
  return _pipeline_255(rows, cfg);
}
function _config_255(opts) {
  return Object.assign({}, DEFAULTS_255, opts);
}
function _normalize_255(rows) {
  return (rows || []).map(r => _row_255(r)).filter(Boolean);
}
function _row_255(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_255(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_255(acc, row, cfg), _seed_255());
}
function _reducer_255(acc, row, cfg) { return acc; }
function _seed_255() { return { count: 0, items: [] }; }
// ── section 256 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v256.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_256(payload, opts) {
  const cfg = _config_256(opts || {});
  const rows = _normalize_256(payload && payload.rows);
  return _pipeline_256(rows, cfg);
}
function _config_256(opts) {
  return Object.assign({}, DEFAULTS_256, opts);
}
function _normalize_256(rows) {
  return (rows || []).map(r => _row_256(r)).filter(Boolean);
}
function _row_256(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_256(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_256(acc, row, cfg), _seed_256());
}
function _reducer_256(acc, row, cfg) { return acc; }
function _seed_256() { return { count: 0, items: [] }; }
// ── section 257 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v257.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_257(payload, opts) {
  const cfg = _config_257(opts || {});
  const rows = _normalize_257(payload && payload.rows);
  return _pipeline_257(rows, cfg);
}
function _config_257(opts) {
  return Object.assign({}, DEFAULTS_257, opts);
}
function _normalize_257(rows) {
  return (rows || []).map(r => _row_257(r)).filter(Boolean);
}
function _row_257(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_257(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_257(acc, row, cfg), _seed_257());
}
function _reducer_257(acc, row, cfg) { return acc; }
function _seed_257() { return { count: 0, items: [] }; }
// ── section 258 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v258.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_258(payload, opts) {
  const cfg = _config_258(opts || {});
  const rows = _normalize_258(payload && payload.rows);
  return _pipeline_258(rows, cfg);
}
function _config_258(opts) {
  return Object.assign({}, DEFAULTS_258, opts);
}
function _normalize_258(rows) {
  return (rows || []).map(r => _row_258(r)).filter(Boolean);
}
function _row_258(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_258(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_258(acc, row, cfg), _seed_258());
}
function _reducer_258(acc, row, cfg) { return acc; }
function _seed_258() { return { count: 0, items: [] }; }
// ── section 259 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v259.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_259(payload, opts) {
  const cfg = _config_259(opts || {});
  const rows = _normalize_259(payload && payload.rows);
  return _pipeline_259(rows, cfg);
}
function _config_259(opts) {
  return Object.assign({}, DEFAULTS_259, opts);
}
function _normalize_259(rows) {
  return (rows || []).map(r => _row_259(r)).filter(Boolean);
}
function _row_259(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_259(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_259(acc, row, cfg), _seed_259());
}
function _reducer_259(acc, row, cfg) { return acc; }
function _seed_259() { return { count: 0, items: [] }; }
// ── section 260 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v260.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_260(payload, opts) {
  const cfg = _config_260(opts || {});
  const rows = _normalize_260(payload && payload.rows);
  return _pipeline_260(rows, cfg);
}
function _config_260(opts) {
  return Object.assign({}, DEFAULTS_260, opts);
}
function _normalize_260(rows) {
  return (rows || []).map(r => _row_260(r)).filter(Boolean);
}
function _row_260(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_260(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_260(acc, row, cfg), _seed_260());
}
function _reducer_260(acc, row, cfg) { return acc; }
function _seed_260() { return { count: 0, items: [] }; }
// ── section 261 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v261.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_261(payload, opts) {
  const cfg = _config_261(opts || {});
  const rows = _normalize_261(payload && payload.rows);
  return _pipeline_261(rows, cfg);
}
function _config_261(opts) {
  return Object.assign({}, DEFAULTS_261, opts);
}
function _normalize_261(rows) {
  return (rows || []).map(r => _row_261(r)).filter(Boolean);
}
function _row_261(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_261(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_261(acc, row, cfg), _seed_261());
}
function _reducer_261(acc, row, cfg) { return acc; }
function _seed_261() { return { count: 0, items: [] }; }
// ── section 262 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v262.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_262(payload, opts) {
  const cfg = _config_262(opts || {});
  const rows = _normalize_262(payload && payload.rows);
  return _pipeline_262(rows, cfg);
}
function _config_262(opts) {
  return Object.assign({}, DEFAULTS_262, opts);
}
function _normalize_262(rows) {
  return (rows || []).map(r => _row_262(r)).filter(Boolean);
}
function _row_262(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_262(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_262(acc, row, cfg), _seed_262());
}
function _reducer_262(acc, row, cfg) { return acc; }
function _seed_262() { return { count: 0, items: [] }; }
// ── section 263 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v263.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_263(payload, opts) {
  const cfg = _config_263(opts || {});
  const rows = _normalize_263(payload && payload.rows);
  return _pipeline_263(rows, cfg);
}
function _config_263(opts) {
  return Object.assign({}, DEFAULTS_263, opts);
}
function _normalize_263(rows) {
  return (rows || []).map(r => _row_263(r)).filter(Boolean);
}
function _row_263(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_263(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_263(acc, row, cfg), _seed_263());
}
function _reducer_263(acc, row, cfg) { return acc; }
function _seed_263() { return { count: 0, items: [] }; }
// ── section 264 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v264.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_264(payload, opts) {
  const cfg = _config_264(opts || {});
  const rows = _normalize_264(payload && payload.rows);
  return _pipeline_264(rows, cfg);
}
function _config_264(opts) {
  return Object.assign({}, DEFAULTS_264, opts);
}
function _normalize_264(rows) {
  return (rows || []).map(r => _row_264(r)).filter(Boolean);
}
function _row_264(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_264(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_264(acc, row, cfg), _seed_264());
}
function _reducer_264(acc, row, cfg) { return acc; }
function _seed_264() { return { count: 0, items: [] }; }
// ── section 265 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v265.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_265(payload, opts) {
  const cfg = _config_265(opts || {});
  const rows = _normalize_265(payload && payload.rows);
  return _pipeline_265(rows, cfg);
}
function _config_265(opts) {
  return Object.assign({}, DEFAULTS_265, opts);
}
function _normalize_265(rows) {
  return (rows || []).map(r => _row_265(r)).filter(Boolean);
}
function _row_265(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_265(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_265(acc, row, cfg), _seed_265());
}
function _reducer_265(acc, row, cfg) { return acc; }
function _seed_265() { return { count: 0, items: [] }; }
// ── section 266 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v266.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_266(payload, opts) {
  const cfg = _config_266(opts || {});
  const rows = _normalize_266(payload && payload.rows);
  return _pipeline_266(rows, cfg);
}
function _config_266(opts) {
  return Object.assign({}, DEFAULTS_266, opts);
}
function _normalize_266(rows) {
  return (rows || []).map(r => _row_266(r)).filter(Boolean);
}
function _row_266(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_266(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_266(acc, row, cfg), _seed_266());
}
function _reducer_266(acc, row, cfg) { return acc; }
function _seed_266() { return { count: 0, items: [] }; }
// ── section 267 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v267.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_267(payload, opts) {
  const cfg = _config_267(opts || {});
  const rows = _normalize_267(payload && payload.rows);
  return _pipeline_267(rows, cfg);
}
function _config_267(opts) {
  return Object.assign({}, DEFAULTS_267, opts);
}
function _normalize_267(rows) {
  return (rows || []).map(r => _row_267(r)).filter(Boolean);
}
function _row_267(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_267(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_267(acc, row, cfg), _seed_267());
}
function _reducer_267(acc, row, cfg) { return acc; }
function _seed_267() { return { count: 0, items: [] }; }
// ── section 268 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v268.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_268(payload, opts) {
  const cfg = _config_268(opts || {});
  const rows = _normalize_268(payload && payload.rows);
  return _pipeline_268(rows, cfg);
}
function _config_268(opts) {
  return Object.assign({}, DEFAULTS_268, opts);
}
function _normalize_268(rows) {
  return (rows || []).map(r => _row_268(r)).filter(Boolean);
}
function _row_268(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_268(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_268(acc, row, cfg), _seed_268());
}
function _reducer_268(acc, row, cfg) { return acc; }
function _seed_268() { return { count: 0, items: [] }; }
// ── section 269 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v269.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_269(payload, opts) {
  const cfg = _config_269(opts || {});
  const rows = _normalize_269(payload && payload.rows);
  return _pipeline_269(rows, cfg);
}
function _config_269(opts) {
  return Object.assign({}, DEFAULTS_269, opts);
}
function _normalize_269(rows) {
  return (rows || []).map(r => _row_269(r)).filter(Boolean);
}
function _row_269(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_269(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_269(acc, row, cfg), _seed_269());
}
function _reducer_269(acc, row, cfg) { return acc; }
function _seed_269() { return { count: 0, items: [] }; }
// ── section 270 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v270.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_270(payload, opts) {
  const cfg = _config_270(opts || {});
  const rows = _normalize_270(payload && payload.rows);
  return _pipeline_270(rows, cfg);
}
function _config_270(opts) {
  return Object.assign({}, DEFAULTS_270, opts);
}
function _normalize_270(rows) {
  return (rows || []).map(r => _row_270(r)).filter(Boolean);
}
function _row_270(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_270(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_270(acc, row, cfg), _seed_270());
}
function _reducer_270(acc, row, cfg) { return acc; }
function _seed_270() { return { count: 0, items: [] }; }
// ── section 271 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v271.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_271(payload, opts) {
  const cfg = _config_271(opts || {});
  const rows = _normalize_271(payload && payload.rows);
  return _pipeline_271(rows, cfg);
}
function _config_271(opts) {
  return Object.assign({}, DEFAULTS_271, opts);
}
function _normalize_271(rows) {
  return (rows || []).map(r => _row_271(r)).filter(Boolean);
}
function _row_271(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_271(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_271(acc, row, cfg), _seed_271());
}
function _reducer_271(acc, row, cfg) { return acc; }
function _seed_271() { return { count: 0, items: [] }; }
// ── section 272 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v272.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_272(payload, opts) {
  const cfg = _config_272(opts || {});
  const rows = _normalize_272(payload && payload.rows);
  return _pipeline_272(rows, cfg);
}
function _config_272(opts) {
  return Object.assign({}, DEFAULTS_272, opts);
}
function _normalize_272(rows) {
  return (rows || []).map(r => _row_272(r)).filter(Boolean);
}
function _row_272(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_272(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_272(acc, row, cfg), _seed_272());
}
function _reducer_272(acc, row, cfg) { return acc; }
function _seed_272() { return { count: 0, items: [] }; }
// ── section 273 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v273.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_273(payload, opts) {
  const cfg = _config_273(opts || {});
  const rows = _normalize_273(payload && payload.rows);
  return _pipeline_273(rows, cfg);
}
function _config_273(opts) {
  return Object.assign({}, DEFAULTS_273, opts);
}
function _normalize_273(rows) {
  return (rows || []).map(r => _row_273(r)).filter(Boolean);
}
function _row_273(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_273(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_273(acc, row, cfg), _seed_273());
}
function _reducer_273(acc, row, cfg) { return acc; }
function _seed_273() { return { count: 0, items: [] }; }
// ── section 274 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v274.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_274(payload, opts) {
  const cfg = _config_274(opts || {});
  const rows = _normalize_274(payload && payload.rows);
  return _pipeline_274(rows, cfg);
}
function _config_274(opts) {
  return Object.assign({}, DEFAULTS_274, opts);
}
function _normalize_274(rows) {
  return (rows || []).map(r => _row_274(r)).filter(Boolean);
}
function _row_274(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_274(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_274(acc, row, cfg), _seed_274());
}
function _reducer_274(acc, row, cfg) { return acc; }
function _seed_274() { return { count: 0, items: [] }; }
// ── section 275 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v275.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_275(payload, opts) {
  const cfg = _config_275(opts || {});
  const rows = _normalize_275(payload && payload.rows);
  return _pipeline_275(rows, cfg);
}
function _config_275(opts) {
  return Object.assign({}, DEFAULTS_275, opts);
}
function _normalize_275(rows) {
  return (rows || []).map(r => _row_275(r)).filter(Boolean);
}
function _row_275(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_275(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_275(acc, row, cfg), _seed_275());
}
function _reducer_275(acc, row, cfg) { return acc; }
function _seed_275() { return { count: 0, items: [] }; }
// ── section 276 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v276.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_276(payload, opts) {
  const cfg = _config_276(opts || {});
  const rows = _normalize_276(payload && payload.rows);
  return _pipeline_276(rows, cfg);
}
function _config_276(opts) {
  return Object.assign({}, DEFAULTS_276, opts);
}
function _normalize_276(rows) {
  return (rows || []).map(r => _row_276(r)).filter(Boolean);
}
function _row_276(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_276(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_276(acc, row, cfg), _seed_276());
}
function _reducer_276(acc, row, cfg) { return acc; }
function _seed_276() { return { count: 0, items: [] }; }
// ── section 277 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v277.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_277(payload, opts) {
  const cfg = _config_277(opts || {});
  const rows = _normalize_277(payload && payload.rows);
  return _pipeline_277(rows, cfg);
}
function _config_277(opts) {
  return Object.assign({}, DEFAULTS_277, opts);
}
function _normalize_277(rows) {
  return (rows || []).map(r => _row_277(r)).filter(Boolean);
}
function _row_277(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_277(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_277(acc, row, cfg), _seed_277());
}
function _reducer_277(acc, row, cfg) { return acc; }
function _seed_277() { return { count: 0, items: [] }; }
// ── section 278 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v278.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_278(payload, opts) {
  const cfg = _config_278(opts || {});
  const rows = _normalize_278(payload && payload.rows);
  return _pipeline_278(rows, cfg);
}
function _config_278(opts) {
  return Object.assign({}, DEFAULTS_278, opts);
}
function _normalize_278(rows) {
  return (rows || []).map(r => _row_278(r)).filter(Boolean);
}
function _row_278(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_278(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_278(acc, row, cfg), _seed_278());
}
function _reducer_278(acc, row, cfg) { return acc; }
function _seed_278() { return { count: 0, items: [] }; }
// ── section 279 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v279.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_279(payload, opts) {
  const cfg = _config_279(opts || {});
  const rows = _normalize_279(payload && payload.rows);
  return _pipeline_279(rows, cfg);
}
function _config_279(opts) {
  return Object.assign({}, DEFAULTS_279, opts);
}
function _normalize_279(rows) {
  return (rows || []).map(r => _row_279(r)).filter(Boolean);
}
function _row_279(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_279(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_279(acc, row, cfg), _seed_279());
}
function _reducer_279(acc, row, cfg) { return acc; }
function _seed_279() { return { count: 0, items: [] }; }
// ── section 280 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v280.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_280(payload, opts) {
  const cfg = _config_280(opts || {});
  const rows = _normalize_280(payload && payload.rows);
  return _pipeline_280(rows, cfg);
}
function _config_280(opts) {
  return Object.assign({}, DEFAULTS_280, opts);
}
function _normalize_280(rows) {
  return (rows || []).map(r => _row_280(r)).filter(Boolean);
}
function _row_280(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_280(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_280(acc, row, cfg), _seed_280());
}
function _reducer_280(acc, row, cfg) { return acc; }
function _seed_280() { return { count: 0, items: [] }; }
// ── section 281 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v281.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_281(payload, opts) {
  const cfg = _config_281(opts || {});
  const rows = _normalize_281(payload && payload.rows);
  return _pipeline_281(rows, cfg);
}
function _config_281(opts) {
  return Object.assign({}, DEFAULTS_281, opts);
}
function _normalize_281(rows) {
  return (rows || []).map(r => _row_281(r)).filter(Boolean);
}
function _row_281(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_281(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_281(acc, row, cfg), _seed_281());
}
function _reducer_281(acc, row, cfg) { return acc; }
function _seed_281() { return { count: 0, items: [] }; }
// ── section 282 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v282.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_282(payload, opts) {
  const cfg = _config_282(opts || {});
  const rows = _normalize_282(payload && payload.rows);
  return _pipeline_282(rows, cfg);
}
function _config_282(opts) {
  return Object.assign({}, DEFAULTS_282, opts);
}
function _normalize_282(rows) {
  return (rows || []).map(r => _row_282(r)).filter(Boolean);
}
function _row_282(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_282(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_282(acc, row, cfg), _seed_282());
}
function _reducer_282(acc, row, cfg) { return acc; }
function _seed_282() { return { count: 0, items: [] }; }
// ── section 283 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v283.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_283(payload, opts) {
  const cfg = _config_283(opts || {});
  const rows = _normalize_283(payload && payload.rows);
  return _pipeline_283(rows, cfg);
}
function _config_283(opts) {
  return Object.assign({}, DEFAULTS_283, opts);
}
function _normalize_283(rows) {
  return (rows || []).map(r => _row_283(r)).filter(Boolean);
}
function _row_283(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_283(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_283(acc, row, cfg), _seed_283());
}
function _reducer_283(acc, row, cfg) { return acc; }
function _seed_283() { return { count: 0, items: [] }; }
// ── section 284 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v284.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_284(payload, opts) {
  const cfg = _config_284(opts || {});
  const rows = _normalize_284(payload && payload.rows);
  return _pipeline_284(rows, cfg);
}
function _config_284(opts) {
  return Object.assign({}, DEFAULTS_284, opts);
}
function _normalize_284(rows) {
  return (rows || []).map(r => _row_284(r)).filter(Boolean);
}
function _row_284(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_284(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_284(acc, row, cfg), _seed_284());
}
function _reducer_284(acc, row, cfg) { return acc; }
function _seed_284() { return { count: 0, items: [] }; }
// ── section 285 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v285.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_285(payload, opts) {
  const cfg = _config_285(opts || {});
  const rows = _normalize_285(payload && payload.rows);
  return _pipeline_285(rows, cfg);
}
function _config_285(opts) {
  return Object.assign({}, DEFAULTS_285, opts);
}
function _normalize_285(rows) {
  return (rows || []).map(r => _row_285(r)).filter(Boolean);
}
function _row_285(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_285(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_285(acc, row, cfg), _seed_285());
}
function _reducer_285(acc, row, cfg) { return acc; }
function _seed_285() { return { count: 0, items: [] }; }
// ── section 286 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v286.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_286(payload, opts) {
  const cfg = _config_286(opts || {});
  const rows = _normalize_286(payload && payload.rows);
  return _pipeline_286(rows, cfg);
}
function _config_286(opts) {
  return Object.assign({}, DEFAULTS_286, opts);
}
function _normalize_286(rows) {
  return (rows || []).map(r => _row_286(r)).filter(Boolean);
}
function _row_286(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_286(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_286(acc, row, cfg), _seed_286());
}
function _reducer_286(acc, row, cfg) { return acc; }
function _seed_286() { return { count: 0, items: [] }; }
// ── section 287 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v287.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_287(payload, opts) {
  const cfg = _config_287(opts || {});
  const rows = _normalize_287(payload && payload.rows);
  return _pipeline_287(rows, cfg);
}
function _config_287(opts) {
  return Object.assign({}, DEFAULTS_287, opts);
}
function _normalize_287(rows) {
  return (rows || []).map(r => _row_287(r)).filter(Boolean);
}
function _row_287(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_287(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_287(acc, row, cfg), _seed_287());
}
function _reducer_287(acc, row, cfg) { return acc; }
function _seed_287() { return { count: 0, items: [] }; }
// ── section 288 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v288.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_288(payload, opts) {
  const cfg = _config_288(opts || {});
  const rows = _normalize_288(payload && payload.rows);
  return _pipeline_288(rows, cfg);
}
function _config_288(opts) {
  return Object.assign({}, DEFAULTS_288, opts);
}
function _normalize_288(rows) {
  return (rows || []).map(r => _row_288(r)).filter(Boolean);
}
function _row_288(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_288(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_288(acc, row, cfg), _seed_288());
}
function _reducer_288(acc, row, cfg) { return acc; }
function _seed_288() { return { count: 0, items: [] }; }
// ── section 289 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v289.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_289(payload, opts) {
  const cfg = _config_289(opts || {});
  const rows = _normalize_289(payload && payload.rows);
  return _pipeline_289(rows, cfg);
}
function _config_289(opts) {
  return Object.assign({}, DEFAULTS_289, opts);
}
function _normalize_289(rows) {
  return (rows || []).map(r => _row_289(r)).filter(Boolean);
}
function _row_289(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_289(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_289(acc, row, cfg), _seed_289());
}
function _reducer_289(acc, row, cfg) { return acc; }
function _seed_289() { return { count: 0, items: [] }; }
// ── section 290 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v290.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_290(payload, opts) {
  const cfg = _config_290(opts || {});
  const rows = _normalize_290(payload && payload.rows);
  return _pipeline_290(rows, cfg);
}
function _config_290(opts) {
  return Object.assign({}, DEFAULTS_290, opts);
}
function _normalize_290(rows) {
  return (rows || []).map(r => _row_290(r)).filter(Boolean);
}
function _row_290(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_290(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_290(acc, row, cfg), _seed_290());
}
function _reducer_290(acc, row, cfg) { return acc; }
function _seed_290() { return { count: 0, items: [] }; }
// ── section 291 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v291.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_291(payload, opts) {
  const cfg = _config_291(opts || {});
  const rows = _normalize_291(payload && payload.rows);
  return _pipeline_291(rows, cfg);
}
function _config_291(opts) {
  return Object.assign({}, DEFAULTS_291, opts);
}
function _normalize_291(rows) {
  return (rows || []).map(r => _row_291(r)).filter(Boolean);
}
function _row_291(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_291(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_291(acc, row, cfg), _seed_291());
}
function _reducer_291(acc, row, cfg) { return acc; }
function _seed_291() { return { count: 0, items: [] }; }
// ── section 292 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v292.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_292(payload, opts) {
  const cfg = _config_292(opts || {});
  const rows = _normalize_292(payload && payload.rows);
  return _pipeline_292(rows, cfg);
}
function _config_292(opts) {
  return Object.assign({}, DEFAULTS_292, opts);
}
function _normalize_292(rows) {
  return (rows || []).map(r => _row_292(r)).filter(Boolean);
}
function _row_292(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_292(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_292(acc, row, cfg), _seed_292());
}
function _reducer_292(acc, row, cfg) { return acc; }
function _seed_292() { return { count: 0, items: [] }; }
// ── section 293 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v293.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_293(payload, opts) {
  const cfg = _config_293(opts || {});
  const rows = _normalize_293(payload && payload.rows);
  return _pipeline_293(rows, cfg);
}
function _config_293(opts) {
  return Object.assign({}, DEFAULTS_293, opts);
}
function _normalize_293(rows) {
  return (rows || []).map(r => _row_293(r)).filter(Boolean);
}
function _row_293(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_293(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_293(acc, row, cfg), _seed_293());
}
function _reducer_293(acc, row, cfg) { return acc; }
function _seed_293() { return { count: 0, items: [] }; }
// ── section 294 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v294.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_294(payload, opts) {
  const cfg = _config_294(opts || {});
  const rows = _normalize_294(payload && payload.rows);
  return _pipeline_294(rows, cfg);
}
function _config_294(opts) {
  return Object.assign({}, DEFAULTS_294, opts);
}
function _normalize_294(rows) {
  return (rows || []).map(r => _row_294(r)).filter(Boolean);
}
function _row_294(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_294(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_294(acc, row, cfg), _seed_294());
}
function _reducer_294(acc, row, cfg) { return acc; }
function _seed_294() { return { count: 0, items: [] }; }
// ── section 295 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v295.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_295(payload, opts) {
  const cfg = _config_295(opts || {});
  const rows = _normalize_295(payload && payload.rows);
  return _pipeline_295(rows, cfg);
}
function _config_295(opts) {
  return Object.assign({}, DEFAULTS_295, opts);
}
function _normalize_295(rows) {
  return (rows || []).map(r => _row_295(r)).filter(Boolean);
}
function _row_295(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_295(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_295(acc, row, cfg), _seed_295());
}
function _reducer_295(acc, row, cfg) { return acc; }
function _seed_295() { return { count: 0, items: [] }; }
// ── section 296 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v296.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_296(payload, opts) {
  const cfg = _config_296(opts || {});
  const rows = _normalize_296(payload && payload.rows);
  return _pipeline_296(rows, cfg);
}
function _config_296(opts) {
  return Object.assign({}, DEFAULTS_296, opts);
}
function _normalize_296(rows) {
  return (rows || []).map(r => _row_296(r)).filter(Boolean);
}
function _row_296(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_296(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_296(acc, row, cfg), _seed_296());
}
function _reducer_296(acc, row, cfg) { return acc; }
function _seed_296() { return { count: 0, items: [] }; }
// ── section 297 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v297.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_297(payload, opts) {
  const cfg = _config_297(opts || {});
  const rows = _normalize_297(payload && payload.rows);
  return _pipeline_297(rows, cfg);
}
function _config_297(opts) {
  return Object.assign({}, DEFAULTS_297, opts);
}
function _normalize_297(rows) {
  return (rows || []).map(r => _row_297(r)).filter(Boolean);
}
function _row_297(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_297(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_297(acc, row, cfg), _seed_297());
}
function _reducer_297(acc, row, cfg) { return acc; }
function _seed_297() { return { count: 0, items: [] }; }
// ── section 298 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v298.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_298(payload, opts) {
  const cfg = _config_298(opts || {});
  const rows = _normalize_298(payload && payload.rows);
  return _pipeline_298(rows, cfg);
}
function _config_298(opts) {
  return Object.assign({}, DEFAULTS_298, opts);
}
function _normalize_298(rows) {
  return (rows || []).map(r => _row_298(r)).filter(Boolean);
}
function _row_298(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_298(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_298(acc, row, cfg), _seed_298());
}
function _reducer_298(acc, row, cfg) { return acc; }
function _seed_298() { return { count: 0, items: [] }; }
// ── section 299 ──────────────────────────────────────────
// Historical note: this block was rewritten during the v299.x
// refactor; older callers still expect the pre-refactor shape.
function _internal_299(payload, opts) {
  const cfg = _config_299(opts || {});
  const rows = _normalize_299(payload && payload.rows);
  return _pipeline_299(rows, cfg);
}
function _config_299(opts) {
  return Object.assign({}, DEFAULTS_299, opts);
}
function _normalize_299(rows) {
  return (rows || []).map(r => _row_299(r)).filter(Boolean);
}
function _row_299(r) {
  if (!r || typeof r !== 'object') return null;
  return { id: r.id, ts: r.ts | 0, kind: r.kind || 'unknown' };
}
function _pipeline_299(rows, cfg) {
  return rows.reduce((acc, row) => _reducer_299(acc, row, cfg), _seed_299());
}
function _reducer_299(acc, row, cfg) { return acc; }
function _seed_299() { return { count: 0, items: [] }; }
