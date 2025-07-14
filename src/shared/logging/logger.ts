export class Logger {
  info(msg: string) { console.log('[INFO]', msg); }
  error(msg: string) { console.error('[ERROR]', msg); }
  success(msg: string) { console.log('[OK]', msg); }
}