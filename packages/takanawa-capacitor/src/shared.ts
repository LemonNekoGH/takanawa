export {
  decodeBase64ToUint8Array,
  mapSnapshot,
  normalizeTakanawaError,
  normalizeHash,
  normalizeHashKind,
  normalizeOptions,
  TakanawaError,
  TakanawaStatus,
  withTakanawaError
} from 'takanawa-js-core'
export type {
  DownloadOptions,
  DownloadPhase,
  DownloadSnapshot,
  DownloadSpeedSnapshot,
  HashConfig,
  HashKind,
  NormalizedDownloadOptions as NativeDownloadOptions,
  NormalizedDownloadSnapshot as NativeDownloadSnapshot,
  NormalizedDownloadSpeedSnapshot as NativeDownloadSpeedSnapshot,
  NormalizedHashConfig as NativeHashConfig,
  TakanawaStatusCode,
  TakanawaStatusName
} from 'takanawa-js-core'
