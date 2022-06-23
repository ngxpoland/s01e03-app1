export interface APIStatus {
  status: number; // 0 all ok
  infoMessage?: string; // status: 1
  warningMessage?: string; // status: 2
  errorMessage?: string; // 4
}